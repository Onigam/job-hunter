# STAR Stories: CTO and Head of IT (AI), GF-ACCORD AI

Prepared for a founder-level CTO conversation. Picked for fit with a tiny, fast-moving AI team where the CTO owns both the build and the org.

---

## 1. Building Alaya from a blank page to acquisition

In 2016 I co-founded Alaya, an employee purpose and impact platform, and there was nothing to start from: no customers, no code, no product. My job was to architect and build the whole thing, alone at first, while the business side was already out signing enterprise clients who expected something to exist. I picked a stack we could actually maintain rather than one that looked good on a slide, Node.js, React, PostgreSQL, and got a working demo out in about three months. From there it grew in layers: multi-tenant architecture, an API layer, impact reporting, campaign tooling, and eventually a small engineering team that I hired and onboarded myself, setting up CI/CD and a review culture as we went. By the time Benevity acquired us in 2021, we had over 50 enterprise clients across Switzerland and France running on it. That acquisition, by a company valued north of a billion dollars, told me the early calls were sound. If I did it again, I'd bring in real observability much sooner, we bolted on proper monitoring later than we should have, and I'd design for multi-tenancy from day one instead of retrofitting it under load.

---

## 2. A hard architecture call with investors breathing down my neck

At Alaya, our monolith started cracking under scale right around the time investors wanted new features, not a rewrite. The team was split between a full microservices rewrite and something more modest, and I needed a decision that would hold up technically without stalling the roadmap for a quarter. I ran a two-week spike comparing both approaches with actual load tests, not opinions, and brought the CTO and investors real numbers instead of a pitch. What I proposed was a strangler-fig migration: pull out the two highest-traffic modules first, leave the rest of the monolith alone, and set clear thresholds for when to extract the next piece. The first module shipped in six weeks and cut latency on our busiest endpoints by roughly 40%. No big-bang rewrite ever happened, and the remaining monolith stayed stable straight through the acquisition. The hard part wasn't the technical work, it was convincing a room that not rewriting everything was the brave choice. Next time I'd front-load more of that benchmarking so the debate doesn't eat two weeks before the data even shows up.

---

## 3. Driving AI adoption across teams that didn't report to me

At Benevity I was a Senior Staff engineer with no direct reports, but I wanted two teams to actually use AI-assisted development instead of treating it as a novelty. Nobody had given me a mandate to change how those teams worked, so I couldn't just tell people what to do. I started small, three engineers who were already curious, and built demos that showed concrete time saved rather than making abstract claims. From there it was lunch-and-learn sessions with no agenda beyond showing the work, plus a shared repo of prompt templates people could actually reuse. I tracked results as we went, one engineer logged saving close to two hours on a single PR review cycle, and used stories like that instead of slides. Within three months, about 70% of engineers across both teams had adopted AI-assisted review and generation into their daily workflow, and I ended up as the informal lead on AI tooling for the org. It was slower than a top-down rollout would have been, but it stuck, because people were advocating for something they'd chosen rather than something handed to them. That's roughly the model I'd want to run at a company where the whole premise is humans and AI working side by side.

---

## 4. Integrating into a much bigger, unfamiliar codebase after the acquisition

When Benevity acquired Alaya in 2021, I went from being one of a handful of engineers to sitting on a team ten times that size, working in Java and microservices instead of the Node stack I'd built. My task was to get Alaya's capabilities folded into Benevity's platform without losing the speed we'd had as a small team, and without assuming my way of doing things was automatically right. I spent the first month just mapping how the existing architecture actually worked before I proposed anything, and built relationships with the platform and infra teams before pushing any technical opinion. That patience paid off: I ended up contributing to three major cross-team architecture decisions and became the informal liaison for the Europe-facing product surface. Where I got it wrong early on was trying to fix things in the new org that weren't actually broken, just different from what I was used to. Slowing down and listening first is what made the rest of the integration work, and it's the instinct I'd bring into a small AI team that's about to scale past its founding size.
