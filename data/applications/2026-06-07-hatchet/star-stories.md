# STAR Stories — Hatchet Full-Stack Engineer

---

## Story 1: Building Alaya from Zero to Acquisition

**Best for:** "Tell me about a time you built something from scratch" / founding engineer questions / "How do you handle ambiguity at the start of a project?"

In 2016, I co-founded Alaya, a purpose and impact platform for employee engagement. We had no product, no customers, and no one else writing code but me.

My job was to architect and ship the entire platform, alone at first, while the business was simultaneously signing its first enterprise clients. I had to make foundational decisions fast and live with them for years.

I chose a pragmatic stack: Node.js, React, PostgreSQL. Nothing exotic. The goal was to get to a first demo in three months and leave room to scale later. Over the next five years I built out multi-tenant architecture, an API layer, impact reporting, postal campaign tooling, and eventually hired and onboarded the first three engineers. I set up CI/CD from day one, wrote the first architecture docs, and established code review culture before the team grew. What I remember most is the eighteen months where the early data model decisions started fighting back. Every new enterprise client revealed a multi-tenancy assumption I'd gotten subtly wrong. We shipped through all of it.

The platform reached production with 50+ enterprise clients across Switzerland and France. Benevity, a Canadian unicorn with a $1B+ valuation, acquired the company in 2021.

What I'd do differently: invest in observability from the start, not as a retrofit. And design for multi-tenancy on day zero, because retrofitting it when you already have clients is genuinely painful.

---

## Story 2: Making a Hard Architecture Decision Under Pressure

**Best for:** "Tell me about a technical trade-off you navigated" / "How do you handle technical debt?" / system design discussions

At Alaya, around year three, we had a monolith that was starting to show cracks under load. The team was split: full microservices rewrite versus a modular monolith. Investors were asking for new features, not rewrites. I was the one who had to make the call.

The task was to make a defensible decision that balanced long-term scalability with the reality that we had enterprise clients depending on the product every day.

I ran a two-week technical spike. Built small prototypes of both approaches, ran load tests, and came back with concrete numbers rather than opinions. Then I proposed a strangler fig migration: extract the two highest-traffic modules first, keep the rest of the monolith stable, and define explicit criteria for when to extract additional modules. No big-bang rewrite, no betting the company on a multi-month refactor.

We shipped the first extracted module in six weeks. Performance improved roughly 40% on the busiest endpoints. The monolith stayed stable through the acquisition. We never had to touch most of it.

The hardest part wasn't the engineering; it was convincing people that not rewriting everything was the right call. The load test data helped more than any argument would have. I'd do more of that kind of early benchmarking sooner in future debates.

---

## Story 3: Leading Without Formal Authority

**Best for:** "How do you influence without a mandate?" / Staff+ questions / leading change across teams

At Benevity, after the acquisition, I was a Senior Staff IC with no direct reports but a clear need to change how two engineering teams worked. Specifically, I wanted to get them using AI-assisted development tools as part of their normal workflow.

No one asked me to do this. There was no executive mandate, no OKR attached to it. I just believed it would make people faster and I had enough credibility to give it a shot.

I started small: three engineers who were already curious. I built internal demos showing concrete time savings on real tasks they were already doing. Then I ran informal lunch-and-learn sessions, no attendance required, just demos. I created reusable prompt templates for common workflows like PR reviews and test generation, committed them to a shared repo, and documented real examples with numbers ("this PR review cycle that usually takes four hours took 90 minutes").

Within three months, roughly 70% of engineers across both teams were using AI-assisted code review and generation regularly. I didn't get there by asking for permission or creating a committee. I got there by making it obviously useful to a small group first and letting them carry the message.

What I'd do differently: I'd write the documentation earlier. The demos converted people; the docs made it stick.

---

## Story 4: Navigating a Post-Acquisition Integration

**Best for:** "Tell me about working in a large, complex organization" / "How do you get up to speed in a new codebase?" / cross-functional collaboration

When Benevity acquired Alaya in 2021, I went from a 15-person startup where I knew every line of code to a company with 500+ employees, a Java-based microservices platform, and processes I'd never encountered before. The culture, the codebase, and the decision-making structure were all new.

My task was to integrate Alaya's capabilities into Benevity's platform while continuing to ship new features, without losing the product velocity we'd built over five years.

I spent the first month almost entirely reading: mapping the existing architecture, understanding how teams made decisions, learning who owned what. Before I proposed any changes, I built relationships with the platform and infra teams whose cooperation I'd need. When I did start pushing technical opinions, I'd already done the work to understand how those teams thought about trade-offs. I also drove early adoption of AI-augmented development workflows across the org, which gave me a natural reason to work with engineers I hadn't met yet.

That approach resulted in a successful migration of Alaya's core features into Benevity's platform. I contributed to three major cross-team architecture decisions in the first year and became the informal AI tooling lead across two teams.

The lesson that stuck: I initially moved too fast trying to fix things that weren't broken in the new context. Slowing down to listen first made me more effective than any technical opinion I held at the time.
