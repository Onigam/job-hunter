# STAR Stories — Backend Engineer @ Langfuse

Prepared for behavioral / technical-culture interviews. Picked for relevance to a small, founder-close backend team scaling an ingestion pipeline under real load.

---

## 1. Building Alaya's platform from zero

**Likely prompt:** "Tell me about building something from scratch" / "How do you handle ambiguity on a small team?"

In 2016 I co-founded Alaya with no product, no customers, and a blank page. My job was to architect and build the whole platform, alone at first and then with a small team, while the business was closing its first enterprise deals in parallel. I picked a stack I could move fast in without painting myself into a corner, Node.js, React, Postgres, and got a working demo out inside three months. From there it was constant iteration: multi-tenant architecture, an API layer, impact reporting, campaign tooling, plus hiring and onboarding the first three engineers and setting up CI/CD and a real code review culture. By the time Benevity acquired us in 2021, we had 50-plus enterprise clients running on it in Switzerland and France. What I'd do differently is invest in observability much earlier; we bolted on proper APM late, and multi-tenancy was something I retrofitted instead of designing in from day one, which cost us more than it should have.

---

## 2. The strangler-fig migration instead of a rewrite

**Likely prompt:** "Tell me about a technical trade-off you had to defend" / directly relevant to Langfuse's ingestion-pipeline work

Alaya's monolith started showing scaling cracks right as investors were pushing hard for new features, not a rewrite. The team was split between a full microservices rewrite and staying the course, and I needed a decision I could actually defend with data rather than opinion. I ran a two-week spike prototyping both approaches under load, then took the numbers to the CTO and investors instead of a slide deck of arguments. We went with a strangler-fig approach: pull out only the two highest-traffic modules, leave the rest of the monolith alone, and set clear criteria for when to extract the next piece. The first extracted module shipped in six weeks, the busiest endpoints got roughly 40% faster, and the remaining monolith stayed stable all the way through the acquisition, no big-bang rewrite required. Looking back, the hard part wasn't the migration, it was the internal selling; more upfront benchmarking would have shortened that debate considerably.

---

## 3. Query and queue work at Benevity

**Likely prompt:** "Walk me through a performance problem you fixed" / core to the Postgres/Redis/async-worker scope of this role

After the Benevity acquisition I landed on a team ten times the size of Alaya, working against a Java microservices codebase I hadn't touched before. Rather than push opinions immediately, I spent the first month mapping how the existing system actually behaved, which queries were slow, where async work was piling up, before proposing anything. A recurring pattern was Postgres queries doing too much synchronous work on the request path; I moved several of those to Redis-backed queues with dedicated worker processes, which cut response times on the affected endpoints and gave the team a repeatable pattern for the next slow path they'd find. That work also made me the informal cross-team contact for architecture questions touching the Europe-facing product surface. My early instinct to "fix" things that weren't actually broken cost me some credibility at first; slowing down and mapping the system before touching it turned out to matter more than moving fast.

---

## 4. Driving adoption without formal authority

**Likely prompt:** "Tell me about influencing a team you didn't manage" / relevant given the small, founder-close team structure here

At Benevity I was a senior IC with no direct reports, but I wanted two teams that didn't report to me to actually change how they worked, specifically to bring AI-assisted development into their daily process. I started with three curious engineers instead of a mandate, built small internal demos that showed concrete time saved, and ran informal lunch sessions with no requirement to attend. I also committed a set of reusable prompt templates to a shared repo so the habit had somewhere to live once the novelty wore off. Within three months, about 70% of engineers across both teams were using AI-assisted review and generation regularly, and I'd become the person people asked about it org-wide. It was slower than a top-down rollout would have been, but it stuck because people adopted it on their own terms and then argued for it themselves, which a decree could never have produced.

---

## 5. Owning the customer-facing side of a technical decision

**Likely prompt:** "How do you handle production issues under pressure with a client watching?" / speaks to the small-team, founder-proximity culture at Langfuse

Through most of Alaya's life I wasn't just building the platform, I was also the technical contact for most of our enterprise accounts, which meant architecture reviews, onboarding calls, and production debugging with a client on the line more times than I can count. One recurring pattern was clients hitting edge cases in our multi-tenant reporting layer during month-end close, exactly when they had the least patience for a bug. I'd triage live, patch what could be patched safely, and then feed what I'd learned straight back into the roadmap instead of letting it sit in a ticket queue. That loop, production issue to root cause to product decision, without anything getting lost in translation between a support team and an engineering team, is something a five-person founding team does naturally and a hundred-person org has to work hard to preserve. It's part of why a small, founder-close team is the environment I do my best work in.
