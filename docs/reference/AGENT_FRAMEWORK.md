# Agent Framework Documentation

## Overview

The Agent Framework is a comprehensive system for managing software development projects using Claude's agent teams approach. It provides a shared coordination mechanism, communication protocol, and execution workflow that enables multiple specialized agents to work together effectively.

## Architecture

### Core Components

```
┌─────────────────────────────────────────┐
│      Team Lead Agent (Orchestrator)     │
│  • Analyzes requirements                │
│  • Decomposes tasks                     │
│  • Spawns sub-agents                    │
│  • Monitors progress                    │
│  • Resolves blockers                    │
└────────────┬────────────────────────────┘
             │
    ┌────────┼────────┬──────────┬────────┐
    ↓        ↓        ↓          ↓        ↓
┌────────┐┌────────┐┌────────┐┌────────┐┌────────┐
│Backend ││Frontend││  QA    ││ DevOps ││  Docs  │
│ Agent  ││ Agent  ││ Agent  ││ Agent  ││ Agent  │
└────────┘└────────┘└────────┘└────────┘└────────┘
    │        │        │          │        │
    └────────┼────────┼──────────┼────────┘
             ↓
    ┌─────────────────────────┐
    │   Shared Task List      │
    │  (JSON file)            │
    │  • Task status          │
    │  • Dependencies         │
    │  • Blockers             │
    │  • Progress             │
    └─────────────────────────┘
```

### Key Files

```
~/Documents/projects/software-dev-team-product/
├── agents/
│   ├── team-lead-agent.md              # Team Lead orchestrator
│   ├── backend-agent.md                # Backend developer
│   ├── frontend-agent.md               # Frontend developer
│   ├── qa-agent.md                     # QA engineer
│   ├── devops-agent.md                 # DevOps engineer
│   ├── docs-agent.md                   # Documentation specialist
│   └── agent-framework.js              # Shared utilities
│
├── shared/
│   ├── task-list.json                  # Central task coordination
│   └── communication-log.json           # Agent communication log
│
└── sample-projects/
    └── ecommerce-platform/
        ├── PROJECT_BRIEF.md
        ├── REQUIREMENTS.md
        ├── TEAM_CONFIG.json
        └── TASK_LIST.md
```

## Agent Roles

### 1. Team Lead Agent (Orchestrator)

**Responsibilities**:
- Analyze project requirements
- Decompose work into tasks
- Spawn specialized sub-agents
- Monitor progress
- Identify and resolve blockers
- Verify quality gates

**Key Methods**:
- `analyzeRequirements()` - Understand project scope
- `decomposeTasks()` - Break work into manageable tasks
- `spawnAgents()` - Create specialized agents
- `monitorProgress()` - Track task completion
- `resolveBlockers()` - Escalate and fix blockers
- `verifyQualityGates()` - Ensure quality standards

**Communication**:
- Spawns all other agents
- Monitors shared task list
- Escalates blockers
- Provides guidance and support

---

### 2. Backend Developer Agent

**Responsibilities**:
- Design and implement APIs
- Design and manage databases
- Implement business logic
- Implement authentication/authorization
- Integrate third-party services
- Write unit tests
- Optimize performance

**Key Methods**:
- `claimTask(taskId)` - Take ownership of a task
- `updateProgress(taskId, progress)` - Report progress
- `reportBlocker(taskId, description)` - Report blocking issues
- `completeTask(taskId)` - Mark task as done

**Communication**:
- Reads shared task list
- Updates task progress
- Reports blockers
- Communicates with Frontend Agent on API contracts

---

### 3. Frontend Developer Agent

**Responsibilities**:
- Design and implement UI/UX
- Build React components
- Implement state management
- Integrate with backend APIs
- Implement styling and theming
- Write component tests
- Optimize performance

**Key Methods**:
- `claimTask(taskId)` - Take ownership of a task
- `updateProgress(taskId, progress)` - Report progress
- `reportBlocker(taskId, description)` - Report blocking issues
- `completeTask(taskId)` - Mark task as done

**Communication**:
- Reads shared task list
- Updates task progress
- Reports blockers
- Communicates with Backend Agent on API contracts

---

### 4. QA Engineer Agent

**Responsibilities**:
- Develop test strategy
- Write automated tests
- Perform manual testing
- Execute performance testing
- Perform security testing
- Manage defects
- Verify quality gates

**Key Methods**:
- `claimTask(taskId)` - Take ownership of a task
- `updateProgress(taskId, progress)` - Report progress
- `reportBlocker(taskId, description)` - Report blocking issues
- `completeTask(taskId)` - Mark task as done

**Communication**:
- Reads shared task list
- Updates task progress
- Reports blockers
- Communicates with development agents on test requirements

---

### 5. DevOps Engineer Agent

