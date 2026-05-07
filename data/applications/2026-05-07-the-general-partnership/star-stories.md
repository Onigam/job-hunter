# STAR Stories — The General Partnership (Staff Software Engineer, Dev Experience / FOSS)

---

## 1. Building Developer Infrastructure from Zero (Alaya)

**Question type:** "Tell me about a time you built something developers relied on from scratch."

In 2016, I co-founded Alaya, a purpose and employee engagement platform. There was no codebase, no infrastructure, no team. My first task was to make technical choices that would hold up under production load and be maintainable by a team I hadn't hired yet.

I spent the first two weeks deciding what not to build. The stack I landed on was Node.js, React, and PostgreSQL, deliberately boring choices that would let future engineers get productive fast rather than ones that required evangelism. I built the API layer with composability in mind from the start, so that the same endpoints served our web clients, mobile clients, and eventually third-party integrations without a separate surface for each. I set up CI/CD and code review conventions before we had a second engineer, because retrofitting a code culture is much harder than starting with one.

The platform reached production with 50+ enterprise clients across Switzerland and France and was acquired by Benevity, a Canadian company with a $1B+ valuation, in 2021. The acquisition validated the core architecture choices: nothing had to be thrown away to scale.

Looking back, I would have invested in observability much earlier. We added proper APM too late, which meant a few painful production incidents that better instrumentation would have caught in staging. I'd design for observability from week one next time.

---

## 2. Driving Developer Experience Change Without Authority (Benevity)

**Question type:** "Tell me about a time you improved how a team worked" / "How do you lead without a title?"

After the Benevity acquisition in 2021, I joined a team roughly ten times the size of Alaya. I was a Senior Staff IC with no direct reports but noticed that engineering velocity across two teams was being quietly throttled by toil: repetitive code reviews, manual test setup, slow PR cycles.

My task was to change this without being anyone's manager, and without triggering the kind of "top-down mandate" resistance that kills tool adoption.

I started with three engineers who were already curious about AI-assisted development. Rather than running a formal rollout, I built small internal demos: here's what a prompt template looks like for this codebase, here's what a PR review cycle looks like when the bot handles the first pass. I committed the templates to a shared repo so anyone could inspect or improve them. For each engineer who adopted them, I wrote up a short note in our internal wiki documenting the specific time saved, because concrete stories spread faster than statistics.

Within three months, around 70% of engineers on both teams were using AI-assisted code review and generation as part of their regular workflow. I became the informal AI tooling lead across the org without ever asking for the title.

The lesson I took from this: the mandate-free approach was slower initially but produced advocates rather than compliers. Engineers who adopted it on their own terms went on to run their own demos for colleagues. I couldn't have manufactured that chain reaction top-down.

---

## 3. A Hard Architecture Decision Under Delivery Pressure (Alaya)

**Question type:** "Tell me about a technical trade-off you navigated" / "How do you handle technical debt vs. shipping?"

At Alaya, around 2019, the monolith was showing cracks. Two high-traffic modules were creating contention at the database layer, and the team had split into two camps: full microservices rewrite versus modular monolith with extracted services. Investors were expecting new features, not a rewrite, and the engineering team was already stretched.

My task was to make a call and get alignment on it quickly enough that we didn't spend months debating and shipping neither.

I ran a two-week technical spike comparing both approaches with actual load tests against the two busiest modules. Rather than presenting my opinion, I brought the benchmark data to the CTO and our main investor meeting with a clear framing: here's what a full rewrite costs in time and risk, here's what a targeted extraction costs, and here are the concrete criteria that would trigger further extractions. I proposed what's sometimes called the strangler fig pattern: extract the two highest-traffic modules, leave everything else monolithic until it proved worth extracting.

The first extracted module shipped in six weeks. Performance improved by roughly 40% on the busiest endpoints. The rest of the monolith stayed stable through the acquisition two years later, with no big-bang rewrite ever needed.

The hardest part wasn't the architecture, it was convincing people that "not rewriting everything" was a defensible technical choice. The data helped, but I'd do the benchmarking even earlier next time to cut the debate before people get entrenched.

---

## 4. Making Open-Source Tooling Work Inside a Closed Organization (Benevity)

**Question type:** "Tell me about open source in a professional context" / "How do you bring external tools into a team?"

At Benevity, developer experience was fragmented. Different teams had different linting configs, different CI templates, different conventions for writing tests. The friction wasn't dramatic, it just accumulated as quiet tax across every engineer's day.

I wanted to create a shared internal library of tooling primitives but knew from experience that "internal standards" projects fail when they feel like mandates. My approach was to build it like an open source project inside the org.

I set up a separate repo with contribution guidelines, versioning, and a CHANGELOG. I documented the design rationale for each primitive rather than just the API surface, because the "why" is what makes people trust a dependency. I ran office hours, not meetings. I treated external contributors (other teams) like I'd treat a community maintainer: responsive reviews, clear RFC process for breaking changes, and explicit credit in release notes.

Adoption grew organically. Within two quarters, three engineering teams were pulling from the shared library for their CI templates and linting configs. The structure also made it easy to eventually open-source some of the non-proprietary primitives.

What I learned: the mechanics of good open source projects, clear docs, responsive maintainership, explicit governance, apply inside a company just as well as they do in public. The barrier to adoption drops when engineers feel like contributors rather than consumers.

---

## 5. Navigating a Post-Acquisition Technical Integration (Benevity)

**Question type:** "Tell me about a time you worked with a much larger team" / "How do you adapt to a new technical environment?"

When Benevity acquired Alaya in 2021, I went from a six-person engineering team to an organization with hundreds of engineers, a Java-dominant codebase, and very different processes. My goal was to integrate Alaya's capabilities into Benevity's platform without losing the product velocity we'd built, and without antagonizing engineers who'd been there far longer than me.

I spent the first month mapping the existing architecture before proposing anything. I attended architecture reviews as a listener, read internal RFCs, and asked questions in public Slack channels rather than through back-channels, because I wanted my presence to be legible to the whole team rather than a mystery.

When I did start contributing technical opinions, I framed them as questions: "I noticed we handle X this way, and at Alaya we tried both approaches, here's what we learned, would that be useful context here?" That framing got better uptake than any form of "here's how we did it before."

I ended up contributing to three major cross-team architecture decisions in the first year, and the team asked me to lead the AI tooling adoption effort that became Story 2 above.

The thing I'd do differently: I moved too quickly in the first two months trying to fix things that weren't broken. Slowing down and listening longer made me more effective when I did eventually act, and I wish I'd applied that lesson three weeks earlier.
