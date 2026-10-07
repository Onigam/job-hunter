# STAR+R Stories: Productboard, Staff Full-stack Product Engineer, Growth

The posting leans on four things: 0-to-1 or founding-engineer experience, making a codebase "AI-ready" with clear module boundaries, raising engineering standards across teams, and working closely with product, design and data. The stories below map to those, in the order they're most likely to come up.

---

## 1. Building Alaya from a blank page to acquisition

**Likely questions:** "Tell me about something you built from zero." / "How do you handle ambiguity?" / "What does a founding engineer bring to a growth team?"

**Situation.** In 2016 I co-founded Alaya, a platform that helps companies run employee purpose and impact programmes. There was no product, no customers and no team, just a business partner already talking to enterprise prospects.

**Task.** My job was to build the whole platform, alone at first, fast enough that sales had something real to show, without painting us into a corner we'd pay for later.

**Action.** I picked a deliberately boring stack, Node.js, React and PostgreSQL, because I needed to move quickly and didn't want to fight my tools. The first demo-ready version took about three months. After that, most of what I built was driven by what was stopping customers from adopting it: a multi-tenant setup once we had more than a handful of clients, an API layer, impact reporting that HR teams could take to their leadership, and postal campaigns that got people who never opened the app to take part. There was no growth team, so if activation was bad, that was my problem too. When I hired the first three engineers I set up CI/CD, code review and written architecture notes so they weren't dependent on what was in my head.

**Result.** Alaya reached 50+ enterprise clients across Switzerland and France and was acquired by Benevity, a Canadian unicorn valued at over $1B, in 2021. The platform held up through due diligence, which was a fair test of the early decisions.

**Reflection.** I'd add proper observability much earlier; we only got real APM late, and for a while we were guessing about where users dropped off. I also underestimated how much it costs to retrofit multi-tenancy. On a growth team I'd push for instrumentation on day one for the same reason: you can't run experiments on numbers you don't have.

---

## 2. Strangler fig instead of a rewrite (module boundaries under delivery pressure)

**Likely questions:** "Tell me about a hard technical trade-off." / "How would you make our codebase AI-ready?" / "How do you deal with legacy code while still shipping?"

**Situation.** A few years into Alaya, the monolith was starting to crack under load. Half the team wanted a full microservices rewrite. Investors wanted new features, not a rewrite, and they weren't wrong to.

**Task.** I had to make a call that we could defend on both fronts: fix the scaling problem without freezing the roadmap for months.

**Action.** Rather than argue it out in meetings, I ran a two-week spike and built prototypes of both approaches with load tests. When I took it to the CTO and the investors I showed numbers, not opinions. The proposal was a strangler fig migration: pull out the two highest-traffic modules behind clear interfaces, leave everything else in the monolith, and write down the criteria that would justify extracting the next module, so the debate wouldn't restart every quarter.

**Result.** The first extracted module shipped in about six weeks, and the busiest endpoints got roughly 40% faster. The rest of the monolith stayed stable all the way through the acquisition, and we never needed the big-bang rewrite.

**Reflection.** The hardest part was persuading people that not rewriting everything was the ambitious option. Data ended the debate, and I'd benchmark even earlier next time. It's the same thinking I'd bring to Productboard's Ruby-to-Kotlin path: clean boundaries around the parts that matter most, which is also what makes code legible to an agent.

---

## 3. Getting two teams to adopt AI tooling without any authority

**Likely questions:** "How do you influence without authority?" / "How do you raise engineering standards across teams?" / "How do you use AI tools day to day?"

**Situation.** At Benevity I was a Senior Staff IC with no reports. I wanted two teams that didn't report to me to start using AI-assisted development seriously, not just as autocomplete.

**Task.** Change how people actually worked, with no mandate and no budget line.

**Action.** I started with three engineers who were already curious, because forcing it on sceptics first would have killed it. With them I built small internal demos that showed real time saved on real work, not toy examples. We ran informal lunch-and-learn sessions where the only rule was to bring an actual task. The prompt templates that worked went into a shared repo so nobody had to reinvent them, and I kept a running log of concrete wins, like a PR review cycle that went about two hours faster.

**Result.** Within three months around 70% of engineers on both teams were using AI-assisted review and generation, and I'd become the informal AI tooling lead for the org.

**Reflection.** Doing it without a mandate was slower, but it stuck, because the people who adopted it on their own terms became the ones selling it to everyone else. A top-down rollout would have got compliance, not habits. I'd add a lightweight way to measure the effect earlier; the anecdotes worked, but a growth team would rightly ask for more than that.

---

## 4. Joining a ten-times-bigger org after the acquisition

**Likely questions:** "Tell me about working with product, design and data." / "Describe a time you had to adapt to a new environment." / "Tell me about a mistake."

**Situation.** After the Benevity acquisition in 2021 I went from being one of the people who built everything at Alaya to a Senior Staff Engineer in an organisation roughly ten times bigger, with a Java microservices codebase and processes I didn't know.

**Task.** We had to bring Alaya's capabilities into Benevity's platform without losing the product speed customers had bought us for.

**Action.** Honestly, I started badly. In the first weeks I tried to fix things that weren't broken, mostly because they were different from how I'd have done them. Once I noticed I was creating friction, I spent about a month mapping the existing architecture and getting to know the platform and infrastructure teams before pushing any more opinions. That gave me enough context to act as the architecture go-between for the Europe-facing product surface, where I spent a lot of time translating between product needs and what the platform could realistically support.

**Result.** The core Alaya features were migrated into Benevity's platform, I contributed to three major cross-team architecture decisions, and that same trust is what later made the AI tooling work in story 3 possible.

**Reflection.** Listening first made me far more effective than being right early. It's the habit I'd bring to a growth team joining an existing product, where the core teams own the surfaces you're experimenting on.

---

## 5. To prepare before the interview: an agentic systems story

The posting asks directly for production agentic or LLM workflow experience and mentions Pydantic AI and Braintrust. The current story bank has no worked-through example of this, only the profile line about LLM integration, multi-agent workflows and semantic search with embeddings. Before the technical rounds, write one real story (this job-hunter pipeline is a candidate if nothing from Benevity fits) covering what the agents did, how you checked their output was correct, what failed, and what you'd evaluate differently with a proper eval tool. Don't improvise this one in the room.
