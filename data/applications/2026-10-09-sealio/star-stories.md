# STAR+R Stories: Senior AI Product Engineer (Sealio)

The panel here is likely to be the founders and the CTO, and they'll test four things: can you own a feature from blank page to production, can you set engineering standards for a tiny team, can you make architecture calls under delivery pressure, and will you grow into the Engineering Lead role. All facts come from `profile/star-bank.md`. Rehearse them out loud and fill in the gaps flagged in the prep notes from memory, rather than inventing new numbers.

---

## 1. Building Alaya from a blank page to an acquisition

**Likely questions:** "Tell me about something you built from scratch." / "How do you handle ambiguity when there's no spec?" / "Why do you want to be an early employee again?"

**Situation.** In 2016 I co-founded Alaya, a purpose and impact platform for employee engagement. There was no product, no customers, and for the first stretch no other engineer. The business side was already talking to enterprise prospects, so the clock was running from day one.

**Task.** I had to architect and build the whole platform, first on my own and then with a small team, fast enough to demo to those first clients and solid enough that we wouldn't have to throw it away once they signed.

**Action.** I picked a stack I knew could scale without heroics, Node.js, React and PostgreSQL, and resisted anything fancier. The core features went in during the first three months so we had something real to put in front of people. After that, the product grew with the customers: a multi-tenant architecture, an API layer, impact reporting, even postal campaigns when a client needed them. Once we could afford to hire, I brought in our first three engineers and set up the boring things that keep a small team fast, CI/CD, code review, and architecture docs someone could actually read.

**Result.** The platform reached 50+ enterprise clients across Switzerland and France, and Benevity, a Canadian company valued at over $1B, acquired Alaya in 2021. Their due diligence went through the tech we'd built from that first blank page.

**Reflection.** Two things I'd do differently, and both apply directly to Sealio. Proper APM came late for us, and I spent too long debugging by intuition. And retrofitting multi-tenancy cost far more than designing it in would have. With enterprise bid teams uploading confidential tender documents, tenant isolation is something I'd put in the data model on day one, not in a later sprint.

**Prep note.** Have one concrete example ready of a feature that went from client conversation to production, and how long it took.

---

## 2. Choosing not to rewrite everything

**Likely questions:** "Tell me about a technical trade-off under pressure." / "How do you balance shipping features with platform work?" / "How do you disagree with founders?"

**Situation.** Alaya's monolith was starting to crack on its busiest paths. Inside the team, half wanted a full microservices rewrite and the other half a modular monolith. Investors, meanwhile, wanted new features, not a rewrite.

**Task.** I needed a decision we could defend to both the engineers and the investors, one that fixed the scaling problem without freezing delivery.

**Action.** Rather than let it stay a debate of opinions, I ran a two-week spike and prototyped both approaches with load tests. The trade-offs went to the CTO and investors as numbers. What I proposed was a strangler fig migration: pull out the two highest-traffic modules first and leave everything else in the monolith, with written criteria for when another module would earn its own extraction. That last part mattered, because it turned every future "should we split this out?" into a quick check instead of a new argument.

**Result.** The first extracted module shipped in six weeks, and the busiest endpoints got about 40% faster. The rest of the monolith stayed stable all the way through the acquisition, and we never needed the big-bang rewrite.

**Reflection.** The hard part wasn't technical; it was convincing people that not rewriting was the right call. Data settled it, and I'd benchmark earlier next time to cut the debate short. At Sealio the same instinct applies to the RAG stack. It's tempting to bolt on a new retriever or reranker every month, and I'd rather have a fixed set of real tenders to measure each change against before it ships.

---

## 3. Getting engineers to adopt AI tooling without a mandate

**Likely questions:** "How do you use AI developer tools day to day?" / "How do you set engineering standards?" / "Tell me about influencing without authority."

**Situation.** After the acquisition I was a Senior Staff IC at Benevity, with no direct reports. I wanted two teams that didn't report to me to start using AI-assisted code review and generation, and nobody had asked for it.

**Task.** Changing how people worked every day was the goal, and it had to stick after I stopped pushing.

**Action.** I started with three engineers who were already curious and built demos on our own codebase, since a saving on a vendor's toy example convinces nobody. Prompts that worked went into a shared repo as templates, so people could reuse and improve them through normal PRs. Then I ran informal lunch-and-learns, no attendance expected. When a template cut a PR review cycle by about two hours, I wrote it up with the before and after, because one concrete case did more than any slide.

**Result.** Within three months, about 70% of engineers on both teams were using AI-assisted review and generation, and I'd become the informal AI tooling lead across the org. Since then I've gone further: I now run multi-agent workflows with Claude CLI and OpenClaw as part of how I ship.

**Reflection.** The slow, no-mandate route was stickier, since the people who adopted on their own terms became the advocates. What I'd change is measurement. We tracked adoption and anecdotes, not output quality. For LLM features in a product, that's not good enough, and it's the reason I'd build an eval harness with regression tests before the second prompt change at Sealio.

**Prep note.** Be ready to describe your current Claude CLI setup in detail: how you split work between agents, how you give them context, and where you still review by hand.

---

## 4. Joining a much bigger org after the acquisition

**Likely questions:** "Tell me about a time you were wrong." / "How do you work with a CTO who has strong opinions?" / "How would you onboard into our codebase?"

**Situation.** After Benevity bought Alaya in 2021, I went from running the tech of a small startup to being a Senior Staff engineer on a team roughly ten times bigger. The codebase was Java and microservices, the processes were different, and so was the culture.

**Task.** I had to fold Alaya's capabilities into Benevity's platform and keep building new features, without losing the speed we'd had as a startup.

**Action.** My first instinct was to start fixing things, and I did push a few changes too early. I stepped back and spent the first month mapping the existing architecture before proposing anything else. I also put time into the platform and infrastructure teams before arguing technical positions with them, which made the later conversations much shorter. Over time I became the cross-team architecture contact for the Europe-facing product.

**Result.** The core Alaya features were migrated into Benevity's platform, and I contributed to three major cross-team architecture decisions.

**Reflection.** Moving too fast to "fix" things that weren't broken was a real mistake, and listening first made me more useful. The lesson carries over in an odd way. At Sealio I'd be joining a codebase the CTO already has opinions about, so my first weeks would be shipping small features and learning why things are the way they are, before suggesting the bigger changes.

---

## Gaps to handle head-on

These will come up, and a straight answer beats a stretched one.

**FastAPI and Next.js.** Python and React are in your profile, but these two frameworks specifically are not. Say so, and point to how quickly you moved from Node.js to Benevity's Java stack.

**Formal LLM evals and guardrails.** You've used embeddings and semantic search, but production eval suites, prompt-injection defences and PII filtering are where you'd be learning. Story 3's reflection is the honest bridge.

**Line management.** The ad asks for 3+ years of lead experience including line management. Your case is Head of Technologies at Alaya, where you hired and onboarded the first engineers. Before the interview, work out exactly how many people you managed and for how long, and give that number plainly.

**Swiss German.** Not in your profile, so don't claim it. The ad lists it as an asset, not a requirement; fluent English is the hard requirement.
