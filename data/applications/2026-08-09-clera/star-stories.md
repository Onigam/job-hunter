# STAR Stories: Founding Engineer, Clera (Munich)

Prepared for a first-engineering-hire role at a pre-seed cleantech startup building 24/7 electricity trading infrastructure alongside a single CTO. Picked stories that speak to building from a blank page, making infrastructure calls under pressure with no safety net, working directly with a small founding team, and adapting to a domain I don't have deep prior experience in, since that last point is the honest gap here and worth being upfront about in an interview.

---

## 1. Building Alaya from zero to acquisition

In 2016 I cofounded Alaya, a purpose and impact platform for employee engagement, starting from a blank page with no customers signed yet. My job was to architect and build the entire platform, alone at first, while the business closed its first enterprise clients in parallel. I picked a pragmatic stack, Node.js, React, PostgreSQL, that wouldn't force an early rewrite but also wouldn't slow down the first demo, and had core features live within three months. From there I expanded iteratively: multi-tenant architecture, an API layer, impact reporting, while hiring and onboarding the first three engineers and setting up CI/CD and code review from scratch. By the time Benevity acquired us in 2021, we had 50-plus enterprise clients running on infrastructure that hadn't needed a rewrite. If I did it again I'd invest in observability much earlier, we bolted on proper monitoring late, and that's exactly the kind of gap a two-person founding team can't afford in a system that trades on live markets.

---

## 2. A hard infrastructure call under investor pressure

A couple of years into Alaya, our monolith started showing real scaling cracks, and the team split between a full microservices rewrite and keeping it a modular monolith. Investors wanted new features shipped, not a rewrite nobody outside engineering would see the value of. I ran a two-week technical spike comparing both approaches with actual load tests, then brought the CTO and investors concrete numbers instead of a slide of opinions. What I proposed was a strangler-fig migration: pull out the two highest-traffic modules first, leave the rest alone, and define clear criteria for extracting the next one later. The first module shipped in six weeks and cut latency on our busiest endpoints by roughly 40%, and the remaining monolith stayed stable straight through the acquisition. The hard part wasn't the technical work, it was convincing people that not rewriting everything was the disciplined choice. Data closed that argument faster than any deck would have.

---

## 3. Owning reliability with no one else to catch mistakes

At Alaya, in the early years, I was the only engineer, which meant there was no one to review a bad deploy before it hit enterprise clients who depended on the platform running during business hours. I set a personal rule early on: nothing shipped to production without a rollback plan I'd actually tested, not just written down. That habit came from a bad week where a database migration locked a table longer than expected and took the app down for twenty minutes during a client's onboarding call. After that I started running migrations against a production-sized snapshot first and timing them before touching the real database. It's a small practice, but it's the same discipline a live trading system needs: the cost of an untested change isn't an annoyed user, it's a missed market window or a stuck position. I'd rather over-test the boring stuff than explain later why it broke.

---

## 4. Leading AI tooling adoption with no formal authority

At Benevity I'm a Senior Staff IC with no direct reports, and I wanted two teams that didn't report to me to bring AI tooling into their daily workflow. I started with three engineers who were already curious rather than trying to convince skeptics first, built internal demos showing real time saved, and ran informal lunch-and-learn sessions with no mandate behind them. I documented specific outcomes, like a case where AI-assisted review cut roughly two hours off a single PR cycle, instead of just asserting the tooling was useful. Within three months, about 70% of engineers across both teams had adopted it on their own, and I became the informal go-to person for AI tooling across the org. It was slower than a top-down rollout would have been, but it stuck, because the people who adopted it were the ones telling their peers to try it next.

---

## 5. Learning a domain I didn't start in

When I joined Alaya's second big product line, employer-matched giving campaigns, I had no background in nonprofit tax compliance or the payment rails involved, and the first version of that feature had real compliance risk if it shipped wrong. I spent two weeks reading regulatory documentation and talking to our compliance advisor before writing any code, then built the matching logic as an isolated, well-tested module so a mistake there couldn't corrupt the rest of the platform's data. I also wrote internal docs explaining the domain rules in plain language, since I wasn't the only engineer who'd eventually touch that code without the two weeks of ramp-up I'd had. The feature shipped without a compliance incident and became one of the more sticky parts of the product for enterprise clients. The lesson that stuck with me is that unfamiliarity with a domain isn't a reason to avoid it, it's a reason to isolate the blast radius while you're still learning it.
