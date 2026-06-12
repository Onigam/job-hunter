# STAR Stories — kAIgentic, Principal Engineer AI Research

---

## 1. Driving AI adoption without authority (Benevity, 2022)

Best for: "Tell me about a time you led a technical change without formal authority" / "How do you get engineers to adopt new practices?"

In 2022, Benevity's engineering org was still figuring out what to do with LLMs and AI-assisted tooling. I was a Senior Staff IC with no direct reports, but I'd identified that AI-assisted code review and generation could meaningfully cut cycle times. The challenge was that I had no mandate to change anything.

I started with three engineers who'd already been experimenting on their own. Rather than pitching the idea abstractly, I built internal demos that showed concrete time savings on real PR review cycles, things engineers could see in tools they already used. I also committed a set of reusable prompt templates to a shared repo, which lowered the "how do I even start" barrier. No mandate, just visible results and a low-friction onramp. I ran informal lunch sessions where anyone could show up and ask questions.

Within three months, roughly 70% of engineers across both teams had integrated AI-assisted workflows into their daily practice. More importantly, they were advocates rather than reluctant adopters. Engineers who adopt tools on their own terms are far more effective at explaining them to colleagues than any top-down rollout.

What I'd do differently: document the before/after metrics more rigorously from day one. The results were clear internally, but I had to reconstruct the timeline when making the case to leadership later. Good data would have made that easier.

---

## 2. Building Alaya from zero to acquisition (2016-2021)

Best for: "Tell me about building something from scratch" / "What's your experience with production AI systems at scale?"

In 2016, I co-founded Alaya with no product, no customers, and a rough concept for an enterprise platform for employee engagement. I was the sole engineer for the first six months.

The first decision was the stack. I chose Node.js, React, PostgreSQL, not because those were the most technically interesting options, but because they'd let me ship a real demo in three months without accumulating debt that would slow us down during enterprise sales. That bet held up. Over the next two years I built out multi-tenant architecture, an API layer that procurement teams could audit, impact reporting with enough structure for HR analytics, and semantic search across activity data that wasn't in the original spec. I hired and onboarded the first three engineers, set up CI/CD and code review practices, and wrote the architecture docs that the Benevity engineers later used during integration.

By the time Benevity acquired us in 2021, the platform was serving 50+ enterprise clients across Switzerland and France. The acquisition itself was a validation: Benevity's engineers integrated Alaya's codebase without a rewrite. That doesn't happen by accident.

The thing I'd invest in earlier if I did it again: observability. We added proper APM late and spent too much time reconstructing incidents that better instrumentation would have caught in minutes.

---

## 3. Making an architecture call under investor pressure (Alaya, 2019)

Best for: "Tell me about a hard technical trade-off" / "How do you handle technical debt?" / "How do you communicate technical decisions to non-engineers?"

Around 2019, Alaya's monolith was starting to creak under traffic growth. The team was split: some wanted a full microservices rewrite, others wanted to stay monolithic. Investors were pushing hard for new features, not rewrites. I needed to make a call and get everyone aligned behind it.

My view was that a big-bang rewrite was the wrong move, but I couldn't make that case stick with opinions alone. I ran a two-week technical spike: built prototypes of both approaches, ran load tests, and measured not just performance but the likely impact on developer velocity over the following six months. Then I presented the results to the CTO and investors with concrete numbers rather than architectural preferences.

The proposal was a strangler fig approach: extract the two highest-traffic modules first, define clear criteria for when to extract more, and leave the rest of the monolith untouched. We shipped the first extracted module in six weeks. Performance on the busiest endpoints improved by roughly 40%. The monolith stayed stable all the way through the Benevity acquisition.

What the experience taught me: "let's not rewrite everything" is a very hard sell when engineers are primed to find the existing code messy. "Here's the measured cost of the rewrite versus these concrete gains" is a different conversation. I'd run the benchmarks even earlier next time to cut the debate short.

---

## 4. Navigating a post-acquisition integration (Benevity, 2021)

Best for: "Tell me about navigating change in a large organization" / "How do you collaborate cross-functionally?" / "How do you build relationships in a new environment?"

When Benevity acquired Alaya in 2021, I joined an engineering org ten times the size I'd come from. Different codebase (Java, microservices), different culture, different processes. A lot of people had been doing things their way for years and had no particular reason to trust my opinions.

My first instinct was to start proposing improvements quickly. I'd seen things at Alaya that I thought would help, and I wanted to add value fast. I caught myself and spent the first month in listening mode instead: mapping the architecture, building relationships with the platform and infra teams, learning what had already been tried and why certain decisions had been made. Only then did I start proposing things, and I framed them as questions rather than conclusions.

Over the following year I contributed to three major cross-team architecture decisions and became the go-to person for AI tooling adoption across two engineering teams. The scope grew because I'd built trust before spending it.

Looking back, moving fast to fix things that weren't actually broken in the new context would have cost me credibility early. Slowing down and listening first made me significantly more effective over the medium term. It's a lesson that applies to any role where you're the new person with strong opinions.
