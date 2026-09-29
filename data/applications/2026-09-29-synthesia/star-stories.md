# STAR+R Stories: Synthesia, (Senior or Staff) Backend Engineer, AI tooling

Picked for the Synthesia loop: the 45-minute EM call on past projects, the system design round on production problems, and the leadership call on collaboration and growth. The posting leans hard on AI tool adoption, measurable developer velocity, pushing back on requirements and end-to-end ownership, so each story maps to one of those.

---

## 1. Getting two teams to adopt AI tooling without a mandate

**Likely prompts:** "Tell me about leading AI developer tool adoption." / "How do you influence engineers who don't report to you?"

At Benevity I was a Senior Staff IC with no direct reports, and I was convinced AI-assisted development could take real time out of our review and implementation cycles. The problem was that the two teams I wanted to bring along had their own managers, their own habits and a fair amount of skepticism about yet another tool.

My job, as I saw it, was to change how people worked without being the one who could tell them to. A top-down rollout wasn't an option, and honestly I didn't want one.

So I started small. Three engineers were already curious, and I paired with them on their actual pull requests rather than toy examples. When something saved time, we wrote it down; one early note was a review cycle that came in about two hours shorter than usual. I ran a few informal lunch sessions that were mostly live demos, and I put the prompt templates we'd refined into a shared repo so nobody had to start from scratch. Nothing was mandatory.

Within about three months roughly 70% of engineers on both teams were using AI-assisted review and code generation, and I ended up as the informal AI tooling lead for the org.

Looking back, the slow, opt-in approach was the right call because the people who adopted it on their own became the ones selling it to others. What I'd do differently is instrument it from day one. We had anecdotes and adoption counts, but not a clean before/after on cycle time, and for a platform team like Synthesia's that's the number I'd want in hand before asking for more investment.

---

## 2. Building Alaya's platform from nothing, and owning all of it

**Likely prompts:** "Tell me about a large technical area you owned end to end." / "How do you handle ambiguity?"

In 2016 I cofounded Alaya, an employee purpose and impact platform. There was no product, no customer and no code, while the business side was already talking to the first enterprise prospects.

I had to design and build the whole platform, first alone and then with a small team, and it had to be good enough for enterprise clients without being overbuilt for a company that might pivot.

I went with Node.js, React and PostgreSQL because I could move fast with them and they'd hold up if we grew. The first demoable version took about three months. From there it grew into a multi-tenant architecture with an API layer, impact reporting and postal campaigns. As we hired our first three engineers I put CI/CD in place, set up a code review culture and wrote architecture docs so new people didn't have to reverse-engineer my decisions.

The platform reached 50+ enterprise clients across Switzerland and France, and Benevity acquired Alaya in 2021. The technical due diligence held up, which I take as a decent signal that the early choices were sound.

Two things I'd change. Observability came too late; we added proper APM once problems were already visible to customers, and debugging before that was slower than it needed to be. And I retrofitted multi-tenancy instead of designing for it upfront, which cost us more than it would have at the start. Both lessons shape how I think about developer platforms now: the tooling that makes production visible is not a later-phase nice-to-have.

---

## 3. Pushing back on a rewrite with data instead of opinions

**Likely prompts:** "Tell me about a time you pushed back on requirements." / "Describe a technical trade-off under pressure."

Alaya's monolith was starting to crack under load. Half the team wanted a full microservices rewrite, while our investors wanted new features and had no appetite for a rewrite at all.

I needed a decision we could defend to both groups, one that fixed the scaling problems without stopping delivery for months.

Rather than argue it out in meetings, I ran a two-week spike and prototyped both options with load tests. Then I brought the numbers to the CTO and the investors. My proposal was a strangler fig migration: pull out the two highest-traffic modules, leave everything else in the monolith, and agree upfront on the criteria that would justify extracting anything further.

The first module shipped in about six weeks, and the busiest endpoints got roughly 40% faster. The rest of the monolith stayed stable all the way through the acquisition, and we never needed the big-bang rewrite.

The hard part wasn't technical. It was convincing people that not rewriting everything was a real decision and not a lack of ambition. Having data made that conversation much shorter than it would have been otherwise, and next time I'd start the benchmarking even earlier so the debate never gets going.

---

## 4. Joining a much bigger org after the acquisition

**Likely prompts:** "Tell me about navigating a big change." / "How do you work across teams?" / "Tell me about a mistake."

After Benevity acquired Alaya, I went from a small team where I knew every line of code to an engineering org roughly ten times larger, running Java microservices with its own processes and history.

The task was to bring Alaya's capabilities into Benevity's platform and keep building, without losing the delivery speed we'd had as a startup.

My first instinct was to fix things quickly, and a few of those early suggestions landed badly because I didn't yet understand why things were built the way they were. So I changed tack. I spent about a month mapping the existing architecture and talking to the platform and infra teams before proposing anything else. Once I had those relationships, I became the cross-team architecture contact for the Europe-facing product surface, and that's also where the AI tooling work in story 1 grew from.

We migrated Alaya's core features into the Benevity platform, and I contributed to three major cross-team architecture decisions along the way.

What I took from it is simple. In a new org, listening first isn't politeness, it's how you find out which problems are real. Joining Synthesia's platform team, I'd spend the early weeks understanding where engineers actually lose time before shipping a single tool.

---

## Quick notes for the loop

The Python implementation round is collaborative product discovery, not LeetCode, so talk through assumptions and ask who the user is before writing code. For system design, have a concrete example ready of observability gaps hurting production (Alaya APM, story 2). For the leadership call, story 1 and story 4 together show both influence and the ability to admit a misstep. Be ready to answer honestly on Python depth; day-to-day work has been mostly TypeScript and Node.js, with Python as a secondary language.
