# STAR Stories — EggAI, Senior AI Software Engineer

---

## 1. Driving AI Tooling Adoption Without a Mandate

**Best for:** "Tell me about moving AI into production" / "How do you drive adoption?" / "Tell me about leading without authority"

At Benevity in 2023, I was a Senior Staff IC with no direct reports but a clear goal: get AI-assisted development into the daily workflow of two engineering teams that hadn't asked for it and had no obligation to adopt anything I proposed. The tools existed. The skepticism was real.

I started with three engineers who were already curious and ran informal demos showing specific, concrete savings, not theoretical ones. One example: a PR review cycle that went from four hours to under two with AI assistance. Then I committed reusable prompt templates to a shared repo, ran a couple of lunch sessions with no slides and no mandate, and made sure the path of least resistance was adoption. The tooling had to be genuinely useful or it wouldn't spread.

Within three months, roughly 70% of engineers on both teams were using AI-assisted code review and generation as part of their normal workflow. I became the informal AI tooling lead across the org without ever holding the title.

What I'd do differently: instrument adoption earlier. We were tracking it informally, but actual usage metrics would have let us iterate faster on which prompt templates people actually used versus which ones sat in the repo unread.

---

## 2. Making a Hard Architecture Call Under Investor Pressure

**Best for:** "Tell me about a technical trade-off" / "How do you handle production reliability?" / "Tell me about a time you pushed back"

In 2019, Alaya's monolith was showing real scaling cracks. The team was split between a full microservices rewrite and a modular monolith. Investors were pushing for new features, not rewrites, and the internal debate had been running for weeks with no resolution.

I ran a two-week technical spike with prototype load tests for both approaches. Not opinions, actual numbers. I brought the results to the CTO and investors with a concrete proposal: a strangler-fig migration, extract the two highest-traffic modules first, hold criteria for when to extract more, and don't touch the rest. A full rewrite would pause feature delivery for six-plus months; this approach could ship something in six weeks.

The first module shipped in six weeks. Endpoint performance on the busiest paths improved by around 40%. The remaining monolith held stable through the Benevity acquisition with no major incidents. The rewrite we didn't do would have killed the company's momentum at the worst possible time.

The hardest part was convincing people that not rewriting everything was the right call. Load test data made that conversation much shorter than it would have been with architectural opinions alone.

---

## 3. Building Alaya from a Blank Page to Production

**Best for:** "Tell me about building something from scratch" / "How do you approach production AI systems?" / "Founding engineer" context

In 2016, my co-founder and I started Alaya with a signed letter of intent from our first enterprise client and no product. I was the only technical person. The task was to architect and build a full platform alone, while the business was signing its first customers and expectations were real from day one.

I chose a stack that could scale without over-engineering it, Node.js, React, PostgreSQL, got to a first demo in three months, then expanded iteratively: multi-tenant architecture, an API layer, impact reporting, postal campaign tooling. As the client count grew I hired the first three engineers and built out CI/CD, code review culture, and architecture documentation from scratch.

By 2021 we had 50+ enterprise clients across Switzerland and France. Benevity acquired the company, which was a direct validation of the technical choices made in those early months. The core architecture held through the transition and into production at Benevity's scale.

Two things I'd do differently: wire in observability from day one rather than adding it later, and design explicitly for multi-tenancy upfront. We retrofitted both, and retrofitting is always expensive. I try to make that mistake expensive only once.

---

## 4. Post-Acquisition Integration: Joining a 10x-Larger Org

**Best for:** "How do you handle ambiguity?" / "Tell me about adapting to a new environment" / "Cross-team collaboration"

When Benevity acquired Alaya in 2021, I went from a 15-person company to joining an engineering org roughly ten times that size. Different culture, different codebase (Java and microservices at scale), different processes, different expectations for what "Senior Staff Engineer" meant.

My task was to integrate Alaya's capabilities into Benevity's platform without losing the product velocity we'd spent five years building, and to do it without the relationships or credibility I'd have at a place I'd grown up in.

I spent the first month mapping the existing architecture before proposing anything. I built relationships with platform and infra teams before pushing technical opinions. When I started advocating for AI-augmented workflows, I had enough context to frame it in terms that mattered to those teams, not just in terms of what had worked at Alaya. I contributed to three major cross-team architecture decisions and became the go-to person for AI tooling adoption across two engineering teams.

What I learned: I initially moved too fast trying to fix things that weren't broken. Slowing down and listening for the first thirty days made me more effective than I would have been pushing immediately. The credibility you earn by understanding the existing system before critiquing it is worth more than the time it costs.
