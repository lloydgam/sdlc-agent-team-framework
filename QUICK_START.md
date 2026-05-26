# Quick Start Guide - Agent Framework

## 5-Minute Overview

### What Is This?

A system to manage projects using **5 specialized agents** that work together:

```
Team Lead (Orchestrator)
    ↓
Backend | Frontend | QA | DevOps | Docs
    ↓
Shared Task List (Coordination)
```

### How It Works

1. **Team Lead** breaks project into tasks
2. **Agents** claim tasks and work in parallel
3. **Shared task list** tracks progress
4. **Team Lead** monitors and resolves blockers

---

## Getting Started (30 minutes)

### Step 1: Create 3 Files

**PROJECT_BRIEF.md**
```markdown
# [Project Name]

## What are we building?
[Description]

## Success criteria?
- [Criterion 1]
- [Criterion 2]

## Timeline?
[Duration]
```

**REQUIREMENTS.md**
```markdown
# Requirements

## Features
1. [Feature 1]
2. [Feature 2]

## Tech Stack
- [Technology 1]
- [Technology 2]
```

**TASK_LIST.json**
```json
{
  "tasks": [
    {
      "id": "TASK-001",
      "title": "Task Title",
      "assignee": "BACKEND_DEVELOPER",
      "estimatedHours": 6,
      "dependencies": [],
      "completionCriteria": ["Done when..."]
    }
  ]
}
```

### Step 2: Spawn Team Lead

```
SPAWN_AGENT: TEAM_LEAD
```

Team Lead will:
- Analyze your project
- Verify task breakdown
- Identify dependencies
- Prepare for agent spawning

### Step 3: Spawn Agents

```
SPAWN_AGENT: BACKEND_DEVELOPER
SPAWN_AGENT: FRONTEND_DEVELOPER
SPAWN_AGENT: QA_ENGINEER
SPAWN_AGENT: DEVOPS_ENGINEER
SPAWN_AGENT: DOCUMENTATION_SPECIALIST
```

### Step 4: Monitor Progress

Check `shared/task-list.json` every 4 hours:
- ✅ Tasks completed
- 🔄 Tasks in progress
- 🚫 Blockers
- 📊 Overall progress

---

## Agent Roles

| Agent | Responsibilities |
|-------|------------------|
| **Backend** | APIs, databases, business logic, authentication |
| **Frontend** | UI/UX, components, state management, styling |
| **QA** | Testing, quality assurance, defect tracking |
| **DevOps** | Infrastructure, CI/CD, deployment, monitoring |
| **Docs** | API docs, user guides, architecture docs |

---

## Task States

```
TODO → IN_PROGRESS → REVIEW → DONE
  ↓         ↓          ↓
BLOCKED   BLOCKED    BLOCKED
```

- **TODO**: Not started
- **IN_PROGRESS**: Agent working on it
- **REVIEW**: Done, ready for review
- **DONE**: Complete
- **BLOCKED**: Waiting for something

---

## Key Concepts

### Task Dependencies

```
TASK-003 depends on TASK-002
↓
Agent can't start TASK-003 until TASK-002 is DONE
```

### Blockers

```
Agent: "Can't proceed, database down"
↓
Team Lead: "Fixed, database is back up"
↓
Agent: "Thanks, resuming work"
```

### Communication

1. **Shared task list** (primary)
2. **Communication log** (tracking)
3. **Direct messages** (clarifications)

---

## Monitoring Checklist

**Every 4 hours**:
- [ ] Check task list for updates
- [ ] Verify progress
- [ ] Identify blockers
- [ ] Escalate if needed

**Daily**:
- [ ] Review completed tasks
- [ ] Calculate velocity
- [ ] Check quality metrics
- [ ] Identify risks

**Weekly**:
- [ ] Review progress vs. timeline
- [ ] Assess quality
- [ ] Plan next week
- [ ] Celebrate milestones

---

## Common Issues & Solutions

| Issue | Solution |
|-------|----------|
| Task dependencies not met | Wait for dependencies to complete |
| Agent blocked | Report blocker, Team Lead resolves |
| Task taking longer | Update estimate, identify blockers |
| Quality issues | QA reports, dev team fixes |
| Scope creep | Escalate to Team Lead, adjust timeline |

---

## Metrics to Track

**Velocity**
- Tasks completed per day
- Actual vs. estimated hours

**Quality**
- Test coverage %
- Defect count
- Critical bugs

**Timeline**
- Days remaining
- Tasks on track
- Critical path status

**Blockers**
- Number of blockers
- Average resolution time

---

## Best Practices

### For Team Lead
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

## File Structure

```
your-project/
├── PROJECT_BRIEF.md          ← Create this
├── REQUIREMENTS.md           ← Create this
├── TASK_LIST.json            ← Create this
├── agents/                   ← Copy from framework
│   ├── team-lead-agent.md
│   ├── backend-agent.md
│   ├── frontend-agent.md
│   ├── qa-agent.md
│   ├── devops-agent.md
│   ├── docs-agent.md
│   └── agent-framework.js
└── shared/                   ← Copy from framework
    ├── task-list.json
    └── communication-log.json
```

---

## Documentation

| Document | Purpose |
|----------|---------|
| **DEMO_GUIDE.md** | Full walkthrough with examples |
| **AGENT_FRAMEWORK.md** | Architecture and API reference |
| **EXECUTION_GUIDE.md** | Step-by-step execution instructions |
| **IMPLEMENTATION_STATUS.md** | What's included and how to use |

---

## Quick Commands

**Spawn Team Lead**
```
SPAWN_AGENT: TEAM_LEAD
```

**Spawn All Agents**
```
SPAWN_AGENT: BACKEND_DEVELOPER
SPAWN_AGENT: FRONTEND_DEVELOPER
SPAWN_AGENT: QA_ENGINEER
SPAWN_AGENT: DEVOPS_ENGINEER
SPAWN_AGENT: DOCUMENTATION_SPECIALIST
```

**Check Progress**
```
Read: shared/task-list.json
```

**View Communication Log**
```
Read: shared/communication-log.json
```

---

## Timeline Example

**Day 1**: Team Lead analysis + agent spawning
**Days 2-17**: Core development (parallel work)
**Days 18-24**: Testing & integration
**Days 25-31**: Optimization & refinement
**Days 32-34**: Deployment
**Days 35+**: Post-launch support

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

1. **Read** DEMO_GUIDE.md (full walkthrough)
2. **Create** your project files
3. **Spawn** Team Lead
4. **Spawn** agents
5. **Monitor** progress
6. **Celebrate** success! 🎉

---

## Questions?

- **Architecture?** → Read AGENT_FRAMEWORK.md
- **How to execute?** → Read EXECUTION_GUIDE.md
- **What's included?** → Read IMPLEMENTATION_STATUS.md
- **Full walkthrough?** → Read DEMO_GUIDE.md

---

**Ready to get started?** Create your project files and spawn Team Lead! 🚀

