# STAR Stories — Aircall Staff AI Software Engineer

---

## 1. Building Alaya from Zero to Acquisition

**Best for:** "Tell me about a time you built something from scratch" / "Walk me through a founding-engineer experience" / "How do you handle ambiguity?"

In 2016, my co-founder and I decided to build Alaya, a purpose and impact platform for employee engagement. We had a blank page, no customers, and no funding. My job was to architect and build the entire platform, alone at first, while the business was actively signing its first enterprise clients in Switzerland and France.

I made a deliberate call to stay pragmatic with the stack: Node.js, React, PostgreSQL. Not because it was fashionable but because it was the right call for a two-person company that needed to ship. The first three months were heads-down building the core features to reach a first demo. From there I expanded iteratively, adding multi-tenant architecture, a proper API layer, impact reporting modules, and postal campaign tooling as each became the real bottleneck. When we started hiring, I onboarded our first three engineers, set up CI/CD, established a code review culture, and wrote architecture docs that were meant to outlast me.

By 2021 the platform was running in production with 50+ enterprise clients. Benevity, a Canadian company valued at over $1B, acquired us. That acquisition was the most concrete validation I've had that the technical decisions from day one held up.

If I were doing it again, I'd invest in observability much earlier; we added proper APM too late, and the gaps cost us debugging time we didn't have. I'd also design for multi-tenancy from day zero rather than retrofitting it.

---

## 2. Making a Hard Architecture Decision Under Pressure

**Best for:** "Tell me about a trade-off you navigated" / "How do you handle technical debt?" / "How do you make technical decisions when you're under delivery pressure?"

At Alaya, around year three, the monolith was starting to crack under load. The engineering team was split between two camps: a full microservices rewrite versus a modular monolith approach. Investors wanted new features shipped, not a rewrite. I needed to make a call that was both technically defensible and something the business could actually fund.

Rather than argue from intuition, I ran a two-week technical spike. We built prototypes for both approaches and ran load tests against realistic usage patterns. When I presented the results to the CTO and investors, I brought concrete numbers, not opinions. The data pointed clearly toward a middle path: a "strangler fig" approach where we'd extract the two highest-traffic modules into separate services first and keep the rest of the monolith stable.

We shipped the first extracted module in six weeks. Performance on those endpoints improved by roughly 40%, and the remaining monolith stayed stable all the way through the Benevity acquisition. No big-bang rewrite was ever needed.

The hardest part wasn't the architecture; it was convincing people that choosing not to rewrite everything was itself a defensible decision. Data helped close that argument faster than any amount of engineering rhetoric would have. Next time I'd do even more early benchmarking to cut the debate shorter.

---

## 3. Leading Without Formal Authority — Driving AI Adoption Across Two Teams

**Best for:** "Tell me about leading without a title" / "How do you drive change across an organization?" / Particularly relevant for Staff AI role where cross-team AI influence is expected

At Benevity, I was a Senior Staff IC with no direct reports but needed to change how engineers on two separate teams worked, specifically by getting them to integrate AI tooling into their daily development workflow. The challenge was that neither team reported to me, and a mandate from above would have killed adoption before it started.

I started small, finding three engineers who were already curious about AI tooling and working with them first. We built concrete demos together, focused on real time savings rather than theoretical productivity gains. One example I kept coming back to: we cut a full PR review cycle by about two hours using a combination of AI-assisted code review and prompt-driven test generation. I documented that story and shared it informally in a lunch-and-learn session, no mandate, just a demo and numbers.

From there I created a shared repo of reusable prompt templates and made it easy for any engineer to adopt without needing to think about it from scratch. Adoption spread through peer advocacy rather than top-down instruction.

Within three months, roughly 70% of engineers on both teams were actively using AI-assisted review and generation in their daily work. I became the informal AI tooling lead across the org.

The mandate-free approach was slower than forcing it, but the adoption was stickier. Engineers who chose it on their own terms became advocates internally, which I couldn't have manufactured through a top-down decree.

---

## 4. Navigating Post-Acquisition Integration at Benevity

**Best for:** "Tell me about navigating a major change" / "How do you work in a larger organization?" / "Cross-functional collaboration"

When Benevity acquired Alaya in 2021, I went from a five-person engineering team where I knew every line of code, to an organization ten times larger with a different codebase (Java, microservices), different processes, and a different culture. My job was to integrate Alaya's capabilities into Benevity's platform while continuing to deliver new features, without losing the product velocity we'd built.

The first thing I did was spend a full month mapping the existing architecture before proposing a single change. It sounds slow, but it paid off: I avoided several bad decisions I would have made in week two if I'd moved faster. I also built relationships with the platform and infra teams before pushing any technical opinions, which made my eventual proposals land completely differently than they would have as cold suggestions from the "acquisition guy."

Over the following year I drove the successful migration of core Alaya features into Benevity's platform, contributed to three major cross-team architecture decisions, and became the go-to person for AI tooling adoption across two engineering teams.

The lesson I carry from that experience is that I initially moved too fast trying to fix things that weren't broken in the new organization. Slowing down to listen first, especially in the first 30 days, made me significantly more effective in the six months that followed.

---

## 5. Scaling a Platform Through a Hard Delivery Deadline

**Best for:** "Tell me about delivering under pressure" / "How do you manage competing priorities?" / Aircall is likely to ask about reliability + delivery trade-offs

During the Alaya growth phase, we had a major Swiss enterprise client that set a hard go-live deadline tied to their own internal annual event. Missing it would have cost us the contract and likely the reference. The feature they needed touched our most fragile module, a postal campaign system we'd built quickly and never fully stabilized.

I had two choices: refactor the module properly (four weeks minimum) or build a controlled workaround that isolated the risk for their use case while flagging the debt clearly. I chose the workaround, documented the risk in the architecture log, and set up a proper refactor as a Q1 priority with explicit tracking.

We hit the deadline. The go-live was clean. The client became one of our anchor references for Swiss enterprise sales. The refactor shipped eight weeks later without incident.

What I learned, and what I'd push back on in hindsight, is that the documentation and the explicit Q1 commitment were what made this decision defensible rather than just lazy. The difference between "shipping fast" and "knowingly accumulating debt" is whether you have a plan and a timeline. Without those, the workaround would have been irresponsible.
