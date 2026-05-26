# Execution Quick Start - How to Run Your Project

> **Step-by-step guide to execute your project using the Agent Framework**

Once you have your project details ready (brief, requirements, task list), follow this guide to spawn agents and execute your project.

---

## 📋 Prerequisites Checklist

Before you start, make sure you have:

- ✅ **PROJECT_BRIEF.md** - What are you building?
- ✅ **REQUIREMENTS.md** - What features do you need?
- ✅ **TASK_LIST.json** - What tasks need to be done?
- ✅ **Access to Claude Code** - To spawn agents
- ✅ **Project folder** - Where your files are stored

---

## 🚀 Execution Steps

### Phase 1: Prepare Your Project Files

#### Step 1.1: Create PROJECT_BRIEF.md

```markdown
# Project Brief: [Your Project Name]

## Overview
[2-3 sentences describing what you're building]

## Goals
- Goal 1
- Goal 2
- Goal 3

## Success Criteria
- Criterion 1
- Criterion 2
- Criterion 3

## Scope
[What's included and what's not]

## Team
[Who's involved and their roles]

## Key Milestones
[Major phases or deliverables]
```

**Example:**
```markdown
# Project Brief: E-Commerce Platform

## Overview
Build a modern e-commerce platform with product catalog, shopping cart, and checkout functionality. The platform will support 1,000 concurrent users and maintain 99.9% uptime.

## Goals
- Build a complete e-commerce platform
- Support 1,000 concurrent users
- Achieve 99.9% uptime

## Success Criteria
- All features implemented and tested
- Test coverage > 80%
- Performance < 200ms response time
- Zero critical bugs at launch

## Scope
Includes: Product catalog, shopping cart, checkout, user accounts, order history, admin dashboard
Excludes: Mobile app, advanced analytics, marketplace features

## Team
- Backend Developer (APIs, databases)
- Frontend Developer (UI/UX, components)
- QA Engineer (testing, quality)
- DevOps Engineer (infrastructure, deployment)
- Documentation Specialist (guides, specs)

## Key Milestones
- Phase 1: Core API and database
- Phase 2: Frontend components
- Phase 3: Integration and testing
- Phase 4: Deployment and launch
```

#### Step 1.2: Create REQUIREMENTS.md

```markdown
# Requirements

## Functional Requirements
1. [Feature 1 - detailed description]
2. [Feature 2 - detailed description]
3. [Feature 3 - detailed description]

## Non-Functional Requirements
- Performance: [targets]
- Security: [requirements]
- Scalability: [targets]
- Availability: [targets]

## Technical Constraints
- Tech stack: [technologies]
- Platforms: [where it runs]
- Integrations: [external systems]
- Database: [type and requirements]

## Quality Standards
- Test coverage: [target percentage]
- Code quality: [standards]
- Documentation: [requirements]
- Security: [compliance needs]
```

**Example:**
```markdown
# Requirements

## Functional Requirements
1. Product Catalog
   - Display products with images, descriptions, prices
   - Search and filter by category, price, rating
   - Pagination for large result sets

2. Shopping Cart
   - Add/remove items
   - Update quantities
   - Persist cart across sessions
   - Calculate totals and taxes

3. Checkout
   - Shipping address entry
   - Payment processing (Stripe)
   - Order confirmation
   - Email notifications

4. User Accounts
   - Registration and login
   - Profile management
   - Order history
   - Saved addresses

5. Admin Dashboard
   - Product management
   - Order management
   - User management
   - Analytics and reports

## Non-Functional Requirements
- Performance: < 200ms response time
- Scalability: 1,000 concurrent users
- Security: PCI compliance for payments
- Availability: 99.9% uptime

## Technical Constraints
- Backend: Node.js/Express
- Frontend: React
- Database: PostgreSQL
- Hosting: AWS
- Payment: Stripe API

## Quality Standards
- Test coverage: > 80%
- Code quality: ESLint + Prettier
- Documentation: API docs + user guides
- Security: OWASP compliance
```

#### Step 1.3: Create TASK_LIST.json

