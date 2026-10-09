# STAR+R Stories: Talan, Agentic SDLC Transformation Lead

Role context: the job blends a CTO posture (convince and rally engineering teams) with hands-on work (PoCs, pilots, reusable templates) and governance (traceability, security, TokenOps). Expect questions on driving adoption without a mandate, managing resistance, scaling a pilot, and making architecture calls that hold up under scrutiny. Talan is a consulting group, so also expect "how would you do this at a client who didn't ask for it?"

---

## 1. Getting two teams to adopt AI-assisted development without authority over them

**Likely questions:** "Tell me about a transformation you drove." / "How do you win over sceptical engineers?" / "How do you take a pilot to scale?"

**Situation.** At Benevity I was a Senior Staff IC with no direct reports. The two teams I worked with most were shipping fine without AI tooling, and nobody had asked them to change how they worked.

**Task.** I wanted AI-assisted review and code generation to become a normal part of their workflow, which meant changing habits in teams that didn't report to me.

**Action.** Rather than push a policy, I found three engineers who were already curious and worked with them first. We built small internal demos on real tickets so the time savings were visible on code people recognised, not on toy examples. Once those worked, I ran informal lunch sessions with no attendance expectation, and I put the prompt templates we'd refined into a shared repo so anyone could pick them up and improve them. When something saved real time, like a PR review cycle that came in about two hours shorter, I wrote it down and shared it, because a concrete example from a colleague carried more weight than anything I could say.

**Result.** Within roughly three months, about 70% of engineers on both teams were using AI-assisted review and generation, and I ended up as the informal AI tooling lead across the org.

**Reflection.** Going mandate-free was slower at the start but it stuck, because the early adopters became the advocates. What I'd add today is governance from week one: shared rules on what generated code needs before merge, and some tracking of model usage. For this role that's the part I'd formalise, since the Talan framework has to survive in client teams where I won't be in the room.

---

## 2. Building Alaya's platform from a blank page to acquisition

**Likely questions:** "Tell me about something you built from scratch." / "How do you handle ambiguity?" / "Show us the CTO posture."

**Situation.** In 2016 I co-founded Alaya, an employee purpose and impact platform. There was no product, no customers and no team yet, while the business side was already talking to its first enterprise prospects.

**Task.** As Head of Technologies I had to design and build the platform, first alone and then with a small team, fast enough to support early sales without painting us into a corner.

**Action.** I picked a stack I knew could stretch, Node.js, React and PostgreSQL, and resisted the temptation to over-engineer before we had users. We got to a first demo in around three months. From there the platform grew in layers: multi-tenancy, an API layer, impact reporting, postal campaigns. When I hired the first three engineers, I put CI/CD, code review and architecture docs in place early, because I knew I couldn't be the bottleneck on every decision for long.

**Result.** The platform ran in production for 50+ enterprise clients across Switzerland and France, and Benevity, a Canadian company valued above $1B, acquired Alaya in 2021.

**Reflection.** I'd have invested in observability much earlier; proper APM came late. And retrofitting multi-tenancy cost us more than designing for it up front would have. Both lessons map onto agentic SDLC work: decide what you need to trace and isolate before the first pilot, not after the tenth.

---

## 3. Integrating into a much larger engineering org after the acquisition

**Likely questions:** "Tell me about leading through change." / "How do you work with an organisation that resists you?" / "How would you land at a new client?"

**Situation.** After the acquisition I joined Benevity as a Senior Staff Engineer. The engineering org was around ten times the size of Alaya's, with a Java and microservices codebase, different processes and its own culture.

**Task.** I needed to bring Alaya's capabilities into Benevity's platform while keeping up delivery on new features.

**Action.** My first instinct was to start fixing things, and I did push too early on a few points that weren't actually broken. I corrected course and spent the first month mostly mapping the architecture and talking to the platform and infra teams before arguing for any change. Once people knew I'd done the homework, my proposals got a fairer hearing. Over time I became the architecture liaison for the Europe-facing product surface, which put me in the middle of cross-team decisions.

**Result.** The core Alaya features were migrated into Benevity's platform, I contributed to three major cross-team architecture decisions, and the AI tooling work in story 1 grew out of the trust built here.

**Reflection.** Listening first made me more effective, not slower. That's directly relevant to a consulting setting: walking into a client's engineering team with a framework before understanding their SDLC is the fastest way to lose them.

---

## 4. Choosing a strangler-fig migration over a full rewrite

**Likely questions:** "Tell me about a technical trade-off under pressure." / "How do you convince leadership with data?" / "How do you govern a risky change?"

**Situation.** At Alaya our monolith was starting to crack under load. The team was split between a full microservices rewrite and a modular monolith, and investors wanted features, not a rewrite.

**Task.** I had to make a call we could defend on both fronts, long-term scalability and near-term delivery.

**Action.** I ran a two-week spike that prototyped both approaches and load-tested them, so the debate could move from opinions to numbers. I took the trade-offs to the leadership team and investors with those metrics. The proposal was a strangler-fig migration: pull out the two highest-traffic modules first, leave the rest alone, and agree in advance on the criteria that would justify extracting anything else.

**Result.** The first extracted module shipped in about six weeks, latency on the busiest endpoints improved by roughly 40%, and the remaining monolith stayed stable through the acquisition. We never needed a big-bang rewrite.

**Reflection.** The hardest part was persuading people that not rewriting everything was the right answer, and data did most of the work. I'd benchmark earlier next time to shorten the argument. The same pattern applies to agentic SDLC rollout: start with one or two workflows where the gain is measurable, set explicit criteria for expanding, and avoid announcing an organisation-wide switch.

---

## Gap prep (not a STAR story, have an honest answer ready)

**TokenOps / FinOps for AI.** I haven't run token cost governance as a formal programme. Honest framing: my day-to-day multi-agent work (Claude CLI, OpenClaw) has made me very aware of where context size and agent loops drive consumption, and I'd treat TokenOps like any FinOps practice, with per-team budgets, cost per workflow, and model routing rules reviewed alongside quality metrics. Say it plainly rather than overclaim.

**Large-scale transformation across client organisations.** My transformation experience is inside product companies, not across consulting clients. Lean on story 1 (adoption without authority) and story 3 (landing in an unfamiliar org) as the transferable proof.
