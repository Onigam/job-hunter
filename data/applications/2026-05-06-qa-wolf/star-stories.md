# STAR Stories — QA Wolf / Staff AI Engineer

---

## 1. Building Alaya from Zero to Acquisition
*Best for: "Tell me about owning a complex technical problem end-to-end" / "How do you approach building from scratch?"*

When I started at Alaya in 2016, the company was an idea, a founding team, and some early investor money. No product. I was the only engineer. The task was to build a purpose and impact platform for large enterprise clients: something that needed multi-tenancy, complex reporting, and the kind of data privacy requirements that European HR software demands, while the business was simultaneously signing its first contracts. I had roughly three months before we needed a demo that could close real deals.

I made a deliberate choice to resist over-architecting. The stack I picked (Node.js, React, PostgreSQL, with a GraphQL layer added as the API surface grew) was chosen not because it was fashionable but because it was stable, well-documented, and would let me move without hiring specialists. The first three months I shipped the core feature set: multi-tenant data isolation, a campaign builder, basic impact reporting. From there I iterated with direct client feedback. As we grew, I hired three engineers, established code review practices, set up CI/CD, and wrote architecture documentation that kept the team aligned as we scaled.

By the time Benevity acquired Alaya in 2021, we had 50+ enterprise clients across Switzerland and France, and the platform had never had a major production incident. The technical decisions held up through acquisition diligence.

Looking back, I'd have invested in observability earlier. We added proper APM about two years in, and there were several months where we were flying blind on performance. I'd also have designed the multi-tenant data model more deliberately from day one; the retrofit we did in year three cost us a full sprint and added unnecessary risk around a client migration.

---

## 2. Making a Hard Architecture Decision Under Pressure
*Best for: "Tell me about a technical trade-off you navigated" / "How do you balance speed and quality?"*

Around 2019, Alaya's monolith started showing cracks. Response times on the heaviest endpoints were creeping up, and the team was hitting merge conflicts nearly daily because the codebase had grown faster than our architecture had evolved. There was a real debate: full microservices migration, which some engineers were pushing for because it was the industry default, or a more conservative approach.

The pressure was real. Investors wanted new features, not rewrites. Clients depended on stability. And I had engineers who were enthusiastic about microservices for reasons that weren't entirely technical.

I ran a two-week spike. We prototyped two of the busiest modules as standalone services, load-tested both the monolith and the extracted versions under realistic traffic, and put concrete numbers on the table. The results showed that extracting two specific modules (the notification pipeline and the impact calculation engine) would get us roughly 40% of the performance gains we needed, without the coordination overhead of a full migration. I proposed a strangler-fig approach: extract those two first, define clear criteria for when to extract additional modules, leave the rest alone.

It was a hard sell. Some engineers felt we were half-committing. But we shipped the first extracted module in six weeks, saw the performance improvement immediately, and the remaining monolith stayed stable through the Benevity acquisition two years later. No big-bang rewrite ever happened.

The reflection: the hardest part wasn't the technical decision, it was getting alignment. I should have put the performance benchmarks on the table at week one instead of week two. Data cuts the ideology faster than arguments do.

---

## 3. Leading AI Tooling Adoption Without Authority
*Best for: "Tell me about introducing new technology to a team" / "How do you drive change without direct authority?"*

At Benevity in 2022, I was a Senior Staff IC with no direct reports. The engineering teams around me were going to fall behind on AI-assisted development practices if we didn't move deliberately. The problem: nobody had asked me to do this. It wasn't in my scope. I couldn't mandate anything.

I started with three engineers I knew were curious, people who'd mentioned LLMs in Slack or asked questions in architecture reviews. We ran informal experiments, documented what worked, and I built a small library of prompt templates for our most common tasks: PR review summarization, test generation, ADR drafting. I committed everything to a shared internal repo with documentation.

Then I ran optional lunch sessions, no attendance requirement, no slide deck from leadership, just me showing concrete time savings on real code from our codebase. The first session had four people. The fifth had twenty-two.

Within three months, around 70% of engineers on both teams were using AI-assisted code review or generation regularly. I became the informal AI tooling lead for that part of the org because I'd built something people actually wanted to use.

What I'd do differently: I started by showing the tools rather than solving the adoption problem. It took about six weeks to realize the friction wasn't awareness, it was habit change. Once I started embedding prompt templates directly into existing tooling (editor configs, CI scripts), adoption accelerated faster than the sessions alone had managed. I'd get to that integration step much earlier next time.

---

## 4. Navigating a Post-Acquisition Integration
*Best for: "Tell me about working in a large, unfamiliar system" / "How do you build credibility in a new environment?"*

When Benevity acquired Alaya in 2021, I went from cofounder in a 15-person company to Senior Staff Engineer in an organization of 200+ engineers with a Java-heavy codebase, different processes, and a different culture around technical decision-making. The context switch was disorienting in ways I hadn't anticipated.

My instinct in the first weeks was to find things that were broken and propose fixes. I had fresh eyes, and five years of building something that worked at our scale. I was confident. That was a mistake. I moved too fast, pushed opinions before I understood the context, and created friction with teams I needed as allies.

I course-corrected around six weeks in. I spent a month doing almost nothing but listening: sitting in on architecture reviews, reading old RFCs and design documents, mapping system dependencies before saying anything about them. I built relationships with platform and infrastructure teams before asking them to change anything.

That reorientation changed my effectiveness significantly. I became a useful cross-team liaison for the Europe-facing product surface. Over the following year I drove three major architecture decisions that got genuine traction, specifically because I'd built the trust first. The AI tooling work grew from that same foundation.

The lesson: in a new organization, listening is the fastest path to influence. The things that needed changing were real, but the credibility to change them had to be earned. I'd have started with the listening earlier, and saved six weeks of friction.
