# STAR Stories — Sira AI (Founding Full-Stack Engineer)

---

## 1. Building a Platform from Zero as Technical Co-Founder

**Best for:** "Tell me about a time you built something from scratch" / "What does founding engineer mean to you?"

In 2016, we started Alaya with a blank page. There was no codebase, no existing customers, and the two of us had a soft-launch commitment with a major Swiss employer in three months. My task was to architect and build the entire platform alone, while my co-founder handled the business side, knowing the first demo had to be credible enough to sign a real enterprise contract.

I chose a pragmatic stack: Node.js backend, React frontend, PostgreSQL. Nothing exotic. The goal was to ship a working multi-tenant SaaS in twelve weeks, so I stayed disciplined about scope and resisted the urge to over-engineer. The core product, including the impact tracking module and employee-facing app, was in staging by week ten. We demoed on time.

From there I iterated continuously. Multi-tenancy was designed in from the start, which saved us significantly later. I hired the first three engineers over the following year, established code review culture, and built the API layer that eventually supported integrations with HR systems across Europe. By the time Benevity acquired us in 2021, the platform had 50+ enterprise clients and the codebase was clean enough for a new team to take over without a rewrite.

Looking back, I'd have invested in observability much earlier. We added proper APM late, and there were two incidents that took longer to diagnose than they should have. That experience is now muscle memory.

---

## 2. Making a Hard Architecture Decision Under Pressure

**Best for:** "Tell me about a technical trade-off you navigated" / "How do you handle technical debt vs. velocity?"

At Alaya around 2019, the monolith was starting to crack under load. The engineering team was split: some wanted a full microservices rewrite, others thought we should keep the monolith but modularize it. Investors were pushing hard for feature delivery, not infrastructure work, and we had six months of runway pressure on top of that.

My job was to make a defensible call and own the consequences. I ran a two-week spike: prototype load tests on both approaches, real numbers on migration cost and timeline, a clear mapping of which parts of the codebase were causing actual pain versus theoretical pain. Then I presented the trade-offs to the founding team and our lead investor with data rather than architecture diagrams.

The recommendation was a strangler fig approach. We'd extract the two highest-traffic modules first, keep everything else monolithic, and define explicit criteria for when to extract more. No big-bang rewrite. The first extracted module shipped in six weeks. Performance on those endpoints improved about 40%. The rest of the monolith stayed stable through the acquisition, which meant the new Benevity team inherited something predictable.

The hardest part wasn't the technical work, it was convincing people that not rewriting everything was the right call. Data cut through that faster than any architecture argument. Next time I'd start the benchmarking even earlier to compress the debate phase.

---

## 3. Driving AI Tooling Adoption Without a Mandate

**Best for:** "How do you lead without formal authority?" / "Tell me about influencing change across teams" / AI-heavy or technical culture questions

When I joined Benevity post-acquisition in 2021, I was a Senior Staff IC. No direct reports, two teams that didn't report to me, and I wanted to change how engineers were working by introducing AI-assisted development practices. The standard playbook of "management decrees a new tool" wasn't available to me, and honestly I didn't want it.

I started small. Three engineers who were already curious about GitHub Copilot. I ran demos showing concrete time savings on specific tasks they already found annoying: writing unit test boilerplate, grinding through PR review comments. No mandate, no slides, just a working demo and a shared repo with prompt templates they could actually reuse.

The pattern spread. Within three months, around 70% of engineers on both teams were regularly using AI-assisted code review and generation. More importantly, they'd started adapting and extending the prompt templates themselves, which I couldn't have engineered top-down. I became the informal AI tooling lead across the org, contributing to architecture decisions around how LLM calls were structured and how we evaluated quality at scale.

The lesson was about pace. Mandate-free adoption was slower in the first six weeks and far stickier afterward. Engineers who adopted it voluntarily became advocates; that advocacy did more for sustained adoption than any rollout plan I could have written.

---

## 4. Navigating Post-Acquisition Integration at a 10x Scale

**Best for:** "Tell me about working in a fast-changing environment" / "How do you handle joining a large, unfamiliar codebase?" / cultural fit at a YC company that expects rapid context-switching

When Benevity acquired Alaya, I went from a five-person engineering team to a company with fifty engineers, a Java microservices architecture, and a process overhead I'd never worked under before. The task was to integrate Alaya's capabilities into the Benevity platform without losing the product velocity that had made the acquisition happen in the first place.

My first instinct was to move fast. I had strong opinions on architecture and wanted to push them immediately. But I caught myself and spent the first month just mapping: understanding how decisions got made, where the real constraints were, and who the credible voices were in the infrastructure and platform teams. I built relationships before I built anything.

That changed my effectiveness considerably. By the time I was ready to advocate for specific integration approaches, I already had allies in the rooms where decisions were made. Three major cross-team architecture choices I contributed to during the first eighteen months all went through cleanly because the groundwork had been done. The Alaya feature surface was integrated without a forced rewrite of either codebase.

The takeaway was simple: the faster you want to move in a new org, the more time you need to spend at the start understanding it. I moved too fast in week one and it cost me credibility I had to earn back. The month I spent listening first paid back several times over.

---
