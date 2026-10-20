# STAR+R Stories, Axion Lab (Founding Product Engineer)

Picked for a two-founder company hiring its first engineer to own architecture, infra and the move from experimental AI workflows to production. Expect questions on ownership under ambiguity, pragmatic trade-offs, working closely with non-engineers (their sustainability and PE experts) and how you'd keep AI output trustworthy.

---

## 1. Building Alaya from a blank page to acquisition

**Likely question:** "Tell me about something you built from scratch." / "How do you handle ambiguity when there's no spec?"

In 2016 I co-founded Alaya, an employee purpose and impact platform, and there was nothing to start from: no product, no customers, no codebase. The business side was already talking to its first enterprise prospects, so my job was to build the whole platform, alone at first, fast enough to demo but without painting us into a corner we'd regret two years later.

I went with a stack I knew could carry us for a long time without ceremony, Node.js, React and PostgreSQL, and got the core features to a demoable state in about three months. From there the platform grew in layers as clients asked for things: multi-tenancy, an API layer, impact reporting, even postal campaigns. When we hired, I onboarded the first three engineers myself and put the basics in place early, CI/CD, code review as a habit rather than a gate, and architecture docs someone could actually read on their first week.

Alaya reached 50+ enterprise clients across Switzerland and France, and Benevity, a Canadian unicorn valued above $1B, acquired us in 2021. For the early technical calls, that's about as direct a validation as you get.

Looking back, I added proper observability far too late, and retrofitting multi-tenancy cost more than designing for it would have. At Axion I'd put tracing and tenant isolation in from the first commit, especially since fund data separation won't be optional.

---

## 2. Choosing not to rewrite the monolith

**Likely question:** "Tell me about a technical trade-off you made under pressure." / "How do you decide when to pay down tech debt?"

At Alaya our monolith started showing cracks under load on a few busy endpoints. Half the team wanted a full microservices rewrite; investors wanted new features and had little patience for anything that looked like a pause. Someone had to make a call that would hold up in both rooms, and as head of technology that was me.

Rather than argue it in meetings, I ran a two-week spike that prototyped both approaches and load-tested them. That gave me numbers to bring to the leadership team and the investors instead of opinions. What I proposed was a strangler-fig migration: pull out the two highest-traffic modules, leave everything else in the monolith, and write down the criteria that would justify extracting anything further, so the debate wouldn't restart every quarter.

The first extracted module shipped in about six weeks and the busiest endpoints got roughly 40% faster. The rest of the monolith stayed stable all the way through the acquisition, and we never needed the big-bang rewrite.

What I took from it is that "don't rewrite everything" is a harder sell than it should be, and data shortens the argument. I'd benchmark even earlier now. It's the same instinct I'd bring to Axion's AI workflows: harden the two or three flows that carry real client work, rather than rebuilding everything the founders prototyped.

---

## 3. Getting two teams to change how they work, without authority

**Likely question:** "How do you influence people who don't report to you?" / "How would you get experts to adopt a new workflow?"

At Benevity I was a Senior Staff IC with no direct reports, and I wanted two teams that didn't report to me to start using AI-assisted development in their daily work. A mandate wasn't available, and honestly I don't think it would've worked anyway.

So I started small, with three engineers who were already curious. I built demos on our real code that showed time saved on actual tasks, then ran informal lunch-and-learn sessions where nobody was asked to commit to anything. The prompt templates that worked went into a shared repo so people could reuse them without starting from zero, and I wrote up concrete wins as they came, like a PR review cycle that went about two hours faster.

Within three months, around 70% of the engineers across both teams were using AI-assisted review and code generation, and I'd become the informal AI tooling lead for the org.

It was slower than a top-down rollout, but it stuck, because the people who adopted it on their own terms went on to champion it. That's relevant at Axion, where the users of the internal tooling are sustainability and PE experts. I'd want them pulling the review flow toward them, not having it imposed.

---

## 4. Joining a much bigger org after the acquisition

**Likely question:** "Tell me about a time you had to adapt." / "Describe working across teams with different cultures."

After the acquisition I moved from a small team where I'd made most of the technical decisions into a Benevity org roughly ten times larger, with a Java microservices codebase and processes I didn't know. The task was to get Alaya's capabilities into Benevity's platform without losing the delivery pace we'd had as a startup.

My first instinct was to start fixing things, and I did push a few changes too early. What worked better was spending the first month mapping the existing architecture, and building relationships with the platform and infra teams before arguing for anything. Once that trust was there, I became the cross-team architecture contact for the Europe-facing product surface.

Alaya's core features were migrated into Benevity's platform, I contributed to three major cross-team architecture decisions, and I ended up as the go-to person for AI tooling across two engineering teams.

Slowing down to listen made me more effective, not less. As Axion's first engineer the setting is reversed, since I'd be the one setting conventions, but the lesson carries: the founders and experts already know where the work hurts, and I'd start by sitting in on live client work before redesigning any of it.

---

## Gaps to address honestly if asked

**Eval tooling.** Be straightforward that formal eval suites aren't something you've run at production scale. What you can speak to is checking LLM output every day in your own multi-agent workflows with Claude CLI, and how you'd approach it at Axion: golden datasets built from expert-reviewed past deliverables, regression evals on every prompt or model change, and expert corrections fed back into the test set.

**Regulated reporting / audit.** The posting lists it as a bonus. Don't claim it. Point to the closest real thing, Alaya's impact reporting for enterprise clients, and say you'd treat traceability (which source document, which model version, which expert approved it) as a first-class data model rather than an afterthought.
