# STAR Stories — Cosuno Senior AI Engineer

Tailored for: LLM systems, agentic workflows, ranking/retrieval, ML lifecycle, ambiguity tolerance, founding-engineer scope.

---

## Story 1: Building Production LLM Workflows at Benevity

**Best for:** "Tell me about a production AI system you've built" / "How do you approach evaluation for LLM systems?"

After Benevity acquired Alaya in 2021, there was no structured approach to AI tooling across the engineering org. Individual engineers were experimenting with models in isolation, with no shared evaluation criteria, no prompt versioning, and no way to measure whether a change to a system prompt actually made outputs better or worse.

I took on the task of building out a repeatable framework for LLM-integrated features, starting with code review assistance and later extending to content generation workflows. The work wasn't glamorous: I spent the first few weeks just cataloguing failure modes, collecting representative examples of bad outputs, and defining what "better" actually meant for each use case before touching any model code.

From there I built an offline evaluation pipeline using labeled datasets, A/B tested prompt variations against those benchmarks before shipping, and set up monitoring to track quality signals in production. I also introduced prompt templates versioned in git, so changes were reviewable and rollbacks were possible.

Within three months, the two teams using these workflows had measurable quality improvements on both tasks, and more importantly they had a process for knowing when to ship a change and when to iterate. I became the informal LLM system lead across the org, and the evaluation framework got reused by two other projects.

In hindsight, I should have pushed for shared evaluation infrastructure earlier. I waited until a second team needed it before generalizing; starting with that assumption would have saved significant rework.

---

## Story 2: Agentic Architecture Under Constraints

**Best for:** "Tell me about building a multi-step or agentic system" / "How do you handle ambiguity in AI product work?"

At Benevity, one of the cross-team architecture projects I contributed to involved designing an agentic workflow for a content-heavy product feature. The challenge was that the task required multiple reasoning steps, each depending on the previous, but we had strict latency requirements and a non-negotiable constraint: the system had to be auditable, meaning a human reviewer needed to understand what the agent had decided at each step.

I ran a short discovery phase comparing a few orchestration patterns: a simple chain-of-thought loop, a tool-calling approach where each step was a distinct function call, and a more structured planner-executor pattern. The tool-calling approach won on auditability and testability, even though it was more code.

I designed the step interfaces, wrote the evaluation harness, and worked with one other engineer to build the first two reasoning steps end-to-end. We ran offline evals against a hand-labeled dataset of ~200 examples before letting it anywhere near production, and set up structured logging so we could audit agent decisions in post-hoc reviews.

The system shipped and handled the feature without any of the "black box" complaints that had killed a previous attempt at the same feature. Latency was within spec. The auditing requirement, which I initially worried would slow things down, turned out to make the whole thing easier to debug.

What I'd do differently: the hand-labeling of 200 examples was the bottleneck. I'd invest earlier in tooling to make labeling faster, even if it's just a simple internal UI.

---

## Story 3: Hard Architecture Call Under Investor Pressure

**Best for:** "Tell me about a technical trade-off you navigated" / "How do you make decisions with incomplete information?"

At Alaya around 2019, the monolith we'd built was starting to crack under load. The two highest-traffic modules, notifications and impact reporting, were causing cascading slowdowns across the whole app whenever we had a spike. The team was split: some wanted a full microservices rewrite, others wanted to keep shipping features and deal with the debt later. Investors were watching timelines closely and had no patience for a multi-month rewrite.

My job was to make a call that the whole team could execute on, and defend it to the board.

I ran a two-week technical spike: prototype load tests on both approaches, a concrete estimate of migration time for each, and a risk analysis of what could go wrong. I presented the data to the CTO and investors, explicitly including the "do nothing" option with its projected cost in incident rate and developer time over the next 12 months.

The recommendation was a strangler fig: extract the two highest-traffic modules first, keep everything else monolithic until there was a concrete reason to extract more. We shipped the first extracted module in about six weeks. Performance on the busiest endpoints improved ~40%. The rest of the monolith stayed stable all the way through the Benevity acquisition two years later.

The hardest part wasn't the technical work, it was convincing people that the conservative call was the right one. Having actual benchmarks rather than opinions was what made that possible. Next time I'd front-load the benchmarking even more aggressively.

---

## Story 4: Driving AI Adoption Without a Mandate

**Best for:** "How do you influence without formal authority?" / "Tell me about changing how a team works."

In 2023 at Benevity, I wanted to get two engineering teams to actually use AI tooling in their day-to-day work. Not just have licenses to tools but use them consistently enough that it affected their velocity. I had no management authority over either team.

I started small: found three engineers who were already curious, and helped them get concrete wins, things like cutting a PR review cycle from two hours to thirty minutes by using AI to pre-triage review comments. I documented those wins in a shared doc, not as a manifesto, just as "here's what happened and here's the prompt."

Then I ran informal sessions, no mandate, no calendar invite required, just "I'll be in this room showing what I've been building, come if you're curious." I also committed a set of reusable prompt templates to a shared repo so the work was available without anyone needing to ask me directly.

Within three months, about 70% of engineers on both teams were using AI-assisted code review and generation regularly. More importantly, they were contributing back to the template library themselves, which was the real signal that it had taken hold.

The mandate-free approach was slower but significantly stickier. Engineers who adopted on their own terms became advocates; if I'd tried to push it top-down I'd have gotten compliance at best. I'd apply the same approach again.

---

## Story 5: Scaling a Platform Through Acquisition

**Best for:** "Tell me about navigating organizational change" / "How do you maintain quality during rapid growth?"

When Benevity acquired Alaya in 2021, I went from a team of eight to an organization with hundreds of engineers, a Java microservices architecture, and processes built for a much larger company. The product I'd built had to keep working while being integrated into a platform I barely understood yet.

I spent the first month doing almost nothing but listening: mapping the existing architecture, understanding what teams owned what, figuring out where the political landmines were before stepping on any of them. I didn't propose anything. I asked a lot of questions.

When I did start proposing changes, I had enough context to frame them in terms of Benevity's existing priorities rather than "here's how we did it at Alaya." That framing mattered a lot. I contributed to three major cross-team architecture decisions in the first year and became the Europe-facing product surface liaison between the platform and two product teams.

The Alaya codebase was migrated without a single production incident. We kept shipping new features throughout.

What I should have done differently: I moved too fast in the second month, before relationships were fully established. Slowing down for one more month of listening would have made the subsequent six months faster. In large orgs, trust is the real dependency.
