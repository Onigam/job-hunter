# STAR+R Stories: Reap, Staff Engineer/Tech Lead, Agentic Payments

What the posting keeps asking for: someone who can drop into an unfamiliar codebase and ship fast, design clean versioned APIs for outside consumers, take a capability from idea to production, run what they ship, and do it with low ego. These four stories cover that. The honest gap is payments and card-network experience, so there's a short note at the end on how to handle it.

---

## 1. Taking a product from idea to production (Alaya, 2016-2021)

**Likely questions:** "Tell me about something you built from scratch." / "How do you take a capability from idea to production?" / "How do you deal with ambiguity?"

**Situation.** In 2016 I cofounded Alaya, an employee purpose and engagement platform. There was no product, no customer and no code, and the business side was already talking to large companies who wanted a demo.

**Task.** My job was to build the whole platform, alone at first and then with a small team, fast enough to sign the first enterprise clients without painting us into a corner we'd pay for later.

**Action.** I went with a boring stack on purpose: Node.js, React and PostgreSQL, things I knew I could run in production without surprises. The first three months went into the smallest version that could be demoed to a real buyer. Once clients started signing, I grew it piece by piece into a multi-tenant architecture with a proper API layer, impact reporting and postal campaigns. When I hired the first three engineers, I set up CI/CD, code review habits and architecture docs so they could ship on their own without waiting for me.

**Result.** We reached 50+ enterprise clients across Switzerland and France, and Benevity, a Canadian unicorn valued at over $1B, acquired Alaya in 2021. The platform held up through due diligence, which was the most honest review of our technical decisions we ever got.

**Reflection.** I added proper observability far too late; for a while we learned about problems from customers. Multi-tenancy was also more painful to retrofit than I'd expected. For Reap, both lessons point the same way: when real money moves, tracing and tenant or agent isolation have to be there on day one, not added in year two.

---

## 2. Dropping into a much bigger codebase and shipping (Benevity integration, 2021)

**Likely questions:** "Tell me about joining an unfamiliar codebase." / "How do you get productive quickly?" / "Tell me about working through an acquisition."

**Situation.** After the acquisition I joined Benevity as a Senior Staff Engineer. The engineering org was about ten times the size of Alaya's, the code was Java microservices rather than our Node monolith, and the processes were completely different.

**Task.** Bring Alaya's core capabilities into Benevity's platform while we kept shipping new features, so customers who'd bought Alaya didn't see us stall.

**Action.** I spent most of the first month reading and mapping the existing architecture before suggesting anything. I got to know the platform and infra teams, mostly by asking what hurt, and only then brought up technical opinions. Once I understood where things lived, I took on the cross-team architecture work for the Europe-facing product surface, which meant owning the contracts between our features and the services other teams ran.

**Result.** The core Alaya features were migrated into Benevity's platform, and I contributed to three major cross-team architecture decisions. I became the person people pinged when a change touched both sides of the old boundary.

**Reflection.** At first I moved too fast and tried to "fix" things that weren't broken; they just worked differently from how I'd have done them. Listening first made me more effective, not slower. With Payward buying Reap, I'd expect a similar integration year, and I'd bring the same approach: map it, earn some trust, then push.

---

## 3. A hard architecture trade-off under delivery pressure (Alaya)

**Likely questions:** "Tell me about a technical trade-off." / "How do you balance tech debt with shipping?" / "Tell me about a decision you had to defend."

**Situation.** Alaya's monolith was starting to crack under load. Half the team wanted a full rewrite into microservices, and the investors wanted new features, not a rewrite.

**Task.** I needed to make a decision I could defend to both groups, one that fixed the scaling problem without freezing the roadmap.

**Action.** Instead of arguing, I ran a two-week spike and built prototypes of both approaches with load tests, then presented the trade-offs to the CTO and investors with numbers attached. I proposed a strangler fig migration: pull out the two highest-traffic modules first, leave everything else in the monolith, and agree in writing on the criteria that would justify extracting anything more.

**Result.** The first extracted module shipped in six weeks. The busiest endpoints got about 40% faster, and the rest of the monolith stayed stable all the way through the acquisition. We never needed the big-bang rewrite.

**Reflection.** The hard part was social, not technical: convincing people that not rewriting everything was the right call. The data ended the debate, so next time I'd benchmark earlier and skip a week of opinions. That instinct fits agentic checkout too. Where a merchant supports ACP or another structured protocol, use it; only reach for browser automation on the long tail where you have no other option, and measure both.

---

## 4. Getting AI tooling adopted without authority (Benevity)

**Likely questions:** "How do you lead without formal authority?" / "Tell me about your hands-on work with AI agents." / "How would you shape a roadmap?"

**Situation.** At Benevity I was an IC with no reports, and I wanted two teams that didn't report to me to start using AI-assisted development in their daily work.

**Task.** I had to change how engineers worked without a mandate, and in a way that would still stick after the novelty wore off.

**Action.** I started with three engineers who were already curious and built small internal demos around their real work, not toy examples. Then came informal lunch-and-learns with no slides and no mandate, just live demos. I also put reusable prompt templates in a shared repo so people could start with something that already worked, and I wrote up concrete wins as they came in, like a PR review cycle that went about two hours faster.

**Result.** Within about three months, roughly 70% of engineers on both teams were using AI-assisted code review and generation, and I ended up as the informal AI tooling lead across the org.

**Reflection.** Doing it without a mandate was slower, but it stuck, because the people who adopted it on their own terms argued for it better than I could have. What I took from building those workflows is that the model is rarely the hard part. Scoping what it's allowed to do, and making each action traceable, is what makes it trustworthy. That's why Reap's scoped per-agent tokens caught my attention.

---

## Handling the gap: payments and card networks

They'll probably ask about ACP/AP2/UCP, Visa Intelligent Commerce or Mastercard Agent Pay, and Playwright-style checkout automation. Don't bluff. A good answer is something like: "I haven't shipped card-network or issuer code. What I have done is design APIs that other teams and customers depended on, run multi-tenant systems in production, and build LLM and multi-agent workflows. I've read up on ACP, Visa's Trusted Agent Protocol and how you mint per-intent tokens, and I'd expect to be useful in the first month and to own a feature end to end in the first quarter."

Before the interview, do a small hands-on project to make that claim concrete: a Playwright script that gets a cart to checkout on a test storefront, plus a short write-up on where it breaks (bot detection, 3DS, DOMs that keep changing) and where a human approval step would go.
