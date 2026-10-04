# STAR+R Stories: Sourcegraph, Tech Lead - Code Plane [IC5]

Interview loop per the posting: recruiter screen, hiring manager, system design, an agent hardening exercise, cross-functional collaboration, then a leadership conversation. These five stories map to what that loop will probe: inherited services with paying customers, raising engineering standards, opinions on coding agents, technical bets, and leading without authority.

---

## 1. Owning a system with paying customers, start to finish (Alaya)

**Likely prompts:** "Tell me about a product you owned end to end." / "How do you handle ambiguity?" / "Have you owned services with paying customers?"

In 2016 I co-founded Alaya, an employee purpose and impact platform, and there was nothing: no product, no customers, no code. My job was to build the whole platform, alone at first, while the business side was already signing its first enterprise clients, so every week of delay was a promise we couldn't keep.

I picked a deliberately boring stack, Node.js, React and PostgreSQL, because I needed something I could move fast on and that wouldn't need replacing at fifty customers. The first demo-able version shipped in about three months. From there it grew in layers: multi-tenancy, an API layer, impact reporting, postal campaigns. When I hired the first three engineers, I set up CI/CD, a code review habit and architecture docs, mostly so I'd stop being the single point of knowledge.

Alaya ended up in production with 50+ enterprise clients across Switzerland and France, and Benevity acquired it in 2021. That acquisition went through technical due diligence, which is about as honest a review of early architecture decisions as you'll get.

Looking back, two things. Observability came too late; we added proper APM well after we needed it, and debugging customer issues before that was slower than it should have been. And retrofitting multi-tenancy cost more than designing for it would have. For Code Plane that lesson is direct: on a system running agents across thousands of repos, per-run and per-repo traceability has to be there on day one, not bolted on after the first confusing incident.

---

## 2. A technical bet under delivery pressure (strangler fig, not rewrite)

**Likely prompts:** "Tell me about a technical trade-off." / "How do you make a technical bet?" / System design follow-ups on migration strategy.

Our Alaya monolith had started to crack under load. Half the team wanted a full microservices rewrite, and investors wanted features, not rewrites. Both sides had a point, and I had to make a call I could defend to both.

Rather than argue it in meetings, I ran a two-week spike that prototyped both approaches and load-tested them. I took the numbers to the CTO and the investors instead of opinions. What I proposed was a strangler fig: pull out the two highest-traffic modules, leave everything else in the monolith, and write down explicit criteria for when another module would earn extraction. That last part mattered, because it turned "should we split this?" from a recurring debate into a check against agreed thresholds.

The first extracted module shipped in about six weeks, and the busiest endpoints got roughly 40% faster. The remaining monolith stayed stable all the way through the acquisition, and we never needed a big-bang rewrite.

The hard part wasn't technical. It was convincing people that not rewriting everything was the ambitious choice. Data ended the argument, and next time I'd benchmark earlier so the debate is shorter. It's the same instinct I'd bring to Agentic Batch Changes: bet on the smallest change to the existing execution layer that proves the idea, then let usage tell you where to go next.

---

## 3. Raising engineering standards without a mandate (AI tooling at Benevity)

**Likely prompts:** "How have you raised the bar on testing, code review or tooling?" / "Influencing without authority." / "What are your opinions on coding agents?"

At Benevity I was a Senior Staff IC with no direct reports, and I wanted two teams that didn't report to me to start using AI-assisted development. Nobody owed me anything, and a top-down push from someone outside their reporting line would have gone nowhere.

So I started small, with three engineers who were already curious. I built demos on our own codebase rather than toy examples, because time saved on someone else's code convinces nobody. Then came informal lunch-and-learn sessions, no mandate attached, and a shared repo of prompt templates that people could copy and improve. When someone saved a couple of hours on a PR review cycle, I wrote it down and shared it; concrete stories travelled further than any slide.

Within about three months, roughly 70% of engineers on both teams were using AI-assisted code review and generation, and I'd become the informal AI tooling lead across the org.

It was slower than a mandate would have been, but it stuck, because the people who adopted it chose to and then argued for it themselves. The opinion I formed along the way, and still hold: agents are great at the first 80% of a change and unreliable at knowing when they're wrong, so the review surface matters as much as the generation. That's exactly why Batch Changes, with its reviewable changesets and status tracking, is a good foundation for agents.

---

## 4. Inheriting a codebase without breaking it (Benevity integration)

**Likely prompts:** "Tell me about taking over a system you didn't build." / "Cross-functional collaboration." / "Working on a distributed team."

After the acquisition in 2021 I joined Benevity as a Senior Staff Engineer, on an engineering org roughly ten times the size of Alaya's, with a different culture, a Java microservices codebase and processes I didn't know. The task was to fold Alaya's capabilities into Benevity's platform while still shipping new work, without losing the velocity we'd had as a startup.

My first instinct was wrong. I moved too fast and tried to fix things that weren't actually broken in the new org, and I could feel that it wasn't landing. I reset: I spent about a month mapping the existing architecture before proposing anything, and I built relationships with the platform and infra teams before pushing technical opinions. Over time I became the cross-team architecture liaison for the Europe-facing product surface, which meant a lot of async writing across North American and European time zones.

We migrated Alaya's core features into the Benevity platform, and I contributed to three major cross-team architecture decisions along the way.

What I took from it is that inherited systems with paying customers usually look strange for a reason. Listening first made me more effective, not less. Code Plane has exactly that kind of estate: Batch Changes, Code Monitors, Code Insights and src CLI all have real customers, and I'd spend the first weeks learning why they are the way they are before redirecting anything.

---

## 5. Agent hardening: how I think about failure in autonomous runs

**Likely prompts:** The agent hardening exercise. / "Have you orchestrated autonomous work at scale with failure recovery?" / "What breaks when agents run unattended?"

This one is less a single past story and more how I'd talk through the exercise, grounded in what I've built. I'd be upfront that my agent orchestration work is on multi-agent workflows I've built and run myself, not on thousands of customer repos, and that Sourcegraph's scale is a step up.

The situation I keep running into is the same: a pipeline of agents does useful work most of the time, and occasionally one step fails in a way that looks like success, such as an empty result, a truncated file, or a confident answer to the wrong question. My approach has been to treat every agent step as untrusted output. Each step writes its result somewhere durable before the next step reads it, so a crash means resuming, not restarting. Each output gets checked against something cheap and deterministic (does it compile, does the diff touch only the expected files, is the output non-empty and well-formed) before it's allowed to move forward. And there's a clear point where a human looks at the result instead of the system pushing it through.

Applied to Agentic Batch Changes, I'd want per-repo state that's idempotent and resumable, deterministic validation gates after each agent step, budgets on retries and tokens per repo so one pathological repository can't stall the whole run, and failure grouping so a reviewer sees "these 40 repos failed for the same reason" rather than 40 separate errors.

The reflection I'd offer honestly is that I've learned more from the silent failures than the loud ones. A crashed agent is easy; an agent that quietly does the wrong thing across hundreds of repos is what the system has to be designed against.
