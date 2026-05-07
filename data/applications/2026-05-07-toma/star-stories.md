# STAR Stories — Toma, Founding Engineer (AI Products)

---

## Story 1: Building a Platform from Zero to Acquisition

**Best for:** "Tell me about a time you built something from scratch" / "What does founding engineer ownership look like for you?"

In 2016, I co-founded Alaya with a blank page, no customers, and no product. As the sole engineer, my job was to build the entire platform while the business was simultaneously signing its first enterprise clients. I chose a pragmatic stack—Node.js, React, PostgreSQL—that could grow without over-engineering, got the core features done in about three months for the first demos, then expanded iteratively: multi-tenant architecture, API layer, impact reporting, postal campaign tooling. As the company grew I hired and onboarded the first three engineers, set up the CI/CD pipelines, and wrote the architecture documentation that let me hand things off without losing velocity. By 2021, the platform had 50+ enterprise clients across Switzerland and France, and Benevity, a Canadian unicorn with a $1B+ valuation, acquired us. What I'd do differently: invest in observability from day one rather than retrofitting APM later, and design the multi-tenant data model before writing the first line of code rather than discovering its edges two years in.

---

## Story 2: Navigating a Hard Architecture Call Under Delivery Pressure

**Best for:** "Tell me about a technical trade-off you had to make" / "How do you handle tech debt when there's product pressure?"

Around 2019 at Alaya, the monolith was starting to crack under load. The team was debating a full microservices rewrite versus a modular monolith; investors were pushing for new features, not infrastructure work. My task was to make a decision that balanced long-term scalability against short-term delivery. I ran a two-week technical spike comparing both approaches with prototype load tests, then presented the trade-offs to the CTO and investors with numbers rather than opinions. The proposal was a strangler-fig migration: extract the two highest-traffic modules first, keep the rest monolithic, with documented criteria for when to extract more. We shipped the first extracted module in six weeks. Performance on the busiest endpoints improved about 40%, and the remaining monolith held stable all the way through the acquisition without touching it again. The technically hard part was manageable; the actually hard part was convincing people that not rewriting everything was the right move. Data won that argument. Next time I'd run the load benchmarks earlier, to cut the debate short before it burned team energy.

---

## Story 3: Driving AI Tooling Adoption Without a Mandate

**Best for:** "How do you move fast on AI without creating chaos?" / "Tell me about introducing new practices to an engineering team"

At Benevity, I was a Senior Staff IC with no direct reports but a clear goal: get two engineering teams to actually use AI-assisted development tools in their daily workflow. A top-down mandate from management wasn't available and probably wouldn't have worked anyway. I started with three engineers who were already curious, built internal demos that showed concrete time savings on real tasks they recognized, and ran informal optional sessions, no pressure, just demos. Over a few months I created reusable prompt templates and committed them to a shared repo, then documented specific wins in writing: one example was cutting a PR review cycle by about two hours. Within three months, roughly 70% of engineers across both teams were using AI-assisted code review and generation as part of their normal day. What made it stick was that engineers who adopted it voluntarily became internal advocates, which I couldn't have engineered with a decree. The lesson I took was that adoption speed and adoption depth are different things, and mandate-free is slower but far stickier.

---

## Story 4: Integrating into a 10x Larger Organization Post-Acquisition

**Best for:** "How do you handle joining an existing codebase?" / "Tell me about adapting to a new engineering culture"

When Benevity acquired Alaya in 2021, I went from a 6-person team to an organization roughly 10 times larger, with a Java microservices codebase and processes I'd never seen. My task was to integrate Alaya's capabilities into Benevity's platform without losing the product velocity we'd built. The first thing I did was spend a month just mapping the existing architecture before proposing anything. I built relationships with the platform and infra teams before pushing technical opinions, which felt slow but turned out to be the fastest path to getting things done. I drove adoption of AI-augmented workflows across two engineering teams, became the cross-team architecture liaison for the Europe-facing product surface, and contributed to three major cross-team architecture decisions within the first year. I initially moved too fast trying to fix things that weren't broken, and had to consciously slow down. Listening first made me meaningfully more effective than I'd have been otherwise.
