# STAR Stories — Snyk Staff Incubation Engineer

## 1. Building Alaya from Zero to Acquisition
*For: "Tell me about a time you had to build something from scratch" / "How do you handle ambiguity?"*

In 2016, I co-founded Alaya, a purpose and impact platform for employee engagement. The founding team had a business concept and a few warm enterprise prospects in Switzerland, but no product. I was the only engineer.

My job was to architect and ship the platform before the business side closed its first paying clients. That sounds straightforward until you're actually in it: if I over-engineered, we'd burn runway. If I moved too fast and skipped fundamentals like multi-tenancy, I'd pay for it later when the customer count doubled.

I chose Node.js, React, and PostgreSQL. Not because they were the most interesting choices, but because they were the ones I could move fastest with on a clearly relational dataset. I had a working demo in three months. From there, I kept iterating: a proper multi-tenant architecture, an API layer for client integrations, impact reporting, postal campaign tooling. As the team grew, I brought on three engineers and shifted some of my time toward code review and unblocking others instead of just shipping features myself.

By 2021, we had 50+ enterprise clients across Switzerland and France. Benevity, a Canadian unicorn with a $1B+ valuation, acquired us. For me, the acquisition was the data point: the decisions we'd made under pressure had held.

Looking back, I'd have set up APM and observability earlier. We added it late, and debugging production issues without it cost time we didn't have. I'd also design for multi-tenancy from day one rather than retrofitting it partway through growth. But the fundamental choice was right: move fast with a pragmatic stack rather than build for a scale we didn't have yet.

---

## 2. Navigating a Hard Architecture Decision Under Pressure
*For: "Tell me about a significant technical trade-off" / "How do you handle technical debt?"*

Midway through Alaya's growth, our monolith was starting to buckle. The two highest-traffic modules were competing for the same resources, and the team was split: some wanted a full microservices rewrite, others wanted to stay modular within the existing codebase. The disagreement wasn't just technical. Investors were watching, and anything that looked like "we're pausing features to rewrite infrastructure" was going to be a hard conversation.

I needed to make a defensible call and get buy-in from both technical and non-technical stakeholders.

I ran a two-week technical spike. I built prototypes for both approaches, ran load tests, and put concrete numbers on the migration cost and timeline for each path. Then I presented to the CTO and the founding team not as a recommendation but as a trade-off analysis: here's what each option costs in time, risk, and engineering bandwidth.

The recommendation I landed on was a strangler fig approach: extract the two highest-traffic modules first, keep the rest of the monolith stable, and define explicit criteria for when to extract more. We shipped the first extracted module in six weeks. Performance on those endpoints improved roughly 40%. The rest of the monolith held through the Benevity acquisition two years later without needing a full rewrite.

If I were doing it again, I'd run the benchmarks earlier. The technical decision was actually clear once we had data. The debate dragged on because people were arguing from intuition, and numbers were what cut through it.

---

## 3. Driving AI Adoption Across Engineering Teams Without Authority
*For: "Tell me about leading change without formal authority" / "How do you influence as a Staff IC?"*

After the Benevity acquisition, I joined as a Senior Staff IC with no direct reports. I was working across two engineering teams that had their own tooling and practices. One gap I noticed early: AI-assisted development tooling existed, GitHub Copilot had been available for a while, but nobody was using it in a structured way. The potential was obvious, but nobody had made the internal case.

Getting people to change how they work without a mandate is its own kind of problem. I didn't start with a proposal or a memo. I started with three engineers who were curious and ran informal demos with concrete before-and-after comparisons: a PR review cycle that typically took two hours dropping to 45 minutes with the right prompting patterns. I built reusable prompt templates and committed them to a shared internal repository. I ran lunch sessions, not training sessions. No slides, no required attendance, just a screen share and open questions.

Within about three months, roughly 70% of engineers on both teams were using AI-assisted tooling regularly. I ended up as the informal AI tooling lead across the org, fielding questions from other team leads about what patterns were actually working.

If I were doing it again, I'd document the wins more formally from the start. The informal approach built trust faster than a top-down rollout would have, but the impact was harder to quantify and communicate upward. Even a lightweight before/after metric from week one would have helped make the case at a leadership level.

---

## 4. Navigating Post-Acquisition Integration
*For: "Tell me about adapting to a new environment" / "How do you handle organizational change?"*

When Benevity acquired Alaya in 2021, I went from a team of 5 engineers to a company with hundreds of them. The codebase was Java microservices. The processes were different. The culture had been shaped by different constraints than ours.

My task was to integrate Alaya's capabilities into Benevity's platform while continuing to build new features, without losing the product velocity we'd built as a smaller team.

I resisted the temptation to immediately flag everything I'd do differently. Instead, I spent the first month mapping the existing architecture before proposing anything. I built relationships with the platform and infrastructure teams before trying to push technical opinions. When I did start contributing to architecture decisions, I'd already built enough context to understand why things were the way they were, which meant my suggestions landed differently than if I'd come in with "here's how we did it at Alaya."

Over the following year, I contributed to three major cross-team architecture decisions and became the go-to for AI tooling adoption across two teams. More importantly, Alaya's core features migrated successfully into Benevity's platform without the kind of re-platforming disasters that often follow acquisitions.

The lesson: pace and sequence matter more than speed. My first instinct was to move fast and fix things. What actually worked was listening first, then moving. Slowing down the first month made me more effective for the next three years.
