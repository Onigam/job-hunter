# STAR Stories — Jobgether AI Platform Engineer

---

## 1. Building AI Tooling Adoption Without a Mandate

**Best for:** "Tell me about driving change without authority" / "How do you influence peers?" / "Describe a time you improved engineering practice"

**Situation:** At Benevity, I was a Senior Staff IC with no direct reports. The org had started experimenting with GitHub Copilot, but adoption was scattered and nobody was measuring whether it actually helped. I thought there was a real opportunity to build shared AI-assisted workflows, but I had no authority to mandate anything across the two teams I worked with.

**Task:** Get engineers to meaningfully adopt AI tooling and, more importantly, understand what "meaningful adoption" even meant so we could improve it over time.

**Action:** I started with three engineers who were already curious. Instead of running a formal program, I built small internal demos that showed concrete, measurable time savings on real tasks they cared about: PR review cycles, boilerplate generation, test writing. I ran informal sessions, no slides, no mandate, just "here's what I tried this week." I also created a shared repo of reusable prompt templates and wrote short internal notes documenting actual time saved, like "shaved 2 hours off a review cycle on this PR." Those concrete data points did more work than any presentation would have.

**Result:** Within three months, roughly 70% of engineers across both teams had integrated AI-assisted workflows into their daily practice. I became the go-to person for AI tooling questions across the broader engineering org, and the shared prompt library got adopted by teams I hadn't even pitched.

**Reflection:** The mandate-free approach was slower to start but it created genuine buy-in. Engineers who adopted it on their own terms became internal advocates, which I couldn't have manufactured top-down. I'd use this pattern again deliberately: seed with early adopters, measure visibly, let the results do the convincing.

---

## 2. Building Alaya's Platform from Zero to Acquisition

**Best for:** "Tell me about building something from scratch" / "How do you handle ambiguity?" / "Describe a founding engineer moment"

**Situation:** In 2016, I co-founded Alaya, a purpose and impact platform for employee engagement. We had no product, no customers, and no engineering team. The business had already started signing early conversations with enterprise clients, which meant the timeline pressure was immediate.

**Task:** Architect and ship a production-ready platform fast enough to support our first clients, while making technical decisions that wouldn't lock us in as we grew.

**Action:** I chose a pragmatic stack, Node.js, React, PostgreSQL, that could scale without over-engineering, and focused on getting to a first working demo within three months. From there, I built iteratively: multi-tenant architecture, API layer, impact reporting, postal campaigns. As we grew, I hired and onboarded the first three engineers, set up CI/CD, introduced code review practices, and kept the architecture lightweight enough that they could contribute immediately without weeks of ramp-up.

**Result:** The platform reached production with 50+ enterprise clients across Switzerland and France. In 2021, Benevity, a Canadian unicorn with a valuation above $1B, acquired Alaya. The technical decisions we made in those first months held up through five years of growth and the acquisition itself.

**Reflection:** I'd have invested in observability much earlier. We added proper APM late, and it cost us debugging time. I also underestimated the pain of retrofitting multi-tenancy. Next time I'd design for it from day one, even if the first version is just a tenant ID on every row.

---

## 3. Navigating a Hard Architecture Decision Under Delivery Pressure

**Best for:** "Tell me about a technical trade-off" / "How do you handle tech debt?" / "Describe a time you pushed back on a rewrite"

**Situation:** At Alaya, we had a monolith that was starting to show scaling cracks under growing load. The engineering team was split: some pushed for a full microservices rewrite, others wanted to stay put. Investors were pushing for new features, not rewrites. I needed to make a defensible call.

**Task:** Decide between a full rewrite and a more incremental approach, make the case to the CTO and to investors, and then actually execute it.

**Action:** Before proposing anything, I ran a two-week technical spike comparing both approaches with prototype load tests on the actual bottleneck endpoints. I presented the results with concrete metrics, not opinions, and proposed a "strangler fig" approach: extract the two highest-traffic modules first, keep the rest monolithic, and define clear criteria for when to extract more. That gave the team a path forward without betting everything on a big-bang rewrite.

**Result:** We shipped the first extracted module in six weeks. Performance improved roughly 40% on the busiest endpoints. The rest of the monolith stayed stable all the way through the acquisition. We never needed the full rewrite.

**Reflection:** The hardest part wasn't the technical decision, it was convincing people that "not rewriting everything" was the right call. The data from the spike was essential. I'd do the benchmarking even earlier next time to cut the debate shorter.

---

## 4. Integrating into a 10x Larger Engineering Org Post-Acquisition

**Best for:** "Tell me about navigating change" / "How do you get up to speed in a new environment?" / "Describe cross-team collaboration at scale"

**Situation:** When Benevity acquired Alaya in 2021, I went from a 10-person team to an engineering org 10 times larger. Different codebase, different culture, different processes. Java and microservices instead of Node.js. My instinct was to start proposing improvements immediately, which was wrong.

**Task:** Integrate into the new org as a Senior Staff Engineer in a way that was actually useful, without alienating the people I needed to work with.

**Action:** I spent the first month just mapping. Architecture diagrams, reading old RFCs, meeting the platform and infra teams before suggesting anything. Once I had a clearer picture, I focused on building relationships in areas where I had something concrete to offer, particularly AI-assisted workflows, which the org hadn't invested in yet. I drove adoption of GitHub Copilot and prompt engineering practices across two teams, became a cross-team architecture liaison for the Europe-facing product surface, and contributed to three major cross-team architecture decisions in my first year.

**Result:** Core Alaya features were successfully migrated into Benevity's platform. I became the go-to person for AI tooling adoption across the org, and the informal architecture bridge between the European and North American engineering teams.

**Reflection:** I initially moved too fast, trying to "fix" things that weren't broken from my perspective. Slowing down and listening first made me significantly more effective. The lesson was obvious in hindsight: credibility in a new org is earned by solving their problems, not showcasing your past ones.
