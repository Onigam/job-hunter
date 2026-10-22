# STAR+R Stories: Senior Fullstack Developer, Claude Code Expert (undisclosed coaching marketplace via Jobgether)

What this role will probe: getting an existing product over the launch line and keeping it stable afterwards, setting engineering practice (tests, clean architecture, deploy process) in a small team, real day-to-day use of Claude Code, and how fast you pick up a stack you haven't used (Firebase, GCP, SvelteKit, Stripe, Twilio). Expect "how do you use Claude Code in practice?" early, probably with a follow-up on how you keep AI-written code reviewable.

A note on honesty: the profile shows AWS, React and Vue, not Firebase, GCP or Svelte, and there's no Stripe or Twilio work on record. Don't stretch the stories to imply otherwise. Name the gap once, then point to the closest real experience.

---

## Story 1: Taking Alaya from a blank page to production

**Likely questions:** "Tell me about a product you took to launch." / "How do you decide what's good enough to ship?" / "How do you handle ambiguity?"

**Situation.** In 2016 I co-founded Alaya, a purpose and impact platform for employee engagement. There was no product and no customers, and the business side was already talking to enterprise prospects who wanted to see something real.

**Task.** As Head of Technologies I had to architect and build the whole platform, alone at first, and get it in front of clients without painting us into a corner we'd pay for later.

**Action.** I picked a stack I knew would carry us without heroics, Node.js, React and PostgreSQL, and got the core features to a first demo in about three months. Once real clients were on it, the work shifted from building features to keeping things predictable: an API layer, multi-tenant architecture, impact reporting, postal campaigns. When I hired the first three engineers I set up CI/CD, code review habits and architecture docs, mostly so I wasn't the only person who could deploy safely.

**Result.** The platform went to production and grew to 50+ enterprise clients across Switzerland and France. Benevity, a Canadian unicorn valued above $1B, acquired Alaya in 2021, which was about as clear a check on the early technical calls as you get.

**Reflection.** I added proper observability too late; we were debugging production with logs for longer than I'd like to admit. I'd also design multi-tenancy in from day one instead of retrofitting it. For a marketplace launch here, monitoring on the payment and notification paths would be in place before the first real booking, not after the first incident.

---

## Story 2: Fixing performance without stopping delivery

**Likely questions:** "Tell me about a technical trade-off under pressure." / "How do you balance stabilisation work with new features?" / "How do you handle technical debt?"

**Situation.** At Alaya our monolith started cracking on a few hot endpoints just as investors wanted new features. Half the team wanted a full microservices rewrite.

**Task.** The call was mine, and it had to hold up technically while being defensible to people who didn't care about architecture at all.

**Action.** Instead of arguing in meetings, I ran a two-week spike with prototypes of both options and load tests on the endpoints that were actually hurting. Most of the pain turned out to sit in two modules. So I proposed a strangler fig: pull those two out behind a stable interface, leave the rest alone, and write down clear criteria for when the next module would earn its extraction. The investors and our CTO saw numbers, not opinions.

**Result.** The first extracted module shipped in about six weeks, the busiest endpoints got roughly 40% faster, and feature work never stopped. The rest of the monolith stayed stable through the acquisition.

**Reflection.** The hard part was social. Convincing people that not rewriting was the ambitious choice took longer than the engineering. Post-launch here, I'd apply the same rule: measure first, fix the two things that hurt, and resist the urge to rebuild a product that's only just gone live.

---

## Story 3: Getting engineers to adopt AI-assisted development without a mandate

**Likely questions:** "How do you use AI tools in your workflow?" / "How would you bring the team along on Claude Code?" / "Tell me about influencing without authority."

**Situation.** At Benevity I was a Senior Staff IC with no direct reports. I wanted two teams to work with AI-assisted development, and neither reported to me.

**Task.** Change how people actually worked, not just get them to install a tool and forget it.

**Action.** I started with three engineers who were already curious and built demos on real tickets so the time saved was obvious rather than promised. Lunch-and-learns were optional. The prompt templates and patterns that worked went into a shared repo, which meant the good habits could spread without me in the room. When someone saved a couple of hours on a PR review cycle, I wrote it down and shared it, because a colleague's story convinces people faster than mine did.

**Result.** Within about three months, roughly 70% of the engineers on both teams were using AI-assisted review and generation, and I ended up as the informal AI tooling lead across the org.

**Reflection.** The no-mandate route was slower but it stuck, because people who chose it defended it. The tooling then was GitHub Copilot and prompt patterns; my own work since has moved to Claude Code and multi-agent workflows, so be precise about which era a detail comes from if they dig in.

---

## Story 4: Joining a codebase someone else built

**Likely questions:** "How do you get productive on an existing codebase?" / "Tell me about working with an established team." / "What would your first 30 days look like?"

**Situation.** After the acquisition I joined Benevity as Senior Staff Engineer: a team about ten times larger than Alaya's, a Java and microservices codebase I hadn't written, and processes nobody had asked my opinion on.

**Task.** Integrate Alaya's capabilities into their platform without losing the velocity we'd had, while earning enough trust that my architecture opinions would be heard.

**Action.** I spent the first month mapping the existing architecture before proposing anything. I built relationships with the platform and infra teams first, and only then started pushing on design. I did slip early on, trying to fix things that weren't broken from where they sat, and I backed off once I saw it.

**Result.** Core Alaya features made it into Benevity's platform, I contributed to three major cross-team architecture decisions, and I became the architecture liaison for the Europe-facing product.

**Reflection.** Listening first made me faster, not slower. The team here has already built successful platforms and has a product near launch, so I'd treat their decisions as reasoned until proven otherwise, and use Claude Code to read the codebase quickly rather than to rewrite it.

---

## Story 5 (to complete before the interview): A Claude Code workflow you built and run

**Likely questions:** "Show us how you work with Claude Code." / "How do you keep AI-written code reviewable and tested?" / "Where does Claude Code go wrong for you?"

This is the question the role is built around, and the star bank doesn't have a story for it yet. Prepare one from your own work, with real details only. The job-hunter pipeline is a good candidate: Claude Code agents defined in `.claude/agents/` that search, score offers against a profile, write daily reports and draft application packages, committed daily from CI. OpenClaw workflows and Givernance are alternatives.

Structure it in the same prose form. Situation: what you needed and why manual wasn't viable. Task: what "working" meant. Action: how you split the work across agents, how you give them context (CLAUDE.md, agent files, permissions in settings.json), and how you check the output before trusting it. Result: only numbers you can stand behind. Reflection: one concrete failure mode you hit and what you changed. A frank answer to "where does it go wrong" will land better than a polished one with this audience.
