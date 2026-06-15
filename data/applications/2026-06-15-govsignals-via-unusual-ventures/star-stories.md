# STAR Stories — GovSignals Platform Engineer

Stories selected for a platform engineering role: founding-engineer ownership, infrastructure decisions under pressure, cross-team influence, developer experience.

---

## 1. Building Alaya from Zero (Founding Engineer)

*Best for: "Tell me about building something from scratch" / "How do you handle ambiguity?"*

In 2016, I co-founded Alaya with a blank page and no customers. We'd signed an enterprise client before the product existed, which meant I had to make architecture decisions that would survive real load while also moving fast enough to demo in three months. That tension, ship now versus build right, was the defining constraint of the first year.

I chose Node.js, React, and PostgreSQL because they were the right tools for a small team, not because they were fashionable. More importantly, I built for multi-tenancy from the start, which turned out to be the decision that didn't hurt us later. CI/CD went in during the first week. I hired the first three engineers within the year and treated code review culture and architecture documentation as first-class deliverables alongside the product.

Five years later, the platform had 50+ enterprise clients across Switzerland and France, and Benevity, a $1B+ Canadian unicorn, acquired us in 2021. The technical decisions made on day one were still holding at exit. Looking back, I'd have invested in observability earlier. We added proper monitoring late, and there were production issues we could have caught faster. I'd also have designed the multi-tenant data model with more care upfront rather than retrofitting it partway through growth.

---

## 2. Architecture Decision Under Pressure (Strangler Fig Migration)

*Best for: "Tell me about a technical trade-off you navigated" / "How do you handle technical debt?"*

Around 2019, Alaya's monolith was starting to show load issues on our busiest endpoints. The engineering team was split: full microservices rewrite versus staying monolithic and patching. Investors were pushing for new features. I had to make a call that wouldn't block the product roadmap and wouldn't accumulate debt we couldn't repay later.

I ran a two-week technical spike: benchmarks on the hot paths, a prototype of the two highest-traffic modules extracted into separate services, and load tests comparing both approaches under realistic conditions. I put concrete metrics in front of the CTO and the investors rather than arguing from intuition. My proposal was a strangler fig approach: extract the two modules that were actually causing pain, leave the rest alone, and define explicit criteria for when to extract more.

The first extracted module shipped in about six weeks. Performance on those endpoints improved by roughly 40%. The monolith stayed stable all the way through the Benevity acquisition with no further extractions needed. What I learned is that the harder part wasn't the engineering; it was convincing people that not rewriting everything was a valid decision. Having the benchmark data cut the debate significantly. Next time I'd front-load that measurement even earlier.

---

## 3. Post-Acquisition Integration (Navigating a 10x Larger Codebase)

*Best for: "Tell me about navigating change" / "Working across teams" / "Cross-functional collaboration"*

After the Benevity acquisition in 2021, I joined a team ten times larger than Alaya. The codebase was Java microservices, the tooling was different, the culture was different, and my job was to integrate Alaya's capabilities into Benevity's platform without losing product velocity or breaking things I didn't understand yet.

I spent the first month mapping the architecture before proposing anything. I built relationships with the platform and infrastructure teams before I had opinions about what to change. That felt slow at the time. But it meant that when I did start pushing for things, I had credibility rather than just momentum. I ended up as a liaison between the Europe-facing product surface and the core platform team, contributing to three major cross-team architecture decisions over the following year.

The core Alaya features migrated successfully. I also drove adoption of AI-assisted development practices across two engineering teams during that period, which ended up becoming something I was known for across the broader org. The main thing I'd do differently is spend even more time listening upfront. I moved too fast initially trying to fix things that weren't broken, and it cost me some trust I had to rebuild.

---

## 4. Driving Adoption Without Formal Authority (AI Tooling at Benevity)

*Best for: "How do you influence without authority?" / Staff+ IC roles / platform and developer experience work*

At Benevity in 2023, I wanted to introduce AI-assisted development practices across two engineering teams that didn't report to me. There was no mandate, no top-down directive. I had to change how people worked using only credibility and the quality of the demos.

I started with three engineers who were already curious. Built internal tooling demos that showed concrete time savings, not abstract potential. Ran informal lunch sessions: no slides, just live demos and open Q&A. I committed a set of reusable prompt templates to a shared repo and documented a specific case where the workflow saved two hours on a PR review cycle. The key was keeping it low-pressure, because engineers adopt things when they see them work for real, not when they're told to.

Within three months, about 70% of engineers on both teams were using some form of AI-assisted tooling in their daily work. I became the informal lead for AI tooling across the org. The mandate-free approach was slower than a top-down rollout would have been, but stickier. Engineers who adopted it voluntarily became internal advocates, which I couldn't have manufactured. When the goal is lasting behavior change rather than temporary compliance, the slower path usually wins.
