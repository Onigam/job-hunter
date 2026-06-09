# STAR Stories — Crystal Intelligence VP Engineering

## 1. Leading a Platform Migration Without Breaking What's Live

**Best for:** "Tell me about a major platform migration you led" / "How do you manage technical debt under delivery pressure?"

At Alaya, we'd built the platform fast to get to market, and by 2019 the monolith was showing real signs of stress: slow deploy cycles, modules stepping on each other, increasing latency on the highest-traffic endpoints. The company had 50+ enterprise clients at that point, and a full rewrite would have been a multi-quarter risk. The team was split between "rewrite everything now" and "keep shipping features."

My job was to make a defensible call and stick to it. I ran a two-week technical spike: prototype load tests on the candidate architectures, concrete numbers on engineering effort, honest assessment of what could actually go wrong mid-migration. I presented the findings to the CTO and the investors, not as a preference but as data. The recommendation was a strangler fig approach: extract the two highest-traffic modules first, keep the monolith for everything else, and set explicit criteria for when to extract the next module.

We shipped the first extracted service in six weeks. Latency on those endpoints dropped by roughly 40%. The monolith stayed stable and manageable through the Benevity acquisition two years later. No big-bang rewrite was needed.

What I'd do differently: I'd have started the benchmarking two months earlier, before the team debate got loud. The data cut the argument short once it existed. Getting it sooner would have saved time and some internal friction.

---

## 2. Building an Engineering Organization from Zero

**Best for:** "Tell me about building a team" / "How do you approach hiring and org design?" / "Describe your leadership style"

In 2016, Alaya was just me and two co-founders. My responsibility was to build not just the product but the engineering function from scratch, including the first hires, the culture, and the practices that would hold when we scaled.

I'd architected the core platform in the first three months to get us to a first demo. The harder problem was hiring people and not losing the speed we'd built. Every early hire made or broke the team's trajectory.

I hired the first three engineers with a strong bias toward ownership and intellectual honesty over raw technical skills. I set up CI/CD from day one, introduced code review as a practice before it was needed (not after), and wrote architecture decision records for the two or three choices that would be expensive to undo. I was explicit with the team about what I didn't know and what I was figuring out as we went.

When we were acquired by Benevity in 2021, the engineering team had grown to eight people, the platform had never had a major outage, and three of those first hires were still there. That's the outcome I measure "team building" by.

The thing I'd change: I waited too long to put observability in place. We added proper APM late, and debugging production issues in the year before we had it cost real hours. Next time, I'd treat observability as infrastructure from month one.

---

## 3. Driving Architectural Alignment Across Teams I Didn't Manage

**Best for:** "Tell me about leading without formal authority" / "How do you align engineers across functions?" / "Describe a time you influenced up and sideways"

After the Benevity acquisition, I was a Senior Staff IC on a team roughly ten times larger than what I'd come from. No direct reports. Different culture, different codebase (Java microservices), different rhythms. I needed to contribute to architectural decisions that involved three or four teams, none of which reported to me.

The instinct coming from a founding-engineer background is to push hard and fast. I learned quickly that the right move was the opposite. I spent the first month mapping the existing architecture before proposing anything. I built relationships with the platform and infra leads before I had opinions in the room. When I did bring a proposal to a cross-team architecture review, I made sure it came with context, trade-offs, and acknowledgment of what I didn't know about their constraints.

Over the following year, I contributed to three significant cross-team architecture decisions and became the informal liaison for the Europe-facing product surface. More practically, I drove AI tooling adoption across two engineering teams without a mandate, starting with a small group of engineers who were curious, building internal demos, running optional sessions, and documenting the concrete time savings in shared repos. Within three months, roughly 70% of engineers on both teams had adopted AI-assisted review and generation workflows.

The lesson: engineers in large orgs adopt things they helped shape, not things handed down. That's not just true of AI tools, it's true of any architectural shift you're trying to land.

---

## 4. Navigating a Hard Transition: Acquisition Integration

**Best for:** "Tell me about managing change at scale" / "Describe a time you had to adapt your working style significantly" / "How do you operate in ambiguity?"

The Benevity acquisition closed in 2021. One week I was a co-founder with full context on every technical decision in the codebase. The next I was one engineer in a 150-person engineering organization with a Java monolith I'd never seen, product managers I didn't know, and processes built for a company ten times Alaya's size.

My task was to keep delivering on the Alaya product surface while integrating it into Benevity's platform, without stalling either roadmap.

The first thing I did was stop trying to fix things. I forced myself to observe for a month: how decisions got made, where the real architectural leverage points were, which teams were stuck and which were moving fast, who the informal leaders were. The impulse to "improve things" from day one was strong; it was also the fastest way to lose credibility in a culture I didn't understand yet.

Once I had that map, I started contributing in places where I had clear, unique value: cross-team architectural alignment on the Europe product surface and AI tooling adoption where the team was curious but lacked a structured approach. Both became areas where I had real impact within six months.

The reflection is simple: moving into a larger org after founding a company, the thing you have to manage most carefully is your own pace. Competence without context is noise. The month I spent slowing down and listening made everything after it faster.
