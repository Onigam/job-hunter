# STAR Stories — Hatchet Founding Engineer

These are prepared for behavioral questions likely to come up in a founding-engineer interview at a small infrastructure startup: building from scratch, technical judgment under pressure, working without formal process, and influencing technical direction early.

---

## Story 1: Building the Platform from Zero (Alaya, 2016)

Best for: "Tell me about a time you built something from scratch" / "What does founding engineer mean to you?"

In 2016, I co-founded Alaya, an employee purpose and impact platform. We had a blank slate, no code, no customers, and a very small runway. My job was to build the entire technical foundation while the business side was already signing its first enterprise clients, so there was no luxury of building in isolation.

The first three months were about shipping something real enough to demo. The harder part was what came after. I had to make architectural calls with almost no information: which parts of the system needed to be multi-tenant from day one, where to put the abstraction boundaries, what the data model would look like when we had fifty enterprise clients instead of two. I chose a pragmatic stack, Node.js, React, PostgreSQL, that could scale without over-engineering at the start, and built the core features iteratively. In parallel, I was running customer discovery calls, hiring the first three engineers, and setting up CI/CD and code review practices that would survive me not being the only person touching the codebase.

By 2021, the platform had 50+ enterprise clients across Switzerland and France. Benevity acquired us; they're a Canadian unicorn with a $1B+ valuation, so that outcome was a direct validation of the technical and product decisions made in those first years.

What I'd do differently: I added observability too late, and multi-tenancy was partially retrofitted rather than designed in from the start. Both cost real engineering time later. Now I'd design for both on day one, even if the implementation ships in phases.

---

## Story 2: Architecture Decision Under Pressure (Alaya, 2019)

Best for: "Tell me about a hard technical trade-off" / "How do you handle technical debt?" / "How do you make decisions with incomplete information?"

By 2019, Alaya's monolith was showing cracks. We were getting enough traffic that some endpoints were taking unacceptable time, and the team was split between doing a full microservices rewrite and staying with the monolith. Investors were watching the roadmap and weren't interested in a quarter of engineering time going into a rewrite with no user-visible output.

My task was to make a defensible technical decision that didn't blow up the product roadmap.

I ran a two-week technical spike comparing the two approaches with prototype load tests. Instead of coming back with opinions, I brought concrete metrics: latency comparisons, rough migration timelines, blast radius if the rewrite went sideways. What I proposed was a "strangler fig" approach, extract the two highest-traffic modules first, keep the rest of the monolith stable, and define explicit criteria for when to extract additional modules. This avoided the big-bang rewrite risk and gave the team a clear framework for future decisions.

The first extracted module shipped in six weeks. Performance on the busiest endpoints improved by roughly 40%. The remaining monolith stayed stable all the way through the acquisition two years later, which meant the decision aged well.

The hardest part was convincing people that "not rewriting everything" was actually the right call, not a sign of weakness. Showing the data made that conversation shorter. I'd benchmark even earlier next time to cut the debate off at the knees before it gets tribal.

---

## Story 3: Driving Adoption Without a Mandate (Benevity, 2022)

Best for: "How do you lead without formal authority?" / "How do you change how a team works?" / Staff+ / founding engineer roles where you set technical culture

At Benevity, I was a Senior Staff IC without direct reports. I wanted to drive adoption of AI-assisted development workflows across two engineering teams, but neither team reported to me and there was no directive from leadership to do it.

The instinct would have been to write a proposal, get it approved, and roll it out. That approach would have produced compliance, not adoption. Instead, I started with three engineers who were already curious, showed them concrete demos of time savings on real tasks they recognized, and let them talk about it themselves. I built internal tooling examples, ran informal lunch-and-learn sessions with no attendance requirement, and committed reusable prompt templates to a shared repo so the low-effort path was the correct path.

Within three months, roughly 70% of engineers on both teams were using AI-assisted code review and generation as part of their normal workflow. More importantly, they were advocating for it internally, which I couldn't have manufactured with a top-down mandate.

The reflection here is about pacing. The mandate-free approach was slower at first, but the stickiness was much higher. Engineers who adopted it on their own terms became internal champions. A decree would have gotten surface compliance and quiet resistance, which is worse than a slower rollout with real buy-in.

---

## Story 4: Post-Acquisition Integration (Benevity, 2021)

Best for: "Tell me about navigating ambiguity" / "How do you work in a new environment?" / "How do you handle a major transition?"

When Benevity acquired Alaya in 2021, I joined as Senior Staff Engineer on a team roughly ten times the size of anything I'd built before. Different culture, a Java-heavy codebase with hundreds of microservices, and established processes that didn't always make obvious sense from the outside.

My task was to integrate Alaya's product capabilities into Benevity's platform while continuing to ship features, without losing the velocity we'd built as a startup.

The first thing I did was spend a full month mapping the existing architecture before proposing any changes. I made a deliberate choice to build relationships with the platform and infrastructure teams before pushing any technical opinions. This was uncomfortable because I had things I wanted to fix immediately, but I'd learned from earlier in my career that walking into a new environment with a bag of solutions before you understand the problems is a reliable way to lose credibility fast.

The integration succeeded. Core Alaya features moved into Benevity's platform, and I contributed to three major cross-team architecture decisions in the first year. I also became the informal lead for AI tooling adoption across two engineering teams, which grew into a broader org-wide initiative.

The lesson was that moving slower at the start made me faster overall. Coming in with genuine curiosity rather than a rescue narrative made it easier to get things done.
