# STAR Stories — Altara Founding Engineer

Prepared for: Altara — Founding Engineer
Focus areas: 0-to-1 building, agentic AI systems, architecture under pressure, technical leadership

---

## 1. Building Alaya from zero to acquisition

**Best for:** "Tell me about a time you built something from scratch" / "What does founding engineer mean to you?"

In 2016, I co-founded Alaya, a purpose and employee engagement platform. We had a blank page, one co-founder with a business background, and no product. My job was to be the entire engineering org.

The first three months were about getting to a demo, not to perfection. I picked a stack I could move fast with (Node.js, React, PostgreSQL) and resisted the urge to build what we might need in two years. Once the first enterprise client signed, the pressure shifted: I needed to hire, set up CI/CD, introduce code review, and document architectural decisions without slowing down. I hired our first three engineers over the following year, and each time I brought someone on, I tried to be explicit about the reasoning behind what we'd built, not just the code itself.

By 2021, when Benevity acquired us, the platform had 50+ enterprise clients across Switzerland and France, and we'd scaled the architecture without a big-bang rewrite. The acquisition validated something I'd believed early on: that pragmatic choices made with clear eyes hold up better than over-engineered ones made to impress.

What I'd do differently: I added proper observability too late. APM and structured logging should have been day-one infrastructure, not something we retrofitted after the first real incident. I also underestimated the cost of making multi-tenancy an afterthought for three months.

---

## 2. Shipping a production agentic workflow before "agentic" was a buzzword

**Best for:** "What's your experience with AI systems in production?" / "Tell me about a time you worked on the frontier of something"

At Benevity, around 2023, I saw an opportunity to improve how our engineers handled code review. The pull request cycle was slow, and the comments were often repetitive. I wanted to build something that could handle the mechanical parts so engineers could focus on the hard parts.

I built a multi-step pipeline using LLMs: the first stage analyzed the diff and classified the changes by risk, the second generated context-aware suggestions keyed to our specific codebase patterns, and the third summarized what reviewers needed to look at closely. It wasn't a one-shot prompt; it was three coordinated agents with structured handoffs between them. I used embeddings against our internal documentation to give the model grounding it wouldn't otherwise have.

The result was that PR review time on our team dropped by roughly 40% over two months. Within a quarter, two other teams adopted the approach. What struck me was how much of the value came from the orchestration layer, not the model itself. Getting the handoffs right, handling edge cases where the model was confidently wrong, and making the output trustworthy enough that engineers would actually act on it, that's where most of the work was.

The reflection I carry from that: agentic systems fail in ways that are qualitatively different from traditional software. The failure modes are probabilistic and often silent. Building in human review checkpoints and structured output validation was the right call, and I'd make it earlier next time.

---

## 3. Making a hard architecture decision under investor pressure

**Best for:** "Tell me about a technical trade-off you navigated" / "How do you handle technical debt?"

About three years into Alaya, our monolith was showing cracks. Response times were climbing on the heaviest endpoints, and the team was split between a full microservices rewrite and keeping what we had. Investors were pushing for features, not architecture work.

My job was to make a call that was defensible with both the engineering team and the board, and do it without a six-month detour. I ran a two-week technical spike: we built thin prototypes of both approaches and ran load tests that reflected our actual traffic patterns, not idealized ones. Then I presented the data to our CTO and investors, not my intuition.

What the data showed was that extracting two specific modules (the highest-traffic, most self-contained ones) would solve 80% of our scaling problem with maybe 20% of the effort of a full rewrite. I proposed a strangler fig approach with clear criteria for when to extract additional modules. We shipped the first extracted module in six weeks. Performance improved roughly 40% on the endpoints that had been causing alerts.

The monolith stayed stable through the acquisition. No rewrite was ever needed. The hardest part wasn't the technical work; it was convincing the team that "not rewriting everything" was the right call. Having load test numbers to point to cut the debate short. I'd run benchmarks earlier next time, before the debate starts.

---

## 4. Driving AI tool adoption across teams without any authority

**Best for:** "How do you lead without a title?" / "Tell me about shaping engineering culture"

At Benevity, I was a Senior Staff IC with no direct reports. I wanted to change how two engineering teams worked, specifically to get them using AI-assisted development in their daily workflow. No one had asked me to do this. I had no mandate.

I started small on purpose. I found three engineers who were already curious about AI tooling and worked with them first. Not workshops, not slide decks; I built things in front of them and let them try. I put together a handful of internal demos showing where AI assistance saved real time on tasks our teams actually did: writing test cases, summarizing PR diffs, drafting migration documentation.

Then I committed reusable prompt templates to a shared repository, wrote short case studies ("this PR took 2 hours less because of X"), and ran optional lunch sessions. No mandate, no metrics dashboard, no mandate from management. Just demos and documented results.

Within three months, roughly 70% of engineers on both teams were using some form of AI-assisted review or generation regularly. The engineers who adopted it on their own terms became internal advocates; that's something a top-down decree couldn't have produced.

What I learned: the adoption curve of a new practice inside an engineering org looks a lot like product adoption. Find the early adopters, give them something that actually works, let them tell the story.

---

## 5. Navigating a post-acquisition integration at 10x scale

**Best for:** "Tell me about adapting to a very different environment" / "How do you build trust quickly?"

When Benevity acquired Alaya in 2021, I went from a 10-person startup to a company with an engineering team ten times larger. Different codebase (Java microservices instead of our Node.js stack), different processes, and a culture that had its own established rhythms.

My first instinct was to move fast and start proposing changes. I resisted it. I spent the first month doing almost nothing but reading architecture diagrams, sitting in on meetings, and asking questions. I mapped how decisions got made and who the informal technical authorities were before I opened my mouth with opinions.

After that month, I started contributing selectively. I focused on areas where I had clear signal that I could add value: the Europe-facing product surface, where our Alaya experience was directly relevant, and the AI tooling adoption work, where I had a head start. I built relationships with the platform and infra teams by helping them solve their problems before surfacing my own agenda.

Three major cross-team architecture decisions later, I'd become a trusted voice on things I hadn't even worked on directly. The trust came from the first month of listening, not from what I shipped.

The lesson I'd generalize from that: in any large organization, your technical opinions are only as credible as the relationships backing them up. The fastest path to influence isn't moving fast; it's being useful to the people who already have standing.
