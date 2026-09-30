# STAR+R Stories: Google Cloud, Staff Forward Deployed Engineer (GenAI)

The posting keeps coming back to four things: taking prototypes into production inside a customer's messy infrastructure, leading technical discovery with stakeholders, spotting repeatable patterns and sending them back to product, and mentoring or influencing across functions. Google interviews for this track also include "Googleyness" and leadership questions, so expect at least one story about influence without authority and one about a call you got wrong.

The stories below come from the story bank. Story 5 is a prep note, because the posting asks for something the bank doesn't cover yet.

---

## 1. Building Alaya from a blank page to an acquisition

**Likely questions:** "Tell me about taking something from zero to production." "How do you handle ambiguity?" "Walk me through a system you owned end to end."

**Situation.** In 2016 I cofounded Alaya, an employee purpose and engagement platform. We had no product, no code and no customers, and the business side was already talking to enterprise prospects who wanted to see something working.

**Task.** I had to build the whole platform, alone at first, and do it in a way that wouldn't fall apart once real clients and a real team showed up.

**Action.** I picked a stack I knew would carry us without heroics: Node.js, React and PostgreSQL. For the first three months the only goal was a demo we could put in front of a client, so anything that didn't serve that got cut. Once we had paying customers, the product grew outward into a multi-tenant architecture, an API layer, impact reporting and postal campaigns. When we started hiring, I brought on the first three engineers and set up the basics for them: CI/CD, code review as a habit rather than a gate, and short architecture docs explaining why things were built the way they were.

**Result.** The platform ended up serving 50+ enterprise clients across Switzerland and France. Benevity, a Canadian company valued above $1B, acquired Alaya in 2021, and their technical due diligence went through the codebase we'd built. I take that as a fair verdict on the early calls.

**Reflection.** We added proper observability late, and I'd put it in from the first deploy now. Multi-tenancy was the other lesson; retrofitting it hurt more than I expected. Both matter for this role. An agent running in a customer's production environment without traces and evals is a demo, not a deployment, and tenant isolation is the first question any enterprise security team will ask.

---

## 2. Getting two teams onto AI-assisted development without authority

**Likely questions:** "How do you influence people who don't report to you?" "Tell me about driving adoption of a new technology." "How do you mentor engineers?"

**Situation.** At Benevity I was a Senior Staff IC with no direct reports. I was convinced AI-assisted development could save engineers real time, but the two teams I wanted to reach didn't report to me and had no particular reason to change how they worked.

**Task.** Get those teams using AI tooling in their daily work without a mandate, and without turning it into a top-down initiative people would quietly ignore.

**Action.** I started small, with three engineers who were already curious. We tried things on their actual work, and I built a few internal demos that showed time saved on real tasks rather than toy examples. From there I ran informal lunch-and-learn sessions, no attendance expected, just demos and questions. The prompt templates that worked went into a shared repo so nobody had to start from scratch, and I wrote down concrete results as they came in, like a PR review cycle that dropped by about two hours.

**Result.** Within three months, about 70% of the engineers on both teams were using AI-assisted code review and generation. I ended up as the informal AI tooling lead across the org, which wasn't a title anyone gave me.

**Reflection.** Going without a mandate was slower, but it stuck. The engineers who adopted on their own terms became the ones who argued for it in meetings I wasn't in. That's close to what an FDE does inside a customer: you have no authority over their engineers, so the work has to earn its own adoption.

---

## 3. A hard architecture call under delivery pressure

**Likely questions:** "Tell me about a technical trade-off you made." "How do you decide when to rebuild versus extend?" "How do you take a system from prototype to production?"

**Situation.** At Alaya our monolith was starting to crack under load. The team was split between a full microservices rewrite and a modular monolith, and our investors wanted new features, not a rewrite.

**Task.** Make a call I could defend, one that fixed the scaling problem without stalling delivery.

**Action.** Rather than argue it out in meetings, I ran a two-week spike and load-tested prototypes of both approaches. The trade-offs went to leadership and our investors as numbers, not opinions. What I proposed was a strangler fig migration: pull out the two highest-traffic modules first, leave everything else in the monolith, and agree in advance on the criteria that would justify extracting anything more.

**Result.** The first extracted module shipped in six weeks, and performance on the busiest endpoints improved by roughly 40%. The rest of the monolith stayed stable all the way through the acquisition. We never needed the big rewrite.

**Reflection.** The hardest part wasn't technical. It was convincing people that not rewriting everything was the right answer, and the benchmarks did most of that work. I'd benchmark even earlier now to shorten the debate. The same instinct applies to customer AI work: the prototype that impressed the exec sponsor usually shouldn't be thrown away, but it needs a clear path to production with explicit criteria for what gets hardened first.

---

## 4. Joining a much larger org after the acquisition

**Likely questions:** "Tell me about working in an unfamiliar environment." "How do you ramp up on someone else's codebase?" "Tell me about a time you were wrong."

**Situation.** After Benevity acquired Alaya in 2021, I joined as a Senior Staff Engineer in an engineering org roughly ten times our size. The codebase was different (Java and microservices), the culture was different, and so were the processes.

**Task.** Bring Alaya's capabilities into Benevity's platform while still shipping new features, and without losing the speed we'd had as a startup.

**Action.** Early on I pushed too hard to change things that, it turned out, weren't broken. Once I saw that, I changed approach. I spent the first stretch mapping the existing architecture before proposing anything, and built relationships with the platform and infrastructure teams before offering technical opinions. Over time I became the architecture contact between teams for the Europe-facing product surface.

**Result.** The core Alaya features were migrated into Benevity's platform. I contributed to three major cross-team architecture decisions, and people started coming to me for AI tooling questions across two engineering teams.

**Reflection.** Listening first made me far more effective than being right early. For a forward-deployed role this is almost the whole job during discovery: every customer has an architecture that looks odd from the outside and made sense to someone at the time, and you won't get their engineers on your side until you understand why.

---

## 5. Prep note: technical discovery with a customer

The posting lists "leading technical discovery with stakeholders to define AI infrastructure requirements" as a minimum qualification, and interviewers will probe it. The story bank doesn't have a story for it yet.

Good candidates from your history: an Alaya enterprise client where you ran the technical scoping yourself (integration, SSO, data export, security questionnaire), or a Benevity project where you gathered requirements from product and other teams before designing an LLM or semantic search feature. Pick one where the customer's first ask was not what they actually needed, since that's the story Google will want to hear.

Write it in the same STAR+R shape, with real details only: who the stakeholders were, what they asked for, what you found, what got built, and what you'd do differently. Add a second one if you have an example of an AI feature that failed or underperformed in production, since evaluation and observability are core to this role.
