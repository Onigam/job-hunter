# STAR+R Stories: Senior Software Engineer, Agentic Risk & Posture (Check Point Software, Zurich)

These four stories are picked for what the posting stresses: building or leading a team while still owning core tech, finding pragmatic answers to open-ended problems, being comfortable with ambiguity in an early-stage unit, and having some credibility on AI agents. The Agentic Risk & Posture team came out of the Lakera acquisition, so it's effectively a startup sitting inside a large public company. Story 3 speaks directly to that.

---

## Story 1: Building Alaya from a blank page to acquisition

**Likely questions:** "Tell me about building something from scratch." / "How do you handle ambiguity?" / "Have you built a team while staying hands-on?"

**Situation.** In 2016 I co-founded Alaya, an employee purpose and impact platform. There was no product, no customers and no codebase, just a business side that was already talking to its first enterprise prospects.

**Task.** My job was to build the whole platform, alone at first, and then grow a team without slowing delivery down. Enterprise clients were coming in while the foundations were still being poured.

**Action.** I went with a deliberately boring stack, Node.js, React and PostgreSQL, because the risk was in the product rather than the technology and I didn't want to spend novelty points on infrastructure. Within about three months we had enough for a first real demo. From there I grew the platform piece by piece: multi-tenancy, an API layer, impact reporting, then postal campaigns once clients asked for them. When I hired the first three engineers I put CI/CD, code review and lightweight architecture docs in place early, mostly so I wouldn't become the bottleneck on every decision. I kept writing core code the whole time, which helped me notice where the team was getting stuck before anyone flagged it.

**Result.** Alaya reached 50+ enterprise clients across Switzerland and France, and Benevity, a Canadian company valued above $1B, acquired us in 2021. Their technical due diligence went through the decisions we'd made from day one, and those decisions held up.

**Reflection.** Two things I'd change. Observability came too late; we added proper APM well after we needed it, and some incidents took longer to diagnose than they should have. Multi-tenancy was also retrofitted rather than designed in, and that cost more than I expected. For agent posture work I'd treat the equivalent concerns, tenant isolation and visibility into what the scanners are actually doing, as day-zero requirements.

---

## Story 2: The rewrite we didn't do

**Likely questions:** "Tell me about a technical trade-off under pressure." / "How do you balance scalable design with shipping fast?" / "Describe an open-ended problem you solved pragmatically."

**Situation.** Alaya's monolith was starting to crack under load on a few endpoints. Part of the team wanted a full microservices rewrite. Investors wanted features, not a rewrite, and they had a point.

**Task.** I needed a decision we could defend on both fronts: something that would fix the scaling problem without freezing the roadmap for months.

**Action.** Rather than settle it in a meeting, I ran a two-week spike and prototyped both directions with load tests against realistic traffic. The data showed most of the pain came from two modules. So I proposed a strangler-fig migration: pull out those two high-traffic modules, leave everything else in the monolith, and write down explicit criteria for when any other module would earn its own extraction. I presented the trade-offs to leadership and investors with the numbers in front of them, which ended the debate a lot faster than opinions had.

**Result.** The first extracted module shipped in six weeks, and performance on the busiest endpoints improved by roughly 40%. The rest of the monolith stayed stable all the way through the acquisition, and we never needed the big-bang rewrite.

**Reflection.** Convincing people that "don't rewrite everything" was the right answer turned out to be harder than the engineering. Benchmarking earlier would have cut that argument short. I think the same instinct applies to scanning agents and MCP servers: start with the checks that catch the most real risk, measure them, and only add complexity once the data asks for it.

---

## Story 3: Joining a much bigger company after an acquisition

**Likely questions:** "Tell me about navigating a big change." / "How do you work across teams?" / "How would you operate as an early-stage team inside Check Point?"

**Situation.** After Benevity acquired Alaya in 2021, I joined as a Senior Staff Engineer in an organisation roughly ten times our size. The codebase was different (Java and microservices), and so were the culture and the processes.

**Task.** We had to bring Alaya's capabilities into Benevity's platform and keep shipping new work at the same time, without losing the speed that had made Alaya worth buying.

**Action.** My first month went into mapping the existing architecture and listening, before I proposed anything. I built relationships with the platform and infrastructure teams early, because I knew I'd need their trust later. Over time I became the architecture contact between teams for the Europe-facing product surface, which meant translating between people who often had good reasons for disagreeing.

**Result.** Alaya's core features were migrated into Benevity's platform. I contributed to three major cross-team architecture decisions along the way and ended up as the person people asked about AI tooling.

**Reflection.** At the start I moved too fast and tried to fix things that weren't broken. Slowing down made me more effective, not less. That's directly relevant here, since the team I'd be joining went through the same kind of acquisition with Lakera and Check Point, and I know from experience what helps a small team keep its pace inside a large parent.

---

## Story 4: Getting two teams to adopt AI-assisted engineering without a mandate

**Likely questions:** "How do you influence without authority?" / "Tell me about leading while contributing to core tech." / "Why AI agents, and why security?"

**Situation.** At Benevity I was an IC with no direct reports. I wanted two teams that didn't report to me to change how they worked by bringing AI tooling into code review and code generation.

**Task.** The goal was real adoption, not a slide deck, from engineers who had every right to ignore me.

**Action.** I started with three engineers who were already curious. Then I built small internal demos showing concrete time savings on their own work and ran informal lunch-and-learn sessions with nothing mandatory about them. I put reusable prompt templates in a shared repo so people could use them without having to ask me, and I wrote down actual results, like a PR review cycle that came in about two hours shorter, so the case didn't depend on my enthusiasm.

**Result.** Within about three months, roughly 70% of engineers across both teams were using AI-assisted review and generation, and I became the informal AI tooling lead for the org.

**Reflection.** Going without a mandate was slower but it stuck, because the people who adopted it on their own terms went on to argue for it. There's a security angle I only fully saw later, as my own work moved toward orchestrating agents with Claude CLI and OpenClaw, wired to MCP servers and skills. Every new tool we gave an agent widened what it could touch, and nobody had a clear view of the total. That gap is basically this team's product, and it's a big part of why I'm interested.

---

## Prep notes for the gaps

**Security background.** Don't overclaim. Present it as a builder who has watched agent permissions sprawl first-hand and wants to work on the defensive side. Before the interview, read through Lakera's public material (Gandalf, the Lakera Guard docs, their agent and MCP threat writing) so the vocabulary comes naturally.

**Open-source.** The posting asks for active open-source contributions, and the profile doesn't list any beyond the GitHub account (github.com/Onigam). Expect the question. If there's anything public worth pointing to, such as agent tooling, MCP configs or scripts from the OpenClaw work, tidy it up beforehand. Otherwise answer honestly and steer toward the shared prompt-template repo as an example of building tools other engineers actually use.

**Python.** The posting says production Python. Be ready to talk concretely about Python work, since most of the recent production history is TypeScript and Node.js.
