# STAR Stories: Director of Engineering, n8n (Core Experience)

Prepared for the n8n Director of Engineering role, which spans AI, Nodes, Community, and Adoption & Retention teams under one org. Picked stories that speak to leading without direct authority, making architecture calls under pressure, building from zero, and operating across a much bigger org post-acquisition, since those map closest to what Core Experience will actually ask of me.

---

## 1. Building Alaya from zero to acquisition

In 2016 I cofounded Alaya, a purpose and impact platform for employee engagement, with nothing but a blank page and no customers yet signed. My job was to architect and build the entire platform myself at first, then grow a small team, while the business was closing its first enterprise clients in parallel. I picked a pragmatic stack, Node.js, React, PostgreSQL, that wouldn't force a rewrite later but also wouldn't slow down the first demo. We had core features live in three months. From there I expanded the platform iteratively: multi-tenant architecture, an API layer, impact reporting, and eventually postal campaigns, while hiring and onboarding the first three engineers and setting up CI/CD and a code review culture from scratch. By the time Benevity acquired us in 2021, we had 50-plus enterprise clients across Switzerland and France running on infrastructure that hadn't needed a rewrite. If I did it again I'd invest in observability much earlier, we bolted on proper APM late, and I'd design for multi-tenancy from day zero instead of retrofitting it once it started to hurt.

---

## 2. A hard architecture call under investor pressure

A couple years into Alaya, our monolith started showing real scaling cracks, and the team split into two camps: rewrite everything as microservices, or keep it a modular monolith. Investors wanted new features shipped, not a rewrite nobody outside engineering would see the value of. I ran a two-week technical spike comparing both approaches with actual load tests instead of opinions, then brought the CTO and investors concrete numbers rather than a slide of trade-offs. What I proposed was a strangler-fig migration: pull out the two highest-traffic modules first, leave the rest of the monolith alone, and define clear criteria for when to extract the next one. The first extracted module shipped in six weeks and cut latency on our busiest endpoints by roughly 40%, and the remaining monolith stayed stable all the way through the acquisition. No big-bang rewrite ever happened. The hard part wasn't the technical work, it was convincing people that not rewriting everything was the disciplined choice. Data closed that argument faster than any deck would have, and next time I'd front-load even more benchmarking to shorten the debate.

---

## 3. Leading AI tooling adoption with no formal authority

At Benevity I'm a Senior Staff IC with no direct reports, and at one point I wanted two teams that didn't report to me to actually change how they worked by bringing AI tooling into their daily workflow. I started small, with three engineers who were already curious rather than trying to convince skeptics first. I built internal demos that showed real time saved, ran informal lunch-and-learn sessions with no mandate behind them, and put together reusable prompt templates in a shared repo so the wins were easy to copy. I documented specific outcomes, like a case where AI-assisted review cut roughly two hours off a single PR cycle, instead of just asserting the tooling was useful. Within three months, about 70% of engineers across both teams had adopted AI-assisted code review and generation on their own, and I ended up the informal go-to person for AI tooling across the org. It was slower than a top-down rollout would have been, but it stuck, because the engineers who adopted it were the ones telling their peers to try it, not me.

---

## 4. Integrating into a much bigger org after the acquisition

When Benevity acquired Alaya in 2021, I joined a team roughly ten times the size of what I'd been running, with a different codebase, Java and microservices instead of our Node.js monolith, and a different culture entirely. My task was to get Alaya's capabilities integrated into Benevity's platform while still shipping new features, without losing the product speed we'd built our reputation on. I spent the first month just mapping their existing architecture before I proposed a single change, and I made a point of building relationships with the platform and infra teams before pushing any technical opinions their way. From there I contributed to three major cross-team architecture decisions and became the de facto architecture liaison for the Europe-facing side of the product. Looking back, I moved too fast early on trying to fix things in the new org that genuinely weren't broken, just unfamiliar. Slowing down and listening first, before assuming my old playbook applied, made me noticeably more effective once I actually started proposing changes.
