# STAR Stories — Director of Platform Engineering, Overstory

---

## 1. Building a Platform from Zero to Acquisition

**Best for:** "Tell me about a time you built platform infrastructure from scratch" / "How do you approach technical decisions at an early stage?"

In 2016, I co-founded Alaya, an employee purpose and impact platform. We had no product, no customers, no engineering team. My job was to make all of those things exist, in roughly that order.

The first task was architectural: build something that could onboard enterprise clients quickly but wouldn't collapse under multi-tenancy or scale pressure later. I chose Node.js, React, and PostgreSQL — pragmatic over fashionable — and deliberately avoided over-engineering the first version. The goal was a working demo in three months, not a perfect system. We hit it. From there I added the layers incrementally: multi-tenant data isolation, an API layer for third-party integrations, postal campaign tooling, impact reporting. When the team started growing, I wrote the architecture documentation, set up CI/CD, and introduced code review culture before we had anyone senior enough to enforce it.

By 2021, the platform had 50+ enterprise clients across Switzerland and France, and Benevity, a Canadian unicorn at $1B+ valuation, acquired us. That acquisition was a direct validation of the technical decisions we'd made from day one.

Looking back, I'd have invested in observability earlier. We added proper APM late, and I spent more time firefighting than I should have. I also underestimated the cost of retrofitting multi-tenancy onto a monolith. Next time I'd wire it in from the start, even if it added two weeks to the initial build.

---

## 2. Making a Hard Architecture Decision Under Pressure

**Best for:** "Tell me about a technical trade-off you navigated" / "How do you handle technical debt when you're also under pressure to deliver?"

At Alaya, we reached the point where the monolith was starting to show scaling cracks. The team split: some wanted a full microservices rewrite, others wanted to stay the course and keep shipping. Investors weren't interested in a multi-month architectural detour. My task was to make a call I could defend technically and that the business could actually afford.

Rather than lead with an opinion, I ran a two-week technical spike comparing both approaches with prototype load tests and real traffic simulations. I brought the data back to the CTO and investors — not a philosophy debate, actual numbers. What the data pointed to was a strangler fig migration: extract the two highest-traffic modules first, keep the rest of the monolith stable, and define clear criteria for when to pull out additional services.

The first module shipped in six weeks. Performance on the busiest endpoints improved by roughly 40%. The monolith stayed stable through the acquisition two years later. No big-bang rewrite was ever needed.

The hardest part wasn't the technical analysis. It was convincing people that not rewriting everything was the right call. Engineers who've been living with codebase pain have strong feelings about it. Data cuts through that better than anything else, but you have to run the numbers first before you have the standing to change minds.

---

## 3. Driving Adoption Without a Mandate

**Best for:** "How do you influence teams you don't manage?" / "Tell me about building platform practices org-wide"

At Benevity, I was a Senior Staff IC with no direct reports. I'd identified that AI-assisted development could materially change how our engineering teams worked, but I had no authority to require anything. Two teams, two engineering managers, zero mandate.

I started with three engineers who were already curious. With them, I built internal demos that put concrete numbers on the time savings — specific examples, like a PR review cycle that dropped from roughly two hours to forty minutes. I ran optional lunch-and-learns, created a shared repo of reusable prompt templates, and documented what was working. Engineers who tried it started talking about it internally, which I couldn't have manufactured through a top-down directive.

Within three months, roughly 70% of engineers across both teams were using AI-assisted code review and generation in their regular workflow. I'd become the informal AI tooling lead for the organization without anyone assigning me the role.

The lesson I came away with: adoption that people choose is stickier than adoption that's mandated. When engineers get there on their own terms, they advocate for it. That advocacy is what makes a practice outlast any one person's tenure.

---

## 4. Navigating Post-Acquisition Integration

**Best for:** "Tell me about navigating significant organizational change" / "How do you work effectively in a large distributed engineering org?"

After Benevity acquired Alaya in 2021, I joined their engineering organization as Senior Staff Engineer. The adjustment was substantial: their codebase was Java-based, heavily microservices, and the team was ten times the size I'd been working with. Culture and processes were both different.

My task wasn't to immediately fix things. It was to integrate Alaya's capabilities into Benevity's platform without losing the product velocity we'd built, and to do that as someone new to the org with no formal authority over the teams I'd be working with.

I spent the first month mapping the existing architecture before proposing anything. I'd seen too many acquisition integrations go sideways because the new team arrived with solutions before they'd understood the problems. I built relationships with the platform and infra leads first, so when I did have opinions, they landed as contributions rather than corrections.

Over the next year, I contributed to three major cross-team architecture decisions and ended up as the informal AI tooling lead for the broader organization. Core Alaya features migrated into Benevity's platform without significant production incidents.

The reflection: I initially moved too fast trying to improve things that weren't actually broken in the new context. Slowing down and listening made me significantly more effective. The instinct to fix everything immediately is useful in a startup; it needs recalibration when you're the newest person in an established organization.

---

## 5. Building Platform Culture and Engineering Practices

**Best for:** "How do you build and lead a platform team?" / "Tell me about establishing engineering standards at a growing company"

At Alaya, I was the only engineer for the first six months. By the acquisition, I'd built and led a team of four, established our entire engineering practice from scratch, and created the documentation structure that let Benevity's team audit the codebase without significant hand-holding.

The platform decisions I made early — CI/CD from day one, code review culture before it was uncomfortable to introduce, architecture decision records — weren't just technical choices. They were bets on the kind of team we'd eventually have. Each new hire joined a codebase that had enough structure and context to get productive in the first week, not the first month.

When I brought on the first engineers, I onboarded them against the documentation I'd written rather than walking them through everything manually. That created two benefits: they could work independently faster, and I got immediate feedback on where the docs were wrong or incomplete. The code review culture I set up was explicit from the start: every PR reviewed, feedback written as questions not directives, patterns documented when they repeated more than twice.

By the time of the acquisition, Benevity's engineering team could audit the platform and understand its architecture without requiring constant translation from me. That was the real test.

What I'd do differently: I should have structured regular engineering rituals earlier — tech debt sprints, architecture review sessions — before we needed them. I added them reactively rather than proactively, which meant we always introduced them under pressure.
