# STAR Stories — Ahead Health / Founding AI Engineer

---

## 1. Building Alaya from Zero to Acquisition

*Best for: "Tell me about building something from scratch" / "What does founding engineer mean to you?" / "How do you handle ambiguity at product inception?"*

In 2016, my cofounder and I started Alaya with no product, no customers, and no runway to waste. My task was to architect and build the entire platform, alone at first, then growing a small team, while the business was already signing its first enterprise clients. Every architectural decision I made in month one was going to live in production for years.

I chose a pragmatic stack: Node.js, React, PostgreSQL. Not exciting choices, but ones I knew could scale without heroics. Within three months we had a working demo. Over the next few years I built the core features iteratively, designed a multi-tenant architecture from scratch (retrofitting it later would have been brutal), shipped an API layer and impact reporting engine, and onboarded our first three engineers. CI/CD and code review culture went in from day one, mostly because I knew I'd be the one debugging at 2am if I cut corners there.

By the time Benevity acquired Alaya in 2021, we had over 50 enterprise clients across Switzerland and France. The acquisition validated the technical decisions made on day one, which is a particular kind of satisfaction. The honest lesson: I added proper observability late. We had logs, but not meaningful signals. In an AI-driven product that's a founding mistake, not a later refinement. It's why I now treat evaluation infrastructure as a founding concern, not a cleanup task.

---

## 2. Making a Hard Architecture Decision Under Pressure

*Best for: "Tell me about a technical trade-off you navigated" / "How do you balance speed and quality?" / "How do you handle technical debt at a startup?"*

Around 2019, Alaya's monolith was starting to crack under load. The engineering team was split down the middle: full microservices rewrite versus keeping a modular monolith. Investors wanted new features, not rewrites, and we had a real deadline on the horizon. My task was to make a defensible call and get the team aligned without having consensus going in.

I ran a two-week technical spike comparing both approaches with prototype load tests. Then I presented the trade-offs to the CTO and investors using concrete metrics, not theoretical arguments. My recommendation was a strangler fig migration: extract the two highest-traffic modules first, keep the rest monolithic, and define clear extraction criteria for anything else. It was the option nobody loved completely, which usually means it's the right call.

We shipped the first extracted module six weeks later. Performance improved roughly 40% on the busiest endpoints, and the remaining monolith stayed stable all the way through the acquisition. The hardest part wasn't the engineering; it was convincing people that not rewriting everything was disciplined, not lazy. What I'd do differently is run the benchmarks earlier to cut the debate shorter. Data ends arguments faster than any amount of persuasion.

---

## 3. Driving AI Adoption Without a Mandate

*Best for: "How do you influence without authority?" / "Tell me about changing how a team works" / "How do you build buy-in for new tooling?"*

At Benevity I was a Senior Staff IC with no direct reports, but I was supposed to improve how engineers on two teams worked with AI tools. Neither team reported to me, and neither had any obligation to change.

I started with three engineers who were already curious. With them, I built demos showing concrete time savings on PR review cycles, real workflows, not theoretical examples. I ran informal lunch-and-learn sessions with no mandate attached, just live walkthroughs of things that actually worked. I committed reusable prompt templates to a shared repo so the barrier to starting was near zero. And I documented outcomes as short stories: "this cut a review cycle from four hours to ninety minutes."

Within three months, roughly 70% of engineers on both teams were using AI-assisted workflows regularly, for code review, generation, and documentation. I became the informal AI tooling lead across the org. The lesson was about the difference between adoption and compliance. Engineers who chose it on their own terms became advocates I couldn't have manufactured through a top-down decree. Mandate-free adoption is slower at first and far stickier afterward.

---

## 4. Navigating a Post-Acquisition Integration

*Best for: "Tell me about a time you joined a much larger organization" / "How do you adapt your technical opinions to a new context?" / "What does cross-functional collaboration look like at scale?"*

After the Benevity acquisition in 2021, I joined an engineering org roughly ten times larger than Alaya. Different culture, a Java microservices codebase, different release cadences, different incentives. My task was to continue building new features and integrate Alaya's capabilities into Benevity's platform without losing the product velocity we'd built.

The instinct was to move fast and propose changes immediately. I deliberately resisted that. I spent the first month mapping the architecture and building relationships with platform and infra teams before pushing any technical opinions. Then I drove the adoption of AI-assisted workflows across the engineering org, contributed to three major cross-team architecture decisions, and became the go-to liaison for the Europe-facing product surface.

We successfully migrated the core Alaya features into Benevity's platform without regressions, and the AI tooling work I started in those early months became standard practice across two engineering teams. The reflection is uncomfortable: I initially moved too fast, trying to fix things that weren't broken in the new context. Slowing down and listening first made me more effective in the end. In a small founding team like Ahead Health, that instinct to listen before imposing matters even more.

---
