# STAR+R Stories: Leonar, CTO SaaS (Full Remote)

Stories picked for a CTO interview at a SaaS studio: building from zero, architecture calls under business pressure, moving engineers without a mandate, and joining a much bigger org. All facts come from `profile/star-bank.md`. Numbers are the ones already in the bank; don't round them up in the room.

---

## 1. Building Alaya from a blank page to acquisition

**Likely questions:** "Tell me about something you built from scratch." / "How do you pick a stack when you don't know what the product will become?" / "What does a CTO do in the first 90 days?"

**Situation.** In 2016 I cofounded Alaya, a purpose and employee engagement platform. There was no product, no customer and no team, just a business side that was already talking to enterprise prospects and needed something to show them.

**Task.** My job was to build the entire platform, alone at first, and then turn it into something a small team could keep shipping on while the company signed its first clients.

**Action.** I went with a boring, pragmatic stack (Node.js, React, PostgreSQL) because I wanted something that would scale without me spending the first year on infrastructure nobody had asked for yet. The first demo-ready version took about three months. From there I grew it piece by piece: a multi-tenant model, an API layer, impact reporting, even postal campaigns when a client needed them. When I hired the first three engineers, CI/CD, code review and architecture docs were already in place, so they could ship in their first week instead of reverse-engineering my head.

**Result.** We reached production with 50+ enterprise clients across Switzerland and France, and Benevity (a Canadian unicorn valued at $1B+) acquired Alaya in 2021. A lot of their diligence was on the platform, and it held up.

**Reflection.** Two things I'd change. Observability came far too late; we only added proper APM once problems were already hurting us, and at a studio like Leonar I'd want Sentry and PostHog wired into the template from the first commit. I also underestimated how painful it is to retrofit multi-tenancy. Next time it's a day-zero decision, which is exactly the kind of thing a shared portfolio platform should settle once for every product.

---

## 2. Choosing not to rewrite the monolith

**Likely questions:** "Tell me about a technical trade-off with business pressure on the other side." / "How do you deal with tech debt when the business wants features?"

**Situation.** At Alaya the monolith was starting to crack under load. Half the team wanted a full microservices rewrite, the other half wanted to stay put, and our investors wanted new features, not a rewrite.

**Task.** I had to make a call we could defend, one that fixed the scaling problem without freezing delivery for months.

**Action.** Rather than keep arguing in meetings, I ran a two-week spike comparing both approaches, with prototype load tests so we had numbers to look at. I took those numbers to the CTO and to our investors and made the case for a strangler fig approach: pull out the two highest-traffic modules first, leave everything else in the monolith, and agree up front on the criteria that would justify extracting anything more.

**Result.** The first extracted module shipped in six weeks. The busiest endpoints got roughly 40% faster, the remaining monolith stayed stable all the way through the acquisition, and we never needed a big-bang rewrite.

**Reflection.** Convincing people that "don't rewrite everything" was the right answer was harder than the engineering. Data settled it, and I'd benchmark even earlier next time to cut the debate short. It's the same instinct I'd bring to a portfolio: pay for complexity only when a product's traffic has actually earned it.

---

## 3. Getting two teams to change how they work, without being their manager

**Likely questions:** "How do you roll out a new practice across a team?" / "How would you bring GenAI into our engineering workflow?" / "How do you lead people who don't report to you?"

**Situation.** At Benevity I was a Senior Staff IC with no direct reports. I was convinced AI-assisted development would save us real time, but the two teams I wanted to bring along didn't report to me and had no reason to change their habits.

**Task.** Get engineers using AI tooling in their daily work without a mandate I didn't have.

**Action.** I started small, with three engineers who were already curious. We built internal demos around real work, not toy examples, so the time savings were obvious. Then came informal lunch-and-learn sessions with no attendance pressure, and a shared repo of prompt templates anyone could reuse or improve. Whenever someone had a concrete win, like shaving about two hours off a PR review cycle, I wrote it down and shared it.

**Result.** Within three months around 70% of the engineers on both teams were using AI-assisted code review and generation, and I ended up as the informal AI tooling lead across the org.

**Reflection.** Going without a mandate was slower, but it stuck. The engineers who adopted it on their own terms became the ones selling it to everyone else, which a top-down decree would never have produced. With 25 people and actual authority at Leonar I'd still start the same way, with a small group proving it on real tickets first, because people follow working examples far more readily than policies.

---

## 4. Joining an org ten times bigger after the acquisition

**Likely questions:** "Tell me about a time you had to adapt to a new environment." / "How would you approach your first months with an existing team of 25?"

**Situation.** After the acquisition in 2021 I joined Benevity as a Senior Staff Engineer. The engineering org was about ten times the size of Alaya, with a different culture, a Java microservices codebase and processes I didn't know.

**Task.** We had to fold Alaya's capabilities into Benevity's platform while still shipping new features, and without losing the speed we'd had as a small team.

**Action.** For the first month I mostly mapped the existing architecture and asked questions before proposing anything. I spent time with the platform and infra teams so there was some trust in place before I started pushing technical opinions. Once that was there, I took on the role of architecture liaison for the Europe-facing product surface and started introducing AI-assisted workflows.

**Result.** The core Alaya features were migrated into Benevity's platform. I contributed to three major cross-team architecture decisions and became the go-to person for AI tooling across two engineering teams.

**Reflection.** Honestly, I moved too fast at first and tried to fix things that weren't broken. Slowing down and listening made me far more effective. Walking into an existing team of ~25 engineers, that's the lesson I'd apply from day one: understand why things are the way they are before changing any of them.

---

## Gaps to prepare for (not stories, but they'll come up)

**Managing ~25 people.** My direct management experience is the first three engineers at Alaya plus cross-team influence at Benevity. Say it plainly, then point to stories 3 and 4 as evidence of how I get large groups moving, and describe how I'd structure leads under me.

**Next.js App Router / RSC and Vercel.** My profile covers TypeScript, React, Node.js, MongoDB, Tailwind and AWS, which is most of their stack. Before the interview, build a small App Router project with the Vercel AI SDK (streaming plus tool calling with a provider fallback) so I can talk about it from experience rather than from docs.

**Subscriptions and payments (Recurly/Stripe).** Not in my profile. Don't claim it. Frame it as a known problem space I'd want to understand from their current setup, and ask how billing is shared across the portfolio.
