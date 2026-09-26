# Negotiation Script: Founding Engineer, AI Infrastructure (Jobgether client)

## Context before talking numbers

The posting comes through Jobgether on behalf of an unnamed early-stage company that has a working agentic system (it seems to serve recruiting or service-delivery businesses) and wants it rebuilt to handle up to a million users. The published band is **€80k-140k** plus founding equity. The job is remote within Europe at first (the listing is filed under France), with a **move to San Francisco expected within the first year**, relocation support and US visa sponsorship from day one. It's the first engineering hire, with a stated path to CTO.

That shapes the whole negotiation:

1. **This is really two packages.** The Europe phase (up to ~12 months) gets paid out of a euro band set for France. The San Francisco phase has to be priced at SF founding-engineer rates. Agree both in writing now. Once I'm on a visa that depends on them, I'll have very little room to negotiate.
2. **The Swiss problem.** A Geneva-based hire costs a lot more than a French one, and a startup this early almost certainly has no Swiss entity. Ask right away how they'd employ me: an EOR (Deel, Remote, Oyster) on Swiss payroll, or a contractor setup. Contracting from Geneva means I pay AVS/AHV contributions and my own pension, so the gross number has to go up by roughly 12-15% just to break even.
3. **Is SF a hard requirement?** My priority is Geneva. Before investing in the process, find out whether "expected within the first year" is firm, and what happens if the move slips or doesn't happen. That answer changes the equity and salary conversation completely.
4. **Who's the company?** Get the name, the funding stage, the amount raised, who's on the cap table, and the runway, before giving any number. You can't value founding equity in a company you can't name.

## Market reference (estimates, verify before the call)

Rough ranges from general market knowledge for 2025-2026. Recheck on levels.fyi, Glassdoor, the Swissdevjobs salary report, Carta's startup compensation data and Pave before any call.

