# STAR+R Stories: AI Architect / AI Engineering Lead (via Jobgether)

The client isn't named. The posting is a fully remote contract, Switzerland-based, for someone to lead the design of production multi-agent systems that support the whole SDLC: requirements, coding, testing, code review and CI/CD. Named tools are LangGraph, LangChain, Claude, Claude Code, GitHub Copilot and Azure, with Java/Spring Boot plus React/TypeScript as the application stack. Healthcare and claims adjudication experience is "preferred", which points to an insurer, a claims processor or a health-tech vendor. Ask the Jobgether recruiter who the end client is and whether you'd be contracting through them or directly.

Expect two kinds of questions: "how do you get engineers to actually trust and use agents" and "how do you make an agentic system safe enough for a regulated domain". The stories below cover the first well. For the second, you'll be reasoning from architecture experience rather than a past claims project, so say that clearly.

**Honest gaps to prepare for.** First, healthcare and claims adjudication: you haven't worked in that domain. Second, Azure: your cloud background is mostly AWS. Third, your recent Java exposure is the Benevity codebase, not day-to-day Spring Boot authoring. Don't stretch any of these. The useful answer is what transfers (multi-tenant enterprise systems with per-client rules, audit-minded architecture, years across Java-based stacks from Sagemcom onward) and how fast you'd close the gap.

---

## 1. Getting two teams to adopt AI tooling without a mandate

**Likely questions:** "How have you introduced AI into an engineering workflow?" "How do you drive best practices across teams?" "How do you influence people who don't report to you?"

**Situation.** At Benevity I was a Senior Staff Engineer with no direct reports. I was convinced AI-assisted development would save real time on code review and routine generation, but the two teams I wanted to bring along didn't report to me, and plenty of engineers there were sceptical of anything that wrote code for them.

**Task.** Get those engineers using AI tooling as part of how they worked every day, not just sitting through a talk about it, and do it without anyone ordering them to.

**Action.** I started with three engineers who were already curious and built demos around their own tickets, so the time saved showed up on work they recognised instead of on toy examples. After that came informal lunch and learn sessions, all demos, no slides about the future of engineering. What made it stick was putting reusable prompt templates into a shared repo, so nobody had to start from a blank prompt and the good patterns spread on their own. I also wrote down specific wins as they happened, like a PR review cycle that came in about two hours shorter, because a concrete story travels further than a percentage.

**Result.** Within roughly three months, about 70% of the engineers on both teams were using AI-assisted review and generation. I ended up as the informal AI tooling lead across the org, without that ever being a formal title.

**Reflection.** Going mandate-free was slower, but it stuck, because the people who adopted it on their own terms became its advocates. For this role I'd add something we didn't have then: measuring agent output quality systematically (review acceptance rates, defects traced back to generated code) rather than relying on anecdotes. In a claims context you'd need that evidence before anyone lets an agent near production.

---

## 2. Choosing incremental extraction over a rewrite

**Likely questions:** "Tell me about an architecture decision you made under uncertainty." "How do you balance delivery pressure with technical quality?" "How would you roll out agents into an existing SDLC?"

**Situation.** At Alaya our monolith was starting to crack under load. Half the team wanted a full microservices rewrite, and our investors wanted new features, not a rewrite of anything.

**Task.** Make a call we could defend on both fronts: keep the platform scaling without freezing the roadmap for months.

**Action.** I ran a two-week spike comparing a full split against a modular approach, with prototype load tests on both, and took the numbers to the CTO and investors instead of opinions. My proposal was a strangler fig migration: pull out the two highest-traffic modules first, leave everything else in the monolith, and agree on written criteria for when the next module would earn its own service.

**Result.** The first extracted module shipped in about six weeks, and the busiest endpoints got around 40% faster. The remaining monolith stayed stable all the way through the acquisition, and we never needed a big-bang rewrite.

**Reflection.** The hard part wasn't technical; it was convincing people that not rewriting everything was the right answer, and the data did most of that work. It's the same pattern I'd use for agents in an SDLC. Start with one or two steps where the payoff is clear and the blast radius is small, say test generation or first-pass review, set explicit criteria for widening their scope, and keep a human sign-off wherever a mistake would be expensive.

---

## 3. Joining a much larger engineering org after the acquisition

**Likely questions:** "How do you work across engineering, DevOps and cloud teams?" "Tell me about adapting to an unfamiliar codebase." "How would you approach your first month here?"

**Situation.** After Benevity acquired Alaya in 2021, I joined an engineering org about ten times our size. The codebase was Java and microservices, the processes were heavier, and nobody there owed me anything.

**Task.** Get Alaya's capabilities integrated into Benevity's platform while we kept shipping new features, without losing the speed we'd built as a startup.

**Action.** I spent most of the first month mapping the existing architecture and asking questions before proposing anything. I put time into the platform and infrastructure teams early, so that by the time I had technical opinions they knew who I was and why I held them. Over time I became the cross-team architecture contact for the Europe-facing product surface, which meant a lot of translating between teams with different priorities.

**Result.** The core Alaya features were migrated into Benevity's platform, and I contributed to three major cross-team architecture decisions. That groundwork is also what later made the AI tooling adoption possible.

**Reflection.** I moved too fast at first and tried to fix things that weren't actually broken. Slowing down to listen made me far more effective. As a contractor coming into an undisclosed client's environment, I'd lean on that lesson hard, since the first weeks are about understanding their claims workflow and their compliance constraints, not about shipping a clever agent.

---

## 4. Building Alaya's platform from zero

**Likely questions:** "Tell me about something you built end to end." "How do you handle ambiguity?" "What does 'production-grade' mean to you?"

**Situation.** In 2016 I co-founded Alaya, an employee purpose and engagement platform. There was no product, no customers and no team.

**Task.** Design and build the whole platform, alone at first and later with a small team, while the business was signing its first enterprise clients.

**Action.** I picked a pragmatic stack, Node.js, React and PostgreSQL, that could grow without over-engineering it on day one, and got the core features to a demo in about three months. From there we added a multi-tenant architecture, an API layer and impact reporting as clients asked for them. When I hired the first three engineers, I put CI/CD, code review and architecture docs in place before we strictly needed them, because retrofitting that culture later is much harder.

**Result.** The platform went live with 50+ enterprise clients across Switzerland and France, and Benevity, a Canadian unicorn valued above $1B, acquired us in 2021.

**Reflection.** I'd add observability much earlier; we only brought in proper APM late. I also underestimated how painful it is to retrofit multi-tenancy. Both lessons apply directly to agentic systems: if you can't trace what an agent did and why, from the first prototype, you won't be able to explain a decision to an auditor later, and in claims adjudication that's not optional.

---

## Questions worth asking them

Who is the end client, and is the contract through Jobgether, an agency or direct? Which SDLC steps do they want agents in first, and is any of it already running? What's the human-in-the-loop policy for agent-generated code and for anything that touches claims decisions? How do they evaluate agent output today, if at all? Is the Azure footprint Azure OpenAI only, or are Claude models accessed through another route? How long is the initial contract, and is there a path to a permanent role?
