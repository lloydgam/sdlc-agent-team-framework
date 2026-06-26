# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this repository is

This is **not an application** — it is a *framework* for orchestrating software projects with multiple coordinated AI agents. It ships two things:

1. **Agent prompt files** (`agents/*.md`) — the system prompts/role definitions that turn an agent into a Team Lead, Backend, Frontend, QA, DevOps, or Documentation specialist.
2. **A coordination library** (`agents/agent-framework.js`) — a Node.js `AgentFramework` class that all agents use to read/write shared state.

The Team Lead agent decomposes a project into tasks, spawns specialized sub-agents, and all agents coordinate **only** through two shared JSON files (no direct app-to-app calls). When working here you are usually editing prompts, the framework library, or scaffolding a consuming project — not building product features directly.

## Architecture

```
Team Lead (orchestrator)  ──spawns──▶  Backend / Frontend / QA / DevOps / Docs agents
        │                                          │
        └──────────── all read/write ──────────────┘
                              ▼
        shared/task-list.json   +   shared/communication-log.json
```

- **`agents/agent-framework.js`** — `AgentFramework` class constructed with a `projectPath`. It resolves `shared/task-list.json` and `shared/communication-log.json` relative to that path and is the single source of truth for coordination. Key methods: `claimTask`, `updateTaskProgress`, `completeTask`, `reportBlocker`, `resolveBlocker`, `areDependenciesMet`, `getProjectProgress`, `getTeamStatus`, `initializeTaskList`. Every state-changing call also appends to the communication log via `logCommunication`.
- **`shared/task-list.json`** — the canonical task graph. Each task has `id`, `assignee` (an agent role like `BACKEND_DEVELOPER`), `status`, `priority`, `dependencies` (array of task IDs), and `completionCriteria`. The current contents describe a sample E-Commerce Platform project (TASK-001..038) — it is example data, not a fixed contract.
- **`shared/communication-log.json`** — append-only audit trail of agent actions.

### Task lifecycle
`TODO → IN_PROGRESS → REVIEW → DONE`, with any state able to drop to `BLOCKED`. An agent only works a task after `areDependenciesMet(taskId)` is true; only the assigned agent may `completeTask`. Note the prompt docs mention a `REVIEW` state but the `AgentFramework` code only transitions through `TODO`/`IN_PROGRESS`/`BLOCKED`/`DONE` — treat the JS as authoritative for state mutations.

### Agent roles (assignee values)
`TEAM_LEAD`, `BACKEND_DEVELOPER`, `FRONTEND_DEVELOPER`, `QA_ENGINEER`, `DEVOPS_ENGINEER`, `DOCUMENTATION_SPECIALIST`. These strings are the `assignee` keys used throughout `task-list.json` and the framework's filtering methods — keep them consistent across prompts and data.

## How a consuming project is wired (`demo-todo-app/`)

`demo-todo-app/` is a worked example of using the framework. Critically, its `agents/` and `shared/` directories are **symlinks back to the repo root**:

```
demo-todo-app/agents/*  ->  ../../agents/*
demo-todo-app/shared/*  ->  ../../shared/*
```

This means editing `agents/agent-framework.js` or `shared/task-list.json` at the root *also changes the demo*. When scaffolding a new consuming project, the intended pattern is the same: symlink (or copy) `agents/` and `shared/` in, then add `PROJECT_BRIEF.md`, `REQUIREMENTS.md`, and a populated `task-list.json`. See `demo-todo-app/SYMLINKS_GUIDE.md`.

## Commands

There is **no build or test at the repository root** — it is prompts + a library. Commands live inside consuming projects.

Within `demo-todo-app/` (a standard Node/Jest/ESLint project; `src/` and `tests/` are intentionally empty until agents populate them):

```bash
cd demo-todo-app
npm install
npm start            # node src/index.js
npm test             # jest --coverage
npm run test:watch   # jest --watch
npm run lint         # eslint src tests
```

Run a single test file / pattern:

