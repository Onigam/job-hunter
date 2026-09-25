# STAR+R Stories: PEAX AG, Senior Agentic-AI Engineer

Picked for what this role will probe: defining an architecture from scratch, coaching a team on new AI tooling, making trade-offs under delivery pressure, and fitting into an existing Java/microservices platform. Tell them in your own words; these are scaffolds, not scripts.

---

## 1. Coaching engineers on AI tooling without authority

**Likely questions:** "How would you bring the team along on agentic AI?" / "Tell me about influencing without authority."

**Situation.** At Benevity I was a Senior Staff IC with no direct reports. I thought AI-assisted development could change how two of our teams worked, but neither team reported to me and nobody had asked for it.

**Task.** I needed to get engineers using AI tooling day to day, on their own terms, because a mandate from someone who wasn't their manager would have gone nowhere.

**Action.** I started small, with three engineers who were already curious. We built a few internal demos on real tickets so the time savings were visible rather than theoretical. From there I ran informal lunch-and-learn sessions, no slides about the future of AI, just live work on our own codebase. The prompt templates that kept proving useful went into a shared repo where anyone could pick them up or improve them, and I wrote down concrete wins as they came, like a PR review cycle that went about two hours faster.

**Result.** Within roughly three months, about 70% of engineers across both teams were using AI-assisted code review and generation, and I became the informal AI tooling lead for the org.

**Reflection.** Going without a mandate was slower, but it stuck. The people who adopted it themselves ended up selling it better than I could. At PEAX I'd use the same approach for agent patterns: one working agent that the team helped build is worth more than a framework document.

---

## 2. Defining an architecture from a blank page (Alaya)

**Likely questions:** "How would you approach defining our agent architecture?" / "Tell me about building something from zero."

**Situation.** In 2016 I cofounded Alaya, an employee purpose and engagement platform. There was no product, no customers and no code, while the business side was already talking to its first enterprise prospects.

**Task.** I had to architect and build the whole platform, alone at first, in a way that could survive real customers without burning months on infrastructure nobody needed yet.

**Action.** I picked a deliberately boring stack, Node.js, React and PostgreSQL, because speed to a first demo mattered more than elegance. The core features took about three months. After that it grew in layers: multi-tenancy, an API layer, impact reporting, postal campaigns. As I hired the first three engineers I put CI/CD, code review habits and lightweight architecture docs in place, so decisions didn't just live in my head.

**Result.** The platform ended up serving 50+ enterprise clients across Switzerland and France, and Benevity, valued above $1B, acquired Alaya in 2021. The technical foundations went through due diligence and held up.

**Reflection.** I added proper observability far too late, and retrofitting multi-tenancy was more expensive than designing for it from the start. Both lessons carry straight over to agents. I'd put tracing and evaluation in before the second agent ships, and I'd treat tenant isolation of documents and memory as a day-one constraint, especially with PEAX's Swiss data residency promise.

---

## 3. A hard trade-off under delivery pressure

**Likely questions:** "Tell me about a technical trade-off you navigated." / "How do you decide between building a framework and shipping use cases?"

**Situation.** At Alaya our monolith was starting to crack under load. Half the team wanted a full microservices rewrite. Investors wanted features, not rewrites.

**Task.** I needed a decision we could defend on both fronts, long-term scalability and short-term delivery.

**Action.** Rather than argue it out in meetings, I ran a two-week spike and prototyped both approaches with load tests. The results went to the CTO and investors as numbers, not opinions. What I proposed was a strangler-fig migration: pull out the two highest-traffic modules, leave everything else in the monolith, and agree in advance on the criteria that would justify extracting anything more.

**Result.** The first extracted module shipped in about six weeks, and the busiest endpoints got roughly 40% faster. The rest of the monolith stayed stable all the way through the acquisition, and we never needed a big-bang rewrite.

**Reflection.** The hard part was convincing people that not rewriting everything was the right call, and data is what settled it. I'd benchmark earlier next time to shorten the debate. The same tension will show up at PEAX between a generic agent framework and the first business agents, and my instinct is the same: build the framework out of two real use cases, not ahead of them.

---

## 4. Joining a larger Java/microservices organisation

**Likely questions:** "How would you integrate agents into our existing Java/SpringBoot platform?" / "Tell me about adapting to a new environment."

**Situation.** After the acquisition I joined Benevity as a Senior Staff Engineer. The organisation was about ten times the size of Alaya, with a Java and microservices codebase and its own culture and processes.

**Task.** Alaya's capabilities had to be integrated into Benevity's platform while we kept shipping new features.

**Action.** For the first month I mapped the existing architecture before proposing anything. I built relationships with the platform and infrastructure teams first and only then started pushing technical opinions. Over time I became the cross-team architecture liaison for the Europe-facing product surface.

**Result.** The core Alaya features were migrated into the Benevity platform, I contributed to three major cross-team architecture decisions, and I became the person people came to for AI tooling across two teams.

**Reflection.** Early on I moved too fast trying to fix things that weren't actually broken. Listening first made me far more effective. For PEAX that means understanding how documents already flow through the Java services before deciding where an agent should sit and which calls it's allowed to make.

---

## Prep notes

- Expect a deep technical round on LangChain/LangGraph, RAG and vector databases. Be concrete about what you've built with LLM integration, embeddings and multi-agent workflows, and honest about which specific frameworks you've used in production versus explored.
- The posting asks for fluent German. Decide before the first call how you'll describe your level and say it plainly.
- Have a view ready on agent observability (traces per tool call, eval sets built from real documents, cost per document) and on Swiss hosting constraints for model choice.
