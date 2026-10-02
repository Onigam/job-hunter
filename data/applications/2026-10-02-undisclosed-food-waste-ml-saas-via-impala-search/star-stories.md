# STAR+R Stories: CTO, food-waste ML SaaS (via Impala Search)

The posting asks for five things: own the platform's technical strategy, lead and grow a lean engineering plus ML team, stay hands-on in Python, partner with the CEO, and deliver B2B SaaS to large enterprise customers. The stories below map to those. Expect the panel to probe the ML depth hardest, so there's a prepared answer for that at the end.

---

## 1. Building Alaya from zero to acquisition

**Likely questions:** "Tell me about building something from scratch." "How have you scaled an early-stage company?" "Why should we trust you with the whole technical side?"

**Situation.** In 2016 I co-founded Alaya, an employee purpose and impact platform. There was no product, no customers and no team, just a business side that was already talking to enterprise prospects.

**Task.** My job was the entire technical side. I had to build something that could survive enterprise procurement while the company was still figuring out what it sold, and then turn a solo effort into an actual team.

**Action.** I went with a stack I knew would hold up without heroics, Node.js, React and PostgreSQL, and got the core features to a demo in about three months. After that the work was mostly expansion driven by what clients asked for: a multi-tenant architecture, an API layer, impact reporting, even postal campaigns. When it was time to hire, I brought in the first three engineers and set up CI/CD, code review and architecture docs early, because I'd seen what happens when those arrive after the team has already grown its own habits.

**Result.** We reached 50+ enterprise clients across Switzerland and France, and Benevity, a Canadian unicorn valued above $1B, acquired Alaya in 2021. For me, that was the clearest outside check that the early technical calls had held up.

**Reflection.** Two things I'd change. Observability came too late; we added proper APM well after we needed it. And I retrofitted multi-tenancy instead of designing for it, which cost more than I'd expected. For a forecasting product serving several grocers across countries, I'd treat tenant isolation and per-customer model monitoring as day-one concerns.

---

## 2. A hard architecture call under investor pressure

**Likely questions:** "Tell me about a technical trade-off." "How do you handle tech debt when the business wants features?" "How do you work with the CEO and board on technical decisions?"

**Situation.** At Alaya, our monolith was starting to crack under load. Part of the team wanted a full microservices rewrite; the investors wanted features, not rewrites. Both sides had a point, which is what made it hard.

**Task.** I needed a decision we could defend to engineers and investors alike, one that fixed the scaling problems without stopping delivery for months.

**Action.** Rather than argue it out in meetings, I ran a two-week spike comparing both approaches, with prototype load tests on each. I took the results to leadership and the investors as numbers, not opinions. My proposal was a strangler fig migration: pull out the two highest-traffic modules first, leave everything else in the monolith, and agree on explicit criteria for when another module earns extraction.

**Result.** The first extracted module shipped in six weeks, and the busiest endpoints got roughly 40% faster. The rest of the monolith stayed stable all the way through the acquisition, and we never needed a big-bang rewrite.

**Reflection.** The hard part wasn't technical. It was persuading people that not rewriting everything was the right call, and data did most of that persuading. I'd benchmark earlier next time to shorten the debate. It's the same approach I'd bring to a CEO partnership here: put the trade-off in business terms, like delivery dates for the €5M contracts, and let the numbers carry it.

---

## 3. Leading without formal authority: AI-assisted engineering at Benevity

**Likely questions:** "How do you lead and grow engineers?" "How do you get a team to adopt a new practice?" "What's your experience with AI engineering?"

**Situation.** At Benevity I was a Senior Staff IC with no direct reports. I wanted two teams that didn't report to me to adopt AI-assisted development, and plenty of the engineers were skeptical.

**Task.** Change how people actually worked day to day without being anyone's manager and without a mandate from above.

**Action.** I started small, with three engineers who were already curious. Together we built internal demos showing concrete time savings on real work, not toy examples. From there I ran informal lunch-and-learn sessions, wrote reusable prompt templates and committed them to a shared repo so people could copy what worked. I also wrote up specific wins, like a PR review cycle that came in about two hours shorter, because one concrete example travels further than a slide about productivity.

**Result.** Within three months about 70% of engineers on both teams were using AI-assisted code review and generation, and I ended up as the informal AI tooling lead across the org.

**Reflection.** Going without a mandate was slower, but it stuck. The engineers who adopted it on their own terms became its advocates, which no decree would have produced. As a CTO I'd have the formal authority, and I'd still start this way for anything that changes how people work.

---

## 4. Joining a 10x larger org after the acquisition

**Likely questions:** "Tell me about navigating change." "How would you step into an existing team as a new CTO?" "Tell me about a mistake."

**Situation.** After the acquisition I joined Benevity as a Senior Staff Engineer. The organization was about ten times the size of Alaya, with a different culture, a different codebase built on Java microservices, and different processes.

**Task.** I had to fold Alaya's capabilities into Benevity's platform while still shipping new features, and do it without losing the speed we'd had as a startup.

**Action.** My first instinct was to fix things quickly, and honestly I moved too fast at first, pushing changes on things that weren't broken. I corrected course. I spent about a month mapping the existing architecture before proposing anything else, and built relationships with the platform and infrastructure teams before pushing technical opinions. Over time I became the cross-team architecture contact for the Europe-facing product surface.

**Result.** We migrated Alaya's core features into the Benevity platform, I contributed to three major cross-team architecture decisions, and I became the go-to person for AI tooling across two engineering teams.

**Reflection.** Listening first made me far more effective than being right early. This is the story I'd use if they ask how I'd handle my first weeks with an existing engineering and ML team. The people who built the forecasting models know where the bodies are buried, and I'd want to learn that before changing anything.

---

## Prepared answer: "How deep is your ML experience?"

This is the gap, so answer it straight rather than with a story that stretches the truth.

My ML work has been applied AI: LLM integration, multi-agent workflows, embeddings and semantic search, mostly in Python and TypeScript. I haven't owned a classical time-series demand forecasting system in production, and I won't pretend I have. What I do bring is the layer around the models that tends to break first at this stage: data pipelines that are repeatable per customer, multi-tenant serving, monitoring that catches drift before a store manager notices, and the release discipline to ship model changes to enterprise customers without surprises. I'd want to work closely with the strongest ML person on the team and give them real ownership of modeling choices, while I own the platform, the hiring plan and the conversation with the CEO about what the roadmap actually costs.

Questions worth asking back: how forecasts are evaluated per store and category, how often models are retrained, how acceptance rates on suggested orders are tracked, and what currently breaks when a new retailer is onboarded.
