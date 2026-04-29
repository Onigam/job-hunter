# STAR Stories — Sword Health, Senior AI Infrastructure Engineer

---

## 1. Building production infrastructure from zero (Alaya, 2016-2021)

**Best for:** "Tell me about a time you built something from scratch" / "How do you approach infrastructure architecture?"

When I co-founded Alaya in 2016, we had a blank page. No customers, no product, no team. My first job was to make technical decisions that wouldn't block us two years later when we actually had load and complexity. I chose a pragmatic stack: Node.js, React, PostgreSQL, hosted on AWS. Nothing exotic. The goal was to ship fast and keep the infrastructure legible enough that the first engineers I'd hire could understand it without a month of onboarding.

The harder calls came later. I designed the multi-tenancy model from scratch, built the CI/CD pipeline, set up containerisation with Docker before we moved to orchestration, and eventually introduced Kubernetes as the platform grew. I also had to add observability late, which I regretted: we had no proper APM until we were approaching acquisition talks, and that made it harder to diagnose production incidents under pressure.

By 2021 the platform was serving 50+ enterprise clients across Switzerland and France and Benevity acquired us. The infrastructure held through the acquisition due diligence process, which was a direct test of every decision made earlier. What I'd do differently: invest in observability and structured logging from day one, not as a nice-to-have once things are on fire.

---

## 2. Making a hard architecture decision under pressure (Alaya, 2019)

**Best for:** "Tell me about a technical trade-off you navigated" / "How do you handle disagreement on architectural direction?" / "How do you balance technical debt against delivery?"

We hit a point at Alaya where the monolith was visibly struggling. The two busiest modules were creating lock contention and the team was splitting between a full microservices rewrite and a modular monolith approach. Investors wanted new features shipped, not rewrites. I was the one who had to make the call.

I ran a two-week technical spike instead of calling it from intuition. We built prototypes of both approaches, ran load tests, and measured actual throughput and failure patterns under realistic traffic. I then presented the results to the CTO and the investors: concrete numbers, not architectural opinions. The data pointed toward a "strangler fig" migration: extract the two highest-traffic modules first as standalone services, keep the rest monolithic until there was a clear case to extract more.

We shipped the first extracted module in six weeks. Performance improved ~40% on the busiest endpoints. The remaining monolith held stable all the way through the acquisition without another incident. No big-bang rewrite happened, and we didn't lose months of feature development to it. The hardest part wasn't the technical decision: it was convincing engineers who'd already emotionally committed to a full rewrite that "don't rewrite everything" was actually the right answer. The load test data did most of that work.

---

## 3. Driving AI tooling adoption across teams without a mandate (Benevity, 2022-2023)

**Best for:** "Tell me about influencing without authority" / "How do you drive change in an engineering org?" / "Experience with AI tooling at scale"

After the acquisition I joined Benevity as Senior Staff IC with no direct reports, but I could see that AI-assisted development was going to matter and the two teams I worked with weren't using it at all. There was no mandate from above, and I couldn't force anyone to change how they worked. So I didn't try.

I started with three engineers who were already curious: showed them concrete time savings on real tasks they'd just done, not toy demos. I built a set of reusable prompt templates for code review and PR summarisation and committed them to a shared internal repo so the value was persistent. I ran informal lunch sessions, documented the actual hours saved on specific tickets, and let the early adopters tell their own teams what they were getting out of it.

Within three months, roughly 70% of engineers on both teams were using AI-assisted code review and generation as part of their regular workflow. I became the informal AI tooling lead across the org without anyone assigning me that role. What I'd do differently: instrument the adoption earlier so I had adoption metrics to share, not just anecdotes. The anecdotes worked but the numbers would have been more convincing to the engineering managers who were skeptical.

---

## 4. Navigating post-acquisition integration and cross-team architecture (Benevity, 2021-2022)

**Best for:** "Tell me about working in a larger org" / "How do you approach cross-functional collaboration?" / "Navigating ambiguity during major transition"

When Benevity acquired Alaya, I moved from a team of eight to an org of 80+. Different codebase (Java, microservices), different tooling, different culture around technical decisions. My first instinct was to fix things. That was the wrong instinct.

I spent the first month mapping the existing architecture before proposing anything. I met the platform and infrastructure teams before pushing technical opinions. When I did start contributing to cross-team decisions, I had enough context to be useful rather than just opinionated. Over the following year I contributed to three major cross-team architecture decisions on the Europe-facing product surface and became the liaison between the Alaya legacy codebase and Benevity's core platform.

The lesson I had to learn quickly: in a large org, credibility is earned by showing you understand the existing system before you try to change it. At a startup you can just make the call. At 80 engineers you need a coalition. Slowing down to listen in the first 30 days made me significantly more effective in months two through twelve than I would have been if I'd come in at full speed.
