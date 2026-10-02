# STAR+R Stories: arcneo / arcOS, CTO / Entrepreneur in Residence

_Picked for a technical cofounder track: building from zero, taking over an existing system, architecture trade-offs under commercial pressure, and getting people to adopt AI tooling. Roman will care about whether you can own the product and sell it with him; Despot will care about whether you'll respect what's already built._

---

## 1. Building Alaya from zero to acquisition

**Likely questions:** "Have you been a founder before?" / "How do you handle ambiguity?" / "Why should we trust you with a spin-out?"

**Situation.** In 2016 I co-founded Alaya, a purpose and impact platform for employee engagement. There was no product, no customers and no code, and the business side was already talking to enterprise prospects who wanted to see something.

**Task.** As Head of Technologies, my job was to build the whole platform, on my own at first, and get it to a point where we could sign and keep enterprise clients while I grew a team around it.

**Action.** I picked a stack I knew would hold up without heavy engineering: Node.js, React and PostgreSQL. The first three months went into the core features we needed for a real demo, and I deliberately left out anything a prospect wouldn't notice. Once we had paying clients I expanded in the order they pushed us, which meant multi-tenancy, an API layer, impact reporting and later postal campaigns. When we could afford it, I hired and onboarded our first three engineers and set up CI/CD, code review and enough architecture documentation that I wasn't the only person who understood the system.

**Result.** We reached 50+ enterprise clients across Switzerland and France, and Benevity, a Canadian unicorn valued at over $1B, acquired Alaya in 2021. The technical decisions held up through their due diligence.

**Reflection.** I'd put observability in much earlier; we added proper APM late and spent time guessing that we didn't need to. I also underestimated how expensive it is to retrofit multi-tenancy. For arcOS the equivalent question is probably whether the system is ready for many external customers with their own data, or whether it still assumes arcneo is the main user.

---

## 2. Taking over a system I didn't build (Benevity integration)

**Likely questions:** "How would you take over arcOS from Despot?" / "Tell me about joining an existing codebase" / "How do you handle change?"

**Situation.** After the acquisition I joined Benevity as a Senior Staff Engineer. The org was about ten times the size of Alaya, the codebase was Java and microservices rather than our Node stack, and the processes were nothing like what I was used to.

**Task.** I had to bring Alaya's capabilities into Benevity's platform and keep shipping new features at the same time, without losing the speed we'd had as a startup.

**Action.** I spent the first month mostly reading and mapping the existing architecture before I proposed anything. I also went and met the platform and infrastructure teams early, because I knew I'd need their trust before any of my technical opinions would land. Once I understood the system, I started acting as an architecture liaison for the Europe-facing product, and I pushed for AI-assisted workflows across the engineering teams.

**Result.** We migrated Alaya's core features into the Benevity platform, I contributed to three major cross-team architecture decisions, and I ended up as the person two engineering teams came to for AI tooling.

**Reflection.** At the start I moved too fast and tried to fix things that weren't actually broken. Listening first made me much more effective. With arcOS I'd do the same thing in a compressed form: a few weeks running evaluations side by side with Despot, reading the agent traces, and only then deciding what to change.

---

## 3. An architecture call under pressure (strangler fig at Alaya)

**Likely questions:** "Tell me about a technical trade-off" / "How do you balance tech debt against customer demands?" / "How would you prioritise before a funding round?"

**Situation.** At Alaya our monolith was starting to crack under load. The team was split between a full microservices rewrite and a modular monolith, and our investors wanted new features, not a rewrite.

**Task.** I needed a decision we could defend, one that fixed the scaling problems without stopping delivery.

**Action.** Rather than argue it out, I ran a two-week spike comparing both approaches with prototype load tests. I took the trade-offs to the leadership team and investors with numbers instead of opinions. What I proposed was a strangler fig migration where we'd extract the two highest-traffic modules first and leave everything else in the monolith, with clear criteria for when any other module would be worth extracting.

**Result.** The first extracted module shipped in six weeks, the busiest endpoints got about 40% faster, and the rest of the monolith stayed stable all the way through the acquisition. We never needed a big rewrite.

**Reflection.** Getting people to accept "we're not rewriting everything" was harder than the engineering. The data helped, and next time I'd benchmark earlier to cut the debate short. A spin-out going into a funding round will have the same tension, and I'd rather show investors a system that works and a clear plan than a rewrite in progress.

---

## 4. Getting engineers to adopt AI tooling without authority

**Likely questions:** "How do you lead?" / "What's your experience with LLMs and agents in practice?" / "How would you build the technical team?"

**Situation.** At Benevity I was an IC with no direct reports, but I wanted two teams that didn't report to me to start working with AI-assisted development.

**Task.** I had to change how those engineers worked day to day without being anyone's manager.

**Action.** I began with three engineers who were already curious and built demos around their actual work, showing where the tools saved time and where they didn't. There was no mandate. I ran informal lunch sessions, wrote reusable prompt templates and put them in a shared repo, and kept notes on concrete wins, such as a PR review cycle that went about two hours faster.

**Result.** Within three months around 70% of engineers on both teams were using AI-assisted code review and generation, and I became the informal AI tooling lead across the org.

**Reflection.** Going without a mandate was slower, but it lasted, because the people who adopted it on their own terms argued for it better than I could. For a first arcOS hire I'd look for the same thing: people who already experiment with agents because they want to, not because the job ad asked for it.

---

## Questions worth asking back

- How are the 30+ agents evaluated today? Is there a regression set of past plots with known outcomes?
- What does one evaluation cost in model and data spend, and what do external users pay for it?
- How much of the system is tied to arcneo's internal workflows, and how much would a third-party developer use unchanged?
- After the spin-out, does Despot stay involved, and on what terms?
- What would make the December decision a "no"?
