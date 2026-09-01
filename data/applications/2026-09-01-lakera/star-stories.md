# STAR Stories: Software Engineer, Agentic Team (Lakera, Zurich)

Picked for an IC engineering role on a team modeling agent tools, data, and permission exposure: production ownership from scratch, LLM-backed systems under real traffic, algorithmic trade-offs under pressure, and working productively without much oversight.

---

## 1. Building Alaya's platform from a blank page

In 2016 I co-founded Alaya with nothing built yet, no customers, no product, just a bet that companies would pay for an employee purpose platform. My job was to architect and build the whole thing, alone at first, while the business side was already signing early enterprise clients who expected something working. I picked a stack that could scale without over-engineering for scale we didn't have yet, shipped a first demo inside three months, then layered in multi-tenancy, an API layer, and impact reporting as real usage told us what mattered. Once we had traction I hired the first three engineers and set up the basics, CI/CD, code review, some architecture docs, so the codebase wouldn't rot as more hands touched it. The platform reached production with over 50 enterprise clients across Switzerland and France, and Benevity, a Canadian unicorn, acquired the company in 2021. Looking back, I'd have added real observability much earlier; we bolted on proper APM late, and multi-tenancy retrofitted after the fact cost more than designing for it from day one would have.

---

## 2. A two-week spike instead of a rewrite debate

At Alaya, our monolith started showing scaling cracks right as investors were pushing hard for new features, not a rewrite. The team was split between a full microservices rewrite and something more modest, and I needed a call that would hold up technically without burning the runway everyone wanted spent on product. Instead of arguing positions in a room, I ran a two-week spike with prototype load tests comparing both approaches directly, then brought the CTO and investors real numbers instead of opinions. The data pointed to a strangler fig migration: pull out the two highest-traffic modules first, leave the rest monolithic, and set clear criteria for when to extract the next piece. We shipped the first extracted module in six weeks with close to a 40% performance gain on the busiest endpoints, and the remaining monolith stayed stable straight through the acquisition with no big-bang rewrite ever needed. The hard part wasn't the engineering, it was convincing people that not rewriting everything was the disciplined choice; next time I'd start the benchmarking even earlier so the debate doesn't eat into build time.

---

## 3. Shipping LLM features into a platform that predates them

One of my main threads at Benevity has been wiring LLM-backed features and embeddings-based search into a platform built years before any of that existed. The real problem wasn't connecting an API to a model, it was figuring out where a probabilistic system actually helped versus where it just added latency and cost for a party trick, and then planning for what happens when the model gets an input nobody anticipated. I leaned toward narrow first versions with heavy instrumentation instead of ambitious ones, since you learn more from watching real inputs fail than from a design doc that assumes clean behavior. That habit is part of why other engineers started pulling me in early when a new LLM idea needed a reality check on scope and risk. What stuck with me is that the interesting engineering in probabilistic systems isn't the happy path, it's building enough visibility to catch the long tail before your users do, which is close to what modeling an agent's exposure is really about.

---

## 4. Working independently on ambiguous problems

After the Benevity acquisition, I landed on a team ten times the size of Alaya with a different codebase, Java and microservices instead of what I'd built, and no one handing me a spec. I spent the first month mapping the existing architecture on my own before proposing anything, since showing up with opinions about a system I didn't understand yet would have cost me credibility I'd need later. From there I built relationships with the platform and infra teams before pushing technical changes on their turf, and picked up a second thread on my own initiative, driving adoption of AI-assisted engineering workflows across two teams that didn't report to me. Both efforts required deciding what to do next without much direction, since nobody at Benevity had a playbook for either the Alaya integration or an AI tooling rollout. Core Alaya features made it into Benevity's platform, and within three months about 70% of engineers on both teams were using the AI-assisted workflows I'd introduced. Early on I moved faster than the new org was ready for, trying to fix things that weren't actually broken; slowing down and mapping context first is what made the rest of it stick.
