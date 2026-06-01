# STAR Stories — Appfire Technologies, Principal Software Engineer

---

## 1. Building Alaya from Zero to Acquisition

**Best for:** "Tell me about building something from scratch" / "Founding engineer experience" / "How do you handle ambiguity at scale?"

In 2016, I co-founded Alaya, a purpose and employee engagement platform. We had a blank page, no customers, no product, no team.

As the technical co-founder, my first task was choosing a foundation that wouldn't become a ceiling. The temptation was to over-engineer from the start, but we had three months before our first demo and no runway to burn on architecture debates. I picked Node.js, React, and PostgreSQL, pragmatic choices rather than impressive ones, and focused on getting something real in front of clients quickly.

The more interesting challenge came later: evolving a prototype into a production-grade multi-tenant platform while the business was already signing enterprise contracts. I designed the tenancy model while shipping features, hired and onboarded the first three engineers, introduced CI/CD, code review culture, and architecture documentation. By the time Benevity acquired us in 2021, the platform had 50+ enterprise clients across Switzerland and France. Benevity was a Canadian unicorn with over a billion dollars in valuation. The acquisition was a direct validation of every architectural bet we'd made from day one.

What I'd do differently: add observability earlier. We retrofitted APM after production incidents that proper monitoring would have caught. I'd also design multi-tenancy from day zero instead of retrofitting it at month four. Both of those experiences shaped how I think about platform foundations ever since.

---

## 2. Making a Hard Architecture Decision Under Pressure

**Best for:** "Tell me about a technical trade-off you navigated" / "How do you handle technical debt?" / Principal-level system design questions

About two years into Alaya's growth, the monolith was showing cracks. The team was split between a full microservices rewrite and staying the course. Investors were watching, and they weren't paying us to rewrite working software.

My job was to make a defensible technical decision that balanced long-term scalability with short-term delivery, without kicking the can so far down the road that we'd regret it at the next growth inflection.

I ran a two-week spike. We prototyped both approaches, ran load tests, measured the actual pain points rather than arguing from intuition. Then I sat with the CTO and the investors and laid out the trade-offs in concrete terms: the cost of a full rewrite in calendar weeks and risk, what continuing as-is would cost in degraded performance, and a middle path. The middle path was a strangler-fig migration: extract the two highest-traffic modules first, keep the rest of the monolith stable, and define explicit criteria for when additional extraction made sense.

Six weeks later the first extracted module was in production. Performance on those endpoints improved by roughly 40%. The remaining monolith stayed stable through the acquisition two years later. We never did the big-bang rewrite.

The hardest part wasn't the technical work, it was convincing engineers who wanted the full rewrite that restraint was the right call. Data helped, but I'd learned to do the benchmarking earlier to cut the debate shorter.

---

## 3. Post-Acquisition Integration at Benevity

**Best for:** "Tell me about navigating organizational change" / "Working across large teams" / "How do you ramp up in a new environment?"

When Benevity acquired Alaya in 2021, I went from co-founder in a 15-person company to Senior Staff Engineer in an organization ten times larger. Java microservices where we'd been Node.js. A different release cadence, different decision-making culture, different everything.

My task was to integrate Alaya's capabilities into Benevity's platform while staying useful as a principal-level engineer and not burning goodwill in the process.

My instinct was to move fast and start proposing changes, because that's what had worked at Alaya. I held that instinct for the first month and just listened. I mapped the existing architecture, had one-on-ones with the platform and infra leads, and tried to understand what problems they were already solving before adding to the list. It was slower than I wanted, but it built the credibility I needed to actually be heard later.

By the end of year one, I was a cross-team architecture liaison for the Europe-facing product surface and had contributed to three major architecture decisions. I also drove AI-augmented tooling adoption across two teams, using demos and shared templates rather than mandates, and reached roughly 70% adoption within three months.

The lesson I took from this: speed in a new org often looks like progress and isn't. Slowing down to map the terrain and build relationships made me more effective, not less.

---

## 4. Influencing Without Formal Authority

**Best for:** "Tell me about leading without being someone's manager" / "How do you drive change?" / Staff+ / Principal engineer behavioral questions

At Benevity I was a Senior Staff IC with no direct reports. I'd seen what AI-assisted development could do for code review and generation speed, and I wanted to introduce it across two engineering teams that had no particular reason to follow my lead.

The approach I ruled out immediately was proposing it as an initiative or a mandate. That path produces adoption theater, where people go through the motions without actually changing how they work, and it tends to build resentment rather than momentum.

Instead, I found three engineers who were curious and showed them specific workflows tied to tasks they had on their plates that week. Not a demo, actual work that ran faster. I built a small library of prompt templates for code review and committed them to a shared repo. Then I ran informal sessions, no agenda, no slides, just showing what I'd done that week and answering questions.

Within three months, roughly 70% of engineers on both teams were using AI-assisted code review and generation. Several had started contributing their own templates. I became the informal AI tooling lead for the org without ever asking for the role.

What this reinforced: the best way to change how engineers work is to make the better path obviously easier. If you have to convince people it's good for them, you've probably already lost.

---

## 5. Mentoring Engineers Without Slowing Down Delivery

**Best for:** "Tell me about mentoring" / "How do you balance technical leadership with shipping?" / Any role with explicit mentorship expectations

During Alaya's scaling phase, I was still the fastest engineer on the team while also managing the first three hires. The challenge wasn't mentoring itself, it was doing it in a way that didn't bottleneck delivery.

The instinct for a lot of founding engineers is to over-review everything. That's exhausting for you and stunting for the people you're mentoring. My approach was to define what "good enough to ship" looked like per engineer per stage of their growth, rather than applying the same bar to everyone. A junior engineer's PR gets architectural feedback plus learning context. A mid-level engineer gets questions, not answers.

I also invested in making the environment do some of the teaching: architecture documentation, ADRs for key decisions, CI checks that caught the most common mistakes automatically. The goal was to make the right path the default path, so I didn't have to be the bottleneck for everything.

The result was that by the time I left for Benevity, the three engineers I'd hired were running features independently. I could review rather than rebuild, which meant the mentoring had actually worked.

The reflection: I should have written more documentation earlier. I held too much in my head for too long, which created a bus-factor problem. Writing things down isn't just good for the team, it clarifies your own thinking in ways that make you a better mentor.
