# STAR Stories: Scait / Founding Engineer (Frontend Focus)

---

## 1. Building the Alaya Frontend from Zero to Acquisition

**Best for:** "Tell me about building a product from scratch" / "What does a founding frontend engineer actually do?"

In 2016 I co-founded Alaya, a purpose and impact platform for employee engagement, with two other people and no product, no customers, and no codebase. My co-founder ran sales while I owned everything technical, which in practice meant I was the frontend for the first several months. I picked React over the fancier options on the market at the time because it was pragmatic and easy to hire for, not because it was trendy.

The tricky part wasn't the first version, it was what came after. Once we signed our first enterprise clients, HR admins started asking for dashboards that could slice engagement and impact data by team, region, and campaign, all while the underlying data model was still multi-tenant and half-finished. I rebuilt the core dashboard twice as those requirements solidified, moving from a quick component tree to a more deliberate state management layer once it was clear the product wasn't going away. Each rebuild bought us real time later; users noticed lag and confusing state a lot faster than they noticed backend inefficiency.

By 2021 we had 50-plus enterprise clients running on that frontend across Switzerland and France, and Benevity, a Canadian unicorn valued north of a billion dollars, acquired us. The UI never needed a full rewrite after the acquisition, which told me the second rebuild had been the right call.

What I'd do differently: I'd have brought in a proper design system a year earlier than I did. I was solving one-off UI problems for a while that a shared component library would have made trivial.

---

## 2. Leading Frontend Tooling Adoption Without Formal Authority

**Best for:** "How do you drive change without direct reports?" / "Tell me about influencing engineers who don't report to you"

At Benevity, after the Alaya acquisition, I was a Senior Staff IC with no direct reports, working close to the Europe-facing product surface. I'd started using AI-assisted tooling for frontend code review and component generation and was convinced it could save real time across two teams that had no reason to listen to me specifically.

Rather than pitch it top-down, I found three engineers who were already curious and built small, concrete demos with them: a PR review that used to take two hours down to about forty minutes, that kind of thing. Then I ran informal lunch sessions with no attendance requirement, just live demos on real tickets, and put together a shared repo of prompt templates people could copy straight into their own workflow.

Within three months roughly 70% of engineers on both teams were using AI-assisted workflows regularly, and I ended up the informal go-to person for it across the org, without anyone assigning me that role.

Looking back, the slow, opt-in approach cost me a few weeks I could have saved with a mandate, but the engineers who adopted it on their own terms kept advocating for it long after I'd moved on to other things. A top-down rollout wouldn't have had the same staying power.

---

## 3. Choosing a Modular Frontend Architecture Under Pressure

**Best for:** "Tell me about a technical trade-off you navigated" / "How do you handle technical debt?"

Around year three at Alaya, the monolithic frontend was starting to strain under its own weight. Every new feature meant touching a shared bundle that kept getting slower to build and riskier to ship, while investors wanted new features, not a rewrite quarter. Some engineers wanted to break everything into micro-frontends immediately.

I ran a two-week spike comparing a full micro-frontend split against a more targeted extraction, with actual load and build-time numbers instead of opinions. I presented both options to the CTO with the data laid out plainly, then proposed extracting just the two heaviest, highest-traffic modules first and defining clear criteria for when to pull out more. The rest stayed as it was.

The first extracted module shipped six weeks later, and load times on the busiest pages improved by roughly 40%. The remaining frontend held up fine through the acquisition, so the full rewrite everyone was nervous about never had to happen.

The hard part was convincing people that partial extraction wasn't a compromise, it was the correct answer. Data got that across faster than argument did. Next time I'd run the benchmarks even earlier, before the debate had a chance to get emotional.

---

## 4. Navigating a Post-Acquisition Integration as a Frontend-Leaning Engineer

**Best for:** "Tell me about working across a much larger, more complex organization"

When Benevity acquired Alaya in 2021, I went from a team of eight to an engineering org roughly ten times that size, and from a TypeScript and React stack to one where the core platform ran on Java. I'd been the person who made the frontend calls at Alaya; suddenly I was one senior engineer among many, with no particular standing.

I spent the first month mostly listening: reading architecture docs, sitting in on planning meetings, and asking questions about how the product teams thought about the user-facing layer before I offered any opinions of my own. It felt slow compared to how I was used to operating, but engineers who show up and immediately start proposing changes tend to burn credibility they haven't earned yet.

Once I understood how the org actually worked, I built relationships with the platform and infra teams first, then started contributing to decisions that touched the parts of the product I knew best. I ended up part of three major cross-team architecture decisions in that first year and became the AI tooling reference point for two teams.

The lesson that stuck: slowing down at the start actually compresses the timeline later. I pushed on a couple of things too early that weren't broken, and I had to spend some goodwill earning back the credibility that cost me.
