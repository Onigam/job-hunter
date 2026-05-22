# STAR Stories — Starbridge AI, Senior Product Engineer

---

## Story 1: Building a product UI from scratch under enterprise pressure

**Best for:** "Tell me about building something end-to-end" / "Founding engineer experience" / "How do you work with ambiguity?"

In 2016 I co-founded Alaya with a blank page and no customers. The business was closing its first enterprise contracts while I was still writing the data models, which meant I had to make fast decisions that would hold under real usage patterns I couldn't yet see. My job was to design and build the entire product, including the frontend, alone at first, while keeping pace with whatever the sales team committed to in demos.

I chose React because the component model fit the kind of data-dense interface we needed, and TypeScript early on because the team would eventually grow and I'd need new engineers to fall into the right patterns without much hand-holding. The first working version took three months. From there I layered in multi-tenancy, an impact reporting dashboard, and campaign tooling, always keeping the UI readable for end-users who had no technical background. That constraint, explaining data to non-technical users, shaped most of the design decisions.

By 2021 the platform was running at 50+ enterprise clients across Switzerland and France, and Benevity, a Canadian unicorn at a $1B+ valuation, acquired the company. The frontend architecture survived the transition intact.

What I'd do differently: I added proper observability late, which made debugging user-facing issues slower than it should have been. I'd instrument the frontend from day one next time.

---

## Story 2: Hard architecture decision under delivery pressure

**Best for:** "Tell me about a significant technical trade-off" / "How do you handle technical debt under pressure?" / "When have you pushed back on stakeholders?"

At Alaya, as the product grew, the monolith started showing scaling cracks. The team was split between a full microservices rewrite and a modular monolith approach. Investors were pushing for new features, not internal restructuring, which made the debate expensive: every week without a decision was a week of drift.

My task was to make a defensible call that balanced long-term scalability with where we actually were as a team and a product.

I ran a two-week technical spike, built prototype load tests for both approaches, and brought concrete metrics to the CTO and investors instead of opinions. The proposal I landed on was a strangler fig migration: extract the two highest-traffic modules first, keep the rest monolithic, and define explicit criteria for when to extract more. The point was to show that "not rewriting everything" was a reasoned choice, not avoidance.

The first extracted module shipped in six weeks and brought ~40% performance improvement on the busiest endpoints. The remaining monolith held stable through the acquisition. No big-bang rewrite was ever needed.

The harder part was the persuasion, not the engineering. Data helped more than anything: once I had benchmark numbers, the conversation changed. I'd start the benchmarking earlier next time to cut the debate short.

---

## Story 3: Driving AI tooling adoption without any formal authority

**Best for:** "How do you lead without a title?" / "Tell me about influencing a team" / "Experience with AI-augmented workflows"

At Benevity, I was a Senior Staff IC with no direct reports but wanted to change how two engineering teams worked by introducing AI-assisted development practices. Nobody assigned me the task. There was no mandate, and there wouldn't have been buy-in if I'd tried to create one.

I started with three engineers who were already curious and willing to experiment. Instead of pushing tools, I built internal demos showing concrete time savings on things people already found annoying: PR review cycles, boilerplate generation, test scaffolding. I ran informal lunch-and-learn sessions with no attendance requirement, created reusable prompt templates and committed them to a shared repo, and wrote up a short case study when one engineer cut a two-hour review cycle to under thirty minutes.

Within three months, roughly 70% of engineers on both teams were using AI-assisted workflows regularly. The informal momentum eventually made me the de facto AI tooling lead across the org, which hadn't been the goal but turned out to be useful.

What surprised me: the organic path is slower but stickier. Engineers who adopted on their own terms became internal advocates, which no top-down decree could have produced. That's the playbook I'd use again.

---

## Story 4: Navigating a post-acquisition integration

**Best for:** "Tell me about joining a much larger org" / "How do you handle change?" / "Cross-functional collaboration at scale"

After the Benevity acquisition in 2021, I joined as a Senior Staff Engineer on a team roughly ten times the size of Alaya. Different culture, different codebase (primarily Java and microservices), different review and release processes. The velocity I was used to didn't transfer directly.

My task was to continue building product while integrating Alaya's capabilities into Benevity's platform, without losing the delivery rhythm that had made the acquisition worth doing.

I spent the first month mapping the existing architecture before suggesting changes, and invested time building relationships with platform and infra teams before pushing technical opinions anywhere. That felt slow, but it meant that when I did raise architecture concerns, people had context for where I was coming from. I ended up as a cross-team architecture liaison for the Europe-facing product surface and contributed to three major cross-team decisions in the first year.

What I learned, and it surprised me a little: I initially moved too fast trying to fix things that weren't actually broken in the new org. Slowing down to listen made me more effective than trying to import what had worked at Alaya. The context matters as much as the solution.
