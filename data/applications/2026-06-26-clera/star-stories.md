# STAR Stories — Clera Founding Engineer

---

## Story 1: Building Alaya from Zero to Acquisition
*Best for: "Tell me about a time you built something from scratch" / "Why founding engineer?"*

At the start of 2016, I was looking at a blank repository and a business plan. We'd co-founded Alaya, an employee purpose platform, and I was the first engineer. No team, no infrastructure, no customers yet, though the business was actively signing its first enterprise prospects.

My job was to architect and ship a platform that could hold enterprise clients, fast enough to matter. I chose a pragmatic stack: Node.js, React, and PostgreSQL, with multi-tenant architecture designed in from the start after coming close to skipping it and almost regretting that early. The first three months were heads-down, building to first demo. After that, I expanded iteratively: impact reporting, postal campaigns, an API layer, a proper admin interface. In year two, I hired the first three engineers, set up CI/CD, established code review culture, and wrote the first architecture documentation.

Five years later, we had 50+ enterprise clients across Switzerland and France and a platform running stably when Benevity, a Canadian unicorn at over $1B valuation, acquired us in 2021. The technical decisions from year one had held.

What I'd change: observability came late, around year three, when we started feeling pain rather than before. I also nearly under-designed multi-tenancy and caught it just in time. Both would go in from week one now.

---

## Story 2: Making a Hard Architecture Call Under Pressure
*Best for: "Tell me about a technical trade-off you navigated" / "How do you handle competing priorities?"*

Around year three at Alaya, the monolith was starting to show scaling friction. Not catastrophically, but perceptibly. The engineering team was debating a full microservices rewrite, investors were asking for new features, and I was the one who had to make the call.

The task was to find an approach that didn't bet the company on a 12-month rewrite while still solving the actual problem.

I ran a two-week technical spike: built small prototypes of both approaches, ran load tests, and came back with concrete metrics rather than opinions. I proposed a strangler-fig migration: extract the two highest-traffic modules first, keep the rest of the monolith intact, and define explicit criteria for when to extract more. The pitch to the CTO and investors wasn't "here's the right architecture." It was "here's what the data shows, here's the risk on each path, and here's the option we can reverse if we're wrong."

We shipped the first extracted module in six weeks. Performance on those endpoints improved roughly 40%. The monolith stayed stable through the rest of Alaya's life, including the acquisition. No big-bang rewrite was ever needed.

What I'd do differently: I'd run the benchmarking earlier. The data killed the debate quickly once we had it. Starting with opinions wasted about two weeks of meeting time.

---

## Story 3: Driving AI Adoption Across Teams Without Authority
*Best for: "How do you influence without formal authority?" / "Tell me about introducing new tooling"*

After the Benevity acquisition, I joined as Senior Staff Engineer with no direct reports. The goal I set for myself was to drive AI-assisted development practices across two engineering teams that didn't report to me and hadn't asked for change.

I started small. Three engineers who were already curious became the first group. I built internal demos focused on concrete time savings, not theoretical benefits; the difference between "this could save you hours" and "here's the two hours I saved on this specific PR review" turned out to matter a lot. I committed reusable prompt templates to a shared repo, wrote short case studies documenting real outcomes, and ran informal lunch sessions with no mandate attached.

Three months in, roughly 70% of engineers on both teams had adopted AI-assisted code review and generation into their regular workflow. That wasn't because of a rollout plan. It was because the early adopters started advocating internally on their own terms, which I couldn't have manufactured with a top-down decree.

The lesson I'd carry forward: sticky adoption comes from people feeling like they discovered a tool themselves, not from being assigned it. My job was to make discovery easy and then get out of the way.

---

## Story 4: Post-Acquisition Integration at Scale
*Best for: "Tell me about navigating a big transition" / "Working across large organizations"*

When Benevity acquired Alaya in 2021, I went from a five-person engineering team to an organization ten times that size. Different culture, different codebase (Java and microservices), different processes, and a platform I'd never touched.

My task was to integrate Alaya's capabilities into Benevity's platform without losing the product velocity we'd built and without breaking things I didn't yet understand.

The first month I didn't propose anything. I mapped the existing architecture, read through the codebase, asked questions, and built relationships with the platform and infra teams before forming technical opinions. That deliberate slowdown felt unnatural after five years of moving fast, but it paid off: by month two I knew where the real decisions were being made and who trusted what.

From there, I drove the migration of core Alaya features into Benevity's platform, contributed to three major cross-team architecture decisions, and ended up as the de facto AI tooling lead across two engineering teams, mostly because I'd been useful on other things first.

What I got wrong initially: I moved too fast in the first two weeks trying to fix things that weren't actually broken. Slowing down and listening first made me far more effective than any technical opinion would have.
