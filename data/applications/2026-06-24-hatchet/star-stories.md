# STAR Stories — Hatchet, Full-Stack Engineer (Founding Team)

Stories selected for a founding-team infrastructure role with priorities around reliability, developer experience, and open-source tooling.

---

## Story 1: Building Alaya from Zero to Acquisition

**Best for:** "Tell me about a time you built something from scratch" / "Describe your founding engineer experience" / "How do you handle ambiguity at the start of a project?"

In 2016, my co-founder and I started Alaya, a purpose and engagement platform for enterprise employees. The company had customers in the pipeline before we had a product, which meant the pressure to ship was immediate. I was the only engineer for the first year, which made every architectural decision mine to make and live with.

I chose a stack I trusted: Node.js, React, PostgreSQL. Nothing exotic. The reasoning was simple: I needed to be productive alone, and I needed future team members to onboard without a steep ramp. In the first three months I built the core loop, just enough for a credible demo. The following eighteen months were about expanding carefully: multi-tenancy, API contracts for enterprise clients, an impact reporting layer, a postal campaign system. I hired the first three engineers during that period, which added coordination overhead but also created the first real test of whether the architecture could support multiple contributors without falling apart.

By the time Benevity, a Canadian unicorn valued above $1B, acquired us in 2021, the platform was serving 50+ enterprise clients across Switzerland and France. The original data model was still recognizable, mostly intact. Five years of continuous product additions hadn't required a full rewrite.

The thing I'd do differently: add distributed tracing from day one. We bolted it on late, and by then the architecture had assumptions baked in that made instrumentation harder than it needed to be. Not fatal, but expensive in debugging hours. That lesson is directly relevant to Hatchet's 2026 observability roadmap.

---

## Story 2: Architecture Decision Under Pressure

**Best for:** "Tell me about a technical tradeoff you navigated" / "How do you handle technical debt while delivering features?" / "How do you convince non-technical stakeholders of an engineering decision?"

At Alaya around year three, our monolith was showing real strain. Two high-traffic endpoints were causing latency spikes that affected the whole application. The engineering team was split: half wanted a full microservices rewrite, half wanted to stay monolithic and patch. Investors were pushing for new features, not rewrites.

My job was to make a defensible call and execute it without losing months to internal debate. I ran a two-week spike comparing both approaches with prototype load tests on realistic traffic patterns. Then I wrote up the tradeoffs with concrete numbers and presented them to the founding team and investors, not opinions about architecture philosophy, but actual benchmark data.

What I proposed was a strangler fig migration: extract the two highest-traffic modules first, keep everything else monolithic, and define explicit criteria for when to extract additional services. It was a deliberate middle path, which meant both camps were half-satisfied. I framed it that way explicitly, because trying to make everyone fully happy with an architecture decision is how you end up with no decision.

The first extracted module shipped in six weeks. Latency on those endpoints improved by roughly 40%, and the remaining monolith stayed stable all the way through the Benevity acquisition. No big-bang rewrite was ever needed.

If I did it again I'd run the benchmark data earlier, in the first week rather than the second. The time we spent debating the right approach before seeing data was almost entirely wasted. Numbers cut the debate short in a way that arguments can't.

---

## Story 3: AI Tooling Adoption Without a Mandate

**Best for:** "Tell me about influencing without formal authority" / "How do you drive change in a larger team?" / Staff+ and founding engineer roles / "Developer experience" focus areas

After the acquisition, I joined Benevity as a Senior Staff IC with no direct reports, on a team about ten times the size of Alaya. One of my goals was to shift how engineers wrote code by integrating AI-assisted tooling into their workflows. The problem: I had no authority to make anyone do anything.

I started with three engineers who were already curious about the tooling. We built a shared set of prompt templates together, and I ran a quick internal demo showing concrete time savings on a real PR review cycle, not a hypothetical one. Then I did an informal lunch session, no slides, no mandate, just walking through the workflow live on actual code from our codebase.

From there it propagated through those early adopters. Within three months, around 70% of engineers on both teams had incorporated AI-assisted code review and generation into their regular workflow. The reusable prompt templates I'd committed to a shared repo helped spread the patterns without requiring me to personally onboard each person.

What I'd change: nothing about the approach, but I'd have started a week earlier. The mandate-free rollout was slower to gain momentum, but the engineers who adopted on their own terms became internal advocates. A top-down directive would have gotten compliance but not real adoption. The difference matters.

---

## Story 4: Post-Acquisition Integration

**Best for:** "Tell me about navigating a significant change" / "How do you work effectively in a much larger organization?" / "Cross-team collaboration" / "How do you get up to speed on an unfamiliar system?"

When Benevity acquired Alaya in 2021, I went from a ten-person startup to a company with hundreds of engineers. The primary codebase shifted from Node.js and React to Java microservices. The decision-making culture was different too: slower, more committee-oriented, with fewer unilateral calls possible.

My task was to integrate Alaya's core capabilities into Benevity's platform without losing delivery pace, and to do that without fighting the culture I'd landed in.

My first month I proposed nothing. I spent it mapping the existing architecture, understanding which teams owned which systems, and building relationships with the platform and infra leads before I had opinions about their choices. That was deliberate: I'd seen enough post-acquisition integrations go badly when the acquired team arrived assuming their systems were better by default.

Once I had that context, I could contribute to architecture discussions from inside the organization's frame rather than pushing my assumptions from outside it. Over the next year I contributed to three major cross-team architecture decisions and became the go-to for EU-facing product work. The Alaya feature migration landed without a hard cutover, and the platform has been stable since.

The lesson I carry forward: the instinct to fix things immediately after joining an unfamiliar system is almost always wrong. Going slowly in month one to understand the existing constraints made everything after month one faster. I'd do it the same way again.
