# STAR Stories — Omnia Co-Founder & CTO

---

## 1. Building Alaya from Zero to Acquisition

_Best for: "Tell me about building something from scratch" / "What does your founding experience look like?" / any co-founder validation question_

In 2016, I co-founded Alaya with a blank page and a rough hypothesis about employee engagement. No customers, no platform, no team. My job was to architect and build the entire system while the business was simultaneously signing its first enterprise contracts, which meant I had maybe three months before we needed something real to demo.

I chose a pragmatic stack: Node.js, React, PostgreSQL. Nothing exotic, things I could move fast with and hire for without difficulty. The first version was deliberately thin. Over the following two years I expanded it to support multi-tenancy, impact reporting, postal campaigns, and an API layer for enterprise integrations. I also hired and onboarded the first three engineers and put in place the CI/CD culture and code review practices that would carry us through to exit.

By 2021, the platform had 50+ enterprise clients across Switzerland and France. Benevity, a Canadian unicorn at $1B+ valuation, acquired us. That acquisition was a direct validation of the decisions made in the first three months, because the tech had to hold up through due diligence and a post-acquisition integration that exposed a lot of what we'd built.

Looking back, the two things I'd do differently: add proper observability from month one rather than retrofitting APM later, and design multi-tenancy into the data model on day zero. The retrofit cost us about six weeks of engineering velocity, which is avoidable.

---

## 2. Making a Hard Architecture Decision Under Pressure

_Best for: "Tell me about a technical trade-off you navigated" / "How do you handle technical debt?" / "How do you make decisions under uncertainty?"_

About two years into building Alaya, the monolith was starting to show strain. Certain endpoints were timing out under load, new features were slowing down because everything was coupled, and the team split roughly into two camps: full microservices rewrite versus staying the course. Meanwhile, investors were pushing for new product work, not infrastructure. I had to make a call that everyone could stand behind without stalling the product for six months.

I ran a two-week technical spike. We built prototypes of both approaches, ran load tests, and I wrote up a concrete comparison with real numbers rather than opinions. Then I proposed a third path: a strangler fig pattern, extract the two highest-traffic modules first, leave the rest monolithic until there was a clear reason to extract more. I presented the data to the team and to investors, not asking for permission but being transparent about the trade-offs.

We shipped the first extracted module in six weeks. Performance on the busiest endpoints improved by roughly 40%. The remaining monolith stayed stable through the Benevity acquisition eighteen months later. No big-bang rewrite was ever needed.

The thing I learned is that "don't rewrite everything" is a genuinely hard sell, even when it's right. Data helped more than arguments. I'd invest in early benchmarking sooner to shorten the opinion phase, because that's where the real calendar cost was.

---

## 3. Driving AI Tooling Adoption Without a Mandate

_Best for: "How do you influence without authority?" / "Tell me about leading through change" / AI/ML leadership questions_

At Benevity, I was a Senior Staff IC with no direct reports. I wanted to shift how two engineering teams worked day-to-day by introducing AI-assisted code review and generation tools, but neither team reported to me and they had no particular reason to change a workflow that was already working well enough.

I didn't try to mandate anything. I started with three engineers who were already curious, spent a few sessions with them building demos that showed concrete time savings on their actual work. Then I ran informal lunch sessions, completely voluntary, no presentation decks, just showing what we'd done. I built a set of reusable prompt templates and committed them to a shared repo so there was something tangible to take away, not just an interesting idea.

Within three months, roughly 70% of engineers on both teams were using AI-assisted code review and generation as part of their regular workflow. I became the informal AI tooling lead across the org, which wasn't a title anyone gave me.

The lesson was that adoption driven by genuine usefulness sticks differently than top-down mandates. The engineers who came in early became internal advocates and reached people I never would have gotten to directly. It was slower than a decree, but far more durable.

---

## 4. Post-Acquisition Integration: Joining a 100-Engineer Org

_Best for: "Tell me about navigating a major transition" / "How do you work with large teams?" / "What happens after a startup exits?"_

When Benevity acquired Alaya in 2021, I went from a team of eight to a company with over a hundred engineers, a Java microservices codebase, North American product culture, and processes built for a very different scale. I joined as Senior Staff Engineer with no formal authority but the expectation of contributing at a senior level from day one in a system I'd never seen.

My instinct was to move fast and start proposing changes to things that looked different from how we'd done them at Alaya. I held that instinct back deliberately. For the first month, I focused almost entirely on understanding the existing architecture before touching anything. I mapped the systems, read architecture decision records, and had conversations before forming strong opinions.

When I did start contributing, I had enough context to propose things that fit the existing constraints rather than fighting them. I contributed to three major cross-team architecture decisions in my first year and became the go-to person for the European product surface. The AI workflow adoption work came in year two, once I had enough trust to run informal campaigns across teams.

The honest version is that slowing down felt wrong in the moment. In a new environment, listening gives you the map you need to be effective. Moving fast without that map just makes you annoying, not impactful. I'd do it the same way again.

---

## 5. Setting Engineering Culture at a Zero-to-One Company

_Best for: "What does your team-building experience look like?" / "How do you hire and mentor engineers?" / "What kind of engineering culture do you create?"_

At Alaya, I was both the only engineer and the technical hiring manager for the first three years. The engineering culture we had at 10 people was essentially the one I'd built by deliberate choice, starting with the first hire.

I'd seen enough bad patterns to know what I wanted to avoid: code review as gatekeeping rather than knowledge sharing, CI/CD as an afterthought, architecture documentation that nobody updates. So I set up the processes early, even when they felt unnecessary for a team of two. A lightweight RFC process for significant decisions, automated tests as a baseline requirement for every PR, a shared architecture doc that the whole team could edit.

When I hired the first three engineers, I spent real time on onboarding, not just tool setup but the reasoning behind the choices we'd made. The goal was for them to be able to make good decisions in my absence, not to wait for me to validate everything.

By the time Benevity acquired us, the team could operate without me in the loop on day-to-day technical decisions. That's the actual output of culture work: people who can reason about problems you haven't anticipated yet.

What I'd change is that I waited too long to introduce structured one-on-ones and career development conversations. I was focused on the product and treated people management as a secondary concern. It worked out, but some of the junior engineers deserved more structured mentorship earlier.
