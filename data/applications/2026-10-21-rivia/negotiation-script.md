# Negotiation Script: Rivia, Senior Infrastructure Engineer (Zurich, Enge, 3-4 days on-site)

The posting has no salary. What's known: Rivia is a Zurich company building a data engine for clinical trial intelligence (Rivia Spark, Rivia Detect). It raised a $15M Series A in March 2026 led by Earlybird, with ~40 trials running. LinkedIn lists the role at "Management level", it's described as the **first dedicated infrastructure hire**, and it had 200+ applicants within two days. Recruiter contact: Elena Rudakova, Senior Talent Partner.

Two consequences. First, sole ownership of a production AWS/EKS platform in a regulated domain is worth more than a generic "senior" band, so the scope is your main argument. Second, with 200+ applicants they have choice, so the case has to rest on what you'd own and fix, not on years of experience alone.

All ranges below are estimates from public Zurich comp data. Check levels.fyi, Glassdoor, the Swiss ICT salary survey and anyone you know at Earlybird portfolio companies before the first comp call.

## 1. Market picture (Zurich, 2026 estimates)

| Reference point | Base (CHF) | Notes |
|---|---|---|
| Zurich seed / Series A startup, Senior DevOps / Infra engineer | 130k to 160k | Options usually 0.05% to 0.3% |
| Zurich Series A/B startup, first infra hire / Lead platform engineer | 150k to 180k | Options usually 0.2% to 0.5% |
| Swiss scale-up or pharma/healthtech, Senior SRE / Cloud engineer | 140k to 175k | Bonus sometimes 5% to 10% |
| Big tech Zurich, Senior / Staff SRE | 170k to 250k | Liquid RSUs on top, not a like-for-like comparison |

**Your targets**
- Walk-away base: CHF 150k (below this, the Geneva-Zurich commute and solo on-call load don't add up)
- Target base: CHF 165k to 175k
- Opening anchor: CHF 185k base plus options in the 0.3% to 0.5% range

Be ready for the counter-argument that your background is broader platform and software engineering rather than ten years of pure DevOps. Your answer: the job explicitly wants strong software engineering (fixing issues inside JVM codebases) and real AI-agent use on infra, which pure ops profiles rarely have. You've owned a production platform alone through to an acquisition.

## 2. Opening the conversation

If they ask for your expectations first:

> "Given what the role is, the only infrastructure owner for production AWS and Kubernetes in a regulated clinical setting, plus cost, CI/CD and audit evidence, and given that I've run a whole platform alone as a cofounder through to an acquisition, I'm looking at a base around CHF 185k plus a meaningful option grant. I'm flexible on how cash and equity split."

If they push for a single number, repeat 185k. Don't give a range; they'll hear the bottom of it.

Points to have ready, in your own words: 17 years in engineering; five as cofounder and head of technology at Alaya, owning the stack end to end until Benevity's $1B+ acquisition; Staff-level cross-team architecture in a Java microservices estate; multi-agent workflows with Claude CLI on real work, which is something they list as a requirement.

A useful angle for this specific role: tie part of your value to the cost line. "Part of the brief is unit economics as volume grows. If the AWS bill drops even 15-20% in the first year, that pays a good share of the salary difference we're discussing." Only use it as a framing, don't promise a number.

## 3. If the offer comes in low

Say they come back at CHF 140k to 150k.

> "Thanks, and I want to make this work. The number feels levelled for a senior engineer inside an existing infra team. Here there isn't one: I'd be on-call alone, owning production, security evidence and cost. Can we look at the level first? If the level moves, I think the number follows."

If they say the band is fixed:

> "Understood. Then let's close the gap differently. Could we get to CHF 165k on base, or add a larger option grant plus a formal salary review at six months, tied to outcomes we agree now, for example audit readiness and a cost target?"

Also worth raising for a sole infra owner: on-call. Ask how it's compensated (flat allowance, time off in lieu) and whether there's a plan for a second infra person. If on-call is unpaid and solo, that's a fair reason to push base higher.

After stating your ask, stop talking.

## 4. Equity (Swiss startup options)

Questions to ask, in writing if possible:
- How many options, and what percentage of fully diluted shares does that represent today? An option count alone means nothing.
- Strike price, and the last preferred share price from the Series A.
- Vesting: standard is 4 years with a 1-year cliff. Ask for monthly vesting after the cliff.
- Exercise window after leaving: Swiss plans often give 90 days or less. Ask for 2+ years, or at least clear good-leaver treatment.
- Good leaver / bad leaver definitions. Being let go without cause must count as good leaver.
- Acceleration on change of control. Double-trigger (acquisition plus termination) is a fair ask, especially for the person holding the keys to production.
- Anti-dilution: employees rarely get it, but ask how refresh grants work after the Series B.

Swiss tax note: depending on the plan structure, options can be taxed as income at grant or at exercise, and cantonal rules differ (Zurich vs Geneva if you keep residence there). Ask whether they have a tax ruling for their ESOP, and get a quick opinion from a Swiss tax advisor before signing.

## 5. Zurich on-site from Geneva (no geographic discount)

The role is 3-4 days a week in Enge, about 2h45 each way by train from Geneva. That's a real cost for you, and it argues for Zurich-level pay, not a discount. If anyone suggests a lower number because you live in Geneva, push back: Geneva's cost of living is at least as high as Zurich's, and the job is in Zurich.

Options to put on the table, in order of preference:
1. Three days on-site rather than four, framed around focused infra work and on-call recovery.
2. A GA travelcard paid by the company (roughly CHF 4k a year in 2nd class), with train time counted as working time on travel days.
3. Relocation support if you decide to move, typically one month's salary or a fixed CHF 5k to 10k.

> "I'm fully up for being in Enge regularly; for an infra role, being next to the engineers matters. Coming from Geneva, I'd like a rhythm that works long term. Would three days a week work, with the company covering a GA?"

Don't trade salary for remote days. Keep the two conversations separate.

## 6. Competing offer template

Use only if it's true, or as a general reference to other processes without inventing details.

> "To be open with you: I'm in late stages with another company, and their offer is CHF [X] with [equity]. Rivia is where I'd rather be, because owning the whole platform at this stage is the job I want, so I'd like to find a way to make it work. Is there room on base or equity to get closer?"

Softer version if nothing concrete exists yet:

> "I'm talking to a few other teams in Switzerland at a similar level, so timing matters to me. If we can align on the package, I'd like to give you a clear answer within a week or so."
