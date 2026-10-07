# STAR+R Stories: Senior Architect (Fractional CTO), Undisclosed startup studio via Jobgether

These are picked for what a fractional CTO interview tends to probe: can you turn a founder's priorities into a technical plan, walk into an unfamiliar codebase and judge it fairly, coach developers you don't manage, and say no to a rewrite when the business can't afford one.

---

## 1. Building a platform from zero with a founder's constraints

**Likely questions:** "How do you set technical strategy for an early-stage company?" / "Tell me about something you built from scratch." / "How would you run the first 90 days with a new founder?"

**Situation.** In 2016 I co-founded Alaya, a purpose and employee engagement platform. There was no product, no customers and no team, only a business side that was already talking to enterprise prospects and needed something real to show them.

**Task.** My job was to design and build the whole platform, first alone and then with a small team, while keeping pace with what sales was promising.

**Action.** I picked a stack I knew would carry us without heroics, Node.js, React and PostgreSQL, and got the core features to a demo-ready state in about three months. After that the work was mostly about saying yes to the right things in the right order: multi-tenancy, an API layer, impact reporting, postal campaigns. When we could afford it I hired and onboarded the first three engineers, and I put CI/CD, code review and written architecture docs in place early, because I knew I wouldn't be in every conversation forever.

**Result.** The platform went into production with 50+ enterprise clients across Switzerland and France, and Benevity, a Canadian unicorn valued at over $1B, acquired Alaya in 2021. For me that was the clearest test of whether the early technical calls had held up.

**Reflection.** Two things I'd change. Observability came too late; we only added proper APM once we already had problems to chase. And retrofitting multi-tenancy cost more than designing for it from day one would have. Those are the first two questions I now ask any founder whose architecture I'm reviewing.

---

## 2. Reviewing an architecture I didn't build (closest to a technical audit)

**Likely questions:** "How do you approach a technical audit?" / "Walk me through joining an existing team and codebase." / "How do you deliver criticism to a team that built the thing?"

**Situation.** After the acquisition I joined Benevity as a Senior Staff Engineer. The engineering org was roughly ten times the size of Alaya's, the stack was Java and microservices, and the processes and culture were their own.

**Task.** I had to fold Alaya's capabilities into Benevity's platform and keep shipping new features, without losing the delivery speed we'd had as a small company.

**Action.** I spent the first month mapping the existing architecture and talking to the platform and infrastructure teams before proposing anything. That wasn't my first instinct. Early on I'd started pointing at things to fix, and some of them weren't broken, they were just different from how I'd have done it. Once I'd built some trust I had far better context, and my proposals were about real constraints rather than taste. Over time I ended up as the cross-team architecture contact for the Europe-facing part of the product.

**Result.** The core Alaya features were migrated into Benevity's platform, and I contributed to three major cross-team architecture decisions.

**Reflection.** It's the same discipline I'd bring to a due diligence or an audit for this role: separate "this is wrong" from "this isn't how I'd do it", and be explicit about which one I'm saying. Founders and their developers take the first seriously when you don't dilute it with the second.

---

## 3. Saying no to a rewrite under business pressure

**Likely questions:** "Tell me about a technical trade-off you made." / "How do you explain technical debt to non-technical founders or investors?" / "How do you balance scalability against shipping features?"

**Situation.** At Alaya our monolith was starting to crack under load. Part of the team wanted a full microservices rewrite, others wanted a modular monolith, and the investors wanted new features, not a rewrite of any kind.

**Task.** I needed a decision I could defend to engineers and investors alike, one that fixed the scaling problem without stopping feature delivery.

**Action.** I ran a two-week spike comparing both approaches, with prototype load tests, so the argument could move from opinions to numbers. I took the trade-offs to the CTO and the investors with those results in hand and proposed a strangler fig migration: pull out the two highest-traffic modules first, leave everything else in the monolith, and write down the criteria that would justify extracting anything further.

**Result.** The first extracted module shipped in about six weeks. Performance on the busiest endpoints improved by roughly 40%, the rest of the monolith stayed stable all the way through the acquisition, and we never needed the big-bang rewrite.

**Reflection.** The hard part wasn't technical; it was persuading people that not rewriting everything was the right call. The data did most of that work, so today I'd benchmark earlier and cut the debate short. For a fractional CTO this is a large part of the job, because founders often arrive convinced they need a rewrite when what they need is two targeted extractions and a rule for when to stop.

---

## 4. Coaching developers I didn't manage

**Likely questions:** "How do you mentor developers?" / "How do you change engineering practices when you're only there part of the week?" / "How do you influence without authority?"

**Situation.** At Benevity I was an individual contributor with no reports, and I wanted two teams that didn't report to me to adopt AI-assisted development.

**Task.** The goal was to change how engineers worked day to day without any power to make them.

**Action.** I started with three engineers who were already curious and built small internal demos showing actual time saved, rather than slides. Then came informal lunch-and-learn sessions with no mandate attached, and a shared repo of reusable prompt templates that anyone could pick up. Whenever someone got a concrete win, like saving a couple of hours on a PR review cycle, I wrote it down and shared it.

**Result.** Within three months about 70% of the engineers on both teams were using AI-assisted code review and generation, and I became the informal AI tooling lead across the org.

**Reflection.** Going without a mandate was slower, but it stuck. The engineers who adopted it on their own terms became its advocates, which I couldn't have bought with a top-down decree. It maps well onto fractional work, where I won't be in the room most days: whatever I coach has to survive without me, so it has to be something the team owns.

---

## Prep note: the C#/.NET and Azure gap (not a STAR story)

The posting asks for C#/.NET or Node.js, and Azure plus AWS. Node.js covers the first requirement on its own. On Azure, the honest answer is that my production work has been on AWS, and the architecture questions (identity, networking, managed databases, cost) carry over even though the service names don't. If they press on .NET, I've worked across Java microservices at Benevity and Java/GWT at Sagemcom, so a statically typed enterprise stack isn't foreign. Reviewing a C# codebase for structure, testing and security is realistic from week one; claiming to be a .NET expert is not, and I shouldn't.
