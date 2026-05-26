# Agent Teams Framework

**Coordinate your development team using Claude's agent teams approach.**

---

## What Is This?

A complete framework for managing software development projects using **5 specialized agents** that work together through a **shared task list**.

```
Team Lead (Orchestrator)
    ↓
Backend | Frontend | QA | DevOps | Docs
    ↓
Shared Task List (Coordination)
```

---

## Quick Start (5 minutes)

### 1. Read the Overview
Start with **QUICK_START.md** for a 5-minute overview.

### 2. Prepare Your Project
Create 3 files:
- `PROJECT_BRIEF.md` - What are you building?
- `REQUIREMENTS.md` - What features do you need?
- `TASK_LIST.json` - Break work into tasks

### 3. Spawn Team Lead
```
SPAWN_AGENT: TEAM_LEAD
```

### 4. Spawn Agents
```
SPAWN_AGENT: BACKEND_DEVELOPER
SPAWN_AGENT: FRONTEND_DEVELOPER
SPAWN_AGENT: QA_ENGINEER
SPAWN_AGENT: DEVOPS_ENGINEER
SPAWN_AGENT: DOCUMENTATION_SPECIALIST
```

### 5. Monitor Progress
Check `shared/task-list.json` every 4 hours.

---

## Documentation

| Document | Purpose | Time |
|----------|---------|------|
| **QUICK_START.md** | 5-minute overview | 5 min |
| **DEMO_GUIDE.md** | Full walkthrough with examples | 30 min |
| **AGENT_FRAMEWORK.md** | Architecture and API reference | 20 min |
| **EXECUTION_GUIDE.md** | Step-by-step execution instructions | 30 min |
| **TEAM_PRESENTATION.md** | Presentation slides for your team | 30 min |
| **IMPLEMENTATION_STATUS.md** | What's included and how to use | 10 min |

---

## What You Get

### Agent Prompts (5 files)
- ✅ **Team Lead Agent** - Orchestrator
- ✅ **Backend Developer Agent** - APIs, databases, business logic
- ✅ **Frontend Developer Agent** - UI/UX, components, styling
- ✅ **QA Engineer Agent** - Testing, quality assurance
- ✅ **DevOps Engineer Agent** - Infrastructure, deployment
- ✅ **Documentation Agent** - API docs, user guides

### Shared Resources
- ✅ **agent-framework.js** - Shared utilities (15+ methods)
- ✅ **task-list.json** - Central task coordination
- ✅ **communication-log.json** - Agent communication tracking

### Documentation
- ✅ Complete architecture guide
- ✅ Step-by-step execution guide
- ✅ Team presentation slides
- ✅ Quick start guide
- ✅ Demo guide with examples

---

## Key Features

### 1. Structured Coordination
- Central task list
- Clear dependencies
- Automatic tracking
- Real-time visibility

### 2. Parallel Execution
- 5 agents work simultaneously
- No coordination overhead
- Async communication
- Blocker escalation

### 3. Progress Tracking
- Task status updates
- Progress percentages
- Blocker management
- Communication log

### 4. Blocker Resolution
- Immediate reporting
- Quick escalation
- Team Lead coordination
- Automatic resumption

### 5. Team Communication
- Shared task list (primary)
- Communication log (tracking)
- Direct messages (clarifications)

---

## How It Works

### Phase 1: Analysis (Day 1)
Team Lead:
- Analyzes requirements
- Decomposes into tasks
- Identifies dependencies
- Creates task list

### Phase 2: Spawning (Day 1)
Team Lead:
- Spawns 5 specialized agents
- Conducts kickoff
- Assigns initial tasks

### Phase 3: Execution (Days 2+)
All agents:
- Claim tasks
- Work in parallel
- Update progress
- Report blockers

Team Lead:
- Monitors every 4 hours
- Resolves blockers
- Adjusts timeline

### Phase 4: Completion
All agents:
- Complete tasks
- Verify criteria
- Document work

Team Lead:
- Verifies quality gates
- Approves deployment

---

## Use Cases

### New Projects
1. Define requirements
2. Decompose tasks
3. Spawn agents
4. Execute in parallel

### Existing Projects
1. Document current state
2. Define remaining work
3. Spawn agents
4. Complete remaining tasks

### Maintenance
1. Create task list
2. Spawn agents
3. Execute maintenance
4. Track improvements

---

## Agent Roles

| Agent | Responsibilities |
|-------|------------------|
| **Team Lead** | Orchestrate, analyze, decompose, monitor, resolve blockers |
| **Backend** | APIs, databases, business logic, authentication, integration |
| **Frontend** | UI/UX, components, state management, styling, performance |
| **QA** | Testing, quality assurance, defect tracking, verification |
| **DevOps** | Infrastructure, CI/CD, deployment, monitoring, security |
| **Docs** | API docs, user guides, architecture, operational docs |

---

## Task Management

### Task States
```
TODO → IN_PROGRESS → REVIEW → DONE
  ↓         ↓          ↓
BLOCKED   BLOCKED    BLOCKED
```

