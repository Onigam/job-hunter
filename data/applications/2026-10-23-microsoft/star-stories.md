# STAR+R Stories: Microsoft, Principal Software Engineer (VS Code & GitHub Copilot), Zürich

These are picked for what the posting stresses most: leading across teams without line authority, platform and API design, architecture calls under pressure, AI coding tools, and judging success after release. Microsoft interviews lean on "tell me about a time" questions that test growth mindset, so every story ends with a real reflection.

---

## 1. Getting two teams onto AI-assisted development without being their manager

**Likely questions:** "How have you led across teams without authority?" / "Tell me about driving adoption of a new tool." / "What's your experience with AI coding tools?"

**Situation.** At Benevity I was a Senior Staff IC with no direct reports. Two teams I worked with closely weren't using AI tooling in any serious way, and nobody had asked them to.

**Task.** I wanted them working with Copilot and AI-assisted review as a normal habit, but I had no mandate and no reporting line to lean on.

**Action.** I didn't push it on everyone. I found three engineers who were already curious and worked with them first, building small demos against our own codebase so the time savings were about our code and not a vendor slide. Once those three had something to show, we ran informal lunch sessions where they did most of the talking. I put the prompt templates that worked into a shared repo so people could copy them instead of starting from scratch, and I wrote up concrete wins as they happened, like the PR review cycle that went about two hours faster.

**Result.** Within three months roughly 70% of engineers on both teams were using AI-assisted review and generation, and I'd become the informal AI tooling lead across the org.

**Reflection.** Going without a mandate was slower than a top-down rollout would have been, but it held. The people who adopted it on their own terms became its advocates, and that did more than I could have. For VS Code this matters in a different way: you're shipping to developers who can turn a feature off in one click, so adoption has to be earned the same way.

---

## 2. Choosing not to rewrite: the strangler-fig decision at Alaya

**Likely questions:** "Tell me about a technical trade-off you had to make." / "How did you resolve an architectural disagreement?" / "Tell me about a migration you led."

**Situation.** Alaya's monolith was starting to crack under load. The team was split between a full microservices rewrite and a modular monolith, and our investors wanted new features, not a rewrite.

**Task.** I had to make a call we could defend, one that fixed the scaling problems without stopping delivery for months.

**Action.** Rather than let it stay a debate of opinions, I ran a two-week spike with prototype load tests on both approaches. I took the numbers to the CTO and the investors and proposed a middle path: a strangler-fig migration where we'd extract only the two highest-traffic modules and leave the rest in the monolith. I also wrote down the criteria for when any further module would earn its own extraction, so the next disagreement would have a rule to argue against instead of a blank page.

**Result.** The first extracted module shipped in six weeks, and the busiest endpoints got about 40% faster. The rest of the monolith stayed stable all the way through the acquisition, and we never needed a big-bang rewrite.

**Reflection.** The hardest part wasn't technical, it was persuading people that not rewriting everything was the right answer. Data settled it. Next time I'd benchmark earlier and cut the debate shorter. Writing extraction criteria down was the most useful thing I did, and it's the same instinct I'd bring to deciding what belongs in VS Code core versus the extension API.

---

## 3. Building Alaya's platform from a blank page

**Likely questions:** "Tell me about something you built from scratch." / "How do you design a platform other people build on?" / "How do you handle ambiguity?"

**Situation.** In 2016 I cofounded Alaya, an employee purpose and impact platform. There was no product, no customers and no code.

**Task.** As Head of Technologies I had to architect and build the whole platform, alone at first and then with a team, while the business was signing its first enterprise clients.

**Action.** I picked a stack that wouldn't need heroics to scale: Node.js, React and PostgreSQL. The core features were ready for a first demo in about three months. From there we grew it in steps, adding multi-tenancy, an API layer, impact reporting and postal campaigns as customers needed them. I hired and onboarded the first three engineers and put the basics in place early: CI/CD, a code review culture and architecture docs that new people could actually read.

**Result.** The platform reached 50+ enterprise clients across Switzerland and France, and in 2021 Benevity, a Canadian unicorn valued at over $1B, acquired Alaya. Their diligence was, in effect, an outside review of the technical decisions we'd made from day one.

**Reflection.** I'd add observability much earlier; proper APM came late and we flew partly blind for a while. I also underestimated how expensive it is to retrofit multi-tenancy. Today I'd design for it from day zero, and more generally I'd decide on platform boundaries before the first customer forces them on me.

---

## 4. Joining a much bigger org after the acquisition

**Likely questions:** "Tell me about a time you had to adapt to a new environment." / "How do you get productive in a large unfamiliar codebase?" / "Tell me about a mistake you made."

**Situation.** After the acquisition I joined Benevity as a Senior Staff Engineer. The organisation was about ten times the size of Alaya, with a different culture, a Java microservices codebase and its own way of doing things.

**Task.** I had to bring Alaya's capabilities into Benevity's platform and keep building new features, without losing the velocity we'd had as a small team.

**Action.** My first instinct was to fix things fast, and I pushed on a few points that, honestly, weren't broken. That cost me some goodwill. So I changed tack: I spent the next weeks mapping the existing architecture properly before proposing anything, and I built relationships with the platform and infra teams before arguing for technical positions. Over time I became the cross-team architecture contact for the Europe-facing part of the product.

**Result.** We migrated the core Alaya features into Benevity's platform, I contributed to three major cross-team architecture decisions, and I became the go-to person for AI tooling across two engineering teams.

**Reflection.** Listening first made me far more effective than being right early. That's what I'd do in the VS Code codebase too: it's huge, it's been shaped by a decade of decisions, and I'd want to understand why things are the way they are before proposing changes.

---

## 5. Working as an "agent manager" day to day

**Likely questions:** "How do you use AI coding tools yourself?" / "Where do coding agents fall short today?" / "What would you change about agentic coding in an editor?"

**Situation.** Over the last couple of years I moved my own engineering from writing most code by hand to orchestrating multi-agent workflows, mainly with Claude CLI and OpenClaw.

**Task.** I wanted more output without losing control of quality, and that meant learning where agents are reliable and where they aren't.

**Action.** Most of the work turned out to be context, not prompting. I structured the technical context agents get (project instructions, conventions, the right files) and split work so each agent had a narrow, checkable job. I kept review in my own hands and treated agent output like a PR from a fast new hire who doesn't know the codebase yet.

**Result.** I ship a lot more than I used to, and I've built a clear picture of the failure modes: agents losing context on long tasks, confidently wrong edits in code they haven't read, and loops that never converge without a human cutting them off.

**Reflection.** I don't have precise before-and-after metrics for this, and I'd say so in the interview rather than invent one. What I do have is a user's view of the exact problems the VS Code and Copilot team is working on, and opinions about which of them belong in the editor and which belong in the model.

---

## Gaps to handle honestly

**Rust.** The posting asks for productivity in large TypeScript and Rust codebases. TypeScript is home ground; Rust is not. Say so plainly, mention what you've read, and propose a concrete plan (for example, picking up a Rust-side issue in the first months).

**Accessibility and usability.** No strong story in the bank yet. Worth preparing one from Alaya's client-facing product, or the État de Genève education applications, before the loop.

**Experimentation and post-release metrics.** The posting cares about measuring outcomes after launch. The Copilot adoption numbers in story 1 are the closest fit; think through how you tracked them before the interview.
