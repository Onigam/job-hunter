# STAR Stories

## 1. Tell me about a time you built a product from scratch in an ambiguous environment

**Situation:** In 2016, I co-founded Alaya, an employee purpose platform. At the start there was no product, no team, and no existing customer base to anchor against. We had a clear market thesis but very little certainty about which product shape would hold up once enterprise customers started using it.

**Task:** My job was to make the first technical decisions, ship the first working product fast, and avoid painting us into a corner when the platform started growing.

**Action:** I chose a pragmatic stack that let us move quickly while keeping enough room to scale: Node.js, React, PostgreSQL, and AWS. I built the first core workflows myself, then expanded the platform in layers as customer needs became clear: multi-tenant behavior, API boundaries, reporting, and the operational tooling around delivery. As we hired, I set up code review, CI/CD, and the engineering habits that let a small team keep shipping without chaos.

**Result:** The platform reached production, grew to 50+ enterprise clients across Switzerland and France, and became the technical core of the company through its acquisition by Benevity in 2021.

**Reflection:** The decision I would change is observability. We added stronger APM and monitoring later than I would have liked. In a second pass, I would put that in earlier, even before it feels urgent.

## 2. Tell me about a hard architecture decision you made under delivery pressure

**Situation:** At Alaya, our monolith was starting to show strain on the busiest parts of the product. At the same time, the business had committed to new enterprise features and there was pressure from multiple sides to move faster, not slower.

**Task:** I needed to decide whether to push for a larger rewrite or find a way to relieve the scaling pressure without freezing delivery for months.

**Action:** Rather than turning it into a philosophical debate, I ran a short spike and compared options with prototypes and load tests. The outcome was clear enough to support a middle path. Instead of a full rewrite, I proposed extracting the highest-traffic modules first and keeping the rest in place until we had a stronger reason to move them. That let us address the worst bottlenecks while keeping the roadmap alive.

**Result:** We shipped the first extracted module in about six weeks and saw roughly 40% better performance on the busiest endpoints. The rest of the system stayed stable through the acquisition, and we never had to pay the cost of a big-bang rewrite.

**Reflection:** That experience reinforced a principle I still use: architecture arguments get shorter and better when you bring data early.

## 3. Tell me about a time you had to adapt after a major organizational change

**Situation:** After Benevity acquired Alaya in 2021, I joined a much larger engineering organization with a different stack, different processes, and different expectations. The environment was more distributed, more specialized, and less forgiving of founder-style shortcuts.

**Task:** I needed to help integrate Alaya's capabilities into Benevity's platform while earning trust in a larger system where I no longer had founder authority.

**Action:** I started by listening and mapping before trying to change anything. I spent the first weeks understanding the architecture, the people, and the constraints behind decisions that looked odd from the outside. Once I had that context, I focused on a few concrete contributions: platform integration work, cross-team architecture decisions, and AI-assisted engineering practices that engineers could adopt without process theater.

**Result:** I became a Senior Staff Engineer operating across teams on the Europe-facing product surface, contributed to major architecture decisions, and became a go-to person for AI tooling adoption in the org.

**Reflection:** The main lesson was pace. In a new environment, moving too fast can look decisive but actually slows you down. Credibility first, change second, worked much better.

## 4. Tell me about a time you influenced engineering without formal authority

**Situation:** At Benevity, I wanted to improve how engineers used AI in day-to-day work, especially around code review, prompt patterns, and exploratory implementation. I had no direct reports and no mandate to force a process change.

**Task:** The goal was to shift real behavior, not run an internal campaign that sounded good but changed nothing.

**Action:** I started with a small group of engineers who were already curious. Instead of pushing guidelines, I built practical examples on real work, shared prompt templates that people could adapt, and ran lightweight demos showing where AI helped and where it clearly needed verification. I kept the framing concrete: less time in repetitive review loops, faster first drafts, better exploration of edge cases.

**Result:** Within about three months, most engineers across the two teams were using at least one AI-assisted workflow. The change stuck because it came from visible utility, not top-down pressure.

**Reflection:** The slower, opt-in approach was the right one. If I had tried to mandate it, adoption would probably have been broader on paper and weaker in practice.
