# STAR Stories — Hands-on CTO, AI Fundraising Startup (via Pragmatike)

---

## Story 1: Building Alaya from Zero to Acquisition

**Best for:** "Tell me about a time you built something from scratch" / founding-level ownership / "How do you handle full ambiguity?"

In 2016, I co-founded Alaya, a purpose and impact platform for employee engagement. We had no product, no customers, and no certainty we'd find a market. The technical job was mine to define from day one.

My first call was on the stack. I picked Node.js, React, and PostgreSQL, not because they were fashionable but because they were pragmatic: a single language across front and back, a relational model that would hold up under multi-tenant complexity, and a frontend stack I could iterate on quickly before we had a design team. Core features were running in three months for the first client demo. From there I built iteratively: multi-tenant data isolation, an API layer, impact reporting pipelines, postal campaign tooling. At some point I hired the first engineer, then two more. I set up CI/CD, code review culture, and the documentation practices that let other people contribute without breaking things.

By 2021, the platform had 50+ enterprise clients across Switzerland and France. Benevity, a $1B+ Canadian unicorn, acquired the company. That exit validated five years of technical decisions made under the uncertainty of a zero-revenue starting point.

Looking back, I'd have built observability in from the start. We added proper APM late and it slowed down diagnosis during the final growth phase before acquisition. I'd also design multi-tenancy as a first-class constraint from day one; retrofitting it as the client list grew was expensive and avoidable.

---

## Story 2: Making a Hard Architecture Call Under Pressure

**Best for:** "Tell me about a key technical decision you made under uncertainty" / architecture judgment / "How do you navigate tech debt vs. delivery?"

At Alaya, the monolith started showing cracks about three years in, particularly on async work: notification pipelines, bulk data exports, impact aggregations. The team was split between a full microservices rewrite and staying modular. Investors were actively pushing for new features, not infrastructure work. My job was to make a defensible call that balanced long-term scalability with short-term delivery pressure, and then actually execute it.

I ran a two-week technical spike. Both approaches got prototype load tests, honest engineering cost estimates, and real timelines, not optimistic ones. I presented the findings to the CTO and our investors with concrete numbers. No opinion slides. The proposal I landed on was a strangler fig migration: extract the two highest-traffic async modules first, define clear thresholds for extracting more, leave the rest of the monolith alone.

The first extracted module shipped in six weeks. Endpoint performance improved by ~40% on the heaviest routes. The monolith held stable all the way through the acquisition. We never did the big-bang rewrite.

The hardest part wasn't the technical work. It was convincing people that not rewriting everything was the right call. Engineers want to fix the whole thing; investors want momentum. Data closed the argument faster than anything else would have. I'd run the benchmarks earlier next time, before the debate gets entrenched and people have positions to defend.

---

## Story 3: Building AI Tooling Across Teams Without Any Mandate

**Best for:** "How do you lead without authority?" / AI-native product fit / "Tell me about building something that required organizational change"

At Benevity I was a Senior Staff IC with no direct reports. I could see that AI-assisted development, GitHub Copilot, Claude-based review pipelines, structured prompt libraries, was meaningfully changing the quality and speed of my own work. The problem was getting two other engineering teams to adopt it without triggering the resistance that comes from top-down mandates.

I started with three engineers who were already curious. No presentation, no deck. I built working demos showing concrete time savings on tasks they actually did: a PR review cycle that took two hours, now done in 45 minutes. I ran optional lunch-and-learn sessions, live and unscripted, with honest commentary on where the tools still fell short. I committed reusable prompt templates to a shared repository with before-and-after documentation so engineers could pick them up independently, without needing to ask me.

Within three months, around 70% of engineers on both teams were using AI-assisted workflows regularly. Several became internal advocates, explaining the tools to newer teammates in ways I couldn't from the outside. I became the informal AI tooling lead for the broader engineering org, a role that emerged from adoption, not appointment.

The mandate-free path is slower, but the adoption sticks. Engineers who pick something up voluntarily will advocate for it; engineers who were told to use it will find workarounds. That distinction matters enormously in a small team where you can't afford compliance theater.

---

## Story 4: Navigating Post-Acquisition Integration at Scale

**Best for:** "Tell me about a major transition you had to navigate" / cross-functional collaboration / "How do you operate in a larger, unfamiliar organization?"

When Benevity acquired Alaya in 2021, I moved from a team of ten to an org of 100+. Different codebase (Java, microservices), different culture, different decision-making rhythm. My task was to integrate Alaya's product capabilities into Benevity's platform while continuing to ship, without losing the product velocity we'd spent five years building.

I deliberately proposed nothing in the first month. I mapped the existing architecture, figured out who owned what, and built relationships with platform and infrastructure teams before forming opinions worth sharing. It felt slow. It paid off: when I eventually brought proposals forward, I had the context to make them credible and the relationships to get them heard.

Over the following year I contributed to three major cross-team architecture decisions, drove AI tooling adoption across the engineering organization, and became the cross-team liaison for the Europe-facing product surface.

I moved too fast early on, with the founder instinct that things needed fixing and that I knew how. Slowing down and listening made me more effective faster. The approach that works in a five-person startup, just ship it and fix it, needs deliberate recalibration when the org is ten times the size. I learned to distinguish between things that were genuinely broken and things that were simply different from what I was used to.

---

## Story 5: Defining the Technical Vision With No Roadmap

**Best for:** "How do you set technical direction?" / "Tell me about a time you had to make decisions with limited information" / CTO-level judgment

This is a recurring pattern for me rather than a single moment: the first six months of Alaya were a continuous exercise in making consequential technical decisions without certainty. No established playbook, no prior version of the product, no technical advisor. Just business requirements that changed weekly and a stack that had to scale from zero to enterprise.

The way I managed it was to be explicit about decision reversibility. Choices that were hard to undo, the data model, the tenancy approach, the API contract shape, I spent real time on. Choices that were cheap to revisit, UI frameworks, specific libraries, deployment tooling, I made quickly and moved on. The discipline was separating those two categories accurately and not letting urgency collapse them together.

That instinct also shaped how I documented decisions at the time. Not "here's what we decided," but "here's what we decided, here's what we gave up, and here's the condition under which we'd revisit it." That documentation turned out to be genuinely useful during due diligence, because the acquisition team could read the reasoning, not just the code.

The reflection is that explicit decision-logging is not just for large engineering orgs. Even as a solo founder-engineer, keeping a lightweight architecture decision record early prevents the rewrite-from-scratch temptation later. I'd do that from day one now.
