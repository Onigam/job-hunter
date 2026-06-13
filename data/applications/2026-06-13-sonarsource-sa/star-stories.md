# STAR Stories — SonarSource Staff Full Stack Engineer (Java, React)

---

## 1. Leading AI Tooling Adoption Without Authority
**For:** "Tell me about influencing without authority" / "How do you mentor engineers?" / Staff+ IC roles

When I joined Benevity after the acquisition, I was a Senior Staff IC with no direct reports but a clear need to change how two engineering teams wrote and reviewed code. GitHub Copilot and similar tools were available, but adoption was near zero because nobody had made a compelling case for them in the context of our actual workflows.

My task was to shift that without being anyone's manager. I started by running demos with three engineers who were already curious, not by sending a team-wide announcement. I built a small internal library of prompt templates tailored to our review patterns and committed it to a shared repo so anyone could try it without risking anything. Then I ran informal sessions, roughly monthly, where I'd show a real example: here's a PR that took me two hours, here's the same workflow with AI-assisted review, here's how long it actually took. No slides, just terminal sessions.

Within three months, roughly 70% of engineers on both teams had integrated AI into their review or generation cycles. More importantly, they were sharing their own templates and variations. I hadn't mandated anything; the tooling had just become useful enough that people adopted it on their own terms and then advocated for it internally.

What I'd do differently: I waited too long to write up the results in a format that could be shared with other teams. The informal approach spreads slowly across org boundaries. A short write-up earlier would have accelerated the second wave.

---

## 2. Building Alaya from Zero to Acquisition
**For:** "Tell me about building something from scratch" / Founding engineer questions / "How do you handle ambiguity?"

In 2016, I co-founded Alaya, a purpose-and-impact platform for employee engagement. We had no product, no customers, and no team. The first three months were just me figuring out what to build and in what order while the business side was signing its first enterprise pilots.

My job was to make a set of irreversible decisions well: the stack, the data model, the deployment architecture. I chose Node.js, React, and PostgreSQL, not because they were fashionable but because I knew them well enough to move fast without accumulating hidden debt. The first working demo was ready in about ten weeks. From there, I expanded iteratively: multi-tenant architecture, impact reporting, postal campaign features, and eventually an API layer for third-party integrations.

At around eighteen months, I hired the first three engineers and had to transition from sole contributor to a team lead without losing momentum. I set up CI/CD pipelines, code review processes, and architecture decision records early, partly because I'd seen what happens when you don't.

By 2021, the platform was running for 50+ enterprise clients across Switzerland and France. Benevity acquired us that year. The acquisition itself validated most of the technical decisions: a clean architecture they could integrate rather than rebuild.

What I'd do differently: I added proper APM observability too late. We were flying blind on performance for longer than we should have been. I'd treat instrumentation as a first-week requirement next time, not a quarter-three priority.

---

## 3. Architecture Decision Under Delivery Pressure
**For:** "Tell me about a technical trade-off" / "How do you handle technical debt?" / "Tell me about a time you pushed back"

At Alaya around 2019, the codebase was showing scaling cracks in a few high-traffic areas. The team was split between a full microservices rewrite and a modular monolith approach. Investors were watching the sprint velocity closely and weren't interested in hearing about rewrites.

I had to make a defensible recommendation that the CTO, the engineering team, and indirectly the investors could all accept, while actually being right about the technical answer.

I ran a two-week spike: prototype load tests on the two highest-traffic modules extracted as services versus kept in the monolith. The results were clear enough to bring into the room as data rather than opinion. I proposed what I called a strangler fig migration: extract the two hottest modules first, keep everything else stable, define explicit criteria for when to extract the next one. No big-bang rewrite, no indefinite deferral.

We shipped the first extracted module six weeks later. Latency on those endpoints improved by around 40%. The remaining monolith stayed stable through the acquisition two years later, which meant we never had to fight a rewrite battle during the most critical growth phase.

The hardest part wasn't the technical work; it was convincing people that "not rewriting everything" was the right call. The spike data helped more than any argument I could have made.

What I'd do differently: I'd run the benchmarks earlier in the discussion, before people had already picked a side. Opinions harden fast; data before the debate is more effective than data after it.

---

## 4. Navigating Post-Acquisition Integration
**For:** "Tell me about working in a large org" / "How do you handle change?" / Cross-functional collaboration questions

When Benevity acquired Alaya in 2021, I went from a team of eight to an engineering org of roughly eighty. Different stack (Java plus a microservices mesh I hadn't touched), different deployment culture, different definitions of what "done" meant.

My task was to integrate Alaya's capabilities into Benevity's platform while continuing to ship features, without losing the velocity we'd built. The risk was real: acquisitions frequently stall because the acquired team either moves too fast and breaks things, or gets absorbed slowly and loses their edge.

I spent the first month explicitly not proposing anything. I mapped the existing architecture, read the decision records, and had conversations with the platform and infra teams before forming opinions. This was uncomfortable, but it was the right call: I came out of it with enough context to make useful contributions rather than well-intentioned suggestions that missed something important.

Over the following year, I contributed to three major cross-team architecture decisions and became the informal liaison for the Europe-facing product surface. I also introduced AI-assisted development practices, but that's a separate story.

The integration was genuinely successful: Alaya's features shipped into Benevity's platform on schedule, and the teams that had to collaborate on it ended up with strong working relationships.

What I'd do differently: I initially moved too fast in the first few weeks before catching myself. The instinct to fix things you can see is strong, especially when you come from a culture where speed was a virtue. Slowing down earlier would have saved some friction.
