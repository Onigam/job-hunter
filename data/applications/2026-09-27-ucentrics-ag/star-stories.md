# STAR+R Stories: Ucentrics AG, Senior Software Engineer (Full-Stack)

Picked for what a small ETH spin-off hiring a senior full-stack engineer will probe: end-to-end ownership, modular design under delivery pressure, picking up an unfamiliar stack (Azure/GCP is the obvious one here), and raising engineering quality without a title that forces it. Ucentrics is around ten people, so expect the founders to care as much about how I work with customers and a tiny team as about architecture.

---

## 1. Building a product end to end, from blank page to acquisition

**Likely questions:** "Tell me about something you built from scratch." / "How do you handle ambiguity?" / "Walk us through a feature you owned from design to production."

**Situation.** In 2016 I cofounded Alaya, an employee purpose and engagement platform. There was no product, no customers and no code, just a business side that was already talking to enterprise prospects and needed something to show them.

**Task.** My job was to design and build the whole platform, alone at first, and to keep it shippable while the company signed its first clients and their requirements kept shifting.

**Action.** I picked a deliberately boring stack, Node.js, React and PostgreSQL, because I wanted to spend my energy on the product rather than on infrastructure puzzles. The first three months went into getting the core features far enough for a real demo. After that the work was mostly listening to how clients actually ran their programs and turning that into features: an API layer, impact reporting, and later multi-tenancy once several large customers needed isolation. When we started hiring, I onboarded the first three engineers and set up CI/CD, code review and architecture docs so they could ship on their own without me being the bottleneck.

**Result.** The platform grew to 50+ enterprise clients across Switzerland and France, and Benevity, a Canadian company valued at over $1B, acquired Alaya in 2021. The technical choices from the early days held up through their due diligence.

**Reflection.** Two things I'd change. Observability came far too late; we added proper APM only once things were already hurting. And retrofitting multi-tenancy cost us much more than designing for it would have. At Ucentrics, where every customer (SBB, Accelleron, EAM) has its own workflows and compliance needs, I'd want tenant boundaries and monitoring settled before the customer count grows, not after.

---

## 2. A hard architecture call with investors pushing for features

**Likely questions:** "Tell me about a technical trade-off you made." / "How do you approach modular design or DDD?" / "How do you deal with tech debt when the business wants features?"

**Situation.** A few years into Alaya, our monolith was starting to crack under load on a couple of endpoints. The team was split between a full microservices rewrite and keeping a modular monolith, and investors wanted new features rather than anything that sounded like a rewrite.

**Task.** I had to make a call we could defend on both fronts, one that fixed the scaling problem without freezing delivery for months.

**Action.** Rather than argue from opinion, I ran a two-week spike and load-tested prototypes of both approaches. The numbers made the conversation with the CTO and the investors a lot shorter. We went with a strangler fig approach: extract the two highest-traffic modules behind clear boundaries, leave everything else in the monolith, and write down the criteria that would justify extracting anything further. That last part mattered, because it stopped the debate from coming back every sprint.

**Result.** The first extracted module shipped in about six weeks, and the busiest endpoints got roughly 40% faster. The rest of the monolith stayed stable all the way through the acquisition, and we never needed the big rewrite.

**Reflection.** The hardest part wasn't technical. It was persuading people that not rewriting everything was the ambitious choice. Next time I'd benchmark earlier so the discussion starts from data. For a product like Ucentrics' workflow builder, I'd apply the same idea: find the bounded contexts that really need their own lifecycle (workflow definitions, execution runs, verification results) and keep everything else simple until the load says otherwise.

---

## 3. Joining a much bigger org and an unfamiliar stack after the acquisition

**Likely questions:** "Tell me about a time you had to learn a new technology fast." / "How do you handle change?" / "You haven't used Azure much. How would you ramp up?"

**Situation.** After the acquisition I joined Benevity as a Senior Staff Engineer. The organisation was roughly ten times the size of Alaya, the codebase was Java microservices rather than our Node.js stack, and the processes were completely different.

**Task.** Alaya's capabilities had to move into Benevity's platform while we kept shipping, and I needed to become useful in a codebase I didn't know.

**Action.** I spent most of the first month mapping how the existing system actually worked before proposing anything. I also made a point of getting to know the platform and infrastructure teams early, so that by the time I had technical opinions, they came from someone people already trusted. Honestly, my first instinct was to fix things that looked odd to me, and a couple of those turned out to be there for good reasons. Once I slowed down, the integration work went much faster.

**Result.** The core Alaya features were migrated into Benevity's platform. I contributed to three major cross-team architecture decisions and ended up as the architecture liaison for the Europe-facing product surface.

**Reflection.** Listening first made me far more effective than arriving with answers. It's also how I'd handle Azure and Google Cloud at Ucentrics: my cloud experience is AWS with Docker and Kubernetes, and the concepts carry over, but I'd start by reading the existing infrastructure-as-code and asking why things are the way they are before touching it.

---

## 4. Changing how engineers work without being their manager

**Likely questions:** "How do you raise engineering quality?" / "Tell me about influencing without authority." / "How would you introduce better testing or DevOps practices in a small team?"

**Situation.** At Benevity I had no direct reports, but I wanted two teams that didn't report to me to adopt AI-assisted development in their daily work.

**Task.** The goal was to change habits, which is hard enough with authority, without any mandate at all.

**Action.** I started with three engineers who were already curious and built small demos around their real work, showing actual time saved rather than slides. From there it spread through informal lunch-and-learn sessions. I also wrote reusable prompt templates and committed them to a shared repo so nobody had to start from zero, and kept a record of concrete wins, like a PR review cycle that went about two hours faster.

**Result.** Within three months around 70% of the engineers on both teams were using AI-assisted code review and generation, and I became the informal AI tooling lead across the org.

**Reflection.** Going without a mandate was slower, but it stuck, because the people who adopted it on their own terms became its advocates. In a team of ten the same approach works for testing and CI/CD discipline: show it on a real feature, make the easy path the right path, and let it spread.
