# STAR+R Stories: Lead Engineer, AI Platform (undisclosed company via Jobgether)

The role is about evaluation, observability and diagnostics for production agents, plus running the AI Quality team. Expect questions on how you measure that something works, how you debug systems you didn't write, and how you lead while staying hands-on. These stories come from `profile/star-bank.md` and are angled toward those questions. Fill in real details where the notes say so; don't add numbers you can't back up.

---

## 1. Building Alaya from zero, and what I'd measure earlier next time

**Likely questions:** "Tell me about something you built and owned end to end." / "How do you make sure a system is reliable in production?" / "What would you do differently?"

**Situation.** In 2016 I co-founded Alaya, a purpose and employee engagement platform. There was no product, no customers and no codebase, just a business that was about to start signing enterprise clients.

**Task.** As Head of Technologies, I had to design and build the whole platform, alone at first, then with a team, while sales was already promising features to the first enterprise accounts.

**Action.** I went with a stack I knew could carry us without heavy engineering overhead (Node.js, React, PostgreSQL) and got to a demo-able core in about three months. After that it was iteration driven by what clients actually used: multi-tenancy, an API layer, impact reporting, postal campaigns. When the work outgrew me, I hired and onboarded the first three engineers, and put CI/CD, code review and written architecture notes in place so they weren't relying on my memory.

**Result.** The platform went to production with 50+ enterprise clients across Switzerland and France, and in 2021 Benevity, a Canadian unicorn valued above $1B, acquired Alaya.

**Reflection.** The thing I'd change is observability. We added proper APM late, which meant that for a long stretch we found problems because a client told us, not because we saw them first. That's a big part of why this role appeals to me: with agents the gap is even wider, because a run can "succeed" and still be wrong. I'd also design for multi-tenancy from day one; retrofitting it cost us more than doing it up front would have.

---

## 2. Choosing an architecture with data instead of opinions

**Likely questions:** "Tell me about a technical trade-off." / "How do you decide what to build when people disagree?" / "How do you prove a change made things better?"

**Situation.** At Alaya, the monolith was starting to crack under load. Half the team wanted a full microservices rewrite, the other half wanted to keep going, and our investors wanted new features, not a rewrite.

**Task.** I needed a decision I could defend to engineers and investors alike, one that fixed the scaling problem without freezing delivery.

**Action.** Rather than argue it out, I ran a two-week spike: prototypes of both approaches, put under load tests that mirrored our real traffic. I took the numbers, not my preference, to the leadership and investors. What came out of it was a strangler fig approach where we extracted the two highest-traffic modules first and left everything else in the monolith. I also wrote down explicit criteria for when another module would be worth extracting, so the next decision wouldn't need another debate.

**Result.** The first extracted module shipped in about six weeks, and the busiest endpoints got roughly 40% faster. The rest of the monolith stayed stable all the way through the acquisition, and we never needed a big-bang rewrite.

**Reflection.** The data ended the argument, but I started benchmarking too late. If I'd had the measurement in place before the debate started, we'd have saved a couple of weeks of opinions. It's the same instinct I'd bring to agent work: before arguing about a prompt or a model swap, get a baseline and a scorer you trust, then let the comparison decide.

---

## 3. Getting two teams to change how they work, without authority

**Likely questions:** "How do you influence people who don't report to you?" / "Tell me about driving adoption of a new tool or practice." / "How did you know it worked?"

**Situation.** At Benevity I was a Senior Staff IC with no direct reports. I wanted two engineering teams that didn't report to me to adopt AI-assisted code review and generation.

**Task.** Change daily habits across both teams, with no mandate, and show the change was worth it.

**Action.** I didn't start with a rollout plan. I found three engineers who were already curious and worked with them first. We built small internal demos around real tasks, and I put reusable prompt templates in a shared repo so nobody had to start from scratch. Lunch-and-learn sessions did the rest, all demos and no slides. Whenever someone saved real time, like a PR review cycle that came in about two hours shorter, I wrote it down, because concrete examples convinced people more than anything I said.

**Result.** Within about three months, roughly 70% of the engineers on both teams were using AI-assisted review and generation, and I ended up as the informal AI tooling lead across the org.

**Reflection.** Going without a mandate was slower, but it lasted longer, because the people who adopted it on their own terms became its advocates. If I did it again, I'd set up a proper before/after measurement from week one instead of collecting anecdotes. Anecdotes got people started, but they wouldn't have held up if someone had challenged the investment.

---

## 4. Joining a much bigger org after the acquisition

**Likely questions:** "Tell me about working in a distributed team." / "How do you get up to speed on a system you didn't build?" / "Tell me about a mistake."

**Situation.** After the acquisition in 2021, I joined Benevity as a Senior Staff Engineer. The org was about ten times Alaya's size, ran Java microservices instead of our Node stack, and spread across Europe and North America, with processes and habits that were all new to me.

**Task.** Bring Alaya's capabilities into Benevity's platform while still shipping new work, without losing the speed we'd had as a startup.

**Action.** I got this wrong at first. I came in proposing fixes to things that weren't actually broken, just different. Once I saw that wasn't landing, I spent about a month mapping the architecture and talking to the platform and infra teams before pushing any opinions. That gave me enough context, and enough trust, to become the architecture liaison for the Europe-facing product surface, working asynchronously with teams across time zones.

**Result.** Core Alaya features were migrated into Benevity's platform, and I contributed to three major cross-team architecture decisions.

**Reflection.** Listen first, then propose. It's directly relevant to a role where the job includes investigating failures in agent workflows owned by other AI teams: findings only turn into priorities if those teams trust that you understand their system before you tell them what's wrong with it.

---

## 5. Building my own multi-agent workflows (fill in before the interview)

**Likely questions:** "Tell me about a tool-using agent system you've built." / "How did you measure whether it was reliable?" / "Walk me through a failure you debugged."

This is the question the posting cares about most, and the story bank doesn't cover it yet. Draft it from real work with Claude CLI and OpenClaw, in prose, using this shape.

**Situation.** What the workflow did and why it existed (which part of the engineering work it replaced or accelerated).

**Task.** What "working" meant: what output was acceptable, and who or what judged it.

**Action.** How the agents were split (planner, sub-agents, tools), how context was structured and passed between them, where a human checkpoint sat. Then one specific failure: what went wrong (bad plan, wrong tool, context drift across turns), how you found it, and what you changed.

**Result.** Only numbers you can stand behind: time saved per task, share of runs needing a human fix, anything you tracked. If you didn't measure it formally, say so.

**Reflection.** What you'd do with a proper eval setup (datasets of real tasks, scorers per step, trajectory-level checks in CI) that you couldn't do with ad hoc checks. This is the bridge to the role, so be honest that Braintrust or LangSmith would be new and explain how you'd approach them.

---

## Gap questions to prepare for

**"Have you built evaluation infrastructure for ML/AI systems before?"** Be straight: not as a dedicated platform. Point to the measurement-first habit in stories 2 and 3 and the personal agent work in story 5, then describe how you'd build a first eval suite for a multi-tool agent.

**"Do you know Rails?"** No. Python is solid, and you've moved between Java, GWT, Node and Python across your career. Give one example of ramping up fast (the Java microservices stack at Benevity).

**"How much people management have you done?"** Hiring and onboarding Alaya's first engineers and running the team as co-founder, then leading without authority at Benevity. Say clearly that you want to keep writing code while leading.
