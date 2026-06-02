# STAR Stories — n8n Sr AI Engineer

---

## 1. Driving AI tooling adoption at Benevity (no mandate, 70% uptake in 3 months)

*Best for: "Tell me about shipping AI-powered features" / "How do you influence without authority?" / "How do you drive adoption?"*

At Benevity I was a Senior Staff IC inside a 100+ person engineering org. In late 2022 I became convinced that AI-assisted development could meaningfully change how the team worked, specifically around code review and generation. The problem: I had no mandate to change anything, and most engineers were either skeptical or just busy.

I started small. Three engineers who seemed curious, a couple of informal 30-minute sessions, concrete examples rather than abstractions, and a set of reusable prompt templates committed to a shared repo. I tracked one metric: time saved per PR review cycle. Within a few weeks I had a story to tell. One team had cut their review turnaround by roughly two hours per sprint, which was enough to get a "lunch and learn" slot.

Over the next three months, about 70% of engineers across two teams had adopted at least one AI-assisted practice in their daily workflow. I became the informal AI tooling lead for the org without ever holding the title. Looking back, the mandate-free approach was slower but stickier. The engineers who picked it up voluntarily became the ones who advocated for it internally, and that kind of organic buy-in is hard to manufacture with a top-down decree.

**Reflection:** I'd build the evaluation framework first next time. We had adoption numbers but no structured way to measure quality impact. That gap made it harder to make the case to skeptics who wanted harder data.

---

## 2. Hard architecture decision under pressure (strangler fig, 40% perf improvement)

*Best for: "Tell me about a technical trade-off you navigated" / "How do you handle technical debt?" / "Describe a decision you had to defend"*

At Alaya around 2019 we were hitting real scaling pain in the monolith. The team was split: some wanted a full microservices rewrite, others wanted to stay monolithic, and investors were pushing for new features rather than infrastructure work. I had to make a call I could defend technically and that wouldn't derail delivery.

I ran a two-week technical spike, prototyping both approaches with basic load tests and documenting the trade-offs in a format both the CTO and non-technical stakeholders could actually read. The data pointed toward a strangler fig approach: extract the two highest-traffic modules first and leave the rest alone. I presented it with clear criteria for when we'd extract additional modules, so it wasn't an open-ended "we'll figure it out."

We shipped the first extracted module in six weeks. The busiest endpoints improved by roughly 40% on response time. The remaining monolith held up cleanly through the Benevity acquisition two years later, which was a real stress test. The harder lesson was how much of the original debate was driven by preference rather than data, and I'd push for earlier benchmarking next time to shorten that cycle significantly.

**Reflection:** The technical decision was right, but I underestimated how much the "not rewriting everything" message needed to be sold as a win, not a compromise. Framing matters as much as the data.

---

## 3. Building Alaya from zero to acquisition

*Best for: "Tell me about building something from scratch" / "Founding engineer" / "How do you handle ambiguity?"*

When we co-founded Alaya in 2016 I was effectively the solo engineer for the first several months. We had no product, no customers, and a blank page. The architectural challenge was real: build something credible enough for enterprise pilots without over-engineering to the point of never shipping.

I chose Node.js, React, and PostgreSQL, and focused on getting to a first demo in three months. Once we had a product in front of clients I iteratively added what actually mattered: multi-tenant architecture, an API layer for third-party integrations, impact reporting, postal campaigns. As the team grew, I hired the first three engineers and put the foundations in place, CI/CD, code review culture, architecture documentation.

By 2021 we had 50+ enterprise clients across Switzerland and France and Benevity acquired us. The technical decisions survived that kind of scrutiny, which was validating. What I'd do differently: proper observability from day one. We added APM late and it cost us real debugging time. I also underestimated how painful it is to retrofit multi-tenancy after the fact, and I'd design for it from the start next time.

**Reflection:** The founding instinct to ship fast is right. The mistake is treating observability and multi-tenancy as "later" problems. They're day-one problems that just don't feel urgent yet.

---

## 4. Post-acquisition integration at Benevity (navigating 10x org scale)

*Best for: "Tell me about navigating change" / "Working in large orgs" / "Cross-functional collaboration"*

After the Benevity acquisition closed in 2021, I joined as Senior Staff Engineer on a team that was roughly 10x the size of Alaya. Different culture, a Java microservices codebase I didn't know, and different processes across the board. My instinct was to move fast and start fixing things.

I had to actively override that instinct. The first month I spent mapping the existing architecture before proposing anything. I built relationships with platform and infrastructure teams before pushing technical opinions. The context I gathered in that period made everything I did afterward significantly more effective.

Once I had a clear picture, I became the cross-team architecture liaison for the Europe-facing product surface and drove the AI tooling adoption work described above. I contributed to three major cross-team architecture decisions over the following year.

The lesson was that context-gathering isn't delay, it's leverage (in the non-buzzword sense: it multiplies the value of every subsequent action). I initially saw it as slowing down. Looking back it was the opposite.

**Reflection:** Moving from a 10-person founding team to a 100+ person org requires a different operating mode. The skills that made me effective at Alaya (bias for action, ownership) needed to be adjusted, not abandoned.

---

## 5. Building LLM evaluation and prompt pipelines for production

*Best for: "How have you shipped AI features responsibly?" / "How do you deal with LLM reliability?" / "What's your approach to prompt engineering?"*

At Benevity, part of driving AI tooling adoption meant building infrastructure that kept the AI assistance reliable. Prompt templates that worked well in demos had a tendency to regress quietly when the underlying models updated or when engineers used them in slightly different contexts.

I built a lightweight evaluation harness: a set of test cases with expected outputs, a scoring script that could run in CI, and a structured log format so we could compare model outputs across versions. Nothing production-grade at first, just enough to catch regressions before they hit the team. I also documented prompt design patterns in the shared repo with examples of what broke and why.

The impact was modest in absolute numbers, maybe saving a few hours of debugging per month per team, but the signal it sent was bigger. Engineers stopped treating AI outputs as black boxes and started engaging with prompt quality as a first-class concern. That shift in mindset was worth more than any individual time saving.

**Reflection:** Evaluation infrastructure for LLM features gets treated as optional until you've been burned by a silent regression. I'd make it non-optional from the first feature shipped, even if it's just five golden test cases.
