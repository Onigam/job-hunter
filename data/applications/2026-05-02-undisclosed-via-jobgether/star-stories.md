# STAR Stories — Staff Software Engineer, AI Infrastructure (Undisclosed via Jobgether)

---

## 1. Building a Platform from Zero (Founding Engineer Ownership)

*Best for: "Tell me about a time you built something from scratch" / "How do you approach greenfield architecture?"*

In 2016, I co-founded Alaya, a purpose and impact platform for employee engagement. We had no product, no customers, no existing code. My task was to architect and build the entire platform from scratch, first alone, then with a growing team, while the business was signing its first enterprise clients in parallel.

The early choices mattered more than anything that came after. I went with Node.js, React, and PostgreSQL, partly because I knew them well enough to move fast, but more importantly because they'd scale without requiring a rewrite. I designed the data model for multi-tenancy from the first day, which turned out to be the right call — retrofitting that later would have been brutal. Within three months we had a working demo; within a year we were in production with real enterprise contracts.

What kept the platform sound as the team grew was process as much as architecture: CI/CD from the start, documented architectural decisions, code review culture before we needed it. When Benevity acquired us in 2021, their due diligence found a codebase that held up. We had 50+ enterprise clients across Switzerland and France, and no major structural debt.

What I'd do differently: I would have added proper APM much earlier. We flew blind on observability for longer than we should have, and adding it retroactively was painful.

---

## 2. Making a Hard Architecture Decision Under Pressure

*Best for: "Tell me about a technical trade-off you navigated" / "How do you handle technical debt?"*

At Alaya, around year three, the monolith started showing scaling cracks on our busiest endpoints. The engineering team was divided: full microservices rewrite, or modular monolith. Investors were pushing for new features, not rewrites. I needed to make a defensible call that balanced long-term scalability with the delivery pressure we were under.

Rather than argue from intuition, I ran a two-week technical spike. I built small prototypes of both approaches, ran load tests on the highest-traffic paths, and came back with concrete numbers rather than opinions. The rewrite option was faster on paper but carried huge migration risk mid-product. I proposed a strangler fig approach instead: extract the two highest-traffic modules first, keep everything else monolithic, and define explicit criteria for when to extract the next one.

We shipped the first extracted module in six weeks. Performance on those endpoints improved around 40%. The rest of the monolith stayed stable all the way through the acquisition, with no big-bang rewrite needed.

The hardest part wasn't the technical decision itself, it was convincing people that "not rewriting everything" was the right call. The data helped cut the debate short. Next time I'd do more benchmarking earlier, specifically to compress the discussion phase.

---

## 3. Navigating a Post-Acquisition Integration

*Best for: "Tell me about navigating change" / "How do you work across large, complex organizations?"*

When Benevity acquired Alaya in 2021, I went from a 15-person startup to a company ten times that size, with a Java-based microservices codebase, different deployment practices, different communication norms. My task was to help integrate Alaya's capabilities into Benevity's platform while keeping the product moving, without breaking the velocity we'd built.

My first instinct was to propose changes immediately. I'd seen how we'd done things at Alaya and assumed a lot of it was better. I forced myself to slow down instead. I spent the first month just mapping the existing architecture and building relationships with the platform and infra teams before pushing any technical opinions. That patience paid off: when I did bring forward ideas, I had enough context to frame them in terms of Benevity's constraints rather than my own preferences.

Over the following year, I drove adoption of AI-assisted development tools across two engineering teams, contributed to three major cross-team architecture decisions, and became a go-to liaison for the Europe-facing product surface. The work I'm most proud of is getting 70% of engineers on both teams using AI-assisted code review and generation within three months, without a top-down mandate, just through demos, reusable tooling, and documented time savings.

The lesson I took from it: in a large org, influence travels through relationships before it travels through arguments.

---

## 4. Driving AI Tooling Adoption Without a Mandate

*Best for: "How do you influence without authority?" / "Tell me about leading organizational change."*

At Benevity, I was a Senior Staff IC with no direct reports but a clear view that AI-assisted development tools could materially change how our teams worked. The problem was I had no authority to mandate anything, and engineering teams are rightly skeptical of top-down "you must use this tool" decrees.

I started with three engineers who were already curious, ran informal demos during lunch sessions, and focused entirely on concrete time savings: here's a PR review cycle that took two hours, here's the same review with AI assistance taking forty minutes. I built reusable prompt templates and committed them to a shared repo so there was something tangible to adopt, not just a concept.

Within three months, around 70% of engineers on the two teams I worked closely with had incorporated AI-assisted code review and generation into their regular workflow. The more important outcome was that they'd adopted it voluntarily, which meant they were also advocating for it internally. That organic spread is much stickier than anything a policy could have produced.

What I'd reinforce: the demos had to show something real, not polished. Engineers trust working examples more than they trust claims.

---
