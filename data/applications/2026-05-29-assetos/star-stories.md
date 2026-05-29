# STAR Stories — AssetOS First Engineer Interview

## Story 1: Building Alaya from Zero to Acquisition

**Best for:** "Tell me about building something from scratch" / "Why are you the right person for a first engineer role?"

In 2016, I co-founded Alaya with two business co-founders who had the vision and the domain knowledge, but no product and no technical team. We'd incorporated the company, had a rough pitch deck, and had booked our first enterprise demo for three months out. My job was to make that demo real and then turn it into a product.

I chose Node.js, React, and PostgreSQL. Not the most exciting picks at the time, but a stack I could hire for and that would scale without a full re-architecture. I built the core modules alone for the first few months: multi-tenant data isolation, activity tracking, user management, impact reporting. When we started signing clients, I had to keep shipping features while stabilizing what was already live, which is the constant tension in that phase.

We brought on the first two engineers around month eight. I spent real time on that transition: wrote onboarding documentation before they joined, set up code review culture early, made sure they could work autonomously without needing me to unblock every decision. The things I set up in that first year became load-bearing walls for everything that followed.

By the time Benevity acquired us in 2021, the platform was serving 50+ enterprise clients across Switzerland and France. The architecture from 2016 was still the core. Looking back, I'd have invested in proper observability earlier: structured logging and distributed tracing arrived in month eighteen when they should have been in month three. We paid for that gap a few times.

---

## Story 2: Making a Hard Architecture Call Under Pressure

**Best for:** "Tell me about a technical trade-off you navigated" / "How do you handle technical debt?"

At Alaya, around 2019, we had a monolith that was starting to show cracks under load. The engineering team was split: some wanted a full microservices rewrite, others thought that was too risky. Investors were pushing for new features, not rewrites.

I needed to make a defensible decision that respected both constraints. I ran a two-week technical spike comparing both approaches, including prototype load tests on the two highest-traffic paths. Then I brought the findings to the CTO and the investor rep with concrete numbers, not a general argument about architecture philosophy.

What I proposed was a strangler fig: extract the two modules with the highest load first, keep the rest monolithic until we had a clearer pattern, and set explicit criteria for when to extract the next piece. The goal wasn't to get to microservices, it was to get the system healthy without pausing product work.

We shipped the first extracted module in six weeks. Performance on those endpoints improved roughly 40%. The remaining monolith stayed stable all the way through the acquisition. No big-bang rewrite ever happened.

The hardest part wasn't the technical work; it was convincing people that "not rewriting everything now" was the right call. The benchmark data helped a lot. I'd run that kind of spike earlier next time so the debate doesn't drag on as long.

---

## Story 3: Driving LLM Tooling Adoption Without a Mandate

**Best for:** "Tell me about an AI/LLM project you shipped" / "How do you introduce new technology to a team?"

When I joined Benevity in 2021, it was a Java-heavy organization that had never integrated LLMs into its engineering workflow. I'd been experimenting with early GPT APIs and Claude for engineering tasks since 2022, and I could see there were real productivity wins to unlock, but I had no direct reports and no mandate to change how other teams worked.

I started with three engineers who were already curious: ran a few working sessions, built some tooling demos showing concrete time savings on tasks they hated, like PR review prep and test case generation. I then put together a small library of reusable prompt templates and committed it to a shared internal repo so anyone could pull from it.

Instead of mandating anything, I ran informal lunch sessions where I'd show the demos and answer questions. No deck, no corporate rollout. Engineers who found it useful started telling their teammates, which is the only adoption that actually sticks.

Within three months, around 70% of engineers on both teams I worked with were using AI-assisted workflows in their daily work. I became the informal go-to person for AI tooling questions across the org, which wasn't the plan but made sense given the groundwork.

The lesson I took from that: mandate-free adoption is slower to start but far stickier. Engineers who chose it on their own terms became advocates. A top-down decree would have gotten compliance, not advocacy.

---

## Story 4: Post-Acquisition Technical Integration

**Best for:** "Tell me about navigating a major change" / "How do you ramp up on a new codebase?"

After the Benevity acquisition closed in 2021, I moved from a team of eight at Alaya to an engineering org of roughly eighty. Different culture, different language (Java microservices instead of Node.js), different processes, different everything.

My first instinct was to push changes fast: I'd seen better ways to do some things and wanted to improve them. That instinct was wrong. I spent the first month purely in mapping mode: reading architecture docs, sitting in on team meetings without an agenda, building relationships with the platform and infrastructure teams before I had anything to ask for.

Once I understood the landscape, I could identify where Alaya's capabilities fit into Benevity's platform without breaking the things that already worked. I contributed to three major cross-team architecture decisions in the first year, drove the AI tooling adoption I described earlier, and became the go-to liaison for the Europe-facing product surface.

The thing I'd change: I moved too fast in the first few weeks trying to "fix" things that weren't actually broken, just different. That created friction I had to walk back. Coming into a new codebase or a new org, listening first is almost always more effective than being right early.
