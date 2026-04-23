Momentic's choice to run AI inference at test execution time, rather than generating static code upfront, means every single test run is a distributed AI job. That's architecturally distinct from anything in traditional testing tooling, and it creates hard infrastructure problems: execution latency budgets, per-run cost at scale, and reliability when millions of those jobs fire daily. That's not a testing problem anymore, it's a platform problem.

Building Alaya from scratch in 2016 meant owning the full Node.js and PostgreSQL stack through every growth stage, from the first demo to 50+ enterprise clients, before the company was acquired by Benevity ($1B+ valuation) in 2021. When the monolith started cracking under load, I ran a two-week technical spike, proposed a strangler-fig migration instead of a full rewrite, and shipped the first extracted module in six weeks, cutting latency by ~40% on the highest-traffic endpoints. At Benevity, I joined a distributed microservices organization an order of magnitude larger, contributed to cross-team architecture decisions on the European product surface, and ran Kubernetes-based deployments with actual on-call responsibilities.

I'm based in Geneva and open to the right conversation about how this role works logistically. Happy to connect.

Magino Marveaux-Cochet
magino.cochet@gmail.com
+41 77 439 22 27
