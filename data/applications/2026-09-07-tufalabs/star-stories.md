# STAR Stories: Tufa Labs Research Engineer

---

## 1. Scaling the Highest-Traffic Modules Under Load
*For: "Tell me about a systems problem you solved" / "How do you approach performance work" / "Debugging under production load"*

Back in 2019 at Alaya, our Node.js monolith started showing real cracks. Two modules in particular, the impact reporting engine and the notification dispatcher, were causing latency spikes that dragged down the whole app whenever a big client ran a campaign. Half the team wanted a full microservices rewrite. The other half wanted to just optimize in place. Investors wanted neither; they wanted new features.

I was asked to make the call and get people behind it without burning two quarters on the wrong bet. I ran a two-week spike, load-tested both approaches against real production data volumes, and brought numbers instead of opinions to the table. The data pointed at something narrower than either camp expected: pull out just those two modules, leave the rest of the monolith alone, and define concrete criteria for extracting more later if needed.

We shipped the first extraction in six weeks. Latency on the busiest endpoints dropped by roughly 40%, and the rest of the system stayed stable through the acquisition two years later.

If I'm honest, the technical decision wasn't the hard part. Getting engineers who wanted to rewrite everything to accept that doing less was the harder call took longer than the actual migration. I'd run the benchmarks earlier next time, before the debate rather than during it.

---

## 2. Building Alaya's Platform From Nothing
*For: "Tell me about ambiguity" / "What's the most complex system you've built" / founding-engineer questions*

I co-founded Alaya in early 2016 with two non-technical partners. There was a product vision, a couple of promising enterprise conversations, and no code at all. For the first several months I was the only engineer.

The task was to get something credible enough to close paying clients while not painting myself into a corner architecturally. I picked Node.js, React, and PostgreSQL, mostly because I could move fast in them and they wouldn't force an early rewrite. First working version took about three months. After that it was iterative: multi-tenant data isolation, an API layer for enterprise integrations, impact reporting, eventually a mobile app.

Once we started hiring, I set up CI, code review norms, and basic architecture docs early on, partly because I'd seen what happens when teams bolt those on after the fact. By the time Benevity acquired us in 2021, we had 50-plus enterprise clients across Switzerland and France, and their engineers could read and extend the codebase without a rewrite.

What I'd change: I added proper observability too late, which made a couple of production incidents harder to diagnose than they should've been. I'd also design for multi-tenancy from day one instead of retrofitting it the first time an enterprise client asked for data isolation guarantees.

---

## 3. Getting Engineers to Adopt AI Tooling Without a Mandate
*For: "How do you influence without authority" / "Driving change across teams you don't manage"*

At Benevity in 2023 I wanted engineering teams to actually use AI-assisted development day to day, not just poke at Copilot once and forget it. Adoption was patchy and honestly a little distrustful. I had no direct reports and no mandate to hand down.

So I started small: three engineers who were already curious. I built demos around real tasks, not toy examples, things like PR review summaries and test generation for legacy code that nobody wanted to touch. No slides, no top-down push, just lunch sessions and a shared repo of prompt templates that people could take or leave.

Within about three months, roughly 70% of engineers across two teams were using AI-assisted review and generation regularly, and some of them had started contributing their own templates back and pitching the approach to other teams on their own.

The thing I took from it: mandate-free adoption is slower to start but it sticks, because people who choose something on their own terms end up defending it. I've carried that lesson into how I think about introducing any new tooling, including whatever workflow changes come with working on RL infrastructure at this scale.

---

## 4. A Hard Call on Post-Acquisition Architecture
*For: "Tell me about navigating a large organization" / "How do you build trust in a new environment"*

When Benevity acquired Alaya, I went from an eight-person team to an engineering org roughly ten times that size, running a different stack (Java microservices versus our Node.js setup) with different decision-making rhythms. My first instinct was to start fixing things I could immediately see as suboptimal.

That instinct was wrong, and it took about six weeks to realize it. What worked instead was spending the first month just mapping the existing architecture and building relationships with the platform and infra teams before I said anything opinionated. A few of their early choices looked odd to me at first glance, but once I understood the constraints they'd been made under, most of them held up.

Once I'd earned some credibility, I contributed to three major cross-team architecture decisions in the first year and became the person people pulled in for AI tooling questions across two teams. The Alaya-to-Benevity integration went smoother than most acquisitions I've heard about, mostly because we prioritized understanding the system before trying to change it.

The reflection is simple, if a little unsatisfying: slowing down to actually listen made me faster later, not slower overall.
