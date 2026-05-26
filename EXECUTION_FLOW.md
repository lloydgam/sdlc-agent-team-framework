# Execution Flow - Visual Guide

> **Visual representation of how to execute your project step-by-step**

---

## 🎯 Complete Execution Flow

```
┌─────────────────────────────────────────────────────────────────────────┐
│                         PROJECT EXECUTION FLOW                          │
└─────────────────────────────────────────────────────────────────────────┘

START
  │
  ├─────────────────────────────────────────────────────────────────────┐
  │ PHASE 1: PREPARE PROJECT FILES                                      │
  │ ─────────────────────────────────────────────────────────────────── │
  │                                                                      │
  │  Step 1.1: Create PROJECT_BRIEF.md                                 │
  │  ├─ What are you building?                                         │
  │  ├─ What are the goals?                                            │
  │  ├─ What are the success criteria?                                 │
  │  └─ What's the scope?                                              │
  │                                                                      │
  │  Step 1.2: Create REQUIREMENTS.md                                  │
  │  ├─ What features do you need?                                     │
  │  ├─ What are the constraints?                                      │
  │  ├─ What's the tech stack?                                         │
  │  └─ What are the quality standards?                                │
  │                                                                      │
  │  Step 1.3: Create TASK_LIST.json                                   │
  │  ├─ Break features into tasks                                      │
  │  ├─ Identify dependencies                                          │
  │  ├─ Assign to agents                                               │
  │  └─ Define completion criteria                                     │
  │                                                                      │
  └─────────────────────────────────────────────────────────────────────┘
  │
  ├─────────────────────────────────────────────────────────────────────┐
  │ PHASE 2: ORGANIZE PROJECT FOLDER                                    │
  │ ─────────────────────────────────────────────────────────────────── │
  │                                                                      │
  │  your-project/                                                      │
  │  ├── PROJECT_BRIEF.md                                              │
  │  ├── REQUIREMENTS.md                                               │
  │  ├── TASK_LIST.json                                                │
  │  ├── agents/                                                        │
  │  │   ├── team-lead-agent.md                                        │
  │  │   ├── backend-agent.md                                          │
  │  │   ├── frontend-agent.md                                         │
  │  │   ├── qa-agent.md                                               │
  │  │   ├── devops-agent.md                                           │
  │  │   ├── docs-agent.md                                             │
  │  │   └── agent-framework.js                                        │
  │  └── shared/                                                        │
  │      ├── task-list.json                                            │
  │      └── communication-log.json                                     │
  │                                                                      │
  └─────────────────────────────────────────────────────────────────────┘
  │
  ├─────────────────────────────────────────────────────────────────────┐
  │ PHASE 3: SPAWN TEAM LEAD AGENT                                      │
  │ ─────────────────────────────────────────────────────────────────── │
  │                                                                      │
  │  In Claude Code, run:                                              │
  │  ┌──────────────────────────────────────────────────────────────┐  │
  │  │ SPAWN_AGENT: TEAM_LEAD                                       │  │
  │  │                                                               │  │
  │  │ Context:                                                     │  │
  │  │ - Read PROJECT_BRIEF.md                                     │  │
  │  │ - Read REQUIREMENTS.md                                      │  │
  │  │ - Review TASK_LIST.json                                     │  │
  │  │ - Use agents/agent-framework.js                             │  │
  │  │                                                               │  │
  │  │ Instructions:                                                │  │
  │  │ 1. Analyze project requirements                             │  │
  │  │ 2. Verify task decomposition                                │  │
  │  │ 3. Identify dependencies                                    │  │
  │  │ 4. Update shared/task-list.json                             │  │
  │  │ 5. Prepare to spawn agents                                  │  │
  │  └──────────────────────────────────────────────────────────────┘  │
  │                                                                      │
  │  Team Lead will:                                                    │
  │  ✅ Analyze your project                                            │
  │  ✅ Verify task decomposition                                       │
  │  ✅ Identify dependencies                                           │
  │  ✅ Update task list                                                │
  │  ✅ Prepare for agent spawning                                      │
  │                                                                      │
  └─────────────────────────────────────────────────────────────────────┘
  │
  ├─────────────────────────────────────────────────────────────────────┐
  │ PHASE 4: SPAWN SPECIALIZED AGENTS                                   │
  │ ─────────────────────────────────────────────────────────────────── │
  │                                                                      │
  │  Spawn each agent in Claude Code:                                  │
  │                                                                      │
  │  ┌─ BACKEND DEVELOPER ─────────────────────────────────────────┐   │
  │  │ SPAWN_AGENT: BACKEND_DEVELOPER                              │   │
  │  │ Context: PROJECT_BRIEF.md, REQUIREMENTS.md, TASK_LIST.json │   │
  │  │ Task: Claim backend tasks and execute                       │   │
  │  └─────────────────────────────────────────────────────────────┘   │
  │                                                                      │
  │  ┌─ FRONTEND DEVELOPER ────────────────────────────────────────┐   │
  │  │ SPAWN_AGENT: FRONTEND_DEVELOPER                             │   │
  │  │ Context: PROJECT_BRIEF.md, REQUIREMENTS.md, TASK_LIST.json │   │
  │  │ Task: Claim frontend tasks and execute                      │   │
  │  └─────────────────────────────────────────────────────────────┘   │
  │                                                                      │
  │  ┌─ QA ENGINEER ───────────────────────────────────────────────┐   │
  │  │ SPAWN_AGENT: QA_ENGINEER                                    │   │
  │  │ Context: PROJECT_BRIEF.md, REQUIREMENTS.md, TASK_LIST.json │   │
  │  │ Task: Claim QA tasks and execute                            │   │
  │  └─────────────────────────────────────────────────────────────┘   │
  │                                                                      │
  │  ┌─ DEVOPS ENGINEER ───────────────────────────────────────────┐   │
  │  │ SPAWN_AGENT: DEVOPS_ENGINEER                                │   │
  │  │ Context: PROJECT_BRIEF.md, REQUIREMENTS.md, TASK_LIST.json │   │
  │  │ Task: Claim DevOps tasks and execute                        │   │
  │  └─────────────────────────────────────────────────────────────┘   │
  │                                                                      │
  │  ┌─ DOCUMENTATION SPECIALIST ──────────────────────────────────┐   │
  │  │ SPAWN_AGENT: DOCUMENTATION_SPECIALIST                       │   │
  │  │ Context: PROJECT_BRIEF.md, REQUIREMENTS.md, TASK_LIST.json │   │
  │  │ Task: Claim documentation tasks and execute                 │   │
  │  └─────────────────────────────────────────────────────────────┘   │
  │                                                                      │
  │  All agents will:                                                   │
  │  ✅ Review project requirements                                     │
  │  ✅ Check task list for assignments                                 │
  │  ✅ Claim available tasks                                           │
  │  ✅ Begin execution                                                 │
  │                                                                      │
  └─────────────────────────────────────────────────────────────────────┘
  │
  ├─────────────────────────────────────────────────────────────────────┐
  │ PHASE 5: PARALLEL EXECUTION                                         │
  │ ─────────────────────────────────────────────────────────────────── │
  │                                                                      │
  │  All agents work in parallel:                                       │
  │                                                                      │
  │  Backend Agent              Frontend Agent         QA Agent         │
  │  ├─ Check task list         ├─ Check task list    ├─ Check list    │
  │  ├─ Claim tasks             ├─ Claim tasks        ├─ Claim tasks   │
  │  ├─ Execute work            ├─ Execute work       ├─ Execute tests │
  │  ├─ Update progress         ├─ Update progress    ├─ Report issues │
  │  └─ Report blockers         └─ Report blockers    └─ Verify fixes  │
  │                                                                      │
  │  DevOps Agent               Documentation Agent                     │
  │  ├─ Check task list         ├─ Check task list                     │
  │  ├─ Claim tasks             ├─ Claim tasks                         │
  │  ├─ Setup infrastructure    ├─ Write documentation                 │
  │  ├─ Configure CI/CD         ├─ Create guides                       │
  │  └─ Report blockers         └─ Update specs                        │
  │                                                                      │
  │  Communication:                                                     │
  │  All agents ←→ Shared Task List ←→ Team Lead                       │
  │                                                                      │
  └─────────────────────────────────────────────────────────────────────┘
  │
  ├─────────────────────────────────────────────────────────────────────┐
  │ PHASE 6: TEAM LEAD MONITORING                                       │
  │ ─────────────────────────────────────────────────────────────────── │
  │                                                                      │
  │  Team Lead continuously:                                            │
  │  ├─ Checks task list regularly                                     │
  │  ├─ Identifies blockers                                            │
  │  ├─ Escalates issues                                               │
  │  ├─ Adjusts priorities                                             │
  │  └─ Supports team                                                  │
  │                                                                      │
  │  Monitoring checklist:                                              │
  │  ✅ Task status updates                                             │
  │  ✅ Progress percentage                                             │
  │  ✅ Blocker identification                                          │
  │  ✅ Quality metrics                                                 │
  │  ✅ Velocity tracking                                               │
  │                                                                      │
  └─────────────────────────────────────────────────────────────────────┘
  │
  ├─────────────────────────────────────────────────────────────────────┐
  │ PHASE 7: BLOCKER RESOLUTION                                         │
  │ ─────────────────────────────────────────────────────────────────── │
  │                                                                      │
  │  When blocker occurs:                                               │
  │                                                                      │
  │  Agent reports blocker                                              │
  │       ↓                                                              │
  │  Team Lead investigates                                             │
  │       ↓                                                              │
  │  Team Lead coordinates fix                                          │
  │       ↓                                                              │
  │  Blocker resolved                                                   │
  │       ↓                                                              │
  │  Agent resumes work                                                 │
  │       ↓                                                              │
  │  Task list updated                                                  │
  │                                                                      │
  └─────────────────────────────────────────────────────────────────────┘
  │
  ├─────────────────────────────────────────────────────────────────────┐
  │ PHASE 8: QUALITY ASSURANCE                                          │
  │ ─────────────────────────────────────────────────────────────────── │
  │                                                                      │
  │  QA Agent validates work:                                           │
  │  ├─ Write test cases                                               │
  │  ├─ Execute tests                                                  │
  │  ├─ Identify issues                                                │
  │  └─ Verify fixes                                                   │
  │                                                                      │
  │  Quality gates:                                                     │
  │  ✅ Test coverage > 80%                                             │
  │  ✅ No critical bugs                                                │
  │  ✅ Performance acceptable                                          │
  │  ✅ Security audit passed                                           │
  │  ✅ Documentation complete                                          │
  │                                                                      │
  │  Issue resolution:                                                  │
  │  QA reports issue → Dev fixes → QA verifies → Task complete        │
  │                                                                      │
  └─────────────────────────────────────────────────────────────────────┘
  │
  ├─────────────────────────────────────────────────────────────────────┐
  │ PHASE 9: DEPLOYMENT                                                 │
  │ ─────────────────────────────────────────────────────────────────── │
  │                                                                      │
  │  Pre-deployment checklist:                                          │
  │  ✅ All tasks marked DONE                                           │
  │  ✅ Quality gates passed                                            │
  │  ✅ Tests passing                                                   │
  │  ✅ Documentation complete                                          │
  │  ✅ Performance acceptable                                          │
  │  ✅ Security audit passed                                           │
  │                                                                      │
  │  Deployment steps:                                                  │
  │  1. DevOps prepares deployment                                     │
  │     ├─ Build artifacts                                             │
  │     ├─ Configure environment                                       │
  │     └─ Run smoke tests                                             │
  │                                                                      │
  │  2. All agents verify readiness                                    │
  │     ├─ Backend: APIs ready                                         │
  │     ├─ Frontend: Build successful                                  │
  │     ├─ QA: Final tests pass                                        │
  │     └─ DevOps: Infrastructure ready                                │
  │                                                                      │
  │  3. Deploy to production                                           │
  │     ├─ Execute deployment                                          │
  │     ├─ Monitor for issues                                          │
  │     └─ Verify functionality                                        │
  │                                                                      │
  │  4. Post-deployment                                                │
  │     ├─ Monitor metrics                                             │
  │     ├─ Support users                                               │
  │     └─ Document lessons learned                                    │
  │                                                                      │
  └─────────────────────────────────────────────────────────────────────┘
  │
  ├─────────────────────────────────────────────────────────────────────┐
  │ PHASE 10: PROJECT COMPLETION                                        │
  │ ─────────────────────────────────────────────────────────────────── │
  │                                                                      │
  │  Final checklist:                                                   │
  │  ✅ All tasks marked DONE                                           │
  │  ✅ All tests passing                                               │
  │  ✅ Quality gates passed                                            │
  │  ✅ Documentation complete                                          │
  │  ✅ Deployed to production                                          │
  │  ✅ Monitoring active                                               │
  │                                                                      │
  │  Lessons learned:                                                   │
  │  ├─ What went well                                                 │
  │  ├─ What could be improved                                         │
  │  ├─ Key decisions made                                             │
  │  ├─ Challenges overcome                                            │
  │  └─ Team feedback                                                  │
  │                                                                      │
  │  Celebrate success! 🎉                                              │
  │                                                                      │
  └─────────────────────────────────────────────────────────────────────┘
  │
  END
```

