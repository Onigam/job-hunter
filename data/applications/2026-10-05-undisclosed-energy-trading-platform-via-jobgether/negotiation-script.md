# Negotiation Script: Staff Engineer, Pricing (undisclosed energy trading platform via Jobgether)

**Context.** Remote-first, listed for Switzerland, staff-level IC owning the pricing service and Pricing API. The posting gives no salary, only "competitive for Staff Engineer" plus stock options. The perks are quoted in euros (€1,400/year remote allowance, €170/month wellbeing), which strongly suggests a company headquartered in the eurozone that may benchmark pay against EU rather than Swiss rates. That's the main risk in this negotiation. Jobgether is an intermediary, so the first comp conversation may be with the recruiter, not the hiring company.

Figures below are estimates from public comp data (Levels.fyi, Glassdoor, Swiss salary surveys, Carta/Pave startup benchmarks), not verified offers. Sanity-check them before the call.

---

## 1. Market anchors

### Switzerland (where Magino lives and is employed)

| Role / setting | Base (CHF) | Notes |
|---|---|---|
| Staff Engineer, Swiss scale-up (Zurich/Geneva) | 170k to 210k | Options or small bonus |
| Senior Staff / Principal, Swiss scale-up | 200k to 250k | Magino's current level |
| Staff/Senior engineer, Swiss energy trading or utility (Axpo, Alpiq, Pexapark tier) | 150k to 200k + bonus | Trading desks pay bonuses, tech roles less so |
| Big tech Staff in Zurich | 230k to 300k+ total | Ceiling, not a realistic target here |

### Eurozone remote (what they may try to pay)

| Role / setting | Base (EUR) |
|---|---|
| Staff Engineer, remote, EU energy or fintech scale-up | 110k to 150k |
| Staff Engineer, London/Amsterdam energy trading tech | 130k to 170k equivalent |

At current rates, €140k is roughly CHF 130k, which would be a pay cut for a Geneva Staff+ engineer. That gap is what needs closing.

### Target for this role

- **Walk-away:** CHF 175k base (or equivalent) plus meaningful options.
- **Realistic target:** CHF 190k to 205k base.
- **Opening anchor:** CHF 215k base.

---

## 2. Opening anchor

Try not to name a number first. Ask the recruiter: "What band has the company set for this role, and is it pegged to Switzerland or to the HQ country?" The answer tells you where the fight is.

If pushed for a number:

> "For a Staff role based in Switzerland, I'm looking at around CHF 215k base, plus the options package. That's in line with Staff+ engineering pay in Geneva and Zurich, and it reflects the scope here: taking pricing logic out into its own service, owning its reliability, and being the escalation point when live quotes go wrong. I've done that kind of extraction on a revenue-earning platform before, and I took that platform through to an acquisition."

Strongest cards: founding engineer through an acquisition by a $1B+ company, a real strangler-fig extraction with ~40% latency gains, and Staff-level influence without authority. Weakest card: no energy or fintech domain and lighter Python/FastAPI production depth, so don't oversell those; let the architecture and ownership track record carry the anchor.

---

## 3. If they come in low

**Scenario: offer around CHF 160k (or €140k to €150k converted).**

> "Thanks, I appreciate the clarity. The issue for me is that this is priced at a European rate, and I live and pay costs in Geneva, one of the most expensive cities in Europe. For a Staff role with escalation responsibility on live pricing, CHF 160k sits below what Swiss companies pay at this level. Could we get to CHF 195k? If the base has a hard cap, I'd look at a larger option grant to close part of the gap."

**Scenario: "Our salary bands are global" / location-neutral pay.**

> "That makes sense as a principle. Then the question is which band. If the global band for Staff tops out below Swiss market, it's effectively a geographic discount on a Swiss hire. I'd ask to be placed at the top of the band, with an option grant that reflects the difference."

**Scenario: they want a mid-level title or "Senior" first.**

> "The scope in the posting, owning the pricing domain and its incidents, is a Staff scope. I'd rather agree the title and level now than renegotiate in six months."

**Scenario: base is truly fixed.**

Move to other levers: larger option grant, signing bonus, guaranteed comp review at 6 or 12 months, higher remote-work allowance (€1,400/year doesn't cover a Geneva home office setup), and conference/learning budget.

---

## 4. Equity (stock options)

Ask for the following in writing before accepting:

- **Grant size as a percentage** of fully diluted shares, not just a number of options. Without the denominator the figure means nothing.
- **Strike price and latest valuation** (last round or 409A/equivalent).
- **Vesting:** 4 years with a 1-year cliff is standard. Ask for monthly vesting after the cliff.
- **Exercise window after leaving:** the default 90 days is harsh. Ask for 5 to 10 years, many European startups now offer it.
- **Acceleration:** at Staff level, double-trigger acceleration on change of control (acquisition plus termination) is a reasonable ask. Magino has been through an acquisition and knows what happens to roles afterwards; say so.
- **Swiss tax treatment:** options granted by a foreign company to a Swiss resident are taxed in Switzerland, usually at exercise or vesting depending on the plan. Ask whether they've structured grants for Swiss employees before, and whether employment runs through an Employer of Record. Check with a Geneva tax advisor before signing.
- **Anti-dilution:** employees rarely get it. Don't fight for it; ask instead for a refresh grant policy so ownership doesn't erode after future rounds.

Rough benchmark: a Staff hire at a Series B/C energy platform might see 0.05% to 0.25%. At an earlier stage, 0.2% to 0.5%.

---

## 5. Geographic discount pushback

> "I understand you have people in lower-cost locations. The role is advertised for Switzerland, though, and Geneva costs are well above most of the eurozone, housing especially. Swiss companies hiring for this level pay in the CHF 180k to 220k range. I'm not asking for a premium, just market rate for where the role is posted."

If they use an EOR: confirm whether employer social charges (AVS/AHV, LPP pension) come out of the quoted number or on top. A "total cost" figure can hide a 15% to 20% gap.

---

## 6. Competing offer template

Use only if true, or as a framing for active processes without naming numbers that don't exist.

> "To be transparent, I'm in late-stage conversations with a couple of other companies, including Staff-level roles in Zurich. This one is my first choice because of the pricing extraction work and the remote-first setup. If we can get to CHF [X] base with [Y] options, I'm ready to accept and stop the other processes."

Never invent a specific number from another company. If asked for details: "I'd rather not share the specifics, but they're at or above what I've mentioned."

---

## 7. Checklist before signing

- Base in CHF (or a fixed EUR to CHF conversion clause if paid in euros, so currency moves don't cut pay)
- Title: Staff Engineer, in writing
- Option grant: count, percentage, strike, vesting, exercise window, acceleration
- Employment entity: Swiss entity, EOR, or contractor (contractor means Magino pays all social charges, adjust the number up ~15% to 20%)
- On-call or incident escalation expectations and any compensation for it
- Notice period and non-compete scope (Swiss non-competes are enforceable if narrowly scoped)
- Remote allowance, equipment, travel to team meetups covered
