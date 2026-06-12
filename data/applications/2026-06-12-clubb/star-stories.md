# STAR Stories — Clubb, Founding Software Engineer

---

## 1. Building a Platform from Zero to Acquisition

**Best for:** "Tell me about a time you built something from scratch" / "What does founding engineer mean to you?"

In early 2016 we had two founders, no product, and the first enterprise prospects asking hard questions. My co-founder was handling sales; I had to architect and ship an entire platform before we had a single paying customer.

My job was to get something real in front of clients within months, then expand it iteratively as the business grew. I chose a deliberate, unfancy stack: Node.js, React, PostgreSQL, AWS. Nothing that would require a specialist to maintain. The first version was intentionally thin, just core membership features and a basic dashboard, enough to close the first contract. From there I expanded the architecture progressively: multi-tenancy, an API layer for enterprise integrations, impact reporting, postal campaign tools. About eight months in, I onboarded the first two engineers, which forced me to properly document the system for the first time.

By 2021 we had 50+ enterprise clients across Switzerland and France. Benevity, a Canadian unicorn at $1B+ valuation, acquired us. The technical decisions from those first months held through acquisition due diligence and a full platform migration.

What I'd do differently: instrument observability from day one. We added proper APM late, and retrofitting it under live enterprise load was genuinely painful. I'd also design multi-tenancy in from the start rather than migrating to it.

---

## 2. Architecture Trade-off Under Pressure

**Best for:** "Tell me about a hard technical decision" / "How do you balance speed vs. quality?"

At Alaya around year three, the monolith was showing strain. The team was split between a full microservices rewrite and a modular monolith approach, and investors were pushing hard for new features, not rewrites. It fell to me to make the call.

I needed to make a defensible decision that balanced long-term scalability with short-term delivery. Walking in with opinions wasn't going to work: I needed data.

I ran a two-week technical spike comparing both approaches with prototype load tests. Then I presented the trade-offs to the CTO and investors with concrete numbers, not engineering theory. My recommendation was a strangler-fig migration: extract the two highest-traffic modules first, keep the rest monolithic, and define clear criteria for when additional extraction made sense.

The first extracted module shipped in six weeks. Performance improved roughly 40% on the busiest endpoints. The remaining monolith stayed stable all the way through the Benevity acquisition. No big-bang rewrite.

The hardest part wasn't the technical choice. It was convincing people that "not rewriting everything" was the right call. Data helped a lot. I'd start the benchmarking even earlier next time, to cut the debate shorter.

---

## 3. Driving AI Adoption Without a Mandate

**Best for:** "How do you lead without authority?" / "How do you introduce new tooling?" / AI-focused roles

At Benevity I was a Senior Staff IC with no direct reports, but I needed to change how two teams of engineers worked by getting them to use AI-assisted development tools. There was no management directive. I had to make it happen on the strength of the idea itself.

I started small: three engineers who were already curious about the tooling. I built demos showing concrete time savings, ran informal lunch sessions with no pressure to attend, and committed reusable prompt templates to a shared repo so the tools felt like team infrastructure rather than a personal side project. When I saved two hours on a PR review cycle, I wrote it up and shared it internally as a concrete story, not a pitch.

Within three months, roughly 70% of engineers across both teams had integrated AI tools into their daily workflow. I became the informal AI tooling lead for the broader engineering org without ever being asked to play that role officially.

The mandate-free approach was slower but much stickier. Engineers who adopted on their own terms became advocates. A top-down decree would have gotten compliance, not genuine adoption.

---

## 4. Navigating a Post-Acquisition Integration

**Best for:** "Tell me about adapting to change" / "How do you work in a larger organization?"

When Benevity acquired Alaya in 2021, I joined an engineering org roughly ten times larger than what I'd been used to. Different culture, different codebase (Java microservices, not Node), different processes, different expectations.

My task was to integrate Alaya's features into Benevity's platform while continuing to ship new product, without losing the velocity we'd built.

I spent the first month deliberately not proposing changes. I mapped the existing architecture, built relationships with platform and infra teams, and tried to understand why things were the way they were before forming opinions. Only after that did I start contributing to architecture decisions. I also drove cross-team alignment on three major platform changes and eventually became the go-to person for AI tooling adoption across the Europe-facing product surface.

Core Alaya features were successfully migrated into Benevity's platform. I contributed to three major cross-team architecture decisions over the following two years.

I moved too fast initially, trying to "fix" things that weren't actually broken from the new org's perspective. Slowing down and listening first made me significantly more effective. It's a lesson I carry: new environments require curiosity before opinions.
