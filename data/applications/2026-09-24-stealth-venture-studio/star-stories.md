# STAR+R Stories: Founding Full-Stack Engineer, Stealth venture studio (Agentic AI)

The posting keeps coming back to a few themes: owning the whole stack from day one, building for real constraints rather than demos, directing AI agents without trusting them blindly, and working straight with founders and customers. The four stories below are chosen to cover those. Each one should take about two minutes out loud.

---

## 1. Building Alaya from a blank page to acquisition

**Likely questions:** "Tell me about something you built from scratch." / "How do you handle ambiguity?" / "What does owning the architecture mean to you?"

**Situation.** In 2016 I co-founded Alaya, an employee purpose and impact platform. There was no product, no customer and no code, and the business side was already talking to enterprise prospects who expected a demo soon.

**Task.** I was the one who had to design and build the whole platform, first on my own and later with a team, while the company was signing its first clients. Nobody was going to hand me a spec.

**Action.** I picked a stack I knew could carry us without becoming a research project: Node.js, React and PostgreSQL. The first three months went into the core features needed for a real demo, and that's what we sold on. From there the platform grew in layers, with multi-tenancy, an API layer, impact reporting and postal campaigns, each added when a customer actually needed it rather than when it seemed elegant. Once we could afford it, I hired the first three engineers and put in place the things I'd been doing informally: CI/CD, code review, and architecture docs so decisions didn't live only in my head.

**Result.** Alaya went to production with 50+ enterprise clients across Switzerland and France, and Benevity, a Canadian unicorn valued at over $1B, acquired us in 2021. The technical choices made in year one held up through due diligence.

**Reflection.** Two things I'd change. Observability came far too late; we added proper APM when we were already feeling pain, and that cost us time chasing issues blind. And retrofitting multi-tenancy was more expensive than I'd guessed. For a studio spinning up several products, I'd design tenancy and telemetry in from the first commit, because those are the decisions that are cheap on day one and painful on day three hundred.

---

## 2. Choosing not to rewrite: the strangler fig decision

**Likely questions:** "Tell me about a hard technical trade-off." / "How do you balance speed and long-term quality?" / "Tell me about a time you disagreed with the direction."

**Situation.** A few years into Alaya, our monolith was starting to crack under load. The team was split between a full move to microservices and a modular monolith. Meanwhile our investors wanted new features, not a rewrite, and they weren't wrong to worry about that.

**Task.** I needed to land on a decision the team and the investors could both defend, one that fixed the scaling problem without freezing delivery for months.

**Action.** Rather than argue it out in meetings, I ran a two-week spike and built prototypes of both approaches, then load-tested them. I took the numbers to our leadership and investors instead of opinions. What I proposed was a strangler fig migration: pull out the two highest-traffic modules first, leave everything else in the monolith, and write down explicit criteria for when any further module would earn its own service. That last part mattered, because without it every future discussion would've reopened the whole debate.

**Result.** The first extracted module shipped in six weeks, and the busiest endpoints got roughly 40% faster. The rest of the monolith stayed stable all the way through the acquisition, and we never needed a big-bang rewrite.

**Reflection.** The engineering was the easy part. Convincing people that not rewriting everything was the right call took most of the energy, and data is what ended the argument. Next time I'd benchmark earlier and shorten the debate. It's the same instinct I'd bring here: build for the constraint you can measure, not the architecture that looks best on a slide.

---

## 3. Getting two teams to use AI tooling, and to question it

**Likely questions:** "How do you work with AI coding tools?" / "How do you influence without authority?" / "How do you make sure AI-generated code is right?"

**Situation.** At Benevity I was a Senior Staff IC with no direct reports. I wanted two engineering teams, neither of which reported to me, to start using AI-assisted development in their daily work. Some people were curious, some were skeptical, and a mandate from me wasn't an option.

**Task.** Change how engineers worked without being anyone's manager, and do it in a way that didn't lower the bar on code quality.

**Action.** I started small, with three engineers who were already curious, and worked on real tickets with them rather than toy examples. I built internal demos that showed the actual time saved, and also where the tools got things wrong, because pretending they're always right is how you lose the skeptics. Informal lunch and learn sessions followed, with no mandate attached. I wrote reusable prompt templates and put them in a shared repo so people didn't have to start from zero, and I documented concrete wins, like a PR review cycle that went about two hours faster.

**Result.** Within three months, around 70% of engineers on both teams were using AI-assisted review and code generation, and I ended up as the informal AI tooling lead across the org.

**Reflection.** Going without a mandate was slower, but it stuck, and the people who adopted it on their own terms became its best advocates. What I've learned since is that the useful skill isn't prompting, it's reviewing. A model will hand you something that compiles, reads well and is subtly wrong. Treating its output like a pull request from a fast, confident junior is the habit I'd want in any team I help build, including a team of one working alongside agents.

---

## 4. Walking into a larger org after the acquisition

**Likely questions:** "Tell me about a time you had to adapt." / "Tell me about a mistake you made." / "How do you work with people who see things differently?"

**Situation.** After the Benevity acquisition in 2021 I moved from a small startup to an engineering organisation about ten times larger. The culture, the codebase (Java and microservices) and the processes were all different from what I'd built at Alaya.

**Task.** Bring Alaya's capabilities into Benevity's platform and keep building new features, without losing the delivery speed we'd had as a startup.

**Action.** My first instinct was wrong. I tried to fix things too fast, some of which weren't broken, they just weren't how I'd have done them. So I reset. I spent the first month mapping the existing architecture before proposing anything, and got to know the platform and infra teams before pushing technical opinions on them. Once there was some trust, I became the cross-team architecture contact for the Europe-facing product surface.

**Result.** The core Alaya features were migrated into Benevity's platform, and I contributed to three major cross-team architecture decisions. The relationships I built in that first month were what made those decisions go through.

**Reflection.** Listening before proposing made me more effective, not slower. In a studio, where I'd be working across founders with different styles and customers with different needs, that's probably the most transferable thing I learned at Benevity.

---

## Questions worth asking them

- How does equity work across the studio: do founding engineers hold equity in each startup they build, in the studio itself, or both?
- Is the founding engineer attached to one startup once it spins out, or does the role rotate across the portfolio?
- Which agent tooling are you already using internally, and who reviews what the agents produce?
- What does "real constraints" look like for the first startup: data volume, latency, compliance, customer integration?
- Is there a path to CTO at a spin-out for the right person?
