# STAR Stories — Dash0, VP of Engineering

---

## Story 1: Building Alaya from Zero to Acquisition

*Best for: "Tell me about building an engineering org from scratch" / "What's your approach when there's no playbook?" / "First engineer or founding engineer context"*

In 2016 I co-founded Alaya, a purpose and employee engagement platform. The situation was as blank as it gets: no product, no customers, no code. My task was to make all of that real, fast, while the business was already signing enterprise contracts and expecting demos within months.

I chose a stack that could grow without premature optimization: Node.js, React, PostgreSQL, a monolith that could be split later. The first version took about three months to get to a working demo, which is slower than some would want but fast enough to sign the first paying client. From there I iterated, adding multi-tenancy, an API layer, impact reporting, postal campaigns, and eventually a microservices extraction for the two highest-traffic modules. While still contributing code myself, I hired the first three engineers and put in place the CI/CD pipelines, code review culture, and architecture documentation that let us move without stepping on each other.

The result was a platform running with 50+ enterprise clients across Switzerland and France when Benevity acquired us in 2021. The acquisition itself was the validation: every architecture call made from day one held up through due diligence.

Looking back, I'd invest in observability infrastructure earlier. We added proper APM late, and it cost us debugging time at critical moments. I'd also design multi-tenancy in from day zero rather than retrofitting it when client three required it.

---

## Story 2: Post-Acquisition Integration at Benevity

*Best for: "Tell me about navigating organizational change" / "How do you lead in a large, complex org?" / "Describe a time you had to adapt quickly"*

After the acquisition in 2021, I moved from a team of five at Alaya to Senior Staff Engineer inside Benevity, which was running north of 500 engineers. The situation was genuinely disorienting: different culture, Java microservices instead of Node.js, a release process I didn't understand, and stakeholders who had no particular reason to trust my judgment.

My task was to integrate Alaya's capabilities into Benevity's platform while continuing to ship features, without slowing either side down.

I spent the first month listening rather than proposing. I mapped the existing architecture, found the teams who owned the systems I'd need to touch, and built relationships before pushing any technical opinions. When I did start contributing to cross-team architecture decisions, I came with data and context rather than personal conviction. On top of the integration work, I introduced AI-assisted development practices to two teams that didn't report to me: starting with three engineers who were naturally curious, running informal demos showing concrete time savings, and publishing reusable prompt templates to a shared repository.

Within about three months, roughly 70% of engineers on both teams were using AI-assisted code review and generation regularly. I contributed to three significant cross-team architecture decisions and became the informal go-to for AI tooling across the organization.

The lesson: I moved too fast at first, trying to improve things that weren't problems from the team's perspective. Slowing down and understanding the local context made me more effective, not less.

---

## Story 3: Architecture Decision Under Pressure

*Best for: "Tell me about a hard technical trade-off" / "How do you handle technical debt while shipping?" / "Describe a decision with incomplete information"*

At Alaya around 2019, our monolith was starting to show stress. Response times were creeping up on specific modules, the team was stepping on each other in the codebase, and investors were pushing for three new features simultaneously. The team debate had polarized around two options: full microservices rewrite or staying monolithic. Both sides had valid points and both were emotionally invested.

My task was to make a defensible call that didn't sacrifice long-term platform health for short-term delivery, without letting the debate drag on for another month.

I ran a two-week spike. We built prototypes of the two highest-traffic modules extracted as services, ran load tests, and measured the actual performance delta rather than projecting it from first principles. Then I brought the results to the CTO and investors: concrete numbers, a two-column trade-off comparison, and a proposed "strangler fig" approach that extracted only those two modules while keeping the rest of the monolith stable. The pitch wasn't "rewrite later" or "monolith forever." It was "here's when we extract the next one, and here's the criterion."

The first extracted module shipped in six weeks. Performance improved by around 40% on the busiest endpoints. The remaining monolith stayed stable through the acquisition two years later, no big-bang rewrite ever needed.

What I'd do differently: run the benchmarking earlier, before positions had hardened. By the time I ran the spike, people had been debating for weeks. Data earlier would have cut the argument time in half.

---

## Story 4: Leading Without Formal Authority

*Best for: "How do you drive adoption of new practices?" / "Tell me about influencing across teams" / "Describe a time you created change without a mandate"*

At Benevity post-acquisition, I was a Senior Staff IC with no direct reports. I needed to change how engineers worked by introducing AI-assisted development practices to two teams that had no particular reason to follow my lead on tooling choices.

My approach was to not make it about the tooling. I found three engineers who were naturally curious about AI coding assistants and started there, building demos that showed concrete time savings on work they were already doing rather than pitching hypothetical use cases. I committed reusable prompt templates to a shared repo so engineers could pick them up without asking me. I ran informal lunch-and-learn sessions, no attendance required, no mandate, and I documented specific wins in writing so people could see the evidence without having to take my word for it.

Within three months, around 70% of engineers on both teams were using AI-assisted code review and generation regularly. More importantly, the adoption came from within: engineers who had adopted it voluntarily were actively advocating for it to their colleagues. That advocacy couldn't have been manufactured with a top-down directive.

The reflection is that mandate-free adoption is slower in the first month and significantly stickier afterward. Engineers who choose a practice maintain it and evangelise it. Engineers who are told to adopt it do the minimum to comply.

---

## Story 5: Scaling the Engineering System Under Growth Pressure

*Best for: "How do you maintain delivery velocity as a team scales?" / "What's your approach to engineering process?" / "Tell me about building engineering infrastructure"*

At Alaya, between 2018 and 2020, we went from two engineers to seven while the number of active enterprise clients was tripling. The situation was that the informal practices that had worked fine at two people were starting to break at five: unclear ownership, inconsistent code review, no real incident response process, and onboarding taking weeks instead of days.

My task was to put the right structures in place without slowing down a team that was under constant delivery pressure from a growing customer base.

I took a "minimum viable process" approach: I introduced only the structure that solved a current pain point, not a projected future one. Code review standards came first because that was where the most time was being lost. Then an ADR (Architecture Decision Record) practice because we were re-litigating the same decisions in different conversations. Then a lightweight incident template because our first real production outage took six hours to diagnose due to no runbook.

Each change was proposed with a concrete problem it solved and a trial period. Engineers could push back and did. That kept the process lean and the team bought in.

The result was that onboarding time dropped from around three weeks to about one week by the time we had seven engineers. We shipped through the acquisition due diligence period without any major incidents, which mattered for the deal timeline.

What I'd keep doing: introduce process at the moment of pain, not in anticipation of it. Premature process is overhead. Process introduced when the team already feels the problem gets adopted immediately.
