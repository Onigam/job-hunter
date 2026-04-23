# STAR Stories — Momentic, Founding Engineer (Infrastructure)

Stories prioritized for: founding-stage infrastructure ownership, scaling distributed systems, technical decision-making under pressure, leading in small teams.

---

## Story 1: Building a Platform from Zero (Founding Engineer Experience)

**Best for:** "Tell me about a time you built something from scratch" / "What does founding engineer mean to you?" / "How do you handle ambiguity?"

In 2016, I co-founded Alaya, a purpose and employee engagement platform. We had a name, a rough product concept, and no customers. My job was to build the entire technical foundation before the business had any revenue to justify the decisions I was making.

I chose Node.js and PostgreSQL because they were mature, well-understood, and wouldn't require exotic expertise to hire around later. I didn't pick anything clever. In the first three months I shipped the core features needed to reach a first real demo, then iterated outward: multi-tenant architecture, an API layer that external clients could actually integrate, impact reporting, and eventually postal campaign tooling. When the team grew, I hired the first three engineers, set up CI/CD pipelines, established code review culture, and wrote the architecture documentation they'd need to work without me explaining everything in person.

By 2021 we had 50+ enterprise clients across Switzerland and France, and Benevity, a Canadian unicorn valued at over a billion dollars, acquired the company. That acquisition was a direct validation of the technical decisions made from day one, including some that felt risky at the time.

Looking back, I'd have invested in observability earlier. We bolted on proper APM too late, which made diagnosing performance issues harder than it needed to be. I'd also design for multi-tenancy from day zero rather than retrofitting it in, which cost us several painful weeks of migration work.

---

## Story 2: Making a Hard Infrastructure Decision Under Pressure

**Best for:** "Tell me about a technical trade-off" / "How do you handle scaling challenges?" / "Tell me about a time you disagreed with the team on a technical direction"

At Alaya, around 2019, the monolith was showing real scaling cracks. The team was split between a full microservices rewrite and staying monolithic. Investors were pushing for new features, not rewrites, and I had to make a defensible call without the luxury of pausing product delivery.

My job was to choose a migration path that balanced long-term scalability with short-term delivery, and to do it without burning the team on a multi-year rewrite.

I ran a two-week technical spike comparing both approaches, including prototype load tests on the highest-traffic endpoints. I presented the findings to the CTO and investors with concrete numbers, not opinions. My proposal was a strangler-fig migration: extract the two modules under the most load first, keep the rest of the monolith stable, and define explicit criteria for when to extract additional services. No big-bang rewrite.

We shipped the first extracted module in six weeks. Latency dropped by roughly 40% on those endpoints. The remaining monolith held stable all the way through the acquisition, and we never needed the full rewrite. The team's velocity didn't take the hit that a broader migration would have caused.

The hardest part wasn't the technical work, it was convincing people that "not rewriting everything" was actually the more ambitious call. Data helped a lot. Next time I'd front-load even more benchmarking to cut the debate time shorter.

---

## Story 3: Joining a Large Distributed System Post-Acquisition

**Best for:** "How do you adapt to a new engineering organization?" / "Tell me about working at scale" / "How do you ramp up in a complex codebase?"

When Benevity acquired Alaya in 2021, I went from being the most senior technical person in a 10-person company to a Senior Staff Engineer in an organization with 100+ engineers, a Java-heavy microservices architecture, and processes I'd never seen before. Different language, different codebase, different culture.

My task was to help integrate Alaya's capabilities into Benevity's platform while continuing to ship new features, without losing the product velocity we'd built or burning my credibility in the new org.

I spent the first month mapping the existing architecture before proposing anything. I built relationships with the platform and infrastructure teams before pushing technical opinions. Only then did I start driving things, including adoption of AI-assisted development practices (Copilot, prompt engineering patterns) and cross-team architecture proposals for the European product surface. I contributed to three major cross-team decisions and became the go-to person for AI tooling adoption across two engineering teams.

Within six months I was trusted to review architecture proposals from teams I didn't work with directly, which is not something you get by showing up and immediately telling people what they're doing wrong.

I initially moved too fast trying to fix things that weren't broken from my perspective. Slowing down and listening first made me significantly more effective. In a new org, credibility is the resource you're actually spending.

---

## Story 4: Driving Adoption Without Authority in a Small Engineering Org

**Best for:** "How do you lead without a title?" / "Tell me about influencing peers" / "How do you drive technical change in a skeptical team?"

At Benevity, I was an individual contributor with no direct reports. I wanted to change how two engineering teams worked by adding AI-assisted development to their daily workflow. Nobody asked me to do this, nobody was going to mandate it, and nobody on those teams reported to me.

My task was to get skeptical engineers to voluntarily change how they worked, without a top-down decree and without burning any goodwill in the process.

I started with three engineers who were already curious about AI tooling. I built small internal demos showing concrete time savings, things like cutting PR review cycle time by two hours on a real feature. I ran informal lunch-and-learn sessions with no attendance requirements. I created reusable prompt templates and committed them to a shared repo so the work compounded rather than staying in people's heads. I documented outcomes as short case studies, not metrics decks.

Within three months, roughly 70% of engineers on both teams were using AI-assisted code review and generation in their regular workflow. More importantly, the early adopters became internal advocates. They'd done it on their own terms, so they owned it.

The lesson I'd take to a founding-stage environment is that organic adoption is slower to start but much stickier than mandated adoption. In a small team where everyone has context and opinions, you can't afford to spend credibility on mandates. You build the thing that makes their job easier and let people find it.

---
