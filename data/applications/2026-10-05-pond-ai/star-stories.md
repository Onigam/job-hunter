# STAR+R Stories: Pond AI, Head of Engineering (founding-level)

Pond is asking for someone who has been early at a startup, can execute under pressure, and can build a platform that strangers (builders) and non-technical customers both depend on. These four stories cover the questions most likely to come up in a founder-led loop.

---

## 1. Building Alaya from zero to acquisition

**Likely question:** "Tell me about something you built from scratch." / "Why should we trust you as the first engineering leader?"

**Situation.** In 2016 I co-founded Alaya, an employee purpose and engagement platform. There was no product, no customers and no team; the commercial side was already talking to enterprise prospects, so the clock started the day we incorporated.

**Task.** My job was to design and build the whole platform, first on my own and then with a small team, while the business was trying to land its first enterprise clients.

**Action.** I went with a stack I knew could carry us without heroics, Node.js, React and PostgreSQL, and put everything into getting a demoable product out in about three months. Once we had paying clients the work shifted to the things enterprises actually ask about: a multi-tenant architecture, an API layer, impact reporting, and later postal campaigns. Along the way I hired and onboarded our first three engineers, and set up CI/CD, code review and architecture docs so the team didn't depend on my memory.

**Result.** The platform went to production with 50+ enterprise clients across Switzerland and France, and in 2021 Alaya was acquired by Benevity, a Canadian unicorn valued above $1B. Their technical due diligence went through the platform we'd built from day one.

**Reflection.** Two things I'd change. Observability came too late; we added proper APM well after we needed it. And multi-tenancy was a retrofit, which cost far more than designing for it upfront. At Pond, with builders and customers sharing the same platform, I'd treat tenant isolation and audit logging as day-zero work, not a later milestone.

---

## 2. A hard architecture call under investor pressure

**Likely question:** "Tell me about a technical trade-off." / "How do you handle tech debt when the business wants features?"

**Situation.** Alaya's monolith was starting to crack under load. Half the team wanted a full microservices rewrite, the other half wanted to leave it alone, and our investors wanted new features, not a rewrite.

**Task.** I needed a decision we could defend to both the engineers and the board, one that fixed scaling without stopping delivery.

**Action.** Rather than argue it out, I ran a two-week spike that prototyped both approaches and load-tested them. I took the numbers, not opinions, to the leadership team and investors. What I proposed was a strangler fig migration: pull out the two highest-traffic modules first, keep everything else in the monolith, and write down explicit criteria for when any further module would earn its own service.

**Result.** The first extracted module shipped in about six weeks, and the busiest endpoints got roughly 40% faster. The rest of the monolith stayed stable all the way through the acquisition, and we never needed a big-bang rewrite.

**Reflection.** The hard part was social, not technical. Getting people comfortable with "we're not rewriting everything" took longer than the spike. Next time I'd benchmark earlier so the debate is shorter. That instinct matters at a company like Pond, where the temptation to rebuild the agent runtime every quarter will be strong.

---

## 3. Leading without formal authority

**Likely question:** "How do you get engineers to change how they work?" / "Tell me about leading people who don't report to you."

**Situation.** At Benevity I was a Senior Staff IC with no direct reports. I wanted two teams that didn't report to me to adopt AI-assisted development, and nobody had asked them to.

**Task.** Change daily habits across both teams without a manager's mandate.

**Action.** I started small, with three engineers who were already curious. We built internal demos that showed concrete time saved on real work, then ran informal lunch-and-learns with no attendance expectations. I wrote reusable prompt templates, put them in a shared repo, and wrote up specific wins, like a PR review cycle that dropped by about two hours, so people had something they could point at.

**Result.** Within roughly three months, about 70% of engineers on both teams were using AI-assisted review and generation, and I'd become the informal AI tooling lead for the org.

**Reflection.** Going without a mandate was slower, but it stuck, because people who chose the tools became the ones selling them to their teammates. As a founding Head of Engineering I'd have the authority to mandate things, and I'd still mostly try not to.

---

## 4. Joining a much bigger org after the acquisition

**Likely question:** "Tell me about a time you had to adapt." / "How do you work with people who see things differently?"

**Situation.** After the acquisition I joined Benevity as Senior Staff Engineer. The engineering org was about ten times Alaya's size, with a Java microservices codebase and processes that looked nothing like ours.

**Task.** Fold Alaya's capabilities into Benevity's platform and keep shipping new features without losing the speed we'd had as a startup.

**Action.** I spent the first month mostly reading code and mapping the existing architecture before suggesting anything. I made a point of getting to know the platform and infra teams before pushing opinions on them. From there I became the architecture liaison for the Europe-facing product surface, and I pushed AI-augmented workflows across the teams I worked with.

**Result.** The core Alaya features were migrated into Benevity's platform. I contributed to three major cross-team architecture decisions, and became the go-to person for AI tooling across two engineering teams.

**Reflection.** Early on I moved too fast trying to fix things that weren't actually broken. Slowing down and listening made me far more effective. Pond will hire fast, and I'd want the same patience when a strong senior engineer joins and disagrees with how I set things up.

---

## Honest gaps to address if asked

Payments: I haven't built payment infrastructure. If it comes up, I'd say so plainly and point to the multi-tenant billing-adjacent work at Alaya (enterprise accounts, reporting) as the closest thing, then talk about how I'd hire or partner for it (Stripe Connect is the obvious starting point for a builder marketplace).

MCP in production: my agent work so far has been outside my day job. Have one concrete multi-agent workflow ready to walk through end to end, including where it fails and how I'd sandbox tool calls.
