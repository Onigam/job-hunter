# STAR Stories — Zuma Staff Engineer (Agentic AI & Data)

---

## 1. Building a Platform from Zero to Acquisition
*Best for: "Tell me about building something from scratch" / greenfield work / founding engineer questions*

In 2016 I co-founded Alaya, a purpose and engagement platform for enterprise employees. We had no product, no customers, and one engineer: me. The business had already started signing pilots with companies in Switzerland, so the pressure was real from the beginning.

My job was to architect and build the entire platform while the sales side moved. I chose a stack that could start simple and scale without a rewrite: Node.js, React, PostgreSQL. I shipped a working demo in the first three months, then iterated to add multi-tenant architecture, an API layer for client integrations, impact reporting, and postal campaign management. As the product grew, I hired and onboarded the first three engineers and set up the code review culture, CI/CD pipelines, and architectural documentation from scratch.

By 2021 we had 50+ enterprise clients across Switzerland and France. Benevity, a Canadian unicorn at $1B+ valuation, acquired us. That outcome was a direct validation of five years of technical decisions under pressure.

Looking back, I would have invested in observability and monitoring much earlier. We added proper APM late, and it cost us debugging time we didn't have. I'd also have designed for multi-tenancy from day one rather than retrofitting it later. The retrofit worked, but it was months of extra work.

---

## 2. Establishing AI Practices Across Teams Without a Mandate
*Best for: "How do you lead without authority?" / "Tell me about driving adoption of a new practice" / Staff+ IC questions*

At Benevity I was a Senior Staff IC, which meant no direct reports but a real expectation of cross-team influence. By 2023 it was clear that AI-assisted development was going to change how engineers worked, but the two teams I worked with had no formal AI tooling in their workflows and no mandate to change that.

I needed to shift how roughly twenty engineers worked without being their manager and without anyone telling them they had to change.

I started with three engineers who were already curious. I ran short demos showing concrete time savings on tasks they actually did, like PR review cycles and test generation. I built and committed reusable prompt templates to a shared repo so the friction of starting was close to zero. Then I ran informal lunch-and-learn sessions, optional, no mandate, just demos and discussion.

Within three months, around 70% of engineers on both teams were using AI-assisted code review and generation in their daily workflows. I became the informal AI tooling lead across the org without ever having been appointed to the role.

The lesson was that a mandate-free approach is slower but far stickier. Engineers who adopted on their own terms became internal advocates. A top-down decree would have produced compliance, not adoption.

---

## 3. Making a Hard Architecture Call Under Pressure
*Best for: "Tell me about a technical trade-off" / "How do you handle technical debt?" / architectural decision-making*

At Alaya, around year three, the monolith was starting to crack under load. The team was split between a full microservices rewrite and staying monolithic with some structural improvements. Investors were pushing for new features, not internal rewrites, and we had limited runway to be wrong.

My job was to make a decision that was technically defensible and commercially viable, and to convince both the technical team and non-technical stakeholders.

I ran a two-week spike: prototyped both approaches, load-tested them, and built concrete metrics comparing complexity, cost, and risk. Then I presented the findings to the CTO and investors, with data rather than opinions. My recommendation was a strangler fig migration: extract the two highest-traffic modules first, keep everything else monolithic, and define explicit criteria for when to extract more. No big-bang rewrite.

We shipped the first extracted module in six weeks. Performance on the busiest endpoints improved by roughly 40%. The remaining monolith stayed stable all the way through the Benevity acquisition. We never needed the full rewrite.

The hardest part wasn't the architecture. It was convincing people that "not rewriting everything" was actually the right call. Data helped a lot. Next time I'd run the benchmarks earlier to cut the debate shorter.

---

## 4. Integrating LLMs into Production Workflows
*Best for: "Tell me about your experience with AI agents in production" / "How do you approach reliability in AI systems?"*

At Benevity, starting in 2023, I took on the task of integrating LLM-based tooling into actual engineering workflows, not as a side experiment but as something teams would depend on day to day. The challenge wasn't getting the models to work in a demo. It was making them reliable enough that engineers would trust them in a production code review cycle.

The first thing I did was treat LLM integration like any other infrastructure: observability first. I set up logging on prompt inputs, model outputs, and latency before we touched anything in the real workflow. That baseline made it possible to iterate with actual data.

I built a set of internal tools on top of OpenAI and Anthropic APIs: a code review assistant, a test generation helper, and a prompt template library that teams could contribute to and extend. I introduced structured output validation early to catch the cases where models returned malformed responses, which reduced the silent failure rate significantly.

The results were measurable. PR review cycles shortened by roughly two hours on average across the teams using the tools. Code coverage on new modules increased because test generation lowered the cost of writing tests.

What I'd do differently is invest more in evals from the start. We built the tools before we built good test suites for their outputs, which made iteration slower than it should have been. Proper evals would have let us move faster with more confidence.

---

## 5. Navigating a Post-Acquisition Integration
*Best for: "Tell me about navigating organizational change" / "How do you work in a large organization?" / culture fit for fast-scaling startups*

When Benevity acquired Alaya in 2021, I went from a five-person startup to a company with hundreds of engineers. Different stack (Java microservices vs. our Node.js platform), different processes, different culture. The first instinct was to show up with opinions, which I had plenty of.

My task was to integrate Alaya's product capabilities into Benevity's platform without losing the velocity we'd built, and to establish myself as a credible technical voice in a much larger org.

I spent the first month doing almost no pushing. I mapped the existing architecture, read documentation, and had a lot of listening conversations with platform and infrastructure teams before I offered a single opinion. Once I had real context, I started building relationships with the people whose buy-in I'd need for anything to move. I was deliberate about picking the first two or three things to push on and ignoring everything else, even when I thought I saw problems.

Over the following year I contributed to three major cross-team architecture decisions and became the go-to person for AI tooling adoption across two engineering teams. The Alaya feature set migrated into Benevity's platform successfully.

The hard lesson was that moving fast in a new org often means slowing down first. The month I spent listening rather than advocating made me more effective in the following eighteen months than I would have been if I'd pushed my agenda on day one.
