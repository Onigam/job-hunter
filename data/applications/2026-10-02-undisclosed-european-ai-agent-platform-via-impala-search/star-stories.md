# STAR+R Stories: Staff Product Engineer (Forward Deployed), European AI agent platform (via Impala Search)

What this role will probe: owning customer-specific implementations end to end, integrating with messy enterprise systems, keeping things reliable in production, explaining technical decisions to customers, and mentoring without being a manager. The four stories below map to those, in roughly the order they're likely to come up.

---

## 1. Owning enterprise delivery from zero (Alaya)

**Likely questions:** "Tell me about a complex customer implementation you owned." / "How do you handle ambiguity?" / "Why forward deployed?"

**Situation.** In 2016 I co-founded Alaya, an employee purpose and engagement platform. There was no product, no customer and no team, and the business side was already in conversations with large companies that expected enterprise software, not a prototype.

**Task.** I had to build the whole platform, first alone and then with a small team, while those first enterprise clients were being signed. Every one of them wanted something slightly different, and none of them cared that we were a startup.

**Action.** I picked a stack I knew would hold up without heavy upfront engineering: Node.js, React and PostgreSQL. Getting to a first demo took about three months. After that, most of the work was driven by what each new client needed, so I built out a multi-tenant architecture, an API layer, impact reporting and postal campaigns as those requests came in. Once there was enough to maintain, I hired and onboarded the first three engineers and put CI/CD, code review and architecture docs in place so the next client didn't depend on me remembering how the last one was set up.

**Result.** The platform went into production with 50+ enterprise clients across Switzerland and France. Benevity, a Canadian unicorn valued at over $1B, acquired Alaya in 2021, which was a fairly direct test of whether the technical choices held up.

**Reflection.** Two things I'd change. Observability came too late; we only added proper APM once problems were already visible to clients, and in a forward-deployed setup that's backwards. I'd also design for multi-tenancy from day one, because retrofitting it cost us far more than building it in would have. Both lessons apply directly to customer-specific deployments on a shared platform.

---

## 2. Integrating into a large, unfamiliar system (Benevity)

**Likely questions:** "Tell me about integrating with a complex or legacy system." / "How do you get up to speed in an environment you don't control?"

**Situation.** After the acquisition I joined Benevity as Senior Staff Engineer. The org was roughly ten times the size of Alaya, the codebase was Java and microservices rather than our Node stack, and the processes and culture were their own.

**Task.** Alaya's capabilities had to move into Benevity's platform while we kept shipping new features. Losing the velocity we'd had as a startup wasn't an option, and neither was breaking things for existing Benevity customers.

**Action.** For the first month I mostly mapped the existing architecture and asked questions before proposing anything. I spent time with the platform and infrastructure teams early, because they owned the pieces we'd depend on and I wanted them to trust me before I started having opinions about their systems. Over time I became the cross-team architecture contact for the Europe-facing product surface, which meant translating between what our side needed and what their platform could reasonably absorb.

**Result.** The core Alaya features were migrated into Benevity's platform. I contributed to three major cross-team architecture decisions along the way and became the person people came to for AI tooling.

**Reflection.** I moved too fast at the start and tried to fix things that weren't actually broken in the new org. Slowing down and listening first made me much more effective, and it's the same posture I'd bring into a customer's environment: understand why their system looks the way it does before telling them how it should look.

---

## 3. A production-reliability trade-off under delivery pressure (Alaya)

**Likely questions:** "Tell me about a hard technical trade-off." / "How do you explain a technical decision to non-technical stakeholders?" / "How do you balance custom work with platform health?"

**Situation.** At Alaya the monolith was starting to crack under load. Inside the team there was a real debate about a full microservices rewrite versus a modular monolith, and our investors were pushing for features, not a rewrite.

**Task.** I needed a decision we could defend to both the engineers and the investors, one that fixed the scaling problem without stopping delivery.

**Action.** Rather than argue it out, we ran a two-week spike and built prototypes of both approaches with load tests behind them. I took the trade-offs to the leadership team and investors as numbers instead of opinions, and proposed a strangler fig migration: pull out the two highest-traffic modules first, keep everything else in the monolith, and agree upfront on the criteria that would justify extracting anything more.

**Result.** The first extracted module shipped in about six weeks, and performance on the busiest endpoints improved by roughly 40%. The rest of the monolith stayed stable all the way through the acquisition, and we never needed a big-bang rewrite.

**Reflection.** The hardest part wasn't technical; it was convincing people that not rewriting everything was the right call. Data settled it. Next time I'd benchmark earlier and shorten the debate. With enterprise customers, I'd use the same approach: show them the measurements, give them clear criteria, and keep the change as small as it can be.

---

## 4. Mentoring and leading without authority (Benevity)

**Likely questions:** "How do you mentor or lead other engineers?" / "Tell me about influencing people who don't report to you."

**Situation.** As a Senior Staff IC at Benevity I had no direct reports, but I wanted two teams that didn't report to me to adopt AI-assisted development practices.

**Task.** Change how those engineers worked day to day without being anyone's manager and without a mandate from above.

**Action.** I started with three engineers who were already curious and worked with them until they had results of their own. From there I built small internal demos that showed actual time saved, ran informal lunch and learn sessions, and committed reusable prompt templates to a shared repo so nobody had to start from scratch. Whenever someone saved real time, like a PR review cycle that came in about two hours shorter, I wrote it down and shared it.

**Result.** Within three months roughly 70% of engineers on both teams were using AI-assisted code review and generation, and I'd become the informal AI tooling lead across the org.

**Reflection.** Going without a mandate was slower, but it stuck. The engineers who came to it on their own terms became the ones advocating for it, which a top-down decision wouldn't have produced. On a fast-growing team like this one, I'd mentor the same way: pair on real deployments, write the patterns down, and let results do the persuading.

---

## Questions worth asking them

- How is a deployment split between the core platform team and Product Engineers, and who decides when a customer-specific change should become a platform feature?
- What does "performs reliably in production" mean in practice here: on-call, SLAs per customer, shared incident ownership?
- Which integrations cause the most pain today? Contact-centre and telephony stacks, CRMs, or homegrown systems?
- How often would the role expect someone in Berlin, and how much time is spent on-site with customers?
