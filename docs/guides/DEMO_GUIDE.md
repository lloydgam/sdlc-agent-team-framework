# Agent Teams Demo Guide

## Welcome! 👋

This guide shows you how to use the **Software Development Team Agent Framework** to manage your projects using Claude's agent teams approach. Whether you're starting a new project or improving an existing one, this framework will help you coordinate work across specialized agents.

---

## What Is This Framework?

The **Agent Framework** is a system that lets you:

✅ **Spawn specialized agents** (Backend, Frontend, QA, DevOps, Documentation)
✅ **Coordinate work** through a shared task list
✅ **Track progress** in real-time
✅ **Identify and resolve blockers** quickly
✅ **Manage dependencies** between tasks
✅ **Maintain team communication** asynchronously

Think of it as having a **Team Lead orchestrator** who manages 5 specialized agents working in parallel on different aspects of your project.

---

## Quick Demo

### The Architecture

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

### How It Works

1. **Team Lead** analyzes your project and breaks it into tasks
2. **Team Lead** spawns 5 specialized agents
3. **Each agent** claims tasks from the shared list
4. **Agents** work in parallel, updating progress
5. **Team Lead** monitors and resolves blockers
6. **All agents** coordinate through the shared task list

---

## Getting Started

### Step 1: Understand Your Project

Before using the framework, you need:

**Project Brief**:
- What are you building?
- Who are the users?
- What are the success criteria?
- What are the key milestones?

**Requirements**:
- What features do you need?
- What are the constraints?
- What's the tech stack?
- What are the quality standards?

**Architecture**:
- How will the system be designed?
- What are the main components?
- How do they interact?
- What are the data flows?

### Step 2: Prepare Your Task List

Break your project into tasks:

