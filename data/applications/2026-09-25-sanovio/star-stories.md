# STAR+R Stories: SANOVIO, Founding Engineer

SANOVIO's process has a founder intro, a take-home plus system design round, and a second cofounder meeting focused on fit. Expect the founders to probe ownership in ambiguous situations, speed versus code quality, working across cultures (they run offices in Germany, Switzerland and China), and why a Senior Staff engineer wants a founding role again. The stories below map to those.

---

## 1. Building Alaya from a blank page to acquisition

**Likely questions:** "Tell me about something you built from zero." / "How do you work when nothing is defined?" / "Why founding engineer again?"

**Situation.** In 2016 I cofounded Alaya, an employee purpose and engagement platform. There was no product, no customers and no codebase, just a business side that was already talking to large companies and needed something to show them.

**Task.** My job was to build the whole platform, alone at first, and to have it hold up once real enterprise clients were on it. Later on it was also to build the team that would carry it.

**Action.** I picked a stack I knew would get us moving without boxing us in: Node.js, React and PostgreSQL. Nothing exotic, because the risk was in the product, not the technology. The first three months went into the core features we needed for a demo, and after that the platform grew in the order customers pulled it: multi-tenancy, an API layer, impact reporting, postal campaigns. Once there was enough traction I hired and onboarded the first three engineers and put the basics in place so they could ship without me in every review, which meant CI/CD, a code review habit and written architecture docs.

**Result.** The platform went into production and ended up serving 50+ enterprise clients across Switzerland and France. In 2021 Benevity, a Canadian company valued at over $1B, acquired Alaya, and the technical platform was a real part of that deal.

**Reflection.** Two things I'd change. I added proper monitoring and APM far too late, and I retrofitted multi-tenancy instead of designing for it from day one, which cost more than doing it upfront would have. At SANOVIO the equivalent is probably the data model for products and suppliers across hospitals; that's the thing I'd want to get right early, because everything else sits on top of it.

---

## 2. Speed versus quality: choosing not to rewrite

**Likely questions:** "Tell me about a technical trade-off." / "How do you balance shipping fast with clean code?" / system design follow-ups

**Situation.** A few years into Alaya our monolith was starting to crack under load on a handful of endpoints. Half the team wanted to rewrite everything as microservices. The investors, understandably, wanted new features and had no appetite for a rewrite.

**Task.** I had to make a call we could defend on both fronts: fix the scaling problem without freezing the roadmap for months.

**Action.** Rather than keep arguing in meetings, I ran a two-week spike where we prototyped both approaches and load tested them. I took the numbers, not opinions, to the leadership team and the investors. What I proposed was a strangler fig migration: pull out the two highest-traffic modules as separate services, leave the rest of the monolith alone, and write down explicit criteria for when any other module would earn its own extraction.

**Result.** The first extracted module shipped in about six weeks, and the busiest endpoints got roughly 40% faster. Feature work kept going the whole time, the remaining monolith stayed stable right through the acquisition, and we never needed the big-bang rewrite.

**Reflection.** The hard part wasn't technical. It was convincing people that not rewriting was the right answer, and the data is what finally settled it. Today I'd benchmark earlier and cut the debate short. For a team SANOVIO's size, I'd default to a well-structured modular monolith and only split things out once there's a measured reason.

---

## 3. Getting two teams to adopt AI tooling without any authority

**Likely questions:** "How do you raise the bar for other engineers?" / "Tell me about mentoring." / "How do you use AI in your own work?"

**Situation.** At Benevity I was a Senior Staff IC with no direct reports. I wanted two teams that didn't report to me to start using AI-assisted development in their daily work, and a mandate wasn't an option, nor would it have worked.

**Task.** Change how people actually worked, and make it stick, purely through influence.

**Action.** I started with three engineers who were already curious and worked alongside them until they had real wins to talk about. From there I built small internal demos that showed the time saved on actual tasks from our own backlog, and ran informal lunch sessions that were demos, not presentations. I also wrote reusable prompt templates and put them in a shared repo so nobody had to start from scratch, and I wrote down concrete results as they came in, like a PR review cycle that went about two hours faster.

**Result.** Within about three months roughly 70% of engineers across both teams were using AI-assisted code review and generation, and I became the informal AI tooling lead for the org.

**Reflection.** Going without a mandate was slower, but it lasted, because the people who picked it up on their own became the ones advocating for it. It's also how I'd want to work as an early engineer at SANOVIO: the job ad mentions AI tools access and mentoring, and I think those land best when the senior people show the workflow rather than prescribe it.

---

## 4. Joining a much bigger organization across cultures

**Likely questions:** "Tell me about working with people from different cultures." / "Describe a time you were wrong." / "How do you work with stakeholders?"

**Situation.** After the acquisition I moved from a small Swiss startup into Benevity, a Canadian company with an engineering org about ten times our size. The codebase was different (Java and microservices), the processes were different, and so was the way decisions got made between Europe and North America.

**Task.** Get Alaya's capabilities integrated into Benevity's platform while still shipping new work, and without losing the speed our small team was used to.

**Action.** My first instinct was to start fixing things, and I did push a few changes too early. I corrected course fairly quickly. I spent the first month mapping the existing architecture before proposing anything, and I put real time into relationships with the platform and infrastructure teams before pushing technical opinions. Over time I became the cross-team architecture contact for the Europe-facing side of the product.

**Result.** The core Alaya features were migrated into Benevity's platform, I contributed to three major cross-team architecture decisions, and I ended up as the person both engineering teams came to for AI tooling.

**Reflection.** Moving fast was my strength at Alaya and a liability in the first weeks at Benevity. Listening first made me far more effective. SANOVIO sits in between: small and fast, but selling to hospitals in several countries and sourcing from manufacturers worldwide, so knowing when to slow down and understand the other side matters.

---

## Short answer to have ready: "Why step back from Staff to a founding role?"

I've done the scale-up and post-acquisition side for five years now, and I learned a lot from it, but the work I'm best at is the early stage, where one engineer's decisions shape the whole product. SANOVIO is profitable, the customers are real, and the hard problem (messy procurement data plus agents that have to be trusted with purchasing) sits right where my recent AI work is. I'm not looking for a title; I'm looking for ownership.
