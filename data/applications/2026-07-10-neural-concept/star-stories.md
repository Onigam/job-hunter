# STAR Stories: VP of Engineering, Neural Concept

Selected for: scaling an org past 50 engineers, managing managers, balancing delivery with technical debt, cross-functional work with Product and GTM, and driving adoption without a formal mandate.

---

## Story 1: Building Alaya from zero, and what I'd do differently at scale

In 2016 I co-founded Alaya with nothing on the table, no product, no customers, just a purpose I believed in for employee engagement software. My job was to architect and build the whole platform myself at first, then hire and grow a team, while the business signed its first enterprise clients in parallel. I picked a pragmatic stack, Node.js, React, PostgreSQL, that wouldn't force a rewrite later, got a working demo in three months, then expanded into multi-tenant architecture and an API layer as clients came in. Hiring the first three engineers meant building code review culture and CI/CD from scratch, because none of it existed yet. We ended up at 50-plus enterprise clients across Switzerland and France, and Benevity acquired the company in 2021, which told me the early calls held up under real growth. Looking back, I would have added observability much sooner. We were flying blind on performance for longer than was comfortable, and retrofitting multi-tenancy cost more than designing for it up front would have. That's a lesson I carry directly into how I'd think about process at 50-plus engineers: instrument before you need to, not after.

---

## Story 2: A hard architecture call under investor pressure

At Alaya, our monolith was starting to crack under load right as investors wanted new features, not a rewrite. The team was split between a full microservices rewrite and staying the course. My task was landing a decision that held up technically without stalling delivery. I ran a two-week spike with load tests on both approaches, then walked the CTO and investors through the numbers rather than opinions. What we shipped instead was a strangler fig migration, pulling out the two highest-traffic modules first and leaving the rest of the monolith alone, with clear criteria for when to extract the next piece. The first module went out in six weeks and cut latency 40% on our busiest endpoints. No big-bang rewrite ever happened, and the monolith stayed stable straight through the acquisition. The hard part wasn't the technical work, it was convincing a room that "don't rewrite everything" was itself a strong decision. More upfront benchmarking would have shortened that argument considerably, and it's why I lean on data early now instead of waiting for consensus to form on its own.

---

## Story 3: Driving AI-assisted engineering adoption with no authority

After Benevity acquired Alaya, I joined as a Senior Staff IC on two teams that didn't report to me, and I wanted them using AI-assisted development practices. There was no mandate to lean on. I started with three curious engineers, built demos that showed real time savings instead of pitching the idea abstractly, and ran informal lunch sessions with no obligation to attend. Prompt templates went into a shared repo as they proved useful, and I documented concrete wins, like a two-hour cut on a single PR review cycle, rather than talking in generalities. Within three months, 70% of engineers across both teams were using AI-assisted review and generation, and I'd become the person people asked about AI tooling org-wide. It was slower than a top-down rollout would have been, but it stuck because people adopted it on their own terms and then defended it to their peers themselves. That's the model I'd bring to rolling out lightweight process at Neural Concept: earn it team by team rather than declare it.

---

## Story 4: Integrating into a much larger org after acquisition

Joining Benevity meant landing on a team ten times the size of Alaya, a different codebase in Java and microservices, and a culture I didn't know yet. My task was folding Alaya's capabilities into the new platform while keeping the product velocity we'd built without it stalling on day one. I spent the first month just mapping the existing architecture before proposing a single change, and built relationships with the platform and infra teams before pushing any technical opinion. That groundwork let me become a cross-team architecture liaison for the Europe-facing surface and contribute to three major architecture decisions afterward. The migration succeeded, and the velocity held. Early on I moved too fast trying to fix things that weren't actually broken in the new org, just unfamiliar, and slowing down to listen first is what turned that around. Managing managers and tech leads at a bigger scale means that same instinct matters even more: understand how a team already works before deciding what needs to change.

---

## Story 5: Balancing technical debt against roadmap pressure

The strangler fig decision at Alaya doubles as my answer whenever technical debt versus roadmap comes up, so here's the framing I'd use in that conversation. The situation was a monolith showing real scaling limits while investors pushed hard for features, and the task was proving a middle path was viable rather than picking one extreme. I treated it as a product decision, not just an engineering one: two weeks of prototyping, real numbers on load and latency, then a phased extraction plan with explicit criteria for the next module instead of an open-ended promise to "eventually" fix things. The first slice landed in six weeks with a 40% latency win on our hottest paths, which bought enough trust to keep the rest of the migration on a sane timeline instead of a panic rewrite. What I'd change next time is starting the benchmarking earlier, since the debate over which path to take cost more time than the actual analysis did. That's the habit I'd want to build into how Neural Concept handles debt as the team scales past its current size: data first, then the room aligns faster than you'd expect.