**For each task, define**:
- Task ID (TASK-001, TASK-002, etc.)
- Title (clear, specific)
- Description (what needs to be done)
- Assignee (which agent)
- Dependencies (what tasks must be done first)
- Completion criteria (how do you know it's done?)

**Example**:
```json
{
  "id": "TASK-001",
  "title": "API Specification & Design",
  "description": "Design comprehensive API specification",
  "assignee": "BACKEND_DEVELOPER",
  "dependencies": [],
  "completionCriteria": [
    "API endpoints defined",
    "Request/response schemas documented",
    "Error handling strategy documented"
  ]
}
```

### Step 3: Spawn Team Lead Agent

In Claude Code, run:

```
SPAWN_AGENT: TEAM_LEAD

Context:
- Read PROJECT_BRIEF.md
- Read REQUIREMENTS.md
- Review TASK_LIST.json
- Use agent-framework.js for task management
```

**Team Lead will**:
1. Analyze your project
2. Verify task decomposition
3. Identify dependencies
4. Create/update task list
5. Prepare to spawn specialized agents

---

## Full Demo Walkthrough

### Phase 1: Project Setup

#### Create Your Project Files

**1. PROJECT_BRIEF.md**
```markdown
# Project Brief: [Your Project Name]

## Overview
[What are you building?]

## Goals
- Goal 1
- Goal 2
- Goal 3

## Success Criteria
- Criterion 1
- Criterion 2
- Criterion 3

## Scope
[What's the scope of work?]

## Team
[Who's involved?]
```

**2. REQUIREMENTS.md**
```markdown
# Requirements

## Functional Requirements
1. [Feature 1]
2. [Feature 2]
3. [Feature 3]

## Non-Functional Requirements
- Performance: [targets]
- Security: [requirements]
- Scalability: [targets]

## Technical Constraints
- Tech stack: [technologies]
- Platforms: [where it runs]
- Integrations: [external systems]
```

**3. TASK_LIST.json**
```json
{
  "tasks": [
    {
      "id": "TASK-001",
      "title": "Task Title",
      "description": "Task description",
      "assignee": "BACKEND_DEVELOPER",
      "status": "TODO",
      "priority": "HIGH",
      "dependencies": [],
      "completionCriteria": ["Criterion 1", "Criterion 2"]
    }
  ]
}
```

#### Organize Your Files

```
your-project/
├── PROJECT_BRIEF.md
├── REQUIREMENTS.md
├── TASK_LIST.json
├── agents/
│   ├── team-lead-agent.md
│   ├── backend-agent.md
│   ├── frontend-agent.md
│   ├── qa-agent.md
│   ├── devops-agent.md
│   ├── docs-agent.md
│   └── agent-framework.js
└── shared/
    ├── task-list.json
    └── communication-log.json
```

### Phase 2: Spawn Team Lead

**In Claude Code**:

```
SPAWN_AGENT: TEAM_LEAD

Context:
- Read PROJECT_BRIEF.md
- Read REQUIREMENTS.md
- Review TASK_LIST.json
- Use agent-framework.js for task management
```

**Team Lead will**:
1. ✅ Analyze your project requirements
2. ✅ Verify task decomposition
3. ✅ Identify task dependencies
4. ✅ Create comprehensive task list
5. ✅ Prepare to spawn specialized agents

**What you'll see**:
- Team Lead reviews your project
- Team Lead creates/updates task list
- Team Lead identifies critical path
- Team Lead prepares for agent spawning

### Phase 3: Spawn Specialized Agents

Once Team Lead is ready, spawn the specialized agents:

```
SPAWN_AGENT: BACKEND_DEVELOPER
SPAWN_AGENT: FRONTEND_DEVELOPER
SPAWN_AGENT: QA_ENGINEER
SPAWN_AGENT: DEVOPS_ENGINEER
SPAWN_AGENT: DOCUMENTATION_SPECIALIST
```

**Each agent will**:
1. ✅ Read their role-specific prompt
2. ✅ Review project context
3. ✅ Check task list for assigned tasks
4. ✅ Claim available tasks
5. ✅ Begin work

**What you'll see**:
- Each agent reviews their responsibilities
- Each agent claims tasks
- Each agent begins work
- Task list updates with progress

### Phase 4: Monitor Progress

**Team Lead monitors**:
- Check task list for updates regularly
- Identify blockers
- Escalate issues
- Adjust priorities if needed

**You monitor**:
- Check `shared/task-list.json` for progress
- Review `shared/communication-log.json` for actions
- Identify risks
- Support team

**What you'll see**:
- Tasks moving from TODO → IN_PROGRESS → DONE
- Progress percentages updating
- Blockers being reported and resolved
- Communication log growing

---

## Real-World Example: E-Commerce Platform

### Project Setup

**PROJECT_BRIEF.md**:
```
# E-Commerce Platform

## Overview
Build a modern e-commerce platform with product catalog, shopping cart, and checkout.

## Goals
- Build a complete e-commerce platform
- Support 1,000 concurrent users
- Achieve 99.9% uptime

## Success Criteria
- All features implemented
- Test coverage > 80%
- Performance < 200ms response time
- Zero critical bugs at launch
```

**REQUIREMENTS.md**:
```
# Requirements

## Functional
1. Product catalog with search/filter
2. Shopping cart with persistence
3. Checkout with payment processing
4. User accounts and order history
5. Admin dashboard

## Non-Functional
- Performance: < 200ms response time
- Scalability: 1,000 concurrent users
- Security: PCI compliance
- Availability: 99.9% uptime
```

**TASK_LIST.json** (excerpt):
```json
{
  "tasks": [
    {
      "id": "TASK-001",
      "title": "API Specification & Design",
      "assignee": "BACKEND_DEVELOPER",
      "dependencies": []
    },
    {
      "id": "TASK-002",
      "title": "Database Schema Design",
      "assignee": "BACKEND_DEVELOPER",
      "dependencies": []
    },
    {
      "id": "TASK-003",
      "title": "Authentication & Authorization",
      "assignee": "BACKEND_DEVELOPER",
      "dependencies": ["TASK-002"]
    },
    {
      "id": "TASK-011",
      "title": "Project Setup & Component Architecture",
      "assignee": "FRONTEND_DEVELOPER",
      "dependencies": []
    }
  ]
}
```

### Execution

**Phase 1: Team Lead Analysis**
- Team Lead analyzes requirements
- Team Lead decomposes into tasks
- Team Lead identifies dependencies
- Team Lead creates task list

**Phase 2: Agent Spawning**
- Spawn Backend Developer
- Spawn Frontend Developer
- Spawn QA Engineer
- Spawn DevOps Engineer
- Spawn Documentation Agent

**Phase 3: Core Development**
- Backend: API design, database, authentication, payment
- Frontend: Components, pages, state management
- QA: Test strategy, test automation setup
- DevOps: Infrastructure, CI/CD pipeline
- Docs: Documentation setup

**Phase 4: Testing & Integration**
- QA: Execute tests, identify issues
- Backend/Frontend: Fix issues, integrate
- DevOps: Deploy to staging

**Phase 5: Optimization & Refinement**
- All: Performance optimization, security hardening
- QA: Final testing
- Docs: Complete documentation

**Phase 6: Deployment**
- DevOps: Deploy to production
- All: Support launch

**Phase 7: Post-Launch**
- All: Monitor, fix issues, document lessons

---

## Using This in Your Project

### For New Projects

1. **Create project brief** (what are you building?)
2. **Define requirements** (what features do you need?)
3. **Design architecture** (how will it be built?)
4. **Decompose tasks** (break into manageable chunks)
5. **Spawn Team Lead** (orchestrate the project)
6. **Spawn agents** (execute the work)
7. **Monitor progress** (track and support)

### For Existing Projects

1. **Document current state** (what's done, what's left?)
2. **Define remaining work** (what needs to be done?)
3. **Decompose tasks** (break into manageable chunks)
4. **Spawn Team Lead** (coordinate remaining work)
5. **Spawn agents** (execute remaining tasks)
6. **Monitor progress** (track and support)

### For Ongoing Maintenance

1. **Create maintenance task list** (bugs, features, improvements)
2. **Spawn Team Lead** (coordinate maintenance)
3. **Spawn agents** (execute maintenance)
4. **Monitor progress** (track and support)

---

## Key Concepts

### Task States

```
TODO → IN_PROGRESS → REVIEW → DONE
  ↓         ↓          ↓
BLOCKED   BLOCKED    BLOCKED
```

- **TODO**: Task not yet started
- **IN_PROGRESS**: Agent is working on it
- **REVIEW**: Work complete, ready for review
- **DONE**: Task complete and verified
- **BLOCKED**: Waiting for something else

### Task Dependencies

Tasks can depend on other tasks. An agent can only start a task if all dependencies are complete.

**Example**:
```
TASK-003 (Authentication) depends on TASK-002 (Database)
↓
Agent cannot start TASK-003 until TASK-002 is DONE
```

### Blocker Management

When an agent encounters a blocking issue:

1. **Report blocker** to task list
2. **Team Lead** investigates
3. **Team Lead** coordinates resolution
4. **Agent** resumes work

**Example**:
```
Agent: "Cannot connect to database"
↓
Team Lead: "Database credentials were wrong, fixed"
↓
Agent: "Thanks, resuming work"
```

### Communication

All agents communicate through:
1. **Shared task list** (primary)
2. **Communication log** (tracking)
3. **Direct messages** (clarifications)

---

## Best Practices

### For Team Leads

✅ **Clear task descriptions** - Be specific about what needs to be done
✅ **Define completion criteria** - How do you know it's done?
✅ **Identify dependencies** - What tasks depend on others?
✅ **Monitor regularly** - Check progress consistently
✅ **Resolve blockers quickly** - Respond promptly
✅ **Support your team** - Provide guidance and remove obstacles

### For All Agents

✅ **Check task list regularly** - See what's available
✅ **Claim tasks promptly** - Take ownership
✅ **Update progress regularly** - Keep task list current
✅ **Report blockers immediately** - Don't wait
✅ **Communicate clearly** - Be specific and helpful
✅ **Complete tasks thoroughly** - Verify completion criteria

### For Communication

✅ **Use shared task list** - Primary communication
✅ **Log all actions** - Track what happened
✅ **Be specific** - Clear descriptions help
✅ **Ask for help** - Don't get stuck
✅ **Share knowledge** - Help others succeed

---

## Common Questions

### Q: How do I set up the framework?

**A**: 
Setup depends on project complexity. Start with your project brief and requirements, then decompose into tasks.

### Q: Can I use this for small projects?

**A**: 
Yes! The framework scales from small to large projects. For small projects, you might use fewer agents or combine roles.

### Q: What if I don't have all agents?

**A**: 
You can use a subset of agents. For example:
- Small project: Backend + Frontend + QA
- Startup: Backend + Frontend
- Maintenance: Just one agent

### Q: How do I handle changes mid-project?

**A**: 
1. Document the change
2. Create new tasks if needed
3. Escalate to Team Lead
4. Team Lead adjusts priorities
5. Continue work

### Q: What if a task takes longer than expected?

**A**: 
1. Report to Team Lead
2. Identify blockers
3. Adjust priorities if needed
4. Continue work

### Q: How do I know if we're on track?

**A**: 
Check these metrics:
- **Progress**: % of tasks complete
- **Blockers**: Number and status of blockers
- **Quality**: Test coverage and defect count
- **Velocity**: Tasks completed

---

## Next Steps

### To Get Started

1. **Read** `AGENT_FRAMEWORK.md` (architecture overview)
2. **Read** `EXECUTION_GUIDE.md` (step-by-step instructions)
3. **Create** your project files (brief, requirements, tasks)
4. **Spawn** Team Lead Agent
5. **Spawn** specialized agents
6. **Monitor** progress

### To Learn More

- **AGENT_FRAMEWORK.md**: Complete architecture and API reference
- **EXECUTION_GUIDE.md**: Detailed execution steps and troubleshooting
- **IMPLEMENTATION_STATUS.md**: What's been delivered and how to use it

### To Customize

- Modify agent prompts for your domain
- Adjust task list for your project
- Create custom agent skills
- Adapt framework for your team

---

## Support & Resources

### Documentation
- `AGENT_FRAMEWORK.md` - Architecture and API
- `EXECUTION_GUIDE.md` - Step-by-step guide
- `IMPLEMENTATION_STATUS.md` - What's included

### Agent Prompts
- `agents/team-lead-agent.md` - Orchestrator
- `agents/backend-agent.md` - Backend developer
- `agents/frontend-agent.md` - Frontend developer
- `agents/qa-agent.md` - QA engineer
- `agents/devops-agent.md` - DevOps engineer
- `agents/docs-agent.md` - Documentation specialist

### Shared Resources
- `shared/task-list.json` - Central task coordination
- `shared/communication-log.json` - Agent communication log
- `agents/agent-framework.js` - Shared utilities

---

## Summary

The **Agent Framework** gives you:

✅ **Structured approach** to project management
✅ **Clear roles** for each team member
✅ **Shared coordination** through task list
✅ **Real-time progress** tracking
✅ **Blocker escalation** process
✅ **Async communication** for distributed teams

Whether you're building a new product, maintaining an existing system, or improving your development process, this framework will help you **coordinate work effectively** and **deliver projects successfully**.

---

## Ready to Get Started?

1. **Prepare your project** (brief, requirements, tasks)
2. **Spawn Team Lead** (orchestrate)
3. **Spawn agents** (execute)
4. **Monitor progress** (support)
5. **Celebrate success!** 🎉

---

**Questions?** Check the documentation or review the agent prompts for more details.

**Good luck with your project!** 🚀

