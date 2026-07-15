# STAR Stories: Forward Deployed Engineer, Agentic Platform (Cohere)

Selected for a customer-facing, end-to-end agentic delivery role. Prose, first person, casual but precise.

---

## 1. Building an evaluation framework instead of trusting the demo

This one comes up whenever someone asks how I know an agent actually works, and it's the story I'd lead with for this role. Once I started building multi-agent systems and RAG pipelines for real workflows, not prototypes, I ran into the same wall everyone building agentic products hits: a demo that looks great on three examples and falls apart on the fourth. I was tasked with getting an internal tool to a point where I could trust its output enough to hand it to non-technical users, and trial and error wasn't going to get me there. So I built a small evaluation harness instead, a set of representative test cases with expected behaviors, a scoring approach that caught regressions when I changed a prompt or swapped a retrieval step, and a way to log failures so I could see patterns instead of anecdotes. It sounds obvious written down, but most people skip it because it's slower up front. The result was that changes stopped being guesswork. I could tell within minutes whether a prompt tweak helped or quietly broke something three steps downstream, which is the difference between shipping and demoing. If I did it again, I'd build the eval set before the first working version instead of after, since retrofitting test cases onto an existing pipeline means you're already biased toward what it happens to get right.

---

## 2. Building Alaya from zero to acquisition

In 2016 I co-founded Alaya, an employee purpose and impact platform, with a blank page and no customers. My job was to architect and build the whole thing, alone at first, while the business was closing its first enterprise clients, so there wasn't room for a six-month foundation phase. I picked a pragmatic stack that could scale without over-engineering, got core features to a first demo in about three months, and then expanded iteratively into multi-tenant architecture, an API layer, and impact reporting as the client list grew. I also hired and onboarded the first three engineers and set up the basics of a real engineering culture, code review, CI/CD, some architecture documentation, before any of that was strictly necessary. We got to over 50 enterprise clients across Switzerland and France, and Benevity, a Canadian unicorn, acquired the company in 2021, which was about as direct a validation of those early technical calls as you can get. Looking back, I'd invest in observability sooner. We bolted on proper monitoring late, and multi-tenancy retrofitting cost more than designing for it from day one would have.

---

## 3. Translating a business problem into a technical one under ambiguity

A recurring situation at both Alaya and Benevity was being handed a business problem, not a spec, and having to figure out what "done" even meant before writing code. At Benevity, stakeholders wanted AI-assisted workflows adopted across engineering teams that didn't report to me, but nobody had defined what success looked like or which use cases were worth the effort. My task was to turn a vague ask into something with measurable criteria I could actually deliver against. I picked a small group of curious early adopters instead of trying to mandate anything, built internal tooling demos around concrete, narrow use cases, and defined success as something specific and checkable, hours saved on a PR review cycle, not a general feeling that things were better. I documented results as I went and used those numbers to decide what to expand next rather than guessing. Within three months, about 70% of engineers across two teams were using the workflows I'd built out. The lesson that stuck was that ambiguity resolves faster when you pick one narrow, measurable slice and prove it, rather than trying to design the full solution before you've shipped anything real.

---

## 4. Leading without formal authority across teams that didn't report to me

Still at Benevity: I was a senior IC with no direct reports, tasked with getting AI-assisted development practices adopted across two teams outside my own. Nobody was going to follow a mandate from someone without a management title, so influence had to come from something else. I started with three engineers who were already curious, built demos that showed real time savings on their actual work rather than synthetic examples, ran informal sessions with no attendance requirement, and put reusable prompt templates into a shared repo so the tooling outlived any single conversation. I tracked and shared results as they came in instead of waiting for a big rollout moment. Adoption reached about 70% across both teams within three months, and I became the person people asked before rolling out new AI tooling elsewhere in the org. It was slower than a top-down rollout would have been, but it stuck, because people who adopted it on their own terms ended up advocating for it themselves, which is worth more than compliance.

---

## 5. Navigating a post-acquisition integration into an unfamiliar stack

After Benevity acquired Alaya in 2021, I joined a team roughly ten times the size of what I was used to, working in Java and microservices instead of the Node.js monolith I'd built. My task was to integrate Alaya's capabilities into Benevity's platform while keeping up product velocity, without assuming my old opinions still applied. I spent the first month mapping the existing architecture and asking questions before proposing anything, then built relationships with the platform and infra teams before pushing technical positions. That groundwork let me become a cross-team architecture liaison for the Europe-facing product surface and contribute to three major architecture decisions over the following year. I moved too fast early on, trying to fix things that weren't actually broken in the new org, just unfamiliar. Slowing down and listening first, before I had context, made every technical opinion I offered afterward land better.
