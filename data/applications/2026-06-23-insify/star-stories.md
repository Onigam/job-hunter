# STAR Stories — Insify VP Engineering

---

## 1. Building Alaya from Zero to Acquisition

**Best for:** "Tell me about a time you built something from scratch" / "What founding or 0-to-1 experience do you have?"

In 2016, I co-founded Alaya with a blank page and no product. We'd secured initial backing and had signed intent with our first enterprise client, which meant I had roughly eight weeks to ship something they could actually use. The decision I had to make immediately was whether to hire engineers first or build the core myself. I chose to build, because I needed to understand the domain deeply before I could hire well.

I went with Node.js, React, and PostgreSQL. Not the flashiest stack, but one I could move fast with and that wouldn't introduce accidental complexity early. The first working product shipped in three months. Then came the harder decisions. When our second major client required data isolation guarantees we hadn't fully designed for, I realized we'd under-invested in multi-tenancy from the start. Retrofitting it took two months and slowed feature delivery noticeably. During that same period, I was hiring and onboarding our first three engineers into a codebase that was being refactored underneath them.

By 2021, the platform served 50+ enterprise clients across Switzerland and France. Benevity acquired us, and during technical due diligence they specifically noted the stability of the architecture relative to the product surface we'd built. That felt like the right kind of validation.

What I'd do differently: invest in observability at month three, not month eighteen. We were firefighting incidents that proper APM would have surfaced weeks earlier. I'd also design multi-tenancy from day one rather than retrofitting it. The retrofit cost was real.

---

## 2. Navigating a Post-Acquisition Culture Shift

**Best for:** "Tell me about navigating significant organizational change" / "How do you adapt your leadership style to a new context?"

When Benevity acquired Alaya in 2021, I joined a company ten times larger than anything I'd operated in. Different tech (Java microservices instead of Node), different decision-making cadence, different culture. My instinct was to immediately start identifying what could be improved. That instinct was wrong.

My task was to integrate Alaya's capabilities into Benevity's platform and contribute as Senior Staff Engineer, while not destroying the goodwill I'd need to get anything done in a new organization.

I spent the first month doing nothing but mapping: reading the architecture docs, sitting in on incident reviews, meeting platform leads one-on-one before I had an opinion about anything. I only started proposing changes in month two, and framed them as questions rather than recommendations. That approach felt slow. It wasn't. When I needed cross-team support for the first major architecture decision three months in, I had relationships that made it happen in two weeks instead of what would have been a three-month process.

Over the following year, I contributed to three significant cross-team architecture decisions and became the go-to person for AI tooling adoption across two engineering teams. The reflection is straightforward: moving fast into a new organization usually makes you slower overall. The first month's relationships determine what you can actually accomplish in months two through twelve.

---

## 3. Making a Defensible Architecture Decision Under Business Pressure

**Best for:** "Tell me about a technical trade-off you had to navigate" / "How do you handle technical debt when business pressure is high?"

Around 2019 at Alaya, we had two high-traffic endpoints timing out under load regularly. The team had split into two camps: full microservices rewrite versus a modular monolith refactor. Meanwhile, investors were pushing for three new features by end of quarter.

My job was to make a call that balanced long-term scalability with the reality of our delivery constraints, and to own it in front of the engineering team and the investors.

I ran a two-week technical spike rather than a full prototype. Enough to get real load test numbers on both approaches with production-representative payloads. The microservices path would take roughly eight months minimum, with the whole team focused on migration and near-zero feature delivery. The strangler fig approach, extracting the two highest-traffic modules first, would take six weeks for the first extraction and could be done with two engineers while the rest continued feature work.

I brought those numbers to our CTO and the investor representative on the board with a clear frame: this isn't a technical debate about architecture patterns, it's a question of whether we can afford eight months of near-zero feature delivery. The strangler fig approach got approved. The first module shipped in six weeks. Performance on those endpoints improved by around 40%. The monolith stayed stable all the way through the acquisition two years later.

The hardest part was convincing engineers who wanted to do the rewrite that "not rewriting everything" was the right call. Data helped more than opinion.

---

## 4. Driving AI Adoption Across Teams Without a Mandate

**Best for:** "How do you lead without formal authority?" / "Tell me about your approach to AI in engineering workflows."

At Benevity from 2022, it was clear that AI tooling was going to change how engineers worked. There was no organizational directive to adopt it, and I had no direct reports. I was a Senior Staff IC with opinions and no leverage.

My goal was to move two engineering teams, around 20 engineers total, from skepticism or indifference to consistent daily use of AI-assisted development practices.

I started with three engineers who were already curious. Built them a 20-minute demo showing two things: a prompt template that generated a PR description with full context from the diff, and another that ran a code review checklist against the changes. Not fancy setup, just prompt files in a shared repo anyone could pull. I ran a few informal lunch sessions with no attendance requirement. The engineers who showed up started advocating internally, which was more effective than anything I could have said myself.

Within three months, around 70% of engineers on both teams were using AI-assisted code review and generation regularly. The 30% who weren't were those who hadn't attended a session, not those who'd tried it and rejected it. I became the informal AI tooling lead across the org.

What I'd change: start with the engineering managers, not the individual contributors. One manager modeling the behavior in their own work would have accelerated adoption faster than grassroots demos. The bottom-up approach was slower but stickier; the people who adopted it on their own terms became advocates rather than just users.
