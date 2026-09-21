# STAR Stories, Head of Engineering, Platform @ Keyrock

Prepared for behavioral rounds. Picked for relevance to a hands-on engineering leadership role owning a data-intensive platform.

---

## 1. Building Alaya from zero to acquisition

**Likely prompt:** "Tell me about building something from scratch" / "How do you handle ambiguity as a technical leader?"

In 2016 I co-founded Alaya, an employee purpose and impact platform, with basically nothing: no customers, no product, just a blank page and a business partner signing early enterprise conversations while I figured out what to build. My job was to architect and build the whole thing, alone at first, then with a small team, while the company was closing its first contracts underneath me. I picked a pragmatic stack, Node.js, React, PostgreSQL, that could carry real load without forcing us into premature complexity, and I pushed to get a working demo in front of a client within the first three months rather than polishing something nobody had validated. From there it was iterative: multi-tenancy, an API layer, impact reporting, postal campaign tooling, and eventually hiring and onboarding the first three engineers, which meant I also had to build the CI/CD pipeline and the code review culture from scratch, not just the product. We got to 50+ enterprise clients across Switzerland and France, and in 2021 Benevity, a Canadian company valued north of a billion dollars, acquired us. Looking back, I'd have invested in real observability much earlier; we bolted on proper APM late and paid for it in debugging time. I also underestimated how expensive it would be to retrofit multi-tenancy after the fact. If I built something like this again, that's a day-zero decision, not a year-two one.

---

## 2. A hard architecture call under investor pressure

**Likely prompt:** "Tell me about a technical trade-off you had to defend" / "How do you handle technical debt against delivery pressure?"

By year three at Alaya, our monolith was starting to crack under load, and the team was split between a full microservices rewrite and something more conservative. Investors, meanwhile, wanted new features, not an engineering detour. I owned making a call that would hold up technically and be defensible to people who weren't engineers. So I ran a two-week spike comparing both approaches with actual prototype load tests instead of arguing from opinion, then presented the trade-offs to the CTO and investors with numbers on the table. What I proposed was a strangler-fig migration: pull out the two highest-traffic modules first, leave the rest of the monolith alone, and define upfront the criteria for when we'd extract the next piece. The first module shipped in six weeks and performance on our busiest endpoints improved by roughly 40%. The rest of the monolith stayed stable straight through the acquisition; we never did the big-bang rewrite. The hard part wasn't the technical work, it was convincing a room that "don't rewrite everything" was the disciplined choice, not the lazy one. Data got me there faster than argument did, and next time I'd front-load even more benchmarking so that debate doesn't eat weeks it doesn't need to.

---

## 3. Post-acquisition integration at Benevity

**Likely prompt:** "Tell me about navigating a big organizational change" / "How do you work across teams you don't control?"

After Benevity acquired Alaya in 2021, I landed on a team roughly ten times the size of what I'd worked in, running a different stack, Java and microservices instead of what I knew, with different processes and a culture I hadn't shaped. My task was to get Alaya's capabilities integrated into Benevity's platform without losing the speed we'd built our reputation on. I spent the first month mostly listening: mapping the existing architecture, sitting in on other teams' planning, before I proposed a single change. I built relationships with the platform and infra teams before I pushed any technical opinion, which felt slow at the time but meant people actually picked up the phone later. From there I ended up as a cross-team architecture liaison for the Europe-facing product surface and contributed to three major architecture decisions that shaped how the merged platform worked. I also started pushing AI-augmented workflows, Copilot, prompt patterns, into the broader engineering org, which became its own thing. The integration succeeded, and I became someone people looped in early rather than after the fact. My honest reflection: I moved too fast in month one trying to fix things that weren't actually broken, just unfamiliar. Slowing down and listening first is what made the rest of it work.

---

## 4. Driving adoption without formal authority

**Likely prompt:** "Tell me about leading without being someone's manager" / relevant for a role managing engineers while staying hands-on

At Benevity I was a Senior Staff IC with no direct reports, but I wanted two teams that didn't report to me to actually change how they worked day to day by adopting AI-assisted development practices. Mandating it wasn't an option, and honestly I don't think it would have stuck even if it were. So I started small: three curious engineers, a few internal demos showing concrete time saved on real PRs, informal lunch sessions with no agenda beyond "here's what this looks like." I wrote up reusable prompt templates and committed them to a shared repo so the win wasn't just mine to repeat. Within three months, about 70% of engineers across both teams were using AI-assisted review and generation as part of their normal workflow, and I'd become the person people asked when they wanted to get something similar going elsewhere in the org. It was slower than a top-down rollout would have been. But the engineers who adopted it on their own terms were the ones who defended it in meetings I wasn't in, which a mandate never gets you.

---

## 5. Making the scaling-vs-shipping call as a technical lead

**Likely prompt:** "Tell me about balancing platform investment against product velocity," strong fit for a platform-owning leadership role

This overlaps with the monolith decision above but is worth telling on its own for how it shaped how I lead now: the core tension at Alaya was never really "microservices or not," it was who gets to decide when the platform needs investment versus when the business needs a feature shipped. I was the one closest to both sides of that argument, technically credible enough to make the call and close enough to the business to know what the investors actually needed to hear. What I learned running that process, the spike, the data-backed proposal, the staged migration, is that platform leadership is mostly translation work: turning "this will be slow in eighteen months" into something a non-engineer can act on today. That's the muscle I'd bring into owning a trading data platform where low latency and reliability aren't nice-to-haves, they're the product. I'd still want to build that same kind of credibility here before making big architectural calls, the same way I did at Alaya and again at Benevity: understand the system deeply first, then earn the right to change it.
