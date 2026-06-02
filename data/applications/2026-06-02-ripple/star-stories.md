# STAR Stories — Ripple Staff Software Engineer

---

## 1. Building Alaya from Zero to Acquisition
*Best for: "Tell me about a time you built something significant from scratch" / "How do you handle early-stage ambiguity?"*

In 2016, I co-founded Alaya, a purpose and impact platform for enterprise employee engagement. We had nothing at the start: no codebase, no customers, no team. My job was to figure out what to build and how, while the business was still closing its first contracts.

I made pragmatic stack choices from the beginning. Node.js, React, and PostgreSQL gave us something that could grow without becoming unmanageable and without requiring a specialist hire at every layer. In the first three months I built the core platform alone, enough to demo to early clients. Then I iterated on what actually mattered to them: multi-tenant data isolation, impact reporting, postal campaign tooling. As the team grew to three engineers, I introduced code review culture, CI/CD, and lightweight architecture documentation before those things became painful to retrofit.

By the time Benevity acquired us in 2021, the platform had over 50 enterprise clients across Switzerland and France. The acquisition itself was the real validation: Benevity paid a meaningful multiple and ran the platform without a rewrite.

Looking back, I'd have built in observability much earlier. We added proper APM in year three, and debugging production issues before that was harder than it needed to be. I also underestimated how expensive multi-tenancy retrofitting would be. Next time I'd design for it from day one rather than layering it on later.

---

## 2. Hard Architecture Decision Under Investor Pressure
*Best for: "Tell me about a technical trade-off you navigated" / "How do you handle technical debt?" / Refactoring discussions*

At Alaya around 2019, our monolith was starting to buckle under enterprise load. Some API endpoints were timing out during peak usage, and the team was split: one camp wanted a full microservices rewrite, the other wanted to keep shipping features and deal with performance later. Investors were firmly in the second camp.

My task was to make a defensible decision that neither side would resent, and to do it quickly enough that we didn't lose momentum.

I ran a two-week spike, two engineers including myself, prototyping a targeted module extraction under simulated load while scoping out what a full rewrite would realistically require in time and regression risk. The data made the argument for me. A full rewrite would have taken six to eight months with high blast radius. Extracting the two highest-traffic modules was scoped to six weeks with a well-understood surface area. I presented both options to the CTO and investors with concrete metrics, not opinions.

We went with the strangler fig. The first two extracted services showed around 40% latency improvement on those paths. The remaining monolith stayed stable and required minimal changes through the acquisition two years later.

The most effective part of the presentation wasn't the benchmarks. It was the explicit "what we are not doing" and the reasoning behind it. Stakeholders who are nervous about technical decisions mostly need to understand the boundary of the commitment, not the implementation details.

---

## 3. Joining a 10x Larger Engineering Org Post-Acquisition
*Best for: "Tell me about navigating major organizational change" / "How do you adapt to a new environment?" / Relevant given Ripple acquired Metaco*

When Benevity acquired Alaya in 2021, I went from a team of five to an engineering organization of 50+. The codebase was Java with a microservices architecture: a solid stack, but one I'd only observed from the outside. The deployment practices, review culture, and team rhythms were all different from what I'd built at Alaya.

For the first month I deliberately did very little visible work. I read architecture documentation, traced request flows through the system, and had informal one-on-ones with the engineers I'd be working alongside. I didn't propose changes or improvements until I understood what was actually there and why decisions had been made.

Once I had that foundation, I focused narrowly. I became the liaison between the Alaya product surface and Benevity's platform team for the integration work. Separately, I drove adoption of AI-assisted development tooling across two teams, starting with three engineers who were already curious, running pair sessions with real-time demos, and putting the prompt templates in a shared repo anyone could use. No mandate. Within three months, around 70% of engineers on both teams had integrated some form of AI tooling into their daily workflow.

What I'd do differently: I moved too fast in weeks two and three, trying to improve things before I understood them well enough. Pulling back and listening first made me more effective and more trusted in the long run.

---

## 4. Driving Adoption Without a Reporting Line
*Best for: "How do you influence without formal authority?" / Staff+ / Principal engineer behavioral questions*

At Benevity in 2022, I wanted to bring AI-assisted development practices into the engineering workflow: code generation, automated first-pass review, prompt engineering patterns. Neither team this would affect reported to me. There was no mandate, no budget line, and some genuine skepticism from engineers who'd seen tool rollouts come and go without lasting impact.

I started with three engineers who were already curious and willing to experiment. We did pair sessions, I showed them what a well-constructed prompt could do for review cycle time, and we documented the result: one PR that went from a three-day review cycle to under a day using AI-assisted first-pass comments. That story traveled on its own.

I put the prompt templates in a shared repo, ran a single lunch-and-learn session for anyone interested (no attendance required, no metrics targets), and let the early adopters become the advocates. Within three months, roughly 70% of engineers on both teams were using some form of AI tooling regularly. I became the informal AI tooling lead across the org without ever asking for the title.

What I'd do differently is start with a skeptic, not just the early adopters. Early adopters adopt anyway. Getting one or two skeptics on board early would have accelerated the second half of the curve considerably, because their endorsement carries more weight with the remaining holdouts.

---
