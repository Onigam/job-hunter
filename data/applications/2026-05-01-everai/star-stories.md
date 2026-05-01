# STAR Stories — EverAI, Tech Lead LLM & Generative AI

Selected for: small-team LLM leadership, production AI systems, building AI culture without authority, technical architecture decisions under pressure.

---

## Story 1: Building AI Tooling Adoption Across Engineering Teams Without a Mandate

**Best for:** "How do you lead technical change?" / "Describe a time you influenced without formal authority" / "How would you build an AI-first engineering culture?"

In 2023, I was a Senior Staff IC at Benevity with no direct reports. The engineering org had access to LLM tooling but almost nobody was using it in their actual workflow. My task was to change that, without a mandate and without being anyone's manager.

I started with three engineers who were already curious rather than trying to convert skeptics. I built internal demos showing concrete time savings in code review and documentation, committed reusable prompt templates to a shared repo, and ran informal lunch sessions where attendance was optional and the value had to speak for itself. The decision to make adoption feel earned rather than assigned was deliberate. When an engineer saved two hours on a PR review cycle, they became a more effective advocate than anything I could have said by decree. I documented those wins and circulated them quietly, letting peer credibility do the persuasion.

Within three months, roughly 70% of engineers on two teams had integrated AI tooling into their standard workflow, and I became the informal AI tooling lead across the org. What I'd do differently: instrument the time savings from week one. The data was the most persuasive argument in every conversation, and I had to collect it manually at first because I hadn't set up tracking from the start. The mandate-free approach was slower to launch but the adoption was stickier because engineers chose it on their own terms.

---

## Story 2: Building Alaya from Zero to Acquisition

**Best for:** "Tell me about a time you built something from scratch" / "Describe the founding engineer experience" / "How do you handle ambiguity at the start of a project?"

In 2016, I co-founded Alaya, a purpose and impact platform for employee engagement. No codebase, no customers, no technical team. My job was to architect and build the entire platform while the business was signing its first enterprise contracts.

I chose the stack deliberately: Node.js, React, PostgreSQL. Manageable at solo pace and solid enough to scale later without a rewrite. The first three months produced a demoable core, then I built outward in layers: multi-tenant architecture, API layer, impact reporting, postal campaign tooling. When I hired the first three engineers, I set up CI/CD and code review culture at the same time so technical debt didn't compound while we were heads-down on features. The key principle at every step was: build what we need now, design so the next thing is possible, don't over-architect for hypotheticals.

The platform went to production with 50+ enterprise clients across Switzerland and France. In 2021, Benevity, a Canadian unicorn at $1B+ valuation, acquired us. That outcome validated the technical choices made from day zero. In hindsight, I'd have invested in observability six months earlier, and I'd have designed the multi-tenant data model from scratch instead of retrofitting it. Retrofitting multi-tenancy under production load is exactly as expensive as it sounds.

---

## Story 3: Making a Hard Architecture Call Under Feature-Delivery Pressure

**Best for:** "Tell me about a technical trade-off you navigated" / "How do you handle technical debt decisions?" / "Describe a time stakeholders pushed back on your technical direction"

At Alaya, the monolith was starting to show scaling cracks. The team was split between a full microservices rewrite and a modular monolith approach, while investors were pushing for new features. My task was to make a defensible call that didn't stall the roadmap and didn't create a bigger mess in six months.

I ran a two-week spike comparing both paths with prototype load tests on the two highest-traffic modules. The data was clear: a full rewrite would absorb five to six months with high integration risk. Instead, I proposed a strangler fig migration: extract those two modules first, define measurable criteria for when further extractions made sense, and keep everything else in the monolith until it actually needed to move. I presented the trade-offs to the CTO and investors with metrics, not opinions.

We shipped the first extracted module in six weeks. Performance on those endpoints improved by roughly 40%. The remaining monolith stayed stable through the acquisition two years later, no big-bang rewrite needed. What I'd do differently: run the benchmarks earlier. The moment I put numbers on the table, half the disagreement evaporated. I lost two weeks to arguments that data would have settled in a day.

---

## Story 4: Navigating a Post-Acquisition Integration at 10x Scale

**Best for:** "Tell me about adapting to a major org change" / "How do you establish credibility in a new environment?" / "Describe cross-team architecture work"

When Benevity acquired Alaya in 2021, I moved from lead technical decision-maker on a five-person team to Senior Staff IC in an org ten times larger, with a Java microservices codebase I'd never touched and processes that had nothing in common with startup mode. My task was to integrate Alaya's capabilities into the Benevity platform without losing the product velocity we'd built.

The first month was entirely about mapping before proposing. I read architecture docs, shadowed other teams, asked more questions than I answered, and held back opinions until I understood what was already working and why. Once I'd built real relationships with the platform and infra teams, I started contributing to cross-team architecture decisions. In parallel, I identified that AI-augmented development workflows were a gap across the org and began working on that quietly, separate from my formal scope.

Over 18 months, we migrated core Alaya features into the Benevity platform, contributed to three major cross-team architecture decisions, and I became the go-to resource on AI tooling adoption for two engineering teams. The key lesson: the speed at which you slow down in month one determines how fast you can move in months three through twelve. I initially moved too fast trying to improve things. Listening first made me more effective than any technical contribution I could have made on arrival.

---
