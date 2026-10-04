# STAR+R Stories: Vyzor (Prodiges), Co-Founder & CTO

Vyzor's posting ranks what it wants: someone who has taken an MVP to real users, shipped AI, owned a roadmap, and lived the early-stage life. The application form also asks for "the product you're proudest of shipping". The stories below are ordered to match, and Story 1 doubles as the answer to that form field.

---

## Story 1: Alaya, from a blank page to acquisition

**Likely questions:** "What's the product you're proudest of?" / "Tell me about taking something from zero to real users." / "How do you handle ambiguity?"

**Situation.** In 2016 I co-founded Alaya, a platform that helps companies engage employees around purpose and social impact. There was no product, no customers, and no code. My cofounders were out signing the first enterprise clients while I was the only engineer.

**Task.** I had to build the whole platform and get it in front of paying clients fast enough that the sales conversations didn't stall, then grow it into something a team could keep extending.

**Action.** I picked a stack I could move quickly on without painting us into a corner: Node.js, React and PostgreSQL. The first demo-ready version took about three months, and it was deliberately narrow. Once real clients were using it, I let their usage drive what came next, which turned out to be multi-tenant support, an API layer, impact reporting and postal campaigns. When the workload outgrew me, I hired and onboarded our first three engineers and put the basics in place for them: CI/CD, a code review habit, and architecture docs short enough that people actually read them.

**Result.** Alaya reached 50+ enterprise clients across Switzerland and France, and Benevity, a Canadian company valued above $1B, acquired it in 2021. For me it was the clearest validation that the technical calls we'd made from day one were sound.

**Reflection.** Two things I'd change. I added proper observability far too late, so for a long time we learned about problems from clients. And I underestimated how expensive it is to retrofit multi-tenancy. For Vyzor that second lesson applies directly: accounting firm, then SME client, then the director and their team is a three-level tenant hierarchy, and it should be in the data model and the access rules before beta widens.

---

## Story 2: Hardening a product under delivery pressure

**Likely questions:** "How would you take our MVP to production?" / "Tell me about a technical trade-off." / "How do you deal with tech debt when investors want features?"

**Situation.** A few years into Alaya, the monolith was showing cracks under load on its busiest endpoints. Inside the team, people were arguing for a full microservices rewrite. Investors, meanwhile, wanted new features and had little patience for anything that sounded like a rewrite.

**Task.** I needed a decision that would hold up technically and that I could defend to non-engineers, without freezing delivery for months.

**Action.** Rather than settle it by debate, I ran a two-week spike that prototyped both approaches and load-tested them. Then I put the trade-offs in front of the leadership team and investors with numbers rather than opinions. What I proposed was a strangler fig migration: pull out the two highest-traffic modules, leave everything else in the monolith, and write down explicit criteria for when any further module would earn its own service.

**Result.** The first extracted module shipped in about six weeks, and the busiest endpoints got roughly 40% faster. The rest of the monolith stayed stable all the way through the acquisition, and nobody had to sell a big-bang rewrite to the board.

**Reflection.** Convincing people that "don't rewrite everything" was the right answer took longer than the engineering. Data settled it, so next time I'd benchmark earlier and shorten the argument. It's also roughly how I'd approach Vyzor's MVP: find the few paths that matter for the first accounting firms (data ingestion, the numbers shown to directors, access control), harden those properly, and leave the rest alone until usage tells us otherwise.

---

## Story 3: Getting AI into real daily use

**Likely questions:** "What have you done with LLMs and agents?" / "How do you get people to adopt AI tools?" / "How would you sell AI to accountants who don't trust it?"

**Situation.** At Benevity I was a Senior Staff IC with no direct reports. I was convinced AI-assisted development would make two of our teams noticeably faster, but neither team reported to me and nobody had asked for it.

**Task.** Change how engineers worked day to day, without a mandate and without any authority to issue one.

**Action.** I started with three engineers who were already curious and let them be the test group. I built small demos on our own code so the time saved was visible rather than theoretical, and ran informal lunch sessions where I showed the tools working and didn't push anyone. Then I wrote reusable prompt templates and committed them to a shared repo, so anyone could pick them up without starting from zero. When something saved real time, like a PR review cycle that went about two hours faster, I wrote it down and shared it.

**Result.** After about three months, roughly 70% of engineers on both teams were using AI-assisted review and code generation, and I'd become the informal AI tooling lead across the org.

**Reflection.** Going without a mandate was slower, but it stuck, because the people who adopted it on their own terms became its advocates. I think accountants will behave the same way. They won't trust a copilot because we tell them to. They'll trust it when they can see where every number came from and check it themselves. That's why I'd treat traceability as a product feature at Vyzor, not a compliance afterthought. Outside work I also build multi-agent workflows, which is where most of my opinions about where agents fail quietly come from.

---

## Story 4: Joining something bigger and learning to listen first

**Likely questions:** "How do you work with non-technical cofounders?" / "Tell me about a mistake." / "How do you work with partners like an incubator or a distribution channel?"

**Situation.** After the acquisition I joined Benevity as a Senior Staff Engineer. The organisation was about ten times the size of Alaya, with a different codebase (Java and microservices), different processes and a different culture.

**Task.** Bring Alaya's capabilities into Benevity's platform while still shipping new work, and keep the speed we'd had as a startup.

**Action.** Honestly, I started badly. In the first weeks I was proposing fixes to things that weren't broken, which didn't win me friends. So I reset: I spent about a month mapping the existing architecture before suggesting changes, and I built relationships with the platform and infrastructure teams before pushing technical opinions. Over time I became the cross-team architecture contact for the Europe-facing product surface.

**Result.** The core Alaya features were migrated into Benevity's platform. I contributed to three major cross-team architecture decisions and ended up as the go-to person for AI tooling across two teams.

**Reflection.** Listening first made me more effective than being right fast. For Vyzor it maps onto two relationships: with the non-technical cofounders and Prodiges, and with the accounting firms, who are both a channel and a gatekeeper. Each of them already has a way of working, and I'd want to understand it before I try to change it.

---

## Questions to ask them

- How many accounting firms are in the beta, and is it the firm or the SME director who actually opens the product each week?
- What data does the MVP ingest today (accounting exports, bank feeds, firm software APIs), and who owns the integrations?
- What does Prodiges hold in equity and governance, and what's the plan for the first raise?
- If I started part-time, what would "done" look like after the first three months?
