# STAR+R Stories: SCAIT (Founding Engineer, Frontend Focus)

Picked for a founding-engineer role at a pre-seed AI startup: building from zero, making frontend architecture calls without a safety net, and working closely with a small founding team.

---

## Story 1: Building Alaya from Zero to Acquisition

**Best for:** "Tell me about building something from scratch" / founding engineer questions / how I handle ambiguity

In 2016 I co-founded Alaya, a purpose and impact platform for employee engagement, and we started from a genuinely blank page. No customers, no product, not even a settled idea of what the first version should do. My job was to architect and build the whole thing, alone at first and then with a small team, while the business was out signing its first enterprise clients in parallel. I picked a pragmatic stack, Node.js, React, PostgreSQL, that could scale without forcing us to over-engineer for a scale we hadn't earned yet, and pushed hard to get a working demo in front of the first prospects within three months. From there it was iterative: multi-tenant architecture, an API layer, impact reporting, postal campaigns, each piece added once the last one had proven itself with real users. I also hired and onboarded our first three engineers and set up the basics of CI/CD and code review before the team got big enough that skipping them would've hurt. The platform reached production with more than 50 enterprise clients across Switzerland and France, and Benevity, a Canadian unicorn valued north of a billion dollars, acquired the company in 2021, which felt like the clearest possible validation of the early technical calls. If I redid it, I'd invest in observability much sooner; we bolted on proper APM late and paid for it in painful debugging sessions, and I underestimated how expensive retrofitting multi-tenancy would be compared to designing for it from day zero.

---

## Story 2: A Hard Architecture Decision Under Investor Pressure

**Best for:** technical trade-offs / handling technical debt / defending a decision with data

At Alaya, our monolith started showing real scaling cracks right around the time investors were pushing hard for new features, not a rewrite. The team was split between a full microservices rewrite and a more modest modular-monolith approach, and neither side had much more than opinions to back their position. I took two weeks to run an actual technical spike, load-testing prototypes of both approaches instead of arguing from intuition, and brought the results to the CTO and investors as numbers rather than a pitch. What I proposed was a middle path: a strangler-fig migration that pulled out only the two highest-traffic modules first, left the rest of the monolith alone, and set clear, written criteria for when we'd extract anything further. We shipped the first extracted module in six weeks, and the busiest endpoints got roughly 40% faster. The rest of the monolith held up fine all the way through the acquisition, so we never needed the big-bang rewrite everyone was afraid of. The hard part wasn't the technical work, it was convincing people that choosing not to rewrite everything was itself a defensible engineering decision. Data shortened that argument considerably, and next time I'd run the early benchmarks even sooner, before the debate had a chance to calcify into camps.

---

## Story 3: Leading Adoption Without Formal Authority

**Best for:** influence without authority / driving change across teams / staff-level scope without a title to match

At Benevity I was a senior staff IC with no direct reports, and I wanted to get two teams that didn't report to me using AI-assisted development practices, which meant changing how people worked without any mandate to make them. I started small, with three engineers who were already curious, and built internal demos that showed concrete time saved rather than making abstract claims about the future of coding. From there it was informal lunch-and-learn sessions, no requirement to attend, plus a shared repo of prompt templates that people could take or leave. I documented specific wins as they happened, things like a PR review cycle that dropped by two hours, because a concrete story travels further than a slide about productivity. Within three months, about 70% of engineers across both teams were using AI-assisted review and generation regularly, and I'd become the informal go-to person for AI tooling org-wide. It was slower than a top-down rollout would have been, but it stuck: people who adopted it because they wanted to ended up advocating for it themselves, which isn't something a decree from above could have produced.

---

## Story 4: Post-Acquisition Integration at Benevity

**Best for:** joining a very different environment / cross-functional collaboration / working inside someone else's codebase

After Benevity acquired Alaya in 2021, I joined a team roughly ten times the size of what I'd worked in before, with an unfamiliar codebase in Java and microservices instead of the Node stack I'd built. My task was to help integrate Alaya's capabilities into Benevity's platform while still shipping new features, without losing the pace we'd built as a five-person startup. I spent the first month mostly listening, mapping the existing architecture and how the org actually made decisions, before proposing anything. I built relationships with the platform and infra teams before I pushed technical opinions on them, which mattered more than I expected going in. That groundwork paid off: we migrated the core Alaya features successfully, I contributed to three major cross-team architecture decisions, and became a de facto liaison for the Europe-facing product surface. My honest reflection is that I moved too fast early on, trying to fix things in the new org that weren't actually broken, just different from what I was used to. Slowing down and listening first made me noticeably more effective once I actually got moving.

---

## Story 5: Choosing the Stack for a Product That Didn't Exist Yet

**Best for:** technical decision-making with incomplete information / frontend architecture ownership / startup speed vs. correctness trade-offs

Early at Alaya, before we had a single paying customer, I had to choose a frontend and backend stack for a product whose final shape nobody could describe yet, only the rough problem it needed to solve. The task was picking tools that would let us move fast for the next six months without locking us into decisions that would hurt at year two, which is a genuinely different optimization than picking "the best" technology in the abstract. I leaned toward boring, well-understood tools, React on the frontend, a straightforward Node and PostgreSQL backend, over anything trendier, on the logic that our biggest risk was product-market fit, not technical elegance. That choice let us get a demo in front of prospects in three months and kept the codebase approachable enough that the first engineers I hired were productive within days, not weeks. The platform scaled on that foundation all the way to the Benevity acquisition five years later, though we did eventually need the multi-tenancy retrofit I mentioned earlier. Looking back, the instinct to pick boring tools was right, but I'd bake in a couple of the harder architectural decisions, like multi-tenancy, from the start next time rather than treating every deferred decision as free.
