# STAR+R Stories: newinsights.ai, Founding AI Engineer

As the first engineer you'd own every technical decision and work straight alongside the founder, Ryan Grenier (ex-Commerzbank Big Data, AWS, Rackspace). Expect questions about building from nothing, defending architecture choices with data, and shipping AI that people actually trust. Expect him to probe the gaps too: no bank background, and Python isn't your main language. Story 5 deals with those directly.

---

## 1. Building Alaya from a blank page to acquisition

**Likely questions:** "Tell me about something you built from scratch." "How do you handle ambiguity as the only engineer?"

**Situation.** In 2016 I co-founded Alaya, an employee purpose and impact platform. There was no product, no customer and no code, just a business partner already talking to large companies who wanted to see something real.

**Task.** My job was to design and build the whole platform, alone at first and later with a small team, while the business side signed its first enterprise clients. Whatever I picked early on, we'd have to live with.

**Action.** I went with a stack I knew could carry us without heroics, Node.js, React and PostgreSQL, because the risk was in the product, not the technology. The first three months went into a working demo rather than a perfect foundation. Once clients were paying, I grew the platform piece by piece: a multi-tenant architecture, an API layer, impact reporting, even postal campaigns when a client asked for them. When we could hire, I brought on the first three engineers and set up CI/CD, code review habits and architecture docs so the codebase wouldn't depend on my memory.

**Result.** Alaya reached 50+ enterprise clients across Switzerland and France, and in 2021 Benevity, a Canadian unicorn valued above $1B, acquired us. The platform they bought was the one I'd written from the first commit.

**Reflection.** Two things I'd change. I added proper observability far too late, and retrofitting multi-tenancy cost more than designing for it from day zero would have. At newinsights.ai the equivalent is evaluation: if the docs are going to be audit-grade, measuring their quality has to exist before the first customer pipeline does, not after.

---

## 2. Choosing a strangler-fig migration over a rewrite

**Likely questions:** "Tell me about a hard technical trade-off." "How do you make decisions when the founder or investors want something else?"

**Situation.** The Alaya monolith was starting to crack under load. Half the team wanted a full microservices rewrite, others wanted to keep it as it was, and the investors only cared about new features.

**Task.** Someone had to make a call we could defend, one that fixed the scaling problem without freezing the roadmap for months.

**Action.** Rather than let it become a debate of opinions, I ran a two-week spike and prototyped both approaches with load tests. I took the numbers to leadership and the investors and proposed a strangler-fig migration: pull out the two highest-traffic modules first and leave the rest alone. We also wrote down clear criteria for when any further module would be worth extracting, so the question wouldn't come back every quarter.

**Result.** The first extracted module shipped in about six weeks and the busiest endpoints got roughly 40% faster. The rest of the monolith stayed stable all the way through the acquisition, and we never needed a big-bang rewrite.

**Reflection.** Getting people to accept that not rewriting everything was the right answer was harder than the engineering. Data settled it. I'd benchmark earlier next time and save a couple of weeks of arguing, which matters even more when it's just you and a founder deciding.

---

## 3. Getting two teams to adopt AI tooling without authority

**Likely questions:** "How do you get people to trust AI output?" "Tell me about driving change you didn't control."

**Situation.** At Benevity I was a Senior Staff IC with no direct reports. I was convinced AI-assisted development would change how our engineers worked, but the two teams I wanted to bring along didn't report to me, and a fair number of them were skeptical.

**Task.** I had to change daily habits without a mandate, which meant the tools had to prove themselves.

**Action.** I started with three engineers who were already curious, built demos on our own codebase so the time savings were concrete rather than theoretical, and ran informal lunch sessions with no attendance pressure. The prompt templates that worked went into a shared repo where anyone could reuse or improve them. I also wrote up real results as they happened, like a PR review cycle that came in about two hours shorter, because people believe a colleague's story more than a vendor slide.

**Result.** Within three months around 70% of engineers on both teams were using AI-assisted code review and generation, and I ended up as the informal AI tooling lead across the org.

**Reflection.** Going without a mandate was slower, but it stuck. Engineers who adopted the tools on their own terms became the advocates. It's the same thing your buyers will need: a compliance officer won't trust generated documentation because someone says it's accurate, they'll trust it once they've seen it hold up against code they already know.

---

## 4. Integrating into a much bigger organization after the acquisition

**Likely questions:** "How do you work with large enterprise engineering teams?" "Tell me about a time you had to adapt."

**Situation.** After the acquisition I joined Benevity as a Senior Staff Engineer in an engineering org roughly ten times Alaya's size, with a different culture, a Java microservices codebase and much heavier processes.

**Task.** Alaya's capabilities had to move into Benevity's platform while we kept shipping, and without losing the speed we'd had as a startup.

**Action.** I spent the first month mapping the existing architecture before proposing anything. I got to know the platform and infra teams before pushing technical opinions, and over time became the cross-team architecture contact for the Europe-facing product.

**Result.** The core Alaya features were migrated into Benevity's platform. I contributed to three major cross-team architecture decisions along the way.

**Reflection.** At first I moved too fast, trying to fix things that weren't actually broken. Slowing down and listening made me more useful. Your customers are big regulated enterprises with decades of legacy code, so I'd go into every onboarding assuming their architecture has reasons I don't know about yet.

---

## 5. Addressing the gaps honestly (bank background, Python depth)

**Likely question:** "You haven't worked in a regulated bank, and your stack is mostly TypeScript. Why you?"

This isn't a STAR story, but have it ready in your own words.

"You're right on both. I haven't worked inside a bank, and most of my production code over the last few years has been TypeScript, with Python on the side. What I'd point to is that you have the bank side covered better than almost anyone, from your time at Commerzbank, and what you need from a first engineer is someone who's already done the zero-to-acquisition job once and knows which corners can be cut and which can't. I've built LLM integrations, multi-agent workflows and semantic search in production, so moving the core of that into Python is a language change, not a skills change. On the regulatory side, I'd want to sit in on your first few customer security reviews early, because that's the fastest way to learn what DORA auditors actually look for."

**Watch out:** the posting lists a Master's in a quantitative field. Answer accurately about your degree and don't overstate it. If you don't hold one, let 17 years of shipping and the exit carry the argument.
