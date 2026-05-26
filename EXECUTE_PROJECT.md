# Execute Project - Automated Agent Spawning

> **One-command execution to spawn all agents and start your project**

Once your project details are ready (brief, requirements, task list), use this guide to execute everything automatically.

---

## 📋 Prerequisites Checklist

Before executing, make sure you have:

- ✅ **Claude Code with Team Agents enabled** - Configure settings first
- ✅ **PROJECT_BRIEF.md** - What are you building?
- ✅ **REQUIREMENTS.md** - What features do you need?
- ✅ **TASK_LIST.md** - What tasks need to be done? (use the simple format)
- ✅ **Project folder organized** - With agents/ and shared/ folders
- ✅ **Agent files copied** - From the framework repo to your project
- ✅ **Access to Claude Code** - To spawn agents

---

## ⚙️ Step 0: Enable Agent Teams in ~/.claude/settings.json

Before you can spawn agents, you need to enable agent teams in your `~/.claude/settings.json` file.

### Enable Agent Teams

**Agent teams are experimental and disabled by default.** Enable them by adding the `CLAUDE_CODE_EXPERIMENTAL_AGENT_TEAMS` environment variable to your settings.

**Edit your `~/.claude/settings.json` file:**

1. **Open the file**
   ```bash
   # On macOS/Linux
   nano ~/.claude/settings.json
   
   # Or use your preferred editor
   vim ~/.claude/settings.json
   code ~/.claude/settings.json
   ```

2. **Add the environment variable**
   
   Add this to your settings.json:
   
   ```json
   {
     "env": {
       "CLAUDE_CODE_EXPERIMENTAL_AGENT_TEAMS": "1"
     }
   }
   ```

3. **Optional: Configure Display Mode**
   
   You can also configure how teammates are displayed:
   
   ```json
   {
     "env": {
       "CLAUDE_CODE_EXPERIMENTAL_AGENT_TEAMS": "1"
     },
     "teammateMode": "in-process"
   }
   ```
   
   Display mode options:
   - `"auto"` (default): Uses split panes if in tmux, otherwise in-process
   - `"in-process"`: All teammates run in your main terminal (works anywhere)
   - `"tmux"`: Uses split panes with tmux (requires tmux or iTerm2)

4. **Save the file**
   - Save and close the editor
   - Restart Claude Code for changes to take effect

### Requirements

- **Claude Code v2.1.32 or later**: Check with `claude --version`
- **For split-pane mode**: tmux or iTerm2 with `it2` CLI installed

### Verify Agent Teams are Enabled

Test that agent teams are working:

```
Create an agent team to test if agent teams are enabled.
Spawn 2 teammates to verify the setup works.
```

If teammates spawn and appear, agent teams are enabled! ✅

### Troubleshooting

**If teammates won't spawn:**
- [ ] Verify `CLAUDE_CODE_EXPERIMENTAL_AGENT_TEAMS` is set to `"1"` in settings.json
- [ ] Check Claude Code version: `claude --version` (must be v2.1.32+)
- [ ] Restart Claude Code after editing settings.json
- [ ] Check JSON syntax is valid
- [ ] Verify agent files exist in agents/ folder
- [ ] Review error messages in console

**Validate JSON syntax:**
```bash
# Check if JSON is valid
jq . ~/.claude/settings.json > /dev/null && echo "Valid JSON" || echo "Invalid JSON"
```

**For split-pane mode issues:**
- [ ] Verify tmux is installed: `which tmux`
- [ ] For iTerm2: verify `it2` CLI is installed
- [ ] Enable Python API in iTerm2 preferences

---

## 📁 Step 1: Copy Framework Files to Your Project

Before you can execute agents, you need to copy the necessary files from the framework repository to your project directory.

### Option A: Copy Individual Files (Recommended for New Projects)

```bash
# Create your project directory structure
mkdir -p your-project/agents
mkdir -p your-project/shared
mkdir -p your-project/docs

# Copy agent files from the framework repo
cp /path/to/framework/agents/team-lead-agent.md your-project/agents/
cp /path/to/framework/agents/backend-agent.md your-project/agents/
cp /path/to/framework/agents/frontend-agent.md your-project/agents/
cp /path/to/framework/agents/qa-agent.md your-project/agents/
cp /path/to/framework/agents/devops-agent.md your-project/agents/
cp /path/to/framework/agents/docs-agent.md your-project/agents/
cp /path/to/framework/agents/agent-framework.js your-project/agents/

# Copy documentation files
cp /path/to/framework/README.md your-project/
cp /path/to/framework/TASK_LIST_TEMPLATE.md your-project/
cp /path/to/framework/docs/guides/EXECUTION_GUIDE.md your-project/docs/
cp /path/to/framework/docs/guides/DEMO_GUIDE.md your-project/docs/
```

