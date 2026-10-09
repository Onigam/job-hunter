# STAR+R Stories: Qonto, Staff Applied AI Engineer (AI Compliance Tooling)

Interview focus, based on the posting: production agentic systems (orchestration, state, structured outputs, evals, failure modes), backend system design, Staff-level trade-offs, scoping with stakeholders and no PM, end-to-end ownership, and learning a regulated domain.

---

## 1. Changing how engineers work, without authority

**Likely questions:** "How have you raised a team's AI capability?" / "Tell me about influencing without authority." / "How do you measure whether an AI tool actually helps?"

**Situation.** At Benevity I was a Senior Staff IC with no direct reports. I wanted two teams that didn't report to me to work with AI-assisted code review and generation, and nobody was going to mandate it for me.

**Task.** My job was to get adoption that would last, which meant the engineers had to see real value in their own work, not in a slide.

**Action.** I started small, with three engineers who were already curious. We built internal demos on real pull requests from our own codebase, because a generic demo convinces nobody. Then I ran informal lunch-and-learn sessions with no mandate attached, just working examples. The prompt templates that worked went into a shared repo where anyone could reuse or change them. When something saved time, I wrote it down with specifics; one review cycle got about two hours shorter, and that note travelled further than any presentation I gave.

**Result.** Within roughly three months, ~70% of engineers on both teams were using AI-assisted review and generation, and I'd become the informal AI tooling lead across the org.

**Reflection.** Going without a mandate was slower, but it stuck, because the people who adopted it on their own terms became its advocates. If I did it again I'd set a baseline before starting, review turnaround and rework rate, so the result would be a measured delta and not mostly anecdotes. That's the same thinking behind tracking acceptance and edit rates on your AFC agents: you need the numbers from day one, not once someone asks whether it works.

---

## 2. A hard architecture call under delivery pressure

**Likely questions:** "Tell me about a technical trade-off you made." / "When is quality non-negotiable?" / "How do you communicate trade-offs to non-engineers?"

**Situation.** At Alaya our monolith was starting to crack under load. Half the team wanted a full microservices rewrite, the other half wanted to stay put, and investors wanted features, not a rewrite.

**Task.** I needed a decision I could defend with data, one that kept us shipping while fixing the parts that were actually hurting.

**Action.** I ran a two-week spike comparing both approaches, with prototype load tests, so the debate would rest on numbers rather than taste. I took the trade-offs to the CTO and the investors in plain terms. What I proposed was a strangler-fig migration: pull out the two highest-traffic modules first and leave everything else in the monolith. We also wrote down clear criteria for when another module would earn extraction, so the same argument wouldn't come back every quarter.

**Result.** The first extracted module shipped in about six weeks, and the busiest endpoints got roughly 40% faster. The rest of the monolith stayed stable all the way through the acquisition, and we never needed a big-bang rewrite.

**Reflection.** The hardest part was persuading people that not rewriting everything was the right call. Data settled it, and I'd benchmark even earlier next time to shorten the debate. The habit carries over to agentic systems: start with the narrowest workflow that hurts most, define what "good enough to widen scope" means, and only then expand.

---

## 3. Building a platform from zero, with no one handing me requirements

**Likely questions:** "Tell me about owning something end to end." / "How do you scope an ambiguous problem without a PM?" / "What would you do differently?"

**Situation.** In 2016 I co-founded Alaya, a purpose and employee engagement platform. We had no product, no customers and no codebase.

**Task.** I had to architect and build the whole platform, alone at first and then with a small team, while the business was signing its first enterprise clients and their needs were still taking shape.

**Action.** I picked a pragmatic stack (Node.js, React, PostgreSQL) that could grow without over-engineering, and got the core features to a demo in about three months. From there we expanded in steps that followed what clients actually used: multi-tenant architecture, an API layer, impact reporting, postal campaigns. I hired and onboarded the first three engineers and put CI/CD, code review and architecture docs in place early, so quality didn't depend on me reviewing everything.

**Result.** The platform reached production with 50+ enterprise clients across Switzerland and France, and Benevity, a Canadian unicorn valued at over $1B, acquired Alaya in 2021.

**Reflection.** I'd have invested in observability much earlier; proper APM only arrived late, and we spent time guessing about problems we could have seen. I also underestimated what retrofitting multi-tenancy would cost. Both lessons apply directly to AI systems in production: if you can't see what the agent did and why, you can't operate it, and you certainly can't defend it to a compliance reviewer.

---

## 4. Joining a much larger org and learning before acting

**Likely questions:** "How do you ramp up in a domain you don't know?" (AFC is new to me) / "Tell me about cross-functional collaboration." / "Tell me about a time you got it wrong."

**Situation.** After the acquisition I joined Benevity as a Senior Staff Engineer on an organisation about ten times Alaya's size. The culture, the codebase (Java and microservices) and the processes were all different.

**Task.** I had to bring Alaya's capabilities into Benevity's platform while we kept shipping new features, without losing the speed we'd had as a startup.

**Action.** I spent the first month mapping the existing architecture before proposing changes, and I made a point of building relationships with the platform and infrastructure teams before pushing any technical opinion. Over time I became a cross-team architecture liaison for the Europe-facing product, and I pushed AI-augmented workflows across engineering.

**Result.** We migrated Alaya's core features into Benevity's platform. I contributed to three major cross-team architecture decisions, and I became the go-to person for AI tooling across two engineering teams.

**Reflection.** Early on I moved too fast and tried to fix things that weren't broken in the new org. Slowing down and listening made me far more effective. That's how I'd approach AFC: sit with investigators, watch how they handle a real case, and learn which steps they distrust before deciding what an agent should take over.

---

## Prep note: the "agent you shipped" question

The posting's first requirement is that you've shipped an AI agent or agentic workflow used by real users, and that you can explain its orchestration, tool use, state, structured outputs, evaluation, retries and failure modes. Expect a deep dive here, probably in the first technical round.

The story bank doesn't yet have a fully documented story for this. Before the interview, write a fifth story from your real multi-agent work (Claude CLI, OpenClaw, or this job-hunter pipeline itself, which runs searcher, matcher, report and application agents on a schedule). Be ready to answer, with real details only: who the users were, how agents hand off state, how you enforce and parse structured output, what happens when a step fails or a model returns something malformed, how you evaluate quality, and where a human approves. If the honest answer is that your users were engineers and not operations staff, say so plainly and explain what would change for AFC investigators.
