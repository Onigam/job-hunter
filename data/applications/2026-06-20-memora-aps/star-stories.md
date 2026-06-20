# STAR Stories — Memora ApS Founding Engineer

---

## 1. Building Alaya from a blank page

**Best for:** "Tell me about a time you were the first engineer on a product" / "How do you approach ambiguity when there's no existing system?"

In 2016, I co-founded Alaya, a purpose and employee engagement platform. We had no code, no customers, and no product documentation. The business was already signing conversations with enterprise clients in Switzerland, which meant I had maybe three months to build something credible before we lost the first deals.

My task was to make every early architectural decision alone, with no one to sanity-check them. I chose Node.js, React, and PostgreSQL because they'd let me move fast without locking us into complexity we couldn't maintain. Multi-tenancy was the biggest early choice: I designed it into the schema from the start rather than bolting it on later, using row-level tenant isolation in PostgreSQL, which turned out to be the right call as we signed larger and larger clients.

Over the following 18 months I built out the API layer, the impact reporting module, a postal campaign system, and onboarded the first three engineers. We reached 50+ enterprise clients across Switzerland and France. In 2021, Benevity acquired Alaya at a $1B+ valuation. The thing I'd do differently is invest in observability earlier. We added proper APM late and it cost us debugging time at the worst moments.

---

## 2. Making an architecture call under delivery pressure

**Best for:** "Tell me about a hard technical trade-off" / "How do you handle technical debt when investors want features?"

This was at Alaya around year three. Our monolith was starting to crack under load: the busiest endpoints were slow, and the team was debating a full microservices rewrite versus a modular monolith approach. Investors were watching the roadmap closely and weren't interested in hearing about rewrites.

I needed to make a defensible technical call that didn't kill delivery velocity or promise something we couldn't execute in a reasonable timeframe. I ran a two-week spike: benchmarks on the current system, prototype load tests comparing a partially extracted service against the monolith, and a concrete cost estimate for both paths.

What I brought back wasn't an opinion, it was data. I proposed a strangler fig migration: extract the two highest-traffic modules first, keep everything else monolithic, and define clear criteria for when to extract additional pieces. The first extracted module shipped in six weeks, and endpoint performance improved by roughly 40% on our busiest routes. The remaining monolith stayed stable through the acquisition two years later. The lesson was that "don't rewrite everything" is a hard sell until you have numbers that show why. Next time I'd run the benchmarks earlier in the debate.

---

## 3. Driving AI tooling adoption without a mandate

**Best for:** "How do you lead without formal authority?" / "Tell me about changing how a team works"

At Benevity post-acquisition, I was a Senior Staff IC with no direct reports but a clear sense that the engineering teams were leaving time on the table by not using AI-assisted development tools. GitHub Copilot existed but wasn't wired into any workflow, and there was no culture around prompt engineering.

My task was to change behavior across two teams that didn't report to me, without any authority to require anything.

I started with three engineers who were already curious about the tooling. I built demos that showed concrete wins: a PR review cycle that went from four hours to two with a well-prompted summary, a test generation workflow that cut boilerplate by ~60%. Then I ran informal lunch sessions, no calendar invite pressure, just an open door and working examples. I also committed a shared repo of reusable prompts so the value was tangible and persistent, not just a talk.

Within three months, roughly 70% of engineers on both teams had folded AI tooling into their regular workflow. I became the informal AI lead across the org without ever holding a title that said so. The mandate-free approach was slower, but the engineers who adopted it on their own terms became advocates, which I couldn't have bought with a top-down decree.

---

## 4. Navigating a major organizational transition

**Best for:** "Tell me about a time you had to adapt quickly" / "How do you handle joining a larger, established team?"

When Benevity acquired Alaya in 2021, I went from a 12-person startup to an organization ten times that size. Different codebase (Java microservices versus our Node.js stack), different processes, different culture. I'd spent five years making most of the technical decisions; now I was one engineer among many.

My task was to integrate Alaya's product capabilities into Benevity's platform while still shipping features and not becoming irrelevant in a larger org.

I spent the first month reading architecture docs and mapping the system before proposing anything. I built relationships with the platform and infra teams before pushing opinions. When I started seeing areas where I thought things could be done differently, I came with trade-off analysis, not complaints. I also found a genuine contribution angle: driving AI tooling adoption, which became the thing I was known for.

I successfully migrated core Alaya features into Benevity's platform and contributed to three major cross-team architecture decisions over the following year. What I'd do differently is resist the urge to move fast in the first 90 days. I initially tried to fix things that weren't broken and it created friction. Slowing down to listen made me more effective once I did start pushing.
