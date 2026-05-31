# STAR Stories — Sr AI Engineer at n8n

---

## Story 1: Driving AI Tooling Adoption Without Formal Authority

*Best for: "Tell me about a time you championed a new technology" / "How do you drive change in a large org?" / AI adoption*

When Benevity acquired Alaya in 2021, I joined as a Senior Staff IC on a team roughly ten times the size I'd been working with. No direct reports, no mandate. But early on I noticed engineers spending significant time on code review and boilerplate test writing, work where AI tools were already meaningfully helpful. My job was to actually change that, without being anyone's manager.

The naive approach would have been to propose a company-wide initiative and watch it die in committee. So I started smaller: found three engineers across different squads who were openly curious, and spent individual sessions with each going through their actual workflow rather than running a generic pitch. We documented specific time savings together. One example that spread well was showing that a two-hour PR review cycle could consistently drop to under forty minutes with the right prompting patterns. I built a small shared repo of reusable prompt templates keyed to our codebase's conventions and committed to maintaining it myself.

The informal sessions scaled on their own. Within roughly three months, about 70% of engineers across both teams had incorporated AI-assisted code review into their daily work, and I'd become the informal go-to for the pattern, without a title that would have given me that authority.

What I'd do differently: invest earlier in instrumenting the baseline. The time-savings figures I quoted were real but estimated from memory, not measured. Actual data makes the story spread faster and holds up better with skeptics.

---

## Story 2: Building Alaya from Zero to Acquisition

*Best for: "Tell me about a time you built something from scratch" / "How do you handle ambiguity?" / Founding engineer roles*

In 2016, my co-founder and I started Alaya with a blank page. He handled business development; everything technical was mine, from stack selection to the first production deploy, while the sales side was already signing enterprise clients. The first three months felt like building under a moving deadline.

I made a deliberate bet on pragmatism over elegance: Node.js, React, and PostgreSQL, picked because I knew them well and they'd scale without requiring a large team to maintain. I built the core product features first, then layered in multi-tenant architecture, an API layer, impact reporting, and postal campaigns as the client list grew. Once we had revenue, I hired the first three engineers and set up the practices that would carry us through acquisition: code review culture, CI/CD, architecture decision records.

Five years later we had 50+ enterprise clients across Switzerland and France, and Benevity acquired us, a $1B+ Canadian company, in a transaction that was partly a direct validation of the technical decisions made from day one. The platform held through acquisition due diligence without a major rewrite.

Looking back, I'd have added proper observability around month three instead of month eighteen. We paid for that delay in debugging time on incidents that should have been faster to diagnose. I'd also design for multi-tenancy from day zero rather than retrofitting it a year in.

---

## Story 3: Architecture Decision Under Pressure

*Best for: "Tell me about a technical trade-off you navigated" / "How do you handle technical debt?" / Staff+ roles*

Around 2019 at Alaya, the monolith was showing scaling cracks. The team had polarized into two camps: full microservices rewrite versus continuing to patch the existing system. Investors were watching and not patient. My task was to make a defensible call and then actually deliver on it.

I ran a two-week spike with prototypes and load tests comparing the main approaches: a full microservices rewrite, a modular monolith restructure, and a strangler-fig migration extracting only the highest-traffic modules first. The spike produced concrete metrics, not opinions. I walked through the trade-offs with the CTO and the lead investor using those numbers, not architectural arguments.

We went with the strangler fig. I extracted the two busiest modules first, validated the pattern end-to-end, then defined clear criteria for when extracting additional services made sense. The first module shipped six weeks after the decision. Performance improved around 40% on those endpoints. The remaining monolith held stable all the way through the acquisition.

The hardest part was convincing people that "not doing the full rewrite" was the bold call, not the conservative one. I'd do more upfront benchmarking next time to shorten that debate. The data helps, but getting it in front of decision-makers faster would have cut weeks off the alignment process.

---

## Story 4: Navigating a Post-Acquisition Integration

*Best for: "Tell me about navigating change" / "Working with large teams" / "Cross-functional collaboration"*

After the Benevity acquisition in 2021, I moved from a team of five to an engineering organization of over a hundred people. Different stack (Java microservices), different processes, different culture. My first instinct was to immediately identify everything that could be improved and start pushing for changes.

I caught that instinct and deliberately didn't act on it. I spent the first month mapping the existing architecture and building relationships with the platform and infrastructure teams before forming strong opinions. A lot of 1-on-1s, not just architecture reviews.

That patience paid off in a concrete way. When I eventually proposed changes, I had enough context to frame them in terms of the existing system's constraints rather than "here's what we did at Alaya." I became the cross-team architecture liaison for the Europe-facing product surface and contributed to three major cross-team architecture decisions in the first year. I also drove the AI tooling adoption work that spread across two engineering teams within three months.

The reflection is direct: I was initially too eager to fix things that weren't broken in the new context. The same solution that worked at Alaya could be wrong at Benevity because the constraints were different. Listening first made my technical opinions more credible when I did share them.

---

## Story 5: Building an Internal AI Feature End-to-End

*Best for: "Tell me about an AI project you led" / "How do you approach building with LLMs?"*

At Benevity, I led the design and implementation of an AI-assisted code review assistant, starting from a rough idea to a tool used by the majority of the engineering org. The challenge wasn't the model; it was figuring out what part of the review workflow actually benefited from AI versus where it added noise.

I started with a two-week research phase: interviewed engineers about where they spent the most time in code review, then ran a series of prompt experiments against our actual PR history, measuring whether the model's suggestions matched what senior engineers flagged manually. That calibration step was the most valuable part. We ended up focusing the tool on three specific patterns, security surface additions, missing test coverage for changed logic, and inconsistent naming against the codebase's conventions, rather than trying to cover everything.

The implementation used TypeScript and Node.js, integrating with GitHub's API for PR context and using structured prompts with few-shot examples drawn from our real PR history. I instrumented it from day one with feedback loops so engineers could flag false positives, and used that signal to iterate on the prompting patterns week by week.

After three months, false positive rates had dropped enough that engineers stopped dismissing the suggestions by default. The tool became part of the standard PR workflow without any mandate. What I'd do differently: involve engineers in the calibration phase earlier. Some of my initial prompt assumptions were wrong, and I would have caught them faster with more input from people who reviewed code daily.