```json
{
  "projectName": "Your Project Name",
  "projectId": "PROJ-001",
  "createdDate": "2026-05-26",
  "tasks": [
    {
      "id": "TASK-001",
      "title": "Task Title",
      "description": "Detailed task description",
      "assignee": "BACKEND_DEVELOPER",
      "status": "TODO",
      "priority": "HIGH",
      "dependencies": [],
      "completionCriteria": [
        "Criterion 1",
        "Criterion 2"
      ]
    }
  ]
}
```

**Example with real tasks:**
```json
{
  "projectName": "E-Commerce Platform",
  "projectId": "ECOM-001",
  "createdDate": "2026-05-26",
  "tasks": [
    {
      "id": "TASK-001",
      "title": "API Specification & Design",
      "description": "Design comprehensive API specification for all endpoints",
      "assignee": "BACKEND_DEVELOPER",
      "status": "TODO",
      "priority": "HIGH",
      "dependencies": [],
      "completionCriteria": [
        "API endpoints defined",
        "Request/response schemas documented",
        "Error handling strategy documented"
      ]
    },
    {
      "id": "TASK-002",
      "title": "Database Schema Design",
      "description": "Design database schema for products, users, orders",
      "assignee": "BACKEND_DEVELOPER",
      "status": "TODO",
      "priority": "HIGH",
      "dependencies": [],
      "completionCriteria": [
        "Schema designed",
        "Relationships defined",
        "Indexes planned"
      ]
    },
    {
      "id": "TASK-003",
      "title": "Authentication & Authorization",
      "description": "Implement user authentication and authorization",
      "assignee": "BACKEND_DEVELOPER",
      "status": "TODO",
      "priority": "HIGH",
      "dependencies": ["TASK-002"],
      "completionCriteria": [
        "Login/signup implemented",
        "JWT tokens working",
        "Role-based access control"
      ]
    },
    {
      "id": "TASK-011",
      "title": "Project Setup & Component Architecture",
      "description": "Setup React project and define component architecture",
      "assignee": "FRONTEND_DEVELOPER",
      "status": "TODO",
      "priority": "HIGH",
      "dependencies": [],
      "completionCriteria": [
        "React project initialized",
        "Component structure defined",
        "Build pipeline configured"
      ]
    },
    {
      "id": "TASK-021",
      "title": "Test Strategy & Setup",
      "description": "Define testing strategy and setup test infrastructure",
      "assignee": "QA_ENGINEER",
      "status": "TODO",
      "priority": "HIGH",
      "dependencies": [],
      "completionCriteria": [
        "Test strategy documented",
        "Test framework configured",
        "CI/CD integration ready"
      ]
    },
    {
      "id": "TASK-031",
      "title": "Infrastructure Setup",
      "description": "Setup AWS infrastructure and CI/CD pipeline",
      "assignee": "DEVOPS_ENGINEER",
      "status": "TODO",
      "priority": "HIGH",
      "dependencies": [],
      "completionCriteria": [
        "AWS resources provisioned",
        "CI/CD pipeline configured",
        "Monitoring setup"
      ]
    },
    {
      "id": "TASK-041",
      "title": "Documentation Setup",
      "description": "Setup documentation structure and templates",
      "assignee": "DOCUMENTATION_SPECIALIST",
      "status": "TODO",
      "priority": "MEDIUM",
      "dependencies": [],
      "completionCriteria": [
        "Documentation structure created",
        "Templates defined",
        "Process documented"
      ]
    }
  ]
}
```

---

### Phase 2: Organize Your Project Folder

Create this folder structure:

```
your-project/
├── PROJECT_BRIEF.md
├── REQUIREMENTS.md
├── TASK_LIST.json
├── agents/
│   ├── team-lead-agent.md
│   ├── backend-agent.md
│   ├── frontend-agent.md
│   ├── qa-agent.md
│   ├── devops-agent.md
│   ├── docs-agent.md
│   └── agent-framework.js
└── shared/
    ├── task-list.json
    └── communication-log.json
```

**Copy agent files from the framework:**
```bash
# Copy agent prompts to your project
cp -r /path/to/framework/agents/* your-project/agents/
cp -r /path/to/framework/shared/* your-project/shared/
```

---

### Phase 3: Spawn Team Lead Agent

In Claude Code, run this command:

