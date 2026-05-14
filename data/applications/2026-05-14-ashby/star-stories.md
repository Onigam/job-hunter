# STAR Stories — Ashby, Staff Platform Engineer (EU)

_Tailored for a role emphasizing platform ownership, end-to-end technical autonomy, and independent project leadership._

---

## Story 1: Building Alaya from Zero to Acquisition

**Best for:** "Tell me about a time you owned a product end-to-end" / "Describe a project you led independently from day one"

In 2016, I co-founded Alaya with a blank page: no codebase, no customers, and no other engineer. The company's premise was an employee purpose and engagement platform for large enterprises, and I was the only technical person at the table when we started signing the first clients.

I chose a pragmatic stack: Node.js on the backend, React on the frontend, PostgreSQL as the primary store. The goal was a working demo within three months. I wrote the product specs myself, made design decisions without a designer, and pushed the first version to production in about 12 weeks. After that, we started building the team. I hired three engineers over the next year and set up code review culture, CI/CD, and architecture documentation from the start because those things are harder to retrofit.

By 2021, Alaya had 50+ enterprise clients across Switzerland and France. Benevity, a Canadian unicorn at $1B+ valuation, acquired us, and the integration didn't require a full rewrite because the architecture had been sound from the beginning: multi-tenant from the start, a clean API layer, and service boundaries that could be stitched into Benevity's microservices platform without major surgery.

Looking back, I'd invest in observability earlier. We added proper APM late, which made debugging production issues slower than it needed to be. I'd also design for multi-tenancy more explicitly from day zero rather than retrofitting parts of it mid-growth.

---

## Story 2: Making a Hard Architecture Decision Under Pressure

**Best for:** "Tell me about a technical trade-off you navigated" / "How do you handle technical debt vs. delivery pressure?"

At Alaya, around year three, the monolith was starting to show strain under traffic and the team was split. One camp wanted a full microservices rewrite. The other wanted to stay the course. Meanwhile, investors were watching the roadmap and asking why we were spending cycles on infrastructure instead of features.

My job was to make a defensible call that neither ignored the scaling problem nor blew up our delivery velocity with a big-bang rewrite. Both sides had legitimate points, and arguing from intuition wasn't going to resolve it.

I ran a two-week technical spike: load tests, a prototype of each approach, concrete benchmarks comparing request latency and throughput under simulated peak traffic. Then I presented the trade-offs to the CTO and investors with data rather than opinions. The proposal was a strangler fig migration: extract the two highest-traffic modules first, prove the pattern works, keep the rest of the monolith stable while we do it, and define clear criteria for when to extract additional modules.

The first extracted module shipped in six weeks. Performance on the busiest endpoints improved ~40%. The remaining monolith stayed stable through the acquisition. No big-bang rewrite was ever needed.

What I'd do differently: generate that benchmarking data two weeks earlier. The debate ran longer than it needed to because both camps were arguing from gut feel. Once we had real numbers, the decision almost made itself.

---

## Story 3: Leading Without Formal Authority

**Best for:** "How do you drive change when you don't control the people?" / "Tell me about influencing without authority"

At Benevity post-acquisition, I was a Senior Staff IC with no direct reports. I needed to change how two engineering teams worked: specifically, get them to adopt AI-assisted development practices, including code review automation, shared prompt templates, and AI-augmented generation workflows. Neither team reported to me, and neither team had been asked to change their tooling.

The wrong move would have been to push a mandate through the engineering leadership chain. Engineers resist tooling changes that feel imposed, especially when they're already comfortable with how they work. So I started smaller. I found three engineers across both teams who were already curious about AI tools and worked with them directly, building demos that showed concrete time savings on things they actually cared about: PR review cycles, boilerplate generation, test scaffolding.

From there, I ran informal lunch-and-learn sessions: no calendar invites going three weeks out, no formal slides, just live demonstrations of tools in the actual codebase. I built shared infrastructure to make adoption easy: a prompt template library committed to a shared repo, a Slack channel for sharing what was working, and short write-ups documenting specific time savings ("saved two hours on a PR review cycle for this migration").

Within three months, roughly 70% of engineers across both teams were using some form of AI-assisted workflow. More importantly, they'd adopted it by choice, which meant they were advocating for it internally without me having to push. That's a stickier outcome than any top-down rollout.

What I'd do differently: get an exec sponsor earlier. Not to force adoption, but to provide air cover when skeptical managers asked why their engineers were spending time on tooling experimentation.

---

## Story 4: Navigating a Post-Acquisition Integration

**Best for:** "Tell me about navigating a major org change" / "How do you work in an environment very different from what you're used to?"

When Benevity acquired Alaya in 2021, I went from co-founder of a 10-person startup to Senior Staff Engineer in an org roughly 10 times larger: Java-heavy microservices, different tooling, different processes, and teams I'd never worked with. The product velocity we'd maintained at Alaya was something I wanted to preserve, but I was now an outsider in an established engineering culture.

My task was to integrate Alaya's capabilities into Benevity's platform while continuing to ship new features, without losing momentum and without alienating the teams I needed to work with.

The first month, I mapped the architecture before proposing anything. I sat in on team syncs, read ADRs, and asked a lot of questions about decisions I didn't agree with. I built relationships with platform and infrastructure teams before pushing any technical opinions. The instinct to "fix" things that worked differently from how we'd done it at Alaya was real, and I had to consciously slow it down.

Once I understood how decisions were made, I was able to contribute more effectively. I became the architecture liaison for the Europe-facing product surface, contributed to three major cross-team architecture decisions, and drove the AI tooling adoption described in the previous story.

The Alaya feature integration succeeded without a major rewrite. The lesson was simple in retrospect: new environments have institutional knowledge baked into their existing decisions, and the fastest way to become effective is to understand that knowledge before trying to change it.
