# STAR Stories — Better Stack, Founding Product Engineer

---

## Story 1: Building Alaya From Zero

**Best for:** "Tell me about a time you built a product from scratch" / "What does founding engineering mean to you?"

In early 2016, my co-founder and I decided to build Alaya, an employee engagement platform focused on purpose and impact. We had no product, no customers, and no engineering team. My job was to make the technical bets that would let us demo something real in three months and still be maintainable in three years.

I chose a pragmatic stack: Node.js, React, PostgreSQL. Nothing exotic, nothing that would require specialist hires we couldn't afford. In the first sprint I built the multi-tenant core and the data model, knowing that retrofitting multi-tenancy later is one of the most expensive mistakes a SaaS platform can make. Over the next year I added the full feature surface: impact reporting, campaign management, an API layer for enterprise integrations, and a notification system. When we started signing clients, I hired and onboarded the first three engineers, set up CI/CD, and established code review and architecture documentation as non-negotiables from day one.

By 2021 the platform had more than fifty enterprise clients across Switzerland and France. Benevity, a Canadian unicorn valued at over $1B, acquired the company. The architecture I'd chosen from a blank page scaled through the entire run without a rewrite.

What I'd do differently: I would have added proper observability from month three, not month eighteen. We added APM late and paid for it with debugging sessions that cost real engineering hours. Early investment in monitoring is not a luxury, it's how you stay fast as the system grows.

---

## Story 2: A Hard Architecture Decision Under Business Pressure

**Best for:** "Tell me about a technical trade-off you navigated" / "How do you handle technical debt while the business is pushing for features?"

About two years into Alaya's growth, the monolith was showing real strain. Two specific modules, the notification pipeline and the reporting engine, were causing latency spikes under enterprise load. The team was split: some engineers wanted a full microservices rewrite, others argued it was premature. Investors were asking for new features, not infrastructure work.

My task was to make a defensible call that served both goals without pretending the tension didn't exist.

I ran a two-week technical spike: prototype load tests on both approaches, a rough estimate of the migration cost, and a set of concrete criteria for what "ready to extract" would mean for any given module. Then I presented the trade-offs to the CTO and two investors with actual numbers, not opinions. The proposal was a strangler-fig migration: extract the two highest-traffic modules first, keep the rest monolithic, and define measurable thresholds for future extractions.

We shipped the first extracted module in six weeks. Latency on the busiest endpoints dropped by roughly 40%. The remaining monolith stayed stable through the acquisition with no further structural work needed.

The hardest part wasn't the technical decision, it was convincing people that not rewriting everything was the right answer. I learned that data cuts the debate faster than any argument. The next time I'm in that room I'd bring benchmarks even earlier.

---

## Story 3: Driving Change Without a Mandate

**Best for:** "How do you lead without authority?" / "Tell me about influencing a team that doesn't report to you"

After the Benevity acquisition I joined as Senior Staff IC on a team roughly ten times larger than Alaya had been. I had no direct reports. But I could see that AI-assisted development workflows, things like structured prompt templates for code review and test generation, would meaningfully change how fast engineers could ship. The problem was getting two teams who didn't report to me to actually change how they worked.

Top-down mandates for tooling changes almost never stick, so I didn't try that. I started with three engineers who were already curious about the space and ran informal demos showing concrete time savings on tasks they actually did every week: PR reviews, boilerplate generation, writing migration scripts. I committed reusable prompt templates to a shared repo and documented real examples: "this pattern saved two hours on a PR review cycle." I ran optional lunch-and-learn sessions with no pressure to adopt.

Within three months, about 70% of engineers across both teams were using AI-assisted code review and generation in their daily workflow. I hadn't issued a single mandate.

The lesson was that the mandate-free approach is slower to start but far stickier. Engineers who adopted on their own terms became internal advocates, and that advocacy reached people I couldn't have reached directly. I'd do this the same way again.

---

## Story 4: Navigating a Post-Acquisition Integration

**Best for:** "Tell me about a time you had to adapt to a very different environment" / "How do you work with teams that have different technical cultures?"

The Benevity acquisition in 2021 was a good outcome, but it put me in an environment I hadn't prepared for. The codebase was Java and microservices, not Node.js and a modular monolith. The team had processes and conventions built over years. I was the new person with opinions, which is a dangerous combination.

My instinct was to move fast and start improving things, which is exactly the wrong move in a new codebase you don't fully understand yet.

I spent the first month doing almost nothing but mapping: the architecture, the deployment topology, who owned what, and where the real pain points were. I built relationships with the platform and infrastructure teams before pushing any technical opinions. When I did start proposing changes, I had enough context to understand which hills were worth climbing and which were just aesthetic preferences. I became a cross-team architecture liaison for the European product surface, contributed to three major cross-team architecture decisions, and eventually drove the AI tooling adoption described above.

What I took from it: technical credibility transfers poorly across context. You have to re-earn it in each new environment. Listening is not a soft skill, it's a prerequisite for making durable technical contributions in an organization you didn't build.

---
