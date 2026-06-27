# STAR Stories — Kinro, Founding AI Engineer

---

## Story 1: Building Alaya from Zero to Acquisition

**Best for:** "Tell me about a time you built something from scratch" / "What does founding engineer mean to you?"

In 2016, I co-founded Alaya, a purpose and engagement platform for enterprise employees. We had no customers, no codebase, no team. I was the only technical person for the first six months. The task was to architect and ship something real while the business was simultaneously signing its first enterprise clients, which meant I was making decisions about the tech stack with incomplete information and no room to start over later.

I chose Node.js, React, and PostgreSQL because those gave us velocity without painting us into a corner. The first demo was live in three months. From there I expanded the platform iteratively: multi-tenant architecture, impact reporting, postal campaign features, API integrations. Once I brought on the first engineers, I made sure to build a CI/CD culture and documented the key architectural decisions early, because I'd seen what happens when those things get retrofitted. By 2021, we had over 50 enterprise clients across Switzerland and France, and Benevity, a Canadian unicorn valued at over $1B, acquired us. The result was direct validation that the technical bets we'd made from day one held up under real enterprise scale.

What I'd do differently: I'd invest in observability earlier. We added proper APM too late, and we also hit a painful multi-tenancy retrofitting period that I could have avoided by designing for it from the start rather than bolting it on during growth.

---

## Story 2: Hard Architecture Decision Under Pressure

**Best for:** "Tell me about a technical trade-off you navigated" / "How do you handle competing priorities?"

At Alaya, around year three, the monolith was starting to show scaling cracks. The team was split between a full microservices rewrite and a modular monolith approach, and investors were pushing for new features rather than rewrites. The task was to make a call that balanced long-term scalability with the reality that we had a small team and live enterprise customers.

Before proposing anything, I ran a two-week technical spike comparing both approaches with prototype load tests on our highest-traffic endpoints. Then I presented the trade-offs to the CTO and investors with concrete numbers, not opinions. The recommendation was a strangler fig migration: extract the two busiest modules first, keep the rest monolithic, and define clear criteria for when to extract further. Nobody loved the idea of "partial," but the data made the downside of a full rewrite obvious.

We shipped the first extracted module in six weeks. Performance improved roughly 40% on those endpoints. The remaining monolith stayed stable through the acquisition two years later. No big-bang rewrite ever happened.

The lesson was about sequencing. The hardest part wasn't the technical work; it was convincing people that "not rewriting everything" was the defensible call. Data helped more than arguments. I'd run the benchmarks even earlier next time to cut the debate shorter.

---

## Story 3: Getting AI Adoption Without a Mandate

**Best for:** "How do you influence without authority?" / "Tell me about leading a technical change"

At Benevity post-acquisition, I was a Senior Staff IC with no direct reports. I'd been using AI coding tools and prompt engineering patterns internally, and I could see the productivity gains clearly. The task was to spread those practices across two engineering teams that didn't report to me, in an organization that had a strong status-quo culture.

I didn't start with a rollout plan. I started with three engineers who were already curious and showed them exactly how I was using GitHub Copilot and custom prompt templates for code review and test generation. When they saved real time, I documented it as a short internal case study. From there I ran informal lunch-and-learn sessions, no mandate attached, just demos. I also committed a shared repo of reusable prompt templates so engineers had something concrete to take back to their desks.

Within three months, roughly 70% of engineers across both teams were using AI-assisted workflows consistently. I became the informal AI tooling lead for the whole org, which eventually influenced tooling decisions at the platform level.

The mandate-free approach was slower but stickier. The engineers who adopted it voluntarily became internal advocates I never could have created through a top-down decree. In hindsight, I'd start the shared template repo even earlier because it made the adoption tangible and portable.

---

## Story 4: Deciding When to Trust an Agent vs. Intervening

**Best for:** "How do you think about AI reliability in production?" / "Walk me through an agentic system you've built"

At Benevity, I worked on an AI-assisted code review pipeline that would flag patterns across PRs and suggest refactors. The initial version was accurate enough in isolated tests, but when we ran it on real PRs the false positive rate was high enough that engineers started ignoring the suggestions entirely, which was worse than having no tool. The task was to figure out where the system needed human checkpoints and where it could run autonomously.

I instrumented the pipeline to log every suggestion alongside whether the engineer accepted, modified, or dismissed it. After two weeks of real usage data, patterns were clear: the agent was reliable on pure syntax and import issues but consistently wrong on domain-specific logic that required context it couldn't infer from the diff alone. I rebuilt the confidence routing so the agent only surfaced autonomous suggestions when signal strength was above a threshold calibrated to that first round of data. For lower-confidence cases, it surfaced the issue as a question rather than a recommendation.

Acceptance rate on flagged suggestions went from roughly 30% to over 75%. Engineers stopped ignoring the tool. The core insight was that the failure mode wasn't the model being wrong; it was the interface not making the model's uncertainty visible to the human in the loop.

The reflection is that I should have started with human-in-the-loop for everything and automated backward, rather than starting automated and trying to add checkpoints after the trust was already damaged.

---
