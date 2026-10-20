# STAR+R Stories, Lovable (Staff / Principal Software Engineer, Platform)

Picked for what a Platform team running agentic sandboxes is likely to probe: architecture trade-offs under load, reliability and observability, rolling out developer tooling without a mandate, building infrastructure from nothing, and working inside a fast-growing org. Every number below comes from the story bank. Don't round them up in the room.

---

## 1. Scaling trade-off under delivery pressure (modular extraction vs. rewrite)

**Likely questions:** "Tell me about a hard architecture decision." / "How do you balance speed and stability?" / "Walk me through a scaling problem you solved."

**Situation.** At Alaya our monolith had started to crack under load, mostly on a couple of endpoints that took the bulk of the traffic. The team was split between a full microservices rewrite and keeping things as they were, and our investors wanted features, not a rewrite.

**Task.** I had to make a call we could defend, one that fixed the scaling problem without freezing the roadmap for months.

**Action.** Rather than argue it in meetings, I ran a two-week spike: prototypes of both approaches, each put under load tests that mirrored our real traffic. I took the results to the CTO and the investors as numbers, not opinions. What I proposed was a strangler-fig migration, where we'd extract only the two highest-traffic modules and leave everything else in the monolith. I also wrote down the criteria that would justify extracting the next module, so the debate wouldn't start over every quarter.

**Result.** The first extracted module shipped in six weeks and the busiest endpoints got about 40% faster. The rest of the monolith stayed stable all the way through the acquisition, and we never needed the big-bang rewrite.

**Reflection.** The hard part was social. People hear "we're not rewriting it" as a lack of ambition, and the data is what won the argument. I'd benchmark earlier next time to cut the debate short. For Lovable, the same instinct applies to the sandbox scheduler: find the one or two hot paths that actually limit throughput and fix those before redesigning the whole thing.

---

## 2. Rolling out AI developer tooling without authority

**Likely questions:** "How do you drive change across teams that don't report to you?" / "How would you integrate AI tools across engineering?" / Any Staff+ influence question.

**Situation.** At Benevity I was a Senior Staff IC with no reports. I believed AI-assisted development would save real time, but the two teams I wanted to bring along didn't report to me, and a lot of engineers there were sceptical.

**Task.** Change how people worked day to day without being anyone's manager and without a top-down mandate.

**Action.** I started with three engineers who were already curious and built small internal demos with them on real tickets, so the time savings were visible on work people recognised. Then came informal lunch-and-learns, demos only, no slides about the future of engineering. I put reusable prompt templates in a shared repo so nobody had to start from scratch, and I wrote up concrete wins as they happened, like a PR review cycle that came out about two hours shorter.

**Result.** Within three months roughly 70% of engineers on both teams were using AI-assisted review and code generation, and I'd become the person people came to with tooling questions across the org.

**Reflection.** Going without a mandate was slower, but it lasted. The engineers who adopted it on their own terms became the ones defending it in their teams, which a decree wouldn't have produced. The thing I'd add today is measurement from day one, before and after cycle time per team, because "it feels faster" doesn't hold up for long at Lovable's scale.

---

## 3. Building the platform from a blank page

**Likely questions:** "Tell me about something you built from scratch." / "How do you operate in ambiguity?" / "What would you do in your first 90 days?"

**Situation.** In 2016 I co-founded Alaya, an employee purpose and impact platform. There was no product, no customers and no code, and the business side was already talking to its first enterprise prospects.

**Task.** Design and build the whole platform, alone at first and later with a small team, quickly enough to win those first clients and solidly enough that it wouldn't need replacing a year later.

**Action.** I chose a stack I knew would scale without over-engineering, Node.js, React and PostgreSQL, and got the core features demo-ready in about three months. From there I grew it piece by piece: multi-tenancy, an API layer, impact reporting, postal campaigns. When we hired the first three engineers, I put the foundations in place that a team needs, meaning CI/CD, a code review culture and written architecture docs, so the codebase could take more people without slowing down.

**Result.** The platform reached production with 50+ enterprise clients across Switzerland and France, and Benevity, a Canadian unicorn valued at over $1B, acquired us in 2021. Their due diligence was, in practice, an external review of the technical decisions I'd made from the first day.

**Reflection.** Two things I'd change, and both matter for a platform role. I added proper APM far too late, so for a long stretch we debugged production from logs and guesswork, and these days I'd instrument from the first deploy. I also underestimated how expensive it is to retrofit multi-tenancy, and I'd design isolation boundaries in from the start. That's essentially what a sandbox runtime is.

---

## 4. Joining a much larger org after an acquisition

**Likely questions:** "Tell me about joining a team that moves differently from you." / "How do you get up to speed in a large codebase?" / Useful given how fast Lovable is hiring.

**Situation.** After the 2021 acquisition I joined Benevity as a Senior Staff Engineer. It was roughly ten times the size of Alaya, with a Java microservices codebase and a different culture and set of processes.

**Task.** Integrate Alaya's capabilities into Benevity's platform while still shipping new features, and do it without losing the velocity we'd had as a startup.

**Action.** I spent most of the first month mapping how the existing architecture actually worked before suggesting any changes. I put time into getting to know the platform and infra teams before I pushed technical opinions on them. Once there was some trust, I became the cross-team architecture contact for the Europe-facing product surface and started the AI tooling work from story 2.

**Result.** The core Alaya features were migrated into Benevity's platform. I contributed to three major cross-team architecture decisions and ended up as the go-to person for AI tooling across two engineering teams.

**Reflection.** To be honest, I started out moving too fast and tried to fix things that weren't broken. Slowing down and listening made me more effective, not less. Lovable is adding engineers quickly, so many people will be arriving in a codebase they didn't write, and that's exactly where structuring the codebase and the developer platform pays off.

---

## Gap to prepare for: Go / Rust and low-level isolation

This isn't a STAR story. It's the question they're most likely to push on, so have an honest answer ready. The posting asks for strong Go, Rust or C++ and knowledge of how schedulers, runtimes and isolation boundaries work. Your production code has been TypeScript, Java and Python, plus GWT-era architecture work at Sagemcom on telecom set-top boxes, where you were working close to constrained hardware.

Suggested framing: "My production work hasn't been in Go or Rust, and I won't pretend otherwise. What carries over is the systems thinking: I've designed multi-tenant isolation, run high-traffic services and worked on embedded telecom hardware. I've been working through Go seriously, and I'd expect to be shipping in it within the first few weeks." Only say the middle sentence if it's true by the time you interview. Before the call, read up on gVisor's architecture (Sentry, Gofer, the ptrace vs. KVM platforms) and Kubernetes RuntimeClass, so you can talk about the trade-offs in concrete terms.
