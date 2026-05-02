# STAR Stories — n8n / Sr AI Engineer

---

## Story 1: Driving AI Adoption Without a Mandate

**Likely questions:** "Tell me about introducing a new technology to a skeptical team." / "How do you create change without formal authority?" / "Describe a time you changed how engineers work."

At Benevity I was a Senior Staff IC with no direct reports. I wanted to bring AI-assisted development workflows into two engineering teams that hadn't asked for them and weren't already using them. A top-down push would have gotten compliance on paper and changed nothing in practice.

I started with three engineers who were already curious. Rather than running abstract training sessions, I built demos around work they were already doing: PR review cycles, boilerplate generation, internal documentation. I committed reusable prompt templates to a shared repository so the knowledge wasn't gated behind going through me. Then I ran informal lunch-and-learn sessions with no required attendance and nothing mandatory attached.

Once those three engineers had real results to talk about, the sessions filled up on their own. I documented specific outcomes: one engineer saved roughly two hours on a PR review cycle using a template I'd written. That kind of concrete evidence moved people more reliably than any process deck could.

Within three months, roughly 70% of engineers on both teams were using AI-assisted workflows regularly. I became the informal AI tooling lead across the organization.

What stayed with me: adoption that starts from genuine curiosity is qualitatively different from a directive. Engineers who change on their own terms advocate to their peers, and that's how tooling actually sticks at scale.

---

## Story 2: Shipping LLM Workflows Into Production at Enterprise Scale

**Likely questions:** "Tell me about a production AI system you built." / "How do you handle reliability in AI-powered features?" / "What does it take to move LLM work from prototype to production?"

At Benevity I led the build of RAG-based document processing for internal knowledge retrieval across enterprise data sets. The challenge wasn't getting an LLM to return something plausible. It was building a pipeline that could fail gracefully, return consistent results under load, and be monitored in a way that flagged quality regressions before users noticed them.

The architecture used semantic embeddings over chunked document sets, retrieval with re-ranking, and a structured prompt layer that kept the LLM output within defined bounds. I added an evaluation harness that ran a fixed set of reference queries against each deployment and scored relevance automatically. Silent quality degradation was the failure mode I was most worried about; the eval system was designed to catch that specifically.

We shipped to internal users first, ran a two-week shadow period comparing outputs against baseline, and used that data to tune the chunking and retrieval thresholds before broad rollout. The final system handled the expected query volume with latency well within acceptable range and the eval harness caught two retrieval regressions in the first quarter that would otherwise have shipped undetected.

The reflection: building evals before you need them feels like overhead until the first time they catch a regression. I'd add evaluation infrastructure at week one of any LLM project now, not as an afterthought at the end.

---

## Story 3: Building the Alaya Platform From Zero

**Likely questions:** "Tell me about owning a product from day one." / "How do you make technical decisions under uncertainty?" / "Walk me through a system you designed end to end."

In 2016 I co-founded Alaya with no existing codebase and no initial customers. The mandate was to build a multi-tenant SaaS platform for enterprise employee engagement that could sign real enterprise clients within months, while staying small enough that the engineering team didn't kill its own velocity.

The first decision was the stack. Node.js, TypeScript, and PostgreSQL: not because they were the most fashionable choices that year, but because the risk profile was right. Low learning curve, fast to hire for, well-understood failure modes. The first working demo was ready at week twelve. From there I layered on multi-tenant data isolation, a proper API layer, impact reporting pipelines, and workflow-style campaign features as real client requirements arrived.

Growth exposed the decisions that hadn't been good enough. Multi-tenancy had assumptions baked in early that needed careful retrofitting as we scaled from five clients to fifty. Observability came too late; we flew partly blind during incidents that proper distributed tracing would have diagnosed in minutes rather than hours.

The platform reached production with 50+ enterprise clients across Switzerland and France. Benevity, a $1B+ Canadian company, acquired us in 2021. Five years of architectural decisions held up through acquisition-level technical due diligence.

I'd make the same core data model choices again. I'd add APM and tracing in month one instead of month thirty.

---

## Story 4: Making a Hard Architecture Call Under Pressure

**Likely questions:** "Tell me about a technical trade-off you navigated under time pressure." / "Describe a time you had to choose between correctness and delivery." / "How do you handle a rewrite debate?"

About two years into Alaya, the monolith was cracking under load. The team had split between two camps: a full microservices rewrite, and targeted fixes on the existing codebase. Investors wanted new features, not a six-month infrastructure pause. The debate had run for three weeks without resolution.

My job was to break the deadlock with something defensible, not with an opinion.

I ran a two-week spike, built minimal prototypes of both approaches, and generated actual throughput numbers from load tests. I brought that data to the CTO and investors and proposed a strangler fig approach: extract only the two highest-traffic modules first, validate the extraction pattern, and define specific criteria for when further extractions would make sense. No open-ended rewrite commitment and no vague promises.

We shipped the first extracted module six weeks later. Performance improved roughly 40% on those endpoints. The remaining monolith held stable all the way through the acquisition without a full rewrite ever being needed.

The hardest part wasn't the engineering. It was convincing people that not rewriting everything was the right call. Data carried that argument more reliably than framing did. I'd run the benchmarks two weeks earlier next time and cut the debate from three weeks to a few days.

---

## Story 5: Cross-Team Platform Work After Acquisition

**Likely questions:** "How do you earn credibility in an unfamiliar codebase?" / "Tell me about joining a large team mid-flight." / "How do you operate in a company 10x the size you came from?"

When Benevity acquired Alaya in 2021, I joined an engineering organization roughly ten times the size I'd come from, with a Java-based microservices platform I'd never touched and a mature architecture review process. My instinct was to start proposing improvements quickly. I had to deliberately slow that down.

I spent the first month mapping the existing architecture: reading code, attending design reviews, asking questions without pushing opinions. I built relationships with the platform and infrastructure teams before proposing anything. Once I had enough context and enough credibility, I started contributing. Within twelve months I'd contributed to three major cross-team architecture decisions on the Europe-facing product surface, completed the core migration of Alaya features into Benevity's platform, and driven CI/CD improvements that reduced deployment friction across two teams.

What I'd carry into n8n's context: platform work requires earning the trust of the teams building on top of you before asking them to change how they build. Engineers who were skeptical early became reliable collaborators once they saw I understood their constraints. That's a prerequisite for platform changes to actually land, not a soft skill.
