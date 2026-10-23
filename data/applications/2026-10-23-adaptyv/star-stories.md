# STAR+R Stories: Adaptyv, Head of Software Engineering

The posting is a player-coach role: own the roadmap, decide what gets built or cancelled, set architecture across frontend, backend, data pipelines and lab hardware, hire the team, and turn AI-assisted development into a speed advantage. These four stories map to those themes. Each one is written to be told out loud in about two minutes.

---

## 1. Building the platform and the first team from nothing (Alaya)

**Likely questions:** "Tell me about something you built from scratch." / "How have you hired and set the bar for an early team?" / "What does founder mindset mean to you?"

**Situation.** In 2016 I cofounded Alaya, an employee purpose and impact platform. There was no product, no customer and no code. The business side was already talking to enterprise prospects, so the clock started on day one.

**Task.** My job was the whole technical side: pick a stack, build something we could demo, then turn it into a platform that real companies would trust with their employees' data. Once that worked, I had to hire people and give them a way of working that would survive without me reviewing every line.

**Action.** I chose a boring, pragmatic stack (Node.js, React, PostgreSQL) because I'd be the only engineer for a while and I needed to move without fighting the tools. The core features were demo-ready in about three months. From there I grew it piece by piece: an API layer, multi-tenancy, impact reporting, and later postal campaigns, which was the one feature where software had to drive something physical. When we could afford it, I hired the first three engineers. Before they arrived I set up CI/CD, a code review habit and short architecture docs, mostly so that new people could make decisions without asking me first.

**Result.** The platform went to production and reached 50+ enterprise clients across Switzerland and France. Benevity, a Canadian company valued at over $1B, acquired Alaya in 2021, which I took as a fair validation of the technical choices we'd made early on.

**Reflection.** Two things I'd change. We added proper observability far too late, and I'd now treat it as day-one infrastructure; for a lab where instruments fail in creative ways, that matters even more. I also underestimated how painful it is to retrofit multi-tenancy, so today I design for it from the start whenever outside users are on the roadmap.

---

## 2. Choosing not to rewrite (roadmap trade-off under pressure)

**Likely questions:** "Tell me about a hard technical trade-off." / "How do you decide what to build, defer or cancel?" / "How do you handle tech debt when the business wants features?"

**Situation.** A few years into Alaya, our monolith was starting to crack under load. Part of the team wanted a full microservices rewrite. Investors, meanwhile, wanted new features and had no appetite for a quarter spent rebuilding what already existed.

**Task.** I had to make a call I could defend to both sides, one that fixed the scaling problem without freezing product work.

**Action.** Rather than settle it in a meeting, I ran a two-week spike and prototyped both approaches with load tests, so the conversation could be about numbers instead of taste. The data pointed to a middle path. I proposed a strangler-fig migration: pull out the two highest-traffic modules, leave everything else in the monolith, and write down explicit criteria for when another module would earn its own service. Then I presented the trade-offs to the CTO and the investors with the benchmark results in front of them, and led the extraction myself.

**Result.** The first extracted module shipped in six weeks. The busiest endpoints got roughly 40% faster. The rest of the monolith stayed stable all the way through the acquisition, and we never needed a big-bang rewrite. Just as important, we cancelled the rewrite cleanly, so nobody kept half-working on it in the background.

**Reflection.** The engineering was the easy part; convincing people that "not rewriting everything" was the ambitious choice took longer. I'd benchmark earlier next time to shorten the debate. For Adaptyv I'd apply the same rule: define the criteria for promoting something (a new instrument integration, a new pipeline stage) before the argument starts.

---

## 3. Making AI-assisted development stick without a mandate (Benevity)

**Likely questions:** "How do you use AI coding tools, and how do they change a team?" / "How do you influence people who don't report to you?" / "How would you turn AI into a speed advantage here?"

**Situation.** At Benevity I was a Senior Staff IC with no direct reports. I was convinced AI-assisted development could save the teams real time, but the two teams I worked with didn't report to me, and plenty of engineers were sceptical, some for good reasons.

**Task.** I wanted them to change how they actually worked day to day, not just sit through a presentation.

**Action.** I started small, with three engineers who were already curious. Together we built internal demos on real tickets from our backlog, because toy examples convince nobody. I ran informal lunch-and-learn sessions with no mandate attached and put reusable prompt templates in a shared repo so people could start from something that worked. When a change saved real time, like a PR review cycle that came in about two hours shorter, I wrote it down and shared it. I also listened to the sceptics, and some of their objections (hallucinated APIs, review fatigue) became rules in the templates.

**Result.** Within three months, roughly 70% of the engineers on both teams were using AI-assisted review and code generation. I became the informal AI tooling lead across the org. Since then I've pushed it much further in my own work, and today I run multi-agent workflows with Claude CLI where agents draft, test and review while I direct and decide.

**Reflection.** The mandate-free approach was slower but stickier, because the people who adopted it on their own terms became its advocates. The lesson I'd bring to a small team is that AI makes writing code cheap and reviewing it expensive. The speed advantage comes from investing in tests, clear specs and good context for the agents, otherwise you just move the bottleneck to the reviewer.

---

## 4. Joining a bigger organisation and slowing down first (post-acquisition)

**Likely questions:** "Tell me about a mistake you made." / "How do you handle joining an existing team with its own way of doing things?" / "How would you approach your first 90 days here?"

**Situation.** After the acquisition in 2021 I joined Benevity as a Senior Staff Engineer. The organisation was about ten times the size of Alaya, the codebase was mostly Java microservices, and the processes and culture were different from what I'd built.

**Task.** We had to move Alaya's capabilities into Benevity's platform and keep shipping new features while doing it.

**Action.** Honestly, I started badly. In the first weeks I tried to fix things that weren't broken, because they didn't match how I'd have done them. When I saw that it wasn't landing, I changed approach. I spent a month mapping the existing architecture before proposing anything, and built relationships with the platform and infrastructure teams before pushing technical opinions. Over time I became the cross-team architecture liaison for the European product surface.

**Result.** The core Alaya features were migrated into Benevity's platform. I contributed to three major cross-team architecture decisions and became the go-to person for AI tooling across two engineering teams.

**Reflection.** Listening first made me far more effective than being right early. At Adaptyv I'd be the new person walking into a lab that already runs, with a team that knows the instruments better than I do. My first weeks would go to understanding how an experiment actually flows from order to data, and only then to changing the roadmap.

---

## Gaps to address openly

**Biology.** I don't have a background, and the posting says that's fine. Before any interview, read the EGFR competition write-up (bioRxiv, 2025) and Adaptyv's Substack, and be ready to explain in plain words what a binding assay measures.

**Formal management.** At Alaya I hired and led the first engineers; at Benevity I led without reports. If asked about performance management or difficult conversations, be honest about scale and talk about how you'd set the quality bar for a team of four to eight.

**Lab hardware.** No direct experience. The closest is three years of set-top box software at Sagemcom and the postal-campaign integration at Alaya. Frame it as respect for systems that fail physically, and ask good questions about their device orchestration layer.
