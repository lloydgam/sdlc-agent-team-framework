/**
 * Software Development Team - Agent Framework
 *
 * Shared utilities for all agents to coordinate work through a shared task list
 * and communication protocol.
 */

const fs = require('fs');
const path = require('path');

class AgentFramework {
  constructor(projectPath) {
    this.projectPath = projectPath;
    this.sharedPath = path.join(projectPath, 'shared');
    this.taskListPath = path.join(this.sharedPath, 'task-list.json');
    this.communicationLogPath = path.join(this.sharedPath, 'communication-log.json');

    // Ensure shared directory exists
    if (!fs.existsSync(this.sharedPath)) {
      fs.mkdirSync(this.sharedPath, { recursive: true });
    }
  }

  /**
   * Load the shared task list
   */
  loadTaskList() {
    try {
      if (fs.existsSync(this.taskListPath)) {
        const data = fs.readFileSync(this.taskListPath, 'utf8');
        return JSON.parse(data);
      }
      return { tasks: [], metadata: {} };
    } catch (error) {
      console.error('Error loading task list:', error);
      return { tasks: [], metadata: {} };
    }
  }

  /**
   * Save the task list
   */
  saveTaskList(taskList) {
    try {
      fs.writeFileSync(this.taskListPath, JSON.stringify(taskList, null, 2));
      return true;
    } catch (error) {
      console.error('Error saving task list:', error);
      return false;
    }
  }

  /**
   * Get a specific task by ID
   */
  getTask(taskId) {
    const taskList = this.loadTaskList();
    return taskList.tasks.find(t => t.id === taskId);
  }

  /**
   * Get all tasks for a specific agent
   */
  getTasksForAgent(agentRole) {
    const taskList = this.loadTaskList();
    return taskList.tasks.filter(t => t.assignee === agentRole);
  }

  /**
   * Get tasks by status
   */
  getTasksByStatus(status) {
    const taskList = this.loadTaskList();
    return taskList.tasks.filter(t => t.status === status);
  }

  /**
   * Claim a task (agent takes ownership)
   */
  claimTask(taskId, agentRole) {
    const taskList = this.loadTaskList();
    const task = taskList.tasks.find(t => t.id === taskId);

    if (!task) {
      return { success: false, message: 'Task not found' };
    }

    if (task.status !== 'TODO') {
      return { success: false, message: `Task is already ${task.status}` };
    }

    task.status = 'IN_PROGRESS';
    task.assignee = agentRole;
    task.claimedAt = new Date().toISOString();

    this.saveTaskList(taskList);
    this.logCommunication(agentRole, 'CLAIM_TASK', { taskId, taskTitle: task.title });

    return { success: true, task };
  }

  /**
   * Update task progress
   */
  updateTaskProgress(taskId, progress, notes = '') {
    const taskList = this.loadTaskList();
    const task = taskList.tasks.find(t => t.id === taskId);

    if (!task) {
      return { success: false, message: 'Task not found' };
    }

    task.progress = progress;
    if (notes) task.notes = notes;
    task.updatedAt = new Date().toISOString();

    this.saveTaskList(taskList);
    this.logCommunication(task.assignee, 'UPDATE_PROGRESS', { taskId, progress, notes });

    return { success: true, task };
  }

  /**
   * Complete a task
   */
  completeTask(taskId, agentRole, completionNotes = '') {
    const taskList = this.loadTaskList();
    const task = taskList.tasks.find(t => t.id === taskId);

    if (!task) {
      return { success: false, message: 'Task not found' };
    }

    if (task.assignee !== agentRole) {
      return { success: false, message: 'Only assigned agent can complete task' };
    }

    task.status = 'DONE';
    task.completedAt = new Date().toISOString();
    if (completionNotes) task.completionNotes = completionNotes;

    this.saveTaskList(taskList);
    this.logCommunication(agentRole, 'COMPLETE_TASK', { taskId, taskTitle: task.title });

    return { success: true, task };
  }

  /**
   * Report a blocker on a task
   */
  reportBlocker(taskId, agentRole, blockerDescription) {
    const taskList = this.loadTaskList();
    const task = taskList.tasks.find(t => t.id === taskId);

    if (!task) {
      return { success: false, message: 'Task not found' };
    }

    task.status = 'BLOCKED';
    task.blocker = {
      reportedBy: agentRole,
      description: blockerDescription,
      reportedAt: new Date().toISOString(),
      resolved: false
    };

    this.saveTaskList(taskList);
    this.logCommunication(agentRole, 'REPORT_BLOCKER', { taskId, blocker: blockerDescription });

    return { success: true, task };
  }

