# STAR Stories: Adaptyv (Head of Software Engineering)

Picked for a player-coach, Director/VP-level role: roadmap ownership, hands-on shipping, team building, and AI-assisted development as a stated priority.

---

## 1. Building Alaya from zero to acquisition
**Likely prompt:** "Tell me about owning a roadmap end to end" / "founding engineer" / "how do you handle ambiguity"

In 2016 I co-founded Alaya, an employee purpose and impact platform, with a blank page and no customers. I had to architect and build the whole thing myself first, then grow a team around it while the business was closing its first enterprise clients, so there wasn't room for a long planning phase. I picked a pragmatic stack, Node.js, React, PostgreSQL, that could scale without over-engineering for a company that didn't exist yet, and got the core features to a demo state in about three months. From there I kept expanding: multi-tenant architecture, an API layer, impact reporting, postal campaigns, and I hired and onboarded the first three engineers, setting up CI/CD and a code review culture as I went. We got to 50-plus enterprise clients across Switzerland and France, and Benevity, a Canadian unicorn, acquired us in 2021. Looking back, I'd have put real observability in place earlier since we bolted on proper APM late, and I underestimated how expensive it would be to retrofit multi-tenancy instead of designing for it from day one. That's a mistake I wouldn't repeat on a second build.

---

## 2. A hard architecture call under investor pressure
**Likely prompt:** "Tell me about a technical tradeoff" / "how do you prioritize what to build vs. defer"

At Alaya, our monolith started showing real scaling cracks, and the team split between a full microservices rewrite and a more modest modular approach, right as investors were pushing hard for new features instead of a rewrite nobody outside engineering cared about. I ran a two-week spike comparing both paths with actual load tests rather than opinions, then took the numbers to the CTO and investors directly. What I proposed was a strangler fig migration: pull out the two highest-traffic modules first and leave the rest of the monolith alone, with clear criteria for when we'd extract more. We shipped the first extracted module in six weeks and saw a 40% performance gain on the busiest endpoints, and the remaining monolith stayed stable all the way through the acquisition, so we never needed the big-bang rewrite. The hardest part honestly wasn't the technical work, it was convincing people that not rewriting everything was the disciplined choice. Data made that argument faster than I could have. If I did it again I'd run the benchmarking even earlier to shorten the debate.

---

## 3. Leading AI tooling adoption without formal authority
**Likely prompt:** "How do you drive change without a mandate" / "AI-assisted development practices" (directly relevant to Adaptyv's stated priority)

At Benevity I was a Senior Staff IC with no direct reports, but I wanted two teams that didn't report to me to actually adopt AI-assisted development instead of treating it as a novelty. Mandating it wasn't an option and probably wouldn't have worked anyway, so I started with three engineers who were already curious, built internal demos that showed concrete time savings on real PRs, and ran informal lunch-and-learn sessions with no agenda beyond "here's what this saved me." I wrote reusable prompt templates and committed them to a shared repo so the win wasn't just personal, and I documented specific outcomes, like a review cycle that dropped by two hours on one PR, instead of talking in generalities. Within three months about 70% of engineers across both teams were using AI-assisted review and generation day to day, and I ended up the informal lead for AI tooling across the org. It was slower than a top-down rollout would have been, but it stuck, because people who adopt something on their own terms end up defending it to their peers in a way a decree never produces.

---

## 4. Integrating into a much larger org after acquisition
**Likely prompt:** "Tell me about navigating a big change" / "working across teams you don't manage" / "startup to scale-up transition"

When Benevity acquired Alaya in 2021, I went from a five-person engineering team to a codebase and org roughly ten times the size, with a different stack, Java and microservices instead of our Node monolith, and a different culture entirely. My instinct early on was to start proposing fixes, but I forced myself to spend the first month just mapping how the existing architecture actually worked and building relationships with the platform and infra teams before I pushed any technical opinion. That patience paid off: I helped migrate Alaya's core capabilities into Benevity's platform, contributed to three major cross-team architecture decisions, and became the liaison for the Europe-facing product surface. I'll admit I moved too fast in the first few weeks trying to "fix" things that weren't actually broken, just unfamiliar, and had to walk some of that back. Slowing down and listening first is the thing I'd tell a past version of myself to do sooner, and it's exactly the muscle you need when you're building a small team from scratch and can't afford to burn trust early.

---

## 5. Balancing hands-on shipping with team leadership
**Likely prompt:** "How do you split time between coding and managing" / player-coach fit

This one draws on the throughline across both Alaya and Benevity rather than a single incident. At Alaya I never stopped writing code even as the team grew to a handful of engineers, because I was usually the only one who understood a given piece of the system deeply enough to unblock it fast, and pulling myself fully into management would have slowed the whole team down at that stage. At Benevity, without direct reports, I kept the same pattern: I stayed hands-on shipping features on the Europe-facing surface while also taking on the architecture liaison role and the AI tooling push. The tradeoff I'm most conscious of is that a player-coach has to be deliberate about which problems are worth their own coding time versus which ones need to be delegated so the team actually grows its own ownership. I try to pick the technical problems where my time matters most to code myself, things where my involvement removes a real bottleneck, and hand off the rest even when I could do it faster solo, because the team doesn't get better if I don't.
