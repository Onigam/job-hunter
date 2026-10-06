# STAR+R Stories: Staff Full Stack Engineer, Sell Side Engine (undisclosed energy tech platform via Jobgether)

The posting leans on four things: owning architecture for integration-heavy systems, working without full specs, managing cross-team dependencies, and turning commercial problems into shippable plans. These four stories cover that ground. Expect at least one question probing the Python and AWS serverless gap, so a short honest answer is at the end.

---

## 1. Building a product with no spec (Alaya, 2016 to 2021)

**Likely questions:** "Tell me about a time you built something from scratch." / "How do you work when requirements are incomplete?" / "Have you created a new product line?"

**Situation.** In 2016 I co-founded Alaya, an employee purpose and engagement platform. There was no product, no customers and no spec, just a business side that was already talking to its first enterprise prospects and needed something to show them.

**Task.** As Head of Technologies, it was on me to architect and build the platform, first alone and then with a small team, while sales kept moving the target as they learned what clients would actually pay for.

**Action.** I picked a deliberately boring stack, Node.js, React and PostgreSQL, because I needed to move fast and didn't want to spend founder time debugging infrastructure. The first goal was a working demo in about three months, so I scoped ruthlessly and treated every sales conversation as requirements gathering. Once clients signed, the platform grew outward from that core: a multi-tenant architecture, an API layer, impact reporting, postal campaigns. When I hired the first three engineers I set up CI/CD, code review and a habit of writing short architecture docs, mostly so I wasn't the only person who knew why things were built the way they were.

**Result.** Alaya reached 50+ enterprise clients across Switzerland and France and was acquired by Benevity in 2021.

**Reflection.** Two things I'd change. I'd put observability in from the start, since we added proper APM late and spent too long guessing about production issues. And I underestimated what it costs to retrofit multi-tenancy; next time I'd design for it on day one. Both lessons apply directly to a sell-side rebuild, where onboarding new counterparties is the core flow and you want to see every step of it.

---

## 2. Drawing boundaries under commercial pressure (Alaya)

**Likely questions:** "Tell me about a hard technical trade-off." / "How do you define service boundaries and failure modes?" / "How do you handle tech debt when the business wants features?"

**Situation.** A few years into Alaya, our monolith was showing real scaling cracks on its busiest endpoints. The engineering team was split between a full microservices rewrite and staying put. Our investors, meanwhile, wanted new features, and had little patience for anything that sounded like a rewrite.

**Task.** I needed a decision we could defend to both sides, one that fixed the performance problem without freezing delivery for months.

**Action.** Rather than argue it in meetings, I ran a two-week spike that prototyped both approaches and put them under load tests. I took the numbers to the leadership team and investors and proposed a strangler fig migration: extract only the two highest-traffic modules, give them clear contracts with the rest of the system, and leave everything else in the monolith. We also wrote down explicit criteria for when any further module would earn its own extraction, so the debate wouldn't restart every quarter.

**Result.** The first extracted module shipped in six weeks, and the busiest endpoints got roughly 40% faster. The remaining monolith stayed stable all the way through the acquisition, and we never needed the big-bang rewrite.

**Reflection.** The hard part wasn't technical, it was persuading people that not rewriting everything was the right call. Data settled it. I'd benchmark earlier next time to cut the argument short. For this role, the same instinct applies to the boundary between the sell-side engine and pricing, settlement and billing: decide what each side owns, what happens when one side is down, and only split further when the data says so.

---

## 3. Integrating into someone else's platform (Benevity, post-acquisition)

**Likely questions:** "Tell me about managing cross-team dependencies." / "How do you deliver integrations across teams you don't control?" / "Tell me about navigating a big change."

**Situation.** After the acquisition in 2021 I joined Benevity as Senior Staff Engineer. The org was about ten times the size of Alaya, with a different codebase (Java and microservices), different processes and a lot of teams with their own priorities.

**Task.** Alaya's capabilities had to be folded into Benevity's platform, and we had to keep shipping new features while doing it.

**Action.** My first month was mostly listening. I mapped the existing architecture before proposing anything and spent time with the platform and infra teams, because every integration would depend on them and I didn't want my first contact to be a request. Once I understood where the seams were, I became the cross-team architecture contact for the Europe-facing product surface, which meant negotiating interfaces and timelines with teams that had no obligation to prioritise us.

**Result.** The core Alaya features were migrated into Benevity's platform, and I contributed to three major cross-team architecture decisions along the way.

**Reflection.** Early on I moved too fast and tried to fix things that weren't actually broken in the new org, which cost me some goodwill. Slowing down and earning trust first made everything after it quicker. In a small squad that depends on pricing, settlement and billing teams, I'd start the same way: understand their roadmaps before asking them for anything.

---

## 4. Setting technical direction without authority (Benevity)

**Likely questions:** "How do you influence engineers who don't report to you?" / "Tell me about mentoring or giving technical direction." / Any Staff-level leadership question.

**Situation.** As a Senior Staff IC at Benevity I had no direct reports, but I wanted two teams that didn't report to me to adopt AI-assisted development practices.

**Task.** Change how engineers actually worked day to day without being anyone's manager and without a mandate from above.

**Action.** I started small, with three engineers who were already curious. We built internal demos that showed concrete time savings on real work, not toy examples, and ran informal lunch-and-learn sessions where people could watch and ask questions. I wrote reusable prompt templates and committed them to a shared repo so nobody had to start from zero, and I wrote up the wins as short, specific stories, like a PR review cycle that went about two hours faster.

**Result.** Within three months, around 70% of engineers on both teams were using AI-assisted review and code generation, and I ended up as the informal AI tooling lead across the org.

**Reflection.** The no-mandate route was slower but it stuck, because the engineers who adopted it on their own terms became the ones defending it. That's how I'd approach technical direction in a small squad too: show, don't decree.

---

## Gap question: "You haven't run Python on Lambda in production. Why should we take the risk?"

A short, honest answer works better than spin. Something like: "It's true that most of my production years are Node and TypeScript. I've worked on AWS throughout and I know event-driven systems, so the concepts behind Lambda, EventBridge and DynamoDB aren't new; the idioms and the Python ecosystem are where I'd ramp. I've switched stacks several times already, from GWT and Java at Sagemcom to Node at Alaya and then into a Java microservices estate at Benevity. The harder part of this job is deciding boundaries and failure modes across pricing, settlement and billing, and that part transfers."

Single-table DynamoDB design is the area to read up on before the technical round, since access-pattern-first modelling is quite different from the PostgreSQL and MongoDB work on the CV.
