# STAR+R Stories: Principal AI Engineer, Context Engine (Elastic)

These are picked for what this panel will probe: measuring whether a change actually helped, evolving APIs and data models without breaking customers, influencing engineers and data scientists as a peer, and owning a production loop end to end. All facts come from `profile/star-bank.md`. Before the interview, rehearse them out loud and fill in the specifics marked in the prep notes, rather than inventing new numbers.

---

## 1. Rolling out AI-assisted engineering without authority

**Likely questions:** "How do you get engineers to change how they work?" / "Tell me about influencing without a title." / "How do you know an AI tool is actually helping?"

**Situation.** After the acquisition I was a Senior Staff IC at Benevity, no direct reports, and I wanted two teams that didn't report to me to start using AI-assisted code review and generation. Nobody had asked for it, and a mandate from me wouldn't have meant much anyway.

**Task.** My job was to change daily habits across both teams, and to do it in a way that would still hold once I stopped pushing.

**Action.** I started small, with three engineers who were already curious, and built demos on our own code rather than vendor examples, because a saving on someone else's toy repo convinces nobody. The prompts that worked went into a shared repo as templates so people could reuse them and improve them through normal PRs. Then came informal lunch-and-learn sessions with no attendance expectations. When a template saved real time, like the PR review cycle that came in about two hours shorter, I wrote it down with the before and after, since a concrete case did more than any slide.

**Result.** About 70% of engineers on both teams were using AI-assisted review and generation within three months, and I ended up as the informal AI tooling lead across the org.

**Reflection.** The slow, no-mandate route turned out stickier, because the people who adopted on their own terms became the advocates. What I'd change is the measurement. We tracked adoption and anecdotes, not quality. If I did it again I'd set up a small fixed set of review tasks from day one and compare outputs as the prompts changed, which is basically a golden dataset. That's the habit this role needs at scale, and it's the part I want to get more rigorous about.

---

## 2. Settling an architecture debate with data instead of opinions

**Likely questions:** "Tell me about a trade-off you made under pressure." / "How do you decide when evidence is good enough?" / "Describe an evaluation you designed."

**Situation.** At Alaya, our monolith was starting to crack on the busiest paths. Half the team wanted a full microservices rewrite, the other half a modular monolith, and investors wanted features, not rewrites.

**Task.** I had to make a call we could defend, one that fixed the scaling problem without stopping delivery.

**Action.** Rather than keep arguing, I ran a two-week spike that prototyped both approaches and put them under load tests that reflected our real traffic. I took the trade-offs to the CTO and investors as numbers. What I proposed was a strangler-fig migration: pull out the two highest-traffic modules first, leave the rest alone, and agree in advance on the criteria that would justify extracting anything else. Writing those criteria down early mattered, because it turned every later "should we split this too?" into a check rather than a fresh debate.

**Result.** The first extracted module shipped in six weeks and the busiest endpoints got about 40% faster. The remaining monolith stayed stable all the way through the acquisition, and we never needed a big-bang rewrite.

**Reflection.** Data shortened the argument, but I started benchmarking later than I should have. The lesson I carry is to build the measurement before the debate gets heated. For agents it's the same move: a regression suite with quality, latency and cost gates agreed in advance, so a prompt or tool change gets judged against the gate rather than against whoever argues hardest.

---

## 3. Building Alaya from a blank page, and the data model I'd design differently

**Likely questions:** "Tell me about something you built from scratch." / "Have you evolved a public API or data model without breaking customers?" / "What would you do differently?"

**Situation.** In 2016 I co-founded Alaya, an employee purpose and impact platform. There was no product, no customers and no code, while the business side was already lining up its first enterprise clients.

**Task.** I was responsible for architecting and building the whole platform, alone at first, then with a team, without slowing down sales.

**Action.** I went with a stack I knew could carry us without over-engineering, Node.js, React and PostgreSQL, and got the core features to a demo in about three months. From there it grew in layers: multi-tenancy, an API layer, impact reporting, postal campaigns. When I hired our first three engineers I put CI/CD, code review and architecture docs in place early, since those are the things that are painful to add once a team has its habits.

**Result.** The platform went to production with 50+ enterprise clients across Switzerland and France, and Benevity acquired Alaya in 2021.

**Reflection.** Two things I'd change. Observability came too late; we added proper APM well after we needed it, and some incidents took longer to diagnose than they should have. And multi-tenancy was retrofitted, which cost far more than designing for it from day one would have. Both apply directly here. Agent traces and tool-call telemetry need to exist before the first serious customer, and a context or memory model that thousands of clusters depend on has to be designed to evolve from the start.

---

## 4. Joining a team ten times larger after the acquisition

**Likely questions:** "How do you work in a low-ego, async team?" / "Tell me about a time you were wrong." / "How do you work with data scientists and PMs as a peer?"

**Situation.** After Benevity acquired Alaya in 2021, I went from leading a small team to being a Senior Staff Engineer in an org about ten times larger, with a Java microservices codebase, different processes and a different culture.

**Task.** I needed to fold Alaya's capabilities into Benevity's platform while we kept shipping new features.

**Action.** Honestly, I came in too fast and tried to fix things that weren't broken. Once I noticed that, I changed approach: I spent about a month mapping the existing architecture before proposing anything, and I built working relationships with the platform and infra teams before pushing technical opinions. Over time I took on the role of cross-team architecture liaison for the Europe-facing product surface, which mostly meant writing things down clearly enough that people in other timezones could disagree with them asynchronously.

**Result.** We migrated Alaya's core features into Benevity's platform, I contributed to three major cross-team architecture decisions, and I became the go-to person for AI tooling across two engineering teams.

**Reflection.** Listening first made me more effective, not less. Elastic's distributed, async-first setup rewards the same thing; a written proposal that invites pushback travels further than being right in a meeting.

---

## Prep notes for the gaps (not stories, read before the call)

The job post asks for things `profile/context.md` doesn't state outright: eval-driven improvement of a production agent, telemetry for AI systems, and exposing public MCP servers. Don't bluff any of these. Three things to do instead.

First, if you've built or run MCP servers, eval harnesses or tracing in your own agent work (OpenClaw, Claude CLI workflows, this job-hunter pipeline, Givernance), write one honest STAR story about it before the interview, with real details and only numbers you can stand behind. A small personal system you diagnosed from traces and fixed is a perfectly good answer to "tell me about an eval you designed."

Second, have a design answer ready even where there's no track record: how you'd version prompts and skills, run them against a golden set in CI, gate on quality, latency and cost, roll out behind a flag and watch traces. Stories 1 and 2 give you the "measure before you argue" credibility to hang it on.

Third, read the Agent Builder docs and the open Kibana code for the Context Engine before the call, so you can ask a specific question about how they test changes to tools today.
