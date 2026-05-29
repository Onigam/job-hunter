# STAR Stories — Bloom / Founding Engineer

---

## 1. Building a Platform from Zero (Alaya)

**Best for:** "Tell me about building something from scratch" / "What does founding engineer mean to you?"

In 2016, I co-founded Alaya, an employee engagement and impact platform. We had no product, no customers, and no outside funding worth mentioning. My co-founder handled the business side; I was responsible for everything technical.

The first decision was stack. I chose Node.js, React, and PostgreSQL because I knew I could move fast with them without accumulating technical debt I couldn't service alone. The goal for month one was a working demo, not a perfect architecture. We got there in about three months, signed our first pilot clients, and started learning from real usage.

Over the next four years the platform grew substantially. I added multi-tenant architecture, built an API layer for third-party integrations, developed impact reporting features, and managed postal campaigns at scale. When it became clear we needed more capacity, I hired and onboarded the first three engineers, set up CI/CD pipelines, and established code review as a cultural expectation from day one rather than an afterthought.

By 2021, we had 50+ enterprise clients across Switzerland and France. Benevity, a Canadian company valued at over $1B, acquired us that year. The fact that the acquisition closed without requiring a technical rewrite was something I was quietly proud of.

Looking back, I would have instrumented the system earlier. We had gaps in observability that made debugging production incidents harder than they needed to be. I'd also design for multi-tenancy from day zero next time: retrofitting it mid-product cost us several weeks we didn't have.

---

## 2. Hard Architecture Decision Under Pressure

**Best for:** "Tell me about a technical trade-off you navigated" / "How do you handle technical debt at a startup?"

We hit a point at Alaya where the monolith was starting to show real cracks. Response times on the busiest endpoints were degrading, and the team had grown to where merging code was causing friction. The debate: full microservices rewrite, or something more incremental?

My job was to make a decision the team could execute against while still shipping features that enterprise clients were waiting on. A full rewrite would have taken six months minimum and risked losing product momentum at a critical growth stage.

I ran a two-week spike. We prototyped both approaches and load-tested them under realistic conditions. Then I presented the trade-offs to the founding team with concrete numbers, not opinions. The data pointed toward extracting the two highest-traffic modules first and keeping the rest monolithic until there was evidence to justify further extraction. That became our "strangler fig" approach, with explicit criteria for when to split off the next module.

We shipped the first extracted module in six weeks. Performance improved roughly 40% on those endpoints. The remaining monolith held through the acquisition two years later without incident. No big-bang rewrite was ever needed.

The hardest part wasn't the technical work: it was convincing engineers who wanted the clean slate that staying mostly monolithic was the right call. Showing them the load test data alongside the delivery schedule made alignment much easier than any argument from principle would have.

---

## 3. Driving AI Tooling Adoption Without Formal Authority

**Best for:** "Tell me about introducing new technology to a skeptical team" / "How do you lead without being a manager?" — directly relevant given Bloom is building an AI coding agent

At Benevity, I was a Senior Staff IC with no direct reports. Most engineers on the teams I worked with weren't using AI tooling in their workflows, and there were real productivity gains sitting uncaptured.

My task was to change that without a mandate.

I started with three engineers who were already curious. We worked through specific use cases together: code generation for boilerplate, AI-assisted PR review, prompt templates for debugging. Then I built internal demos targeting tasks everyone recognized as painful, writing test cases, summarizing large diffs, generating migration scripts. I ran informal sessions over lunch, no mandatory attendance, just demonstrations.

I also committed reusable prompt templates to a shared repository so people could pick them up independently. When engineers saved two hours on a specific task, I documented it with enough detail that colleagues could replicate the result. The wins became visible.

Within three months, roughly 70% of engineers on both teams had integrated AI-assisted tooling into their regular workflow. I became the informal lead on AI tooling evaluation across the engineering organization.

The lesson: voluntary adoption is stickier than mandated adoption. Engineers who adopted on their own terms became advocates internally. That kind of organic spread would have been impossible with a top-down rollout.

---

## 4. Navigating a Post-Acquisition Integration

**Best for:** "Tell me about a major organizational change" / "How do you work in a new, much larger environment?"

When Benevity acquired Alaya in 2021, I went from being the technical lead of a five-person team to being a Senior Staff Engineer in an organization ten times that size, running a Java microservices codebase with processes and culture I didn't know.

I had strong opinions from five years of building Alaya. Coming in as "the acquisition engineer" and immediately trying to fix things is a reliable way to alienate the people you need.

I made a deliberate choice to spend the first month mapping the existing architecture and building relationships before proposing anything. I asked a lot of questions before I offered any answers. I found the engineers who owned the systems I'd be working with and made sure they trusted me before I tried to change anything.

Once I'd built some credibility, I was able to contribute meaningfully to three major cross-team architecture decisions and eventually became the go-to person for AI tooling adoption across two engineering teams.

The move that surprised me most: listening longer made me more effective faster. The instinct to demonstrate value through quick technical contributions was almost exactly backwards in a new organization. The first contribution that actually mattered was understanding what was already there.