### Option B: Clone the Entire Framework (For Reference)

```bash
# Clone the framework repository
git clone https://github.com/lloydgam/sdlc-agent-team-framework.git your-project

# This gives you everything including documentation and examples
```

### Your Project Structure After Copying

```
your-project/
├── PROJECT_BRIEF.md          ← Create this (what are you building?)
├── REQUIREMENTS.md           ← Create this (what features do you need?)
├── TASK_LIST.md              ← Create this (use TASK_LIST_TEMPLATE.md as reference)
├── README.md                 ← Copied from framework
├── TASK_LIST_TEMPLATE.md     ← Copied from framework (reference)
├── EXECUTE_PROJECT.md        ← Copied from framework (this file)
│
├── agents/                   ← Copied from framework
│   ├── team-lead-agent.md
│   ├── backend-agent.md
│   ├── frontend-agent.md
│   ├── qa-agent.md
│   ├── devops-agent.md
│   ├── docs-agent.md
│   └── agent-framework.js
│
├── shared/                   ← Created by agents during execution
│   ├── task-list.json
│   └── communication-log.json
│
└── docs/                     ← Copied from framework (reference)
    ├── EXECUTION_GUIDE.md
    └── DEMO_GUIDE.md
```

### What Each File Does

| File | Source | Purpose |
|------|--------|---------|
| PROJECT_BRIEF.md | You create | Define what you're building |
| REQUIREMENTS.md | You create | List features and constraints |
| TASK_LIST.md | You create (use template) | Break work into tasks |
| agents/*.md | Copy from framework | Agent role definitions and logic |
| agent-framework.js | Copy from framework | Shared utilities for agents |
| shared/task-list.json | Auto-created | Central task coordination |
| shared/communication-log.json | Auto-created | Agent communication tracking |

---

## 🚀 One-Command Execution

### Step 2: Verify Files Are Copied

Make sure you've completed **Step 1** above and have all agent files in your project's `agents/` directory.

### Step 3: Copy This Command

Copy the entire command below and paste it into Claude Code:

```
SPAWN_AGENT: TEAM_LEAD

Context:
- Read PROJECT_BRIEF.md
- Read REQUIREMENTS.md
- Review TASK_LIST.md
- Use agents/agent-framework.js

Instructions:
1. Analyze project requirements
2. Verify task decomposition
3. Identify dependencies
4. Update shared/task-list.json from TASK_LIST.md
5. Spawn all 5 specialized agents with this exact command:

SPAWN_AGENT: BACKEND_DEVELOPER
Context: PROJECT_BRIEF.md, REQUIREMENTS.md, TASK_LIST.md
Task: Claim backend tasks and execute

SPAWN_AGENT: FRONTEND_DEVELOPER
Context: PROJECT_BRIEF.md, REQUIREMENTS.md, TASK_LIST.md
Task: Claim frontend tasks and execute

SPAWN_AGENT: QA_ENGINEER
Context: PROJECT_BRIEF.md, REQUIREMENTS.md, TASK_LIST.md
Task: Claim QA tasks and execute

SPAWN_AGENT: DEVOPS_ENGINEER
Context: PROJECT_BRIEF.md, REQUIREMENTS.md, TASK_LIST.md
Task: Claim DevOps tasks and execute

SPAWN_AGENT: DOCUMENTATION_SPECIALIST
Context: PROJECT_BRIEF.md, REQUIREMENTS.md, TASK_LIST.md
Task: Claim documentation tasks and execute

6. Report status when all agents are spawned
```

### Step 4: Paste in Claude Code

Paste the command into Claude Code and press Enter.

### Step 5: Wait for Execution

The Team Lead Agent will:
1. ✅ Analyze your project
2. ✅ Verify task decomposition
3. ✅ Identify dependencies
4. ✅ Spawn all 5 specialized agents automatically
5. ✅ Report when all agents are ready

All agents will then:
1. ✅ Check task list
2. ✅ Claim available tasks
3. ✅ Begin execution
4. ✅ Update progress regularly

---

## 📊 What Happens Next

### Agents Start Working
- **Backend Developer** → Claims backend tasks, builds APIs and databases
- **Frontend Developer** → Claims frontend tasks, builds UI and components
- **QA Engineer** → Claims QA tasks, writes tests and validates work
- **DevOps Engineer** → Claims DevOps tasks, sets up infrastructure
- **Documentation Specialist** → Claims documentation tasks, writes guides

### Team Lead Monitors
- Checks task list regularly
- Identifies blockers
- Escalates issues
- Supports team

### You Monitor Progress
- Check `shared/task-list.json` for task status
- Review `shared/communication-log.json` for agent updates
- Identify blockers and support resolution

---

## 📈 Monitoring Your Project

### Check Task Status
```bash
cat shared/task-list.json | jq '.tasks[] | {id, title, status, assignee, progress}'
```

### View Blocked Tasks
```bash
cat shared/task-list.json | jq '.tasks[] | select(.status == "BLOCKED")'
```

### Check Agent Communications
```bash
cat shared/communication-log.json | tail -20
```

### Calculate Progress
```bash
cat shared/task-list.json | jq '.tasks | length as $total | map(select(.status == "DONE")) | length as $done | {total: $total, done: $done, percentage: ($done / $total * 100 | round)}'
```

---

## 🔄 For Existing Projects: Adding Features or Fixing Bugs

If you have an existing project and want to add new features or fix bugs, use this streamlined approach:

### Quick Setup for Existing Projects

**Step 1: Document the Work**
```markdown
# FEATURE_REQUEST.md or BUG_REPORT.md

## What needs to be done?
- Feature description or bug details
- Requirements and acceptance criteria
- Affected components (backend, frontend, etc.)
```

**Step 2: Create Task List**
Use TASK_LIST_TEMPLATE.md format to break work into specific tasks:
```markdown
### TASK-101: Feature/Bug Task Title
- **Assigned To:** Backend Developer (or appropriate agent)
- **Status:** TODO
- **Priority:** HIGH
- **Depends On:** None
- **Description:** What needs to be done
- **Completion Criteria:**
  - Criterion 1
  - Criterion 2
```

**Step 3: Spawn Team Lead for Existing Project**
```
SPAWN_AGENT: TEAM_LEAD

Context:
- Review existing project documentation
- Read FEATURE_REQUEST.md or BUG_REPORT.md
- Review TASK_LIST.md with specific work items
- Use agents/agent-framework.js

Instructions:
1. Analyze the feature request or bug report
2. Decompose into specific tasks
3. Identify which agents are needed
4. Update shared/task-list.json
5. Spawn only the agents needed for this work
```

**Step 4: Spawn Only Needed Agents**

For **Bug Fixes** (typically 2-3 agents):
```
SPAWN_AGENT: BACKEND_DEVELOPER      (if backend bug)
SPAWN_AGENT: FRONTEND_DEVELOPER     (if frontend bug)
SPAWN_AGENT: QA_ENGINEER            (to verify fix)
```

For **New Features** (typically 3-4 agents):
```
SPAWN_AGENT: BACKEND_DEVELOPER      (if backend work)
SPAWN_AGENT: FRONTEND_DEVELOPER     (if frontend work)
SPAWN_AGENT: QA_ENGINEER            (to test feature)
SPAWN_AGENT: DOCUMENTATION_SPECIALIST (to document)
```

For **Infrastructure Changes** (typically 2 agents):
```
SPAWN_AGENT: DEVOPS_ENGINEER        (infrastructure)
SPAWN_AGENT: QA_ENGINEER            (to verify)
```

### Example: Adding Payment Processing

**FEATURE_REQUEST.md:**
```markdown
# Feature: Payment Processing

## Description
Add payment processing to the e-commerce platform

## Requirements
- Support credit card payments
- Integrate with Stripe API
- Handle payment validation
- Store transaction history

## Scope
- Backend: Payment API endpoints
- Frontend: Payment form UI
- QA: Payment flow testing
- Docs: Payment API documentation
```

**TASK_LIST.md:**
```markdown
### TASK-101: Payment API Design
- **Assigned To:** Backend Developer
- **Status:** TODO
- **Priority:** HIGH
- **Depends On:** None
- **Description:** Design payment API endpoints and Stripe integration
- **Completion Criteria:**
  - API endpoints defined
  - Stripe integration planned
  - Error handling documented

### TASK-102: Payment Form UI
- **Assigned To:** Frontend Developer
- **Status:** TODO
- **Priority:** HIGH
- **Depends On:** TASK-101
- **Description:** Build payment form component
- **Completion Criteria:**
  - Form component created
  - Validation implemented
  - Styling complete

### TASK-103: Payment Testing
- **Assigned To:** QA Engineer
- **Status:** TODO
- **Priority:** HIGH
- **Depends On:** TASK-101, TASK-102
- **Description:** Test payment flow end-to-end
- **Completion Criteria:**
  - Test cases written
  - All tests passing
  - Edge cases covered
```

**Then spawn:**
```
SPAWN_AGENT: TEAM_LEAD
[context about payment feature]

SPAWN_AGENT: BACKEND_DEVELOPER
SPAWN_AGENT: FRONTEND_DEVELOPER
SPAWN_AGENT: QA_ENGINEER
SPAWN_AGENT: DOCUMENTATION_SPECIALIST
```

---

## 🔄 Daily Execution Cycle

### Morning
1. Check task list for overnight updates
2. Review progress percentage
3. Identify any blockers
4. Plan the day

### During Day
1. Agents execute tasks
2. Team Lead monitors progress
3. Blockers are reported and resolved
4. Progress is updated regularly

### Evening
1. Review daily progress
2. Calculate velocity
3. Identify risks
4. Plan next day

---

## 🚨 If Something Goes Wrong

### Agent Not Responding
1. Check task list for last update
2. Send direct message to agent
3. Escalate to Team Lead if no response
4. Reassign task if needed

### Blocker Not Resolved
1. Verify blocker is documented
2. Escalate to Team Lead
3. Investigate root cause
4. Coordinate resolution
5. Resume work when resolved

### Quality Issues
1. QA reports issues immediately
2. Development team fixes issues
3. Increase testing frequency
4. Implement quality gates

### Timeline Slipping
1. Identify root causes
2. Assess impact
3. Adjust timeline if needed
4. Increase resources if possible
5. Reduce scope if necessary

---

## ✅ Success Checklist

### Phase 1: Setup (Before Execution)
- ✅ PROJECT_BRIEF.md created
- ✅ REQUIREMENTS.md created
- ✅ TASK_LIST.md created (using simple format)
- ✅ Project folder organized
- ✅ Agent files copied

### Phase 2: Execution (During Project)
- ✅ Team Lead spawned
- ✅ All 5 agents spawned
- ✅ Agents claiming tasks
- ✅ Progress updating
- ✅ Blockers being resolved

### Phase 3: Quality (Mid-Project)
- ✅ QA validating work
- ✅ Issues identified
- ✅ Development team fixing
- ✅ Quality gates being met

### Phase 4: Completion (End of Project)
- ✅ All tasks marked DONE
- ✅ Quality gates passed
- ✅ Tests passing
- ✅ Documentation complete
- ✅ Ready for deployment

---

## 📋 Task List Format Reminder

Use the simple Markdown format (not JSON):

```markdown
### TASK-001: Task Title
- **Assigned To:** Backend Developer
- **Status:** TODO
- **Priority:** HIGH
- **Depends On:** None
- **Description:** What needs to be done
- **Completion Criteria:**
  - Criterion 1
  - Criterion 2
```

This format is easy for anyone to understand and update!

---

## 🎯 Quick Reference

### Agent Roles
- **Team Lead** → Orchestrate, monitor, resolve blockers
- **Backend Developer** → APIs, databases, business logic
- **Frontend Developer** → UI/UX, components, styling
- **QA Engineer** → Testing, quality assurance
- **DevOps Engineer** → Infrastructure, deployment
- **Documentation Specialist** → Guides, specs, documentation

### Key Metrics
- **Velocity** → Tasks completed per period
- **Quality** → Test coverage, defect count
- **Timeline** → Progress percentage, remaining work
- **Blockers** → Count, resolution time
- **Satisfaction** → Team feedback, effectiveness

### Success Criteria
- ✅ All tasks marked DONE
- ✅ Test coverage > 80%
- ✅ No critical bugs
- ✅ Performance acceptable
- ✅ Security audit passed
- ✅ Documentation complete
- ✅ Deployed to production
- ✅ Team satisfied with process

---

## 🚀 Ready to Execute?

1. **Prepare your files** (brief, requirements, task list)
2. **Organize your folder** (copy agent files)
3. **Copy the execution command** (above)
4. **Paste in Claude Code** (and press Enter)
5. **Wait for agents to spawn** (Team Lead will handle it)
6. **Monitor progress** (check task list daily)
7. **Resolve blockers** (as they arise)
8. **Ensure quality** (QA validation)
9. **Deploy** (to production)
10. **Celebrate success!** 🎉

---

## 📞 Need Help?

- **Understanding the framework?** → Read README.md
- **Detailed execution guide?** → Read docs/guides/EXECUTION_GUIDE.md
- **Full demo?** → Read docs/guides/DEMO_GUIDE.md
- **Architecture?** → Read docs/reference/AGENT_FRAMEWORK.md
- **Task list format?** → Use TASK_LIST_TEMPLATE.md

---

**Ready to execute your project?** Copy the command above and paste it into Claude Code! 🚀
