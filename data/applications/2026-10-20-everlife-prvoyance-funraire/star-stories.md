# STAR+R Stories: Everlife, Chief Product & Technology Officer

Role context: CPTO on a 4-person executive committee (CEO, COO, CMO), team of 2 developers in Switzerland, in-house PHP/Laravel + MariaDB platform built since 2021 with ~15 external integrations, rewrite already underway, sensitive client data under nLPD, conversational AI for senior users on the roadmap. Interviewers will probe four things: can he modernize without stopping releases, can he build and run a small team, can he roll out AI across dev and ops responsibly, and can he hold his own with non-technical executives.

---

## Story 1: Modernizing a production platform without stopping releases

**Likely questions:** "Your rewrite is underway. How would you run it?" / "Tell me about a technical trade-off under business pressure." / "How do you handle technical debt?"

**Situation.** By the time Alaya had a few dozen enterprise clients, our monolith was starting to crack under load on a handful of endpoints. Half the team wanted a full rewrite into microservices. The investors, understandably, wanted new features and had no appetite for a year of invisible work.

**Task.** I had to make a call we could defend on both sides: fix the scaling problem for real, without freezing the roadmap or putting client operations at risk.

**Action.** Rather than argue it out in meetings, I ran a two-week spike where we prototyped both approaches and load-tested them against our actual traffic patterns. When I took it to leadership and the investors, I brought numbers instead of opinions. What I proposed was a strangler-fig migration: extract the two highest-traffic modules first, route calls to them behind the existing interfaces, and leave everything else in the monolith until it gave us a reason to move it. We wrote down explicit criteria for when a module would earn extraction, which stopped the debate from restarting every sprint.

**Result.** The first extracted module shipped in about six weeks. Response times on the busiest endpoints improved by roughly 40%, and the rest of the monolith stayed stable all the way through the Benevity acquisition. We never did the big-bang rewrite, and we never stopped releasing.

**Reflection.** The technical side was the easy part. The hard part was convincing smart people that "don't rewrite everything" was the ambitious option. I'd benchmark earlier next time to shorten that debate. For Everlife, it's the same playbook I'd bring to the Laravel rewrite: map what's live, put the riskiest flows (contracts, payments, death files) behind stable interfaces first, and keep a release cadence the COO can count on.

---

## Story 2: Building a platform and a team from zero

**Likely questions:** "Tell me about building something from scratch." / "How would you structure the team over the first year?" / "How do you work with a CEO and commercial leadership?"

**Situation.** In 2016 I co-founded Alaya, an employee purpose and engagement platform. There was no product, no customers, and no engineering team. The business side was already talking to its first enterprise prospects.

**Task.** I owned everything technical: architecture, the first build, hiring, and the practices the team would grow into, while the company was trying to close real contracts with a product that didn't exist yet.

**Action.** I picked a stack I knew would scale without being clever about it, Node.js, React and PostgreSQL, and got a demoable core in front of prospects in about three months. From there we grew it step by step: multi-tenancy, an API layer, impact reporting, postal campaigns. As clients came in I hired and onboarded the first three engineers, set up CI/CD, made code review the default, and kept architecture decisions written down so new people didn't have to reverse-engineer them. A lot of my week was spent with the commercial side, turning what clients asked for into something we could actually build and maintain.

**Result.** The platform went into production with 50+ enterprise clients across Switzerland and France, and Benevity, a Canadian company valued at over $1B, acquired Alaya in 2021. That acquisition was a pretty direct verdict on the technical and product calls we'd made since day one.

**Reflection.** I added proper observability too late, and retrofitting multi-tenancy cost us more than designing for it up front would have. At Everlife the equivalent is partner access: brokers, funeral homes and institutions all need their own view of the data, so I'd want tenancy, roles and audit trails designed in from the start of the new platform rather than bolted on.

---

## Story 3: Scaling AI-assisted development across teams

