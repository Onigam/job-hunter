# STAR+R Stories: Staff Engineer (Core & MLOps), undisclosed company via Jobgether

The posting is about core platform ownership: a control plane with SLO enforcement and canaries, a service chassis and golden path, gRPC contracts, Kubernetes/Terraform/Kafka operations, architecture through written RFDs, on-call and post-mortems, and mentoring across squads. Expect questions on reliability, written technical decision-making, influence across teams and how you've built paved roads for other engineers. The stories below are chosen for those.

One honest framing to keep ready: Magino's hands-on depth is in Node.js/TypeScript, Python, AWS, Docker and Kubernetes, with Java from Sagemcom and Benevity's microservices codebase. Reactive Java (Vert.x/Netty), gRPC at scale, Kafka and MLOps are not core experience. Don't claim them. Answer with transferable experience and a concrete ramp-up plan.

---

## 1. Settling a rewrite debate with a written trade-off and a strangler fig

**Likely questions:** "Walk me through an architecture decision you drove." / "How do you write and run an RFD?" / "How do you handle technical debt when the business wants features?"

**Situation.** At Alaya our monolith was starting to crack under load. The engineering team was split between a full microservices rewrite and a modular monolith, and our investors wanted features, not a rewrite.

**Task.** I needed a decision we could defend to both the engineers and the business, one that fixed the scaling problem without freezing delivery for months.

**Action.** Rather than let the debate run on opinions, I ran a two-week spike that prototyped both approaches and put them under load tests. I wrote up the trade-offs with the numbers and presented them to the CTO and to our investors. The proposal was a strangler fig migration: pull out the two highest-traffic modules first and leave everything else in the monolith. The part I'm most glad about is that I also wrote down explicit criteria for when any further module would be worth extracting, so the question didn't come back every quarter with a new set of opinions attached.

**Result.** The first extracted module shipped in about six weeks, and latency on the busiest endpoints improved by around 40%. The remaining monolith stayed stable all the way through the acquisition. We never needed a big-bang rewrite, and feature work kept going the whole time.

**Reflection.** The hard part wasn't technical. It was convincing people that not rewriting everything was the right call, and data is what ended it. I'd benchmark earlier next time to shorten the argument. It's also why an RFD culture appeals to me; that write-up was an RFD in everything but name, and the exit criteria were the most useful paragraph in it.

---

## 2. Building a platform from zero, and learning the observability lesson the hard way

**Likely questions:** "Tell me about a system you owned end to end." / "How do you think about reliability and SLOs?" / "Tell me about an operational mistake."

**Situation.** In 2016 I co-founded Alaya, an employee purpose and engagement platform. There was no code, no customers and no team, and the business side was already talking to enterprise prospects.

**Task.** I had to architect and build the whole platform, alone at first and then with a small team, fast enough to support sales but solid enough that we wouldn't have to start over a year later.

**Action.** I picked a stack that would carry us without heroics, Node.js, React and PostgreSQL, and had core features ready for a first demo in about three months. From there we grew it piece by piece: multi-tenancy, an API layer, impact reporting, postal campaigns. Before the first three engineers arrived I put the boring foundations in place, CI/CD, a review culture that applied to me as much as anyone, and short architecture docs. As cofounder I was also on call for everything, in practice if not on a rota.

**Result.** The platform went to production and grew to 50+ enterprise clients across Switzerland and France. Benevity, a Canadian unicorn valued at over $1B, acquired Alaya in 2021.

**Reflection.** We added proper APM and observability late, and we paid for it in slower incident response; for a while we found out about problems from customers before our own tooling. Retrofitting multi-tenancy also cost far more than designing for it would have. Both mistakes are why I now treat telemetry and service-level objectives as part of the platform's first version. If I were starting again I'd define a handful of SLIs on the critical paths before the first enterprise client went live, and make the default service template ship with them.

---

## 3. Getting engineers onto a new way of working without authority

**Likely questions:** "How do you mentor and influence engineers across squads?" / "How do you get teams to adopt a golden path?" / "Tell me about leading without a title."

**Situation.** At Benevity I was a Senior Staff IC with no direct reports. AI-assisted development tools were available, but the two teams I worked with most weren't using them consistently, and nobody was going to order them to.

**Task.** I wanted those teams to actually change how they worked, with AI-assisted review and generation in their daily flow, without being their manager and without a mandate people would quietly route around.

**Action.** I started with three engineers who were already curious and tried things on real pull requests, not toy examples. Whatever saved time became a prompt template in a shared repo, so the next person could pick it up without starting over. Then came informal lunch-and-learn sessions, mostly live demos. I wrote down results as they came in, and one PR review cycle that dropped by about two hours turned into the example people kept repeating.

**Result.** Within about three months, roughly 70% of the engineers on both teams were using the tooling. I became the informal AI tooling lead for the org, which nobody appointed me to; people just started bringing me their questions.

**Reflection.** The no-mandate approach was slower but it stuck, because early adopters did the selling. That's how I think about a golden path too: it wins when it's the easiest road, not when it's the required one. What I'd change is measurement. I collected anecdotes when I should have tracked cycle time and review latency from day one, because anecdotes convince engineers and numbers convince the people funding platform work.

---

## 4. Joining a Java microservices org ten times our size

**Likely questions:** "How do you ramp up on an unfamiliar stack?" / "How do you set technical direction across teams?" / "Tell me about a mistake."

**Situation.** After the acquisition I joined Benevity as a Senior Staff Engineer. The organisation was about ten times the size of Alaya, with a Java and microservices codebase, a different culture and processes I didn't know.

**Task.** We had to bring Alaya's capabilities into Benevity's platform while still shipping new features, without losing the velocity we'd had as a startup.

**Action.** My first instinct was to fix things quickly, and I pushed on a few that weren't actually broken. I corrected course. I spent the first month mapping the existing architecture and the service boundaries before proposing anything significant, and built relationships with the platform and infrastructure teams before pushing opinions on them. Over time I became the cross-team architecture contact for the Europe-facing product surface, which meant a lot of writing, reviewing other teams' designs and finding the version of a decision several teams could live with.

**Result.** The core Alaya features were migrated into Benevity's platform, and I contributed to three major cross-team architecture decisions. The trust built there is also what made the later tooling rollout possible.

**Reflection.** Moving fast to "fix" things in a new org cost me credibility I then had to rebuild. Listening first made me more effective. It's also my honest answer to the stack question here: I haven't run Vert.x or Kafka in production, and the way I'd close that gap is the same, read the code and the incident history first, pair with whoever owns the hottest services, and take on-call early so the system teaches me where it hurts.

---

## Quick prep notes

- One number per story: ~40% latency gain in about six weeks (1), 50+ clients and the acquisition (2), ~70% adoption in three months and ~2h saved on a review cycle (3), three cross-team architecture decisions (4).
- Likely follow-up: "How would you define SLOs for a service that has none?" Start from the user-facing journey, pick two or three SLIs (availability, latency at p99, freshness for data pipelines), set a target the service already almost meets, then attach an error budget policy that says what happens when it's burnt. Tighten later.
- Likely follow-up: "How do you run a post-mortem?" Blameless, timeline first, contributing factors rather than a single root cause, action items with owners and dates, and a follow-up review to check they actually landed.
- Likely follow-up on gRPC/Protobuf: talk about API design and versioning from REST/GraphQL work (backwards-compatible changes, deprecation windows, contract tests) and say plainly that Protobuf schema evolution is something you'd be learning in context.
- MLOps is a preferred qualification. Connect it to LLM integration, embeddings and semantic search work, without overstating model serving or drift detection experience.
