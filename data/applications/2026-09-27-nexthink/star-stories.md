# STAR+R Stories: Nexthink, Senior AI Engineer

Nexthink's AI team ships Spark, an autonomous IT agent sitting on top of real-time DEX telemetry. Expect questions on production AI judgment (evaluation, regressions, cost), influencing without authority (the role mentors juniors and sets standards), B2B/enterprise system design, and how you work with product. The stories below are chosen for that mix.

Honest gap to prepare for: the posting asks for ML fundamentals and fine-tuning. My experience is LLM integration, embeddings, semantic search and multi-agent workflows, not model training. Don't stretch a story to cover it. Say so plainly and talk about how you'd decide whether fine-tuning is even the right call versus retrieval or better evals.

---

## Story 1: Getting two teams to adopt AI-assisted engineering without a mandate

**Likely questions:** "How do you set engineering standards?" / "Tell me about mentoring or influencing without authority." / "How do you drive adoption of a new AI practice?"

**Situation.** At Benevity I was a Senior Staff IC with no direct reports. Two engineering teams that didn't report to me were writing code the way they always had, and I was convinced AI-assisted review and generation would save them real time, but nobody had asked me to change anything.

**Task.** Get those teams using AI tooling in their day-to-day work, in a way that would stick after I stopped pushing.

**Action.** I didn't start with a proposal. I found three engineers who were already curious and worked with them directly, building small internal demos on their actual code so the time savings were visible rather than theoretical. Once we had a few concrete examples (one PR review cycle went about two hours faster), I ran informal lunch-and-learns, no attendance expected. The prompt templates we'd refined went into a shared repo so people could copy them instead of reinventing them, and I wrote down what worked and what didn't, including the cases where the tooling produced confident nonsense.

**Result.** Within about three months, roughly 70% of engineers on both teams were using AI-assisted review and generation. I ended up as the informal AI tooling lead across the org, which nobody had planned.

**Reflection.** It was slower than a top-down rollout would've been, but it stuck, because the people who adopted it chose to and then defended it to their colleagues. For the mentoring side of this Nexthink role, I'd do the same thing: pair on real work first, write the standard down second.

---

## Story 2: A hard architecture call under delivery pressure

**Likely questions:** "Tell me about a technical trade-off you made." / "How do you decide between building it properly and shipping it now?" / "How do you use data to settle a technical debate?"

**Situation.** At Alaya our monolith was starting to crack under load on a few busy endpoints. Half the team wanted a full microservices rewrite. Investors wanted features, not a rewrite, and they weren't wrong to.

**Task.** Make a call we could defend on both fronts: fix the scaling problem without stopping delivery for months.

**Action.** Rather than argue it out, I ran a two-week spike, prototyping both approaches and load-testing them against our real traffic patterns. Then I took the numbers, not opinions, to the leadership team and investors. My recommendation was a strangler-fig migration: pull out the two highest-traffic modules, leave everything else in the monolith, and agree up front on the criteria that would justify extracting anything more.

**Result.** The first extracted module shipped in about six weeks. The busiest endpoints got roughly 40% faster. The rest of the monolith stayed stable right through the acquisition, and we never needed the big-bang rewrite.

**Reflection.** The hard part was social, not technical: convincing people that not rewriting everything was the right answer. Benchmarking earlier would've cut the debate short. It's the same instinct I'd bring to AI work at Nexthink, where "fine-tune a model" versus "improve retrieval" versus "tighten the eval" is exactly this kind of debate, and a quick, honest experiment usually settles it faster than a meeting.

---

## Story 3: Building Alaya from a blank page to acquisition

**Likely questions:** "Tell me about something you built end to end." / "How do you handle ambiguity?" / "Tell me about designing an enterprise B2B system."

**Situation.** In 2016 I cofounded Alaya, an employee purpose and engagement platform. There was no product, no customers and no code, and the business side was already trying to sign enterprise clients.

**Task.** Design and build the whole platform, alone at first and then with a small team, quickly enough to demo and solidly enough that large companies would trust it with their employees' data.

**Action.** I went with a boring, scalable stack (Node.js, React, PostgreSQL) and got the core features to a demo in about three months. From there it grew in the order customers needed it: multi-tenancy, a proper API layer, impact reporting, postal campaigns. When we could afford to hire, I brought on the first three engineers and put in the basics that let a team move without breaking things, meaning CI/CD, real code review and architecture docs someone would actually read.

**Result.** The platform ran in production for 50+ enterprise clients across Switzerland and France. Benevity, a Canadian unicorn valued above $1B, acquired Alaya in 2021, which was a fairly direct test of whether those early technical calls held up.

**Reflection.** I added proper observability far too late, and retrofitting multi-tenancy cost more than designing for it from day one would have. Both lessons carry straight into AI systems: if you can't see what the agent did and why, in production, per tenant, you can't evaluate it and you can't trust it.

---

## Story 4: Joining a much bigger organisation after the acquisition

**Likely questions:** "Tell me about working across teams." / "How do you get up to speed in an unfamiliar codebase?" / "Tell me about a time you had to change your approach."

**Situation.** After the acquisition I joined Benevity as a Senior Staff Engineer. The engineering org was about ten times Alaya's size, with a Java microservices codebase, different processes and a different culture.

**Task.** Bring Alaya's capabilities into Benevity's platform while keeping up the product pace we'd had as a startup.

**Action.** My first instinct was to start fixing things, and a few early suggestions landed badly because I hadn't understood why things were the way they were. So I slowed down. I spent the first month mapping the existing architecture before proposing changes, and put time into relationships with the platform and infrastructure teams before pushing any technical opinions. After that I took on the role of cross-team architecture liaison for the Europe-facing product surface.

**Result.** The core Alaya features were migrated into Benevity's platform. I contributed to three major cross-team architecture decisions, and later became the person people came to for AI tooling (see Story 1).

**Reflection.** Listening first made me more effective, not less. Nexthink's AI team sits between a mature DEX platform and product teams with their own priorities, so I'd expect to spend my first weeks the same way, learning how Infinity's data actually flows before telling anyone how Spark should use it.

---

## Prep notes for the technical questions around these stories

These aren't stories, just things to have ready so the conversation doesn't stall:

- **Evaluation.** How you'd build a regression suite for an agent: a fixed set of real (anonymised) cases, graded both automatically and by humans, run on every prompt, model or tool change. Track resolution rate, wrong-action rate and cost per resolution, not just "accuracy".
- **Safe remediation.** Tiering actions by blast radius (read-only diagnostics, reversible fixes, anything needing IT approval) and making the tier a property of the tool, not something the model decides.
- **Cost and latency.** Routing easy intents to smaller models, caching, and cutting context size before reaching for a bigger model.
- **Fine-tuning.** Be straight that it's not hands-on experience. Talk about when you'd reach for it (stable, high-volume, narrow task where retrieval and prompting have plateaued on the eval) and when you wouldn't.
