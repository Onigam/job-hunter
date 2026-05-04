# STAR Stories — Legion Health, Founding Engineer

---

## Story 1: Building a Platform from Zero to Acquisition

**Best for:** "Tell me about a time you built something from scratch" / "What does founding engineer mean to you?"

In 2016, I co-founded Alaya, a purpose and impact platform for employee engagement. We had no product, no customers, and no team. My task was to architect and build the entire thing alone while my co-founder was signing the first enterprise contracts.

I chose Node.js, React, and PostgreSQL, pragmatic choices I could move fast with and that wouldn't collapse under multi-tenant load. The first three months were about getting to a working demo, not a perfect one. I cut scope ruthlessly: one tenant, one core workflow, no bells. Once we had the first client in production, I expanded iteratively: a proper multi-tenant architecture, an API layer, impact reporting, postal campaign pipelines. When we started growing I hired and onboarded the first three engineers, set up CI/CD, established code review norms, and wrote the architecture docs that let others contribute without breaking things.

By 2021, the platform had 50+ enterprise clients across Switzerland and France. Benevity, a Canadian company valued at over $1B, acquired us. That acquisition was a direct validation of every technical decision I'd made from day one.

What I'd do differently: I'd add proper observability from the start. We instrumented late, which made performance debugging harder than it needed to be. I'd also design for multi-tenancy from day zero rather than retrofitting it at month four.

---

## Story 2: Making a Hard Architecture Call Under Investor Pressure

**Best for:** "Tell me about a technical trade-off you navigated" / "How do you handle technical debt vs. velocity?"

At Alaya, as we grew, the monolith started showing scaling cracks. Engineers were debating a full microservices rewrite. Investors, naturally, wanted new features, not rewrites. My job was to make a defensible call that wouldn't kill delivery velocity.

Rather than argue from intuition, I ran a two-week technical spike: prototype load tests comparing the full rewrite against a modular monolith approach. I brought the results to the CTO and investors with concrete numbers, not opinions. Performance deltas, migration complexity estimates, realistic timelines. The data pointed to a strangler fig migration: extract the two highest-traffic modules first, keep the rest stable, define clear criteria for what to extract next.

We shipped the first extracted module in six weeks. The busiest endpoints got about 40% faster. The remaining monolith held through the acquisition with no major incidents. No big-bang rewrite required.

The hardest part wasn't the engineering. It was convincing people that choosing NOT to rewrite everything was the right call. Data helped more than any argument. If I did it again, I'd benchmark earlier so the debate is shorter.

---

## Story 3: Driving AI Adoption Without a Mandate

**Best for:** "How do you influence without authority?" / "Tell me about introducing a new practice to a team"

At Benevity, I was a Senior Staff IC with no direct reports. I needed to get two engineering teams, neither of which reported to me, to adopt AI-assisted development practices. A top-down decree wasn't available to me, and even if it were, I didn't think it would stick.

I started with three engineers who were already curious. I built them internal demos showing concrete time savings on real tasks they recognized: PR review, boilerplate generation, test scaffolding. I ran informal sessions with no mandate attached, just "here's what I've been doing, come if you want." Alongside that, I created a shared repo of reusable prompt templates and started documenting real outcomes, things like "shaved two hours off a complex PR review cycle," in a format engineers could share peer-to-peer.

Within three months, roughly 70% of engineers on both teams were using AI-assisted code review and generation in their daily work. I became the informal AI tooling lead across the org, which is a strange title for a role no one formally gave me.

The lesson: adoption that happens by choice is stickier than adoption that happens by decree. Engineers who came to it on their own terms became internal advocates I never could have manufactured.

---

## Story 4: Navigating a Post-Acquisition Integration

**Best for:** "Tell me about a major transition you navigated" / "How do you work in a larger organization?"

When Benevity acquired Alaya in 2021, I went from a team of six to an organization of hundreds. Different codebase, different culture, different tooling stack. Java and microservices where I'd been running Node.js services. My task was to help integrate Alaya's capabilities without losing the product velocity we'd built.

I spent the first month not proposing anything. I mapped the existing architecture, read the ADRs, sat in on meetings I wasn't expected to be in. Before I pushed any technical opinions, I built relationships with the platform and infra teams so they understood where I was coming from and I understood their constraints. Then I drove adoption of AI-augmented engineering workflows across the teams I worked with, and became the cross-team architecture liaison for the Europe-facing product surface.

Over the next year I contributed to three major cross-team architecture decisions and successfully migrated the core Alaya features into Benevity's platform without a significant regression.

What I got wrong initially: I moved too fast trying to "fix" things that weren't actually broken in the new context. Slowing down and listening first made me significantly more effective. That's a lesson I carry now when I enter any new environment.

---

## Story 5: Designing a Compliant Data Pipeline Under Real Constraints

**Best for:** "Tell me about building something with strict data requirements" / "How do you handle compliance in engineering?"

At Alaya, we handled employee engagement data across enterprise clients in Switzerland and France, which meant GDPR compliance wasn't optional. We also had clients with strict data sovereignty requirements who needed guarantees about where their data sat and who could access it.

My task was to architect a data pipeline that could handle multi-tenant event ingestion, aggregated impact reporting, and audit logging, while giving each client verifiable guarantees about data isolation. This was a founding constraint, not an afterthought.

I designed a schema-per-tenant model in PostgreSQL with strict access controls at the application layer and row-level security policies as a second fence. Ingestion pipelines were built to tag and route events at the entry point so there was no downstream logic that could accidentally cross tenant boundaries. Audit logs were immutable by design, append-only tables with no delete path.

The system ran through the acquisition with no compliance incidents. During Benevity's due diligence process, the data isolation architecture was specifically called out as well-implemented. That was the moment I felt the early design decisions had paid off.

In hindsight, I'd invest earlier in tooling that makes compliance guarantees testable, property-based tests for isolation invariants rather than relying on manual review. That would have made onboarding new engineers to the constraints faster.
