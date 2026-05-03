# STAR Stories — ChangeEngine VP/Head of Engineering

Tailored for: founding engineer + team-building emphasis, architecture under pressure, leading without authority.

---

## Story 1: Building Alaya from Zero to Acquisition

**Best for:** "Tell me about a time you built something from scratch" / "What does founding engineer actually mean to you?" / "How do you handle greenfield ambiguity?"

In 2016, I co-founded Alaya, a purpose and impact platform for employee engagement. We had a blank page, no codebase, no customers. I was the first engineer and, for the first year, essentially the sole decision-maker on everything technical.

My job was to ship a production system fast enough to keep pace with enterprise sales that were already happening. The business was signing clients before we had a full product, so I couldn't afford to over-engineer, but I also couldn't afford choices I'd regret at scale.

I chose a pragmatic stack — Node.js, React, PostgreSQL — that I could ship quickly, hire into, and defend to a technical audience. I got to a first client demo in the first three months. From there I expanded iteratively: multi-tenant architecture, an API layer, impact reporting, postal campaign tooling, integrations. When revenue grew enough to hire, I brought on three engineers, set up CI/CD, established code review as a non-negotiable, and wrote the architecture docs that let someone new get up to speed without pulling me aside constantly.

By 2021, the platform was running 50+ enterprise clients across Switzerland and France. Benevity, a Canadian unicorn at $1B+ valuation, acquired Alaya. The technical due diligence confirmed that the foundational choices — the architecture, the test coverage, the API design — held up under scrutiny.

What I'd do differently: I waited too long to add proper observability. We retrofitted APM late and I was flying partially blind during a stretch I shouldn't have been. I'd also design for multi-tenancy from day zero — adding it later was painful and avoidable.

---

## Story 2: Making a Hard Architecture Call Under Investor Pressure

**Best for:** "Tell me about a technical trade-off you navigated" / "How do you make architectural decisions under pressure?" / "How do you communicate technical decisions to non-technical stakeholders?"

Around 2019-2020 at Alaya, the monolith we'd built was starting to show cracks. Load was uneven, a few endpoints were noticeably slow, and the team — four people by then — was having real debates about what to do. Two camps formed: full microservices rewrite vs. staying with a modular monolith. The timing was bad. Investors were pushing for new features, not a six-month internal rewrite.

As the technical lead, I had to make a defensible call and justify it to people who weren't engineers.

I ran a two-week technical spike. I built prototype load tests, generated concrete metrics on where the bottlenecks actually were, and wrote explicit trade-offs for both approaches. When I presented to the CTO and investors, I came with data, not opinions. The proposal was a strangler fig migration: extract the two highest-traffic modules first, prove the approach works at small scale, and define clear criteria for when to extract more. No big-bang rewrite, no premature over-architecture.

The first extracted module shipped in six weeks. Performance on those endpoints improved around 40%. The remaining monolith stayed stable all the way through the Benevity acquisition — we never needed the full rewrite.

The hardest part was convincing engineers that "not rewriting everything" was the right call. Some felt we were leaving technical debt on the table. The metrics helped, but I also had to be honest about the tradeoff: we were trading ideal architecture for delivery credibility, and that was the right bet at that stage.

What I'd change: I'd run the benchmarking earlier, before the debate became a morale issue. Data resolves opinion fights faster than argument, and I let the argument run longer than I should have.

---

## Story 3: Building the First Engineering Team

**Best for:** "Tell me about your experience hiring engineers" / "How do you build engineering culture?" / "What does a good onboarding process look like to you?"

At Alaya, once revenue was growing and we needed to ship faster, I had to go from solo engineer to engineering manager for the first time. I didn't have a template. I had to figure out what kind of engineers we needed, how to evaluate them without a formal hiring process, and how to build a team that didn't have me as a single point of failure.

My first step was writing down, explicitly, the three or four architectural principles that had guided my decisions to that point. Not as documentation for its own sake — I needed to hire people who would extend those principles, not fight them. That shaped who I interviewed and what questions I asked. I hired three engineers in that first wave, all earlier in their careers, which meant I had to invest heavily in onboarding and code review.

I set up CI/CD, made PR review a non-negotiable part of the workflow, and added architecture discussions as a standing item in our weekly sync rather than something we only did when a problem forced it. The goal was to get each engineer to the point where they could make good architectural decisions without checking with me first.

The team shipped reliably from the start. When the Benevity acquisition came, none of the new engineers were caught off guard by due diligence questions — they understood the system well enough to speak to it.

What I'd do differently: I delegated too slowly. I kept holding architectural decisions myself when I could have been growing that muscle in the team earlier. I eventually figured out that setting context and letting people make the call was more valuable than making it correctly myself every time.

---

## Story 4: Driving Adoption Without a Mandate

**Best for:** "Tell me about leading without formal authority" / "How do you influence engineering culture?" / "How do you get engineers to change their habits?"

At Benevity, I was a Senior Staff IC. No direct reports. I wanted to drive adoption of AI-assisted development practices across two teams that reported to different managers, and I had no authority to tell anyone to do anything.

The temptation in that situation is to go to leadership and get a mandate. I didn't, because I've seen mandated tooling adoption fail: engineers comply, then quietly stop using the tool the moment no one's watching.

I started with three engineers who were already curious about AI tooling. I built small internal demos — concrete, specific, showing time savings on workflows they actually used. Then I ran informal lunch-and-learn sessions with no attendance requirements and no deck. I created reusable prompt templates and committed them to a shared repo, so the knowledge was durable and searchable, not locked in someone's head. I documented wins in the format of short stories: "this PR review cycle that usually takes four hours took one."

Within three months, around 70% of engineers on both teams were using AI-assisted code review and generation as a normal part of their work. I became the informal AI tooling lead across the org. The engineers who adopted it on their own terms became internal advocates — they recruited their colleagues in a way I couldn't have done with a top-down directive.

What I learned: adoption that happens by choice is stickier than adoption that's mandated. It's slower, but the results are durable. That principle generalizes well beyond tooling.

---

## Story 5: Post-Acquisition Integration

**Best for:** "How do you navigate joining a much larger organization?" / "Tell me about working through major organizational change" / "How do you build trust in a new environment?"

After the Benevity acquisition in 2021, I joined a team roughly ten times the size of Alaya. Different codebase (Java-based microservices), different culture, different decision-making pace. My job was to help integrate Alaya's capabilities into Benevity's platform without losing the product velocity we'd built.

The instinct after an acquisition is to push the way you've been doing things. You just built something successful, so it's easy to assume your approach is right. I resisted that impulse deliberately.

I spent the first month mapping the existing architecture before proposing anything. I built relationships with the platform and infrastructure teams before sharing opinions. That investment paid off: when I did start contributing to architecture decisions, people listened because I'd already shown I understood what they'd built and why. Over the next year, I contributed to three major cross-team architecture decisions and became the liaison for the Europe-facing product surface.

Separately, I drove AI tooling adoption across two engineering teams using the mandate-free approach described above. Within three months, 70% of engineers on both teams had integrated AI tooling into their regular workflow.

What I learned: moving too fast is a real failure mode in new organizations, especially post-acquisition. Slowing down to listen first made me far more effective than any technical contribution I could have rushed in during the first month. Trust is not inherited — it has to be built.
