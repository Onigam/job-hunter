# STAR+R Stories: Staff Software Engineer, Platform (undisclosed fintech via Jobgether)

What this role will probe: owning a multi-year platform roadmap, migrating from batch to event-driven without breaking consumers, setting standards other teams follow (schemas, versioning, deprecation), leading incidents, and mentoring senior engineers. Expect a "tell me about a migration" question and a "how do you get other teams to adopt your standard" question for sure.

A note on honesty: the profile doesn't show production Kafka/Redpanda or Go. Don't stretch the stories to imply it. When the topic comes up, name the gap and point to the closest real experience: contracts between services, incremental migrations, and the Java microservices at Benevity.

---

## Story 1: Strangler fig instead of a rewrite

**Likely questions:** "Tell me about a large migration you led." / "How do you move a system without stopping delivery?" / "Walk me through a hard architecture trade-off."

**Situation.** At Alaya, around the time we were selling to bigger enterprise clients, our Node.js monolith started showing cracks on a handful of hot endpoints. Half the team wanted a full microservices rewrite. Our investors wanted features, not a rewrite, and they weren't wrong to worry about it.

**Task.** I was Head of Technologies, so the call was mine. It had to hold up technically, and I had to be able to defend it to people who didn't care about architecture.

**Action.** Rather than argue it out in meetings, I spent two weeks on a spike: prototypes of both approaches, with load tests on the endpoints that were actually hurting. The data showed that most of the pain sat in two modules. So I proposed a strangler fig migration. We'd extract those two behind a stable interface, route traffic progressively, and leave everything else in the monolith until it had a measured reason to move. I also wrote down the criteria for extracting the next module, so the decision wouldn't be relitigated every sprint.

**Result.** The first extracted module shipped in about six weeks. The busiest endpoints got roughly 40% faster, feature work never stopped, and the remaining monolith stayed stable all the way through the Benevity acquisition. We never needed a big-bang rewrite.

**Reflection.** The hard part was social, not technical: convincing people that not rewriting everything was the ambitious choice. Next time I'd benchmark earlier and cut the debate shorter. For a batch-to-streaming move I'd apply the same logic, running both paths side by side, reconciling outputs, and only retiring the batch job once the numbers agreed for long enough to trust them.

---

## Story 2: Getting two teams to adopt a practice I couldn't mandate

**Likely questions:** "How do you set standards across teams you don't manage?" / "Tell me about influencing without authority." / "How do you drive adoption of a platform?"

**Situation.** At Benevity I was a Senior Staff IC with no direct reports. I was convinced AI-assisted development would change how our engineers worked, but the two teams I wanted to bring along didn't report to me and had plenty on their plates already.

**Task.** Change daily habits across both teams without a mandate, and make it stick after I stopped pushing.

**Action.** I started with three engineers who were already curious and worked with them on their real tickets, not toy examples. Once we had a few concrete wins, like a PR review cycle that went about two hours faster, I ran informal lunch-and-learn sessions where they did most of the talking. Then I turned what worked into reusable prompt templates in a shared repo, so adopting it cost nothing beyond a copy-paste.

**Result.** Within roughly three months, around 70% of the engineers on both teams were using AI-assisted review and generation, and I'd become the informal tooling lead for the org.

**Reflection.** Mandate-free was slower but much stickier; the people who adopted it on their own terms became the ones defending it. I'd run a schema or versioning standard the same way here. Make the right path the easy path, through client libraries, templates and CI checks, and let early adopters show the rest of the org it works before it becomes a rule.

---

## Story 3: Joining a 10x larger engineering org after the acquisition

**Likely questions:** "How do you ramp up on an existing platform?" / "Tell me about a time you were wrong." / "How do you work in a distributed, cross-timezone environment?"

**Situation.** After Benevity bought Alaya in 2021, I went from running the whole stack to being one Senior Staff Engineer in an org about ten times bigger. It had a different culture, a Java microservices codebase, and teams spread between Europe and North America.

**Task.** Bring Alaya's capabilities into Benevity's platform without losing the delivery speed we'd built, and earn enough trust to influence architecture beyond my own scope.

**Action.** My first instinct was to fix things fast, and I pushed changes on a couple of things that weren't actually broken. That didn't land well. So I reset: I spent about a month mapping how the existing services talked to each other before proposing anything, built relationships with the platform and infra teams, and started writing proposals that showed I understood why things were the way they were. Much of that happened asynchronously across time zones, so I got disciplined about written design docs.

**Result.** We migrated the core Alaya features into Benevity's platform. I contributed to three major cross-team architecture decisions and became the architecture liaison for the Europe-facing product surface.

**Reflection.** Listening first made me more effective, not slower. In a Staff role on an existing streaming platform, I'd expect to spend my first weeks learning the consumer landscape, who depends on which topics and what breaks if a schema changes, before drawing any roadmap.

---

## Story 4: Building the engineering foundations from zero

**Likely questions:** "Tell me about working with ambiguity at a startup." / "What does good engineering culture look like to you?" / "How do you mentor engineers?"

**Situation.** In 2016 I co-founded Alaya with no product, no customers and no team. The business side was already pitching enterprise clients, so the platform had to exist quickly and survive their security reviews.

**Task.** Design and build the platform, then grow and onboard an engineering team that could keep it running without me being the bottleneck.

**Action.** I picked a deliberately boring stack, Node.js, React and PostgreSQL, because I needed something I could scale without heroics. We had a demo in about three months. As clients came in I added multi-tenancy, an API layer and impact reporting. When I hired the first three engineers, I set up CI/CD, a code review culture and architecture docs early, mostly so that the reasoning behind decisions lived somewhere other than my head.

**Result.** The platform reached 50+ enterprise clients across Switzerland and France, and Benevity, a Canadian unicorn valued above $1B, acquired us in 2021. The technical due diligence held up.

**Reflection.** Two things I'd change. I added proper observability far too late, and I underestimated how expensive it is to retrofit multi-tenancy. Both lessons apply directly to a streaming platform. Tracing and consumer lag metrics have to exist from day one, and tenant or account isolation belongs in the schema and auth design, not bolted on later.

---

## Gap answers to have ready

**"Have you run Kafka or Redpanda in production?"**
Answer plainly that you haven't operated it as the owner. Then explain how you'd approach it: you understand the hard parts are delivery semantics, idempotent consumers, schema evolution and backpressure rather than the broker itself, and those are contract problems you've dealt with between services. Mention what you'd read first (their incident history and consumer topology).

**"How's your Go?"**
You've written production code in TypeScript and Java; Go would be your ramp-up. Offer a concrete plan, like shipping a small change to a client library in the first month, and point out that a strongly typed background makes the move straightforward.

**Incident leadership.**
You don't have a specific incident story in the bank yet. Before the interview, write down one real production incident from Alaya or Benevity (what broke, how you coordinated, what the postmortem changed) and add it to `profile/star-bank.md`. The posting explicitly asks for on-call and incident tech lead experience, so expect the question.
