# STAR Stories: Staff Platform Engineer, Infrastructure, Wispr Flow (San Francisco)

Prepared for a role centered on owning platform components end to end, tackling production problems nobody else has picked up, and balancing shipping speed against rigor at a company that just went from $2M to $50M ARR in a year. Picked stories that speak to building infrastructure from nothing, making a hard rewrite-versus-patch call under real pressure, working inside someone else's larger system after your own gets absorbed into it, and driving change without a mandate.

---

## 1. Building Alaya's platform from zero

In 2016 I cofounded Alaya, a purpose and impact platform for employee engagement, with no product and no customers signed yet. My job was to architect and build the whole thing, alone at first, while the business closed its first enterprise clients in parallel. I picked a pragmatic stack, Node.js, React, PostgreSQL, that wouldn't force an early rewrite but also wouldn't slow down the first demo, and had core features live within three months. From there I expanded iteratively into a multi-tenant architecture, an API layer, and impact reporting, while hiring and onboarding the first three engineers and setting up CI/CD and code review from scratch. By the time Benevity acquired us in 2021, we had 50-plus enterprise clients running on infrastructure that had never needed a full rewrite. If I did it again I'd invest in observability much earlier, we bolted on proper monitoring late, and that's exactly the kind of gap that gets expensive once you're running production infrastructure at real scale.

---

## 2. A hard infrastructure call under investor pressure

A couple of years into Alaya, our monolith started showing real scaling cracks, and the team split between a full microservices rewrite and keeping it a modular monolith. Investors wanted new features shipped, not a rewrite nobody outside engineering would see the value of. I ran a two-week technical spike comparing both approaches with actual load tests, then brought the CTO and investors concrete numbers instead of a slide of opinions. What I proposed was a strangler-fig migration: pull out the two highest-traffic modules first, leave the rest alone, and define clear criteria for extracting the next one later. The first module shipped in six weeks and cut latency on our busiest endpoints by roughly 40%, and the remaining monolith stayed stable straight through the acquisition. The hard part wasn't the technical work, it was convincing people that not rewriting everything was the disciplined choice. Data closed that argument faster than any deck would have, and it's the same instinct I'd bring to a latency-sensitive platform like Flow's: know exactly which parts can't break before you touch them.

---

## 3. Integrating into a system ten times the scale

After Benevity acquired Alaya in 2021, I joined as Senior Staff Engineer on a team roughly ten times larger, with a different codebase, Java and microservices instead of the Node stack I'd built, and different processes across the board. I had to integrate Alaya's capabilities into Benevity's platform without losing the product velocity we'd had as a small team. I spent the first month mapping the existing architecture before proposing any changes, and built relationships with the platform and infra teams before pushing technical opinions. That groundwork paid off: I contributed to three major cross-team architecture decisions and became the informal architecture liaison for the Europe-facing product surface. I initially moved too fast trying to fix things that weren't actually broken in the new org, and slowing down to listen first is what made the rest of it work.

---

## 4. Driving AI tooling adoption without formal authority

At Benevity I'm a Senior Staff IC with no direct reports, and I wanted two teams that didn't report to me to bring AI tooling into their daily workflow. I started with three engineers who were already curious rather than trying to convince skeptics first, built internal demos showing real time saved, and ran informal lunch-and-learn sessions with no mandate behind them. I documented specific outcomes, like a case where AI-assisted review cut roughly two hours off a single PR cycle, instead of just asserting the tooling was useful. Within three months, about 70% of engineers across both teams had adopted it on their own, and I became the informal go-to person for AI tooling across the org. It was slower than a top-down rollout would have been, but it stuck, because the people who adopted it were the ones telling their peers to try it next.
