# Behavioral Interview Stories — Albert (Principal / Distinguished Engineer)

---

## 1. Building a Platform from Zero to Acquisition

**Best for:** "Tell me about a time you owned something end to end" / "Founding engineer" / "How do you handle ambiguity at scale?"

In 2016 I co-founded Alaya, a purpose and engagement platform for enterprise employees. We had no product, no customers, and no funding runway to absorb mistakes. I was the only engineer.

My task was to make the platform real fast enough that the co-founders could sell it. That meant architectural choices with no safety net: a stack that could reach production quickly but wouldn't collapse when the first big client asked for SSO and multi-tenant data isolation in the same month.

I chose Node.js, React, and PostgreSQL, partly because I knew them well and partly because they gave us the fastest path from idea to deployed feature. I multi-tenanted the data model from day one after watching a competitor retrofit it under load, which was painful to observe. In the first three months I shipped the core product, set up CI/CD, and got to a first demo. Over the following two years I hired the first three engineers, wrote the architecture docs that let them get productive in a week, and led the extraction of the two highest-traffic modules from the monolith when it started showing cracks.

By 2021 we had 50+ enterprise clients across Switzerland and France. Benevity, a Canadian unicorn valued at over $1 billion, acquired us. The acquisition was a direct signal that the technical and product bets we made early held up under real commercial pressure.

What I'd do differently: I added proper APM too late, which meant we were flying blind on performance for about a year longer than we should have. I'd instrument from day one next time, not once it becomes urgent.

---

## 2. Making a Hard Architecture Decision Under Investor Pressure

**Best for:** "Tell me about a technical trade-off you navigated" / "How do you make irreversible decisions?" / Principal-level systems design

At Alaya, after we hit serious growth, we had a monolith starting to show scaling problems. The team was split: some wanted a full microservices rewrite, others wanted to stay put. Investors were actively pushing for new features, not infrastructure. I had to make a call and defend it to people who didn't fully understand the technical stakes.

I ran a two-week spike. We built lightweight prototypes of both approaches, ran load tests against the current monolith's bottlenecks, and I produced a side-by-side comparison with concrete numbers, not arguments. What the data showed was that a full rewrite would take four to six months with no product shipped, while a strangler fig approach, extracting the two modules that were causing ~80% of our load spikes, would take six weeks for the first extraction and let us keep shipping everything else.

I presented the trade-off to the CTO and investors with the benchmark data. Not an opinion, a decision framework. We went with the strangler fig. The first extracted module shipped in six weeks. Performance on those endpoints improved roughly 40%. The rest of the monolith stayed stable all the way through the acquisition without touching it again.

What I'd change: the internal debate took three weeks before I had data. I should have run the spike first and cut the debate off earlier. Data ends arguments; argument doesn't end arguments.

---

## 3. Driving Adoption Across Teams Without Any Authority

**Best for:** "How do you lead without being a manager?" / "Tell me about influencing at scale" / Staff+ / Distinguished Engineer behaviors

At Benevity, after the acquisition, I was a Senior Staff IC with no direct reports. I wanted to get two engineering teams, neither of which reported to me, to start using AI-assisted development practices: code review, PR summaries, test generation. The engineering managers weren't opposed but they weren't going to mandate it either.

I started small. Three engineers who seemed curious got individual demos showing concrete before/after on a PR review cycle they'd just done. Not a pitch, just a comparison. That small group started using the tools. I built a shared repo with reusable prompt templates, wrote a short internal doc that was deliberately not a policy or a mandate, and ran two "lunch and learn" sessions where I showed real work output, not slides.

Within three months, roughly 70% of engineers on both teams were using AI-assisted code review or generation as part of their regular workflow. I became the informal AI tooling lead across the org. None of it was mandated. A few of the early adopters became internal advocates who made the case to their teammates in ways I couldn't.

The thing that surprised me: the mandate-free approach was slower to start but produced much stickier adoption. Engineers who decided on their own were willing to defend the tool to skeptical colleagues. That's not something you get from a top-down rollout.

---

## 4. Navigating a Large Org After Coming from a Startup

**Best for:** "How do you work in a large, complex organization?" / "Tell me about a time you had to adapt your approach"

When Benevity acquired Alaya in 2021, I went from a 12-person company to a team roughly 10 times that size. Different codebase, mostly Java and microservices. Different release processes, different assumptions about code ownership, different political dynamics around architecture decisions.

My instinct was to move quickly. I'd spent five years operating at startup speed and I saw things I thought could be improved. That instinct was wrong, or at least premature.

I spent the first four weeks just mapping: the architecture, who owned what, which teams had informal authority that wasn't reflected in org charts. I had a lot of coffee chats before I said anything that could be heard as criticism. By the time I proposed changes, I had credibility with the platform team and the infra team. I co-drafted three major cross-team architecture decisions over the next 12 months, all of which went through because I'd built the relationships first.

What I learned: moving fast in a new large organization usually means burning trust you haven't yet earned. Slowing down for six to eight weeks of orientation made me more effective for the following three years, not less.

---

## 5. Bringing Observability to a System That Had None

**Best for:** "Tell me about a time you improved reliability" / "How do you think about production systems?"

Toward the end of our growth phase at Alaya, before the acquisition, we started hitting intermittent performance degradations that were hard to reproduce. Response times would spike for 10-15 minutes and then recover. No clear pattern, no error logs, users noticing but not enough to trigger a formal incident.

I realized we had almost no visibility into what was actually happening at runtime. We had application logs but no APM, no distributed tracing, no query-level performance data. We'd been running on good fortune and a relatively small user base.

I introduced New Relic APM, instrumented the main API paths with custom timing, and added slow query logging to PostgreSQL with a 100ms threshold. Within 48 hours of having that data, we traced the degradations to a combination of two things: a full table scan on a table that had grown silently past the point where the query plan was sensible, and a cache invalidation pattern that was accidentally synchronized across tenants under load.

The fixes took two days once we knew what we were looking at. The investigation without instrumentation had been ongoing for three weeks. The lesson was obvious but I still underestimated how long you can operate without visibility before it costs you.

For any new platform I work on, observability is day-one infrastructure, not a retroactive addition.
