# Agent Execution Guide

## Quick Start

### Prerequisites

1. **Claude Code Access**: You need access to Claude Code with agent spawning capabilities
2. **Project Files**: All agent files and shared resources must be in place
3. **Project Context**: You should have read the project requirements and architecture
4. **Team Configuration**: You should understand the team structure and roles

### Step 1: Prepare Project Context

Before spawning agents, prepare your project:

1. **Create Project Brief**
   - Define project goals
   - Outline success criteria
   - Document constraints
   - Identify risks

2. **Create Requirements Document**
   - List functional requirements
   - List non-functional requirements
   - Define acceptance criteria
   - Document technical constraints

3. **Create Architecture Document**
   - Design system architecture
   - Define technology stack
   - Plan data models
   - Plan API design

4. **Create Team Configuration**
   - Define team structure
   - Assign roles
   - Define quality gates
   - Plan resource allocation

### Step 2: Prepare Task List

Create a comprehensive task list:

1. **Decompose Work**
   - Break features into tasks
   - Identify dependencies
   - Assign to agents
   - Prioritize work

2. **Define Completion Criteria**
   - What does "done" mean?
   - What needs to be tested?
   - What documentation is needed?
   - What quality standards apply?

3. **Identify Dependencies**
   - Which tasks depend on others?
   - What is the critical path?
   - What can be parallelized?
   - What are the bottlenecks?

4. **Set Priorities**
   - What is most critical?
   - What is highest risk?
   - What is most complex?
   - What should be done first?

### Step 3: Spawn Team Lead Agent

The Team Lead Agent orchestrates the entire project:

```
SPAWN_AGENT: TEAM_LEAD

Context:
- Read PROJECT_BRIEF.md
- Read REQUIREMENTS.md
- Read ARCHITECTURE.md
- Review TEAM_CONFIG.json
- Review TASK_LIST.json
- Use agent-framework.js for task management
```

**Team Lead Responsibilities**:
1. Analyze project requirements
2. Verify task decomposition
3. Identify dependencies
4. Create/update task list
5. Spawn specialized agents
6. Monitor progress
7. Resolve blockers

### Step 4: Spawn Specialized Agents

Once Team Lead is ready, spawn specialized agents:

```
SPAWN_AGENT: BACKEND_DEVELOPER
SPAWN_AGENT: FRONTEND_DEVELOPER
SPAWN_AGENT: QA_ENGINEER
SPAWN_AGENT: DEVOPS_ENGINEER
SPAWN_AGENT: DOCUMENTATION_SPECIALIST
```

**Each Agent**:
1. Reads role-specific prompt
2. Reviews project context
3. Checks task list
4. Claims available tasks
5. Begins work

### Step 5: Monitor Progress (Ongoing)

Team Lead monitors progress:

1. **Regularly**:
   - Check task list for updates
   - Identify blockers
   - Verify progress
   - Adjust priorities if needed

2. **Daily**:
   - Review completed tasks
   - Check progress
   - Identify risks
   - Support team

3. **Weekly**:
   - Review overall progress
   - Assess quality
   - Plan next week
   - Celebrate milestones

## Detailed Execution Steps

### For Team Lead Agent

#### Phase 1: Project Analysis

**Step 1: Review Requirements**
```
1. Read PROJECT_BRIEF.md
2. Read REQUIREMENTS.md
3. Understand project scope
4. Identify key features
5. Note any ambiguities
```

**Step 2: Analyze Architecture**
```
1. Review ARCHITECTURE.md
2. Understand technology stack
3. Identify critical components
4. Plan integration points
5. Document architecture decisions
```

**Step 3: Decompose Tasks**
```
1. Break features into manageable tasks
2. Identify dependencies
3. Map critical path
4. Assign to agents
5. Estimate total effort
```

**Step 4: Create Task List**
```
1. Document all tasks
2. Define completion criteria
3. Estimate effort
4. Set priorities
5. Save to shared/task-list.json
```

#### Phase 2: Team Spawning

**Step 1: Spawn Sub-Agents**
```
SPAWN_AGENT: BACKEND_DEVELOPER
SPAWN_AGENT: FRONTEND_DEVELOPER
SPAWN_AGENT: QA_ENGINEER
SPAWN_AGENT: DEVOPS_ENGINEER
SPAWN_AGENT: DOCUMENTATION_SPECIALIST
```

**Step 2: Conduct Kickoff**
```
1. Brief all agents on project
2. Review task list and dependencies
3. Clarify roles and responsibilities
4. Answer questions
5. Set expectations
```

#### Phase 3: Execution Monitoring

**Step 1: Monitor Progress**
```
1. Load shared/task-list.json
2. Check for task updates
3. Verify progress
4. Identify blockers
5. Update timeline if needed
```

