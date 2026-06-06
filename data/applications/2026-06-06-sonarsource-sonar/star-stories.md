# STAR Stories — SonarSource AI Research Scientist/Engineer

---

## Story 1: Driving AI Tooling Adoption Without a Mandate

*Best for: "Tell me about an AI/LLM system you built and deployed" / "How do you influence without authority?" / "Give an example of bringing AI into a team"*

**Situation and Task:** When I joined Benevity as Senior Staff Engineer after the Alaya acquisition, two engineering teams of roughly 30 people were still working the same way they had in 2019. No AI tooling, no prompt engineering patterns, nothing beyond standard CI/CD. I wanted to change that, but I had no direct reports and no management mandate to force it.

**Action:** I started with three engineers who seemed curious rather than resistant, ran a quick informal demo showing GitHub Copilot cutting a PR review cycle from about two hours to under an hour, and built a shared library of prompt templates targeting the team's most repetitive tasks: test scaffolding, commit message drafting, boilerplate generation. I committed it to our shared repo rather than keeping it in someone's personal account. I ran lunch sessions, never mandatory. The key was framing the whole thing as a concrete time experiment, not a transformation initiative. I shared specific numbers, two hours saved on a given review cycle, rather than abstract arguments about the future of engineering. When engineers started contributing their own templates to the repo, I knew the thing had taken hold.

**Result:** Within three months, roughly 70% of engineers on both teams were using AI-assisted tooling daily. I became the org's informal AI tooling lead, which included evaluating new models as they appeared and maintaining the prompt template library across two teams.

**Reflection:** The mandate-free approach was slower but stickier. Engineers who adopted on their own terms became internal advocates in a way that top-down compliance never produces. I'd do it the same way again, though I'd invest earlier in the shared repo structure so the institutional knowledge didn't live in individual chat histories.

---

## Story 2: Building Alaya from Zero to Acquisition

*Best for: "Tell me about building something from scratch" / "How do you handle ambiguity?" / "Founding engineer" questions*

**Situation:** In 2016, I co-founded Alaya, a purpose and employee engagement platform. We had a blank page, no customers, no product, and no engineering team. The business was signing its first enterprise clients at roughly the same time I was picking the stack.

**Task:** Design and build the entire platform from zero, alone at first, then grow a team around it, while simultaneously shipping features to paying clients.

**Action:** I chose a pragmatic stack, Node.js, React, PostgreSQL, that could scale without over-engineering for a product that didn't exist yet. I built the core features in the first three months to reach a first demo. Then iteratively: multi-tenant architecture, API layer, impact reporting, postal campaign tooling. When the first three engineers joined, I set up CI/CD, code review culture, and architecture docs before writing another line of product code. Onboarding the team was as important as the product itself; if the codebase was only legible to me, we had a bus factor problem.

**Result:** We reached production with 50+ enterprise clients across Switzerland and France. In 2021, Benevity, a Canadian unicorn at $1B+ valuation, acquired us. That acquisition was the clearest external validation I've had that the technical decisions made under pressure held up.

**Reflection:** I would have invested in observability earlier. We added proper APM late and paid for it in debugging time. I also underestimated the cost of multi-tenancy retrofitting; the next time I build something at this scale, I'd design for it from day zero.

---

## Story 3: Choosing Between a Rewrite and Incremental Migration

*Best for: "Tell me about a hard technical trade-off" / "How do you handle technical debt?" / "Research to production translation"*

**Situation:** At Alaya, the monolith was starting to crack under load. The team was split between a full microservices rewrite and a modular monolith approach. Investors were pushing for new features, not infrastructure work. Everyone had an opinion, and the debate was going in circles.

**Task:** Make a defensible technical decision that balanced long-term scalability with short-term delivery pressure, and get the team behind it.

**Action:** I ran a two-week technical spike comparing both approaches with prototype load tests rather than opinions. I presented the trade-offs to the CTO and investors with concrete metrics: estimated migration time, performance delta, risk surface, and the cost of a big-bang rewrite if it failed at the wrong moment. I proposed a strangler fig approach: extract the two highest-traffic modules first, keep the rest monolithic, and define explicit criteria for when to extract additional modules. The criteria mattered as much as the decision; it gave the team a clear model for future calls without needing to relitigate the whole debate each time.

**Result:** The first extracted module shipped in six weeks. Performance improved by roughly ~40% on the busiest endpoints. The remaining monolith stayed stable through the acquisition. No big-bang rewrite was needed at any point.

**Reflection:** The hardest part was convincing people that not rewriting everything was the right call. Data helped more than argument. I'd invest in earlier benchmarking next time to cut the debate shorter rather than letting it run until someone called for a spike.

---

## Story 4: Navigating a Post-Acquisition Technical Integration

*Best for: "Tell me about navigating change" / "Cross-functional collaboration" / "Working with larger, established teams"*

**Situation:** After the Benevity acquisition in 2021, I joined as Senior Staff Engineer on a team ten times larger than Alaya. Different culture, a Java-and-microservices codebase, and different processes across the board. My instinct was to fix things fast; the situation called for something else.

**Task:** Integrate Alaya's product capabilities into Benevity's platform without losing the velocity we'd built, and do it as a new person in a large org with no established credibility.

**Action:** I spent the first month mapping the existing architecture before proposing anything. I built relationships with the platform and infrastructure teams before pushing technical opinions. The pattern I kept coming back to was: earn the right to have a strong opinion by first understanding why things are the way they are. I drove adoption of AI-augmented development practices across two teams, not through mandate but through demos and a shared tooling repo. I also became the cross-team architecture liaison for the Europe-facing product surface, which gave me visibility across systems I'd otherwise never have touched.

**Result:** Core Alaya features were successfully migrated into Benevity's platform. I contributed to three major cross-team architecture decisions and became the point of contact for AI tooling adoption across the org. The relationships built in that first month of listening shaped most of what came after.

**Reflection:** I initially moved too fast, trying to "fix" things that weren't broken from where I was standing. Slowing down and understanding the context made me substantially more effective. In any large org transition, the first instinct to optimize is usually premature.
