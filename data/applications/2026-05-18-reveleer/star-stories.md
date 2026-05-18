# STAR Stories — Full Stack AI Engineer @ Reveleer

---

## 1. First-Principles Architecture Decision Under Pressure

*Best for: "Tell me about a technical trade-off you navigated" / "How do you approach problems from first principles?"*

Around 2019, Alaya's monolith was showing cracks. Response times on the busiest endpoints were degrading, and the engineering team had split into two camps: full microservices rewrite versus staying monolithic. The business wanted neither conversation — investors were pushing for new features and we had a tight runway. My job was to break the deadlock and make a decision we could actually execute.

Rather than picking a side based on instinct, I ran a two-week spike: prototype load tests on both architectural approaches, benchmarked the three highest-traffic modules, and produced concrete numbers on engineering cost and timeline for each path. Then I proposed a strangler fig migration — extract the two highest-traffic modules first, define explicit criteria for when it makes sense to extract more, leave the rest monolithic until those criteria are met. I presented the trade-offs directly to the CTO and investors with the data, not opinions.

The first module shipped in six weeks. Performance on the busiest endpoints improved by roughly 40%. The remaining monolith held stable all the way through the Benevity acquisition two years later, with no big-bang rewrite ever needed.

The hardest part wasn't the technical work. It was convincing people that "don't rewrite everything" was the principled answer. Data cut the argument short. I'd run the benchmarks even earlier next time, before people had dug into their positions.

---

## 2. Building Observability the Hard Way

*Best for: "Tell me about a time you failed or learned from a mistake" / "How do you approach production reliability?"*

By 2018, Alaya had real enterprise clients and a platform that looked healthy on the surface. What we didn't have was proper visibility into it. We'd built logs and basic alerting but skipped distributed tracing, APM instrumentation, and anything resembling performance budgets. Observability was on the backlog, never quite urgent enough to prioritize.

Then we had a production incident that forced the issue. A slow memory leak in a background job was silently degrading performance for enterprise clients over a 48-hour window before we caught it. My job was to diagnose the issue and fix it, then make sure we never had to do that kind of archaeology again.

The diagnosis took three full days because we had no real visibility between the application layer and the database. Once we patched the leak, I argued successfully for a two-sprint investment in observability infrastructure: proper APM, structured logging across the backend, alerting on key performance indicators tied to client-facing SLOs. The team pushed back a bit on the timeline, but the post-incident memory was fresh.

After that, mean time to diagnosis on production issues dropped from hours to minutes. The affected clients stayed. The lesson stuck, and I've treated observability as a day-zero requirement in every architecture conversation since.

---

## 3. Partnering with Technical Teams I Didn't Manage

*Best for: "How do you work with scientists or ML engineers?" / "Tell me about driving adoption without authority."*

After the Benevity acquisition in 2021, I was a Senior Staff IC with no direct reports but a strong conviction that AI-assisted development workflows could meaningfully improve how our engineering teams worked. Two teams didn't report to me, had their own roadmaps, and had no reason to prioritize suggestions from someone who'd just joined through an acquisition.

I started with three engineers who were already curious — the natural early adopters. Instead of writing a policy or a proposal, I built demos showing concrete time savings: a PR review cycle that went from two hours to under forty minutes, test scaffolding generated from a spec in under five minutes. I ran informal sessions, no calendar mandate, just showed up with a working demo. I committed reusable prompt templates to a shared repo so adoption was low-friction and concrete, not conceptual.

Within three months, roughly 70% of engineers across both teams were using AI-assisted code review and generation in their daily workflow. I became the informal go-to for AI tooling decisions across the org. More importantly, engineers were advocating for the tools internally because they'd adopted them on their own terms, not because someone told them to.

The reflection: mandates create compliance, not adoption. If you want people to actually change how they work, the ask has to be smaller than the value you're demonstrating right in front of them. I'd still start with the early adopters, but I'd document the results more systematically so the internal case has hard numbers behind it from the start.

---

## 4. Designing Multi-Tenancy From Day Zero

*Best for: "Tell me about a decision that had long-term infrastructure impact" / "How do you design for scale?"*

In early 2016, Alaya had a signed enterprise client but no product. Every architectural decision I made in those first weeks would compound for years. The hardest one early on was multi-tenancy.

There were two realistic options: a shared-database model with a tenant identifier on every row, or full database-per-tenant isolation. The first was faster to build. The second was more complex upfront — it required a provisioning system, more sophisticated migration tooling, and higher infrastructure cost — but it gave us a clean data isolation story that Swiss enterprise clients and their compliance teams could audit without hesitation.

I ran a quick spike comparing both and chose isolation despite the cost. The argument was simple: for a platform selling to enterprises in Switzerland and France, where data residency expectations are strict, retrofitting isolation mid-flight under production load would cost far more than building it right at the start.

That decision held through 50+ enterprise clients, a Series A, and the Benevity acquisition. No retrofitting was needed. The isolation model became a selling point in enterprise conversations and, later, in acquisition due diligence.

The lesson I carry from it: for architectural decisions with high switching costs, spending two extra weeks getting the design right at the start is almost always cheaper than a mid-flight migration. The question to ask isn't "what's easier to build now" but "what would I regret having to undo in year three."
