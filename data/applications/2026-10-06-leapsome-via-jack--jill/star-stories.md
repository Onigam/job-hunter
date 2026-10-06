# STAR+R Stories: Leapsome, Staff Product Engineer

Picked for what this role leans on: founding-engineer ownership, acting as a technical peer to product, mentoring a team into AI-native habits, and making trade-offs under delivery pressure. All four come from `profile/star-bank.md`; nothing here goes beyond what's in the bank.

---

## 1. Building Alaya from a blank page to acquisition

**Likely prompts:** "Tell me about something you built end to end." / "How do you handle ambiguity?" / "What does ownership mean to you?"

**Situation.** In 2016 I co-founded Alaya, a purpose and impact platform for employee engagement. There was no product, no customers, and for a while no other engineers. The business side was already talking to its first enterprise prospects, so the clock was running before a line of code existed.

**Task.** My job was to design and build the whole platform, first alone and then with a small team, without over-engineering something that might need to change shape after the first few customer conversations.

**Action.** I went with a stack I knew would carry us a long way without heroics: Node.js, React and PostgreSQL. The first three months were about getting to a demo we could put in front of a real buyer. Once that landed, the platform grew in layers: multi-tenancy, an API layer, impact reporting, postal campaigns. When we started hiring, I brought on and onboarded the first three engineers and set up the things I didn't want to retrofit later, so CI/CD, code review as a habit, and written architecture docs.

**Result.** Alaya went into production with 50+ enterprise clients across Switzerland and France and was acquired by Benevity, a Canadian company valued above $1B, in 2021. The acquisition was the clearest signal that the early technical and product calls had held up.

**Reflection.** Two things I'd change. Observability came too late; we added proper APM once problems were already in front of us. And multi-tenancy cost far more to retrofit than it would have to design in on day one. For Leapsome, the second lesson maps directly onto agent work: tenant and permission boundaries in a RAG pipeline over HR data aren't something you bolt on after launch.

---

## 2. Getting two teams to adopt AI-assisted development without a mandate

**Likely prompts:** "How do you influence without authority?" / "How would you mentor the team on AI-native development?" / "Tell me about driving a change in how people work."

**Situation.** At Benevity I was a Senior Staff IC with no direct reports. I wanted two engineering teams, neither of which reported to me, to start using AI-assisted code review and generation as part of their normal workflow.

**Task.** Change daily habits for engineers who had no obligation to listen to me, and do it in a way that would outlast my enthusiasm for it.

**Action.** Rather than pitching the whole group, I started with three engineers who were already curious. We built small internal demos that showed time saved on real work, not toy examples. From there I ran informal lunch-and-learn sessions with no attendance pressure, mostly live demos. The prompt templates that worked went into a shared repo so people could reuse them instead of starting from scratch, and I wrote up concrete wins as they happened, for example a PR review cycle that came in about two hours shorter.

**Result.** Within roughly three months, about 70% of engineers across both teams were using AI-assisted review and generation. I ended up as the informal AI tooling lead for the org, which wasn't a title anyone gave me, just where people came with questions.

**Reflection.** Going without a mandate was slower, but it stuck. The engineers who adopted it on their own terms became the ones arguing for it in rooms I wasn't in. If I were doing this at Leapsome I'd take the same approach to Cursor and CodeRabbit habits, and add something I didn't have then: a lightweight way to measure whether AI-generated changes are causing more review churn, so the conversation stays grounded.

---

## 3. Choosing a strangler-fig migration over a full rewrite

**Likely prompts:** "Tell me about a technical trade-off you navigated." / "When have you pushed back on a roadmap?" / "How do you handle tech debt against feature pressure?"

**Situation.** Alaya's monolith was starting to crack under load. The team was split between a full microservices rewrite and keeping a modular monolith, and investors wanted new features, not a rewrite.

**Task.** I needed a decision I could defend to both the engineers and the people funding us, one that fixed the scaling problem without freezing delivery.

**Action.** We ran a two-week spike that prototyped both approaches and put them through load tests, so the discussion could move from opinions to numbers. I took the trade-offs to the CTO and investors with those metrics in hand. What I proposed was a strangler-fig migration: pull out the two highest-traffic modules first and leave everything else in the monolith. We also wrote down explicit criteria for when any further module would earn its own extraction, which stopped the debate from restarting every sprint.

**Result.** The first extracted module shipped in six weeks, and the busiest endpoints got around 40% faster. The rest of the monolith stayed stable all the way through the acquisition, and we never needed the big-bang rewrite.

**Reflection.** The hardest part wasn't technical. It was persuading people that not rewriting everything was the right move. Data settled it, and next time I'd benchmark earlier to cut the debate short. It's also the kind of conversation I'd expect to have with product at Leapsome, where the question becomes which workflows actually need an agent and which are fine as deterministic features.

---

## 4. Integrating into Benevity after the acquisition

**Likely prompts:** "Tell me about joining an organisation mid-flight." / "How do you work across teams?" / "Describe a time you had to adapt."

**Situation.** After Benevity acquired Alaya in 2021, I joined as Senior Staff Engineer in an engineering org about ten times our size, with a different culture, a Java and microservices codebase, and very different processes.

**Task.** Bring Alaya's capabilities into Benevity's platform while still shipping new features, and keep the delivery pace we'd had as a small team.

**Action.** I spent the first month mapping the existing architecture before suggesting changes to any of it. A lot of that time went into getting to know the platform and infrastructure teams, so that when I did have an opinion it landed with people who already knew me. Over time I became the cross-team architecture contact for the Europe-facing product surface, and the AI tooling work from story 2 grew out of the same relationships.

**Result.** The core Alaya features were migrated into Benevity's platform. I contributed to three major cross-team architecture decisions and became the person two teams went to for AI tooling.

**Reflection.** Early on I moved too fast, trying to fix things that weren't actually broken in the new org. Slowing down and listening made me far more useful. Joining Leapsome as a Staff engineer would put me in a similar spot, coming into an established codebase, so I'd plan on a listening month again.

---

## Prep note: the production LLM question

The posting asks for a track record of shipping production-grade LLM applications with multi-agent orchestration and advanced RAG. The bank doesn't contain a story about a production LLM feature, so don't invent one. The honest framing: AI-augmented engineering in production teams at Benevity (story 2), plus personal multi-agent and embedding-search work in TypeScript and Python. Be ready to go deep on design instead, for example how you'd structure tool-calling schemas, what an eval suite for an HR summary agent would test (permission leaks, anonymity of peer feedback, hallucinated performance claims), and where you'd put human review in the loop. If there's a real project worth turning into a fifth story, add it to `profile/star-bank.md` first.
