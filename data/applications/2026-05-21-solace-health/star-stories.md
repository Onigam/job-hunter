# STAR Stories — Solace Health / Staff Software Engineer

---

## 1. Building Alaya from Zero to Acquisition

**Best for:** "Tell me about building something from scratch at a startup" / "How do you handle ambiguity and speed?"

In 2016, I co-founded Alaya, an employee purpose and impact platform. We had no product, no customers, and I was the only engineer. The first real constraint was time: we were signing enterprise clients before the core features were stable, so every architectural decision I made carried immediate commercial weight.

I chose a pragmatic stack, Node.js, TypeScript, PostgreSQL, and kept the initial data model simple enough to ship in weeks rather than months. Multi-tenant architecture, the API layer, impact reporting, and a postal campaign module came in successive sprints. Within three months we had a production demo. Within a year we had paying enterprise clients.

As the platform grew, I hired the first three engineers and put in place the things that matter at that stage: CI/CD, a code review culture, architecture documents that people actually consulted. By 2021, we had 50+ enterprise clients across Switzerland and France. Benevity, a Canadian company valued at over $1B, acquired us that year. The acquisition was a direct validation of the technical decisions made from day one, because the platform stayed stable and was extensible enough to integrate into a system ten times larger.

The thing I'd do differently: I retrofitted multi-tenancy at year two, and it cost months. I should have designed it as a platform primitive from day one, before writing any feature code.

---

## 2. Making a Hard Architecture Decision Under Pressure

**Best for:** "Tell me about a technical trade-off you navigated" / "How do you handle technical debt without stopping feature delivery?"

At Alaya, around year three, we had a monolith that was starting to crack under load. Two of the busiest modules were causing latency spikes that affected the whole system. The engineering team was split between a full microservices rewrite and staying with a modular monolith. Investors were pushing for feature delivery, not rewrites. My job was to make a call that was both technically defensible and commercially viable.

I ran a two-week spike comparing both approaches with prototype load tests, then presented concrete metrics to the CTO and investors rather than opinions. The case I made was for a strangler fig approach: extract the two highest-traffic modules first, measure the impact, and define clear criteria for when to extract more. No big-bang rewrite.

The first extracted module shipped in six weeks. Latency on the two busiest endpoints dropped around 40%. The remaining monolith stayed stable through the acquisition, which was two more years away. We kept shipping features the whole time. What made it work was having data at the right moment in the conversation. I'd do more early benchmarking next time to cut the debate shorter, rather than letting it run as long as it did before the case was airtight.

---

## 3. Leading Without Formal Authority

**Best for:** "How do you influence without direct reports?" / Staff engineer / technical lead roles

At Benevity, after the acquisition, I was a Senior Staff IC with no direct reports. Engineering leadership wanted to see broader adoption of AI-assisted development tools across two teams. I had to drive that without any mandate.

I started with three engineers who were already curious. I built demo workflows that showed concrete time savings on tasks they were doing every day: PR reviews, boilerplate generation, finding test coverage gaps. I ran informal lunch sessions, no pressure, just demos. I also created a shared repository of reusable prompt templates and committed it to the team repo so adoption had a low activation threshold.

Within three months, about 70% of engineers on both teams were using AI-assisted code review and generation. More importantly, the engineers who adopted on their own terms became internal advocates. They made the case to their peers better than I could have made it from above.

The lesson: behavioral change in engineering teams sticks when people choose it. A top-down directive would have created compliance, not conviction. Mandate-free was slower but stickier.

---

## 4. Post-Acquisition Integration

**Best for:** "Tell me about a time you navigated significant organizational change" / "Working in a large, cross-functional environment"

When Benevity acquired Alaya in 2021, I joined a company ten times larger than what I'd been working in. Different tech stack, Java and microservices instead of Node.js, different processes, different culture. I'd been the de facto CTO of a startup; suddenly I had no authority and a lot of opinions.

My first month I spent mapping the existing architecture before suggesting anything. I built relationships with platform and infra teams before pushing technical opinions into cross-team discussions. I positioned myself as a listener first, not as someone coming in to fix things.

Over the following year I contributed to three major cross-team architecture decisions, drove AI tooling adoption across two teams, and became the go-to technical liaison for the Europe-facing product surface. None of that came from formal authority; it came from building credibility over time.

The early mistake was moving too fast trying to improve things that weren't broken. Slowing down and listening first made me substantially more effective once I did start pushing on technical direction.

---

## 5. Shipping Under Real Commercial Pressure (Startup Velocity)

**Best for:** "Give me an example of shipping fast without sacrificing quality" / "How do you balance speed and technical quality?"

In the early days of Alaya, we were signing enterprise clients in Switzerland while the platform was still being built. I had to ship features that looked production-grade to clients while simultaneously building the infrastructure that would support them at scale.

The approach I developed was to separate the surface from the foundation. Client-facing features got shipped fast with clean APIs and predictable behavior. Underneath, I kept the data model simple and the service boundaries loose until I understood the real usage patterns. I resisted the temptation to over-engineer based on what clients said they'd need eventually.

This worked well: we hit our first enterprise demo with a stable product, and the architecture was flexible enough to extend as the actual requirements clarified. Where I made mistakes was in accepting technical debt I didn't document. A few of those shortcuts cost us more than they saved when we tried to extend them a year later. Since then I've kept a running decision log for every significant shortcut, noting what the actual risk is and when we'd need to pay it back.
