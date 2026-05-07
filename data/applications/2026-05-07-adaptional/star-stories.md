# STAR Stories — Founding Engineer at Adaptional

Prepared for: Adaptional (YC S25) — Founding Engineer role
Focus areas: agentic AI systems, founding-engineer ownership, regulated domains, hard technical decisions

---

## 1. Building Alaya from Zero to Acquisition

**Best for:** "Tell me about a time you built something from scratch" / "What does founding-engineer ownership mean to you?"

In 2016, a co-founder and I decided to build Alaya, an employee purpose and impact platform, targeting European enterprises. We had nothing: no product, no customers, no team. I was the sole engineer for the first several months.

My job was to architect and ship a working product while the business side was still signing the first contracts. That tension was constant and, honestly, clarifying. I chose Node.js, React, and PostgreSQL because I knew them well and they'd let me move fast without painting myself into corners. The first version was deliberately narrow: one core workflow, multi-tenant from the start because I knew enterprise clients would never share a database. I built the CI/CD pipeline on day one, not because I had time for it, but because I couldn't afford not to have it.

Over four years, we scaled to 50+ enterprise clients across Switzerland and France. I hired the first three engineers, set up the code review culture, and made the architectural decisions that shaped everything after. In 2021, Benevity, a Canadian unicorn, acquired us. That acquisition was as much a validation of the technical choices as the business ones. If the platform had been brittle, the due diligence would have surfaced it.

What I'd change: I added observability too late. For months we were flying blind on performance. And multi-tenancy, while designed in from the start, had a few edge cases we retrofitted awkwardly. I'd instrument more aggressively from the very beginning.

---

## 2. Making an Architecture Decision Under Investor Pressure

**Best for:** "Tell me about a hard technical trade-off" / "How do you handle technical debt vs. feature velocity?"

Around year three at Alaya, the monolith was starting to buckle under load. Engineers were stepping on each other. Some endpoints were slow. The team was split between a full microservices rewrite and staying the course, and investors were asking why we were talking about architecture when we should be shipping features.

My task was to make a defensible call and get everyone behind it, fast.

I ran a two-week technical spike. We built small prototypes of both approaches, ran load tests, and measured not just performance but developer ergonomics. Then I sat down with the co-founder and the investors and presented the data, not opinions. What I proposed was a strangler fig pattern: extract the two highest-traffic modules first, keep the rest monolithic, and define explicit criteria for when to extract more. No big-bang rewrite, no betting the company on an 18-month migration.

The first extracted module shipped in six weeks. Performance on those endpoints improved by roughly 40%. The monolith stayed stable through the acquisition without another crisis. We never needed the full rewrite.

What surprised me was how much of the fight was about framing, not engineering. Saying "we're not rewriting everything" sounds like giving up. Saying "we're surgically extracting the two bottlenecks" sounds like a plan. Same decision, very different reception.

---

## 3. Driving AI Tooling Adoption Without a Mandate

**Best for:** "How do you influence without authority?" / "Tell me about leading a change" / "How do you think about AI in engineering workflows?"

At Benevity after the acquisition, I was a Senior Staff IC: no direct reports, no budget, but a strong opinion that AI-assisted development was going to change how the team worked. The problem was that two teams of engineers weren't my teams. I couldn't tell anyone to do anything.

I started with three engineers who were curious. We did informal demos showing real time savings: a PR review cycle that took two hours trimmed to 45 minutes, a test generation task that used to be manual and tedious done in ten minutes. I built reusable prompt templates, committed them to a shared repo, and documented the time savings in writing so people had something to point to when their manager asked why they were "playing with AI tools."

Within three months, roughly 70% of engineers on both teams had incorporated AI-assisted code review and generation into their daily workflow. I became the informal AI tooling lead without ever asking for the title.

The lesson was about the difference between adoption and compliance. A mandate would have gotten surface-level usage and a lot of resentment. Starting with curiosity and documenting real results let engineers advocate for it themselves, which is the only adoption that actually sticks.

---

## 4. Navigating Post-Acquisition Integration

**Best for:** "Tell me about navigating a big change" / "How do you operate in a larger org?" / "What happens when you join a company much bigger than what you're used to?"

When Benevity acquired Alaya in 2021, I went from a team of eight to an engineering organization ten times that size. Different culture, different stack (they were Java and microservices, we were Node.js), different processes, different everything.

My instinct was to come in with opinions, because I'd just spent five years building something that worked. That instinct was almost entirely wrong.

I spent the first month doing almost nothing but mapping: the architecture, the team dynamics, who the real decision-makers were, what had already been tried and failed. I built relationships with the platform and infra teams before I pushed any technical views. When I did start contributing to architecture decisions, I had enough context to frame my proposals in terms that made sense to them, not just to me.

Over time, I drove three major cross-team architecture decisions and became the go-to person for AI tooling adoption across two teams. The Alaya feature migration completed without the kind of friction these things usually generate.

What I'd do differently: I still moved a bit too fast in the first two months. I flagged some things as problems that weren't really problems, just different from what I was used to. That cost some goodwill I had to rebuild. Listening first, longer, would have made me more effective sooner.
