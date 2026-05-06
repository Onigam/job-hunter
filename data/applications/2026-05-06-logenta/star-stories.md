# STAR Stories — Logenta Founder CTO

Prepared for a founding/CTO-type interview. Stories selected for relevance to early-stage technical leadership, agent system design, and building from zero.

---

## 1. Building Alaya from Zero to Acquisition

**Best for:** "Tell me about a time you built something from scratch" / "What does founding-engineer work actually look like for you?"

In 2016, I co-founded Alaya, a purpose and impact platform for employee engagement. We had nothing: no product, no customers, no team. My first job was to pick a stack I could move fast with alone, that a small team could maintain later without constant babysitting. I went with Node.js, React, and PostgreSQL, not because they were the most technically interesting choices, but because the hiring pool was larger and the operational complexity was lower than alternatives I'd considered.

Over the first three months I built the core features to get to a first demo, then iteratively expanded: multi-tenant architecture, API layer, impact reporting, postal campaigns. When we started hiring, I onboarded the first three engineers, set up CI/CD pipelines, established a code review culture, and wrote the architecture documentation that let people contribute without asking me every question. That part took as much time as the actual coding.

By 2021, the platform served 50+ enterprise clients across Switzerland and France and Benevity, a Canadian unicorn at $1B+ valuation, acquired it. The acquisition was a direct validation of the technical choices made from day one.

Looking back, I'd instrument observability from the start. We added proper APM late, and it cost us twice: once to retrofit it, once in the production incidents we didn't catch fast enough before it was in place. Multi-tenancy is the other one: I'd design for it from day zero, not discover it was needed at client three.

---

## 2. Making a Hard Architecture Decision Under Pressure

**Best for:** "Tell me about a technical trade-off you navigated under pressure" / "How do you handle tech debt when investors want features?"

At Alaya, the monolith started showing scaling cracks around year three. The team was split: full microservices rewrite vs. a modular monolith. The debate was abstract and was going nowhere. Meanwhile, investors were asking for new features, not rewrites, and the CTO and I were the ones in the room with both sides.

My task was to make a defensible call and get everyone aligned on it with concrete evidence rather than opinions. I ran a two-week technical spike comparing both approaches with prototype load tests on our actual traffic patterns. Then I built a clear trade-off presentation for both the CTO and the investors, with numbers, not intuitions.

What I proposed was a strangler fig migration: extract the two highest-traffic modules first, keep the rest monolithic, and define specific criteria for when to extract additional modules rather than doing it speculatively. That gave investors a clear timeline for the first improvement and gave engineers a principled framework rather than an open-ended rewrite project.

We shipped the first extracted module in six weeks. Performance on the busiest endpoints improved ~40%. The remaining monolith held through the acquisition without any further major surgery.

The hardest part wasn't the technical decision, it was convincing people that "not rewriting everything" was the right call. The load test data did most of the work. I'd run that kind of benchmarking earlier in the next debate to cut the discussion time down.

---

## 3. Shipping an AI Agent Practice Without Formal Authority

**Best for:** "How do you lead without direct reports?" / "Tell me about introducing new technology to a resistant team"

After the Benevity acquisition in 2021, I was a Senior Staff IC with no direct reports, working across two engineering teams that didn't report to me. I wanted to push AI-assisted development workflows: code review, generation, prompt patterns. The standard top-down mandate approach wasn't available to me, and I suspected it would backfire anyway with a team that had been doing things a certain way for years.

I started with three engineers who were already curious, not the skeptics. With them I built concrete demos showing time savings on real tasks they recognized from their own work: a PR review cycle that used to take two hours, a boilerplate generation task that ate up a Friday afternoon. I made reusable prompt templates and committed them to a shared repo so people could adopt without having to reinvent anything. Lunch-and-learns, no mandate, no slides with strategy decks.

Within three months, roughly 70% of engineers across both teams were using AI-assisted code review and generation in their regular workflow. I hadn't asked anyone to; it spread because the engineers who adopted it early started talking about it themselves.

What I learned was that mandate-free adoption is slower at the start but far stickier at the end. Engineers who chose it on their own terms became advocates in a way I couldn't manufacture with a top-down decree. For an early-stage CTO trying to build engineering culture, that distinction matters a lot.

---

## 4. Navigating Post-Acquisition Integration

**Best for:** "Tell me about a time you had to adapt quickly" / "How do you operate in a larger org after a startup?"

When Benevity acquired Alaya in 2021, I went from a five-person team I'd built from scratch to an org ten times larger, with a Java microservices codebase I'd never touched, different processes, different culture, and different expectations about what "Senior Staff" meant.

My instinct was to move fast and start fixing things. I'd done it before and it had worked. That was the wrong instinct here. The first month I made myself spend just mapping the architecture and building relationships with the platform and infra teams before proposing anything. That felt slow and uncomfortable, but it meant that when I did propose changes, I had the context to make them sensible and the relationships to get them heard.

Over the next year I drove three major cross-team architecture decisions, migrated core Alaya features into Benevity's platform, and became the informal lead for AI tooling across two engineering teams. None of that would have happened if I'd walked in on day one treating the existing system as a set of problems to fix.

The reflection: I initially moved too fast trying to "improve" things that weren't actually broken. Slowing down and listening first made me more effective. For a founder CTO joining a company with an existing team or inheriting any part of a system someone else built, that lesson transfers directly.

---

## 5. Choosing the Right Stack for a New Product Under Uncertainty

**Best for:** "How do you make early technical decisions when requirements aren't fully known?" / "Tell me about a stack decision you're proud of"

In early 2016, before we had a single customer, I had to decide the technical foundation for Alaya. I was building alone. I had to pick something fast enough for one engineer to make meaningful progress, good enough to scale to something real if the business worked, and maintainable enough that I could hire people to work on it later without them needing a PhD in the system.

I ruled out a few tempting options early: a microservices architecture from the start (too much operational overhead for one person), a graph database (interesting but hiring would be harder), and an event-sourcing pattern (technically elegant but too much upfront design cost for a startup that still didn't know what it was building). I went with Node.js, React, and PostgreSQL. Boring choices, on purpose.

The platform scaled to 50+ enterprise clients on that foundation without a rewrite. When I hired engineers, they were productive in weeks rather than months. When Benevity acquired us, the codebase was one they could maintain without me.

What I'd do differently is document the architectural decisions more formally as we made them. We had the reasoning in everyone's heads but not written down, which created friction when new team members needed to understand why things were done a certain way, or when I needed to make a consistent call in a new context.