| Reference | Base salary (approx.) | Equity (approx.) |
|---|---|---|
| Senior Staff / Principal, Geneva, product company | CHF 190k-240k | small, if any |
| Staff Engineer, Zürich scale-up | CHF 170k-210k | 0.05-0.2% |
| Founding engineer, Swiss seed-stage startup | CHF 140k-180k | 0.5-2% |
| Founding engineer, European seed stage (Paris, Berlin) | €90k-140k | 0.5-2% |
| Founding engineer, San Francisco, seed / Series A | $180k-240k | 0.5-2% (engineer #1 at seed can reach 2-3%) |
| Founding engineer with an explicit CTO track, SF | $200k-250k | 1-3% |

The euro band they published sits at the French founding-engineer level. Geneva Senior Staff pay is well above its ceiling, so this offer only makes sense if the equity is real and the SF salary resets properly.

**My numbers**

- **Europe phase opening anchor:** €140k base (top of their band), or CHF 150k-160k if they employ me through a Swiss EOR, plus founding equity.
- **Europe phase walk-away:** below ~€120k base (or the contractor equivalent after Swiss social charges). Below that, the gap with Geneva Staff roles can't be made up with equity from an unnamed seed company.
- **SF phase, written into the offer:** base reset to at least $200k from the day I start working in the US, with a $220k-230k target.
- **Equity:** anchor at 2%, target 1-1.5% on a fully diluted basis. Walk-away below about 0.75% for engineer #1 with a CTO track.
- **Contractor fallback:** about CHF 900-1,100 a day, after checking social charges and tax with an advisor.

## Opening anchor script

> "Before I put a number on it, can you walk me through the whole package: base in Europe, what changes when I move to San Francisco, the equity grant as a percentage, and how you'd employ me from Switzerland? [Listen.] This is the first engineering hire and a path to CTO, and I'd be rebuilding the core runtime. For the European phase I'm looking at the top of your band, €140k, and meaningful founding equity, around 2% fully diluted. For San Francisco I'd want the base reset to around $220k when I arrive, and I'd like that written into the offer now, not negotiated later."

Say the number, then stop talking.

## If they come in low (for example €90k-110k, 0.3-0.5%)

> "I appreciate that, and I understand a seed-stage budget. The thing is, I'm in Geneva, where Senior Staff roles pay well above this band, and this role asks for more than a Staff role: the whole stack, the first hires, and eventually the CTO seat. I can take less cash if the ownership reflects that. So either we get to €130k with about 1%, or I take €115k-120k and we move equity to 1.5% or more. What I can't do is below-market cash and below-market equity at the same time."

If base doesn't move, trade in this order:
1. **More equity** (always as a percentage of fully diluted shares, including the unallocated pool).
2. **SF salary reset in writing**, with the amount and the trigger date.
3. **A written six-month review** against milestones we agree now (for example, runtime in production, reliability targets, first hire made), with a set salary increase if they're met.
4. **CTO path in writing:** the title, or at least the conditions for it (a funding round, team size, a date), plus a guarantee that no external CTO gets hired above me without my say.
5. **Signing bonus or relocation budget** that covers the real cost of the Geneva to SF move.

## Pushing back on the geographic discount

> "I know the band was set with France in mind. But I'm in Switzerland, and employing someone here costs more, whether through an EOR or as a contractor paying my own social charges. I'm not asking to be paid like a Geneva bank. I'm asking to break even against the Staff roles I'd otherwise take, and to have the gap covered by equity. And since the plan is to have me in San Francisco within a year, the European phase is short anyway. What matters most is what the package looks like once I'm there."

If they push to pay the French rate for Geneva: suggest a shorter Europe phase at the French rate plus a bigger equity grant, rather than accepting a permanent Swiss discount.

## Equity at a very early-stage company

Founding engineer #1 with a CTO path is closer to a late cofounder than to an employee. Questions to ask and points to negotiate:

- **What instrument, which entity?** Most likely stock options, or ideally restricted stock with early exercise, in a Delaware C-corp. Ask for the cap table summary and the plan document, not a verbal description.
- **Percentage, fully diluted.** Number of shares, fully diluted count (including the unallocated option pool and any outstanding SAFEs or converting notes), the strike price and the latest valuation. SAFEs matter a lot here: they convert at the next round and can dilute me before I've even vested.
- **Vesting.** Standard is 4 years with a 1-year cliff. Ask for the cliff to be shortened to 6 months or waived, given founding-level risk, or for vesting to start from my first contract day, including any trial or contractor period.
- **Early exercise and the 83(b) election.** If they allow early exercise at a near-zero strike, file the 83(b) within 30 days (for US tax). Check with a Swiss tax advisor how stock options and restricted stock are taxed while I'm still resident in Geneva, because Swiss cantonal rules for options differ from the US, and the move mid-vesting makes the tax split across countries complicated.
- **Acceleration.** Ask for double-trigger acceleration (change of control plus termination without cause gives 100%, or at least 50%, immediate vesting). As a founding engineer, if I get pushed out after an acquisition I shouldn't lose the unvested part.
- **Exercise window after leaving.** The default is 90 days. Ask for 5-10 years. It costs the company nothing and protects me if I leave before a liquidity event.
- **Dilution protection.** Employees don't get real anti-dilution rights. Ask instead for a written refresh grant after the next priced round, tied to the CTO step, and get clarity on the size of the pool the next round will create.
- **Relocation risk.** What happens to my equity and my job if the US visa doesn't come through? Get a written commitment that I can keep working remotely from Europe at the SF-phase terms (or at least the Europe-phase terms) until the visa is resolved.

## Competing offer script (use carefully, even if hypothetical)

> "To be transparent, I'm also talking to a couple of companies in Switzerland about Staff and Principal roles, and those packages are well above this cash band. What draws me here is the ownership and the CTO path, and I'd rather choose this one. For that to work, the equity has to make up the difference, and the San Francisco terms need to be in writing."

Only say this if it's actually true when the conversation happens. Don't make up a specific offer.

## Relocation and visa checklist

- Which visa (O-1, H-1B, L-1 via a European entity)? Who pays legal fees, and what's the timeline?
- Relocation package: flights, temporary housing (at least 1-2 months in SF), shipping, and a tax gross-up on relocation benefits.
- Health insurance from the first day in the US, including dependants if relevant.
- A clawback on relocation costs if I leave within 12 months: negotiate it down to 6 months and pro-rata, or remove it entirely.
- The actual move date should be mutually agreed, not set by the company alone.

## Before signing

- Everything in writing: base in each phase, the SF reset, the equity percentage and terms, the CTO conditions, relocation.
- Have a Swiss lawyer or fiduciary check the employment setup (EOR vs contractor), and a US advisor check the equity terms and the 83(b).
- Talk to the founders about runway and the next fundraise. If the company has less than ~18 months of runway, the equity is worth much less, and the cash has to go up.
