What caught my eye about this specific opening is the scale you're already running at: over 100,000 GPUs and a million CPUs across 50+ clouds, for companies that can't afford tenant isolation to be an afterthought. That's a different problem than most Kubernetes jobs I see posted, and it's closer to what I spent years working on inside Alaya's own multi-tenant architecture.

Building that platform meant deciding, from the very first commit, how tenants would share infrastructure without stepping on each other. Years later, when the monolith started cracking under enterprise load, I chose a strangler-fig migration over the full rewrite our investors were nervous about funding, pulling the two busiest modules out first and watching latency drop roughly 40% on those endpoints while the rest of the system stayed stable through the Benevity acquisition. I've run Kubernetes and Docker in production at both companies, though Go isn't where most of my hours are, TypeScript and Java are. I'd be ramping on the language while I lean on the architecture instincts.

I'm in Geneva, comfortable with a fully remote and distributed team, and open to a call this week or next to walk through how the Alaya migration actually played out.

Magino Marveaux-Cochet
magino.cochet@gmail.com
+41 77 439 22 27
