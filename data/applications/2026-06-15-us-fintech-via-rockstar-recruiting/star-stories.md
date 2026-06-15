# STAR Stories — Principal Engineer Fullstack / US-FinTech via Rockstar Recruiting

---

## Story 1: Building a Full-Stack Platform from Zero to Acquisition
*Best for: "Tell me about a system you've built end-to-end" / "What's the largest thing you've shipped?" / Founding engineer questions*

In 2016 I co-founded Alaya, a purpose and employee engagement platform, with a blank page and the expectation of enterprise clients within months. There was no existing codebase, no infrastructure, and no engineering team: just a product idea and a deadline.

My task was to make sound architectural bets from day one, because in an underfunded startup you don't get to do big rewrites. I picked Node.js and React for the core, PostgreSQL for persistence, and designed for multi-tenancy from the start rather than retrofitting it later. The first three months were about getting to a demo with real data. Once the first enterprise clients signed, I extended the stack iteratively: a proper API layer, impact reporting, postal campaign modules, admin tooling. I also hired and onboarded the first three engineers, set up CI/CD pipelines and code review culture, and wrote the architecture documentation that let new hires ramp without sitting next to me all week.

By 2021 the platform was serving 50+ enterprise clients across Switzerland and France. Benevity acquired us, a $1B+ Canadian unicorn, which validated not just the product but the technical decisions underneath it. A company of that size could have rebuilt from scratch; they chose to buy and integrate.

Looking back, I'd have invested in observability much earlier. APM came late, which meant we were often flying blind during incidents. I'd also have been more deliberate about designing for multi-tenancy from day one rather than discovering its cost when clients were already live.

---

## Story 2: Architecture Under Pressure — Strangler Fig Instead of Rewrite
*Best for: "Tell me about a technical trade-off you navigated" / "How do you handle technical debt vs. velocity?" / Principal-level architecture questions*

Around 2019, Alaya's monolith was starting to buckle. Certain endpoints were slow, deployments were getting riskier as the codebase grew, and the team was split. Half wanted a full microservices rewrite. Half thought that was a six-month distraction with no feature output. Investors wanted growth, not platform overhauls, and we had limited runway to show it.

My job was to make a call that was defensible both technically and commercially. I ran a two-week spike comparing both paths, including prototype load tests on the highest-traffic modules. When I presented to the founding team and investors, I came with concrete numbers rather than opinions: a full rewrite would take four to six months with near-zero feature output; a modular extraction approach could ship the first isolated service in six weeks while everything else stayed stable.

We went with the strangler fig. I extracted the two most trafficked modules first, defined measurable criteria for future extractions, and kept the monolith intact for the rest. The first extracted module shipped in six weeks. Performance on those endpoints improved by roughly 40%. The remaining monolith held through the acquisition without a single incident attributed to it.

The hardest part wasn't the architecture, it was persuading people that not rewriting everything was the right call. Data helped more than arguments. If I did it again, I'd run the benchmarks in the first few days so the debate was shorter and the decision felt less like a judgment call and more like a measurement.

---

## Story 3: Driving Technical Adoption Without Formal Authority
*Best for: "How do you lead across teams without being the manager?" / "Tell me about changing how engineers work" / Staff+ and Principal questions*

After Benevity acquired Alaya in 2021, I joined as Senior Staff Engineer with no direct reports. I needed to change how two engineering teams worked: specifically, I wanted them using AI-assisted development tools, Copilot, structured prompt workflows, AI-assisted code review. Nobody was asking for it, and nobody was actively blocking it. It was pure inertia.

I decided not to mandate anything. Instead I found three engineers who were already curious about these tools and built something concrete with them: an automated PR review workflow that cut a typical review cycle by a couple of hours. Then I ran informal lunch-and-learn sessions, no required attendance, just "here's what this looks like in practice on real code." I committed reusable prompt templates to a shared internal repo so there was something tangible to copy and adapt.

Within three months, roughly 70% of engineers across both teams were using AI-assisted review and generation as part of their regular workflow. I became the informal AI tooling lead for the org, without ever having been given that title.

The thing I'd do differently is document results more systematically from the start. The stories I shared were anecdotal, and they worked, but a structured log of time saved across the team would have made the case for a broader rollout much easier to carry to management.

---

## Story 4: Joining a Large Organization After a Startup Acquisition
*Best for: "Tell me about adapting to a new environment" / "How do you operate in a larger company?" / Cross-functional collaboration questions*

When Benevity acquired Alaya in 2021, I went from a 15-person company to an organization with dozens of engineers, a Java microservices architecture I hadn't touched, and a culture built over years that I had no part in shaping. My instinct was to move fast and start proposing things. I caught that instinct early.

I spent the first month mapping before I spoke up: understanding the architecture, the team structures, where decisions actually got made versus where they were announced. I built relationships with the platform and infrastructure teams before I offered any opinions. The goal was to understand the environment well enough that my proposals would fit it rather than collide with it.

Over the following year I contributed to three major cross-team architecture decisions, became the architecture liaison for Benevity's Europe-facing product surface, and eventually launched the AI tooling initiative that reached two engineering teams without a formal mandate. None of that would have been possible if I'd walked in on day one with a stack of opinions and no credibility.

The lesson I carry from that: influence in a new organization comes from credibility earned through listening, not from experience declared. The experience matters, but it only lands if you've first shown you understand where you've arrived.

---

## Story 5: Scaling a Multi-Tenant SaaS Through Enterprise Growth
*Best for: "Tell me about scaling a product" / "How do you design for reliability under growing load?" / FinTech-relevant architecture questions*

During Alaya's growth phase, between 2018 and 2021, we went from a handful of enterprise pilots to 50+ clients with varying data volumes, reporting needs, and access control requirements. The platform was multi-tenant from the start, but "multi-tenant" at three clients looks very different from multi-tenant at fifty with enterprise SLAs.

The task was continuous: keep the system stable and keep shipping features. I had to design for data isolation between clients while keeping query performance acceptable as the database grew. I also had to make the API layer resilient enough that one client's heavy batch jobs didn't degrade response times for everyone else.

Practically, this meant introducing per-tenant resource quotas, moving heavy reporting jobs to an async queue, and adding circuit breakers on the noisiest API endpoints. I also introduced load testing into our CI pipeline after a client's monthly reporting run caused a 40-minute degradation across the platform for everyone else. That incident shifted our team's culture around performance: we tested under load before shipping, not after.

The platform handled the acquisition transition without significant rework. Benevity's team had concerns about whether Alaya's infrastructure could integrate cleanly; the multi-tenancy design and API surface made it straightforward. The thing I'd do differently is introduce synthetic load testing much earlier, before the first incident rather than after it.