  /**
   * Resolve a blocker
   */
  resolveBlocker(taskId, resolution) {
    const taskList = this.loadTaskList();
    const task = taskList.tasks.find(t => t.id === taskId);

    if (!task || !task.blocker) {
      return { success: false, message: 'Task or blocker not found' };
    }

    task.blocker.resolved = true;
    task.blocker.resolution = resolution;
    task.blocker.resolvedAt = new Date().toISOString();
    task.status = 'IN_PROGRESS';

    this.saveTaskList(taskList);
    this.logCommunication('TEAM_LEAD', 'RESOLVE_BLOCKER', { taskId, resolution });

    return { success: true, task };
  }

  /**
   * Get all blockers
   */
  getBlockers() {
    const taskList = this.loadTaskList();
    return taskList.tasks
      .filter(t => t.blocker && !t.blocker.resolved)
      .map(t => ({
        taskId: t.id,
        taskTitle: t.title,
        blocker: t.blocker
      }));
  }

  /**
   * Get task dependencies
   */
  getTaskDependencies(taskId) {
    const taskList = this.loadTaskList();
    const task = taskList.tasks.find(t => t.id === taskId);

    if (!task || !task.dependencies) {
      return [];
    }

    return task.dependencies.map(depId =>
      taskList.tasks.find(t => t.id === depId)
    ).filter(t => t);
  }

  /**
   * Check if task dependencies are met
   */
  areDependenciesMet(taskId) {
    const dependencies = this.getTaskDependencies(taskId);
    return dependencies.every(dep => dep.status === 'DONE');
  }

  /**
   * Get project progress
   */
  getProjectProgress() {
    const taskList = this.loadTaskList();
    const tasks = taskList.tasks;

    const stats = {
      total: tasks.length,
      done: tasks.filter(t => t.status === 'DONE').length,
      inProgress: tasks.filter(t => t.status === 'IN_PROGRESS').length,
      blocked: tasks.filter(t => t.status === 'BLOCKED').length,
      todo: tasks.filter(t => t.status === 'TODO').length,
      percentComplete: 0
    };

    stats.percentComplete = Math.round((stats.done / stats.total) * 100);

    return stats;
  }

  /**
   * Log communication between agents
   */
  logCommunication(agentRole, action, details) {
    try {
      let log = [];
      if (fs.existsSync(this.communicationLogPath)) {
        const data = fs.readFileSync(this.communicationLogPath, 'utf8');
        log = JSON.parse(data);
      }

      log.push({
        timestamp: new Date().toISOString(),
        agent: agentRole,
        action,
        details
      });

      fs.writeFileSync(this.communicationLogPath, JSON.stringify(log, null, 2));
    } catch (error) {
      console.error('Error logging communication:', error);
    }
  }

  /**
   * Get communication log
   */
  getCommunicationLog(agentRole = null) {
    try {
      if (fs.existsSync(this.communicationLogPath)) {
        const data = fs.readFileSync(this.communicationLogPath, 'utf8');
        let log = JSON.parse(data);

        if (agentRole) {
          log = log.filter(entry => entry.agent === agentRole);
        }

        return log;
      }
      return [];
    } catch (error) {
      console.error('Error reading communication log:', error);
      return [];
    }
  }

  /**
   * Get team status summary
   */
  getTeamStatus() {
    const taskList = this.loadTaskList();
    const tasks = taskList.tasks;
    const blockers = this.getBlockers();
    const progress = this.getProjectProgress();

    // Group tasks by agent
    const tasksByAgent = {};
    tasks.forEach(task => {
      if (!tasksByAgent[task.assignee]) {
        tasksByAgent[task.assignee] = [];
      }
      tasksByAgent[task.assignee].push(task);
    });

    return {
      progress,
      blockers,
      tasksByAgent,
      timestamp: new Date().toISOString()
    };
  }

  /**
   * Initialize task list from template
   */
  initializeTaskList(tasks, metadata = {}) {
    const taskList = {
      tasks: tasks.map((task, index) => ({
        id: task.id || `TASK-${String(index + 1).padStart(3, '0')}`,
        title: task.title,
        description: task.description || '',
        assignee: task.assignee || 'UNASSIGNED',
        status: task.status || 'TODO',
        priority: task.priority || 'MEDIUM',
        estimatedHours: task.estimatedHours || 0,
        dependencies: task.dependencies || [],
        completionCriteria: task.completionCriteria || [],
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      })),
      metadata: {
        projectName: metadata.projectName || 'Unnamed Project',
        createdAt: new Date().toISOString(),
        ...metadata
      }
    };

    this.saveTaskList(taskList);
    return taskList;
  }
}

module.exports = AgentFramework;
