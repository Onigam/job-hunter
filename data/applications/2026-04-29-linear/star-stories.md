# STAR Stories — Linear, Full Stack Engineer

---

## 1. Building Alaya from Zero to Acquisition
*Best for: "Tell me about a time you owned something end-to-end" / "How do you handle a blank page?"*

In 2016, my co-founder and I started Alaya with no product, no codebase, and a handful of potential enterprise clients. I was the only engineer for the first six months, which meant every architectural decision was also a product decision with no committee to consult.

I chose the stack deliberately: Node.js, React, PostgreSQL. Close enough to what I knew well to move fast, proven enough to scale. The first three months were about getting to a demo, not building the right abstraction. I shipped the MVP, ran the demo, and then spent the next two years adding what we'd deferred: multi-tenancy, a proper API layer, impact reporting, postal campaign management. As the company grew I hired the first three engineers, set up the CI/CD pipeline, and built a code review culture from scratch.

By 2021 the platform was running 50+ enterprise clients across Switzerland and France. Benevity, a $1B+ Canadian unicorn, acquired the company that year. The technical choices from 2016 had held well enough to be worth buying.

Looking back, I'd have invested in observability earlier. We added proper APM late and paid for it in slow debugging sessions. I'd also have modeled multi-tenancy from day zero rather than retrofitting it, which was expensive and avoidable.

---

## 2. Making a Hard Architecture Decision Under Pressure
*Best for: "Tell me about a technical trade-off" / "How do you handle technical debt under delivery pressure?"*

Around 2019 at Alaya, the monolith was starting to buckle. API response times on the busiest endpoints were degrading as the client list grew, and the engineering team was split between a full microservices rewrite and a modular monolith approach. Investors were pushing for feature delivery, not rewrites, and two enterprise clients were waiting on features we couldn't ship fast enough.

I needed to make a defensible call without betting the company on it.

I ran a two-week spike: built prototype implementations of both approaches, ran load tests, and documented the trade-offs with actual numbers rather than intuitions. The microservices path offered better isolation but would have taken six months minimum. The strangler fig approach, extracting the two highest-traffic modules while keeping the rest of the monolith intact, could deliver a credible result in six weeks.

I presented both options to the CTO and investors with the data. The "don't rewrite everything" recommendation surprised them, but the numbers made the case. We extracted the first module in six weeks. Performance on the busiest endpoints improved by about 40%. The remaining monolith held stable through the acquisition.

What I'd do differently: run the load tests first, before the debate starts. We spent two weeks arguing from intuition and then resolved the conversation in two days once we had data.

---

## 3. Post-Acquisition Integration at Benevity
*Best for: "Tell me about navigating organizational change" / "How do you work cross-functionally?"*

When Benevity acquired Alaya in 2021, I went from CTO of a 20-person company to Senior Staff IC at a 200+ person organization with a Java microservices codebase I'd never touched. Different culture, different processes, different engineering norms.

My goal was to integrate Alaya's capabilities into Benevity's platform while continuing to ship new features, and without burning goodwill by acting like our way was the right way.

I spent the first month listening. I mapped the existing architecture before proposing changes. I built relationships with the platform and infrastructure teams before pushing technical opinions. Once I had enough context, I focused on two things: the integration work itself, and driving adoption of AI-assisted development practices across the engineering org through demos, shared prompt templates committed to a repo, and optional lunch-and-learn sessions that generated no mandate pressure.

Three major cross-team architecture decisions came through my involvement. Within three months, around 70% of engineers on both teams I worked with had adopted AI-assisted code review and generation.

The lesson was about the difference between being right and being effective. Moving fast and trying to fix things in a new context I didn't fully understand yet would have cost me the relationships I needed. Slowing down first made everything I did later move faster.

---

## 4. Driving Change Without Formal Authority
*Best for: "How do you influence without authority?" / Staff+ and principal engineer interviews*

At Benevity I was a Senior Staff IC with no direct reports. I wanted to change how two engineering teams worked by getting them to adopt AI-assisted development practices: GitHub Copilot, structured prompt engineering, AI-assisted code review. No mandate, no leverage over anyone's workflow.

I started with the pragmatically curious ones, not the enthusiasts and not the skeptics. Three engineers across the two teams who were willing to try something if I could show them a concrete time saving. I showed them specific examples: a PR review that usually took two hours had a useful AI-assisted first pass in twenty minutes. I built internal demos around real workflows, not the general promise of AI. I created a shared repository of reusable prompt templates and committed it to the codebase so the tooling would persist after people started using it.

Within three months, about 70% of engineers on both teams had integrated AI tools into their workflow. The adoption stuck because it was voluntary. Engineers who chose it on their own terms became internal advocates, which no top-down mandate would have produced.

What I learned: the slower path is stickier. A mandate would have produced compliance. The demo-and-invite approach produced advocates.
