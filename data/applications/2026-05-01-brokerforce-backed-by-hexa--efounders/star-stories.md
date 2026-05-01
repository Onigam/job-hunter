# STAR Stories — Brokerforce Founding Engineer

---

## 1. Building Alaya from Zero

**Best for:** "Tell me about a time you built something from scratch" / "What does founding engineer mean to you?"

In 2016, my co-founder and I started Alaya with nothing but an idea and a few early conversations with potential clients. The product was an employee engagement and impact platform targeting Swiss and French enterprises. I was the only technical person.

My job was to design and build the full platform while the business side was still signing its first customers. I had to make stack decisions that would hold up as we hired and scaled, not just get us to the first demo.

I chose Node.js, React, and PostgreSQL: pragmatic picks I could move fast with and that had enough ecosystem support to onboard junior engineers later without friction. I built the core features in the first three months, then layer by layer added multi-tenant data isolation, an API layer for enterprise integrations, impact reporting pipelines, and eventually a postal campaign module for physical mailings. When the first engineers joined, I set up CI/CD, a code review process, and lightweight architecture decision records so things didn't depend entirely on me holding the context.

We reached production with 50+ enterprise clients across Switzerland and France. In 2021, Benevity acquired us. The valuation was north of $1B. The platform I architected from scratch was absorbed into theirs without a rewrite.

What I'd do differently: I'd instrument observability from day one. We added APM late, and debugging production issues in the early scaling phase was harder than it needed to be. I'd also design multi-tenancy into the data model from the start instead of retrofitting it.

---

## 2. Making a Hard Architecture Call Under Investor Pressure

**Best for:** "Tell me about a technical trade-off" / "How do you handle competing priorities?" / "Describe a time you pushed back on scope"

About two years into Alaya, the monolith was showing signs of strain under load. The engineering team was split: some wanted a full microservices rewrite, others wanted to stay the course. Investors were asking for new features every quarter, not rewrites.

I had to make a call that was technically defensible but also one the business could actually live with.

I ran a two-week spike: built prototype load tests on two candidate architectures (full microservices decomposition vs. a modular monolith with selective extraction). I presented the results to the CTO and the investors with concrete numbers, not abstract arguments. The data showed that extracting just the two highest-traffic modules (the notification engine and the reporting pipeline) would address ~80% of our scaling pressure at roughly 20% of the cost and time of a full rewrite.

We went with the strangler-fig approach. First extracted module shipped in six weeks. Endpoint latency on the busiest paths dropped around 40%. The rest of the monolith stayed stable through the acquisition.

The lesson: when you're arguing for restraint against people who want the "proper" solution, data cuts the debate faster than persuasion. I'd do more benchmarking earlier next time to shorten that conversation.

---

## 3. Shipping AI Tooling Without a Management Mandate

**Best for:** "How do you influence without authority?" / "Tell me about leading change in an engineering org"

After the Benevity acquisition, I was a Senior Staff IC. No direct reports. I saw that the engineering teams hadn't seriously adopted AI-assisted development, and I thought it was leaving real throughput on the table. But I had no authority to mandate anything.

I started small. Found three engineers who were already curious about GitHub Copilot and AI-assisted review, and ran informal demos with them on their actual work. Not toy examples. Their own PRs, their own review cycles. I tracked time savings and documented them in a shared Notion page anyone could look at.

From there I built reusable prompt templates for the most common tasks (test generation, PR summary, code review scaffolding) and committed them to a shared repo. I ran optional lunch sessions where engineers brought real problems and we tried things live.

Within three months, roughly 70% of engineers across both teams had integrated AI tooling into their regular workflow. No mandate, no change process, no Jira tickets. I became the informal AI tooling lead across the org.

The thing I learned: adoption driven by peer enthusiasm sticks far better than adoption driven by a decree. Engineers who chose it on their own became internal advocates I never could have been by myself.

---

## 4. Navigating a Post-Acquisition Integration

**Best for:** "Tell me about working in a larger organization" / "How do you adapt to change?" / "Have you ever had to earn trust from scratch?"

When Benevity acquired Alaya in 2021, I went from a team of eight to a company of several hundred. Different codebase (Java + Spring microservices), different deployment culture, different norms around RFC processes and architecture decisions. I'd been a technical decision-maker at Alaya; at Benevity I was a new hire with no political capital.

My task was to integrate Alaya's functionality into Benevity's platform without losing the product velocity we'd built, while also not trampling on the existing teams.

I spent the first month doing nothing but mapping: how their systems worked, who owned what, who the trusted voices were in architecture conversations. I didn't propose changes. I asked questions and built relationships with the infra and platform teams before I had opinions in public.

Once I had context, I contributed to three major cross-team architecture decisions and drove the AI tooling rollout. The integration of core Alaya features into Benevity's platform went through without requiring a rewrite on their side.

What I got wrong initially: I moved too fast in the first few weeks, pointing out things I thought were broken. That read as arrogant to people who'd built those systems. Slowing down and listening first was the adjustment that changed everything.

---

## 5. Building LLM Pipelines for Production: RAG and Reliability

**Best for:** "What's your experience with AI in production?" / "How do you handle LLM reliability in regulated contexts?"

At Benevity, I led the design and implementation of several AI-augmented internal workflows: code review assistance, documentation generation, and a semantic search layer over internal knowledge bases. These weren't prototypes. They went into daily use by engineering teams and had to work reliably.

The challenge with LLMs in a production context isn't getting them to produce good output in a demo; it's getting them to behave consistently when inputs vary and ensuring you can explain what happened when they don't. In a regulated-adjacent environment (Benevity handles CSR programs for large enterprises with compliance requirements), that matters.

I built the RAG pipelines with explicit retrieval tracing so we could audit which source documents influenced any given output. I set up evaluation harnesses using a sample of real queries with expected outputs, running them on each model upgrade or prompt change. I used hybrid search (dense + keyword) to handle the edge cases where semantic retrieval alone failed on precise terminology.

The result was that the internal search tool had a 90%+ satisfaction rate in quarterly internal surveys, and we had zero escalations from compliance reviews of the AI-generated documentation.

What I'd push harder on next time: getting a test dataset together before shipping, not after. We caught several retrieval edge cases in production that better upfront evaluation would have flagged earlier.
