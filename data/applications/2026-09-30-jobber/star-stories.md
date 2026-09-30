# STAR+R Stories: Jobber, Principal Engineer (AI, Office of the CEO)

The posting asks for four things over and over: a founding engineer who builds from zero, someone who can get AI into other teams' real workflows, pragmatic build-vs-buy judgment, and someone who has seen AI fail in production. The stories below map to the first three. The fourth needs a real example from you (see the prep note at the end).

---

## 1. Building Alaya from a blank page to an acquisition

**Likely questions:** "Tell me about something you built from zero." "How do you handle ambiguity?" "What does being the founding engineer mean to you?"

**Situation.** In 2016 I cofounded Alaya, an employee purpose and engagement platform. There was no product, no code and no customers, and the business side was already talking to enterprise prospects who wanted to see something real.

**Task.** My job was to build the whole platform, alone at first, and to do it in a way that wouldn't collapse once real clients and a real team showed up.

**Action.** I picked a stack I knew would carry us without heroics: Node.js, React and PostgreSQL. The goal for the first three months was simply a demo we could put in front of a client, so I cut everything that didn't serve that. Once we had paying customers, I grew the product outward into a multi-tenant architecture, an API layer, impact reporting and postal campaigns. When we started hiring, I brought on the first three engineers and put the basics in place for them: CI/CD, code review as a habit rather than a gate, and short architecture docs that explained why things were the way they were.

**Result.** The platform ended up serving 50+ enterprise clients across Switzerland and France, and Benevity, a Canadian company valued above $1B, acquired Alaya in 2021. Their due diligence went through the codebase we'd built, so I take that as a fair verdict on the early technical calls.

**Reflection.** Two things I'd change. We added proper observability late, and I'd put it in from the first deploy now. I also underestimated how painful it is to retrofit multi-tenancy, and I'd design for it on day one. For Jobber that second lesson maps straight onto permissions: an internal AI system at a 1,000-person company needs access control designed in from the start, not bolted on after the first leak.

---

## 2. Getting two teams onto AI-assisted development without authority

**Likely questions:** "How do you influence without authority?" "How would you get teams to adopt AI tools?" "Tell me about embedding with a team to change how they work."

**Situation.** At Benevity I was a Senior Staff IC with no direct reports. I thought AI-assisted development could save engineers real time, but the two teams I wanted to reach didn't report to me and had no reason to change how they worked.

**Task.** Get those teams using AI tooling in their daily work, without a mandate and without turning it into a top-down initiative that people would quietly ignore.

**Action.** I started with three engineers who were already curious and worked alongside them on their actual tickets rather than toy examples. When something saved time, we wrote it down; one early note was about a PR review cycle that went roughly two hours faster. I ran informal lunch-and-learn sessions that were just live demos, no slides. The prompt templates that worked got committed to a shared repo so nobody had to start from scratch, and I kept the whole thing optional.

**Result.** Within about three months, around 70% of engineers on both teams were using AI-assisted code review and generation, and I became the informal go-to person for AI tooling across the org.

**Reflection.** Going without a mandate was slower, but it stuck, because the people who adopted it did it on their own terms and then argued for it with their peers. That's how I'd approach embedding with Jobber's teams too. Sit with them, pick one painful workflow, ship something that works in weeks, and let the results travel.

---

## 3. Choosing not to rewrite: the strangler fig decision at Alaya

**Likely questions:** "Tell me about a hard technical trade-off." "How do you make build-vs-buy or architecture calls?" "How do you explain a technical decision to executives?"

**Situation.** Alaya's monolith was starting to crack under load. Half the team wanted a full microservices rewrite, others wanted to keep the monolith and modularize it, and investors wanted new features, not a rewrite.

**Task.** Make a decision we could defend to both the engineers and the investors, one that fixed the scaling problem without stopping delivery.

**Action.** Rather than argue from opinion, I ran a two-week spike and prototyped both approaches, with load tests against each. I took the trade-offs to leadership and investors as numbers, not preferences. What I proposed was a strangler fig migration: pull out the two highest-traffic modules first, leave everything else in the monolith, and write down the criteria that would justify extracting anything more later.

**Result.** The first extracted module shipped in six weeks, and the busiest endpoints got about 40% faster. The rest of the monolith stayed stable all the way through the acquisition, and we never needed the big rewrite.

**Reflection.** The hard part wasn't technical. It was convincing people that not rewriting everything was the right call, and the data did most of that work. Next time I'd benchmark earlier and cut the debate shorter. This is how I'd run build-vs-buy at Jobber: a short, time-boxed proof of concept on real data, explicit criteria, and a written decision the CEO's office can revisit later.

---

## 4. Joining a much larger org after the acquisition

**Likely questions:** "Tell me about a time you had to adapt to a new environment." "How do you work with leadership and many teams at once?" "Tell me about a mistake."

**Situation.** After the acquisition in 2021 I joined Benevity as a Senior Staff Engineer. The organization was roughly ten times the size of Alaya, with a different culture, a Java microservices codebase and much heavier processes.

**Task.** Bring Alaya's capabilities into Benevity's platform and keep building new features, without losing the speed we'd had as a startup.

**Action.** Honestly, my first instinct was to start fixing things, and a few of the things I wanted to fix weren't actually broken. I corrected course by spending the first month mapping the existing architecture before proposing anything. I built relationships with the platform and infra teams before pushing opinions, and over time I became the architecture liaison for the Europe-facing product surface.

**Result.** We migrated Alaya's core features into Benevity's platform, I contributed to three major cross-team architecture decisions, and that trust is what later made the AI tooling work in story 2 possible.

**Reflection.** Listening first made me far more effective than being right early. In an Office of the CEO role, where you touch every team's workflow, I'd expect the same thing to matter even more: the first few weeks should be mostly listening and mapping, with one small, useful thing shipped to earn the right to do bigger ones.

---

## Prep note: the "AI failure in production" question

The posting explicitly wants someone who has seen AI go wrong in production. There isn't a story for this in the star bank yet, and it shouldn't be invented. Before the interview, write one real example from Benevity or from personal projects, in the same STAR+R shape: what the model or agent did wrong (hallucinated retrieval, a tool call with the wrong permissions, silent quality drift, runaway cost), how you noticed, what you changed (evals, guardrails, human review, narrower scope), and what you'd design differently now. Even a small, honest example will land better than a polished one.
