# STAR+R Stories: CTO & Technical Co-Founder @ Tralkan (Sentinel Command)

Tralkan is looking for someone to take a validated software prototype into operational trials with real drones and ground robots, set the engineering standards, bring AI in under human oversight, and hire the first team once funding lands. The questions will lean toward founder judgment, reliability under failure, and how you work with a cofounder. These four stories cover that ground, followed by a short answer for the obvious gap (no drone or robotics experience).

---

## 1. Building a platform from a blank page to an acquisition

**Likely questions:** "Why should we trust you as a technical cofounder?" / "Tell me about building something from zero." / "How do you handle ambiguity?"

**Situation.** In 2016 I co-founded Alaya, a platform that helps companies run employee purpose and impact programs. There was no product, no customer and no code. My cofounders were out selling to enterprise clients who expected something real to be demoed within weeks.

**Task.** I owned the whole technical side: pick the stack, build the product, and later hire the people who'd build it with me, all while the business side was promising things to clients that didn't exist yet.

**Action.** I went with Node.js, React and PostgreSQL because I could move fast in them and none of it would box us in later. The first three months went into the smallest version we could demo to a paying client, and I resisted building anything that wasn't in front of a customer. Once we had traction the platform grew around what clients kept asking for: multi-tenancy, an API layer, impact reporting, even physical postal campaigns. When I hired the first three engineers I put CI/CD, code review and short architecture docs in place early, mostly so I wouldn't become the bottleneck for every decision.

**Result.** We reached 50+ enterprise clients across Switzerland and France, and Benevity, a Canadian company valued at over $1B, acquired Alaya in 2021. Their technical due diligence went through the platform we'd built from day one.

**Reflection.** Two things I'd change, and both apply directly to Sentinel. Observability came far too late; we added proper APM only after customers had already reported problems we couldn't see. And multi-tenancy was retrofitted, which cost a lot more than designing for it from the start would have. For a platform coordinating assets in the field, I'd treat logs, traces and an audit trail as part of the first version, not something to add later.

---

## 2. A hard architecture decision with investors pushing the other way

**Likely questions:** "Tell me about a technical trade-off under pressure." / "How do you decide between rebuilding and evolving a prototype?" (This one matters, since Sentinel is a working prototype that now has to become an operational system.)

**Situation.** A few years into Alaya our monolith was starting to crack under load on a handful of endpoints. Inside the team, people wanted a full microservices rewrite. Our investors wanted features, not a rewrite, and they had a point.

**Task.** I had to make a call we could defend on both fronts: fix the scaling problem without freezing the roadmap for months.

**Action.** Rather than argue from opinions, I ran a two-week spike that prototyped both approaches and load-tested them. I brought the numbers to the board and proposed a strangler-fig migration: pull out the two highest-traffic modules, leave everything else in the monolith, and write down the conditions under which we'd extract the next one. That last part mattered, because it turned "should we rewrite?" from a recurring argument into a checklist.

**Result.** The first extracted module shipped in about six weeks, and response times on the busiest endpoints improved by ~40%. The rest of the monolith stayed stable all the way through the acquisition, and we never needed a big-bang rewrite.

**Reflection.** The hardest part was social, not technical. Convincing people that "don't rewrite everything" was the ambitious option took longer than the spike did. I'd benchmark earlier next time to cut the debate short. At Tralkan I'd apply the same thinking to the prototype: find out what actually breaks under field conditions before deciding what to rebuild.

---

## 3. Bringing AI into how people work, without a mandate

**Likely questions:** "How would you introduce AI into Sentinel with proper human oversight?" / "How do you influence people who don't report to you?" / "How do you drive adoption of a new tool?"

**Situation.** At Benevity I was a Senior Staff IC with no direct reports. I was convinced AI-assisted development would change how our engineers worked, but the two teams I wanted to bring along didn't report to me, and plenty of them were sceptical.

**Task.** Get real adoption, not a slide deck, without any authority to require it.

**Action.** I started with three engineers who were already curious and worked alongside them on real tickets. We built demos from our own codebase so the time savings were concrete, and I ran informal lunch sessions where people could watch it work and poke at the failures too. The prompt templates that held up went into a shared repo so nobody had to start from scratch. I was careful to be honest about where the tools got things wrong, because I found that was what earned trust from the sceptics.

**Result.** Within about three months, roughly 70% of the engineers on both teams were using AI-assisted code review and generation, and I ended up as the informal AI tooling lead across the org.

**Reflection.** Going without a mandate was slower but it stuck, because the people who adopted it chose to and then argued for it themselves. The part that carries over to Sentinel is the stance on oversight. An AI detection in an emergency response context is a suggestion that a human confirms, with the confidence level and the source visible and every decision logged. I'd want operators to see where the model is weak, for the same reason engineers trusted the tools more once I showed them the failure cases.

---

## 4. Joining a much larger organisation after the acquisition

**Likely questions:** "How do you work with a cofounder or partner whose background differs from yours?" / "How do you handle integrating with systems and teams you don't control?" (Relevant to integrating with external emergency services, operators and hardware vendors.)

**Situation.** After the acquisition in 2021 I joined Benevity as a Senior Staff Engineer. The org was roughly ten times bigger than Alaya, with a different culture, a Java microservices codebase and processes I didn't know.

**Task.** Bring Alaya's capabilities into Benevity's platform while we kept shipping, and do it without losing the pace we'd had as a startup.

**Action.** The first month was mostly listening. I mapped the existing architecture before proposing anything and got to know the platform and infrastructure teams before I pushed any technical opinions. Once I understood why things were the way they were, I became a cross-team architecture liaison for the Europe-facing product surface.

**Result.** The core Alaya features were migrated into Benevity's platform, I contributed to three major cross-team architecture decisions, and I became the person both teams went to on AI tooling.

**Reflection.** Honestly, I moved too fast at first. I tried to fix things that weren't broken, and it cost me some goodwill. Slowing down made me more effective. In a two-person founding team, that translates to being clear early on about who owns which decisions, and assuming the other person had a reason before I question it.

---

## The gap question: "You've never worked with drones or robots."

That's true, and I'd say so up front rather than stretch it. The closest thing I've done is three years as a software architect at Sagemcom on telecom set-top boxes, which is software running on devices in the field and not in a data centre. What I bring to Sentinel is everything around the airframe: a reliable backend, clean interfaces to external systems, access control, testing and deployment, and an audit trail. That covers most of what the posting lists. For flight-control integration and EASA or BVLOS rules, my plan would be to learn quickly from the partners and operators you're already running validations with, and to make one of the first hires someone who's done autonomy middleware before. I'd rather own the platform properly than pretend to be a drone engineer.
