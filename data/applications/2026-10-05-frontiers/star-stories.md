# STAR+R Stories: Frontiers, Senior AI Platform Engineer (FrontiersOS)

These are picked for what the posting asks for most: integrating into existing systems instead of replacing them, building with reliability in mind from the start, getting people outside engineering to adopt AI tooling, and picking up an unfamiliar domain quickly. Each one is about two minutes when spoken.

---

## 1. Integrating without a rewrite (the FrontiersOS philosophy)

**Likely question:** "Tell me about a technical trade-off you made under pressure." / "How do you evolve a system that's already in production?"

**Situation.** At Alaya, the monolith I'd built in the early days was starting to crack under load, and the team was split between a full microservices rewrite and keeping things as they were. Investors wanted new features, not a rewrite, and they weren't wrong to.

**Task.** My job was to make a call we could defend on both fronts: something that fixed the scaling problems without freezing the roadmap for six months.

**Action.** Rather than argue it out in meetings, I ran a two-week spike that prototyped both approaches and load-tested them. When I took the results to the rest of the leadership and our investors, the conversation was about numbers, which made it a lot shorter. What I proposed was a strangler fig migration. We'd pull out the two highest-traffic modules first and leave everything else in the monolith, and we wrote down clear criteria for when another module would earn its own extraction, so the question didn't get reopened every sprint.

**Result.** The first extracted module shipped in about six weeks, and the busiest endpoints got roughly 40% faster. The rest of the monolith stayed stable all the way through the acquisition, and we never needed the big-bang rewrite.

**Reflection.** Convincing people that not rewriting everything was the right call took more effort than the engineering did. It's the same instinct I see in FrontiersOS: wrap the systems that work, put new capability around them, and only replace what earns it. I'd benchmark even earlier next time, because the data ended the debate and I could have had it sooner.

---

## 2. Getting people to adopt AI tooling without a mandate

**Likely question:** "How do you influence without authority?" / "How would you get business users building their own agents?"

**Situation.** At Benevity I was a Senior Staff IC with no direct reports. I wanted two engineering teams, neither of which reported to me, to start using AI-assisted development as part of their normal workflow.

**Task.** Change how people worked day to day, with no authority to tell them to.

**Action.** I started small, with three engineers who were already curious. With them I built internal demos that showed real time saved on real tasks, not toy examples. From there it was informal lunch-and-learn sessions with no attendance expectation, just live demos and questions. The prompt templates that kept working went into a shared repo so nobody had to start from scratch, and I wrote up concrete wins as they happened, like a PR review cycle that came in about two hours shorter.

**Result.** Within about three months, roughly 70% of the engineers on both teams were using AI-assisted review and generation. I ended up as the informal AI tooling lead across the org, which wasn't a title anyone gave me.

**Reflection.** Going without a mandate was slower, but it stuck. The people who adopted the tools on their own terms became the ones advocating for them, which a top-down rollout wouldn't have produced. For FrontiersOS I'd expect the same pattern with business users: give a few motivated people something safe and useful, make their results visible, and let it spread. The difference is that guardrails matter more when the person building the agent isn't an engineer, so permissions and review would need to be part of the platform rather than left to good habits.

---

## 3. Building from zero, and what I'd do differently on reliability

**Likely question:** "Tell me about something you owned end to end." / "How do you think about observability and SLOs?"

**Situation.** In 2016 I co-founded Alaya, an employee purpose and impact platform. We had no product and no customers, and for a while I was the only engineer.

**Task.** Architect and build the whole platform while the business side was signing its first enterprise clients, then grow a team around it.

**Action.** I went with a stack I knew would hold up without being over-engineered: Node.js, React, PostgreSQL. The core features were ready to demo within about three months. After that I expanded in the order customers pulled us, which meant multi-tenancy, an API layer, impact reporting and postal campaigns. When we hired, I brought on the first three engineers and set up the basics that let a small team move fast without breaking things: CI/CD, code review as a habit, and architecture docs people actually read.

**Result.** The platform went into production with more than 50 enterprise clients across Switzerland and France, and Benevity acquired Alaya in 2021.

**Reflection.** Two things I'd change. We added proper APM late, and for a stretch we were finding out about problems from customers before our own tooling told us. I also underestimated how expensive it would be to retrofit multi-tenancy. Both lessons apply directly here, since the posting asks for SLOs, observability and governance from the start. On an agent platform that means tracing every LLM call and tool invocation from day one, and designing identity and permission boundaries before the first agent touches Salesforce, not after.

---

## 4. Joining a much bigger org and learning a new domain fast

**Likely question:** "Tell me about a time you had to learn an unfamiliar domain quickly." / "How do you work across departments?"

**Situation.** After the acquisition in 2021 I joined Benevity as a Senior Staff Engineer. The engineering org was about ten times the size of Alaya's, with a different culture, a different codebase built on Java microservices, and processes I didn't know yet.

**Task.** Bring Alaya's capabilities into Benevity's platform while we kept shipping new features, and do it without losing the speed we'd had as a startup.

**Action.** I spent the first month mapping the existing architecture before I proposed changing anything. Most of my early energy went into getting to know the platform and infrastructure teams, because I needed their trust before my technical opinions would count for much. Over time I became the cross-team architecture liaison for the Europe-facing side of the product, and that's also where the AI tooling work in story 2 started.

**Result.** We migrated Alaya's core features into Benevity's platform. I contributed to three major cross-team architecture decisions and became the person two engineering teams came to for AI tooling.

**Reflection.** Honestly, I moved too fast at first and tried to fix things that weren't broken. Once I slowed down and listened, I got a lot more done. Frontiers would be a new domain for me, open-access publishing and peer review, and I'd approach it the same way: sit with editorial and operations people first, understand which parts of their day are repetitive and which need judgment, and only then decide where an agent belongs.

---

## Questions to prepare without a banked story

The posting asks about a few things that don't have a matching story in the bank yet. Prepare honest answers from real experience rather than inventing one.

**"When do you trust AI-generated code, and when do you dig deeper?"** Answer from daily practice: anything touching auth, permissions, data deletion or money gets a line-by-line review regardless of who or what wrote it, and generated code that looks plausible but untested is the most dangerous kind.

**"Walk me through an incident you handled."** Pick a real production incident from Alaya or Benevity and tell it with this structure. If the honest version includes the late APM from story 3, use it.

**"Durable workflow orchestration?"** Be upfront that it's the least familiar piece of their stack, and connect it to what you do know: queues, retries, idempotency, and why long-running agent tasks need state that survives a crash.
