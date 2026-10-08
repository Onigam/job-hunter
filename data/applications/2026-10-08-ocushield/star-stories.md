# STAR+R Stories: Senior Founding Software Engineer, Ocushield

Picked for what a CEO-led founding hire interview will probe: owning engineering alone, taking over a codebase someone else wrote, running old and new systems in parallel, and using AI tools without giving up judgement. All facts come from `profile/star-bank.md`; numbers are the ones already in the bank.

---

## 1. Building a platform from zero as the only engineer

**Likely questions:** "Tell me about building something from scratch." "What does owning the engineering function mean to you?" "When would you hire engineer #2?"

**Situation.** In 2016 I co-founded Alaya, an employee purpose and engagement platform sold to companies. There was no product, no customers and no code, and for the first stretch I was the whole engineering team while the business side was already talking to enterprise prospects.

**Task.** My job was to get to a demo quickly without building something we'd have to throw away, and then turn that into a platform enterprise clients could rely on, with a team around it.

**Action.** I went with a stack I knew would hold up without heroics: Node.js, React and PostgreSQL. The core features were demo-ready in about three months. From there it grew in layers, a multi-tenant architecture, an API layer, impact reporting, postal campaigns, each added when a client actually needed it rather than when it seemed elegant. Hiring came when I could no longer review everything myself and still ship; I brought on the first three engineers and set up CI/CD, a code review habit and written architecture docs, so the standards didn't live only in my head.

**Result.** We reached 50+ enterprise clients across Switzerland and France, and Benevity, a Canadian unicorn valued above $1B, acquired Alaya in 2021.

**Reflection.** Two things I'd change. Observability came late, and we spent time guessing at problems that proper APM would have shown us immediately. And retrofitting multi-tenancy was more expensive than I'd expected. At Ocushield that translates directly: monitoring and tenant isolation for corporate clients go in during the first 90 days, not after the first incident.

---

## 2. Taking over a codebase I didn't write

**Likely questions:** "Have you inherited someone else's system?" "How would you handle the handover from the external team?" "Tell me about adapting to a new environment."

**Situation.** After the acquisition I joined Benevity as a Senior Staff Engineer. The team was about ten times the size of Alaya's, the codebase was Java and microservices rather than our Node.js stack, and the processes were nothing like a startup's.

**Task.** I had to bring Alaya's capabilities into Benevity's platform while new features kept shipping, and do it in a system I hadn't designed and didn't yet understand.

**Action.** I spent the first month mapping the existing architecture before proposing anything. That meant reading code, tracing how requests actually moved, and asking the platform and infra teams why things were the way they were. I built those relationships before pushing opinions. Honestly, I didn't get this right at first; my early instinct was to fix things that turned out not to be broken, and I pulled back once I saw that.

**Result.** The core Alaya features were migrated into Benevity's platform. I contributed to three major cross-team architecture decisions and became the architecture point of contact for the Europe-facing product.

**Reflection.** Listening first made me far more effective than moving fast. For a handover from an outside agency it's the same rule with less time: I'd want their architecture notes, a recorded walkthrough and access to their people for a few weeks, and I'd write down every "why is this like that?" before deciding what to change.

---

## 3. Migrating incrementally instead of rewriting

**Likely questions:** "Walk me through a technical trade-off." "How would you cut clients over from the old platform to the new one?" "How do you handle pressure to ship features versus fix foundations?"

**Situation.** At Alaya the monolith was starting to crack under load. The team was split between a full microservices rewrite and a modular monolith, and investors wanted new features, not a rewrite.

**Task.** I needed a decision we could defend with evidence, one that fixed the scaling problem without freezing delivery for months.

**Action.** We ran a two-week spike, prototyping both approaches and load-testing them. I took the results to the CTO and investors as numbers rather than opinions. What I proposed was a strangler fig migration: pull out the two highest-traffic modules first, keep everything else in the monolith, and agree upfront on the criteria that would justify extracting anything further.

**Result.** The first extracted module shipped in six weeks, and the busiest endpoints got about 40% faster. The rest of the monolith stayed stable all the way through the acquisition, and we never needed the big-bang rewrite.

**Reflection.** The hardest part wasn't technical; it was convincing people that not rewriting everything was the right call, and data is what settled it. I'd benchmark even earlier next time. It's also the model I'd use for Ocushield's cutover: run old and new in parallel, move the lowest-risk client first, define what "done" means for each client before moving the next one, and keep a rollback path until the old platform can be switched off.

---

## 4. Getting engineers to adopt AI tools without a mandate

**Likely questions:** "How do you use AI coding tools?" "How do you keep quality when AI writes code?" "Tell me about influencing without authority."

**Situation.** At Benevity I was a Senior Staff IC with no direct reports. I wanted two teams that didn't report to me to start using AI-assisted development.

**Task.** The goal was to change how engineers worked day to day, without any authority to tell them to.

**Action.** I started with three engineers who were already curious. We built internal demos showing concrete time saved, like a PR review cycle that came down by about two hours, and ran informal lunch-and-learns with no mandate attached. I put reusable prompt templates in a shared repo so people could copy what worked instead of starting from nothing. Throughout, the rule was that a human still reviews and owns what gets merged.

**Result.** Within three months, roughly 70% of engineers on both teams were using AI-assisted code review and generation, and I became the informal AI tooling lead across the org. Since then I've moved further, running multi-agent workflows with OpenClaw and Claude CLI as part of my own daily work.

**Reflection.** Going without a mandate was slower, but it stuck, because the people who adopted it on their own terms became its advocates. For a solo founding engineer the relevant lesson is a bit different: AI tools let one person cover much more ground, which makes it more important, not less, to keep architecture decisions, review and test standards firmly in my hands.

---

## Gaps to prepare honest answers for

These come straight from the job description and aren't covered by the stories above. Don't stretch existing experience to fit them; say what's true and how you'd close the gap.

- **AWS Cognito, SAML/OIDC SSO, infrastructure-as-code (CDK/Terraform).** Profile lists AWS, Docker, Kubernetes and CI/CD, but not these specifically. Be ready to say exactly what you've touched.
- **NestJS and Prisma.** Listed as a strong plus. Node.js/TypeScript depth transfers; say so plainly.
- **Regulated or sensitive-data environment.** Closest real material: corporate client data at Alaya and Benevity, and public-sector education systems at État de Genève. GDPR practice from those is worth preparing a concrete example for.
- **Healthtech / MHRA / CE-marked software.** Not in the profile. Treat it as a learning area and ask how Raj and the clinical side handle it today.
