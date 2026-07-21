# STAR Stories: Postscript, Staff Platform Engineer (Infrastructure)

Tailored from `profile/star-bank.md` for a platform/infra role centered on system design, incident response, and safety guardrails for AI agent automation.

---

## Story 1: Building Alaya's Platform From Zero (system design, infra ownership)

**Good for:** "How do you approach infrastructure topology and scaling boundaries from scratch?" / "Tell me about owning a system end to end."

In 2016 I co-founded Alaya, a purpose and impact platform for employee engagement, and there was nothing there yet. No customers, no product, no infrastructure. My job was to architect and build the whole thing, alone at first, while the business was already signing its first enterprise clients, so there wasn't much room to get the foundation wrong. I picked a pragmatic stack, Node.js, React, and Postgres, that could scale without turning into a science project, and I shipped the core features in about three months just to get a working demo in front of prospects. From there it was iterative: multi-tenant architecture, an API layer, reporting, and eventually a small team to help carry it. I also set up CI/CD and code review from day one, because I'd seen what happens to a codebase when that comes later instead of earlier. The platform ended up running for 50-plus enterprise clients across Switzerland and France, and Benevity, a Canadian company valued north of a billion dollars, acquired the company in 2021, which was about as clear a validation of those early calls as you can get. If I did it again I'd invest in proper observability much earlier. We added real APM late, and multi-tenancy retrofitted onto a system that wasn't designed for it from day zero cost more than it should have.

---

## Story 2: The Monolith-vs-Microservices Call Under Investor Pressure (system design tradeoffs, defensible decisions)

**Good for:** "Tell me about a technical trade-off you had to defend" / "How do you make infrastructure decisions when there's business pressure to just ship features?"

Alaya's monolith was starting to show real scaling cracks, and the team was split on whether to do a full microservices rewrite or stay modular within the monolith. Meanwhile investors wanted new features, not a rewrite, so any answer that involved stopping feature work for months was a hard sell. I ran a two-week technical spike comparing both approaches with actual prototype load tests, not opinions, and brought the CTO and investors concrete numbers instead of a slide deck of architecture diagrams. What I proposed was a strangler-fig migration: pull out just the two highest-traffic modules first, leave the rest of the monolith alone, and define clear criteria for when we'd extract the next piece. The first module shipped in six weeks, and performance on the busiest endpoints improved by roughly 40%. The rest of the monolith stayed stable all the way through the acquisition, no big-bang rewrite required. The hard part, honestly, wasn't the technical work, it was convincing people that not rewriting everything was the disciplined choice. Having the load-test data ready before the debate started would have cut that argument in half.

---

## Story 3: Driving AI Tooling Adoption Without Formal Authority (guardrails, trust, agent safety)

**Good for:** "Tell me about building guardrails people actually trust" / "How do you drive adoption of something new across teams that don't report to you?" Maps closely to the role's safety-engineering and agent-guardrail focus.

At Benevity I was a Senior Staff IC with no direct reports, but I wanted to get AI-assisted development practices adopted across two engineering teams that had zero obligation to listen to me. Rather than push a mandate nobody asked for, I started with three engineers who were already curious, built small internal demos that showed real time savings, and ran informal lunch-and-learn sessions with no top-down pressure attached. I put together reusable prompt templates and committed them to a shared repo so people could take what worked and skip what didn't, and I documented concrete wins, like one story of saving two hours on a single PR review cycle. Within three months, about 70% of engineers across both teams were using AI-assisted review and generation as part of their normal workflow, and I ended up as the informal lead for AI tooling across the org. The slower, mandate-free path was frustrating at times, but it produced something a decree never would have: engineers who'd adopted the tooling on their own terms became the ones defending and improving it internally. That's the same trust curve I'd expect to build around agent guardrails here, people don't fully rely on a safety gate until they've watched it catch something real.

---

## Story 4: Post-Acquisition Platform Integration (cross-team architecture, incident-adjacent collaboration)

**Good for:** "Tell me about integrating with a much larger, unfamiliar system" / "How do you build credibility with infra and platform teams you don't already know?"

When Benevity acquired Alaya in 2021, I joined a team roughly ten times the size of what I was used to, with a different codebase, Java and microservices instead of our Node monolith, and different processes for basically everything. My task was to integrate Alaya's capabilities into Benevity's platform while still shipping new features, without losing the velocity we'd built as a small team. I spent the first month just mapping the existing architecture before proposing a single change, and I made a point of building relationships with the platform and infra teams before pushing any technical opinions on their turf. That groundwork mattered: I ended up contributing to three major cross-team architecture decisions and became a de facto architecture liaison for the Europe-facing product surface. The honest reflection is that I moved too fast early on, trying to fix things in the new org that weren't actually broken, and slowing down to listen first is what made the later work land. Coming into an unfamiliar infrastructure footprint, whether it's someone else's microservices or someone else's EKS setup, that same discipline of mapping before touching is the one I'd bring here on day one.
