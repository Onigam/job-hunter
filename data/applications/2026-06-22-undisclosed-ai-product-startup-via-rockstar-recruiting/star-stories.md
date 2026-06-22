# STAR Stories — Fullstack / Product AI Founding Engineer

Prepared for: Undisclosed AI Product Startup via Rockstar Recruiting
Date: 2026-06-22

---

## Story 1: Building Alaya from Zero to Acquisition

**Best for:** "Tell me about a time you built something from scratch" / "What does it mean to you to be a founding engineer?" / "How do you handle ambiguity?"

In 2016, I co-founded Alaya with a co-founder who handled the business side. We had a concept, a few early conversations with potential enterprise clients, and no product. My job was to turn that into something demoable in a few months, then into a real platform, without knowing exactly what "real" would mean yet.

I made a deliberate bet on simplicity: Node.js backend, React frontend, PostgreSQL for persistence. Not the most fashionable choices at the time, but ones I could move fast with alone. The first three months were about getting to a credible demo: clean UX, working multi-tenant logic, basic impact tracking. From there it was iterative layers, API design for third-party integrations, postal campaigns, reporting, and eventually hiring our first three engineers and setting up CI/CD, code review culture, and architecture documentation.

The constraint shaping every decision was that we were always selling while building. So I had to be honest about what was "good enough for this quarter" versus what would create debt I'd have to repay later. Some calls were right. We added proper observability late, which cost us during one painful scaling incident. Multi-tenancy was also retrofitted once, which I'd have avoided by designing for it from day zero.

When Benevity acquired Alaya in 2021, the codebase was five years old and still running well. Fifty-plus enterprise clients, two countries, no catastrophic rewrites. What I'm most proud of is that the engineers I hired could still read and reason about code we'd written together three years earlier. That only happens if the original decisions were sound.

**Reflection:** Invest in structured observability in month three, not year two. And design for multi-tenancy from the first line of code if the product has any chance of being multi-tenant.

---

## Story 2: Making a Hard Architecture Decision Under Pressure

**Best for:** "Tell me about a technical trade-off you navigated" / "How do you handle technical debt?" / "Describe a time you disagreed with your team and how you handled it"

Around year three at Alaya, the monolith was showing cracks. The engineering team was debating a full microservices rewrite versus evolving the existing architecture. Investors were pushing for new features; engineers were frustrated by deployment bottlenecks. I needed to make a defensible technical call without gambling on a big-bang rewrite that could derail six months of product work.

My first move was to avoid deciding before I had data. I ran a two-week technical spike: prototype load tests on the two highest-traffic modules, a map of the deployment coupling points, and a concrete cost estimate for each path. Then I presented the trade-offs to the founding team and investors, not as "I think we should do X" but as "here is what the data says."

We went with a strangler-fig migration: extract the two busiest modules first, keep the monolith stable for everything else, and define clear criteria for when it made sense to extract additional services. The first extracted module shipped in six weeks. Performance on those endpoints improved by roughly 40%. The rest of the monolith stayed intact through the acquisition and never became a problem.

The hardest part wasn't the technical decision. It was convincing engineers who'd been living with the pain that "don't rewrite everything" was the right call. The concrete load-test data made that conversation possible. Without it, I'd have been arguing from instinct, which nobody wants to bet a company on.

**Reflection:** Do the benchmarking earlier in the debate, not after it's already emotional. Data doesn't just help you decide; it changes the tone of the room.

---

## Story 3: Introducing AI Tooling Without a Mandate

**Best for:** "Tell me about leading without formal authority" / "How do you drive adoption of new practices?" / "Describe your experience with AI tooling in an engineering org"

At Benevity, my title was Senior Staff Engineer, so no direct reports. When I saw an opportunity to change how the engineering teams worked with AI, I couldn't roll out a policy. I had to build a constituency.

I started with three engineers who were already curious about AI tooling. We spent a few weeks experimenting with GitHub Copilot and building internal prompt templates for recurring tasks: PR reviews, test generation, ADR drafting. The goal wasn't to create a framework; it was to get one or two concrete stories with real numbers. The first story was simple: a PR review cycle that normally took four hours was cut to roughly 90 minutes using an AI-assisted checklist. That became the demo.

From there I ran a handful of optional "lunch and learn" sessions, no slides, just live walkthroughs of the actual workflow. I also committed the shared prompt templates to a team repo so anyone could use them without asking. No mandate, no announcement, just something useful sitting there.

Three months in, roughly 70% of engineers on both teams I worked with had incorporated AI-assisted tooling into their daily workflow. I'd become the informal AI tooling lead across the organization without any change to my job description.

**Reflection:** The mandate-free approach was slower to start, but stickier. Engineers who adopted it on their own terms became advocates. I couldn't have manufactured that with a top-down push. The lesson is that you sometimes have to be patient about the first 30% in order to get the last 70% for free.

---

## Story 4: Navigating a Post-Acquisition Integration

**Best for:** "Tell me about navigating organizational change" / "How do you work with teams that don't report to you?" / "Describe a time you joined an unfamiliar codebase or culture"

When the Benevity acquisition closed, I went from being Head of Technologies at a 30-person startup to Senior Staff Engineer at a company with 100+ engineers, a Java microservices backend, and a development culture built over a decade that had nothing to do with how we'd built Alaya. The first week was disorienting.

My instinct was to move fast and start contributing. I had opinions about the architecture, I could see places where Alaya had done things differently, and I believed better. That instinct was wrong, at least as a first move.

I spent the first month doing almost nothing except mapping the existing systems and having one-on-one conversations with platform and infrastructure engineers. I asked "why does this work this way?" before I asked "what if we changed this?" By month two, I had a clear picture of three cross-team pain points I could credibly help with and, more importantly, relationships with the engineers who would need to trust me before any change could happen.

The results came over the following year: contributions to three significant cross-team architecture decisions, serving as a kind of liaison between the European product surface and the North American platform teams. None of them were fast, and none of them were mine alone. That was the real lesson: at that scale, the biggest lever isn't technical skill. It's being the person others trust with ambiguous problems.

**Reflection:** Slowing down to listen first was the right move even though it felt wrong in the moment. I'd do it the same way again.

---
