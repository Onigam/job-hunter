# STAR+R Stories: plancraft, Staff Engineer (f/m/d) AI

Stories picked for what the posting stresses: cross-team influence without formal authority, evolving a codebase without a rewrite, end-to-end ownership, and practical AI adoption. Each one is written to be told out loud in about two minutes.

---

## 1. Getting two teams to adopt AI tooling without being their manager

**Likely question:** "How have you influenced engineering practices across teams you didn't lead?" / "How do you use AI tools in your own work?"

**Situation.** At Benevity I was a Senior Staff IC with no direct reports. I was convinced AI-assisted development would change how fast we shipped, but the two teams I wanted to bring along didn't report to me, and a few people were openly skeptical.

**Task.** I needed engineers to actually change how they worked day to day, not just nod in a meeting. Nobody was going to give me a mandate, and honestly I didn't want one.

**Action.** I started small, with three engineers who were already curious. We tried the tools on real pull requests rather than toy examples, and whenever something saved time I wrote down how much and why. Those notes became short demos at informal lunch sessions. The part that mattered most, looking back, was committing reusable prompt templates to a shared repo, because it lowered the cost of trying for everyone else. When one review cycle dropped by about two hours, that example did more persuading than anything I said.

**Result.** Within three months roughly 70% of engineers on both teams were using AI-assisted review and code generation, and I ended up as the informal AI tooling lead across the org.

**Reflection.** Going mandate-free was slower, but it stuck. The people who adopted on their own terms became the advocates, which I couldn't have manufactured top-down. For plancraft I'd apply the same approach to agent tooling: prove it on real work first, then make the path easy.

---

## 2. Choosing a strangler fig over a rewrite

**Likely question:** "Tell me about a technical trade-off under pressure." / "How do you evolve a codebase efficiently?"

**Situation.** At Alaya our monolith was starting to crack on the busiest endpoints. Half the team wanted a full microservices rewrite. Investors wanted features, not a rewrite, and they weren't wrong to worry.

**Task.** I had to make a call we could defend on both fronts, long-term scalability and short-term delivery.

**Action.** Rather than argue it out, I ran a two-week spike comparing both approaches with prototype load tests. I took the numbers to our leadership and investors and proposed a strangler fig migration: extract the two highest-traffic modules first and leave the rest alone. We also wrote down clear criteria for when any further module would earn its own extraction, so the debate wouldn't restart every quarter.

**Result.** The first extracted module shipped in six weeks, and performance on the busiest endpoints improved around 40%. The remaining monolith stayed stable right through the acquisition, and we never needed a big-bang rewrite.

**Reflection.** The hardest part was social: convincing people that not rewriting everything was the ambitious choice. Data settled it. Next time I'd benchmark earlier and shorten the argument. The same thinking applies to adding agentic features to an existing product; you draw clean boundaries and move one high-value flow at a time.

---

## 3. Building Alaya from a blank page to acquisition

**Likely question:** "Tell me about something you owned end to end." / "How do you handle ambiguity?"

**Situation.** In 2016 I co-founded Alaya, an employee purpose and impact platform. We had no product, no customers and a business side that was already talking to enterprise prospects.

**Task.** I had to design and build the whole platform, alone at first and then with a small team, fast enough to support those first sales conversations.

**Action.** I picked a boring, pragmatic stack (Node.js, React, PostgreSQL) that could grow without heavy up-front engineering, and got the core features to a demoable state in about three months. From there we expanded in steps: multi-tenant architecture, an API layer, impact reporting, postal campaigns. As the team grew I hired and onboarded the first three engineers and set up CI/CD, code review habits and architecture docs so decisions didn't live only in my head.

**Result.** The platform reached 50+ enterprise clients across Switzerland and France and was acquired by Benevity, a Canadian unicorn valued at over $1B, in 2021.

**Reflection.** Two things I'd change. I'd add observability much earlier, since proper APM came late and cost us. And I'd design for multi-tenancy from day one, because retrofitting it was more expensive than I'd guessed. Both lessons map directly to AI systems, where you can't debug an agent you can't trace.

---

## 4. Joining a team ten times larger after the acquisition

**Likely question:** "Tell me about navigating a big change." / "How do you earn trust in a new organization?"

**Situation.** After the acquisition I joined Benevity as a Senior Staff Engineer. The org was about ten times Alaya's size, with a Java microservices codebase, different processes and a different culture.

**Task.** Alaya's capabilities had to move into Benevity's platform while we kept shipping new features, and without losing the product speed we'd had as a startup.

**Action.** My first instinct was to fix things quickly, and I did push too hard early on. So I changed course. I spent the first month mapping the existing architecture before proposing anything, and built relationships with the platform and infra teams before sharing strong opinions. Over time I became the cross-team architecture contact for the Europe-facing product surface.

**Result.** We migrated Alaya's core features into the Benevity platform. I contributed to three major cross-team architecture decisions, and the trust built during that period is what later made the AI tooling adoption possible.

**Reflection.** Listening first made me more effective, not less. Joining plancraft as a Staff engineer, I'd spend the first weeks understanding why the current system looks the way it does before suggesting it should look different.

---

## Prep note: expect a deep dive on agentic systems

The posting asks for hands-on experience with retrieval, knowledge design and debugging multi-step agent traces. Be ready to talk concretely about LLM integration, embeddings and semantic search, and multi-agent workflows you've built, including this job-hunter pipeline itself. Stay precise about what ran in production and what was personal or internal tooling; don't stretch it. A good angle is how you'd evaluate a voice-to-quote flow: golden datasets of real dictated quotes, per-step traces, and tracking where corrections happen after the agent is done.
