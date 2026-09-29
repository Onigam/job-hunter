# STAR+R Stories: Sonar, AI Systems Engineer

These are picked for a Business Technology role that sits between AI agents, internal automation and governance. Expect questions on driving adoption of new tooling, integrating systems you didn't design, choosing the pragmatic option over the perfect one, and owning a platform end to end. Stories come from the story bank; nothing here goes beyond what actually happened.

---

## 1. Getting two teams onto AI tooling without being their manager

**Likely questions:** "How would you get internal teams to adopt the agents you build?" / "Tell me about influencing without authority." / "How do you identify automation opportunities with stakeholders?"

**Situation.** At Benevity I was a Senior Staff IC with no direct reports. Leadership wanted AI-assisted development to spread, but the two teams I worked closest with didn't report to me, and a few people were openly skeptical about whether it was worth the setup time.

**Task.** My job was to change how those engineers actually worked day to day, and I had no way to mandate it.

**Action.** I didn't start with a rollout plan. Three engineers were already curious, so I worked with them first and looked for places where the time savings were obvious, like PR review prep and boilerplate. Once we had a few real examples, I ran informal lunch sessions that were mostly live demos, not slides. The prompt patterns that kept working went into a shared repo as templates, which meant people could pick them up without asking me. I also wrote down concrete results as they came in; one of them was a PR review cycle that got about two hours shorter, and that single example did more than any pitch.

**Result.** Within three months roughly 70% of engineers across both teams were using AI-assisted review and generation, and I ended up as the informal AI tooling lead for the org.

**Reflection.** Going without a mandate was slower, but it stuck, because the people who adopted it on their own terms became the ones defending it. For Sonar's internal agents I'd do the same thing: find the team with the most painful manual process, build something small for them, and let them sell it to the next team.

---

## 2. Integrating into a much bigger system after the acquisition

**Likely questions:** "Tell me about integrating with a system you didn't build." / "How do you work across IT, HR and engineering?" / "How do you handle change?"

**Situation.** When Benevity acquired Alaya in 2021, I went from a small team where I knew every line of the platform to an org about ten times bigger, running Java microservices with its own processes and its own ideas about how things should be done.

**Task.** Alaya's capabilities had to be brought into Benevity's platform while we kept shipping, and nobody wanted to lose the delivery pace we'd had as a startup.

**Action.** I spent the first month mostly reading and asking questions, mapping how the existing architecture fit together before I proposed anything. I made a point of getting to know the platform and infra teams early, because they'd be the ones living with whatever we integrated. After that I took on a liaison role for the Europe-facing product surface, which meant a lot of translating between teams that used different vocabulary for the same problems.

**Result.** The core Alaya features were migrated into Benevity's platform. I contributed to three major cross-team architecture decisions along the way, and became the person two engineering teams came to about AI tooling.

**Reflection.** Early on I moved too fast and tried to fix things that weren't actually broken in the new org. Slowing down and listening first made me far more effective. That lesson applies directly to walking into an existing Atlassian estate: understand why each workflow and automation exists before touching it, because some of the strange ones are there for an auditor.

---

## 3. Choosing "done" over a rewrite

**Likely questions:** "Tell me about a trade-off you made." / "When did you push back on the status quo?" / "How do you prioritise under pressure?"

**Situation.** At Alaya our monolith was starting to show cracks under load. Half the team wanted a full microservices rewrite, and investors wanted new features, not a rewrite of anything.

**Task.** I had to make a call that we could defend on both fronts: fix the scaling problem without freezing delivery for months.

**Action.** Rather than argue it out in meetings, I ran a two-week spike with prototype load tests for both approaches. I took the numbers to the CTO and investors, which moved the discussion from opinions to data. What I proposed was a strangler fig approach where we'd pull out only the two highest-traffic modules and leave the rest alone, with written criteria for when any further module would be worth extracting.

**Result.** The first extracted module shipped in about six weeks, and the busiest endpoints got roughly 40% faster. The remaining monolith stayed stable all the way through the acquisition, and we never needed the big rewrite.

**Reflection.** The hardest part was convincing people that not rewriting everything was the correct answer. I'd do the benchmarking earlier next time to shorten that debate. It's the same instinct I'd bring to internal automation, where it's tempting to redesign the whole service catalog when two or three workflows are causing most of the tickets.

---

## 4. Owning a platform end to end, from nothing

**Likely questions:** "Tell me about a time you owned something completely." / "How do you work with high autonomy and ambiguity?"

**Situation.** In 2016 I cofounded Alaya, an employee purpose platform. There was no product, no customers and no code.

**Task.** I had to design and build the whole platform, first on my own and then with a small team, while the business was signing its first enterprise customers.

**Action.** I picked a plain stack, Node.js, React and PostgreSQL, because I needed something that could grow without me over-engineering it in month one. We got to a first demo in about three months. From there it grew in steps: multi-tenancy, an API layer, impact reporting, postal campaigns. When I hired the first three engineers I put CI/CD, code review habits and architecture docs in place so the platform didn't depend on my memory.

**Result.** The platform reached 50+ enterprise clients across Switzerland and France, and Benevity acquired Alaya in 2021.

**Reflection.** I added proper monitoring too late, and retrofitting multi-tenancy cost more than designing for it would have. For an internal platform like Sonar's the equivalent is visibility and access control: knowing which automations and agents are running, with what permissions, from day one rather than after the first audit finding.

---

## Handling the gap question

They will ask about 5+ years of JSM, CMDB and ITIL. Don't pad it. A version that's honest and still useful:

"I haven't been a Jira Service Management admin, and I haven't owned a CMDB. What I have done is build and run production platforms, design APIs and integrations, and ship LLM and multi-agent work, which is the part of this role that's hardest to hire for. The Atlassian side is well documented and certifiable; I'd plan to have ACP-120 done in the first few months, and I'd want to shadow whoever currently owns JSM before changing anything."

If they push on ITIL, say what you understand in practice (incident vs problem vs change, why change approval exists) and don't claim certification.
