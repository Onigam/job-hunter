# STAR+R Stories: Forward Deployed Engineer (Founding), AI Integrations Startup

Forward deployed interviews tend to circle the same questions: can you get dropped into an unfamiliar system and become useful fast, can you get people to adopt something, can you tell a one-off customer request from a product signal, and can you ship with no structure around you. The four stories below map to those questions. Keep each one to about two minutes when spoken.

---

## 1. Building Alaya from a blank page to acquisition

**Likely questions:** "Tell me about something you built from scratch." "How do you handle ambiguity?" "Why a founding role?"

**Situation.** In 2016 I co-founded Alaya, an employee purpose and engagement platform. There was no product, no customers and no codebase, and the business side was already going after its first enterprise clients.

**Task.** My job was to build the whole platform, on my own at first, while the business side was signing the first clients. Whatever I built had to be demo-ready quickly and still hold up once real companies started running their employees through it.

**Action.** I picked a stack I knew would carry us without heroics, Node.js, React and PostgreSQL, and got the core features to a demo-able state in roughly three months. From there the product grew in whatever direction the clients pulled it: multi-tenancy, an API layer, impact reporting, even postal campaigns. As the client base grew I hired and onboarded the first three engineers, and set up CI/CD, code review habits and architecture docs so they weren't depending on what was in my head.

**Result.** The platform reached 50+ enterprise clients across Switzerland and France, and Benevity, a Canadian unicorn valued above $1B, acquired us in 2021. The technical decisions from the first months were still in production at the time of the acquisition.

**Reflection.** Two things I'd change. I'd add proper observability much earlier, because we bolted on APM late and spent too long debugging blind. And I'd design for multi-tenancy from day one; retrofitting it cost far more than building it in. Both lessons apply directly to a founding FDE role, where early integrations become the template for every customer after them.

---

## 2. Landing inside someone else's system: the Benevity integration

**Likely questions:** "How do you get productive in an unfamiliar codebase?" "Tell me about working inside a customer's environment." "Tell me about navigating change."

**Situation.** After the acquisition I joined Benevity as a Senior Staff Engineer. The engineering org was around ten times the size of Alaya, the stack was Java microservices instead of our Node.js platform, and the processes and culture were completely different.

**Task.** I had to bring Alaya's capabilities into Benevity's platform without stalling the feature work our existing clients were still expecting.

**Action.** My first instinct was to start fixing things, and I did push a few changes too early. I corrected course and spent most of the first month mapping how the existing architecture actually worked before proposing anything. I built relationships with the platform and infra teams first, so that when I did argue for a design it came from someone they'd already worked with. Over time I became the architecture liaison for the Europe-facing product surface, which meant translating between what our European clients needed and what the core platform teams were willing to own.

**Result.** The core Alaya features were migrated into Benevity's platform, and I contributed to three major cross-team architecture decisions along the way.

**Reflection.** Moving fast in a system you don't understand yet mostly creates noise. It's the same discipline I'd bring into a customer's stack as an FDE: understand how their auth, data flows and failure modes actually behave before suggesting they change anything.

---

## 3. Getting people to adopt a tool without a mandate

**Likely questions:** "How do you drive adoption?" "Tell me about influencing without authority." "How do you run a technical session with a skeptical audience?"

**Situation.** At Benevity I was an IC with no direct reports. I wanted two engineering teams, neither of which reported to me, to start using AI-assisted development in their daily work.

**Task.** Change how roughly two teams' worth of engineers worked, without any authority to tell them to.

**Action.** I didn't try to convince everyone at once. Three engineers were already curious, so I started with them and showed the tooling on real work rather than toy examples. I built small internal demos that showed actual time saved, ran informal lunch sessions where I mostly just worked live in front of people, and put reusable prompt templates in a shared repo so nobody had to start from zero. When someone saved a couple of hours on a PR review cycle, I wrote it down and shared it, because a colleague's result is more convincing than mine.

**Result.** Within about three months, ~70% of engineers on both teams were using AI-assisted code review and generation, and I ended up as the informal AI tooling lead for the org.

**Reflection.** It was slower than a top-down rollout would have been, but it stuck, because the people who adopted it on their own terms became the ones advocating for it. That's very close to what a forward deployed engineer does with a customer's team: working live on their actual problem is what moves an evaluation into production, not a slide deck.

---

## 4. Turning pressure into a scoped technical decision

**Likely questions:** "Tell me about a trade-off you made." "How do you decide what goes on the roadmap?" "Tell me about pushing back on stakeholders."

**Situation.** At Alaya the monolith had started to crack under load. The team was split between a full microservices rewrite and a modular monolith, and the investors wanted new features, not a rewrite.

**Task.** I needed a decision I could defend to both camps, one that fixed the real scaling problem without freezing delivery for months.

**Action.** Instead of arguing opinions, I ran a two-week spike that prototyped both approaches and load-tested them. I took the numbers to the leadership team and the investors and proposed a strangler fig migration: extract only the two highest-traffic modules, leave the rest of the monolith alone, and agree up front on the criteria that would justify extracting anything else later.

**Result.** The first extracted module shipped in about six weeks and the busiest endpoints got ~40% faster. The remaining monolith stayed stable through to the acquisition, and we never needed a big-bang rewrite.

**Reflection.** The hardest part wasn't technical; it was convincing people that not rewriting everything was the right call, and the benchmark data is what ended the debate. I'd benchmark even earlier next time. The same habit matters for this role, where recurring customer requests need to be separated from one-off asks with evidence before they go to the roadmap.

---

## Questions to prepare for (no story yet)

- **"Tell me about a time you handled several customers at once."** The bank doesn't have a clean story for this. The closest real material is Alaya, where early enterprise clients and the build ran in parallel. Draft something from real memory before the interview rather than improvising.
- **"Walk me through debugging a failing third-party integration."** Expect a live or whiteboard exercise. Prepare a walkthrough of an OAuth token refresh failure and a webhook delivery problem (retries, idempotency keys, signature checks).
- **"Why forward deployed rather than pure platform?"** Have a two-sentence answer ready that connects the cofounder years, when the customer was always in the room, to this role.
