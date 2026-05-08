# STAR Stories — Stackpoint Ventures Principal Engineer

Tailored for: venture studio, 0-to-1 building, fast domain ramp, founder partnership, AI-native.

---

## 1. Building Alaya from Zero to Acquisition
*Best for: "Tell me about a time you built something from scratch" / "What does your 0-to-1 experience look like?"*

I started Alaya in 2016 with two co-founders and a blank page. We had conversations with potential customers but no product, no codebase, nothing. My job was to translate those early conversations into something shippable fast enough that we could keep selling.

The first decision was the stack. I'd seen over-engineered early products fail when pivots came, so I went pragmatic: Node.js, React, PostgreSQL. Things I knew well, things that would scale far enough, things where I could eventually hire. The first working demo came in three months.

What followed was five years of compounding decisions: multi-tenancy when we realized all enterprise clients needed data isolation, an API layer when third-party integrations became the unlock for enterprise deals, impact reporting when the product vision expanded. Each time, the question was the same: is this build-to-learn, or build-to-scale? We reached 50+ enterprise clients across Switzerland and France before Benevity acquired the company in 2021, at a valuation north of $1B.

What I'd do differently: I'd design for multi-tenancy from day zero instead of retrofitting it, and I'd have set up proper observability by month three, not month eighteen. Both of those decisions got expensive.

---

## 2. Making a Hard Architecture Call Under Pressure
*Best for: "Tell me about a technical trade-off you navigated" / "How do you decide when to rewrite vs. refactor?"*

Around 2019 at Alaya, the monolith was starting to creak. The team was split between a full microservices rewrite and a modular monolith approach. Investors were asking for features, not refactors. The CTO wanted a clear recommendation, not more debate.

I ran a two-week spike. Built a small prototype of the highest-traffic module as an extracted service, ran it under simulated load, and benchmarked it against the monolith baseline. The full rewrite path would have blocked feature development for six months minimum. The strangler-fig approach, extracting just the two highest-traffic modules and keeping everything else stable, was faster and reversible if we got it wrong.

I took the trade-off to the CTO and investors with data, not arguments. We shipped the first extracted module in six weeks, performance improved roughly 40% on those endpoints, and the remaining monolith held stable through the acquisition. No big-bang rewrite ever happened.

The hardest part wasn't the architecture decision itself. It was convincing people that "not rewriting everything" was the right call. Data did more work there than any amount of persuasion could have.

---

## 3. Ramping Fast into an Unfamiliar Environment
*Best for: "Describe a time you joined a new team or codebase" / "How do you navigate new contexts quickly?"*

When Benevity acquired Alaya in 2021, I went from a team of eight to an org ten times that size, a Java microservices codebase, and processes I'd never encountered. My instinct was to move fast and start proposing improvements. That instinct was wrong.

I spent the first month in read mode: mapping the architecture, sitting in meetings without talking much, and building relationships with platform and infrastructure teams before I had opinions about their decisions. By the time I started pushing technical positions, I had context those positions would have lacked two months earlier.

Within six months I'd contributed to three cross-team architecture decisions and become the de facto go-to person for AI tooling adoption across two engineering teams. That outcome depended entirely on the slow start.

What I took away: ramping into a new codebase is the easy part. The harder part is understanding who the real decision-makers are, what they've already tried that didn't work, and why the current state exists before you try to change it.

---

## 4. Driving Adoption Without a Mandate
*Best for: "How do you influence without authority?" / "Tell me about leading a cross-team initiative without formal power"*

At Benevity in 2022, I was a Senior Staff IC with no direct reports. AI-assisted development was starting to look genuinely useful, but there was no top-down initiative to change how teams worked, and I had no authority to impose one.

I didn't try to go through leadership. Instead I found three engineers who were already curious, showed them concrete examples from my own work: here's a PR review I completed in 40 minutes instead of two hours, here's the prompt, here's the diff. Tangible, reproducible, not a pitch. From there, I built internal demos, ran informal lunch sessions with no attendance pressure, and committed reusable prompt templates to a shared repo anyone could pull.

Three months in, around 70% of engineers on both teams were using AI-assisted code review and generation regularly. I'd become the informal AI tooling lead across the org without ever being assigned the role.

What I'd do differently: track the time savings more rigorously from the start. The informal evidence was enough to build momentum internally, but when leadership eventually asked for numbers, I was reconstructing from memory rather than pulling from actual logs.

---

## 5. Deciding What Not to Build
*Best for: "Tell me about a time you pushed back on scope" / "How do you balance speed with quality in early-stage products?"*

Early at Alaya, a major enterprise prospect asked for a full white-labeling feature before they'd sign the contract. It was a significant ask: custom domains, full UI theming, client-branded email flows. The business team was ready to say yes.

I did a rough scoping exercise and concluded it would take six to eight weeks, which would effectively freeze feature development for two months. More importantly, it was a build-to-scale investment in a feature we weren't sure any other client would ever need.

I proposed a counter: a partial white-labeling approach that covered 80% of what they were asking for in two weeks, with a commitment to revisit the full version at renewal. I walked the business team through the trade-off with an estimate of the cost in deferred features, not just dev-weeks.

The prospect signed. The full white-labeling feature request never came back from any other client. The partial version held for three more years without significant modification.

What I learned from it: when a single client drives a major technical investment, it's almost always worth pausing to ask whether the feature is for them or for the product. Those are different answers.
