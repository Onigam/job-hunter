# STAR+R Stories: Technical Director, Applied AI (undisclosed game studio, via Jobgether)

These are picked for what this panel will probe: getting AI tools adopted by people who didn't ask for them, taking R&D into production, making calls under uncertainty, and working across very different disciplines (here, engineers and artists). All facts come from `profile/star-bank.md`. The obvious weak spot is no game-dev background, so there's a prepared answer for that at the end. Rehearse out loud, and don't add numbers that aren't in the bank.

---

## 1. Getting AI tooling adopted without a mandate

**Likely questions:** "How would you drive AI adoption across the studio?" / "Tell me about influencing people who don't report to you." / "How do you set standards people actually follow?"

**Situation.** At Benevity I was a Senior Staff IC with no direct reports. I wanted two teams that didn't report to me to start using AI-assisted code review and generation, and nobody had asked for it.

**Task.** The goal was to change daily habits on both teams, in a way that would still hold once I stopped pushing.

**Action.** I started with three engineers who were already curious and built demos on our own code, because a saving shown on a vendor's toy example convinces nobody. Prompts that worked went into a shared repo as templates, so people could reuse them and improve them through normal PRs. On top of that came informal lunch-and-learn sessions, with no attendance expected. Whenever a template saved real time, like a PR review cycle that came in about two hours shorter, I wrote it up with the before and after.

**Result.** Within three months about 70% of engineers on both teams were using AI-assisted review and generation, and I became the informal AI tooling lead across the org.

**Reflection.** The no-mandate route was slower but stickier, since the people who adopted on their own terms became the advocates. For a studio I'd expect the same pattern to matter even more, because artists have every reason to distrust tools that touch their work. I'd find the two or three curious artists first, build for their real shots or assets, and let them carry it. What I'd do better is measure quality as well as adoption from day one.

---

## 2. Taking an idea from spike to production under pressure

**Likely questions:** "Tell me about taking an R&D project into production." / "How do you decide a prototype is worth shipping?" / "Describe a trade-off you made under delivery pressure."

**Situation.** At Alaya our monolith was starting to crack on the busiest paths. Half the team wanted a full microservices rewrite, the other half a modular monolith, and investors wanted features rather than rewrites.

**Task.** I needed a decision we could defend, one that fixed the scaling problem without stopping delivery.

**Action.** Rather than argue it out, I ran a two-week spike that prototyped both approaches and load-tested them. I took the trade-offs to leadership and the investors with numbers instead of opinions. The plan we went with was a strangler-fig migration: pull out the two highest-traffic modules first, leave everything else in the monolith, and write down clear criteria for when another module would earn its own extraction.

**Result.** The first extracted module shipped in six weeks, and the busiest endpoints got roughly 40% faster. The rest of the monolith stayed stable all the way through the acquisition, and we never needed a big-bang rewrite.

**Reflection.** The hardest part was persuading people that not rewriting everything was the right call, and the data did most of that work. I'd benchmark earlier next time to shorten the debate. The same discipline applies to AI R&D, I think: a time-boxed spike, an honest comparison, and a written bar for what "ready for production" means before anyone falls in love with the demo.

---

## 3. Building Alaya from a blank page to acquisition

**Likely questions:** "Tell me about something you owned end to end." / "How do you handle ambiguity?" / "What does technical leadership mean to you?"

**Situation.** In 2016 I co-founded Alaya, an employee purpose and impact platform. There was no product, no customers and no team.

**Task.** As Head of Technologies I had to architect and build the whole platform, first alone and then with a team, while the business side was signing its first enterprise clients.

**Action.** I picked a deliberately pragmatic stack, Node.js, React and PostgreSQL, that could grow without being over-engineered, and got the core features to a first demo in about three months. From there the product expanded into a multi-tenant architecture, an API layer, impact reporting and postal campaigns. Once there were paying clients I hired and onboarded our first three engineers, and spent as much time on CI/CD, code review habits and architecture docs as on code, so the team could own things without me as the bottleneck.

**Result.** The platform reached 50+ enterprise clients across Switzerland and France, and Benevity, a Canadian company valued at over $1B, acquired Alaya in 2021.

**Reflection.** I'd have invested in observability much earlier, since proper APM came late. I also underestimated what retrofitting multi-tenancy would cost; I'd design for it from day zero now. For this role the lesson is similar: decide early how you'll see whether a tool is working in production, because adding that later is always more painful.

---

## 4. Joining a much larger org and listening before changing things

**Likely questions:** "How do you work with people whose craft is different from yours?" / "Tell me about adapting to a new culture." / "How would you approach your first 90 days here?"

**Situation.** After the acquisition I joined Benevity as a Senior Staff Engineer. The organisation was about ten times the size of Alaya, with a different codebase (Java and microservices), different processes and a different culture.

**Task.** I had to bring Alaya's capabilities into Benevity's platform and keep building new features, without losing the delivery speed we'd had as a startup.

**Action.** My first month went into mapping the existing architecture before proposing any changes. I built relationships with the platform and infrastructure teams before pushing technical opinions, and over time became the cross-team architecture contact for the Europe-facing product. Alongside that I pushed AI-assisted workflows, Copilot and shared prompt patterns, across engineering.

**Result.** Alaya's core features were migrated into Benevity's platform. I contributed to three major cross-team architecture decisions and became the go-to person for AI tooling on two teams.

**Reflection.** At first I moved too fast, trying to fix things that weren't broken. Slowing down and listening made me far more effective. In a studio I'd go further: sit with artists and technical artists in their actual tools before proposing anything, because their pipeline constraints won't be obvious from an engineer's seat.

---

## Prepared answer: "You've never worked in games. Why you?"

Don't dodge it. Something like: "That's true, and I won't pretend otherwise. I haven't shipped a game, and I haven't built inside Unreal, Houdini or Maya. What I bring is the other half of the job description: taking AI from prototype into tools people rely on, getting adoption without forcing it, and working in Python and TypeScript every day with LLM APIs and multi-agent setups. The DCC side I'd learn by sitting next to your technical artists. I'd also expect to lean on them for the shader and rendering judgement, and I'd rather be honest about that now than discover it in month three."

Before the interview, spend a few evenings on the gap: install Blender and try one of the open-source Blender MCP servers with Claude, then read the Houdini Python (hou) docs and SideFX's material on PDG/TOPs. Being able to say "I tried it, and here's where it broke" is worth more than any claim.
