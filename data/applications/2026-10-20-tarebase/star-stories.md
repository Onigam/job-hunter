# STAR+R Stories, Tarebase (Founding Engineer)

Tarebase's process includes an intro call with Dom and Felix, then a technical deep dive with the CTO on a past system plus a system design problem. These five stories map to what a first-employee interview at a pre-seed company tends to probe: building from nothing, owning decisions without a ticket queue, data quality and multi-tenancy, working with coding agents, and changing how people work.

---

## 1. Building a platform from a blank page

**Likely question:** "Tell me about something you built from scratch." / "How do you handle ambiguity with no spec?"

**Situation.** In 2016 I co-founded Alaya, an employee purpose and engagement platform. There was no product, no codebase and no customers, just a business cofounder starting conversations with companies who wanted something we hadn't built yet.

**Task.** My job was the entire technical side. I had to get to something we could demo quickly, but I also knew whatever I picked would still be running years later if we succeeded, so the choices had to hold up.

**Action.** I went with a boring, pragmatic stack, Node.js, React and PostgreSQL, because I could move fast in it alone and hire for it later. The first version was ready to demo in about three months. From there it grew in the order customers pulled it: an API layer, impact reporting, postal campaigns, and eventually a multi-tenant architecture once enterprise clients needed isolation. When the first three engineers joined, I set up CI/CD, code review and written architecture docs so I wasn't the only person who understood how things fit together.

**Result.** The platform went to production and reached 50+ enterprise clients across Switzerland and France. Benevity, a Canadian company valued at over $1B, acquired Alaya in 2021, and the platform carried through that process without a rewrite.

**Reflection.** Two things I'd change. I added proper APM late, and we spent time debugging blind that better observability would have saved. And I bolted on multi-tenancy rather than designing for it, which cost far more than doing it on day one. At Tarebase, with SMB customers each bringing their own logistics process, tenant isolation and observability would be in the first week's design, not the second year's backlog.

---

## 2. A hard architecture call under delivery pressure

**Likely question:** "Walk me through a technical trade-off you made." / Good fit for the CTO deep dive on a past system.

**Situation.** A few years into Alaya, the monolith was showing strain on its busiest endpoints. Half the team wanted a full microservices rewrite. Investors, meanwhile, wanted new features and had little patience for anything that looked like a pause.

**Task.** I needed a decision we could defend on both fronts: something that fixed the scaling problem without freezing the roadmap for months.

**Action.** Rather than settle it by argument, I ran a two-week spike comparing a microservices split against a modular monolith, with prototype load tests on both. I took the numbers to the leadership team and investors, which shifted the conversation away from opinions pretty quickly. The plan we landed on was a strangler-fig migration: pull out the two highest-traffic modules first, leave everything else in the monolith, and write down explicit criteria for when any further module would earn its own service.

**Result.** The first extracted module shipped in about six weeks. Response times on the busiest endpoints improved by roughly 40%, the rest of the monolith stayed stable all the way through the acquisition, and we never needed the big-bang rewrite.

**Reflection.** The hardest part wasn't technical, it was persuading people that not rewriting everything was the right call. Data won the argument, so next time I'd benchmark earlier and shorten the debate. It's the same instinct I'd bring to Tare: decide where you actually need the flexible, expensive thing (an agent, a separate service) and keep the rest simple and deterministic.

---

## 3. Getting reliable output from AI tooling, and getting people to use it

**Likely question:** "How do you use coding agents?" / "How do you make sure AI output is correct?" / "Tell me about influencing without authority."

**Situation.** At Benevity I was a Senior Staff IC with no direct reports. I wanted two engineering teams, neither of which reported to me, to start using AI-assisted code review and generation, and a fair number of them were sceptical about the quality of what the tools produced.

**Task.** Change how people worked without a mandate, and do it in a way that addressed the scepticism instead of ignoring it.

**Action.** I started with three engineers who were already curious. We built small internal demos on real work so the time savings were concrete, not theoretical. Then came informal lunch-and-learn sessions, no slides about the future of AI, just live demos including the cases where the tool got it wrong and how we caught it. I committed reusable prompt templates to a shared repo so people didn't have to start from zero, and wrote up specific wins, like a PR review cycle that came in about two hours shorter.

**Result.** Within about three months, roughly 70% of engineers on both teams were using AI-assisted review and generation, and I ended up as the informal AI tooling lead across the org. My own day-to-day now runs on multi-agent workflows with Claude CLI.

**Reflection.** No mandate made it slower but stickier, because people who adopted it on their own terms defended it to others. The part I'd push harder next time is review discipline. Showing where the tool fails taught more than showing where it works, and that's directly relevant to Tarebase's posting: using agents well matters less than having the judgment to reject what they produce.

---

## 4. Joining a much bigger org and not breaking things

**Likely question:** "Tell me about a time you had to adapt to a new environment." / "How do you work with people who disagree with you?"

**Situation.** After the 2021 acquisition I moved from a small team I'd built myself to a Benevity engineering org around ten times larger, with a different codebase (Java and microservices), a different culture and processes I didn't know.

**Task.** Bring Alaya's capabilities into Benevity's platform while keeping up the delivery pace we'd had as a startup.

**Action.** I'll be honest, I started by trying to fix things too quickly, and it didn't land well. So I slowed down. I spent the first month mapping how the existing architecture actually worked before proposing changes, and I put time into relationships with the platform and infra teams before pushing opinions on them. Over time I became the cross-team architecture contact for the Europe-facing product surface.

**Result.** The core Alaya features were migrated into Benevity's platform, and I contributed to three major cross-team architecture decisions.

**Reflection.** Listening first made me more effective than being right fast. That's worth saying in a founding role too, even with only three people. Dom brings years of logistics operations and Felix was a founding engineer at Raycast, so a lot of my early job would be learning what they already know before I start redesigning anything.

---

## 5. Talking about the Rust gap (not a STAR, but prepare it)

The posting lists Rust and TypeScript as the main stack. Your profile has TypeScript, Node.js, Python and Java, but no production Rust, so this will come up. Don't oversell. A version that sounds like you:

> "Most of my production work has been TypeScript and Node, with Java at Benevity and earlier at Sagemcom. I haven't shipped Rust in production. I've been through enough languages over 17 years that the syntax isn't what worries me; ownership and lifetimes are the real learning curve, and I'd want to pair on the first few Rust services rather than pretend otherwise. If you'd like to see where I am, I'm happy to do the on-site task in Rust."

Before the deep dive, it's worth building a small Rust project of your own (a document parser with typed validation would fit Tare's problem nicely) so you have something concrete to point to.
