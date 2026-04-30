# STAR Stories — Navio Logistics, Founding Engineer

---

## Story 1: Building Alaya from Zero to Acquisition

**Best for:** "Tell me about a time you built something from scratch" / "What does founding engineer mean to you?" / "How do you handle ambiguity?"

In 2016, my co-founder and I started Alaya with an idea for an employee purpose and impact platform. We had a blank page, no customers, no product, and no other engineers.

My task was to architect and build the entire platform fast enough for the business to sign its first enterprise clients, while also designing something that could survive actual scale.

I spent the first three weeks choosing a stack I could ship fast and maintain alone: Node.js, React, PostgreSQL. Pragmatic, not clever. The core product was ready in about three months, enough for the first demo. From there it was iterative: multi-tenant architecture, an API layer for integrations, impact reporting, postal campaign management. As we grew I hired and onboarded three engineers, set up CI/CD, established a code review culture, and wrote architecture documentation alongside active feature work.

By 2021, the platform had 50+ enterprise clients across Switzerland and France. Benevity, a Canadian unicorn valued at over a billion dollars, acquired us. That outcome was a direct validation of every architectural decision made from day one.

Looking back, I'd have invested in observability much earlier. We added proper APM late, which made debugging slow as traffic grew. I'd also design multi-tenancy in from day zero rather than retrofitting it at month six. Those are the lessons you only really absorb by making the mistake.

---

## Story 2: Architecture Decision Under Pressure

**Best for:** "Tell me about a technical trade-off you navigated" / "How do you make decisions with incomplete information?" / "How do you handle technical debt pressure?"

Around year four at Alaya, we were hitting scaling cracks in the monolith. The team was split between a full microservices rewrite and a modular approach. Investors were pushing for new features, not internal work.

My task was to make a call everyone could commit to, one that addressed real scalability needs without burning the team on a rewrite while the business needed to keep shipping.

I ran a two-week technical spike: prototype load tests for both approaches, latency measurements under realistic traffic volumes, and a presentation with concrete metrics rather than architecture opinions. The proposal was a strangler fig pattern. Extract the two highest-traffic modules first, keep the rest monolithic, and define clear criteria for when to extract more. I documented the trade-offs explicitly so the decision wasn't about trust in me but about data the whole team could evaluate.

The first extracted module shipped in six weeks. Latency on the busiest endpoints dropped by roughly 40%. The remaining monolith stayed stable through the acquisition two years later. We never needed the big-bang rewrite.

The hardest part wasn't the technical work; it was convincing people that not rewriting everything was the right call. Data helped. I'd do more benchmarking earlier next time, before the debate becomes a cultural stand-off.

---

## Story 3: Driving AI Adoption Without Authority

**Best for:** "Tell me about leading change without a mandate" / "How do you influence technical direction?" / "What's your hands-on experience with LLMs in production?"

At Benevity in 2022, I was a Senior Staff IC with no direct reports. I needed to change how two engineering teams worked — specifically, getting them to adopt AI-assisted development practices — without being anyone's manager and without a top-down directive.

The teams weren't hostile, just skeptical. They'd seen tooling hype before and weren't going to change their workflow for a demo.

I started with three engineers who were genuinely curious, not the resisters. Built a small set of concrete demonstrations using real code from their own repos: PR review cycles shortened by two hours, boilerplate generation for a migration they were actively working on. Ran informal sessions over lunch with no slides and no mandate, just the tool running on their actual work. Then I built a shared library of prompt templates, committed it alongside the codebase so it felt like engineering infrastructure rather than a suggestion, and iterated on it based on what engineers actually kept using.

Three months in, roughly 70% of engineers on both teams had integrated AI tools into their regular workflow. More meaningfully, they'd started extending the template library themselves. I became the informal AI tooling lead across the org without asking for it.

The lesson was that adoption without mandate is slower but much stickier. Engineers who discovered the value themselves became advocates. A top-down decree would have gotten compliance, not genuine use.

---

## Story 4: Post-Acquisition Integration into a Larger Engineering Org

**Best for:** "Tell me about navigating ambiguity" / "How do you operate in a new environment?" / "How do you get up to speed fast?"

When Benevity acquired Alaya in 2021, I joined an engineering org roughly ten times larger than what I'd been running. Different culture, different codebase (Java plus microservices), different processes, and no established relationship with any of the teams I'd need to work with.

My challenge was to integrate Alaya's capabilities into Benevity's platform and keep shipping meaningful work, without burning political capital by moving too fast or pushing opinions before I understood the context.

I spent the first month almost entirely in listening mode: mapping the architecture before suggesting changes, sitting in on other teams' planning sessions, and building relationships with platform and infra engineers before I had any opinions worth pushing. Then I identified the two areas where I could contribute quickly without stepping on existing ownership, shipped two integrations in the first quarter, and used that credibility to start proposing larger cross-team architecture changes.

Over the following year I contributed to three major architecture decisions affecting the Europe-facing product surface, and drove AI tooling adoption across two engineering teams. I became a cross-team architecture liaison, which wasn't a role that existed when I joined.

The thing I'd do differently is have even more patience in the first month. I initially moved too fast trying to fix things that didn't need fixing from the outside. Slowing down and listening made me considerably more effective than the pace I was trying to keep early on.
