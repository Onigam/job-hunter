# STAR Stories — n8n / Sr Cloud Engineer

---

## Story 1: Building and Scaling the Alaya Platform from Zero

**Likely questions:** "Tell me about building a platform from scratch." / "How do you approach infrastructure decisions with no prior runway?" / "Walk me through a system you owned end-to-end."

In 2016, I co-founded Alaya with a blank page. No product, no inherited codebase, no infrastructure to inherit. The mandate was to build a multi-tenant SaaS platform for enterprise employee engagement that could sign clients within months.

The first call was the stack. I chose Node.js, React, and PostgreSQL: boring by design, easy to hire for, and fast to iterate on. I knew we'd never get to scale if we spent six months fighting an exotic framework choice. The first working demo was ready in week twelve. From there, I added the API layer, multi-tenant data isolation, impact reporting, and postal campaign features incrementally as paying clients came on board.

As we grew, I set up CI/CD pipelines, introduced code review culture, and wrote the architecture documentation that let new engineers ramp without bottlenecking me. Observability came late, which I'd change if I were doing it again. We were flying partially blind during a few incidents that better APM and tracing would have caught faster.

By 2021, the platform ran 50+ enterprise clients across Switzerland and France before Benevity, a Canadian company with a $1B+ valuation, acquired us. The technical decisions from those early weeks held up through the acquisition. Multi-tenancy, scaling headroom, CI/CD maturity: all of it. I'd add proper observability in month one next time, not month thirty-six.

---

## Story 2: Navigating a Hard Architecture Decision Under Pressure

**Likely questions:** "Tell me about a trade-off you had to navigate." / "How do you handle pressure to rewrite everything vs. fix what's broken?" / "Describe a time you had to say no to a big architectural change."

About two years into Alaya, the monolith was showing cracks under load. The engineering team was split between a full microservices rewrite and staying monolithic. Investors wanted new features, not a six-month infrastructure pause. The debate had been running for three weeks without resolution.

My job was to make a defensible decision and move everyone forward.

I ran a two-week spike. I built prototypes for both approaches, ran load tests, documented the throughput numbers and projected maintenance costs, and brought concrete data to the CTO and investors instead of opinions. What I proposed was a strangler fig approach: extract only the two highest-traffic modules first, validate the extraction pattern, and keep the rest of the monolith stable until there was a specific reason to touch it.

We shipped the first extracted module six weeks later. Performance improved ~40% on those endpoints. The remaining monolith held through the acquisition without a big-bang rewrite. No quarter of product velocity lost.

The hard part wasn't the engineering; it was convincing people that not rewriting everything was the right call. Data made that argument easier. I'd run the benchmarks earlier next time and cut the debate from three weeks to three days.

---

## Story 3: Post-Acquisition Integration into a Much Larger Platform

**Likely questions:** "Tell me about working with a large, unfamiliar codebase." / "How do you operate in a new team where you have no existing relationships?" / "Describe a time you had to earn credibility quickly."

When Benevity acquired Alaya in 2021, I joined a company with a Java-based microservices platform, formal agile processes, and an engineering team ten times the size of what I'd come from. Different codebase. Different culture. Different everything.

My instinct was to move fast and start fixing things. I had to consciously override that instinct.

I spent the first month just mapping the existing architecture: reading code, attending architecture reviews, asking questions without pushing opinions. I built relationships with the platform and infrastructure teams before proposing anything. Once I had context and credibility, I contributed to three major cross-team architecture decisions affecting the Europe-facing product surface, drove CI/CD improvements, and introduced AI-augmented development workflows across two engineering teams. The core Alaya features were migrated into Benevity's platform within the first year.

The reflection I'd carry into any similar situation: a new environment is a context-gathering exercise first. Moving fast means understanding the landscape quickly so your proposals land, not proposing changes before you understand the constraints. I became the informal go-to on AI tooling not because I pushed it, but because I showed what it could do in terms people recognized from their own work.

---

## Story 4: Driving Adoption of AI Tooling Without a Mandate

**Likely questions:** "How do you influence without formal authority?" / "Tell me about introducing a new practice to a skeptical team." / "How do you get engineers to adopt new tooling?"

At Benevity, I was a Senior Staff IC with no direct reports. I wanted to introduce AI-assisted development practices across two engineering teams that didn't report to me. Pushing top-down would have gotten me compliance on paper and ignored behavior in practice.

I started with three engineers who were already curious. I ran informal demos showing concrete time savings on work they were already doing: PR reviews, boilerplate generation, documentation. I built reusable prompt templates and committed them to a shared internal repo so the knowledge wasn't trapped in my head. Then I ran lunch-and-learn sessions with no mandate and no required attendance.

Once those three engineers had real stories to tell, the sessions started filling up. I documented specific results: one engineer saved about two hours on a PR review cycle using a template I'd written. That kind of concrete evidence moved people more than any slide deck could.

Within three months, roughly 70% of engineers on both teams were using AI-assisted workflows regularly. I became the informal AI tooling lead across the org.

The lesson that stuck: mandate-free adoption is slower to start but far stickier. Engineers who adopt something on their own terms advocate for it internally. A decree from above gets you compliance; peer-driven adoption gets you actual behavior change.
