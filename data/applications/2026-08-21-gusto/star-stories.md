# STAR Stories: Gusto, Staff Software Engineer, AI Developer Tools

Prepared for behavioral rounds. Picked for relevance to internal AI tooling, developer experience, and driving adoption without formal authority.

---

## 1. Driving AI tooling adoption across teams without a mandate

This is probably the closest match to what the Gusto role actually asks for, so I'd lead with it if given the choice. After Benevity acquired Alaya in 2021, I ended up as a senior staff IC on a team about ten times the size of what I'd run before, with no direct reports and no authority to tell anyone how to work. My task was to get AI-assisted development into people's daily habits across two teams that didn't answer to me, which meant persuasion had to do the work that a mandate usually does. I started small, with three engineers who were already curious, and instead of pitching a vision I just showed them something concrete: a PR review that used to take two hours down to twenty minutes. I ran a few informal lunch sessions, no deck, just live demos, and put prompt templates into a shared repo people could copy without asking permission. Within three months, about 70% of both teams were using AI-assisted review and generation regularly, and people started coming to me before rolling anything new out. What I'd do differently is document the early failures too, not just the wins, because a couple of engineers hit dead ends with bad prompts and gave up before I noticed. The lesson that stuck was that adoption sticks better when it's earned one demo at a time than when it's decreed.

---

## 2. Building Alaya's platform from a blank page to acquisition

In 2016 I co-founded Alaya, an employee purpose and engagement platform, starting with literally nothing, no customers, no code, no team. My job was to architect and build the whole thing while the business side was closing its first enterprise deals, so there wasn't room for a slow runway. I picked a stack I could move fast in without painting myself into a corner, Node.js, React, Postgres, got a working demo out in about three months, and then layered in multi-tenancy, an API surface, and impact reporting as the client list grew. Somewhere in there I hired and onboarded the first three engineers and set up the basics, CI/CD, code review norms, some architecture docs so decisions didn't live only in my head. We ended up with over 50 enterprise clients across Switzerland and France, and Benevity, a Canadian company valued north of a billion dollars, acquired us in 2021. If I'm honest, I under-invested in observability early on and paid for it later with slower incident response, and I designed for single-tenant longer than I should have, which made the multi-tenant retrofit more painful than it needed to be. Next time those are day-zero decisions, not year-two ones.

---

## 3. Choosing a strangler-fig migration over a full rewrite under investor pressure

At Alaya, our monolith started showing real scaling cracks right around the time investors were pushing hard for new features, not infrastructure work, so the timing for a rewrite conversation was about as bad as it could be. The engineering team was split between a full microservices rewrite and something more conservative, and I needed a decision that would actually hold up, not just win the room that week. I spent two weeks running a technical spike, built small prototypes of both approaches, and load-tested them so I had real numbers instead of opinions when I sat down with the CTO and investors. Instead of a rewrite, I proposed pulling out just the two highest-traffic modules and leaving the rest of the monolith alone, with clear criteria for when we'd extract the next piece. The first module shipped in six weeks, the busiest endpoints got about 40% faster, and the rest of the monolith stayed boring and stable straight through the acquisition. The hard part honestly wasn't the technical call, it was convincing people that doing less was the disciplined choice. I'd push for the benchmarking earlier next time, because the data ended the debate faster than any argument I made.

---

## 4. Integrating into a much larger org after the Benevity acquisition

Post-acquisition, I went from being the person who'd built the whole system to one voice on a team ten times larger, working in a different language, Java instead of Node, and a codebase I hadn't touched before. The task was to get Alaya's capabilities folded into Benevity's platform while still shipping new features, without the velocity we'd had just quietly dying in the transition. I spent the first month mostly listening, mapping how their architecture actually worked before I proposed touching anything, and built relationships with the platform and infra teams before I pushed any technical opinions their way. That patience paid off; I ended up contributing to three major cross-team architecture decisions and became a de facto liaison for the Europe-facing product surface. My first instinct, honestly, was to move fast and start fixing things that weren't actually broken, just unfamiliar, and that instinct cost me some credibility early on. Slowing down and listening first is what actually made the difference, and it's a habit I've kept since.
