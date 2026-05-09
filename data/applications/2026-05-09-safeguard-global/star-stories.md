# STAR Stories — Safeguard Global, Principal Engineer

Stories selected for: distributed systems architecture, influencing without authority, multi-tenant SaaS, technical leadership at scale.

---

## 1. Making a Hard Architecture Decision Under Pressure

*Best for: "Tell me about a technical trade-off you navigated" / "How do you handle scaling challenges?"*

The situation was this: around 2019, Alaya's monolith was starting to crack under load. We had concurrent requests hitting shared database connections in ways we hadn't designed for, and two of our largest enterprise clients were complaining about slowdowns during peak campaign periods. The team was split between a full microservices rewrite and a modular monolith cleanup, and investors were actively pushing for new features rather than architectural work.

My job was to make a defensible call that balanced long-term scalability with the reality that we had a product roadmap to hit. I ran a two-week spike comparing both approaches, including prototype load tests, and came back with concrete numbers instead of opinions. The data showed that extracting two specific high-traffic modules would solve 80% of the problem at about 20% of the cost of a full rewrite. I proposed a strangler-fig migration with clear criteria for when to extract additional services.

We shipped the first extracted module in six weeks. Latency on our busiest endpoints dropped ~40%. The remaining monolith stayed stable all the way through the acquisition two years later, with no emergency rewrites.

Looking back, the hardest part wasn't the technical work, it was convincing people that "not rewriting everything" was actually the right call. Data helped a lot. I'd do the benchmarking even earlier next time to cut the debate shorter before positions get entrenched.

---

## 2. Leading Technical Change Without Formal Authority

*Best for: "Influence without authority" / "How do you drive adoption?" / Principal/Staff roles*

After the Benevity acquisition in 2021, I was a Senior Staff IC on a team roughly ten times larger than anything I'd worked with before. No direct reports. But I could see the engineering org was under-using AI-assisted tooling in ways that were costing real hours per week per engineer, and I thought I could help.

The task wasn't just adopting a tool, it was changing how people thought about their workflow. That's a culture problem as much as a technical one.

I started small. Three engineers who were already curious about GitHub Copilot volunteered to be early adopters. I built internal demos with concrete before/after examples showing time savings on real tasks (not toy examples), ran informal lunch-and-learn sessions with no mandate attached, and committed a shared library of reusable prompt templates to a repo everyone could pull from. I documented early wins in a format that engineers could forward to their managers.

Within three months, roughly 70% of engineers across two teams had integrated AI tools into their daily workflow. I became the informal AI tooling lead without ever having had the title or the reporting line.

The thing I'd do differently: I initially underestimated how much the framing mattered. "This saves time" landed better than "this is the future." Engineers respond to concrete, not visionary.

---

## 3. Building From Zero to Acquisition

*Best for: "Tell me about building something from scratch" / "How do you handle ambiguity?"*

In 2016 I co-founded Alaya with a co-founder who handled business development while I handled everything technical. We had a blank page, no existing codebase, no clients, and no budget for a team yet.

The task was to architect and build a multi-tenant enterprise SaaS platform fast enough to support the first client demos while also making technical decisions that wouldn't become liabilities at scale.

I chose a stack deliberately: Node.js and TypeScript for the backend (pragmatic, good ecosystem, easy to hire for), React for the frontend, PostgreSQL as the primary store. I built the core features over three months to get to a demo-ready state, then iterated: multi-tenancy, an API layer, impact reporting, postal campaign support. When we got the first paying clients, I hired and onboarded three engineers and set up the code review culture and CI/CD pipeline from scratch.

By 2021, the platform was live with 50+ enterprise clients across Switzerland and France. Benevity acquired us, which validated the technical decisions more concretely than any performance benchmark could.

If I had to redo it: I'd invest in observability much earlier. We added proper APM late, which meant some production issues took longer to diagnose than they should have. And I'd design multi-tenancy into the data model from day zero rather than retrofitting it at month four.

---

## 4. Navigating a Post-Acquisition Integration

*Best for: "Tell me about navigating organizational change" / "How do you work cross-functionally?"*

When Benevity acquired Alaya in 2021, I went from a founding team of eight people to a company with hundreds of engineers, a Java-based microservices platform, and processes I'd never seen. The Alaya codebase and the Benevity platform were built on entirely different assumptions.

My job was to migrate Alaya's core capabilities into Benevity's platform without losing the product velocity we'd built, while also integrating with a team that had its own established ways of working.

The first thing I did was spend a month just mapping: existing architecture, team ownership, deployment patterns, informal power structures. I didn't propose any changes during that month. I built relationships with platform and infrastructure teams before pushing technical opinions, because I knew that credibility in a new org is earned, not assumed. When I did start proposing changes, I framed them in terms of problems those teams already recognized rather than problems I'd noticed from the outside.

Over time I contributed to three major cross-team architecture decisions and became the go-to person on AI tooling across two engineering teams.

The lesson I took from this: moving fast in a new org is usually slower than it looks. I initially wanted to "fix" things that weren't actually broken from their perspective. Slowing down to listen made me measurably more effective within about six weeks.

---

## 5. Partnering With Data Engineering on Platform Architecture

*Best for: "Cross-functional technical collaboration" / "How do you work with data teams?"*

At Benevity, part of my senior staff role involved being an architecture liaison for the Europe-facing product surface. One recurring challenge was that the data engineering team and the application engineering teams were making decisions in isolation that created technical debt at the seams.

I was asked to help bridge that gap without being a formal member of either team. The specific problem was that our event schemas were evolving without coordination, which was causing downstream pipeline breaks that the data team discovered weeks after the fact.

I organized a working group with three engineers from each team. We did a joint audit of our shared event contracts, documented what was implicit (and therefore fragile), and agreed on a schema versioning convention that both sides could live with. I wrote the tooling to validate events against the schema at publish time, so breaking changes surfaced immediately rather than in production pipelines.

The result was that schema-related pipeline failures dropped to near zero over the next quarter, and the two teams had a shared vocabulary for discussing event contracts that they'd continue to use after I rotated off.

What I'd do differently: I'd have pushed for a joint schema registry earlier in the process. We solved it with tooling, which worked, but a shared ownership model for the schema definitions would have been more durable.
