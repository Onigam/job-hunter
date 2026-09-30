# STAR+R Stories: AI Native Founding Product and Platform Engineer (SGS via Jobgether)

The posting is written for someone who is both the first product engineer and the person building the paved road for everyone after. Expect questions on greenfield ambiguity, architecture trade-offs, developer platform adoption, mentoring, and how you'd work inside a large parent company. These four stories cover that ground. Each one runs about two minutes out loud.

---

## 1. Building Alaya from a blank page to acquisition

**Likely prompts:** "Tell me about building something from zero." "How do you handle ambiguity?" "What does founding engineer mean to you?"

**Situation.** In 2016 I cofounded Alaya, a platform for employee purpose and engagement. There was no product, no customers and no code, just a business partner who was already talking to large companies and needed something to show them.

**Task.** My job was to build the entire platform, alone at first, and then turn it into something a small team could work on without me being the bottleneck. All of that had to happen while the business was signing its first enterprise clients.

**Action.** I picked a boring stack on purpose: Node.js, React and PostgreSQL, things I knew would carry us a long way without clever infrastructure. The first three months went into getting to a demo we could put in front of a real buyer. After that the product grew in layers, with multi-tenancy, an API layer, impact reporting and postal campaigns, each one driven by what customers were actually asking for. Once we could hire, I brought on the first three engineers and set up the things that let them move without asking me: CI/CD, a code review habit, and written architecture docs so decisions didn't live only in my head.

**Result.** Alaya reached 50+ enterprise clients across Switzerland and France, and Benevity, a Canadian unicorn valued above $1B, acquired us in 2021. The platform held up through due diligence, which is a fairly honest test of early technical choices.

**Reflection.** Two things I'd change. I added proper observability far too late, and we spent real time debugging production issues we could have seen coming. I also treated multi-tenancy as a feature to add rather than a property of the data model, and retrofitting it cost more than designing for it would have. On a greenfield build like this one, both would be in place from the first week.

---

## 2. Choosing a strangler fig over a rewrite

**Likely prompts:** "Tell me about a hard technical trade-off." "How do you balance delivery with long-term architecture?" "How do you handle tech debt?"

**Situation.** A few years into Alaya, the monolith was showing cracks under load. The team was split between a full microservices rewrite and staying put, and our investors wanted features, not a rewrite.

**Task.** I had to make a call we could defend on both fronts: something that fixed the scaling problem without freezing the roadmap for months.

**Action.** Rather than argue it in meetings, I ran a two-week spike and built prototypes of both approaches with load tests against them. The numbers made the conversation much shorter. I presented the trade-offs to leadership and the investors with those metrics, then proposed a strangler fig approach: pull out the two highest-traffic modules first and leave everything else in the monolith. We also wrote down explicit criteria for when any other module would earn its own service, so the next extraction wouldn't restart the same debate.

**Result.** The first extracted module shipped in six weeks. Response times on the busiest endpoints improved by about 40%, the rest of the monolith stayed stable, and we never needed a big-bang rewrite, including through the acquisition.

**Reflection.** Convincing people that not rewriting everything was the right answer was the hardest part, and data won that argument, not seniority. I'd benchmark even earlier next time. It's also the pattern I'd bring to a legacy rebuild at SGS: find the seams with the most traffic or pain, carve those out cleanly, and let the rest follow when there's a reason.

---

## 3. Getting two teams onto AI-assisted development without a mandate

**Likely prompts:** "How do you influence without authority?" "How would you drive adoption of a platform or tooling?" "Tell me about mentoring engineers."

**Situation.** At Benevity I was a Senior Staff IC with no direct reports. I was convinced AI-assisted development would change how our engineers worked, but the two teams I wanted to bring along didn't report to me, and plenty of people were skeptical.

**Task.** Change daily engineering habits across both teams without being anyone's manager and without a top-down decree.

**Action.** I started small, with three engineers who were already curious. We built internal demos around real work, like cutting a PR review cycle down by a couple of hours, because concrete time saved on a familiar task persuades people far better than a slide. From there I ran informal lunch sessions that were demos rather than pitches, and put reusable prompt templates in a shared repo so anyone could pick them up. Whenever someone found a use that worked, I wrote it up so the result traveled further than I could.

**Result.** Within three months, about 70% of engineers on both teams were using AI-assisted code review and generation, and I became the informal AI tooling lead across the org.

**Reflection.** The voluntary route was slower but it stuck, because the people who adopted it on their own terms became its advocates. That's how I think about an internal platform too. A paved road only works if teams choose it because it's genuinely faster, so the platform team's job is to make the right way the easy way, not to police it.

---

## 4. Joining a much larger organization after the acquisition

**Likely prompts:** "Tell me about navigating change." "How would you work inside a large parent company?" "Tell me about a mistake you made."

**Situation.** After the acquisition in 2021, I went from running engineering at Alaya to being a Senior Staff Engineer in an org roughly ten times bigger. The codebase was Java and microservices, the processes were different, and so was the culture.

**Task.** Bring Alaya's capabilities into Benevity's platform while still shipping new work, and without losing the speed we'd had as a startup.

**Action.** My first instinct was to fix what looked wrong, and that went badly for a few weeks. So I changed course. I spent about a month mapping the existing architecture before proposing anything, and built relationships with the platform and infrastructure teams before pushing opinions at them. Once people knew I understood their constraints, my proposals got a real hearing. Over time I became the architecture liaison for the Europe-facing product surface.

**Result.** We migrated Alaya's core features into Benevity's platform, I contributed to three major cross-team architecture decisions, and the AI tooling work from the previous story grew out of the trust built during this period.

**Reflection.** I moved too fast at the start, trying to change things that weren't actually broken. Listening first made me more effective, not less. For a founding team inside a group the size of SGS, that lesson matters a lot: the new product will need data, identity and compliance from the wider company, and those teams are far easier to work with if you've understood their world before asking for anything.

---

## Gap questions to prepare for

**"Have you used Terraform?"** Answer honestly. My infrastructure experience is AWS, Docker, Kubernetes and CI/CD, and I haven't owned a Terraform codebase end to end. Say how you'd close the gap (declarative infra is familiar territory, and in a greenfield setup you'd pick conventions early and keep modules small), and don't overclaim.

**"What's your observability experience with Prometheus, Grafana or Jaeger?"** Tie it back to Story 1. Coming late to observability at Alaya is exactly why you'd set up metrics, tracing and alerting in the first sprint here. Be clear that you haven't run that specific stack yourself.

**"Go?"** Backend work has been TypeScript and Node.js, with Python and Java. The posting accepts TypeScript for distributed backends, so lean on that.

**"You're in Geneva. The role is US-based."** Raise it before they do. Ask whether the team would consider a Geneva-based hire close to SGS headquarters, or a Europe-friendly arrangement with regular US overlap. If US work authorization is a hard requirement, you want to know on the first call, not the fourth.