---

## 📊 Task Lifecycle During Execution

```
TASK LIFECYCLE
==============

TODO
  │
  ├─→ Agent claims task
  │   └─ Task assigned to agent
  │
  ├─→ IN_PROGRESS
  │   ├─ Agent executes work
  │   ├─ Updates progress regularly
  │   │
  │   ├─→ BLOCKED (if blocker encountered)
  │   │   ├─ Agent reports blocker
  │   │   ├─ Team Lead investigates
  │   │   ├─ Blocker resolved
  │   │   └─ Back to IN_PROGRESS
  │   │
  │   └─ Work completed
  │
  ├─→ REVIEW
  │   ├─ QA validates work
  │   ├─ Issues identified?
  │   │
  │   ├─→ YES: Back to IN_PROGRESS
  │   │   ├─ Development team fixes
  │   │   ├─ QA verifies fix
  │   │   └─ Back to REVIEW
  │   │
  │   └─→ NO: Proceed to DONE
  │
  └─→ DONE
      └─ Task complete and verified
```

---

## 🔄 Daily Execution Cycle

```
DAILY CYCLE
===========

MORNING
  │
  ├─→ Team Lead checks task list
  │   ├─ Review overnight updates
  │   ├─ Identify blockers
  │   └─ Plan day
  │
  ├─→ Agents start work
  │   ├─ Check task list
  │   ├─ Claim available tasks
  │   └─ Begin execution
  │
  └─→ Team Lead supports team
      ├─ Answer questions
      ├─ Provide guidance
      └─ Remove obstacles

DURING DAY
  │
  ├─→ Agents execute tasks
  │   ├─ Work on assigned tasks
  │   ├─ Update progress regularly
  │   └─ Report blockers immediately
  │
  ├─→ Team Lead monitors
  │   ├─ Check progress
  │   ├─ Identify blockers
  │   └─ Resolve issues
  │
  └─→ QA validates
      ├─ Test work
      ├─ Identify issues
      └─ Report findings

EVENING
  │
  ├─→ Agents complete work
  │   ├─ Finish assigned tasks
  │   ├─ Update task list
  │   └─ Report status
  │
  ├─→ Team Lead reviews
  │   ├─ Check daily progress
  │   ├─ Calculate velocity
  │   ├─ Identify risks
  │   └─ Plan next day
  │
  └─→ Communication log updated
      └─ All actions documented
```

