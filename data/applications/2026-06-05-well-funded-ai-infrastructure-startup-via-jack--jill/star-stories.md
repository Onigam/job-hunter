# STAR Stories — VP Engineering / CTO at Well-Funded AI Infrastructure Startup

_Prepared for behavioral interviews. Stories in flowing first-person prose._

---

## 1. Building a Platform from Zero to Acquisition
**Likely question:** "Tell me about a time you built something from scratch" / "What's your founding engineer experience?"

In 2016 I co-founded Alaya, a purpose and impact platform for employee engagement. We had no product, no customers, no existing codebase. My job was to take a blank page and build a system that could survive enterprise-grade demands while we were still figuring out product-market fit.

I chose a stack deliberately conservative: Node.js, React, PostgreSQL. Not because they were the most exciting choices, but because I could move fast on them, hire for them, and keep the system comprehensible to a small team. The first three months were brutal compression work, getting to a working demo before the sales pipeline dried up. Once we had clients, the architectural pressure shifted: multi-tenant data isolation, a proper API layer, impact reporting exports, postal campaign tooling. Each time a feature pushed against the platform's limits, I made a call about whether to extend or refactor, and I had to justify those calls to a non-technical co-founder and early investors who wanted features, not architecture.

By 2021 the platform was running for 50+ enterprise clients across Switzerland and France. Benevity acquired us that year. Their technical due diligence team went deep on the codebase and the architecture held up. That outcome was the most direct validation I've had that the technical decisions made under pressure were the right ones.

Looking back, I'd have added proper observability tooling much earlier. We built APM in too late, which meant we were debugging production incidents with inadequate visibility for longer than we needed to. And I'd have designed for multi-tenancy from day zero rather than retrofitting it. The retrofitting cost us several weeks we couldn't afford.

---

## 2. Making a Hard Architecture Decision Under Pressure
**Likely question:** "Describe a significant technical trade-off you navigated" / "How do you handle technical debt vs. delivery?"

At Alaya, our monolith was beginning to crack under load around year three. Two or three services were handling disproportionate traffic, and the team was split between a full microservices rewrite and a modular monolith approach. Investors were asking for new features. The CTO pressure was real. And both camps internally had strong opinions.

My job was to make a call we could actually execute on, not just the theoretically correct one. I ran a two-week technical spike: prototype load tests on both approaches, concrete numbers for migration time, realistic estimates on team capacity. Then I brought those numbers to the CTO and the investors directly. Not opinions, benchmarks.

What I proposed was a strangler fig migration: extract the two highest-traffic modules first, prove the pattern works, then use those concrete results to decide whether to continue or stop. We didn't commit to a full rewrite upfront. We committed to a six-week experiment with clear success criteria.

The first extracted module shipped in six weeks. Response time on those endpoints improved by roughly 40%. The rest of the monolith stayed stable through the acquisition two years later. No big-bang rewrite ever happened, and in retrospect that was the right call.

The lesson I took: the hardest part wasn't the technical work, it was convincing people that "not rewriting everything" was a defensible position. Having data made that conversation much shorter. I'd instrument and benchmark earlier next time, just to cut the debate down.

---

## 3. Driving Organizational Change Without Formal Authority
**Likely question:** "How do you influence people you don't manage?" / "Tell me about driving adoption of a new practice"

At Benevity, I was a Senior Staff engineer without direct reports. In early 2023 I wanted to shift how two engineering teams worked by introducing AI-assisted development workflows, specifically code review and generation tooling. Neither team was obligated to listen to me, and one team lead was skeptical.

I didn't start with a mandate or a deck. I found three engineers who were already curious about the tooling and worked with them first, one-on-one, on real tickets from their actual backlog. I kept notes on time saved, the kinds of errors caught, the prompting patterns that worked. Then I ran informal sessions during lunch, no attendance policy, just live demos on real code. I also committed a shared repository of reusable prompt templates so people could use them without having to figure everything out themselves.

Within three months, roughly 70% of engineers across both teams were using the tooling in their regular workflow. More importantly, the early adopters were advocating for it internally, which meant the adoption compounded without me having to keep pushing it.

The skeptical team lead came around after seeing a teammate catch a subtle race condition in a PR review that the standard review had missed. That kind of concrete proof point matters more than any presentation.

What I'd do differently: I spent too much time at the beginning trying to build a perfect internal guide. The demos were more effective. I'd get to the demo faster and document later.

---

## 4. Navigating Post-Acquisition Integration in a 10x Larger Org
**Likely question:** "Describe a time you navigated significant organizational change" / "How do you work in a new environment?"

When Benevity acquired Alaya in 2021, I went from a 12-person company to a 150-person engineering org overnight. Different culture, different codebase, different deployment pipeline, different processes. The natural instinct was to come in with opinions, because I'd just spent five years building the thing they acquired. That instinct was mostly wrong.

The first month I spent almost entirely listening and mapping. I sat in on architecture reviews, asked a lot of questions, and held off on proposing changes. That wasn't comfortable, but it was necessary. By the time I started pushing technical opinions, I understood which battles were worth picking and which ones I'd lose because I hadn't built enough context or trust.

Once I had that foundation, I was able to contribute to three major cross-team architecture decisions in my first year, and I became the de facto liaison between the Europe-facing product surface and the North American platform teams. The AI workflow adoption work I described elsewhere came partly from credibility I'd built through that slower initial approach.

The reflection is that moving fast is sometimes the wrong kind of fast. Slowing down to understand the org before trying to change it made me more effective, not less. I think this applies directly to taking on a VP or CTO role at a company with an existing team: your first job is to understand what's already working and why, before deciding what to change.

---
