# STAR+R Stories: First Founding Engineer, Paris AI FP&A startup (via Stakha)

The process runs intro call, one-hour case study, GTM fit interview, half-day office visit, then references. The founders will mostly probe four things: can you own everything as the first engineer, do you make sound calls under ambiguity, will you build an AI-native engineering culture as the team grows, and can you work close to customers. These four stories cover that ground. All facts come from the story bank; nothing here should be stretched in the room.

---

## 1. Building Alaya from a blank page to acquisition

**Likely questions:** "Tell me about something you built from scratch." "Why do you want to be the first engineer again?" "How do you deal with ambiguity?"

**Situation.** In 2016 I co-founded Alaya, an employee purpose and impact platform. There was no product, no customer and no code, just a business cofounder who was already talking to enterprise prospects.

**Task.** My job was to build the whole platform, first on my own and then with a small team, while the business side was signing the first clients. Every week I had to decide what was worth building properly and what could stay rough.

**Action.** I picked a stack I knew would hold up without a lot of ceremony: Node.js, React and PostgreSQL. The first three months went into getting to a demo that real buyers could click through, which meant saying no to plenty of things I'd have liked to build. Once clients were live, the platform grew in layers, with multi-tenancy, an API, impact reporting for clients and eventually postal campaigns. When I hired the first three engineers, I set up CI/CD, code review and short architecture docs early, because I knew I wouldn't be able to hold the whole system in my head for long.

**Result.** We reached 50+ enterprise clients across Switzerland and France, and Benevity, a Canadian unicorn valued above $1B, acquired Alaya in 2021. Their diligence was, in a way, the first outside review of the technical decisions I'd made from day one.

**Reflection.** Two things I'd change. Observability came too late; we added proper APM well after we needed it. And retrofitting multi-tenancy cost more than designing for it upfront would have. For an FP&A product holding several companies' financials, I'd treat tenant isolation and audit trails as day-zero concerns, not features to add later.

---

## 2. Choosing a strangler fig over a rewrite

**Likely questions:** "Tell me about a hard technical trade-off." "How do you balance shipping features with technical debt?" Also a useful frame for the case study.

**Situation.** A few years into Alaya, the monolith was starting to crack on our busiest endpoints. The team was split between a full move to microservices and keeping a modular monolith, while investors wanted new features rather than a rewrite.

**Task.** I needed a decision I could defend on both sides: one that fixed the scaling problem without stopping delivery for months.

**Action.** Rather than settle it in a meeting, I ran a two-week spike that prototyped both approaches and load-tested them. I brought the numbers to the leadership team and the investors instead of opinions. The proposal was a strangler fig migration: pull out the two highest-traffic modules first, leave everything else in the monolith, and write down clear criteria for when any further module would earn its own service.

**Result.** The first extracted module shipped in six weeks, and the busiest endpoints got around 40% faster. The rest of the monolith stayed stable all the way through the acquisition, and we never needed the big-bang rewrite.

**Reflection.** The hardest part was persuading people that not rewriting everything was the ambitious choice. Data ended the argument, so these days I benchmark earlier and keep the debate shorter. It's the same instinct I'd bring to agent infrastructure: start with the smallest orchestration layer that's safe, and only add pieces when a real failure points at the need.

---

## 3. Getting two teams onto AI-assisted development without authority

**Likely questions:** "How do you work with Claude Code or Cursor?" "How would you set up AI-assisted practices as we hire?" "Tell me about influencing without authority."

**Situation.** At Benevity I was a Senior Staff IC with no reports. I wanted two teams that didn't report to me to start using AI-assisted code review and generation, and nobody had asked me to do it.

**Task.** Change how engineers actually worked day to day, without a mandate and without turning it into a top-down initiative people would quietly ignore.

**Action.** I started with three engineers who were already curious and worked with them until the tooling clearly saved time. From there it was demos of real work rather than slides, informal lunch-and-learn sessions, and a shared repo of prompt templates people could copy and adapt. Whenever something saved real time, like a PR review cycle that went about two hours faster, I wrote it down so the evidence came from colleagues instead of from me.

**Result.** Within three months, about 70% of engineers on both teams were using AI-assisted review and generation, and I ended up as the informal AI tooling lead across the org.

**Reflection.** Going without a mandate was slower, but it stuck, because the early adopters did the persuading. At a startup with two or three engineers it's a different exercise: you write the conventions in from day one (CLAUDE.md files, review rules for AI-written code, tests that agents have to pass) instead of retrofitting them. I build that way today, including multi-agent workflows on my own projects with Claude Code.

---

## 4. Listening before changing things after the Benevity acquisition

**Likely questions:** "Tell me about a mistake you made." "How do you handle a lot of change?" "How do you work with people who see things differently?" Good for the GTM fit interview too, since it's about listening first.

**Situation.** After the acquisition in 2021, I joined a Benevity engineering organisation roughly ten times bigger than Alaya, with a Java microservices codebase, different processes and a different culture.

**Task.** Bring Alaya's capabilities into Benevity's platform and keep shipping new features, without losing the speed we'd had as a startup.

**Action.** My first instinct was to fix the things that looked wrong to me, and I pushed a few changes too quickly. I caught that early and changed approach. I spent most of the first month mapping how the existing architecture worked and why, and built relationships with the platform and infrastructure teams before I argued for anything. After that I became the architecture liaison for the Europe-facing part of the product.

**Result.** We migrated Alaya's core features into Benevity's platform, I contributed to three major cross-team architecture decisions, and I became the person both teams went to on AI tooling.

**Reflection.** Some of what looked broken was there for good reasons I hadn't understood yet. The same applies to customers. A CFO's spreadsheet looks messy from the outside, but every odd tab usually encodes a real business rule, and an autonomous onboarding agent has to learn those rules rather than flatten them.

---

## Questions to prepare honestly

**"Why finance? You haven't worked in it."** True, and say so. The honest angle is that Alaya sold impact reporting that clients showed their own leadership, so I know what it's like when a number has to hold up in front of executives. Then show curiosity: ask what breaks most often during onboarding, which reconciliation checks customers trust, and where the agents are allowed to act versus suggest.

**"Why Paris, when you live in Geneva?"** Decide your answer before the first call (relocation, or a weekly in-office pattern), because the posting says in-office by default and they'll ask.