---

## 📈 Progress Tracking

```
PROGRESS TRACKING
=================

Metrics to monitor:

TASK COMPLETION
  Total tasks: 40
  Completed: 18 (45%)
  In progress: 12 (30%)
  Blocked: 2 (5%)
  Remaining: 8 (20%)

QUALITY METRICS
  Test coverage: 72%
  Defects: 3 (1 critical, 2 minor)
  Performance: 180ms avg response
  Security: Audit pending

VELOCITY
  Last period: 8 tasks
  Trend: Steady
  Forecast: On track

BLOCKERS
  Current: 2 open
  Average resolution: 4 hours
  Types: Database, API spec

TEAM SATISFACTION
  Effectiveness: High
  Communication: Clear
  Morale: Good
```

---

## 🎯 Key Checkpoints

```
EXECUTION CHECKPOINTS
=====================

CHECKPOINT 1: Project Setup
  ✅ PROJECT_BRIEF.md created
  ✅ REQUIREMENTS.md created
  ✅ TASK_LIST.json created
  ✅ Folder structure organized
  → PROCEED TO CHECKPOINT 2

CHECKPOINT 2: Team Lead Ready
  ✅ Team Lead spawned
  ✅ Requirements analyzed
  ✅ Tasks decomposed
  ✅ Dependencies identified
  → PROCEED TO CHECKPOINT 3

CHECKPOINT 3: Agents Spawned
  ✅ Backend Agent spawned
  ✅ Frontend Agent spawned
  ✅ QA Agent spawned
  ✅ DevOps Agent spawned
  ✅ Documentation Agent spawned
  → PROCEED TO CHECKPOINT 4

CHECKPOINT 4: Execution Started
  ✅ Agents claiming tasks
  ✅ Work in progress
  ✅ Progress updating
  ✅ Communication flowing
  → PROCEED TO CHECKPOINT 5

CHECKPOINT 5: Quality Gates
  ✅ Test coverage > 80%
  ✅ No critical bugs
  ✅ Performance acceptable
  ✅ Security audit passed
  → PROCEED TO CHECKPOINT 6

CHECKPOINT 6: Deployment Ready
  ✅ All tasks DONE
  ✅ Quality gates passed
  ✅ Documentation complete
  ✅ Infrastructure ready
  → PROCEED TO DEPLOYMENT

CHECKPOINT 7: Deployed
  ✅ Deployed to production
  ✅ Monitoring active
  ✅ Users supported
  ✅ Lessons learned
  → PROJECT COMPLETE
```

