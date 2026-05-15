# STAR Stories — Harvey, Staff Software Engineer Platform

---

## Story 1: Making a Hard Architecture Decision Under Pressure

**Best for:** "Tell me about a technical trade-off you navigated" / "How do you decide between platform investment and shipping features?" / "How do you handle disagreement with stakeholders?"

At Alaya in 2019, our monolith was showing cracks. Response times on the busiest reporting endpoints were degrading, and two engineers wanted a full microservices rewrite. Investors were pushing for new features before year-end, not a months-long internal refactor.

I had to make a defensible call that kept us shipping while solving the real problem. I ran a two-week technical spike comparing a full rewrite against a selective extraction approach, with prototype load tests. Then I presented the trade-offs to the CTO and investors with numbers, not opinions: the full rewrite would take four months minimum and require freezing the feature roadmap; a targeted extraction of the two highest-traffic modules would take six weeks and solve 80% of the problem.

We went with the targeted extraction. I designed and led the migration using a strangler fig pattern, keeping the rest of the monolith stable while the extracted modules moved to their own services. The first module shipped in six weeks, and performance improved about 40% on the busiest endpoints. The monolith stayed stable through the acquisition two years later. We never needed the big-bang rewrite.

The lesson I came away with: "not rewriting everything" is always a harder political sell than "let's start fresh." Data cuts the debate short. I'd run the benchmarks even faster next time.

---

## Story 2: Building Shared Platform Infrastructure from Zero at Benevity

**Best for:** "Tell me about shared platform infrastructure you've built" / "How do you drive adoption of internal tooling?" / "Tell me about a platform you shipped for other engineers"

In 2022, Benevity had no shared AI tooling. Individual engineers were experimenting with LLMs in isolation, each team calling different models in different ways, with no consistent approach to prompt management, no shared evaluation, and no way to compare what was working. I wasn't the manager of any of those teams, but I could see we were heading toward six slightly different context strategies and no systematic way to measure quality.

My task was to change that without a mandate. I started small: three engineers who were already curious about AI, a shared repo, and a few reusable prompt templates I'd written for my own work. I built internal demos that showed concrete time savings, ran informal lunch sessions walking through real before-and-after examples, and wrote short case studies when something worked. Over the following months I built a proper LLM integration layer, documented the patterns, and committed shared tooling that any team could pull in without ceremony.

Within three months, about 70% of engineers across both teams were using AI-assisted code review and generation as part of their regular workflow. The tooling patterns I established became the foundation for more formal AI integrations shipped the following year.

What I'd do differently: I would have instrumented adoption earlier so I had data to show leadership, not just anecdotes. The qualitative case studies worked, but hard usage metrics would have accelerated buy-in from management by several weeks.

---

## Story 3: Building Alaya's Platform from a Blank Page

**Best for:** "Tell me about building something from scratch" / "Founding engineer roles" / "How do you handle ambiguity at the start of a project?"

In early 2016 I co-founded Alaya, a purpose and impact platform for employee engagement. We had a company name, a deck, and no product. I was the only engineer.

The job was to make a reasonable technical bet under maximum uncertainty: pick a stack that could get us to a first demo in three months and still scale when the business started signing enterprise clients. I chose Node.js, React, and PostgreSQL, deliberately avoiding fashionable complexity. In the first three months I built the core features needed for a demo clients would trust. Over the next year I expanded iteratively: multi-tenant architecture, an API layer, impact reporting, postal campaign tooling.

When we started hiring, I onboarded the first three engineers, set up CI/CD, established code review culture, and wrote architecture documentation so the team could make decisions without me in every meeting. By the time Benevity acquired us in 2021, the platform had 50+ enterprise clients across Switzerland and France.

Two things I'd change: I added observability late, which cost us painful debugging time during critical incidents. And I didn't design for multi-tenancy from day zero, which meant an awkward retrofitting pass later. Both are architecture decisions I now make first, before anything else.

---

## Story 4: Navigating Scale After Acquisition

**Best for:** "Tell me about adapting to a much larger organization" / "How do you influence across teams you don't own?" / "Tell me about working with non-engineering stakeholders"

When Benevity acquired Alaya in 2021, I went from a 12-person engineering team where I knew every line of code, to a distributed org 10x larger with a different codebase, different processes, and different culture. Java and microservices instead of Node.js. Quarterly planning instead of continuous roadmapping. Legal, compliance, and enterprise customer teams I'd never had to coordinate with before.

My task was to integrate Alaya's capabilities into Benevity's platform without losing the product velocity we'd built, and to establish enough credibility to actually influence cross-team architecture decisions. I spent the first month mapping the existing architecture before proposing anything. I built relationships with the platform and infrastructure teams before pushing technical opinions. I was wrong about several things I thought needed fixing, which I only discovered by listening first.

Over the following year I contributed to three major cross-team architecture decisions and became the go-to person for AI tooling across two engineering teams. The integration shipped successfully, and the patterns I introduced for AI-augmented workflows became org-wide practice.

The thing I underestimated was how much credibility is earned by understanding the existing system before criticizing it. Slowing down made me more effective, not less, and it's advice I'd give any senior engineer walking into a larger org for the first time.
