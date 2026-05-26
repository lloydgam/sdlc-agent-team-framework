# Demo Todo App - Complete Structure

## 📊 Folder Structure with Symlinks

```
demo-todo-app/
│
├── 📄 Documentation Files
│   ├── README.md                    ← Start here! Quick start guide
│   ├── PROJECT_BRIEF.md             ← Project overview
│   ├── REQUIREMENTS.md              ← 13 feature requirements
│   ├── TASK_LIST.md                 ← 13 tasks for agents
│   ├── EXECUTION_GUIDE.md           ← 10-step execution guide
│   ├── SYMLINKS_GUIDE.md            ← How symlinks work
│   └── STRUCTURE.md                 ← This file
│
├── 📦 agents/ (Symlinked to Framework)
│   ├── team-lead-agent.md           → ../../agents/team-lead-agent.md
│   ├── backend-agent.md             → ../../agents/backend-agent.md
│   ├── frontend-agent.md            → ../../agents/frontend-agent.md
│   ├── qa-agent.md                  → ../../agents/qa-agent.md
│   ├── devops-agent.md              → ../../agents/devops-agent.md
│   ├── docs-agent.md                → ../../agents/docs-agent.md
│   └── agent-framework.js           → ../../agents/agent-framework.js
│
├── 🔄 shared/ (Symlinked to Framework)
│   ├── task-list.json               → ../../shared/task-list.json
│   └── communication-log.json       → ../../shared/communication-log.json
│
├── 📚 docs/ (Symlinked to Framework)
│   ├── EXECUTION_GUIDE.md           → ../../docs/guides/EXECUTION_GUIDE.md
│   └── DEMO_GUIDE.md                → ../../docs/guides/DEMO_GUIDE.md
│
├── 💻 src/ (Created during demo)
│   ├── index.js                     ← Main entry point
│   ├── todo.js                      ← Todo logic
│   ├── storage.js                   ← File storage
│   └── cli.js                       ← CLI interface
│
├── 🧪 tests/ (Created during demo)
│   ├── todo.test.js                 ← Unit tests
│   └── cli.test.js                  ← CLI tests
│
├── 📊 data/ (Created during demo)
│   └── todos.json                   ← Data storage
│
├── 📖 docs/ (Created during demo)
│   ├── SETUP.md                     ← Setup instructions
│   ├── USAGE.md                     ← User guide
│   └── API.md                       ← API documentation
│
└── 📋 package.json                  ← Node.js dependencies
```

## 🔗 Symlink Strategy

### Why Symlinks?

1. **Single Source of Truth**
   - Agent definitions exist in one place
   - Task list is shared across all agents
   - No file duplication

2. **Easy Updates**
   - Update agent definition once
   - All agents see the change immediately
   - Framework improvements apply to all demos

3. **Coordination**
   - All agents read/write same task list
   - Communication log is centralized
   - Progress is visible to everyone

4. **Maintainability**
   - Simpler to manage
   - Less disk space
   - Easier to track changes

### Symlink Locations

| Folder | Symlinks | Purpose |
|--------|----------|---------|
| `agents/` | 7 files | Agent role definitions + framework |
| `shared/` | 2 files | Task coordination + communication |
| `docs/` | 2 files | Reference documentation |

## 📋 Files Ready for Demo

### Documentation (Ready Now)
- ✅ README.md - Quick start
- ✅ PROJECT_BRIEF.md - Overview
- ✅ REQUIREMENTS.md - 13 requirements
- ✅ TASK_LIST.md - 13 tasks
- ✅ EXECUTION_GUIDE.md - 10 steps
- ✅ SYMLINKS_GUIDE.md - Symlink explanation
- ✅ STRUCTURE.md - This file

### Framework Access (Ready Now via Symlinks)
- ✅ agents/ - All agent definitions
- ✅ shared/ - Task list + communication log
- ✅ docs/ - Reference guides

