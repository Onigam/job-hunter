# STAR+R Stories: Vivarus Diagnostics AG, Co-Founder / CTO

Vivarus is hiring a co-founder, not a senior employee. Expect the conversation to probe three things: can you own technology end to end with no team yet, can you make pragmatic calls that still hold up to regulators and investors, and do you know where your gaps are. The stories below are picked for that. Each one is written to be told out loud in about two minutes.

---

## Story 1: Building Alaya from a blank page to acquisition

**Likely questions:** "Why should we trust you with a founding seat?" / "Tell me about building something from zero." / "How do you handle ambiguity?"

**Situation.** In 2016 I cofounded Alaya, an employee purpose and engagement platform. There was no product, no customers and no code, just a business team that was already talking to enterprise prospects.

**Task.** My job was to design and build the whole platform, first on my own and then with a small team, fast enough that the business could sign its first clients without me painting us into an architectural corner.

**Action.** I picked a deliberately boring stack, Node.js, React and PostgreSQL, because I needed something I could move quickly in and hire for later. The first demo-ready version took about three months. From there it grew in layers: a multi-tenant architecture, an API layer, impact reporting, postal campaigns. Once there was enough traction, I hired and onboarded the first three engineers and put the basics in place so they could work without me in every decision, meaning CI/CD, a code review habit and written architecture notes.

**Result.** The platform reached 50+ enterprise clients across Switzerland and France, and Benevity, a Canadian company valued above $1B, acquired Alaya in 2021. The technical due diligence went through on the architecture we'd built, not on a rewrite.

**Reflection.** Two things I'd change. Observability came far too late; we added proper APM only after we'd already had a few blind incidents. And I underestimated how expensive it is to retrofit multi-tenancy. For Vivarus the equivalent lesson is obvious: traceability and versioning of every inference can't be bolted on after the external partner hands over the code, they have to be the first thing designed.

---

## Story 2: Choosing a strangler fig over a rewrite, with data instead of opinions

**Likely questions:** "Tell me about a technical trade-off under pressure." / "How do you balance rigor with delivery?" / "How would you handle the migration from our external developers?"

**Situation.** At Alaya the monolith was starting to crack under load on a few endpoints. Half the team wanted a full microservices rewrite. Investors, meanwhile, wanted features, not a rewrite.

**Task.** I had to make a call that we could defend on both fronts, one that fixed the scaling problem without freezing the roadmap for months.

**Action.** Rather than argue it in meetings, I ran a two-week spike. We prototyped both approaches and load-tested them, and I brought the results to the leadership team and investors as numbers rather than preferences. The proposal was a strangler fig migration: pull out the two highest-traffic modules first, leave everything else in the monolith, and write down explicit criteria for when any further module would earn its own service.

**Result.** The first extracted module shipped in about six weeks and the busiest endpoints got roughly 40% faster. The rest of the monolith stayed stable all the way through the acquisition, and we never needed the big-bang rewrite.

**Reflection.** The hardest part was social, convincing people that not rewriting was the ambitious choice. Data ended the debate, so next time I'd benchmark earlier and shorten the arguing phase. It's also the approach I'd bring to the Vivarus transition: take ownership of the external codebase module by module, with written criteria for what gets rebuilt, instead of a clean-slate rewrite during a seed round.

---

## Story 3: Joining a company ten times our size after the acquisition

**Likely questions:** "Tell me about taking over a system someone else built." / "How do you work with people who don't think like engineers?"

**Situation.** After the acquisition in 2021 I joined Benevity as a Senior Staff Engineer. The engineering org was about ten times the size of Alaya's, the stack was Java microservices rather than Node, and the processes and culture were completely different.

**Task.** Alaya's capabilities had to move into Benevity's platform while we kept shipping new features, and I had to do it without the authority I'd had as a founder.

**Action.** I spent the first month mostly reading and mapping the existing architecture before proposing anything. I built relationships with the platform and infrastructure teams first and only then started pushing technical opinions. Over time I became the architecture contact for the Europe-facing product surface, which meant translating between product, infra and a handful of teams that each had their own priorities.

**Result.** The core Alaya features were migrated into Benevity's platform, and I contributed to three major cross-team architecture decisions over the following years.

**Reflection.** Honestly, I moved too fast at first and tried to fix things that weren't broken in the new org. Slowing down and listening made me far more effective. At Vivarus the same humility applies in the other direction: the founders and the regulatory lead know the clinical side far better than I do, and my job is to understand it before I design around it.

---

## Story 4: Getting two teams to adopt AI tooling without being their manager

**Likely questions:** "How do you lead without formal authority?" / "Tell me about your hands-on AI experience." / "How would you build a team culture from scratch?"

**Situation.** At Benevity I was an IC with no direct reports, but I wanted two teams that didn't report to me to adopt AI-assisted development, including code review, generation and prompt patterns.

**Task.** The goal was to change how engineers actually worked day to day, with no mandate behind me.

**Action.** I started with three engineers who were already curious and built small internal demos that showed concrete time saved on real work, not toy examples. From there I ran informal lunch and learn sessions, wrote reusable prompt templates and committed them to a shared repo so people could pick them up without asking me. I also kept a running record of results, things like cutting about two hours off a PR review cycle, because engineers trust evidence more than enthusiasm.

**Result.** Within about three months roughly 70% of engineers on both teams were using AI-assisted review and generation, and I ended up as the informal AI tooling lead across the org.

**Reflection.** The no-mandate route was slower but it stuck, because the people who adopted it on their own terms went on to defend it. The lesson for evaluation work carries over directly. Once you give people a way to measure whether a model helped or hurt, adoption follows, and so does trust.

---

## Preparing for the gap questions

These aren't STAR stories, but they will come up and they deserve prepared, honest answers. Don't claim experience that isn't there.

**"You don't have a PhD or published ML research."** The posting explicitly accepts significant production shipping experience instead. Point to 17+ years of production software, a platform built from zero through an acquisition, and five years of LLM integration, embeddings-based semantic search and multi-agent workflows at Benevity. Offer to share reviewable work on GitHub (github.com/Onigam) and walk through it.

**"Have you built a Graph-RAG or knowledge-graph retrieval system?"** Answer only with what you've actually built. If the honest answer is that your retrieval work has been embeddings and hybrid search rather than a full knowledge graph over HPO or Orphanet, say that, then explain how you'd approach it: criteria-first graph construction from the published diagnostic criteria, hybrid retrieval, and an evaluation set adjudicated by clinicians before any tuning.

**"You haven't worked under IEC 62304 or ISO 13485."** True. What you bring is the habit of treating traceability, versioning and reproducibility as design constraints rather than paperwork. The site already commits to auditability by construction, and that's the engineering half of 62304. Ask how the regulatory lead wants to split ownership of the QMS and software lifecycle documentation.

**"No FHIR or EHR experience."** Say so plainly. API design and data integration across messy enterprise systems is a big part of what you've done for years, and FHIR is a well-documented standard you'd ramp on quickly. Better still, spend a weekend with a public FHIR sandbox before the second interview so you can speak to it from hands-on experience.
