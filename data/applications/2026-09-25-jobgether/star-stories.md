# STAR+R Stories: Senior Product Engineer, Darkplane (Dash0, via Jobgether)

Darkplane is Dash0's control room for AI-assisted development: it ties coding agent sessions (Claude Code, Cursor, Codex, Copilot CLI) to the PRs they produce and to the incidents those PRs cause. The posting stresses end-to-end product ownership, customer contact, safe execution of untrusted code, data modeling in PostgreSQL and ClickHouse, and guardrails for reviewing AI-generated code. These four stories cover the questions most likely to come up.

---

## 1. Getting engineers to adopt AI tooling without a mandate

**Likely questions:** "How have you driven adoption of agentic workflows?" / "Tell me about influencing without authority." / "How would you talk to a customer rolling out coding agents?"

**Situation.** At Benevity I was a Senior Staff IC with no direct reports. Leadership wanted more AI-assisted development, but the two teams I worked with had no reason to change habits just because someone upstairs said so.

**Task.** My job was to get AI-assisted code review and generation into their daily work without being their manager, and without it turning into another tool people installed and ignored.

**Action.** I started small, with three engineers who were already curious, and worked with them on real tickets rather than toy examples. Once we had a few concrete wins, like a PR review cycle that went about two hours faster, I turned them into short demos and informal lunch sessions. There was no mandate and no slide deck about productivity. I also wrote reusable prompt templates and put them in a shared repo, so anyone who wanted to try it had a decent starting point instead of a blank chat window.

**Result.** Within about three months, roughly 70% of the engineers on both teams were using AI-assisted review and generation, and I ended up as the informal AI tooling lead across the org.

**Reflection.** Adoption was the easy part to measure. What we never had was a clean view of what happened to that AI-written code after it merged: how much of it survived, how much got reverted, whether it showed up in incidents. We were running on anecdotes. That's the exact gap Darkplane is built for, and it's a big part of why this role interests me. If I did it again, I'd set up that feedback loop from day one instead of relying on people telling me it felt faster.

---

## 2. Building Alaya's platform from zero to acquisition

**Likely questions:** "Tell me about a product you owned end to end." / "How do you handle ambiguity?" / "How do you balance shipping fast with building something that lasts?"

**Situation.** In 2016 I co-founded Alaya, an employee purpose and impact platform. We had no product, no customers and no code, and the business side was already talking to its first enterprise prospects.

**Task.** I had to design and build the whole platform, alone at first and then with a small team, fast enough to support real sales conversations but solid enough that we wouldn't have to throw it away a year later.

**Action.** I picked a deliberately boring stack, Node.js, React and PostgreSQL, because I knew it well and it would scale further than we needed for a long time. We had something demo-ready in about three months. From there I grew it piece by piece based on what clients actually asked for: a multi-tenant architecture, an API layer, impact reporting, and later postal campaigns. As the team grew I hired and onboarded the first three engineers and put in the basics that let us move quickly without breaking things, like CI/CD, code review and written architecture decisions.

**Result.** The platform went to production with more than 50 enterprise clients across Switzerland and France, and Benevity, a Canadian unicorn, acquired Alaya in 2021. For me that was the clearest sign the early technical calls had been sound.

**Reflection.** Two things I'd change. I added proper APM far too late, so for too long we had less visibility into production than we should have, which is a bit ironic given where I'm applying now. And I underestimated how expensive it is to retrofit multi-tenancy, so today I'd design for it on day zero.

---

## 3. A hard architecture call under delivery pressure

**Likely questions:** "Tell me about a technical trade-off you made." / "How do you make decisions with incomplete data?" / "How would you approach a new data model or runtime for Darkplane?"

**Situation.** At Alaya our monolith was starting to crack under load on a few endpoints. Half the team wanted a full microservices rewrite. Investors wanted new features, not a rewrite, and both sides had a point.

**Task.** I needed a decision I could defend to engineers and investors alike, one that fixed the real scaling problem without freezing the roadmap for months.

**Action.** Rather than keep arguing, I ran a two-week spike and built prototypes of both approaches, then load-tested them. I brought the trade-offs to the leadership team and investors with numbers rather than opinions. What I proposed was a strangler fig migration: pull out the two highest-traffic modules first, keep everything else in the monolith, and write down explicit criteria for when any other module would earn its own service.

**Result.** The first extracted module shipped in about six weeks, and response times on the busiest endpoints improved by roughly 40%. The rest of the monolith stayed stable all the way through the acquisition, and we never needed a big-bang rewrite.

**Reflection.** The hardest part wasn't technical; it was persuading people that not rewriting everything was the right call. The benchmarks did most of the persuading. Next time I'd get to the benchmarks sooner and skip a week of debate. It's also the instinct I'd bring to something like picking between PostgreSQL and ClickHouse for a given Darkplane workload: prototype on realistic data before anyone gets attached to an answer.

---

## 4. Joining a much bigger org after the acquisition

**Likely questions:** "Tell me about a time you had to adapt quickly." / "How do you work across teams?" / "You'd be joining a fast-growing company after a Series B. How do you get up to speed?"

**Situation.** After the acquisition in 2021 I joined Benevity as a Senior Staff Engineer. The engineering org was about ten times Alaya's size, with a different culture, a Java and microservices codebase, and much heavier processes.

**Task.** I had to bring Alaya's capabilities into Benevity's platform while we kept shipping new features, and without losing the speed that had made Alaya worth buying.

**Action.** My first instinct was to start fixing things, and I did too much of that early on. What worked better was spending about a month mapping the existing architecture before proposing anything, and building relationships with the platform and infrastructure teams before pushing technical opinions. Once people trusted that I understood their constraints, I became the cross-team architecture contact for the Europe-facing product and could actually get decisions made.

**Result.** We migrated Alaya's core features into Benevity's platform, I contributed to three major cross-team architecture decisions, and the relationships I'd built were what later made the AI tooling rollout possible.

**Reflection.** I came in too fast, trying to fix things that weren't broken in the new org. Listening first made me far more effective. Dash0 has grown quickly since its Series B, and I'd go in the same way: learn how the product, the data layer and the customers actually work before telling anyone how things should be.

---

## Honest gaps to prepare for

Go, ClickHouse, OpenTelemetry and sandboxing untrusted code aren't on my CV. If asked, say so plainly and point to the transferable part: 17 years of TypeScript and Node.js in production, PostgreSQL data modeling at Alaya, and hands-on work with LLM integration and multi-agent workflows. Before the interview, read the Dash0 and Darkplane docs, try the OpenTelemetry SDK for Node.js, and have one concrete idea about isolating agent-run code (for example, microVMs versus containers with seccomp) ready for discussion.
