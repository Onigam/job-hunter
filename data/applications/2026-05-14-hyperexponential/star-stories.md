# STAR Stories — hyperexponential, Staff Engineer AI Products

---

## 1. Building Alaya from Zero to Production

**Best for:** "Tell me about a system you designed and owned end-to-end" / "How do you approach building from scratch?"

In 2016, I co-founded Alaya, a purpose and impact platform for employee engagement, with no product, no customers, and no engineering team. My job was to make all of that exist before the business ran out of runway.

The first three months, I was the only engineer. I had to make stack decisions that would hold for years without knowing exactly what the product would look like. I chose Node.js, React, and PostgreSQL, not because they were fashionable, but because they were predictable and I could move fast without accumulating hidden complexity. I built the core features, got to a first demo, then started the harder work: multi-tenant architecture, an API layer, impact reporting, postal campaign tooling. As we grew, I hired and onboarded the first three engineers, introduced code review culture, set up CI/CD, and wrote the architecture docs that let the team work without me being a bottleneck.

We reached 50+ enterprise clients across Switzerland and France. In 2021, Benevity, a Canadian unicorn with $1B+ valuation, acquired us. The acquisition was a direct validation of decisions I'd made in 2016 with incomplete information.

In hindsight, I'd have invested in observability much earlier. We added proper APM late and paid for it during several incidents we could have diagnosed faster. I'd also have designed for multi-tenancy from day zero, we retrofitted it and it cost us weeks we didn't have.

---

## 2. Driving AI Tooling Adoption Without a Mandate

**Best for:** "How do you influence without authority?" / "Tell me about raising the bar for a team technically" / Staff+ roles

At Benevity, I was a Senior Staff IC, no direct reports, but I wanted to change how engineers across two teams worked day to day. The goal was getting AI-assisted development, code review support, prompt-based test generation, into the regular workflow. Nobody asked me to do this. I thought it was the right call.

The first attempt was wrong. I drafted a proposal and sent it to engineering leads. It went nowhere because nobody had felt the pain yet. So I started smaller. I found three engineers who were already curious, showed them one specific workflow that saved me a few hours on a gnarly PR review, and committed a shared repo of prompt templates they could just use. No meeting. No deck.

Over the next few weeks, those three engineers started talking about it. I ran a few informal demos over lunch, brought concrete examples of where the tooling helped and where it didn't, and documented specific time savings. The documentation mattered: "we saved approximately two hours on this PR review cycle" is something you can point to. Abstract productivity claims aren't.

Within three months, around 70% of engineers on both teams were using some form of AI-assisted review or generation regularly. I became the informal AI tooling lead across the org without ever being assigned the role.

What I learned: mandate-free adoption is slower, but it sticks. Engineers who chose it on their own terms became internal advocates I couldn't have manufactured top-down.

---

## 3. Making an Architecture Call Under Investor Pressure

**Best for:** "Tell me about a technical trade-off you navigated" / "How do you handle technical debt?" / "How do you communicate technical decisions to non-technical stakeholders?"

At Alaya, we had a monolith that was starting to crack under load. The team was split: full microservices rewrite versus a modular monolith. The debate was going in circles, and investors were pushing hard for new features, not infrastructure work. I needed to make a call and defend it.

I ran a two-week spike comparing both approaches with prototype load tests. Real numbers, not estimates. I mapped the highest-traffic modules, identified the two that were causing most of the pain, and modeled what it would actually take to extract them versus rewriting everything. Then I presented the trade-offs to the CTO and investors with those concrete numbers, not opinions.

My recommendation was a strangler fig migration: extract the two worst modules first, keep the rest monolithic, and define clear criteria for when to extract anything else. No big-bang rewrite, no false promises about what microservices would buy us.

We shipped the first extracted module in six weeks. Performance on those endpoints improved by roughly 40%. The remaining monolith stayed stable all the way through the acquisition. We never needed the full rewrite.

The hardest part was convincing people that "not rewriting everything" was actually the ambitious call. Doing a full rewrite is easy to sell. A targeted, criteria-based migration requires trusting the data over the intuition, and that required showing my work at every step.

---

## 4. Navigating a Post-Acquisition Integration

**Best for:** "Tell me about navigating organizational change" / "How do you operate in a large, unfamiliar org?" / "Cross-team collaboration"

When Benevity acquired Alaya in 2021, I went from a team of six to an engineering organization ten times that size. Different culture, different codebase (Java, microservices), different process cadence. I had strong opinions and no political capital.

My first instinct was to identify things that needed fixing and fix them. That was a mistake. I spent the first month doing the opposite: mapping the existing architecture before touching it, building relationships with platform and infrastructure teams before proposing anything, and listening to understand why things were the way they were.

A few things came out of that slower start. I found two areas where my experience was genuinely additive rather than just duplicative. I drove three cross-team architecture decisions over the following year by being the person who understood both the Alaya product surface and the Benevity platform internals. I also ended up leading the AI tooling adoption work (Story 2 above) specifically because I'd built those relationships first.

What I'd do differently: I would have been more deliberate about mapping the informal influence structure early. The org chart told me who people reported to. It didn't tell me whose opinion moved decisions. I figured that out eventually, but it took longer than it needed to.

---

## 5. Scaling a Platform Through Hypergrowth at Alaya

**Best for:** "Tell me about a time you had to scale a system quickly" / "Production AI/ML pipelines" / Technical depth questions

In 2019, Alaya started closing deals faster than the platform was designed to handle. We went from a few dozen clients to over 50 in about 18 months, and some of those enterprise clients had employee counts in the tens of thousands. The system wasn't built for that.

The immediate problem wasn't the database or the API; it was the impact reporting pipeline. Clients expected monthly reports aggregating participation data across large employee populations, and the synchronous pipeline we'd built for smaller volumes was timing out under load. I had to redesign it without taking the feature offline for paying clients.

I refactored the pipeline to be asynchronous, introduced job queues for report generation, added caching for the most expensive aggregation queries, and instrumented it properly so we could see where time was actually going. The approach was incremental: each change behind a feature flag, each deployment tested with production-scale data in staging first.

The pipeline went from timing out on enterprise-scale reports to completing in under 90 seconds. We didn't lose a client during the migration, and the architecture we landed on held through the acquisition.

The main thing I took away: production ML and data pipelines fail at the boundaries nobody tested. The happy path works fine. It's the 80,000-employee enterprise client running their first annual report on a Friday afternoon that finds the edge cases. We started simulating those scenarios in staging after that incident, which caught three potential production issues before they became real ones.
