# STAR Stories: Fullstack / Product AI Founding Engineer (Lonio, via Rockstar Recruiting)

Prepared for a founding-engineer conversation where the questions will likely probe: building from zero, deciding under ambiguity, and driving AI adoption without formal authority. Selected from the master bank in `profile/star-bank.md`.

---

## 1. Building Alaya from zero to acquisition

Best for: "tell me about building something from scratch" or "how do you handle ambiguity."

In 2016 I co-founded Alaya, a purpose and impact platform for employee engagement. There was no product yet, no customers, just a blank page and a business that was already trying to sign its first enterprise clients. My job was to architect and build the whole thing, alone at first, then with a small team I'd need to hire while the business kept moving underneath me. I picked a pragmatic stack, Node.js, React, PostgreSQL, that could carry real load without forcing us into premature complexity, and pushed to get a working demo out in the first three months so sales had something real to show. From there it was a steady expansion: multi-tenant architecture, an API layer, impact reporting, and eventually hiring the first three engineers and setting up the CI/CD and code review habits that let the team grow without the codebase falling apart. Five years later Alaya had over fifty enterprise clients across Switzerland and France, and Benevity, a Canadian company valued north of a billion dollars, acquired us. Looking back, I would have put real observability in place much earlier; we bolted on proper APM later than we should have, and I underestimated how expensive it would be to retrofit multi-tenancy instead of designing for it from day zero.

---

## 2. Deciding between a rewrite and a strangler-fig migration

Best for: "tell me about a technical trade-off you navigated" or "how do you handle technical debt."

By our third or fourth year at Alaya, the monolith was starting to show real scaling cracks, and the team split into two camps: rewrite everything as microservices, or keep patching the monolith. Investors, understandably, wanted new features, not a multi-month rewrite with no visible output. I ran a two-week spike comparing both approaches with actual load tests rather than opinions, then took the results to the CTO and investors so the decision could be made on numbers. What we landed on was a strangler-fig migration: pull out the two highest-traffic modules first, leave the rest of the monolith alone, and set clear criteria for when the next module was worth extracting. The first extracted module shipped in six weeks, the busiest endpoints got roughly 40% faster, and the remaining monolith stayed stable all the way through the acquisition. No big-bang rewrite ever happened. The hard part wasn't the technical work, it was convincing people that not rewriting everything was the disciplined choice rather than the timid one. If I did it again I'd run the benchmarking even earlier, since the data is what actually ended the debate.

---

## 3. Driving AI-assisted engineering adoption without a mandate

Best for: "how do you influence without authority" or anything AI-adoption related, which is close to the center of this role.

After Benevity, I was a senior staff IC with no direct reports, but I wanted two teams that didn't report to me to actually change how they worked and start using AI tooling in their daily development. A top-down announcement would have gotten compliance, not adoption, so I started with three engineers who were already curious, built small internal demos that showed concrete time saved rather than abstract promises, and ran informal lunch sessions with no mandate attached. I wrote up reusable prompt templates and committed them to a shared repo, and documented specific wins, like a two-hour cut on a PR review cycle, instead of talking in generalities. Within about three months, roughly 70% of engineers across both teams were using AI-assisted review and generation as part of their normal workflow, and I'd become the informal go-to person for AI tooling across the org. It was slower than a mandate would have been, but it stuck, because people who opt in on their own terms end up advocating for the thing themselves. I couldn't have gotten the same result by decree.

---

## 4. Integrating into a much larger org after an acquisition

Best for: "tell me about navigating change" or "working with large teams."

When Benevity acquired Alaya in 2021, I went from founding engineer on a small team to one voice on a team roughly ten times the size, with a different codebase, Java and microservices instead of what we'd built, and a different culture entirely. My instinct at first was to start fixing things that looked wrong to me, and that instinct was wrong. I spent the first month just mapping their existing architecture and building relationships with the platform and infra teams before I pushed a single technical opinion. That patience paid off: I ended up helping migrate core Alaya capabilities into Benevity's platform, contributed to three major cross-team architecture decisions, and became a cross-team liaison for the Europe-facing product surface. The lesson that stuck with me is that moving fast to "fix" an unfamiliar system is usually moving fast in the wrong direction. Slowing down and listening first is what actually let me be useful faster.
