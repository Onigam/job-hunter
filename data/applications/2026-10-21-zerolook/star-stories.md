# STAR+R Stories: Zerolook, Software Architect (Zurich)

These are picked for a founding-architect interview at a pre-seed company. Expect the founders (ex-Google Flights and Kayak) to probe three things: can you design a serving system where cost per query matters, can you own the 0-to-1 mess without a team around you, and can you hire and set standards once the team grows. Stories are sourced from `profile/star-bank.md`. No throughput figures have been added that aren't in the bank, so if asked about 1K+ QPS, answer honestly (see the note at the bottom).

---

## 1. Building Alaya from a blank page to acquisition

**Likely questions:** "Tell me about something you built from scratch." "How do you handle ambiguity?" "What would you do in your first 90 days here?"

**Situation.** In 2016 I co-founded Alaya, an employee purpose and impact platform. There was no product, no customer and no code. The business side was already talking to its first enterprise prospects, so the clock started before the first commit.

**Task.** I had to architect and build the whole platform, alone at first, and get it to a state where real companies could run on it. Then I had to turn a one-person codebase into something a team could work in.

**Action.** I picked a stack I knew could carry us for years without heroics: Node.js, React and PostgreSQL. The goal for the first three months was a demo that a client could actually click through, so I cut anything that didn't serve that. Once we had paying customers, I expanded in layers: multi-tenancy, an API layer, impact reporting, and later postal campaigns. When it was time to hire, I brought on the first three engineers myself, and before they arrived I put CI/CD, code review and architecture docs in place so they'd inherit habits instead of having to invent them.

**Result.** The platform went to production and grew to 50+ enterprise clients across Switzerland and France. Benevity, a Canadian unicorn valued above $1B, acquired Alaya in 2021, which was about as clear a validation of the early technical choices as you get.

**Reflection.** Two things I'd change. Observability came too late; we added proper APM only once problems were already in production, and I'd put it in from week one now. Multi-tenancy was also retrofitted, which cost far more than designing for it up front. For Zerolook the equivalent is cost-per-query instrumentation: I'd want to measure it from the first request, not after the first cloud bill.

---

## 2. Choosing a strangler fig over a rewrite

**Likely questions:** "Tell me about a technical trade-off you made." "How do you decide when to break up a system?" "How do you deal with performance problems?"

**Situation.** A few years into Alaya, the monolith was showing cracks under load. The team was split between a full microservices rewrite and staying put with a better-organised monolith. Investors wanted features, not a rewrite, and they weren't wrong to worry.

**Task.** I needed a decision I could defend to both the engineers and the investors, one that fixed the scaling issue without freezing the roadmap.

**Action.** Rather than argue it out in meetings, I ran a two-week spike and prototyped both directions with load tests. I took the numbers to the CTO and the investors and proposed a strangler fig: extract the two highest-traffic modules first, leave everything else in the monolith, and write down explicit criteria for when any other module would earn its own service.

**Result.** The first extracted module shipped in six weeks. The busiest endpoints got about 40% faster. The rest of the monolith stayed stable all the way through the acquisition, and we never needed the big-bang rewrite.

**Reflection.** The hard part wasn't technical, it was persuading people that not rewriting everything was the right call. Data ended the debate, and I'd benchmark even earlier next time to shorten it. The same instinct applies to a fare-prediction service: find the hot path, make it cheap and fast, and don't distribute what doesn't need distributing yet.

---

## 3. Joining a Java microservices org after the acquisition

**Likely questions:** "Tell me about working in an unfamiliar codebase or stack." "How do you ramp up on a new domain?" Also a natural place to address the Java/C++ and travel-tech gaps.

**Situation.** After the acquisition in 2021 I joined Benevity as a Senior Staff Engineer. The org was roughly ten times the size of Alaya, the codebase was Java and microservices rather than our Node.js stack, and the culture and processes were completely different.

**Task.** My job was to integrate Alaya's capabilities into Benevity's platform while still shipping new features, without losing the speed we'd had as a small team.

**Action.** I spent my first month mapping the existing architecture before suggesting changes to anything. I got to know the platform and infra teams before pushing opinions on them. Once I had that context, I took on the role of cross-team architecture liaison for the Europe-facing product surface, which meant a lot of reading other teams' code and a lot of design reviews.

**Result.** The core Alaya features were migrated into Benevity's platform. I contributed to three major cross-team architecture decisions and became the go-to person for AI tooling across two engineering teams.

**Reflection.** At first I moved too fast and tried to fix things that weren't broken. Slowing down and listening made me more useful. That's how I'd approach travel tech at Zerolook: GDS, NDC and fare rules are a domain with decades of history, and I'd rather learn from the founders' Google Flights and Kayak experience in the first weeks than redesign something I don't yet understand.

---

## 4. Setting standards without formal authority

**Likely questions:** "How would you set engineering standards as the first architect?" "Tell me about influencing people who don't report to you." "How do you mentor?"

**Situation.** At Benevity I was a Senior Staff IC with no direct reports. I wanted two teams that didn't report to me to adopt AI-assisted development, and nobody had asked them to.

**Task.** I had to change how engineers worked day to day without being anyone's manager and without a mandate from above.

**Action.** I started with three engineers who were already curious. With them, I built small internal demos that showed actual time saved on real tickets, not slideware. Then came informal lunch-and-learns where the demos did the talking. I wrote reusable prompt templates, committed them to a shared repo so anyone could pick them up, and documented concrete wins, like a PR review cycle that went about two hours faster.

**Result.** Within three months, about 70% of engineers on both teams were using AI-assisted review and code generation. I ended up as the informal AI tooling lead across the org.

**Reflection.** Going without a mandate was slower, but it stuck. People who adopted the tools on their own became the ones advocating for them. As the first architect at Zerolook I'd have formal authority over standards, but I'd still prefer to set them by shipping a working example and letting the next hires see why, rather than handing them a style guide on day one.

---

## Note on the gaps (prepare these answers, don't improvise)

**1K+ QPS at ~1s latency.** The profile doesn't carry throughput numbers, so don't invent any. Be straight about it: the Alaya load-test spike and the ~40% improvement on the busiest endpoints are the real evidence, and the scale was enterprise SaaS, not consumer search. Then go to design. Talk about caching predictions by route and date window, precomputing the popular routes, keeping the model inference path stateless so it scales horizontally on Kubernetes, and setting a confidence threshold that decides when to fall back to a live fare query.

**C++ and Helidon SE / Drogon.** Say plainly that C++ isn't on your CV, and that your Java is from Sagemcom (2011-2014) plus five years working inside Benevity's Java microservices codebase. Ask what they expect to live in C++ versus Java. If the C++ is the hot inference path, offer to own the architecture and contracts around it while hiring someone strong in C++ early.

**Travel tech.** None, and say so. Turn it into a question about how they think about GDS costs and NDC adoption; the founders know this better than almost anyone, and asking well is worth more than pretending.
