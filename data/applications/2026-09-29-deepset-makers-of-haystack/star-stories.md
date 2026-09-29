# STAR+R Stories: deepset, Product Engineering Tech Lead

The role mixes three things: owning a serverless execution platform for AI apps, being on the hook for its reliability, and leading a team while staying hands-on. Expect questions on founder mindset, architecture tradeoffs, operating in production, and influence. The stories below come from the star bank; nothing has been added that isn't there.

One gap to prepare honestly: the posting asks for production Kubernetes built from the ground up, durable execution, and serverless frameworks (Knative, KEDA and similar). If asked, say plainly where your hands-on depth ends and describe how you'd close it, rather than stretching a story to fit.

---

## 1. Building Alaya from zero, and what I'd do differently on observability

**Likely questions:** "Tell me about something you built from scratch and had to live with." / "What does a founder mindset mean to you?" / "How do you think about observability?"

**Situation.** In 2016 I cofounded Alaya, an employee purpose and impact platform. There was no product, no customers and no code, just a business partner starting to talk to enterprise prospects.

**Task.** I had to build the whole platform, alone at first, and do it fast enough that sales had something to show while the architecture could still carry real customers later.

**Action.** I picked a deliberately boring stack, Node.js, React and PostgreSQL, because I needed to move quickly and didn't want to be debugging exotic infrastructure at two in the morning with nobody else around. The core features were demo-ready in about three months. From there I grew the product in layers: multi-tenancy, an API layer, impact reporting, postal campaigns. Once we could hire, I brought on the first three engineers and put the basics in place for them, CI/CD, a code review habit, and architecture docs someone new could actually read.

**Result.** Alaya reached 50+ enterprise clients across Switzerland and France, and Benevity, a Canadian unicorn valued above $1B, acquired us in 2021. The technical due diligence held up, which was a decent test of the early decisions.

**Reflection.** Two things I'd change, and both matter for this role. We added proper APM late, which meant for a while we learned about problems from customers before we saw them ourselves; I'd have tracing and alerting in from the first production deploy. And we retrofitted multi-tenancy, which cost far more than designing for it on day one. For a platform running customer AI workloads, I'd treat isolation and observability as first-week concerns, not features.

---

## 2. Choosing a strangler fig over a rewrite

**Likely questions:** "Tell me about a hard architecture tradeoff." / "How do you balance platform work against product pressure?" / "How do you make a technical decision others disagree with?"

**Situation.** Alaya's monolith was starting to crack under load. The team was split between a full microservices rewrite and keeping a modular monolith, and investors wanted features, not a rewrite.

**Task.** I needed a decision we could defend to both the engineers and the investors, one that fixed the scaling pain without freezing delivery.

**Action.** Rather than argue it out in meetings, I ran a two-week spike and prototyped both approaches with load tests, so the conversation would be about numbers. I took the tradeoffs to our CTO and investors with those metrics in hand. The proposal was a strangler fig: pull out the two highest-traffic modules, leave everything else in the monolith, and write down clear criteria for when any further module would earn its own service.

**Result.** The first extracted module shipped in six weeks. The busiest endpoints got about 40% faster. The remaining monolith stayed stable right through the acquisition, and we never needed the big-bang rewrite.

**Reflection.** The hardest part wasn't technical, it was convincing people that not rewriting everything was the ambitious choice. Data ended the debate, so I'd benchmark earlier next time and save a few weeks of discussion. It's the same instinct I'd bring to the execution layer at deepset: make the smallest structural change that fixes the real bottleneck, and set explicit criteria for the next one.

---

## 3. Getting two teams onto AI-assisted development without authority

**Likely questions:** "How do you lead and set technical direction?" / "Tell me about influencing people who don't report to you." / "How would you bring a team along on a change?"

**Situation.** At Benevity I was a Senior Staff IC with no direct reports. I wanted two engineering teams, neither of them mine, to adopt AI-assisted development practices.

**Task.** Change how people worked day to day without any power to tell them to.

**Action.** I started small, with three engineers who were already curious. Together we built internal tooling demos that showed concrete time savings on real tasks, not toy examples. Then came informal lunch-and-learn sessions with no mandate attached, just demos and questions. The prompt templates we'd refined went into a shared repo so anyone could pick them up, and I wrote down specific wins as they happened, like a PR review cycle that came in about two hours shorter.

**Result.** Within three months, about 70% of engineers on both teams were using AI-assisted code review and generation, and I'd become the informal AI tooling lead across the org.

**Reflection.** Going without a mandate was slower, but it stuck. The engineers who adopted it on their own terms became its advocates, which no decree would have produced. As a tech lead with a formal team I'd still start this way: earn buy-in with working examples first, then set the standard.

---

## 4. Joining a much bigger org after the acquisition

**Likely questions:** "Tell me about navigating a big change." / "How do you approach an existing system you didn't build?" / "What would your first 90 days look like?"

**Situation.** After the acquisition in 2021 I joined Benevity, an engineering organization roughly ten times Alaya's size, with a different culture, a Java microservices codebase and processes I didn't know.

**Task.** Bring Alaya's capabilities into Benevity's platform while still shipping new features, without losing the pace we'd had as a startup.

**Action.** My first month went into mapping the existing architecture before I proposed anything. I built relationships with the platform and infrastructure teams first, so that by the time I had opinions, people knew where they came from. Over time I became the cross-team architecture contact for the Europe-facing product surface, and I pushed AI-augmented workflows across the teams I worked with.

**Result.** The core Alaya features migrated into Benevity's platform. I contributed to three major cross-team architecture decisions and became the go-to person for AI tooling across two teams.

**Reflection.** Early on I moved too fast and tried to fix things that weren't broken. Slowing down and listening first made me far more effective. At deepset I'd expect the same: the execution platform already runs customer workloads, and the first job is understanding why it works the way it does before redesigning it.

---

## Questions to ask them

- Where does the execution layer stand today? Is serverless already in production, or is this role building it?
- How do you handle long-running agent runs across node evictions right now: checkpointing, a durable execution engine like Temporal, or something built in-house?
- What does on-call look like for the team, and how many incidents in the last quarter came from the execution layer?
- How big is the team today, and what's the split between hands-on work and leadership you'd expect in the first six months?
- How closely does the platform team work with Haystack open source maintainers?
