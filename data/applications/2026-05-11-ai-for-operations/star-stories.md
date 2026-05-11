# STAR Stories — Technical Co-Founder / CTO at AI for Operations

---

## 1. Building a Platform from Zero (Co-Founder Founding Story)

*Best for: "Have you built something from scratch?" / "What would you do as our technical co-founder?" / "What are the first things you'd build?"*

In 2016 I co-founded Alaya, a purpose and engagement platform for enterprise employees. We had no product, no customers, and no existing codebase. My job was to make the technical bets that would either hold up or collapse under us when we started getting real traction.

The first call was the stack. I chose Node.js, React, and PostgreSQL, not because they were exciting but because the team we'd need to hire could work in them and the surface area for operational failure was manageable. I built the core features solo over the first three months, enough to demo to our first enterprise prospect. From there I iterated: multi-tenant architecture, a proper API layer, impact reporting pipelines, and postal campaign tooling that got operationally complex faster than I expected.

When we started growing the team, I hired three engineers and set up the CI/CD pipeline, code review standards, and architecture documentation from the start. Not because we needed it at five people, but because retrofitting culture later is much harder than planting it early.

By 2021, the platform was serving 50+ enterprise clients across Switzerland and France. Benevity, a Canadian unicorn with a $1B+ valuation, acquired us. I consider that the clearest validation of the technical decisions made in the first six months.

What I'd do differently: I'd design for multi-tenancy from day zero rather than retrofitting it at month eight. And I'd invest in observability infrastructure much earlier. We were flying blind on performance for longer than was comfortable.

---

## 2. Making a Hard Architecture Decision Under Pressure

*Best for: "Tell me about a technical trade-off you navigated" / "How do you handle competing technical and product timelines?"*

About two years into Alaya's growth, the platform was showing scaling cracks. The monolith we'd built for speed was starting to limit us, and the team had a serious internal debate: full microservices rewrite, or a modular monolith that could evolve incrementally. Investors were pushing for new features, not infrastructure work. The pressure to just "keep shipping" was real.

I ran a two-week technical spike, not a debate, but actual load tests against a prototype of both approaches. I came back to the CTO and investors with data rather than opinions, which changed the temperature of the conversation significantly. The recommendation was a "strangler fig" migration: extract the two highest-traffic modules first, keep the rest of the monolith stable, and define explicit criteria for when additional extraction made sense.

The first extracted module shipped in six weeks. Response time on the busiest endpoints improved by roughly 40%. The remaining monolith stayed stable all the way through the acquisition. We never needed the big-bang rewrite everyone had been quietly dreading.

The hardest part wasn't the engineering. It was convincing people that "not rewriting everything" was the right call. Data made that possible. The lesson I kept was that architectural decisions get cleaner when you replace the opinion-based conversation with something measurable as quickly as possible.

---

## 3. Driving AI Adoption Without a Mandate

*Best for: "How do you lead change?" / "Tell me about introducing a new practice to a team" / "How do you build buy-in?"*

After the Benevity acquisition, I found myself at Senior Staff level in an engineering org roughly ten times the size of what I'd been operating in. One of my goals was to drive adoption of AI-assisted development workflows, specifically GitHub Copilot and a set of prompt engineering patterns I'd been developing. I had no direct reports and no mandate.

I started with three engineers who were already curious. Instead of proposing a formal initiative, I built a small internal tool demo that showed a specific, measurable time saving: a particular PR review cycle that took roughly two hours normally was getting done in under thirty minutes with the right prompting approach. That specificity mattered. It wasn't "AI is the future," it was "here's twenty minutes you're getting back this afternoon."

Over the next couple of months I ran informal lunch demos, committed reusable prompt templates to a shared repo, and documented the wins in a format anyone could read. No mandate, no slide decks, no steering committee. Within three months, roughly 70% of the engineers on two teams had integrated AI tooling into their daily workflow, and several of them started advocating for it to colleagues I hadn't reached directly. That last part, the peer advocacy, was worth more than anything I could have done with a top-down push.

---

## 4. Navigating a Post-Acquisition Integration

*Best for: "Tell me about working under ambiguity" / "How do you navigate cultural change?" / "What happens when your startup gets acquired?"*

The Benevity acquisition in 2021 was a good outcome, but integrating into a company ten times the size of Alaya wasn't frictionless. The codebases were different, Java and microservices versus our Node.js stack, the processes were more formal, and the cultural expectations around decision-making were different in ways I didn't fully anticipate.

My instinct when I arrived was to start proposing changes to things I saw as inefficient. I had to deliberately slow that down. I spent the first month just mapping the existing architecture and building relationships with the platform and infrastructure teams before pushing any technical opinions. It felt slow at the time. It wasn't.

The relationships I built in that first month gave me enough context to understand which of my observations were actually problems versus things that looked wrong from the outside but had good reasons behind them. I ended up contributing to three major cross-team architecture decisions in the first year and becoming the informal liaison for the Europe-facing product surface, neither of which would have happened if I'd walked in fast.

The thing I underestimated was how much institutional context an acquired company loses in the transition. The people who knew why certain decisions were made don't always stay. I'd be more deliberate next time about capturing that knowledge in the first ninety days, before it walks out the door.

---
