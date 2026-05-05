# STAR Stories — Engineering Manager, Core Platform at n8n

## Story 1: Building the Engineering Team at Alaya from Zero
*Best for: "Tell me about scaling an engineering team" / "How do you build culture?" / "How do you approach hiring?"*

In 2016, I co-founded Alaya with no product, no team, and no established process. The business was already talking to its first enterprise clients, which meant I was designing a multi-tenant platform architecture at the same time I was figuring out who to hire.

My job was to make all the structural decisions in the right order: stack, architecture, hiring criteria, and the working norms that would outlast me as the sole engineer. I chose Node.js, React, and PostgreSQL partly for their hiring market in Switzerland, not just their technical merits. I designed for multi-tenancy from day one after nearly skipping it to ship faster, a near-miss I caught in a one-day spike before it would have cost weeks to retrofit.

The first three engineers I hired came in within a year of launch. I set up CI/CD before they joined, wrote the code review guidelines before the first PR, and ran architecture sessions fortnightly so decisions didn't pile up in my head. By the time we had five people, the team was shipping independently on distinct surface areas.

We reached 50+ enterprise clients across Switzerland and France before Benevity acquired us in 2021. What I'd do differently: invest in observability earlier. We added proper APM about a year too late, and the gap showed when we had our first complex production incident.

---

## Story 2: Navigating Post-Acquisition Integration at Benevity
*Best for: "Tell me about managing through organizational change" / "How do you operate in a large, complex org?"*

When Benevity acquired Alaya in 2021, I joined as Senior Staff Engineer on a team roughly 10 times larger than what I'd built. Different codebase, Java and microservices instead of Node.js, different release processes, different vocabulary for the same concepts.

I needed to integrate Alaya's capabilities into Benevity's platform while staying useful and credible to people who had no particular reason to trust the new hire from the acquired company.

I spent the first month doing almost no proposing. I mapped the existing architecture, read the post-mortems, and had one-on-ones with the platform and infra leads before I showed up with opinions. Then I picked a small, visible problem I could fix without needing anyone's permission, shipped it, and used that credibility to get into larger architecture conversations. I also started driving AI tooling adoption informally: built internal demos showing concrete time savings, ran lunch-and-learn sessions with no mandate attached, and committed reusable prompt templates to a shared repo.

Within three months, roughly 70% of engineers on both teams were using AI-assisted code review and generation regularly. I contributed to three major cross-team architecture decisions and became the informal point of contact for AI tooling across the org.

The thing I'd revise: I wasted about three weeks trying to fix processes that weren't actually broken, just different from what I knew. Slowing down and listening first would have bought me the same outcome in half the time.

---

## Story 3: Architecture Decision Under Delivery Pressure
*Best for: "Tell me about a hard technical trade-off" / "How do you handle technical debt vs. new features?" / Demonstrating technical depth as an EM*

At Alaya, around year three, the monolith was showing scaling cracks on our highest-traffic endpoints. The team was split: a faction wanted a full microservices rewrite, another wanted to stay put and optimize. Investors were pushing for new features, not a multi-month engineering detour.

My job was to make a call that was technically defensible and wouldn't blow up the delivery roadmap.

I proposed a two-week spike to actually test both paths with synthetic load, rather than debate on intuition. The spike produced concrete numbers. A full rewrite would take at least four months with significant feature delivery risk and no user-facing benefit until we were done. An incremental extraction of the two highest-traffic modules could ship in six weeks and validate the pattern before we committed to doing more. I presented both options with the metrics, not a recommendation disguised as data.

We did the incremental extraction. Performance improved roughly 40% on those endpoints. The rest of the monolith stayed stable through acquisition-level technical due diligence. No big-bang rewrite was ever needed.

The lesson I took from it: the hardest part wasn't the architecture decision itself, it was convincing people that "not rewriting everything" was a valid engineering choice. The two-week spike gave us shared ground truth, which cut the argument short. I'd do that earlier next time.

---

## Story 4: Driving Culture Change Without a Mandate
*Best for: "How do you lead without formal authority?" / "Tell me about influencing engineering culture" / Platform team leadership*

At Benevity, I was a Senior Staff IC with no direct reports. I'd identified that AI-assisted development could meaningfully reduce review cycles and boilerplate generation time, but I had no authority to require anyone to use new tools.

I needed to change how two engineering teams worked, on a voluntary basis, in an org where every team already had a full roadmap.

I started with three engineers who were already curious. I built concrete internal demos: one showed how a specific PR review task dropped from two hours to twenty minutes with an AI-assisted workflow. I committed reusable prompt templates to a shared repo so adoption had near-zero setup cost. I ran informal lunch sessions with no slides and no mandate, just screen-sharing and Q&A. When early adopters started mentioning it in sprint retros on their own, I documented those stories and shared them across teams.

Within three months, roughly 70% of engineers on both teams had integrated the tooling into their daily workflow. That number wasn't from a survey or a decree; it came from commit log patterns and the fact that the shared prompt repo had 40+ contributors.

What I took from it: mandated adoption and earned adoption produce very different outcomes. Engineers who chose the tooling on their own terms became internal advocates. I couldn't have manufactured that with a top-down directive. For any culture change at scale, I'd run the same playbook: find the early adopters, make adoption cost near-zero, document the wins in the team's own words.

---

## Story 5: Hiring Under Pressure and Getting the Process Right
*Best for: "Tell me about a hiring decision" / "How do you build a high-performing team?" / Org design and EM fundamentals*

At Alaya, about 18 months after founding, we had our first real engineering hire to make and I got it wrong on the first attempt. I'd moved too fast, optimizing for speed over fit, and hired someone technically solid who didn't match the working style of a two-person company where everyone shipped directly to production with no safety net.

The person left within two months. We lost about six weeks of effective output during the ramp and the departure.

I rebuilt the hiring process from scratch: a take-home that mirrored the actual ambiguity of our work rather than a clean algorithmic problem, a pair programming session to see how the candidate thought out loud, and an explicit conversation about what "ownership" meant in a team this size. I also started writing the role description from the perspective of what would make someone succeed in the first 90 days, not what would look good on paper.

The next three engineers I hired stayed through the acquisition and beyond. Two of them moved to Benevity. The process change added about two weeks to the hiring cycle, but the quality signal was dramatically better. I use the same framework now when thinking about early engineering hires: slow down the definition phase, speed up the decision once you have enough signal.
