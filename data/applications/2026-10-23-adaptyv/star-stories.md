# STAR+R Stories: Adaptyv, Head of Software Engineering (Lausanne)

This is a player-coach role in a small team, so expect the loop to probe five things: whether you still ship code, how you decide what to build, defer or kill, how you hire and hold a quality bar, how AI agents change the way a team works, and how you cope with a domain (biology, lab hardware) you don't know yet. Every fact below comes from `profile/star-bank.md` and `profile/context.md`. Don't add numbers in the room that aren't written here, and be honest that lab automation and instrument integration are new territory.

---

## 1. Building Alaya from a blank page to an acquisition

**Likely prompts:** "Tell me about something you built from scratch." / "How have you built and managed a team?" / "What does founder mindset mean to you?"

**Situation.** In 2016 I co-founded Alaya, an employee purpose and impact platform. There was no product, no customers and no team, and the business side was already talking to enterprise clients who expected something they could actually use.

**Task.** I had to architect and build the whole platform, alone at first, and then grow an engineering team around it without slowing down the commercial side.

**Action.** I chose a stack I knew would hold up without heroics, Node.js, React and PostgreSQL, and got the core features to a first demo in about three months. After that the roadmap followed what clients needed: a multi-tenant architecture, an API layer, impact reporting, postal campaigns. When traction justified it I hired and onboarded the first three engineers, and I kept writing code the whole time. What changed was that I also set up CI/CD, a code review habit and architecture docs, because the design couldn't keep living only in my head if other people were going to make decisions that fit it.

**Result.** Alaya reached 50+ enterprise clients across Switzerland and France, and Benevity, a Canadian unicorn valued above $1B, acquired it in 2021. The platform came through due diligence and the acquisition intact, which is the best evidence I have that the early calls were sound.

**Reflection.** I added proper observability far too late; we only brought in APM once things hurt. At Adaptyv that lesson matters even more, since a failed run in a wet lab costs reagents and days, not just a retry. I'd also design for multi-tenancy from day one, because retrofitting it cost us more than I'd guessed, and a lab serving biopharma and AI labs side by side has the same isolation problem.

---

## 2. Deciding what not to build: the monolith versus microservices debate

**Likely prompts:** "How do you decide what goes on the roadmap?" / "Tell me about a technical trade-off under business pressure." / "How do you handle tech debt?"

**Situation.** At Alaya our monolith was starting to show cracks under load. Half the team wanted a full microservices rewrite, others preferred a modular monolith, and the investors wanted new features, not a rewrite.

**Task.** I needed a decision we could defend on both fronts, one that bought us scalability without freezing delivery for months.

**Action.** Rather than settle it in a meeting, I ran a two-week spike that prototyped both approaches and load-tested them. Then I took the trade-offs to the leadership team and the investors with numbers instead of opinions. My proposal was a strangler-fig migration: pull out the two highest-traffic modules first, leave everything else in the monolith, and write down the criteria that would justify extracting anything more. That last part was what made the "defer" stick, since it gave people a clear trigger instead of a vague "later".

**Result.** The first extracted module shipped in six weeks and performance on the busiest endpoints improved by roughly 40%. The rest of the monolith stayed stable all the way through the acquisition, and we never needed a big-bang rewrite.

**Reflection.** The hardest part wasn't technical. It was convincing people that not rewriting everything was the right call, and data is what settled it. Next time I'd benchmark earlier and shorten the debate. It's the same reflex I'd bring to the "build, defer, kill" part of this job: make the kill criteria explicit before the argument starts.

---

## 3. Turning AI tooling into a team habit without a mandate

**Likely prompts:** "How do AI agents change how a team should work?" / "How would you build AI-assisted development into a speed advantage?" / "Tell me about influencing without authority."

**Situation.** At Benevity I was a Senior Staff IC with no direct reports. I wanted two engineering teams that didn't report to me to adopt AI-assisted development, and nobody had asked them to.

**Task.** Change how those engineers worked day to day, with no authority to tell them to.

**Action.** I started with three engineers who were already curious and built small internal demos that showed time saved on real tasks, not toy examples. From there I ran informal lunch-and-learn sessions with no mandate attached, just live demos. The prompt templates that worked went into a shared repo so people could reuse them instead of reinventing them, and I wrote up concrete wins, like a PR review cycle that came in about two hours faster.

**Result.** Within three months roughly 70% of engineers on both teams were using AI-assisted code review and generation, and I became the informal AI tooling lead across the org. Since then I've pushed further on my own work: most of it now runs through multi-agent workflows with Claude CLI and OpenClaw, where my job is closer to structuring context and reviewing output than typing code.

**Reflection.** Going without a mandate was slower, but it stuck, because the people who adopted it on their own terms became its advocates. As head of a small team I'd have the authority to mandate it. I probably still wouldn't, at least not at first. I'd set the defaults, make the agent setup part of onboarding, and measure where it actually speeds things up, because a team that only uses the tools because it was told to tends to use them badly.

---

## 4. Walking into an unfamiliar system and listening before fixing

**Likely prompts:** "You don't have a biology background. How would you ramp up?" / "Tell me about adapting to a new environment." / "What would your first 90 days look like?"

**Situation.** After the acquisition in 2021 I joined Benevity as a Senior Staff Engineer. The organisation was about ten times larger than Alaya, with a different culture, a Java and microservices codebase I didn't know, and processes nothing like ours.

**Task.** Integrate Alaya's capabilities into Benevity's platform and keep shipping new features, without losing the velocity we'd had as a startup.

**Action.** Honestly, my first instinct was to start fixing things, and I moved too fast on a few that weren't broken. Once I caught that, I changed approach. I spent about a month mapping the existing architecture before proposing changes, and I built relationships with the platform and infrastructure teams before pushing any technical opinion. Over time I became the cross-team architecture liaison for the Europe-facing product surface.

**Result.** We migrated Alaya's core features into Benevity's platform, I contributed to three major cross-team architecture decisions, and I became the go-to person for AI tooling across two teams.

**Reflection.** Slowing down and listening first made me far more effective than my early rush did. That's exactly how I'd handle biology at Adaptyv. I'd spend the first weeks next to the scientists and the instruments, learning where assays fail, which steps get retried by hand and where data goes missing, before I'd let myself redraw the roadmap.

---

## Questions to ask them

These double as a check on whether the role is what it claims.

- How many engineers are on the team today, and how many hires does the roadmap assume for the next twelve months?
- What share of the week would you expect to be hands-on coding versus managing?
- Where does a run fail most often today: instrument control, scheduling, data processing, or the hand-off to the customer?
- How did the 5,000+ designs from the Proteinbase competition stress the software, and what broke?
- Who owns the reverse-engineered instrument drivers, and how are they tested before a real run?
