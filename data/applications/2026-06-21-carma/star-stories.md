# STAR Stories — Carma / Founding Head of Engineering

---

## 1. Building a Platform from Zero (Founding Engineer angle)

**Likely prompt:** "Tell me about a time you built something from scratch" / "What does 'founding engineer' mean to you?"

In 2016, my co-founder and I started Alaya with nothing: no product, no customers, no code. We were pitching enterprise clients in Switzerland while I was simultaneously figuring out what the architecture should even be.

My task was to get us to a first real demo in about three months, then keep building while the business signed contracts. That meant making technology choices I could live with for years, not just for the next sprint.

I went with Node.js, React, and PostgreSQL because I knew them well and they'd scale without over-engineering at our stage. I built the core multi-tenant data model and the impact reporting layer in the first two months, got to a live demo, and started iterating from there. As we grew, I hired the first three engineers, set up CI/CD and code review culture from the start, and introduced architecture docs before anyone asked for them. When we hit scaling pressure around 30 clients, I ran a two-week technical spike to evaluate a microservices migration against a modular monolith approach, presented the trade-offs with actual load test data, and chose the strangler fig path: extract the two highest-traffic modules, keep the rest stable. Performance improved roughly 40% on the busiest endpoints and the remaining codebase held through the Benevity acquisition in 2021 without a rewrite.

What I'd do differently: I would instrument observability from day one. We added proper APM late and flew blind through a few incidents that would have been much shorter with better telemetry. I'd also design explicitly for multi-tenancy upfront rather than retrofitting it. But the core architectural bet worked, and the acquisition validated that.

---

## 2. Hard Technical Decision Under Pressure

**Likely prompt:** "Tell me about a difficult technical trade-off" / "How do you handle technical debt at a startup?"

At Alaya, around 2018-2019, we had a monolith that was starting to crack. Traffic was growing, the team had expanded to five engineers, and we were getting noise from investors about the architecture not being "modern" enough. There was serious pressure to do a full microservices rewrite.

My job was to make a defensible decision under pressure while keeping delivery on track. A full rewrite would have taken six months minimum and frozen feature work. But we couldn't ignore the scaling issues either.

I proposed a spike: two weeks to prototype both approaches against our actual production load patterns. I ran the benchmarks, modeled the operational overhead of running distributed services with a five-person team, and built a comparison deck with concrete data rather than opinions. Then I presented the case for the strangler fig approach to the board and the engineering team together, naming the risks honestly rather than overselling the solution. We extracted the two modules under the most stress first. The first extraction shipped in six weeks, and the endpoints that were struggling improved by around 40%.

The reflection is that the hardest part wasn't the technical work, it was convincing people that "not rewriting everything" was actually the braver call. Data made that argument. Next time I'd run the benchmarks even earlier to cut the debate shorter and reduce the number of people who form opinions before they see numbers.

---

## 3. Leading Without Formal Authority

**Likely prompt:** "How do you influence without a title?" / "Tell me about mentoring or leading a team without being the manager"

After Benevity acquired us in 2021, I joined as Senior Staff Engineer on a team that was roughly 10 times larger than Alaya. I had no direct reports and no mandate to change how anyone worked. But I could see that the engineering org was underusing AI tooling in ways that were costing real hours.

My goal was to get two engineering teams to meaningfully adopt AI-assisted workflows, including code review, generation, and prompt engineering patterns, without anyone telling them they had to.

I started with three engineers who were already curious and did a 90-minute session with them showing concrete examples: a PR review cycle that usually took two hours completed in 40 minutes, a boilerplate scaffold generated from a spec document in minutes. No slides, just live demos. From there I built a shared repo with reusable prompt templates, documented the time savings with real examples from real tickets, and ran informal lunch-and-learn sessions with no attendance requirement. The early adopters became the advocates. I never sent a mandate email.

Within three months, roughly 70% of engineers across both teams were using AI-assisted code review and generation as part of their regular workflow. I became the informal AI tooling lead across the org, which led to cross-team architecture conversations I wouldn't have had otherwise.

The thing I'd change: I moved slightly too fast at first in a couple of areas, trying to "fix" things in the new org that weren't actually broken. The lesson is that influence requires credibility first, and credibility requires listening. Once I slowed down and mapped the existing system before proposing changes, everything moved faster.

---

## 4. Scaling a Team While Shipping

**Likely prompt:** "How do you balance IC work with growing a team?" / "What does good engineering leadership look like at an early stage?"

This is something I lived at Alaya across several phases. In the beginning I was the only engineer. By the time we hit around 15 enterprise clients, I was also responsible for hiring and onboarding. The challenge was staying technical enough to make good architectural decisions while also creating the conditions for new engineers to be effective quickly.

I deliberately kept myself in the code on the critical path: data modeling, API design, the parts where a wrong decision would compound over time. I delegated the higher-certainty work first, things like new feature modules with well-defined specs, and paired intensively with new engineers until I trusted their judgment. Code review was the main mentorship mechanism. I reviewed everything in the first six months of each new hire's tenure, with comments that explained the why rather than just marking things wrong.

The result was that our first three hires became autonomous contributors within about two months each, and the architecture stayed coherent through the acquisition even as the team grew. Benevity's technical due diligence didn't surface any critical architectural concerns, which I took as validation that the decisions held up under external scrutiny.

What I'd refine: documentation lagged behind the code for too long. I was the main carrier of context for too many systems. I'd write architecture decision records from the start next time, so knowledge transfer isn't a bottleneck during due diligence or team scaling.

---

## 5. Shipping Fast Without Breaking Things

**Likely prompt:** "Tell me about a time you had to move fast under pressure" / "How do you maintain quality at high velocity?"

At Alaya we had a moment in 2019 where a major enterprise client signed a contract with a six-week deadline for a feature set that we estimated at 10 weeks of work. Losing the deal wasn't an option, and we weren't going to fake being done.

I had three engineers and myself. The task was to figure out what "done enough to go live" actually meant for a client who needed to demo this to their own board.

I sat with the product and sales teams to pull apart the feature list and identify the subset that the client actually needed at go-live versus what could ship in week 8 without them knowing the difference. That shrank the scope to about six weeks of real work. We then ran two-week sprints with a hard rule: nothing merged without a test that would have caught the last regression. I personally took on the two riskiest modules and shipped them in week three to give us buffer time on the integration.

We went live in week seven with the core feature set working. The client didn't notice what wasn't there yet. The remaining features shipped over the next three weeks while they were already in production.

The lesson is that most deadline pressure is actually scope pressure in disguise. The engineering answer is to find the real requirements, not to work faster on everything. That's a skill I'd bring to Carma's "features in the morning, in the field by afternoon" pace.
