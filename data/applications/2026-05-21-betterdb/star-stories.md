# STAR Stories — BetterDB Founding Engineer Interview

---

## 1. Building a Production Platform from Zero

**Best for:** "Tell me about a time you built something from scratch" / "What does founding engineer mean to you?" / "How do you handle ambiguity?"

In 2016, I co-founded Alaya, an employee engagement and purpose platform. There was no codebase, no infrastructure, no team. The product hypothesis existed but wasn't validated, and the first sales conversations were already happening in parallel.

My job was to go from blank page to production-ready multi-tenant SaaS while the business was signing enterprise clients in Switzerland and France. The stack call was mine alone: TypeScript, Node.js, React, PostgreSQL. Not the most fashionable choices at the time, but ones I could move fast on alone and hire for later. Within three months we had a working demo. Within a year the platform handled multi-tenant data isolation, a full REST API, impact reporting, and postal campaign orchestration. I brought in the first three engineers, set up CI/CD and code review norms, and wrote the architecture docs that kept the team aligned as we grew.

By 2021 we had 50+ enterprise clients. Benevity, a Canadian unicorn at $1B+ valuation, acquired us. The stack I chose on day one held through the acquisition without a rewrite.

What I'd do differently: I added APM too late and it cost us during our first real scaling incident. Multi-tenancy also came in as a retrofit rather than a design-time decision; that cost us two sprints we didn't have. Both of those go in before the first user next time.

---

## 2. Making a Hard Architecture Call Under Business Pressure

**Best for:** "Tell me about a technical trade-off you navigated" / "How do you handle technical debt when you're moving fast?"

About two years into Alaya, the monolith was showing cracks under load. The team was split between a full microservices rewrite and staying monolithic. Investors were pushing for new features, not internal rewrites, and we had real enterprise clients on the platform.

My task was to make a defensible technical decision that balanced long-term scalability with short-term delivery pressure, and to get buy-in from people who disagreed with each other.

Rather than arguing from instinct, I ran a two-week spike: prototypes of both approaches, load tests on realistic query patterns, concrete throughput numbers. Then I walked the CTO and investors through the trade-offs with data instead of opinions. The case I made was for a strangler fig migration: extract the two highest-traffic modules first, leave the rest monolithic, define clear criteria before touching anything else.

The first extracted module shipped in six weeks. The busiest endpoints got roughly 40% faster. The remaining monolith stayed stable through hypergrowth and through the acquisition. No big-bang rewrite was ever needed.

The hardest part wasn't the engineering; it was convincing people that "not rewriting everything" was the right answer. The benchmarks did the work. I'd front-load the data-gathering phase even earlier next time, because the debate cost us a week before I had numbers to show.

---

## 3. Owning an Observability Gap Before It Became a Crisis

**Best for:** "Tell me about a systemic risk you identified" / Infrastructure and platform roles / Directly relevant to BetterDB's product

For the first eighteen months at Alaya, we had almost no production observability. No APM, minimal structured logging, no alerting beyond "the server is unreachable." I'd deprioritized it in favor of shipping features, which felt right early and started feeling very wrong once we had enterprise clients expecting SLA guarantees.

The turning point was a memory issue in our Redis-backed session layer that caused intermittent auth failures for a subset of users. We couldn't reproduce it locally and had no historical data to work from. It took four days to isolate the root cause. We'd been flying blind.

After that I treated observability as a product requirement. I introduced structured logging across the stack, set up APM with response-time alerting, and instrumented the Redis layer specifically: hit rate, eviction events, connection pool saturation. We wrote a runbook for each alert class before enabling the alert.

The next time a cache anomaly appeared, around six months later, we caught it in seven minutes and resolved it in under an hour. The data was already there; we just needed to have built the system to surface it.

What I should have done differently: treat observability as a first-class concern from day one, the same way I treated security. The cost of deferral compounds. The longer you wait, the more you're flying blind during the period when your system is changing fastest. That's the insight BetterDB is selling, and it's the one I learned the hard way.

---

## 4. Driving Technical Change Without a Mandate

**Best for:** "How do you influence without authority?" / Staff+ and founding engineer roles / "Tell me about leading a team you didn't manage"

At Benevity after the acquisition, I was a Senior Staff IC with no direct reports but a clear goal: get two engineering teams to adopt AI-assisted development workflows. The problem was I couldn't tell anyone to do anything.

I started with three engineers who were already curious about GitHub Copilot, and worked with them on their actual tickets rather than building a separate demo project. We documented concrete wins: one case where an AI-assisted code review caught a regression that would have taken a week to surface in production. I built a small library of reusable prompt templates and committed it to a shared repo. Then came informal lunch sessions, no mandatory attendance, just demos of what was already working.

Within three months, around 70% of engineers on both teams had integrated some form of AI tooling into their regular workflow. I became the informal lead for AI practice adoption across the org, which eventually fed into a more formal initiative from leadership.

The takeaway I'd hand forward: mandate-driven rollouts of new tooling almost always underperform. Engineers who adopted this voluntarily became internal advocates I couldn't have manufactured with a top-down decree.

---

## 5. Navigating Post-Acquisition Integration at Scale

**Best for:** "Tell me about navigating significant organizational change" / "How do you adapt when the environment shifts radically?"

When Benevity acquired Alaya in 2021, I went from a 15-person startup to an engineering org roughly ten times that size. Different culture, different codebase (Java microservices at scale), different everything. The task was to help integrate Alaya's capabilities into Benevity's platform without losing the product velocity we'd built.

My first month I made a deliberate choice not to propose changes to anything. I spent it mapping the architecture, identifying the people whose trust I needed before I could push technical opinions, and listening for what was actually broken versus what just felt different from what I was used to. Only after that did I start introducing ideas.

That patience paid off in ways the impatient version of me would have missed. Over the following year I drove three major cross-team architecture decisions and became the go-to for the Europe-facing product surface and for AI tooling adoption. The core Alaya features migrated into the Benevity platform cleanly.

The honest reflection: my first instinct was to move fast and fix things. That's a founding engineer reflex and it's right in the right context. But in a large org with institutional knowledge I didn't have yet, it would have burned relationships before I'd earned the standing to use them. I had to retrain the muscle deliberately.
