# LinkedIn Agent — Full LinkedIn Automation for Claude

Write posts, find jobs, send connection requests, research companies, draft messages — all from Claude Desktop or Claude Code. This is the real LinkedIn workflow, battle-tested in production.

**Free. Uses your existing LinkedIn session via browser.**

---

## Install

Open Claude Desktop or Claude Code and paste:

```
Install this MCP agent: https://github.com/sypnose-cloud/agent-free
```

Requires the [browser-agent](../browser-agent) — install it first.

---

## What Claude can do

**Content**
- Write LinkedIn posts with hook, story, insight, CTA
- Schedule weekly content rotation (Mon/Wed/Fri)
- Adapt your voice and tone from existing posts

**Job Search**
- Search LinkedIn Jobs with your filters (remote, salary, role)
- Score each offer 1-10 against your profile
- Adapt your CV and cover letter per offer
- Draft personalized application messages

**Networking**
- Find relevant people (recruiters, CTOs, hiring managers)
- Draft connection request messages in your voice
- Research companies before applying or connecting

**Research**
- Pull company data, news, funding
- Find mutual connections
- Analyze any LinkedIn profile

---

## Usage

```
"Write a LinkedIn post about AI agents for this Wednesday"
"Search LinkedIn for remote AI Engineer jobs, salary > 60K EUR"
"Find AI recruiters in Spain and draft connection requests"
"Research [company name] before I apply"
"Draft a cover letter for this job: [paste job URL]"
```

---

## Skills included

| Skill | What it does |
|-------|-------------|
| [post-linkedin](./skills/post-linkedin.md) | Write posts with proven structure |
| [job-search](./skills/job-search.md) | Find and score job offers |
| [connections](./skills/connections.md) | Build your network strategically |
| [company-research](./skills/company-research.md) | Research before applying |
| [cover-letter](./skills/cover-letter.md) | Adapt CV and message per offer |

---

## Rules (built-in safety)

- Never applies to a job without your approval
- Never publishes a post without showing you the draft first
- Never sends connection requests in bulk — max 5/day
- Always shows you what it's about to do before doing it

---

## Requirements

- [browser-agent](../browser-agent) with `--user-data-dir` for persistent LinkedIn session
- Log in to LinkedIn once — stays logged in
