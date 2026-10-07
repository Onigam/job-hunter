# STAR+R Stories: Ayunis, Principal Engineer (Product, Platform, Infrastructure)

The posting puts weight on four things: migrating a mature product onto a new stack, owning infrastructure and integration direction, leading without formal authority, and AI-assisted development. These four stories map to those, in roughly the order they're likely to come up.

---

## 1. Replacing a monolith without a rewrite

**Likely question:** "Tell me about a major technical trade-off" / "How would you approach our CakePHP to NestJS migration?"

**Why it fits:** Ayunis is moving a mature CakePHP/MySQL platform to NestJS, React and Postgres while 800+ municipalities keep using it. This is the same problem at a smaller scale.

**Situation.** At Alaya the monolith was starting to crack under load. Half the team wanted a full microservices rewrite, the other half wanted to leave it alone, and our investors mostly wanted new features shipped.

**Task.** It fell to me to make a call we could defend, one that didn't stop delivery and didn't leave us stuck with the same scaling problems a year later.

**Action.** Rather than argue it out in meetings, I ran a two-week spike and built prototypes of both approaches, then load-tested them. The numbers went to my co-founders and the investors as trade-offs, not opinions. What I proposed was a strangler fig: pull out the two highest-traffic modules first and leave everything else in the monolith. We also wrote down explicit criteria for when another module would earn its own extraction, so the debate wouldn't restart every sprint.

**Result.** The first extracted module shipped in about six weeks, and the busiest endpoints got roughly 40% faster. The remaining monolith stayed stable all the way through the acquisition, and we never needed a big-bang rewrite.

**Reflection.** Convincing people that "not rewriting everything" was the right answer turned out to be harder than the engineering. Data settled it. Next time I'd benchmark earlier and cut the debate shorter. For Ayunis I'd ask early which CakePHP modules carry the most traffic and the most customer-specific logic, because those two lists rarely match.

---

## 2. Building a platform from zero, including the parts nobody sees

**Likely question:** "Tell me about something you built from scratch" / "How do you think about reliability and observability?"

**Why it fits:** The role owns infrastructure direction end to end, from deployments to observability to incident readiness, on self-managed infrastructure (Hetzner, Docker Compose, OpenTelemetry).

**Situation.** In 2016 I co-founded Alaya, an employee purpose and impact platform. We had no product, no customers and no team. The business side was already talking to enterprise prospects.

**Task.** My job was to design and build the whole platform, alone at first, and get it to the point where large companies would trust it with their employee data.

**Action.** I picked a deliberately boring stack, Node.js, React and PostgreSQL, because it could grow without me having to over-engineer on day one. We had the core features in front of a prospect within about three months. From there the platform grew in layers: multi-tenancy, an API layer, impact reporting, postal campaigns. Once I started hiring, I brought on the first three engineers and set up CI/CD, code review habits and architecture docs, so knowledge didn't live only in my head.

**Result.** Alaya reached 50+ enterprise clients across Switzerland and France, and Benevity, a Canadian unicorn valued above $1B, acquired us in 2021. The technical due diligence held up, which I took as a fair test of the early decisions.

**Reflection.** Two things I'd change. Proper APM came far too late, so for a while we were debugging production by reading logs and guessing. Retrofitting multi-tenancy also cost more than designing for it upfront would have. Both lessons feel directly relevant to a product serving hundreds of separate municipalities, where tenant isolation and tracing aren't optional.

---

## 3. Changing how engineers work without being their manager

**Likely question:** "How do you lead without formal authority?" / "How do you see AI-assisted development in the team?"

**Why it fits:** The posting asks for leadership without formal authority and genuine interest in AI-assisted development. The ayunis-core GitHub org already publishes Claude skills for its codebase.

**Situation.** At Benevity I was a Senior Staff IC with no direct reports. I wanted two teams that didn't report to me to start using AI-assisted development, and some of them were openly skeptical.

**Task.** The goal was to change daily habits across both teams without a mandate, since I didn't have one to give.

**Action.** I started small with three engineers who were already curious. Together we built demos on real tickets from our backlog, not toy examples, so the time saved was visible. I ran informal lunch sessions where people could watch it work and poke holes in it. The prompt templates that held up went into a shared repo where anyone could reuse or improve them. When someone saved a couple of hours on a PR review cycle, I wrote it down and shared it.

**Result.** Within about three months, roughly 70% of engineers on both teams were using AI-assisted review and generation. I ended up as the informal AI tooling lead across the org, without anyone appointing me.

**Reflection.** Going without a mandate was slower, but it stuck. Engineers who adopted it on their own terms argued for it better than I could have. What I'd do sooner is treat the prompts and context files like code, with owners and review, which is roughly what Ayunis seems to be doing with its published skills.

---

## 4. Joining a much bigger engineering org after an acquisition

**Likely question:** "Tell me about a time you had to work across teams" / "How do you design integrations between systems you don't own?"

**Why it fits:** Ayunis wants stable APIs, SDKs and integration patterns for external systems, plus close work with product, open-source contributors and partners.

**Situation.** After the acquisition in 2021 I joined Benevity as Senior Staff Engineer. The engineering org was about ten times the size of Alaya's, with a Java microservices codebase and very different processes.

**Task.** We had to bring Alaya's capabilities into Benevity's platform and keep shipping new features at the same time, without losing the speed we'd had as a startup.

**Action.** For the first month I mostly read code and drew diagrams of the existing architecture before suggesting any changes. I made a point of getting to know the platform and infra teams before pushing technical opinions on them. Over time I became the cross-team architecture contact for the Europe-facing product surface, which meant a lot of negotiating interfaces between teams with different priorities.

**Result.** The core Alaya features were migrated into Benevity's platform. I contributed to three major cross-team architecture decisions, and the AI tooling work in story 3 grew out of the trust built here.

**Reflection.** Early on I moved too fast and tried to fix things that weren't actually broken in the new org. Slowing down and listening made me far more effective. It's the same instinct I'd bring to Ayunis's integration partners: understand how their systems really behave before designing the contract.
