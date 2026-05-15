# STAR Stories — deskbird Staff Software Engineer Interview Prep

---

## 1. Building a Platform from Zero (Founding Engineer / Scaling)

**Best for:** "Tell me about a time you built something from scratch" / "How do you make early technical decisions?"

In 2016 I co-founded Alaya, a purpose and impact platform for employee engagement. We had no product, no customers, and no team. My job was to build the entire thing.

The immediate task was to get something in front of enterprise clients fast, without making choices that would collapse under growth. With the business signing its first deals, I didn't have the luxury of over-architecting, but I also couldn't afford a rebuild six months in.

I chose Node.js, React, and PostgreSQL as the core stack, partly because they were well-understood and I could hire for them, partly because they'd hold up to a multi-tenant architecture without exotic infrastructure. I built the first working demo in three months, then iterated from there: API layer, multi-tenancy, impact reporting, a postal campaign module. When we needed to grow the team, I hired and onboarded the first three engineers, set up CI/CD, and established code review practices early so we weren't making those decisions later under pressure.

By 2021 the platform was running for 50+ enterprise clients across Switzerland and France. Benevity, a Canadian unicorn valued above $1B, acquired us. The platform didn't need a rewrite after acquisition because the early architectural calls had held.

If I were doing it again, I'd instrument the system for observability from day one. We added proper APM late, and debugging production issues in the early days was more painful than it needed to be. I'd also design for multi-tenancy from the first line, not retrofit it later.

---

## 2. Making an Architecture Decision Under Pressure (Technical Trade-offs)

**Best for:** "Tell me about a technical trade-off you navigated" / "How do you handle scaling challenges?"

At Alaya, around 2019, the monolith was showing strain. Some endpoints were degrading under load, and the team was split between a full microservices rewrite and staying monolithic. Investors were watching feature velocity, not architecture diagrams.

I needed to make a defensible call that actually shipped, not just a technically correct argument that stalled us.

I ran a two-week spike comparing both approaches with prototype load tests and real throughput numbers, then presented the trade-offs to the CTO and investors with data, not opinions. The case I made was for a strangler fig approach: extract the two highest-traffic modules first, keep the rest monolithic, and define clear criteria for when further extraction made sense. No big-bang rewrite.

The first extracted module shipped in six weeks. Performance on the busiest endpoints improved by roughly 40%. The rest of the monolith stayed stable through the acquisition, which was the real test.

The hardest part wasn't the engineering, it was convincing people that "not rewriting everything" was the right call. Having benchmarks to point to cut the debate short. I'd run the load tests even earlier next time to stop the argument before it starts.

---

## 3. Leading Adoption Without Authority (Staff IC Influence)

**Best for:** "How do you influence without authority?" / "Tell me about driving change across teams" / Staff+ roles

After the Benevity acquisition, I was a Senior Staff IC with no direct reports on a team ten times larger than what I'd come from. I needed to change how engineers worked, specifically getting AI-assisted development tools into their daily workflows, without any formal mandate to do it.

The temptation was to go top-down, but I'd watched that approach backfire in other organizations. Engineers adopt tools on their own terms or they find workarounds.

I started with three engineers who were visibly curious. I built internal demos showing concrete time savings, ran informal lunch-and-learn sessions with no attendance requirement, and committed reusable prompt templates to a shared repo that anyone could pull from. When engineers started talking about results in their team standups, I documented those stories and circulated them. Nothing was mandated.

Within three months, roughly 70% of engineers across two teams were using AI-assisted code review and generation in their regular workflow. I became the informal AI tooling lead across the org, which gave me a platform to influence other practices as well.

The mandate-free approach was slower, but the adoption stuck. Engineers who chose it on their own terms became internal advocates. I couldn't have gotten that outcome with a decree.

---

## 4. Navigating a Complex Post-Acquisition Integration (Change at Scale)

**Best for:** "Tell me about navigating organizational change" / "Cross-functional collaboration" / "Joining a new, larger team"

When Benevity acquired Alaya in 2021, I went from a five-person engineering team to an org with 50+ engineers. Different codebase (primarily Java and microservices on their side), different release processes, different culture, different everything.

My task was to integrate Alaya's capabilities into Benevity's platform without losing the product velocity we'd built, while also figuring out how to be useful in an organization where most people didn't know who I was.

I spent the first month mapping the existing architecture before proposing anything. I built relationships with the platform and infrastructure teams before showing up with opinions. When I did start contributing technical direction, I had enough context to frame suggestions in terms of their existing constraints, not just what I'd done at Alaya.

I contributed to three major cross-team architecture decisions in the first year and became the go-to contact for AI tooling adoption across the Europe-facing product surface.

The thing I'd do differently: I initially moved too fast trying to fix things that weren't actually broken in the new context. Slowing down and listening for the first few months made me significantly more effective than I would have been if I'd just charged ahead. Context you don't have yet is always the most expensive thing to skip.

---

## 5. Designing for Real-Time Coordination (Integrations and Distributed State)

**Best for:** deskbird-specific technical question / "Tell me about a complex integrations challenge" / "How do you handle distributed systems?"

At Alaya, one of the hardest problems we hit wasn't scaling our own services. It was keeping state consistent across third-party calendar systems our clients were already running, primarily Google Workspace and Microsoft 365, while our platform served as the source of truth for employee engagement events and deadlines.

The task was building a sync layer that didn't corrupt data when external calendars were slow, returned errors, or modified events through their own interfaces in parallel with ours.

I designed an event-driven reconciliation architecture: each integration ran as an isolated module with its own retry logic, a dead-letter queue for failed syncs, and a conflict resolution policy we defined explicitly with product rather than handling implicitly in code. We wrote idempotency into every sync handler from the start so retries couldn't cause double-writes.

The result was a sync layer that handled partial outages in external APIs without cascading into data corruption on our side. We never had a major data integrity incident tied to calendar sync, which for an enterprise product is the bar you need to hit.

What I learned: the conflict resolution policy is a product decision disguised as a technical one. Getting that documented early saved us from relitigating it every time a client's admin made an unexpected change on their side.
