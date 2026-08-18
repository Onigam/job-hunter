Your blog post on ditching Temporal for a roughly 300-line Postgres task orchestrator caught my attention more than the pitch about 900+ API integrations did. Using SELECT FOR UPDATE SKIP LOCKED instead of another dependency, rolled out over a week of parallel dry runs, is the kind of restraint most teams talk about but don't do. That, plus being a remote, fourteen-person team running millions of tasks a month, is what makes this Staff Backend Engineer opening worth writing to.

That instinct, picking the boring, load-tested option over the impressive one, is the same call I made at Alaya, the platform I co-founded in 2016. Our monolith started cracking under load while investors wanted new features, not months on a rewrite, so I ran a two-week spike with real load tests instead of an opinion war, then extracted the two highest-traffic modules and left the rest alone. Latency on those endpoints dropped about 40%, the monolith held together through the acquisition, and Benevity, a Canadian unicorn, bought the company in 2021. Seventeen years in, I still trust the load-tested answer over the rewrite.

I'd want to hear what's next for the scheduler now that Temporal's gone, whether more sync logic moves into it or something else entirely. Based in Geneva, comfortable fully remote, and free for a call this week or next.

Magino Marveaux-Cochet
magino.cochet@gmail.com
+41 77 439 22 27
