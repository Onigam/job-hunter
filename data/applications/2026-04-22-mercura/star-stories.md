# STAR Stories — Mercura / Founding Staff Engineer

---

## 1. Building Alaya from Zero to Acquisition

**Best for:** "Tell me about a time you built something from scratch" / "What does founding engineer mean to you?"

In 2016, I co-founded Alaya, a platform for employee engagement and impact reporting. We had no product, no customers, and no engineering team. My task was to architect and ship something substantial enough to sign enterprise clients within months while keeping the architecture sane enough to iterate on for years.

I chose a stack I knew I could move fast with (Node.js, React, PostgreSQL) and resisted the urge to over-engineer early abstractions. The first three months were heads-down on the core product loop. Once we had something worth showing, I built out the layer underneath: multi-tenant data isolation, a proper API layer, reporting pipelines that clients could actually use. As the first enterprise deals came in, I started hiring. The first three engineers joined over the course of a year, and I set the practices that would outlast my direct involvement: CI/CD, code review culture, lightweight architecture documentation.

By 2021, the platform was running for 50+ enterprise clients across Switzerland and France. Benevity, a Canadian company with a $1B+ valuation, acquired us. Their technical due diligence was clean. The architecture decisions from year one had held up through five years of real production load.

What I'd do differently: I underestimated the cost of retrofitting multi-tenancy at the application layer. We designed for it in the data model but not in the service layer, which created painful workarounds as client customizations multiplied. I'd design the tenancy model end-to-end from day zero next time.

---

## 2. Making a Hard Architecture Decision Under Pressure

**Best for:** "Tell me about a technical trade-off you navigated" / "How do you handle competing priorities between speed and correctness?"

Partway through scaling Alaya, the monolith started showing cracks. Response times were degrading on high-traffic endpoints, the deployment pipeline was getting unwieldy, and engineers were tripping over each other in the same codebase. One camp wanted a full microservices rewrite. I disagreed, because a big-bang rewrite during a period when investors were expecting feature velocity was a bet we couldn't afford to lose.

My task was to make a defensible call and get everyone aligned behind it, including non-technical stakeholders who had heard the word "microservices" and wanted it. I ran a two-week spike. We built load tests simulating our peak traffic and ran them against the monolith, a prototype microservice extraction, and a modular-monolith variant. The data was clear: the modular monolith achieved most of the performance gain on the critical path while being significantly faster to deploy and safer to roll back.

I presented the findings with actual numbers, not architectural opinions. We adopted a strangler fig approach: extract the two highest-traffic modules, leave the rest intact, and define clear criteria for future extraction. The first module shipped in six weeks. Performance improved roughly 40% on those endpoints. The remaining monolith stayed stable all the way through the acquisition without any further extraction needed.

What I'd do differently: I'd run the benchmarking exercise in week one rather than week three. The first two weeks were spent in debate that the data resolved in a single afternoon.

---

## 3. Leading AI Adoption Without a Mandate

**Best for:** "How do you influence without authority?" / "Tell me about driving change in an organization"

At Benevity, I was a Senior Staff IC with no direct reports. In 2023, I started noticing patterns: code review cycles running three to four days, engineers spending significant time on repetitive scaffolding, a widening gap between what the team could ship and what the roadmap demanded. I believed AI-assisted development tooling could close that gap. I had no mandate to impose it.

So I didn't. I started with three engineers who were already curious and ran a two-hour demo session using tasks they'd actually done the week before, not contrived toy examples. Two of them started using GitHub Copilot and custom prompt templates immediately. Over the following month, I built a small internal repository of reusable prompt templates for our specific codebase patterns and pushed it to the shared repo. When wins showed up, I documented them in Slack without any fanfare: "this PR review cycle went from three days to half a day, here's what I did differently."

Within three months, roughly 70% of engineers on both teams were integrating AI tooling into their regular workflow. I became the informal AI tooling lead across the org, which led to a more formal role in evaluating and deploying LLM-based features in our product.

The lesson: a bottom-up approach is slower to start but stickier. Engineers who adopted on their own terms became internal advocates. A top-down mandate would have generated compliance, not adoption.

---

## 4. Navigating Post-Acquisition Integration

**Best for:** "Tell me about navigating organizational change" / "How do you establish credibility in a new environment?"

When Benevity acquired Alaya in 2021, I went from a five-person engineering team where I made most of the calls to an organization ten times that size, with a different culture, different codebase, and different conventions. The task was to integrate Alaya's capabilities into Benevity's platform without losing the product velocity we'd built, while also establishing credibility where nobody knew me.

I resisted the temptation to show up with opinions about how things should be done. The first month, I spent more time in architecture docs and Slack history than in the codebase, mapping the existing systems before suggesting anything. I introduced myself to the platform and infra teams without an agenda beyond understanding their constraints.

When I eventually started proposing changes, I framed them in terms that made sense to the org: not "this is how we did it at Alaya" but "here's how this interacts with your payment service boundary, and here's the trade-off." That framing helped three major cross-team architecture decisions land that I'd been advocating for over a period of months.

The honest reflection: I moved too fast in the first few weeks and got pushback that set me back. Slowing down and listening first would have made me more effective earlier. When you join a larger org as someone perceived as a "founder type," there's an expectation that you're going to steamroll. Subverting that expectation deliberately gave me much more room to actually move things.
