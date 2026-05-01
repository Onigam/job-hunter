# STAR Stories — Mercura AI Engineering Lead

Stories selected for an early-stage AI startup that values founding-engineer ownership, hands-on AI systems experience, and leadership without bureaucracy.

---

## 1. Building Alaya from Zero to Acquisition

*Best for: "Tell me about a time you built something end-to-end" / "Founding engineer" / "What's your biggest project?"*

In 2016, I co-founded Alaya, a purpose and impact platform for enterprise employee engagement. We had no product, no customers, and no engineering team. I was the only technical person for the first six months.

My task was to make something real fast enough to support the first enterprise sales conversations, then keep it alive and growing while the business scaled. That meant making stack choices I'd have to live with for years: I picked Node.js, React, and PostgreSQL because they'd let us move fast without painting ourselves into a corner. I built the core features in about three months, got to a working demo, then started layering in the things enterprise clients actually needed: multi-tenant architecture, a proper API layer, impact reporting pipelines, postal campaign tools. I hired and onboarded the first three engineers, set up CI/CD, established code review practices, and wrote the architecture docs that made onboarding fast.

By 2021 we had 50+ enterprise clients across Switzerland and France, and Benevity, a Canadian company with a $1B+ valuation, acquired us. The platform I'd built from a blank page was the asset being bought.

Looking back, I would've invested in observability earlier. We added proper APM late, which made debugging production issues harder than it needed to be. I also underestimated the cost of retrofitting for multi-tenancy: next time I'd design for it from day zero.

---

## 2. Getting Two Engineering Teams Onto AI Tooling Without a Mandate

*Best for: "How do you lead without authority?" / "Tell me about driving change in an org" / "AI tooling/adoption"*

At Benevity after the acquisition, I was a Senior Staff IC with no direct reports. I'd seen how much time engineers were losing to repetitive code review cycles and boilerplate work, and I wanted the two teams I worked with to start using AI-assisted workflows. The problem: I had no authority over either team, and "AI tooling" had a scepticism problem because nobody had seen it work reliably in production code.

I decided not to push it top-down. Instead I started with three engineers who were already curious: ran demos with real code from our codebase, not toy examples. I showed concrete time saves: one PR review cycle that went from two hours to twenty minutes using a prompt template I'd built. I created a shared repo of reusable prompts, wrote short internal docs for each use case, and ran informal lunch-and-learn sessions where attendance was voluntary and the tone was "here's something interesting" rather than "here's your new process."

Within three months, roughly 70% of engineers on both teams had adopted AI-assisted code review and generation in their daily workflow. I became the de facto AI tooling lead across the org, not because someone assigned it to me, but because I'd built the trust first.

What I'd do differently: I'd capture the "before" metrics earlier so the "after" comparison was more defensible. I had anecdotes but not a dashboard, which limited how broadly the story could travel inside the company.

---

## 3. A Hard Architecture Call Under Investor Pressure

*Best for: "Tell me about a technical trade-off you navigated" / "How do you handle technical debt?" / "Decision-making under uncertainty"*

At Alaya around 2019, the monolith was starting to show real scaling cracks: slow response times on the busiest endpoints, increasing deployment risk as the codebase grew, and a team that was stepping on each other constantly. The engineering team was split between doing a full microservices rewrite or staying modular. Meanwhile, investors were pushing for new features, not a six-month refactor that would ship nothing visible.

My job was to make a call that was defensible to the business while actually solving the technical problem.

I ran a two-week spike comparing both approaches with prototype load tests. Rather than presenting opinions, I took the results, with concrete numbers and projected timelines, to the CTO and investor conversations. The data pointed toward a middle path: a strangler-fig migration, where we'd extract only the two highest-traffic modules first and leave the rest of the monolith intact. I defined clear criteria for when to extract additional modules so "we'll do more later" wasn't just a promise.

The first extracted module shipped in six weeks. Performance on the busiest endpoints improved ~40%. The monolith held stable all the way through the Benevity acquisition two years later, without the big-bang rewrite anyone had originally feared.

The hardest part was convincing people that "not rewriting everything" was actually the right engineering call. Data helped. In hindsight I'd have benchmarked earlier in the process: the two weeks we spent building the spike before the conversation could've cut two weeks of internal debate.

---

## 4. Landing in a 10x Larger Org After Acquisition

*Best for: "Tell me about navigating change" / "Cross-team collaboration" / "Working at scale"*

When Benevity acquired Alaya in 2021, I went overnight from a 10-person startup to a company with hundreds of engineers, a mature Java microservices architecture, and processes I'd never encountered. Different culture, different stack, different everything.

My role was to integrate Alaya's capabilities into Benevity's platform without losing the velocity we'd built, and without alienating teams who hadn't asked to absorb our product.

The first thing I did was stop trying to fix things. I spent the first month just mapping the existing architecture and relationships before proposing anything. I built real working relationships with the platform and infra teams before I pushed any technical opinions. From that foundation, I was able to become a cross-team architecture liaison for the Europe-facing product surface, and eventually drive the AI tooling adoption I described above.

Three major cross-team architecture decisions I contributed to shipped successfully. The AI workflow changes I drove stuck and spread. None of that would've happened if I'd walked in treating it like Alaya with a bigger budget.

What I learned: moving fast into a new organization is usually slower in the end. The time I spent listening in month one multiplied by ten in the months that followed.
