# STAR Stories — Tracer Cloud, Founding AI Engineer (Staff)

---

## 1. Building a Platform From Zero (Founding Engineer Story)

**Best for:** "Tell me about building something from scratch" / "What's your founding engineer experience?"

In early 2016, I co-founded Alaya with no product, no customers, and no engineering team. Just an idea about helping companies manage employee volunteering and impact, and a few letters of intent from Swiss enterprise clients who wanted to see a demo in three months. I was the only engineer at the start.

My job was to architect and build the entire platform while the business side was closing deals. I chose deliberately: Node.js, React, and PostgreSQL. Not fashionable choices, but I'd used all three in production before and knew I could move fast without surprises. The first three months were heads-down. I built the core feature set alone, shipped a working demo, and onboarded the first client. As the product grew, I made multi-tenancy a first-class concern early, set up CI/CD, and established code review conventions before hiring, so when I brought on the first three engineers, they got a working system with real conventions, not a cowboy codebase.

We reached 50+ enterprise clients across Switzerland and France. Benevity acquired Alaya in 2021, a direct validation of those early technical decisions. The platform I'd built was clean enough to absorb into Benevity's infrastructure without a ground-up rewrite.

Looking back, I'd add observability from day one. We retrofitted APM late, and debugging production issues before that was harder than it needed to be. I'd also design multi-tenancy explicitly from day one rather than bolting it in mid-product, even though we got away with it.

---

## 2. Driving AI Tooling Adoption Without a Mandate

**Best for:** "How do you lead without authority?" / "Tell me about introducing AI practices to a team"

At Benevity in 2023, I was a Senior Staff IC. LLMs were becoming genuinely useful for engineering tasks, but adoption was patchy across our teams. Most engineers weren't using AI tools regularly, and there was no leadership mandate pushing it. I had a hypothesis that we were leaving serious productivity on the table, but no budget, no project charter, and no direct reports.

I started with three engineers I knew were curious. We spent a few lunch sessions just demoing, not evangelizing. I built a small internal repo of prompt templates for real tasks: PR reviews, test generation, architecture documentation sketches. Concrete enough that someone could drop them in and see results in ten minutes. Then I documented two or three specific before-and-after stories: a PR review cycle that dropped from two days to a few hours, a test suite a junior engineer generated in a morning that would've taken a week. No percentages, just narratives that were easy to repeat in conversation.

Within three months, roughly 70% of engineers on both teams had integrated AI tools into their regular workflow. Because they adopted it on their own terms, they became internal advocates. I ended up the informal AI tooling lead across the broader engineering org.

A mandate would have been faster but would have produced surface-level adoption. The slower route was right. What I'd do differently: publish the prompt templates earlier and more publicly inside the org, instead of keeping them in a small team repo at first.

---

## 3. Architecture Decision Under Investor Pressure

**Best for:** "Tell me about a technical trade-off you navigated" / "How do you handle tech debt vs delivery pressure?"

Around 2019 at Alaya, our monolith was starting to strain. Response times on the highest-traffic endpoints were climbing, and the engineering team was debating a full microservices rewrite. Meanwhile, investors wanted new features, and we had a major client renewal coming up that depended on better performance. The debate had been running for weeks without a clear answer.

I had to make a defensible call under real pressure, balancing the future architecture with the reality that a six-month rewrite could kill us commercially.

I ran a two-week technical spike: prototype load tests on two modules, mapped the actual bottlenecks (they were concentrated in three specific data-heavy services, not distributed across the whole codebase), and compared the full rewrite against a strangler-fig extraction of just those modules. I brought concrete numbers to the team and our CTO. Not a debate about architectural patterns, but a trade-off measured in delivery weeks and risk. The strangler-fig approach won on every metric that mattered.

The first extracted module shipped in six weeks. Performance improved by roughly 40% on the heaviest endpoints. The rest of the monolith held stable through the acquisition eighteen months later. No big-bang rewrite was ever needed.

The hardest part wasn't the technical work. It was convincing people that "not rewriting everything" was a serious engineering decision, not a cop-out. Data helped. What I'd do differently: run the benchmarking in week one of the debate, not week three, to cut the discussion much shorter.

---

## 4. Navigating a Post-Acquisition Integration

**Best for:** "Tell me about joining a new organization" / "How do you build credibility in a new team?"

Benevity acquired Alaya in 2021. I went from being a cofounder with full architectural authority on a five-person team to being a Senior Staff IC at a 200+ person engineering organization. Different codebase, Java and microservices, different tooling, different culture. I knew nobody and I had strong opinions about how things should be built. The combination was a recipe for being the annoying new person with all the answers.

I spent the first month not proposing anything. I mapped the existing architecture, read documentation, asked questions, and built real relationships with the platform and infra teams before I touched anything. Once I had a clear picture of how things worked, I started contributing to cross-team architecture discussions, always with data rather than gut feel. The one area where I moved faster was AI tooling: I'd been using LLM-based workflows at Alaya and could see immediately that Benevity's teams weren't. That felt like a concrete contribution I could make without stepping on anyone's domain.

I contributed to three major cross-team architecture decisions in my first year. The Alaya feature migration landed without a major incident. The AI tooling adoption work spread across two teams and I became the informal lead for it across the org.

I initially moved too fast in the first weeks, trying to fix things that weren't broken from where I was standing. Slowing down and listening completely changed my effectiveness. The lesson: in a new org, political capital comes before technical opinions, every time.
