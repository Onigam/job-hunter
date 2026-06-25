# STAR Stories — AlpineAI Senior Software Engineer Interview

Tailored for: backend engineering depth, SaaS at scale, LLM in production, regulated sectors, startup ownership.

---

## Story 1: Building Alaya from Zero to Acquisition

**Best for:** "Tell me about building a product from scratch" / "Describe a system you owned end-to-end"

In 2016, I co-founded Alaya, an employee purpose and engagement platform. We had a blank page, no customers, no existing infrastructure. The business was signing its first enterprise clients before we'd shipped anything, so the timeline pressure was real from day one.

My task was to design and build the entire platform, alone initially, then growing a small team around me while simultaneously supporting early-customer onboarding. That meant making architectural calls I'd have to live with for years.

I chose a pragmatic stack: Node.js for the backend API, PostgreSQL for persistence, React on the frontend. I designed multi-tenancy into the core data model from the start, which saved us significant retrofitting pain later. Within three months we had a working product in front of the first clients. Over the next few years I built out the full SaaS surface: API layer, impact reporting, postal campaign workflows, billing integration, and eventually a microservices extraction for the two highest-traffic modules when the monolith started showing scaling cracks.

The platform reached production with 50+ enterprise clients across Switzerland and France. Benevity, a Canadian unicorn at $1B+ valuation, acquired us in 2021. That acquisition was a direct validation of the technical and product decisions made from day one.

Looking back, I'd have added proper APM observability earlier. We added it reactively, which meant we spent time debugging incidents we could have anticipated. Next time I'd design for observability as a first-class concern, not an afterthought.

---

## Story 2: Making a Hard Architecture Decision Under Pressure

**Best for:** "Describe a technical trade-off you navigated" / "How do you handle technical debt?" / "Tell me about a time you pushed back on stakeholders"

At Alaya, around year three, we had a monolith that was showing real scaling cracks. Two high-traffic modules were slowing everything else down, and the team was split: full microservices rewrite versus staying monolithic with better internal modularity. Meanwhile, investors were pushing hard for new features, not rewrites.

My task was to make a defensible technical decision that balanced long-term scalability with short-term delivery reality.

I ran a two-week technical spike. We built minimal prototypes of both approaches and ran load tests against realistic traffic patterns. Then I took the trade-off analysis to the CTO and key stakeholders: concrete metrics, not opinions. I proposed a "strangler fig" approach: extract the two highest-traffic modules into independent services first, keep everything else in the monolith, and define explicit criteria for when additional extraction made sense.

The first extracted module shipped in six weeks. Performance on the busiest endpoints improved by roughly 40%. The remaining monolith stayed stable through the acquisition two years later. No big-bang rewrite was ever needed.

The hardest part wasn't the technical work. It was convincing people that "not rewriting everything" was the right call when they expected something more dramatic. Data helped. I'd do more early benchmarking next time to shorten that debate.

---

## Story 3: Running LLM Workloads in Production

**Best for:** "Tell me about your AI/LLM production experience" / "How do you build reliable AI-powered features?"

At Benevity, after the acquisition, I started integrating LLM capabilities into internal engineering workflows and then into product surfaces. This was around 2022-2023, early enough that there weren't established playbooks for what "LLM reliability in production" actually meant.

The task was to take a prototype feature (AI-assisted content generation for our platform's impact reporting module) from engineering demo to something that could run for thousands of users without constant babysitting.

I built an eval framework before we shipped. The idea was simple: a set of fixed inputs with expected output properties, run automatically on every model version change or prompt update. When we hit our first silent regression after a model update, that framework caught it before it reached users. I also built caching layers to handle latency variance as context depth grew, and implemented fallback logic for cases where the model response didn't meet quality thresholds rather than surfacing garbage to the user.

The feature shipped and ran stably through several model version cycles. The eval framework became part of the team's standard practice for any subsequent LLM feature. I also ran informal sessions across two engineering teams introducing these patterns; within three months roughly 70% of engineers on those teams had adopted AI-assisted workflows.

What I learned: the operational discipline for LLM features is genuinely different from traditional software. The failure modes are quieter and more subtle. I'd now treat eval infrastructure as a hard requirement before any LLM feature ships, not a nice-to-have.

---

## Story 4: Leading Without Formal Authority

**Best for:** "How do you influence without being a manager?" / "Tell me about driving adoption of something"

After the Benevity acquisition, I was a Senior Staff IC with no direct reports, but I wanted to drive adoption of AI-assisted development practices across two engineering teams that didn't report to me. The teams were skeptical and busy. A top-down mandate wasn't an option and wouldn't have worked anyway.

My task was to change how roughly 20 engineers worked without any formal authority over them.

I started small: found three engineers who were already curious about AI tooling and worked with them directly. I built internal demos showing concrete time savings on tasks they actually did, not toy examples. I ran voluntary lunch-and-learns, no attendance required. I created reusable prompt templates and committed them to a shared repository with documented examples. I tracked results: "this saved two hours on a PR review cycle" written up as a short internal note.

Within three months, about 70% of engineers on both teams were regularly using AI-assisted code review and generation. Several of them became internal advocates, which meant the adoption spread through peer recommendation rather than top-down pressure.

The mandate-free approach was slower than a forced rollout but produced stickier adoption. Engineers who chose it on their own terms defended it when pushback came. I'd take the same approach again.
