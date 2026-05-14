# STAR Stories — Senior Platform Engineer, AI Agent Infrastructure at Yuno

---

## Story 1: Driving AI Adoption Without Formal Authority

**Best for:** "How would you drive AI adoption across Yuno's engineering org?" / "Tell me about influencing without authority" / "How do you build buy-in for new practices?"

At Benevity post-acquisition, I was a Senior Staff IC with no direct reports, but the organization had a clear need: engineers weren't using AI tooling in their daily workflows, and there was no mandate to change that. My task was to shift how roughly 40 engineers across two teams worked, without being their manager and without top-down pressure from leadership.

I started small, deliberately. Rather than rolling out a policy or running a company-wide presentation, I found three engineers who were already curious about AI tools and worked with them first. We built internal demos together showing concrete time savings: a PR review cycle that normally took half a day reduced to under an hour, test scaffolding generated from a spec in minutes. I wrote reusable prompt templates and committed them to a shared repo so anyone could pick them up without asking me. Then I ran informal lunch-and-learn sessions, optional, no slides, just live demos and questions.

Within three months, roughly 70% of engineers on both teams were using AI-assisted code review and generation in their regular workflow. More importantly, the early adopters had become internal advocates. They were sharing their own prompt libraries and pushing the practice further without me having to drive it.

The reflection: a mandate-free approach is slower but stickier. Engineers who adopted it on their own terms became advocates in a way I couldn't have manufactured top-down. For a company like Yuno where AI is becoming structural to the product itself, that kind of organic adoption matters more than compliance.

---

## Story 2: Building Alaya From Zero to Acquisition

**Best for:** "Tell me how you'd build the AI function from scratch at Yuno" / "What does building a new capability look like for you?" / "Founding engineer mindset"

In 2016 I co-founded Alaya, a purpose and impact platform for employee engagement. We had a blank page, no customers, no product, and a business that was already signing its first enterprise clients before the software existed. My job was to architect and build the entire platform alone at first, then scale a team, while the company was simultaneously selling.

The first decision was stack: Node.js, React, PostgreSQL. Pragmatic, fast to iterate, with enough ecosystem maturity that I wouldn't be maintaining esoteric tooling while also building features. I got to a first demo in three months. From there it was iterative expansion: multi-tenant architecture, API layer, impact reporting, postal campaigns. As the client roster grew, I hired and onboarded the first three engineers, established CI/CD, code review norms, and architecture documentation from day one.

By 2021, the platform was running 50+ enterprise clients across Switzerland and France, and Benevity, a Canadian unicorn with $1B+ valuation, acquired us. That acquisition was, in its own way, a validation of every technical decision made from day one: the architecture had held, the data model had scaled, and the team had velocity.

The thing I'd do differently: observability from the start. We added proper APM late, and there were several months where debugging production issues was harder than it needed to be. I'd also design for multi-tenancy from day zero rather than retrofitting it, which cost us more time than I'd like to admit.

---

## Story 3: Making a Hard Architecture Decision Under Investor Pressure

**Best for:** "How do you handle technical trade-offs?" / "Tell me about a time you had to defend a technical decision" / "How do you evaluate build vs. buy or rewrite vs. refactor?"

At Alaya around 2019, the platform was starting to show scaling cracks in the monolith. The team was split: full microservices rewrite or modular monolith. Investors were watching closely and pushing for new features, not architectural rewrites. The pressure was real, and the stakes were high because whatever we chose would shape the next two years of engineering capacity.

My task was to make a defensible call that balanced long-term scalability with short-term delivery, and to get the team and the CTO aligned on it.

I ran a two-week technical spike with two engineers. We built minimal prototypes of both approaches and ran load tests to get real numbers. Then I put together a trade-off presentation for the CTO and the board: not opinions, but concrete metrics on performance, migration cost, and delivery timeline risk. My recommendation was a strangler-fig migration: extract the two highest-traffic modules first, keep the rest monolithic, and define clear criteria for when to extract additional services.

The first module shipped in six weeks. Performance on the busiest endpoints improved by roughly 40%. The remaining monolith stayed stable through the acquisition two years later. No big-bang rewrite was ever needed.

The hardest part wasn't the technical decision itself. It was convincing people that "not rewriting everything" was the right call when the instinct in a growing startup is to fix everything at once. Data helped more than any argument I could have made.

---

## Story 4: Cross-Functional Architecture at Scale (Post-Acquisition)

**Best for:** "How do you work with large, distributed engineering orgs?" / "Tell me about building trust with teams you don't own" / "Cross-team collaboration in a complex org"

After Benevity acquired Alaya in 2021, I joined an engineering organization roughly ten times larger than what I'd been used to. Different culture, different codebase (Java microservices), different processes. My task was to integrate Alaya's capabilities into Benevity's platform while keeping product velocity up and not antagonizing teams I had no authority over.

The mistake I almost made was moving fast. In a startup you can push a technical opinion and usually win on speed. In a 200+ engineer org, that gets you labeled as the acquisition engineer who doesn't understand how things work here. So I spent the first month just mapping the architecture before touching anything, and the first two months building relationships with the platform and infrastructure teams before proposing changes.

When I did start driving changes, I focused on things that were clearly wins for other teams, not just for the Alaya migration. Shared API contracts, cross-team observability standards, AI tooling templates that any team could use. I contributed to three major cross-team architecture decisions that year and became the go-to person for AI tooling adoption across two engineering teams.

The reflection I carry from that experience: in a distributed org, the most durable way to have technical impact is to make other teams look good. If the shared infrastructure you build helps someone else ship faster, they'll advocate for your work in rooms you're not in. For Yuno's platform engineer role, where the work is building the agent infrastructure that other teams will run their AI workloads on, this framing matters a lot.

---

## Story 5: Building Feedback Loops Into AI Systems

**Best for:** "How do you evaluate AI systems in production?" / "How do you ensure LLM quality doesn't degrade over time?" / "Observability for AI"

During my work at Benevity on AI-assisted workflows, one pattern kept coming up: teams would ship an LLM-powered feature, it would work well at launch, and then quality would quietly degrade as the input distribution shifted. There was no alerting on that, no clear ownership, and no systematic way to know when a model was underperforming until a user complained.

My task was to design an evaluation and observability framework that teams could actually use, without requiring a dedicated MLOps engineer on each team.

I built a lightweight evaluation harness in Python: a test suite of representative inputs with expected output characteristics, a sampling mechanism to pull production traces, and a scoring layer that flagged distribution shifts. Nothing exotic. The important part was the feedback loop: results landed in the same dashboards engineers already checked for service health, not in a separate ML monitoring tool that nobody would open.

Within the first quarter of running it, we caught two meaningful regressions before they hit users: one from a prompt template that had drifted after a dependency update, one from a retrieval pipeline where embedding quality had degraded after a model swap. The cost of catching those early was low; the cost of catching them through user complaints would have been high.

The lesson: AI observability doesn't need to be a separate discipline. If you design it to live inside the engineering workflow that already exists, it gets used.
