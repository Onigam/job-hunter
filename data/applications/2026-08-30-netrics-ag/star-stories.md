# STAR Stories: Chief Technology Officer, Netrics AG

Picked for a group CTO loop where the real ask is folding acquired companies onto shared infrastructure, translating tech into business strategy at the executive table, and building talent pipelines across teams that don't share a history. Four stories come straight from the acquisition Alaya went through; the fifth reframes the same architecture call around the kind of stakeholder conversation a CTO has during due diligence.

---

## Story 1: Building Alaya's platform and engineering org from zero

**Likely prompt:** "Tell me about building something from scratch" or "How do you think about standing up engineering capability in a new part of the business?"

I co-founded Alaya in 2016 with a blank page and no engineers besides me, while the business side was already out signing enterprise clients. I picked a stack I could move fast in without boxing myself in, Node and React on Postgres, and had a working demo in about three months. Once contracts started landing I hired the first three engineers myself and spent as much energy on how we'd work together as on what we'd build: code review as a habit, architecture docs that stayed current, CI from day one instead of bolted on later. The platform grew to more than 50 enterprise clients across Switzerland and France, and Benevity, a Canadian unicorn, acquired the company in 2021. Looking back, I'd invest in observability much earlier; we didn't get real monitoring in place until scale made the gaps obvious.

---

## Story 2: Integrating an acquired platform into a much larger organization

**Likely prompt:** "Tell me about bringing an acquisition onto shared infrastructure" or "How do you operate across companies with different cultures and codebases?"

When Benevity acquired Alaya in 2021, I joined as Senior Staff Engineer on a team roughly ten times the size of what I'd run, with a different language, different codebase, different everything. My instinct was to start fixing what looked wrong to me, and I caught that instinct early enough to not act on it. I spent the first month mostly listening, mapping how the existing architecture actually worked and why, before I proposed anything, and I built relationships with the platform and infra teams before I brought them opinions. That patience is what let me become the cross-team architecture liaison for the Europe-facing product surface and contribute to three major architecture decisions that stuck. If I were doing this at group scale across several acquired companies at once, I'd run that same listening period for each one rather than assuming what worked at the first applies to the next.

---

## Story 3: A defensible architecture call under investor pressure

**Likely prompt:** "Tell me about a technical trade-off that had real business consequences" or "How do you make the case for platform investment to non-technical stakeholders?"

By our second year at Alaya, the monolith was straining under our biggest clients while investors wanted new features, not a quarter spent on plumbing, and half the team wanted a full microservices rewrite. I didn't think either side was fully right, so I ran a two-week spike with load tests on both approaches and brought numbers, not opinions, to the CTO and the board. We landed on a strangler-fig migration: pull the two highest-traffic modules out first, leave the rest alone, and set clear criteria for when the next module would qualify. The first module shipped in six weeks, performance on those endpoints improved by roughly 40%, and the rest of the monolith held up fine all the way through acquisition. The hard part wasn't the technical work, it was convincing people that not rewriting everything was itself a defensible decision, and framing it as a bounded, dated investigation rather than an open-ended ask made that case a lot easier to buy.

---

## Story 4: Driving adoption of a new way of working with no formal authority

**Likely prompt:** "Tell me about standardizing practices across teams that don't report to you" or "How do you build a talent pipeline or shift how people work at scale?"

After the acquisition I had no direct reports and no formal say over two teams whose workflow I wanted to change, I wanted them using AI-assisted development, but a push from someone with no authority over them would have gone nowhere on its own. I started with three engineers who were already curious, built small internal demos that showed concrete time saved instead of abstract promises, and ran informal lunch sessions with no mandate attached. I wrote up specific wins, like a two-hour review cycle that collapsed to twenty minutes, and put reusable prompt templates in a shared repo anyone could pull from. Within three months about 70% of engineers across both teams were using it regularly, and I became the person people asked before rolling similar changes out elsewhere. It took longer than a mandate would have, but the people who adopted it on their own terms were the ones defending it in rooms I wasn't in, which is what standardizing a practice across companies that don't share a manager actually needs.

---

## Story 5: Making the business case that shaped a due-diligence-style decision

**Likely prompt:** "Tell me about translating a technical assessment into a strategic recommendation" or "How would you approach technology evaluation during an acquisition?"

The strangler-fig call at Alaya was really two decisions folded into one, because half the work wasn't architecture, it was persuading investors who initially saw a two-week spike as two weeks of features not shipped. I framed it in terms they already cared about: the cost of an outage during an enterprise renewal conversation against the cost of a short, bounded investigation with a fixed end date. I gave them a date the spike would end and a specific decision it would produce, not an open-ended "let us explore," and when the data came back showing a path that avoided a full rewrite, the ask was much smaller than what they'd braced for. That's close to the shape of a technology due-diligence recommendation: assess quickly, put a number on the risk, and give the people funding the decision a bounded, dated answer instead of a hedge.
