# STAR+R Stories: OVAITY, CTO / Technical Co-Founder, Lab Automation

Picked for what a solo founder hiring a technical co-founder will probe: can you build from nothing, can you make architecture calls that hold up, can you get people who don't report to you to change how they work, and can you put AI agents into a workflow without breaking trust. Each story ends with a short note on how to bridge it to OVAITY's world.

---

## 1. Building Alaya from a blank page to acquisition

**Likely question:** "Tell me about something you built from scratch." / "Why should we believe you can be a co-founder?"

**Situation.** In 2016 I co-founded Alaya, a platform for employee purpose and engagement. There was no product, no customers and no code, just a business co-founder who was already talking to enterprise prospects and needed something real to show them.

**Task.** My job was the whole technical side: pick the stack, build the first version on my own, then turn it into something a team could work on while the company signed its first big clients.

**Action.** I went with Node.js, React and PostgreSQL because I could move fast in them and I knew they'd hold up at the scale we were likely to reach in the next few years. The first demo-able version took about three months. After that I kept widening it as clients asked for things: an API layer, multi-tenancy, impact reporting, even physical postal campaigns that had to be tracked end to end. Once the product had pull, I hired and onboarded the first three engineers and put the basics in place, CI/CD, code review, and architecture docs that a new person could actually read.

**Result.** Alaya ended up in production with 50+ enterprise clients across Switzerland and France, and Benevity, a Canadian unicorn valued above $1B, acquired us in 2021. The technical due diligence went through without surprises, which I took as the clearest sign the early decisions had been sound.

**Reflection.** Two things I'd change. I retrofitted multi-tenancy, and that cost far more than designing for it on day one would have. Observability also came too late; we added proper APM long after we needed it. For OVAITY both lessons map directly: tenant isolation and audit trails for sensitive research data aren't features to add later, they're the foundation.

**Bridge to OVAITY:** "Your private beta is roughly where Alaya was when the first enterprise clients arrived. That's the moment when shortcuts either get paid down or become permanent."

---

## 2. Choosing the strangler fig over a rewrite

**Likely question:** "Walk me through a hard technical trade-off." / "How do you balance speed and architecture?"

**Situation.** A few years into Alaya, the monolith was showing cracks on its busiest endpoints. Half the team wanted a full microservices rewrite. Investors wanted new features and had little patience for anything that looked like a rewrite.

**Task.** I had to make a call we could defend on both fronts, one that fixed the scaling problems without stopping delivery for months.

**Action.** Rather than argue it out in meetings, I ran a two-week spike, prototyping both approaches and load-testing them. I took the numbers to the leadership team and the investors instead of opinions. My proposal was a strangler fig migration: pull out the two highest-traffic modules, leave everything else in the monolith, and write down explicit criteria for when any other module would earn its own service.

**Result.** The first extracted module shipped in about six weeks, and the busiest endpoints got roughly 40% faster. The rest of the monolith stayed stable all the way through the acquisition, and we never needed a big-bang rewrite.

**Reflection.** The hardest part wasn't technical. It was convincing smart people that not rewriting everything was the right answer. Data ended that debate, and I'd benchmark even earlier next time to shorten it further.

**Bridge to OVAITY:** "Instrument integrations will tempt you toward a big generic abstraction early. I'd rather build two real connectors, learn from them, and extract the pattern once it's obvious."

---

## 3. Getting two teams to adopt AI-assisted development without authority

**Likely question:** "How do you lead without formal authority?" / "How would you get researchers to trust AI agents?"

**Situation.** At Benevity I was a Senior Staff IC with no direct reports. I believed AI-assisted development would change how our engineers worked, but the two teams I wanted to bring along didn't report to me and had no mandate to change anything.

**Task.** Get real, lasting adoption of AI tooling across both teams, knowing a top-down push would've been ignored or resented.

**Action.** I started with three engineers who were already curious and worked with them on their own tasks, not toy examples. Once we had concrete wins, like cutting about two hours from a single PR review cycle, I shared them in informal lunch sessions with live demos and no slides telling anyone what to do. I also wrote reusable prompt templates and put them in a shared repo, so trying it cost people almost nothing.

**Result.** Within about three months, around 70% of engineers on both teams were using AI-assisted code review and generation, and I became the informal lead for AI tooling across the org.

**Reflection.** It was slower than a mandate, but it stuck, because the people who adopted it did so on their own terms and then pulled others in. I'd expect scientists to behave the same way: they'll trust an agent once they've seen it be right on their own data, with the evidence trail visible, and not before.

**Bridge to OVAITY:** "Researchers are a tougher crowd than engineers. Provenance and traceable answers are what turn a sceptical PI into the person who recommends you to the lab next door."

---

## 4. Integrating into a much bigger organisation after the acquisition

**Likely question:** "Tell me about working in an unfamiliar domain." / "How do you learn a system you didn't build?"

**Situation.** After Benevity acquired Alaya in 2021, I joined a company about ten times our size, with a different stack (Java and microservices), a different culture and processes I didn't know.

**Task.** Bring Alaya's capabilities into Benevity's platform while keeping up delivery on new features.

**Action.** For the first month I mostly listened. I mapped the existing architecture, sat with the platform and infrastructure teams, and built relationships before offering technical opinions. Honestly, I got this wrong at first; I pushed to fix a few things that weren't actually broken, and it cost me some goodwill. Once I slowed down, it got a lot easier. I became the cross-team architecture contact for the Europe-facing product and helped shape three major cross-team architecture decisions.

**Result.** Alaya's core features were migrated into the Benevity platform, and I kept a Staff-level role there for five years, with my scope growing toward AI tooling and platform architecture.

**Reflection.** Listening first is the skill I most underrated. That's directly relevant here, since I haven't worked in a wet lab. My plan would be to spend real time with the beta teams at Balgrist, ETH and UZH, watching how an experiment actually moves from instrument to analysis to decision, before designing the provenance model.

**Bridge to OVAITY:** "I'm new to lab workflows. I've been new to a domain before, and the fix was the same every time: go sit with the people doing the work and map it before touching it."

---

## Questions to have ready for the founder

How do you split product and technical ownership between us, and who has the final call on the roadmap? Which instruments or systems do the beta labs most want connected first? What's in TRACE today, and how much of the current platform was built by you versus contractors? What's the funding situation and runway, and what does the next round depend on?
