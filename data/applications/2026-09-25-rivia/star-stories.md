# STAR+R Stories: Rivia, Senior Frontend (Full-stack) Engineer

These are the four questions Rivia's process is most likely to lead to: startup ownership, performance and scalability, technical leadership and mentoring, and working across teams (sales and customer success are named in the posting). Tell each in about two minutes, then stop and let them dig.

---

## 1. Building a product from a blank page (Alaya)

**Likely prompts:** "Tell me about something you owned end to end." / "How do you deal with ambiguity in an early-stage company?" / "Why startups?"

**Situation.** In 2016 I cofounded Alaya, an employee purpose and engagement platform. There was no product, no customers and no team yet, and the business side was already talking to its first enterprise prospects.

**Task.** My job was to design and build the whole platform, alone at the start, and to get it to a point where enterprise clients would trust it with their employees.

**Action.** I went for a stack I knew could carry us without heroics: Node.js, React and PostgreSQL. The first three months went into the core flows so we had something real to demo, and after that I kept extending it as clients asked for more, which meant multi-tenancy, a proper API layer, impact reporting and eventually postal campaigns. Once there was enough traction I hired and onboarded the first three engineers, and I set up CI/CD, code review and a habit of writing down architecture decisions so the knowledge didn't live only in my head.

**Result.** The platform went to production and grew to 50+ enterprise clients across Switzerland and France. Benevity, a Canadian unicorn valued above $1B, acquired Alaya in 2021, and the platform we'd built was a big part of why.

**Reflection.** I'd put in observability much earlier; we added proper APM late and paid for it in debugging time. I also underestimated how expensive it is to retrofit multi-tenancy. With a product like Rivia's, where every trial is its own configuration, I'd design for that isolation on day one.

**Rivia angle:** Tie this to owning "major portions of the web application" and to their hundreds of trial configurations. Multi-tenant pain is directly relevant.

---

## 2. A performance problem and an architecture call under delivery pressure

**Likely prompts:** "Tell me about a technical trade-off." / "How have you handled a scalability problem?" / "How do you deal with tech debt when the business wants features?"

**Situation.** At Alaya the monolith started to crack under load on a few endpoints. Half the team wanted a full microservices rewrite, the other half wanted to keep going as we were, and investors were asking for features, not a rewrite.

**Task.** I needed a decision we could defend, one that fixed the performance issue without freezing delivery for months.

**Action.** Rather than argue it out, I ran a two-week spike and built small prototypes of both approaches, then load-tested them. I took the numbers to the rest of the leadership and the investors so the discussion was about data, not taste. What I proposed was a strangler-fig migration: pull out the two highest-traffic modules first and leave everything else in the monolith. We also agreed up front on the criteria that would justify extracting anything else later, so the debate wouldn't restart every quarter.

**Result.** The first extracted module shipped in about six weeks, and the busiest endpoints got roughly 40% faster. The rest of the monolith stayed stable all the way through the acquisition, and we never needed the big-bang rewrite.

**Reflection.** The technical part was the easy bit. Convincing people that "don't rewrite everything" was the right answer took longer than it should have, and I'd benchmark earlier next time to shorten that argument.

**Rivia angle:** The posting mentions performance and scalability challenges. Be ready to translate this to the frontend: large trial datasets in the browser, what you'd move server-side, virtualisation, caching, and when you'd split a front end rather than rewrite it.

---

## 3. Leading and mentoring without formal authority (Benevity)

**Likely prompts:** "Tell me about a time you led people who didn't report to you." / "How do you mentor?" / "How do you bring in a new tool or practice?"

**Situation.** At Benevity I was a Senior Staff IC with no direct reports. I was convinced AI-assisted development could save the teams a lot of time, but the two teams I wanted to bring along didn't report to me and had no reason to change how they worked.

**Task.** Get engineers to actually adopt AI tooling in their daily work, without a mandate and without being their manager.

**Action.** I started small, with three engineers who were already curious. We built a few internal demos that showed time saved on real tasks, not toy examples. From there I ran informal lunch-and-learn sessions where people could just watch and ask questions, and I put reusable prompt templates in a shared repo so nobody had to start from scratch. Whenever someone got a concrete win, like shaving about two hours off a PR review cycle, I wrote it up and shared it.

**Result.** Within about three months, ~70% of the engineers on both teams were using AI-assisted code review and generation, and I'd become the informal AI tooling lead across the org.

**Reflection.** Going without a mandate was slower, but it stuck. The people who came to it on their own became its best advocates, which a top-down decision would never have produced.

**Rivia angle:** Rivia ships GPT-4 based features and the role includes mentoring. This story shows you can raise a team's level without authority, and that you're comfortable with LLMs in daily engineering work, not only in the product.

---

## 4. Joining a much bigger organisation and working across teams (post-acquisition)

**Likely prompts:** "Tell me about a big change you went through." / "How do you work with non-engineering teams?" / "Tell me about a time you were wrong."

**Situation.** After the acquisition in 2021 I joined Benevity as a Senior Staff Engineer. The organisation was about ten times the size of Alaya, with a Java microservices codebase and processes that looked nothing like ours.

**Task.** Bring Alaya's capabilities into Benevity's platform and keep shipping new features, without losing the speed we'd had as a startup.

**Action.** My first month went into mapping the existing architecture and talking to the platform and infrastructure teams before I proposed anything. Only after that did I start pushing technical opinions, and by then people knew me. Over time I became the cross-team architecture contact for the Europe-facing product surface, which meant a lot of translating between what product and customer-facing people needed and what the platform teams could realistically give them.

**Result.** We migrated Alaya's core features into Benevity's platform. I contributed to three major cross-team architecture decisions and became the person teams came to for AI tooling.

**Reflection.** Honestly, I moved too fast at the beginning and tried to fix things that weren't broken. Once I slowed down and listened, I got much more done. It's the mistake I'd watch for in any new team, Rivia included.

**Rivia angle:** Use this for the "coordinate with sales and customer success" part of the role, and for questions about working in a Java/Spring backend while owning the front end.

---

## Gaps to prepare for

Nothing in the bank is purely frontend, and the posting's must-haves are TypeScript and React. Before the technical screen, pick one concrete React piece from Alaya or Benevity (state management choices, a component system, a data-heavy view) and be ready to talk through it in detail: what you built, what broke, what you'd change. Don't invent numbers for it; talk about decisions and trade-offs instead.
