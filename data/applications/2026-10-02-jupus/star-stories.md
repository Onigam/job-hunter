# STAR+R Stories: JUPUS, Engineering Manager, Applied AI

_Picked for an EM role with five direct reports and ownership of retrieval, evals and agent design. Expect questions on hiring, setting a quality bar, technical judgement under pressure, and why you want to manage now._

---

## 1. Building and leading the first engineering team at Alaya

**Likely question:** "Tell me about your experience managing engineers." / "How do you build a team from scratch?"

**Situation.** In 2016 I co-founded Alaya, an employee purpose and impact platform. There was no product, no customers and no team, just a business side that was already talking to its first enterprise prospects.

**Task.** My job as Head of Technologies was to get a working platform in front of those prospects fast, and then turn a one-person codebase into something a team could own without me being the bottleneck.

**Action.** I picked a deliberately boring stack, Node.js, React and PostgreSQL, because I knew I'd be hiring people to work on it and didn't want exotic choices to slow onboarding. The first demo-ready version took about three months. Once we had paying clients I hired our first three engineers, and the thing I spent the most time on wasn't code. I set up CI/CD, made code review a habit rather than a gate, and wrote the architecture docs I wished I'd had, so a new hire could ship something real in their first week. As the product grew into multi-tenancy, an API layer and impact reporting, I handed whole areas to those engineers instead of reviewing every line.

**Result.** We got to 50+ enterprise clients across Switzerland and France, and Benevity, a Canadian unicorn valued at over $1B, acquired us in 2021. The platform the team built is what they bought.

**Reflection.** I'd add observability much earlier; we bolted on proper APM late and it cost us debugging time. On the people side, I held on to some areas too long before delegating. It's a lesson I'd bring to JUPUS: with five reports, my job is to make their calls better, not to make the calls for them.

---

## 2. A hard architecture call when investors wanted features

**Likely question:** "Tell me about a technical trade-off you had to defend." / "How do you decide between building fast and building right?"

**Situation.** Our monolith at Alaya was starting to crack under load. Half the team wanted a full microservices rewrite, and the investors wanted neither; they wanted new features.

**Task.** I had to make a decision I could defend to both groups, one that fixed the real scaling problem without freezing the roadmap.

**Action.** Rather than settle it in a meeting, I ran a two-week spike with prototype load tests on both approaches. I took the numbers to the leadership team and the investors and framed it as a trade-off, not a preference. What I proposed was a strangler fig: pull out the two highest-traffic modules first, leave everything else in the monolith, and write down the criteria that would justify extracting anything else later. That last part mattered, because it stopped the debate from coming back every sprint.

**Result.** The first extracted module shipped in about six weeks and those endpoints got roughly 40% faster. The rest of the monolith stayed stable all the way through the acquisition, and we never needed the big-bang rewrite.

**Reflection.** Data ended the argument, so I'd benchmark earlier next time and save a week of opinions. It's the same instinct I'd apply to retrieval and agent design at JUPUS. When there's a debate about chunking strategy or whether to add another agent step, the answer should come from the eval suite, not from whoever argues best.

---

## 3. Getting two teams to change how they work, without authority

**Likely question:** "How do you drive adoption of a new practice?" / "How do you set standards people actually follow?"

**Situation.** At Benevity I was a Senior Staff IC with no direct reports. I was convinced AI-assisted development would save real time, but the two teams I wanted to bring along didn't report to me and had no reason to listen.

**Task.** Change daily habits across both teams without a mandate.

**Action.** I started small, with three engineers who were already curious. We built a few internal demos around actual work, not toy examples, and tracked what changed; one PR review cycle dropped by about two hours, and that story did more than any slide. From there I ran informal lunch-and-learn sessions and put reusable prompt templates in a shared repo so people could copy what worked instead of starting cold.

**Result.** Within three months about 70% of engineers on both teams were using AI-assisted review and generation, and I ended up as the informal AI tooling lead across the org.

**Reflection.** It was slower than a top-down rollout, but it stuck, because the people who adopted it on their own became its advocates. As a manager I'd have the authority to mandate things, and I think I'd still mostly not use it. Quality standards for evals land better when the team helped write them.

---

## 4. Joining a much bigger org after the acquisition

**Likely question:** "Tell me about a time you had to adapt." / "How would you approach your first 90 days here?"

**Situation.** After the acquisition I moved from a small team I'd built to Benevity, roughly ten times larger, with a Java microservices codebase and processes I didn't know.

**Task.** Bring Alaya's capabilities into the Benevity platform and keep shipping new work, without losing the velocity we'd had as a startup.

**Action.** My first month was mostly listening. I mapped the existing architecture before suggesting anything, and spent time with the platform and infra teams before I pushed any opinions. Over time I became the architecture liaison for the Europe-facing product surface, which meant translating between teams that didn't always share context.

**Result.** We migrated the core Alaya features into Benevity's platform, I contributed to three major cross-team architecture decisions, and I became the go-to person for AI tooling across two teams.

**Reflection.** Honestly, I moved too fast at the start and tried to fix things that weren't broken. Slowing down made me far more effective. If I join JUPUS, the first weeks would be one-on-ones with each of the five engineers and reading the eval results, not redesigning the retrieval stack.

---

## Prep note: the experience gap

The posting asks for prior management with direct reports and 3+ years at a company where agentic AI was core to the product. Be straight about it if asked. The management experience is real but small (leading Alaya's first engineers as Head of Technologies). The AI work at Benevity is LLM integration, semantic search, multi-agent workflows and AI-assisted engineering, not an agentic product as the core offering. Don't stretch either point; lead with the founder ownership and the quality-first instinct, and let them decide.
