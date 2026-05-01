# STAR Stories — Principal Fullstack Engineer (Undisclosed Startup via Pragmatike)

Stories selected for a principal-level fullstack interview: building systems from scratch, technical architecture decisions under constraint, leading technical direction without formal authority, and production-grade AI integration.

---

## Story 1: Building a Full-Stack Platform from Nothing

**Best for:** "What's the most technically complex system you've built?" / "Tell me about founding engineer experience" / "How do you approach technical decisions with no prior context?"

In 2016, I co-founded Alaya, an employee engagement platform. Two co-founders, one product idea, no codebase, no customers. My job was to design and ship the entire technical foundation while the business was actively signing its first enterprise contracts.

The first real decision was the stack. I chose Node.js, React, and PostgreSQL, not because they were trendy, but because I could move quickly and hire for them as we scaled. Within three months I had a working product to demo to paying clients. Then came the first painful lesson: I'd underbuilt multi-tenancy into the initial data model and had to retrofit it while shipping new features for people already paying us. That tension, survive the next sprint versus scale for the next year, shaped most of the four years that followed.

I grew the engineering team from just me to four engineers, put CI/CD and code review culture in place from the start, and wrote architecture documentation that actually got used. We reached 50+ enterprise clients across Switzerland and France. In 2021, Benevity, a Canadian company valued at over $1B, acquired us. Technical due diligence went deep on every major structural decision, and none of the core architecture came back as critical debt.

What I'd do differently: design for multi-tenancy from day zero, and add proper observability on the first deploy. We added APM late and paid for it every time something went wrong in production.

---

## Story 2: Making a Hard Architecture Call Under Investor Pressure

**Best for:** "Tell me about a significant technical trade-off" / "How do you balance technical debt against delivery pressure?" / "What does a good architecture decision look like under real constraints?"

About three years into Alaya, the monolith was showing strain. Two high-traffic endpoints were degrading at peak load. The engineering team was split: one camp wanted a full microservices rewrite, the other wanted to scale the infrastructure horizontally and keep shipping. Investors wanted product velocity, not refactors.

My job was to make a call I could defend to both the engineering team and the board, backed by data rather than opinion.

I ran a two-week technical spike, prototyping the two most stressed modules as extracted services, running load tests, and measuring both the performance improvement and the additional operational overhead. Then I presented the results to the team and the investors with concrete numbers. The case for a strangler-fig migration was clear: extract the two highest-traffic modules first, keep the rest of the monolith stable, and define explicit criteria for when to extract the next piece. No big-bang rewrite, no speculative over-engineering.

We shipped the first extracted module in six weeks. Response time on the busiest endpoints improved by roughly 40%. The remaining monolith held through the acquisition without major surgery.

The lesson I took from it: a two-week spike felt expensive at the time, but it cut a months-long debate down to a week. Concrete data is almost always cheaper than the discussion it replaces.

---

## Story 3: Shipping AI Features into Production at Real Scale

**Best for:** "What's your hands-on experience with LLMs in production?" / "How do you handle the gap between prototype and production for AI systems?" / "Tell me about a technically challenging AI integration."

At Benevity, after the acquisition, I took on LLM-based feature development as hands-on engineering work, not just tooling experimentation. The most substantive project was semantic search across a large enterprise content corpus.

The engineering involved designing the chunking strategy, selecting and evaluating the embedding model, building the indexing pipeline, and then iterating on retrieval quality through structured feedback loops with the product team. The first version ran fine operationally but the precision was poor; users were getting technically valid results that weren't actually useful. We built evaluation sets, experimented with reranking layers, and adjusted chunking boundaries based on where precision was dropping. The final version was meaningfully better and went into production.

In parallel I worked on multi-agent orchestration for an internal workflow automation use case. The main engineering challenge was graceful degradation: when one agent in a pipeline fails, the system needs to degrade usefully rather than crash loudly. I built structured retry logic and typed error outputs that let the orchestration layer make routing decisions instead of just propagating exceptions upstream.

What I learned from both: AI systems in production have a different failure profile from traditional software. You spend less time on outright crashes and more time on "it ran but the output was subtly wrong." Evaluation pipelines and instrumentation matter as much as the model selection. Engineers who've only built AI in notebooks often don't know this yet.

---

## Story 4: Driving Change Without Formal Authority

**Best for:** "What does technical leadership look like for you as a senior IC?" / "How do you influence people who don't report to you?" / "Tell me about moving an engineering organization."

At Benevity I was a Senior Staff IC with no direct reports. I had a strong conviction that AI-assisted development was going to change how engineers worked, but I had no authority to mandate anything across the two teams I was embedded in.

Rather than pushing top-down, I started with three engineers who were already curious. I built internal demos with concrete time savings: a prompt template library committed to a shared repo, a before-and-after walkthrough showing how a specific PR review cycle dropped from a few hours to about thirty minutes with AI assistance, a short doc on what worked and what didn't. Then I ran informal lunch sessions with no performance review implications and no mandate attached. Just "here's what I've been experimenting with, come see if it saves you time."

The early adopters started building on top of what I'd started and sharing their own findings with their teams. By month three, roughly 70% of engineers across both teams were using AI-assisted code review and generation, and two of them had built their own prompt templates independently.

What made it stick was that ownership stayed with the people who adopted it. They became internal advocates in ways I couldn't have been from outside their team. A mandate would have generated compliance. The bottom-up approach generated actual behavior change, and those two things look the same on a dashboard but feel completely different when you're trying to sustain them six months later.