```bash
cd demo-todo-app
npx jest path/to/file.test.js
npx jest -t "description substring"
```

To exercise the coordination library directly:

```bash
node -e "const AF=require('./agents/agent-framework.js'); const f=new AF('.'); console.log(f.getProjectProgress())"
```

## MCP servers & plugins

Claude Code config lives in two places: **`.mcp.json`** (project root — required there; Claude Code only auto-discovers project MCP servers from the root, so do not move it) and **`.claude/settings.json`** (project settings checked into the repo). `.claude/settings.json` pre-enables the Context7 server (`enabledMcpjsonServers`) so anyone who clones the repo gets it without an approval prompt.

- **Context7** (MCP server, `.mcp.json`, project scope) — provides up-to-date, version-specific documentation for libraries and frameworks. **Always consult Context7 before referencing or generating code against any technology in a project's stack** (e.g. React, Redux, Tailwind, Jest, Stripe, Express, AWS SDKs). Resolve the library first, then fetch its docs, rather than relying on memory — the agents in this framework build real apps and the stack versions change. This matters most for the Backend, Frontend, DevOps, and Documentation agents when implementing or documenting against a named dependency.
- **Superpowers** (plugin, `obra/superpowers-marketplace`, user scope) — a skills/workflow plugin (by Jesse Vincent) installed globally for this user, not committed to the repo. Since it's user-scoped, teammates who clone this repo won't have it unless they install it themselves (`claude plugin marketplace add obra/superpowers-marketplace && claude plugin install superpowers@superpowers-marketplace`). It is optional — the repo does not depend on it. See the reconciliation rules below before using it here.

### Superpowers vs. this framework — precedence

Superpowers ships skills (`brainstorming`, `writing-plans`, `executing-plans`, `subagent-driven-development`, `dispatching-parallel-agents`) that overlap with what this repo already defines. In this repository, **the framework is the source of truth** — do not let Superpowers' planning/orchestration skills displace it:

- **Task tracking & orchestration → use the framework, not Superpowers.** The authoritative plan is `shared/task-list.json` driven through `AgentFramework` (`agents/agent-framework.js`); the authoritative roles are `agents/*.md`. Do **not** substitute Superpowers' `writing-plans`/`executing-plans` markdown plans or its sub-agent skills for this — they would create a competing, untracked system of record.
- **Design docs → keep the framework's conventions.** Prefer `PROJECT_BRIEF.md` / `REQUIREMENTS.md` and the `docs/` layout over Superpowers' `docs/superpowers/specs/` location, so artifacts stay where this framework expects them.
- **What Superpowers *is* good for here:** the engineering-discipline skills that the framework doesn't provide — `test-driven-development`, `systematic-debugging`, `requesting-code-review` / `receiving-code-review`, `verification-before-completion`, `using-git-worktrees`. Use these freely *inside* a task that the framework has already assigned.
- **Don't gate framework work behind the `brainstorming` skill.** This repo's planning happens via the Team Lead → task-list flow; a separate brainstorm-and-approve gate is redundant and conflicts with that model.

Rule of thumb: **the framework decides *what* work happens and *who* owns it; Superpowers skills can help with *how* a given task is executed** (testing, debugging, review). When they conflict, the framework wins.

## Conventions

- **Prompt files are the product.** When asked to change agent behavior, edit the relevant `agents/<role>-agent.md`. Keep the structure (Role Definition → Responsibilities → workflow phases) consistent with the existing files.
- **Coordinate through the framework, never by ad-hoc file edits.** State changes to tasks should go through `AgentFramework` methods so the communication log stays accurate.
- **Timestamps and IDs** are generated by the framework (`new Date().toISOString()`, zero-padded `TASK-NNN`). Don't hand-author these in ways that diverge from `initializeTaskList`'s format.
- The repo is documentation-heavy by design (`README.md`, `EXECUTE_PROJECT.md`, `STRUCTURE.md`, `docs/`, plus per-project guides). `README.md` is the authoritative end-to-end usage guide; `docs/INDEX.md` is the documentation map.
