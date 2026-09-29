# STAR+R Stories: Nexthink, Senior Backend Engineer (Nexthink Assist)

Role focus from the posting: distributed Java services on AWS, low-latency APIs for an AI conversational product, end-to-end ownership including monitoring, mentoring, and acting as the link between product and engineering. The stories below are picked for those themes. Gaps to be honest about if asked: Kafka in production and "millions of users" scale are not in my history, so don't stretch these stories to claim them.

---

## Story 1: Strangler fig instead of a rewrite

**Likely questions:** "Tell me about a technical trade-off you made." "How do you scale a system that's starting to struggle?" "How do you handle tech debt when product wants features?"

**Situation.** At Alaya, our monolith was starting to crack under load on a handful of busy endpoints. Half the team wanted a full microservices rewrite. Investors, meanwhile, were asking for new features, not a pause for infrastructure work.

**Task.** It was my call to make, as Head of Technologies, and I needed a decision I could defend to both the engineers and the people funding us.

**Action.** Rather than argue it out in meetings, I ran a two-week spike where we prototyped both approaches and put them under load tests. The numbers made the conversation much calmer. I presented the trade-offs to the leadership team and investors with concrete figures, then proposed a strangler fig migration: pull out the two highest-traffic modules first, leave everything else in the monolith, and write down clear criteria for when any other module would earn its own service.

**Result.** The first extracted module shipped in about six weeks, and response times on the busiest endpoints improved by roughly 40%. The remaining monolith stayed stable all the way through the Benevity acquisition, and we never needed the big-bang rewrite.

**Reflection.** Convincing people that not rewriting everything was the right move took longer than the engineering. Benchmarking earlier would've shortened the debate. For Nexthink, the point I'd make is that I'd rather split a service because the data says so than because the diagram looks cleaner.

---

## Story 2: Learning the hard way about observability

**Likely questions:** "How do you own a feature after it ships?" "Tell me about a production problem." "What does good monitoring look like to you?"

**Situation.** Alaya grew from nothing to 50+ enterprise clients across Switzerland and France, and for a long stretch we ran it with logs and not much else. We only added proper APM late in the company's life.

**Task.** As the person who'd built most of the platform, I was also the person who got called when something was slow, and I had to find out why without much to look at.

**Action.** Once we'd moved to extracted services, the lack of visibility became impossible to ignore, since a slow request could now be slow in more than one place. I pushed APM and structured logging into the stack and made it part of how we shipped: a feature wasn't finished until we could see how it behaved in production.

**Result.** Diagnosing slow requests went from guesswork across logs to something much closer to following a trace. It also changed how we talked about features, because "done" now included being able to see them in production. (Before the interview, check which APM tool and which concrete incident to name, and keep the numbers out unless you're sure of them.)

**Reflection.** I'd do this on day one next time. It's cheap early and expensive later. The posting's "design through monitoring" line is exactly how I think about ownership now, and it's a lesson I paid for rather than read about.

---

## Story 3: Joining a Java microservices org after the acquisition

**Likely questions:** "Tell me about adapting to a new codebase or team." "How do you work with product and other teams?" "Tell me about a time you were wrong."

**Situation.** After Benevity acquired Alaya in 2021, I joined as Senior Staff Engineer in an engineering org about ten times our size. Their platform was Java and microservices, the processes were different, and so was the culture.

**Task.** We had to bring Alaya's capabilities into Benevity's platform while still shipping new work, and without losing the delivery pace we'd had as a small company.

**Action.** My first instinct was to start fixing things, and that didn't go well. So I stepped back and spent about a month mapping the existing architecture and talking to the platform and infrastructure teams before proposing anything. Once I understood why things were the way they were, my suggestions landed much better. Over time I became the cross-team architecture contact for the Europe-facing product surface, which meant a lot of translating between product managers asking for features and teams worried about what those features would do to their services.

**Result.** The core Alaya features were migrated into Benevity's platform, and I contributed to three major cross-team architecture decisions along the way.

**Reflection.** I moved too fast at the start and tried to fix things that weren't broken. Listening first made me more effective, and it's what I'd do in my first months at Nexthink too, especially on a codebase that's already serving a large installed base.

---

## Story 4: Getting two teams onto AI-assisted development without authority

**Likely questions:** "How do you mentor or lead without being a manager?" "How do you influence technical direction?" "What's your experience with LLMs?"

**Situation.** At Benevity I was a Senior Staff IC with no direct reports. I wanted two teams, neither of which reported to me, to start using AI-assisted code review and generation.

**Task.** Change how engineers worked day to day, with no mandate and no ability to tell anyone what to do.

**Action.** I started small, with three engineers who were already curious. We built internal demos that showed time saved on real tasks, not toy examples, and I ran informal lunch-and-learn sessions where the only goal was to show what worked. The prompt templates we found useful went into a shared repo so nobody had to start from scratch, and I wrote up concrete wins, like a PR review cycle that took about two hours less than usual.

**Result.** Within three months roughly 70% of engineers across both teams were using AI-assisted review and generation. I ended up as the informal AI tooling lead for the org.

**Reflection.** It was slower than a top-down rollout would have been, but it stuck, because the people who adopted it did so on their own terms and then pitched it to their teammates. That's also how I'd approach mentoring junior and mid-level engineers on the Assist team: show, pair, and let them own it.

---

## Story 5: Building Alaya end to end

**Likely questions:** "Walk me through something you built from scratch." "How do you handle ambiguity?" "What does end-to-end ownership mean to you?"

**Situation.** In 2016 I cofounded Alaya, an employee purpose and engagement platform. There was no product, no customers and no code.

**Task.** Architect and build the whole platform, alone at first and later with a small team, while the business side was signing its first enterprise clients.

**Action.** I picked a deliberately plain stack, Node.js, React and PostgreSQL, because I needed something I could move fast on and that wouldn't fall over as we grew. Getting to a first demo took about three months. From there I kept extending it: multi-tenancy, an API layer, impact reporting, postal campaigns. I also hired and onboarded the first three engineers and set up CI/CD, code review and architecture docs so the platform didn't live only in my head.

**Result.** The platform went to production with 50+ enterprise clients across Switzerland and France, and Benevity, a Canadian company valued at over $1B, acquired Alaya in 2021.

**Reflection.** Multi-tenancy was the thing I underestimated. Retrofitting it cost far more than designing for it would have. At Nexthink the equivalent is probably tenant isolation and latency budgets on the Assist path: decisions that are cheap to get right early and painful to change later.

---

## Quick answers to have ready

**"Why backend, when your title is Senior Staff?"** I like being close to the code and owning systems in production. A senior backend role on an AI product with real data behind it is a better fit for how I want to work than a role that's mostly diagrams.

**"How's your Java?"** I've worked in Benevity's Java microservices codebase, and I've used Java since my Sagemcom days, but most of my recent hands-on time has been TypeScript and Node.js. I'd expect a short ramp-up on modern Java 17+ idioms and Micronaut, and I'm upfront about that.

**"Kafka?"** Honest answer: limited production experience. I understand event-driven designs and have worked with Redis, and I'd want to get properly hands-on with Kafka early.
