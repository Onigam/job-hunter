# STAR Stories — n8n AI Engineering Manager

---

## 1. Driving AI Adoption Without Authority

**Best for:** "How do you lead a team through change?" / "Tell me about influencing without a title" / "How do you get engineers to adopt new practices?"

At Benevity, I was a Senior Staff IC with no direct reports but a clear problem to solve: our engineering teams were mostly ignoring AI coding tools, and the few who'd tried them hadn't stuck with it. My task was to change that across two teams I didn't manage, without being able to mandate anything.

I started small. Three engineers who were already curious became my first cohort. Rather than running formal training, I built concrete demos showing time saved on real tasks they already found painful: PR reviews, boilerplate generation, writing test cases for legacy code. I packaged the best prompts into a shared repo and ran informal sessions over lunch, framed as "here's what I found useful" rather than "here's what you should do."

The adoption curve was slower than a mandate would have produced, but it stuck. Within three months, about 70% of engineers on both teams were using AI-assisted workflows regularly. More importantly, several of them started improving the shared tooling themselves and advocating for it internally. That second-order effect was something I couldn't have manufactured top-down.

What I'd do differently: instrument the tooling from day one so I could show concrete time-savings data earlier. The stories I told were compelling, but numbers would have shortened the adoption curve.

---

## 2. Navigating a Post-Acquisition Integration

**Best for:** "Tell me about a time you navigated significant organizational change" / "How do you join a new, much larger team?" / "Cross-functional collaboration"

When Benevity acquired Alaya in 2021, I went from a team of eight to an engineering org ten times that size. Different codebase (Java microservices instead of our Node.js stack), different processes, and a culture I didn't fully understand yet. My task was to continue building product and integrating Alaya's capabilities into Benevity's platform, without losing the velocity we'd built.

I made a deliberate choice to spend the first four weeks mapping before proposing. I read architecture docs, attended meetings without an agenda of my own, and built relationships with the platform and infra teams before ever pushing a technical opinion. It felt slow, but it meant that when I did have suggestions, people had a reason to hear them out.

The outcome was stronger than I expected. I contributed to three major cross-team architecture decisions in the first year and became the primary liaison for the Europe-facing product surface. The AI tooling work I later drove grew directly from trust I'd built in those early months.

The lesson was harder to internalize than it sounds: I initially moved too fast trying to "fix" things that weren't actually broken. Slowing down and listening first made me more effective, not less.

---

## 3. Making a Hard Architecture Call Under Pressure

**Best for:** "Tell me about a significant technical trade-off" / "How do you handle technical debt?" / "Describe a time you had to make a decision with incomplete information"

At Alaya, we hit a point where our monolith was showing cracks. The team was split between a full microservices rewrite and a modular monolith approach, and investors were pushing for new features, not infrastructure work. I was the one who had to make the call.

Rather than going with instinct, I ran a two-week technical spike comparing both approaches with prototype load tests on our highest-traffic endpoints. I brought the results to the CTO and investors with concrete metrics, not architecture diagrams. The data showed that a "strangler fig" migration, extracting just the two busiest modules while keeping the rest monolithic, would deliver most of the performance benefit at a fraction of the risk.

The first extracted module shipped in six weeks. Performance on those endpoints improved by about 40%. The remaining monolith stayed stable through the acquisition in 2021, which validated that we hadn't taken on unnecessary risk. No big-bang rewrite was ever needed.

The hardest part wasn't the technical decision. It was convincing people that not rewriting everything was the right call. The benchmark data did most of that work. I'd do more upfront load testing in future debates like this, because it cuts the opinion-driven back-and-forth short.

---

## 4. Building from Zero to Acquisition

**Best for:** "Tell me about a time you built something from scratch" / "How do you handle ambiguity?" / "Founding engineer or early-stage" roles

In 2016, I co-founded Alaya as a purpose and impact platform for enterprise employee engagement. We had no customers, no product, and no engineering team. My task was to build the entire platform alone at first, then grow and lead a small team, while the business was already signing its first enterprise clients.

The first three months were about getting to a demo, not a perfect architecture. I chose Node.js, React, and PostgreSQL because they were pragmatic choices I could move fast in, knowing we'd pay some scaling costs later. Over the following two years I built out multi-tenancy, an API layer, impact reporting, and postal campaign tooling, then hired the first three engineers and set up the CI/CD pipeline, code review processes, and architecture documentation.

By 2021 the platform had more than 50 enterprise clients across Switzerland and France. Benevity acquired us that year, which was a direct validation of the technical and product decisions made from the start.

Looking back, I'd invest in observability much earlier. We added proper APM late, and it cost us debugging time we didn't have. I'd also design for multi-tenancy from day zero instead of retrofitting it, which is always more expensive than you think.

---
