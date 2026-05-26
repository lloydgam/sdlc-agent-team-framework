# Demo Execution Guide: Simple Todo CLI Application

> **Step-by-step guide to execute the demo project with agent teams**

---

## Prerequisites

Before you start, make sure you have:

- ✅ Claude Code v2.1.32 or later (`claude --version`)
- ✅ Agent teams enabled in `~/.claude/settings.json`
- ✅ Node.js 14+ or Python 3.8+ installed
- ✅ This guide and demo project files

---

## Step 1: Verify Agent Teams are Enabled

Test that agent teams are working:

```bash
# Check Claude Code version
claude --version

# Should be v2.1.32 or later
```

Verify settings.json has agent teams enabled:

```bash
# Check settings
cat ~/.claude/settings.json | grep CLAUDE_CODE_EXPERIMENTAL_AGENT_TEAMS
```

Should show:
```json
"CLAUDE_CODE_EXPERIMENTAL_AGENT_TEAMS": "1"
```

---

## Step 2: Create Project Directory

Create a directory for the demo project:

```bash
# Create project folder
mkdir -p ~/demo-todo-app
cd ~/demo-todo-app

# Create subdirectories
mkdir -p src tests data docs
```

---

## Step 3: Copy Project Files

Copy the demo project files to your project directory:

```bash
# Copy project documentation
cp ~/Documents/projects/software-dev-team-product/DEMO_PROJECT_BRIEF.md PROJECT_BRIEF.md
cp ~/Documents/projects/software-dev-team-product/DEMO_PROJECT_REQUIREMENTS.md REQUIREMENTS.md
cp ~/Documents/projects/software-dev-team-product/DEMO_PROJECT_TASK_LIST.md TASK_LIST.md

# Copy framework files
cp -r ~/Documents/projects/software-dev-team-product/agents ./
cp -r ~/Documents/projects/software-dev-team-product/shared ./
```

---

## Step 4: Verify Project Structure

Check that everything is in place:

```bash
# List project structure
tree -L 2

# Should show:
# demo-todo-app/
# ├── PROJECT_BRIEF.md
# ├── REQUIREMENTS.md
# ├── TASK_LIST.md
# ├── agents/
# │   ├── team-lead-agent.md
# │   ├── backend-agent.md
# │   ├── frontend-agent.md
# │   ├── qa-agent.md
# │   ├── devops-agent.md
# │   ├── docs-agent.md
# │   └── agent-framework.js
# ├── shared/
# │   ├── task-list.json
# │   └── communication-log.json
# ├── src/
# ├── tests/
# ├── data/
# └── docs/
```

---

## Step 5: Spawn Team Lead Agent

In Claude Code, run this command to spawn the Team Lead:

```
SPAWN_AGENT: TEAM_LEAD

Context:
- Read PROJECT_BRIEF.md
- Read REQUIREMENTS.md
- Review TASK_LIST.md
- Use agents/agent-framework.js for task management

Instructions:
1. Analyze the demo project requirements
2. Verify task decomposition
3. Identify task dependencies
4. Update shared/task-list.json with current status
5. Prepare to spawn specialized agents
6. Report when ready to spawn agents
```

**What Team Lead will do:**
- Analyze the project
- Verify all 13 tasks are clear
- Identify dependencies
- Prepare task list
- Report readiness

---

## Step 6: Spawn Specialized Agents

Once Team Lead is ready, spawn all 5 agents:

```
SPAWN_AGENT: BACKEND_DEVELOPER
Context: PROJECT_BRIEF.md, REQUIREMENTS.md, TASK_LIST.md
Task: Claim and execute backend tasks (TASK-001, TASK-002, TASK-003)

SPAWN_AGENT: FRONTEND_DEVELOPER
Context: PROJECT_BRIEF.md, REQUIREMENTS.md, TASK_LIST.md
Task: Claim and execute frontend tasks (TASK-004, TASK-005)

SPAWN_AGENT: QA_ENGINEER
Context: PROJECT_BRIEF.md, REQUIREMENTS.md, TASK_LIST.md
Task: Claim and execute QA tasks (TASK-006, TASK-007, TASK-008)

SPAWN_AGENT: DEVOPS_ENGINEER
Context: PROJECT_BRIEF.md, REQUIREMENTS.md, TASK_LIST.md
Task: Claim and execute DevOps tasks (TASK-009, TASK-010)

SPAWN_AGENT: DOCUMENTATION_SPECIALIST
Context: PROJECT_BRIEF.md, REQUIREMENTS.md, TASK_LIST.md
Task: Claim and execute documentation tasks (TASK-011, TASK-012, TASK-013)
```

**What agents will do:**
- Read project context
- Check task list
- Claim available tasks
- Begin execution
- Update progress regularly

---

## Step 7: Monitor Progress

While agents work, monitor progress:

