# STAR Stories — Conveo Application

## Story 1: Building the Platform at Alaya from Scratch
*Best for: "Tell me about a time you built infrastructure from zero" / founding engineer questions*

In 2016, I co-founded Alaya with a blank page and a business that was already signing enterprise clients. There was no codebase, no infrastructure, no team.

My task was to architect and ship the entire platform solo, fast enough to keep up with sales, without over-engineering it into a corner we couldn't escape later.

I chose a pragmatic stack: Node.js, React, PostgreSQL, deployed on AWS. I set up CI/CD pipelines in the first two weeks because I knew that once the team grew, bad deployment habits would be impossible to fix. Multi-tenancy went in from day one rather than being retrofitted later. The first working version with authentication, data isolation, and a usable product interface took about three months. As client count grew, I extracted the highest-traffic modules using a strangler-fig pattern instead of a full rewrite, which kept us shipping features without pausing for an infrastructure project.

By the time we were acquired by Benevity in 2021, the platform was running 50+ enterprise clients across Switzerland and France, with no major incidents in the 12 months before acquisition. The buyer's technical due diligence found the architecture clean enough to integrate without a rebuild.

Looking back, I'd have added proper APM and distributed tracing earlier. We added observability reactively after a few hard-to-debug production issues, and that cost us time. I'd treat it as a day-one requirement now, the same way I treated CI/CD.

---

## Story 2: Driving AI Toolchain Adoption Without Formal Authority
*Best for: "How do you lead without authority?" / "Tell me about implementing a new tooling standard" / platform/Staff+ roles*

At Benevity, I was a Senior Staff IC with no direct reports across two engineering teams. In 2023, I wanted to standardize AI-assisted development practices across both teams: code review automation, prompt templates for common patterns, and a shared library of reusable LLM workflows. The teams didn't report to me and I had no mandate to impose anything.

Rather than proposing a process change in a planning meeting, I started with three engineers who were already curious. I built a few internal demos, nothing polished, just things that saved visible time: a PR review bot that caught missing edge cases, a prompt template that turned a messy ticket into a structured implementation brief in 30 seconds. I ran informal lunch sessions, no attendance required, and committed reusable templates to a shared repo with documentation.

Within about three months, roughly 70% of engineers on both teams were using at least one AI-assisted tool in their regular workflow. More importantly, they were extending the templates themselves and advocating internally, which I couldn't have manufactured top-down.

What I'd do differently: move the shared repo and documentation earlier. The first month of demos was useful for validation, but I spent too long building proof-of-concept work that only I could run. Committing things earlier would have shortened the adoption curve.

---

## Story 3: Architecture Trade-off Under Delivery Pressure
*Best for: "Tell me about a hard technical decision" / "How do you handle tech debt?" / "When have you pushed back on a rewrite?"*

At Alaya, the monolith started showing cracks around 2018 when our user base grew faster than expected. The team was split: half wanted a full microservices rewrite, half wanted to keep iterating on the monolith. Investors were pushing for features, not an infrastructure pause.

I needed to make a defensible call that balanced long-term scalability with the reality that a full rewrite would have taken six to nine months we didn't have.

I ran a two-week spike: prototyped both approaches, ran load tests, and documented the trade-offs in concrete terms rather than architectural principles. The data showed that two modules were responsible for roughly 80% of our performance problems. Everything else was fine. I proposed a strangler-fig migration: extract those two modules as independent services, leave the rest monolithic, and define explicit criteria for when additional extraction would be warranted.

The first extracted module shipped in about six weeks. Response times on the busiest endpoints improved ~40%. The rest of the monolith stayed stable through the acquisition two years later. No big-bang rewrite ever happened.

The lesson I carry from this: the hardest part wasn't the technical decision, it was convincing people that "not rewriting everything" was the responsible call. The load test data mattered more than any architectural argument. I do early benchmarking now as a standard step whenever a rewrite conversation starts.

---

## Story 4: Post-Acquisition Integration at Benevity
*Best for: "Tell me about navigating a major change" / "How do you onboard into a large org?" / cross-functional collaboration*

When Benevity acquired Alaya in 2021, I went from being in a five-person team where I knew every line of code to a 500-person engineering org with a Java microservices codebase I'd never seen. Different tooling, different release processes, different culture.

My task was to continue building product while helping integrate Alaya's features into Benevity's platform, without disrupting either side.

I spent the first month doing nothing but mapping: reading architecture docs, tracing service boundaries, meeting platform and infra teams before proposing anything. Once I had a working mental model, I started showing up in cross-team architecture discussions, not to push the Alaya way of doing things, but to ask questions that surfaced gaps. That got me invited into three major architecture decisions as a contributor rather than a stakeholder. The actual integration work followed from those relationships.

It worked. Core Alaya features were integrated within eight months. I became the architecture liaison for the Europe-facing product surface and was asked to lead the AI tooling initiative a year later.

What I'd do differently: I moved too fast in the first weeks trying to "improve" things that weren't actually broken from the new org's perspective. The month I spent listening instead was more productive than anything I'd have shipped if I'd started coding immediately.
