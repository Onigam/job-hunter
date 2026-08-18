# STAR Stories: Ashby, Engineering Manager

Picked for a first-line management role at a startup about to double its engineering team: leading without authority, hard architecture calls under pressure, and building something from nothing.

---

## 1. Getting AI-assisted development adopted across teams that didn't report to me

**Situation:** After the Benevity acquisition, I was a Senior Staff IC on a team about ten times the size of Alaya, with a codebase and a set of habits I had no say in shaping.

**Task:** I wanted two teams to start using AI-assisted code review and generation, but neither reported to me, and nobody had asked for this.

**Action:** I started with three engineers who were already curious rather than trying to convince skeptics first. We built a few internal demos that showed real time saved on actual PRs, then I ran informal lunch sessions, no mandate attached, just people showing their own work. I wrote up prompt templates and committed them to a shared repo so the habit could spread without me in the room.

**Result:** Within three months, about 70% of engineers across both teams were using the tooling regularly, and people started pulling me into architecture conversations I hadn't been invited to before.

**Reflection:** I'd been tempted to push this top-down and it would have been faster on paper. It also would have died the first time I moved to another project. Slow and opt-in produced advocates instead of compliance, and that's the version of this I'd run again as a manager, just with a mandate this time to move a bit faster.

---

## 2. Choosing not to rewrite a monolith under investor pressure

**Situation:** At Alaya, our monolith was starting to strain under load and the team was split between a full microservices rewrite and just living with it. Investors wanted new features shipped, not an infrastructure quarter.

**Task:** I had to make a call the CTO and investors would actually accept, one that didn't trade six months of feature work for an architecture nobody had proven we needed yet.

**Action:** I ran a two week spike prototyping both approaches under load and brought numbers instead of opinions to the review. I proposed extracting only the two highest-traffic modules first and leaving the rest alone, with explicit criteria for when we'd extract more.

**Result:** The first extracted module shipped in six weeks and cut latency on our busiest endpoints by roughly 40%. The rest of the monolith stayed untouched and stable straight through the acquisition.

**Reflection:** The technical call was the easy part. Getting people comfortable with "we're not rewriting everything" took more convincing than the spike itself, and I'd front-load the benchmarking even earlier next time to shorten that argument.

---

## 3. Building Alaya's engineering org from one person to a team

**Situation:** In 2016 I co-founded Alaya with no product, no customers, and no engineers besides me, while the business side was already out signing enterprise clients.

**Task:** Get a real platform in front of a demo within months, then build the team and the practices that could carry it past me.

**Action:** I picked a stack that could scale without pretending we were bigger than we were, Node, React, Postgres, and got the core product to a first demo in about three months. As we grew I hired the first three engineers myself and set up the unglamorous stuff early: CI/CD, code review norms, a place to write down why we'd made a decision.

**Result:** We got to production with more than 50 enterprise clients across Switzerland and France, and the company was acquired by Benevity in 2021, which I still think of as the real scorecard on those early calls.

**Reflection:** I put off proper observability longer than I should have and paid for it in late nights. I also treated multi-tenancy as something to retrofit rather than design for from day one. Both are things I'd build in earlier if I started again.

---

## 4. Slowing down after an acquisition instead of trying to fix things fast

**Situation:** Joining Benevity after the acquisition put me on a team ten times Alaya's size, with a different language, different processes, and a culture I didn't fully understand yet.

**Task:** I needed to keep contributing at the pace people expected from a senior hire without breaking things I didn't yet have context on.

**Action:** I spent the first month mapping how the existing architecture actually worked before proposing anything, and I built relationships with the platform and infra teams before I pushed any technical opinion their way.

**Result:** I ended up contributing to three major cross-team architecture decisions and became the person Europe-facing teams looped in on infrastructure questions, which wasn't the plan going in, it just followed from having done the listening first.

**Reflection:** I moved too fast in my first few weeks trying to fix things that, in hindsight, weren't actually broken, just unfamiliar. Learning to tell the difference between those two things faster is probably the single most useful management skill I've picked up.
