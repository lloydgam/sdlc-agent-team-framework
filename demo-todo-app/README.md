# Demo Todo Application - Agent Framework Exercise

This is a minimal demo project designed to showcase the agent framework in action during a live exercise.

## 📋 Project Overview

A simple command-line todo application that demonstrates how agent teams coordinate work across different roles.

**Duration:** ~2 hours  
**Complexity:** Minimal (intentionally simple to focus on agent coordination)  
**Agents:** 5 specialized roles (Backend, Frontend, QA, DevOps, Documentation)  
**Tasks:** 13 total tasks with clear dependencies

## 📁 Folder Structure

```
demo-todo-app/
├── PROJECT_BRIEF.md          ← Project overview and goals
├── REQUIREMENTS.md           ← Feature requirements (13 items)
├── TASK_LIST.md              ← Tasks for agents (13 tasks)
├── EXECUTION_GUIDE.md        ← Step-by-step execution (10 steps)
├── README.md                 ← This file
│
├── agents/                   ← Agent role definitions (to be created during demo)
├── shared/                   ← Shared coordination files (to be created during demo)
├── src/                      ← Source code (to be created during demo)
├── tests/                    ← Test files (to be created during demo)
├── data/                     ← Data storage (to be created during demo)
├── docs/                     ← Documentation (to be created during demo)
│
└── package.json              ← Node.js dependencies
```

## 🚀 Quick Start

### Prerequisites
- Claude Code v2.1.32+ with agent teams enabled
- Node.js 14+ (for execution)
- Agent teams configured in `~/.claude/settings.json`

### Before You Start
1. Read `PROJECT_BRIEF.md` - Understand the project scope
2. Review `REQUIREMENTS.md` - See what needs to be built
3. Check `TASK_LIST.md` - Understand the 13 tasks and dependencies
4. Follow `EXECUTION_GUIDE.md` - Step-by-step execution instructions

### During the Demo
1. **Step 0:** Verify agent teams are enabled
2. **Step 1-4:** Setup project structure
3. **Step 5:** Spawn Team Lead Agent
4. **Step 6:** Spawn specialized agents
5. **Step 7-10:** Monitor progress and verify completion

## 📊 What Gets Built

By the end of the demo, you'll have:

✅ **Core Logic** - Todo CRUD operations  
✅ **File Storage** - JSON-based persistence  
✅ **CLI Interface** - Command-line commands  
✅ **Error Handling** - Graceful error messages  
✅ **Unit Tests** - 80%+ code coverage  
✅ **CLI Tests** - Command validation  
✅ **Documentation** - Setup, usage, and API guides  
✅ **CI/CD Pipeline** - Automated testing  

## 🎯 Success Criteria

- ✅ All 13 tasks completed
- ✅ Application works end-to-end
- ✅ Tests pass with >80% coverage
- ✅ Documentation complete
- ✅ Agents coordinated successfully

## 📖 Documentation Files

| File | Purpose |
|------|---------|
| `PROJECT_BRIEF.md` | High-level project overview |
| `REQUIREMENTS.md` | Detailed feature requirements |
| `TASK_LIST.md` | 13 tasks with dependencies |
| `EXECUTION_GUIDE.md` | Step-by-step execution guide |

## 🔧 Agent Roles

| Role | Tasks | Responsibility |
|------|-------|-----------------|
| **Backend Developer** | 3 tasks | Core logic, storage, error handling |
| **Frontend Developer** | 2 tasks | CLI interface, user experience |
| **QA Engineer** | 3 tasks | Unit tests, CLI tests, manual testing |
| **DevOps Engineer** | 2 tasks | Project setup, CI/CD pipeline |
| **Documentation Specialist** | 3 tasks | Setup guide, user guide, API docs |

## ⏱️ Expected Timeline

| Phase | Duration | What Happens |
|-------|----------|--------------|
| Setup | 10 min | Create folders, verify structure |
| Team Lead Analysis | 10 min | Analyze requirements, prepare tasks |
| Agent Spawning | 5 min | Spawn all 5 agents |
| Development | 60 min | Agents execute tasks in parallel |
| Testing | 20 min | QA validates work |
| Documentation | 15 min | Docs agent completes guides |
| Verification | 10 min | Verify everything works |
| **Total** | **~2 hours** | **Complete working application** |

## 🎓 Learning Outcomes

After this demo, you'll understand:

- How agent teams coordinate work
- How tasks are decomposed and assigned
- How dependencies are managed
- How blockers are escalated
- How parallel execution works
- How shared state enables coordination

## 📝 Notes

- This is a **minimal but complete** project
- Focus is on **agent coordination**, not code perfection
- All tasks are **independent or have clear dependencies**
- The application is **fully functional** at the end
- Perfect for **demonstrating the framework** to teams

## 🚀 Ready to Execute?

Follow the `EXECUTION_GUIDE.md` for step-by-step instructions!

---

**Created:** 2026-05-26  
**Framework:** Agent Team Orchestration System  
**Status:** Ready for Demo Exercise
