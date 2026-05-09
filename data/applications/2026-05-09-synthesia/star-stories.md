# STAR Stories — Synthesia Senior ML Platform Engineer

## 1. Building a Production Platform from Zero
*Best for: "Tell me about a system you designed from scratch" / "How do you approach greenfield platform work?"*

In 2016, I co-founded Alaya, an employee purpose platform for enterprise clients. We had no product, no customers, and no team. I was the only engineer for the first several months, and the business was signing contracts while I was still building the core.

My job was to architect and ship a production-ready platform fast enough to satisfy the first enterprise clients, while keeping the architecture sane enough to hand off to a growing team. I chose Node.js, React, and PostgreSQL: nothing exotic, optimized for reliability and future hireability rather than cleverness. I built the multi-tenant data layer first so we wouldn't have to retrofit it later, which turned out to be the right call. CI/CD was set up early, and I wrote architecture docs before onboarding the first additional engineer so the knowledge wasn't all in my head.

We reached 50+ enterprise clients across Switzerland and France. The architecture held through the growth and through the Benevity acquisition in 2021, without a big-bang rewrite. Benevity's technical due diligence validated the decisions made in the early days.

In retrospect, I'd add observability earlier. We bolted on APM late and spent more time debugging production issues than we should have. It's the thing I'd change first.

---

## 2. Making a Hard Architecture Decision Under Investor Pressure
*Best for: "Tell me about a technical trade-off you navigated" / "How do you handle technical debt?"*

At Alaya, around 2019, the monolith was starting to crack under load. Two factions formed inside the team: rewrite everything as microservices, or keep the monolith and modularize. Investors were pushing for new features, not internal refactors, and we had about six weeks of runway to resolve the debate before it became a delivery problem.

My role was to make a defensible call with incomplete information, get buy-in from the team and the CTO, and ship something concrete.

I ran a two-week technical spike. We built small prototypes of both approaches and ran load tests on the two highest-traffic modules. Then I presented the trade-offs to the CTO and to the investors, with concrete numbers, not opinions. My recommendation: a strangler fig migration, extracting those two modules first and leaving the rest monolithic until there was a real reason to move it.

The first extracted module shipped in six weeks. Performance improved roughly 40% on the busiest endpoints. The rest of the monolith stayed stable through the acquisition two years later, with no big-bang rewrite ever needed.

The hardest part was convincing people that "not rewriting everything" was the right call. Data helped more than arguments. I'd front-load the benchmarking even more aggressively next time to compress the debate phase.

---

## 3. Driving AI Tooling Adoption Without a Mandate
*Best for: "Tell me about leading without authority" / "How do you influence engineering culture?"*

At Benevity after the acquisition, I was a Senior Staff IC with no direct reports but a clear conviction that AI-assisted development would meaningfully change how our engineering teams worked. GitHub Copilot was available but barely used. Prompt engineering patterns weren't shared anywhere. No one had really made the case internally for why it mattered.

My task was to change how ~20 engineers across two teams worked, without being their manager and without any top-down mandate.

I started small: I found three engineers who were already curious and ran informal demos with them. I built internal tooling showcases that showed concrete time savings, things like cutting a PR review cycle from three hours to forty minutes. I ran lunch-and-learn sessions with no attendance requirement, just demos and questions. I created reusable prompt templates and committed them to a shared repo so the knowledge couldn't disappear when someone left. I documented specific wins in writing so others could point to real examples.

Within three months, roughly 70% of engineers on both teams had integrated AI-assisted code review and generation into their day-to-day. Several became informal advocates internally. At that point I wasn't driving adoption anymore; they were.

The mandate-free approach was slower to start but stickier. Engineers who adopted on their own terms pushed back less and promoted it more. I'd do the same again, but I'd start the documentation earlier to accelerate the feedback loop.

---

## 4. Navigating a Post-Acquisition Integration
*Best for: "Tell me about navigating change" / "Working across large teams" / "Joining a new engineering org"*

When Benevity acquired Alaya in 2021, I went from a team of five to an engineering organization ten times that size. Different tech stack (Java, microservices), different release cadence, different cultural norms around code review and architecture decisions. I was technically senior but knew almost nothing about how the existing systems worked.

My task was to integrate Alaya's capabilities into Benevity's platform while continuing to ship features, without burning goodwill or breaking things.

The first month I spent almost entirely on mapping the existing architecture before proposing anything. I read code, attended meetings without talking much, and asked questions rather than sharing opinions. I built relationships with the platform and infrastructure teams before pushing any technical ideas. When I did propose changes, I came with data and explicit trade-off analysis rather than "here's how we did it at Alaya." I also positioned myself as a resource rather than a critic: I ran sessions on AI tooling, shared what I'd learned from building Alaya, and made it easy for people to pull from me rather than feeling pushed.

Over eighteen months I contributed to three major cross-team architecture decisions and became the go-to person for AI tooling adoption across two engineering teams. The Alaya feature set was fully migrated into the Benevity platform with no major incidents.

The lesson was that moving fast in a new org is mostly a trap. Slowing down to listen first made everything after that faster. I underestimated how much context I was missing and overestimated how transferable my instincts were.
