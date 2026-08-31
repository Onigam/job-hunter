# STAR Stories, Fore ai, Software Engineer, Infrastructure & Scaling

Picked for infra, scaling, and platform-ownership questions likely to come up for this role.

---

## 1. The strangler-fig migration (technical trade-offs under pressure)

**Good for:** "Tell me about a hard infrastructure or scaling decision" / "How do you handle technical debt versus delivery pressure"

At Alaya, our monolith started showing real scaling cracks right as the business was signing its first wave of enterprise clients. The team was split between a full microservices rewrite and just patching the monolith further, and investors were pushing for new features, not a rewrite that would freeze the roadmap for months. I ran a two-week technical spike comparing both approaches with actual load tests instead of opinions, then took the results to the CTO and investors. What I proposed was a strangler-fig migration: pull out the two highest-traffic modules first, leave the rest of the monolith alone, and set clear criteria for when to extract the next piece. We shipped the first extracted module in six weeks, and the busiest endpoints got about 40% faster. The rest of the monolith stayed stable all the way through the acquisition, so we never needed the big-bang rewrite everyone was originally arguing for. Looking back, the hardest part wasn't the technical work, it was convincing people that not rewriting everything was the right call, and having load-test numbers instead of arguments made that conversation much shorter. I'd push for that early benchmarking sooner next time, before the debate even starts.

---

## 2. Post-acquisition infra integration at Benevity (working across a much larger, unfamiliar system)

**Good for:** "Tell me about joining a system you didn't build" / "Working with large distributed teams" / "Cross-team infra ownership"

When Benevity acquired Alaya in 2021, I went from a small team that owned every part of the stack to a Java-based microservices org roughly ten times the size, with a codebase and set of conventions I had no history with. Rather than pushing my own architectural opinions in the first weeks, I spent the first month just mapping how the existing system actually worked, who owned what, and where the real bottlenecks were. Once I had that picture, I built relationships with the platform and infra teams before proposing any changes, which mattered more than I expected going in. That groundwork let me become the architecture liaison for the Europe-facing product surface and contribute to three cross-team architecture decisions that touched services well outside anything I'd originally built. I did move too fast early on, trying to fix things in the new org that weren't actually broken, just unfamiliar. Slowing down and listening first is the thing I'd tell my earlier self to do from day one.

---

## 3. Driving AI-assisted engineering adoption without formal authority (relevant to fore ai's agentic AI platform)

**Good for:** "How do you influence engineers who don't report to you" / "Tell me about driving adoption of a new tool or workflow"

At Benevity, I was a Senior Staff IC with no direct reports, but I wanted two teams that didn't report to me to start using AI-assisted development in their daily workflow. Instead of pushing a mandate, I started with three engineers who were already curious, built small internal demos that showed concrete time saved on real PRs, and ran informal lunch-and-learn sessions with no requirement to attend. I put together reusable prompt templates and committed them to a shared repo so people could just take what worked without asking me first. Within three months, about 70% of engineers across both teams were using AI-assisted review and generation as part of their normal routine, and I'd become the informal go-to person for AI tooling questions across the org. It was slower than a top-down rollout would have been, but it stuck, because people adopted it on their own terms and then argued for it themselves in team meetings, which isn't something I could have manufactured with a directive.

---

## 4. Building Alaya's platform from zero (ownership and ambiguity)

**Good for:** "Tell me about building something from scratch" / "How do you handle ambiguity" / founding-engineer-adjacent infra ownership

In 2016 I cofounded Alaya with a blank page: no product, no customers, no infrastructure. My job was to architect and build the entire platform, alone at first and then with a growing team, while the business was closing its first enterprise deals in parallel. I picked a pragmatic stack, Node.js, React, PostgreSQL, that could scale without over-engineering something nobody had validated yet, and got the core features to a working demo within three months. From there it was iterative: multi-tenant architecture, an API layer, impact reporting, and eventually onboarding and mentoring the first three engineers while setting up CI/CD and a real code review culture. The platform ended up serving 50-plus enterprise clients across Switzerland and France, and Benevity's acquisition in 2021 was a pretty direct validation of those early infrastructure calls. If I did it again, I'd invest in observability much earlier, we only added proper APM once things were already painful, and I'd design for multi-tenancy from day zero instead of retrofitting it later, since that retrofit cost more than it should have.

---

## 5. Scaling a platform through hypergrowth (performance bottlenecks at increasing load)

**Good for:** "Tell me about a time you solved a performance or scaling bottleneck" / directly maps to fore ai's "optimize system performance, address bottlenecks" requirement

As Alaya's enterprise client base grew, the reporting and impact-tracking features, originally built for a handful of tenants, started buckling under real concurrent load, and the postal campaign feature in particular was generating slow queries that backed up unrelated requests. I profiled the actual query patterns instead of guessing, found that a handful of unindexed joins were responsible for most of the pain, and paired schema and index changes with moving the heaviest reporting jobs off the request path entirely. That took the worst-case response times down substantially and stopped one tenant's reporting load from degrading service for everyone else on shared infrastructure, which was the real risk as we kept adding enterprise clients. It also fed directly into the multi-tenant architecture decisions I made later, since isolating heavy workloads by tenant became a standing design principle rather than a one-off fix. The lesson that stuck was to profile before optimizing. My first instinct was to add caching everywhere, and the actual fix turned out to be much narrower once I looked at where the time was really going.
