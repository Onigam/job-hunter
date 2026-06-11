# STAR Stories — fonio.ai Founding Product Engineer

---

## 1. Building Alaya from Zero to Acquisition

**Best for:** "Tell me about a time you built something from scratch" / "What does founding engineer mean to you?"

In 2016, my co-founder and I started Alaya with essentially nothing — no codebase, no customers, and a deadline: we'd promised a demo to our first enterprise prospect in three months. I was the only engineer.

My job was to make architectural choices that would hold under pressure without over-investing in infrastructure we didn't need yet. I chose Node.js, React, and PostgreSQL, tools I knew well enough to ship fast with a clear upgrade path. The first three months I built alone: core features, authentication, the early multi-tenancy layer. When we hired the first three engineers, I wrote the onboarding documentation, set up CI/CD, and established the code review culture from scratch.

By 2021, the platform had 50+ enterprise clients across Switzerland and France. Benevity, a Canadian unicorn at a $1B+ valuation, acquired us. In hindsight I'd invest in observability much earlier, we added proper APM late and the retrofitting cost more than it should have. I also underestimated how much multi-tenancy needed to be baked in from day one rather than layered on later. Both lessons shaped how I approach green-field work now.

---

## 2. Making a Hard Architecture Decision Under Pressure

**Best for:** "Tell me about a technical trade-off you navigated" / "How do you handle pressure to ship vs. technical debt?"

Around 2019 at Alaya, the monolith was showing scaling cracks on the busiest endpoints and the team was split: full microservices rewrite, or stay modular. Investors were pushing for new features at the same time. The pressure to act was high, and the pressure not to spend six months on a rewrite was equally high.

Rather than win the argument with confidence, I ran a two-week technical spike, building prototype load tests for both architectures and presenting concrete numbers to the CTO and investors. The proposal that emerged was a strangler-fig approach: extract the two highest-traffic modules first, keep the rest monolithic, and define measurable thresholds for when additional services would be extracted.

The first module shipped in six weeks and reduced latency by ~40% on the affected endpoints. The remaining monolith stayed stable all the way through the 2021 acquisition. What I'd do differently: run the benchmarks two weeks earlier. Having data on the table shortened the debate significantly, and the decision was made on evidence rather than instinct.

---

## 3. Driving AI Tooling Adoption Without Formal Authority

**Best for:** "Tell me about leading without a mandate" / "How have you worked with AI in engineering?"

After the Benevity acquisition, I was a Senior Staff IC with no direct reports. I needed to change how engineers worked — specifically, getting two teams to adopt AI-assisted development practices — with no authority to mandate anything.

A top-down mandate would have produced compliance, not adoption. I started with three engineers who were already curious, built internal demos showing concrete time savings (one example: cutting a PR review cycle from roughly half a day down to about two hours), and ran informal lunch-and-learn sessions with no attendance requirement. I also committed reusable prompt templates to a shared repository so the patterns were accessible regardless of whether someone had attended a session.

Within three months, ~70% of engineers across both teams had integrated AI tooling into their regular workflow. The engineers who adopted on their own terms became internal advocates, which I couldn't have manufactured through a mandate. The adoption was sticky in a way it wouldn't have been otherwise, and it became the baseline for how we approached new AI tooling from that point forward.

---

## 4. Navigating a Post-Acquisition Integration

**Best for:** "Tell me about a time you navigated significant change" / "How do you work in a larger organization?"

When Benevity acquired Alaya in 2021, I went from a team of eight to an organization ten times larger. Different codebase, different culture, different processes. The instinct was to show value quickly by "fixing" things.

My job was to integrate Alaya's capabilities into Benevity's platform without losing the product velocity we'd built. I spent the first month mapping the existing architecture before proposing anything. I built relationships with the platform and infrastructure teams before pushing technical opinions. The things I eventually drove, AI tooling adoption, cross-team architecture reviews, a shared prompt library, came six months in when I actually understood the landscape.

The integration of core Alaya features succeeded. I contributed to three major cross-team architecture decisions and became the go-to person for AI tooling across two engineering teams. The lesson I took from it: moving fast in a new organization often means moving slower in the first 90 days. The influence I built by listening first was more durable than the influence I would have gained by advocating early.
