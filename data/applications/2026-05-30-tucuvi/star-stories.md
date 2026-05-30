# STAR Stories — Director of Engineering at Tucuvi

_Prepared for behavioral interview questions. Written in first-person prose, past tense._

---

## Story 1: Building Alaya from Zero to Acquisition

**Best for:** "Tell me about a time you built an engineering team from scratch" / "How do you approach technical decisions under uncertainty?"

In 2016, I co-founded Alaya, a purpose and impact platform for employee engagement. My co-founder handled business development; I was the sole engineer. We had prospective enterprise clients, no product, and no codebase. The task was to architect and ship a production-grade platform while the business was still signing its first contracts.

My first decision was a deliberate stack choice: Node.js, React, PostgreSQL. Not trendy at the time, but something a small team could reason about without tribal knowledge. The first three months were heads-down building the core features to reach a genuine first demo. Once that was stable, I hired our first three engineers over the following year, set up CI/CD from day one, and wrote the architecture documentation before the team grew large enough to make informal knowledge dangerous.

The platform reached production with 50+ enterprise clients across Switzerland and France. In 2021, Benevity acquired us at a $1B+ valuation. That outcome was a direct validation of the early technical choices: the multi-tenant design, the API architecture, the decision to resist over-engineering while the business was still figuring out product-market fit.

Looking back, I'd invest in observability much earlier. We added proper APM late, which meant too much production debugging we could have caught at the query level. And multi-tenancy: I'd design for it from day zero rather than retrofit it under growth pressure.

---

## Story 2: Post-Acquisition Integration at Benevity

**Best for:** "How do you navigate organizational change?" / "Tell me about a time you joined a much larger team" / "How do you build trust in a new environment?"

When Benevity acquired Alaya in 2021, I stepped into an engineering organization roughly ten times our size. Different codebase (Java, microservices), different tooling culture, different ways of making decisions. My task was to keep shipping product features while integrating Alaya's capabilities into Benevity's platform without losing the delivery momentum we'd built.

My first month was deliberately slow. Before proposing anything, I mapped the existing architecture end-to-end and built relationships with the platform and infrastructure teams. In a post-acquisition context, trying to "fix" things before you understand them is a reliable way to lose credibility fast.

Once I understood the landscape, I focused on three things: migrating core Alaya features into Benevity's platform, contributing to three major cross-team architecture decisions, and driving AI tooling adoption across teams that didn't report to me. For the tooling piece, I started with a small cohort of curious engineers, built internal demos showing real time savings on our actual codebase, and committed reusable prompt templates to a shared repo. Within three months, roughly 70% of engineers on two teams were using AI-assisted workflows in their normal development cycle.

The lesson I took from this: I initially moved too fast trying to improve things that weren't broken. The engineers who later advocated most strongly for the AI tooling were the ones who came to it on their own terms, not because I pushed it. Slowing down in the first phase made the second phase much faster.

---

## Story 3: Monolith vs. Microservices Under Investor Pressure

**Best for:** "Tell me about a hard technical trade-off you navigated" / "How do you handle technical debt when the business wants features?" / "How do you communicate technical decisions to non-engineers?"

Around 2019 at Alaya, we hit a familiar inflection point: the monolith was showing scaling cracks on the two highest-traffic features, and the engineering team was divided between a full microservices rewrite and a modular monolith approach. Investors were pushing for new product features, not infrastructure work.

My task was to make a defensible technical decision that balanced long-term scalability with immediate delivery pressure, and then get alignment across the business and engineering team.

I ran a two-week technical spike. Instead of arguing from architectural principles, I built prototype load tests for the two modules causing the most pain and presented the results with concrete numbers. The proposal: a strangler-fig migration, extracting those two modules first, keeping the rest of the monolith stable, with explicit criteria for when additional extraction was warranted. No big-bang rewrite.

The first extracted module shipped in six weeks. Performance on the busiest endpoints improved by roughly 40%. The remaining monolith stayed stable all the way through the 2021 acquisition. No full rewrite was ever needed.

The hardest part was convincing the team that "not rewriting everything" was a real answer. In engineering culture, incremental can read as timid. The load test data was what cut the debate short: opinions about architecture are hard to argue against, but latency numbers aren't.

---

## Story 4: Driving AI Tooling Adoption Without Formal Authority

**Best for:** "How do you lead change without a mandate?" / "Tell me about influencing people who don't report to you" / (Directly relevant to Claude Code adoption at Tucuvi)

At Benevity, I was a Senior Staff IC with no direct reports and a clear goal: meaningfully improve AI tooling adoption across two engineering teams that weren't mine to manage. The teams weren't opposed to the idea, but they weren't convinced the learning curve was worth it.

I started with three engineers who were already curious. The strategy was: build demos on our real codebase, not toy examples. A PR review that normally took half a day taking under an hour was more persuasive than any productivity statistic. I ran informal sessions without calendar mandates or decks: just "here's what I did this week, want to see it?"

The distribution piece was deliberate. I created reusable prompt templates and committed them to a shared repo so engineers didn't have to start from scratch. I kept a running internal log of concrete wins, specific and credible ("saved two hours on this PR review") rather than inflated claims.

Within three months, roughly 70% of engineers on both teams had integrated AI-assisted workflows into their daily work. More importantly, they'd become internal advocates. The engineers who adopted organically pushed it to their peers in a way I couldn't have manufactured with a top-down directive.

The reflection: the mandate-free approach was slower at first, but the adoption that resulted was much stickier. Engineers own what they chose.

---

## Story 5: Hiring and Growing an Engineering Team at Alaya

**Best for:** "Tell me about building an engineering culture" / "How do you think about hiring engineers?" / "How do you onboard engineers effectively?"

At Alaya, I went from sole engineer to leading a team of four within roughly 18 months. The first hire was the hardest: no established codebase culture, no team norms, just a growing product and a first engineer who needed to be productive quickly.

My approach was to invest heavily in the onboarding structure before the first hire arrived. I documented the architecture decisions made to date and the reasoning behind them, not just the outcome. I set up CI/CD before I brought anyone in, so the feedback loop was there from day one. And I was explicit about what "good" looked like in code review from the first PR.

Each subsequent hire came with a more refined version of the same onboarding: architecture doc, local setup guide, first week pairing on a real feature, first PR reviewed with specific written feedback.

The result was a team that onboarded in roughly one to two weeks to meaningful contribution. More importantly, the code review culture was established early and never had to be enforced because it was expected from the start.

What I'd change: I'd write down the "why" behind architectural decisions even earlier, including the dead ends. Engineers joining a codebase rarely know what was considered and rejected. That history prevents repeating bad ideas and gives new team members real context.
