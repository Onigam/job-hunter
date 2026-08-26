# STAR Stories, Lonio, Founding Engineer

Picked for a first-engineer role at an AI-native compliance automation spinoff: building from zero, making calls under ambiguity, and actually using AI in the day-to-day workflow rather than just talking about it.

---

## Story 1: Building Alaya from Zero to Acquisition

Best for: "tell me about building something from scratch," first-engineer and founding-engineer questions, how I handle ambiguity.

In 2016 I co-founded Alaya, an employee purpose and impact platform. There was no product yet, no customers, just a blank page and a conviction that companies would pay for this. My job was to architect and build the whole thing, alone at first, while the business side was out signing the first enterprise clients in parallel. I picked a pragmatic stack, Node.js, React, PostgreSQL, deliberately avoiding anything clever that would slow down the first demo, and got the core features working inside three months. From there it was continuous expansion: multi-tenant architecture, an API layer, impact reporting, postal campaigns, plus hiring and onboarding the first three engineers and setting up CI/CD and a code review culture before either of those things were strictly necessary. The platform reached production with more than fifty enterprise clients across Switzerland and France, and in 2021 Benevity, a Canadian unicorn valued north of a billion dollars, acquired the company. Looking back, I'd invest in observability much earlier since we only added proper APM late, and I'd design for multi-tenancy from day zero instead of retrofitting it once it started to hurt.

---

## Story 2: Making a Hard Architecture Call Under Investor Pressure

Best for: technical trade-offs, handling technical debt, deciding under conflicting pressure.

At Alaya, our monolith was starting to crack under load right as investors were pushing hard for new features, not a rewrite. The team was split between a full microservices rewrite and staying the course, and I needed a decision that would hold up technically and survive a room full of people who wanted velocity, not architecture diagrams. I ran a two-week spike comparing both paths with actual load tests instead of opinions, then took the numbers to the CTO and investors directly. Rather than pitching a full rewrite, I proposed a strangler-fig migration: extract only the two highest-traffic modules first, leave the rest of the monolith alone, and define clear criteria for when to pull out more. The first extracted module shipped in six weeks and cut latency by about 40% on our busiest endpoints; the remaining monolith stayed stable all the way through the acquisition, no big-bang rewrite required. The hard part wasn't the technical work, it was convincing people that not rewriting everything was the disciplined choice. Data did most of that convincing, and next time I'd run the benchmarks even earlier to shorten the debate.

---

## Story 3: Driving AI Tooling Adoption Without Formal Authority

Best for: influence without authority, AI-augmented engineering, staff and founding-engineer questions about culture-building.

At Benevity I was a senior staff IC with no direct reports, but I wanted two teams that didn't report to me to actually change how they worked and bring AI tooling into their daily development instead of treating it as a novelty. I started small, three engineers who were already curious, and built internal demos that showed concrete time saved rather than making abstract claims. From there it was informal lunch-and-learn sessions with no mandate behind them, shared prompt templates committed to a common repo, and a running log of small wins, like the time a specific prompt pattern saved two hours on a single PR review cycle. Within three months about 70% of engineers across both teams were using AI-assisted review and code generation, and I'd become the person people came to when they wanted to get better at it. It was slower than a top-down rollout would have been, but it stuck, because people adopted it on their own terms and then went and told their teammates why. I couldn't have gotten the same result with a decree from above.

---

## Story 4: Integrating a Startup's Codebase Into a Much Bigger One

Best for: joining an existing org, cross-functional work, navigating change after an acquisition.

When Benevity acquired Alaya in 2021, I joined a team roughly ten times the size of what I'd worked in before, with a different codebase in Java and microservices, different processes, a different culture entirely. My job was to fold Alaya's capabilities into Benevity's platform while still shipping new features, without losing the speed that had gotten Alaya acquired in the first place. I spent the first month just mapping how the existing architecture actually worked before proposing anything, and made a point of building relationships with the platform and infra teams before pushing any technical opinions their way. That groundwork paid off: I ended up contributing to three major cross-team architecture decisions and became the informal architecture liaison for the Europe-facing side of the product. I moved too fast early on trying to fix things that weren't actually broken in the new org, and slowing down to listen first is what made the rest of the integration work.

---

## Story 5: Owning a Regulated, Detail-Sensitive Product Domain

Best for: compliance-adjacent domains, working in regulated verticals, why this specific role.

A meaningful chunk of what I built at Alaya touched impact reporting for enterprise clients, numbers that finance and HR teams at those companies would actually cite internally, so getting them wrong wasn't a cosmetic bug, it was a trust problem. I had to design the reporting pipeline so that every number was traceable back to its source data, with enough auditability that a client's finance lead could ask "where did this figure come from" and get a real answer, not a shrug. That meant slower, more deliberate engineering in that part of the system even while the rest of the product moved fast, and building test coverage specifically around edge cases in aggregation logic that would otherwise silently produce a plausible but wrong number. It held up under real client scrutiny with zero major reporting incidents I'm aware of during my time there. What I'd take into a compliance-heavy domain like Lonio's is that instinct: know which parts of the system get to move fast and which parts need to be boring and provably correct, and don't treat that as a binary choice for the whole codebase.
