# STAR Stories — Gusto, Staff Software Engineer, Platform Orchestration

---

## Story 1: Leading AI Tooling Adoption Without Authority (Benevity)

**Best for:** "Tell me about a time you drove a significant change in how your team worked" / "How do you influence without authority?" / Staff+ behavioral questions on cross-team leadership.

When I joined Benevity after the acquisition, I was a Senior Staff IC with no direct reports. The engineering org had no standardized approach to AI-assisted development, and opinions ranged from genuine curiosity to active skepticism. My goal was to change that, but I had no authority to require anything.

I didn't start with a pitch to leadership or a mandatory training. I found three engineers who were already curious and ran informal sessions focused on specific workflows they found genuinely painful: long PR review cycles, tracing through unfamiliar code paths, writing test stubs for legacy modules. Once I had cases that resonated, I built reusable prompt templates and committed them to a shared repository so the benefit could scale without depending on my availability. The key move was logging concrete time savings in a shared doc: "saved two hours on this review cycle," "found a regression in ten minutes instead of two days." Those stories traveled without me.

Within about three months, roughly 70% of engineers across both teams had integrated AI-assisted tooling into their regular workflow. I hadn't run a single formal training session. The early adopters became the advocates, and peer-to-peer spread turned out to be far more effective than anything top-down would have produced.

What I took from it: adoption that comes from a mandate looks like compliance in retros. Adoption that comes from peer recommendation shows up in how people actually code. The slower path was the stickier one.

---

## Story 2: Building Alaya from Zero to Acquisition

**Best for:** "Tell me about a time you built something from scratch" / "How do you handle ambiguity?" / "Tell me about a founding or 0-to-1 experience."

In 2016, I co-founded Alaya, an employee purpose and impact platform for enterprise clients. We had a blank page, a rough product vision, and a signed enterprise client before we had anything running. I was the sole technical founder initially: architect, lead engineer, and eventually engineering lead as the team grew.

The first call I made was to keep the stack boring and familiar — Node.js, React, PostgreSQL — rather than optimizing for technical interest. I wanted to be able to hire for it, debug it at 2am without documentation, and extend it without rewrites when requirements shifted. The first working demo took about three months. After that we built iteratively: multi-tenant architecture, an API layer, impact reporting, postal campaign tooling. When I brought on the first two engineers, I invested in code review culture and architecture docs before I touched CI configuration. The reasoning was straightforward: if the team understood the why behind decisions, the codebase would hold together even when I wasn't available.

We reached production with over 50 enterprise clients across Switzerland and France. Benevity, a Canadian unicorn valued north of a billion dollars, acquired Alaya in 2021. The core architecture I'd built in 2016 survived the acquisition intact.

Looking back, I'd have invested in observability much earlier. We added proper APM late in the lifecycle and spent months debugging things we could have caught in weeks. I also underestimated how expensive it would be to retrofit multi-tenancy at year two. Next time I'd treat tenancy and data isolation as first-class design constraints from day one, not as features to add when the pain gets bad enough.

---

## Story 3: Making a Hard Architecture Decision Under Pressure

**Best for:** "Tell me about a technical trade-off you navigated" / "How do you handle technical debt?" / "Tell me about a time you had to make a call with incomplete information."

At Alaya, around year three, the monolith we'd started with was showing real cracks. Two of the highest-traffic endpoints were degrading under load, and the engineering team was split. One camp wanted a full microservices rewrite. Another wanted to scale the servers and keep shipping features. Investors had no appetite for a months-long rewrite, and the business was in a critical growth phase.

I proposed a third path and asked for two weeks to validate it: extract only the two highest-traffic modules using a strangler fig pattern and leave the rest of the monolith untouched. I ran prototype load tests comparing all three approaches and brought the results to the CTO and a couple of investors with concrete metrics rather than architectural opinions. The framing was: here's what each path costs in time, here's what headroom it buys, here's the failure mode if we're wrong. That structure cut the debate significantly shorter than any whiteboard session would have.

We shipped the first extracted module in six weeks. The two busiest endpoints improved by roughly 40% under load. The remaining monolith held stable through the acquisition two years later without needing further emergency work.

The hardest part was convincing people that not rewriting everything was a legitimate engineering call, not avoidance. Having the benchmarks shifted the conversation from preferences to evidence. I'd run those benchmarks earlier next time, before opinions had hardened into camps.

---

## Story 4: Navigating Post-Acquisition Integration at Benevity

**Best for:** "Tell me about navigating a large organization" / "How do you build influence across teams?" / "Tell me about a time you had to adapt to a very different culture or codebase."

When Alaya was acquired by Benevity in 2021, I went from a team of six to an engineering organization ten times larger, with its own established architecture, processes, and culture. Java, microservices, a different deployment philosophy, and a decision-making structure I didn't yet understand. My job was to integrate Alaya's capabilities into Benevity's platform while continuing to ship new features, without losing the velocity we'd built.

I spent the first month mapping the existing architecture before proposing anything. There's real pressure to show value quickly after an acquisition, and I had to consciously resist the urge to fix things I didn't fully understand yet. Once I had a working mental model of how the systems connected, I started building relationships with platform and infrastructure teams whose buy-in I'd need later. Making myself available for cross-team questions outside my immediate scope helped; when I later raised concerns about service boundaries or data flows, it didn't come across as adversarial.

In the first two years I contributed to three major cross-team architecture decisions and became the informal lead for AI tooling adoption across two teams. The credibility I'd built through the slower early work made those conversations possible at all.

What I'd change: I initially moved too fast, pushing improvements before I'd earned the social capital to do so. The resistance I hit wasn't about the ideas; it was about relationship debt. Slowing down to listen first made every subsequent conversation more productive.
