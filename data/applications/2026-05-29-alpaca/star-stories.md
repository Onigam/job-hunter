# STAR Stories — Alpaca, Senior AI Platform Engineer

## Story 1: Driving AI Platform Adoption Across Engineering Teams

**Best for:** "How would you get engineers to adopt a new internal platform?" / "Tell me about influencing without authority" / "How do you standardize AI tooling?"

At Benevity, several teams were experimenting with AI tools in isolation. Each engineer was figuring things out independently, with no shared patterns, no consistent quality bar, and a lot of duplicated effort. I wasn't anyone's manager, but I thought I could do something about it.

I started with three engineers who were already curious. Rather than proposing a formal initiative, I built internal demos that showed specific, concrete time savings: cutting a PR review cycle from a full day to a couple of hours. I wrote shared prompt templates and committed them to a common repo everyone could fork. We ran informal lunch sessions, no mandate, just "here's what I've been doing, want to see?" Over the following weeks I documented results in plain language and shared them in team channels, so there was a visible trail of wins rather than just theory.

Within about three months, roughly 70% of engineers across two teams were using AI-assisted code review and generation in their daily work. I became the informal AI tooling lead for the org, and the engineers who adopted it early started running their own sessions without any prompting from me.

What I'd do differently: the mandate-free approach was slower than I expected. I'd identify one high-visibility pain point earlier and anchor the first demo entirely on that, rather than showing general capability. Specificity drives adoption faster than breadth.

---

## Story 2: Building a Production Platform from Zero Under Business Pressure

**Best for:** "Tell me about building something from scratch" / "How do you handle speed vs. architectural quality?" / "Founding engineer" questions

In 2016, I co-founded Alaya. We had a concept, some early design sketches, and no engineering team beyond me. Enterprise clients were signing contracts, and the expectation was that I'd have something real to show in months.

I made a deliberate choice on the stack: Node.js, React, PostgreSQL. Fast to iterate, no exotic dependencies, nothing that would require a rewrite in two years. I built core features in the first three months to have something real for demos. Multi-tenant architecture came next, then the API layer and reporting. When we started hiring, I set up CI/CD and code review practices early, because I'd seen at previous companies how hard it is to retrofit culture once a team is already moving at speed.

We shipped to production and grew to 50+ enterprise clients across Switzerland and France. The platform was acquired by Benevity, a Canadian company at the $1B+ mark, in 2021. The technical architecture I'd put in place from day one held through the acquisition without major rewrites.

What I'd do differently: I added proper observability too late. We retrofitted APM several months in, which made debugging production incidents harder than it needed to be. I'd also have designed multi-tenancy from day zero. We ended up retrofitting that too, and it cost us weeks we didn't have.

---

## Story 3: Choosing the Right Architecture When the Easy Answer Was Wrong

**Best for:** "Tell me about a technical trade-off you navigated" / "How do you handle competing options with real constraints?" / "How do you move from experimental to production-grade?"

At Alaya, as the platform grew, we started hitting performance problems. The team debated a full microservices rewrite versus keeping the monolith. Business pressure was real: investors wanted new features, not a six-month engineering pause.

I ran a two-week technical spike, prototyping both approaches and load-testing the specific bottlenecks we were hitting. I presented the results with concrete metrics rather than architectural preferences. The data showed that two modules were responsible for most of the load, and that extracting just those two would get us 80% of the performance gain at a fraction of the rewrite cost. I proposed a strangler fig approach: extract the two highest-traffic modules first, define explicit criteria for when to extract more, and keep the rest of the monolith stable.

The first extracted module shipped in about six weeks. Performance on the busiest endpoints improved roughly 40%. The remaining monolith stayed stable through the acquisition without anyone having to do the big-bang rewrite they'd feared.

What I learned: the hardest part wasn't the architecture choice itself, it was convincing people that "not rewriting everything" was defensible. Concrete benchmarks cut that debate significantly. I'd run the benchmarks even earlier next time, before the conversation gets heated around opinions.

---

## Story 4: Navigating a Compliance-Aware Engineering Org After Acquisition

**Best for:** "How do you work in regulated environments?" / "Tell me about joining a large or structured org" / "Cross-functional collaboration in a compliance context"

When Benevity acquired Alaya in 2021, I went from a 10-person startup to a company roughly 10 times that size. Different codebase (Java, microservices), different release processes, different culture around how decisions got made. I had strong opinions about several things, but I was new.

I spent the first month mapping the architecture and building relationships before proposing anything. When I did start contributing more actively, I was careful about where I pushed: areas with clear evidence of a better path rather than places where my preference differed from what was already working. For AI tooling specifically, I aligned with the compliance and security teams early on what patterns were acceptable in that environment, because I'd learned at Alaya how much harder it is to retrofit those conversations after you've already built something.

Over two years I contributed to three major cross-team architecture decisions and became the point person for AI adoption across two engineering teams. The patience in the first month paid off meaningfully in the years that followed.

What I'd do differently: I initially moved too fast, trying to improve things that weren't broken by my standards but were working fine for that team's context. Slowing down and listening first made every subsequent contribution land better. I'd treat that as the default posture when entering any new org, not something to figure out after the first misstep.
