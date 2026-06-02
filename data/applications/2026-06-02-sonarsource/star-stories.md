# STAR Stories — Principal Platform Engineer, SonarSource

---

## 1. Driving platform adoption without authority (AI tooling at Benevity)

*Best for: "Tell me about influencing without formal authority" / "How do you drive adoption of a new platform?" / "Tell me about acting as a force multiplier"*

In 2022, about a year into my time at Benevity post-acquisition, I saw two engineering teams working with inconsistent review practices and no shared tooling around the AI tools that were starting to become genuinely useful. I had no direct reports on either team. What I had was time, curiosity, and a set of experiments I'd been running: GitHub Copilot in specific contexts, custom prompt templates for PR review, a few scripts for generating typed boilerplate from schema definitions.

The goal I set for myself was to shift how those engineers worked day to day, without mandating anything. I started with three people who were already curious, not the skeptics. I ran short demos, each one anchored to a concrete example where the tooling had saved real time on something they'd done recently. I committed the prompt templates to a shared repo with a proper README, framed as "here's what I've been using, fork if it helps." I ran informal lunch sessions, no slides, just live demos of workflows they could replicate that afternoon.

Within three months, roughly 70% of engineers on both teams were using the tooling regularly. More valuably, the early adopters started advocating internally, which I couldn't have manufactured from the top down. The adoption was stickier precisely because it was voluntary.

What I'd do differently: the documentation lagged the adoption. A few engineers hit friction in their first week that a clearer onboarding guide would have avoided. I'd write that earlier next time, before the rollout rather than while it's already running.

---

## 2. The strangler-fig decision (architecture under investor pressure)

*Best for: "Tell me about a hard technical trade-off" / "How do you handle architectural debt?" / "Tell me about making a decision under pressure"*

Around 2019 at Alaya, we had a growing monolith and a split team. One camp wanted a full microservices rewrite. Another wanted to stay put. Investors were pushing for features, not rewrites, and both camps had arguments that felt reasonable in isolation. My job was to make a call the team could execute and the business could survive.

I ran a two-week spike before proposing anything. I built prototypes, ran synthetic load tests on the two highest-traffic modules (our impact reporting pipeline was the main pain point), and put together a concrete side-by-side: full rewrite versus targeted extraction, with realistic timeline estimates and risk surface for each. The data told a clear story: we didn't have a general scaling problem, we had two specific modules where the load was concentrated. Everything else was fine.

I proposed a strangler-fig approach: extract those two modules, define explicit criteria for when to extract others, and leave the rest of the monolith stable and untouched. The first extracted module shipped in six weeks. Endpoint latency on the busiest paths dropped by roughly 40%. The remaining monolith stayed stable through the Benevity acquisition two years later. No big-bang rewrite needed.

The hardest part wasn't the technical work. It was convincing engineers who'd already concluded a full rewrite was the right move. The benchmarks cut that conversation short in a way that a technical opinion alone wouldn't have.

What I'd do differently: I'd run the benchmarks earlier in the debate, before opinions had hardened. The data was always going to be the deciding factor; starting with it would have saved two weeks of circular discussion.

---

## 3. Building Alaya from zero to acquisition

*Best for: "Tell me about building a platform from scratch" / "Founding engineer" contexts / "How do you handle ambiguity at scale?"*

In 2016, my co-founder and I started Alaya with a blank page and a sales conversation from that morning with our first potential enterprise client. I was the only engineer. The platform didn't exist. Customers were already asking about features.

I made a deliberate choice to keep the stack pragmatic: Node.js, React, PostgreSQL. Not because they were fashionable but because they gave a single engineer enough surface area to build fast without painting us into a corner later. The goal for the first three months was a demo we weren't embarrassed by. We hit that. From there, it was iterative: multi-tenant architecture, an API layer for integrations, impact reporting, postal campaign tooling for our NGO clients.

When I brought in the first three engineers, my role shifted. I needed the codebase to be legible to someone other than me, which meant writing architecture decision records, setting up code review practices, and making the implicit decisions I'd been carrying in my head into something the team could reason about. That transition from solo builder to platform lead is one I've done twice now.

By 2021, the platform had 50+ enterprise clients across Switzerland and France. Benevity acquired us. The technical decisions made from day one held through that acquisition and the migration into a much larger codebase.

What I'd do differently: I'd add proper observability much earlier. We got APM late, and there were months where incidents took longer to diagnose than they should have. I'd also design multi-tenancy into the schema from day zero rather than retrofitting it, which cost several weeks we didn't have at the time.

---

## 4. Post-acquisition integration at Benevity (navigating a 10x org change)

*Best for: "Tell me about navigating organizational change" / "How do you operate in a large, complex org?" / "Tell me about cross-team collaboration"*

When Benevity acquired Alaya in 2021, I went from a team of twelve to an engineering org roughly ten times that size. The primary codebase was Java microservices, not my main language at the time. The decision-making processes, the code review culture, the deployment cadence: all different.

My task was to integrate Alaya's core product features into Benevity's platform without losing the velocity we'd built, while also becoming useful in a much larger organization I didn't yet understand.

I spent the first month mapping before touching anything. I attended stand-ups I wasn't assigned to, read architecture docs for systems I wouldn't touch for months, and asked questions I could probably have answered from the docs alone, because the point wasn't the answers but understanding how people thought. When I started contributing to architecture discussions, I had enough context to frame proposals in terms the org already used.

Over the next year, I contributed to three major cross-team architecture decisions and became an informal bridge between the Europe-facing product surface and the core platform team. I also drove the AI tooling adoption that became my main contribution in year two.

What I'd do differently: I moved a bit fast in the first two months, flagging things I thought were broken that turned out to be intentional trade-offs with context I didn't have yet. Slowing down and listening longer would have saved some credibility I had to rebuild.

---

## 5. Elevating a team's technical bar (mentoring without a title)

*Best for: "Tell me about mentoring" / "How do you raise the quality bar on a team?" / "Tell me about your approach to technical leadership"*

At Benevity, after the AI tooling adoption had settled, I started noticing a different problem: the tooling was in place, but the engineers using it weren't always using it well. Copilot suggestions were being accepted without real review. Prompt templates were being used but not understood.

I wasn't a manager. I didn't have a mandate to run training. What I had was a shared Slack channel, a lunch hour, and the credibility I'd built from the tooling adoption. I started running short case studies: here's a PR where the AI suggestion was subtly wrong, here's how I caught it, here's what to look for. I made them optional, kept them under twenty minutes, and tied each one to something that had actually happened on the team that week.

The goal wasn't to teach specific tools. It was to raise the baseline of critical thinking around AI-generated output, which I thought of as a platform problem: if the Golden Path produces bad output some fraction of the time, the solution isn't to abandon the path but to build the judgment into the people walking it.

Within a few months, I noticed PR review comments starting to cite specific failure modes we'd discussed. Engineers were catching the same patterns I'd been flagging. That's the signal I was looking for: the knowledge had transferred, not just the tooling.

What I'd do differently: I'd have written up the case studies as reusable internal docs rather than Slack threads that disappeared after thirty days. The content was good; the medium was wrong for longevity.
