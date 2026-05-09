# STAR Stories — Letter AI Founding Engineer (Frontend)

## Story 1: Building Alaya's Frontend from Zero

**Best for:** "Tell me about a time you built something from scratch" / "What's your experience as a founding engineer?"

In 2016, I co-founded Alaya, a purpose and impact platform for employee engagement. We had no product, no customers, and no team. The business had signed its first investor meetings, and we needed something to demo within three months.

I was responsible for every technical decision, including the frontend. I chose React and TypeScript early, which wasn't the consensus pick at the time, because I knew we'd need to hire engineers who could onboard fast and maintain the codebase as the product grew. I built the first version of the UI alone while simultaneously setting up the CI/CD pipeline, writing documentation, and handling infrastructure. The goal was a working demo with real data, not a polished mockup.

We got there. The first demo closed our first enterprise client. From there I hired the first three engineers and set the code review culture from day one, including frontend architecture patterns that held up through the acquisition.

Alaya reached 50+ enterprise clients across Switzerland and France before Benevity, a Canadian unicorn, acquired us in 2021. The frontend I built at the start was still running in production at the time of acquisition, though heavily iterated. The early decisions on state management and component structure turned out to matter a lot as the team grew from one to seven engineers.

Looking back, I'd have invested more in automated UI testing from the start. We added it later and the retroactive coverage work cost more time than it would have up front.

---

## Story 2: Making a Hard Architecture Decision Under Pressure

**Best for:** "Tell me about a technical trade-off you navigated" / "How do you handle competing priorities?"

At Alaya, around 2019, we hit a point where the monolithic architecture was showing real cracks. Response times on our busiest endpoints were degrading, and the engineering team was debating a full microservices rewrite. Investors were pushing for new features, not rewrites. The stakes were real: a botched rewrite could have killed our runway.

My task was to make a defensible call that balanced long-term scalability against near-term delivery pressure, and to bring the team along on it.

I ran a two-week technical spike comparing both approaches, including prototype load tests on realistic data volumes. Rather than presenting opinions to the founders and investors, I presented concrete metrics: what a full rewrite would cost in engineering weeks, what the performance delta looked like between approaches, and what the risk surface was for each. I proposed a strangler-fig migration instead: extract the two highest-traffic modules into independent services first, keep the rest monolithic, and define explicit criteria for when to extract more.

The first extracted module shipped in six weeks. Performance on the busiest endpoints improved by roughly 40%. The remaining monolith stayed stable through the acquisition, with no big-bang rewrite ever needed.

The hardest part wasn't the technical work, it was convincing people that not rewriting everything was actually the bolder call. The data helped. I'd do more early benchmarking next time to cut the debate window shorter.

---

## Story 3: Driving Adoption Without a Mandate

**Best for:** "How do you influence without authority?" / "Tell me about leading a team through a change"

At Benevity, I was a Senior Staff IC with no direct reports but a clear need to change how two engineering teams worked. The goal was getting them to adopt AI-assisted development practices: code review, generation, documentation. Neither team was opposed, but neither had any particular reason to prioritize it.

I started small. Three engineers on the first team were curious, so I built internal demos for them specifically, showing real time savings on tasks they were already doing, like PR review cycles and boilerplate generation. I ran informal lunch sessions with no mandate attached, just: here's what I built, here's what it saved, ask me anything.

I also committed reusable prompt templates to a shared repo and documented specific outcomes with names and story details attached, so it felt concrete rather than theoretical.

Within three months, about 70% of engineers across both teams were using AI tooling regularly in their workflow. That group became internal advocates, which meant adoption spread further without me pushing it.

What I learned: mandate-free adoption is slower but stickier. Engineers who chose to adopt it on their own terms became advocates I couldn't have manufactured with a top-down rollout.

---

## Story 4: Navigating a Post-Acquisition Integration

**Best for:** "Tell me about adapting to a new environment" / "How do you work across teams?"

After Benevity acquired Alaya in 2021, I joined a company roughly ten times the size of what I'd left. Different codebase, different culture, different tooling decisions I hadn't made and couldn't just override.

My task was to integrate Alaya's features into Benevity's platform while keeping product velocity high, in a context where I had strong opinions but no established credibility yet.

I spent the first month mapping the existing architecture before proposing anything. I built relationships with the platform and infrastructure teams before pushing technical opinions. When I did start contributing to architecture discussions, I came with the historical context of what had worked at Alaya and what hadn't, framed as options rather than corrections.

I ended up contributing to three major cross-team architecture decisions in the first year and became the informal go-to person for AI tooling adoption across two engineering teams. The core Alaya features were successfully migrated into the Benevity platform without a production incident.

The honest reflection: I moved too fast in the first few weeks, trying to "fix" things that weren't actually broken in the new context. Slowing down and listening first made me substantially more effective. I'd carry that into any new team.
