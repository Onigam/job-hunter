# STAR Stories — Adaptyv Bio, Forward Deployed Engineer

Stories selected for a customer-facing, deeply technical integration role at an early-stage biotech/AI startup.

---

## Story 1: Building Alaya from blank page to acquisition

**Best for:** "Tell me about a time you built something from scratch" / "How do you work with customers while also building the product?"

In 2016, I co-founded Alaya, a purpose and engagement platform for enterprise clients. We had nothing: no code, no customers, no team. My job was to architect and ship the whole platform while the business was simultaneously signing its first contracts, which meant I was writing production code and demoing to real clients in the same week.

I chose a stack that could scale without over-engineering it: Node.js, React, PostgreSQL. The first three months were about getting to a working demo. From there I built iteratively: multi-tenant architecture, an API layer that enterprise clients could integrate with their HRIS systems, impact reporting, and postal campaign tooling. Around the 18-month mark I hired our first three engineers, established CI/CD, code review culture, and architecture documentation.

By 2021 the platform was running with 50+ enterprise clients across Switzerland and France. Benevity acquired us that year. For me, the acquisition validated that the architecture decisions made early, especially the API-first design and multi-tenancy approach, held up under real production scale across a diverse client base.

What I'd do differently: invest in observability and APM much earlier, and design for multi-tenancy from day zero instead of retrofitting it around month twelve.

---

## Story 2: Making a hard architecture call under pressure

**Best for:** "Tell me about a technical trade-off you navigated" / "How do you handle technical debt while shipping product?"

About three years into Alaya, the monolith was starting to crack under load. The engineering team was split between a full microservices rewrite and sticking with a modular monolith approach. Investors were pushing for features, not rewrites, and I had to make a defensible call with limited runway.

I ran a two-week technical spike comparing both approaches with prototype load tests, then presented the trade-offs to the CTO and investors with concrete metrics rather than opinions. I proposed a strangler fig migration: extract the two highest-traffic modules first, define clear criteria for when to extract more, and keep the rest monolithic and stable. No big-bang rewrite.

We shipped the first extracted module in six weeks. Performance improved around 40% on the busiest endpoints. The remaining monolith stayed stable through the acquisition two years later, without another major intervention.

The hardest part wasn't the technical work, it was convincing people that "not rewriting everything" was the right call. What cut the debate short was putting numbers on the table. People were arguing from intuition; load test data changed the conversation within a day. Next time I'd run those benchmarks even earlier, before the team had already formed opinions.

---

## Story 3: Navigating a post-acquisition integration

**Best for:** "Tell me about adapting to a new environment" / "How do you ramp up in a larger organization?"

When Benevity acquired us in 2021, I moved from a team of 8 to an organization 10x larger. Different culture, Java and microservices instead of our Node.js stack, a completely different planning cadence. I was a Senior Staff IC with no direct reports, and I needed to earn credibility from scratch in a new context.

I spent the first month doing almost no proposing. I mapped the existing architecture, sat in on cross-team meetings, and built relationships with the platform and infrastructure teams before pushing any technical opinions. That patience paid off: when I eventually brought forward changes, I already had allies in the rooms where decisions actually got made.

Over four years I contributed to three major cross-team architecture decisions and became the informal go-to for AI tooling and engineering workflow improvements across two engineering teams. The main thing I brought back to Benevity from the Alaya experience was a bias toward understanding incentives before proposing solutions.

The biggest adjustment: I moved too fast in the first few weeks, trying to "fix" things that weren't broken from the new org's perspective. Slowing down and genuinely understanding their context first made me substantially more effective over the following year.

---

## Story 4: Driving AI tooling adoption without authority

**Best for:** "How do you lead without a title?" / "Tell me about driving change in an organization" / "How do you influence cross-team?"

At Benevity I was a Senior Staff IC with no direct reports, but I wanted to change how engineers were working by introducing AI-assisted development practices across two teams that didn't report to me. There was no mandate, no budget. Just an observation that this would save people real time if they tried it.

I started with three engineers who were already curious and willing to experiment. I built internal demo tooling that showed concrete time savings, nothing aspirational: a specific PR review that took two hours the old way and twenty minutes with AI assistance. I ran informal lunch sessions, no mandatory attendance, just live demos and open Q&A. I committed reusable prompt templates to a shared repo so people could actually use what I was showing them, without any extra friction.

Within three months, around 70% of engineers across both teams were using AI-assisted code review and generation in their daily workflow. More importantly, because they'd adopted it on their own terms, they became advocates internally rather than passive adopters. That organic spread reached teams I hadn't even targeted.

The mandate-free approach was slower than a top-down decree would have been, but the adoption stuck. Engineers who chose to use it told their colleagues why it worked for them, which I couldn't have scripted.
