# STAR Stories — Supabase Platform Engineer (Multicloud)

---

## 1. Building Cloud-Portable Infrastructure at Alaya

**Best for:** "Tell me about a re-platforming or cloud migration initiative you led."

When Alaya reached ~30 enterprise clients, we had accumulated a set of AWS-specific dependencies that had made sense early on but were becoming a liability. Our architecture was tightly coupled to specific managed services in ways that made multi-region deployment painful and would have made any cloud migration very expensive. As the founding engineer and head of technology, it was on me to fix this without disrupting the product roadmap.

I ran a two-week audit, mapping every service that had a hard dependency on a specific AWS feature. The list was longer than expected. Rather than propose a full re-architecture (which would have stalled feature development for months), I proposed a phased approach: define abstraction boundaries first, then migrate service by service, starting with storage and queue infrastructure where the blast radius was contained.

We implemented provider-agnostic interfaces for our core services and moved our deployment pipeline to Kubernetes, which gave us the portability layer we needed. The first two modules went through the full migration in about eight weeks. By the time Benevity acquired us in 2021, the platform was portable enough that the integration team didn't face the vendor lock-in issues they often see in acquisitions.

What I'd do differently: I underestimated the documentation burden. Engineers joining the team six months later found the abstraction layer confusing because we'd moved fast and written the migration docs after the fact. I'd write the interface contracts before migrating, not after.

---

## 2. Making a Hard Architecture Decision Under Pressure

**Best for:** "Tell me about a technical trade-off you navigated" / "How do you handle technical debt?"

At Alaya, around 2019, the monolith was showing scaling cracks. Two modules were consuming a disproportionate share of database connections during peak load, and the team was split: full microservices rewrite versus modular monolith, or something in between. Investors were asking for new features, not a six-month internal project.

My job was to make a defensible call that didn't sacrifice either the delivery timeline or the long-term architecture. I ran a two-week technical spike. We built prototypes for both approaches, did load tests against our actual production traffic patterns, and documented the failure modes for each.

I proposed a strangler-fig migration: extract the two highest-traffic modules first and run them as separate services, while leaving the rest of the monolith intact. We defined clear exit criteria for when to extract additional modules, so it wouldn't just drift indefinitely. I presented this to the board with the load test data attached, which made the conversation much shorter than I expected.

We shipped the first extracted module in six weeks. Performance on the busiest endpoints improved around 40%. The rest of the monolith held through the acquisition without a big-bang rewrite.

The reflection: the hardest part wasn't the technical decision, it was convincing people that not rewriting everything was the right call. I'd front-load the data gathering even more next time to cut the debate shorter.

---

## 3. Post-Acquisition Platform Integration at Benevity

**Best for:** "Tell me about navigating a major platform change" / "Working with large, distributed teams"

When Benevity acquired Alaya in 2021, I joined as Senior Staff Engineer on a team ten times larger than what I'd been used to. The codebase was Java-heavy with a well-established microservices architecture, and the processes were much more formal. I needed to integrate Alaya's features into Benevity's platform without creating a six-month integration hell.

The first thing I did was spend a month just mapping the existing architecture before proposing anything. I resisted the urge to recommend changes immediately, which is hard when you've been the founding engineer somewhere and you have strong opinions. I built relationships with the platform and infra teams first.

Once I understood what was there, I drove the migration of Alaya's core features into Benevity's infrastructure, which involved translating our Node.js/PostgreSQL services into their Java/microservices patterns. I also became a cross-team architecture liaison for the Europe-facing product surface, which meant navigating decisions across teams that didn't always agree.

Three major cross-team architecture decisions went through me as facilitator or co-author. The Alaya feature surface was fully integrated within the first year. I also drove AI tooling adoption across two engineering teams in that period, which ended up being the work I became most known for internally.

What I learned: moving fast by building trust first is still moving fast. The month I spent listening before proposing saved me three months of fighting.

---

## 4. Leading Without Formal Authority on AI Tooling Adoption

**Best for:** "How do you influence across teams without reporting lines?" / Staff+ / principal roles

At Benevity, I was a Senior Staff IC with no direct reports but a mandate to improve engineering practices, specifically around AI-assisted development. The challenge was that the engineers I needed to influence were on two separate teams that didn't report to me, and there was a real risk of it feeling like a top-down push for a new tool nobody asked for.

I started with three engineers who were already curious about the space. I built internal demos showing concrete, measurable time savings: a specific PR review cycle that had taken two hours and could be done in 20 minutes with a well-constructed prompt. I ran informal lunch sessions, no mandate, just live demos. I created a shared repository of prompt templates tied to patterns that were common in our codebase.

Within three months, about 70% of engineers on both teams were using AI-assisted code review and generation as a regular part of their workflow. I became the informal AI tooling lead across the organization. More importantly, the engineers who adopted it on their own terms started advocating for it internally, which created momentum I couldn't have manufactured through a top-down initiative.

The insight that stuck: the mandate-free approach is slower to start but much stickier. People own what they choose.

---

## 5. Scaling Multi-Tenant Infrastructure at Alaya

**Best for:** "Tell me about scaling a system" / "How do you handle infrastructure growth?"

When Alaya signed its first batch of large enterprise clients in 2018, our multi-tenancy model started showing problems we hadn't designed for. We'd built tenant isolation at the application layer but hadn't fully accounted for noisy-neighbor effects on the database side. One tenant's heavy reporting queries were degrading performance for others.

I owned the fix. I did a full audit of our PostgreSQL setup: query patterns per tenant, connection pooling, index coverage, and the way we were handling schema isolation. The root cause was that our tenant isolation was logical (same schema, tenant IDs as discriminators) rather than physical, and we had a handful of report queries that were doing full-table scans on large tenants.

We implemented a tiered approach: query optimization first for the specific offending patterns, then connection pooling improvements with PgBouncer, then a migration path to schema-per-tenant for our largest accounts. This let us fix the immediate problem without committing to a full schema migration for every tenant.

Performance stabilized within two weeks of the query optimizations. The largest enterprise clients were migrated to schema-per-tenant over the following quarter with no downtime. We onboarded 15 more enterprise clients over the next year on the improved foundation.

What I'd do differently: design for physical isolation earlier. The logical isolation shortcut made sense at 10 tenants and became expensive to fix at 50. Next time I'd build the migration path into the architecture from day one even if I didn't use it immediately.
