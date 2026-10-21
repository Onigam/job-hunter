# STAR+R Stories: Wolters Kluwer, Principal Full Stack Engineer, AI Platform & Agents

The interview loop is a 15-minute screen, two live coding rounds, one systems design round and a **presentation of past work**. The posting also asks candidates not to use AI tools during interviews, so rehearse these out loud until they come without notes. Story 1 is the base for the past-work presentation and the "Statement of Exceptional Work". Stories 2 to 4 cover the behavioural questions a Principal on a ~100-engineer central platform is likely to get: trade-offs, joining a bigger org, and leading without authority.

---

## Story 1: Building Alaya from zero to acquisition

**Likely prompts:** "Walk us through your most significant project." "Tell me about owning something end to end." "How do you handle ambiguity?"

**Situation.** In 2016 I co-founded Alaya, an employee purpose and impact platform. We had no product, no customers and a business side that was already talking to enterprise prospects, so the platform had to exist before the sales conversations got awkward.

**Task.** As Head of Technologies, my job was to design and build the whole platform, alone at first, then with a small team, without over-engineering it into something we couldn't ship.

**Action.** I picked a stack I knew we could run with very few people: Node.js, React and PostgreSQL. The core features were in front of prospects within about three months, which bought us the first demos. From there it grew in layers: a multi-tenant architecture, an API layer, impact reporting, postal campaigns. Once there was enough to hold, I hired and onboarded the first three engineers and put the basics in place for them, CI/CD, code review as a habit rather than a gate, and architecture docs that someone new could actually read.

**Result.** The platform went to production with 50+ enterprise clients across Switzerland and France, and Benevity, a Canadian unicorn valued above $1B, acquired Alaya in 2021. Their due diligence went through the codebase, so the acquisition was also a fairly direct check on the technical decisions.

**Reflection.** Two things I'd change. Observability came too late; we added proper APM only once things hurt, and for an AI platform where cost per query and answer quality drift quietly, I'd want telemetry and evals in from the first release. I also underestimated how expensive it is to retrofit multi-tenancy. Next time I'd design for it on day one.

*Tie to the role:* the eval, canary and cost-telemetry work in the posting is the observability lesson in a different setting. Say that explicitly.

---

## Story 2: A hard architecture call under delivery pressure

**Likely prompts:** "Tell me about a technical trade-off." "How do you deal with technical debt when product wants features?" Also useful material for the systems design round.

**Situation.** Alaya's monolith was starting to show scaling cracks on its busiest endpoints. Inside the team there was a real debate between a full microservices rewrite and keeping a modular monolith, and investors were clear that they wanted new features, not a rewrite.

**Task.** I needed a decision we could defend to both the engineers and the investors, one that fixed the performance problem without stalling delivery for months.

**Action.** Rather than argue it in meetings, I ran a two-week spike that prototyped both approaches and load-tested them. The numbers went to the CTO and the investors as trade-offs, not as a recommendation dressed up as data. What I proposed was a strangler fig: pull out only the two highest-traffic modules, leave everything else in the monolith, and write down the criteria that would justify extracting anything further. Having those criteria on paper mattered, because it stopped the "while we're at it" extractions.

**Result.** The first extracted module shipped in six weeks. The busiest endpoints got around 40% faster. The rest of the monolith stayed stable all the way through the acquisition, and we never needed the big-bang rewrite.

**Reflection.** The hard part wasn't technical; it was convincing people that not rewriting everything was the right answer. Data settled it. I'd benchmark earlier next time and cut the debate shorter.

*Tie to the role:* a central GenAI platform faces the same pull between new agent capabilities and the shared plumbing underneath. Mention that you'd apply the same "extract only what the numbers justify" rule to platform components.

---

## Story 3: Joining a much bigger org after the acquisition

**Likely prompts:** "Tell me about navigating change." "How do you work across teams?" "What do you do in your first 90 days?"

**Situation.** After the acquisition in 2021 I joined Benevity as a Senior Staff Engineer. The engineering org was roughly ten times the size of Alaya, the codebase was Java microservices, and the culture and processes were nothing like what I was used to.

**Task.** Alaya's capabilities had to be integrated into Benevity's platform while we kept shipping new features, and the velocity we'd had as a startup shouldn't disappear in the process.

**Action.** For the first month I mostly mapped the existing architecture and listened before proposing anything. I spent time with the platform and infrastructure teams early, before I had opinions to push on them. Once I had some credibility, I became the cross-team architecture liaison for the Europe-facing product surface, and I started pushing AI-augmented workflows across engineering.

**Result.** The core Alaya features were migrated into Benevity's platform. I contributed to three major cross-team architecture decisions, and I ended up as the go-to person for AI tooling across two engineering teams.

**Reflection.** Honestly, I moved too fast at the start and tried to fix things that weren't broken in the new org. Slowing down and listening first made me more effective. It's the approach I'd take joining a ~100-engineer platform org at Wolters Kluwer too.

---

## Story 4: Leading without formal authority

**Likely prompts:** "How do you influence engineers who don't report to you?" "Tell me about mentoring." "What does leading by example look like for you?"

**Situation.** At Benevity I was an IC with no direct reports, but I wanted two teams that didn't report to me to change how they worked by adding AI-assisted development to their daily workflow.

**Task.** Get real adoption, not a slide deck, without having any authority to mandate it.

**Action.** I started small, with three engineers who were already curious. Together we built internal tooling demos that showed concrete time savings on their own work. After that came informal lunch-and-learn sessions with no mandate attached, just demos. The prompt templates that worked went into a shared repo so anyone could reuse them, and I wrote up results in specific terms, such as a PR review cycle that got about two hours shorter, because specifics convinced people where general claims didn't.

**Result.** Within three months around 70% of the engineers on both teams were using AI-assisted code review and generation, and I became the informal AI tooling lead across the org.

**Reflection.** The no-mandate approach was slower, but it stuck. Engineers who adopted it on their own terms argued for it internally, which I couldn't have achieved with a top-down decree.

*Tie to the role:* the posting asks a Principal to "lead by example" and mentor. This is the cleanest example you have. If they ask about evaluating AI output quality, be honest: this work was about developer tooling, not production evals for end users.

---

## Gaps to handle honestly

- **Clinical and regulated domains (HIPAA, SOC 2).** No direct experience. Say so, and point to multi-tenant enterprise data handling at Alaya as the closest thing.
- **LangChain/LangGraph, OpenSearch, Rust.** Only claim what you've actually used. Your multi-agent work (Claude CLI, OpenClaw orchestration) is the relevant base; describe it concretely rather than mapping it onto their framework names.
- **Production evals and A/B tests on agents.** Be ready to discuss how you *would* design them (golden sets, LLM-as-judge with human spot checks, canary by traffic slice, rollback on quality or cost regression) without implying you've run them at Expert AI scale.
