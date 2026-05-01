# STAR Stories — Founding Full Stack AI Engineer (Undisclosed AI Data Startup)

Stories selected for a founding full-stack engineer interview: building from zero, technical architecture under pressure, AI integration in production, and working without a safety net.

---

## Story 1: Building a Full-Stack Platform from a Blank Page

**Best for:** "Tell me about building something from scratch" / "What does your founding engineer experience actually look like?" / "How do you handle technical ambiguity at the start?"

In 2016, I co-founded Alaya, an employee engagement and impact platform. Two co-founders, a product idea, no customers, no code. My job was to design and build the entire technical foundation alone, then grow a team around it, while the business was actively signing its first enterprise contracts.

The first real decision was the stack. I chose Node.js, React, and PostgreSQL, not because they were new, but because I could move fast with them and hire for them as we grew. Within three months I had a working product to demo. Then came the first painful lesson: I'd underbuilt multi-tenancy in the initial design and had to retrofit it while also shipping new features for paying clients. That tension, survive now vs. scale later, shaped most of the next four years.

I grew the engineering team from just me to four engineers, put CI/CD and code review culture in place from the start, and wrote architecture documentation that actually got used. We reached 50+ enterprise clients across Switzerland and France. In 2021 Benevity, a Canadian company valued at over $1B, acquired us. Technical due diligence covered every major decision, and none of the core architecture was flagged as debt.

What I'd do differently: design for multi-tenancy from day zero and instrument the system for observability from the first deploy. We added proper monitoring late and paid for it during incident response.

---

## Story 2: Making a Hard Architecture Call Under Investor Pressure

**Best for:** "Tell me about a technical trade-off you navigated" / "How do you choose between moving fast and building well?" / "What does a good architecture decision look like under real constraints?"

About three years into Alaya, the monolith was showing strain. Two high-traffic endpoints were degrading at peak load. The engineering team was split: one camp wanted a full microservices rewrite, the other wanted to scale the infrastructure and keep shipping features. Investors wanted product velocity, not refactors.

My job was to make a decision I could defend to both the engineering team and the board, with data behind it rather than opinions.

I ran a two-week technical spike: prototyped the two most painful modules as extracted services, ran load tests, and measured both the performance improvement and the additional operational overhead. Then I put the results in front of the team and investors with concrete numbers. The case for a strangler-fig migration was clear: extract the two highest-traffic modules first, keep the rest of the monolith stable, and define explicit criteria for when to extract the next piece.

We shipped the first extracted module in six weeks. Response time on the busiest endpoints improved by roughly 40%. The rest of the monolith held through the acquisition without requiring major surgery.

The lesson I took from this: a two-week spike felt expensive at the time, but it cut a months-long debate to about a week. Data is almost always cheaper than the discussion it replaces.

---

## Story 3: Shipping AI Integration into Production at Real Scale

**Best for:** "What's your hands-on AI engineering experience?" / "Tell me about working with LLMs in production" / "How do you handle the messiness of AI systems at scale?"

At Benevity, after the acquisition, I took on AI-augmented engineering as both a personal practice and an organizational initiative. But the more interesting work was integrating LLM-based features into production workflows, where the gap between "it works in a notebook" and "it works reliably at scale" is real.

I worked on semantic search using embeddings across a large content corpus, which involved designing the chunking strategy, choosing the embedding model, building the indexing pipeline, and then tuning retrieval quality through iterative feedback loops with the product team. The first version wasn't good enough: recall was fine but precision was poor, and users were getting irrelevant results. We ran structured evaluation sets, experimented with reranking, and adjusted the chunking boundaries. By the end the system was surfacing results product considered genuinely useful.

In parallel I worked on multi-agent orchestration for an internal workflow automation use case. The main engineering challenge was handling partial failures gracefully: when one agent in a pipeline fails, the system needs to degrade usefully rather than crash loudly. I built retry logic and structured error outputs that let the orchestration layer make decisions rather than just propagating exceptions.

What I learned: AI systems in production have a different failure mode profile than traditional software. You spend less time on crashes and more time on "it ran but the output was wrong." Instrumentation and evaluation pipelines are as important as the model itself.

---

## Story 4: Leading Without Formal Authority

**Best for:** "How do you drive change when you're not the manager?" / "Tell me about influencing without authority" / "What does technical leadership look like for you at a senior IC level?"

At Benevity I was a Senior Staff IC with no direct reports. I had a strong conviction that AI-assisted development would change how engineers worked, but I had no authority to mandate anything across the two teams I worked with.

Rather than pushing top-down, I started with three engineers who were already curious. I built a small set of internal demos: a prompt template library committed to a shared repo, a walkthrough showing how a specific PR review cycle dropped from a few hours to about thirty minutes with AI assistance, and a short doc on what worked and what didn't. Then I ran informal lunch sessions. No mandate, no performance review implications. Just "here's what I've been experimenting with, come see if it saves you time."

The early adopters started sharing their own findings. By month three, roughly 70% of engineers across both teams were using AI-assisted code review and generation. Two of them had built their own prompt templates on top of what I'd started.

What made it stick was that ownership stayed with the engineers who adopted it. They became internal advocates in ways I couldn't have been from outside their team. A mandate would have generated compliance. The bottom-up approach generated actual behavior change, which is a different thing.