**Step 2: Resolve Blockers (As Needed)**
```
1. Identify blocking issues
2. Escalate to appropriate agent
3. Facilitate resolution
4. Document resolution
5. Verify fix
```

**Step 3: Facilitate Communication (As Needed)**
```
1. Coordinate between agents
2. Clarify dependencies
3. Share learnings
4. Prevent miscommunication
5. Support collaboration
```

**Step 4: Track Velocity (Daily)**
```
1. Count completed tasks
2. Calculate velocity
3. Adjust timeline if needed
4. Report progress
5. Celebrate milestones
```

### For Backend Developer Agent

#### Daily Workflow

**Start of Work Session**
```
1. Check shared/task-list.json
2. Find TODO tasks assigned to BACKEND_DEVELOPER
3. Verify dependencies are met
4. Claim next task
5. Update status to IN_PROGRESS
```

**During Work Session**
```
1. Execute assigned task
2. Update progress regularly
3. Report blockers immediately
4. Communicate with other agents
5. Document work
```

**End of Work Session**
```
1. Complete task if finished
2. Update task list with final status
3. Document completion notes
4. Prepare for next session
5. Commit code changes
```

#### Task Execution Process

**Step 1: Claim Task**
```javascript
const result = framework.claimTask('TASK-001', 'BACKEND_DEVELOPER');
// Task status changes to IN_PROGRESS
// Task assignee set to BACKEND_DEVELOPER
```

**Step 2: Execute Work**
```
1. Review task requirements
2. Review completion criteria
3. Review dependencies
4. Begin implementation
5. Write code
6. Write tests
7. Document code
```

**Step 3: Update Progress**
```javascript
framework.updateTaskProgress('TASK-001', 50, 'Halfway done, working on schemas');
// Regularly
```

**Step 4: Report Blockers**
```javascript
framework.reportBlocker('TASK-001', 'BACKEND_DEVELOPER', 'Cannot connect to database');
// Task status changes to BLOCKED
// Team Lead is notified
```

**Step 5: Complete Task**
```javascript
framework.completeTask('TASK-001', 'BACKEND_DEVELOPER', 'API specification complete, ready for review');
// Task status changes to DONE
// Task marked as complete
```

### For Frontend Developer Agent

#### Daily Workflow

**Start of Work Session**
```
1. Check shared/task-list.json
2. Find TODO tasks assigned to FRONTEND_DEVELOPER
3. Verify dependencies are met
4. Claim next task
5. Update status to IN_PROGRESS
```

**During Work Session**
```
1. Execute assigned task
2. Update progress regularly
3. Report blockers immediately
4. Communicate with Backend Agent on API contracts
5. Document work
```

**End of Work Session**
```
1. Complete task if finished
2. Update task list with final status
3. Document completion notes
4. Prepare for next session
5. Commit code changes
```

### For QA Engineer Agent

#### Daily Workflow

**Start of Work Session**
```
1. Check shared/task-list.json
2. Find TODO tasks assigned to QA_ENGINEER
3. Verify dependencies are met
4. Claim next task
5. Update status to IN_PROGRESS
```

**During Work Session**
```
1. Execute assigned task
2. Update progress regularly
3. Report blockers immediately
4. Communicate with development agents
5. Document test results
```

**End of Work Session**
```
1. Complete task if finished
2. Update task list with final status
3. Document completion notes
4. Prepare for next session
5. Commit test code
```

### For DevOps Engineer Agent

#### Daily Workflow

**Start of Work Session**
```
1. Check shared/task-list.json
2. Find TODO tasks assigned to DEVOPS_ENGINEER
3. Verify dependencies are met
4. Claim next task
5. Update status to IN_PROGRESS
```

**During Work Session**
```
1. Execute assigned task
2. Update progress regularly
3. Report blockers immediately
4. Communicate with all agents on infrastructure
5. Document infrastructure changes
```

**End of Work Session**
```
1. Complete task if finished
2. Update task list with final status
3. Document completion notes
4. Prepare for next session
5. Commit infrastructure code
```

### For Documentation Agent

#### Daily Workflow

**Start of Work Session**
```
1. Check shared/task-list.json
2. Find TODO tasks assigned to DOCUMENTATION_SPECIALIST
3. Verify dependencies are met
4. Claim next task
5. Update status to IN_PROGRESS
```

**During Work Session**
```
1. Execute assigned task
2. Update progress regularly
3. Report blockers immediately
4. Communicate with all agents on documentation
5. Document findings
```

**End of Work Session**
```
1. Complete task if finished
2. Update task list with final status
3. Document completion notes
4. Prepare for next session
5. Commit documentation
```

## Communication Patterns

