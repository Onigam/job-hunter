# STAR Stories — SimplySpeak.ai (LLM / ML Engineer, Co-Founder)

---

## 1. Building Alaya from Zero

**Best for:** "Tell me about a time you built something from scratch" / "What does your co-founder experience look like?"

In 2016, I co-founded Alaya, a purpose and employee engagement platform for enterprises. We had a blank page, no customers, and no product. My task was to architect and build the entire platform alone at first, then bring on a team, while the business was simultaneously signing its first enterprise clients.

I chose a pragmatic stack (Node.js, React, PostgreSQL) that could scale without over-engineering at that stage. I shipped the first working version in under three months to get to a first demo. From there, I iterated continuously: multi-tenant architecture, an API layer, impact reporting, postal campaigns. When I started hiring, I brought on the first three engineers and set up CI/CD, code review culture, and architecture docs from day one so we weren't building on sand.

The platform reached production with 50+ enterprise clients across Switzerland and France. Benevity acquired Alaya in 2021, which validated the core technical decisions made under founder conditions.

What I'd do differently: I'd invest in observability much earlier. We added proper APM late, and debugging production issues before that was painful. I'd also design for multi-tenancy from day zero. Retrofitting it partway through cost us more time than the initial shortcut saved.

---

## 2. Making a Hard Architecture Decision Under Pressure

**Best for:** "Tell me about a technical trade-off you navigated" / "How do you handle technical debt?"

At Alaya, around 2019, our monolith was starting to show scaling cracks. Parts of the team were pushing for a full microservices rewrite. Investors were pushing for new features. The tension was real, and I had to make a defensible call.

My task was to find an approach that balanced long-term scalability with the reality that we had limited engineering bandwidth and couldn't afford a multi-month rewrite with nothing to show users.

I ran a two-week technical spike comparing both approaches, built prototype load tests, and came back to the CTO and investors with concrete metrics rather than opinions. I proposed a strangler-fig migration: extract the two highest-traffic modules first, keep everything else monolithic, and define clear criteria for when to extract further modules.

The first extracted module shipped in six weeks. Performance on the busiest endpoints improved roughly 40%. The remaining monolith held stable all the way through the acquisition, with no big-bang rewrite ever required.

The hardest part was convincing the team that "not rewriting everything" was actually the ambitious option. Data helped more than arguments.

---

## 3. Driving AI Tooling Adoption Without a Mandate

**Best for:** "How do you lead without formal authority?" / "Tell me about pushing a new technology inside an organization"

At Benevity, I was a Senior Staff IC with no direct reports but a clear conviction that AI-assisted development would change how we worked. My task was to shift how engineers on two teams approached their daily work, without any management authority to mandate it.

I started small: three engineers who were already curious, not the skeptics. I built internal tooling demos focused on concrete time savings rather than abstract potential. I ran informal lunch sessions, no attendance required, just live demos. I created a shared library of prompt templates and committed it to our internal repos so there was something tangible to use immediately.

Within three months, roughly 70% of engineers on both teams had integrated AI-assisted code review and generation into their workflow. I became the informal AI tooling lead across the org.

The lesson I took from it: a mandate-free adoption is slower to start but much stickier. Engineers who adopted it on their own terms became internal advocates. A top-down decree would have produced compliance, not ownership.

---

## 4. Navigating Post-Acquisition Integration

**Best for:** "Tell me about adapting to a large organization" / "How do you handle working with teams you don't control?"

After the Benevity acquisition in 2021, I joined a company that was roughly ten times larger than what I'd come from. Different culture, a Java and microservices codebase, different processes for everything. My task was to integrate Alaya's capabilities into Benevity's platform while continuing to ship new features, without losing the product velocity we'd built as a startup.

I deliberately spent the first month mapping the existing architecture before proposing anything. I built relationships with platform and infra teams before pushing technical opinions. I drove the adoption of AI-augmented workflows across the engineering org and became a cross-team architecture liaison for the Europe-facing product surface.

We successfully migrated the core Alaya features into Benevity's platform. I contributed to three major cross-team architecture decisions and became the go-to contact for AI tooling questions across two teams.

What I learned: I initially moved too fast trying to "fix" things that weren't broken in the new context. Slowing down and listening first made me substantially more effective in the months that followed.

---
