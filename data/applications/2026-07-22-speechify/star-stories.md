# STAR+R Stories: Speechify, Tech Lead (Web Core Product & Chrome Extension)

_Prepared for behavioral rounds. Prose format, first person, past tense._

---

## Story 1: Building Alaya from a blank page (product ownership under ambiguity)

**Best for:** "Tell me about building something from scratch" / "How do you handle ambiguity in a product role?"

In 2016 I co-founded Alaya, a purpose and impact platform for employee engagement, and there was nothing to start from: no customers yet, no product, just a signed first client and a deadline. I had to architect and build the whole thing myself at first, then grow a small team, while the business was closing its first enterprise deals in parallel. I picked a stack I knew wouldn't fight me under pressure, Node, React, PostgreSQL, and got the core features into a demoable state within three months because that's what the sales conversations needed. From there I expanded the product iteratively: multi-tenant architecture, an API layer, impact reporting, campaign tooling, adding pieces as real usage demanded them rather than guessing ahead of time. I also hired and onboarded the first three engineers and set up code review and architecture habits early, since I knew undoing bad habits later would cost more than building them in from day one. The platform reached production with over 50 enterprise clients across Switzerland and France, and Benevity, a Canadian company valued north of a billion dollars, acquired the company in 2021. Looking back, I'd have added proper observability much earlier; we didn't get real APM in place until traffic made the gaps painful, and multi-tenancy retrofitted after the fact cost more than it would have designed in from the start.

---

## Story 2: The monolith versus microservices call (technical trade-offs under delivery pressure)

**Best for:** "Tell me about a hard technical trade-off" / "How do you balance speed with long-term architecture?"

At Alaya, our monolith started showing real scaling cracks right around the time investors were pushing hard for new features, not a rewrite. The team was split between a full microservices rewrite and patching the monolith, and neither answer was obviously right. I ran a two-week spike comparing both approaches with actual load tests instead of opinions, then took the numbers to the CTO and investors so the decision was grounded in something concrete. What came out of that was a strangler-fig approach: extract the two highest-traffic modules first, leave the rest of the monolith alone, and define clear criteria for when to peel off the next piece. We shipped the first extracted module in six weeks, and the busiest endpoints got about 40% faster. The rest of the monolith stayed stable straight through the acquisition, so we never needed the big rewrite everyone was originally arguing about. The hard part wasn't the technical work, it was convincing people that not rewriting everything was the disciplined choice. Data cut that argument short faster than any amount of debate would have, and next time I'd run the benchmarks even earlier to skip the debate stage entirely.

---

## Story 3: Driving AI-assisted workflows without formal authority (cross-team influence)

**Best for:** "How do you lead without being someone's manager?" / relevant to shaping practice across a product team you don't own

At Benevity I was a Senior Staff IC with no direct reports, but I wanted two teams that didn't report to me to actually adopt AI-assisted development instead of treating it as a novelty. I started small: three curious engineers, some internal demos that showed concrete time saved on real tickets, and informal lunch sessions with no mandate behind them, just people showing other people what worked. I built reusable prompt templates and committed them to a shared repo so the habit didn't depend on remembering a trick from a demo. I also wrote up results in plain terms, things like a two-hour reduction on a specific PR review cycle, because vague claims about productivity don't convince engineers the way a concrete number does. Within three months, about 70% of engineers across both teams were using AI-assisted review and generation regularly, and I ended up as the informal lead on AI tooling adoption for the org. It was slower than a top-down rollout would have been, but it stuck, since people who opt in on their own terms end up advocating for the thing themselves instead of quietly working around a mandate.

---

## Story 4: Integrating into a much larger org after acquisition (collaboration across product, design, and a new codebase)

**Best for:** "Tell me about working closely with product and design" / "How do you handle joining a much bigger, differently structured team?"

When Benevity acquired Alaya in 2021, I landed on a team roughly ten times the size of what I'd worked in before, with a different codebase, Java and microservices instead of our Node stack, and a different set of processes for getting anything shipped. My job was to fold Alaya's capabilities into Benevity's platform without losing the product speed we'd built the company on. Rather than showing up with opinions, I spent the first month just mapping the existing architecture and understanding why things were built the way they were, and I made a point of building relationships with the platform and infra teams before pushing for any technical change. That groundwork is what let me become a cross-team architecture liaison for the Europe-facing product surface, and I ended up contributing to three major architecture decisions that affected teams well beyond my own. The core Alaya features made it into Benevity's platform successfully. My early instinct was to move fast and start fixing things that, from the new team's point of view, weren't actually broken, and slowing down to listen first is what turned that instinct into something people would actually let me act on.
