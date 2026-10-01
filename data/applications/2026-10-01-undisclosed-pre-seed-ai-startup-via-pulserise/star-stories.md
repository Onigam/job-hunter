# STAR+R Stories: Founding Engineer (AI Agents), pre-seed startup via PulseRise

This role is a founding seat with a second-time founder, three engineers in total, and a heavy weight on agent reliability and evals. Expect questions about building from zero, making calls with incomplete information, shipping production systems rather than demos, and how you actually use agentic tooling day to day. The four stories below cover those angles. Practise telling each one in about two minutes.

---

## Story 1: Building Alaya from a blank page to acquisition

**Likely questions:** "Tell me about something you built from scratch." "What does zero to one look like when you're the one doing it?" "Why should we believe you can be one of three engineers?"

**Situation.** In 2016 I co-founded Alaya, an employee purpose and impact platform. We had no product, no customers and no code, and the business side was already talking to the first enterprise prospects.

**Task.** My job was to design and build the whole platform, alone at first, then with a small team, fast enough for sales to have something real to show and solid enough that enterprise clients would trust it.

**Action.** I picked a deliberately boring stack, Node.js, React and PostgreSQL, because I wanted to spend my time on the product rather than on infrastructure puzzles. The core features were ready for a first demo after about three months. After that the platform grew piece by piece as clients asked for things: multi-tenancy, an API layer, impact reporting, postal campaigns. When we could afford to hire, I brought on the first three engineers and set up what I thought a small team actually needed, which was CI/CD, real code review and short architecture notes that people would read.

**Result.** The platform ran in production for 50+ enterprise clients across Switzerland and France, and in 2021 Benevity, a Canadian unicorn valued at over $1B, acquired Alaya. Their technical due diligence went through the platform I'd built from day one.

**Reflection.** I added proper observability far too late, and retrofitting multi-tenancy cost us more than designing for it at the start would have. For an agent product I'd treat tracing and evals the way I now wish I'd treated APM back then: as part of the first version, not a later clean-up.

---

## Story 2: Choosing not to rewrite under investor pressure

**Likely questions:** "Tell me about a technical trade-off you made." "How do you decide when something is good enough?" "How do you handle disagreement about architecture?"

**Situation.** A few years in, Alaya's monolith was starting to crack under load on a handful of endpoints. Half the team wanted a full microservices rewrite. Investors wanted new features, not a rewrite.

**Task.** I had to make a call we could defend, one that fixed the real scaling problem without stopping feature delivery for months.

**Action.** Rather than settle it by debate, I ran a two-week spike comparing a microservices split with a modular monolith, using prototype load tests on our busiest paths. I took the numbers to my cofounders and our investors and proposed a strangler-fig approach: pull out only the two highest-traffic modules and leave everything else where it was. We also wrote down clear criteria for when any other module would earn its own service, so the argument wouldn't come back every quarter.

**Result.** The first extracted module shipped in about six weeks and the busiest endpoints got roughly 40% faster. The rest of the monolith stayed stable all the way through the acquisition, and we never needed a big-bang rewrite.

**Reflection.** Getting people to accept "don't rewrite everything" was harder than the engineering. Data ended the debate, so these days I benchmark earlier. It's the same instinct I'd bring to agents: measure the failure before redesigning the system around it.

---

## Story 3: Getting engineers to adopt AI tooling without a mandate

**Likely questions:** "How do you use agentic tools in your own work?" "How would you build internal tooling that speeds up the team?" "How do you influence people who don't report to you?"

**Situation.** At Benevity I was a Senior Staff IC with no direct reports. I was convinced AI-assisted development would change how two of our teams worked, but neither team reported to me and nobody had asked for it.

**Task.** I wanted to change daily engineering habits across both teams without any formal authority to make it happen.

**Action.** I started with three engineers who were already curious, and we used the tools on real work, not toy examples. When something saved time, I turned it into a reusable prompt template and committed it to a shared repo so anyone could pick it up. I ran informal lunch sessions with live demos and no mandate attached, and I wrote down concrete wins, such as a PR review cycle that went about two hours faster.

**Result.** After about three months, roughly 70% of engineers on both teams were using AI-assisted review and code generation, and I ended up as the informal AI tooling lead for the org.

**Reflection.** It was slower than a top-down rollout, but it lasted, because the people who adopted it on their own terms were the ones selling it to their peers. In a three-person founding team the scale is different, but the principle holds: internal agentic tooling sticks when it's built around real work and shows its value quickly.

---

## Story 4: Joining a team ten times larger after the acquisition

**Likely questions:** "Tell me about a mistake you made." "How do you work with a founder who has strong opinions?" "Why leave a Staff role for a pre-seed company?"

**Situation.** After the acquisition I joined Benevity as a Senior Staff Engineer. The engineering org was about ten times the size of Alaya's, with a different culture, a Java microservices codebase and processes I didn't know.

**Task.** I had to bring Alaya's capabilities into Benevity's platform while we kept shipping, without losing the speed that had made Alaya worth buying.

**Action.** My first instinct was to fix things quickly, and I pushed on a few areas that weren't actually broken. That didn't land well. So I changed approach: I spent about a month mapping the existing architecture before proposing anything, and I got to know the platform and infrastructure teams before giving technical opinions. From there I became the architecture liaison for the Europe-facing product surface.

**Result.** We migrated Alaya's core features into Benevity's platform, I contributed to three major cross-team architecture decisions, and I became the person both teams came to on AI tooling.

**Reflection.** Listening first made me far more effective than being right early. It's also part of why I'm looking at a founding role again: I've seen what a large org does well, and I miss being somewhere a decision made on Tuesday is in production by Friday. With a second-time founder, I'd make a point of learning how they think before arguing with it.

---

## Gaps to prepare for (not STAR, but they will come up)

**Evals in production.** Be honest. You've shipped LLM features and built multi-agent workflows, but you haven't owned a formal eval suite for agent reliability at scale. Frame it around how you'd start: a small set of real service-business scenarios turned into regression cases, pass/fail checks on the actions that matter, and traces you can replay when an agent gets something wrong.

**Six days a week, on site, in San Francisco.** They'll test whether you mean it. Decide before the first call whether you'd actually move from Geneva, and on what timeline. Don't hedge on the call.

**O-1 eligibility.** Your strongest evidence is the cofounder role and the acquisition by a $1B+ company. Have a short list of anything else that might count (press, talks, judging, open source) before the conversation.
