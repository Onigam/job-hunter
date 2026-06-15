# STAR Stories — Tech Lead, LLM & Generative AI

Tailored for: AI startup, small team (3 AI engineers), hands-on tech lead, production LLM systems, alignment/moderation challenges.

---

## Story 1: Driving AI Tooling Adoption Across Engineering Teams

**Best for:** "How have you led a team through a technical shift?" / "Give me an example of technical leadership without direct authority."

In 2023, I was a Senior Staff Engineer at Benevity with no direct reports, but I'd been asked informally to get two engineering teams, about 20 people total, to actually use AI-assisted development in their daily work. Most of them were skeptical. A few had tried Copilot and bounced off it.

I didn't mandate anything. Instead, I started with three engineers who were openly curious and built a small internal demo showing concrete time savings on a real PR review cycle they all recognized. That demo took about a day to build and traveled fast. From there I ran informal lunch sessions, no slides, just screen sharing, and committed a set of reusable prompt templates to a shared repo anyone could copy-paste from. I documented one specific story where AI assistance saved two hours on a non-trivial refactor, and that single case study did more than any presentation would have.

Within three months, roughly 70% of engineers on both teams had integrated AI tooling into their regular workflow, and I hadn't issued a single mandate. A few of them became advocates internally, which made the adoption much stickier than a top-down rollout would have been. I became the informal AI tooling lead across the org from there.

What I'd do differently: I started too broad initially and wasted a week trying to convince everyone at once. Finding the two or three people who are already curious, and working outward from them, was the actual move. I should have done that on day one.

---

## Story 2: Choosing Between Fine-Tuning and Prompt Engineering Under Delivery Pressure

**Best for:** "Tell me about a hard technical trade-off you navigated." / "How do you make architectural decisions under time pressure?" / "SFT vs prompting, when do you choose?"

At Alaya, we had a multi-tenant reporting feature that needed to generate custom, branded narrative summaries from structured impact data. The initial approach was prompt engineering with a general model. It worked well for English but broke down on French and German outputs, producing outputs that read mechanically and, in a few cases, just factually wrong for the dataset.

My task was to decide whether to invest in fine-tuning a model on our dataset or to redesign the prompt architecture. Investors were waiting on a demo for a Swiss German client. We had about three weeks.

I ran a two-day technical spike. I tested four prompt strategies with chain-of-thought variants against a sample of 200 real data points, scored by a bilingual reviewer, and then ran a rough cost and timeline estimate on what a small SFT run would require. The spike showed that structured prompt decomposition with language-specific examples got us to ~85% acceptable output quality without any training run. Fine-tuning could probably push to 95%, but it would take six weeks minimum to do it properly, and we didn't have clean enough labeled data to do it right.

We shipped the prompt-based approach in ten days, passed the demo, and I put fine-tuning on a roadmap with a realistic data collection plan. Performance on that feature improved significantly for the demo and we didn't ship something brittle. The client signed.

What I'd do differently: I'd set up an evaluation harness on day one of any new LLM feature now, not after the first failure mode shows up. Running evals late costs more than building them early.

---

## Story 3: Building the Alaya Platform from Zero to Acquisition

**Best for:** "Tell me about something you built from scratch." / "What's the biggest technical challenge you've owned end to end?" / Small team, founding engineer roles.

In 2016, I co-founded Alaya. We had a blank page, no customers, and no product. I was the only engineer for the first several months while the business side was signing its first enterprise pilots.

The core challenge wasn't just building fast. It was building in a way that wouldn't need to be thrown away when we had ten clients instead of one. I made a deliberate call to keep the stack simple and boring: Node.js, React, PostgreSQL. I designed for multi-tenancy from the start because retrofitting it later would have been brutal, and I'd seen that mistake made before. The first real features shipped in about three months. From there, I iteratively expanded the platform: API layer, impact reporting engine, postal campaign tooling, then a proper permissions model as we started handling client data at scale.

Over four years, we grew to 50+ enterprise clients across Switzerland and France. I hired and onboarded the first three engineers, set up CI/CD, code review culture, and architecture documentation. Benevity acquired us in 2021.

The acquisition itself was a validation of those early technical decisions. Nothing had to be rewritten before the deal closed. The codebase was readable and the architecture was coherent enough for Benevity's due diligence team to assess in under a week.

What I'd do differently: I added proper APM and observability too late. For the first year, we were flying blind on performance. I'd put that in from day one next time.

---

## Story 4: Post-Acquisition Integration at Scale

**Best for:** "Tell me about navigating a big organizational change." / "How do you work with teams you don't control?" / Collaboration across functions.

After Benevity acquired Alaya in 2021, I joined a company about ten times larger than anything I'd worked in before. Different codebase, different culture, different processes. My role was Senior Staff Engineer, which meant no direct reports but real responsibility for cross-team technical outcomes.

The first thing I did was spend a full month just mapping: the architecture, the team dynamics, who the real decision-makers were versus the org chart. I asked a lot of questions and pushed no opinions for the first four weeks. That felt slow, but it meant that when I did propose things, people listened because I'd demonstrated that I'd done my homework.

The concrete task was integrating Alaya's core capabilities into Benevity's platform, specifically the impact reporting and multi-tenant data isolation layers, without disrupting the product roadmap or the Europe-facing team that was mid-sprint. I drove three cross-team architecture decisions over about 18 months, all of them requiring coordination across platform, backend, and front-end teams.

The integration shipped. I became the go-to person for AI tooling decisions and built relationships with two engineering teams that I had no authority over. The cross-team collaboration approach I used there is something I've since replicated whenever I've had to influence without a direct reporting line.

What I'd do differently: I initially moved too fast on a couple of process suggestions. I was trying to "fix" things that weren't actually broken, just different from what I was used to. Slowing down and listening first made me more effective. I should have started with that instinct rather than having to learn it again.

---

## Story 5: Designing a Context-Aware System for Behavioral Edge Cases

**Best for:** "Tell me about a time you solved a nuanced systems design problem." / "How do you approach safety or moderation challenges?"

At Benevity, I was asked to design a content classification system for user-generated content in an employee engagement context. The challenge was that the existing approach used a binary classifier that was generating too many false positives on content that was culturally appropriate in some of the company's markets (French Canadian idioms, for instance) but flagged by a US-centric model.

My task was to propose a more nuanced approach without building a full custom model, since we didn't have the labeled data volume or the compute budget for that at the time.

I spent two weeks analyzing the failure cases, categorizing them by language, region, and content type. I found that the majority of false positives clustered in about six specific categories, all of them edge cases in French-language contexts. Rather than retraining the full classifier, I built a post-processing layer with rule-based overrides for those specific categories, paired with confidence thresholds that routed low-confidence outputs to a human review queue instead of auto-rejecting.

False positive rate dropped by about 40% within the first month. Human review volume went down significantly because the auto-decisions were more reliable. The system stayed in production for over a year without requiring significant changes.

What I'd do differently: I'd instrument the classification pipeline for ongoing drift monitoring from day one. We eventually noticed quality degradation when new content types emerged, but caught it later than we should have because we weren't watching the right metrics continuously.
