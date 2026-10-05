# STAR+R Stories: Staff Engineer, Pricing (energy trading platform via Jobgether)

Four stories picked for what this role will probe hardest: carving pricing logic out into its own service without breaking live quotes, owning production when it matters, migrating under someone else's architecture, and setting direction without authority. All drawn from `profile/star-bank.md`. Expect follow-ups on numerical correctness and incident handling, so the reflections lean that way.

---

## 1. Extracting a service from a live monolith (strangler fig)

**Likely prompts:** "Tell me about a major decoupling you led." / "How did you migrate without breaking existing functionality?" / "How do you handle tech debt vs. feature pressure?"

**Situation.** At Alaya, a few years in, our monolith was starting to crack on the busiest endpoints. The team was split between a full microservices rewrite and keeping things modular inside one codebase, and our investors wanted features, not a rewrite.

**Task.** I had to make a call we could defend on both fronts: something that fixed the scaling problem without freezing delivery for a quarter.

**Action.** Rather than argue it out, I ran a two-week spike where we prototyped both directions and load-tested them. Those numbers went to the leadership team and investors, which shifted the conversation from opinions to trade-offs. What I proposed was a strangler fig: pull out the two highest-traffic modules first, give them clean boundaries, and leave the rest of the monolith alone. We also wrote down explicit criteria for when any other module would earn its own extraction, so the debate wouldn't restart every sprint.

**Result.** The first extracted module shipped in about six weeks, and the busiest endpoints got roughly 40% faster. The rest of the monolith stayed stable all the way through the Benevity acquisition, and we never needed a big-bang rewrite.

**Reflection.** Convincing people that "not rewriting everything" was the right call took longer than the engineering did. Benchmarks ended that argument, so I'd start with them sooner. For a pricing service I'd add one thing I didn't have then: running old and new paths side by side and diffing outputs before cutting traffic over, because a quote that's fast but wrong is worse than a slow one.

---

## 2. Owning a platform end to end, from blank page to acquisition

**Likely prompts:** "Tell me about a production system you owned." / "When were you the final escalation point?" / "How do you handle ambiguity?"

**Situation.** In 2016 I co-founded Alaya, an employee purpose and engagement platform. There was no product, no customers and no code.

**Task.** I was responsible for the whole platform: architecture, build, and later the team, while the business side was signing its first enterprise clients.

**Action.** My stack choice was deliberately boring: Node.js, React and PostgreSQL, enough to scale without over-engineering. Within about three months we had the core in front of prospects. From there it grew into a multi-tenant architecture with an API layer, impact reporting and postal campaigns. When I hired the first three engineers, I set up CI/CD, code review habits and architecture docs so ownership didn't stay locked in my head. Before that team existed, production was mine alone to keep running.

**Result.** The platform reached 50+ enterprise clients across Switzerland and France, and Benevity, a Canadian company valued at over $1B, acquired Alaya in 2021. I read that as a fair validation of the technical choices we'd made from day one.

**Reflection.** Observability came too late; we added proper APM well after we needed it, which made some incidents slower to diagnose than they should have been. Multi-tenancy was the other lesson, since retrofitting it cost far more than designing for it would have. On a pricing platform I'd treat detection and alerting as part of the first version of the service, not a follow-up.

---

## 3. Integrating into someone else's architecture

**Likely prompts:** "Tell me about a migration where you had to protect what already worked." / "How do you work across team boundaries?"

**Situation.** After the 2021 acquisition I joined Benevity as Senior Staff Engineer. The org was about ten times Alaya's size, with a different codebase (Java and microservices), different processes and a different culture.

**Task.** Alaya's capabilities had to move into Benevity's platform, and we still had to keep shipping new features while it happened.

**Action.** Before proposing anything, I spent my first month mapping the existing architecture. I also built relationships with the platform and infrastructure teams before pushing technical opinions, since I'd need their trust to change anything they owned. Over time I became the cross-team architecture contact for the Europe-facing product surface.

**Result.** We migrated Alaya's core features into the Benevity platform. Along the way I contributed to three major cross-team architecture decisions.

**Reflection.** Early on I moved too fast and tried to fix things that weren't actually broken. Slowing down to listen made me more effective, not less. That's directly relevant here: the pricing logic I'd be extracting encodes a lot of decisions that look odd until someone explains the market reason behind them.

---

## 4. Setting technical direction without authority (AI-assisted engineering)

**Likely prompts:** "How do you influence engineers who don't report to you?" / "How do you use AI tools like Claude in your work?" / "How do you raise team effectiveness?"

**Situation.** At Benevity I was a Senior Staff IC with no direct reports, and I wanted two teams that didn't report to me to adopt AI-assisted development.

**Task.** Changing how engineers work day to day without being their manager, and without a mandate.

**Action.** It started small, with three engineers who were already curious. I built internal demos that showed concrete time savings on real work instead of slides. We ran informal lunch-and-learns, with no attendance pressure, and I committed reusable prompt templates to a shared repo so people could pick them up on their own. Wins got written down when they happened, things like a PR review cycle that dropped by about two hours.

**Result.** Within three months, roughly 70% of engineers across both teams were using AI-assisted code review and generation, and I ended up as the informal AI tooling lead for the org.

**Reflection.** Going without a mandate was slower, but it stuck. Engineers who adopted it on their own terms became the ones advocating for it, which a top-down rule wouldn't have produced. Pairing works the same way, and it's how I'd approach raising the bar inside a pricing team.

---

## Gaps to prepare for (not stories, but have answers ready)

**Python and FastAPI depth.** My production years lean Node and TypeScript. Be honest: Python is a working language for me, FastAPI at scale isn't something I've run. Point to the transferable part, API design, service boundaries, SQL and Postgres, and offer a concrete ramp plan.

**Energy or financial accuracy domain.** No direct energy or fintech background. The closest angle is impact reporting at Alaya, where enterprise clients relied on the numbers, though stakes were lower than a live price. Don't stretch that further than it goes; ask good questions about how they validate quotes instead.

**Live pricing incidents.** There's no pricing-specific incident story in the bank. If asked, use the Alaya escalation context from Story 2 and the observability lesson, and say plainly what you'd set up from day one.
