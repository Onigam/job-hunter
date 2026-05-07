# STAR Stories — Weave / Founding AI Engineer

## Story 1: Building Alaya from Zero to Acquisition
*Best for: "Tell me about a time you built something from scratch" / "What does founding engineer mean to you?"*

When Alaya was founded in 2016, we had a blank page, no codebase, and no customers. I was the co-founder and the only technical person at the start, which meant every architectural decision was mine to own. The first challenge wasn't technology — it was choosing a stack that could grow from zero to enterprise without requiring a rewrite six months in. I went with Node.js, React, and PostgreSQL, then spent the early weeks on the data model: we knew from day one we'd need multi-tenancy, complex impact tracking, and eventually an API layer that third parties could build on.

The first 18 months were about building the core platform while simultaneously supporting enterprise clients. I shipped the first production version in about three months, then iterated: multi-tenant isolation, an admin console, reporting dashboards, postal campaign tooling. When the team grew, I onboarded and managed the first three engineers, set up CI/CD from scratch, and wrote the first architecture decision records.

By the time Benevity acquired Alaya in 2021, the platform had roughly 50 enterprise clients in Switzerland and France. The acquisition, by a Canadian unicorn with $1B+ valuation, was the clearest signal I had that the foundational decisions held up under scrutiny.

What I'd do differently: observability would go in from week one. We retrofitted APM late in the lifecycle and I underestimated the cost of adding proper multi-tenancy to certain modules after the fact. On the next founding project, both of those are day-zero decisions.

---

## Story 2: Driving AI Tooling Adoption Without a Mandate
*Best for: "Tell me about a time you changed how a team worked" / "How do you influence without authority?" — directly relevant to Weave's mission*

At Benevity, I was a Senior Staff IC with no direct reports. In early 2023, I wanted to drive AI-assisted development practices across two engineering teams — GitHub Copilot, structured prompt patterns, AI-assisted code review. The challenge was real: engineers were skeptical that any tooling connected to their work would stay neutral and not become a performance monitoring instrument.

I started with three engineers who were curious but unconvinced. Rather than running a formal rollout, I spent a few weeks building concrete demos: a Copilot workflow that visibly cut PR review time, a prompt template set for writing test cases, a small internal tool that used an LLM to generate migration scripts. I committed everything to a shared repo and ran informal demo sessions at lunch — no mandate, just showing what the tools could do. The key was keeping it opt-in and making the benefit visible before asking anyone to change their habits.

Within about three months, roughly 70% of engineers on both teams were regularly using AI-assisted code review and generation. More importantly, the adoption was bottom-up, so I had internal advocates I hadn't manufactured. Those engineers pushed back on skeptics better than I could have.

The reflection: mandate-free adoption is slower but far stickier. When I looked back at where adoption had stalled in other initiatives, the pattern was always top-down rollouts that created compliance without buy-in. Going slower upfront created a genuinely different dynamic.

---

## Story 3: Architecture Decision Under Pressure
*Best for: "Tell me about a technical trade-off you navigated" / "How do you handle competing priorities?"*

Around 2019, the Alaya monolith was starting to buckle under load. The two most common failure modes were on high-traffic report generation endpoints and on the real-time notification pipeline. The team was split: some wanted a full microservices rewrite, others wanted to stay monolithic but modularize more aggressively. Meanwhile, investors were pushing for new features, not infrastructure projects.

My job was to make a call I could defend to both engineers and investors. I ran a two-week spike comparing both approaches, including prototype load tests on the specific failure-prone endpoints. I built a simple model showing the total engineering cost of a full rewrite — 6 to 9 months, high risk — versus targeted extraction of just the two problematic modules, roughly 5 to 6 weeks, lower risk, and reversible if something went wrong.

I proposed a strangler fig migration: extract the two highest-traffic modules first, leave the rest monolithic, and define clear criteria for when additional extraction would make sense. We shipped the first extracted module in about six weeks. Performance on the busiest endpoints improved roughly 40%, and the remaining monolith stayed stable through the Benevity acquisition two years later. No big-bang rewrite was needed.

The lesson I took from that: framing architecture decisions in terms of cost and reversibility, not technical elegance, gets alignment much faster. I had opinions about microservices, but what convinced people was the comparison of effort. The data cut the debate time in half.

---

## Story 4: Post-Acquisition Integration at Scale
*Best for: "Tell me about navigating change" / "How do you ramp up in a new environment?"*

After the Benevity acquisition in 2021, I joined a company about ten times larger than Alaya: different culture, different codebase (Java microservices), different planning cycles. The temptation was to apply Alaya's patterns immediately and fix everything that looked broken from the outside.

I spent the first month doing almost nothing but mapping: the architecture, the team boundaries, the informal influence networks. I built relationships with the platform and infrastructure teams before I started pushing technical opinions. It took longer than I wanted, but it meant that when I did propose changes, I had context the proposals needed to land.

Over the following 18 months, I contributed to three major cross-team architecture decisions, led the AI tooling adoption described above, and became the go-to person for the Europe-facing product surface. None of that would have happened if I'd come in with answers before I had the questions.

The reflection: I moved too fast in the first month trying to "help" in ways that felt like interference to the people who already owned things. Slowing down and listening first made me more effective, not less.
