# STAR+R Stories: JetBrains, Founding Tech Lead (GrowthBricks)

The role is zero-to-one, highly autonomous, and judged on whether agent workflows produce real business value within six months. Expect questions on building from nothing, architecture calls under shifting requirements, choosing the simple option, integrating with systems you don't own, and proving value. The four stories below map to those; a gap to prepare is flagged at the end.

---

## 1. Building Alaya from a blank page to acquisition

**Likely prompts:** "Tell me about something you built from scratch." "How do you handle ambiguity?" "What would your first 90 days look like?"

**Situation.** In 2016 I cofounded Alaya, a purpose and impact platform for employee engagement. There was no product, no customers and no code, just a business side that was already talking to enterprise prospects.

**Task.** My job was the whole technical side: architect it, build it, alone at first, and have something demo-able fast enough that those conversations didn't go cold.

**Action.** I picked a stack I knew could carry us without heroics, Node.js, React and PostgreSQL, and resisted anything fancier. The first three months went into the core features we needed for a real demo, nothing else. Once clients started signing, the platform grew in layers: multi-tenancy, an API layer, impact reporting, postal campaigns. When I hired the first three engineers, I set up CI/CD, a code review habit and lightweight architecture docs so the codebase didn't only live in my head.

**Result.** We reached production with 50+ enterprise clients across Switzerland and France, and Benevity, a Canadian company valued above $1B, acquired Alaya in 2021. The stack I'd chosen on day one was still the one running at acquisition.

**Reflection.** Two things I'd change. Observability came far too late; we added proper APM once problems were already hurting. And retrofitting multi-tenancy was more expensive than designing for it would have been. For GrowthBricks the equivalent is tracing every agent run from day one, because without it you can't tell a good output from a lucky one.

---

## 2. A hard architecture call with investors pushing for features

**Likely prompts:** "Tell me about a technical trade-off." "How do you make architecture decisions when requirements keep moving?" "When did you choose the simpler option?"

**Situation.** At Alaya our monolith had started to crack under load on a few endpoints. The team was split between a full microservices rewrite and a modular monolith, and investors wanted features, not a rewrite.

**Task.** I needed a decision I could defend with evidence, one that fixed the real bottleneck without freezing delivery.

**Action.** Rather than let it stay a debate of opinions, I ran a two-week spike and load-tested prototypes of both approaches. I took the numbers to the leadership team and investors and proposed a strangler fig approach: pull out the two highest-traffic modules, leave everything else in the monolith, and write down explicit criteria for when any other module would earn extraction.

**Result.** The first extracted module shipped in about six weeks and the busiest endpoints got roughly 40% faster. The rest of the monolith stayed stable all the way through the acquisition, and we never needed the big-bang rewrite.

**Reflection.** The hard part wasn't technical, it was convincing people that not rewriting everything was the ambitious choice. Data ended the argument; I'd benchmark earlier next time to shorten it. It's the same instinct the GrowthBricks posting asks for when it says clear, simple solutions over unnecessary complexity, and the same question as MCP versus direct APIs versus a framework: pick the least machinery that solves the actual problem.

---

## 3. Integrating into systems I didn't own (Benevity, post-acquisition)

**Likely prompts:** "Tell me about working with an existing stack you couldn't change." "How do you handle joining a larger organisation?" Relevant to connecting GrowthBricks to an existing GTM stack instead of rebuilding it.

**Situation.** After the acquisition in 2021 I joined Benevity as a Senior Staff Engineer. The org was about ten times Alaya's size, with a different codebase (Java and microservices), different processes and a different culture.

**Task.** Bring Alaya's capabilities into Benevity's platform and keep shipping new features, without losing the pace we'd had as a startup.

**Action.** My first month went into mapping the existing architecture before proposing anything. I built relationships with the platform and infrastructure teams first, so that when I did have opinions they landed as suggestions from a colleague and not demands from the acquired company. Over time I became the cross-team architecture contact for the Europe-facing product surface.

**Result.** The core Alaya features were migrated into Benevity's platform, and I contributed to three major cross-team architecture decisions along the way.

**Reflection.** Early on I moved too fast and tried to fix things that weren't broken. Listening first made me noticeably more effective. With GTM teams it'll be the same: their CRM setup looks messy from outside, but it usually encodes real decisions, and the agent needs to fit around it.

---

## 4. Getting two teams onto AI tooling without authority, and proving it paid off

**Likely prompts:** "How do you drive adoption?" "How do you know an AI tool is actually valuable?" "Tell me about influencing without authority."

**Situation.** At Benevity I was an IC with no direct reports, and I wanted two teams that didn't report to me to adopt AI-assisted development.

**Task.** Change how engineers actually worked day to day, with no mandate and no one obliged to listen.

**Action.** I started with three engineers who were already curious and built demos around their real pull requests instead of toy examples. Informal lunch sessions followed, and I put reusable prompt templates in a shared repo so anyone could pick them up. I also wrote down concrete wins as they happened, for example one PR review cycle that came in about two hours shorter, because people trust a colleague's specific example more than a slide.

**Result.** Within three months roughly 70% of engineers on both teams were using AI-assisted review and code generation, and I became the informal AI tooling lead across the org.

**Reflection.** Going without a mandate was slower but it stuck, because the people who adopted it on their own terms became its advocates. What I'd do better is measure more rigorously from the start instead of collecting anecdotes. That's directly relevant here: the six-month goal for GrowthBricks is proving agent actions produce measurable business value, so I'd agree a baseline metric with the first GTM users before shipping the first workflow.

---

## Gap to prepare before the interview

The posting's first requirement is hands-on experience with "LLM applications, agents, or agentic workflows used by real people". The profile lists LLM integration, multi-agent workflows, semantic search and embeddings, but the story bank has no concrete project story for it yet. Before the interview, write up one real example with specifics: what the workflow did, who used it, how context and memory were handled, how tools were chosen, what went wrong, and how quality was evaluated. Don't improvise this one in the room; it will be the first technical deep-dive.

Also expect a question on GTM experience. The honest answer is no sales engineering background; the bridge is five years building a B2B product sold to enterprise clients, plus a clear plan to learn the CRM and marketing automation stack by sitting with the first users.
