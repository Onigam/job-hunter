# STAR+R Stories: Legora, Staff Software Engineer (Platform Team)

The posting leans on four things: shipping features end to end with speed and reliability, leading engineers through the full lifecycle, translating business needs into technical design, and pushing automation and process improvements. These four stories map onto those, roughly in the order a Staff loop at a fast-growing AI company tends to ask them.

---

## 1. Building a platform from a blank page (Alaya)

**Likely prompts:** "Tell me about something you built from scratch." "How do you balance speed and quality?" "Walk me through a system you designed end to end."

**Situation.** In 2016 I co-founded Alaya, an employee purpose and engagement platform. There was no product, no customers and no code, while the business side was already in conversations with its first enterprise clients.

**Task.** My job was to design and build the whole platform, alone at first, and get it to a point where large companies would trust it with their employees' data. Then I had to grow a team around it without slowing down.

**Action.** I picked a stack I knew could carry us a long way without clever infrastructure: Node.js, React and PostgreSQL. The goal for the first three months was a working demo, not a perfect architecture, so I cut scope hard and got the core flows in front of prospects early. Once clients started signing, the work shifted to things that make a product hold up under real use, like a proper API layer, impact reporting for HR teams and eventually multi-tenancy. When I hired our first three engineers, I set up CI/CD, code review and written architecture docs before we had any real process problems, because I'd seen how hard those habits are to add later.

**Result.** The platform went from nothing to 50+ enterprise clients across Switzerland and France, and Alaya was acquired by Benevity in 2021. A lot of that came down to the product holding up during due diligence, which is the closest thing to an external audit of early technical decisions I've had.

**Reflection.** Two things I'd change. Observability came far too late; we added proper APM after we'd already been bitten by incidents we couldn't explain quickly. And I underestimated how expensive it is to retrofit multi-tenancy. For a product like Legora's, where every customer is a law firm with strict expectations about data separation, I'd treat tenant isolation as a day-one design input, not a later migration.

---

## 2. Choosing a strangler fig over a rewrite

**Likely prompts:** "Tell me about a hard technical trade-off." "How do you handle technical debt while the business wants features?" "Describe an architecture decision you'd defend."

**Situation.** A few years into Alaya, the monolith was showing cracks under load. Some of the team wanted a full move to microservices. Our investors, understandably, wanted new features and didn't want to hear the word "rewrite".

**Task.** I needed to make a call that fixed the scaling problem without freezing product delivery for months, and I needed it to be defensible to both the engineers and the people funding us.

**Action.** Rather than let it turn into a debate about taste, I ran a two-week spike where we prototyped both directions and load-tested them against our real traffic patterns. I brought the numbers to the CTO and investors and proposed a middle path: extract only the two highest-traffic modules using a strangler-fig approach, keep everything else in the monolith, and write down explicit criteria for when another module would earn its own service. That last part mattered, because it turned future arguments into a checklist.

**Result.** The first extracted module shipped in about six weeks, and response times on the busiest endpoints improved by roughly 40%. The rest of the monolith stayed stable all the way through the acquisition, and we never had to do a big-bang rewrite.

**Reflection.** The technical part was easier than the persuasion. Data ended the argument, so next time I'd benchmark earlier and skip a couple of weeks of opinion-trading. At Legora's growth rate I suspect the same pattern applies: carve out the hot paths deliberately and resist re-platforming everything at once.

---

## 3. Joining a much larger org after the acquisition (Benevity)

**Likely prompts:** "Tell me about a time you had to adapt to a new environment." "How do you work across teams?" "How do you influence architecture in an org you don't control?"

**Situation.** After the acquisition I joined Benevity as Senior Staff Engineer. The engineering org was about ten times larger than Alaya's, the codebase was Java microservices rather than our Node.js stack, and the processes were completely different.

**Task.** I had to integrate Alaya's capabilities into Benevity's platform and keep shipping new work, without losing the delivery pace our team was used to.

**Action.** My instinct was to start fixing things, and honestly I did that a bit too quickly at first. What worked better was spending the first month mapping the existing architecture and talking to the platform and infra teams before pushing opinions. Once I understood why things were the way they were, my proposals landed differently. Over time I became the architecture liaison for the Europe-facing product surface, which meant translating between product needs in one region and platform constraints owned by teams in another.

**Result.** We migrated Alaya's core features into Benevity's platform, and I contributed to three major cross-team architecture decisions during that period.

**Reflection.** Listening first made me far more effective than being right early. That's directly relevant to joining Legora at this stage: the platform team will have context and scars I won't have on day one, and I'd want to earn trust before redrawing anything.

---

## 4. Changing how engineers work without authority

**Likely prompts:** "How do you lead without being a manager?" "Tell me about a process improvement you drove." "How do you mentor and raise the bar across a team?"

**Situation.** At Benevity I was an IC with no direct reports, and I was convinced AI-assisted development would save our engineers real time. The two teams I wanted to bring along didn't report to me, and plenty of people were sceptical.

**Task.** Get engineers to actually change their daily workflow, without a mandate and without turning it into a top-down tooling rollout people would quietly ignore.

**Action.** I started small, with three engineers who were already curious. We built a few internal demos around real tasks from our own backlog, so the time savings were concrete instead of theoretical. I ran informal lunch-and-learn sessions with no attendance pressure, put reusable prompt templates in a shared repo so nobody had to start from zero, and wrote up specific wins, like a PR review cycle that came down by around two hours.

**Result.** Within about three months, roughly 70% of engineers on both teams were using AI-assisted code review and generation, and I ended up as the informal AI tooling lead across the org.

**Reflection.** It was slower than a mandate would have been, but it stuck, because the people who adopted it on their own terms became its advocates. Legora's posting asks the Staff engineer to champion automation and mentor others. I'd approach that the same way: show it working on real work first, then make it easy to copy.
