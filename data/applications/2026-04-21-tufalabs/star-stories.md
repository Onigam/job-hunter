# STAR Stories — Tufalabs Senior Research Engineer

---

## 1. Hard Architecture Decision Under Pressure
*For: "Tell me about a technical trade-off you navigated" / "How do you handle technical debt?" / "How do you make decisions under uncertainty?"*

At Alaya, around 2019, we were running a Node.js monolith that had served us well but was starting to crack under load. Two of our highest-traffic modules, the impact reporting engine and the notification dispatch system, were causing latency spikes that affected the whole application. The team was split: some wanted a full microservices rewrite, others wanted to stay put and optimize. Investors at the time were pushing for new features, not architectural cleanup.

My job was to make a defensible call and get everyone behind it. I ran a two-week technical spike, prototyped both approaches with load tests against production-level data volumes, and brought concrete numbers to the table rather than opinions. What the data showed was that extracting just those two modules would capture most of the performance gain without the cost and risk of a full rewrite. I proposed what I called a strangler fig approach: extract the two heaviest modules first, hold the rest of the monolith stable, and define clear criteria for when to extract more.

We shipped the first extracted module in six weeks. Latency on those endpoints dropped by roughly 40%. The rest of the monolith stayed stable all the way through the Benevity acquisition two years later. No big-bang rewrite was ever needed.

Looking back, the hardest part wasn't the technical decision. It was convincing engineers who wanted to rewrite everything that "doing less" was actually the harder and smarter call. Running early benchmarks to make that argument quantitatively would have shortened the debate considerably.

---

## 2. Building Alaya from Zero to Acquisition
*For: "Tell me about a time you built something from scratch" / "How do you handle ambiguity?" / "What's the most complex system you've designed?"*

In early 2016, I co-founded Alaya with two non-technical co-founders. We had a product vision, a handful of early enterprise conversations, and no code. I was the sole technical person for the first several months.

The core challenge was building something credible enough to close the first paying clients while designing it to survive whatever came after. I chose a stack that was pragmatic rather than fashionable: Node.js, React, PostgreSQL, with a modular structure that could grow without requiring a rewrite. The first working version took about three months. From there the work became iterative: multi-tenant architecture, an API layer for enterprise integrations, impact reporting, postal campaigns, and eventually a mobile app.

As we grew, I hired and onboarded our first three engineers. I set up CI/CD pipelines, code review processes, and basic architecture documentation early, partly because I'd seen what happened when those things were retrofitted later. By the time Benevity acquired us in 2021, the platform had over 50 enterprise clients across Switzerland and France, and the codebase was clean enough that Benevity's engineers could read and extend it without a major rewrite.

What I'd do differently: invest in observability earlier. We added proper APM late in the game, which made debugging production issues harder than it needed to be. I'd also design for multi-tenancy from day zero rather than retrofitting it when the first enterprise client asked for data isolation.

---

## 3. Driving AI Tooling Adoption Without a Mandate
*For: "How do you influence without authority?" / "Tell me about leading change" / "How do you get engineers to change how they work?"*

At Benevity in 2023, I wanted to get engineering teams to integrate AI-assisted development into their day-to-day workflow. GitHub Copilot had been available for a while, but adoption was patchy and somewhat distrustful. I had no direct reports and no management backing to mandate anything.

I started with three engineers who were already curious. I built internal demos that showed concrete time savings on real tasks, not toy examples: PR review summaries, test generation for legacy code, prompt templates for incident write-ups. I kept it informal. Lunch sessions, no slides, no mandate. I also committed a set of reusable prompt templates to a shared repo and documented a handful of case studies, things like "this saved two hours on a PR review cycle," with real numbers.

Over about three months, roughly 70% of engineers across two teams were actively using AI-assisted code review and generation. More importantly, some of those engineers started contributing their own templates to the shared repo and advocating for the tooling internally. That peer advocacy was something I couldn't have manufactured with a top-down approach.

The lesson I took from it: the mandate-free approach is slower but it sticks. People who adopt something on their own terms become advocates. People who adopt it because they were told to look for the first excuse to stop.

---

## 4. Post-Acquisition Integration at Benevity
*For: "Tell me about navigating organizational change" / "How do you work in a large, complex organization?" / "How do you adapt to a new environment quickly?"*

When Benevity acquired Alaya in 2021, I went from a team of eight to an engineering organization roughly ten times that size. Different culture, different codebase (Java microservices at Benevity vs. our Node.js stack), different decision-making rhythms. My instinct was to move fast and start improving things I could see were suboptimal.

That instinct was wrong, and I figured it out within about six weeks.

What actually worked was spending the first month mapping the existing architecture before proposing changes, and building relationships with the platform and infrastructure teams before pushing technical opinions. I was skeptical of a few architectural choices early on, but I waited until I understood why those decisions had been made before saying anything. In most cases, the reasons were reasonable given the constraints that had existed at the time.

Once I had credibility, I was able to drive real change: contributing to three major cross-team architecture decisions in the first year, and becoming the go-to person for AI tooling adoption across two engineering teams. The integration of Alaya's core features into Benevity's platform went more smoothly than most acquisitions, largely because we prioritized understanding before opining.

The reflection is simple: slowing down to listen first made me more effective, not less. Moving fast in a new organization mostly just builds resistance.
