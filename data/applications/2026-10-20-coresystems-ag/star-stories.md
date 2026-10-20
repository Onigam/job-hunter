# STAR+R Stories, Coresystems AG (Software Engineer, Pirate & Architect)

Picked for a role that asks for two things at once: fast, AI-assisted prototyping and the discipline to own architecture decisions, run code reviews and defend design choices. The team ships React, Python and AWS end to end and integrates with messy customer enterprise systems (SAP Business One, service and ticketing tools). Expect questions on speed versus structure, trade-offs you had to argue for, how you check AI output, and how you deal with systems you didn't build.

One honest gap to prepare for: your strongest backend language is TypeScript/Node.js, and the posting's services are in Python. Say so plainly and point to the Python you've written; don't let them discover it.

---

## 1. Choosing not to rewrite the monolith

**Likely question:** "Tell me about an architecture decision you had to defend." / "How do you balance speed and structure?"

At Alaya our monolith started showing cracks under load on a few busy endpoints. Half the team wanted a full microservices rewrite, and investors wanted new features with no patience for anything that looked like a pause. As head of technology, the call was mine, and it had to hold up in both rooms.

Rather than argue it out in meetings, I ran a two-week spike that prototyped both approaches and put each under load tests. That gave me numbers to bring to leadership and investors instead of opinions. What I proposed was a strangler-fig migration: pull out the two highest-traffic modules, leave the rest in the monolith, and write down the criteria that would justify extracting anything further, so the debate wouldn't come back every quarter.

The first extracted module shipped in about six weeks and the busiest endpoints got roughly 40% faster. The remaining monolith stayed stable all the way through the acquisition, and we never needed the big-bang rewrite.

The hardest part wasn't technical, it was convincing people that not rewriting everything was the ambitious choice. Data did that. Next time I'd benchmark earlier and cut the debate in half. It's also the pirate/architect split in miniature: the spike was the fast part, the extraction criteria were the structural part, and both mattered.

---

## 2. Building Alaya from a blank page to acquisition

**Likely question:** "Tell me about a feature or product you took end to end." / "How do you handle ambiguity?"

In 2016 I co-founded Alaya, an employee purpose and impact platform, and there was nothing to start from: no product, no customers, no code. The business side was already talking to its first enterprise prospects, so I had to build the whole platform, alone at first, quickly enough to demo but without boxing us in.

I picked a stack that could carry us for years without ceremony, Node.js, React and PostgreSQL, and had the core features demoable in about three months. After that the platform grew in layers as clients asked for things: multi-tenancy, an API layer, impact reporting, postal campaigns. When we started hiring, I onboarded the first three engineers myself and put the basics in early, CI/CD, code review as a habit rather than a gate, and architecture docs a new hire could actually read in their first week.

Alaya reached 50+ enterprise clients across Switzerland and France, and Benevity, a Canadian unicorn valued above $1B, acquired us in 2021.

I added proper observability far too late, and retrofitting multi-tenancy cost a lot more than designing for it would have. For Coresystems' pipelines, where every customer's data looks different, I'd put tracing, tenant isolation and idempotent reprocessing in from the first commit.

---

## 3. Joining a much bigger system I didn't build

**Likely question:** "Tell me about integrating with a system you didn't control." / "How do you get up to speed on an unfamiliar codebase?"

After the acquisition in 2021 I joined Benevity as a Senior Staff Engineer. The engineering org was about ten times the size of Alaya, the codebase was Java microservices instead of our Node stack, and the processes and culture were completely different. Meanwhile Alaya's capabilities had to be folded into Benevity's platform without the product stalling.

My first instinct was to start fixing things, and I'll admit I moved too fast on a couple of them. What worked better was spending the first month just mapping the architecture, and building relationships with the platform and infra teams before pushing technical opinions. Once I understood why things were shaped the way they were, my proposals got a much better reception, and I ended up acting as the cross-team architecture contact for the Europe-facing part of the product.

We migrated Alaya's core features into Benevity's platform, and I contributed to three major cross-team architecture decisions along the way.

What I took from it is that a system that looks wrong usually has a reason behind it, and you need to find that reason before you change it. That carries straight over to customer ERP and ticketing systems: they're rarely clean, and the mess usually encodes some business rule nobody wrote down.

---

## 4. Getting two teams onto AI-assisted development without authority

**Likely question:** "What's your experience with AI-assisted development?" / "How do you influence people who don't report to you?"

At Benevity I was a Senior Staff IC with no direct reports, and I wanted two teams that didn't report to me to start using AI-assisted development in their daily work. A mandate wasn't an option, and wouldn't have worked anyway.

So I started small, with three engineers who were already curious. I built internal demos that showed concrete time saved on real work, ran informal lunch-and-learn sessions with no attendance pressure, and committed reusable prompt templates to a shared repo so nobody had to start from zero. When something worked, like a PR review cycle that came out about two hours shorter, I wrote it down and shared it.

Within about three months, roughly 70% of engineers on both teams were using AI-assisted code review and generation, and I became the informal AI tooling lead.

The no-mandate approach was slower, but it stuck, because the people who adopted it on their own terms became its advocates. If I did it again I'd add a lightweight way to measure output quality from the start, since speed was easy to show but quality took longer to prove, and the posting's focus on eval sets and cost budgets is exactly that missing piece.

---

## 5. Building a multi-agent workflow for my own job search

**Likely question:** "Show us something recent you built with an AI-assisted workflow." / "How do you keep agent output trustworthy?"

The posting asks for a recent AI-built project instead of a cover letter, and the most recent one is the system producing this prep. I wanted a daily pipeline that searches job boards, scores offers against my profile and drafts application material, without the output reading like a machine wrote it.

I split it into specialised agents running on Claude Code, one each for searching, matching, reporting and building applications, each with its own instruction file, and a scheduled run that commits the day's results to a Git repo. The part that took the most iteration was the guardrails: explicit style rules in the project config, a profile and story bank as the only allowed source of facts so the agents can't invent experience, and fixed output locations so every run is reviewable as a diff.

It runs daily, and every report and application package is versioned, so I can see exactly what changed and why.

What I learned is that the agents were the easy part; the work was in the context and constraints around them. The weak spot today is evaluation, since I check quality by reading the output myself. A small eval set with known-good and known-bad examples would be my next step, which is the same thing the role asks for at production scale. (Before the interview, check the repo and fill in real numbers: how long it has run, offers processed per day, what you changed after the first week.)