**Likely questions:** "How have you rolled out AI in a dev team, and what did it do to your architecture?" / "How would you use AI in operations?" / "How do you drive change without a mandate?"

**Situation.** At Benevity I was a Senior Staff IC with no direct reports. I was convinced AI-assisted development could save the teams real time, but the two teams I wanted to bring along didn't report to me, and several engineers were openly skeptical.

**Task.** Change how people actually worked day to day, with no authority to tell anyone to do it.

**Action.** I started small with three engineers who were already curious and built demos on our own codebase rather than toy examples, because that's what made the time savings believable. Then came informal lunch-and-learn sessions with no mandate attached. The prompt templates that worked went into a shared repo so nobody had to start from scratch, and I wrote up concrete wins as they happened, like a PR review cycle that dropped by about two hours. Since then I've pushed it much further in my own work: I now run most of my engineering through multi-agent workflows with Claude CLI, which has forced me to get disciplined about structuring context and about checking what the models produce.

**Result.** Within about three months, roughly 70% of the engineers on both teams were using AI-assisted review and generation, and I ended up as the informal AI tooling lead across the org.

**Reflection.** Going without a mandate was slower, but it stuck, because the people who adopted it on their own terms became its advocates. What I watch more closely now is the effect on the codebase: AI makes it cheap to produce code, so without clear module boundaries and review rules you just accumulate inconsistency faster. With two developers at Everlife, I'd set those guardrails first, then extend the same approach to operations, starting with advisor call summaries and death-file preparation, where a human still signs off on every output.

---

## Story 4: Integrating into a much larger organization after acquisition

**Likely questions:** "How do you work with partners' technical teams?" / "Tell me about a time you had to adapt to a different culture." / "How do you earn credibility with peers on an executive team?"

**Situation.** After the acquisition in 2021 I joined Benevity as a Senior Staff Engineer. The organization was about ten times the size of Alaya, with a different stack (Java and microservices), different processes, and people who had no particular reason to trust a founder from a small acquired company.

**Task.** Get Alaya's capabilities integrated into Benevity's platform and keep shipping new features, without losing the velocity that had made us worth buying.

**Action.** My first month was mostly listening. I mapped the existing architecture before proposing anything, and I spent time with the platform and infrastructure teams before I pushed any technical opinions. Once I understood where things actually broke, I started bringing proposals to the cross-team architecture discussions, and over time I became the liaison for the Europe-facing product surface.

**Result.** We migrated Alaya's core features into the Benevity platform. I contributed to three major cross-team architecture decisions, and I became the person both teams came to for AI tooling.

**Reflection.** I moved too fast at the start and tried to fix things that weren't broken. Slowing down made me more effective, not less. It applies directly to Everlife: the platform has been running since 2021, the current developers know where the bodies are buried, and the six-month goal is a shared risk assessment. That has to be built with them, not delivered to them.

---

## Gaps to address honestly if asked

**PHP/Laravel.** Not my daily stack. My answer: I've moved across Java, GWT, Node.js and TypeScript over 17 years, the architecture problems (modularity, integrations, data integrity) are the same, and the first 30 days are pairing with the two developers on the existing codebase before deciding anything about the rewrite.

**Insurance and pensions.** No direct experience. Closest is enterprise B2B with Swiss and French corporate clients at Alaya, plus public-sector work for the État de Genève. Ask how contracts are financed and held (trust, insurer partner) early, because that drives the data model and the compliance scope.

**Security and nLPD.** Don't overclaim. Talk about multi-tenant access control at Alaya and enterprise security reviews at Benevity, then describe concretely what I'd put in place: role-based access, encryption at rest and in transit, append-only audit logs, an incident response runbook, and a data inventory mapped to nLPD obligations.

**Managing people.** At Alaya I hired and led the first engineers; at Benevity I led without reports. Be straight that this would be a return to direct management, and that with a team of two the CPTO is still writing code for the first months, which is what the posting asks for anyway.
