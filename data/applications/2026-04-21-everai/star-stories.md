# STAR Stories — EverAI, Tech Lead LLM & Generative AI

Selected for: small-team LLM leadership, production AI systems, technical decision-making, building from zero.

---

## Story 1: Driving AI Adoption Across Engineering Teams Without a Mandate

**Best for:** "How do you lead technical change?" / "Tell me about influencing without authority" / "How do you build an AI-first engineering culture?"

In 2023, I was a Senior Staff IC at Benevity with no direct reports, but there was a clear gap: the engineering teams weren't using LLM tooling in their daily workflows at all, despite it being available. My task was to change that, without a mandate and without being anyone's manager.

I started small: three engineers who were already curious, and built internal demos showing concrete time savings in code review and documentation generation. Rather than issuing guidelines, I created reusable prompt templates, committed them to a shared repo, and ran informal lunch sessions where attendance was optional. The key decision was to make adoption feel earned rather than assigned. When engineers tried it and saved two hours on a PR review cycle, they became advocates. I documented those wins and circulated them quietly, letting peer credibility do the work I couldn't do by decree.

Within three months, roughly 70% of engineers across two teams had integrated AI tooling into their standard workflow. I became the informal AI tooling lead for the org. What I'd do differently: instrument the wins earlier, because the data on time savings was the most persuasive argument and I had to collect it manually at first.

---

## Story 2: Building Alaya from Zero to Acquisition

**Best for:** "Tell me about a time you built something from scratch" / "Founding engineer mentality" / "How do you handle ambiguity at the start of a project?"

In 2016, I co-founded Alaya, a purpose and impact platform for employee engagement. We had no codebase, no customers, and no technical team. My job was to architect and build the entire platform while the business was simultaneously signing its first enterprise clients.

I picked a stack deliberately chosen to stay manageable at founder-engineer pace: Node.js, React, PostgreSQL. No premature abstraction, no microservices before we needed them. The first three months produced a core feature set that could demo, then I expanded iteratively: multi-tenant architecture, API layer, impact reporting, postal campaign tooling. When I hired the first three engineers, I set up CI/CD and code review culture at the same time so technical debt didn't compound.

The platform reached production with 50+ enterprise clients across Switzerland and France. In 2021, Benevity (a Canadian unicorn at $1B+ valuation) acquired us. That outcome was a direct validation of the technical decisions made from day one. In hindsight, I'd have invested in observability six months earlier than I did, and I'd have designed the multi-tenant data model from scratch rather than retrofitting it. Retrofitting multi-tenancy is painful in ways that are entirely avoidable.

---

## Story 3: Choosing the Right Architecture Under Feature-Delivery Pressure

**Best for:** "Tell me about a technical trade-off you navigated" / "How do you handle technical debt decisions?" / "Tell me about a time stakeholders pushed back on your technical direction"

At Alaya, we hit a point where the monolith was showing scaling cracks. The engineering team was split between a full microservices rewrite and a modular-monolith approach, while investors were pushing for new features, not infrastructure work. My task was to make a defensible call that didn't stall the roadmap and didn't create a bigger mess down the line.

I ran a two-week technical spike comparing both approaches, including prototype load tests on the two highest-traffic modules. The data was clear: a full rewrite would consume five to six months with high integration risk. Instead, I proposed a strangler fig migration: extract those two modules first, define measurable criteria for when additional extractions made sense, and keep everything else in the monolith until it actually needed to move. I presented the trade-offs to the CTO and investors with metrics, not opinions. The data made the conversation shorter than it would have been.

We shipped the first extracted module in six weeks. Performance on those endpoints improved by roughly 40%. The remaining monolith stayed stable through the acquisition two years later, with no big-bang rewrite required. What I'd do differently: run the benchmarks even earlier in the debate. The moment I put numbers on the table, half the disagreement evaporated. I lost two weeks to arguments that data would have settled in a day.

---

## Story 4: Post-Acquisition Integration at Scale

**Best for:** "Tell me about navigating a major org change" / "How do you establish credibility in a new environment?" / "Tell me about cross-team architecture work"

When Benevity acquired Alaya in 2021, I went from being the lead technical decision-maker on a 5-person team to a Senior Staff IC inside an org 10x larger, with a Java microservices codebase I'd never touched and processes very different from startup mode. The task was to integrate Alaya's capabilities into Benevity's platform without losing the product velocity we'd built.

My first month was entirely about mapping before proposing. I read architecture docs, shadowed other teams, and asked more questions than I answered. I deliberately held back opinions until I understood what was already working and why. Once I'd built relationships with the platform and infra teams, I started contributing cross-team architecture decisions. I also identified that AI-augmented development workflows were a gap across the org, and started working on that in parallel.

Over 18 months, we successfully migrated core Alaya features into the Benevity platform. I contributed to three major cross-team architecture decisions and became the go-to resource on AI tooling adoption across two engineering teams. The lesson from this one: in a new org, the speed at which you slow down in month one directly determines how fast you can move in months three through twelve. I initially moved too fast trying to improve things. Listening first made me more effective than any technical contribution I could have made immediately.

---
