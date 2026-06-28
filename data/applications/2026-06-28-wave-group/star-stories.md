# STAR Stories — Wave Group, AI Engineer (TypeScript)

---

## 1. Building a Production Platform from Zero (Founding Engineer, End-to-End Delivery)

**Best for:** "Tell me about a time you built something from scratch" / "How do you work end-to-end?"

Back in 2016, I co-founded Alaya with a blank page and no product. We'd incorporated the company, had a vision for an employee purpose platform, and needed something demoable fast while the business side was already in conversation with enterprise clients. My job was to architect and build everything.

I picked a stack that could scale without becoming a liability: Node.js and TypeScript on the backend, React on the frontend, PostgreSQL for the data layer. The first three months were sprint mode to get something in front of prospects. Once we had a working core, I layered in the harder pieces: multi-tenant architecture, an API layer, impact reporting, integrations. Around month six I started hiring, which added a different kind of challenge. I had to codify decisions I'd been making intuitively so new engineers could contribute without breaking things. I set up CI/CD, introduced code review culture, and wrote architecture docs that were actually useful rather than decorative.

We ended up with 50+ enterprise clients across Switzerland and France. In 2021, Benevity acquired us, a Canadian unicorn valued north of $1B. The acquisition was a direct validation that the technical foundations held under real load and real scrutiny from a team that knew what they were looking at.

What I'd do differently: I added observability too late. We were flying blind on performance for longer than we should have been. I'd also design multi-tenancy in from day one rather than retrofitting it midway. That was the most painful week of the whole build.

---

## 2. Architecture Decision Under Pressure (Technical Trade-offs, Stakeholder Alignment)

**Best for:** "Tell me about a technical trade-off you navigated" / "How do you handle tech debt pressure?"

At Alaya around 2019, we hit the inflection point most growing products hit: the monolith was showing cracks under load, and the team was split between a full microservices rewrite and keeping things modular. Investors weren't interested in funding a rewrite. They wanted features.

My task was to make a defensible call. I ran a two-week technical spike comparing both approaches with prototype load tests. Then I presented the trade-offs to the CTO and investors using concrete numbers rather than architectural opinions. The pitch was a strangler-fig approach: extract the two highest-traffic modules first, keep the rest monolithic, and define clear criteria for when the next extraction would be warranted. I wanted to make it a decision framework, not a one-time judgment call.

The first extracted module shipped in six weeks. Busiest endpoints improved by roughly 40%. The remaining monolith stayed stable all the way through the Benevity acquisition without needing a big-bang rewrite.

The hardest part wasn't the technical work. It was convincing people that not rewriting everything was the right move. The data helped more than any argument did. Next time I'd front-load the benchmarking even earlier to compress the debate phase.

---

## 3. Driving AI Tooling Adoption Without Authority (Influence, AI Workflows, Change Management)

**Best for:** "How do you drive change in an org?" / "Tell me about leading without a title" / AI-specific culture building

At Benevity, I was a Senior Staff IC with no direct reports but a clear goal: get two engineering teams using AI-assisted development consistently. Nobody was using it, and I had no mandate, no budget for formal training, and no ability to require anything.

I started with three engineers who were already curious. I built a few internal demos showing concrete time savings on things they actually did: PR reviews, test generation, onboarding documentation. Then I ran informal sessions at lunch, optional, no slides, just live walkthroughs. I also created a small library of reusable prompt templates and pushed them to a shared repo so the barrier to trying things was close to zero. I documented a specific case where AI-assisted review cut a PR cycle from two days to four hours and circulated it within the team.

Within three months, around 70% of engineers on both teams had integrated AI tooling into their workflow. I became the informal AI lead across the org, which hadn't been a title anyone had planned for.

The lesson: mandates don't create habits. Engineers who adopted the tools on their own terms became advocates. A top-down push would have created compliance, not adoption.

---

## 4. Building a Semantic Search System for a Large Internal Codebase (AI Systems, Evaluation-Driven)

**Best for:** "Tell me about an AI system you built in production" / "How do you measure AI output quality?"

At Benevity, onboarding was slow. The codebase was large, documentation was scattered, and institutional knowledge lived in the heads of a handful of senior engineers. I decided to build an internal semantic search layer to surface relevant context for engineering queries.

The technical side was straightforward: embeddings over documentation and code comments, a retrieval pipeline, a query interface. The harder part was evaluation. "Good results" is subjective, and I'd seen too many AI projects iterate endlessly on retrieval without knowing whether they were improving. Before tuning anything, I built an offline evaluation harness: a curated set of known queries with expected outputs, plus a lightweight feedback loop where engineers could flag bad answers. This gave us a signal to optimize against.

Usage grew from a pilot of five engineers to roughly 30 active users within two months. Time-to-first-useful-answer on onboarding queries dropped noticeably, though we tracked it through session length as a proxy rather than a direct metric.

What I'd do differently: build the evaluation harness first, before touching retrieval logic at all. We spent three weeks iterating on retrieval before we had a reliable way to measure whether we were improving. The harness should come first.

---

## 5. Navigating Post-Acquisition Integration (Large Org, Cross-Team, Culture Change)

**Best for:** "Tell me about navigating organizational change" / "How do you work in a large, established codebase?"

After Benevity acquired Alaya in 2021, I joined a team roughly ten times larger than anything I'd worked in. Different codebase (Java, microservices), different release processes, different culture. My task was to integrate Alaya's product capabilities into Benevity's platform while keeping feature velocity up.

The instinct after a founding-engineer experience is to come in and fix things. I resisted that. The first month was almost entirely listening and mapping: understanding how the existing architecture fit together before proposing anything, building relationships with platform and infrastructure teams before pushing opinions. Once I had enough context, I drove the adoption of AI-augmented development workflows across the org and took on a cross-team architecture liaison role for the Europe-facing product surface. Over the following two years I contributed to three major cross-team architecture decisions.

Moving too fast initially would have been the mistake. The engineers who'd built the existing systems had context I didn't. Treating their codebase as a problem to solve rather than a system to understand was the wrong frame. Slowing down made me more effective faster.
