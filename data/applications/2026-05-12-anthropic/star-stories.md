# STAR Stories — Research Engineer, Pre-training (Anthropic)

---

## 1. Building complex systems under hard constraints — Alaya from zero

**Best for:** "Tell me about a time you built something significant from scratch" / "How do you approach technical architecture decisions?"

When I co-founded Alaya in 2016, there was no product, no team, and no customers. The first enterprise client was already waiting. I had to architect the entire platform alone before I could even think about hiring, which meant every foundational decision, the stack, the data model, the multi-tenancy model, had to be defensible years later without knowing what "years later" would look like.

I chose Node.js, React, and PostgreSQL: not the most exciting choices, but ones I knew would let a small team move fast and a larger team onboard quickly. I built the core features in the first three months to reach a demo-able state, then layered on multi-tenant architecture, an API layer for enterprise integrations, impact reporting, and postal campaign tooling. As the first hires joined, I set up CI/CD, code review culture, and wrote the architecture docs that let them contribute without constantly asking me questions.

By the time Benevity acquired us in 2021, the platform had 50+ enterprise clients across Switzerland and France. The acquisition itself was validation: Benevity's engineering team reviewed the codebase as part of diligence, and it held up.

In retrospect, I would have invested in observability earlier. We added proper APM too late, which meant we were often debugging production issues with logs alone. I'd also design multi-tenancy in from day zero next time rather than retrofitting it six months in. Both lessons were expensive, but I've carried them into every architecture conversation since.

---

## 2. Making a defensible technical decision under business pressure

**Best for:** "Tell me about a significant technical trade-off you navigated" / "How do you handle technical debt?"

About two years into Alaya, the monolith was starting to crack. We had 3 engineers, investors pushing for new features every quarter, and a growing list of performance issues on the 2-3 endpoints that saw the most traffic. The team was split: some wanted a full microservices rewrite, others wanted to stay monolithic and just optimize. I had to make a call.

I ran a 2-week technical spike comparing both approaches with prototype load tests on the problem endpoints. The conclusion wasn't that microservices were wrong; it was that a full rewrite would cost 6-9 months with no customer-visible output, and we had maybe 3 months of runway patience from investors before they'd start asking hard questions. I proposed a strangler fig approach: extract the 2 highest-traffic modules into separate services, keep everything else monolithic, and define explicit criteria for what would trigger the next extraction.

I presented the trade-offs to the CTO and investors with concrete data, not opinions. "Here's what a full rewrite costs, here's what the incremental approach costs, here's the risk profile of each." The incremental path won. We shipped the first extracted module in 6 weeks, and performance improved roughly 40% on the busiest endpoints. The remaining monolith stayed stable through the acquisition two years later. We never needed the big-bang rewrite.

The hardest part was convincing people that "not rewriting everything" was a legitimate engineering choice, not a lack of ambition. Having load test numbers helped cut the debate short. Next time, I'd run the benchmarks even earlier so the decision is data-driven from the start.

---

## 3. Introducing new technical practices across teams without a mandate

**Best for:** "How do you drive technical change in a large organization?" / "Tell me about influencing without authority"

When I joined Benevity after the acquisition, I was a Senior Staff IC with no direct reports but a clear conviction that AI-assisted engineering workflows would change how the teams I worked with shipped code. The problem was that I couldn't mandate anything. Two teams, none of whom reported to me, had to choose to adopt these tools on their own.

I started small. Three engineers who seemed curious got hands-on demos, not slides, actual before-and-after on real tasks they'd been doing. I built internal tooling that showed concrete time savings: a prompt template repo for common PR review patterns, a quick-start guide for GitHub Copilot configured to our codebase conventions. Then I ran informal lunch sessions, no attendance required, no formal agenda, just "here's what I've been doing, here's what saved me two hours last week."

Within three months, roughly 70% of engineers across both teams were using AI-assisted code review and generation in some form. I became the informal AI tooling lead without anyone deciding that was my job. The adoption was stickier than anything a mandate would have produced, because the engineers who picked it up became internal advocates. They'd recommend it to each other in code reviews, which I couldn't have engineered from the top down.

What I learned: change that feels chosen is more durable than change that feels imposed. I'd still start with a small group of early adopters next time, but I'd document the outcomes more carefully from day one so the later pitch to skeptics has concrete numbers behind it.

---

## 4. Navigating a large-scale technical environment I didn't build

**Best for:** "Tell me about onboarding into a complex system" / "How do you work effectively in an unfamiliar codebase or organization?"

The Benevity acquisition was disorienting in the best possible way. I went from a 10-person team with a codebase I knew line-by-line to a company 10x larger, a Java microservices architecture I'd never touched, and engineering processes that differed from everything I'd built at Alaya. My instinct was to start proposing improvements immediately. That turned out to be the wrong instinct.

I spent the first month just mapping: reading architecture docs, following incidents, asking questions in Slack channels without offering opinions, pairing with engineers who'd been there for years. I wanted to understand why decisions had been made, not just what the current state was. Some things I'd have done differently turned out to have very good reasons behind them. Others genuinely needed changing, but I had far more credibility to push for those changes after I'd demonstrated I understood the context.

After six weeks, I started contributing to architecture discussions and driving a few cross-team proposals. Over the following year, I contributed to three major cross-team architecture decisions and became the go-to contact for the Europe-facing product surface.

The lesson was about the cost of moving too fast in a new system. When you're confident in your engineering judgment, the temptation is to apply it immediately. But in a large system, that judgment is only valid once you understand the constraints the system was built under. Listening first made every opinion I later offered more credible, and more likely to land.
