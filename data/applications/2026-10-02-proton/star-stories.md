# STAR+R Stories: Proton, Senior Foundation Engineer (Drive)

Drive Foundation owns the core libraries every Drive client depends on, so interviewers will probe four things: how you design shared code that other teams consume, how you handle trade-offs between speed and correctness, how you work with teams that don't report to you, and how fast you ramp up on an unfamiliar stack. Expect the Rust question early. Stories below are picked for that.

---

## 1. Pulling shared modules out of a monolith without a rewrite

**Likely prompts:** "Tell me about a technical trade-off you made." "How do you handle tech debt when the business wants features?" "How would you approach a core library that many clients depend on?"

**Situation.** At Alaya, around four years in, our Node.js monolith was starting to crack under load on a handful of endpoints. The team was split between a full microservices rewrite and leaving things as they were, and our investors wanted new features, not a rewrite.

**Task.** As cofounder and Head of Technologies, it was my call. I needed something I could defend to the engineers and to the board, and that wouldn't stop delivery for a quarter.

**Action.** Rather than argue it out in meetings, I ran a two-week spike where we prototyped both directions and load-tested them. The numbers made the case better than I could have: most of the pain sat in two modules. So I proposed a strangler fig approach, extracting those two behind a clean interface while the rest stayed in the monolith, and I wrote down explicit criteria for when any other module would earn its own extraction. That last part mattered more than I expected, because it stopped the debate from restarting every sprint.

**Result.** The first extracted module shipped in about six weeks, and the busiest endpoints got roughly 40% faster. The remaining monolith stayed stable all the way through the Benevity acquisition. We never needed the big-bang rewrite.

**Reflection.** Convincing people that not rewriting was the right call was harder than the engineering. I'd benchmark earlier next time to shorten the argument. For Drive Foundation the lesson carries over directly: an SDK boundary is a contract, and it's cheaper to draw it around what actually hurts than around what looks clean on a diagram.

---

## 2. Building a platform from a blank page, with tests and CI from the start

**Likely prompts:** "Tell me about something you built from scratch." "How do you set up a testing strategy?" "How do you handle ambiguity?"

**Situation.** In 2016 I co-founded Alaya, an employee purpose and impact platform. We had no product, no customers, and the business side was already talking to enterprise prospects.

**Task.** Architect and build the whole platform, alone at first, then with a small team, fast enough to demo but solid enough that enterprise clients would trust it with their data.

**Action.** I picked a deliberately boring stack, Node.js, React and PostgreSQL, because I wanted to spend our risk on the product and not on the tooling. The first demo-ready version took about three months. After that I grew the platform piece by piece: multi-tenancy, an API layer, impact reporting, postal campaigns. When I hired our first three engineers, I put CI/CD, code review and written architecture docs in place before we had much code to review, since it's far easier to start a habit than to retrofit one.

**Result.** We got to 50+ enterprise clients across Switzerland and France, and Benevity, a Canadian unicorn valued above $1B, acquired us in 2021. The technical due diligence held up, which I took as the real validation of those early calls.

**Reflection.** Two things I'd change. Observability came too late; we added proper APM well after we needed it. And retrofitting multi-tenancy cost more than designing it in would have. A core library has the same trap: whatever you don't design in on day one (versioning, error types, telemetry hooks), every client pays for later.

---

## 3. Joining a much larger engineering org after the acquisition

**Likely prompts:** "Tell me about working across many teams." "How do you get up to speed in an unfamiliar codebase?" "Tell me about a time you had to adapt."

**Situation.** After the acquisition I joined Benevity as a Senior Staff Engineer. The org was about ten times Alaya's size, ran Java microservices rather than our Node.js stack, and had its own processes and culture.

**Task.** Bring Alaya's capabilities into Benevity's platform while still shipping new features, without losing the speed we'd had as a startup.

**Action.** My first instinct was to start fixing things, and I did that for a few weeks before realising some of what I wanted to fix wasn't broken. So I backed off and spent most of the first month mapping how the existing architecture actually worked, and getting to know the platform and infra teams before I pushed any opinions. Once I understood the constraints, proposals landed much better. Over time I became the architecture liaison for the Europe-facing product surface, which meant sitting between several teams whose priorities didn't always line up.

**Result.** We migrated Alaya's core features into the Benevity platform, and I contributed to three major cross-team architecture decisions.

**Reflection.** Listening first made me more effective, not slower. It's also the closest thing I have to the Rust question: I moved into a Java-heavy codebase I hadn't worked in for years and was productive in it. I'd approach Rust the same way, reading the existing core code and reviews before writing much of my own.

---

## 4. Changing how engineers work without being their manager

**Likely prompts:** "How do you influence without authority?" "Tell me about a code review culture you shaped." "How do you get other teams to adopt something?"

**Situation.** At Benevity I was an IC with no direct reports, but I wanted two teams that didn't report to me to adopt AI-assisted development and review practices.

**Task.** Change daily habits across both teams without a mandate.

**Action.** I started with three engineers who were already curious and built small internal demos showing concrete time savings on real work. From there it was informal lunch-and-learn sessions, no slides about strategy, just live demos. I put reusable prompt templates in a shared repo so people didn't have to start from zero, and I wrote up specific wins, like a PR review cycle that went about two hours faster.

**Result.** Within about three months, roughly 70% of engineers on both teams were using AI-assisted code review and generation, and I ended up as the informal AI tooling lead across the org.

**Reflection.** It was slower than a top-down rollout but much stickier, because the people who adopted it on their own terms became its advocates. Foundation teams live with the same dynamic. Client teams adopt a shared SDK because it makes their week easier, not because someone told them to.

---

## Prep note: the Rust question

The posting asks for 5+ years of Rust and Magino doesn't have that. Don't invent a story. When it comes up, answer it straight:

"I haven't shipped Rust in production. My depth is TypeScript, Node.js and Java, and C# is close enough to Java that I'd contribute there from the first weeks. On Rust, I'd rather show you how I'd ramp than claim experience I don't have."

Then point to story 3 as evidence of ramping into an unfamiliar stack. Before the interview, spend real time on ownership, lifetimes and async in Rust, and read through Proton's public Drive SDK repositories on GitHub (ProtonDriveApps) so you can talk concretely about how the C# and TypeScript SDKs are structured.
