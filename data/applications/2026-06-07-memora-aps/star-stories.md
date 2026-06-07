# STAR Stories — Memora ApS, Founding Engineer

---

## Story 1: Building Alaya from Zero to Acquisition

*Best for: "Tell me about building something from scratch" / "What does founding engineer mean to you?"*

In early 2016, my co-founder and I had a blank page and a thesis: enterprise clients would pay for a software platform connecting employee purpose to real-world impact. No product, no code, no customers. My job was to make the technical bets that would let us sign and retain those first clients before we ran out of runway.

I picked a pragmatic stack rather than an impressive one: Node.js on the backend, React on the front, PostgreSQL for the data layer, no microservices. Within three months we had a working demo. Within six months, the first two enterprise clients were live. As the client base grew, I rebuilt the architecture around proper multi-tenancy, added an impact reporting layer, and eventually hired and onboarded the first three engineers while still shipping features myself.

By 2021 we had 50+ enterprise clients across Switzerland and France. Benevity, a Canadian unicorn with a $1B+ valuation, acquired the company. That acquisition was the market's verdict on the technical decisions I'd made from day one.

What I'd do differently: observability. We retrofitted APM long after we should have, and I paid for it in long debugging sessions. I'd also design for multi-tenancy from day zero; retrofitting it onto an existing data model is expensive in ways that are easy to underestimate until you're in the middle of it.

---

## Story 2: Making a Hard Architecture Decision Under Pressure

*Best for: "Tell me about a technical trade-off you navigated" / "How do you handle technical debt?"*

Around year three at Alaya, our monolith was showing cracks. The team had grown to four engineers and our busiest endpoints were slowing under load. The internal debate was a full microservices rewrite versus staying modular but monolithic. Meanwhile, our investors wanted new features, not infrastructure work.

My job was to make a defensible call that balanced long-term scalability against the reality that a multi-year rewrite would kill the product. I ran a two-week technical spike comparing both approaches with prototype load tests, then presented the trade-offs to the CTO and our board with concrete numbers rather than engineering opinions. The proposal was a strangler fig migration: extract the two highest-traffic modules first, keep everything else monolithic, and define clear criteria for future extractions.

The first module shipped in six weeks. Performance on the busiest endpoints improved roughly 40%. The remaining monolith stayed stable through the acquisition without requiring the big-bang rewrite anyone had feared.

The hardest part wasn't the engineering. It was convincing people that not rewriting everything was the right call. The load test data was the only thing that cut through the debate. I'd run that kind of benchmarking earlier next time to shorten the conversation.

---

## Story 3: Leading Without Formal Authority

*Best for: "How do you influence without a mandate?" / "Tell me about driving adoption of something new"*

When I joined Benevity after the acquisition, I was a Senior Staff IC with no direct reports but a clear problem: the engineering teams I worked with weren't using AI-assisted tooling, and I thought it was costing them hours every week. The complication was that I had no mandate to change how anyone worked.

I started with three engineers who seemed curious rather than skeptical, not the team leads, just people who'd asked questions during a demo I happened to give. I built internal tooling examples that showed concrete time savings on tasks they already did, like PR review and test generation. Then I ran informal lunch-and-learn sessions, no attendance required, just live demos of real workflows. I also created a shared library of reusable prompt templates and committed it to a shared repository anyone could pull from.

Three months in, roughly 70% of engineers on both teams were using AI-assisted code review and generation as part of their regular workflow. I became the informal AI tooling lead across the org. That title wasn't given to me; it was just what happened when people started defaulting to asking me.

The lesson was that a mandate-free approach is slower but stickier. Engineers who adopted it on their own terms became internal advocates. A top-down decree would have generated compliance at best, not the kind of ownership I actually saw.

---

## Story 4: Post-Acquisition Integration

*Best for: "Tell me about navigating change" / "How do you work in a larger organization?"*

After Benevity acquired Alaya in 2021, I went from a five-person company to a team ten times that size, different culture, a Java-heavy codebase I hadn't written, different processes, different everything. The risk was spending the first six months being the person who kept saying "we did it differently at Alaya."

I spent the first month mapping the existing architecture before proposing anything. I built relationships with platform and infrastructure teams before pushing technical opinions into spaces I didn't yet understand. When I did start contributing architectural input, I tried to do it through the people who already had credibility there, not around them.

It worked reasonably well. I contributed to three major cross-team architecture decisions in the first year, migrated core Alaya features into Benevity's platform without breaking existing integrations, and eventually became the go-to person for AI tooling adoption across two engineering teams.

Looking back, I initially moved too fast trying to fix things that weren't actually broken in the new org. Slowing down and listening first, even when I was fairly confident I knew the right answer, made me more effective over the following months.
