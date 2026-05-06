# STAR Stories — Temporal Technologies, Staff Software Engineer AI SDK

---

## 1. Driving AI Tooling Adoption Without a Mandate
*Best for: "How do you influence without authority?" / "Tell me about a time you changed how a team worked" / AI design patterns domain expertise*

At Benevity I was a Senior Staff IC with no direct reports. I wanted to change how two engineering teams worked by getting them to adopt AI-assisted development practices: GitHub Copilot, structured prompt engineering, AI-assisted code review. No mandate, no leverage over anyone's workflow, and a fair amount of quiet skepticism in the room.

I started with three engineers who were curious rather than convinced. I showed them specific examples tied to their actual workflows: a PR review cycle that normally took two hours had a useful first pass in twenty minutes with a well-structured prompt. I built internal demos around real tasks, not the general promise of AI. Then I created a shared repository of reusable prompt templates and committed it to the main codebase, so the tooling would outlast any individual's enthusiasm.

Within three months, about 70% of engineers on both teams had integrated AI tools into their daily workflow. The adoption held because it was voluntary. Engineers who chose it on their own terms became internal advocates, which no mandate would have produced.

What I'd do differently: I underestimated how much the documentation format mattered. Teams adopted patterns they could copy-paste faster than patterns they had to interpret. I'd front-load the "here's the exact template" step even earlier.

---

## 2. Building Alaya from Zero to Acquisition
*Best for: "Tell me about owning something end-to-end" / "How do you handle a blank page?" / API design and platform ownership*

In 2016 my co-founder and I started Alaya with no product, no codebase, and a handful of enterprise clients who had agreed to a demo but not yet paid anything. I was the only engineer for the first six months.

I chose the stack deliberately: Node.js, React, PostgreSQL, with Python for the data processing layer. Close enough to what I knew to move fast, proven enough to hold at scale. The first three months were about getting to a working demo, not building the right abstraction. I shipped the MVP, ran the demo, and then spent the next two years adding what we'd deferred: multi-tenant architecture, a proper public API layer with documentation, impact reporting, and postal campaign management. As the team grew I hired the first three engineers, set up CI/CD pipelines, and established code review culture from scratch.

By 2021 the platform was running 50+ enterprise clients across Switzerland and France, and Benevity, a $1B+ Canadian unicorn, acquired the company. The technical choices from 2016 had held well enough to be worth buying.

Looking back, I'd have invested in observability earlier and designed for multi-tenancy from day zero. Both were expensive to retrofit, and I knew going in that we'd need them.

---

## 3. Making a Hard Architecture Decision Under Delivery Pressure
*Best for: "Tell me about a technical trade-off" / "How do you handle competing priorities?" / Concurrency and performance*

Around 2019 at Alaya, the monolith was starting to show real cracks. API response times on the busiest endpoints were degrading as the client list grew, and the team was split: full microservices rewrite versus a modular monolith. Investors were pushing for new features, not infrastructure work, and two enterprise clients had features waiting in the queue.

I needed to make a defensible call without betting the company on it.

I ran a two-week technical spike: built prototype implementations of both approaches, ran load tests against production-representative data volumes, and documented the trade-offs with actual numbers. The microservices path offered better isolation in theory but would take at minimum six months before anything shipped. The strangler fig approach, extracting the two highest-traffic modules while keeping the rest of the monolith intact, could deliver something real in six weeks. It also meant the concurrent processing bottlenecks were isolated and addressable without a full rewrite.

I presented both options to the CTO and investors with the load test data. The "don't rewrite everything" recommendation surprised them, but the numbers made the case. We extracted the first module in six weeks. Performance on the busiest endpoints improved by roughly 40%. The monolith held stable through the acquisition two years later.

What I'd do differently: run the load tests before the debate starts. We spent two weeks arguing from intuition and then resolved the conversation in two days once we had data.

---

## 4. Integrating Alaya into Benevity After the Acquisition
*Best for: "Tell me about navigating organizational change" / "How do you work across large engineering orgs?" / Multiple codebases and programming languages*

When Benevity acquired Alaya in 2021, I went from the technical lead of a 20-person company to a Senior Staff IC at a 200-person engineering org with a Java microservices codebase I'd never touched, a different release process, and teams that had their own established ways of working. My brief was to integrate Alaya's capabilities into Benevity's platform while continuing to ship new features.

The trap I avoided was trying to move fast. I spent the first month listening. I mapped the existing architecture before proposing anything. I built relationships with the platform and infrastructure teams before pushing technical opinions, and I read through the codebases before asking questions I could answer myself.

Once I had enough context, I focused on two things: the integration work itself, and helping the broader org adopt AI-assisted development practices through shared tooling and optional sessions rather than top-down mandates. Three major cross-team architecture decisions came through my involvement. Within three months, around 70% of engineers on the teams I worked with had adopted AI-assisted code review and generation.

The lesson was about the gap between being right and being effective. The instinct coming out of a startup is to move quickly and fix things. In a larger org you don't have the context yet to know what's worth fixing. Slowing down first made everything that followed move faster.
