# STAR Stories: Founding Full-Stack Engineer, Valerie Group

Picked for a founding-engineer loop: owning a system from architecture through production, making a technical call under business pressure, driving AI tooling adoption (relevant given Valerie's Neuro-Intelligence and AI Agents work), and handling multi-tenant design. Each maps to something in the listing: own features end to end, NestJS/Postgres/React stack, contribute to AI Agents and the growth platform.

---

## Story 1: Building Alaya's platform from a blank page

**Likely prompt:** "Tell me about building something from zero" or "What does founding engineer mean to you?"

I co-founded Alaya in 2016 with nothing built yet and the business side already out signing enterprise clients, so there wasn't a long runway to get something in front of them. I picked Node, React and Postgres specifically because I could move fast without painting myself into a corner, and had a working demo in about three months. Once the first contracts landed I hired the first three engineers myself and spent as much time on how we'd work as on what we'd build: code review as a habit, architecture docs that stayed current, CI from day one instead of bolted on later. The platform grew to 50-plus enterprise clients across Switzerland and France, and Benevity, a Canadian unicorn, acquired us in 2021. Looking back, I'd have designed for multi-tenancy from day zero instead of retrofitting it once the second and third clients showed up wanting isolated data; that retrofit cost weeks I didn't need to spend.

---

## Story 2: The strangler-fig call instead of a rewrite

**Likely prompt:** "Tell me about a technical trade-off you owned end to end" or "How do you balance shipping features against architecture health?"

By our second year at Alaya the monolith was straining under our biggest clients' traffic, and the team split between wanting a full microservices rewrite and investors wanting new features, not a quarter spent on plumbing. Neither side was fully right, so I ran a two-week spike with load tests on both approaches and brought numbers, not opinions, to the CTO and board. What we landed on was a strangler-fig migration: pull the two highest-traffic modules out first, leave the rest alone, and define clear criteria for when the next module would qualify. The first module shipped in six weeks, and performance on those endpoints improved by roughly 40%. We never did the big rewrite, and the rest of the monolith held up fine through the acquisition. The hard part wasn't the technical work, it was convincing people that not rewriting everything was itself a defensible decision, and the data closed that argument faster than a debate would have.

---

## Story 3: Getting AI-assisted workflows adopted without a mandate

**Likely prompt:** "Tell me about driving adoption of a new tool or practice" or "What's your experience bringing AI into engineering work?"

After Benevity acquired Alaya, I landed on a team about ten times the size of what I'd run before, with no formal say over two other teams whose workflow I wanted to change. A top-down push from someone with no authority over them would have gone nowhere, so I started with three engineers who were already curious, built small demos that showed concrete time saved rather than abstract promises, and ran informal sessions with no mandate attached. I wrote up specific wins, like a review cycle that dropped from two hours to twenty minutes, and put reusable prompt templates in a shared repo anyone could pull from. Within three months about 70% of engineers across both teams were using it regularly, and I became the person people asked before rolling something out elsewhere. It took longer than a mandate would have, but the people who adopted it on their own terms were the ones defending it in rooms I wasn't in.

---

## Story 4: Making the business case for a platform investment

**Likely prompt:** "Tell me about convincing non-technical stakeholders to fund technical work" or "How do you work with Product when priorities conflict?"

The strangler-fig decision at Alaya was really two problems in one, because half the fight wasn't architecture, it was persuading investors who saw a two-week spike as two weeks of features not shipped. I framed it in terms they already cared about: the cost of an outage during an enterprise renewal conversation against the cost of a short, bounded investigation. I gave them a fixed end date and a specific decision the spike would produce, not an open-ended "let us explore for a while." When the results came back showing a path that didn't need a full rewrite, the ask I ended up making was much smaller than what they'd braced for, which made the yes easy. What stuck with me is that stakeholders rarely resist technical investment on principle, they resist open-ended asks with no defined end and no commitment to a decision at the end of it.
