# STAR Stories — n8n / Staff Software Engineer, Core Workflow Engine

---

## Story 1: Building the Alaya Platform from Zero

**Likely questions:** "Tell me about building a production system from scratch." / "How do you make architectural decisions when you don't know the scale yet?" / "Walk me through a platform you owned end-to-end."

In 2016, I co-founded Alaya with no product, no codebase, and no prior codebase to lean on. The mandate was to build a multi-tenant SaaS platform for enterprise employee engagement that could sign paying clients within months, not quarters.

The first decision was the stack. I chose Node.js, TypeScript, and PostgreSQL for a straightforward reason: low framework risk, fast to hire for, and nothing exotic that would cost six months of learning curve we couldn't afford. The first working demo was ready at week twelve. From there I layered on the API design, multi-tenant data isolation, impact reporting pipelines, and workflow-style campaign features incrementally as real client requirements emerged.

Growth exposed the decisions that hadn't been good enough. Multi-tenancy had assumptions baked in early that needed careful retrofitting as we scaled from five enterprise clients to fifty. Observability came too late; we flew partly blind during incidents that proper distributed tracing would have diagnosed in minutes instead of hours.

The platform ran 50+ enterprise clients across Switzerland and France when Benevity, a $1B+ Canadian company, acquired us in 2021. Five years of architectural decisions held up through acquisition-level technical due diligence. I'd make the same core data model choices again. I'd add APM and tracing in month one instead of month thirty.

---

## Story 2: Making a Hard Architecture Decision Under Pressure

**Likely questions:** "Tell me about a technical trade-off you had to navigate under time pressure." / "Describe a time you had to choose between correctness and delivery speed." / "How do you handle a rewrite debate?"

About two years into Alaya, the monolith was cracking under load. The engineering team had split between two camps: a full microservices rewrite and targeted fixes on the monolith. Investors wanted new features, not a six-month infrastructure pause. The debate had run for three weeks without resolution.

My job was to break the deadlock with something defensible.

I ran a two-week spike, built minimal prototypes of both approaches, and generated actual throughput data with load tests. I brought numbers to the CTO and investors rather than opinions, and proposed a strangler fig approach: extract only the two highest-traffic modules first, validate the extraction pattern, and define specific criteria for when further extractions would make sense. No open-ended rewrite commitment.

We shipped the first extracted module six weeks later. Performance improved ~40% on those endpoints. The remaining monolith held stable through the acquisition without a full rewrite ever being needed.

The hardest part wasn't the engineering; it was convincing people that not rewriting everything was the right call. Data carried the argument more reliably than any framing did. I'd run the benchmarks two weeks earlier next time and cut the debate from three weeks to a few days.

---

## Story 3: Cross-Team Platform Work After Acquisition

**Likely questions:** "How do you earn credibility in a large, unfamiliar codebase?" / "Tell me about working across teams on a platform you didn't build." / "How do you operate in a company 10x the size you came from?"

When Benevity acquired Alaya in 2021, I joined a company with an engineering team roughly ten times the size of what I'd come from, a Java-based microservices platform I'd never touched, and a mature architecture review process.

My instinct was to move fast and start proposing improvements. I had to deliberately slow that down.

I spent the first month mapping the existing architecture: reading code, attending design reviews, and asking questions without pushing opinions. I built relationships with the platform and infrastructure teams before proposing anything. Once I had enough context and enough credibility, I started contributing. Within twelve months I'd contributed to three major cross-team architecture decisions affecting the Europe-facing product surface, completed the core migration of Alaya features into Benevity's platform, and driven CI/CD improvements that reduced deployment friction across two teams.

What I'd carry into n8n's context: platform work requires earning the trust of the teams building on top of you before asking them to change how they build. Engineers who were skeptical early became reliable collaborators once they saw that I understood their constraints. That's not a soft skill; it's a prerequisite for platform changes to actually land.

---

## Story 4: Driving Practice Changes Without Formal Authority

**Likely questions:** "How do you influence engineers who don't report to you?" / "Tell me about introducing a new practice to a skeptical team." / "What does staff-level impact look like in your mind?"

At Benevity I was a Senior Staff IC with no direct reports. I wanted to introduce AI-assisted development workflows across two engineering teams that hadn't asked for them. A top-down mandate would have gotten compliance on paper and ignored behavior in practice.

I started with three engineers who were already curious. I built internal demos showing concrete time savings on work they were already doing: PR review cycles, boilerplate generation, documentation. I committed reusable prompt templates to a shared internal repository so the knowledge didn't depend on going through me. Then I ran informal lunch-and-learn sessions with no required attendance and no mandate attached.

Once those three engineers had their own results to talk about, the sessions filled up. I documented specific outcomes: one engineer saved roughly two hours on a PR review cycle using a template I'd written. That kind of evidence moved people more reliably than any process deck could.

Within three months, roughly 70% of engineers on both teams were using AI-assisted workflows regularly. I became the informal AI tooling lead across the org.

What stayed with me: adoption that starts from genuine curiosity doesn't require policing. Engineers who change behavior on their own terms advocate for it to their peers. That's qualitatively different from a directive, and it's how platform and tooling improvements actually stick.
