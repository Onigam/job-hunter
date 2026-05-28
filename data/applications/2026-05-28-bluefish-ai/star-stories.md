# STAR Stories — Bluefish AI, Staff Fullstack Engineer

Selected for: architectural leadership, LLM/AI platform work, high-throughput systems, cross-team influence.

---

## Story 1: Building a Platform from Nothing (Alaya, 2016-2021)

Best for: "Tell me about a time you owned a large architectural decision" / "Describe building something at scale from scratch"

In 2016, I co-founded Alaya, a purpose and engagement platform for enterprise employees. There were no prior systems to inherit, no existing team, no existing customers. The task was to make the architecture decisions that would carry us through growth we couldn't fully predict, and to do that while we were simultaneously signing the first clients.

I chose a pragmatic stack: Node.js, React, PostgreSQL. Not because those were the trendiest choices, but because they gave us a small, hireable talent pool and a runtime we could all reason about. I spent the first three months building the core product solo, getting to a real demo. Then I started expanding: multi-tenant isolation, an API layer that could surface as both a web frontend and a mobile client, impact reporting with configurable workflows, and eventually a postal campaign engine that ran at volume. As the team grew from one to four engineers, I set up CI/CD, established the code review culture, and wrote architecture documentation that let new hires get up to speed without me holding their hand through every decision.

We hit 50+ enterprise clients across Switzerland and France, and in 2021 the company was acquired by Benevity, a Canadian unicorn valued at over $1B. That acquisition was, in retrospect, a validation of every early architectural call: the system had held up, nothing catastrophic had to be rewritten, and the codebase was legible enough for Benevity's engineers to take over parts of it.

If I did it again, I'd instrument observability from day one. We added APM late and paid for it with slow debugging cycles in production. I'd also design multi-tenancy in from the start rather than retrofitting it at month six.

---

## Story 2: Hard Architecture Decision Under Pressure (Alaya, 2019)

Best for: "Tell me about a technical trade-off you had to navigate" / "How do you handle tech debt vs. delivery pressure?"

Around 2019, the Alaya monolith was starting to crack under load. The team was split: some wanted a full microservices rewrite, others wanted to keep moving features. Investors were watching our roadmap closely and weren't interested in a six-month pause for internal plumbing.

My job was to make a defensible call that we could actually ship, not just present on a whiteboard. I ran a two-week technical spike: prototyped the microservices split for our two highest-traffic modules, ran load tests on both the current system and the prototype, and documented the delta. I also modeled the delivery cost of each path. A big-bang rewrite would have taken six to eight months with meaningful delivery risk. The "strangler fig" migration I was proposing would extract those two modules first, keep the rest of the monolith stable, and give us clear exit criteria for extracting more.

I presented this to the CTO and the lead investor with actual numbers, not just opinions. The pitch was: "Here's what we measured, here's what it costs to go slow, here's what it costs to go fast, here's why this middle path is better than either extreme."

We shipped the first extracted module in six weeks. Performance on the two busiest endpoints improved by roughly 40%. The remaining monolith stayed stable through the acquisition. No big-bang rewrite was ever needed.

What I'd do differently: more benchmarking upfront to compress the debate period. People talk for a long time about architecture options when they don't have data. The data shortened every conversation.

---

## Story 3: Driving AI Tooling Adoption Without a Mandate (Benevity, 2022-2023)

Best for: "Tell me about influencing without authority" / "How do you drive change at a large organization?" / Staff+ roles

After the acquisition, I was a Senior Staff IC at Benevity with no direct reports but a strong belief that AI-assisted development was going to change how the team worked. I wanted to shift how ~20 engineers across two teams wrote and reviewed code. The problem: no one gave me a mandate to do it, and top-down mandates in engineering culture tend to generate compliance theater, not actual change.

I started with three engineers who were already curious. I didn't pitch a program, I just showed them what GitHub Copilot could do on a real task in our codebase. Then I built a few internal demos: a side-by-side comparison of PR review time with and without AI assistance, a set of reusable prompt templates for our most common code generation patterns. I committed those templates to a shared repo where anyone could use them and improve them. I ran informal lunch sessions, no obligation, no slides, just live demos with real problems.

Within three months, ~70% of engineers across both teams were using AI-assisted code review and generation in their regular workflow. Two of the early adopters became advocates who started running their own demos for new hires. That peer-to-peer spread was faster than anything I could have done by myself.

The lesson: change sticks when people adopt it on their own terms. A mandate would have gotten 100% nominal compliance and maybe 20% real usage. The slower path got genuine adoption and internal champions.

---

## Story 4: Cross-Team Architecture at Post-Acquisition Scale (Benevity, 2021-2022)

Best for: "Tell me about a cross-functional collaboration" / "How do you work with large engineering organizations?" / "Navigating ambiguity after major change"

When Benevity acquired Alaya and I joined their team, I went from a six-person startup to an engineering org roughly ten times that size. Different codebase (Java microservices), different deployment culture, different decision-making rhythms. My instinct was to jump in and start proposing changes. I had to consciously override that.

I spent my first month just mapping: architecture docs, Slack channels, who owned what, where the real friction points were. I asked a lot of questions instead of giving answers. That investment paid off when I started needing to drive actual cross-team initiatives. I already knew who to call, and I'd built enough credibility that my technical opinions landed differently than they would have from a newcomer with opinions.

One concrete example: a migration that touched three teams and had stalled for six weeks over an architectural disagreement. I ran a structured design review with reps from each team, wrote up a decision doc with the trade-offs clearly separated from the recommendation, and got sign-off in two meetings rather than continuing the async debate. The migration shipped two months later.

I became the go-to liaison for the Europe-facing product surface, contributed to three major cross-team architecture decisions in that first year, and was the informal lead on AI tooling adoption across the org. The main thing I'd do differently: be even more patient in the first two months. The listening period had a direct return on investment that I underestimated at the time.
