# STAR Stories — TRM Labs, Staff Software Engineer, Agent Engineering

---

## Story 1: Driving AI-Assisted Engineering Adoption Without a Mandate

**Best for:** "Tell me about building agent or LLM tooling for other engineers" / "How do you drive adoption of new AI practices?" / "How do you influence teams that don't report to you?"

At Benevity in 2022, engineers were experimenting with LLMs in isolation. Every team called models differently, nobody shared prompt patterns, and there was no consistent way to evaluate whether a given approach actually worked. I didn't manage any of those teams, but I could see we were heading toward a half dozen incompatible strategies and no way to compare them.

I started small instead of pushing a top-down policy. Three engineers who were already curious, a shared repo, a handful of reusable prompt templates I'd written for my own work. I built quick demos showing concrete time saved on real tasks, ran a few informal lunch sessions walking through before-and-after examples, and wrote short internal write-ups when something actually worked. Over the following months that grew into a proper integration layer other teams could pull into their own code without asking me first.

Within three months, about 70% of engineers across both teams were using AI-assisted review and generation as part of their normal workflow, and the patterns I'd built became the basis for more formal tooling the following year.

Looking back, I would have instrumented usage from day one instead of relying on anecdotes to make the case to leadership. The demos worked, but real numbers would have gotten buy-in faster. It's the same lesson I'd apply to shipping agents into a high-stakes workflow: build in the measurement before you need to defend the results.

---

## Story 2: Making a Hard Architecture Decision Under Pressure

**Best for:** "Tell me about a technical trade-off you navigated" / "How do you decide between a rewrite and incremental work?" / "How do you make a defensible call under time pressure?"

Alaya's monolith started showing cracks around 2019. Response times on our busiest reporting endpoints were degrading, two engineers wanted a full microservices rewrite, and investors were pushing hard for new features before year-end rather than a multi-month internal project.

My job was to find a path that solved the real problem without freezing the roadmap. I ran a two-week spike comparing a full rewrite against a narrower extraction, backed by prototype load tests, then took the numbers to the CTO and investors instead of an opinion. The rewrite would have taken four months and stopped feature work cold. A targeted extraction of the two highest-traffic modules looked like six weeks and roughly 80% of the benefit.

We went with the extraction, using a strangler fig pattern so the rest of the monolith stayed untouched while those two modules moved out on their own. The first module shipped in six weeks, performance improved close to 40% on the busiest endpoints, and the remaining monolith held up fine through the acquisition two years later. We never needed the rewrite.

What stuck with me is that "don't rewrite everything" is always the harder sell politically, even when the data backs it clearly. I'd run the benchmarks even earlier next time, before the debate has a chance to get emotional.

---

## Story 3: Building Alaya's Platform from a Blank Page

**Best for:** "Tell me about building something from zero" / "How do you handle ambiguity when there's no existing system to lean on?" / "Staff or founding engineer scoping questions"

In early 2016 I cofounded Alaya, a purpose and impact platform for employee engagement. We had a name, a deck, and no product. I was the only engineer, and the business was already talking to prospective enterprise clients.

The task was to make a reasonable technical bet under real uncertainty: a stack that could get to a credible demo within three months and still hold up once paying clients showed up. I picked Node.js, React, and PostgreSQL on purpose, avoiding anything fashionable that would cost more than it bought us. The first three months went into the core features needed to close early clients. After that I expanded iteratively, multi-tenant architecture, an API layer, impact reporting, campaign tooling, each piece added when the business actually needed it rather than ahead of time.

Once we started hiring, I onboarded the first three engineers and set up CI/CD, code review norms, and architecture documentation so decisions didn't have to run through me every time. By the time Benevity acquired us in 2021, the platform was running for 50-plus enterprise clients across Switzerland and France.

Two things I'd change if I did it again: observability got added too late, which cost real hours during a couple of bad incidents, and multi-tenancy was retrofitted rather than designed in from the start. Both are decisions I now make on day one, not after they hurt.

---

## Story 4: Navigating a Larger, More Process-Heavy Organization After Acquisition

**Best for:** "Tell me about adapting to a more regulated or process-heavy environment" / "How do you build credibility in a team you just joined?" / "Working across legal, compliance, or non-engineering stakeholders"

When Benevity acquired Alaya in 2021, I went from a twelve-person team where I knew every line of code to a distributed org ten times the size, running Java and microservices instead of Node, with quarterly planning instead of continuous roadmapping and legal and compliance teams I'd never had to coordinate with directly.

My task was twofold: integrate Alaya's capabilities into Benevity's platform without losing the speed we'd built, and earn enough credibility to actually shape decisions in a much bigger system. I spent the first month just mapping the existing architecture before proposing anything, and built relationships with the platform and infra teams before pushing any technical opinion. A few things I assumed needed fixing turned out to be fine once I understood why they were built that way.

Over the following year I contributed to three major cross-team architecture calls and became the go-to person for AI tooling adoption across two teams. The integration shipped cleanly, and the AI-augmented workflow patterns I'd introduced ended up as org-wide practice.

What I underestimated going in was how much credibility comes from understanding a system before criticizing it, especially one with more compliance surface area than what I was used to. Slowing down at the start made me faster later, and it's the approach I'd bring into any environment where the cost of a wrong agent decision is higher than a bad line of code.
