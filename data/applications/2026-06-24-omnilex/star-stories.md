# STAR Stories — Omnilex AI Engineer – Legal Search

---

## Story 1: Operating LLM workloads in production at Benevity
*Best for: "Tell me about your experience running AI systems in production" / "What does operational reliability look like for LLM pipelines?" / "How do you design eval frameworks for AI systems?"*

After the Alaya acquisition, I moved into Benevity as Senior Staff Engineer and eventually took on AI-augmented engineering as a focus area. Part of that meant running LLM-based tools in production: code review pipelines, generation workflows, and agent-based assistants used by two engineering teams daily.

The operational challenges were different from anything I'd managed before. These workloads had spiky latency profiles, where a request could complete in 800ms or 12 seconds depending on context window depth, and that variance affected upstream services that expected predictable timeouts. I built retry-with-backoff logic at the integration layer and set hard timeout ceilings with graceful degradation paths. I also invested in offline eval sets: because the quality of outputs was hard to measure at runtime, I built a set of fixed test queries with expected outputs that we ran against every model version before deploying. That caught two regressions before they reached users. On the injection side, because engineers were submitting code and PR descriptions into LLM prompts, I implemented output sanitization and defined what outbound channels a model response could trigger.

Reliability improved once I treated the model as a black box with known failure modes rather than a smart component that would handle edge cases gracefully.

I'd have started with a more explicit eval framework earlier. The tooling came before the systematic test sets, and there was a window where we were flying partly blind on quality.

---

## Story 2: Making a high-stakes architecture trade-off under delivery pressure
*Best for: "Tell me about a hard technical decision you made under constraints" / "How do you decide between competing retrieval or ranking strategies?" / "How do you approach precision vs. recall tradeoffs operationally?"*

At Alaya, the platform's monolithic architecture started showing load cracks as client volume grew. The team split between two camps: full microservices rewrite or incremental improvement. Neither investors nor clients had patience for a six-month engineering pause, and the risk of breaking live production integrations was real.

My job was to make a call the whole team could work from. I ran a two-week technical spike with prototype load tests on both approaches, so the decision was grounded in measured latency and failure modes rather than architectural preferences. I modeled the migration risk explicitly: which integrations were most likely to break, how we'd detect a regression, what a rollback would cost. I proposed a strangler fig approach, extracting the two highest-traffic modules first, with instrumented canary deploys and a defined rollback trigger if the new module's error rate exceeded the old one by more than 15%.

We shipped the first extracted module in about six weeks. Performance on the busiest endpoints improved by roughly 40%. The rest of the monolith stayed stable through the acquisition, with no big-bang rewrite and no unplanned rollback.

What I'd do differently: I'd run the benchmarks in week one instead of week two. The team anxiety before I had data to present was avoidable.

---

## Story 3: Building Alaya from zero to production
*Best for: "Tell me about a time you built something from scratch" / "How do you make early architectural decisions under uncertainty?" / "What does production engineering discipline look like at zero-to-one stage?"*

In 2016, I co-founded Alaya, a purpose and impact platform for enterprise HR teams. We had no product, no customers, no codebase.

My job was to architect and build the entire platform, alone at first, while the business was signing its first enterprise clients. I chose a pragmatic stack, Node.js, React, PostgreSQL, that could scale without over-engineering, and treated multi-tenancy, data isolation, and observability as first-class constraints from the start rather than retrofits. In the first three months I got to a working demo. Over the next two years I built out the full platform: API layer, impact reporting, postal campaign engine, admin tools, and an integration layer for third-party partners. When we started hiring, I onboarded three engineers into a codebase that had CI/CD, a code review culture, and architecture documentation already in place.

The platform reached production with 50+ enterprise clients across Switzerland and France. In 2021 it was acquired by Benevity, a Canadian unicorn with a $1B+ valuation, and the technical due diligence closed without major surprises.

Looking back, I'd have invested in APM much earlier. We added proper observability late, which made incident response slower than it needed to be in the early enterprise scaling phase.

---

## Story 4: Driving AI adoption without formal authority
*Best for: "How do you influence engineering culture without being a manager?" / "Tell me about a time you introduced new tooling or practices to a skeptical team" / "How do you build buy-in for technical change?"*

At Benevity I was a Senior Staff IC with no direct reports, but I wanted to drive adoption of AI-assisted development practices across two teams that didn't report to me. The risk of a mandate-from-above approach in an org that large was that people would comply without actually changing how they worked.

I started with three engineers who were already curious. I built internal tooling demos that showed concrete time savings on real tasks they recognized, not toy examples. I ran informal lunch-and-learn sessions with no attendance requirement. I wrote reusable prompt templates and committed them to a shared repo so the improvements were persistent and not dependent on me being in the room. I documented outcomes in terms the org cared about, one example: "saved 2 hours on a PR review cycle for a complex migration."

Within three months, roughly 70% of engineers on both teams were using AI-assisted code review and generation in their daily workflow. More importantly, several of them became internal advocates who pushed the practices to other teams without my involvement.

The mandate-free approach was slower but stickier. Engineers who adopted on their own terms became the best advocates, which I couldn't have manufactured with a top-down decree.
