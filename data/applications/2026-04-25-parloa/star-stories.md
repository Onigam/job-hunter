# STAR Stories — Parloa (Staff/Principal Software Engineer)

---

## 1. Building Alaya from Zero to Acquisition
*Best for: "Tell me about a time you built something from scratch" / "How do you handle ambiguity?" / founding engineer questions*

In 2016, I co-founded Alaya, an employee engagement and purpose platform. We had no product, no customers, and no team beyond two people with an idea. My job was to turn that into something real while the business was simultaneously signing its first enterprise clients.

I made a deliberate bet on a pragmatic stack: Node.js, React, PostgreSQL. Not because it was the most technically interesting choice, but because it let one person move fast and was mature enough that I wouldn't hit unknown failure modes at inopportune moments. Within three months we had a working demo. Over the following two years I iterated on a multi-tenant architecture, built the API layer, added impact reporting, postal campaign tooling, and onboarded the first three engineers I hired. I set up CI/CD from day one, established code review norms, and wrote architecture docs so knowledge wasn't locked in my head.

By 2021 the platform was serving 50+ enterprise clients across Switzerland and France. Benevity, a Canadian company with a $1B+ valuation, acquired us. The due diligence process scrutinized the codebase and the architecture held up without emergency refactors.

What I'd do differently: I'd add proper observability much earlier. We bolted on APM late, which made debugging production incidents slower than it needed to be. And I'd design for multi-tenancy from day zero, not month six.

---

## 2. Post-Acquisition Integration at Benevity
*Best for: "Tell me about navigating change" / "How do you work with large teams?" / cross-functional collaboration*

When Benevity acquired Alaya in 2021, I went from a five-person engineering team to an org roughly ten times that size. Different culture, different codebase (Java and a distributed microservices platform), different processes and tooling. It was a significant context switch.

My task was to help integrate Alaya's capabilities into Benevity's platform without stalling the product work that was already in flight, and to establish myself as a useful contributor in an environment where nobody knew me yet.

The first month I deliberately didn't propose changes. I mapped the architecture, read PRs, attended design reviews, and built relationships with the platform and infrastructure teams before I had opinions out loud. Once I understood the system, I took on cross-team architecture liaison work for the Europe-facing product surface and contributed to three major architecture decisions. I also started quietly driving AI-augmented development practices: GitHub Copilot adoption, prompt engineering patterns for code review, reusable templates committed to a shared repo. No mandate, just demos and documented time savings.

Within three months, around 70% of engineers on both teams I worked with were using AI-assisted workflows. The cross-team architecture work eventually made me the go-to Staff IC for distributed systems questions across the org.

What I learned: moving fast to "fix" things in a new org is almost always the wrong instinct. Listening first made me significantly more effective than pushing my own views before I'd earned the context.

---

## 3. Hard Architecture Decision Under Pressure
*Best for: "Tell me about a technical trade-off you navigated" / "How do you handle technical debt?" / Staff+ engineering judgment questions*

At Alaya, around year three, the monolith was starting to crack. Response times on the busiest endpoints were climbing. The engineering team was split: a full microservices rewrite versus a modular monolith that preserved what we'd built. Investors at the same time were pushing hard for new features, not rewrites. I had to make a call and defend it.

I ran a two-week technical spike. I prototyped both approaches, built simple load tests, and documented the trade-offs with concrete numbers rather than architectural opinions. Then I presented the findings to the CTO and investors with a recommendation: a strangler fig migration. We'd extract the two highest-traffic modules first, validate the pattern, and define clear criteria for when additional extraction was warranted. No big-bang rewrite.

The first module shipped in six weeks. Performance improved roughly 40% on those endpoints. The rest of the monolith stayed stable and held up through acquisition-level due diligence two years later without needing a rewrite.

What I'd do differently: I'd front-load the benchmarking even earlier so the debate between approaches was shorter. The two-week spike still felt long in retrospect when the data was actually clear by day five.

---

## 4. Leading Without Formal Authority
*Best for: "How do you influence without authority?" / Staff+ and principal engineer roles / "Tell me about a time you drove change"*

At Benevity, I was a Senior Staff IC with no direct reports. I wanted to change how engineers worked across two teams: get AI tooling into their daily development workflow. The engineers didn't report to me, and I had no budget or mandate to create a program.

I started with three engineers who were already curious about AI tooling and worked with them individually. I built small internal demos showing concrete outcomes: a PR review cycle that dropped from two hours to 30 minutes with the right prompting. I ran informal lunch sessions, showed the work, and asked for feedback rather than advocating. I committed reusable prompt templates to a shared repo so the tooling was tangible, not theoretical.

The engineers who adopted it early became internal advocates on their own terms. Within three months, roughly 70% of engineers on both teams had integrated AI-assisted workflows into their daily work. I became the informal AI tooling lead without ever asking for that designation.

The lesson I keep coming back to: adoption that happens through peer advocacy is stickier than adoption that comes from a mandate. Engineers who chose it themselves defended it when skeptics pushed back. I couldn't have engineered that outcome top-down.