```
SPAWN_AGENT: TEAM_LEAD

Context:
- Read PROJECT_BRIEF.md
- Read REQUIREMENTS.md
- Review TASK_LIST.json
- Use agents/agent-framework.js for task management

Instructions:
1. Analyze the project requirements
2. Review the task list
3. Verify task decomposition
4. Identify task dependencies
5. Create/update shared/task-list.json
6. Prepare to spawn specialized agents
7. Report status and next steps
```

**What Team Lead will do:**
- ✅ Analyze your project
- ✅ Verify task decomposition
- ✅ Identify dependencies
- ✅ Update task list
- ✅ Prepare for agent spawning

**Expected output:**
- Updated task list with dependencies
- Identified critical path
- Agent spawning plan
- Status report

---

### Phase 4: Spawn Specialized Agents

Once Team Lead is ready, spawn each agent:

#### Spawn Backend Developer

```
SPAWN_AGENT: BACKEND_DEVELOPER

Context:
- Read PROJECT_BRIEF.md
- Read REQUIREMENTS.md
- Review shared/task-list.json
- Use agents/agent-framework.js

Instructions:
1. Review project requirements
2. Check task list for assigned tasks
3. Claim available backend tasks
4. Begin implementation
5. Update progress regularly
6. Report blockers immediately
```

#### Spawn Frontend Developer

```
SPAWN_AGENT: FRONTEND_DEVELOPER

Context:
- Read PROJECT_BRIEF.md
- Read REQUIREMENTS.md
- Review shared/task-list.json
- Use agents/agent-framework.js

Instructions:
1. Review project requirements
2. Check task list for assigned tasks
3. Claim available frontend tasks
4. Begin implementation
5. Update progress regularly
6. Report blockers immediately
```

#### Spawn QA Engineer

```
SPAWN_AGENT: QA_ENGINEER

Context:
- Read PROJECT_BRIEF.md
- Read REQUIREMENTS.md
- Review shared/task-list.json
- Use agents/agent-framework.js

Instructions:
1. Review project requirements
2. Check task list for assigned tasks
3. Claim available QA tasks
4. Begin test planning
5. Update progress regularly
6. Report blockers immediately
```

#### Spawn DevOps Engineer

```
SPAWN_AGENT: DEVOPS_ENGINEER

Context:
- Read PROJECT_BRIEF.md
- Read REQUIREMENTS.md
- Review shared/task-list.json
- Use agents/agent-framework.js

Instructions:
1. Review project requirements
2. Check task list for assigned tasks
3. Claim available DevOps tasks
4. Begin infrastructure setup
5. Update progress regularly
6. Report blockers immediately
```

#### Spawn Documentation Specialist

```
SPAWN_AGENT: DOCUMENTATION_SPECIALIST

Context:
- Read PROJECT_BRIEF.md
- Read REQUIREMENTS.md
- Review shared/task-list.json
- Use agents/agent-framework.js

Instructions:
1. Review project requirements
2. Check task list for assigned tasks
3. Claim available documentation tasks
4. Begin documentation
5. Update progress regularly
6. Report blockers immediately
```

---

### Phase 5: Monitor Progress

#### Check Task List Regularly

```bash
# View current task status
cat shared/task-list.json | jq '.tasks[] | {id, title, status, assignee, progress}'
```

#### Monitor Key Metrics

**Track these metrics:**
- ✅ Tasks completed (count)
- ✅ Progress percentage (overall)
- ✅ Blockers (count and type)
- ✅ Quality metrics (test coverage, defects)
- ✅ Velocity (tasks per period)

#### Identify Blockers

```bash
# Find blocked tasks
cat shared/task-list.json | jq '.tasks[] | select(.status == "BLOCKED")'
```

#### Review Communication Log

```bash
# View agent communications
cat shared/communication-log.json | tail -20
```

---

### Phase 6: Resolve Blockers

When an agent reports a blocker:

1. **Identify the blocker**
   - Read the blocker description
   - Understand the impact
   - Assess urgency

2. **Investigate**
   - Check dependencies
   - Identify root cause
   - Determine solution

3. **Coordinate Resolution**
   - Communicate with relevant agents
   - Provide guidance
   - Remove obstacles

4. **Verify Fix**
   - Confirm blocker is resolved
   - Agent resumes work
   - Update task list

