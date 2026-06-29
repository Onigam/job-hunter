# STAR Stories — Staff Platform Engineer @ hyperexponential

---

## Story 1: Building a Platform from Zero to Acquisition

**Best for:** "Tell me about building something from scratch" / "Founding engineer" / "How do you handle technical ambiguity at the start of a project?"

In 2016, I co-founded Alaya, a purpose-driven employee engagement platform, with no product, no customers, and no technical team. My job was to architect and build the entire platform while the business was signing its first enterprise clients, sometimes before the feature those clients expected actually existed.

I started by choosing a stack that could scale without over-engineering at day one: Node.js, React, PostgreSQL, structured for a team of one to move fast without accumulating irreversible debt. But some decisions had to be right from the start. Multi-tenancy was one of them. I designed the data isolation model before we had a second client, because I'd seen what retrofitting it looks like and I didn't want that problem. I also set up CI/CD and code review discipline early, knowing that deferred process debt compounds faster than technical debt.

Over five years, I grew the engineering team to four people, built out the API layer, impact reporting module, and postal campaign system, and kept the platform stable through a 10x growth in enterprise clients. In 2021, Benevity acquired us. The technical foundation held through the acquisition due-diligence process with no major surprises, which I count as a real result.

What I'd do differently: I invested in observability too late. We added proper APM roughly two years in, and there were production incidents before that which better instrumentation would have surfaced immediately. I'd also make the multi-tenancy model explicit in documentation from day one, rather than keeping it in my head where it can't help the next engineer.

---

## Story 2: Making a Hard Architecture Call Under Pressure

**Best for:** "Tell me about a technical trade-off you navigated" / "How do you handle technical debt?" / "Tell me about a time you influenced a key decision"

By 2019, the Alaya monolith was under stress. Some endpoints were slow, the codebase was getting hard to reason about, and the team had split into two camps: full microservices rewrite versus refactor in place. Investors wanted features, not rewrites, and the debate was consuming engineering energy without producing a decision.

My job was to make a defensible call, not just pick a side.

I ran a two-week technical spike: built two small prototypes, one as an extracted service and one as a refactored module, and ran load tests on both. The results were more decisive than I expected. The extracted service improved latency by ~40% on our two highest-traffic endpoints. But the operational overhead was also real, and a full rewrite would have taken six months minimum with significant execution risk. I wrote up the trade-offs with concrete numbers and presented them to the CTO and an investor, deliberately framing it as a risk decision rather than a technical opinion.

The proposal I landed on was a strangler fig approach: extract the two highest-traffic modules first, define clear criteria for when to extract more, leave the rest of the monolith intact. The first module shipped six weeks later. The monolith stayed stable through the acquisition two years after that. No big-bang rewrite was ever needed.

The hardest part wasn't the technical work. It was convincing people that not rewriting everything was the right call. Data made that argument possible. Next time I'd invest more in early benchmarking to shorten the debate and give people something concrete to disagree with sooner.

---

## Story 3: Driving Adoption Without a Mandate

**Best for:** "How do you influence without authority?" / "Tell me about leading at Staff level" / "How do you drive engineering culture change?"

At Benevity, I was a Senior Staff IC with no direct reports. I wanted to change how the engineering teams around me worked: specifically, to get them using AI-assisted tooling (GitHub Copilot, custom prompt templates, AI-augmented code review) as a normal part of their workflow. The problem was that I had no formal authority over either team.

A mandate from someone without authority almost always backfires, so I didn't try that.

I started with three engineers who were already curious about the tooling and ran an informal demo focused on something specific: how long did a typical PR review take, and how much could we reduce that with an AI-assisted checklist? The answer was concrete enough to share. I built a small library of reusable prompt templates and committed them to a shared repo. Then I ran a few informal lunch sessions, no slides, just live demos using real examples from our codebase. No attendance requirement, no follow-up email asking people to adopt.

Within three months, roughly 70% of engineers on both teams had integrated some form of AI-assisted workflow into their daily process. The more important outcome: they'd adopted it on their own terms, so they became internal advocates rather than reluctant followers. I didn't have to maintain momentum after the initial push.

That experience shaped how I think about internal platform adoption in general. You can't mandate good tooling. You show it working on a real problem, make it easy to pick up, and let people find it. The early adopters do more evangelism than you ever could with a top-down rollout.

---

## Story 4: Navigating a Post-Acquisition Integration

**Best for:** "Tell me about working in a large engineering org" / "Tell me about navigating change" / "How do you collaborate across teams at scale?"

When Benevity acquired Alaya in 2021, I went from a team of four to an engineering organization roughly ten times larger, with a different primary stack (Java, microservices), different release practices, and a culture I didn't know yet. The expectation was to continue delivering features while integrating Alaya's capabilities into the broader platform.

The unstated challenge was that I was now the person who knew the Alaya product best, in an org that had its own strong opinions, and I had to figure out where to add value without overplaying my hand.

I spent the first month mostly listening. I mapped the existing architecture, attended cross-team syncs without contributing much, and built relationships with the platform and infrastructure teams before forming public opinions. That felt slow, but it meant that when I did push a technical position, I had context for it and people had context for me.

Over the following year, I contributed to three major cross-team architecture decisions: API contract design between Alaya modules and the core platform, the migration path for our data isolation model, and the rollout strategy for AI-augmented development practices across two teams. None of those happened because I had positional authority. They happened because I'd spent time building enough trust to be heard.

The main thing I'd do differently: in my first few weeks, I moved too fast. I assumed that patterns I'd solved at Alaya were obviously right and tried to argue for them before I understood the context that had led Benevity to different choices. Slowing down and approaching it with more genuine curiosity made me more effective, not less.
