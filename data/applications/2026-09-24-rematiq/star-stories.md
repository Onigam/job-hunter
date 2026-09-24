# STAR+R Stories: Principal Software Engineer, Platform @ REMATIQ

These are picked for a Principal IC role at a seed-stage company (Project A-led €5.4M seed, 2025). The interviewers will want to know three things: can you make architecture calls the founders will trust, can you raise quality without slowing a small team down, and can you lead engineers who don't report to you. Every story below comes from `profile/star-bank.md`. Nothing's been added to them.

---

## 1. Making a hard architecture call under delivery pressure

**Likely prompts:** "Tell me about a technical trade-off you owned." / "How do you decide when to split a service out?" / "How do you handle tech debt when the business wants features?"

**Situation.** At Alaya our monolith was starting to crack under load on a few endpoints. Half the team wanted to rewrite everything as microservices, and our investors were asking for new features, not a rewrite.

**Task.** Somebody had to make a call we could defend on both fronts, long-term scalability and short-term delivery, and that fell to me.

**Action.** Rather than argue from opinion, I ran a two-week spike and prototyped both approaches, with load tests on each. When I took the results to the CTO and the investors, the discussion was about numbers, which lowered the temperature a lot. My proposal was a strangler-fig migration: pull out the two highest-traffic modules, leave everything else in the monolith, and write down clear criteria for when any other module would earn its own service. Those criteria mattered more than I expected, because they stopped the rewrite debate from coming back every sprint.

**Result.** The first extracted module shipped in about six weeks, and the busiest endpoints got roughly 40% faster. The rest of the monolith stayed stable all the way through the acquisition, and we never needed a big-bang rewrite.

**Reflection.** The hardest part wasn't technical. It was convincing people that not rewriting everything was the ambitious choice. Next time I'd benchmark earlier to cut the debate shorter. For REMATIQ I'd use the same thinking on a Turborepo monorepo with DBOS workflows: keep things together until a boundary clearly pays for itself.

---

## 2. Building a platform from zero to acquisition

**Likely prompts:** "What's the most complex system you've owned end to end?" / "How do you set engineering standards in an early team?" / "Tell me about working with founders on a roadmap."

**Situation.** I co-founded Alaya in 2016. We had no product and no customers, and the business side was already trying to sign enterprise clients.

**Task.** My job was to design and build the whole platform, alone at first and then with a team, fast enough to support the sales pipeline without painting us into a corner.

**Action.** I chose a stack I knew would hold up without over-engineering it: Node.js, React and PostgreSQL. The core features were ready for a first demo in about three months. After that the platform grew one piece at a time, with multi-tenancy, an API layer, impact reporting and postal campaigns, each shaped by what the clients in front of us actually needed. Once I hired the first three engineers, I set up CI/CD, a real code review habit and architecture docs, so decisions didn't live only in my head.

**Result.** We reached production with 50+ enterprise clients across Switzerland and France, and Benevity, a Canadian unicorn valued at over $1B, acquired Alaya in 2021. Their due diligence was a fairly direct test of the technical decisions we'd made since day one.

**Reflection.** I'd have put in observability much earlier; proper APM came late and we paid for it in debugging time. I also underestimated how expensive it is to retrofit multi-tenancy. That's relevant to REMATIQ: customer isolation, audit trails and tracing (OpenTelemetry and Langfuse are already in your stack) are much cheaper to get right at seed stage than after the Series A.

---

## 3. Leading engineers who don't report to you

**Likely prompts:** "How do you lead as a Principal without direct reports?" / "Tell me about changing how a team works." / "How do you raise the bar on engineering practices?"

**Situation.** At Benevity I was a Senior Staff IC with no direct reports. I wanted to bring AI-assisted development into the daily work of two teams, and neither of them reported to me.

**Task.** Engineers had to change the way they worked, and I had no authority to tell them to.

**Action.** I started small, with three engineers who were already curious. I built internal demos that showed real time saved on real tasks instead of slides, and I ran informal lunch-and-learns where nothing was mandatory. The prompt templates that worked went into a shared repo, so people could copy them and improve them. Whenever a concrete win came up, like a PR review cycle that got about two hours shorter, I wrote it down and shared it.

**Result.** About three months later, around 70% of the engineers on both teams were using AI-assisted code review and generation, and I'd become the informal AI tooling lead across the org.

**Reflection.** Skipping the mandate made it slower, but the change stuck. The people who adopted it on their own terms defended it better than any top-down decision could have. At REMATIQ, where Cursor and Claude Code are already standard, the open question is less about adoption and more about guardrails: what AI-generated code needs before it goes into a regulated product.

---

## 4. Working inside a much larger organization after an acquisition

**Likely prompts:** "Tell me about a time you had to adapt to a new codebase or culture." / "How do you work across product, ML and design?" / "Tell me about a mistake you made."

**Situation.** After the acquisition in 2021 I joined Benevity as a Senior Staff Engineer. The engineering org was about ten times the size of Alaya's, and it ran on a Java microservices codebase with its own processes and culture.

**Task.** I had to fold Alaya's capabilities into Benevity's platform and keep shipping new features at the same time, without losing the speed we'd had as a startup.

**Action.** My first month was spent mapping the existing architecture before I proposed anything. I got to know the platform and infra teams before pushing technical opinions on them. As time went on I became the cross-team architecture contact for the Europe-facing product, which mostly meant translating between what product wanted and what the platform could safely do.

**Result.** We migrated Alaya's core features into Benevity's platform. I also contributed to three major cross-team architecture decisions and became the person teams came to for AI tooling.

**Reflection.** Honestly, I moved too fast at the start and tried to fix things in the new org that weren't broken. When I slowed down and listened first, I got a lot more done. That's how I'd walk into REMATIQ too: the founders and the ML team have context I won't have in week one, and I'd rather earn the right to change things.

---

## Gaps to prepare for (be upfront about them)

**No MedTech or regulatory background.** Don't bluff about MDR or FDA. Say it plainly, then point out that the engineering problem underneath, traceable and reproducible pipelines that turn unstructured input into structured data other systems depend on, is one you've worked on. Before the call, read the basics of MDR technical documentation and IEC 62304 so your questions are sharp.

**Azure.** Your cloud experience is mostly AWS. The concepts carry over (Blob Storage vs S3, AKS vs EKS, Azure OpenAI vs direct API access). Say so, and don't pretend it's the same thing.

**DBOS and Prisma.** Worth a weekend with the DBOS TypeScript SDK before a technical round, so you can talk about durable workflows, idempotency and Postgres-backed step checkpoints with some hands-on experience.
