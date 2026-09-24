# STAR+R Stories: Founding CTO, Flycatcher (Lugano)

What this role will probe: owning a codebase you didn't write, getting systems to run at customer sites without the founders, hiring the first 3 to 5 engineers, and making calls under startup pressure. Expect a direct question about production ML and computer vision too; there's a note on that at the end.

---

## 1. Building Alaya from a blank page to acquisition

**Likely question:** "Tell me about something you built from zero." / "Why should we trust you to be our first senior technical hire?"

**Situation.** In 2016 I co-founded Alaya, a platform for employee purpose and impact. There was no product, no customers, and no engineering team. The business side was already talking to enterprise prospects, so the clock was running before a single line of code existed.

**Task.** I had to build the entire platform myself at first, then grow a team around it, while the company was signing its first enterprise clients and needed something real to show them.

**Action.** I picked a stack I knew would hold up without over-engineering it: Node.js, React and PostgreSQL. The goal for the first three months was a working demo, nothing more, and we hit it. After that I expanded in the order customers actually pulled us: a multi-tenant architecture, an API layer, impact reporting, then postal campaigns. When it was time to hire, I brought in the first three engineers myself and set up the things I didn't want to be the only person holding in my head, which meant CI/CD, a code review habit and written architecture docs.

**Result.** The platform went to production and grew to 50+ enterprise clients across Switzerland and France. In 2021 Benevity, a Canadian unicorn valued above $1B, acquired Alaya, and the platform went through their technical due diligence as part of that.

**Reflection.** Two things I'd do differently. Observability came much too late; we only added proper APM once problems were already hurting us. And I underestimated how painful it would be to retrofit multi-tenancy. At Flycatcher the equivalent would be treating every customer site as its own deployment target from day one, with logs and health checks coming back to one place, instead of discovering site number four behaves differently from the first three.

---

## 2. A hard architecture call with investors pushing for features

**Likely question:** "Tell me about a technical trade-off you made under pressure." / "How do you deal with technical debt when the business wants features?"

**Situation.** Alaya's monolith was starting to crack under load. The team was split between a full rewrite into microservices and keeping things roughly as they were. Investors, understandably, wanted new features and not a rewrite.

**Task.** I needed a decision we could defend to both the engineers and the investors, one that bought us scalability without stopping delivery.

**Action.** Rather than argue it out in meetings, I ran a two-week spike and load-tested prototypes of both approaches. I took the numbers to the leadership team and investors instead of opinions. What I proposed was a strangler fig migration: pull out the two modules taking the most traffic, leave everything else in the monolith, and write down clear criteria for when any further module would earn its own extraction.

**Result.** The first extracted module shipped in about six weeks, and the busiest endpoints got roughly 40% faster. The rest of the monolith stayed stable all the way through the acquisition. We never needed a big-bang rewrite.

**Reflection.** The hard part wasn't technical. It was convincing people that not rewriting everything was the right call, and data did most of that work. I'd benchmark earlier next time to shorten the debate. I expect a version of this at Flycatcher: an inherited codebase will have plenty I'd want to change, and the 90-day goal of keeping customer deliveries going means picking the two things that matter and leaving the rest alone.

---

## 3. Walking into someone else's codebase after the acquisition

**Likely question:** "How would you take ownership of a codebase you didn't write?" / "Tell me about a time you had to earn trust in a new environment."

**Situation.** After the acquisition I joined Benevity as a Senior Staff Engineer. The organisation was about ten times the size of Alaya, the stack was Java and microservices rather than what I'd built, and the processes were completely different.

**Task.** My job was to bring Alaya's capabilities into Benevity's platform while still shipping new features, and without losing the speed we'd had as a startup.

**Action.** I spent the first month mapping how the existing architecture actually worked before proposing anything. I got to know the platform and infrastructure teams before I started pushing technical opinions at them. Once I understood where things stood, I took on the role of cross-team architecture contact for the Europe-facing part of the product, which meant a lot of translating between teams that didn't normally talk.

**Result.** The core Alaya features were migrated into Benevity's platform, and I contributed to three major cross-team architecture decisions along the way.

**Reflection.** Honestly, I started too fast. In the first weeks I tried to fix things that weren't broken, and it cost me some goodwill. Listening first made me far more effective. That's exactly how I'd approach the first 90 days at Flycatcher: read the code, go to customer sites, keep deliveries running, and write down the weak points before changing any of them. The founders know things about that system that aren't in the repo.

---

## 4. Changing how engineers work without being their manager

**Likely question:** "How do you build engineering culture?" / "How would you get your first hires to work the way you want?"

**Situation.** At Benevity I was an IC with no direct reports, but I wanted two teams that didn't report to me to start using AI-assisted development in their daily work.

**Task.** Change real habits across both teams without any authority to mandate it.

**Action.** I started with three engineers who were already curious and let them try things with me. I built small internal demos that showed the time saved on real tasks, not toy examples. Then came informal lunch-and-learn sessions with no mandate attached, just demos and questions. I put reusable prompt templates in a shared repo so nobody had to start from scratch, and wrote up concrete results, like a PR review cycle that went about two hours faster.

**Result.** Within three months around 70% of the engineers on both teams were using AI-assisted code review and generation, and I became the informal AI tooling lead for the org.

**Reflection.** It was slower than a top-down rule, but it stuck, because the people who adopted it on their own terms became its advocates. With a first team of 3 to 5 engineers at Flycatcher I'd work the same way: fewer rules, more shared tooling and examples, and let the early hires shape the conventions the later ones inherit.

---

## Being honest about the gap: production ML and computer vision

This will come up, and it shouldn't be dodged. Something like:

"I haven't shipped a computer vision model to production, and I haven't worked with PyTorch in a production setting. My ML work has been on the LLM side: integration, embeddings, semantic search and multi-agent workflows, mostly in Python and TypeScript. Where I'm strong is everything around the model. Your research is the part I can't replicate and don't need to. What your milestones describe, the training and inference APIs, deployment automation, edge-to-dashboard systems that run unattended, and a team that can run POCs without you, is the work I've done since 2016. I'd expect to spend the first weeks learning the anomaly detection pipeline from you, and I'd want at least one of my first hires to be someone with real computer vision production experience."

Do not overclaim hardware or edge experience either. If asked, say it's new territory and ask how deployments currently vary between sites; it's a good question anyway.
