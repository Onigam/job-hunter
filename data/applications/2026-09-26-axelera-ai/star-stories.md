# STAR+R Stories: Axelera AI, Staff/Principal Software Engineer (AI Applications)

These are picked for a Staff/Principal IC role that owns a slice of a customer-facing SDK: technical strategy, performance trade-offs, cross-team influence and mentoring. All four come from `profile/star-bank.md`. None of them covers edge inference, quantization or C++, and that gap will come up. There's a prep note on it at the bottom.

---

## 1. Performance trade-off under delivery pressure (the strangler fig at Alaya)

**Likely questions:** "Tell me about a technical trade-off you made." "How did you improve latency or throughput on a system you owned?"

**Situation.** Alaya ran on a monolith that was starting to crack under load. Half the team wanted a full microservices rewrite, the other half wanted to keep going, and our investors wanted features, not a rewrite.

**Task.** It was my call as Head of Technologies. I needed a decision I could defend with numbers, one that wouldn't stop delivery for a quarter.

**Action.** Rather than argue it out in meetings, I ran a two-week spike. We prototyped both approaches and load-tested them against the traffic we actually had. The data pointed to something in between, so I proposed a strangler fig migration: pull out the two highest-traffic modules first and leave everything else in the monolith. I took the trade-offs to the CTO and our investors with the benchmark results in hand, and we wrote down explicit criteria for when any further module would earn its own service. That last part mattered, because otherwise every future debate would have started from zero.

**Result.** The first extracted module shipped in about six weeks, and the busiest endpoints got ~40% faster. The rest of the monolith stayed stable all the way through the Benevity acquisition. We never needed the big-bang rewrite.

**Reflection.** The hard part wasn't technical, it was convincing people that not rewriting everything was the right call. The benchmarks did that, not my opinion. Next time I'd benchmark earlier and cut the debate short. For Voyager, I'd approach pipeline latency the same way: measure end to end on real customer workloads before deciding which operator deserves the optimization budget.

---

## 2. Leading without formal authority (AI tooling at Benevity)

**Likely questions:** "How do you influence engineers who don't report to you?" "Tell me about mentoring." This is the core Staff+ question, so expect it.

**Situation.** At Benevity I was a Senior Staff IC with no direct reports. I wanted two teams that didn't report to me to start using AI-assisted development in their daily work.

**Task.** Change how people worked without any mandate to do so, and without it turning into one more tool nobody opens.

**Action.** I started small, with three engineers who were already curious. Together we built internal demos showing time saved on real tasks, not toy examples. Then came informal lunch-and-learn sessions: no slides about strategy, just live demos on our own codebase. I put reusable prompt templates in a shared repo so people could start from something that worked, and I wrote up concrete wins as they happened, like a PR review cycle that went about two hours faster.

**Result.** Within about three months, roughly 70% of engineers on both teams were using AI-assisted review and code generation. Without anyone formally deciding it, I ended up as the go-to person for AI tooling across the org.

**Reflection.** It was slower than a top-down rollout, but it stuck. The engineers who adopted it on their own terms became the ones advocating for it, and a mandate couldn't have produced that. I'd use the same approach to get the Applications team aligned on a shared metadata representation: early adopters first, a working reference implementation, then the rest.

---

## 3. Building a platform from a blank page (Alaya, 2016 to acquisition)

**Likely questions:** "Tell me about something you owned end to end." "How do you handle ambiguity?"

**Situation.** In 2016 I cofounded Alaya, an employee purpose and impact platform. There was no product, no customers and no code.

**Task.** Design and build the whole platform, alone at first and then with a team, while the business side was signing its first enterprise clients.

**Action.** I went with a pragmatic stack (Node.js, React, PostgreSQL) that could grow without being over-engineered on day one, and got the core features to a demo in about three months. From there it grew one layer at a time: multi-tenant architecture, a proper API layer, impact reporting, postal campaigns. When I hired our first three engineers, I set up CI/CD, a code review culture and architecture docs, so they joined a system with conventions rather than a pile of scripts.

**Result.** The platform went to production with 50+ enterprise clients across Switzerland and France, and Benevity (a Canadian unicorn valued at over $1B) acquired Alaya in 2021. Their due diligence was a fairly direct test of the technical decisions we'd made from the start.

**Reflection.** I added proper observability too late, and retrofitting multi-tenancy cost more than designing for it from the beginning would have. Both lessons carry over to an SDK: the data contracts and the instrumentation are the parts you can't cheaply bolt on after customers depend on them.

---

## 4. Joining a much larger org and not breaking things (Benevity integration)

**Likely questions:** "Tell me about a time you had to adapt to a new environment." "How do you work across teams?" It's relevant because Axelera has 250+ people across 20 countries and several offices.

**Situation.** After the acquisition, I went from a small startup to an engineering org about ten times bigger, with a different culture, a Java and microservices codebase, and processes I didn't know.

**Task.** Get Alaya's capabilities into Benevity's platform while still shipping new features, without losing the speed we'd had as a startup.

**Action.** For the first month, I mostly mapped the existing architecture before proposing anything. I spent time with the platform and infra teams before I started pushing technical opinions. Once I had that context, I took on the role of cross-team architecture liaison for the Europe-facing product surface, and started the AI tooling work described above.

**Result.** The core Alaya features were migrated into Benevity's platform. I contributed to three major cross-team architecture decisions, and became the reference for AI tooling on two teams.

**Reflection.** At first I moved too fast, trying to fix things that weren't actually broken in the new org. Slowing down and listening made me much more effective. I'd tell an interviewer that's exactly how I'd spend my first month on Voyager: read the SDK, talk to the customer-facing engineers, then propose.

---

## Prep note: the domain gap

The posting asks for 8+ years in semiconductor or AI, hands-on OpenVINO/TensorRT, GPU APIs, quantization and expert C++. None of the stories above covers that, and I shouldn't pretend otherwise. If asked, answer plainly: my ML work is LLM integration, embeddings and multi-agent workflows, not model compression on edge hardware, and Sagemcom was set-top box software, not inference. Then turn to what does transfer: designing SDK and API surfaces for external developers, owning shared data contracts, performance work driven by measurement, and mentoring. Before the interview, work through the public Voyager SDK repo (github.com/axelera-ai-hub/voyager-sdk), especially the YAML pipeline tutorials and the pipeline operators reference, so the discussion can be about their actual code.