### Task Dependencies
```
TASK-003 depends on TASK-002
↓
Agent can't start TASK-003 until TASK-002 is DONE
```

### Blocker Management
```
Agent: "Cannot proceed, database down"
↓
Team Lead: "Fixed, database is back up"
↓
Agent: "Thanks, resuming work"
```

---

## Metrics & Monitoring

### Key Metrics
- **Velocity**: Tasks completed per day
- **Quality**: Test coverage %, defect count
- **Timeline**: Days remaining, tasks on track
- **Blockers**: Number, average resolution time

### Monitoring Checklist
- Every 4 hours: Check progress, identify blockers
- Daily: Review completed tasks, calculate velocity
- Weekly: Review timeline, assess quality, plan next week

---

## Getting Started

### For New Users
1. Read **QUICK_START.md** (5 min)
2. Read **DEMO_GUIDE.md** (30 min)
3. Create your project files
4. Spawn Team Lead
5. Spawn agents

### For Team Leads
1. Read **AGENT_FRAMEWORK.md** (20 min)
2. Read **EXECUTION_GUIDE.md** (30 min)
3. Prepare project context
4. Spawn Team Lead
5. Monitor progress

### For Developers
1. Read **QUICK_START.md** (5 min)
2. Understand your agent role
3. Check task list for assignments
4. Claim tasks
5. Execute work

---

## File Structure

```
your-project/
├── PROJECT_BRIEF.md              ← Create this
├── REQUIREMENTS.md               ← Create this
├── TASK_LIST.json                ← Create this
├── agents/                       ← Copy from framework
│   ├── team-lead-agent.md
│   ├── backend-agent.md
│   ├── frontend-agent.md
│   ├── qa-agent.md
│   ├── devops-agent.md
│   ├── docs-agent.md
│   └── agent-framework.js
└── shared/                       ← Copy from framework
    ├── task-list.json
    └── communication-log.json
```

---

## Best Practices

### For Team Leads
✅ Clear task descriptions
✅ Define completion criteria
✅ Identify dependencies
✅ Monitor every 4 hours
✅ Resolve blockers within 1 hour
✅ Support your team

### For All Agents
✅ Check task list regularly
✅ Claim tasks promptly
✅ Update progress every 2 hours
✅ Report blockers immediately
✅ Communicate clearly
✅ Complete tasks thoroughly

---

## Common Questions

**Q: How long does this take to set up?**
A: 30 minutes to 2 hours depending on project size.

**Q: Can I use this for small projects?**
A: Yes! Scale from 1 agent to 5+.

**Q: What if I don't have all agents?**
A: Use a subset - Backend + Frontend + QA is common.

**Q: How do I handle changes mid-project?**
A: Create new tasks, escalate to Team Lead, adjust timeline.

**Q: How do I know we're on track?**
A: Check metrics: velocity, progress, blockers, timeline.

---

## Success Criteria

✅ All tasks completed on time
✅ Test coverage > 80%
✅ No critical bugs
✅ Performance acceptable
✅ Security audit passed
✅ Team satisfied with process

---

## Next Steps

### Today
1. Read **QUICK_START.md**
2. Review **DEMO_GUIDE.md**

### This Week
1. Prepare your project files
2. Spawn Team Lead
3. Spawn agents
4. Start executing

### This Month
1. Complete your project
2. Document lessons learned
3. Iterate and improve

---

## Support & Resources

### Documentation
- **QUICK_START.md** - 5-minute overview
- **DEMO_GUIDE.md** - Full walkthrough
- **AGENT_FRAMEWORK.md** - Architecture guide
- **EXECUTION_GUIDE.md** - Step-by-step guide
- **TEAM_PRESENTATION.md** - Presentation slides
- **IMPLEMENTATION_STATUS.md** - What's included

### Agent Prompts
- **agents/team-lead-agent.md** - Orchestrator
- **agents/backend-agent.md** - Backend developer
- **agents/frontend-agent.md** - Frontend developer
- **agents/qa-agent.md** - QA engineer
- **agents/devops-agent.md** - DevOps engineer
- **agents/docs-agent.md** - Documentation specialist

### Shared Resources
- **agents/agent-framework.js** - Shared utilities
- **shared/task-list.json** - Task coordination
- **shared/communication-log.json** - Communication tracking

---

## Summary

The **Agent Framework** gives you:

✅ **Structured approach** to project management
✅ **Clear roles** for each team member
✅ **Shared coordination** through task list
✅ **Real-time progress** tracking
✅ **Blocker escalation** process
✅ **Async communication** for distributed teams

**Result**: Faster delivery, better quality, happier teams!

---

## Ready to Get Started?

1. **Read** QUICK_START.md (5 minutes)
2. **Create** your project files (30 minutes)
3. **Spawn** Team Lead (5 minutes)
4. **Spawn** agents (5 minutes)
5. **Monitor** progress (ongoing)

**Questions?** Check the documentation or review the agent prompts.

**Good luck with your project!** 🚀

---

**Version**: 1.0
**Status**: Production Ready
**Last Updated**: May 26, 2026

