# STAR+R Stories: Shift Technology, Staff AI Engineer (Architecture)

These are picked for a Staff AI role that asks for three things: taking prototypes to production, making architecture calls, and mentoring squads. Expect a design-review round as well as behavioral questions, so each story ends with a line on how to bridge it to Shift's agentic work.

---

## 1. Taking a prototype to production under business pressure (Alaya, 2016 to 2021)

**Likely questions:** "Tell me about something you built from scratch." "How do you move from prototype to production?" "How do you handle ambiguity?"

**Situation.** In 2016 I co-founded Alaya, an employee purpose and engagement platform. There was no product, no customers and no codebase, and the business side was already in conversations with enterprise prospects who wanted to see something real.

**Task.** My job was to design and build the whole platform, alone at first, then with a team, without slowing down the sales conversations that kept the company alive.

**Action.** I picked a deliberately boring stack, Node.js, React and PostgreSQL, because I needed something I could scale without rebuilding it six months later. The first demo-ready version took about three months. From there the product grew in layers: multi-tenancy, a proper API layer, impact reporting, then postal campaigns, which pulled in physical logistics we hadn't planned for. Once we could afford it, I hired the first three engineers and put the basics in place for them, CI/CD, code review as a habit rather than a gate, and architecture notes written down so decisions didn't live only in my head.

**Result.** The platform ran in production for 50+ enterprise clients across Switzerland and France. In 2021 Benevity, a Canadian unicorn valued above $1B, acquired Alaya, and the technical due diligence was part of what made that happen.

**Reflection.** Observability came far too late; we only added proper APM once we were already chasing production issues blind. Multi-tenancy was the other expensive lesson, since retrofitting it cost much more than designing for it on day one. For Shift, the parallel is direct: an agent that's going to touch a real insurer's claims needs tracing and evals before it's clever, not after.

---

## 2. A hard architecture call: strangler fig over a rewrite (Alaya)

**Likely questions:** "Tell me about a technical trade-off." "How do you handle technical debt?" "How do you get buy-in for an architecture decision?"

**Situation.** By the time Alaya had real traffic, the monolith was showing cracks on its busiest endpoints. Half the team wanted a full microservices rewrite. Investors wanted features, not a rewrite.

**Task.** I had to make a call we could defend to both the engineers and the board, and that wouldn't stall delivery for a quarter.

**Action.** Rather than argue it out in meetings, we ran a two-week spike and built prototypes of both options, with load tests against each. The numbers went to the CTO and the investors as trade-offs, not as opinions. What I proposed was a strangler fig migration: pull out the two highest-traffic modules first, leave everything else in the monolith, and write down explicit criteria for when the next module would earn its own service. That last part mattered more than I expected, because it turned every later "should we split this?" debate into a check against a list.

**Result.** The first extracted module shipped in six weeks and the busiest endpoints got roughly 40% faster. The rest of the monolith stayed stable all the way through the acquisition, and we never needed a big-bang rewrite.

**Reflection.** Convincing people that not rewriting everything was the ambitious choice was harder than the engineering. Data settled it, and next time I'd benchmark earlier to cut the debate short. The same instinct applies to agent architecture: start with one well-instrumented workflow and only add orchestration layers when a measured limit demands it.

---

## 3. Changing how engineers work without authority (Benevity, AI-assisted engineering)

**Likely questions:** "How do you mentor and influence squads?" "Tell me about leading without formal authority." "How do you drive adoption of new AI tooling?"

**Situation.** At Benevity I was a Senior Staff IC with no direct reports. I was convinced AI-assisted development would change how our teams worked, but the two teams I wanted to bring along didn't report to me, and a mandate wasn't on the table.

**Task.** The goal was to get engineers to actually change their daily workflow, not just sit through a presentation about it.

**Action.** I started with three engineers who were already curious and worked with them on their real tickets. When something saved time, we wrote it down; one early example was a PR review cycle that went about two hours faster. Those concrete cases fed informal lunch-and-learn sessions where I demoed, never lectured. Reusable prompt templates went into a shared repo so people could copy what worked instead of starting from zero, and the early adopters ended up running some of the sessions themselves.

**Result.** Within about three months, roughly 70% of engineers on both teams were using AI-assisted code review and generation, and I became the informal AI tooling lead across the org.

**Reflection.** Going without a mandate was slower, but it stuck, because the people who adopted it on their own terms defended it when it was questioned. At Shift I'd apply the same thing to coding standards and LLMOps practices for the squads: shared templates, eval harnesses people can reuse, and design reviews that teach rather than gatekeep.

---

## 4. Joining a much bigger organisation after the acquisition (Benevity)

**Likely questions:** "Tell me about a time you had to adapt." "How do you work across teams?" "Tell me about a mistake."

**Situation.** After the 2021 acquisition I went from being the technical lead of a small team to a Senior Staff Engineer in an engineering org roughly ten times bigger. The codebase was Java microservices, the processes were different, and the culture was too.

**Task.** Alaya's capabilities had to be brought into Benevity's platform while we kept shipping new features, without losing the speed that had made Alaya worth buying.

**Action.** My first month went into mapping the existing architecture before proposing anything. Relationships with the platform and infrastructure teams came next, because I needed their trust before my technical opinions would carry any weight. Over time I became the cross-team architecture liaison for the Europe-facing product surface, which mostly meant getting API contracts right between teams that had never worked together.

**Result.** The core Alaya features were migrated into Benevity's platform, I contributed to three major cross-team architecture decisions, and the AI tooling work in story 3 grew out of the trust built here.

**Reflection.** Early on I moved too fast and tried to fix things that weren't broken in the new org. Slowing down and listening made me far more effective. Shift has offices on several continents and squads with their own history, so I'd start there the same way: understand why things are the way they are before redesigning them.

---

## Gap to prepare before the interview: an AI system in production

Shift's process will almost certainly include a question like "walk me through an LLM or agentic system you shipped to production, and how you evaluated it." The story bank doesn't have one yet, and the profile only lists LLM integration, multi-agent workflows, semantic search and embeddings without detail. Don't invent one. Before the call, write a real story using the structure above that covers what the system did, which models and retrieval approach it used, how quality was measured (evals, human review, regression sets), what broke in production, and what you changed.

Personal projects count if they're real. The multi-agent pipeline that runs this job search (agents for searching, scoring, reporting and writing, run on a schedule through CI) is a legitimate example of orchestration, tool calling and structured outputs. It's worth framing honestly as a side project, with what you'd change to make it production-grade for an insurer: evals, tracing, human-in-the-loop checkpoints, and cost controls.

Technical topics worth refreshing for the design round, given the job description: MCP servers and tool-calling contracts, LangGraph or Microsoft Agent Framework state handling, RAG evaluation (retrieval recall versus answer faithfulness), structured outputs with schema validation, and Azure equivalents for the AWS services you know (AKS, Service Bus, Azure AI Search, Bicep).
