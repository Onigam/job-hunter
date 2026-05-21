# STAR Stories — JetBrains Principal Engineer (Platform Architecture)

---

## 1. "Tell me about a time you defined a platform architecture from scratch."

In 2016 I co-founded Alaya, a purpose platform for enterprise employee engagement. We had no customers, no codebase, no team. My task was to architect and build a production-grade SaaS platform while the business was simultaneously closing its first enterprise deals, which meant the architecture had to be defensible on day one without over-engineering things we hadn't earned yet.

I chose Node.js, TypeScript, PostgreSQL, and React, pragmatic choices for a two-person startup that needed to ship fast without betting on exotic tech. I designed the core around a multi-tenant data model, though I made the mistake of not enforcing tenant isolation at the data layer from the start. Six months in, when we had a dozen clients, retrofitting proper row-level isolation cost us about six weeks. That taught me to treat tenancy as a platform constraint, not a feature. From that point, every architectural decision went through a lens of: what does this look like when we have ten times the clients? We grew to 50+ enterprise clients across Switzerland and France. In 2021, Benevity, a Canadian unicorn with a $1B+ valuation, acquired us. The platform survived the acquisition without a rewrite, which I'd count as the real validation.

What I'd do differently: invest in observability from month two, not month eighteen, and model the tenancy boundaries before touching the schema.

---

## 2. "Tell me about driving alignment on a difficult architectural decision across multiple teams."

At Benevity, post-acquisition, I was a Senior Staff IC without direct reports, working across two engineering teams that hadn't asked for my opinion. The situation: one team wanted to push a new shared service into production that would become a dependency for four other product areas, and the proposed API design had a fundamental data-ownership problem that would have created a distributed transaction nightmare down the road.

My job wasn't to block them. It was to get everyone to the same understanding of the problem before the design was locked. I started by mapping the data flows across all four product areas, then put together a concrete failure scenario: two teams updating the same resource through the service simultaneously with no clear conflict resolution. I walked through it in a working session with leads from all three teams, not as a critique of the original design but as a shared problem we all had an interest in solving.

We landed on a revised design with clear ownership per domain and a lightweight event-based integration instead of shared state. It took three weeks longer than the original timeline, but it shipped without a distributed-transaction incident in the first year of production. The team that originally proposed the design ended up championing the revised approach internally, which mattered more than my being right about it.

What I'd do differently: earlier in the process, get the data-flow diagram in front of everyone. The misalignment was partly because teams had different mental models of the same system.

---

## 3. "Tell me about a technical trade-off you navigated under pressure."

At Alaya, around year three, the monolith was starting to show scaling cracks on our two highest-traffic modules, specifically the impact reporting pipeline and the notifications system. The team was split: one camp wanted a full microservices rewrite, the other wanted to stay monolithic and optimize. Investors were expecting new features, not a multi-month rewrite. I had to make a call.

I ran a two-week technical spike: prototype load tests on both approaches, rough cost estimates, and a realistic timeline for each. The full rewrite would have taken four to six months with no customer-visible output. The strangler-fig approach, extracting the two highest-traffic modules first while keeping the rest of the monolith intact, had a realistic six-week timeline to the first module in production.

I presented the trade-off to the CTO and our main investor with those numbers and a clear criterion for when to extract additional modules. We went with the strangler-fig. The first extracted module shipped in five weeks. Performance on the reporting pipeline improved by roughly 40% on peak-traffic endpoints. The monolith stayed stable through the acquisition three years later.

The hardest part wasn't the technical decision itself; it was convincing people that "not rewriting everything" was the responsible call. The spike data helped. It made the conversation about trade-offs rather than opinions.

---

## 4. "Tell me about a time you changed how a team worked without having the authority to mandate it."

At Benevity I spotted an opportunity to change how engineers across two teams approached code review and documentation, specifically by introducing AI-assisted workflows. The teams didn't report to me and nobody had asked for this. If I announced a new process, I'd own it forever and it would die the moment I left.

So I didn't announce anything. I found three engineers who were already curious about AI tooling and started there. We ran experiments together and documented the concrete results: one saved a two-hour PR review cycle by using a prompt template to pre-summarize context for reviewers. I committed the prompt templates to a shared repo and made them discoverable, not mandatory. Then I ran informal lunch sessions, no slides, just live demos where I showed a workflow people recognized from their own daily work, solved faster.

Within three months, roughly 70% of engineers on both teams were using some version of AI-assisted code review or generation in their daily workflow. The adoption didn't come from me; it came from the early adopters, who had figured out what worked and told their teammates. I'd become the informal AI tooling lead across the org without ever being appointed to anything.

The lesson I took from it: mandates create compliance, not adoption. The goal was for engineers to own the practice themselves, which meant getting out of the way once the momentum was there.

---

## 5. "How do you operate in greenfield environments where standards are still being built?"

The Alaya founding period is the clearest example I have. There were no established processes, no existing architecture to reason about, no team culture. Everything was being decided for the first time, and decisions made in month two had consequences two years later.

My approach was to distinguish between decisions that were hard to reverse and decisions that were easy to change. Database schema design, multi-tenancy model, API versioning strategy: I spent real time on those, because retrofitting them later was expensive (I know because I had to). Framework choices, deployment tooling, code style: I made a reasonable call, documented the reasoning, and moved on. The goal was to create a system where future engineers, including future me, could understand why a decision was made and therefore change it with confidence when circumstances changed.

One thing I'd add: in a greenfield architecture role, the early principles documents matter more than most people realize. Not because they constrain future decisions, but because they give teams a common vocabulary for evaluating options. At JetBrains, I'd want to spend the first month writing one or two of those documents collaboratively with the engineers who have to live with the constraints, before anything gets built.
