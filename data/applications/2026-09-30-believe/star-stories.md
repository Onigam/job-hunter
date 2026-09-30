# STAR+R Stories: Believe, Staff Engineer Agentic AI (Core Engineering, Paris)

The posting keeps returning to three ideas. The first is building a shared agentic framework (orchestration, retrieval, tool calling, human-in-the-loop). The second is making AI measurable with golden datasets, evals, regression suites and telemetry. The third is influence without authority, so that other squads ship on the framework without Core Engineering doing the work for them. Expect questions on all three, plus at least one on a call you got wrong.

Stories 1 to 4 come from the story bank. Story 5 is a prep note, because the posting asks for production eval work that the bank doesn't cover yet.

---

## 1. Getting two teams onto AI-assisted development without authority

**Likely questions:** "How do you influence people who don't report to you?" "How would you get squads to adopt a platform they didn't ask for?" "How do you mentor engineers?"

**Situation.** At Benevity I was a Senior Staff IC with no direct reports. I was convinced AI-assisted development could save engineers real time, but the two teams I wanted to reach didn't report to me and had no particular reason to change how they worked.

**Task.** Change daily habits across both teams without a mandate, and without it turning into one more tool people installed and ignored.

**Action.** I didn't pitch it to everyone. I found three engineers who were already curious and worked with them on their actual tickets, so any time saved was on their own code rather than a toy example. Once we had a few real cases, like a PR review cycle that went about two hours faster, I started doing informal lunch demos. There was no slide deck, just a live session on a real branch. The prompts that worked went into a shared repo as templates so nobody had to start from scratch, and I wrote up the results in plain numbers because that's what the skeptics wanted to see.

**Result.** Within about three months, roughly 70% of engineers on both teams were using AI-assisted review and generation. I ended up as the informal AI tooling lead across the org, which nobody had assigned.

**Reflection.** Going without a mandate was slower, but the adoption stuck, because the early adopters argued for it better than I could have. That's the model I'd use for Believe's framework: find one squad with a real use case, ship their first agent with them, and let that squad explain it to the next one. Year-one success in the posting is "squads ship independently", and a decree won't get you there.

---

## 2. Building Alaya from a blank page to an acquisition

**Likely questions:** "Tell me about a system you owned end to end." "How do you handle ambiguity?" "How do you decide what to build first?"

**Situation.** In 2016 I cofounded Alaya, an employee purpose and engagement platform. We had no product, no code and no customers, and the business side was already talking to enterprise prospects who wanted to see something working.

**Task.** I had to build the whole platform, alone at first, and do it in a way that wouldn't fall apart once real clients and a real team showed up.

**Action.** I picked a stack I knew would carry us without heroics: Node.js, React and PostgreSQL. For the first three months the only goal was a demo we could put in front of a client, and anything that didn't serve it got cut. With paying customers, the product grew outward into a multi-tenant architecture, an API layer, impact reporting and postal campaigns. When we started hiring, I brought on the first three engineers and set up the basics for them: CI/CD, code review as a habit rather than a gate, and short architecture docs explaining why things were built the way they were.

**Result.** The platform ended up serving 50+ enterprise clients across Switzerland and France. Benevity, a Canadian company valued above $1B, acquired Alaya in 2021, and their technical due diligence went through the codebase we'd built.

**Reflection.** We added proper observability late, and I'd put it in from the first deploy now. Multi-tenancy was the other lesson, since retrofitting it hurt more than I expected. Both carry straight over to an agent framework. Without traces, token costs and eval scores per run, you can't tell a squad whether their agent got better or worse. And isolation between squads, for their data, tools and budgets, is far cheaper to design in than to bolt on later.

---

## 3. Choosing a strangler fig over a rewrite

**Likely questions:** "Tell me about a technical trade-off under pressure." "How do you set architecture standards?" "How do you handle tech debt when the business wants features?"

**Situation.** At Alaya the monolith was starting to crack under load. The team was split between a full microservices rewrite and a modular monolith, while investors wanted new features, not a rewrite.

**Task.** Make a call we could defend on both sides: one that would hold up technically and not stall delivery.

**Action.** Rather than argue it in meetings, I ran a two-week spike and prototyped both approaches, with load tests on the endpoints that actually hurt. The numbers went to the leadership team and investors as trade-offs, not opinions. What I proposed was a strangler fig: pull out the two highest-traffic modules first and leave the rest alone. The part I'm proudest of is that we also wrote down the criteria for extracting anything else, so the next decision wouldn't need another debate.

**Result.** The first extracted module shipped in about six weeks, and the busiest endpoints got roughly 40% faster. The remaining monolith stayed stable all the way through the acquisition, and nobody had to do a big-bang rewrite.

**Reflection.** The hard part wasn't technical. It was convincing people that not rewriting everything was the right answer, and data did most of that work. For Believe the same instinct applies to the framework itself. I wouldn't start with a grand multi-agent platform. I'd start with the smallest orchestration and tool-calling layer that the first two squads actually need, and write down explicit criteria for when something gets promoted into the shared framework.

---

## 4. Joining a much larger org after the acquisition

**Likely questions:** "Tell me about working across many teams." "How do you get up to speed in a large, unfamiliar system?" "Tell me about a mistake."

**Situation.** After the acquisition in 2021, I joined Benevity as a Senior Staff Engineer. The engineering org was about ten times Alaya's size, with a different culture, a Java and microservices codebase, and processes I didn't know.

**Task.** Get Alaya's capabilities into Benevity's platform while we kept shipping, and without losing the speed we'd had as a small team.

**Action.** My first instinct was to fix things quickly, and I pushed a couple of changes before I really understood why the existing design looked the way it did. That didn't land well. So I stopped, spent the next few weeks mapping the architecture and talking to the platform and infra teams, and only brought proposals once I could explain the constraints in their terms. Over time I became the architecture contact for the Europe-facing product surface.

**Result.** The core Alaya features migrated into Benevity's platform. I contributed to three major cross-team architecture decisions and became the person teams came to for AI tooling.

**Reflection.** Listening first made me far more effective than being right early. Believe's Core Engineering sits across 50+ countries and a stack that includes Java, Kafka, Snowflake and GCP, and I'd come in without GCP production experience. I'd spend the first month learning how squads actually use Kafka and n8n today before proposing any standard for agents.

---

## 5. Prep note: evaluation and measurable AI (fill in before the interview)

**Likely questions:** "How do you know an agent is working?" "How would you build an eval suite for a retrieval pipeline?" "How do you catch drift or cost regressions?"

The story bank doesn't have a production eval story yet, and the posting weighs this heavily: golden datasets, regression suites, telemetry, cost profiles, drift detection, model routing. Don't invent one. Pick a real piece of LLM, semantic search or multi-agent work from Benevity (or from personal projects, including this job-hunting pipeline, which is itself a multi-agent workflow) and write it up in STAR+R form. Aim to cover how you decided what "correct" meant, how you built the reference set, what you measured on every change, and one case where the measurement caught something a demo wouldn't have.

If the real example is thin, say so, and move to how you'd do it at Believe. A reasonable answer: start each squad's agent with a small golden set built from real requests (a few hundred, labelled with the domain team rather than for them). Run it in CI as a regression suite, so a prompt or model change can't merge if quality drops past a set threshold. Log traces, latency and token cost per step in production, and review a sample of live runs every week against the golden set so drift shows up before users report it. Model routing comes after that, once you've got cost profiles telling you where a cheaper model is good enough.
