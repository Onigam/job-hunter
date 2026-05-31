# STAR Stories — EggAI Technical Team Lead, AI Agents

---

## Story 1: Building Alaya from Zero to Acquisition

**Best for:** "Tell me how you approach building something from scratch" / "How do you make architectural decisions under uncertainty?"

In 2016, I co-founded Alaya, an employee purpose and impact platform. There was no product, no customers, no codebase. The immediate task was to build something credible enough to demo to enterprise prospects while designing a foundation that could scale if it worked. I was the only engineer for the first several months.

The decisions I made early had long tails. I chose Node.js, React, and PostgreSQL because they were pragmatic, well-understood, and would let us hire generalist engineers later without creating a niche dependency. I built core features in the first three months, kept the architecture simple, and added multi-tenancy, an API layer, impact reporting, and postal campaign tools iteratively. When it came time to grow the team, I hired the first three engineers and built practices from scratch: CI/CD pipelines, code review culture, architecture documentation that actually got maintained.

By the time of the acquisition in 2021, the platform had 50+ enterprise clients across Switzerland and France. Benevity, a Canadian unicorn at over $1B valuation, acquired us. That outcome validated a lot of the early calls, but it also exposed gaps. We'd added observability late, which made debugging production incidents more painful than it needed to be. Multi-tenancy was retrofitted partway through rather than designed in from day one. Both are things I now treat as first-class requirements on any new system.

---

## Story 2: Driving AI Tooling Adoption Without Formal Authority

**Best for:** "Tell me about leading without being the official leader" / "How do you drive practice change across a team?" / Team Lead, Staff+ roles

At Benevity post-acquisition, I was a Senior Staff IC with no direct reports. But I could see that AI-assisted development was going to change how our teams worked, and nobody had a mandate to drive it. So I started doing it anyway.

The approach was deliberate. I didn't go to leadership with a proposal or ask for permission to run a program. I found three engineers who were already curious about AI tooling and started with them. We built a few internal demos together, things that showed concrete time savings on actual work we were already doing, like a shared prompt library that cut PR review cycles by roughly two hours. I ran informal lunch sessions: no attendance requirement, no slides, just something that worked.

The spread happened faster than I expected. Within three months, roughly 70% of engineers across both teams were using some form of AI-assisted workflow. I became the informal AI tooling lead without any title change. What that clarified for me is that mandate-free adoption is slower at the start but much stickier. Engineers who found it useful on their own terms became internal advocates. A top-down rollout would have produced compliance, not genuine integration.

---

## Story 3: Making a Hard Architecture Call Under Pressure

**Best for:** "Tell me about a technical trade-off you navigated" / "How do you handle technical debt?" / "Tell me about a time you had to push back"

At Alaya, as we scaled, the monolith started showing real strain under load. Two camps had formed: some wanted a full microservices rewrite, others wanted to stay monolithic and optimize. Investors were pushing for new features, not engineering rewrites. Classic setup where any decision was going to feel wrong to someone.

I pushed for a time-boxed spike before committing either way. We spent two weeks building prototypes of both approaches and running load tests against our actual traffic patterns. I presented the results to the CTO and investors with numbers, not opinions: here's what a full rewrite costs in engineering weeks, here's the performance delta on our three highest-traffic endpoints, here's what we could ship instead. I recommended a strangler fig: extract the two highest-traffic modules first, leave the rest in place, define clear criteria for what would trigger extracting the next one.

We shipped the first extracted module in about six weeks. Performance improved roughly 40% on those endpoints. The remaining monolith stayed stable through the acquisition two years later with no big-bang rewrite. The hardest part was getting alignment that "not rewriting everything" was the right call, which is a persuasion problem as much as a technical one. I learned to front-load benchmarking in these decisions because data cuts the debate time in half.

---

## Story 4: Integrating into a 10x Larger Organization

**Best for:** "Tell me about navigating a significant change" / "How do you work with teams you don't control?" / Cross-functional leadership

When Benevity acquired Alaya in 2021, I went from a team of eight to an organization of several hundred engineers. Different culture, different codebase (Java microservices instead of our Node.js stack), different processes. My title was Senior Staff Engineer, but in practice I was starting over in terms of organizational credibility.

What worked was simple but required discipline: I spent the first month listening and mapping before proposing anything. I sat in on architecture reviews, traced system ownership, and built relationships with engineers on platform and infrastructure teams through one-on-ones. I didn't try to fix things that seemed wrong, because I didn't have enough context yet to know what was a real problem versus a local optimization that made sense for their situation.

Once I had that map, I became effective at the things that needed cross-team coordination. I contributed to three major architecture decisions affecting multiple product surfaces and eventually became the main point of contact for the Europe-facing product layer. The lesson for me was that the credibility needed to influence a large organization has to be earned locally, team by team, through specific work rather than general reputation. Moving too fast in those first weeks would have made me less effective over the following years.
