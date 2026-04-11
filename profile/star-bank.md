# STAR Story Bank — Magino Marveaux-Cochet

_Behavioral interview stories. Update as you prepare for interviews._
_Format: STAR+R (Situation, Task, Action, Result, Reflection)_

---

## Story 1: Building Alaya from Zero to Acquisition

**Best for:** "Tell me about a time you built something from scratch" / "Founding engineer" roles / "How do you handle ambiguity?"

**Situation:** In 2016, I co-founded Alaya, a purpose & impact platform for employee engagement. We had a blank page, no customers, no product.

**Task:** Architect and build the entire platform from zero — alone at first, then growing a team — while the business was signing its first enterprise clients.

**Action:**
- Chose a pragmatic stack (Node.js, React, PostgreSQL) that could scale without over-engineering
- Built the core features in the first 3 months to get to first demo
- Iteratively expanded: multi-tenant architecture, API layer, impact reporting, postal campaigns
- Hired and onboarded the first 3 engineers; set up CI/CD, code review culture, architecture docs

**Result:** Platform reached production with 50+ enterprise clients across Switzerland and France. Acquired by Benevity (Canadian unicorn, $1B+ valuation) in 2021 — a direct validation of the technical and product decisions made from day one.

**Reflection:** I would have invested in observability earlier (we added proper APM late). I also underestimated the cost of multi-tenancy retrofitting — next time I'd design for it from day 0.

---

## Story 2: Post-Acquisition Integration at Benevity

**Best for:** "Tell me about navigating change" / "Working with large teams" / "Cross-functional collaboration"

**Situation:** After the Benevity acquisition in 2021, I joined as Senior Staff Engineer on a team 10x larger than Alaya. Different culture, different codebase (Java + microservices), different processes.

**Task:** Integrate Alaya's capabilities into Benevity's platform while continuing to build new features — without losing the product velocity we'd built.

**Action:**
- Spent the first month mapping the existing architecture before proposing changes
- Built relationships with platform and infra teams before pushing technical opinions
- Drove adoption of AI-augmented workflows (GitHub Copilot, prompt engineering patterns) across the engineering org
- Became a cross-team architecture liaison for the Europe-facing product surface

**Result:** Successfully migrated core Alaya features into Benevity's platform. Contributed to 3 major cross-team architecture decisions. Became the go-to person for AI tooling adoption across 2 engineering teams.

**Reflection:** I initially moved too fast trying to "fix" things that weren't broken in the new org. Slowing down and listening first made me more effective.

---

## Story 3: Making a Hard Architecture Decision Under Pressure

**Best for:** "Tell me about a technical trade-off you navigated" / "How do you handle technical debt?"

**Situation:** At Alaya, we had a monolith that was starting to show scaling cracks. The team was debating a full microservices rewrite vs. a modular monolith approach. Investors were pushing for new features, not rewrites.

**Task:** Make a defensible technical decision that balanced long-term scalability with short-term delivery pressure.

**Action:**
- Ran a 2-week technical spike comparing both approaches with prototype load tests
- Presented trade-offs to the CTO and investors with concrete metrics, not opinions
- Proposed and led a "strangler fig" migration: extract the 2 highest-traffic modules first, keep the rest monolithic
- Defined clear criteria for when to extract additional modules

**Result:** Shipped the first extracted module in 6 weeks. Performance improved 40% on the busiest endpoints. The remaining monolith stayed stable through the acquisition. No big-bang rewrite was needed.

**Reflection:** The hardest part was convincing people that "not rewriting everything" was the right call. Data helped. I'd do more early benchmarking to cut the debate shorter next time.

---

## Story 4: Leading Without Formal Authority

**Best for:** "Tell me about leading a team" / "How do you influence without authority?" / Staff+ / principal engineer roles

**Situation:** At Benevity, I was a Senior Staff IC — no direct reports, but I needed to drive adoption of new AI-assisted development practices across 2 teams that didn't report to me.

**Task:** Change how engineers worked (add AI tooling to their workflow) without being their manager.

**Action:**
- Started with a small group of early adopters (3 engineers who were curious)
- Built internal tooling demos showing concrete time savings
- Ran informal "lunch & learn" sessions — no mandate, just demos
- Created reusable prompt templates and committed them to a shared repo
- Documented results (story: "saved 2h on a PR review cycle")

**Result:** Within 3 months, 70% of engineers on both teams were using AI-assisted code review and generation. Became the informal AI tooling lead across the org.

**Reflection:** The mandate-free approach was slower but stickier. Engineers who adopted it on their own terms advocated for it internally — I couldn't have done that with a top-down decree.

---

_Add more stories here as you interview. Aim for 8-10 master stories that cover any behavioral question._