### Check Task Status
```bash
# View task list
cat shared/task-list.json | jq '.tasks[] | {id, title, status, assignee, progress}'

# View completed tasks
cat shared/task-list.json | jq '.tasks[] | select(.status == "DONE")'

# View blocked tasks
cat shared/task-list.json | jq '.tasks[] | select(.status == "BLOCKED")'
```

### Check Communications
```bash
# View agent communications
cat shared/communication-log.json | tail -20

# View latest updates
cat shared/communication-log.json | jq '.[-5:]'
```

### Calculate Progress
```bash
# Show progress percentage
cat shared/task-list.json | jq '.tasks | length as $total | map(select(.status == "DONE")) | length as $done | {total: $total, done: $done, percentage: ($done / $total * 100 | round)}'
```

---

## Step 8: Resolve Blockers

If agents report blockers:

1. **Identify the blocker**
   ```bash
   cat shared/task-list.json | jq '.tasks[] | select(.status == "BLOCKED")'
   ```

2. **Understand the issue**
   - Read the blocker description
   - Check communication log for details

3. **Resolve the blocker**
   - Provide guidance to Team Lead
   - Ask Team Lead to coordinate resolution
   - Verify fix with agent

4. **Resume work**
   - Agent resumes task
   - Monitor progress

---

## Step 9: Verify Completion

When all tasks are done:

### Check All Tasks Complete
```bash
# Verify all tasks are DONE
cat shared/task-list.json | jq '.tasks | map(select(.status != "DONE")) | length'

# Should return: 0
```

### Verify Application Works
```bash
# Test the todo app
cd ~/demo-todo-app
npm install  # or pip install -r requirements.txt
npm start    # or python src/index.py

# Try commands
todo add "Test todo"
todo list
todo complete 1
todo list
```

### Check Test Coverage
```bash
# Run tests
npm test     # or pytest

# Should show > 80% coverage
```

### Verify Documentation
```bash
# Check documentation files exist
ls -la docs/
# Should have: SETUP.md, USAGE.md, API.md
```

---

## Step 10: Celebrate Success! 🎉

When everything is complete:

```bash
# View final task list
cat shared/task-list.json | jq '.tasks | map(.status) | group_by(.) | map({status: .[0], count: length})'

# Should show:
# [
#   {
#     "status": "DONE",
#     "count": 13
#   }
# ]
```

---

## Expected Timeline

| Phase | Duration | Tasks |
|-------|----------|-------|
| Setup | 10 min | Create folders, copy files |
| Team Lead Analysis | 10 min | Analyze project, prepare tasks |
| Agent Spawning | 5 min | Spawn all 5 agents |
| Development | 60 min | Agents execute tasks in parallel |
| Testing | 20 min | QA validates work |
| Documentation | 15 min | Docs agent completes guides |
| Verification | 10 min | Verify everything works |
| **Total** | **~2 hours** | **13 tasks complete** |

---

## Troubleshooting

### Agents Won't Spawn
- [ ] Verify agent teams enabled: `echo $CLAUDE_CODE_EXPERIMENTAL_AGENT_TEAMS`
- [ ] Check Claude Code version: `claude --version` (must be v2.1.32+)
- [ ] Restart Claude Code
- [ ] Check agent files exist in agents/ folder

### Tasks Not Updating
- [ ] Check shared/task-list.json exists
- [ ] Verify JSON syntax: `jq . shared/task-list.json`
- [ ] Check agent has write permissions
- [ ] Review communication log for errors

### Application Won't Run
- [ ] Check Node.js/Python installed: `node --version` or `python --version`
- [ ] Install dependencies: `npm install` or `pip install -r requirements.txt`
- [ ] Check src/ folder has code files
- [ ] Review error messages in console

### Tests Failing
- [ ] Check test files exist in tests/ folder
- [ ] Run tests manually: `npm test` or `pytest`
- [ ] Review test output for failures
- [ ] Ask QA agent to investigate

---

## Success Checklist

- ✅ Agent teams enabled
- ✅ Project directory created
- ✅ Files copied
- ✅ Team Lead spawned
- ✅ All 5 agents spawned
- ✅ Tasks being executed
- ✅ Progress updating
- ✅ No blockers
- ✅ All tasks complete
- ✅ Application works
- ✅ Tests passing
- ✅ Documentation complete
- ✅ Success! 🎉

---

## Next Steps

After completing the demo:

1. **Review what happened**
   - Check shared/task-list.json
   - Review communication log
   - Examine generated code

2. **Understand the framework**
   - How agents coordinated
   - How tasks were managed
   - How dependencies worked

3. **Try your own project**
   - Create PROJECT_BRIEF.md
   - Create REQUIREMENTS.md
   - Create TASK_LIST.md
   - Spawn agents
   - Build something real!

---

**Ready to execute the demo?** 🚀

Start with Step 1 and follow along. The demo should complete in about 2 hours!
