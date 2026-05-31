# STAR Stories — Parloa / Staff Principal Software Engineer

---

## 1. Building Alaya from Zero to Acquisition

*Best for: "Tell me about a system you architected from scratch" / "How do you handle ambiguity at the founding stage?"*

In 2016, I co-founded Alaya, a purpose and impact platform for enterprise employee engagement. We had a blank page, no customers, no product, and a runway that assumed we'd be in front of clients within months.

My job was to architect and build the entire platform, alone at first, while the business was closing its first contracts. The constraint wasn't talent or time in the abstract; it was that every architectural call had to be defensible under conditions I couldn't fully predict yet.

I picked Node.js, React, and PostgreSQL, not because they were fashionable but because they were the right trade-off between velocity and hiring options in the Swiss market. In the first three months I shipped the core product: multi-tenant data model, impact reporting, API layer. As we grew, I hired the first three engineers, set up CI/CD, introduced code review conventions, and started drawing module boundaries before the monolith started to hurt us.

By 2021 the platform was running 50+ enterprise clients across Switzerland and France. Benevity, a Canadian unicorn at $1B+ valuation, acquired us. The acquisition was in large part a validation of the technical decisions made from day one.

What I'd do differently: I added proper APM and observability late, which made incident response harder than it needed to be during our peak growth period. I also retrofitted multi-tenancy instead of designing for it from the start, and that cost us three weeks we didn't have. Next time, both go in on day one.

---

## 2. Navigating a Post-Acquisition Integration

*Best for: "Tell me about navigating organizational change" / "How do you operate in a large engineering org?" / "Cross-functional collaboration"*

After the Benevity acquisition in 2021, I joined as Senior Staff Engineer on a team roughly ten times larger than anything I'd worked in before. Different culture, different codebase (Java and microservices), different processes, and an implicit expectation that I'd bring Alaya's energy without disrupting what was already working.

My task was to integrate Alaya's capabilities into Benevity's platform while continuing to ship new features, without losing the velocity that had made Alaya worth acquiring.

The mistake I almost made was moving fast. I had opinions about the architecture within the first two weeks and I started sharing them too early. I course-corrected: spent the first month mapping the existing system before proposing anything, built relationships with the platform and infrastructure teams before offering technical views, and listened for the constraints other engineers had been living with for years.

Once I had that context, I became the cross-team liaison for the Europe-facing product surface, contributed to three major architecture decisions that affected multiple teams, and drove the adoption of AI-augmented development practices across two engineering teams without managing anyone.

The lesson was about influence without authority. The engineers who adopted the AI tooling on their own terms became its internal advocates; a top-down mandate would have produced compliance, not adoption. That distinction matters at the Staff level more than anywhere else.

---

## 3. Making a Hard Architecture Decision Under Delivery Pressure

*Best for: "Tell me about a technical trade-off you navigated" / "How do you manage tech debt while shipping?"*

At Alaya, around 2019, the monolith was showing scaling cracks. The two highest-traffic endpoints were degrading under load, and the team was splitting between a full microservices rewrite and a modular monolith refactor. Investors were watching the roadmap, not the architecture; they wanted new features, not structural work.

My job was to make a defensible call that balanced long-term scalability with short-term delivery pressure, and to get buy-in from people who weren't engineers.

I ran a two-week technical spike comparing both approaches with prototype load tests. Rather than presenting a preference, I brought concrete metrics to the conversation: latency distributions, estimated migration timelines, failure surface under the two models. I proposed a strangler fig migration, extract the two busiest modules first and leave the rest of the monolith intact, with defined criteria for when to extract more.

We shipped the first extracted module in six weeks. Performance improved around 40% on the affected endpoints. The monolith stayed stable through the acquisition two years later. We never did the big-bang rewrite.

The hardest part was convincing people that not rewriting everything was the right answer. Data helped. So did framing it as a reversible decision: if the strangler fig approach hadn't worked, we could have changed course. That framing reduced the stakes of the decision and made it easier to get agreement quickly.

---

## 4. Driving AI Tooling Adoption Without a Mandate

*Best for: "How do you influence without authority?" / "Tell me about leading change in an engineering org" / Staff+ and principal roles*

At Benevity, I was a Senior Staff IC with no direct reports but a clear opportunity: the engineering teams were not yet using AI-assisted development tools, and I believed it would meaningfully change how fast and how confidently we could move.

Getting there required changing how engineers worked daily, across two teams that didn't report to me, in an org that had its own culture and existing habits.

I didn't start with a proposal or a policy. I found three engineers who were curious and ran informal demos with them, showing concrete before-and-after comparisons on real PRs. I built internal prompt templates and committed them to a shared repo so the value was persistent and didn't depend on me being in the room. I ran monthly lunch-and-learn sessions, no mandate, just results.

Within three months, roughly 70% of engineers on both teams were using AI-assisted code review and generation regularly. I became the informal AI tooling lead across the org, started being pulled into conversations with engineering leadership about the tooling strategy, and documented the adoption story in a way that other teams could replicate.

The bottoms-up approach was slower than a directive would have been, but the results were stickier. Engineers who adopted it voluntarily advocated for it internally in ways I couldn't have scripted. That kind of trust compounds.

---
