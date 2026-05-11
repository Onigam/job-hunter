# Behavioral Interview Stories — Airweave, Founding Software Engineer, Data Infrastructure

---

## Story 1: Building Alaya's Data Platform from Zero

**Best for:** "Tell me about a time you built something from scratch" / "What does owning infrastructure actually mean to you?"

In 2016, my co-founder and I started Alaya with nothing but a product hypothesis and an empty repository. Enterprise clients were signing contracts before we had a working product, which meant I was making every architecture decision under real delivery pressure, not theoretical ones. I needed to ship fast enough to keep the business alive but make choices that wouldn't collapse under load a year later.

The data layer was the hardest part. We needed multi-tenant isolation from day one (you can't retrofit that cleanly later), a flexible schema for different campaign and activity types, sync pipelines that could feed into impact reporting dashboards, and an API surface that large enterprises wouldn't outgrow. I chose Node.js, PostgreSQL, and a document-storage approach that let us iterate on schema without painful migrations. I built everything incrementally, starting with the simplest thing that worked and adding complexity only when load forced it.

By year three, the platform was handling millions of events per month across 50+ enterprise clients in Switzerland and France. I'd grown the team from just me to four engineers, all working on the same codebase. When Benevity acquired us in 2021, the platform was still running on those original architectural choices, extended but never rewritten. That was the real measure for me.

Looking back, I would have added proper observability much earlier. We set up APM and distributed tracing late, which made debugging production issues slower than it needed to be. I'd also design multi-tenancy in on day one rather than treating it as a first extension.

---

## Story 2: Making a Hard Architecture Decision Under Pressure

**Best for:** "Tell me about a technical trade-off you navigated" / "How do you handle technical debt?" / "Tell me about a time you disagreed with the team on a technical direction"

At Alaya, around 2019, the monolith was showing scaling cracks. The team was split between a full microservices rewrite and a modular monolith approach. Investors were pushing for new features, not internal work. There was no obvious right answer, just opinions and deadline pressure.

My job was to make a defensible decision with real data, not settle a debate by seniority. I ran a two-week technical spike: prototype load tests on both approaches, concrete estimates on migration time and risk. I presented the results to the co-founder and our technical advisors with numbers and honest uncertainty ranges, not a polished narrative.

The proposal I landed on was a strangler-fig migration: extract the two highest-traffic modules first, keep the rest monolithic, define clear criteria for when to extract additional services. No big-bang rewrite. We shipped the first extracted module in about six weeks, and performance on the busiest endpoints improved by roughly 40%. The remaining monolith stayed stable through the acquisition two years later.

The hardest part wasn't the technical work, it was convincing people that "not rewriting everything" was the right call. Data helped more than arguments. I'd do even more early benchmarking next time to cut the debate period shorter.

---

## Story 3: Post-Acquisition Integration at Scale

**Best for:** "Tell me about navigating a big change" / "How do you work in a much larger organization?" / "Describe a time you had to adapt your technical approach"

When Benevity acquired Alaya in 2021, I went from a 10-person startup to a company ten times larger, with a Java microservices codebase, different deployment tooling, and processes I'd never used. I was a Senior Staff IC with no direct reports, but there was an implicit expectation that I'd drive technical continuity across the transition.

My instinct was to push our approaches fast. I didn't. I spent the first month just mapping the existing architecture and talking to platform and infra teams before proposing anything. I needed to understand what was already solved before suggesting alternatives, and I needed people to trust me before they'd seriously engage with what I had to say.

After that mapping period, I focused on two things: integrating Alaya's features into Benevity's platform without breaking them, and introducing AI-augmented development practices to teams that hadn't worked with them yet. For the second part I built internal demos showing concrete time savings, ran informal lunch sessions with no mandate attached, and committed reusable prompt templates and review patterns to a shared repo. Within three months, roughly 70% of engineers on both teams were using AI-assisted code review as part of their regular workflow.

What I took away from this was that moving fast in a new org often backfires. Slowing down to listen first made me more effective over the following year than any technical decision I made.

---

## Story 4: Leading Technical Standards Without Authority

**Best for:** "How do you influence without authority?" / "Tell me about setting technical direction in a team you didn't manage"

At Benevity, I was a Senior Staff IC responsible for cross-team architecture decisions, but I had no direct reports on either of the two teams I worked with most closely. When I needed to drive adoption of new AI development tooling across both teams, I had no mandate to use.

I started with three engineers who were already curious about the topic, not the skeptics. With them, I built a set of internal demos showing real time savings on work they were already doing: faster PR reviews, shorter debugging sessions, more consistent test coverage. I documented the results with specific examples rather than abstract claims.

From there I ran informal lunch sessions, open to anyone, no attendance pressure. I committed reusable artifacts to a shared repository so adoption required almost no effort from anyone who wanted to try it. Within three months the approach had spread to roughly 70% of engineers across both teams, and several of them became advocates who brought in other teams I hadn't reached yet.

The lesson for me was that mandate-free adoption is slower in the short term but much stickier. Engineers who chose it on their own terms became advocates. That outcome wasn't achievable with a top-down decree, even if I'd had the authority to issue one.

---
