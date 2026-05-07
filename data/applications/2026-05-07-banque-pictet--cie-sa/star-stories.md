# STAR Stories — Banque Pictet, Generative AI Engineer

---

## Story 1: Driving GenAI Adoption Across Engineering Teams

**Best for:** "Tell me about a time you drove adoption of a new technology" / "How do you lead without authority?" / GenAI-focused interviews

At Benevity in 2023, engineering teams had access to LLM tooling and GitHub Copilot but were using almost none of it consistently. As a Senior Staff IC with no direct reports, I needed to change the culture around AI tools across two teams that didn't report to me.

The challenge wasn't technical, it was behavioral. Engineers were skeptical or at least cautious about integrating AI into their daily workflow. I couldn't mandate anything. So I started with three engineers who were already curious, built them a working demo of a code review pipeline I'd wired up with LLM tooling, and showed them actual time savings on a real PR. No deck, no mandate. Just a thing that made their afternoon shorter.

From there, I ran optional lunch sessions, built a shared repo of reusable prompt templates, and documented concrete wins as they happened: one engineer saved two hours on a sprint review cycle, another caught a data migration regression that manual code review had missed. Nothing got framed as "the future of engineering."

Within three months, roughly 70% of engineers across both teams were using AI-assisted review or code generation in their regular workflow. I became the informal AI tooling lead for the org.

What I'd do differently: I'd instrument the tools earlier to get harder metrics. The qualitative stories worked, but numbers would have moved the skeptics faster.

---

## Story 2: Making an Architecture Call Under Business Pressure

**Best for:** "Tell me about a technical trade-off you navigated" / "How do you make decisions with incomplete information?" / Senior/staff engineering roles

At Alaya in 2019, we had a monolith that was starting to buckle. The engineering team wanted a full microservices rewrite. Investors were asking why we were discussing rewrites when five roadmap features were undelivered.

My job was to make a defensible call and actually execute it. I ran a two-week spike: built prototypes of the two highest-traffic modules extracted as services, load-tested them against the equivalent monolith code, and wrote up the trade-offs in terms the business could follow. The goal wasn't to win a technical argument, it was to reduce the decision to something we could measure.

The recommendation was a strangler fig approach: extract the two heaviest modules first, keep everything else in the monolith, and define explicit criteria for when to extract more. No big-bang rewrite.

We shipped the first extracted module in six weeks. Performance on the busiest endpoints improved by about 40%. The remaining monolith held together through the Benevity acquisition two years later without needing further rewrites.

The hardest part was convincing people that not rewriting everything was the right call. Data helped more than arguments. I'd do the benchmarking even faster next time, before the debate gets entrenched.

---

## Story 3: Building a Production Platform from Zero

**Best for:** "Tell me about a time you built something from scratch" / "How do you work under ambiguity?" / Founding or staff+ roles

In 2016 I co-founded Alaya with no codebase, no team, and a handful of enterprise conversations that could close within the month. I was the only engineer for the first year.

The task was to build something that could survive early demos, scale with real traction, and be extended by the engineers I'd eventually hire. I picked a stack I could move fast with, Node.js, React, PostgreSQL, and built the core feature set to get to a first real demo within three months. Not a prototype: something you could put in front of a compliance officer at a Swiss financial institution.

I designed for multi-tenancy from the start, which cost me a week upfront and saved three months of retrofitting later. I set up CI/CD, wrote architecture documentation before anyone else joined, and hired the first three engineers in late 2017 with actual onboarding materials already in place.

By 2021, the platform had 50+ enterprise clients across Switzerland and France. Benevity acquired Alaya that year, and the core architecture held through the transition without a structural rewrite.

If I were doing it again, I'd add observability infrastructure earlier. We added proper APM late, and debugging production issues during the scaling phase was harder than it needed to be. That lesson has stayed with me ever since.

---

## Story 4: Navigating a Post-Acquisition Integration

**Best for:** "Tell me about navigating change in a large organization" / "How do you work in established teams?" / Corporate or scale-up engineering roles

After Benevity acquired Alaya in 2021, I joined an engineering org ten times the size of anything I'd worked in before. Different culture, different codebase (Java and microservices), different decision-making processes.

The task was to integrate Alaya's features into Benevity's platform without losing delivery velocity. But the real challenge was that I didn't know the organization well enough yet to push effectively.

I spent the first month doing almost nothing but mapping: architecture, team topology, who owned what, where the real technical debt lived. I built relationships with the platform and infrastructure teams before proposing changes. I asked more than I told.

Once I had a clearer picture, I started contributing to cross-team architecture decisions and drove the AI tooling adoption that became Story 1. I contributed to three major architecture decisions in the first year and became the go-to person for AI tooling across two engineering teams.

The lesson: I initially moved too fast trying to fix things that weren't broken. The cultural read mattered as much as the technical one. That first month of listening felt like lost time at the time, but it made everything I did afterward land better.
