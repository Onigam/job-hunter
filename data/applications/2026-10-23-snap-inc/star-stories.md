# STAR+R Stories: Snap Inc., Cloud Software Engineer (Specs, Zürich)

The posting puts a lot of weight on owning services end to end (SLOs, on-call, incident response), on onboarding other teams onto platform capabilities, and on shaping the long-term direction of the Specs cloud. Snap's behavioral questions tend to circle ownership, working with partner teams, and how you make calls with incomplete information. These stories map to that. Each runs about two minutes out loud. Keep the numbers approximate, as written.

---

## 1. Building Alaya's platform from a blank page (ownership, end-to-end)

**Likely prompts:** "Tell me about something you owned end to end." / "How do you deal with ambiguity?" / "Tell me about a platform you built that others depended on."

**Situation.** In 2016 I cofounded Alaya, an employee purpose and impact platform. We had no product, no customers and no team, and my business partner was already lining up enterprise prospects who'd want to see something soon.

**Task.** I had to design and build the whole platform, on my own at first, in a way that wouldn't need to be thrown out once real enterprise clients showed up.

**Action.** I went with a stack I knew could scale without ceremony, Node.js, React and PostgreSQL, and got the core features in front of prospects in about three months. From there the job was sequencing. Multi-tenancy, an API layer, impact reporting and postal campaigns each came in when the next set of clients actually needed them, not before. Once we could hire, I brought on the first three engineers and set up CI/CD, code review and architecture docs, mostly so that decisions stopped living only in my head.

**Result.** The platform went to production with 50+ enterprise clients across Switzerland and France, and Benevity, a Canadian unicorn valued at over $1B, acquired Alaya in 2021.

**Reflection.** I added proper observability much too late; we only had real APM after things had already hurt us. I also underestimated how painful it is to retrofit multi-tenancy. For something like the Specs cloud, where a device is on someone's face all day and an outage is very visible, I'd want SLOs and tracing in place before the first external developer touches the portal.

---

## 2. Strangler fig instead of a rewrite (technical trade-off under pressure)

**Likely prompts:** "Tell me about a hard technical decision." / "How do you handle technical debt?" / "Tell me about a time you disagreed with your team."

**Situation.** Alaya's monolith had started to crack under load. The team had split, with half wanting a full microservices rewrite and the other half wanting to keep patching. Investors, meanwhile, wanted features, so whatever we picked had to live alongside a delivery roadmap.

**Task.** The call was mine, and I needed to back it with more than taste.

**Action.** I ran a two-week spike where we prototyped both approaches and load-tested them against traffic that looked like ours. It turned out most of the pain sat in two modules, the busiest ones, while the rest of the system was fine. So I went to the CTO and the investors with numbers and proposed a strangler-fig migration that pulled out just those two modules. I also wrote down explicit criteria for when any other module would earn its own extraction, which stopped the argument from coming back every sprint.

**Result.** The first extracted module shipped in about six weeks, the busiest endpoints got roughly 40% faster, and the remaining monolith stayed stable through the acquisition. We never needed the big-bang rewrite.

**Reflection.** Persuading people was harder than the engineering. "Don't rewrite everything" sounds unambitious until there's data behind it, and I'd benchmark earlier next time to cut the debate short. It's the same instinct I'd bring to a multi-cloud setup like Specs on AWS and GCP: measure where the cost and latency really are before redesigning anything.

---

## 3. Getting two teams onto AI-assisted workflows without authority (onboarding teams onto a platform)

**Likely prompts:** "Tell me about influencing people who don't report to you." / "How have you driven adoption of a tool or platform?" / "Tell me about working with partner teams."

**Situation.** At Benevity I was a Senior Staff IC with no reports. I was convinced AI-assisted development would change how fast we shipped, but the two teams I wanted to bring along didn't report to me and had no reason to change on my say-so.

**Task.** I wanted real adoption, the kind that survives after the person pushing it stops paying attention.

**Action.** I started with three engineers who were already curious and worked with them on real tickets, not toy examples. A couple of concrete wins came quickly; one PR review cycle dropped by about two hours, and people remembered that. After that I ran informal lunch-and-learns where I simply showed the work, with no mandate at all. Reusable prompt templates went into a shared repo so anyone could pick them up. I also kept a running list of where the tools produced confident nonsense, because trust depended on that list as much as on the wins.

**Result.** Within about three months, roughly 70% of the engineers on both teams were using AI-assisted review and generation, and I'd become the informal AI tooling lead across the org.

**Reflection.** Skipping the mandate was slower, but it stuck, and the people who adopted it on their own terms became its best advocates. Onboarding teams onto the Specs platform probably works the same way. A good self-serve portal with honest docs about the sharp edges does more than any migration deadline.

---

## 4. Joining a ten-times-larger org after the acquisition (learning a new stack, being wrong)

**Likely prompts:** "Tell me about a time you were wrong." / "How do you ramp up on an unfamiliar codebase?" / "Tell me about working in a cross-functional org." Use this one if Go comes up as a gap.

**Situation.** After the acquisition I joined Benevity as a Senior Staff Engineer. The organization was about ten times Alaya's size, the codebase was Java and microservices rather than our Node.js stack, and the processes were nothing like a startup's.

**Task.** I had to fold Alaya's capabilities into Benevity's platform while still shipping new features, without losing the velocity we'd had as a small team.

**Action.** My first instinct was to fix things, and honestly I moved too fast at the start, proposing changes to parts of the system that weren't broken. I caught myself, stepped back, and spent about a month mapping the existing architecture before suggesting anything else. I also built relationships with the platform and infrastructure teams before pushing opinions, which made later conversations much easier. Over time I became the cross-team architecture contact for the Europe-facing product surface.

**Result.** The core Alaya features were migrated into Benevity's platform, I contributed to three major cross-team architecture decisions, and the Java codebase stopped feeling foreign within a few months.

**Reflection.** Listening first made me more effective than arriving with answers. It's also my honest answer on Go: I've switched ecosystems before, from GWT at Sagemcom to Node.js at Alaya to Java microservices at Benevity, and the pattern is always the same. Read a lot of the existing code, ship something small, then form opinions.

---

## Questions to ask them

1. How much of the Specs cloud runs on AWS versus GCP today, and is that split deliberate or historical?
2. What does on-call look like for the developer portal compared with the device-facing services?
3. Now that Lens Studio works with coding agents, is the portal team thinking about agents as first-class API consumers?
4. What level is this role scoped at, and what would distinguish a Staff-level hire on this team?
