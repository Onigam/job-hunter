# STAR Stories: Senior Platform Architect @ Axelera AI

Selected for questions about system architecture trade-offs, scaling platforms, cross-team influence, and operating without formal authority. All drawn from real work at Alaya and Benevity.

---

## Story 1: The monolith vs. microservices call (technical trade-off under pressure)

**Best for:** "Tell me about an architecture decision you made under pressure" / "How do you think about scale-out?" / platform topology questions

Situation: at Alaya, our monolith was starting to crack under load right as we were signing bigger enterprise clients, and the team was split between a full microservices rewrite and just patching what we had. Investors wanted new features shipped, not a quarter spent on plumbing.

Task: I needed a decision that would actually hold up under growth, without stalling the roadmap the business was counting on. Action: I ran a two-week spike, built prototypes of both approaches, and load-tested them instead of arguing from opinion. When I presented to the CTO and investors, I brought numbers, not a slide deck of principles. What I proposed was a strangler fig migration: pull out the two highest-traffic modules first, leave the rest monolithic, and set explicit criteria for when the next module earns extraction. Result: the first extracted module shipped in six weeks and cut latency on our busiest endpoints by around 40%. The rest of the monolith stayed stable all the way through the acquisition, no big-bang rewrite required. Reflection: the hard part wasn't the technical work, it was convincing people that not rewriting everything was the disciplined choice. Having load-test data in hand shortened that argument by weeks, and it's why I'd run the benchmarks earlier next time rather than treating them as a tiebreaker.

---

## Story 2: Building Alaya's platform from a blank page

**Best for:** "Tell me about building something from zero" / founding or platform-owner roles / topology and system design questions

Situation: in 2016 I co-founded Alaya with no product and no customers yet, just a thesis about employee purpose platforms. Task: architect and build the whole thing, alone at first, while the business closed its first enterprise deals in parallel. Action: I picked a stack that could scale without over-engineering for scale we didn't have yet, got a working demo out in the first three months, then layered in multi-tenancy, an API layer and impact reporting as real usage told us what mattered. Once the team grew, I set up CI/CD and a review culture so architecture decisions didn't live only in my head. Result: the platform reached production with over fifty enterprise clients across Switzerland and France, and Benevity, a Canadian unicorn, acquired the company in 2021. Reflection: I'd invest in observability much earlier next time, we bolted on proper APM late and paid for it in debugging time, and I underestimated how expensive multi-tenancy retrofits get once you've deferred the decision.

---

## Story 3: Mapping someone else's architecture before touching it

**Best for:** "Tell me about joining a system you didn't build" / cross-team integration / working across a much larger org

Situation: after Benevity acquired Alaya in 2021, I joined a team ten times the size of what I'd worked in, with a different codebase, in Java, and different processes I didn't know yet. Task: integrate Alaya's capabilities into their platform without losing the product velocity we'd built, and without assuming my old playbook still applied. Action: I spent the first month just mapping their existing architecture before proposing anything, then built relationships with the platform and infra teams before pushing any technical opinions their way. Once I had context, I helped drive adoption of AI-assisted development across the org and became a de facto architecture liaison for the Europe-facing product surface. Result: the core Alaya features migrated in cleanly, I contributed to three major cross-team architecture calls, and became the person two teams pulled in for AI tooling questions. Reflection: I moved too fast early on trying to fix things that weren't actually broken in the new org, just different. Slowing down and listening first is what made the later decisions land.

---

## Story 4: Getting two teams to change how they work, with no mandate

**Best for:** "How do you lead without authority?" / staff and principal-level influence questions

Situation: at Benevity I was a senior IC with no direct reports, but I wanted two teams that didn't report to me to adopt AI-assisted development practices. Task: change how people worked day to day without being anyone's manager and without a top-down decree to lean on. Action: I started small, three curious engineers, built internal demos that showed concrete time saved rather than abstract promises, and ran informal lunch sessions with no attendance requirement. I wrote up reusable prompt templates and committed them to a shared repo so the win wasn't tied to me personally. Result: within three months about 70% of engineers across both teams were using AI-assisted review and generation, and I ended up the informal lead for AI tooling across the org. Reflection: the slower, opt-in approach took longer to get moving, but it stuck. People who chose it themselves ended up advocating for it to their own teams, which a mandate from above would never have gotten me.
