# STAR Stories — Meshcapade Principal Engineer

Tailored for: technical leadership, SaaS platform scaling, ML-serving systems, post-acquisition context, influencing without authority.

---

## Story 1: Building Alaya from Zero to Acquisition

**Best for:** "Tell me about a time you built something from scratch" / "What's your founding engineer experience?" / "How do you handle ambiguity at scale?"

In 2016, I co-founded Alaya, an employee purpose and engagement platform. We had no codebase, no customers, and no runway to get things wrong. I was the only engineer for the first six months, which meant I had to make architecture calls that would still hold up years later, under real enterprise load, without the luxury of revisiting them every quarter.

I chose a pragmatic stack: Node.js, React, PostgreSQL. Not the most fashionable choices at the time, but ones I knew I could hire for, reason about, and scale incrementally. I shipped the first working product in three months to close the first enterprise client. From there, I built multi-tenancy into the data model, designed the API layer for extensibility, and set up the CI/CD pipeline before the second engineer joined. I hired and onboarded three engineers over the next two years, establishing code review culture and lightweight architecture documentation from the start.

By 2021, the platform served 50+ enterprise clients across Switzerland and France. Benevity, a Canadian company valued at over $1B, acquired us that year. The acquisition validated something more specific than "we built a good product": the technical decisions held. No emergency rewrites before the deal closed.

What I'd change: I waited too long to add proper observability. We added APM retroactively, which was painful. Next time, I'd instrument from day one.

---

## Story 2: Making a Hard Architecture Decision Under Pressure

**Best for:** "Tell me about a technical trade-off you navigated" / "How do you handle technical debt?" / "Walk me through a hard architectural call."

At Alaya around 2019, we had a monolith that was starting to buckle under load. The two highest-traffic modules (impact reporting and the notifications engine) were creating contention that was spilling into everything else. The team was split: some wanted a full microservices rewrite, others wanted to keep the monolith and just tune it. Investors were watching our velocity, so the wrong call in either direction had a cost.

I ran a two-week technical spike. We built lightweight prototypes of both approaches, load-tested them against realistic traffic scenarios, and put concrete numbers in front of the team, not opinions. What the data showed was that a full rewrite would take six months minimum and introduce regression risk across every feature. A targeted extraction of the two highest-load modules, with the monolith staying intact, could ship in six weeks and solve 80% of the problem.

I proposed the strangler-fig approach, presented the trade-offs clearly to the CTO and investors, and got alignment quickly once the numbers were visible. We extracted the reporting module first. Performance on those endpoints improved by ~40%. The remaining monolith stayed stable through the acquisition two years later.

The main thing I learned: people fight about "monolith vs microservices" as ideology. They stop fighting when you put measured baselines and realistic timelines in front of them. I'd do the benchmarks earlier now to cut the debate shorter.

---

## Story 3: Driving Adoption Without Formal Authority

**Best for:** "How do you lead without direct reports?" / "Tell me about influencing a team" / Principal and Staff+ interview questions

After the Benevity acquisition in 2021, I joined as a Senior Staff IC on a team ten times larger than Alaya. No direct reports, but I could see that the engineering orgs were not using AI-assisted development tools at all, and that the gap in productivity was real. I wanted to change that, but I had no mandate to do so.

I started small. I found three engineers who were already curious about GitHub Copilot and spent time with them building concrete workflow examples, things like prompt templates for PR reviews, automated test stub generation, structured commit message drafts. I measured the time savings on real tasks and documented a few specific cases, one of which cut a code review cycle from four hours to under two.

From there I ran informal lunch sessions, no calendar invitations to management, no "mandatory training" framing. Just demos with real numbers. I committed a shared prompt template repository to the org's GitHub and kept it maintained. Within three months, ~70% of engineers on two teams had integrated at least one AI tool into their daily workflow. I became the informal AI tooling lead across the org.

What this reinforced for me: mandate-free adoption is slower to start but sticks much better. Engineers who chose to use the tools became internal advocates. That's something you can't manufacture with a top-down directive.

---

## Story 4: Navigating a Post-Acquisition Integration

**Best for:** "Tell me about navigating a major organizational change" / "How do you work in a larger company after a startup?" (Particularly relevant given Meshcapade's own Epic Games acquisition)

When Benevity acquired Alaya in 2021, I went from a five-person engineering team to an organization of 50+ engineers with established processes, a Java-based microservices platform I'd never touched, and cultural norms I hadn't built. The risk wasn't technical; it was relational. Coming in as "the acquisition team" with strong opinions is a good way to get nothing done.

I spent the first month in listening mode, specifically mapping the existing architecture before proposing anything, and building relationships with the platform and infra teams before voicing technical opinions. When I did start contributing, I focused on areas where I could add genuine value and where my background was differentiated: the Europe-facing product surface, cross-team API contracts, and eventually AI tooling adoption.

Over the following year, I contributed to three major cross-team architecture decisions and became a consistent bridge between the Alaya product area and Benevity's platform teams. The transition from founding engineer to Staff IC in a large org required a real shift in how I measured impact, less "I built this" and more "this happened partly because I shaped the conversation."

If I were doing it again, I'd ask for explicit scope alignment in the first two weeks. Not because the org wasn't welcoming, but because ambiguity about where your remit ends slows everything down.

---
