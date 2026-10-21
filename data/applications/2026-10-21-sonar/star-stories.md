# STAR+R Stories: Sonar, Staff Software Engineer (Java), Billing

Role signals from the posting: end-to-end ownership with little supervision, architecture of on-prem + AWS apps, Java and clean code, Postgres/SQL, steering AI coding tools, mentoring, cross-functional work with PM and go-to-market, and billing/Stripe as a nice-to-have. The stories below are picked for those signals. None of them claim billing experience, so the bridge to billing is handled in the notes at the end of each one.

---

## 1. A hard architecture call under delivery pressure

**Likely questions:** "Tell me about a technical trade-off you made." / "How do you deal with tech debt when the business wants features?"

**Situation.** By the time Alaya had a few dozen enterprise clients, our monolith was showing cracks on its busiest endpoints. The team was split between a full microservices rewrite and keeping things as they were, and our investors made it clear they wanted features, not a rewrite.

**Task.** It fell to me to make a call the team could stand behind and that wouldn't freeze the roadmap for a quarter.

**Action.** Rather than argue it out in meetings, I ran a two-week spike and built prototypes of both directions, then load tested them against our real traffic patterns. The numbers made the conversation with the CTO and the investors much shorter than I'd feared. What I proposed was a strangler fig: pull out the two highest-traffic modules, leave everything else in the monolith, and write down the criteria that would justify extracting anything further. That last part mattered more than I expected, because it stopped every future debate from starting from zero.

**Result.** The first extracted module shipped in about six weeks and the busiest endpoints got ~40% faster. The rest of the monolith stayed stable all the way through the Benevity acquisition, and we never needed the big-bang rewrite.

**Reflection.** Convincing people that "don't rewrite everything" was the right answer was harder than the engineering. Next time I'd benchmark earlier and cut the debate shorter.

**Bridge to Sonar.** Billing is exactly the kind of system where a rewrite is tempting and dangerous. Adding usage-based metering next to existing licences calls for the same approach: extract what has to change, keep invoicing for existing customers boring, and agree up front on what would trigger the next step.

---

## 2. Owning a platform end to end, from nothing to acquisition

**Likely questions:** "Tell me about something you owned end to end." / "How do you handle ambiguity?"

**Situation.** I co-founded Alaya in 2016 with a blank page. No product, no customers, and a business side that was already talking to enterprise prospects.

**Task.** My job was to build the whole platform, alone at first, and get it in front of clients fast enough that sales had something real to show.

**Action.** I went with a stack I knew could carry us without heroics (Node.js, React, PostgreSQL) and got the core features to a demo in roughly three months. After that it was steady expansion: multi-tenancy, an API layer, impact reporting, postal campaigns. Somewhere along the way the company outgrew a solo engineer, so I hired and onboarded the first three engineers and put in place the things I'd want on any team, CI/CD, code review, architecture docs that people actually read.

**Result.** We reached 50+ enterprise clients across Switzerland and France, and Benevity, a Canadian unicorn valued above $1B, acquired us in 2021. Their due diligence went through the platform I'd built, which is about as direct a validation of early technical decisions as you get.

**Reflection.** I added proper APM far too late, and retrofitting multi-tenancy cost us more than designing for it on day one would have. Both lessons apply to billing: you want observability on money flows from the start, and tenant boundaries baked into the data model.

---

## 3. Getting two teams onto AI tooling without being their manager

**Likely questions:** "How do you influence without authority?" / "How do you work with AI coding tools?" / "Tell me about mentoring."

**Situation.** At Benevity I was a Senior Staff IC with no direct reports. I was convinced AI-assisted development would change how our engineers worked, but the two teams I wanted to bring along didn't report to me.

**Task.** Change daily habits across both teams without a mandate, which also meant nobody had to listen.

**Action.** I started with three engineers who were already curious and worked with them on real tickets instead of toy examples. Once we had a few concrete wins, like a PR review cycle that came in about two hours shorter, I turned them into informal lunch-and-learn demos. There was no mandate and no slide deck about the future of engineering. The prompt templates we kept reusing went into a shared repo so anyone could pick them up, and I paid attention to where people got stuck, because the blockers were usually about trust in the output, not about the tool itself.

**Result.** Within about three months, ~70% of engineers on both teams were using AI-assisted review and generation, and I ended up as the informal AI tooling lead across the org.

**Reflection.** The no-mandate approach was slower, but it stuck. The people who adopted it on their own terms became its best advocates, which a top-down decree wouldn't have given me.

**Bridge to Sonar.** This maps onto two things in the posting at once: steering AI coding tools and mentoring people toward autonomy. It's also the reason Sonar's positioning resonates with me, because the trust problem I kept hitting is the one SonarQube is built to answer.

---

## 4. Joining a much bigger Java organisation after the acquisition

**Likely questions:** "Tell me about navigating change." / "How do you work across teams?" / "What's your Java experience?"

**Situation.** After the acquisition I joined Benevity as a Senior Staff Engineer in an engineering org roughly ten times the size of Alaya, with a different culture, different processes, and a Java microservices codebase I hadn't written.

**Task.** Bring Alaya's capabilities into Benevity's platform while still shipping new features, and without losing the speed we'd had as a startup.

**Action.** My first instinct was to start fixing things, and that was a mistake I caught fairly quickly. So I spent the first month mapping the existing architecture before proposing any changes, and I made a point of getting to know the platform and infra teams before pushing opinions at them. Over time that turned into a role as the architecture liaison for the Europe-facing product surface, which meant a lot of work translating between product needs on one side and platform constraints on the other.

**Result.** The core Alaya features were migrated into Benevity's platform, and I contributed to three major cross-team architecture decisions.

**Reflection.** Slowing down and listening first made me far more effective than my early push to change things that weren't broken. I'd bring the same posture into Sonar's StoreFront department, where billing touches product squads, go-to-market and finance all at once.

---

## 5. Prep notes for the billing questions

The posting calls billing and Stripe "highly desirable", not required. Don't invent experience. A straight answer works better:

"I haven't owned a payments stack. What I have done is run a multi-tenant SaaS for 50+ enterprise clients and spend years in Java services where correctness mattered. The parts of billing I'd expect to find hard are idempotency on usage events, reconciling metered usage against what Stripe invoices, and migrating existing customers between pricing models without surprising anyone. I'd want to spend my first weeks reading your Stripe integration and the incident history before proposing anything."

Questions worth asking them:
1. How is agent usage metered today, and where does the source of truth for usage live, in Sonar's own systems or in Stripe?
2. How do on-prem SonarQube licences and cloud usage-based plans share a billing model, if at all?
3. What was the last billing incident, and what changed afterwards?
4. How does the squad split work with the Staff/Principal engineers in other StoreFront squads?