**Responsibilities**:
- Design cloud infrastructure
- Set up CI/CD pipelines
- Manage deployments
- Set up monitoring and logging
- Implement security best practices
- Optimize performance
- Manage disaster recovery

**Key Methods**:
- `claimTask(taskId)` - Take ownership of a task
- `updateProgress(taskId, progress)` - Report progress
- `reportBlocker(taskId, description)` - Report blocking issues
- `completeTask(taskId)` - Mark task as done

**Communication**:
- Reads shared task list
- Updates task progress
- Reports blockers
- Communicates with all agents on infrastructure needs

---

### 6. Documentation Agent

**Responsibilities**:
- Create API documentation
- Create user guides
- Create developer documentation
- Create operational documentation
- Document architecture
- Create release notes
- Maintain documentation

**Key Methods**:
- `claimTask(taskId)` - Take ownership of a task
- `updateProgress(taskId, progress)` - Report progress
- `reportBlocker(taskId, description)` - Report blocking issues
- `completeTask(taskId)` - Mark task as done

**Communication**:
- Reads shared task list
- Updates task progress
- Reports blockers
- Communicates with all agents on documentation needs

---

## Shared Task List

### Purpose

The shared task list is the central coordination mechanism for all agents. It provides:
- Single source of truth for project status
- Visibility into task dependencies
- Blocker tracking and escalation
- Progress tracking
- Communication log

### Structure

```json
{
  "tasks": [
    {
      "id": "TASK-001",
      "title": "Task Title",
      "description": "Task description",
      "assignee": "BACKEND_DEVELOPER",
      "status": "TODO|IN_PROGRESS|REVIEW|DONE|BLOCKED",
      "priority": "HIGH|MEDIUM|LOW",
      "estimatedHours": 8,
      "dependencies": ["TASK-002", "TASK-003"],
      "completionCriteria": [
        "Criterion 1",
        "Criterion 2"
      ],
      "blocker": {
        "description": "What's blocking",
        "reportedBy": "AGENT_ROLE",
        "reportedAt": "2026-05-26T10:00:00Z",
        "resolved": false,
        "resolution": "How it was resolved",
        "resolvedAt": "2026-05-26T11:00:00Z"
      },
      "createdAt": "2026-05-26T00:00:00Z",
      "updatedAt": "2026-05-26T10:00:00Z"
    }
  ],
  "metadata": {
    "projectName": "Project Name",
    "createdAt": "2026-05-26T00:00:00Z",
    "updatedAt": "2026-05-26T10:00:00Z"
  }
}
```

### Task States

```
TODO → IN_PROGRESS → REVIEW → DONE
  ↓         ↓          ↓
BLOCKED   BLOCKED    BLOCKED
```

**State Transitions**:
- `TODO` → `IN_PROGRESS`: Agent claims task
- `IN_PROGRESS` → `REVIEW`: Agent completes work, ready for review
- `REVIEW` → `DONE`: Review passed, task complete
- Any state → `BLOCKED`: Blocker identified
- `BLOCKED` → `IN_PROGRESS`: Blocker resolved

### Task Dependencies

Tasks can have dependencies on other tasks. An agent can only start work on a task if all dependencies are completed (status = DONE).

**Example**:
```json
{
  "id": "TASK-003",
  "title": "Authentication & Authorization",
  "dependencies": ["TASK-002"],
  "description": "Cannot start until database schema is complete"
}
```

### Blocker Management

When an agent encounters a blocking issue:

1. **Report Blocker**:
   ```json
   {
     "blocker": {
       "description": "Cannot connect to database",
       "reportedBy": "BACKEND_DEVELOPER",
       "reportedAt": "2026-05-26T10:00:00Z",
       "resolved": false
     }
   }
   ```

2. **Team Lead Escalates**: Identifies root cause and resolution

3. **Resolve Blocker**:
   ```json
   {
     "blocker": {
       "description": "Cannot connect to database",
       "reportedBy": "BACKEND_DEVELOPER",
       "reportedAt": "2026-05-26T10:00:00Z",
       "resolved": true,
       "resolution": "Database credentials updated",
       "resolvedAt": "2026-05-26T11:00:00Z"
     }
   }
   ```

4. **Resume Work**: Agent continues with task

## Communication Protocol

### Primary Communication: Shared Task List

All agents communicate through the shared task list by:
- Claiming tasks
- Updating progress
- Reporting blockers
- Completing tasks
- Logging actions

### Secondary Communication: Direct Messages

Agents can communicate directly for:
- Clarifications on task requirements
- Coordination on dependencies
- Sharing information
- Asking for help

### Escalation: Team Lead Coordination

When blockers cannot be resolved by agents:
1. Agent reports blocker to task list
2. Team Lead identifies issue
3. Team Lead coordinates resolution
4. Team Lead updates task list
5. Agent resumes work

