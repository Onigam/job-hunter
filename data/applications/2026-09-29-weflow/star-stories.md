# STAR+R Stories: Weflow, Senior / Principal Software Engineer

Role focus from the posting: shaping platform evolution, deep integrations (Salesforce), complex AI-driven workflows, scaling for a fast-growing customer base. Stack is React/TypeScript/Next.js, Node.js, PostgreSQL, AWS, and they explicitly ask for comfort using AI in development. The stories below are picked for the questions a small (~26 people), seed-to-Series-A SaaS team is most likely to ask a principal-level hire.

---

## 1. Building a platform from zero to acquisition

**Likely questions:** "Tell me about something you built from scratch." "How do you handle ambiguity?" "What would you do in your first 90 days here?"

**Situation.** In 2016 I cofounded Alaya, a purpose and employee engagement platform. There was no product, no customers and no code, just a business side that was already talking to its first enterprise prospects.

**Task.** My job was to design and build the whole platform, alone at first and later with a small team, fast enough that sales had something real to show, without painting us into a corner we'd pay for later.

**Action.** I picked a deliberately boring stack, Node.js, React and PostgreSQL, because I wanted to spend my energy on the product and not on the tooling. The core features were ready for a first demo within about three months. From there the platform grew in layers: multi-tenancy once we had several enterprise clients, an API layer, impact reporting, postal campaigns. When I hired the first three engineers, I set up CI/CD, a code review habit and lightweight architecture docs so they could ship without me being the bottleneck.

**Result.** Alaya went on to serve 50+ enterprise clients across Switzerland and France, and Benevity, a Canadian company valued above $1B, acquired us in 2021. Much of what they bought was a platform that worked and a team that knew how to extend it.

**Reflection.** Two things I'd change. Observability came far too late; we only added proper APM once problems were already visible to customers. And retrofitting multi-tenancy was more expensive than designing for it on day one would have been. For Weflow, where every customer's Salesforce org looks different, I'd treat per-tenant visibility as a first-class concern from the start.

---

## 2. Choosing a strangler fig over a rewrite

**Likely questions:** "Tell me about a hard technical trade-off." "How do you deal with tech debt when the business wants features?" "How do you make architecture decisions?"

**Situation.** A few years into Alaya, our monolith was showing cracks under load. Half the team wanted a full microservices rewrite, the other half wanted to keep patching, and investors wanted new features, not a rewrite.

**Task.** I needed to land on a decision the team, the business and the investors could all live with, one that fixed the scaling problems without freezing the roadmap.

**Action.** Rather than argue it out, I ran a two-week spike and built prototypes of both approaches, with load tests on each. The numbers went to the business side and the investors as a set of trade-offs rather than a recommendation dressed up as fact. What I proposed was a strangler fig: pull out the two highest-traffic modules first, leave everything else in the monolith, and agree up front on the criteria that would justify extracting anything more.

**Result.** The first extracted module shipped in about six weeks, and the busiest endpoints got roughly 40% faster. The rest of the monolith stayed stable all the way through the acquisition, and we never needed the big-bang rewrite.

**Reflection.** The engineering was the easy part. Convincing people that not rewriting everything was the right call took longer than it should have, and it was the data, not my opinion, that ended the debate. Next time I'd benchmark earlier and cut that discussion shorter. It's the same instinct I'd bring to a platform that's growing quickly: extract where the load really is, not where the diagram looks cleanest.

---

## 3. Getting two teams onto AI-assisted development without authority

**Likely questions:** "How do you influence people who don't report to you?" "How do you use AI in your own development work?" "What does a principal engineer do day to day?"

**Situation.** At Benevity I was a Senior Staff IC with no direct reports. I was convinced AI-assisted development would make a real difference for us, but the two teams I wanted to bring along didn't report to me, and a mandate from me would have gone nowhere.

**Task.** Change how those engineers actually worked, day to day, using nothing more than persuasion and proof.

**Action.** I started small, with three engineers who were already curious. Together we built demos on our own codebase that showed concrete time savings, not vendor slides. Then came informal lunch-and-learn sessions with no attendance pressure, and a shared repo of prompt templates anyone could reuse and improve. Whenever someone had a clear win, such as a PR review cycle that went about two hours faster, I wrote it down and shared it, because a colleague's story convinces people far better than mine does.

**Result.** Within three months, around 70% of engineers across both teams were using AI-assisted code review and generation, and I ended up as the informal AI tooling lead for the org.

**Reflection.** Going without a mandate was slower, but it stuck. People who adopted the tools on their own terms became the ones advocating for them, and that's something a top-down decision can't buy. I'd do it the same way again, though I'd start measuring earlier so the case for it builds up by itself.

---

## 4. Integrating into a much larger platform after the acquisition

**Likely questions:** "Tell me about working with an existing system you didn't design." "How do you handle joining a new team?" "Describe a time you had to change your approach."

**Situation.** After the acquisition I joined Benevity as a Senior Staff Engineer. The organisation was about ten times bigger than Alaya, and the culture, the codebase (Java and microservices) and the processes were all different from what I'd built.

**Task.** Bring Alaya's capabilities into Benevity's platform and keep shipping new features at the same time, without losing the delivery speed we'd had as a startup.

**Action.** For the first month I mostly mapped the existing architecture and asked questions before proposing anything. I put time into getting to know the platform and infrastructure teams, so that when I did push a technical opinion there was some trust behind it. Over time I became the cross-team architecture contact for the Europe-facing part of the product.

**Result.** The core Alaya features were migrated into Benevity's platform, I contributed to three major cross-team architecture decisions, and I became the go-to person for AI tooling across two teams.

**Reflection.** Early on I moved too fast, trying to fix things that weren't actually broken. Slowing down and listening made me a lot more effective. Joining Weflow would be the reverse move, from a large org back to a small team, and I'd apply the same rule: understand why the Salesforce integration works the way it does before suggesting it should change.

---

## Questions to ask them

- Where does the integration layer hurt most today: sync reliability, Salesforce API limits, per-customer schema drift, or something else?
- How are the AI workflows (meeting capture, summaries, forecast signals) evaluated before they write back to a customer's CRM?
- What does "Principal" mean at Weflow's size? Is it a hands-on architecture owner, or does it include people leadership?
- How is the engineering team split between product features and platform work right now?
