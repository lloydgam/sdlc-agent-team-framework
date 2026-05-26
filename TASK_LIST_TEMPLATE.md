# Task List Template - Simple Format

> **Easy-to-use task list format for non-technical users**

Use this simple format instead of JSON. Anyone can understand and update it!

---

## Project Information

**Project Name:** [Your Project Name]
**Project ID:** [PROJ-001]
**Created Date:** [2026-05-26]
**Status:** [TODO / IN_PROGRESS / DONE]

---

## Tasks

### TASK-001: API Specification & Design
- **Assigned To:** Backend Developer
- **Status:** TODO
- **Priority:** HIGH
- **Depends On:** None
- **Description:** Design comprehensive API specification for all endpoints
- **Completion Criteria:**
  - API endpoints defined
  - Request/response schemas documented
  - Error handling strategy documented

---

### TASK-002: Database Schema Design
- **Assigned To:** Backend Developer
- **Status:** TODO
- **Priority:** HIGH
- **Depends On:** None
- **Description:** Design database schema for products, users, orders
- **Completion Criteria:**
  - Schema designed
  - Relationships defined
  - Indexes planned

---

### TASK-003: Authentication & Authorization
- **Assigned To:** Backend Developer
- **Status:** TODO
- **Priority:** HIGH
- **Depends On:** TASK-002
- **Description:** Implement user authentication and authorization
- **Completion Criteria:**
  - Login/signup implemented
  - JWT tokens working
  - Role-based access control

---

### TASK-011: Project Setup & Component Architecture
- **Assigned To:** Frontend Developer
- **Status:** TODO
- **Priority:** HIGH
- **Depends On:** None
- **Description:** Setup React project and define component architecture
- **Completion Criteria:**
  - React project initialized
  - Component structure defined
  - Build pipeline configured

---

### TASK-021: Test Strategy & Setup
- **Assigned To:** QA Engineer
- **Status:** TODO
- **Priority:** HIGH
- **Depends On:** None
- **Description:** Define testing strategy and setup test infrastructure
- **Completion Criteria:**
  - Test strategy documented
  - Test framework configured
  - CI/CD integration ready

---

### TASK-031: Infrastructure Setup
- **Assigned To:** DevOps Engineer
- **Status:** TODO
- **Priority:** HIGH
- **Depends On:** None
- **Description:** Setup AWS infrastructure and CI/CD pipeline
- **Completion Criteria:**
  - AWS resources provisioned
  - CI/CD pipeline configured
  - Monitoring setup

---

### TASK-041: Documentation Setup
- **Assigned To:** Documentation Specialist
- **Status:** TODO
- **Priority:** MEDIUM
- **Depends On:** None
- **Description:** Setup documentation structure and templates
- **Completion Criteria:**
  - Documentation structure created
  - Templates defined
  - Process documented

---

## How to Update This List

### When a Task Starts
Change the Status from `TODO` to `IN_PROGRESS`

```
- **Status:** IN_PROGRESS
```

### When a Task is Blocked
Add a Blocker section:

```
- **Status:** BLOCKED
- **Blocker:** Cannot connect to database - credentials missing
- **Reported By:** Backend Developer
- **Date Reported:** 2026-05-27
```

### When a Task is Complete
Change the Status to `DONE` and add completion notes:

```
- **Status:** DONE
- **Completed By:** Backend Developer
- **Completion Date:** 2026-05-28
- **Notes:** API specification complete and reviewed
```

### When Progress Updates
Add a Progress section:

```
- **Progress:** 50%
- **Last Updated:** 2026-05-27
- **Notes:** Working on authentication module
```

---

## Summary

**Total Tasks:** 7
**TODO:** 7
**IN_PROGRESS:** 0
**BLOCKED:** 0
**DONE:** 0

**Progress:** 0% (0/7 tasks complete)

---

## Key Contacts

- **Team Lead:** [Name]
- **Backend Developer:** [Name]
- **Frontend Developer:** [Name]
- **QA Engineer:** [Name]
- **DevOps Engineer:** [Name]
- **Documentation Specialist:** [Name]

---

## Notes

Add any important notes or decisions here:

- Note 1
- Note 2
- Note 3

---

**Last Updated:** [Date]
**Updated By:** [Name]