### Communication Log

All agent actions are logged in `communication-log.json`:

```json
[
  {
    "timestamp": "2026-05-26T10:00:00Z",
    "agent": "BACKEND_DEVELOPER",
    "action": "CLAIM_TASK",
    "details": {
      "taskId": "TASK-001",
      "taskTitle": "API Specification & Design"
    }
  },
  {
    "timestamp": "2026-05-26T12:00:00Z",
    "agent": "BACKEND_DEVELOPER",
    "action": "UPDATE_PROGRESS",
    "details": {
      "taskId": "TASK-001",
      "progress": 50,
      "notes": "API endpoints defined, working on schemas"
    }
  }
]
```

## Execution Workflow

### Phase 1: Project Analysis (Day 1)

**Team Lead**:
1. Review requirements
2. Analyze architecture
3. Decompose tasks
4. Create task list

**Output**: Comprehensive task list with dependencies

### Phase 2: Team Spawning (Day 1)

**Team Lead**:
1. Spawn Backend Developer Agent
2. Spawn Frontend Developer Agent
3. Spawn QA Engineer Agent
4. Spawn DevOps Engineer Agent
5. Spawn Documentation Agent
6. Conduct kickoff

**Output**: All agents ready to work

### Phase 3: Execution (Days 2+)

**All Agents**:
1. Check task list for assigned tasks
2. Claim next available task
3. Execute work
4. Update progress every 2 hours
5. Report blockers immediately
6. Complete task when done

**Team Lead**:
1. Monitor progress every 4 hours
2. Identify blockers
3. Escalate and resolve blockers
4. Adjust timeline if needed
5. Support agents

**Output**: Tasks completed on schedule

### Phase 4: Integration & Testing (Week 2-3)

**QA Agent**:
1. Execute integration tests
2. Identify issues
3. Report defects

**All Agents**:
1. Fix defects
2. Verify fixes
3. Complete testing

**Team Lead**:
1. Verify quality gates
2. Approve for next phase

**Output**: Quality verified

### Phase 5: Optimization & Refinement (Week 3-4)

**All Agents**:
1. Optimize performance
2. Harden security
3. Improve documentation
4. Fix remaining issues

**Team Lead**:
1. Monitor progress
2. Verify quality gates
3. Approve for deployment

**Output**: Ready for deployment

### Phase 6: Deployment & Launch (Week 4)

**DevOps Agent**:
1. Deploy to staging
2. Execute smoke tests
3. Deploy to production
4. Monitor launch

**All Agents**:
1. Support launch
2. Monitor for issues
3. Fix critical issues

**Team Lead**:
1. Coordinate launch
2. Monitor progress
3. Support team

**Output**: Live in production

## Agent Framework API

### Core Methods

#### Task Management

```javascript
// Load task list
const taskList = framework.loadTaskList();

// Get specific task
const task = framework.getTask('TASK-001');

// Get tasks for agent
const tasks = framework.getTasksForAgent('BACKEND_DEVELOPER');

// Get tasks by status
const inProgress = framework.getTasksByStatus('IN_PROGRESS');

// Claim task
const result = framework.claimTask('TASK-001', 'BACKEND_DEVELOPER');

// Update progress
const result = framework.updateTaskProgress('TASK-001', 50, 'Halfway done');

// Complete task
const result = framework.completeTask('TASK-001', 'BACKEND_DEVELOPER', 'Completed successfully');
```

#### Blocker Management

```javascript
// Report blocker
const result = framework.reportBlocker('TASK-001', 'BACKEND_DEVELOPER', 'Database connection failed');

// Get all blockers
const blockers = framework.getBlockers();

// Resolve blocker
const result = framework.resolveBlocker('TASK-001', 'Database credentials updated');
```

#### Dependency Management

```javascript
// Get task dependencies
const dependencies = framework.getTaskDependencies('TASK-003');

// Check if dependencies are met
const met = framework.areDependenciesMet('TASK-003');
```

#### Progress Tracking

```javascript
// Get project progress
const progress = framework.getProjectProgress();
// Returns: { total: 38, done: 5, inProgress: 3, blocked: 1, todo: 29, percentComplete: 13 }

// Get team status
const status = framework.getTeamStatus();
// Returns: { progress, blockers, tasksByAgent, timestamp }
```

#### Communication

```javascript
// Log communication
framework.logCommunication('BACKEND_DEVELOPER', 'CLAIM_TASK', { taskId: 'TASK-001' });

// Get communication log
const log = framework.getCommunicationLog();

// Get agent communication
const agentLog = framework.getCommunicationLog('BACKEND_DEVELOPER');
```

## Best Practices

### For Team Lead

