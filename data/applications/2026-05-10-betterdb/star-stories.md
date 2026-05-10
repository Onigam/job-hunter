# STAR Stories — BetterDB Founding Engineer Interview

---

## 1. Building a Production Platform from Zero

**Best for:** "Tell me about a time you built something from scratch" / "What's your founding engineer experience?"

In 2016, I co-founded Alaya, a purpose and engagement platform for enterprise employees. There was no codebase, no infrastructure, no team — just a product concept and the first few sales conversations already happening in parallel. My task was to go from blank page to a production-ready multi-tenant SaaS while the business was signing its first enterprise clients in Switzerland.

I made a deliberate call to keep the stack pragmatic: Node.js, React, PostgreSQL. Not because those were the most fashionable choices, but because they were the ones where I could move fast alone and hire for later. Within three months we had a working demo. Within a year the platform handled multi-tenant data isolation, an API layer, impact reporting, and postal campaign orchestration. I brought in the first three engineers, set up CI/CD and code review norms, and wrote the architecture documentation that kept everyone aligned as the team grew.

By 2021, we had 50+ enterprise clients across Switzerland and France. Benevity, a Canadian unicorn at $1B+ valuation, acquired us. The stack I chose day one held through the acquisition without a rewrite.

What I'd do differently: I added APM too late and paid for it during our first scaling incident. Multi-tenancy also came in as a retrofit rather than a design-time decision — that cost us two sprints we didn't have. Next time, both go in before the first user.

---

## 2. Making a Hard Architecture Call Under Business Pressure

**Best for:** "Tell me about a technical trade-off you navigated" / "How do you handle technical debt at speed?"

About two years into Alaya, our monolith started showing cracks under load. The engineering team was split between a full microservices rewrite and staying monolithic. Investors were actively pushing for new features, not rewrites. My task was to make a decision that was technically defensible and commercially survivable.

Rather than arguing from instinct, I ran a two-week spike: prototypes for both approaches, load tests on realistic query patterns, concrete throughput numbers. Then I walked the CTO and investors through the trade-offs with data rather than opinions. The case I made was for a strangler fig approach — extract the two highest-traffic modules first, leave the rest monolithic, define clear criteria before extracting anything else.

The first extracted module shipped in six weeks. The busiest endpoints got roughly 40% faster. The remaining monolith stayed stable through hypergrowth and through the acquisition itself. No big-bang rewrite was ever needed.

The hardest part wasn't the engineering — it was convincing people that "not rewriting everything" was the right answer. The benchmarks did the work. I'd front-load that data-gathering phase even earlier next time, because the debate cost us a week before I had numbers to show.

---

## 3. Driving AI Tooling Adoption Without a Mandate

**Best for:** "How do you influence without authority?" / "Tell me about leading a technical change" / Founding engineer or staff-level IC roles

At Benevity after the acquisition, I was a Senior Staff IC with no direct reports. I'd seen during my Alaya years how AI-assisted workflows could compress development time significantly, and I wanted to bring that to the two engineering teams I worked with. The problem was I couldn't tell anyone to do anything.

I started small: found three engineers who were already curious about GitHub Copilot, and worked with them on their actual tickets rather than running a separate demo project. We documented concrete wins — one case where an AI-assisted PR review caught a regression that would have taken a week to debug in production. I built a small library of reusable prompt templates and committed it to a shared repository. Then came informal lunch sessions, no agenda, just showing what was already working.

Within three months, around 70% of engineers on both teams had integrated some form of AI tooling into their regular workflow. I became the informal lead for AI practice adoption across the org, which eventually fed into a more formal initiative.

The takeaway I'd hand forward: mandate-driven rollouts of this kind of tooling almost always fail. Engineers who adopted it voluntarily became internal advocates I couldn't have manufactured top-down.

---

## 4. Navigating Post-Acquisition Integration at Scale

**Best for:** "Tell me about navigating a significant change" / "How do you work in a larger org than you're used to?"

When Benevity acquired Alaya in 2021, I went from a 15-person startup to an engineering organization ten times that size. Different culture, different codebase (Java microservices at scale), different everything. My task was to help integrate Alaya's capabilities into Benevity's platform while keeping product velocity from collapsing.

The first month I made a deliberate choice not to propose changes to anything. I spent it mapping the architecture, identifying the people whose trust I needed, and listening for what was actually broken versus what just felt different from what I was used to. Only after that did I start introducing opinions.

That patience paid off. I drove three major cross-team architecture decisions over the next year and became the go-to for the Europe-facing product surface and for AI tooling adoption. The core Alaya features migrated cleanly into the Benevity platform without a rewrite.

The honest reflection: my first instinct was to move fast and fix things. That's a founding engineer instinct and it's right in the right context — but in a large org with institutional knowledge I didn't have yet, it would have burned relationships before I'd earned the standing to use them. I had to retrain the muscle.

---

## 5. Owning an Observability Gap Before It Became a Crisis

**Best for:** "Tell me about a time you identified a systemic risk" / Infrastructure / platform-focused roles

At Alaya, we had almost no production observability for the first eighteen months. No APM, minimal logging, no alerting beyond "the server is down." I'd deprioritized it in favor of shipping features — a call that felt right early and started feeling wrong as we onboarded enterprise clients who expected SLA guarantees.

The turning point was a memory issue in our Redis-backed session layer that caused intermittent auth failures for a small set of users. We couldn't reproduce it locally and had no historical data to work from. It took four days to isolate the root cause. We had been flying blind.

After that I treated observability as a product requirement, not an engineering task. I introduced structured logging across the stack, set up basic APM with response-time alerting, and instrumented our Redis layer specifically — hit rate, eviction events, connection pool saturation. We documented a runbook for each alert class before enabling the alert.

The next time a cache anomaly appeared (about six months later), we caught it in seven minutes and resolved it in an hour. The data was already there; we just needed to look at it.

What I should have done differently: treating observability as a first-class concern from the start, the same way I treated security. It's one of the cases where the cost of deferral compounds — the longer you wait, the more you're flying blind during the period when your system is changing fastest.
