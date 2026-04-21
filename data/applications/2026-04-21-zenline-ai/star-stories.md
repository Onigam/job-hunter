# STAR Stories - Zenline AI

## 1. Tell me about a time you built a product from scratch in an ambiguous environment

**Situation:** In 2016, I co-founded Alaya with no product, no engineering team, and no existing customer platform to build on. We were selling into enterprise CSR and employee engagement, so expectations were high from the first demos.

**Task:** My job was to turn a blank page into a product that real customers could use, while making technical choices that would not collapse the moment the company started growing.

**Action:** I picked a pragmatic stack around Node.js, React, PostgreSQL, and AWS, then built the first end-to-end workflows myself so we could get to customer feedback quickly. As demand grew, I introduced clearer service boundaries, CI/CD, code review habits, and the first engineering hiring loop. I stayed close to product and customer conversations so architecture was shaped by real usage instead of theory.

**Result:** We went from zero to a production platform used by more than 50 enterprise clients across Switzerland and France, and the company was acquired by Benevity in 2021. The core technical decisions held up through scale and acquisition due diligence.

**Reflection:** I would invest earlier in observability and tenancy boundaries. Both became more expensive once the product and customer base had grown.

## 2. Tell me about a technical decision you made under pressure

**Situation:** At Alaya, traffic and product scope were growing, and the team was split between a full rewrite into microservices and keeping the monolith intact. At the same time, the business needed new features, not a long architecture detour.

**Task:** I had to make a decision that reduced risk, improved performance, and still let the company ship.

**Action:** I ran a short technical spike, compared the options against actual bottlenecks, and reframed the debate around cost, delivery risk, and business timing. Instead of a big-bang rewrite, I proposed a staged extraction of the highest-traffic modules first, with explicit criteria for what should stay in the monolith and what should move out.

**Result:** We shipped the first extracted module in about six weeks, improved performance on the busiest endpoints by roughly 40 percent, and avoided freezing delivery for a rewrite that the company did not need.

**Reflection:** The right architecture choice was not the most elegant one. It was the one that solved the immediate pressure without creating a second crisis six months later.

## 3. Tell me about a time you had to adapt after a major change

**Situation:** After Benevity acquired Alaya, I moved from a startup I had helped build into a much larger organization with different systems, different expectations, and a codebase that was far broader than what I had owned before.

**Task:** I needed to help integrate Alaya's capabilities into Benevity's platform without becoming the person who only defended the old way of doing things.

**Action:** I slowed down at the start, mapped the existing architecture, and built trust with platform and infrastructure teams before trying to drive changes. Once I understood where the actual friction was, I took on cross-team design work, helped connect product concerns across regions, and introduced AI-assisted engineering patterns where they were useful instead of forcing them everywhere.

**Result:** Core Alaya capabilities were integrated into the broader platform, I contributed to multiple cross-team architecture decisions, and I became a go-to person for practical AI tooling adoption across engineering teams.

**Reflection:** I learned that seniority in a new environment starts with listening. Moving fast only helps once you are solving the right problem.

## 4. Tell me about influencing without formal authority

**Situation:** At Benevity, I was working as a Senior Staff Engineer with no direct reports, but I wanted to improve how teams used AI in code review, delivery, and day-to-day engineering work.

**Task:** I needed people to change how they worked without relying on title or mandate.

**Action:** I started with a few engineers who were already curious, built small demos around real team pain points, and shared prompt patterns and workflow examples that saved time in practice. I kept it lightweight: short sessions, concrete examples, and no pressure. The goal was to make adoption feel useful, not political.

**Result:** Within a few months, most engineers across the teams I worked with were using AI-assisted workflows in some form, and the practice spread because people could see the benefit in their own delivery cycles.

**Reflection:** Bottom-up adoption takes longer at first, but it sticks better. Engineers trust working examples more than slogans.
