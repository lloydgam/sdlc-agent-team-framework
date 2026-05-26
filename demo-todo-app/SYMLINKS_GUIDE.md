# Symlinks Guide - Demo Todo App

This document explains the symlinks used in the demo-todo-app folder to access shared framework resources.

## 📌 What are Symlinks?

Symlinks (symbolic links) are shortcuts that point to files in other locations. They allow agents to access shared framework files without duplicating them.

## 🔗 Symlinks in This Demo

### Agents Folder (`agents/`)

All agent role definitions are symlinked from the main framework:

```
agents/
├── team-lead-agent.md      → ../../agents/team-lead-agent.md
├── backend-agent.md        → ../../agents/backend-agent.md
├── frontend-agent.md       → ../../agents/frontend-agent.md
├── qa-agent.md             → ../../agents/qa-agent.md
├── devops-agent.md         → ../../agents/devops-agent.md
├── docs-agent.md           → ../../agents/docs-agent.md
└── agent-framework.js      → ../../agents/agent-framework.js
```

**Purpose:** Agents can read their role definitions and access shared utilities

**Usage:** When spawning agents, they read from these symlinked files

### Shared Folder (`shared/`)

Coordination files are symlinked from the main framework:

```
shared/
├── task-list.json          → ../../shared/task-list.json
└── communication-log.json  → ../../shared/communication-log.json
```

**Purpose:** All agents read/write to the same task list and communication log

**Usage:** Agents update progress, claim tasks, and report blockers through these files

### Docs Folder (`docs/`)

Reference documentation is symlinked:

```
docs/
├── EXECUTION_GUIDE.md      → ../../docs/guides/EXECUTION_GUIDE.md
└── DEMO_GUIDE.md           → ../../docs/guides/DEMO_GUIDE.md
```

**Purpose:** Agents can reference execution and demo guides

**Usage:** Agents consult these guides for best practices and procedures

## 🎯 How Agents Use Symlinks

### 1. **Team Lead Agent**
- Reads `agents/team-lead-agent.md` (symlink)
- Accesses `agents/agent-framework.js` (symlink)
- Updates `shared/task-list.json` (symlink)
- Logs to `shared/communication-log.json` (symlink)

### 2. **Backend Developer Agent**
- Reads `agents/backend-agent.md` (symlink)
- Accesses `agents/agent-framework.js` (symlink)
- Updates `shared/task-list.json` (symlink)
- Creates code in `src/` folder

### 3. **Frontend Developer Agent**
- Reads `agents/frontend-agent.md` (symlink)
- Accesses `agents/agent-framework.js` (symlink)
- Updates `shared/task-list.json` (symlink)
- Creates code in `src/` folder

### 4. **QA Engineer Agent**
- Reads `agents/qa-agent.md` (symlink)
- Accesses `agents/agent-framework.js` (symlink)
- Updates `shared/task-list.json` (symlink)
- Creates tests in `tests/` folder

### 5. **DevOps Engineer Agent**
- Reads `agents/devops-agent.md` (symlink)
- Accesses `agents/agent-framework.js` (symlink)
- Updates `shared/task-list.json` (symlink)
- Sets up CI/CD configuration

### 6. **Documentation Specialist Agent**
- Reads `agents/docs-agent.md` (symlink)
- Accesses `agents/agent-framework.js` (symlink)
- Updates `shared/task-list.json` (symlink)
- Creates docs in `docs/` folder

## ✅ Verification

To verify symlinks are working:

```bash
# Check symlinks in agents folder
ls -la agents/

# Check symlinks in shared folder
ls -la shared/

# Check symlinks in docs folder
ls -la docs/

# Verify symlink targets
file agents/team-lead-agent.md
file shared/task-list.json
```

Expected output: `symbolic link to ...`

## 🔄 How Symlinks Enable Coordination

1. **Single Source of Truth**
   - All agents access the same `task-list.json`
   - No duplicate files to sync
   - Changes are immediately visible to all agents

2. **Shared Framework Access**
   - All agents use the same `agent-framework.js`
   - Consistent utilities across all agents
   - Framework updates apply to all agents

3. **Consistent Role Definitions**
   - Each agent reads their own role definition
   - Definitions are maintained in one place
   - Easy to update agent behaviors

4. **Centralized Communication**
   - All agents log to same `communication-log.json`
   - Complete audit trail of all actions
   - Easy to track agent interactions

## 📋 Symlink Benefits

✅ **No Duplication** - Files exist in one place  
✅ **Easy Updates** - Change once, affects all agents  
✅ **Consistency** - All agents use same versions  
✅ **Coordination** - Shared state enables teamwork  
✅ **Maintainability** - Simpler to manage  

## ⚠️ Important Notes

1. **Symlinks are Read-Only References**
   - Agents can read symlinked files
   - Agents can write to symlinked files (if permissions allow)
   - Symlinks don't duplicate data

2. **Symlinks Must Be Valid**
   - If you move the demo folder, symlinks may break
   - Keep the folder structure intact
   - Don't delete the parent framework files

3. **Git and Symlinks**
   - Git can track symlinks
   - Symlinks are stored as symlinks in git
   - When cloned, symlinks are preserved

## 🚀 During the Demo

When you execute the demo:

1. Agents will automatically find their role definitions via symlinks
2. All agents will coordinate through the shared task list
3. Progress updates will be visible to all agents
4. Blockers will be logged to the communication log
5. Everything stays synchronized

**No manual file management needed!** The symlinks handle it all.

---

**Created:** 2026-05-26  
**Purpose:** Explain symlink structure for demo execution  
**Status:** Ready for use
