# STAR Stories — SanaFin Founding Engineer Interview

---

## Story 1: Building Alaya from Zero to Acquisition

**Best for:** "Tell me about a time you built something from scratch" / "What does founding engineer mean to you?"

In 2016, I co-founded Alaya as the sole technical founder. We had no product, no customers, and no runway — just a thesis about employee purpose and a blank page. My task was to architect and ship a working platform fast enough to close the first enterprise clients, while designing it to hold up as we scaled.

I chose a pragmatic stack: Node.js, React, and PostgreSQL. The decision wasn't about what was fashionable, it was about what I could build quickly and maintain alone until we could hire. Multi-tenancy, data isolation per client, and a clean API layer all went in from the start, because I'd seen what retrofitting those looks like and it's expensive. Within three months we had a demo worth showing. Within a year we had 50+ enterprise clients across Switzerland and France. I brought in the first three engineers and built the code review culture and CI/CD setup alongside the product work.

Benevity acquired us in 2021. The acquisition validated the technical decisions, but the real lesson was about what to do earlier: I added proper APM too late and we spent weeks reconstructing context we should have had from day one. Next time I'd instrument before I feel the need to.

---

## Story 2: Making a Hard Architecture Decision Under Investor Pressure

**Best for:** "Tell me about a technical trade-off you navigated" / "How do you handle pressure to move fast vs. move right?"

At Alaya, around 2019, our monolith was showing strain. The engineering team was split: full microservices rewrite versus a modular monolith. Investors were pushing for new product features, not infrastructure work. I was the one who had to make the call and defend it.

I ran a two-week technical spike comparing both paths, including prototype load tests. Rather than arguing from intuition, I brought metrics to the CTO and investors: what the rewrite would cost in weeks of engineering time, what the modular approach could achieve in a third of that. I proposed a strangler-fig migration, starting with the two highest-traffic modules and leaving the rest untouched until we had evidence they needed it.

The first extracted module shipped in six weeks. Performance on those endpoints improved ~40%. The rest of the monolith stayed stable through the acquisition. We never did a big-bang rewrite. The hardest part wasn't the engineering, it was convincing people that "not rewriting everything" was a legitimate technical position. Data made that argument for me.

---

## Story 3: Navigating a 10x Scale Change After Acquisition

**Best for:** "Tell me about adapting to a new environment" / "How do you work in ambiguous or rapidly changing contexts?"

When Benevity acquired us, I went from a team of six to an engineering organization ten times that size. Different codebase (Java, microservices), different processes, different culture. My role was Senior Staff Engineer, which meant I had opinions I needed to land without any direct authority.

The first thing I did was slow down and map the existing architecture before touching anything. That took a month and it was the right call. I built relationships with the platform and infrastructure teams before proposing changes, because I'd seen what happens when someone from an acquired company walks in with improvements and skips that step. Once I had credibility, I drove adoption of AI-assisted development practices across two teams: started with three engineers who were already curious, built internal demos showing concrete time savings, ran informal sessions rather than top-down mandates. Within three months, roughly 70% of engineers on both teams were using the tooling regularly.

The reflection is about pace. I moved too fast in the first few weeks and had to backtrack. Listening first, even when you think you know what's broken, makes you more effective in the end.

---

## Story 4: Translating Academic Models into Shippable Product

**Best for:** "Tell me about working with non-engineering stakeholders" / "How do you handle complex domain requirements?"

At Alaya, we built an impact reporting feature that connected employee actions to measurable social outcomes. The domain was complex: our clients' sustainability teams had specific frameworks (GRI, UN SDGs) they needed us to map against, and the models were built by people who thought in spreadsheets and academic papers, not APIs.

My task was to take those models and translate them into a data pipeline and reporting engine that non-technical stakeholders could trust and configure. I ran discovery sessions with the client sustainability leads to understand what they actually cared about versus what was theoretical overhead. Then I built a flexible schema that could accommodate new frameworks without code changes, exposed it through a configuration UI, and built an audit trail so clients could trace any number back to the raw data that produced it.

The feature became a differentiator in enterprise sales. Clients mentioned it in renewal conversations. What I'd do differently: involve the domain experts in reviewing the data model earlier rather than just in requirements gathering. There were a few conceptual mismatches that I caught during QA that would have been cheaper to fix three weeks earlier.
