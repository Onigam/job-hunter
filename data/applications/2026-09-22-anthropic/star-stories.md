# STAR Stories: Staff+ Software Engineer, Platform Ecosystem (Anthropic)

Selected for this role because Platform Ecosystem needs someone comfortable owning ambiguity across product, engineering, and commercial concerns at once. These are the four stories from the bank most likely to come up.

---

## 1. Building Alaya from zero to acquisition

Best for: "tell me about building something from scratch," founding-engineer questions, how I handle ambiguity.

In 2016 I co-founded Alaya, an employee purpose and engagement platform, with nothing to show for it yet: no product, no customers, just a pitch and a blank repo. My job was to architect and build the whole thing, alone at first, while the business side was out signing the first enterprise clients, so there wasn't room for a slow ramp-up. I picked a pragmatic stack, Node.js, React, PostgreSQL, that wouldn't need a rewrite at ten times the scale but also wouldn't slow down the first demo, and I had the core features working inside three months. From there it was a steady expansion: multi-tenant architecture, an API layer, impact reporting, postal campaign tooling, plus hiring and onboarding the first three engineers and putting in CI/CD and a code review culture before either was strictly necessary. The platform ended up running production workloads for 50+ enterprise clients across Switzerland and France, and Benevity, a Canadian unicorn valued north of a billion dollars, acquired the company in 2021. That outcome is the clearest validation I have that the early technical calls held up. If I were doing it again, I'd invest in observability sooner; we bolted on proper APM later than we should have, and I underestimated how expensive retrofitting multi-tenancy would be once customers were already on the platform.

---

## 2. Post-acquisition integration at Benevity

Best for: navigating change, working across large teams, cross-functional collaboration.

Joining Benevity after the acquisition meant landing on a team roughly ten times the size of Alaya's, with a different codebase in Java and microservices, and a different set of processes than the ones I'd built myself. My task was to fold Alaya's capabilities into Benevity's platform without losing the product velocity that had gotten us acquired in the first place. Rather than showing up with opinions, I spent the first month just mapping the existing architecture, and I made a point of building relationships with the platform and infra teams before pushing for any changes. Once that trust existed, I drove adoption of AI-augmented workflows, things like Copilot and shared prompt patterns, across the wider engineering org, and I ended up becoming the informal architecture liaison for the Europe-facing product surface. The Alaya features made it into the main platform, I contributed to three major cross-team architecture decisions, and I became the person two teams would go to on AI tooling questions. My honest reflection is that I moved too fast early on, trying to fix things in the new org that weren't actually broken. Slowing down and listening first is what made the rest of it work.

---

## 3. A hard architecture call under investor pressure

Best for: technical trade-offs, how I handle technical debt.

Alaya's monolith was starting to show real scaling cracks, and the team was split between a full microservices rewrite and a more modular approach to the monolith, all while investors wanted new features and had no appetite for a rewrite quarter. I needed a decision I could defend with something other than opinion. I ran a two-week spike comparing both approaches with actual prototype load tests, then took the trade-offs to the CTO and investors with numbers instead of a pitch. What I proposed was a strangler-fig migration: pull out the two highest-traffic modules first, leave the rest of the monolith alone, and define clear criteria for when to extract the next piece. The first extracted module shipped in six weeks, the busiest endpoints got about 40% faster, and the remaining monolith stayed stable all the way through the acquisition, so we never needed the big-bang rewrite. The hard part wasn't the engineering, it was convincing people that not rewriting everything was the right call; the data did most of that work for me. Next time I'd front-load even more of the benchmarking, just to cut that debate shorter.

---

## 4. Leading adoption without formal authority

Best for: influence without authority, Staff+ and principal-level questions.

As a Senior Staff IC at Benevity, I had no direct reports, but I wanted two teams that didn't report to me to actually change how they worked and start using AI-assisted development. I started small, with three engineers who were already curious, and built internal demos that showed concrete time savings rather than making any kind of pitch. From there it was informal lunch-and-learn sessions, no mandate attached, plus a shared repo of reusable prompt templates and a habit of writing up results, like the time a templated review cycle saved a couple of hours on a single PR. Within three months, about 70% of engineers across both teams were using AI-assisted review and generation, and I'd become the de facto AI tooling lead for that part of the org. It was slower than a top-down rollout would have been, but it stuck better, because people who adopted it on their own terms ended up advocating for it themselves. A mandate could never have gotten me that.