1. **Clear Task Decomposition**
   - Break work into 4-8 hour tasks
   - Identify all dependencies
   - Assign to appropriate agents
   - Set clear completion criteria

2. **Regular Monitoring**
   - Check progress every 4 hours
   - Identify blockers early
   - Escalate immediately
   - Adjust timeline if needed

3. **Blocker Resolution**
   - Respond to blockers within 1 hour
   - Identify root cause
   - Coordinate resolution
   - Verify fix

4. **Team Support**
   - Provide guidance
   - Remove obstacles
   - Celebrate progress
   - Maintain morale

### For All Agents

1. **Task Claiming**
   - Check task list regularly
   - Verify dependencies are met
   - Claim task immediately
   - Begin work promptly

2. **Progress Tracking**
   - Update progress every 2 hours
   - Be honest about blockers
   - Communicate challenges
   - Ask for help when needed

3. **Blocker Reporting**
   - Report blockers immediately
   - Provide clear description
   - Suggest potential solutions
   - Wait for resolution

4. **Task Completion**
   - Verify completion criteria
   - Document completion notes
   - Update task list
   - Move to next task

### For Communication

1. **Use Shared Task List**
   - Primary communication mechanism
   - Visible to all agents
   - Tracked and logged
   - Searchable history

2. **Direct Messages**
   - For clarifications
   - For coordination
   - For quick questions
   - For sharing information

3. **Escalation**
   - Report blockers to task list
   - Team Lead coordinates
   - Document resolution
   - Resume work

## Troubleshooting

### Issue: Task Dependencies Not Met

**Problem**: Agent cannot start task because dependencies are not complete.

**Solution**:
1. Check task list for dependency status
2. Identify which dependencies are blocking
3. Communicate with agents working on dependencies
4. Escalate to Team Lead if needed
5. Wait for dependencies to complete

### Issue: Blocker Not Resolved

**Problem**: Agent is blocked and cannot proceed.

**Solution**:
1. Report blocker to task list with clear description
2. Suggest potential solutions
3. Escalate to Team Lead
4. Team Lead investigates and resolves
5. Resume work when blocker is resolved

### Issue: Task Taking Longer Than Estimated

**Problem**: Task is taking more time than estimated.

**Solution**:
1. Update progress with realistic estimate
2. Identify blockers or challenges
3. Communicate with Team Lead
4. Adjust timeline if needed
5. Continue work

### Issue: Agent Not Responding

**Problem**: Agent is not updating progress or responding.

**Solution**:
1. Check task list for last update
2. Send direct message to agent
3. Escalate to Team Lead if no response
4. Team Lead investigates
5. Reassign task if needed

## Integration with Claude Code

### Spawning Agents

```
SPAWN_AGENT: BACKEND_DEVELOPER
SPAWN_AGENT: FRONTEND_DEVELOPER
SPAWN_AGENT: QA_ENGINEER
SPAWN_AGENT: DEVOPS_ENGINEER
SPAWN_AGENT: DOCUMENTATION_SPECIALIST
```

### Agent Context

Each agent receives:
1. Role-specific prompt (e.g., backend-agent.md)
2. Project context (requirements, architecture)
3. Task list (shared/task-list.json)
4. Communication log (shared/communication-log.json)
5. Framework utilities (agent-framework.js)

### Agent Execution

Each agent:
1. Reads shared task list
2. Claims available task
3. Executes work
4. Updates progress
5. Reports blockers
6. Completes task
7. Moves to next task

## Metrics & Monitoring

### Key Metrics

**Velocity**:
- Tasks completed per day
- Actual vs. estimated hours
- Trend analysis

**Quality**:
- Test coverage percentage
- Defect density
- Critical/high bugs

**Timeline**:
- Days remaining
- Tasks on track
- Critical path status

**Blockers**:
- Number of blockers
- Average resolution time
- Blocker types

### Dashboards

**Team Lead Dashboard**:
- Project progress (% complete)
- Blockers (count, types, age)
- Velocity (tasks/day)
- Timeline (on track, at risk, delayed)

**Agent Dashboard**:
- Assigned tasks
- Current task progress
- Blockers
- Completed tasks

## Conclusion

The Agent Framework provides a comprehensive system for managing software development projects using Claude's agent teams approach. By using a shared task list, clear communication protocol, and defined execution workflow, teams can effectively coordinate work and deliver projects successfully.

For more information, see:
- [Team Lead Agent](./agents/team-lead-agent.md)
- [Backend Agent](./agents/backend-agent.md)
- [Frontend Agent](./agents/frontend-agent.md)
- [QA Agent](./agents/qa-agent.md)
- [DevOps Agent](./agents/devops-agent.md)
- [Documentation Agent](./agents/docs-agent.md)
- [Sample Project](./sample-projects/ecommerce-platform/)

