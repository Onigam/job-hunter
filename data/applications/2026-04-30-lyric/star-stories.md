# STAR Stories — Lyric, Staff Software Engineer

## 1. Building Alaya from zero to acquisition
*Best for: "Tell me about a time you built a system at scale" / "How do you handle ambiguity as a technical leader?"*

In 2016 I co-founded Alaya, an employee engagement platform targeting enterprise clients across Switzerland and France. There was no product, no team, no customers. My job was to figure out what to build and ship it before the money ran out.

I made a deliberate choice to start with a pragmatic stack: Node.js, React, PostgreSQL. Not because it was fashionable but because I knew I'd be maintaining it alone for at least a year, and I wanted to move fast without painting myself into architectural corners. The first three months were about getting to a first demo. After that I built iteratively: multi-tenant architecture, an API layer, impact reporting, postal campaign tooling. As the product grew I hired the first three engineers, set up CI/CD and code review practices, and wrote the architecture docs that would outlast me as the sole decision-maker.

By 2021 the platform had 50+ enterprise clients and Benevity, a Canadian unicorn at $1B+ valuation, acquired the company. That outcome was a direct validation of every architectural and product call made from day one.

Looking back, I underestimated the cost of retrofitting multi-tenancy onto a data model not designed for it. I'd build for multi-tenancy from day zero next time. I'd also add proper observability earlier; we were flying blind on performance for longer than we should have been.

---

## 2. Making a hard architecture decision under pressure
*Best for: "Tell me about a technical trade-off you navigated" / "How do you handle technical debt vs. feature pressure?"*

At Alaya, when we reached about 30 enterprise clients, the monolith started showing real scaling cracks. The engineering team was split: some wanted a full microservices rewrite, others thought we should stay monolithic. Investors were watching the feature roadmap, not the architecture backlog. The pressure to just ship was real.

I ran a two-week technical spike comparing both approaches with prototype load tests, not theoretical arguments. Then I presented the trade-offs to the CTO and the investors with concrete metrics: latency numbers, estimated engineering weeks, risk surface, rollback complexity. No opinions, just data. What I proposed was a strangler-fig migration: extract the two highest-traffic modules first, measure the result, and use clear criteria to decide whether to keep extracting.

The first extracted module shipped in six weeks. Performance improved by roughly 40% on the busiest endpoints. The rest of the monolith stayed stable all the way through the acquisition. No big-bang rewrite was needed.

The hardest part wasn't the engineering. It was convincing people that "not rewriting everything" was actually the more ambitious call. I'd do the benchmarking earlier next time to cut the debate short before positions harden.

---

## 3. Leading across teams without formal authority
*Best for: "How do you influence without authority?" / Staff+ engineering roles / "Tell me about driving adoption of a new practice"*

After the Benevity acquisition, I was a Senior Staff IC on a team ten times the size of Alaya. No direct reports. But I'd identified something: AI-assisted development tooling could save every engineer hours per week, and nobody was doing it systematically.

I didn't try to mandate anything. Instead I found three engineers who were already curious about AI tooling and worked with them closely, building internal demos that showed concrete time savings on tasks they were actually doing: PR reviews, boilerplate generation, debugging sessions. I ran informal lunch-and-learn sessions with no slides and no pressure, just live demos. I committed reusable prompt templates to a shared repo so there was something tangible to copy-paste. And I started documenting specific outcomes, things like "saved two hours on a PR review cycle," so the value wasn't abstract.

Within three months, roughly 70% of engineers on both teams were using AI-assisted code review and generation regularly. I became the informal AI tooling lead across the org without ever having been given that title.

The mandate-free approach was slower, but the adoption stuck because engineers chose it on their own terms. The ones who adopted early became internal advocates in ways I couldn't have orchestrated from the top down.

---

## 4. Navigating a post-acquisition integration
*Best for: "Tell me about navigating change" / "How do you work in a larger organization?" / "Cross-functional collaboration"*

When Benevity acquired Alaya in 2021, I went overnight from being one of five engineers to joining an org of fifty-plus. Different codebase (Java + microservices), different incident process, different culture, different everything. My job was to integrate Alaya's capabilities into Benevity's platform without losing the product velocity we'd built.

My first move was to spend the first month mapping the existing architecture without proposing changes. I read the code, attended the architecture review meetings, and asked a lot of questions before opening my mouth with opinions. Then I built relationships with the platform and infra teams before pushing technical ideas. I became the cross-team liaison for the Europe-facing product surface, which gave me visibility and credibility at the same time.

We successfully migrated the core Alaya features into Benevity's platform. I contributed to three major cross-team architecture decisions in the first year and established myself as the go-to person for AI tooling adoption across two teams.

What I got wrong early on was moving too fast, trying to "fix" things that weren't actually broken in the new org. Slowing down and listening first made me far more effective. It's a pattern I'd recognize faster now.

---

## 5. Convincing stakeholders to invest in platform work
*Best for: "Tell me about getting buy-in for a technical initiative" / "How do you balance product velocity with platform needs?"*

At Benevity, the European product surface had accumulated meaningful technical debt through rapid feature development post-acquisition. The platform team wanted to invest engineering cycles in refactoring core services. Product management was understandably skeptical because it meant feature work slowing down for a quarter with no visible output for customers.

I put together a case that framed the platform investment in product terms, not engineering terms. I showed how specific bugs in the quarter were traceable to the same root cause: a fragile data pipeline that had been patched repeatedly rather than rebuilt. I calculated the engineering time spent on those patches over six months and compared it to the one-time cost of fixing the underlying system. The math wasn't close.

I also proposed a phased approach: instead of a hard stop on features, we'd run the refactor alongside one smaller feature track so product could still ship something each sprint. That reduced the political cost significantly.

The refactor was approved. We completed it in nine weeks. The incident rate on that service dropped by roughly 60% in the following quarter, and the engineers who'd been maintaining it reported spending meaningfully less time on firefighting.

The lesson: framing platform work as risk reduction and future velocity, with real numbers, lands better than technical arguments about code quality alone.