### Code (Created During Demo)
- ⏳ src/ - Source code
- ⏳ tests/ - Test files
- ⏳ data/ - Data storage
- ⏳ docs/ - Generated documentation

## 🚀 Execution Flow

```
1. START HERE
   └─ Read README.md

2. UNDERSTAND PROJECT
   ├─ Read PROJECT_BRIEF.md
   ├─ Read REQUIREMENTS.md
   └─ Review TASK_LIST.md

3. PREPARE EXECUTION
   ├─ Read EXECUTION_GUIDE.md
   ├─ Understand SYMLINKS_GUIDE.md
   └─ Verify agent teams enabled

4. SPAWN AGENTS
   ├─ Team Lead Agent reads agents/team-lead-agent.md
   ├─ Team Lead spawns 5 specialized agents
   └─ All agents access shared/task-list.json

5. AGENTS EXECUTE
   ├─ Backend Agent creates src/ files
   ├─ Frontend Agent creates CLI interface
   ├─ QA Agent creates tests/
   ├─ DevOps Agent sets up CI/CD
   └─ Docs Agent creates docs/

6. MONITOR PROGRESS
   ├─ Check shared/task-list.json
   ├─ Review shared/communication-log.json
   └─ Resolve blockers as needed

7. VERIFY COMPLETION
   ├─ All 13 tasks complete
   ├─ Application works
   ├─ Tests pass
   └─ Documentation complete
```

## 🎯 Agent Access Pattern

Each agent follows this pattern:

```javascript
// 1. Read role definition (via symlink)
const roleDefinition = readFile('agents/[role]-agent.md');

// 2. Access framework utilities (via symlink)
const framework = require('agents/agent-framework.js');

// 3. Load task list (via symlink)
const tasks = readJSON('shared/task-list.json');

// 4. Claim task
const task = framework.claimTask(taskId, agentRole);

// 5. Execute work
executeTask(task);

// 6. Update progress (via symlink)
updateJSON('shared/task-list.json', updatedTasks);

// 7. Log communication (via symlink)
appendJSON('shared/communication-log.json', logEntry);
```

## ✅ Verification Checklist

Before starting the demo:

- [ ] All symlinks are valid: `ls -la agents/`
- [ ] Task list is accessible: `cat shared/task-list.json`
- [ ] Communication log exists: `cat shared/communication-log.json`
- [ ] Agent definitions are readable: `head agents/team-lead-agent.md`
- [ ] Framework is accessible: `head agents/agent-framework.js`
- [ ] Documentation is complete: `ls -la docs/`
- [ ] package.json is present: `cat package.json`

## 📊 Demo Statistics

| Metric | Value |
|--------|-------|
| **Total Tasks** | 13 |
| **Agent Roles** | 5 |
| **Symlinked Files** | 12 |
| **Documentation Files** | 7 |
| **Expected Duration** | ~2 hours |
| **Code Files to Create** | 4 (src/) |
| **Test Files to Create** | 2 (tests/) |
| **Documentation to Create** | 3 (docs/) |

## 🎓 Learning Outcomes

After this demo, you'll understand:

✅ How agent teams coordinate work  
✅ How symlinks enable shared resources  
✅ How task lists coordinate agents  
✅ How dependencies are managed  
✅ How blockers are escalated  
✅ How parallel execution works  
✅ How to build multi-agent systems  

## 🚀 Ready to Execute?

1. **Read** `README.md` for quick start
2. **Review** `EXECUTION_GUIDE.md` for step-by-step instructions
3. **Understand** `SYMLINKS_GUIDE.md` for coordination mechanism
4. **Follow** the 10-step execution guide
5. **Watch** agents work in parallel
6. **Celebrate** when all 13 tasks complete!

---

**Created:** 2026-05-26  
**Framework:** Agent Team Orchestration System  
**Status:** Ready for Demo Exercise  
**Symlinks:** ✅ All configured and working
