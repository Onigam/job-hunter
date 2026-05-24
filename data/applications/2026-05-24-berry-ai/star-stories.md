# STAR Stories — Berry AI (Founding Full Stack Engineer, LLM/Applied AI)

---

## 1. Building a Product from Zero to Acquisition

*Best for: "Tell me about a time you built something from scratch" / "What does founding engineer mean to you?"*

In 2016, I co-founded Alaya, an employee purpose and impact platform, with a co-founder who handled the business side and me handling everything technical. We had no product, no paying customers, and no engineering playbook. My task was to architect and build the entire platform alone, fast enough for the business to demo to enterprise clients within three months.

I made a deliberate choice early: pick a pragmatic stack (Node.js, React, PostgreSQL) rather than an interesting one. The goal was to get to a working demo, not to explore technology. In the first three months I built the core features, the multi-tenant data model, and enough of an API layer to support integrations. As the client list grew, I started hiring and onboarding the first engineers, which meant I also had to invest in CI/CD, code review habits, and enough architecture documentation that other people could work in the codebase without me as a bottleneck.

By 2021, the platform served 50+ enterprise clients across Switzerland and France, and Benevity, a Canadian unicorn with a valuation above $1B, acquired us. The acquisition itself was a validation of the technical bets made in those first few months: nothing had to be rewritten before the deal closed.

Looking back, I'd invest in observability earlier. We added proper APM late and paid for it in debugging time. I'd also design for multi-tenancy from day zero rather than retrofitting it, which cost us several painful refactoring cycles.

---

## 2. Making a Hard Architecture Call Under Pressure

*Best for: "Tell me about a technical trade-off you navigated" / "How do you handle technical debt?"*

About two years into building Alaya, the monolith was starting to show cracks under load. The team, which had grown to four engineers by then, was split on what to do: some wanted a full microservices rewrite, others preferred a modular monolith refactor. Meanwhile, the business was pushing for new features, not an architecture project. My job was to make a defensible call that didn't stall the product.

I pushed for a two-week spike before any decision. We built a small prototype of each approach and ran load tests against both. The data was clear enough to close most of the debate: a full rewrite would take six to nine months and carry significant risk, while a targeted extraction of the two highest-traffic modules could be done in about six weeks and would address ~80% of the actual performance problems.

I proposed a strangler-fig migration: extract those two modules first, define clear criteria for extracting others, leave the rest of the monolith alone. I presented the trade-offs to the CTO and investors with concrete benchmarks rather than architectural opinions, which helped.

The first module shipped in six weeks. Performance on the busiest endpoints improved by about 40%. The rest of the monolith stayed stable through the acquisition two years later. No big-bang rewrite ever happened, and in retrospect that was the right call.

The hardest part wasn't the technical work, it was convincing people that not rewriting everything was the responsible choice. Data shortened that conversation considerably.

---

## 3. Driving AI Adoption Without a Mandate

*Best for: "How do you lead without formal authority?" / "Tell me about introducing new tooling to a team"*

After the Benevity acquisition in 2021, I was a Senior Staff IC with no direct reports. In 2023, I wanted to shift how the engineering teams worked: GitHub Copilot, structured prompt patterns, AI-assisted code review. Two teams, maybe 15 engineers total, none of whom reported to me. The managers were open but not actively pushing it.

I started with three engineers who were already curious rather than trying to win over skeptics first. I built a few internal demos showing concrete time savings on tasks the team actually did, not toy examples. Things like: "here's a PR review cycle that took 45 minutes; here's how the same review went with this prompt pattern in 22 minutes." The demos weren't polished. That helped, actually, because they looked replicable.

Over a few weeks I ran informal lunch-and-learn sessions and committed reusable prompt templates to a shared repo. No mandates, no formal process, no management request. Just tools that worked sitting in a place where people could grab them.

Within three months, about 70% of engineers on both teams were using AI-assisted workflows regularly. More importantly, some of them started contributing their own templates and advocating for the approach in team planning sessions. That wouldn't have happened with a top-down rollout.

The reflection from this one is that the mandate-free path is slower but stickier. Engineers who choose to adopt something on their own terms become internal advocates. A decree produces compliance, not ownership.

---

## 4. Navigating a Post-Acquisition Integration

*Best for: "Tell me about navigating change" / "How do you work in a much larger organization than you're used to?"*

When Benevity acquired Alaya in 2021, I went from a six-person startup to a company with hundreds of engineers, a Java-based microservices platform, and a completely different way of making decisions. I was a Senior Staff Engineer on paper, but I had no credibility with anyone yet and no context on how the existing system actually worked.

My first instinct was to start proposing improvements. I caught myself doing that in the first two weeks and deliberately stopped. Instead I spent the first month mapping the architecture, sitting in on planning sessions, and asking questions rather than offering opinions. I focused on understanding the platform team and the infra team before saying anything about the surface I was responsible for.

That patience paid off in a way I didn't expect: by the time I had architectural opinions worth sharing, the people who needed to trust those opinions already knew me. I ended up contributing to three major cross-team architecture decisions in the first year and became the informal liaison for the Europe-facing product surface. The AI tooling work came out of credibility I'd built over six months of listening first.

What I'd do differently: I'd ask explicitly, early on, who the informal decision-makers are. In a large org, those people aren't always on the org chart, and finding them faster would have shortened the ramp-up time.
