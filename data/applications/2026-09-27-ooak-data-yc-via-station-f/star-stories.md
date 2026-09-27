# STAR+R Stories: Ooak Data, Head of Engineering

The posting describes three layers: lead the ingestion and anonymization squad, grow the engineering team from a few people to 15-30, and set engineering practices for the whole company, while staying hands-on and setting technical direction with Thomas (CTO). These four stories map onto that. There are two honest gaps (team size and the Python/data-engineering stack), and a short note at the end covers how to handle them without dodging.

---

## 1. Building the platform and the first team from nothing (Alaya, 2016-2021)

**Likely questions:** "Tell me about building a team from scratch." / "How did you structure engineering in the early days?" / "How do you deal with ambiguity?"

**Situation.** In 2016 I cofounded Alaya, an employee purpose and engagement platform. There was no product, no customer and no code, and the business side was already in conversations with large companies that wanted a demo.

**Task.** I had to build the whole platform, alone at first, and then turn it into something a small team could own without everything going through me. All of that while enterprise clients were signing.

**Action.** I picked a deliberately boring stack, Node.js, React and PostgreSQL, because I could run it in production without surprises. The first three months went into the smallest version a real buyer could see. As clients came in, I grew it into a multi-tenant architecture with an API layer, impact reporting and postal campaigns. When I hired the first three engineers, I spent real time on the things that let people ship without asking me: CI/CD, a code review habit that people actually respected, and architecture docs short enough to be read. Onboarding was the part I underestimated, so I started writing down every question a new hire asked in their first two weeks and fed it back into the docs.

**Result.** Alaya reached 50+ enterprise clients across Switzerland and France, and Benevity, a Canadian unicorn valued at over $1B, acquired it in 2021. The platform went through technical due diligence without surprises, which was the most honest review our early decisions ever got.

**Reflection.** Observability came far too late; for a while we found out about problems from customers. Multi-tenancy was also painful to retrofit. At Ooak both lessons are sharper, because each ingested company ecosystem is effectively a tenant with its own sensitive data, so isolation, access control and tracing need to exist before the second customer, not after the twentieth.

---

## 2. A hard architecture call under delivery pressure (Alaya)

**Likely questions:** "Tell me about a technical trade-off." / "How would you set technical direction with a CTO?" / "How do you handle tech debt when the business wants features?"

**Situation.** Our monolith at Alaya was starting to crack under load on a few endpoints. The team was split between a full microservices rewrite and staying put, and investors were pushing for features, not rewrites.

**Task.** Make a decision we could defend, one that fixed the scaling problem without stopping delivery for months.

**Action.** Rather than argue it out in meetings, I ran a two-week spike with prototype load tests on both approaches. I took the numbers to the leadership team and investors instead of opinions. The proposal was a strangler-fig migration: pull out the two highest-traffic modules, leave the rest monolithic, and write down explicit criteria for when anything else would earn its own service. That last part mattered more than I expected, because it ended the recurring "should we split this too?" debate.

**Result.** The first extracted module shipped in about six weeks. The busiest endpoints got around 40% faster, and the remaining monolith stayed stable through the acquisition. Nobody had to sell a big-bang rewrite.

**Reflection.** The hardest part was persuading people that not rewriting everything was the ambitious choice. I'd benchmark earlier next time to shorten the debate. For Ooak's ingestion pipeline I'd apply the same idea: decide up front what earns a separate stage or service (anonymization, entity resolution across tools, validation) and keep everything else simple until volume proves otherwise.

---

## 3. Changing engineering practices without authority (Benevity, AI tooling)

**Likely questions:** "How do you drive engineering practices across a company?" / "How do you get people to adopt a new process?" / "Tell me about influencing without a mandate."

**Situation.** At Benevity I was a Senior Staff IC with no direct reports. I wanted two teams that didn't report to me to adopt AI-assisted code review and generation.

**Task.** Change how engineers actually worked day to day, without being their manager and without a top-down decree.

**Action.** I started with three engineers who were already curious and built small internal demos around their real work, not toy examples. Then came informal lunch-and-learn sessions with no mandate attached. I committed reusable prompt templates to a shared repo so anyone could pick them up, and wrote down concrete wins as they happened, like a PR review cycle that went about two hours faster.

**Result.** Within about three months roughly 70% of engineers on both teams were using AI-assisted review and generation, and I became the informal AI tooling lead across the org.

**Reflection.** The no-mandate approach was slower, but it stuck, because the people who adopted it on their own terms defended it to their peers. As Head of Engineering I'd have the authority to mandate things. I'd still start this way for most practices and keep mandates for the non-negotiables, which at Ooak means security, access control and auditability on customer data.

---

## 4. Integrating into a larger org and holding the bar (Benevity, 2021)

**Likely questions:** "Tell me about working through an acquisition." / "How do you work with enterprise-grade requirements?" / "Tell me about a time you were wrong."

**Situation.** After the acquisition I joined Benevity as Senior Staff Engineer. The org was about ten times Alaya's size, the codebase was Java microservices instead of our Node monolith, and the processes were completely different.

**Task.** Bring Alaya's core capabilities into Benevity's platform while we kept shipping, so customers who'd bought Alaya didn't see us stall.

**Action.** My first instinct was to fix things quickly, and I pushed a couple of changes before I really understood why the existing setup looked the way it did. That didn't land well. So I reset: spent a month mapping the architecture, built relationships with the platform and infrastructure teams before pushing technical opinions, and only then proposed changes. I ended up as a cross-team architecture liaison for the Europe-facing product surface.

**Result.** Alaya's core features were migrated into Benevity's platform, and I contributed to three major cross-team architecture decisions over that period.

**Reflection.** Listening first made me more effective, and it's the thing I'd lean on at Ooak when working with Thomas on technical direction. He's built the first version and knows why it's shaped the way it is. My job in the first few weeks would be to understand that before changing it.

---

## Handling the two gaps honestly

**"Have you grown a team to 15-30 engineers?"** No, and it's better to say so plainly. At Alaya I hired and onboarded the first engineers and set up the practices; at Benevity I influenced two teams and cross-team architecture without a reporting line. The answer to give: "I haven't run an org of 25. I've built a team and its practices from zero, and I've worked inside an org ten times that size, so I've seen both ends of the curve you're asking me to travel. Here's what I'd put in place at 8, 15 and 25 people." Then be specific: squads aligned to pipeline stages, an on-call rotation once customers depend on ingestion SLAs, a written hiring loop before the fifth hire, and a lightweight RFC process for anything touching data access.

**"Our stack is Python, SQL, Dagster/Airflow on GCP."** Most of my production work is TypeScript/Node and Postgres on AWS, with Python on the AI/LLM side. Don't overclaim. Say: "SQL and distributed systems carry over directly; the Python data tooling I'd get productive in fast, and in a role that steps back from hands-on as the team grows, the bigger question is whether I can hire people who are better than me at Dagster. I can." Worth brushing up on Dagster assets and partitions before the technical round.
