# STAR Stories: Deel, Head of Engineering (FinTech)

Prepared for behavioral rounds. Picked for relevance to technical strategy ownership, cross-functional partnership with Product/Finance/Compliance, and leading engineering through scale and regulatory weight.

---

## 1. Building Alaya from zero, and building the team around it

Best for: "Tell me about defining a technical strategy from scratch" / "How do you build an engineering org."

In 2016 I cofounded Alaya with no product, no customers, and no team, just a blank page and a bet that employee purpose and engagement could be a real enterprise category. I was the only engineer for the first three months, so the job was equal parts architecture and triage: pick a stack that could scale without over-engineering for a market that didn't exist yet, and get something in front of a prospect fast. I went with Node.js, React and Postgres because the team I'd eventually hire needed to be productive in it immediately, not because it was the most interesting choice. Once we had our first enterprise clients signing, I hired and onboarded the first three engineers and set up the scaffolding that keeps a small team honest as it grows, CI/CD, code review norms, and architecture docs that actually got read. By the time Benevity acquired us in 2021, the platform was running in production for more than fifty enterprise clients across Switzerland and France. Looking back, I'd have invested in proper observability much earlier, we bolted on real APM late and paid for it in debugging hours, and I underestimated how expensive it would be to retrofit multi-tenancy instead of designing for it from day one. Those two lessons shape how I scope any new platform now.

---

## 2. The monolith decision nobody wanted me to slow down for

Best for: "Tell me about a technical trade-off you owned" / "How do you handle technical debt under business pressure."

At Alaya, our monolith started showing real scaling cracks right as investors were pushing hard for new features, not a rewrite. The team was split between a full microservices rewrite and just living with the pain a while longer, and neither answer felt honest. I ran a two-week spike comparing both approaches with actual load tests instead of opinions, then took the results to the CTO and investors and proposed something in between: a strangler-fig migration that pulled out only the two highest-traffic modules first, with clear criteria for when we'd extract anything else. The first extracted module shipped in six weeks and cut load on the busiest endpoints by roughly 40%, and the rest of the monolith stayed stable straight through the acquisition. No big-bang rewrite, no six-month feature freeze. The hard part wasn't the technical work, it was convincing a room that "don't rewrite everything" was actually the disciplined choice. Data got me there faster than arguing would have. If I ran that process again I'd front-load the benchmarking even more, since it was the thing that actually closed the debate.

---

## 3. Earning the right to change how a much bigger org worked

Best for: "Tell me about navigating a large organization" / "Cross-functional collaboration with Finance/Compliance-adjacent teams."

When Benevity acquired Alaya in 2021, I went from a five-person engineering team to an org roughly ten times the size, with a Java microservices codebase I didn't know and a culture I understood even less. Benevity's platform processes corporate donations and giving at real scale, which meant every change carried reconciliation and audit weight that Alaya's product never had. My instinct early on was to start proposing fixes, and that instinct was wrong. I spent the first month just mapping the existing architecture and building relationships with the platform and infra teams before I pushed a single technical opinion. Once I had that context, I became a cross-team architecture liaison for the Europe-facing product surface and contributed to three major architecture decisions that stuck. I also started driving adoption of AI-augmented workflows across the org during this period, which became its own thing. The reflection here is simple: I moved too fast trying to fix things that weren't actually broken in the new context, and slowing down to listen first is what made the later work land.

---

## 4. Getting two teams to change how they worked without a mandate

Best for: "Tell me about influencing without authority" / "Leading change as an IC" / people-leadership signal for Head of Engineering.

As a Senior Staff IC at Benevity with no direct reports, I wanted two teams that didn't report to me to adopt AI-assisted development practices, and I had no lever to make that happen other than being right. So I started small: three curious engineers, a few internal demos that showed real time savings instead of a pitch deck, and informal lunch sessions with zero mandate behind them. I wrote up concrete results as they came in, one story where AI tooling saved about two hours on a single PR review cycle stuck with people more than any slide would have. I also built a shared repo of reusable prompt templates so the practice didn't live only in my head. Within three months, around 70% of engineers across both teams were using AI-assisted review and generation regularly, and I ended up the informal lead for AI tooling adoption org-wide. It was slower than a top-down rollout would have been, but it stuck, because the engineers who picked it up did so on their own terms and then defended it to their peers. I couldn't have gotten that same buy-in with a decree.
