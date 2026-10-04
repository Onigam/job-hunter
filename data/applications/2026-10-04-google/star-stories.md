# STAR+R Stories: Google, Senior Staff Software Engineer, Full Stack, CodeAI (Munich)

The posting asks for a technical lead who can set direction for developer-facing AI agents, balance fast prototypes with reliable production, build evaluation and benchmarking into the work, and operate in a complex, matrixed org. Google's behavioral rounds ("Googleyness and leadership") tend to probe ambiguity, influence without authority, and how you handle being wrong. The four stories below map onto those.

---

## 1. Getting engineers to adopt AI tooling without a mandate

**Likely prompts:** "Tell me about a time you influenced people who didn't report to you." / "How would you drive adoption of a developer tool?" / "How do you know a developer tool is actually helping?"

**Situation.** At Benevity I was a Senior Staff IC with no direct reports. I was convinced AI-assisted code review and generation would save real time, but the two teams I worked with most weren't mine to direct, and most engineers on them were somewhere between indifferent and sceptical.

**Task.** My goal was to change how those engineers worked day to day, and to do it in a way that would still hold once I stopped pushing.

**Action.** Rather than writing a proposal, I found three engineers who were already curious and worked with them directly on their own pull requests. Once we had a few concrete examples, like a review cycle that dropped by about two hours, I turned them into short internal demos and ran informal lunch sessions with no attendance expectation. The prompt templates that worked went into a shared repo so people could copy them instead of starting from nothing. I also kept a simple record of where the tools helped and where they produced confident nonsense, because the sceptics deserved an honest answer on that second part.

**Result.** Within about three months, roughly 70% of engineers on both teams were using AI-assisted review and generation regularly, and I ended up as the informal go-to person for AI tooling across the org.

**Reflection.** The mandate-free approach was slower, but it stuck, because the people who adopted it on their own terms became the ones defending it. If I did it again, I'd instrument usage and outcomes from the start rather than collecting anecdotes. For a team like CodeAI, that's the whole game: adoption numbers mean little without an evaluation loop that tells you whether the agent's output got accepted, reverted, or quietly rewritten.

---

## 2. Choosing a strangler fig over a rewrite, with benchmarks instead of opinions

**Likely prompts:** "Tell me about a hard technical trade-off." / "How do you balance speed and long-term quality?" / "How do you use data to settle a technical debate?"

**Situation.** At Alaya our monolith was starting to crack under load on a few busy endpoints. Inside the team there was a real split between a full microservices rewrite and keeping a modular monolith, while our investors wanted features, not a rewrite.

**Task.** As Head of Technologies I had to make a call we could defend on both fronts: something that fixed the scaling problem without freezing delivery for months.

**Action.** I time-boxed a two-week spike and had us prototype both directions, with load tests against the endpoints that were actually hurting. That turned the debate from opinions into numbers. I took those results to the leadership team and investors and proposed a strangler fig migration: extract the two highest-traffic modules first, leave the rest in the monolith, and write down explicit criteria for when any further module would earn extraction. The criteria mattered as much as the first move, since they stopped the argument from restarting every quarter.

**Result.** The first extracted module shipped in about six weeks. Response times on the busiest endpoints improved by around 40%, the remaining monolith stayed stable all the way through the Benevity acquisition, and we never needed a big-bang rewrite.

**Reflection.** The hardest part wasn't technical; it was persuading people that not rewriting everything was the ambitious choice. I'd benchmark earlier next time to cut the debate short. It's the same instinct I'd bring to agentic infrastructure: prototype quickly, but decide what "better" means and how you'll measure it before arguing about architecture.

---

## 3. Building Alaya from a blank page to acquisition

**Likely prompts:** "Tell me about something you built from scratch." / "How do you handle ambiguity?" / "How do you move from prototype to production?"

**Situation.** In 2016 I co-founded Alaya, an employee purpose and impact platform. We had no product, no customers and no code, and the business side was already talking to enterprise prospects who wanted to see something real.

**Task.** I needed to architect and build the platform myself at first, then grow and lead an engineering team, without letting early shortcuts become things we'd regret at scale.

**Action.** I deliberately chose a boring stack, Node.js, React and PostgreSQL, so we could move quickly without betting on anything exotic. The core features were built in about three months to get us to a first demo. From there we grew it in steps as customers pulled us: multi-tenancy, a proper API layer, impact reporting, and campaign tooling. When I hired the first three engineers, I set up CI/CD, code review norms and lightweight architecture docs early, because I knew I wouldn't be able to hold every decision in my head for much longer.

**Result.** The platform went into production with 50+ enterprise clients across Switzerland and France, and in 2021 Alaya was acquired by Benevity, a Canadian company valued at over $1B. I took that as a fair test of the early technical decisions.

**Reflection.** I'd have invested in observability much earlier; we added proper APM late and paid for it in debugging time. I also underestimated how expensive retrofitting multi-tenancy would be. Both lessons point the same way: the cheap moment to build in measurement and isolation is before you need them.

---

## 4. Joining a much larger org after the acquisition

**Likely prompts:** "Tell me about working in a complex, cross-functional organization." / "Tell me about a time you were wrong." / "How do you build credibility in a new team?"

**Situation.** After the acquisition I joined Benevity as a Senior Staff Engineer. The engineering org was roughly ten times the size of Alaya's, with a different codebase built on Java microservices, different processes and a very different culture.

**Task.** I had to integrate Alaya's capabilities into Benevity's platform while we kept shipping new features, and do it without losing the delivery pace we'd had as a small team.

**Action.** Early on I made a mistake. I came in moving at startup speed and started pointing at things to fix that, it turned out, weren't actually broken; they were shaped by constraints I didn't yet understand. Once I noticed the reaction, I changed approach. I spent about a month mapping the existing architecture and talking to the platform and infra teams before proposing anything, and I tried to earn trust on small, useful changes first. Over time that turned into a role as the cross-team architecture contact for the Europe-facing product surface.

**Result.** We migrated Alaya's core features into Benevity's platform, I contributed to three major cross-team architecture decisions, and that groundwork is what later made the AI tooling adoption in story 1 possible.

**Reflection.** Listening first made me far more effective than being right early. In an organization the size of Google's Core team, where the work cuts across many product areas, I'd start the same way: understand why things are the way they are before proposing a central solution that everyone else has to live with.

---

## Gaps to prepare for honestly

- **Go and C++.** The minimum qualifications list Java, Python, Go or C++ on the backend. Java and Python are covered (Benevity's services were Java; Python in tooling and AI work), but most of my recent hands-on backend has been TypeScript and Node. Say so plainly, and point to the Sagemcom years as proof of picking up unfamiliar stacks quickly.
- **IDE internals.** No direct experience. Talk about the developer experience side I do know: review workflows, CI/CD, prompt templates as shared tooling.
- **Formal ML evaluation.** My eval work so far has been practical (tracking which AI output gets accepted versus rewritten) rather than research-grade. Be ready to discuss how I'd design an eval harness for a code agent: offline benchmark sets, acceptance and revert rates as online signals, and regression gates before any model or prompt change ships.