---

## 🚨 Escalation Path

```
ESCALATION PATH
===============

Level 1: Agent Level
  Issue occurs
    ↓
  Agent identifies issue
    ↓
  Agent updates task list
    ↓
  Agent reports blocker

Level 2: Team Lead Level
  Team Lead reviews blocker
    ↓
  Team Lead investigates
    ↓
  Team Lead coordinates fix
    ↓
  Team Lead resolves blocker
    ↓
  Agent resumes work

Level 3: Project Level
  Multiple blockers
    ↓
  Project timeline at risk
    ↓
  Team Lead escalates
    ↓
  Adjust timeline/scope
    ↓
  Reallocate resources
    ↓
  Resume execution
```

---

## ✅ Success Indicators

```
SUCCESS INDICATORS
==================

EARLY INDICATORS (First 25% of project)
  ✅ Team Lead successfully spawned
  ✅ All agents spawned and working
  ✅ Task list updated with dependencies
  ✅ Agents claiming tasks
  ✅ Progress visible in task list

MID-PROJECT INDICATORS (50% of project)
  ✅ 50% of tasks completed
  ✅ Velocity consistent
  ✅ Blockers resolved quickly
  ✅ Quality metrics on track
  ✅ Team communication clear

LATE-PROJECT INDICATORS (75% of project)
  ✅ 75% of tasks completed
  ✅ Quality gates being met
  ✅ Test coverage > 80%
  ✅ Critical bugs resolved
  ✅ Documentation progressing

COMPLETION INDICATORS (100% of project)
  ✅ All tasks marked DONE
  ✅ Quality gates passed
  ✅ Tests passing
  ✅ Documentation complete
  ✅ Ready for deployment
```

