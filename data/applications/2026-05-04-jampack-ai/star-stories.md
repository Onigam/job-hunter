# STAR Stories — Jampack AI, Founding Engineer (Fullstack)

---

## Story 1: Building a Platform from Zero to Acquisition

**Best for:** "Tell me about a time you built something from scratch" / "What does it mean to you to be a founding engineer?"

In 2016 I co-founded Alaya, a purpose and impact platform for employee engagement. No product, no customers, one engineer: me. My co-founders were out signing the first enterprise contracts while I was figuring out what to build and in what order.

I picked a stack I could move fast with: Node.js, React, PostgreSQL. Three months in we had a working demo. Over the following year I added multi-tenant architecture, a third-party API layer, impact reporting dashboards, and postal campaign tooling. As the client base grew I hired and onboarded our first three engineers, set up CI/CD, established a code review culture, and wrote the architecture documentation that kept the team aligned without daily coordination overhead.

By the time of the acquisition in 2021, the platform was running 50+ enterprise clients across Switzerland and France. Benevity, a Canadian unicorn valued above $1B, bought the company. That outcome was a direct test of the decisions made from day one: the data model, the tenancy approach, the API contracts. They held.

What I'd do differently: I'd invest in observability much earlier. We bolted on real APM late, and it cost us debugging time we couldn't afford. I'd also design for multi-tenancy from day zero rather than retrofitting it at a painful moment in the growth curve.

---

## Story 2: Shipping AI Agents into Production Workflows

**Best for:** "Tell me about a complex technical system you've built" / "How do you handle unreliable data sources?" / "What's your experience with LLMs in production?"

At Benevity, after the acquisition, I started leading the adoption of AI-augmented engineering workflows across two teams. That grew into something broader: building internal agent systems that actually ran in production, not just in demos.

The core challenge was reliability. LLMs hallucinate. They misparse unstructured inputs. When the input is a PDF purchase order or an email thread with three forwarded replies, you can't just trust the output. My task was to design agent pipelines that could fail gracefully: structured output validation, fallback paths, confidence thresholds that triggered human review rather than wrong automation.

I built evaluation frameworks we could run against real production inputs, not synthetic test cases. Over a few months of iteration, we got agent accuracy on our target workflows into a range where non-engineers were comfortable relying on them. The last 10% of reliability improvement took more time than the first 90%, and I learned to set expectations around that explicitly with stakeholders.

The reflection: evaluation design is the hardest part of production agent work, and most teams underinvest in it relative to the agent logic itself. I'd start with the eval framework now, not after the agent is built.

---

## Story 3: Making a Hard Architecture Decision Under Pressure

**Best for:** "Tell me about a technical trade-off you had to navigate" / "How do you handle technical debt while shipping?" / "How do you make decisions under uncertainty?"

Around 2019, Alaya's monolith was cracking. Certain endpoints were slow under load and we had two camps inside the team: full microservices rewrite vs. modular monolith. Investors were asking for new product features, not engineering housekeeping. I needed to make a call that was technically defensible and commercially realistic.

I ran a two-week spike comparing both paths with prototype load tests on the actual bottleneck endpoints. Rather than presenting opinions, I brought numbers to the CTO and our investors: projected performance gains, estimated migration timelines, and the risk of a failed rewrite mid-growth. The data supported a middle path, a strangler fig migration extracting the two highest-traffic modules first and leaving the rest of the monolith intact, with explicit criteria for when to extract additional modules.

We shipped the first extracted module in six weeks. Performance on the busiest endpoints improved by around 40%. The rest of the monolith stayed stable all the way through the acquisition two years later. No big-bang rewrite was ever needed.

The hardest part wasn't the technical work. It was convincing people that not rewriting everything was the right call. Benchmark data was what closed that argument.

---

## Story 4: Driving AI Adoption Without a Mandate

**Best for:** "Tell me about leading without formal authority" / "How do you get buy-in for technical change?" / "How would you bring AI into a team's workflow?"

At Benevity I was a Senior Staff IC with no direct reports and a bet I believed in: getting two engineering teams, about 20 engineers total, to adopt AI-assisted development workflows. No one had asked me to. There was no directive from leadership.

I started with three engineers who were already curious. I ran informal demos showing concrete time savings on real PRs, not hypothetical scenarios. I built a small internal tooling layer with reusable prompt templates committed to a shared repo, and I documented a specific example: a PR review cycle that had taken two hours dropping to around twenty minutes.

Within three months, roughly 70% of engineers on both teams were using AI-assisted code review and generation in their daily workflow. The engineers who adopted it on their own terms became internal advocates. That bottom-up spread was something I couldn't have manufactured with a top-down policy.

The takeaway: peer-driven adoption is slower to start but stickier and more durable. The early adopters did most of the evangelism for me once they'd seen results in their own work.

---

## Story 5: Navigating a Post-Acquisition Integration

**Best for:** "Tell me about navigating organizational change" / "How do you work in a larger, more structured engineering org?" / "How do you establish credibility quickly in a new environment?"

After the Benevity acquisition in 2021, I joined a team roughly ten times the size of Alaya. Different codebase, different culture, different processes: Java microservices where I'd been running Node.js, layers of product and engineering leadership, and an org that had its own ways of making architectural decisions.

My first instinct was to move fast and push the approaches that had worked at Alaya. I resisted that. Instead I spent the first month mapping the existing architecture before proposing anything, and building relationships with platform and infra teams before sharing opinions. I wanted to understand what was already working before trying to change it.

That patience paid off. Within six months I had contributed to three major cross-team architecture decisions and become the go-to person for AI tooling adoption across two engineering orgs. I was trusted with that influence because I'd demonstrated I understood the existing system before proposing alternatives.

The reflection: I initially moved too fast trying to fix things that weren't broken. Slowing down and listening first made me significantly more effective, even if it felt slower in the moment.
