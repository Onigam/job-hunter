# STAR Stories — Principal ML Ops Engineer (Undisclosed AI Startup via Pragmatike)

---

## Story 1: Building Production Infrastructure from Zero (Alaya)

**Best for:** "Tell me about building a system from scratch" / "What infrastructure decisions are you most proud of?" / "What does Principal-level ownership look like for you?"

In 2016, I co-founded Alaya with no existing codebase, no clients, and no infrastructure. The first engineering challenge was deciding what to build before the business had any revenue, which meant every architecture choice had to be fast enough to ship but durable enough not to become a liability when we had real enterprise clients. I chose a stack I could move quickly with but that wouldn't require a rewrite at scale: Node.js, React, PostgreSQL, deployed on AWS with Docker from the start.

The first three months were mostly solo work. I built the core product, set up CI/CD pipelines, designed the data model for multi-tenancy, and made the early API decisions that would define how we'd integrate with third-party platforms. Once we signed the first clients, I started hiring. Getting the first three engineers productive meant setting the standard for how we shipped: automated deploys, code review for everything, architecture docs before any major change. We went through that entire growth period without a single major outage during a client demo.

By the time Benevity acquired Alaya in 2021, the platform was running with 50+ enterprise clients across Switzerland and France. The technical due diligence confirmed what I'd bet on: the early infrastructure decisions held through scale. The one thing I'd do differently is instrument everything for observability from day one. We added proper APM late, and it cost us debugging time we couldn't afford during crunch periods. In a production AI system, that cost would be even higher.

---

## Story 2: Architecture Decision Under Pressure (Strangler Fig Migration)

**Best for:** "Tell me about a technical trade-off you navigated" / "How do you handle technical debt?" / "How do you make decisions when stakeholders disagree?"

About two years into building the Alaya platform, we hit a scaling ceiling in the monolith. The highest-traffic endpoints were showing latency spikes under load, and the team was split between a full microservices rewrite and a more conservative approach. Investors were pushing for new features, not infrastructure work, and the pressure was real.

I ran a two-week technical spike with two parallel prototypes: one extracting a service fully, one modularizing it in place. I load-tested both against realistic traffic patterns. The results didn't clearly favor either approach on pure performance, but the full extraction had a substantially longer delivery timeline with a much higher risk of regressions during migration. I brought the actual benchmark numbers to the CTO and investors, not opinions. The recommendation I made was a strangler fig migration: extract the two highest-traffic modules first, keep the rest monolithic, and define explicit criteria for when to extract additional modules. No big-bang rewrite.

The first extracted module shipped in six weeks. Performance on those endpoints improved by roughly 40%, and the underlying monolith stayed stable through the acquisition eighteen months later. The hardest part wasn't the technical work: it was convincing people that not rewriting everything was the right call. I learned that data cuts through architectural debates faster than any argument. Next time, I'd run the benchmarks earlier to shorten the decision cycle.

---

## Story 3: Driving AI Tooling Adoption Without Formal Authority

**Best for:** "Tell me about influencing without authority" / "How do you drive adoption of new tooling?" / "What's your approach to engineering culture change?"

At Benevity, I was a Senior Staff IC with no direct reports, but I could see that both engineering teams I worked with were leaving significant productivity on the table. GitHub Copilot existed, prompt patterns for code review existed, but adoption was near zero. I wanted to change that without being in a position to mandate it.

I started with three engineers who were already curious about AI tooling and ran a focused demo: not a theoretical benchmark, but an actual pull request review cycle from our backlog that normally took two hours, completed in under forty minutes using prompt-assisted review. I built a small internal repo of reusable prompt templates and committed it to a shared space. Then I ran informal lunch-and-learn sessions with no attendance requirement. No mandate, no metrics on who was participating, just demos that showed the time savings on real work.

Within three months, roughly 70% of engineers across both teams were using AI-assisted tooling in their daily workflows. I became the informal AI tooling lead for the organization. The main lesson was that mandate-free adoption is slower but stickier: engineers who adopted it on their own terms became internal advocates, which I couldn't have achieved with a top-down policy. If I did it again, I'd track the productivity metrics from the start rather than reconstructing them retrospectively.

---

## Story 4: Navigating Post-Acquisition Integration in a New Engineering Culture

**Best for:** "Tell me about navigating major organizational change" / "How do you work in large multi-team environments?" / "Tell me about a time you had to adapt quickly"

When Benevity acquired Alaya in 2021, I went from being the de facto CTO of a twenty-person company to a Senior Staff Engineer on a team ten times that size. The codebase was Java-based microservices, which I hadn't worked with in years. The culture, the release cadence, the architecture review process: all of it was different from what I'd built at Alaya.

I made a deliberate decision to spend the first month not proposing changes. I mapped the existing architecture, read the internal documentation, and built relationships with the platform and infra teams before expressing any technical opinions. I'd watched other founders fail at acquisition integrations by importing their startup's culture too fast, and I didn't want to make the same mistake.

Once I understood the landscape, I focused on the intersection between Alaya's capabilities and what Benevity's platform needed. Over the following year, I contributed to three major cross-team architecture decisions and drove the migration of core Alaya features into Benevity's platform. The AI tooling adoption work I ran also came from this period, as a natural extension of the product thinking I'd brought from the startup side. Looking back, I moved too fast on a few opinions in the first weeks. Slowing down and listening first made me significantly more effective once I actually started pushing on the technical direction.

---
