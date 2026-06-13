# STAR Stories — n8n Senior AI Engineer

## 1. Building Alaya from Zero (Founding Engineer / TypeScript at Scale)

*Best for: "Tell me about building something from scratch" / "How do you make early architecture decisions?"*

In 2016, I co-founded Alaya, a purpose and engagement platform for enterprise employees. We had no code, no customers, and I was the only engineer for the first six months. The task was to build a production-ready platform fast enough to support the sales team's first enterprise demos while making foundational decisions that wouldn't have to be undone at scale.

I chose Node.js and TypeScript on the backend, PostgreSQL for data, and React on the frontend, pragmatic choices based on ecosystem maturity and what I could hire for later. The first three months went to the core feature set: activity feed, team challenges, reporting. I built for multi-tenancy from day one after nearly making the mistake of not doing so. Then came the API layer, impact reporting, postal campaigns, integrations. By year two I'd hired the first three engineers, set up CI/CD, introduced code review culture, and documented architectural decisions in a shared repo so the team could build consistently.

By 2021 the platform was live with 50+ enterprise clients across Switzerland and France. Benevity acquired us that year, a direct validation of those early technical choices. Looking back, I'd have added proper APM earlier: we instrumented production reactively rather than proactively, which cost us diagnostic time during a couple of scaling incidents.

---

## 2. Driving AI Tooling Adoption Without Authority

*Best for: "How do you influence without a mandate?" / "Tell me about leading change in an engineering team"*

After the Benevity acquisition I became a Senior Staff IC, no direct reports, but I wanted to change how engineers worked: specifically, I wanted AI-assisted code review and generation to become standard practice across two teams that didn't report to me. Top-down rollouts in engineering often fail because developers resent being told how to work, so I decided not to go that route.

I started with three engineers who were already curious about the tooling, ran informal demos showing concrete time savings on tasks they were already doing, built reusable prompt templates and committed them to a shared repo. I tracked outcomes: one data point that resonated was a PR review cycle that dropped from four hours to about two. I ran monthly lunch sessions, open invite, no attendance requirement. The key was making it easy to adopt rather than hard to refuse.

Within three months, roughly 70% of engineers on both teams were using AI-assisted review and generation in their regular workflow. I became the informal AI tooling lead across the org without ever being assigned the role. What I learned: the engineers who adopt on their own terms become the internal advocates you can't manufacture with a mandate.

---

## 3. The Architecture Decision Under Pressure

*Best for: "Tell me about a hard technical trade-off" / "How do you handle technical debt vs. new features?"*

At Alaya around 2019, the platform was starting to creak. We had a monolith that worked well at 10 clients and was showing cracks at 40. The team was split: full microservices rewrite versus modular refactor. Investors were watching the feature roadmap, not the architectural health, and the pressure was to ship.

My task was to make a defensible decision that the whole team could commit to without either over-engineering our way into a year-long rewrite or papering over problems that would compound.

I ran a two-week technical spike comparing both approaches, built prototype load tests on the two highest-traffic modules, and presented the results to the CTO and investors with metrics rather than opinions. The argument for a full microservices rewrite was architecturally correct but operationally risky given our team size and timeline. I proposed a strangler fig approach: extract the two busiest modules first, keep the rest of the monolith stable, and define explicit criteria for when to extract additional services.

The first extracted module shipped in six weeks. Performance on the busiest endpoints improved by about 40%. The rest of the monolith remained stable through the acquisition two years later. The hardest part wasn't the engineering, it was convincing people that not rewriting everything was the right call. Data helped more than arguments.

---

## 4. LLM Feature Evaluation and Benchmarking

*Best for: "How do you ship AI features reliably?" / "Tell me about working with LLM APIs in production"*

At Benevity, we were integrating LLM capabilities into the product surface used by large enterprise clients. The challenge wasn't just getting the model to return useful output in a demo, it was making sure it stayed useful across different tenant configurations, edge-case inputs, and after model version updates from the provider.

I was tasked with building the evaluation infrastructure that would let us ship LLM features with confidence and catch regressions before clients did. There was no existing benchmark tooling in the team's stack.

I built a benchmark harness in TypeScript that ran a set of golden-path input/output pairs against the live model on each deployment. I added a semantic similarity layer rather than exact string matching, since LLM outputs vary and exact match would produce too many false failures. I also built a prompt diff tracker that flagged when prompt changes exceeded a similarity threshold, which helped us catch unintended prompt regressions during code review. The suite ran in CI with a threshold gate before any AI-adjacent code could merge.

Regression catches went from "discovered by a client" to "caught in CI" within two sprints of deploying the harness. The team adopted it as standard practice for all new LLM-adjacent features. If I were doing it again, I'd build the eval layer before writing the first feature rather than retrofitting it, which cost us a couple of early releases with silent quality drops.

---

## 5. Post-Acquisition Integration: Navigating a New Engineering Culture

*Best for: "How do you operate in a large, unfamiliar organization?" / "Tell me about adapting to change"*

When Benevity acquired Alaya in 2021, I went from a 12-person engineering team to one that was ten times that size, different codebase (Java and microservices at the core), different deployment culture, different decision-making rhythms. The temptation was to immediately flag what I thought we were doing better at Alaya and propose improvements.

I spent the first month doing the opposite: mapping the existing architecture, reading architecture decision records, sitting in on team syncs without adding agenda items. I built relationships with the platform and infra teams before making any technical recommendations. By month two I had a clearer picture of where the real friction points were versus where things just looked different from what I was used to.

Once I had that context, I was effective fast: I contributed to three major cross-team architecture decisions in year one, became the Europe-facing product liaison for platform decisions, and drove AI tooling adoption across the engineering org. I'd moved too fast in the first two weeks and had to dial back after getting some gentle pushback. Slowing down to understand before proposing was the decision that made the rest of the tenure work.
