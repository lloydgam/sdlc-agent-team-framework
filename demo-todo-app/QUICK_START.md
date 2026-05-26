# 🚀 Quick Start - Demo Todo App

## ⚡ 30-Second Setup

```bash
# 1. Navigate to demo folder
cd demo-todo-app

# 2. Verify symlinks are working
ls -la agents/
ls -la shared/

# 3. Read the guide
cat README.md

# 4. Follow execution guide
cat EXECUTION_GUIDE.md
```

## 📋 What You'll Find

| File | Purpose | Read Time |
|------|---------|-----------|
| `README.md` | Quick overview | 2 min |
| `PROJECT_BRIEF.md` | Project scope | 3 min |
| `REQUIREMENTS.md` | What to build | 5 min |
| `TASK_LIST.md` | 13 tasks | 5 min |
| `EXECUTION_GUIDE.md` | How to execute | 10 min |
| `SYMLINKS_GUIDE.md` | How coordination works | 5 min |
| `STRUCTURE.md` | Complete structure | 5 min |
| `DEMO_READY.md` | Readiness checklist | 3 min |

**Total Reading Time: ~40 minutes**

## 🎯 3-Step Execution

### Step 1: Prepare (10 min)
- Verify agent teams enabled: `~/.claude/settings.json`
- Read `EXECUTION_GUIDE.md` Step 0-4
- Create project structure

### Step 2: Execute (60 min)
- Spawn Team Lead Agent (Step 5)
- Spawn 5 specialized agents (Step 6)
- Monitor progress (Step 7)
- Resolve blockers (Step 8)

### Step 3: Verify (30 min)
- Check all tasks complete (Step 9)
- Verify application works (Step 9)
- Celebrate success! (Step 10)

## ✅ Pre-Demo Checklist

- [ ] Agent teams enabled in `~/.claude/settings.json`
- [ ] Read `README.md`
- [ ] Read `EXECUTION_GUIDE.md`
- [ ] Understand `SYMLINKS_GUIDE.md`
- [ ] Verify symlinks: `ls -la agents/`
- [ ] Check task list: `cat shared/task-list.json`

## 🔗 Symlinks at a Glance

```
agents/              → Framework agent definitions
shared/              → Shared task list & communication log
docs/                → Reference documentation
```

All symlinks point to the main framework, enabling:
- Single source of truth
- Real-time coordination
- Shared state management

## 🎓 What Agents Will Do

1. **Team Lead** - Orchestrates the project
2. **Backend Dev** - Creates core logic (3 tasks)
3. **Frontend Dev** - Creates CLI interface (2 tasks)
4. **QA Engineer** - Creates tests (3 tasks)
5. **DevOps** - Sets up CI/CD (2 tasks)
6. **Docs Specialist** - Creates documentation (3 tasks)

## 📊 Expected Outcome

After ~2 hours:
- ✅ 13 tasks completed
- ✅ Working todo application
- ✅ 80%+ test coverage
- ✅ Complete documentation
- ✅ Agents coordinated successfully

## 🚀 Ready?

```bash
# Start here
cat README.md

# Then follow
cat EXECUTION_GUIDE.md

# Watch agents work!
```

---

**Status:** ✅ READY  
**Duration:** ~2 hours  
**Complexity:** Minimal (focus on coordination)
