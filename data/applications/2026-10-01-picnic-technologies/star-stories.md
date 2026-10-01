# STAR+R Stories: Picnic Technologies, Staff AI Engineer (Agentic Shopping)

The posting leans on four things: technical direction without hierarchy, shipping fast and then hardening, evaluation and safety, and mentoring across the org. The stories below are picked for those. Each one is written to be told out loud in about two minutes.

---

## 1. Leading without authority: getting two teams onto AI-assisted development

**Likely prompts:** "How do you drive technical direction when people don't report to you?" / "How would you mentor engineers on agentic patterns?"

**Situation.** At Benevity I was a Senior Staff IC with no direct reports. I thought AI-assisted code review and generation could save the teams real time, but the two teams I wanted to move didn't report to me, and nobody was going to mandate it.

**Task.** Change how roughly two teams' worth of engineers worked day to day, using nothing but persuasion and evidence.

**Action.** I didn't start with a presentation. I found three engineers who were already curious and worked with them directly, building small internal demos on their own tickets so the time saved was something they could see on their own work. Once we had a few concrete examples, like a PR review cycle that came in about two hours shorter, I ran informal lunch-and-learn sessions with no attendance pressure. The prompt templates that kept working got committed to a shared repo so people could reuse them instead of starting from a blank prompt.

**Result.** Within three months around 70% of engineers on both teams were using AI-assisted review and generation, and I'd become the informal AI tooling lead across the org.

**Reflection.** Going without a mandate was slower, but it lasted, because the early adopters ended up selling it for me. At Picnic I'd use the same approach for agentic patterns: one working example on a real team's problem is worth more than a guidelines doc.

---

## 2. Zero to production, then hardening: building Alaya

**Likely prompts:** "Tell me about taking something from prototype to production." / "How do you balance speed and quality?"

**Situation.** In 2016 I co-founded Alaya, an employee purpose and engagement platform. There was no product, no customers, and the business side was already in conversations with enterprise clients.

**Task.** Design and build the whole platform, alone at first, fast enough to demo but sound enough that it wouldn't collapse once real companies were on it.

**Action.** I picked a deliberately boring stack, Node.js, React and PostgreSQL, so I could spend my attention on the product rather than the tooling. The first demo-ready version took about three months. After that it was a steady expansion: multi-tenancy, an API layer, impact reporting, postal campaigns. As the team grew I hired and onboarded the first three engineers and put CI/CD, code review and architecture docs in place so the speed didn't depend on me.

**Result.** We got to 50+ enterprise clients across Switzerland and France, and Benevity, a Canadian unicorn valued at over $1B, acquired Alaya in 2021.

**Reflection.** Observability came too late; we added proper APM only after we'd felt the pain. Multi-tenancy also cost more to retrofit than it would have to design in. For an agent system I'd flip that: tracing, eval hooks and cost per session go in on day one, because you can't tune what you can't see.

---

## 3. A hard architecture call under delivery pressure

**Likely prompts:** "Tell me about a technical trade-off." / "How do you choose between options when people disagree?" (useful for model, orchestration and inference choices)

**Situation.** Alaya's monolith was starting to crack under load. The team was split between a full microservices rewrite and keeping a modular monolith, and investors wanted features, not a rewrite.

**Task.** Make a call we could defend, one that fixed the scaling problem without stopping feature work.

**Action.** I ran a two-week spike with prototype load tests for both approaches, so the conversation could be about numbers instead of preferences. I then took the trade-offs to the CTO and investors and proposed a strangler fig migration: pull out the two highest-traffic modules first and leave everything else in the monolith. We also wrote down the criteria that would justify extracting the next module, so the debate wouldn't start over every quarter.

**Result.** The first extracted module shipped in six weeks, the busiest endpoints got about 40% faster, and the rest of the monolith stayed stable through the acquisition. No big-bang rewrite.

**Reflection.** The hard part was convincing people that not rewriting was the right answer. Data settled it, and I'd benchmark even earlier next time. The same reasoning applies to agent stacks: measure latency, cost and quality on your own traffic before committing to a framework or a model size.

---

## 4. Joining a bigger org and listening first: post-acquisition at Benevity

**Likely prompts:** "Tell me about a time you had to adapt." / "How do you work cross-functionally?" / "Tell me about a mistake."

**Situation.** After the acquisition I joined Benevity on a team about ten times the size of Alaya, with a different culture, a Java microservices codebase and processes I didn't know.

**Task.** Bring Alaya's capabilities into Benevity's platform while still shipping new features.

**Action.** My first instinct was to start fixing things, and a few of those early pushes landed badly. So I slowed down. I spent about a month mapping the existing architecture and getting to know the platform and infra teams before I argued for any change. Over time I became the architecture liaison for the Europe-facing product surface, which meant translating between product, platform and the teams building on top.

**Result.** Core Alaya features were migrated into the Benevity platform, I contributed to three major cross-team architecture decisions, and the AI tooling work in story 1 grew out of the trust built here.

**Reflection.** I moved too fast at the start on things that weren't broken. Listening first made me more effective, and it's what I'd do in the first weeks at Picnic: sit with the people who see what customers actually change in their baskets before proposing an agent architecture.

---

## Prep note: the open-weight fine-tuning question

The posting asks for hands-on open-weight training and fine-tuning. Magino's profile shows production LLM integration, multi-agent workflows, semantic search and embeddings, but not model training. Don't stretch it. A straight answer works better with a staff-level panel:

"Most of my LLM work has been on the integration side: orchestration, retrieval, evaluation and getting it into production. I haven't owned a fine-tuning pipeline end to end. What I'd bring is the discipline around it, deciding when a fine-tune actually beats better retrieval or prompting, and building the eval harness that proves it. I'd expect to get hands-on with your vLLM and PyTorch setup quickly, and I'd rather tell you that now than have you find out in month two."

Before the interview, it's worth doing a small LoRA fine-tune on an open-weight model and serving it with vLLM, so there's something concrete to talk about.
