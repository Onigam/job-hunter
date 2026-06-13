# STAR Stories — Jua / Member of the Technical Staff

Prepared for behavioral interviews. Written in first person, past tense. No bullets inside the stories.

---

## Story 1: Building a Production Platform from Zero
*Best for: "Tell me about building something from scratch" / early-stage / founding engineer questions*

In 2016, I co-founded Alaya with a blank page, no customers, and a rough spec for what an employee impact platform should do. The business had already started pitching enterprise clients in Switzerland, which meant the clock started before I'd deployed a single line to production.

My job was to design and ship something real, fast, and make decisions I'd have to live with for years. I chose Node.js, React, and PostgreSQL: not exotic, but proven for the use case and fast to iterate on. The first demo environment was live within three months. From there I expanded incrementally: multi-tenant data isolation so clients couldn't see each other's data, an impact reporting engine, postal campaign tooling, and eventually a public API layer for enterprise integrations. As I hired and brought in the first three engineers, I forced myself to document architectural decisions I'd otherwise have left in my head, partly for onboarding and partly to see if they held up when explained out loud.

By 2021, the platform was running with 50+ enterprise clients across Switzerland and France. Benevity, a Canadian B2B company valued at over $1 billion, acquired Alaya that year. Looking back, I'd add observability tooling much earlier; we retrofitted APM late and it cost us debugging time we couldn't afford. I'd also design multi-tenancy in from day zero rather than layering it in six months after the first enterprise contract.

---

## Story 2: Choosing the Right Architecture Under Investor Pressure
*Best for: "Tell me about a technical trade-off" / performance bottlenecks / handling tech debt*

At Alaya, the monolith started showing cracks as the client base grew. Certain API endpoints were slow enough to affect user retention, and the team was split between a full microservices rewrite and staying with the modular monolith we had. Investors were actively pushing for new features, not engineering rewrites, which made the decision politically loaded in addition to technically complex.

I ran a two-week spike comparing both approaches, including prototype load tests rather than theoretical arguments. The data showed a full rewrite would take six months minimum and introduce serious regression risk; extracting the two highest-traffic modules first would recover most of the performance gain in six weeks. I presented the trade-off analysis directly to the CTO and the investor group with concrete numbers, then proposed what's often called a strangler fig approach: extract the critical path first, leave the rest monolithic until there's a real reason to touch it.

The first extracted module shipped in six weeks. Performance on the busiest endpoints improved by roughly 40%. The rest of the monolith ran stable through the acquisition two years later, with no emergency rewrite. The hardest part wasn't the technical work. It was convincing people that "not rewriting everything" was actually the correct call. The benchmarks helped. Next time I'd front-load that testing even more aggressively to cut the debate shorter.

---

## Story 3: Driving AI Tooling Adoption Across Two Teams Without a Mandate
*Best for: "Leading without authority" / influencing cross-functional teams / ML/AI integration questions*

At Benevity after the acquisition, I was a Senior Staff IC with no direct reports, but I had a clear read that AI-assisted development could meaningfully change our engineering throughput. The two teams I worked closest with had no particular reason to listen to me on tooling choices, and I had no management authority to push anything through.

Rather than lobby for a mandate from leadership, I started with three engineers who were already curious. I built internal demos showing concrete time savings on tasks they recognized from their own daily work: PR review cycles, test stub generation, boilerplate patterns. I ran informal sessions with no attendance requirement, and I put reusable prompt templates into a shared repository so engineers could pull them without sitting through a presentation. I documented a few specific wins with rough numbers, "saved about two hours on this PR review cycle," so there was something concrete to point at when the skeptics pushed back.

Within three months, roughly 70% of engineers on both teams were using AI-assisted code review and generation as part of their regular workflow. The engineers who adopted it on their own terms started advocating for it internally, which created pull I couldn't have manufactured top-down. What I took from it: adoption that people choose sticks. It's slower, but it compounds in a way that mandated adoption doesn't.

---

## Story 4: Integrating into a Team Ten Times Larger After an Acquisition
*Best for: "Tell me about navigating change" / large team dynamics / technical leadership at scale*

When Benevity acquired Alaya in 2021, I went from being one of four engineers to being one engineer in a team of around forty, working in a Java microservices codebase I'd never seen, with processes and culture shaped by a company a decade older than the one I'd built.

My instinct was to move fast and fix things, which turned out to be the wrong instinct. The first month I spent mapping the existing architecture before proposing anything. I built relationships with the platform and infrastructure teams before pushing any technical opinions. When I eventually proposed changes to how cross-team architectural decisions were made, I had enough context to explain why the existing approach made sense historically and where specifically it was creating friction now.

Over two years I contributed to three major cross-team architecture decisions and became the go-to person for AI tooling adoption across the European-facing engineering surface. The thing I'd do differently: I moved too fast initially trying to "improve" things that weren't actually broken in the new context. Slowing down and listening first made me meaningfully more effective once I did start pushing.

---
