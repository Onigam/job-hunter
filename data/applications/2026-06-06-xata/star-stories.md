# STAR Stories — Xata Backend Engineer

---

## 1. Building the PostgreSQL Platform at Alaya from Scratch

**Best for:** "Tell me about infrastructure you built from zero" / "How do you make foundational architecture decisions?"

The best example I have of building infrastructure that actually had to hold is Alaya, which I co-founded in 2016. We had nothing: no customers, no code, no infrastructure. I chose PostgreSQL as the backbone early, partly because I'd seen what MongoDB misuse looked like at scale and wanted schema discipline from the start. The goal was to reach a first demo in three months while keeping the architecture honest enough that we wouldn't need a rewrite when real load arrived.

What I actually shipped in that window was a multi-tenant data model, an API layer, and a CI/CD pipeline the first engineer I hired could plug into without a two-week handover. Three months became five years of iterative production work: impact reporting pipelines, postal campaign systems, and eventually the API integrations Benevity needed to absorb us. The platform ran 50+ enterprise clients across Switzerland and France without a major architectural rethink.

If I'm honest, I underinvested in observability early. We added proper APM too late, and diagnosing slow queries in production was harder than it needed to be. I'd wire that infrastructure in month two next time, not month eighteen.

---

## 2. Strangler Fig Migration Under Delivery Pressure

**Best for:** "Tell me about a technical trade-off you navigated" / "How do you handle technical debt vs. delivery pressure?"

Around 2019 we hit the point at Alaya where the monolith was visibly slowing us down. Certain endpoints were degrading under load, and we had two competing proposals internally: a full microservices rewrite or a modular monolith. Investors, reasonably, weren't interested in funding a rewrite, and we had feature commitments already in the pipeline.

I ran a two-week technical spike comparing both approaches, with prototype load tests against the actual bottleneck endpoints. What I found was that the problem wasn't the architecture as a whole. It was three specific services handling our highest-traffic operations that were poorly isolated. I proposed a strangler fig approach: extract those three modules first, measure the impact, define clear criteria for when to extract anything else. No big bang.

We shipped the first extracted module in six weeks. Performance improved around 40% on the busiest endpoints, and the remaining monolith went through the acquisition two years later without a crisis.

The hardest part wasn't the technical work. It was convincing people that not rewriting everything was the right call. I learned that data wins that argument faster than analogies: concrete load test numbers on your specific system, not references to how Netflix solved a different problem.

---

## 3. Post-Acquisition Integration into a 10x Larger Codebase

**Best for:** "Tell me about navigating a large, unfamiliar codebase" / "How do you contribute early in a new environment?"

When Benevity acquired Alaya in 2021, I joined a team roughly ten times larger than what I'd been working in. The codebase was Java microservices, the processes were different, the culture was different. I had opinions about how things should be done that were immediately irrelevant to the problem at hand.

I spent the first month mapping the architecture before proposing anything. Not writing design docs, just reading: reading code, reading runbooks, having informal conversations with engineers I'd probably never meet in person. I wanted to understand what problems actually existed before importing solutions from Alaya.

That turned out to be the right call. When I started contributing to architecture decisions a few months in, I had enough context to speak to existing constraints rather than ideal-world preferences. Over the following years I drove three major cross-team architecture decisions and became the informal liaison between the Europe-facing product surface and the platform teams.

What I'd do differently is resist the impulse to demonstrate value quickly in the first weeks. The engineers who respected me most were the ones who noticed I'd done the homework before opening my mouth.

---

## 4. Driving Developer Tooling Adoption Without a Mandate

**Best for:** "How do you influence without authority?" / "Tell me about improving developer experience"

At Benevity in 2023, I wanted to change how engineers were working, specifically to get AI-assisted code review and generation into the regular development workflow. The problem was that I had no direct reports. I was a Staff IC, not a manager.

I started with three engineers who were already curious. I built quick demos showing concrete time savings, ran informal lunch sessions with no slides and no mandate, and committed a set of reusable prompt templates to a shared repository. Within a month there was a small group using the tooling regularly. Within three months, roughly 70% of engineers on both teams had integrated it into their workflow.

What made it work wasn't evangelism. It was that early adopters became advocates, and those advocates were peers. When a senior engineer tells you something saved them two hours on a PR review cycle, you try it. When your manager tells you it should save two hours, you nod.

I'd apply the same pattern to any bottom-up infrastructure adoption: make it easy to try, show real results from peers, and let adoption pull rather than push.
