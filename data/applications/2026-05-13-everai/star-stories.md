# STAR Stories — EverAI, Tech Lead LLM & Generative AI

---

## Story 1: Building Alaya from Zero to Acquisition

**Best for:** "Tell me about a time you built something from scratch" / "How do you make technical decisions without a playbook?"

In 2016, I co-founded Alaya, a purpose and impact platform for employee engagement. We had no product, no customers, and no engineering team. My job was to architect and build the entire platform while the business was signing its first enterprise clients.

I chose Node.js and React, a stack pragmatic enough to reach a demo in weeks without over-engineering for hypothetical scale. The first three months were about shipping something we could show. After that, it was iterative expansion: multi-tenant architecture, the API layer, impact reporting, postal campaign tooling. I also hired the first three engineers and built CI/CD, code review culture, and architecture documentation from scratch.

The platform reached production and grew to 50+ enterprise clients across Switzerland and France. In 2021, Benevity, a Canadian unicorn at $1B+ valuation, acquired us. The acquisition validated the core decisions: no big-bang rewrites, no over-engineering, steady delivery.

Looking back, I would have invested in observability earlier. We added proper APM late, and debugging production issues took longer than it should have during a stretch of rapid growth. I'd also design for multi-tenancy from day zero rather than retrofitting it under pressure.

---

## Story 2: Driving AI Adoption Without Authority

**Best for:** "How do you influence without authority?" / "Tell me about leading a technical shift" / Tech Lead / Staff+ roles

At Benevity in 2022-2023, I was a Senior Staff IC with no direct reports. I'd seen what AI-assisted development could do, but the engineering teams hadn't adopted it yet. My goal was to change how two teams worked without having any management authority over them.

I started with three engineers who were already curious. Rather than a company-wide mandate, I built internal demos that showed concrete time savings: how much faster a PR review cycle ran with AI assistance, how shared prompt templates eliminated repetitive generation work. I ran informal lunch sessions with no required attendance. I built a shared repo of reusable templates and documented real examples of time saved, so the value was visible rather than claimed.

Within three months, roughly 70% of engineers on both teams had integrated AI-assisted workflows into their daily practice. I became the informal AI tooling lead across the org, without a title attached to it.

The lesson: a mandate-free adoption curve is slower, but it produces real advocates. The engineers who adopted on their own terms later pushed for it themselves when there was organisational friction. A top-down decree would have produced compliance, not advocacy.

---

## Story 3: Hard Architecture Decision Under Pressure

**Best for:** "Tell me about a technical trade-off you navigated" / "How do you handle technical debt while shipping features?"

At Alaya, our monolith was showing scaling cracks. The team was split: full microservices rewrite versus staying with a modular monolith. Investors were pushing for new features, not infrastructure work. I needed to make a defensible call.

I ran a two-week technical spike: prototype load tests comparing both approaches, concrete performance data rather than architectural opinions. I brought the results to the CTO and investors and proposed a strangler fig migration, extracting the two highest-traffic modules first, setting clear criteria for when to extract more, and leaving the rest of the monolith stable in the meantime.

The first extracted module shipped in six weeks. Performance on the busiest endpoints improved by roughly 40%. The monolith stayed stable all the way through the Benevity acquisition due diligence. We never needed a big-bang rewrite.

The hardest part wasn't the engineering; it was convincing people that not rewriting everything was the right call. The data made that argument. Next time I'd front-load the benchmarking to cut the debate shorter.

---

## Story 4: Navigating a Post-Acquisition Integration

**Best for:** "Tell me about joining a much larger organisation" / "How do you navigate change?" / "Cross-functional collaboration"

After the Benevity acquisition in 2021, I joined a team ten times larger than Alaya had ever been: different culture, different codebase (Java and microservices at scale), different processes and decision-making rhythms. My task was to integrate Alaya's capabilities into Benevity's platform while continuing to ship, without losing the velocity we'd built.

I spent the first month mapping the existing architecture before proposing anything. I built relationships with the platform and infra teams before pushing any technical opinions. The temptation when you've come from a founding role is to move fast and "fix" things. I had to consciously slow down.

Over the following year, I contributed to three major cross-team architecture decisions and migrated core Alaya features into Benevity's platform. I became the go-to person for AI tooling adoption across two engineering teams, and eventually led the prompt engineering and multi-agent workflow initiatives across the org.

What I'd do differently: I pushed too hard too early in the first weeks. The month of listening I eventually committed to should have been my first move, not the adjustment I made after hitting early friction.
