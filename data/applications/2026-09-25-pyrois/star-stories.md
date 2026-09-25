# STAR+R Stories: PYROIS, Founding Engineer, Orchestration

Picked for a pre-seed infra team hiring its first ten people. Expect questions on building from zero, trade-offs under pressure, running systems you own, and getting others to adopt tooling. Keep each answer to about two minutes out loud.

---

## 1. Building Alaya from a blank page to acquisition

**Likely prompts:** "Tell me about something you built from scratch." "How do you handle ambiguity?" "Why a founding role again?"

**Situation.** In 2016 I co-founded Alaya, an employee purpose and impact platform. There was no product, no customers and no code, just a business partner already talking to enterprise prospects.

**Task.** I had to build the whole platform, first on my own and later with a small team, fast enough that the sales side had something real to show and solid enough that big clients would trust it with their employee data.

**Action.** I went with a stack I knew would carry us without heroics, Node.js, React and PostgreSQL, and got the core features to a demo in about three months. From there the platform grew in the order customers pulled it: multi-tenancy, an API layer, impact reporting, even postal campaigns. Once the load justified it, I hired and onboarded the first three engineers and put in the basics that a team needs to not trip over itself, which meant CI/CD, code review as a habit, and short architecture docs people actually read.

**Result.** We got to 50+ enterprise clients across Switzerland and France, and Benevity, a Canadian unicorn valued above $1B, acquired us in 2021. The platform went through their technical due diligence without anything forcing a rewrite.

**Reflection.** Two things I'd do differently. Observability came too late; we added proper APM once problems were already in production, and I'd wire it in from week one now. Multi-tenancy was retrofitted, and that cost far more than designing for it upfront would have. For Pyrois the equivalent is telemetry on every placement from day one, because that data is the product's future scoring model.

---

## 2. Choosing a strangler fig over a rewrite

**Likely prompts:** "Tell me about a hard technical trade-off." "How do you make decisions with incomplete information?"

**Situation.** A couple of years into Alaya, the monolith was showing cracks on its busiest endpoints. Half the team wanted a full move to microservices. Investors wanted features, not a rewrite, and they weren't wrong to.

**Task.** I needed a decision we could defend on both fronts: something that fixed the scaling pain without freezing the roadmap for months.

**Action.** Rather than argue it out in meetings, I ran a two-week spike and load-tested prototypes of both approaches. The numbers went to the CTO and the investors as trade-offs, not as a recommendation dressed up as data. What I proposed was a strangler fig: pull out the two highest-traffic modules, leave everything else in the monolith, and write down explicit criteria for when another module earns extraction, so the next debate would be shorter.

**Result.** The first extracted module shipped in about six weeks and the busiest endpoints got roughly 40% faster. The rest of the monolith stayed stable all the way through the acquisition, and we never needed the big-bang rewrite.

**Reflection.** Getting people to accept "we're not rewriting everything" was harder than the engineering. The benchmarks ended the argument, so I'd run them earlier next time. The same instinct applies to a placement engine: start with a simple scorer you can explain and measure, and only add sophistication like auctions or preemption when the data shows the simple version losing money.

---

## 3. Getting two teams onto AI-assisted workflows without being their manager

**Likely prompts:** "How do you influence without authority?" "How would you get users to adopt something new?" Useful for the MCP and agent self-serve part of the role.

**Situation.** At Benevity I was a Senior Staff IC with no reports. I wanted two engineering teams that didn't report to me to start using AI-assisted development in their daily work.

**Task.** Change how people worked without a mandate, and without it turning into a tool nobody opens after the first week.

**Action.** I started with three engineers who were already curious and built small internal demos around their real tasks, so the time savings showed up in their own work rather than in slides. We ran informal lunch sessions with no attendance pressure. I wrote reusable prompt templates and committed them to a shared repo so people could copy and tweak them, and I kept a running log of concrete wins, like a PR review cycle that dropped by about two hours.

**Result.** Within about three months, roughly 70% of engineers on both teams used AI-assisted review and generation regularly, and I ended up as the informal AI tooling lead for the org.

**Reflection.** Going mandate-free was slower, but it stuck, because the people who adopted it on their own terms sold it to their colleagues. It's how I'd think about agents provisioning compute through MCP at Pyrois: the interface has to be good enough that an agent builder picks it without being told to, and the first handful of users tell you what's missing.

---

## 4. Joining a 10x larger org after the acquisition

**Likely prompts:** "Tell me about a time you had to adapt." "How do you work with infra and platform teams?" "How do you onboard onto an unfamiliar system?" This is also the natural place to address the Go question.

**Situation.** After the acquisition in 2021 I joined Benevity as a Senior Staff Engineer. The engineering org was about ten times Alaya's size, with a different culture, a Java and microservices codebase, and processes I didn't know.

**Task.** Bring Alaya's capabilities into Benevity's platform while we kept shipping, and without losing the speed we'd had as a startup.

**Action.** My first month was mostly reading and mapping the existing architecture before I proposed anything. I spent real time with the platform and infra teams, getting to know how they ran things before I started pushing opinions. Later I became the cross-team architecture contact for the Europe-facing product surface, which put me in the room for most of the decisions that touched it.

**Result.** The core Alaya features were migrated into Benevity's platform, and I contributed to three major cross-team architecture decisions.

**Reflection.** Early on I moved too fast and tried to fix things that weren't actually broken in the new org. Slowing down to listen first made me far more effective. It's also how I'd handle Go at Pyrois: I've picked up an unfamiliar stack and codebase under delivery pressure before, and I'd start by reading your code and shipping small changes rather than rewriting anything.

---

## Prep note: questions to expect on gaps

**"You haven't written Go in production."** True, say so plainly. Point to Story 4 as evidence of ramping on a new stack, mention TypeScript, Python and Java as the base, and offer to do the technical exercise in Go.

**"Have you built a scheduler?"** No custom scheduler. You've run workloads on Kubernetes and Docker and made placement-style trade-offs in platform design. Be ready to talk through bin-packing with constraints, how you'd score price against reliability and latency, and how you'd make each placement explainable after the fact.

**"On-call and incident response?"** As a cofounder you ran the production platform yourself. Speak to what you actually handled; don't inflate it.
