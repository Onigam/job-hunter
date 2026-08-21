# STAR Stories: VP Engineering, Finary

Picked for questions likely in a VP Engineering loop: building and scaling a team from zero, hiring, making a defensible technical call under business pressure, driving AI adoption org-wide, and operating without a direct mandate. Each one maps to something in Finary's ask: 40-person org, CEO-level reporting, hands-on AI, business acumen.

---

## Story 1: Building the engineering org at Alaya from zero

**Likely prompt:** "Tell me about building a team from scratch" or "How do you think about engineering org design at an early stage?"

I co-founded Alaya in 2016 with a blank page and no engineers besides me. The business side was already out signing enterprise clients, so I didn't have the luxury of a long runway to get something in front of them. I picked a stack I could move fast in without painting myself into a corner, Node and React on Postgres, and got a working demo out in about three months. Once the first contracts landed, I hired the first three engineers myself and spent as much time on how we'd work together as on what we'd build: code review as a habit rather than a gate, architecture docs that stayed current because writing them was part of the job, CI from day one instead of bolted on later. The platform grew to 50-plus enterprise clients across Switzerland and France, and Benevity, a Canadian unicorn, acquired us in 2021. Looking back, I'd invest in observability much earlier; we didn't get real APM in place until traffic made the gaps obvious, and I'd rather have found problems before customers did.

---

## Story 2: The strangler-fig decision instead of a rewrite

**Likely prompt:** "Tell me about balancing technical debt against delivery pressure" or "How do you make architecture calls that affect the whole business?"

By our second year at Alaya the monolith was showing real strain under our biggest clients' traffic, and half the team wanted a microservices rewrite while investors wanted new features, not a quarter spent on plumbing. I didn't think either side was fully right, so I ran a two-week spike with load tests on both approaches and brought numbers, not opinions, to the CTO and the board. What we landed on was a strangler-fig migration: pull out the two highest-traffic modules first, leave the rest alone, and set clear criteria for when the next module would qualify for extraction. The first module shipped in six weeks and performance on those endpoints improved by roughly 40%. We never did the big rewrite, and the rest of the monolith held up fine all the way through acquisition. The hard part wasn't the technical work, it was convincing people that not rewriting everything was itself a defensible decision. Data closed that argument faster than debate would have.

---

## Story 3: Driving AI-assisted engineering adoption without authority

**Likely prompt:** "Tell me about leading change you couldn't mandate" or "How have you brought AI into an engineering org?"

After Benevity acquired Alaya, I landed as a Senior Staff IC on a team roughly ten times the size of what I'd run before, with no direct reports and no formal say over two other teams I wanted to change. I wanted them using AI-assisted workflows, Copilot and structured prompting for code review and generation, but a top-down push from someone with no authority over them would have gone nowhere. So I started with three engineers who were already curious, built small internal demos that showed concrete time saved rather than abstract promises, and ran informal lunch sessions with no mandate attached. I wrote up specific wins, like a two-hour review cycle that collapsed to twenty minutes, and put reusable prompt templates in a shared repo anyone could pull from. Within three months about 70% of engineers across both teams were using it regularly, and I became the person people asked before rolling it out elsewhere. It took longer than a mandate would have, but the people who adopted it were the ones defending it in meetings I wasn't in.

---

## Story 4: Earning trust in a much larger org before pushing opinions

**Likely prompt:** "Tell me about joining a company at a different scale" or "How do you build credibility with people who don't know you yet?"

The acquisition put me in a codebase and culture that had nothing to do with what I'd built at Alaya, Java microservices instead of a Node monolith, and a team ten times larger with its own way of doing things. My first instinct was to start fixing what looked broken to me, and that instinct was wrong. I spent the first month mostly listening, mapping how the existing architecture actually worked and why, before I proposed anything, and I built relationships with the platform and infra teams before I brought technical opinions to them. That patience is what let me become a cross-team architecture liaison for the Europe-facing product surface and contribute to three major architecture decisions that stuck. What I'd tell an earlier version of myself is that the credibility you spend fixing things fast, you can't get back if the first fix is the wrong one; better to be slow and right for the first month than fast and resented for the next six.

---

## Story 5: Making the business case for platform investment

**Likely prompt:** "Tell me about convincing non-technical stakeholders to fund technical work" or "How do you balance product speed with platform health?"

The strangler-fig decision at Alaya is really two stories in one, because half the battle wasn't architecture, it was persuading investors who saw a two-week spike as two weeks of features not shipped. I framed it in terms they already cared about: the cost of an outage during an enterprise renewal conversation versus the cost of a short, bounded investigation. I gave them a date the spike would end and a specific decision it would produce, not an open-ended "let us explore." When the data came back showing a clear path that didn't require a full rewrite, the ask got much smaller than what they'd been bracing for, which made the "yes" easy. The lesson that's stayed with me is that stakeholders don't usually resist technical investment itself, they resist open-ended asks with no defined end and no commitment to a decision.
