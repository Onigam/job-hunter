# STAR+R Stories: Staff Backend Engineer, AI Tooling (undisclosed company via Jobgether)

The posting leans on four things: owning a developer platform end to end, raising developer velocity, rolling out AI developer tools across an organisation, and showing how platform work turns into product outcomes. The stories below are picked for those questions. Expect a mix of "tell me about a time" prompts and deeper follow-ups on metrics, since the role asks for multi-quarter initiatives with measurable results.

---

## 1. Rolling out AI-assisted development without a mandate

**Likely questions:** "How have you driven adoption of AI developer tools?" / "How do you influence engineers who don't report to you?" / "Tell me about improving developer productivity."

**Situation.** At Benevity I was a Senior Staff IC with no direct reports. AI-assisted development tools were available, but the two teams I worked with most weren't using it in any consistent way, and nobody was going to order them to.

**Task.** My job was to get AI-assisted review and code generation into how those teams actually worked, without being their manager and without turning it into a top-down programme that people would quietly ignore.

**Action.** I started small, with three engineers who were already curious. We tried things on real pull requests rather than toy examples, and whatever saved time I turned into prompt templates and committed to a shared repo so the next person didn't have to reinvent them. Then I ran informal lunch-and-learn sessions, mostly live demos, with no slides about the future of engineering. I also wrote down concrete results as they came in; one PR review cycle that dropped by about two hours became the example people kept quoting.

**Result.** Within about three months, roughly 70% of engineers across both teams were using AI-assisted review and generation. I ended up as the informal AI tooling lead for the org, which wasn't a title anyone gave me; people just started coming to me with questions.

**Reflection.** The no-mandate route was slower, but it stuck, because the early adopters did the selling for me. If I did it again I'd set up proper measurement from day one (cycle time, review latency) instead of collecting anecdotes, because anecdotes convince engineers but not the people who fund platform work. In this role I'd treat that measurement as part of the platform itself.

---

## 2. Building the platform and engineering practices from zero at Alaya

**Likely questions:** "Tell me about something you owned end to end." / "How did you set up CI/CD and engineering practices?" / "How do you handle ambiguity?"

**Situation.** In 2016 I co-founded Alaya, an employee purpose and engagement platform. There was no code, no customers and no team, and the business side was already talking to its first enterprise prospects.

**Task.** I had to architect and build the whole platform, first on my own and then with a small team, fast enough to support sales but solid enough that we wouldn't have to start over a year later.

**Action.** I chose a stack I knew would carry us without heroics: Node.js, React and PostgreSQL. The core features were ready for a first demo in about three months. From there we grew the platform piece by piece, adding multi-tenancy, an API layer, impact reporting and postal campaigns. When I hired the first three engineers, I put the boring foundations in place before they arrived: CI/CD, a code review culture everyone followed, including me, and architecture docs short enough that people actually read them.

**Result.** The platform went to production and grew to 50+ enterprise clients across Switzerland and France. In 2021 Benevity, a Canadian unicorn valued at over $1B, acquired Alaya, which was the clearest validation of the technical choices we made early on.

**Reflection.** Two things I'd change. We added proper APM and observability late, and we paid for it in slower incident response. And retrofitting multi-tenancy cost far more than designing for it would have. Both are why I now argue for observability and operational ownership as first-class parts of any platform, not something for later.

---

## 3. Choosing a strangler fig over a rewrite when the business wanted features

**Likely questions:** "Tell me about a hard technical trade-off." / "How do you justify platform investment to the business?" / "How do you handle technical debt?"

**Situation.** At Alaya our monolith was starting to crack under load. The engineering team was split between a full microservices rewrite and keeping a modular monolith, and our investors wanted new features, not a rewrite.

**Task.** I needed a decision we could defend on both fronts: something that fixed the scaling problem without freezing product delivery for months.

**Action.** Rather than let the debate run on opinions, I ran a two-week spike that prototyped both approaches and load-tested them. I brought the numbers to the CTO and to our investors and presented the trade-offs plainly. My proposal was a strangler fig migration: extract the two highest-traffic modules first and leave everything else in the monolith. I also wrote down explicit criteria for when any further module would be worth extracting, so the question wouldn't reopen every quarter.

**Result.** The first extracted module shipped in about six weeks. Latency on the busiest endpoints improved by around 40%. The rest of the monolith stayed stable all the way through the acquisition, and we never needed a big-bang rewrite. Feature work kept going the whole time.

**Reflection.** The hardest part wasn't technical; it was convincing people that not rewriting everything was the right call. Data settled it. Next time I'd benchmark earlier and cut the debate shorter. This is the pattern I'd bring to a developer platform roadmap: tie each investment to a number the product side cares about, and agree up front on what would make us stop or go further.

---

## 4. Joining a much larger org after the acquisition

**Likely questions:** "Tell me about a time you had to adapt to a new environment." / "How do you set technical direction across teams?" / "Tell me about a mistake."

**Situation.** After the acquisition in 2021 I joined Benevity as a Senior Staff Engineer. The organisation was about ten times the size of Alaya, with a different culture, a Java and microservices codebase, and processes I didn't know.

**Task.** We had to bring Alaya's capabilities into Benevity's platform and keep shipping new features without losing the velocity we'd had as a startup.

**Action.** My first instinct was to fix things quickly, and I did push on a few things that weren't actually broken. I corrected course. I spent the first month mapping the existing architecture before proposing anything significant, and I built relationships with the platform and infrastructure teams before pushing technical opinions on them. Over time I became the cross-team architecture contact for the Europe-facing product surface, which meant a lot of writing, reviewing other teams' designs and finding the version of a decision that several teams could live with.

**Result.** The core Alaya features were migrated into Benevity's platform. I contributed to three major cross-team architecture decisions, and that position is also what later made the AI tooling rollout possible, because people already trusted me.

**Reflection.** Moving fast to "fix" things in a new org cost me credibility I then had to rebuild. Listening first made me more effective, not less. I'd apply the same thing to a new platform role: spend the first weeks learning where developers actually lose time before deciding what to build.

---

## Quick prep notes

- Have one metric ready per story: ~2h saved on a PR cycle and ~70% adoption in three months (story 1), 50+ clients and the acquisition (story 2), ~40% latency gain in six weeks (story 3), three cross-team architecture decisions (story 4).
- Likely follow-up: "How would you measure developer velocity here?" Talk about lead time for changes, PR review latency, CI duration and flakiness, and developer satisfaction surveys, and admit that AI tooling impact is hard to isolate, so you'd pair quantitative data with regular developer feedback.
- Likely follow-up: "What's your on-call and operational experience?" Use story 2 (owned production end to end as cofounder) and be honest that the observability lesson came from getting it wrong first.
