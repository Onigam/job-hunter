# STAR Stories — BetterDB Founding Engineer

---

## 1. Building Alaya from Zero to Acquisition

**Best for:** "Tell me about a time you built something from scratch" / "What does being a founding engineer mean to you?"

When I tell people that at Alaya I had a blank page on day one, I mean that literally. No product, no codebase, no team. I'd co-founded the company with a business partner who had the client relationships; my job was to turn a product hypothesis into something those clients could actually use within months.

The stack call was mine alone: TypeScript, Node.js, PostgreSQL, with Redis for session management and caching. I made the bet that a pragmatic, boring stack would outlast a clever one. After about eighteen months I started hiring, which meant I also had to build the engineering culture from nothing: how we did code review, how we wrote architecture docs, how we thought about on-call. None of that was documented before because there was no one to document it for.

The platform reached 50+ enterprise clients across Switzerland and France. In 2021, Benevity acquired us. The due diligence process reviewed every architectural decision I'd made since day one, and none of them needed to be unwound for the acquisition to close.

Looking back, I'd have invested in observability earlier. When our first Redis caching anomaly hit, it took four days to diagnose because we had no historical state to work from. I carry that lesson clearly now: the cache doesn't tell you it's broken. You have to build the thing that does.

---

## 2. Hard Architecture Decision Under Pressure

**Best for:** "Tell me about a technical trade-off you navigated" / "How do you make decisions under uncertainty?"

Around 2018, Alaya's monolith was starting to show cracks: slow test suites, unpredictable deployments, modules nobody wanted to touch because the blast radius was unclear. The team was split between doing a full microservices rewrite and staying put. Investors were pushing for features, not architecture work, and a full rewrite would have consumed six months of capacity we didn't have.

My job was to make a call that held up technically without stalling the product. I ran a two-week spike, built rough prototypes of both approaches, and ran load tests with real traffic patterns. I put concrete numbers in front of the CTO and investors rather than opinions.

What I proposed was a strangler fig: extract the two highest-traffic modules first, keep the monolith stable for everything else, and define explicit criteria for when to extract the next module. No big-bang rewrite. The engineers who wanted the microservices path weren't happy initially, but the benchmarks made the case for me.

The first extracted module shipped in six weeks. Performance on those endpoints improved by roughly 40%. The monolith stayed stable all the way through the Benevity acquisition two years later, with no emergency rework needed.

The hardest part wasn't the technical decision itself; it was convincing people that "not rewriting everything" was the right call. Data helped. I'd run the benchmarks even earlier next time to cut the debate shorter.

---

## 3. Driving AI Tooling Adoption Without a Mandate

**Best for:** "How do you lead without formal authority?" / "Tell me about influencing a team toward a new way of working"

At Benevity I was a Senior Staff IC with no direct reports, tasked with driving adoption of AI-assisted development practices across two teams that didn't report to me. This was around 2022-2023, when GitHub Copilot had become mature enough to change how engineers actually worked, and the organizational expectation was that I'd make it happen without any top-down authority to force it.

My instinct was to start small. I found three engineers who were already curious, built quick internal demos showing concrete time savings on tasks they were already doing, and ran an informal lunch-and-learn. No mandatory attendance, no KPIs, just a demonstration. From there I built a library of reusable prompt templates, committed them to a shared repo, and documented specific cases where AI tooling had saved me two hours on a PR review cycle.

Engineers who tried it on their own terms became internal advocates, which I couldn't have manufactured with a directive. The organic spread mattered because they knew their teammates had chosen it freely.

Within three months, roughly 70% of engineers on both teams were using AI-assisted code review and generation regularly. I became the informal AI tooling lead across the org, which later influenced how we designed integrations with Anthropic and OpenAI on the product side.

What I'd do differently: I could have moved faster in some areas where I had clearer data earlier. I was too cautious about the mandate-free approach in places where the evidence was already strong enough to push harder.

---

## 4. Navigating a Post-Acquisition Integration

**Best for:** "Tell me about a time you had to adapt to a completely new environment" / "How do you navigate ambiguity in a new organization?"

When Benevity acquired Alaya in 2021, I joined a team roughly ten times larger than what I'd been building in. Different culture, different codebase (mostly Java and microservices where Alaya had been TypeScript), different ways of making decisions. My first instinct was to come in with opinions, which would have been a mistake.

I spent the first month mapping: architecture diagrams, team structures, who the go-to people were for which systems. I built relationships before I tried to change anything. When I did push technical opinions, I had enough context to frame them in terms of the new organization's goals rather than Alaya's playbook.

In practice: I drove integration of Alaya's core features into Benevity's platform, contributed to three major cross-team architecture decisions, and became the go-to engineer for AI tooling adoption across two teams. The fact that I was the founder of the acquired company could have made me a difficult hire. I tried to make my product history an asset instead, because I understood the feature decisions better than anyone else in the room.

What I'd do differently: I moved too slowly in some places where I actually had knowledge the team needed. Calibrating the right pace of engagement in a new organization is harder than it sounds, and I erred too far toward patience in the first few months.

---

## 5. Designing for Failure: Redis Observability Lesson

**Best for:** "Tell me about a mistake you made and what you learned" / "How do you approach system reliability?"

This story is really the story of a mistake I made at Alaya that took four days to recover from. We had a Redis caching anomaly in production: cache hit rates dropped, response times climbed, and clients started noticing latency on features that were supposed to be fast. The incident itself was recoverable, but the diagnosis was not.

We had no historical state for the Redis layer. No slowlog retention across restarts, no anomaly detection, no vector workload analytics. I'd treated Redis as a solved problem, a black box that worked until it didn't. When it didn't, we were reconstructing what had happened from scattered application logs and memory. Four days of engineering time to find a misconfigured TTL that took twenty minutes to fix once we knew where to look.

After that incident I rebuilt our approach to cache observability from scratch: persistent slowlog, alerting on memory and connection anomalies, hot key tracking. I also made it a hiring and onboarding topic so the next engineer who joined understood why those systems existed.

The reflection is obvious in hindsight: observability for the cache layer should be treated as a product requirement, not an afterthought. I treat it that way now, which is part of why BetterDB's product resonates with me. It's solving the exact problem I learned about the hard way.
