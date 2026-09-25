# STAR+R Stories: Electricity Maps, Senior / Staff Full-stack Engineer

The posting asks for three things: founder mentality, strong opinions on what "good" looks like that you can defend, and care for whether features actually get used in a data-heavy product. These four stories cover all three. All of them come from `profile/star-bank.md`. Tell them in your own words, not word for word.

---

## 1. Building Alaya from zero to acquisition

**Likely prompts:** "Tell me about something you built from scratch." / "What does founder mentality mean to you?" / "Tell me about working at an early-stage company."

**Situation.** In 2016 I cofounded Alaya, a platform that helps companies run employee purpose and impact programmes. We had no product and no customers, and the business side was already trying to sign enterprise clients.

**Task.** My job was to build the whole platform, alone at first. It had to be good enough to demo quickly, but it couldn't fall over once real companies with thousands of employees started using it.

**Action.** I went for a deliberately boring stack: Node.js, React and PostgreSQL. I knew it well and it could grow with us, so I wasn't spending the first months on infrastructure nobody had asked for. The core features were ready for a first demo within about three months. After that, what customers actually used decided what came next. We added multi-tenancy, a proper API layer, impact reporting and postal campaigns roughly in the order clients asked for them. When it was time to hire, I brought in the first three engineers and set up CI/CD, code review and architecture docs, so the codebase wouldn't depend on my memory.

**Result.** The platform ended up serving 50+ enterprise clients across Switzerland and France. In 2021 Benevity, a Canadian company valued at over $1B, acquired Alaya, and a good part of their due diligence was on the platform itself.

**Reflection.** I'd add observability much earlier. We only got proper APM late, which meant some production issues took longer to understand than they should have. Multi-tenancy was the other expensive lesson, because retrofitting it cost far more than designing for it from day one. For a product like Electricity Maps, where customers trust the numbers, I'd want monitoring on data freshness and correctness from the very first release.

---

## 2. A hard architecture call under delivery pressure

**Likely prompts:** "Tell me about a technical opinion you had to defend." / "How do you handle technical debt?" / "Tell me about a trade-off you made."

**Situation.** Alaya's monolith was starting to crack under load on a few busy endpoints. The team was split between a full microservices rewrite and staying put, while investors wanted new features, not a rewrite.

**Task.** I had to pick a direction I could defend to the engineers and to the people funding us, without stopping delivery.

**Action.** Rather than argue it out in meetings, I ran a two-week spike: a prototype of each approach, with load tests against both. I took the numbers to the CTO and the investors and proposed a strangler-fig migration. We'd pull out the two highest-traffic modules first and leave everything else in the monolith. We also wrote down clear criteria for when any other module would be worth extracting, so it didn't turn into a debate every sprint.

**Result.** The first extracted module shipped in about six weeks, and the busiest endpoints got roughly 40% faster. The rest of the monolith stayed stable all the way through the acquisition, and we never needed a big-bang rewrite.

**Reflection.** Getting people to accept that we shouldn't rewrite everything was the hardest part. Data settled it where opinions hadn't, so today I'd run the benchmarks earlier and cut the debate short. That's the kind of opinion I think the posting means, strong but backed by something you can measure.

---

## 3. Joining a much bigger org after the acquisition

**Likely prompts:** "Tell me about a time you had to adapt." / "How do you work with sales, data or leadership?" / "Tell me about a mistake."

**Situation.** After the acquisition in 2021 I joined Benevity as a Senior Staff Engineer. The organisation was about ten times the size of Alaya, with a different stack (Java and microservices), different processes and a different culture.

**Task.** Alaya's capabilities had to be brought into Benevity's platform while we kept shipping new features, and we couldn't lose the speed we'd had as a startup.

**Action.** Honestly, I started badly. For the first few weeks I pushed changes to things that weren't broken, which didn't win me any friends. Then I changed approach and spent most of a month mapping the existing architecture and who owned what. I got to know the platform and infrastructure teams before I offered any more opinions. Once I had that context, I became the architecture contact between teams for the European side of the product.

**Result.** We moved Alaya's core features into Benevity's platform, and I contributed to three major architecture decisions that spanned several teams. Along the way I became the person both engineering teams came to for AI tooling.

**Reflection.** Listening first made me more effective, and I wish I'd started there. At a 30-person startup the lesson looks different, but it still applies. Before I try to change how sales or data teams work with engineering, I want to understand why they work the way they do.

---

## 4. Changing how engineers work without being their manager

**Likely prompts:** "How do you influence without authority?" / "What does Staff-level impact look like to you?" / "Tell me about raising the bar for a team."

**Situation.** At Benevity I was an individual contributor with no direct reports. I thought AI-assisted development could save both teams I worked with a lot of time, but none of those engineers reported to me.

**Task.** The goal was to get people using AI tooling day to day without a mandate, since I didn't have the authority to give one and it wouldn't have stuck anyway.

**Action.** I started with three engineers who were already curious and worked alongside them until they had real wins to show. From there it spread through informal lunch-and-learn demos built on our own code, not vendor slides. I put reusable prompt templates in a shared repo so nobody had to start from zero. When someone saved a couple of hours on a PR review cycle, I wrote it down, because concrete stories convinced people far better than general claims.

**Result.** Within about three months, roughly 70% of engineers on both teams were using AI-assisted code review and generation. I ended up as the informal AI tooling lead for the org.

**Reflection.** Going without a mandate was slower, but it lasted, because the people who adopted it chose to and then argued for it better than I could. I'd take the same approach to introducing a new engineering standard on a small team.

---

## Questions to ask them

- How do you catch a grid operator changing its data format or publishing revisions late, and who owns the fix when a parser breaks?
- What share of revenue comes from API customers versus the web app, and how does that shape what the full-stack team works on?
- What does office-first mean day to day, and have you supported relocation to Copenhagen before?
- What's the difference in scope between Senior and Staff for this role, and how do you decide which level an offer is at?
