# STAR+R Stories: Lead AI Engineer, Fund & Portfolio, Forestay Capital

The role is split three ways: building Forestay's internal AI stack (screening, document analysis, research automation), acting as a technical voice in diligence, and helping portfolio companies with AI readiness. Expect questions on building from zero, judgment under uncertainty, getting people to adopt AI tools, and working inside someone else's organisation. The posting also asks for "a brief note on an AI/data system built and its impact", so Story 1 and Story 4 should be ready in a two-minute version.

---

## Story 1: Building Alaya from zero to acquisition

**Likely questions:** "Tell me about something you built from scratch." / "You'd be the first AI engineer here. How do you start with nothing?"

**Situation.** In 2016 I cofounded Alaya, an employee purpose and engagement platform. There was no product, no customers, and no one else writing code.

**Task.** I had to design and build the whole platform while the business side was signing its first enterprise clients, so anything I built had to be demoable quickly and still survive real customers.

**Action.** I picked a boring stack on purpose, Node.js, React and PostgreSQL, because I'd rather spend the risk on the product than on the tooling. The core features were ready for a first demo in about three months. After that it grew in layers as customers asked for things: multi-tenancy, an API layer, impact reporting, even postal campaigns. Once there was enough traction I hired the first three engineers and set up CI/CD, code review and architecture docs so the codebase wouldn't depend on my memory.

**Result.** We got to 50+ enterprise clients across Switzerland and France, and Benevity, a Canadian unicorn valued at over USD 1B, acquired Alaya in 2021. Going through that acquisition from the founder's side meant our technical choices got examined in detail by an acquirer, which is the same kind of scrutiny Forestay applies before a lead ticket.

**Reflection.** I'd put observability in much earlier; we added proper APM late and paid for it in debugging time. I also underestimated how painful it is to retrofit multi-tenancy. For Forestay's stack the equivalent lesson is to build logging, cost tracking and an eval set on day one, not after the first model gives a partner a wrong answer.

---

## Story 2: A hard architecture call under pressure

**Likely questions:** "Tell me about a technical trade-off." / "How do you decide when you don't have enough information?" / "How would you judge whether a portfolio company's architecture holds up?"

**Situation.** At Alaya our monolith was starting to crack under load. Half the team wanted a full microservices rewrite. Investors wanted features, not a rewrite.

**Task.** I needed a decision I could defend to both the engineers and the investors, one that fixed the scaling problem without stopping delivery.

**Action.** Rather than argue it out, I ran a two-week spike comparing both options with prototype load tests. I brought the trade-offs to the leadership and investors as numbers, not opinions. We went with a strangler fig approach: pull out the two highest-traffic modules, leave the rest of the monolith alone, and write down clear criteria for when any other module would earn its own service.

**Result.** The first extracted module shipped in six weeks, and the busiest endpoints got roughly 40% faster. The rest of the monolith stayed stable all the way through the acquisition, and we never needed a big-bang rewrite.

**Reflection.** The hard part was persuading people that not rewriting everything was the right call, and data did most of that work. I'd benchmark even earlier next time to shorten the debate. It's also the habit I'd bring to diligence: when a company says it has a proprietary model, the first question is what the benchmark shows against a well-prompted off-the-shelf one.

---

## Story 3: Getting people to adopt AI tooling without a mandate

**Likely questions:** "How would you help a portfolio company become AI-ready?" / "How do you get non-technical people to trust AI tools?" / "Tell me about leading without authority."

**Situation.** At Benevity I was a Senior Staff IC with no direct reports. I wanted two engineering teams that didn't report to me to start using AI-assisted development.

**Task.** Change how people worked day to day, with no authority to tell them to.

**Action.** I started with three engineers who were already curious and worked with them until they had real wins to show. Then I ran informal lunch-and-learn sessions, which were just demos, no slides about transformation. I wrote reusable prompt templates and put them in a shared repo so nobody had to start from a blank prompt, and I kept a record of concrete time saved, like a PR review cycle that went about two hours faster.

**Result.** Within three months about 70% of engineers on both teams were using AI-assisted code review and generation, and I became the informal AI tooling lead for the org.

**Reflection.** It was slower than a top-down decree, but it stuck, because the people who adopted it on their own terms defended it to their colleagues. With Forestay's investment team, and with portfolio companies, I'd do the same thing: find the two people who already want it, make their work visibly easier, and let them do the convincing.

---

## Story 4: Working inside someone else's organisation after the acquisition

**Likely questions:** "How would you work with portfolio companies that didn't ask for your help?" / "Tell me about a time you had to adapt to a new environment."

**Situation.** After the acquisition in 2021 I joined Benevity as a Senior Staff Engineer, in an organisation roughly ten times Alaya's size, with a Java microservices codebase and processes that weren't ours.

**Task.** Bring Alaya's capabilities into Benevity's platform and keep shipping new features, without losing the speed we'd had as a startup.

**Action.** I spent the first month mapping the existing architecture before suggesting any change. I got to know the platform and infrastructure teams before pushing technical opinions on them. Over time I became the architecture liaison for the Europe-facing product and started pushing AI-assisted workflows across engineering.

**Result.** The core Alaya features were migrated into Benevity's platform, and I contributed to three major cross-team architecture decisions.

**Reflection.** Early on I moved too fast and tried to fix things that weren't broken. Listening first made me far more effective. A portfolio company CTO will feel the same way about someone from their investor turning up with a list of fixes, so I'd start with their problems, not mine.

---

## Prep notes: the technical questions to expect

These aren't stories yet, and nothing below should be claimed in the interview unless it's true. They're the gaps to prepare honestly.

**Evaluation and hallucination tracking.** They'll ask how you'd know the screening agent is wrong. Have a concrete answer: a golden set built from past deals the partners have already assessed, regression tests on every prompt or model change, and grounding checks that every claim in a memo links back to a source document.

**Python and SQL depth.** The posting leads with them. Be ready to talk through the Python and LLM work at Benevity specifically, and be precise about what went to production and what didn't.

**Degree requirements.** They ask for a Master's, PhD preferred. Don't dodge it; 17 years including a platform taken to acquisition is the counterweight, and say so plainly if it comes up.

**Why a fund and not a product company.** Have a short answer ready. One honest version: you'd get to see how dozens of AI companies are actually built, and the internal tooling is a real product with demanding users.
