# STAR Stories — JetBridge Head of Engineering

_Prepared for behavioral interviews. Written in first person, flowing prose._

---

## 1. Building a Platform from Zero (Founding Engineer Arc)

**Best for:** "Tell me about a time you built something from scratch" / "How do you handle ambiguity?" / "What's your approach to early-stage technical decisions?"

In 2016, a colleague and I co-founded Alaya, a purpose and impact platform for employee engagement. On day one, we had a product vision, a name, and nothing else. No codebase, no paying customers, no infrastructure. My job was to have something worth demoing in three months.

The first decision was stack. I chose Node.js, React, and PostgreSQL, not because they were the most fashionable options, but because I knew I could move fast in them alone, they'd hold under real production load, and I wouldn't need to replace them when we eventually hired. I resisted the temptation to over-engineer a multi-service architecture when a well-structured monolith would do. Within three months we had a working demo; within twelve, our first paying enterprise client.

What followed was five years of building in parallel with the business: multi-tenant architecture, API layers, impact reporting modules, postal campaign features, onboarding the first engineers, setting up CI/CD from scratch, writing the first architecture docs. When Benevity acquired us in 2021, the codebase and the team transferred cleanly. Fifty-plus enterprise clients across Switzerland and France were on the platform.

Looking back, I'd have invested in observability earlier. We added proper application monitoring late, and there were painful debugging nights we could have avoided. I'd also design multi-tenancy in from day zero rather than retrofitting it, which cost us several weeks of migration work.

---

## 2. A Hard Architecture Decision Under Pressure

**Best for:** "Tell me about a technical trade-off you navigated" / "How do you handle technical debt?" / "Describe a time you had to push back on business pressure."

At Alaya, by 2019 our monolith was showing strain. The team was split: some wanted a full microservices rewrite, others wanted to stay the course. Investors were pushing for new product features, not engineering infrastructure work. I needed to make a call that the whole company could live with.

I didn't want to decide based on preferences or gut feeling, so I ran a two-week spike comparing both paths with real prototype load tests. Then I brought the numbers to the CEO and our investors, not opinions, actual metrics showing where the bottlenecks were and what each approach would cost in engineering weeks. What I proposed was a "strangler fig" migration: extract the two highest-traffic modules first, keep the rest monolithic, and define clear criteria for extracting more. No big-bang rewrite.

We shipped the first extracted module in six weeks. Performance on those endpoints improved by roughly 40%. The remaining monolith held stable through the Benevity acquisition two years later, which validated the decision.

The hardest part wasn't the engineering; it was convincing people that "not rewriting everything" was the right answer. Some engineers felt it was a compromise. Data helped cut that debate short. Next time I'd do the benchmarking even earlier to avoid the weeks of debate that preceded it.

---

## 3. Establishing Engineering Culture Without a Mandate

**Best for:** "How do you lead without authority?" / "Tell me about driving organizational change" / "What's your approach to technical culture?"

When I joined Benevity after the acquisition, I was a Senior Staff IC with no direct reports. But I saw that AI-assisted development could meaningfully change how our engineering teams worked, and I wanted to move on it before the moment passed. The catch: the engineers who'd benefit most didn't report to me, and I had no mandate to change their workflows.

I started small. Three engineers who were already curious about AI tooling agreed to experiment with me. I built internal demos that showed concrete time savings on their actual work, not toy examples. Then I started running informal lunch sessions, no attendance required, no slides, just me showing something useful and answering questions. I also built reusable prompt templates for code review and PR summaries, committed them to a shared repo, and documented a few quick wins with numbers: "saved two hours on a PR review cycle."

Within three months, roughly 70% of engineers on both teams were using AI-assisted workflows regularly. More importantly, they'd adopted it on their own terms, which meant they became internal advocates. That's not something a top-down decree would have produced.

What I learned from this: in a culture change, early adopters do more work than the person driving the change. My job was to make them successful and visible.

---

## 4. Navigating a Post-Acquisition Integration

**Best for:** "Tell me about navigating organizational change" / "How do you work with teams you don't control?" / "Describe a time you had to adapt to a new environment."

Joining Benevity after the acquisition was a significant shift. Alaya had been a team of eight; Benevity had hundreds of engineers. Different architecture (Java, microservices), different release cadence, different vocabulary for how decisions got made. My instinct was to move fast and start fixing things. That instinct was wrong.

I spent the first month mostly mapping. Reading codebases, sitting in on team meetings, having one-on-ones with platform and infrastructure engineers before I said anything about how things should change. I wanted to understand what was actually working before proposing modifications. It took longer than I'd have liked, but it earned me credibility I couldn't have built any other way.

Over the following year, I contributed to three major cross-team architecture decisions and became the go-to person for AI tooling across two engineering teams. The Alaya product surface was successfully migrated into the Benevity platform.

The lesson I'd take from that experience: in a large organization, the first thing to invest in is relationships, not solutions. The most technically correct proposal fails if nobody trusts you yet. I moved too fast in my first few weeks and had to walk some of that back. Slowing down to listen first made me more effective for the next four years.

---
