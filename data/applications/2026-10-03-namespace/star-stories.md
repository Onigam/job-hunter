# STAR+R Stories: Namespace, Product Engineer (Zurich, hybrid)

Namespace is a small, execution-heavy team selling developer infrastructure (GitHub Actions runners, remote Docker builders, Bazel/Turbo/Nix caching, Devboxes for engineers and AI agents). The posting stresses four things: owning features end to end, talking directly to users, turning complex infrastructure into something intuitive, and shipping fast through ambiguity. These stories are picked to hit those, plus the question they'll almost certainly ask about why a Senior Staff engineer wants a Product Engineer title.

---

## 1. Shipping a product from a blank page, close to the customer

**Likely prompts:** "Tell me about something you owned end to end." / "How do you work with users?" / "How do you handle ambiguity?"

**Situation.** In 2016 I co-founded Alaya, an employee engagement and purpose platform. There was no product, no customers and no code, just a business co-founder who was already talking to large companies about a demo.

**Task.** My job was to build the whole thing, alone at first, and to get something in front of real buyers before the conversations went cold.

**Action.** I picked a stack I knew could carry us for years without slowing us down early: Node.js, React and PostgreSQL. The first demo-ready version took about three months, and I spent a lot of that time in client calls rather than only at my desk, because the fastest way to cut scope was to hear what people actually tried to do with it. After that we grew in steps that followed customer demand rather than a roadmap deck. Multi-tenancy, an API layer, impact reporting and postal campaigns all came in that order of need. Once there was traction I hired and onboarded the first three engineers and put CI/CD, code review and architecture docs in place so the speed didn't depend on me.

**Result.** We reached production with 50+ enterprise clients across Switzerland and France, and Benevity, a Canadian company valued at over $1B, acquired Alaya in 2021.

**Reflection.** I'd add proper observability much earlier; we got real APM late and spent too long guessing at production issues. I also underestimated how expensive it is to retrofit multi-tenancy. For Namespace that lesson maps directly: when the user's whole experience is "my build got faster," you need to see what's happening on every run from the start.

---

## 2. Getting engineers to adopt a new tool without a mandate

**Likely prompts:** "How do you drive adoption?" / "Tell me about influencing without authority." / "How do you know a developer tool is working?"

**Situation.** At Benevity I was a Senior Staff IC with no direct reports. I wanted two engineering teams that didn't report to me to adopt AI-assisted development, mainly code review and generation.

**Task.** Change how people worked day to day, with no authority to tell them to, and without it turning into a tool nobody opened after the first week.

**Action.** Rather than announcing anything, I started with three engineers who were already curious. I built internal tooling demos that showed concrete time savings on the kind of work they did every day. Then came informal lunch-and-learn sessions with no attendance pressure, and a shared repo of prompt templates people could copy and adapt. Whenever someone saved real time, like a PR review cycle that took about two hours less than usual, I wrote it down and shared the concrete example instead of a general claim.

**Result.** After about three months, roughly 70% of engineers on both teams were using AI-assisted review and generation, and I ended up as the informal AI tooling lead across the org.

**Reflection.** The no-mandate approach was slower, but it stuck, because the people who adopted it on their own terms became its advocates. That's basically Namespace's go-to-market in miniature: change one line, see it work on your own build in five minutes, then tell your team. I've learned that the first five minutes matter more than the feature list.

---

## 3. Choosing the boring, fast path on a performance problem

**Likely prompts:** "Tell me about a technical trade-off." / "How do you balance speed and quality?" / "Tell me about a performance problem you solved."

**Situation.** Alaya's monolith was starting to crack under load. Half the team wanted a full rewrite into microservices, while our investors wanted new features, not a rewrite.

**Task.** I had to make a call we could defend, one that fixed the scaling problem without freezing product work for months.

**Action.** We ran a two-week spike comparing a full microservices split with a more modular monolith, with prototype load tests for both. I took the results to the CTO and investors as numbers rather than opinions. The plan we went with was a strangler-fig migration: pull out the two highest-traffic modules first, leave everything else where it was, and agree up front on the criteria that would justify extracting anything more.

**Result.** The first extracted module shipped in about six weeks and the busiest endpoints got roughly 40% faster. The remaining monolith stayed stable all the way through the acquisition, and we never needed a big-bang rewrite.

**Reflection.** The hardest part wasn't technical. It was convincing people that not rewriting everything was the right answer. Data settled it, and next time I'd benchmark earlier to shorten the debate. It's also how I'd approach performance work at Namespace: measure where the time really goes, fix the hot path, and keep shipping.

---

## 4. Joining a much bigger organization and listening first

**Likely prompts:** "Tell me about a time you were wrong." / "How do you work across teams?" / "How do you handle a new codebase?"

**Situation.** After the acquisition in 2021 I joined Benevity as a Senior Staff Engineer, in an engineering org roughly ten times the size of Alaya, with a Java microservices codebase and processes I didn't know.

**Task.** Get Alaya's capabilities into Benevity's platform and keep building new features, without losing the speed we'd had as a startup.

**Action.** My first instinct was to start fixing things that looked wrong, some of which weren't actually broken. I changed approach. I spent about a month mapping the existing architecture before proposing changes, and I put time into relationships with the platform and infrastructure teams before asking them for anything. Over time I became the cross-team architecture contact for the Europe-facing part of the product.

**Result.** We migrated Alaya's core features into the Benevity platform, I contributed to three major cross-team architecture decisions, and that trust is what later made the AI tooling work possible.

**Reflection.** Moving fast is a strength until you're moving fast in someone else's system. Asking questions first made me more effective, not less. With Namespace's users I'd apply the same idea: understand their CI setup and why it's that way before telling them how to change it.

---

## Likely question: "You've been Senior Staff. Why a Product Engineer role?"

Not a STAR story, but prepare it, because they will ask. Something like:

"Titles at a company of a few thousand people and titles at a small team of experts mean different things. At Benevity a lot of my value was in architecture reviews and getting teams aligned. What I enjoyed most in my career, though, was the Alaya years, writing the product, talking to customers and shipping the next thing that week. Namespace's posting reads like that job. I'd rather own a feature from the customer call to production than draw diagrams for other people to build. And if the team grows, I've done hiring and onboarding before, so that's there when it's useful."

Be ready for the follow-up on Go. Honest answer: TypeScript, Node and Python are your production languages, Java you know well from Benevity, and Go would be new in production. Mention you've picked up stacks quickly across 17 years (GWT at Sagemcom, hybrid desktop apps at Castr, Node and React at Alaya, Java at Benevity), and that the product-facing parts of Namespace's stack, the dashboard and integrations, are likely closer to TypeScript and React anyway. Ask them which language the product team ships in day to day.