**Example blocker resolution:**
```
Agent: "Cannot connect to database - credentials missing"
↓
Team Lead: "Check database setup in DevOps task"
↓
DevOps Agent: "Database credentials provided"
↓
Backend Agent: "Connection successful, resuming work"
↓
Task List: Status updated to IN_PROGRESS
```

---

### Phase 7: Quality Assurance

#### QA Validation

QA Agent will:
- ✅ Write test cases
- ✅ Execute tests
- ✅ Identify issues
- ✅ Verify fixes

#### Quality Gates

Ensure these gates are passed:
- ✅ Test coverage > 80%
- ✅ No critical bugs
- ✅ Performance acceptable
- ✅ Security audit passed
- ✅ Documentation complete

#### Issue Resolution

When QA finds issues:
1. QA reports issue to task list
2. Development team fixes issue
3. QA verifies fix
4. Task marked complete

---

### Phase 8: Deployment

#### Pre-Deployment Checklist

- ✅ All tasks marked DONE
- ✅ Quality gates passed
- ✅ Tests passing
- ✅ Documentation complete
- ✅ Performance acceptable
- ✅ Security audit passed

#### Deployment Steps

1. **DevOps prepares deployment**
   - Build artifacts
   - Configure environment
   - Run smoke tests

2. **All agents verify readiness**
   - Backend: APIs ready
   - Frontend: Build successful
   - QA: Final tests pass
   - DevOps: Infrastructure ready

3. **Deploy to production**
   - Execute deployment
   - Monitor for issues
   - Verify functionality

4. **Post-deployment**
   - Monitor metrics
   - Support users
   - Document lessons learned

---

### Phase 9: Project Completion

#### Final Checklist

- ✅ All tasks marked DONE
- ✅ All tests passing
- ✅ Quality gates passed
- ✅ Documentation complete
- ✅ Deployed to production
- ✅ Monitoring active

#### Lessons Learned

Document:
- What went well
- What could be improved
- Key decisions made
- Challenges overcome
- Team feedback

#### Celebrate Success

- 🎉 Celebrate with team
- 📊 Review metrics
- 📝 Document outcomes
- 🚀 Plan next phase

---

## 📊 Monitoring Dashboard

Create a simple monitoring dashboard to track:

```
PROJECT STATUS DASHBOARD
========================

Project: [Your Project Name]
Status: IN_PROGRESS
Progress: 45% (18/40 tasks complete)

TASKS:
  TODO:        15 tasks
  IN_PROGRESS: 12 tasks
  REVIEW:      5 tasks
  DONE:        18 tasks
  BLOCKED:     2 tasks

QUALITY:
  Test Coverage: 72%
  Defects: 3 (1 critical, 2 minor)
  Performance: 180ms avg response

BLOCKERS:
  1. Database connection issue (Backend) - OPEN
  2. API specification delay (Backend) - OPEN

VELOCITY:
  Last period: 8 tasks completed
  Trend: Steady
  Forecast: On track

NEXT STEPS:
  1. Resolve database blocker
  2. Complete API specification
  3. Start frontend integration
```

---

## 🔄 Daily Standup

Run this daily to check status:

```
DAILY STANDUP CHECKLIST
=======================

1. Check Task List
   - [ ] Review task updates
   - [ ] Check progress percentage
   - [ ] Identify new blockers

2. Review Blockers
   - [ ] List all blocked tasks
   - [ ] Assess impact
   - [ ] Plan resolution

3. Check Quality Metrics
   - [ ] Test coverage
   - [ ] Defect count
   - [ ] Performance metrics

4. Review Communication Log
   - [ ] Check agent updates
   - [ ] Review decisions made
   - [ ] Identify risks

5. Support Team
   - [ ] Resolve blockers
   - [ ] Answer questions
   - [ ] Provide guidance

6. Update Status
   - [ ] Update task list
   - [ ] Update communication log
   - [ ] Report progress
```

---

## 🚨 Troubleshooting

### Issue: Agent Not Responding

**Problem:** Agent hasn't updated progress or responded

**Solution:**
1. Check task list for last update
2. Send direct message to agent
3. Escalate to Team Lead if no response
4. Reassign task if needed

### Issue: Blocker Not Resolved

**Problem:** Agent is blocked and cannot proceed

