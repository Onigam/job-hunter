# STAR+R Stories: Principal Engineer / Engineering Lead, Agentic AI (NWS Management AG, Zurich client)

Picked for a role with CTO-level scope, hands-on coding, and a heavy focus on production reliability for agent systems. Expect the interview to probe ownership, architecture trade-offs, quality discipline, and how you set standards in a small team.

---

## 1. Owning the whole technical core, from zero to acquisition

**Likely questions:** "Tell me about a time you owned a technical platform end to end." / "How do you handle ambiguity?" / "Why would you be credible with CTO-level scope?"

**Situation.** In 2016 I co-founded Alaya, an employee purpose and impact platform. There was no product, no customers, and no codebase, just a business that was already talking to its first enterprise prospects.

**Task.** My job was to design and build the whole platform, alone at first, then with a team, fast enough that sales had something real to demo without painting us into a corner technically.

**Action.** I went with a stack I knew could carry us for years without heroics: Node.js, React and PostgreSQL. The first demoable version took about three months. After that it was a steady expansion, with multi-tenancy, an API layer, impact reporting and postal campaigns coming in as clients asked for them. When it was time to grow, I hired and onboarded the first three engineers and put the basics in place early, so CI/CD, code review as a habit, and architecture docs that people actually read.

**Result.** The platform ran in production for 50+ enterprise clients across Switzerland and France, and Alaya was acquired by Benevity, a Canadian unicorn valued above $1B, in 2021. The architecture held up through technical due diligence, which was the part I cared about most.

**Reflection.** Observability came far too late; we added proper APM once problems were already hurting. Multi-tenancy was also more expensive to retrofit than I'd guessed. For an agent platform, I'd treat both as day-zero concerns: tenant isolation and full tracing of every agent run from the first deploy, because you can't debug what you didn't record.

---

## 2. A hard architecture call under delivery pressure

**Likely questions:** "Walk me through a technical trade-off you made." / "How do you decide when to rewrite?" / "How do you convince non-technical stakeholders?"

**Situation.** At Alaya, the monolith was starting to crack under load. Half the team wanted a full microservices rewrite, the other half wanted to keep going as is, and investors wanted features, not a rewrite.

**Task.** I needed a decision we could defend, one that fixed the scaling problems without freezing delivery for months.

**Action.** Rather than argue it out, I ran a two-week spike and load-tested prototypes of both directions. Then I took the trade-offs to the CTO and our investors with numbers instead of opinions. What I proposed was a strangler-fig migration: pull out the two highest-traffic modules first, leave everything else in the monolith, and write down explicit criteria for when any further module deserved to be extracted.

**Result.** The first extracted module shipped in six weeks, and response times on the busiest endpoints improved by roughly 40%. The rest of the monolith stayed stable all the way through the acquisition, and we never needed a big-bang rewrite.

**Reflection.** The hardest part wasn't technical; it was convincing people that not rewriting everything was the right move. Data ended that debate, and I'd benchmark earlier next time to shorten it. The same instinct applies to agent systems: resist rebuilding the orchestration layer around every new framework, and let evals tell you where the real weaknesses are.

---

## 3. Setting engineering standards without a mandate

**Likely questions:** "How do you raise the bar for a team?" / "Tell me about influencing without authority." / "How would you set standards in a small, senior team?"

**Situation.** At Benevity I was a Senior Staff IC with no direct reports. I wanted two engineering teams that didn't report to me to start using AI-assisted development in their daily work.

**Task.** Change how people actually worked, not just get a policy approved, and do it without being anyone's manager.

**Action.** I started small, with three engineers who were already curious. We built internal demos around real tasks from our own backlog so the time savings were obvious rather than theoretical. From there it was informal lunch-and-learn sessions with no mandate attached, plus reusable prompt templates committed to a shared repo so nobody had to start from scratch. I also wrote up concrete wins as they happened, like a PR review cycle that dropped by about two hours.

**Result.** Within three months, around 70% of engineers on both teams were using AI-assisted review and code generation, and I ended up as the informal AI tooling lead across the org.

**Reflection.** Going without a mandate was slower, but it stuck, because the people who adopted it on their own terms became its advocates. In a small team where I'd own standards formally, I'd still lead with working examples first and write the rule down second.

---

## 4. Joining a much larger org after acquisition

**Likely questions:** "Tell me about navigating a big change." / "How do you work with founders or leadership you didn't choose?" / "How do you earn trust in a new team?"

**Situation.** After the acquisition in 2021 I joined Benevity as a Senior Staff Engineer. The engineering org was about ten times the size of Alaya, with a different culture, a Java microservices codebase, and processes I didn't know.

**Task.** I had to fold Alaya's capabilities into Benevity's platform and keep shipping new features, without losing the speed we'd had as a startup.

**Action.** For the first month I mostly mapped the existing architecture and listened before proposing anything. I built relationships with the platform and infra teams before pushing technical opinions, which made later conversations far easier. Over time I became the cross-team architecture contact for the Europe-facing product surface, and I pushed AI-augmented workflows into the teams I worked with.

**Result.** Alaya's core features were migrated into Benevity's platform. I contributed to three major cross-team architecture decisions and became the go-to person for AI tooling on two teams.

**Reflection.** Early on I moved too fast trying to fix things that weren't broken. Slowing down and listening made me more effective. Joining a small founder-led team is the opposite situation, but the lesson carries: understand why things are the way they are before you change them.

---

## Prep notes for the technical rounds

The posting is explicit that it wants production agent experience, "not chat wrappers", and Azure depth. Be honest on both. My cloud work has been mostly AWS; frame Azure as a translation of known patterns (identity, networking, managed containers, queues, observability) and show you've already read up on Azure AI Foundry and its agent tooling before the call. On agents, talk about how you'd make a multi-agent system trustworthy enough to deliver finished work: offline eval sets built from real client processes, regression suites that run on every prompt or model change, tracing of each agent step, human approval gates at the points where a mistake is expensive, and MCP-style connectors kept behind clear permission boundaries. Tie it back to the Alaya observability lesson in story 1.
