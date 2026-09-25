# STAR+R Stories: Lead Agentic Systems Engineer @ AI-first HealthTech (via Findr, Frankfurt)

The client builds clinical decision support for clinicians and therapists working on children's behavioral, developmental and mental health. The role is about shipping agentic systems (LLMs, tools, RAG, LangGraph-style orchestration) that are reliable, observable and safe, with guardrails, evals and human-in-the-loop review. Expect questions on turning AI capability into real product, on trade-offs between speed and safety, and on working with non-engineers (clinicians, product, AI specialists). Four stories below, plus short answers for the two obvious gaps: no healthcare background and limited named LangGraph experience.

---

## 1. Getting two teams to adopt AI tooling without a mandate

**Likely questions:** "How have you brought LLMs into real engineering work?" / "How do you influence people who don't report to you?" / "How do you know an AI tool is actually helping?"

**Situation.** At Benevity I was a Senior Staff IC with no direct reports. I wanted two teams that didn't report to me to start using AI-assisted code review and generation, and most of the engineers were somewhere between indifferent and skeptical.

**Task.** Change how people worked day to day without being their manager, and without turning it into a top-down rollout that people would quietly ignore.

**Action.** I started small, with three engineers who were already curious. We built a few internal demos around real work from our own repos rather than toy examples, because nobody cares how an assistant writes a sorting function. Then I ran informal lunch sessions, no attendance expected, just showing what had worked and what hadn't. The prompt templates that held up went into a shared repo so people could reuse and change them. I also wrote down concrete results as they came in, like a PR review cycle that got about two hours shorter, since "it feels faster" doesn't convince a skeptical senior engineer.

**Result.** Within about three months, roughly 70% of the engineers on both teams were using AI-assisted review and generation regularly, and I became the informal go-to person for AI tooling across the org.

**Reflection.** Letting people adopt it on their own terms was slower, but it stuck, and the early adopters ended up selling it better than I could. Looking back, I'd have measured quality from the start, not just time saved. With clinicians the same lesson applies even more strongly: they'll trust an agent because of evidence they can check, not because someone told them to.

---

## 2. A hard architecture call under delivery pressure

**Likely questions:** "Tell me about a technical trade-off you made." / "How do you balance shipping features against reliability and cost?" / "How do you make decisions with incomplete information?"

**Situation.** At Alaya our monolith was starting to crack under load. Half the team wanted a full microservices rewrite, others wanted to keep going as we were, and investors wanted new features rather than anything that looked like a rewrite.

**Task.** Come to a decision I could defend with data, one that fixed the scaling problem without stopping product delivery.

**Action.** I ran a two-week spike comparing a microservices split and a modular monolith, with prototype load tests on our busiest paths. When I presented it, I put numbers in front of the leadership team and investors instead of opinions. The proposal was a strangler-fig migration: pull out the two highest-traffic modules first, leave the rest alone, and agree in advance on the criteria that would justify extracting anything else.

**Result.** The first extracted module shipped in six weeks, and the busiest endpoints got about 40% faster. The remaining monolith stayed stable all the way through the acquisition, and we never needed a big-bang rewrite.

**Reflection.** The hard part wasn't technical. It was convincing people that not rewriting everything was the right answer, and the benchmarks did most of that work. I'd benchmark earlier next time to cut the debate short. It's the same instinct I'd bring to agent design: before adding another agent or another tool call, measure whether a simpler pipeline plus a good eval gets you there for less latency and cost.

---

## 3. Building Alaya from zero to acquisition

**Likely questions:** "Tell me about turning an idea into a production product." / "How do you work with product and domain experts?" / "What does production-ready mean to you?"

**Situation.** In 2016 I co-founded Alaya, a platform for employee purpose and impact programs. There was no code, no product and no customers, and the business side was already talking to enterprise clients who expected a demo within weeks.

**Task.** I owned everything technical: the stack, the product build, and later hiring the engineers who'd build it with me.

**Action.** I picked Node.js, React and PostgreSQL because we could move quickly in them without painting ourselves into a corner. The first three months went into the smallest version a client could actually use, and I pushed back on anything nobody had asked for yet. As clients came on, the platform grew around what they kept requesting: multi-tenancy, an API layer, impact reporting, even physical postal campaigns. I spent a lot of time with the people running client programs, because they understood the workflows far better than I did. When the first three engineers joined, CI/CD, code review and short architecture docs went in early, mostly so I wouldn't become the bottleneck.

**Result.** Alaya reached 50+ enterprise clients across Switzerland and France, and Benevity, a Canadian company valued at over $1B, acquired it in 2021. Their technical due diligence went through the platform we'd built from the first day.

**Reflection.** Observability came too late; we added proper APM only after customers reported problems we couldn't see ourselves. Multi-tenancy was retrofitted too, and that cost far more than designing for it upfront. For an agentic system in a clinical setting, I'd have tracing of every model call and tool call, plus an audit trail of what the clinician saw and decided, in the first version rather than the third.

---

## 4. Joining a much larger org after the acquisition

**Likely questions:** "How do you collaborate across engineering, product and domain experts?" / "Tell me about a time you had to adapt." / "How would you approach your first 90 days here?"

**Situation.** After the acquisition in 2021 I joined Benevity as a Senior Staff Engineer. The organization was around ten times bigger than Alaya, with a Java and microservices codebase, different processes and a different culture.

**Task.** Bring Alaya's capabilities into Benevity's platform while we kept shipping new features, without losing the velocity we'd had as a small team.

**Action.** For the first month I mostly mapped the existing architecture and listened before proposing anything. I built relationships with the platform and infrastructure teams before pushing technical opinions on them. Once there was some trust, I became the cross-team architecture contact for the Europe-facing product surface, and that's also where the AI tooling work in story 1 started.

**Result.** The core Alaya features were migrated into Benevity's platform, I contributed to three major cross-team architecture decisions, and I ended up as the reference for AI tooling adoption across two engineering teams.

**Reflection.** Early on I moved too fast and tried to fix things that weren't broken. Slowing down made me more effective. Joining a healthtech team, I'd do the same thing on purpose: sit in on how therapists and clinicians actually work before designing any agent workflow for them.

---

## Gap answers (keep them short)

**"You haven't worked in healthcare."**
That's right, and I'd rather be upfront about it. What I do bring is years of building systems that clients depended on and that had to pass a demanding technical due diligence. The clinical side I'd learn from your healthcare experts, and I'd expect them to shape the evals and guardrails more than I would. Regulatory work like GDPR for health data or MDR questions around decision support is something I'd want to understand early, with whoever owns compliance.

**"How much LangGraph / LangChain have you shipped?"**
My hands-on work is LLM integration, embeddings, semantic search and multi-agent workflows in TypeScript and Python, rather than a long track record on LangGraph specifically. The concepts map closely: state machines, tool calling, retries, checkpoints, human approval steps. I'd get productive in the framework quickly, and I'd also be the person asking whether a given workflow needs an agent at all or just a well-tested pipeline.
