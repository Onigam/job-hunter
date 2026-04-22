# STAR Stories — Lobby / Founding Engineer (Applied AI & Systems)

---

## 1. Building from Zero to Acquisition
*Best for: "Tell me about a time you built something from scratch" / "What's your founding experience?"*

In 2016 I co-founded Alaya, a purpose and impact platform for employee engagement. We had no product, no customers, and no team. My job was to architect and build the whole thing, alone at first, while the business was actively signing enterprise clients who expected demos in weeks, not months.

I chose a stack that could scale without over-engineering early, Node.js, React, PostgreSQL, multi-tenant from the start because I'd seen what retrofitting tenancy looks like and it's painful. Within three months we had a working demo; within a year we had the core product in production. I hired and onboarded the first three engineers, set up CI/CD and code review norms, and kept iterating on the product while the team grew. The hardest part wasn't the code; it was staying architectural while also writing most of it.

We ended up with 50+ enterprise clients across Switzerland and France. In 2021, Benevity, a $1B+ Canadian company, acquired us. That was the direct result of decisions made at the blank-page stage: the architecture held, the codebase was clean enough to integrate, and the product had proven real-world value.

What I'd change: I'd invest in observability much earlier. We added proper APM late and it cost us debugging time we didn't have. And I'd design for multi-tenancy from day zero rather than retrofitting it even partially, which is what we did.

---

## 2. Making a Hard Architecture Call Under Pressure
*Best for: "Tell me about a technical trade-off you navigated" / "How do you handle technical debt?"*

At Alaya, we hit a point where the monolith was showing scaling cracks. The team was split: full microservices rewrite versus a modular monolith. Investors wanted new features, not rewrites. I had to make a call that was defensible technically and wouldn't kill product velocity.

Rather than arguing by intuition, I ran a two-week technical spike. I prototyped both approaches under load, measured them, and brought concrete numbers to the conversation with our CTO and investors. The data made the case for a middle path: a strangler fig migration where we'd extract the two highest-traffic modules first and leave the rest monolithic until there was a reason to change it. I defined explicit criteria for when additional extraction was worth it, so the decision wasn't open-ended.

We shipped the first extracted module six weeks later. Performance on the busiest endpoints improved by roughly 40%. The remaining monolith stayed stable all the way through the acquisition. No big-bang rewrite ever happened, and none was needed.

The lesson I carried from this: convincing people that "not rewriting everything" is the right call is harder than any technical argument. Data cuts it. I'd do more early benchmarking next time to shorten the debate phase.

---

## 3. Driving AI Tooling Adoption Without a Mandate
*Best for: "How do you influence without authority?" / "Tell me about leading through change"*

At Benevity, I was a Senior Staff IC with no direct reports, but I saw clearly that our teams were leaving significant productivity on the table by not using AI-assisted development tools. The problem was that engineering culture there was skeptical, and a top-down decree would've backfired.

I started with a small group of curious engineers, three people, and built internal demos that showed concrete time savings on real work, not toy examples. I ran informal lunch sessions, no slides, no mandate, just live tooling with code they recognized. I committed reusable prompt templates to a shared repo so the tooling was accessible without effort. I documented one specific result that people could point to: a two-hour reduction in a PR review cycle on a module everyone knew was painful.

Within three months, around 70% of engineers on both teams were using AI-assisted code review and generation as part of their normal workflow. I became the informal AI tooling lead across the org without ever being assigned the role.

The mandate-free approach was slower, but the adoption stuck. Engineers who came to it voluntarily became internal advocates. That's something you can't manufacture with a top-down decree, and it's the only kind of adoption that survives a change of management.

---

## 4. Navigating a Post-Acquisition Integration
*Best for: "Tell me about a time you joined a large or unfamiliar organization" / "How do you handle ambiguity?"*

After the Benevity acquisition in 2021, I went from a 15-person startup to an engineering org more than ten times that size. Different codebase, Java microservices instead of Node.js, different culture, different release processes. My task was to integrate Alaya's capabilities into Benevity's platform without losing the product velocity we'd built, and to do it without the credibility that comes from having been there.

I spent the first month mapping the existing architecture before proposing anything. That was deliberate. I built relationships with the platform and infra teams before pushing technical opinions, because I'd learned from past mistakes that being right too early is just a different way of being wrong. Once I had a read on the landscape, I started contributing to cross-team architecture decisions and drove the adoption of AI-augmented development workflows across the org.

We successfully migrated the core Alaya features into Benevity's platform and I contributed to three major cross-team architecture decisions in the first year. I also became the go-to person for AI tooling across two engineering teams, which led directly to the adoption work I described in story 3.

The thing I'd change: I initially moved too fast, trying to fix things that weren't broken in the new organization. Slowing down and listening first made me more effective. It's a lesson that took longer than it should have to learn.

---
