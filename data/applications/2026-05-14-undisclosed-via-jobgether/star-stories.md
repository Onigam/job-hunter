# STAR Stories — Lead Applied AI Engineer (Undisclosed via Jobgether)

---

## Story 1: Driving AI Adoption Across Engineering Teams Without a Mandate

**Best for:** "How do you influence without authority?" / "Tell me about driving a cultural or technical change" / "How do you get engineers to adopt new tools?"

In 2023, Benevity's engineering org was aware of AI coding assistants but adoption was fragmented. Different engineers were experimenting individually, there was no shared practice, and I had no authority over the two teams involved. My task was to turn scattered curiosity into a coherent, org-wide capability, without anyone telling me to do it and without anyone else being told to follow.

I started with the three engineers who were already curious rather than trying to convince skeptics. With them, I built internal demos that showed measurable time savings on real work: a PR review cycle cut from a few hours to under thirty minutes using AI-assisted drafting. From there I ran informal sessions at lunch, no attendance requirement, no slides, just live demos on code people recognized. I built a shared repo of prompt templates and documented specific wins with rough numbers attached, so the results weren't abstract. The goal was to make adoption feel like a personal gain for each engineer, not a compliance exercise.

Within three months, roughly 70% of engineers on both teams were using AI-assisted code review and generation in their daily workflow. I became the informal AI tooling lead across the org. What I'd do differently: I'd instrument the productivity gains earlier so the evidence was harder to dismiss. The mandate-free approach was slower, but engineers who adopted on their own terms became internal advocates. That compounding effect wouldn't have happened with a top-down decree.

---

## Story 2: Building Alaya from Zero to Acquisition

**Best for:** "Tell me about building something from scratch" / "How do you handle ambiguity in a technical role?" / "What's the most complex system you've architected?"

In 2016, I co-founded Alaya, a purpose and impact platform for employee engagement. We had no customers, no codebase, no product, and the business was signing its first enterprise contracts while I was still writing the first lines of code. My task was to architect and build the entire platform, alone at first, in a way that would actually survive the transition from startup to scale.

I chose Node.js, React, and PostgreSQL as a pragmatic stack: mature enough to avoid reinventing primitives, flexible enough to iterate fast. I built the core features in the first three months to reach a demo that could close real deals. Then I iterated: multi-tenant architecture, API layer, impact reporting, postal donation campaigns. As we grew, I hired the first three engineers, set up CI/CD, introduced code review culture, and wrote architecture documentation that let new hires onboard in days rather than weeks.

The platform reached production with 50+ enterprise clients across Switzerland and France and was acquired by Benevity, a Canadian unicorn valued at over $1B, in 2021. The technical decisions I made in the first three months held up through that acquisition. In hindsight, I'd have invested in observability tooling much earlier. We added proper APM late, which made debugging production incidents harder than it needed to be. I also underestimated the cost of retrofitting multi-tenancy into early modules that weren't designed for it, so I'd design for that from day zero next time.

---

## Story 3: Making a Hard Architecture Decision Under Investor Pressure

**Best for:** "Tell me about a technical trade-off you navigated" / "How do you handle technical debt under pressure?" / "Tell me about a time you pushed back on stakeholders"

At Alaya, around 2019, the monolith was showing real scaling cracks under load. Two camps formed internally: full microservices rewrite versus a modular monolith approach. Investors were watching feature velocity, not architecture, and there was no appetite for a multi-quarter rewrite. My task was to make a defensible technical call that balanced long-term scalability with the reality that we had enterprise clients to serve.

I ran a two-week technical spike: built lightweight prototypes of both approaches, ran load tests against the two highest-traffic modules, and gathered real numbers. Then I presented the trade-offs directly to the CTO and our investors with concrete metrics rather than opinions. My proposal was a "strangler fig" migration: extract the two highest-traffic modules first, keep everything else monolithic, and define explicit criteria for when to extract additional modules. No big-bang rewrite.

We shipped the first extracted module in six weeks. Performance improved roughly 40% on the busiest endpoints. The remaining monolith stayed stable all the way through the Benevity acquisition. The hardest part wasn't the technical work; it was convincing people that "not rewriting everything" was the right call. Data helped. I'd run the benchmarks earlier next time to cut the debate shorter, because the time spent arguing cost more than the migration itself.

---

## Story 4: Cross-Team Architecture at Scale After Acquisition

**Best for:** "Tell me about navigating a large organizational change" / "How do you operate in a much larger engineering org?" / "Tell me about cross-functional collaboration"

When Benevity acquired Alaya in 2021, I went from a 10-person team to an engineering org roughly 10 times that size. Different culture, different codebase (Java-heavy microservices), different processes, different expectations around how decisions get made. My task was to integrate Alaya's product capabilities into Benevity's platform without losing the velocity we'd built, while simultaneously becoming useful and trusted in a structure I didn't know yet.

I spent the first month mapping the existing architecture before proposing anything. I asked questions instead of offering solutions. I built relationships with platform and infrastructure teams before pushing technical opinions, because in a larger org trust is a prerequisite for being heard. From that foundation I drove three major cross-team architecture decisions for the Europe-facing product surface and became the de facto go-to person for AI tooling adoption.

The integration was successful: core Alaya features were migrated into Benevity's platform, and I contributed meaningfully to the architecture that defined how the Europe surface evolved post-acquisition. The reflection I'd offer is that I initially moved too fast, trying to improve things that weren't broken by Alaya's standards but were fine by Benevity's. Slowing down and listening for the first month made me more effective for the two years that followed.

---

## Story 5: Choosing a Stack for a Long-Lived Platform

**Best for:** "How do you make technology decisions?" / "What's your philosophy on tech stack selection?" / "Tell me about a foundational decision that had long-term consequences"

At the founding of Alaya in 2016, one of the earliest non-trivial decisions was stack selection for a platform we expected to maintain and scale for years. This wasn't a toy project; we were signing enterprise contracts with compliance requirements and had exactly one engineer: me. The temptation was to choose the most powerful or most interesting stack. My task was to choose the right one.

I evaluated options against three criteria: speed to first production-ready feature, hiring pool depth in Geneva and remotely, and long-term operational simplicity. I chose Node.js, React, and PostgreSQL. Not the flashiest choices in 2016, but proven at scale, with large communities, and with enough flexibility to evolve the architecture as the product grew. I avoided over-engineering the data layer early, using PostgreSQL relationally first and adding complexity only when the data access patterns justified it.

That stack ran in production for five years before acquisition and handled 50+ enterprise clients without requiring a fundamental rewrite. When Benevity's engineers reviewed the codebase, they could navigate it without a prolonged onboarding. The lesson I'd carry into an AI engineering context: choose boring infrastructure for the parts you'll operate for years, and reserve the novelty budget for the parts that actually differentiate the product.
