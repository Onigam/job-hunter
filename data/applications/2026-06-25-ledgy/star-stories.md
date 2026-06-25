# STAR Stories — Ledgy: Engineering Manager, Feature Team

Role context: hands-on EM leading 4-6 engineers on compensation products (equity plans, pensions, carry vehicles). TypeScript/React/Node.js/MongoDB stack. Stage 4 is a mock 1:1 coaching session — prepare for that specifically.

---

## Story 1: Building an Engineering Team from Zero

*Best for: "Tell me about growing or building a team" / "What does your management style look like?" / founding conversation*

In 2016 I co-founded Alaya, a compensation and impact platform for employees. For the first year and a half I was the only engineer, which meant I wasn't just writing code — I was making every architectural decision that would constrain what kind of team we could eventually hire. That pressure made me think hard about what good engineering culture needed to look like from day one, before there were people to enforce it.

By the time we had enough runway to hire, I'd already set up code review processes, CI/CD, and documentation habits that I could hand to someone new without a week of onboarding. I hired the first three engineers sequentially, not in a batch, so I could give each person proper attention in their first month. I ran weekly 1:1s from the start, with a deliberate structure: first half on what was blocking them technically, second half on what they were learning. The goal was to understand their growth trajectory early, not just their output.

We grew to a team of six over three years, maintained a low defect rate in production, and I had zero unexpected departures in that period. When Benevity acquired Alaya in 2021, every engineer on the team transitioned into the new org, which I think says something about how the team was built. Looking back, I'd push career conversations earlier — I waited until engineers raised them rather than creating a rhythm from the start.

---

## Story 2: Running a 1:1 That Actually Changed Something

*Best for: Stage 4 mock 1:1 coaching session / "Tell me about a coaching moment that mattered" / people leadership in depth*

About six months into our growth at Alaya, one of my earlier hires started showing slower velocity and some avoidance around code reviews — not blocking, just less engaged than before. The easy interpretation was performance drift, but I suspected it was something else.

In our next 1:1 I didn't lead with the work. I started by asking what part of the job was feeling most satisfying and what was feeling like drag. Turned out he'd been quietly assuming he'd been passed over for a project he'd flagged interest in, and had decided to invest less energy as a result. There was no malicious intent on my side — it was a gap in communication. I hadn't looped him in on why the project staffing had gone differently.

We spent thirty minutes unpacking what he actually wanted to be working on, what skills he was trying to develop, and how to make that visible in the roadmap ahead. I also owned the communication gap clearly: I'd assumed he understood the reasoning, he'd assumed he was being sidelined. Three months later he was leading a technical scoping session for the feature we'd talked about.

What I'd do differently: build explicit career mapping into the quarterly 1:1 cadence from the start, rather than waiting for someone to disengage before asking the question.

---

## Story 3: AI Adoption Across Two Teams Without a Mandate

*Best for: "How do you drive change in an engineering org?" / "Tell me about AI tooling adoption" / leadership without authority*

At Benevity, I was a Senior Staff IC with no direct reports. If I wanted to change how engineers worked, I had to earn it. The change I wanted was AI-assisted code review and generation — GitHub Copilot, structured prompt patterns — adopted across two teams that didn't report to me, with no formal initiative and no budget.

I started with three engineers who were already curious. I ran informal sessions, not lunch-and-learns with a slide deck, just side-by-side sessions showing concrete time savings on tasks they found tedious: PR descriptions, test scaffolding, digging through unfamiliar modules. I built a shared repository of prompt templates they could fork without attribution. I tracked outcomes informally: "this saved me two hours on a review cycle" documented and shared in Slack.

The shift happened when the engineers who'd adopted it started talking about it in their own team retros. At that point I stopped being the person pushing the idea and became the person they pulled in for questions. Within three months, roughly 70% of engineers on both teams were using AI-assisted tooling by default. A top-down mandate would have produced surface-level compliance. The peer-to-peer spread produced actual habit change.

Looking back, I'd instrument adoption earlier. I relied on anecdotes when I could have tracked time savings more systematically, which would have made the case to leadership much faster.

---

## Story 4: Hard Architecture Call Under Investor Pressure

*Best for: "Tell me about a technical trade-off you navigated" / "How do you balance delivery pressure with long-term quality?" / system design context*

Around 2019, Alaya's monolith was showing cracks. Two of the highest-traffic modules were competing for resources at peak usage, deployment times were climbing, and the team was spending more time coordinating merges than shipping. Internally there was pressure for a full microservices rewrite. Investors were pushing for new features, not architecture investment — and they weren't wrong to, given where we were in the growth curve.

My task was to make a defensible call and execute it without stopping feature delivery for months. I ran a two-week spike comparing a full migration against a modular strangler-fig approach, with prototype load tests for both. I presented the trade-offs to the CTO and investors with data rather than opinions. What I proposed was targeted extraction: pull the two highest-traffic modules, hold the rest of the monolith stable, and define explicit criteria for future extraction rather than rewriting speculatively.

The first extracted module shipped in six weeks. Latency on the busiest endpoints dropped by roughly 40%. The remaining monolith made it through the Benevity acquisition two years later without significant incidents. The thing that almost derailed the whole discussion wasn't the engineering — it was convincing people that "let's not rewrite everything" was a legitimate technical position. The load test data cut that argument short in a way that words wouldn't have.

Next time, I'd run the benchmarks in week one rather than week two. The delay was unnecessary.

---

## Story 5: Joining a New Org After Acquisition

*Best for: "Tell me about ramping up in an unfamiliar codebase or team" / "How do you build trust in a new environment?" / cultural discussion*

When Benevity acquired Alaya in 2021, I went from one of five engineers in a tight startup to a Staff Engineer in an org of hundreds, inside a Java microservices codebase I'd never seen. The culture, tooling, and decision-making norms were completely different from what I'd built at Alaya — and I came in with a head full of opinions about how things should work.

I made a deliberate choice to spend the first four weeks listening. I mapped the existing architecture before proposing changes. I had coffees with platform and infrastructure engineers before I had any agenda to push. What I noticed was that most things I'd initially flagged as "wrong" were actually reasonable trade-offs made under constraints I hadn't understood yet.

Once I had trust in the org, the influence came more naturally. I contributed to three major cross-team architecture decisions in the first year and became the go-to liaison for Benevity's Europe-facing product surface. When I started driving AI tooling adoption later, I had credibility in the org that made the informal approach work.

The main thing I'd change: I'd be explicit with my manager in week one that I'm in listening mode, not because I have nothing to offer, but because I want to earn the right to push. Naming that intention out loud prevents others from reading it as passivity.
