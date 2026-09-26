# STAR+R Stories: iudexnc, Co-Founder & CTO (AI Infrastructure for Legal Insurance)

I picked these for a cofounder conversation with a technical CEO (Ari, ETH applied math, has shipped a legal tech product before) and a commercial cofounder with an insurance background (Simon). Expect them to probe four things. Can I build from zero? Will I make pragmatic calls under pressure? Do I understand LLM reliability, not just demos? Can I work alongside a CEO who is technical himself? Every fact comes from `profile/star-bank.md`. Don't inflate the numbers in the room.

---

## 1. Building Alaya from a blank page to acquisition

**Likely questions:** "Why are you ready to be a cofounder again?" / "Walk us through something you built from nothing." / "How do you handle ambiguity?"

**Situation.** In 2016 I cofounded Alaya, a purpose and employee engagement platform. We had no product, no customers and no team, while the business side was already talking to enterprise prospects who wanted to see something.

**Task.** It was on me to architect and build the whole platform, alone at first, then turn it into something a small team could keep shipping on while we signed the first clients.

**Action.** I chose a pragmatic stack, Node.js, React and PostgreSQL, because it could scale without me burning the first year on infrastructure nobody needed yet. The core features were demo-ready in about three months. After that I grew the platform in steps as clients asked for things: multi-tenancy, an API layer, impact reporting, postal campaigns. By the time the first three engineers joined, CI/CD, code review habits and architecture docs were already there, so onboarding didn't depend on reading my mind.

**Result.** We reached production with 50+ enterprise clients across Switzerland and France, and Benevity, a Canadian unicorn valued at $1B+, acquired Alaya in 2021.

**Reflection.** Observability came too late. We added proper APM only once problems were already hurting, and for iudexnc that lesson is sharper: every coverage decision needs a trace of what was retrieved and why, from the first pilot. Multi-tenancy was the other one. Retrofitting it cost us, and with insurers demanding strict data isolation and no cross-tenant learning, I'd treat tenant boundaries as a day-zero decision.

---

## 2. Choosing not to rewrite the monolith

**Likely questions:** "Tell me about a technical trade-off with business pressure on the other side." / "How do you decide between shipping and fixing foundations?"

**Situation.** At Alaya our monolith was starting to crack under load. The team was split between a full microservices rewrite and a modular monolith, and investors wanted new features, not a rewrite.

**Task.** I needed a decision we could defend, one that fixed the scaling problem without freezing delivery for months.

**Action.** Rather than argue it out, I ran a two-week spike comparing both approaches with prototype load tests. Then I took the trade-offs to leadership and investors with numbers instead of opinions. What I proposed was a strangler fig migration: pull out the two highest-traffic modules first, leave everything else in the monolith, and write down clear criteria for when any other module would earn its own extraction.

**Result.** The first extracted module shipped in six weeks, and the busiest endpoints got about 40% faster. The rest of the monolith stayed stable all the way through the acquisition, and we never needed a big-bang rewrite.

**Reflection.** The hard part was persuading people that not rewriting was the right call, and the data did most of that work. I'd benchmark even earlier next time to cut the debate short. The same instinct applies to agentic workflows here. It's tempting to build a sprawling agent graph, but I'd rather measure a simple retrieval plus structured-prompt pipeline against the eval set first and only add agent steps where the numbers say they help.

---

## 3. Leading without formal authority (AI tooling adoption)

**Likely questions:** "How do you get people to change how they work?" / "Tell us about your hands-on AI experience." / "How would you work with domain experts who don't trust AI?"

**Situation.** At Benevity I was a Senior Staff IC with no direct reports. I wanted two teams that didn't report to me to adopt AI-assisted development practices.

**Task.** Changing how engineers worked every day, without being their manager and without a mandate from above.

**Action.** I started with three engineers who were already curious. Together we built small internal demos showing concrete time savings on real work, not toy examples. Lunch and learn sessions followed, with no attendance pressure. I also wrote reusable prompt templates, committed them to a shared repo, and documented the wins as they happened, like a PR review cycle that went about two hours faster.

**Result.** Within three months, roughly 70% of engineers across both teams were using AI-assisted code review and generation. I ended up as the informal AI tooling lead across the org.

**Reflection.** Going without a mandate was slower, but it stuck, because the people who adopted it on their own terms defended it to everyone else. I'd expect the same thing with claims handlers at an insurer. They won't trust a coverage recommendation because we tell them to; they'll trust it after it's been right on their own hard cases and shows its reasoning.

---

## 4. Joining a 10x bigger org after the acquisition

**Likely questions:** "Tell me about a time you were wrong." / "How do you work with enterprise customers' IT teams?" / "How do you handle disagreement with a cofounder?"

**Situation.** After the acquisition in 2021 I joined Benevity as a Senior Staff Engineer, on an organisation roughly ten times the size of Alaya, with a different culture, a Java microservices codebase and its own processes.

**Task.** Get Alaya's capabilities integrated into Benevity's platform while still shipping new features, without losing the velocity we'd had as a startup.

**Action.** My first month went into mapping the existing architecture before proposing changes. I built relationships with the platform and infra teams before pushing technical opinions, and over time became the cross-team architecture liaison for the Europe-facing product surface. In parallel I pushed AI-augmented workflows across the org (story 3).

**Result.** Core Alaya features were migrated into Benevity's platform. I contributed to three major cross-team architecture decisions and became the go-to person for AI tooling on two engineering teams.

**Reflection.** Early on I moved too fast, trying to fix things that weren't actually broken. Listening first made me more effective. That's directly relevant to selling into insurers: their IT and legal teams have constraints (FINMA, BaFin, DORA, on-prem or dedicated tenancy) that look like friction until you understand why they're there.

---

## Prep notes for questions without a banked story

- **"What would you build in the first 90 days?"** Answer from the posting, not from a story: an ingestion pipeline for policy documents with clause-level metadata, an eval set built from the pilot's real cases (with the insurer's experts labelling), tracing on every decision, then iterate on retrieval. Say it's a hypothesis to test with Ari, not a plan to impose.
- **"Ari is technical. How do you split the work?"** Be honest that this is a question to settle early. Suggest Ari owns modelling and evaluation methodology where his math background helps most, and I own production systems, data isolation, infrastructure and the engineering team. Ask how he sees it.
- **"Do you speak German?"** Answer truthfully. Don't overstate. Mention the Geneva/Zurich split and willingness to be on-site.
- **Regulated industries.** Public sector apps for the État de Genève and the online dispute resolution platform at SQLI are real but short stints. Mention them as context, don't build a story on them unless you can back the details.
