# STAR Stories — UpGrid AG CTO / Co-Founder

---

## Story 1: Building Alaya from Zero to Acquisition
*Best for: "Tell me about a time you built something from scratch" / "Walk me through your founding experience" / "How do you handle ambiguity?"*

In 2016, my co-founder and I started Alaya with no product, no customers, and a rough idea of what the market needed. My job from day one was to build the entire platform, alone at first. The pressure was real because we were signing enterprise clients before we had anything production-ready.

I chose the stack deliberately: Node.js, React, and PostgreSQL. Nothing exotic, nothing that would paint us into a corner. The goal was to get to a real demo in 90 days, and we did. Over the next three years I expanded it into a multi-tenant SaaS platform with an API layer, impact reporting, postal campaign management, and a public API for enterprise integrations. As the team grew, I brought in our first three engineers and built the development culture from scratch: code review standards, CI/CD pipelines, architecture docs, on-call process.

By 2021 we had 50+ enterprise clients across Switzerland and France. Benevity, a Canadian B-corp that had reached unicorn status, acquired us. The acquisition validated the technical foundations under real due diligence on the codebase.

Looking back, the thing I'd do differently is invest in observability from the start. We added proper APM quite late, which made debugging production issues harder than it needed to be. I'd also design for multi-tenancy from day zero rather than retrofitting it mid-growth.

---

## Story 2: Making a Hard Architecture Decision Under Pressure
*Best for: "Tell me about a difficult technical trade-off" / "How do you handle technical debt?" / "Describe a time you had to decide under uncertainty"*

At Alaya, around year three, our monolithic codebase was starting to show stress under load. The team was split: one camp wanted a full microservices rewrite, the other wanted to stay monolithic. Investors were pushing for new features. I had to make a call.

I ran a two-week technical spike. We built minimal prototypes of the two heaviest modules as standalone services and load-tested both approaches with realistic traffic patterns. I brought the results to the team and to the investors, not as a pitch but as data: here's what each path costs in time, here's what each buys in capacity, here's the risk profile of each.

The decision was to do neither a full rewrite nor to ignore the problem. We used a strangler fig approach: extract the two highest-traffic modules first, keep everything else monolithic, and define clear criteria for what would trigger extracting the next one. The first module shipped in six weeks. The busiest endpoints improved by roughly 40% on response time. The rest of the monolith stayed stable all the way through the acquisition without needing another major intervention.

The hardest part wasn't the architecture. It was convincing people that "not rewriting everything" was the disciplined choice, not the lazy one. Data shuts that conversation down faster than anything else.

---

## Story 3: Leading Without Formal Authority
*Best for: "How do you lead without being a manager?" / "Tell me about driving change in an organization" / "How do you influence peers?"*

After the Benevity acquisition I moved into a Senior Staff IC role. No direct reports, two teams that didn't work for me, and a goal to shift how both teams worked: I wanted them adopting AI-assisted development workflows. This was 2022-2023, before most tools were mature, and I had no mandate to push anything.

I started small. Three engineers who were curious. I ran informal sessions during lunch, no slides, just live demos showing real time savings on their actual pull requests. I built a small library of reusable prompt templates and committed it to a shared repo so people had something concrete to try. I wrote up one specific case where AI-assisted review caught a subtle bug that had sat in the codebase for months, posted it in internal Slack, and let it spread on its own.

Within three months, roughly 70% of engineers on both teams were using at least one AI-assisted workflow regularly. The approach was eventually formalized and I became the informal AI tooling lead across the engineering org.

What made it stick was that no one was told to do it. Engineers who adopted it on their own terms became internal advocates. A top-down mandate would have gotten surface compliance, not genuine behavior change.

---

## Story 4: Navigating a Major Technical Integration
*Best for: "Tell me about navigating a big change" / "How do you work across teams?" / "Describe joining a much larger organization"*

When Benevity acquired Alaya in 2021, I went from a 12-person startup to an organization of several hundred, with a different codebase, Java microservices, different processes, and a different culture. My goal was to integrate Alaya's features into Benevity's platform without losing the product velocity we'd built.

The first thing I did was spend a month just mapping. I didn't propose anything. I talked to people on the platform team, the infra team, the product team, and I tried to understand what the existing system was actually doing before forming opinions about how to change it. That patience paid off: when I did start pushing technical positions, people trusted that I'd done the homework.

Over the following year I was involved in three major cross-team architecture decisions for the Europe-facing product surface. The integration of Alaya's core features into Benevity's platform completed without a major incident.

Moving fast in a new organization often slows you down. The first month of listening was worth more than six months of pushing would have been. I'd tell that to any engineer joining a larger team after a founding-stage role.

---

## Story 5: Choosing the Right Technical Foundation Under Commercial Pressure
*Best for: "How do you balance speed and quality?" / "Tell me about early technical decisions that had long-term consequences"*

Early at Alaya, we were under pressure to ship fast. An investor had introduced us to a potential enterprise client, and the demo timeline was brutal. One of my co-founders wanted to use a low-code platform to build the MVP quickly. I pushed back.

My argument was that for a B2B SaaS targeting HR and compliance teams, we'd need custom multi-tenant access control, audit trails, and deep integrations with HR systems from day one. A low-code platform would get us to a demo faster but would collapse under those requirements within six months.

We disagreed seriously enough that I ran a three-day prototype on both approaches. I showed exactly where the low-code path hit its ceiling with a realistic enterprise data model. The founding team agreed to the custom build.

Three years later, during the Benevity due diligence, the engineering team specifically cited the clean data model and API layer as reasons the integration timeline was feasible. That's the kind of decision that's invisible when it's right and catastrophic when it's wrong. I still think the three days of prototyping to prove the point was one of the best investments I made in that company.
