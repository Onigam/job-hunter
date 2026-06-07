# STAR Stories — n8n Senior AI Engineer

---

## 1. Shipping AI Tooling That Engineers Actually Used

**Best for:** "Tell me about shipping an AI-powered feature" / "How do you approach AI product work?"

In 2023 at Benevity, the engineering org was watching the GitHub Copilot rollout at other companies with skepticism. A few engineers had tried it individually, but there was no structured approach and no evidence it was changing anything in practice.

My task was to figure out whether AI-assisted development was worth investing in more seriously, and if so, to actually make it stick across teams, not just run a pilot that died after two weeks.

I started by mapping where engineers lost time. Code review was the clearest signal: reviewers would spend 45 minutes on context reconstruction before writing a single comment. So I built a prompt template that fed the PR diff, the relevant test file, and a short architecture note into a structured LLM call via the Anthropic API, producing a first-pass review with flagged patterns. Then I ran three demos with volunteers, tracking how long their reviews took before and after. The data showed roughly a two-hour reduction per reviewer per cycle. After that, I committed the templates and internal tooling to a shared repo, ran informal lunch sessions with no attendance mandate, and let word-of-mouth do most of the work.

Within three months, about 70% of engineers on both teams were using AI-assisted review and generation in their regular workflow, and I became the de facto AI tooling lead without any formal authority over either team.

What I'd do differently: I built the evaluation benchmarking informally, in Notion, which made it hard to replicate later. I'd instrument that from the start, especially since evaluation infrastructure is exactly what AI product teams at places like n8n are building as a first-class concern.

---

## 2. Building Alaya's Platform from Zero

**Best for:** "Tell me about a time you built something complex from scratch" / TypeScript/Node.js depth

In 2016, I co-founded Alaya with a co-founder on the business side. We had no product, no customers, and a blank server. The plan was to build an employee purpose and volunteering platform for enterprise clients.

I had to architect and build the entire platform myself initially, then grow a team around it, while the business was signing the first contracts. The pressure was real: if I made architectural decisions that slowed us down six months later, we'd miss the acquisition window.

I chose a pragmatic stack: Node.js and TypeScript on the backend, React on the frontend, PostgreSQL as the primary store, MongoDB for document-heavy reporting data. I made multi-tenancy a first-class concern from day one after nearly getting it wrong in the first sprint. The first working demo took three months. Over the next four years I expanded the platform to cover multi-tenant data isolation, a REST API layer, impact reporting pipelines, postal campaign tooling, and eventually added three engineers, a CI/CD pipeline, and architecture documentation that new hires could actually use.

The platform reached 50+ enterprise clients across Switzerland and France. Benevity, a Canadian unicorn with a $1B+ valuation, acquired us in 2021. That acquisition due diligence was the real test of the architecture decisions: nothing fell over.

If I did it again, I'd invest in observability from week two rather than month eighteen. We added APM late and spent weeks debugging production issues we could have caught earlier with proper tracing in place.

---

## 3. Making a Hard Architecture Call Under Pressure

**Best for:** "Tell me about a technical trade-off" / "How do you handle technical debt?"

At Alaya around 2019, the monolith was showing cracks. Two modules in particular, the notification dispatcher and the impact aggregation pipeline, were causing cascading slowdowns under load. The team was split: half wanted a full microservices rewrite, half wanted to keep iterating on the monolith. Investors were pushing for new features, not architecture work.

My job was to make a defensible call that wouldn't blow up the roadmap but would actually solve the performance problem.

I ran a two-week spike. I set up prototype load tests for both the monolith-patched version and an extracted service approach, tracked latency and failure rates, and presented the results to the CTO and our investor contact with concrete numbers rather than architectural opinions. I proposed a strangler fig approach: extract only the two highest-traffic modules, validate that pattern in production, then define explicit criteria for extracting anything else. No big-bang rewrite, no committed timeline for the rest of the stack.

The first extraction shipped in six weeks. Performance on those endpoints improved roughly 40%. The rest of the monolith stayed stable through the acquisition without further major work.

The hardest part wasn't the technical decision, it was convincing people that restraint was the right call. Engineers who'd been burned by previous rewrites were relieved. The investors needed the data more than the argument. I'd do more early benchmarking next time to cut the debate phase shorter.

---

## 4. Post-Acquisition Integration at Benevity

**Best for:** "Tell me about navigating change" / "Working in a much larger org" / "Cross-functional influence"

When the Benevity acquisition closed in 2021, I went from a team of four at Alaya to a distributed engineering org of 50+. Different culture, Java microservices instead of Node.js, different deployment patterns, different definition of done.

My task was to continue shipping features on the Alaya product surface, now inside Benevity's infrastructure, while building credibility in an org that had its own established engineering culture and didn't know me yet.

I spent the first month mapping the architecture before touching anything. I read ADRs, traced service dependencies, had one-on-one coffees with every engineer whose services would interact with the Alaya integration. I didn't push technical opinions until I'd built relationships that gave my opinions some weight. When I did start proposing changes, the conversations went faster than they would have if I'd arrived with a list of improvements on day three.

Over the next two years I contributed to three major cross-team architecture decisions, became a regular voice on the platform team's RFC process, and drove the AI tooling adoption described in the first story.

What I learned was that moving fast in a new org usually means slowing down first. Engineers who adopt something on their own terms become internal advocates in a way that a top-down mandate never produces. That's a pattern I'd apply again at n8n, especially for anything touching how the AI features integrate with the core node execution model.

---

## 5. Leading a Hard Conversation With a Non-Technical Stakeholder

**Best for:** "How do you communicate technical constraints upward?" / "Tell me about convincing stakeholders"

At Alaya in late 2019, one of our enterprise clients asked for a feature that would have required us to build a real-time reporting pipeline on data we were aggregating daily, not hourly, not in real time. The sales team had already suggested it was possible in a pre-sales call.

My task was to reset expectations without losing the deal, while not committing to architecture that would have taken three months to build and would have degraded performance for every other tenant.

I built a one-page technical brief, no jargon, that explained what real-time meant in our architecture, what we could ship in two weeks (a manual refresh dashboard), and what the full real-time implementation would cost in time and infrastructure. Then I sat in the client call with the account manager and walked through the brief rather than handing it over. The client's actual requirement turned out to be "I need to refresh this myself when I'm in a board meeting," which the two-week version solved completely.

The deal closed. We shipped the refresh dashboard on schedule. The full real-time pipeline wasn't needed for another eighteen months, and by then the architecture to support it was already in place as a byproduct of other work.

The lesson was that translating a technical constraint into a business question usually reveals that the original ask was a solution, not a requirement.
