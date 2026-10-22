# Negotiation Script: Staff Software Engineer, Platform (undisclosed fintech via Jobgether)

## Context that shapes the numbers

The employer isn't named. The posting's details closely match Alpaca's own platform engineering listings on Greenhouse: Redpanda event streaming plus auth/authz owned by the platform team, Go, Helm, Keycloak, Argo CD, the Grafana/Prometheus/Tempo stack, "competitive salary and stock options", a one-time USD 500 home-office allowance and a USD 150 monthly stipend on a Brex card. Alpaca is a US-headquartered brokerage infrastructure company (trading and broker APIs, real-time market data), venture-backed and remote-first across several countries. **Treat this as likely, not confirmed. Ask Jobgether to confirm before discussing money.**

What that means if it is Alpaca, or a company like it:

- **US company, remote-first, hiring in Switzerland.** You'd most likely be employed through an employer of record (Deel, Remote, Oyster and similar) or a contractor setup. Ask which one early. It decides pension (LPP/BVG), accident insurance, notice periods, and whether you get a real Swiss employment contract.
- **Location-based pay bands are probable.** Remote US startups often pay non-US hires from a regional band, sometimes well below the US one. Your job is to land in a Switzerland band (or a "Tier 1" band), not a generic "Europe" band.
- **Watch the currency.** If they quote in USD, insist on CHF or agree a fixed conversion. The perks in the posting are already in USD, which is a hint.
- **Venture-backed, not public.** Equity is stock options in a private US company. Real upside, real illiquidity. Base matters more than the option count suggests.
- **The title says Staff, and the scope backs it up**: a 2-3 year roadmap, the batch-to-streaming migration, org-wide standards, mentoring seniors, incident tech lead. Price it as Staff, not Senior.

## Market anchors (estimates, verify before the call)

Rough figures from public surveys and recruiter data. Re-check on levels.fyi (filter Switzerland and remote), Glassdoor, swissdevjobs.ch, the Michael Page and Hays Switzerland salary guides, and ask the Jobgether recruiter for the band directly.

| Benchmark | Base salary (approx.) |
|---|---|
| Staff / Principal Engineer, Zurich fintech or scale-up | CHF 180k to 240k |
| Staff Engineer, Geneva / Lausanne scale-up | CHF 165k to 210k |
| Staff Engineer, remote for US startup, Swiss band | CHF 160k to 220k (USD ~185k to 250k) |
| Same role, generic "EU" band (what to avoid) | €110k to 150k |
| Staff Engineer, US startup, US band (upper reference) | USD 220k to 280k |
| Options, Staff at a late-stage private fintech | ~0.02% to 0.1% of fully diluted shares, 4-year vest |

**Target:** CHF 205k base plus options.
**Opening anchor:** CHF 225k base.
**Walk-away floor:** CHF 180k base, or equivalent in USD at a fixed rate. Below that, Geneva-based Staff roles pay more with less currency and EOR risk.

Why the top of the range is defensible: 17+ years, co-founder who built a platform through to an acquisition by a $1B+ company, five years of Staff-level cross-team architecture at Benevity, and real experience running incremental migrations without stopping delivery. Be ready for them to argue the gaps (Go, Redpanda in production) to push the level down. See the level pushback script below.

## Getting into the right band

Raise this with the Jobgether recruiter or the internal recruiter before the hiring manager round:

"Before we go further, could you share the salary range for this role for someone based in Switzerland, and the currency it's paid in? I'm in Geneva, and I'd like to make sure we're using a Swiss range rather than a European average."

If they say the band is "Europe" or "international":

"I understand having one band keeps things simple. But I'm employed and taxed in Switzerland, Geneva is one of the most expensive cities in Europe, and the roles I'm comparing against are paid in CHF. Swiss employer social charges are also lower than in most of the EU, roughly 12 to 15% of gross against 20 to 30% in France or Germany, so the fully loaded gap is smaller than the headline number. Is there a Swiss adjustment or a higher-cost-location tier?"

## Opening anchor script

"Based on what Staff platform engineers earn at Swiss fintechs and scale-ups, and given the scope here, which is owning the streaming roadmap and the standards every other team depends on, I'm looking at around CHF 225k base plus options. I know that's at the upper end. How does that compare with your range for Switzerland?"

Then stop talking.

## If they come in low

**Script A, base well below range (for example CHF 150k to 165k, or USD 160k to 180k):**
"Thanks for being straight with me. That's closer to what a senior engineer makes in Geneva than someone owning a multi-year platform roadmap and being incident lead for real-time financial data. I'd need the base closer to CHF 205k to make this work. Where's the flexibility?"

**Script B, the band is fixed:**
"Understood. Then let's look at what can move: a larger option grant, a sign-on bonus, an early exercise option, and a compensation review at six months tied to agreed outcomes, for example the first batch pipeline fully moved to streaming, or a schema and versioning standard adopted across teams."

