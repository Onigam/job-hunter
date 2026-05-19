# STAR Stories — Berry Interview Prep

---

## Story 1: Building Alaya from Zero to Acquisition
*Best for: "Tell me about founding-engineer experience" / "How do you handle ambiguity at day zero?"*

In 2016, I co-founded Alaya, an employee purpose platform for enterprise clients. There was no product, no customers, and no team beyond the founding group. My job was to architect and build everything from scratch, largely alone in the first year, while the business side was already signing its first contracts.

The first decisions were the ones that compounded. I chose Node.js, React, and PostgreSQL, not because it was the most technically interesting stack, but because it gave the best trade-off between delivery speed and long-term maintainability for a two-person operation. In the first three months I got the core to demo-ready. After that, the scope grew fast: multi-tenant architecture, a full API layer, impact reporting, third-party integrations. I hired and onboarded the first three engineers, set up CI/CD, and wrote enough architecture documentation that new people could understand the system without asking me every question.

By 2021, the platform had 50+ enterprise clients across Switzerland and France, and Benevity, a Canadian unicorn valued above $1B, acquired us. The technical decisions we made from day one were a direct input to that outcome.

Looking back, I'd have invested in observability much earlier. We added proper APM too late, and debugging production issues cost more time than it should have. I'd also have designed multi-tenancy from day zero rather than retrofitting it at month eight.

---

## Story 2: Making a Hard Architecture Decision Under Investor Pressure
*Best for: "Tell me about a technical trade-off you navigated" / "How do you handle competing priorities?"*

At Alaya, we hit a point where the monolith was showing scaling cracks. The engineering team was split between a full microservices rewrite and a modular monolith approach. Investors were pushing for new features, not rewrites, and both options felt like they had defenders in every meeting.

My task was to make a defensible technical call that balanced long-term scalability with short-term delivery pressure, and to do it in a way that people would actually follow.

I ran a two-week technical spike comparing both approaches with prototype load tests instead of just opinions. I then presented the trade-offs to the CTO and investors with concrete numbers: latency benchmarks, migration timelines, engineering-hours estimates. The recommendation was a strangler-fig migration: extract the two highest-traffic modules first, keep the rest of the monolith stable, and define clear criteria for when to extract more.

We shipped the first extracted module in six weeks. Performance on the busiest endpoints improved roughly 40%. The remaining monolith held stable through the acquisition without a single big-bang rewrite.

The hardest part wasn't the engineering, it was convincing people that "don't rewrite everything" was the right call. The benchmarks did most of that work. If I ran it again, I'd have done more early benchmarking to cut the debate shorter.

---

## Story 3: Driving AI Adoption Without a Mandate
*Best for: "Tell me how you work on a small team" / "How do you introduce new practices?" / LLM-specific questions*

At Benevity, I was a Senior Staff IC with no direct reports, but I needed to shift how two engineering teams worked by introducing AI-assisted development practices. Nobody was blocking it, but nobody had made it a priority either.

I started small. I found three engineers who were already curious about the tooling and worked with them first. I built internal demos that showed concrete time savings, things like "here's a PR review cycle that took two hours, here's the same one with AI assistance in 40 minutes." I ran informal lunch-and-learn sessions with no mandate attached, just demos and honest answers about what the tools couldn't do. I committed reusable prompt templates to a shared repo so people didn't have to start from scratch.

Within three months, around 70% of engineers on both teams were using AI-assisted code review and generation in their regular workflow. I became the informal AI tooling lead across the org, which wasn't a title I asked for.

The approach was slower than a top-down directive would have been, but the adoption was genuine. Engineers who chose it on their own terms became internal advocates. A mandate would have gotten compliance; the bottom-up approach got actual change.

---

## Story 4: Navigating a Post-Acquisition Integration
*Best for: "How do you handle joining a much larger organization?" / "Tell me about a time things were out of your control"*

When Benevity acquired Alaya in 2021, I went from a six-person startup to a company with an engineering org ten times that size. Different culture, different codebase (Java plus microservices), different release cadence. The instinct was to start fixing things immediately, which was the wrong instinct.

My task was to integrate Alaya's capabilities into Benevity's platform without losing the product velocity we'd built, while also figuring out where I could add value in a system I didn't yet understand.

The first month I spent mostly mapping. I read architecture docs, followed along in incident postmortems, and had one-on-one calls with engineers across the platform and infra teams before I proposed anything. I built relationships before pushing opinions. Once I had enough context, I was able to drive three cross-team architecture decisions that the team had been circling for a while, and I became the liaison for the Europe-facing product surface.

The integration was successful and the Alaya features got migrated cleanly. More importantly, I didn't blow up relationships by being the new person who thought they knew better.

The lesson was that "slow is smooth, smooth is fast" applied here. I initially underestimated how much my credibility depended on being right about the context before being right about the solution.
