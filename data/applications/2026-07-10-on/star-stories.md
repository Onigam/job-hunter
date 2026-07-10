# STAR Stories, Staff Engineer AI Security @ On

Prepared for behavioral rounds. Picked for relevance to AI security, governance, and cross-team risk work.

---

## 1. Designing multi-tenant isolation from a blank page (Alaya)

Best for: data leakage, access boundaries, "how do you design for a risk before anyone asks you to."

In 2016 I co-founded Alaya with nothing built yet, no customers, no product, just an idea for an employee engagement platform. I ended up architecting the whole thing myself in the first few months, and one decision I made early was to treat tenant isolation as a first-class concern rather than something to bolt on later. Every enterprise client's data had to stay walled off from every other client's, and since we were signing our first big accounts while I was still writing the core schema, there wasn't room to get that wrong twice. I picked a pragmatic stack, Node.js, React, Postgres, and built the multi-tenant boundaries into the data layer and the API layer at the same time, not as an afterthought once we had traction. We grew to over fifty enterprise clients across Switzerland and France on that foundation, and Benevity acquired the company in 2021, which told me the architecture held up under real scrutiny during due diligence. If I did it again I'd add proper observability much earlier; we didn't have real APM until isolation issues would have been much harder to spot after the fact, and that's stayed with me as a lesson about instrumenting the things you can't afford to be wrong about.

---

## 2. Choosing a defensible trade-off under investor pressure

Best for: risk assessment frameworks, threat modeling under time pressure, defending a technical call with data instead of opinion.

At Alaya our monolith started cracking under enterprise load right around the time investors wanted new features, not a rewrite. The easy path was to pick a side in the microservices-versus-modular-monolith debate and defend it with conviction. Instead I ran a two-week spike, built prototypes of both approaches, and load-tested them so the CTO and investors got numbers instead of my opinion. What came out of that was a strangler fig plan: extract the two highest-traffic modules first, leave the rest alone, and define concrete criteria for when to peel off more. We shipped the first extraction in six weeks and cut latency on our busiest endpoints by about 40%, and the remaining monolith stayed stable all the way through the acquisition. No big-bang rewrite, no unnecessary blast radius. The hard part wasn't the technical call, it was convincing a room that "don't rewrite everything" counted as a real decision. Looking back, I'd push for the benchmarking earlier in the process; the data ended the debate faster than any argument did, and I've since learned to lead with it rather than save it for the pushback.

---

## 3. Driving safe adoption of AI tooling across teams that didn't report to me

Best for: governance without authority, partnering across engineering/data/product, rolling out new practices at scale.

After the Benevity acquisition I was a senior IC with no direct reports, but I cared about getting AI-assisted development practices adopted responsibly across two teams that had their own managers and their own priorities. Mandating it wasn't an option and honestly wouldn't have worked anyway. I started with three engineers who were already curious, built small demos that showed real time saved on a task, and ran informal lunch sessions with no attendance requirement, just a demo and a Q&A. I also put together reusable prompt templates and checked them into a shared repo so the guardrails and review habits were baked into the tooling itself rather than living in someone's head. Within three months about 70% of engineers on both teams were using the workflow, and I'd become the person people asked when something in an AI-assisted change looked off. The slower, no-mandate approach turned out to be the sticky one; people who adopt something on their own terms end up defending it to their peers, which a top-down policy never quite manages.

---

## 4. Learning a new codebase before proposing changes (Benevity integration)

Best for: cross-functional collaboration, joining a much larger org, resisting the urge to "fix" things prematurely.

When Benevity acquired Alaya in 2021 I went from a five-person engineering team to one that was maybe ten times the size, with a different stack, Java and a full microservices setup instead of the Node monolith I knew inside out. My instinct in the first few weeks was to start proposing changes, and I caught myself doing exactly that a couple of times before I'd actually understood why things were built the way they were. So I slowed down, spent the first month mapping the existing architecture and talking to the platform and infra teams before pushing any technical opinions, and only then started contributing to bigger decisions. That approach ended up putting me on three major cross-team architecture calls and made me the person Europe-facing teams looped in on AI tooling questions. The reflection I keep coming back to is that moving fast to "fix" something you don't fully understand yet is usually just moving fast in the wrong direction, and the trust I built by listening first is what let me actually influence anything later.