**Solution:**
1. Verify blocker is documented
2. Escalate to Team Lead
3. Investigate root cause
4. Coordinate resolution
5. Resume work when resolved

### Issue: Quality Issues

**Problem:** Quality issues discovered late in project

**Solution:**
1. QA reports issues immediately
2. Development team fixes issues
3. Increase testing frequency
4. Implement quality gates
5. Prevent similar issues

### Issue: Timeline Slipping

**Problem:** Project is falling behind schedule

**Solution:**
1. Identify root causes
2. Assess impact
3. Adjust timeline if needed
4. Increase resources if possible
5. Reduce scope if necessary

---

## ✅ Success Criteria

Your project is successful when:

- ✅ All tasks marked DONE
- ✅ Test coverage > 80%
- ✅ No critical bugs
- ✅ Performance acceptable
- ✅ Security audit passed
- ✅ Documentation complete
- ✅ Deployed to production
- ✅ Team satisfied with process

---

## 📈 Metrics to Track

### Velocity
- Tasks completed per period
- Progress rate
- Trend analysis

### Quality
- Test coverage percentage
- Defect density
- Critical/high bugs

### Timeline
- Remaining work
- Tasks on track
- Critical path status

### Blockers
- Number of blockers
- Average resolution time
- Blocker types

### Team Satisfaction
- Agent effectiveness
- Communication quality
- Work satisfaction

---

## 🎯 Quick Reference

### Key Commands

```bash
# View task list
cat shared/task-list.json | jq '.'

# View specific task
cat shared/task-list.json | jq '.tasks[] | select(.id == "TASK-001")'

# View blocked tasks
cat shared/task-list.json | jq '.tasks[] | select(.status == "BLOCKED")'

# View communication log
cat shared/communication-log.json | tail -20

# Count tasks by status
cat shared/task-list.json | jq '.tasks | group_by(.status) | map({status: .[0].status, count: length})'

# Calculate progress
cat shared/task-list.json | jq '.tasks | length as $total | map(select(.status == "DONE")) | length as $done | {total: $total, done: $done, percentage: ($done / $total * 100 | round)}'
```

### Key Files

| File | Purpose |
|------|---------|
| `PROJECT_BRIEF.md` | Project overview |
| `REQUIREMENTS.md` | Detailed requirements |
| `TASK_LIST.json` | Central task coordination |
| `shared/communication-log.json` | Agent communications |
| `agents/team-lead-agent.md` | Orchestrator prompt |
| `agents/backend-agent.md` | Backend developer prompt |
| `agents/frontend-agent.md` | Frontend developer prompt |
| `agents/qa-agent.md` | QA engineer prompt |
| `agents/devops-agent.md` | DevOps engineer prompt |
| `agents/docs-agent.md` | Documentation prompt |

---

## 🚀 Next Steps

1. **Prepare your project files** (brief, requirements, tasks)
2. **Organize your project folder** (copy agent files)
3. **Spawn Team Lead Agent** (orchestrate)
4. **Spawn specialized agents** (execute)
5. **Monitor progress** (track and support)
6. **Resolve blockers** (as needed)
7. **Ensure quality** (QA validation)
8. **Deploy** (to production)
9. **Celebrate success** (lessons learned)

---

## 💡 Tips for Success

✅ **Be specific** in task descriptions
✅ **Identify dependencies** clearly
✅ **Monitor regularly** (daily)
✅ **Resolve blockers quickly** (within hours)
✅ **Support your team** (provide guidance)
✅ **Track metrics** (velocity, quality)
✅ **Celebrate progress** (milestones)
✅ **Document decisions** (for future reference)

---

## 📞 Need Help?

- **Getting started?** → Read [START_HERE.md](./docs/getting-started/START_HERE.md)
- **Quick reference?** → Read [QUICK_START.md](./docs/getting-started/QUICK_START.md)
- **Full guide?** → Read [EXECUTION_GUIDE.md](./docs/guides/EXECUTION_GUIDE.md)
- **Architecture?** → Read [AGENT_FRAMEWORK.md](./docs/reference/AGENT_FRAMEWORK.md)
- **Demo?** → Read [DEMO_GUIDE.md](./docs/guides/DEMO_GUIDE.md)

---

**Ready to execute your project?** Follow the steps above and spawn your agents! 🚀
