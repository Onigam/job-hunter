# STAR Stories — VP Engineering @ ClosedWon

---

## 1. Building Alaya from Zero to Acquisition
*Best for: "Tell me about founding something" / "How do you handle ambiguity?" / "What's your biggest technical achievement?"*

In 2016, when I co-founded Alaya, the platform didn't exist. No users, no codebase, no internal processes. My task was to build the entire technical foundation while the business was simultaneously signing its first enterprise clients. The deadline pressure was immediate: we needed a working product within three months, not a prototype but something actual companies could put in front of their employees.

I chose the stack deliberately: Node.js, React, and PostgreSQL, solid enough for long-term scaling, familiar enough that we could hire quickly when the time came. I shipped the core features in the first 90 days, then spent the next two years iteratively expanding the platform: multi-tenant architecture, an API layer, impact reporting, postal campaign management. When we started hiring, I onboarded our first three engineers, set up CI/CD pipelines, established code review practices, and wrote the architecture documentation that let the team work without me as a bottleneck.

By 2021, Alaya had 50+ enterprise clients across Switzerland and France. Benevity, a Canadian company valued at over $1B, acquired us. Looking back, I would have invested in observability infrastructure earlier. We added proper APM late and paid for it in debugging hours. I'd also design for multi-tenancy from day zero rather than retrofitting it eighteen months in.

---

## 2. Making a Hard Architecture Decision Under Pressure
*Best for: "Tell me about a technical trade-off" / "How do you handle tech debt vs. feature pressure?"*

Around 2019 at Alaya, we hit scaling friction. The monolith that had served us well was showing cracks under load, and the team was split between a full microservices rewrite and staying with a modular monolith approach. Investors were actively pushing for new features. We couldn't afford a long technical detour, but ignoring the performance problems wasn't an option either.

My job was to make a defensible call and get everyone behind it. I ran a two-week technical spike with prototype load tests comparing both approaches, then brought the results to our CTO and investors with concrete metrics rather than engineering opinions. The data pointed toward a middle path: a strangler-fig migration where we'd extract the two highest-traffic modules first, keep the rest of the monolith stable, and define explicit criteria for when to extract further services.

The first extracted module shipped in six weeks. Performance on the busiest endpoints improved by roughly 40%. The remaining monolith held together through the Benevity acquisition without requiring any additional emergency work. The hardest part wasn't the technical execution, it was convincing engineers who wanted a clean rewrite that "not rewriting everything" was actually the right call. Having load test data in hand made that conversation shorter. I'd run the benchmarking earlier next time.

---

## 3. Leading Without Formal Authority
*Best for: "How do you influence without direct reports?" / "Tell me about a change management challenge"*

At Benevity post-acquisition, I was a Senior Staff IC with no direct reports, but I needed to change how two engineering teams worked. I wanted them adopting AI-assisted development workflows: code generation, AI-assisted review, prompt-driven documentation. They had no mandate to change anything, and every reason to be skeptical of someone who wasn't their manager asking them to add new tools to their workflow.

Rather than presenting a plan and asking for buy-in, I started much smaller. I found three engineers who were already curious, spent time with them directly, and built demos that showed concrete time savings on tasks they actually did. I ran informal lunch-and-learn sessions, nothing mandatory, just "here's a thing I found useful." I built a set of reusable prompt templates and committed them to a shared repo so there was no friction barrier to adoption. Then I documented a specific outcome: one example, roughly two hours saved on a typical PR review cycle, was more persuasive than any general pitch.

Within three months, about 70% of engineers on both teams had integrated some form of AI-assisted workflow into their day-to-day. More importantly, several started advocating for it internally without any prompting from me. That wouldn't have happened with a top-down mandate. The voluntary adoption was slower but stickier because people felt ownership over the change.

---

## 4. Navigating a Post-Acquisition Integration
*Best for: "Tell me about navigating organizational change" / "How do you work across teams with different cultures?"*

When Benevity acquired Alaya in 2021, I went from being the most senior technical person in a 15-person company to one of many senior engineers in an organization of 200+. Different culture, different codebase (Java-heavy microservices where I'd built in Node.js), different communication norms. My task was to migrate Alaya's core capabilities into Benevity's platform while staying useful and not alienating the teams I'd need to work with long-term.

I spent my first month mapping the existing architecture before proposing anything. The instinct after five years of moving fast is to start fixing things immediately. I resisted it. I built relationships with the platform and infrastructure teams first, understood what they were optimizing for, and figured out where our approaches genuinely differed versus where I was just used to doing things my own way.

That patience paid off. Over the following year I contributed to three major cross-team architecture decisions and became the organization's go-to for AI tooling questions. The core Alaya features were successfully migrated into Benevity's platform. Looking back, I moved too fast in the first few weeks trying to "improve" things that didn't need improving. Slowing down and listening made me substantially more effective once I did start pushing for changes.

---

## 5. Hiring and Team-Building from Scratch
*Best for: "How do you build an engineering team?" / "Tell me about a hiring decision you're proud of"*

In the early days at Alaya, around 2017 and 2018, I made our first three engineering hires. There was no HR function, no structured interview process, and I was still writing most of the code myself. My task was to bring in people who could ship independently while I was simultaneously making product and architecture decisions.

I made the process deliberately lean: a short technical conversation to calibrate problem-solving, a paid trial task close to our actual codebase, and a direct conversation about how we worked and what the role actually looked like day-to-day. I hired for curiosity and ownership over credentials. Two of the three hires were junior engineers I thought could grow into the role quickly with the right context and real responsibility.

Within six months, all three were shipping features independently with minimal oversight. One became our primary frontend lead for the rest of Alaya's independent life. Looking back, what worked was giving people real responsibility early rather than shielding them with an onboarding checklist. It's faster, and it tells you immediately whether your hiring instinct was right.