**Script C, location or remote discount:**
"I'd understand that if I were asking for Geneva pay on a role based somewhere cheaper. But I live and work in Switzerland, I'm paid and taxed here, and the jobs I'm comparing against are Swiss. The Swiss rate is the fair reference."

**Script D, level pushback ("no production Redpanda, no Go"):**
"That's fair, and I said so upfront. The broker and the language are the parts I'll ramp on fastest. The hard part of this role is getting a dozen teams to agree on delivery guarantees, schema evolution and deprecation, and to migrate off batch without breaking anyone. I've done that kind of migration and cross-team work for years. If you'd like to reduce the risk, I'm open to a level review at six months with clear criteria, but I'd want the Staff title and band from day one."

**Script E, currency:**
"I'm happy for the contract to reference USD if that's simpler for you, but I'd like either payment in CHF at a rate fixed in the contract, or an annual adjustment if USD/CHF moves by more than 5%. Otherwise my salary changes every time the dollar does."

## Equity: stock options in a private US company

Get answers in writing:

1. **Percentage, not just a share count.** Ask for the total fully diluted share count so you can compute your percentage.
2. **Strike price and latest 409A valuation.** Also ask the price per preferred share at the last round. The gap tells you how much upside is priced in.
3. **Vesting and cliff.** Four years with a one-year cliff is standard. Ask for monthly vesting after the cliff.
4. **Exercise window after leaving.** The default is 90 days, which forces you to pay cash and tax on illiquid stock. Ask for 5 to 10 years. Many startups now offer it, and it's worth more than a slightly bigger grant.
5. **Early exercise.** Ask whether it's allowed. It can lower the tax at grant in some cases, but check Swiss treatment first (point 8).
6. **Change of control.** Ask for double-trigger acceleration: if the company is acquired and your role is eliminated or materially reduced within 12 months, unvested options vest. You've been through an acquisition, so explain why from experience.
7. **Refresh grants and anti-dilution.** Employees don't realistically get anti-dilution protection. Ask instead for annual refresh grants or refreshes after a funding round or promotion, and whether there have been secondary sales or tender offers for employees.
8. **Swiss tax.** In Switzerland, options in non-listed companies are usually taxed as employment income at exercise, on the spread between fair value and strike, with social charges. Moving cantons or countries during vesting splits the taxation pro rata. US ISO treatment doesn't apply to you, so these will effectively be NSOs. If employed through an EOR, check who handles withholding on exercise. A short opinion from a Geneva tax adviser is worth it before signing.

Script if the grant is small:
"Since base is constrained, I'd like the option grant at the top of the Staff range, plus a longer exercise window after leaving. A 90-day window on private stock makes the options hard to actually use."

## Competing offer template (only if real)

"To be transparent, I'm in late-stage conversations for a Staff role in Switzerland at around CHF [X] base. This one's my preference because of the streaming platform scope and owning the batch migration, and I'd rather make it work. Is there room to close the gap?"

Don't invent a competing offer. If there isn't one, point to Swiss market data instead: "Staff platform roles in Zurich and Geneva are paying CHF 190k-plus base."

## Other things worth negotiating

- **Employment structure**: a proper Swiss employment contract through an EOR rather than contractor status, unless contractor day rates are significantly higher to compensate (expect +25 to 35% on gross to cover social charges, pension and no paid leave).
- **Pension (LPP/BVG)**: EORs often provide only the legal minimum. Ask for an above-minimum plan, which is worth several thousand CHF a year.
- **On-call compensation**: the posting includes an on-call rotation. Ask how it's paid (flat stipend per week, or time off in lieu) and how the rotation handles time zones, so that you aren't the overnight pager for US hours.
- **Working hours across time zones**: agree on a core overlap window in writing if most of the team is in the US or Asia.
- **Travel**: who pays for team offsites and how often they happen.
- **Vacation**: Swiss senior roles typically get 25 days. Ask for 25 minimum, or 27 to 30 if base can't move. Confirm Swiss public holidays are on top.
- **Learning budget and conference travel**: useful for Go and Redpanda ramp-up.
- **Sign-on bonus** if you'd leave unvested equity or a bonus behind.
- **Home office**: posting offers USD 500 one-time and USD 150 monthly. Fine; ask whether the monthly amount can be paid in CHF.

## Before the call, check

- Confirm the employer with Jobgether (likely Alpaca, unconfirmed).
- Latest funding round, valuation, and any recent layoffs or regulatory news. For a brokerage infrastructure company, check FINRA/SEC actions too.
- Glassdoor reviews mentioning engineering, on-call and pay outside the US.
- Which EOR they use in Switzerland and what it covers.
- Current USD/CHF rate.
