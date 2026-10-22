What caught my attention was the move from batch processing to event-driven architecture, with idempotency and schema deprecation called out as standards to own. In financial services that part decides everything. A replayed event on a dashboard is a nuisance; a replayed event on an order or a ledger entry is an incident, and the contract between producers and consumers matters more than the broker underneath. Setting those rules for a Redpanda platform and keeping them stable across client libraries is the kind of problem I want to own.

Most of my career has been about platforms other teams build on. At Alaya, which I co-founded in 2016, I designed the system from a blank page, hired the first engineers and grew it to 50+ enterprise clients until Benevity acquired us in 2021. When our monolith started to crack, I ran a two-week spike with load tests and pushed for a strangler fig migration instead of a rewrite; the busiest endpoints got ~40% faster. Since then I've been a Senior Staff IC at Benevity, leading cross-team architecture without formal authority. Honest gaps: I've run Kubernetes and PostgreSQL in production but not Redpanda, and my strongly typed work has been TypeScript and Java rather than Go.

I'm based in Geneva and work comfortably across European and North American hours. Happy to walk through how I'd sequence the batch migration.

Magino Marveaux-Cochet
magino.cochet@gmail.com
+41 77 439 22 27
