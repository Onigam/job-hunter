# STAR Stories — n8n Senior Product Engineer

---

## Story 1: Building Alaya from Zero to Acquisition

**Best for:** "Tell me about building something from scratch" / "How do you balance speed and quality?" / "Founding engineer" roles

In 2016 I co-founded Alaya, a purpose and impact platform for enterprise employee engagement. We had no product, no customers, and I was the only engineer. The first challenge wasn't technical, it was deciding how much to invest in foundations versus getting something in front of clients fast enough to survive.

I chose a stack I knew well and that could evolve without heroics: Node.js on the backend, React on the frontend, PostgreSQL as the primary store. I also designed for multi-tenancy from day one, because I could see the enterprise roadmap coming and retrofitting it later would have been painful. In the first three months I shipped a working demo. Then I hired the first engineer, set up CI/CD, established code review practices, and kept iterating. Over five years the platform grew to support 50+ enterprise clients across Switzerland and France.

Benevity, a Canadian unicorn at $1B+ valuation, acquired us in 2021. The product and architectural decisions made in year one were still load-bearing at acquisition. That was the validation I was looking for.

What I'd do differently: observability came too late. We were flying without proper APM for longer than I'd like, and debugging production issues was harder than it needed to be. I'd also design multi-tenancy boundaries more explicitly from the start on any service I now build, rather than relying on conventions that worked until they didn't.

---

## Story 2: Hard Architecture Decision Under Pressure

**Best for:** "Tell me about a technical trade-off you navigated" / "How do you handle technical debt?" / "Speed vs. scalability"

Around 2019, Alaya's monolith was starting to buckle under usage growth. The team was split between a full microservices rewrite and a modular monolith approach. Investors wanted new features, not a six-month engineering pause. My job was to make a defensible call that balanced where we needed to be in two years against what we could actually deliver in six months.

I ran a two-week technical spike comparing both approaches. We extracted the highest-traffic module as a prototype service, load-tested it, and compared the results against the monolith equivalent. Then I presented the trade-offs to the CTO and investors with actual numbers, not opinions. My recommendation was a strangler fig migration: extract the two most traffic-heavy modules first, leave the rest monolithic until we had evidence for further extraction, and define explicit criteria for when to pull another piece out.

The first extracted module shipped in six weeks. Performance improved ~40% on the endpoints that had been causing us pain. The monolith stayed stable through the Benevity acquisition two years later. No big-bang rewrite was ever needed.

The hardest part wasn't the technical work, it was convincing people that not rewriting everything was the right answer. Data helped enormously. I'd invest in early benchmarking even faster next time. It cuts the debate shorter and keeps the conversation about trade-offs rather than opinions.

---

## Story 3: Driving Adoption Without Formal Authority

**Best for:** "How do you influence without authority?" / "Tell me about leading through change" / Staff+ roles / AI-forward teams

At Benevity I was a Senior Staff IC with no direct reports, but in 2023 I decided AI-assisted development practices needed to spread across two engineering teams I had no management authority over. The platform was growing fast and engineers were spending significant time on PR review cycles and repetitive scaffolding work that AI tooling could reduce meaningfully.

I didn't propose a mandate or a new tooling policy. Instead I found three engineers who were curious and started there. I built internal demos showing concrete before-and-after on real tasks, things like "this PR review cycle took two hours instead of four." I ran informal lunch sessions with no requirement to attend, just showing what was possible. I built a shared repo of reusable prompt templates and documented specific examples so people could pick them up without needing to talk to me.

Within three months about 70% of engineers on both teams were regularly using AI-assisted code review and generation tools. The early adopters became internal advocates, which no top-down mandate could have produced. I also became the informal AI tooling lead across the engineering org.

The lesson I took from this: the artifacts mattered more than the sessions. The prompt templates I committed to a shared repo got picked up by engineers I never directly talked to. I'd invest in that artifact-first approach even earlier next time.

---

## Story 4: Navigating a Post-Acquisition Integration

**Best for:** "Tell me about navigating major change" / "Cross-functional collaboration" / "Adapting to a larger org"

When Benevity acquired Alaya in 2021, I went from a 15-person startup to a company 10x that size, with a Java-based microservices codebase and processes I'd never worked with before. My mandate was to integrate Alaya's product capabilities into Benevity's platform while staying a useful contributor to a much larger engineering organisation.

The temptation early on was to come in with opinions about what needed improving. I resisted it. I spent the first month mapping the architecture and building relationships before proposing anything. That meant sitting in architecture reviews, reading internal RFCs, and understanding why things were built the way they were before suggesting anything different. Once I had that context, I became a cross-team architecture liaison for the Europe-facing product surface and contributed to three major cross-team decisions.

The integration succeeded. Core Alaya features were migrated into Benevity's platform. I also became the go-to person for AI tooling across two teams, which I'd initiated from scratch.

Looking back, I moved too fast in the first few weeks trying to "improve" things that weren't broken, just different. The engineers who'd built that system had good reasons for their choices. Slowing down and listening first made me far more effective than any opinion I could have offered in week one.