### Task List Updates

**Frequency**: Regular updates from agents, consistent monitoring by Team Lead

**Format**: JSON task list with status updates

**Content**:
- Task status
- Progress percentage
- Blockers
- Completion notes

### Status Reporting

**Daily Standup**: Via task list updates (async)

**Periodic Review**: Team Lead reviews progress

**Blocker Escalation**: Immediate

**Risk Reporting**: Daily

### Inter-Agent Communication

**Primary**: Shared task list

**Secondary**: Direct messages for clarifications

**Escalation**: Team Lead coordination

**Documentation**: Decision log

## Handling Common Scenarios

### Scenario 1: Task Dependencies Not Met

**Situation**: Agent wants to claim a task but dependencies are not complete.

**Solution**:
1. Check task list for dependency status
2. Identify which dependencies are blocking
3. Communicate with agents working on dependencies
4. Wait for dependencies to complete
5. Claim task when dependencies are done

### Scenario 2: Blocker Encountered

**Situation**: Agent encounters a blocking issue and cannot proceed.

**Solution**:
1. Report blocker to task list with clear description
2. Suggest potential solutions
3. Escalate to Team Lead
4. Team Lead investigates and resolves
5. Resume work when blocker is resolved

### Scenario 3: Task Taking Longer Than Estimated

**Situation**: Task is taking more time than estimated.

**Solution**:
1. Update progress with realistic estimate
2. Identify blockers or challenges
3. Communicate with Team Lead
4. Adjust timeline if needed
5. Continue work

### Scenario 4: Quality Issues Discovered

**Situation**: QA discovers quality issues in completed work.

**Solution**:
1. QA reports issues to task list
2. Development agent reviews issues
3. Development agent fixes issues
4. QA verifies fixes
5. Task marked as complete

### Scenario 5: Scope Creep

**Situation**: New requirements emerge during development.

**Solution**:
1. Document new requirements
2. Escalate to Team Lead
3. Team Lead assesses impact
4. Create new tasks if needed
5. Adjust timeline if needed

## Monitoring & Metrics

### Key Metrics to Track

**Velocity**:
- Tasks completed
- Progress rate
- Trend analysis

**Quality**:
- Test coverage percentage
- Defect density
- Critical/high bugs

**Timeline**:
- Remaining work
- Tasks on track
- Critical path status

**Blockers**:
- Number of blockers
- Average resolution time
- Blocker types

### Monitoring Checklist

**Regularly**:
- [ ] Check task list for updates
- [ ] Verify progress
- [ ] Identify blockers
- [ ] Escalate if needed

**Daily**:
- [ ] Review completed tasks
- [ ] Calculate velocity
- [ ] Check quality metrics
- [ ] Identify risks
- [ ] Support team

**Weekly**:
- [ ] Review progress against timeline
- [ ] Assess quality
- [ ] Plan next period
- [ ] Celebrate milestones
- [ ] Adjust timeline if needed

## Troubleshooting

### Issue: Agent Not Responding

**Problem**: Agent is not updating progress or responding.

**Solution**:
1. Check task list for last update
2. Send direct message to agent
3. Escalate to Team Lead if no response
4. Team Lead investigates
5. Reassign task if needed

### Issue: Blocker Not Resolved

**Problem**: Agent is blocked and cannot proceed.

**Solution**:
1. Verify blocker is documented
2. Escalate to Team Lead
3. Team Lead investigates
4. Team Lead coordinates resolution
5. Resume work when resolved

### Issue: Quality Issues

**Problem**: Quality issues are discovered late in project.

**Solution**:
1. QA reports issues immediately
2. Development team fixes issues
3. Increase testing frequency
4. Implement quality gates
5. Prevent similar issues

### Issue: Timeline Slipping

**Problem**: Project is falling behind schedule.

**Solution**:
1. Identify root causes
2. Assess impact
3. Adjust timeline if needed
4. Increase resources if possible
5. Reduce scope if necessary

## Best Practices

### For Team Lead

1. **Clear Communication**
   - Provide clear task descriptions
   - Define completion criteria
   - Identify dependencies
   - Set expectations

2. **Regular Monitoring**
   - Check progress every 4 hours
   - Identify blockers early
   - Escalate immediately
   - Adjust timeline as needed

3. **Blocker Resolution**
   - Respond within 1 hour
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

## Conclusion

This execution guide provides step-by-step instructions for running the agent framework. By following these steps and best practices, you can effectively manage software development projects using Claude's agent teams approach.

For more information, see:
- [Agent Framework Documentation](./AGENT_FRAMEWORK.md)
- [Team Lead Agent](./agents/team-lead-agent.md)
- [Sample Project](./sample-projects/ecommerce-platform/)

