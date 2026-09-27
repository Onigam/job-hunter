# STAR+R Stories: Founding AI Platform Engineer (Atarus client, AI data-for-agents, renewable energy)

These are the questions a founding AI platform role is most likely to ask: building from zero, making architecture calls under pressure, changing how engineers work with AI tooling, and landing in someone else's codebase. All of them come from `profile/star-bank.md`. Nothing is invented.

---

## 1. Building a platform from zero (founding engineer fit)

**Likely prompt:** "You'd be the first platform engineer. Tell me about a time you built something from nothing."

In 2016 I cofounded Alaya, an employee purpose and impact platform. We had no product and no customers, just a business partner already pitching enterprise clients who expected a working demo soon.

My job was to design and build the whole platform, alone at first, then with a small team, without slowing sales down.

I chose a boring stack on purpose: Node.js, React and PostgreSQL, things I knew could scale further than we'd need for a few years. We had the core features running within about three months, which got us to a first demo. From there I added pieces as customers pulled for them: a multi-tenant architecture, an API layer, impact reporting, and later postal campaigns. When we could hire, I brought in the first three engineers and set up CI/CD, code review habits and architecture docs so the codebase didn't depend on what was in my head.

The platform went into production with 50+ enterprise clients across Switzerland and France. Benevity, a Canadian unicorn valued at over $1B, acquired Alaya in 2021, and the platform's technical choices held up in due diligence.

Looking back, I'd put observability in much earlier, because we added proper APM late and paid for it in debugging time. I also underestimated how painful it is to retrofit multi-tenancy. For a data platform serving several energy customers, I'd design tenancy and data provenance in from the first schema.

---

## 2. A hard architecture call under delivery pressure

**Likely prompt:** "Tell me about a technical trade-off where the business wanted something different."

At Alaya our monolith was starting to crack under load on a few endpoints. Half the team wanted a full rewrite into microservices. The investors wanted features, not a rewrite.

I needed a decision I could defend to both groups, one that fixed the scaling problem without freezing the roadmap for months.

Rather than argue it out, I ran a two-week spike and built prototypes of both approaches with load tests behind them. I brought the numbers to the CTO and the investors, not opinions. My proposal was a strangler fig migration: pull out the two highest-traffic modules first, leave everything else in the monolith, and write down the criteria that would justify extracting anything more.

The first extracted module shipped in six weeks, and the busiest endpoints got around 40% faster. The rest of the monolith stayed stable right through the acquisition, and nobody had to do a big-bang rewrite.

The hardest part wasn't technical. It was convincing people that not rewriting everything was the right call. Data won that argument, and next time I'd benchmark earlier to cut the debate short. It's the same instinct I'd bring to agent architecture, where it's tempting to add a new routing layer or framework before measuring what's actually failing.

---

## 3. Changing how engineers work with AI, without authority

**Likely prompt:** "The role includes AI-native engineering workflows. How have you got a team to actually adopt AI tooling?"

At Benevity I was a Senior Staff IC with no direct reports. I thought AI-assisted development could save the teams real time, but the two teams I wanted to reach didn't report to me, and a lot of engineers were sceptical.

The goal was to change daily habits across both teams without a mandate I didn't have.

I started with three engineers who were already curious and worked with them until they had wins they could show. Then I built small internal demos with concrete time savings, and ran informal lunch-and-learn sessions where nobody had to sign up for anything. The prompt templates that worked went into a shared repo so people could reuse them instead of starting from zero. I also wrote up specific results, like a pull request review cycle that came in about two hours shorter.

Within three months roughly 70% of engineers across both teams were using AI-assisted code review and generation, and I'd become the informal AI tooling lead for the org.

Going without a mandate was slower, but it stuck. The people who adopted it on their own terms became its advocates, which a top-down rule wouldn't have produced. At a founding stage the team is small enough that I'd build these workflows into CI and the repo from day one rather than selling them later.

---

## 4. Landing in an unfamiliar codebase and shipping anyway

**Likely prompt:** "How do you ramp up on a system you didn't build?" or "Tell me about working across teams."

After the acquisition in 2021 I joined Benevity as a Senior Staff Engineer, on a team about ten times the size of Alaya's. It was a Java microservices codebase with its own culture and processes, nothing like what I'd built.

I had to integrate Alaya's capabilities into Benevity's platform while we kept shipping new features, without losing the speed we'd had as a startup.

I spent the first month mapping the architecture before proposing any changes. I got to know the platform and infra teams before pushing technical opinions on them. Once I understood the system, I started acting as the cross-team architecture contact for the Europe-facing product surface, and began pushing AI-augmented workflows across engineering.

We migrated Alaya's core features into Benevity's platform. I contributed to three major cross-team architecture decisions and ended up as the go-to person for AI tooling on two teams.

Early on I moved too fast and tried to fix things that weren't broken. Once I slowed down and listened, I got more done. At a small company with paying customers, the equivalent is learning why the existing data pipelines look the way they do before replacing them.

---

## Gap to prepare before the interview

The posting asks for hands-on production experience with LLM agents, RAG and evals, in Python. The profile lists LLM integration, multi-agent workflows, semantic search and embeddings, but the story bank doesn't have a dedicated story about it yet. Before the technical round, write a fifth STAR story from real Benevity work: which retrieval or agent system it was, how it was evaluated, what went wrong in production, and what changed. Use real numbers only. Also be honest that Temporal hasn't been used in production, and say which workflow engines or queue-based orchestration have.
