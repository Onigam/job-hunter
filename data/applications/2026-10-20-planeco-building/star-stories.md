# STAR+R Stories, Planeco Building (Founding AI Engineer)

Planeco says titles, years and people management don't matter to them. What they'll probe is whether you can own a greenfield system alone, make sound trade-offs when output has legal consequences, and get people (architects, founders, a Product Lead) to trust and use what you build. These four stories cover that. All facts come from `profile/star-bank.md`; nothing has been added.

---

## 1. Building Alaya from a blank page

**Likely questions:** "Tell me about something you built from scratch." "How do you work when nothing is defined yet?" "What does ownership mean to you?"

**Situation.** In 2016 I co-founded Alaya, an employee purpose and impact platform. There was no product, no customers and no codebase, just a business side that was already talking to its first enterprise prospects.

**Task.** My job was the whole technical side. I had to build the platform alone at first, get it to a demo fast enough to support those early sales conversations, and then grow it and a team around it without the thing collapsing under its own weight.

**Action.** I picked a stack I knew could scale without much ceremony, Node.js, React and PostgreSQL, because the risk at that point was never shipping, not choosing the wrong database. The core features were ready for a first demo within about three months. From there it grew in layers: multi-tenancy, an API layer, impact reporting, postal campaigns. When we hired the first three engineers I set up CI/CD, a code review habit and written architecture docs, mostly so the decisions I'd made alone could be questioned by someone other than me.

**Result.** The platform went to production and reached 50+ enterprise clients across Switzerland and France. Benevity, a Canadian unicorn valued at over $1B, acquired Alaya in 2021, which was about as clear a verdict on the early technical choices as I could get.

**Reflection.** Two things I'd change. Observability came too late; we added proper APM well after we needed it. And multi-tenancy was retrofitted rather than designed in, which cost far more than it would have on day one. For Planeco the equivalent lesson is clear: tracing, cost tracking and per-project isolation in the agent runtime belong in the first version, not the third.

---

## 2. A hard architecture call under delivery pressure

**Likely questions:** "Tell me about a technical trade-off." "When did you decide not to build something?" "How do you handle tech debt with founders who want features?"

**Situation.** At Alaya our monolith was starting to crack under load. The team was split between a full microservices rewrite and keeping a modular monolith, while investors wanted new features, not a rewrite.

**Task.** I needed a decision we could defend on both fronts: something that would scale, and that wouldn't stop delivery for months.

**Action.** Rather than argue it out, I ran a two-week spike that prototyped both options and load-tested them. I took the trade-offs to leadership and the investors as numbers, not opinions. What I proposed was a strangler fig migration: pull out the two highest-traffic modules first, leave the rest in the monolith, and write down the criteria that would justify extracting anything else later.

**Result.** The first extracted module shipped in six weeks, and the busiest endpoints got roughly 40% faster. The rest of the monolith stayed stable all the way through the acquisition, and we never needed the big-bang rewrite.

**Reflection.** The hardest part wasn't technical; it was convincing people that not rewriting everything was the right call, and the data did most of that work. I'd benchmark earlier next time to shorten the debate. The same instinct applies to agent systems: keep a deterministic path for the parts that work, and only hand the model the steps where it clearly earns its place.

---

## 3. Getting engineers to change how they work, without authority

**Likely questions:** "How do you get people to adopt your tools?" "Tell me about influencing without a title." "How would you get our architects to trust the AI output?"

**Situation.** At Benevity I was a Senior Staff IC with no direct reports. I wanted two teams that didn't report to me to start using AI-assisted development.

**Task.** Change daily habits for engineers who had no obligation to listen to me.

**Action.** I started with three engineers who were already curious and let everyone else watch. I built small internal demos that showed real time saved, ran informal lunch-and-learn sessions with no mandate behind them, and put reusable prompt templates in a shared repo where anyone could copy and improve them. Whenever something worked, like a PR review cycle that came in about two hours shorter, I wrote it down so the evidence wasn't just my word.

**Result.** Within about three months, ~70% of engineers on both teams were using AI-assisted review and generation, and I'd become the informal AI tooling lead across the org.

**Reflection.** Going without a mandate was slower, but it stuck, because the people who adopted it on their own terms argued for it better than I could have. At Planeco the users are architects, not engineers, and I'd follow the same pattern: start with whoever is most curious, show them their own projects handled well, and let the approval workflow earn trust one permit at a time.

---

## 4. Landing inside a much bigger organisation

**Likely questions:** "Tell me about a time you were wrong." "How do you work with domain experts who know more than you?" "How do you get up to speed in an unfamiliar domain?"

**Situation.** After the 2021 acquisition I joined Benevity as a Senior Staff Engineer. The team was about ten times the size of Alaya's, with a different culture, different processes and a Java microservices codebase.

**Task.** Integrate Alaya's capabilities into Benevity's platform while still shipping new features, without losing the speed we'd had as a startup.

**Action.** My first instinct was to start fixing what looked wrong, and I pushed on a few things too early. Once I noticed, I changed approach. I spent the first month mapping the existing architecture before proposing anything, and built relationships with the platform and infra teams before giving technical opinions. That groundwork is what later let me act as the cross-team architecture liaison for the Europe-facing product, and push AI-assisted workflows across the org.

**Result.** The core Alaya features were migrated into Benevity's platform. I contributed to three major cross-team architecture decisions and became the person two engineering teams went to for AI tooling.

**Reflection.** I moved too fast at first, trying to fix things that weren't broken. Slowing down and listening made me more effective, and it's how I'd approach German permitting at Planeco: weeks of sitting with the in-house architects and reading real files before deciding what the agent should and shouldn't touch.

---

## Gaps to prepare before the interview

The posting is very specific about agent infrastructure, and the star bank doesn't yet contain stories for these. Don't improvise numbers; prepare real examples from your own projects (GitHub, Givernance, the job-hunter pipeline itself, OpenClaw workflows):

- **Evals and regression testing for LLM output.** How you check that a change to a prompt or model doesn't silently degrade results.
- **RAG / semantic search.** Your profile lists embeddings and semantic search; have one concrete build ready, including chunking and how you measured retrieval quality.
- **MCP servers or clients and tool calling.** Any MCP server you've written or wired up.
- **Sandboxing.** Docker isolation for agent-run code, and what you'd do with E2B or micro-VMs.
- **Guardrails.** Prompt-injection defences, permission gates before tool use, PII handling. Permit files carry owner names and addresses, so expect GDPR questions.

Since they ask for "one line describing what you built", draft it now. Something like: *"Multi-agent pipeline on Claude CLI that searches, scores and drafts job applications daily, with structured outputs and style checks: github.com/Onigam/..."* Point it at the repo that best shows agent runtime work.
