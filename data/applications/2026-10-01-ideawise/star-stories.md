# STAR+R Stories: Ideawise, Group CTO

The posting is unusually explicit about what it wants evidence of: shipped work, authority across orgs you didn't manage, a shared platform adopted by teams that had alternatives, production AI with real users, and leaders you hired who stayed. The stories below map to those, and the prep notes at the end cover the two areas where my record is thinner.

---

## 1. Holding technical authority over teams I didn't manage

**Likely question:** "Tell me about a time you held technical authority across an organisation you didn't directly manage."

**Situation.** After Benevity acquired Alaya, I joined as a Senior Staff Engineer. No direct reports, a codebase in Java and microservices that I hadn't written, and two engineering teams that were doing fine without me and had no reason to change how they worked.

**Task.** I wanted those teams on AI-assisted development, code review and generation in particular, and I had no mandate to make it happen. Nobody was going to issue a decree on my behalf, and honestly I didn't want one.

**Action.** I started with three engineers who were already curious and built small internal demos around their actual pull requests rather than toy examples. Once those worked, I ran informal lunch sessions where the early adopters showed their own results, which landed far better than anything I could have said. I also wrote reusable prompt templates and committed them to a shared repo so the practice didn't live in my head. When someone saved a couple of hours on a review cycle, I wrote it down and shared it, because a concrete anecdote moved people more than a slide.

**Result.** Within about three months, roughly 70% of the engineers on both teams were using AI-assisted review and generation, and I'd become the informal AI tooling lead across the org.

**Reflection.** It was slower than a top-down rollout would have been, and I was impatient about that at the time. But the engineers who adopted it on their own terms became the ones defending it in rooms I wasn't in. For a Group CTO role where venture CTOs keep their own authority, I think that's the model: set the standard, make the default path the easiest one, and let adoption be visible.

---

## 2. Building a platform from a blank page to acquisition

**Likely question:** "Show us something you shipped." / "How would you build the platform new ventures inherit on day one?"

**Situation.** In 2016 I co-founded Alaya, an employee purpose and engagement platform. There was no product, no customers and no team, just a thesis and a business side that needed something to sell.

**Task.** Architect and build the whole platform, first alone and then with a small team, while the company was signing its first enterprise clients.

**Action.** I picked a deliberately boring stack, Node.js, React and PostgreSQL, because I needed it to scale without paying an over-engineering tax up front. The core was demo-ready in about three months. From there we grew it in layers: an API layer, impact reporting, postal campaigns and eventually multi-tenancy. When I hired the first three engineers, I set up CI/CD, a code review culture and architecture docs early, mostly so the decisions I'd made alone could be challenged by people who hadn't been in the room.

**Result.** The platform went into production with 50+ enterprise clients across Switzerland and France, and Benevity, a Canadian unicorn valued above $1B, acquired Alaya in 2021. Their technical due diligence was, in effect, an external audit of five years of decisions.

**Reflection.** Two things I'd change. Observability came too late; we added proper APM well after we needed it. And retrofitting multi-tenancy was expensive. For Ideawise that maps directly onto the day-one platform question: tenancy, observability and guardrails are the pieces a venture can't easily bolt on later, so they belong in the shared layer from the start.

---

## 3. A hard architecture call under delivery pressure

**Likely question:** "Tell me about a build-vs-buy or rewrite decision you owned." / "How do you handle tech debt when the business wants features?"

**Situation.** At Alaya, the monolith was starting to crack under load. The team was split between a full microservices rewrite and staying put, and investors wanted features, not a rewrite.

**Task.** Make a decision I could defend to engineers and investors alike, one that protected long-term scalability without freezing delivery.

**Action.** I ran a two-week spike that prototyped both approaches and load-tested them, so the conversation could be about numbers rather than taste. Then I took the trade-offs to the leadership team and investors with those metrics. What I proposed was a strangler fig: pull out the two highest-traffic modules first, leave everything else in the monolith, and write down explicit criteria for when any further module would earn extraction.

**Result.** The first extracted module shipped in about six weeks, and the busiest endpoints got roughly 40% faster. The rest of the monolith stayed stable all the way through the acquisition, and we never needed a big-bang rewrite.

**Reflection.** The hardest part wasn't technical, it was persuading people that not rewriting everything was the ambitious choice. Data settled it, and I'd now benchmark earlier to cut the debate short. The written extraction criteria turned out to be the most useful artifact, because they made later decisions boring. That's what I'd want for venture CTOs too: clear rules for when to use the shared platform and when to diverge.

---

## 4. Joining a much bigger org and integrating without breaking velocity

**Likely question:** "Tell me about consolidating systems across teams." / "How do you come into an organisation that already has its own way of doing things?"

**Situation.** Post-acquisition, I went from a small startup team to an engineering org roughly ten times bigger, with a different stack, different processes and a different culture.

**Task.** Get Alaya's capabilities into Benevity's platform while still shipping new features, and without losing the speed we'd had as a startup.

**Action.** I spent my first month mapping the existing architecture before proposing anything. I built relationships with the platform and infra teams before pushing opinions, which in hindsight was the single most important thing I did. Over time I became the architecture liaison for the Europe-facing product surface, which put me in the middle of cross-team decisions.

**Result.** We migrated Alaya's core features into Benevity's platform, and I contributed to three major cross-team architecture decisions along the way.

**Reflection.** I moved too fast early on and tried to fix things that weren't actually broken in the new org. Slowing down and listening made me far more effective. Ideawise has existing companies in Shanghai, Barcelona, Düsseldorf and Berlin, each with its own history, so I'd expect to repeat that first-month mapping exercise before touching anyone's roadmap.

---

## Prep notes: where the record is thinner

**Model-safety incidents.** The posting asks for ownership of model-safety incidents in production. I've integrated LLMs, semantic search and multi-agent workflows, but I shouldn't claim a formal safety incident I didn't own. If asked, talk honestly about the guardrails I'd put in place (evaluation sets, human review on sensitive outputs, logging and rollback of prompts and model versions) and how I'd run an incident, and say plainly that it's an area I'd want to strengthen in a regulated, content-sensitive context like dating and social.

**Leaders who outlasted my tenure.** At Alaya I hired and onboarded the first three engineers. Before the interview, check what's true today about where they are and what they went on to do, and only cite it if it holds up. Don't inflate a small founding team into a leadership bench.

**Group-level scope.** I haven't held a group CTO title across multiple portfolio companies. The honest framing is that Alaya gave me founder-level ownership and Benevity gave me cross-team influence without authority; the combination is what this role asks for, at a larger scale than I've run before.