---

## 🎓 Quick Reference

### File Locations
```
your-project/
├── PROJECT_BRIEF.md          ← Project overview
├── REQUIREMENTS.md           ← Detailed requirements
├── TASK_LIST.json            ← Central task coordination
├── agents/
│   ├── team-lead-agent.md    ← Orchestrator
│   ├── backend-agent.md      ← Backend developer
│   ├── frontend-agent.md     ← Frontend developer
│   ├── qa-agent.md           ← QA engineer
│   ├── devops-agent.md       ← DevOps engineer
│   ├── docs-agent.md         ← Documentation
│   └── agent-framework.js    ← Shared utilities
└── shared/
    ├── task-list.json        ← Task coordination
    └── communication-log.json ← Agent communications
```

### Agent Roles
| Agent | Responsibility |
|-------|-----------------|
| Team Lead | Orchestrate, monitor, resolve blockers |
| Backend | APIs, databases, business logic |
| Frontend | UI/UX, components, styling |
| QA | Testing, quality assurance |
| DevOps | Infrastructure, deployment |
| Documentation | Guides, specs, documentation |

### Key Metrics
- **Velocity**: Tasks completed per period
- **Quality**: Test coverage, defect count
- **Timeline**: Progress percentage, remaining work
- **Blockers**: Count, resolution time
- **Satisfaction**: Team feedback, effectiveness

---

## 🚀 Ready to Execute?

1. **Prepare files** (brief, requirements, tasks)
2. **Organize folder** (copy agent files)
3. **Spawn Team Lead** (orchestrate)
4. **Spawn agents** (execute)
5. **Monitor progress** (track and support)
6. **Resolve blockers** (as needed)
7. **Ensure quality** (QA validation)
8. **Deploy** (to production)
9. **Celebrate** (lessons learned)

**Follow the flow above and execute your project!** 🎉
