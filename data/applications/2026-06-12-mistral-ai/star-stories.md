# STAR Stories — Mistral AI, Applied AI Technical Lead

---

## Story 1: Building Alaya from Zero to Acquisition
*Best for: "Tell me about a time you built something from scratch" / "How do you handle ambiguity?" / Founding engineer context*

In 2016, my co-founder and I started Alaya with a blank page, no customers, and no product. The challenge wasn't just building software; it was building the right software fast enough to stay ahead of the first sales conversations, which were already happening before we had anything to show.

I made early choices about the stack that I'd stand by today. Node.js, React, and PostgreSQL weren't flashy, but they could carry us from MVP to production without a full rewrite, and critically, they were things I could hire for quickly in the Geneva market. Within three months we had a working demo. Over the next two years I built out multi-tenant architecture, an impact reporting layer, API integrations with HR platforms, and onboarded the first three engineers. CI/CD went in from day one because I'd seen what happens on teams that skip it.

The platform reached production with 50+ enterprise clients across Switzerland and France. Benevity acquired us in 2021. That outcome was a direct signal that the early technical decisions held up under real scale, including during the due diligence process.

Looking back, the thing I'd change is observability. We added proper APM late, and there were a few tense weeks where we were flying blind when we could have had clear dashboards from the start. I'd also design for multi-tenancy from the very first schema rather than retrofitting it six months in.

---

## Story 2: Driving AI Adoption Without Direct Authority
*Best for: "How do you lead without formal authority?" / "Tell me about influencing technical teams" / Technical Lead and Staff+ roles*

At Benevity, I was a Senior Staff IC with no direct reports. My role came with no mandate to change how engineering teams worked, but I could see that AI-assisted development was going to compound significantly and our teams were leaving real productivity on the table.

I started small, with three engineers who were already curious. Rather than pushing a top-down rollout, I built a few internal demos and measured what they actually saved. One prompt template cut a typical PR review cycle by about two hours. I ran informal sessions, no slide decks, no mandate, just live demonstrations and a shared repo of templates anyone could copy. The cost of trying was near-zero and the benefit was concrete and visible.

Within three months, roughly 70% of engineers across both teams were using AI-assisted code review and generation regularly. The adoption stuck because it was voluntary. Engineers who chose it on their own terms became internal advocates, and I couldn't have manufactured that with a mandate.

The reflection is that the slow, organic start felt uncomfortable at the time but produced something more durable. I'd do the same again; I'd just trust the process faster and stop second-guessing whether it was working.

---

## Story 3: Hard Architecture Trade-off Under Investor Pressure
*Best for: "Tell me about a technical decision you had to defend" / "How do you handle technical debt under deadline?"*

At Alaya, we were scaling fast and the monolith was starting to crack under load on a few key endpoints. Two camps formed internally: full microservices rewrite versus staying modular inside the monolith. Investors were watching feature velocity, not architecture purity, so there was real pressure not to slow down.

Rather than picking a side based on instinct, I ran a two-week technical spike comparing both approaches with prototype load tests on the busiest endpoints. Then I presented the trade-offs to our CTO and the investor team with actual numbers. The proposal I landed on was a strangler fig pattern: extract the two highest-traffic modules first, keep everything else as-is, and define clear criteria for when another module earned extraction. This wasn't a compromise; it was the genuinely better path given the constraints.

We shipped the first extracted module in six weeks. Performance improved about 40% on those endpoints. The remaining monolith stayed stable through the entire acquisition, which meant Benevity inherited a system they could reason about, not a half-finished rewrite.

What I'd do differently is bring the benchmarking data in earlier. The philosophical argument ran too long before I shut it down with numbers. Data ended up being decisive; I should have made it the starting point, not the closing argument.

---

## Story 4: Navigating Post-Acquisition Integration
*Best for: "Tell me about joining a much larger organization" / "Cross-functional collaboration" / "Navigating change"*

After the Benevity acquisition in 2021, I went from a team of eight to an engineering org ten times that size, different stack, different culture, different decision-making rhythm. The risk was obvious: arrive with opinions, break trust before you've built any.

I spent the first month doing almost nothing except mapping the existing architecture and having conversations. I held back technical opinions deliberately until I understood what was already working and why. That patience paid off when I started driving actual integration work: I had relationships across the platform and infrastructure teams before I was ever asking them for anything.

Over the following year I contributed to three major cross-team architecture decisions, became the primary technical liaison for the Europe-facing product surface, and led the AI tooling adoption work across two engineering teams. None of that would have happened if I'd come in trying to fix things on day one.

The lesson is that in a new organization, the founding-engineer instinct to ship fast and fix everything is almost always the wrong first move. Listening isn't passive; it's how you figure out where to apply force.
