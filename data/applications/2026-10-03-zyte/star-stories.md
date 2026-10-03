# STAR+R Stories: Zyte, Staff Engineer (Core & MLOps)

The role is about platform contracts, schema evolution, SLOs, on-call and mentoring across a fully remote team. Expect questions like "tell me about a breaking change you managed", "how do you influence teams you don't own", "how do you decide what to build into the platform vs leave to teams" and "tell me about an incident". The four stories below cover those angles. All facts come from the star bank; don't stretch them in the room.

---

## 1. Strangler fig instead of a rewrite (architecture trade-off, platform evolution)

**Likely question:** "Tell me about a big architecture decision you made under pressure." / "How would you evolve a platform without stopping delivery?"

**Situation.** At Alaya our monolith had started to crack under load, and the team was split between a full microservices rewrite and a modular monolith. Investors wanted features, not a rewrite, so whatever we picked had to fit around ongoing delivery.

**Task.** My job was to make a call we could defend, one that solved the scaling problem without freezing the roadmap for months.

**Action.** Rather than argue it out in meetings, I ran a two-week spike and prototyped both directions with load tests against our busiest paths. The numbers made the conversation with the CTO and investors much easier because we were comparing measurements, not opinions. We went with a strangler fig approach: pull out the two highest-traffic modules first and leave everything else in the monolith. Just as important, I wrote down the criteria for when another module would earn its extraction, so the next decision wouldn't need a new debate.

**Result.** The first extracted module shipped in about six weeks and the busiest endpoints got roughly 40% faster. The rest of the monolith stayed stable all the way through the acquisition, and nobody had to do a big-bang rewrite.

**Reflection.** Convincing people that "not rewriting everything" was the right call took longer than the engineering. Earlier benchmarking would have shortened that. For Zyte, the bridge is the explicit extraction criteria: it's the same instinct as a versioning policy for gRPC contracts, deciding the rules once so every change doesn't turn into a negotiation.

---

## 2. Getting two teams to change how they work, without authority (Staff+ influence, mentoring)

**Likely question:** "How do you drive adoption of a platform or practice across teams you don't manage?"

**Situation.** At Benevity I was a Senior Staff IC with no reports. I wanted two teams, neither of them mine, to bring AI-assisted development into their daily work.

**Task.** Change how engineers actually worked, without a mandate and without making it feel like one more top-down initiative.

**Action.** I started small, with three engineers who were already curious. We built demos around real tasks so the time savings were visible, not theoretical, and I ran informal lunch sessions where the only pitch was a live demo. The prompt templates that worked went into a shared repo so people could reuse them instead of starting from scratch. I also kept a record of concrete wins, like a PR review cycle that came out about two hours shorter, because specific examples travel better than claims.

**Result.** Within three months roughly 70% of the engineers on both teams were using AI-assisted review and generation, and I'd become the informal AI tooling lead across the org.

**Reflection.** Going without a mandate was slower, but it stuck. The people who adopted it on their own terms became its advocates, which no decree would have produced. That's how I'd approach getting teams onto a new workload spec or client library at Zyte: make the paved road clearly better, then let early adopters carry it.

---

## 3. Joining a much larger Java microservices org after the acquisition (integration, async collaboration)

**Likely question:** "Tell me about a time you joined an unfamiliar system and had to make changes safely." / "How do you work across a distributed team?"

**Situation.** After Benevity bought Alaya in 2021 I joined an engineering org roughly ten times bigger than ours, with a Java microservices codebase, different processes and a different culture. Alaya's capabilities had to move into Benevity's platform.

**Task.** Get those features integrated while still shipping new work, and do it without losing the speed we'd had as a small team.

**Action.** For the first month I mostly mapped. I traced how the existing services talked to each other and where the boundaries really were, which wasn't always where the diagrams said. Before proposing anything I spent time with the platform and infra teams, because changes to shared services only land if the owners trust you. Once I had that, I acted as the cross-team architecture liaison for the Europe-facing product surface, which meant a lot of written proposals and async back-and-forth across time zones.

**Result.** The core Alaya features were migrated into Benevity's platform, I contributed to three major cross-team architecture decisions, and the integration didn't stall the roadmap.

**Reflection.** My first instinct was to fix things that weren't broken. Slowing down and listening made me far more effective. In a team spread over 33 countries, like Zyte's, I'd lean even harder on written design docs, since that's where decisions actually get made.

---

## 4. Observability came too late at Alaya (reliability, SLOs, honest failure)

**Likely question:** "Tell me about something you'd do differently." / "How do you think about SLOs and telemetry?"

**Situation.** At Alaya I built the platform from a blank page in 2016, at first alone and then with a small team, while the business signed its first enterprise clients. Speed to a working product was everything in the early months.

**Task.** Get from nothing to a platform that enterprise customers could rely on, and grow the team and practices around it.

**Action.** I chose a stack we could scale without over-engineering (Node.js, React, PostgreSQL) and got the core features to a demo in about three months. From there we added a multi-tenant architecture, an API layer and impact reporting. When I hired the first three engineers I set up CI/CD, code review habits and architecture docs so the codebase wouldn't depend on my memory. Proper APM, though, came late, after we'd already been running in production for a while.

**Result.** The platform reached 50+ enterprise clients across Switzerland and France and was acquired by Benevity in 2021. But for too long we found out about problems from customers or from digging through logs, not from our own signals.

**Reflection.** I'd instrument from day one now, and I'd retrofit multi-tenancy never again; it's far cheaper to design for it up front. That's why the telemetry and SLO side of this role appeals to me. Error budgets and canary deployments are what turn "we think it's fine" into something you can actually measure, and on-call gets a lot calmer when the system tells you first.

---

## Gaps to handle if asked

gRPC/Protobuf, Kafka, Terraform and Vert.x/Netty aren't in my production history. Say so directly, then point to the closest real experience: service contracts and API design across a Java microservices estate at Benevity, Kubernetes and CI/CD, and the strangler-fig migration as evidence of careful change management. Don't claim incident-commander or SLO-ownership stories that didn't happen; story 4 is the honest version.
