# STAR Stories: Granular (Product Builder / CTO Co-Founder)

Picked for a founding-engineer/CTO conversation: building from zero, technical trade-offs under pressure, and operating without a big team behind you.

---

## 1. Building Alaya from zero to acquisition

Back in 2016 I co-founded Alaya, a purpose and impact platform for employee engagement, and we started with literally nothing: no customers, no product, just a blank page. My job was to architect and build the whole thing myself at first, then grow a small team, while the business side was already out signing enterprise clients who expected something to exist. I picked a pragmatic stack, Node.js, React, PostgreSQL, that could scale without turning into an over-engineered mess, and got a working demo out in about three months. From there it was constant iteration: multi-tenant architecture, an API layer, impact reporting, postal campaigns, plus hiring and onboarding the first three engineers and putting in CI/CD and a real code review culture. We ended up with over 50 enterprise clients across Switzerland and France, and in 2021 Benevity, a Canadian unicorn valued north of a billion dollars, acquired us. Looking back, I'd have invested in observability much earlier, we bolted on proper APM late, and I underestimated how expensive it would be to retrofit multi-tenancy instead of designing for it from day zero. That's exactly the kind of lesson I'd bring into building Granular's stack from the ground up.

---

## 2. A hard architecture call under investor pressure

At Alaya, our monolith started showing real scaling cracks, and the team was split between a full microservices rewrite and a more modest modular monolith. Investors, meanwhile, wanted new features, not a quarter spent on plumbing. I ran a two-week technical spike comparing both approaches with actual prototype load tests instead of opinions, then presented the trade-offs to the CTO and investors with numbers on the table. What I proposed was a strangler-fig migration: pull out the two highest-traffic modules first and leave the rest of the monolith alone, with clear criteria for when we'd extract anything else. We shipped the first extracted module in six weeks, performance on the busiest endpoints improved by roughly 40%, and the remaining monolith stayed stable all the way through the acquisition. No big-bang rewrite, ever. The hardest part honestly wasn't the technical work, it was convincing people that not rewriting everything was the disciplined choice. Data made that argument a lot faster than I could have on my own, and next time I'd start the benchmarking earlier to cut the debate short.

---

## 3. Leading two teams that didn't report to me

After Benevity acquired Alaya, I joined as a Senior Staff engineer on a team about ten times the size of what I was used to, different culture, different codebase in Java and microservices, different processes entirely. I wanted to get AI-assisted development practices adopted across two teams, neither of which reported to me, so a top-down mandate was never on the table. I started small, with three curious engineers, built internal demos that showed concrete time saved, and ran informal lunch-and-learn sessions with no mandate attached, just examples. I put together reusable prompt templates and committed them to a shared repo, and wrote up results as they came in, things like saving two hours on a single PR review cycle. Within three months about 70% of engineers across both teams were using AI-assisted review and generation, and I'd become the informal go-to person for AI tooling in the org. It was slower than a decree would have been, but it stuck, because people adopted it on their own terms instead of being told to.

---

## 4. Mapping the territory before touching anything

Joining Benevity right after the acquisition meant landing on a team ten times larger than Alaya's, with an established codebase and established opinions about how things should work. Rather than showing up with a list of changes, I spent the first month just mapping the existing architecture, reading code, sitting in on reviews, understanding why decisions had been made before I assumed they were wrong. I built relationships with the platform and infra teams before pushing any technical opinions of my own, and only after that groundwork did I start contributing to cross-team architecture calls. That patience paid off: I ended up contributing to three major architecture decisions and became a cross-team liaison for the Europe-facing product surface. My honest reflection is that I moved too fast early on, trying to fix things that weren't actually broken in the new org, and slowing down to listen first is what made the rest of it work. For a co-founder role like this one, where the existing team already has real infrastructure and hard-won context, that same instinct, understand before you rebuild, matters just as much as shipping speed.

---

## 5. Owning a stack end to end under real constraints

The common thread across Alaya and Benevity is that I've never been comfortable just owning one layer. At Alaya I was writing backend services one week and debugging a React rendering issue the next, because there wasn't anyone else to hand it to, and that forced me to think about the whole system rather than my corner of it. When we needed multi-tenancy, I had to reason about database schema, API contracts, and frontend state all at once, not hand off a ticket and wait. That habit carried into Benevity too, where being useful across both infra and product surfaces is what made me effective without formal authority. For a role building secure, auditable financial systems from scratch, with time series forecasting and Swiss compliance baked in as a product feature, that same instinct applies: the security model, the data model, and the user-facing product need to be designed together, not bolted on in sequence. I'd rather get that right the first time than retrofit it later, which is exactly the lesson multi-tenancy at Alaya taught me the hard way.
