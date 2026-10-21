# STAR+R Stories: Rivia, Senior Infrastructure Engineer (Zurich)

These are picked for a role where you'd be the only infrastructure specialist, owning AWS, Kubernetes and CI/CD end to end, and using AI agents on real infra work. Each one comes from `profile/star-bank.md`; nothing has been added that isn't already in your history. Be honest in the room about where the infra depth comes from (owning the whole stack as a cofounder) and where it's thinner (Keycloak, ISO 27001 audits).

---

## 1. Owning the whole platform alone, from zero to acquisition

**Likely questions:** "You'd be our only infra person. Have you done that before?" / "Tell me about owning a system end to end."

**Situation.** In 2016 I cofounded Alaya, an employee purpose and engagement platform. There was no product, no customers and nobody else on the technical side. Whatever ran in production, I'd built it and I was the one who had to keep it running.

**Task.** I had to get a platform live fast enough for the business to sign its first enterprise clients, without building something that would fall over once those clients showed up. Then I had to hand pieces of it to new engineers without losing control of how it was deployed and operated.

**Action.** I went with a stack I knew could carry us for years without a platform team behind it: Node.js, React and PostgreSQL, on cloud infrastructure with Docker and a CI/CD pipeline I set up myself. The first demo-ready version took about three months. After that it was mostly steady expansion, a multi-tenant architecture, an API layer, impact reporting and postal campaigns, each of which changed what the infrastructure had to handle. When I hired the first three engineers, the pipeline, code review habits and architecture docs were in place before they arrived, because I didn't want the deployment process to live only in my head.

**Result.** The platform ended up serving 50+ enterprise clients across Switzerland and France, and Benevity (a Canadian unicorn valued above $1B) acquired Alaya in 2021. The technical due diligence was, in practice, a review of decisions I'd made alone years earlier.

**Reflection.** Observability came too late. We added proper APM well after we needed it, and for a while I was debugging production from logs and instinct. Multi-tenancy was the other one: retrofitting it cost far more than designing for it would have. If I were your first infra hire, monitoring and runbooks would be in the first month, not the first year.

---

## 2. Choosing not to rewrite: a scaling decision under pressure

**Likely questions:** "Tell me about a hard technical trade-off." / "How do you decide where to spend infra effort when the business wants features?"

**Situation.** At Alaya the monolith had started to crack under load. Half the team wanted a full microservices rewrite, and the investors wanted new features, not a rewrite of anything.

**Task.** I needed a decision we could defend on both fronts: something that fixed the scaling problem without freezing delivery for months.

**Action.** Rather than argue it out in meetings, I ran a two-week spike and built prototypes of both approaches, then put them through load tests. The numbers went to the leadership team and investors, trade-offs included. What I proposed was a strangler fig migration: pull out the two highest-traffic modules first and leave everything else in the monolith. We also wrote down the criteria that would justify extracting the next module, so the debate wouldn't restart every quarter.

**Result.** The first extracted module shipped in six weeks, and the busiest endpoints got about 40% faster. The rest of the monolith stayed stable all the way through the acquisition, and we never needed the big-bang rewrite.

**Reflection.** Convincing people that "don't rewrite everything" was the right answer was harder than the engineering. Data settled it. Next time I'd benchmark earlier and cut the debate shorter. It's the same instinct I'd bring to your AWS bill: measure first, then move the two things that matter most.

---

## 3. Getting engineers to adopt AI agents without being their manager

**Likely questions:** "How have you used AI agents like Claude Code on real work?" / "How do you change how a team works without authority?"

**Situation.** At Benevity I was a Senior Staff IC with no direct reports. I wanted two teams that didn't report to me to start using AI-assisted development in their daily work, and a mandate wasn't an option.

**Task.** Change how engineers actually worked, in a way that would stick after the novelty wore off.

**Action.** I started small, with three engineers who were already curious. With them I built internal demos that showed real time saved on real tasks, not toy examples. Then came informal lunch-and-learn sessions with no mandate attached. The prompt templates we refined went into a shared repo so anyone could reuse them, and I wrote up concrete outcomes as they happened, like a PR review cycle that came out about two hours shorter.

**Result.** Within three months, roughly 70% of engineers on both teams were using AI-assisted review and code generation, and I'd become the informal AI tooling lead across the org. Since then I've gone further, running multi-agent workflows with Claude CLI and OpenClaw on day-to-day engineering work.

**Reflection.** Going without a mandate was slower, but it lasted. People who adopted it on their own terms argued for it internally, which I couldn't have forced. For Rivia, I'd start an agent-driven AWS audit the same way: one narrow, recurring job, results the team can check, then widen the scope once people trust it.

---

## 4. Joining a bigger organisation and listening before changing things

**Likely questions:** "What would your first 90 days look like?" / "Tell me about walking into a system you didn't build."

**Situation.** After the acquisition I joined Benevity as a Senior Staff Engineer, in an engineering org about ten times the size of Alaya. The culture was different, and so were the codebase (Java and microservices) and the processes.

**Task.** Bring Alaya's capabilities into Benevity's platform while still shipping new features, and without losing the speed we'd had as a small team.

**Action.** For the first month I mostly mapped the existing architecture before proposing anything. I spent time with the platform and infra teams to understand why things were the way they were, and only then started pushing technical opinions. Over time I became the cross-team architecture contact for the Europe-facing product.

**Result.** The core Alaya features were migrated into Benevity's platform. I contributed to three major cross-team architecture decisions, and became the person two engineering teams came to for AI tooling.

**Reflection.** I moved too fast at first and tried to fix things that weren't broken. Slowing down made me more effective. As your first infra hire, my first weeks would look similar: read the infrastructure code and Kubernetes manifests, the GitHub Actions workflows and the last AWS invoices, write down what I find as runbooks, and only then start changing things.

---

## Gaps to handle honestly

If they ask about Keycloak, OIDC/SSO operations, ISO 27001 evidence or pen-test support, don't stretch a story to cover it. Something like: "I haven't run Keycloak in production. I'd expect to get up to speed on your setup quickly, but I'd rather tell you that now than have you find out in month two." The same goes for Spark and Datadog if they come up.
