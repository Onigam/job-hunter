# STAR+R Stories: CTO, BeReal (Voodoo)

Picked for what a BeReal CTO panel will probe hardest: legacy transformation (the Node.js to Go move), raising the technical bar across a team, practical AI in engineering, and joining a product after an acquisition. A short note at the end covers the questions where there's no real story to tell, so they're answered honestly rather than improvised.

---

## 1. Migrating off a legacy core without stopping the product

**Likely questions:** "Walk me through a major migration you led." / "How would you approach our Node.js to Go transition?" / "Rewrite or refactor?"

**Situation.** At Alaya, around a few years in, our monolith was showing cracks on the endpoints that got the most traffic. The team was split between a full microservices rewrite and keeping the monolith, and our investors cared about new features, not a rewrite.

**Task.** I had to make a call we could defend, one that fixed the scaling problem without freezing delivery for months.

**Action.** Rather than argue it out in meetings, I ran a two-week spike and built prototypes of both approaches, then load tested them. That gave me numbers to bring to leadership and investors instead of opinions. What I proposed was a strangler-fig migration: pull out the two highest-traffic modules first, leave everything else in the monolith, and write down clear criteria for when any further module would earn its own service. I led the first extraction myself so the pattern was set by someone who'd live with it.

**Result.** The first extracted module shipped in six weeks, and the busiest endpoints got roughly 40% faster. What was left of the monolith stayed stable all the way through the Benevity acquisition, and we never needed the big-bang rewrite.

**Reflection.** Most of the effort went into convincing people that not rewriting everything was the right answer. Data settled it, so next time I'd benchmark earlier and shorten the debate. For BeReal, the same logic applies to Go: move the services that hurt most during the notification spike first, and let the rest earn their migration.

---

## 2. Building a platform and an engineering culture from zero

**Likely questions:** "How do you set technical standards?" / "Tell me about building a team." / "What does good engineering look like to you?"

**Situation.** In 2016 I cofounded Alaya, an employee purpose and impact platform. There was no product, no customers and no team, just a blank page and a business side trying to sign its first enterprise clients.

**Task.** My job was to design and build the whole platform, alone to start with, and then turn it into something a team could work on without me being the bottleneck.

**Action.** I picked a deliberately boring stack, Node.js, React and PostgreSQL, because it could scale far enough without me over-engineering it on day one. We got to a first demo in about three months. From there the platform grew in steps: multi-tenancy, an API layer, impact reporting, postal campaigns. When I hired the first three engineers, I put the basics in place early, CI/CD, a real code review culture and written architecture docs, so standards came from how we worked rather than from me reviewing every line.

**Result.** The platform went into production with 50+ enterprise clients across Switzerland and France, and Benevity, a Canadian unicorn valued above $1B, acquired Alaya in 2021. The technical diligence held up, which I took as validation of the early choices.

**Reflection.** I'd have invested in observability much sooner; proper APM came late and we flew blind on a few incidents because of it. I also underestimated how expensive it is to retrofit multi-tenancy. At BeReal's scale, I'd check early where observability gaps sit, because under a synchronized spike you can't debug what you can't see.

---

## 3. Changing how engineers work, without a mandate

**Likely questions:** "How would you shape AI adoption in engineering?" / "How do you influence without authority?" / "Tell me about driving a change people resisted."

**Situation.** At Benevity I was a Senior Staff IC with no direct reports. I wanted two engineering teams, neither of which reported to me, to start using AI-assisted development in their daily work.

**Task.** The goal was real adoption, not a slide deck, and I had no authority to require it.

**Action.** I started small, with three engineers who were already curious. Together we built internal demos that showed time saved on actual tasks, not toy examples. Then came informal lunch-and-learn sessions, again no mandate, just showing what worked. I wrote reusable prompt templates and committed them to a shared repo so anyone could pick them up, and I documented concrete wins, like cutting about two hours out of a single PR review cycle, so the case was made with evidence.

**Result.** Within three months, about 70% of the engineers on both teams were using AI-assisted code review and generation. I ended up as the informal AI tooling lead across the org.

**Reflection.** Going without a mandate was slower, but it stuck. The engineers who adopted it on their own terms became its advocates, which no top-down decree would have produced. As CTO I'd have the authority to mandate it, and I still wouldn't lead with that; I'd pair clear expectations with the same bottom-up proof.

---

## 4. Joining an existing organization after an acquisition

**Likely questions:** "How would you approach your first 90 days?" / "Tell me about navigating a big change." / "How do you earn trust with a senior team you didn't hire?"

**Situation.** After Benevity acquired Alaya in 2021, I joined a team about ten times bigger than ours, with a different culture, a different codebase built on Java microservices, and different processes.

**Task.** I needed to bring Alaya's capabilities into Benevity's platform while still shipping new features, without losing the speed we'd had as a startup.

**Action.** For the first month I mostly mapped the existing architecture before proposing anything. I built relationships with the platform and infrastructure teams before pushing technical opinions, which turned out to matter more than any single design decision. Over time I became the cross-team architecture liaison for the Europe-facing product surface.

**Result.** Core Alaya features were migrated into Benevity's platform. I contributed to three major cross-team architecture decisions and became the go-to person on AI tooling across two teams.

**Reflection.** Early on I moved too fast, trying to fix things that weren't actually broken. Slowing down and listening first made me far more effective. BeReal is in a similar spot, a product now inside Voodoo with its own history and a senior team that knows where the bodies are buried, so my first weeks would be spent listening and reading the codebase before changing anything.

---

## Prep note: questions with no direct story

These will come up. Answer them honestly instead of stretching a story to fit.

**"What's your native mobile experience?"** My mobile background is hybrid and desktop apps at Castr and GWT-based set-top box software at Sagemcom, not years of Swift or Kotlin. The honest pitch is that I'd rely on BeReal's senior iOS and Android engineers for platform depth, and my contribution is the architecture across mobile, backend and infra: API contracts, release and rollout discipline, and deciding what the client should do versus the server.

**"Have you run consumer scale with synchronized traffic spikes?"** Not at 40M+ monthly users. Alaya and Benevity were B2B, with peaks driven by enterprise campaigns. Talk about how I'd reason about it (load testing the spike shape, staggered notification delivery, graceful degradation, caching at the edge with Fastly) and be clear it's reasoning, not a war story.

**"GCP, Go, Spanner?"** My cloud time is AWS, and my backend work is mostly Node.js, TypeScript and Java. The concepts carry over (Kubernetes, CI/CD, distributed data), but I'd say plainly that I'd need to get fluent in Go and Spanner's trade-offs quickly, and ask how far the Go migration has already gone.
