# STAR Stories — Zencoder Lead/Staff Platform Engineer

---

## 1. "Tell me about building platform foundations from scratch"

In 2016, I was the first technical hire at Alaya, a purpose and impact platform for employee engagement. There was no product, no customers, no existing code. The founders had commitments from a handful of enterprise clients who expected something working within three months.

My job was to build the entire platform: the product itself, the infrastructure underneath it, and the engineering culture on top of it. That meant making foundational decisions alone, which I'd later have to defend to engineers I'd hire.

I chose a stack deliberately boring for the time: Node.js, React, PostgreSQL. Fast enough to get to a first demo, familiar enough to hire for. Within the first month I set up CI/CD and a lightweight code review culture, because I'd seen what happens when you bolt those on later. I also designed for multi-tenancy from day one, after nearly making the mistake of skipping it.

Over five years the platform grew to 50+ enterprise clients across Switzerland and France. Benevity, a Canadian unicorn at $1B+ valuation, acquired us in 2021. The original architecture held through the acquisition without a rewrite.

If I were doing it again, I'd have added proper APM from the start. We added observability tools late and there were a few months where we were flying blind on production performance. That lesson made observability the first thing I instrument in any new system now.

---

## 2. "How do you get internal tools adopted? / Tell me about AI coding agent experience"

At Benevity, I was a Senior Staff IC with no direct reports but a clear opportunity: AI-assisted development had become viable, and most engineers on my two teams were skeptical or hadn't tried it seriously. My task was to move the needle without being able to mandate anything.

I started with three engineers who were curious. We ran structured experiments together, tracking time on specific tasks with and without AI assistance, then sharing the numbers. The most compelling result was a PR review cycle that went from roughly three hours to about 45 minutes. Those experiments became lunch-and-learn sessions, no slides, just live demos. I also built a shared repo of prompt templates tuned to our codebase and committed them to the monorepo, so engineers encountered them organically rather than through a Confluence page nobody reads.

Three months later, about 70% of engineers on both teams were using AI-assisted code review and generation regularly. I became the informal AI tooling lead across the org, which wasn't a formal role — it just happened.

What I'd do differently: I would have instrumented the adoption better from the start. I had anecdotes, but tracking DORA metrics before and after would have made the business case cleaner to hand off to leadership. The mandate-free approach was slower but stickier — engineers who chose to adopt it became advocates I couldn't have manufactured from a top-down decree.

---

## 3. "Tell me about a technical trade-off you had to defend under pressure"

At Alaya in 2019, we hit a scaling wall in the monolith. The two most trafficked modules were straining under load, and the team was split: some wanted a full microservices rewrite, others wanted to stay put. Investors were making clear they wanted features, not infrastructure work.

My job was to make a call and defend it. Full rewrites in startups are mostly how you kill a company. But doing nothing wasn't viable either.

I ran a two-week technical spike, building small prototypes of both approaches and running load tests. Then I brought the results to the CTO and the investors, framed not as "here's my preference" but as "here's what the data says." The data favored a strangler fig: extract the two highest-traffic modules, keep everything else monolithic, and define explicit criteria for what would trigger the next extraction.

We shipped the first extracted module in six weeks. Performance on the busiest endpoints improved by about 40%. The remaining monolith stayed stable through the Benevity acquisition two years later, no big-bang rewrite needed.

The hard part wasn't the technical decision. It was convincing people that "don't rewrite everything" was the right call. Getting everyone to a shared framework of extraction criteria removed the ideology from future conversations. After that, it was data, not opinion.

---

## 4. "Tell me about working across teams without formal authority"

When Benevity acquired Alaya in 2021, I joined a team about ten times the size of what I'd been in, with a different stack (Java and microservices vs. our Node.js platform), different release processes, and different expectations around documentation and review. My task was to integrate Alaya's capabilities into Benevity's platform without losing the velocity we'd built, and to do that without being the new engineer who arrives and immediately tells everyone they're doing it wrong.

I spent the first four weeks just mapping things: the architecture, the team relationships, who owned what, where the informal decision-making actually happened. I introduced no opinions in that window. After that, I built relationships specifically with the platform and infra teams, because I knew any meaningful integration work would flow through them. Only then did I start proposing changes, always framed as options rather than recommendations.

I contributed to three major cross-team architecture decisions in my first year, and got core Alaya features migrated into Benevity's main platform without disrupting either roadmap.

What I learned: speed of adoption in a new org is almost always slower than you expect, and it's almost always the right speed. The four weeks of listening made the following year significantly more effective. I moved too fast in the first few weeks before I caught myself. It was the correction that mattered.
