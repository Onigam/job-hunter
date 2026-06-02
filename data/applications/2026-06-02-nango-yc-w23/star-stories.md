# STAR Stories — Nango, Staff Backend Engineer

---

## Story 1: Building the Integration Layer at Alaya
*Best for: "Tell me about building a platform from scratch" / "What's a system you designed that others depended on?" / Founding engineer questions*

When I co-founded Alaya in 2016, the first meaningful technical challenge wasn't the core product. It was the integration layer. Our enterprise clients expected us to connect to their HR systems, their reporting tools, and their communication platforms on day one, and that expectation didn't give us the luxury of a "v1 that we'll clean up later."

My task was to design multi-tenant sync pipelines that worked reliably across a dozen different third-party APIs, each with its own auth model, rate limits, and tendency to change contracts without notice.

I built the layer around a set of adapter abstractions that isolated the third-party quirks from the core sync logic. Each integration was implemented as a self-contained module with its own retry handling and schema normalization. I chose to keep the OAuth token management centralized so that upstream credential refreshes didn't cascade into sync failures across unrelated clients. When one provider changed their API schema mid-integration, the isolation meant we fixed one adapter and the rest kept running.

By the time Benevity acquired us in 2021, the platform was serving 50+ enterprise clients across Switzerland and France. The integration layer had survived three major upstream API changes, a scaling event we hadn't anticipated, and a multi-tenancy expansion that would have been much harder if we'd cut corners in the early architecture. That reliability was part of what made the technical due diligence go smoothly.

The lesson I carry from that work: the investment in isolation and per-adapter encapsulation felt like over-engineering in month three. By year three, it was what kept us from constant firefighting. I'd make the same call earlier and more deliberately next time.

---

## Story 2: Making a Hard Architecture Call Without Enough Time
*Best for: "Tell me about a significant technical decision you made under pressure" / "How do you balance tech debt against delivery?"*

Around year three at Alaya, the monolith was showing scaling cracks. Two high-traffic endpoints were struggling under load, and the team had formed two clear camps: one pushing for a full microservices rewrite, the other arguing we should stay monolithic and just tune the database queries. Investors were watching the delivery roadmap, which meant any decision that looked like "we're stopping features to rewrite the platform" needed to be airtight.

I was the one who had to make the call and defend it.

Rather than argue from instinct, I ran a two-week spike. I built lightweight prototypes of both approaches against our actual production data patterns, with realistic load tests on the two bottleneck endpoints. When I presented the results, I brought numbers instead of architectural opinions: here's what we gain, here's the migration cost, here's what happens if we're wrong. The proposal that came out of it was a strangler-fig migration: extract those two specific services first, validate the approach, and define clear criteria before pulling anything else out of the monolith. No big-bang rewrite.

The first extracted service shipped in six weeks. Throughput on those endpoints improved by roughly 40%. The remaining monolith ran stable through the Benevity acquisition two years later, with no emergency rewrites in the queue.

The hardest part was convincing people that "don't rewrite everything" was actually the ambitious choice. Having the load test data cut the debate short. I'd push for that kind of benchmarking earlier next time, before people's positions harden into identity.

---

## Story 3: Joining a 10x Larger Organization and Not Breaking Things
*Best for: "Tell me about navigating organizational change" / "How do you work across teams you don't control?" / Cross-functional collaboration questions*

When Benevity acquired Alaya in 2021, I joined a company roughly ten times our size. Java microservices where we'd had Node.js, processes shaped by years of decisions I hadn't been part of, and a culture I didn't fully understand yet. My instinct, coming from a founder context, was to look for things to fix. That instinct was wrong.

My formal task was to integrate Alaya's capabilities into Benevity's platform while continuing to ship. My actual task was to do that without making enemies of the people I'd need to work with for the next several years.

I spent the first month not proposing changes. I mapped the architecture, read the documentation, and talked to engineers on the platform and infra teams before I had any opinions about what should be different. Once I had enough context, I started moving: I prepared two cross-team architecture proposals carefully and ran them past senior engineers before any formal presentation, which meant they'd already been through informal review before they hit a room. I seeded AI tooling adoption with three engineers who were curious, rather than lobbying management to mandate it, which made the eventual spread organic.

Over the following years, I contributed to three major cross-team architecture decisions, became the go-to person for the European product surface, and saw about 70% of engineers on the two teams I was working closest with adopt AI-assisted workflows, without any top-down directive.

The main thing I'd do differently: I moved too fast in the first two months, suggesting improvements to things I didn't fully understand yet. Slowing down and listening actually made me more effective. Engineers who'd lived with the codebase caught assumptions I would have gotten wrong.

---

## Story 4: Changing How Engineers Work Without a Mandate
*Best for: "How do you lead without authority?" / "Tell me about driving adoption of something new" / Staff+ and principal engineer questions*

At Benevity in 2022, I was a Senior Staff IC with no direct reports. I believed that AI-assisted development tools would meaningfully change how engineers on my teams worked, and that adopting them early was worth doing. The problem: I had no authority to require anything, two teams that had their own priorities, and a default organizational skepticism toward new tooling that always takes more time to change than you expect.

My task was real adoption, not surface compliance.

I started with three engineers who were already curious, not because they were the easiest targets, but because genuine early adopters would become advocates, and advocates spread things differently than mandates do. With that group, I ran demos on real work they recognized: PR review cycles, test scaffolding, documentation generation. I built prompt templates and committed them to a shared repo so the tooling was available and reusable without requiring anyone to come to me for help. I ran informal lunch sessions, no attendance requirement, framed as "here's what saved me time this week." When I had a concrete result, I documented it: a two-hour reduction in a PR review cycle for one engineer, written up in plain language and shared in a team channel.

Within three months, roughly 70% of engineers on both teams were using AI-assisted workflows regularly. More than that: several of them started advocating for it with their peers, which I couldn't have manufactured through any top-down mechanism.

Mandate-free adoption is slower to start. It's considerably stickier once it moves. Engineers who chose to adopt on their own terms became internal advocates, which gave the change a durability I couldn't have created through compliance.

---
