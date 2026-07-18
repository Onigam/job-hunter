# STAR Stories - VP of Engineering, Data & AI @ SonarSource

Prepared for behavioral rounds. Stories chosen for overlap with the role's scope: leading a multi-disciplinary org, driving AI adoption without formal authority, setting governance frameworks, and integrating into a much larger organization.

---

## Building Alaya From Zero to Acquisition

*Good for: "tell me about building something from scratch," ownership questions, how I handle ambiguity.*

Back in 2016 I co-founded Alaya, an employee purpose and impact platform, and for the first stretch it was just me and a blank page. No customers yet, no product, just a founding team convinced there was something here. My job was to architect and build the whole thing while the business side was out signing our first enterprise clients, which meant the platform had to exist before I had the luxury of getting it right. I picked a pragmatic stack, Node.js, React, PostgreSQL, that could scale without forcing me into premature complexity, and pushed to get a working demo in front of prospects within three months. From there it was continuous expansion: multi-tenant architecture, an API layer, impact reporting, and eventually hiring and onboarding our first three engineers, which is when I had to formalize things I'd been doing by instinct, like code review and architecture docs. We ended up with over 50 enterprise clients across Switzerland and France, and in 2021 Benevity, a Canadian unicorn valued north of a billion dollars, acquired us. That's about as direct a validation as a technical decision can get. If I'm honest, I'd have invested in observability much earlier; we bolted on proper APM late, and I underestimated how expensive retrofitting multi-tenancy would be. I'd design for it from day zero next time.

---

## Driving AI Adoption Without a Mandate

*Good for: influence without authority, building a data/AI-adjacent practice, VP-level "how do you get an org to change" questions.*

At Benevity I was a Senior Staff IC with no direct reports, but I kept running into the same problem: engineers across two teams that didn't report to me were doing repetitive work that AI tooling could meaningfully speed up, and nobody owned pushing that forward. So I decided to own it informally. I started small, three engineers who were already curious, and built internal demos that showed concrete time saved rather than pitching the idea in the abstract. From there it was lunch-and-learn sessions with no mandate behind them, just working examples, plus a shared repo of reusable prompt templates so people didn't have to reinvent things. I documented wins as they happened, things like shaving two hours off a single PR review cycle, because a number travels further than an opinion. Within three months, about 70% of engineers across both teams had this baked into how they worked day to day, and I'd become the person people came to for AI tooling questions without anyone assigning me that title. It was slower than a top-down rollout would have been, but it stuck, because people adopted it on their own terms and then advocated for it themselves. That's the part I'd tell a future VP: mandate-free is slower, but it survives contact with reality better.

---

## A Hard Architecture Call Under Investor Pressure

*Good for: technical trade-offs, data governance and platform decisions, how I handle competing priorities.*

At Alaya we hit the point every growing platform hits: the monolith was showing real scaling cracks, and the team was split between a full microservices rewrite and a more modest modular approach. Investors, meanwhile, wanted new features, not months of internal rebuilding, so the pressure to just leave it alone was real too. My job was to make a call that held up technically without torching the roadmap. I ran a two-week spike comparing both approaches with actual load tests instead of relying on gut feeling, then took the results to the CTO and investors as numbers, not opinions. What I proposed was a strangler-fig migration: pull out the two highest-traffic modules first, leave the rest of the monolith alone, and define clear criteria for when to extract the next piece. We shipped the first extracted module in six weeks, and the busiest endpoints got roughly 40% faster. The remaining monolith stayed stable all the way through the acquisition, so we never needed the big-bang rewrite people were originally arguing for. The hardest part honestly wasn't the technical work, it was convincing people that not rewriting everything was the disciplined choice. Data closed that argument faster than debate did, and next time I'd push for early benchmarking sooner just to shorten that phase.

---

## Integrating Into a Team Ten Times the Size

*Good for: scaling into a larger org, cross-functional leadership, mentoring across teams, questions about org design.*

When Benevity acquired Alaya in 2021, I went from a five-person engineering team to a Senior Staff Engineer role on an org roughly ten times that size, with a different culture, a Java-based microservices codebase instead of our Node stack, and processes I hadn't helped write. My task was to get Alaya's capabilities folded into Benevity's platform while still shipping new features, without losing the speed we'd built as a small team. I spent the first month doing almost nothing but mapping the existing architecture before I proposed a single change, and I made a point of building relationships with the platform and infra teams before pushing any technical opinions their way. From there I became a cross-team architecture liaison for the Europe-facing product surface and contributed to three major cross-team architecture decisions, on top of the AI tooling adoption work described above. The migration itself succeeded, and I became a go-to person for two separate teams rather than just my own. My honest reflection is that I moved too fast early on trying to fix things that weren't actually broken in the new org, just unfamiliar to me. Slowing down and listening before acting made me noticeably more effective, and it's the first thing I'd tell someone stepping into a much larger organization for the first time.
