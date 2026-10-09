# STAR+R Stories: Delta Labs, Senior Full Stack Developer

The posting stresses end-to-end feature ownership, shipping fast under pressure, growing the architecture as workloads grow, and using AI tools every day. These four stories map onto those points. Tell them out loud, and don't recite them.

---

## 1. Owning a product end to end, from blank page to acquisition

**Likely questions:** "Tell me about something you built from scratch." / "How do you work in a fast-paced early-stage team?" / "Walk me through a feature you owned end to end."

In 2016 I co-founded Alaya, an employee purpose and engagement platform. We had no product, no customers and a business side that was already talking to enterprise prospects, so the clock started on day one. I was responsible for the whole technical side: picking the stack, building the first version, and later hiring the people who'd help me extend it.

I went with Node.js, React and PostgreSQL because I knew I could move fast on them without painting us into a corner. The first version was demo-ready in about three months. From there the product grew outward: an API layer, multi-tenancy once we had several enterprise clients sharing the platform, impact reporting, and postal campaigns. When I hired the first three engineers, I set up CI/CD, code review and short architecture docs so they could ship on their own instead of queuing behind me.

Alaya reached 50+ enterprise clients across Switzerland and France, and Benevity acquired it in 2021. Their due diligence went through the platform we'd built, and it held up.

Looking back, I'd have added proper observability much earlier, since we only brought in APM late and spent too long guessing at production issues. I'd also design for multi-tenancy from the start. Retrofitting it cost us more than doing it upfront would have, and that's directly relevant here, where enterprise clients and SSO are on the roadmap.

---

## 2. Extending an architecture under delivery pressure

**Likely questions:** "Tell me about a technical trade-off." / "How do you scale a system as load grows?" / "How do you handle tech debt when the business wants features?"

At Alaya, our monolith started to crack under load on a few hot endpoints. Half the team wanted a full microservices rewrite. Investors wanted features, not a rewrite. I had to make a call that we could defend on both fronts.

Rather than settle it by opinion, I ran a two-week spike that compared the two approaches with prototype load tests. I brought the numbers to the leadership team and investors and proposed a strangler fig migration: extract the two highest-traffic modules, leave everything else in the monolith, and write down clear criteria for when another module would earn its own service.

The first extracted module shipped in six weeks. The busiest endpoints got roughly 40% faster, feature work kept going in parallel, and the remaining monolith stayed stable all the way through the acquisition. We never needed a big-bang rewrite.

The technical part was the easy half. Convincing people that "don't rewrite everything" was the ambitious option took more effort, and data did most of that work. Next time I'd benchmark earlier and cut the debate short. At Delta Labs I'd expect the same tension around simulation workloads: Python services and durable jobs that need to grow without stalling feature delivery.

---

## 3. Making AI tooling part of how a team works

**Likely questions:** "How do you use AI in your development work?" / "Tell me about influencing without authority." / "How do you make sure AI-generated output is any good?"

At Benevity I was a Senior Staff IC with no direct reports. I wanted two engineering teams that didn't report to me to adopt AI-assisted code review and generation, and a mandate wasn't an option.

I started small, with three engineers who were already curious. We built demos on real tasks from our own backlog, so nobody had to take time savings on faith; one review cycle that normally ate a couple of hours went noticeably faster. Then I ran informal lunch sessions with no slides and no obligation, and committed reusable prompt templates to a shared repo so people could start from something that already worked.

Within about three months, ~70% of engineers on both teams were using AI-assisted review and generation, and I'd become the informal AI tooling lead across the org.

Going without a mandate was slower, but it lasted, because the engineers who adopted it on their own terms became the advocates. Since then my own workflow has moved further, to multi-agent setups with Claude CLI and OpenClaw where I spend most of my effort structuring context and deciding where a human checks the output. That's close to what your evals and regression checks need to do. I haven't run a formal LLM eval suite in production for customers yet, and I'd say so plainly if asked; the instinct for where output goes wrong is there, and the tooling is what I'd pick up.

---

## 4. Ramping up on an unfamiliar stack and codebase

**Likely questions:** "Our backend is mostly Python and you're stronger in TypeScript. How would you ramp up?" / "Tell me about joining a team with a different way of working."

After the acquisition I joined Benevity, an organisation about ten times Alaya's size, with a Java microservices codebase, different processes and a different culture. My job was to fold Alaya's capabilities into their platform without losing the product velocity we'd had as a startup.

For the first month I mostly mapped the existing architecture and talked to the platform and infra teams before proposing anything. Once I understood why things were the way they were, my suggestions stopped bouncing off. I ended up as the cross-team architecture liaison for the Europe-facing product surface.

The core Alaya features were migrated into Benevity's platform, and I contributed to three major cross-team architecture decisions along the way.

Honestly, I moved too fast at first and tried to fix things that weren't broken. Listening first made me far more effective. For Delta Labs that translates simply: Python services, LangGraph and your Azure setup are where I'd spend the first weeks reading code and shipping small changes before suggesting anything bigger.

---

## Questions to ask them

How do you validate that a twin's answers track real consumer behaviour, and how does that validation feed back into engineering, as evals, regression sets or something else? What does a long simulation run look like today in duration, steps and failure modes, and what happens when one dies halfway? How is work split between the research team and engineering when an experiment becomes a product feature? What does "regularly in person" mean in practice, in days per week?
