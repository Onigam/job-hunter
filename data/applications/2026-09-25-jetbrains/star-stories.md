# STAR+R Stories: JetBrains, Founding ML Engineer (Spectrum)

These are picked for a founding role inside an incubator. Expect questions on building from zero, deciding things with data instead of opinion, building team culture, and dealing with messy, contradictory knowledge. The panel will probe your ML depth hard, so stories 2 and 3 are framed around measurement and evaluation habits, which carry over directly to eval pipelines.

---

## 1. Building Alaya from zero to acquisition

**Likely questions:** "Tell me about something you built from scratch." "How do you handle ambiguity?" "Why a founding role again?"

**Situation.** In 2016 I cofounded Alaya, a purpose and impact platform for employee engagement. There was no product, no customers and no code, just a problem we believed companies would pay to solve.

**Task.** My job was to architect and build the whole platform, alone at first, while the business side was already trying to sign its first enterprise clients. Whatever I picked had to hold up long enough for us to find out if anyone wanted it.

**Action.** I went with a stack I knew could stretch without heavy upfront design, Node.js, React and PostgreSQL, and got the core features to a demoable state in about three months. After that it was steady expansion driven by what clients actually asked for: a multi-tenant architecture, an API layer, impact reporting, postal campaigns. When we could afford it I hired and onboarded the first three engineers and put in the basics that let a small team move without stepping on each other, so CI/CD, code review as a habit, and architecture docs someone would actually read.

**Result.** The platform reached production with 50+ enterprise clients across Switzerland and France, and Benevity, a Canadian unicorn valued above $1B, acquired us in 2021. Their due diligence looked hard at the tech, and it held up.

**Reflection.** Two things I'd change. I added proper APM far too late, and for a while we were guessing about production behaviour. I also retrofitted multi-tenancy, which cost more than designing for it on day one would have. For Spectrum the equivalent lesson is simple: tracing and evals go in before the first agent ships, not after the first customer complains.

---

## 2. A hard architecture call, settled with data

**Likely questions:** "Tell me about a technical trade-off." "How do you decide when opinions disagree?" "How would you drive measurable improvement?"

**Situation.** At Alaya our monolith was starting to crack under load. Half the team wanted a full microservices rewrite, the other half a modular monolith, and investors wanted new features rather than either.

**Task.** I needed a decision we could defend, one that fixed the real scaling problem without freezing delivery for months.

**Action.** Rather than argue it out, I ran a two-week spike and built prototypes of both approaches, then load-tested them against our actual traffic patterns. That gave me numbers to bring to the leadership team and investors instead of preferences. The proposal was a strangler fig migration: pull out the two highest-traffic modules first, leave everything else in the monolith, and write down explicit criteria for when another module would earn extraction.

**Result.** The first extracted module shipped in six weeks and the busiest endpoints got roughly 40% faster. The rest of the monolith stayed stable all the way through the acquisition, and we never needed a big-bang rewrite.

**Reflection.** The slow part was persuading people that not rewriting everything was the right answer. Once the benchmarks existed the debate ended quickly, so I'd build them earlier next time. It's the same instinct I'd bring to Spectrum's retrieval work: agree on the metric and the eval set first, then let the experiments argue with each other.

---

## 3. Getting two teams onto AI-assisted workflows without authority

**Likely questions:** "How do you influence people who don't report to you?" "How would you build an ML team culture?" "What's your hands-on experience with LLM tooling?"

**Situation.** At Benevity I was a Senior Staff IC with no reports. I wanted two engineering teams to adopt AI-assisted development, and neither team reported to me.

**Task.** Change how engineers actually worked day to day, without any power to mandate it.

**Action.** I started small with three engineers who were already curious and built internal demos around their real tasks, so the time savings were concrete rather than theoretical. From there I ran informal lunch-and-learn sessions with no attendance pressure, wrote reusable prompt templates and committed them to a shared repo, and kept a record of specific wins, like a PR review cycle that dropped by about two hours. People could try it, see the numbers, and decide for themselves.

**Result.** Within three months around 70% of engineers across both teams were using AI-assisted code review and generation, and I'd become the informal lead for AI tooling across the org.

**Reflection.** It was slower than a mandate would have been, but it stuck, because the people who adopted it on their own became its advocates. Building a small ML team at Spectrum would follow the same pattern: shared tooling, visible results, and a habit of writing down what worked.

---

## 4. Joining a larger org and finding out what was actually true

**Likely questions:** "Tell me about navigating a big change." "How do you ramp up on an unfamiliar system?" "Why does Spectrum's problem matter to you?"

**Situation.** After the acquisition I joined Benevity as a Senior Staff Engineer, on an engineering org roughly ten times Alaya's size. Everything was different: Java microservices instead of our Node stack, different processes, a different culture.

**Task.** Integrate Alaya's capabilities into Benevity's platform and keep building new features, without losing the delivery speed we'd had as a startup.

**Action.** I spent the first month mapping the existing architecture before proposing anything, which mostly meant working out how the system really behaved as opposed to how it was described. I built relationships with the platform and infra teams before pushing technical opinions, and over time I became the cross-team architecture contact for the Europe-facing product surface.

**Result.** The core Alaya features were migrated into Benevity's platform. I contributed to three major cross-team architecture decisions, and two teams came to rely on me for AI tooling.

**Reflection.** Early on I moved too fast and tried to fix things that weren't broken. Slowing down to listen made me more effective. That month of piecing together a system from partial, sometimes stale sources is exactly the pain Spectrum is trying to remove, and it's a big part of why the product makes sense to me.

---

## Prep notes for the ML depth round

Be ready for direct questions on RAG patterns, vector databases, chunking and hybrid search, agent frameworks (LangChain, LlamaIndex, smolagents), eval design, and fine-tuning. Answer honestly from what you've built with LLM integration, embeddings and multi-agent workflows, and say plainly where your experience stops, especially on training and fine-tuning. Don't stretch the stories above into ML claims they don't support. A strong answer to "how would you evaluate retrieval over an ontology built from code and issues?" will do more for you than any story.
