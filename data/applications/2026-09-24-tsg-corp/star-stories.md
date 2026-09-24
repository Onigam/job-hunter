# STAR+R Stories: AI Engineering & Adoption Lead @ TSG Corp

Role focus: turning AI-assisted development into a production-grade practice (code review, testing, documentation) and getting teams to adopt it inside a regulated insurance environment. Interviews will probably be in French with a technical part in English, so rehearse each story in both.

---

## 1. Getting two teams to adopt AI-assisted development without authority

**Likely questions:** "Tell me about a time you introduced a new engineering practice." / "How do you drive adoption when people are skeptical?" / "Comment faites-vous adopter un nouvel outil par des équipes qui ne dépendent pas de vous ?"

**Situation.** At Benevity I was a Senior Staff Engineer with no direct reports. Two teams I worked with closely were shipping on a Java microservices codebase, and AI coding tools were around but barely used. Some engineers thought they were a toy, a few thought they were a risk, and most simply had no time to try.

**Task.** Nobody asked me to fix this. I thought it was worth doing, which meant I had to change how people worked without being anyone's manager and without a mandate from above.

**Action.** I skipped the big announcement and found three engineers who were already curious. We tried the tools on real work, mostly pull request reviews and test scaffolding, and I kept notes on where it saved time and where it produced garbage. Once we had a handful of honest examples, I ran informal lunch sessions where I showed actual PRs, not vendor slides. The prompt patterns that held up went into a shared repo as templates so people didn't have to start from scratch, and I wrote up concrete cases, like a review cycle that went about two hours faster, because a specific story travelled further than any general claim.

**Result.** Within roughly three months about 70% of engineers on both teams were using AI-assisted review and generation. I ended up as the informal AI tooling lead across the org, and the early adopters became the people others asked for help, which mattered more than anything I said.

**Reflection.** The no-mandate approach was slower but it stuck, because people chose it. What I'd add today, especially in a place like an insurer, is a written quality bar from day one: what AI output is allowed to reach main, who reviews it, what gets logged. We handled that informally and it worked for us, but a regulated client would rightly want it on paper before the first workshop.

---

## 2. Joining a much larger engineering org after the acquisition

**Likely questions:** "How do you assess an existing engineering practice before changing it?" / "Tell me about working in a large, established environment." / "Tell me about a mistake you made."

**Situation.** When Benevity acquired Alaya in 2021, I went from a small team where I knew every line of code to an organisation roughly ten times bigger, with its own Java and microservices stack, its own processes and its own opinions.

**Task.** I had to integrate Alaya's capabilities into Benevity's platform while we kept shipping new features, and I had to earn the right to influence architecture in a place where nobody owed me anything.

**Action.** My first instinct was to fix things quickly, and I pushed a couple of changes too early that didn't land well. So I changed approach. I spent about a month mapping how the platform actually fit together and why certain decisions had been made, and I built relationships with the platform and infra teams before arguing for anything. Only after that did I start proposing changes, and I framed them around problems those teams already felt rather than around how we'd done things at Alaya.

**Result.** The core Alaya features were migrated into Benevity's platform. I contributed to three major cross-team architecture decisions and became the architecture liaison for the Europe-facing product surface.

**Reflection.** Some of what looked broken from the outside had good reasons behind it. That's directly relevant here: the first phase of this role is an assessment, and I'd rather spend the first weeks listening to how a client's teams build, test and release than arrive with a ready-made AI playbook.

---

## 3. A contested architecture decision, settled with data

**Likely questions:** "How do you make sure new practices meet production-quality standards?" / "Tell me about explaining a technical trade-off to non-technical stakeholders."

**Situation.** At Alaya our monolith was starting to crack under load. The team was split between a full microservices rewrite and staying put, and our investors wanted features, not a rewrite.

**Task.** I needed a decision we could defend to both engineers and investors, one that improved scalability without stopping delivery.

**Action.** Instead of arguing in meetings, I ran a two-week spike and prototyped both directions with load tests. I then presented the trade-offs to leadership and investors with numbers they could follow, which meant translating latency and coupling into delivery risk and cost. The proposal was a strangler-fig migration: pull out the two highest-traffic modules first, leave the rest alone, and agree in advance on the criteria that would justify extracting anything else.

**Result.** The first extracted module shipped in about six weeks and response times on the busiest endpoints improved by around 40%. The rest of the monolith stayed stable through the acquisition, and we never needed a big-bang rewrite.

**Reflection.** The hard part was convincing people that not rewriting everything was the right call, and data did most of that work. I'd use the same method for AI adoption: pilot on a narrow, measurable slice such as test generation for one service, set the success criteria beforehand, then decide whether to extend it across the SDLC.

---

## 4. Setting up engineering practices from a blank page

**Likely questions:** "Tell me about building standards and tooling for a team." / "How do you transfer knowledge so a practice survives without you?"

**Situation.** In 2016 I cofounded Alaya, an employee purpose platform. There was no product, no customers and no engineering team, just me and a stack decision to make.

**Task.** Build the platform, and later build the team and the practices that would let it grow without me being the bottleneck.

**Action.** I chose a pragmatic stack (Node.js, React, PostgreSQL) and got a first demo out in around three months. As enterprise clients signed, I added the multi-tenant architecture, the API layer and impact reporting. When I hired the first three engineers I set up CI/CD, a code review culture and architecture docs early, mostly so new people could make good decisions without asking me every time.

**Result.** The platform reached 50+ enterprise clients across Switzerland and France, and Benevity, a Canadian unicorn, acquired Alaya in 2021.

**Reflection.** I added proper observability too late and underestimated how painful retrofitting multi-tenancy would be. The lesson carries over: whatever you can't measure you can't defend in front of an auditor or a steering committee, so with AI-assisted tooling I'd instrument usage and quality from the first pilot.

---

## Honest gaps to prepare for

- **Insurance domain.** I haven't worked inside an insurer. My regulated-environment experience is public sector work at État de Genève (education systems) and enterprise clients at Alaya and Benevity. Say it plainly, then pivot to Story 2: I start by learning how a place works.
- **Java recency.** My deepest Java work was at Sagemcom (GWT) and Benevity's microservices. My recent hands-on work is more TypeScript and Python. Be ready to talk concretely about Java testing (JUnit, integration tests in CI) and how AI review tools behave on large Java codebases.
- **Consulting model.** TSG places people with clients. Ask early whether this is a single long engagement or rotating missions, since that changes how much of a "practice" you can actually build.
