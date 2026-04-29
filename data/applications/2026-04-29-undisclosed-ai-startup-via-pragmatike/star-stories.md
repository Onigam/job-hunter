# STAR Stories — Principal AI/ML Engineer

Stories selected for this role: production AI systems, technical leadership at principal level, architecture decisions under pressure, driving AI adoption, founding engineer credibility.

---

## 1. Driving AI Tooling Adoption Across Engineering Without Authority

*Best for: "How do you lead without formal authority?" / "Tell me about influencing technical change in a larger org" / "What's your approach to technical leadership at principal level?"*

After the Benevity acquisition in 2021, I joined as a Senior Staff Engineer on a team roughly ten times the size of Alaya. I had no direct reports and no mandate to change anything. I also had a strong conviction that AI-assisted development was about to meaningfully change how engineering teams operated, and I wanted to make that shift happen before it was obvious to everyone.

The challenge was that the two engineering teams had their own managers and their own entrenched processes. Anything that looked like a top-down initiative would get treated like one.

So I started by finding three engineers who were already curious and ran informal experiments with them. We built internal demos showing concrete time savings on real tasks from their actual work: PR review cycles, boilerplate generation, test scaffolding. I didn't pitch the philosophy. I showed output, let people ask questions, and left. From there I ran optional lunch-and-learn sessions, created reusable prompt templates tuned to our codebase, committed them to a shared internal repo, and documented real examples with actual time deltas.

Within three months, roughly 70% of engineers on both teams had integrated AI-assisted tooling into their regular workflow. I became the informal AI tooling lead across the org, which fed into more formal cross-team architecture work.

The reflection: mandate-free adoption is slower, but it sticks. Engineers who found their own reasons to use it became advocates. If I'd pushed top-down, I'd have gotten compliance, not adoption. That distinction compounds over time.

---

## 2. Making a Hard Architecture Decision Under Pressure

*Best for: "Tell me about a technical trade-off you navigated" / "How do you handle technical debt vs. delivery?" / "Describe a time you had to make a call with incomplete information"*

About three years into building Alaya, the monolith was starting to show real cracks under load. Two engineers were pushing for a full microservices rewrite. Investors were pushing for new features. I was in the middle, and the business couldn't afford months of architectural debate.

My task was to produce a defensible recommendation quickly, not run an open-ended evaluation while the product stood still.

I ran a focused two-week spike: built small prototypes of the two highest-traffic modules extracted as standalone services, ran load tests comparing them against the monolith baseline, and came back with actual numbers, not architectural opinions. The proposal I put to the CTO and investors was a strangler-fig approach: extract the two modules causing the most pain, hold everything else in place, and define clear criteria for when additional extraction would be justified.

We shipped the first extracted module in six weeks. Performance on those endpoints improved roughly 40%. The rest of the monolith stayed stable through the Benevity acquisition two years later. No full rewrite was ever needed.

What I'd do differently: I'd run the benchmarks even earlier to cut the debate phase shorter. Without data, that conversation becomes a values argument about architecture philosophy. With data, it becomes a tradeoff discussion. Those are very different conversations.

---

## 3. Building a Production Platform from Zero to Acquisition

*Best for: "Tell me about building something from scratch" / "What's your founding engineer experience?" / "How do you make technical decisions under uncertainty?"*

In 2016, I co-founded Alaya, an employee engagement and impact platform. We had a business concept, no codebase, and our first enterprise client signed before the product existed.

My job was to architect and build the entire platform myself first, then grow and lead a small engineering team, all while we were live and clients had real expectations. The constraint was brutal: three months to a working demo or we'd lose the prospect.

I chose the pragmatic stack over the interesting one: Node.js, React, PostgreSQL. Not the most technically exciting set of choices, but the ones I could ship production-grade code in fastest and hire for in the Swiss market. The first version shipped on schedule. Over the next five years I built out multi-tenancy, an API layer, an impact reporting engine, postal campaign tooling, and eventually a small team with a real CI/CD culture and architecture review process.

The outcome: 50+ enterprise clients across Switzerland and France, and an acquisition by Benevity, a Canadian company with over $1B in valuation, in 2021. The platform survived their due diligence without major surprises, which I still consider the most honest validation of the calls I made under pressure early on.

What I'd change: I'd design for multi-tenancy from day zero rather than retrofitting it eighteen months in. I'd also add proper APM early. We added observability late and paid for it in debugging hours during our fastest growth phase.

---

## 4. Navigating a Post-Acquisition Technical Integration at Scale

*Best for: "Tell me about adapting to a new technical environment" / "How do you work cross-functionally with unfamiliar teams?" / "Describe navigating ambiguity in a larger org"*

When Benevity acquired Alaya in 2021, I went from a five-person team where I knew every line of production code to an org with dozens of engineers, a Java-heavy microservices codebase, and processes that predated me by years. The task was to integrate Alaya's capabilities into Benevity's platform while keeping product continuity for our existing clients.

My instinct was to start proposing changes immediately. I'd seen patterns I thought were inefficient, and I had strong opinions about where things could improve. I deliberately held back.

I spent the first four weeks mapping the existing architecture before suggesting anything, and building relationships with the platform and infrastructure teams before pushing technical opinions. That patience turned out to matter. When I later proposed changes, starting with AI tooling adoption and then moving to cross-team architecture discussions, I had enough context to frame them in terms the existing teams cared about. The proposals landed. I became the cross-team architecture liaison for the Europe-facing product surface and contributed to three major architecture decisions in the first year.

What I'd tell myself in week one: moving fast to fix things that aren't broken is a way to burn trust quickly in a new org. Listening first, even when it's uncomfortable, is not a passive act. It's how you earn the space to eventually change things.

---

## 5. Delivering a Semantic Search System Under Production Latency Constraints

*Best for: "Tell me about an ML or AI system you built end to end" / "How do you approach model integration in production?" / "Describe a time you had to balance model quality against real engineering constraints"*

At Benevity, I led a project to bring semantic search into one of our core content surfaces. The goal was to improve match quality on recommendations without increasing latency past what the product team had defined as acceptable: under 200ms end-to-end at p95. The existing keyword-based approach was fast but blind to meaning, and we were seeing recommendation quality degrade as the content corpus grew.

Before touching any infrastructure, I ran a manual relevance assessment on a representative sample of real queries. That baseline gave us something concrete to optimize toward, not just intuition about what "better" meant.

From there, I evaluated embedding models by integrating candidates against a staging replica and comparing latency profiles alongside quality scores. The latency constraint drove model selection more than raw capability. A model that improved relevance by 60% but blew the latency budget wasn't a candidate, regardless of benchmark performance. The final system used chunked embeddings stored in a vector index on AWS with a lightweight reranking layer for cases where semantic similarity and domain relevance diverged.

Relevance scores on our evaluation set improved roughly 35% relative to the keyword baseline. Latency came in under the 200ms ceiling at p95 under expected load.

What I'd do differently: build the evaluation harness first, before the experiments, not in parallel. We made a few dead-end model choices early because we were tuning to intuition rather than a real benchmark. Getting the ground truth dataset right upfront would have saved two or three weeks.
