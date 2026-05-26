# Demo Project: Simple Todo CLI Application

> **Minimal project to demonstrate agent teams in action**

A simple command-line todo application that showcases how agent teams coordinate work.

---

## Project Overview

Build a lightweight CLI todo application with:
- Add, list, and complete todos
- Store todos in a JSON file
- Simple command-line interface

**Why this project?**
- Small enough to complete quickly (1-2 hours)
- Large enough to show agent coordination
- Covers all agent roles (backend, frontend, QA, DevOps, docs)
- Real, working application at the end

---

## Goals

✅ Demonstrate agent team coordination
✅ Show parallel work execution
✅ Complete a working application
✅ Validate the framework works

---

## Success Criteria

- ✅ CLI application works
- ✅ Todos can be added, listed, completed
- ✅ Data persists in JSON file
- ✅ All tests pass
- ✅ Documentation complete
- ✅ Deployed and working

---

## Scope

### What's Included
- Simple CLI interface (Node.js or Python)
- JSON file storage
- Basic commands: add, list, complete, delete
- Unit tests
- Documentation

### What's NOT Included
- Database (use JSON file)
- Web interface (CLI only)
- User authentication
- Cloud deployment

---

## Team & Timeline

**Team**: 5 agents
- Backend Developer: Core logic
- Frontend Developer: CLI interface
- QA Engineer: Testing
- DevOps Engineer: Setup & deployment
- Documentation Specialist: Guides

**Timeline**: 2-3 hours total
- Planning: 15 minutes
- Development: 90 minutes
- Testing: 30 minutes
- Documentation: 15 minutes

---

## Technical Stack

- **Language**: Node.js (JavaScript) or Python
- **Storage**: JSON file
- **Testing**: Jest (Node) or pytest (Python)
- **CLI**: Commander.js (Node) or Click (Python)

---

## Key Features

### 1. Add Todo
```
todo add "Buy groceries"
✓ Todo added: Buy groceries
```

### 2. List Todos
```
todo list
1. [ ] Buy groceries
2. [x] Pay bills
3. [ ] Call mom
```

### 3. Complete Todo
```
todo complete 1
✓ Todo completed: Buy groceries
```

### 4. Delete Todo
```
todo delete 1
✓ Todo deleted: Buy groceries
```

---

## Project Structure

```
todo-app/
├── PROJECT_BRIEF.md          ← This file
├── REQUIREMENTS.md           ← Feature requirements
├── TASK_LIST.md              ← Tasks for agents
├── README.md                 ← User guide
│
├── src/
│   ├── index.js              ← Main entry point
│   ├── todo.js               ← Todo logic
│   ├── storage.js            ← File storage
│   └── cli.js                ← CLI interface
│
├── tests/
│   ├── todo.test.js          ← Unit tests
│   └── cli.test.js           ← CLI tests
│
├── data/
│   └── todos.json            ← Data file
│
└── docs/
    ├── SETUP.md              ← Setup guide
    ├── USAGE.md              ← User guide
    └── API.md                ← API documentation
```

---

## Why This Demo?

✅ **Small**: Can be completed in 2-3 hours
✅ **Real**: Actual working application
✅ **Complete**: Shows all agent roles
✅ **Demonstrable**: Easy to show working features
✅ **Scalable**: Can be extended later

---

## Next Steps

1. Create REQUIREMENTS.md with feature details
2. Create TASK_LIST.md with specific tasks
3. Copy framework files to project
4. Enable agent teams in settings
5. Spawn Team Lead agent
6. Spawn specialized agents
7. Monitor progress
8. Celebrate success! 🎉

---

**Ready to build something real with agent teams!** 🚀
