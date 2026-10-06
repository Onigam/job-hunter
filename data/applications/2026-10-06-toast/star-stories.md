# STAR+R Stories: Toast, Principal Software Engineer, AI Foundations

These stories are picked for the questions a Principal on an internal AI platform team is likely to get: getting engineers to adopt AI tooling, setting architecture direction, influencing teams you don't manage, building from zero, and hands-on agent work. Each one is short enough to tell in about two minutes.

---

## 1. Driving AI tooling adoption without authority

**Likely questions:** "How do you get engineers to adopt a platform they didn't ask for?" / "Tell me about influencing teams that don't report to you."

**Situation.** At Benevity I was a Senior Staff IC with no direct reports. Two teams that didn't report to me were still writing and reviewing code the old way, and I was convinced AI-assisted review and generation would save them real time.

**Task.** My job was to change how those engineers worked day to day, without a mandate and without being anyone's manager.

**Action.** Rather than pitching it to the whole org, I started with three engineers who were already curious and worked alongside them on their actual tickets. Once we had concrete wins, like a PR review cycle that went about two hours faster, I turned those into short demos at informal lunch sessions. The part that mattered most, I think, was committing reusable prompt templates to a shared repo so nobody had to start from a blank prompt. I wrote down what worked and what didn't, including the cases where the tooling produced confident nonsense, because engineers trust a tool more when you're honest about where it breaks.

**Result.** Within about three months, roughly 70% of engineers on both teams were using AI-assisted review and generation, and I ended up as the informal AI tooling lead across the org.

**Reflection.** Going mandate-free was slower, but it stuck. People who adopted it on their own terms became its advocates. For Toast's plugin marketplace I'd apply the same idea: the platform team ships the paved road and the shared templates, and the early adopters in each product team do most of the convincing.

---

## 2. A hard architecture decision under delivery pressure

**Likely questions:** "Tell me about a technical trade-off you made." / "How do you set technical direction when people disagree?"

**Situation.** At Alaya our monolith was starting to crack under load. The team was split between a full microservices rewrite and a modular monolith, and investors wanted features, not a rewrite.

**Task.** I had to make a decision we could defend, one that fixed the scaling problem without freezing delivery for months.

**Action.** I ran a two-week spike that prototyped both approaches and load-tested them, so the conversation could move from opinions to numbers. With those results I proposed a strangler-fig migration to the founders and investors: pull out the two highest-traffic modules first, leave everything else in the monolith, and write down explicit criteria for when any other module would earn its own service.

**Result.** The first extracted module shipped in about six weeks and the busiest endpoints got roughly 40% faster. The rest of the monolith stayed stable all the way through the acquisition, and we never needed a big-bang rewrite.

**Reflection.** The hard part wasn't technical. It was persuading people that not rewriting everything was the right call, and data did that far better than argument. I'd benchmark even earlier next time to shorten the debate. An LLM proxy has a similar shape: it's tempting to build every feature into it at once, when the better move is usually to get routing, keys and tracing right first and add the rest behind clear criteria.

---

## 3. Building Alaya from a blank page to acquisition

**Likely questions:** "Tell me about something you built from scratch." / "How do you handle ambiguity?"

**Situation.** In 2016 I co-founded Alaya, an employee purpose and engagement platform. There was no product, no customers and no team.

**Task.** I needed to design and build the whole platform, alone at first and then with a small team, while the business side was signing its first enterprise clients.

**Action.** I deliberately picked a boring stack (Node.js, React, PostgreSQL) that could grow without over-engineering, and got the core features to a demoable state in about three months. From there we expanded step by step into multi-tenancy, a proper API layer, impact reporting and postal campaigns. When I hired the first three engineers, I put CI/CD, code review habits and architecture docs in place early, so the platform's standards didn't depend on me being in every review.

**Result.** Alaya reached 50+ enterprise clients across Switzerland and France and was acquired by Benevity, a Canadian company valued above $1B, in 2021.

**Reflection.** Two things I'd change. Observability came too late; we added proper APM after we needed it. And retrofitting multi-tenancy cost more than designing for it from day one would have. Both lessons apply directly to an internal AI platform, where tracing and per-team isolation are much cheaper to build in than to bolt on.

---

## 4. Joining a much larger engineering org after the acquisition

**Likely questions:** "Tell me about a time you had to adapt to a new environment." / "How do you earn trust as a senior hire?"

**Situation.** After the acquisition I joined Benevity as Senior Staff Engineer. The organisation was about ten times the size of Alaya, ran on Java microservices, and had its own culture and processes.

**Task.** We had to integrate Alaya's capabilities into Benevity's platform and keep shipping new features at the pace our customers expected.

**Action.** I spent most of my first month mapping the existing architecture and asking questions before proposing changes. I built relationships with the platform and infrastructure teams early, so that when I did push a technical opinion, it came from someone they already knew. Over time I became the cross-team architecture contact for the Europe-facing product surface.

**Result.** We migrated Alaya's core features into the Benevity platform, I contributed to three major cross-team architecture decisions, and the AI tooling work in story 1 grew out of the trust built during that period.

**Reflection.** Early on I moved too fast trying to fix things that weren't actually broken. Listening first made me far more effective, and it's how I'd approach a Principal role at Toast: learn why the current proxy and key management look the way they do before redrawing them.

---

## 5. Building a scheduled multi-agent pipeline with Claude Code

**Likely questions:** "What have you built with agents yourself?" / "How do you make agent output reliable?"

**Situation.** Outside work I wanted to see how far Claude Code agents could go on a real, repetitive workflow, not a toy demo. I picked my own job search, which involves searching several sources, scoring offers against a profile and writing tailored documents every day.

**Task.** The goal was something that runs unattended on a schedule and produces output I'd actually use, without me checking every step.

**Action.** I split the work into specialised subagents (a searcher, a matcher that scores offers, a report builder and an application builder), each defined in its own instruction file with a narrow job. A GitHub Actions workflow runs the pipeline daily and commits the results to the repo, which gives me a full history to review. The hardest part was quality control. I wrote explicit, checkable rules into the instructions, such as word limits and banned phrases, and tightened permissions in the Claude Code settings so each agent could only use the tools it needed.

**Result.** The pipeline runs every day and produces a ranked report plus draft application packages, and I review and edit them instead of starting from scratch. I don't have a hard productivity number for it, but it's replaced what used to be a daily manual chore.

**Reflection.** The main lesson was that agents get much more reliable when their scope is narrow and their output rules can be checked by a machine. If I rebuilt it, I'd add proper tracing (Langfuse or similar) from the start so I could see which step drifted when output got worse. That's the same reason I think Toast's observability pipeline matters as much as the proxy itself.
