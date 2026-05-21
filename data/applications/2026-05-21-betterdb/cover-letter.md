BetterDB is solving a real operational gap. Most teams running Valkey know it's fast but don't know why it's slow when it is. The historical persistence angle is what makes the product interesting to me; point-in-time cache state reconstruction is genuinely hard, and I haven't seen anyone else tackle it with enough depth to be useful during an actual production incident. The fact that you're shipping weekly across multiple products on a bootstrapped model is the kind of execution signal that's hard to fake.

At Alaya I was the first technical hire and the only engineer for the first year. The stack call was mine: TypeScript, Node.js, PostgreSQL, Redis. We grew it to 50+ enterprise clients before Benevity acquired us in 2021. One mistake I own from that period: waiting too long to instrument the Redis layer properly. When a cache anomaly hit, it took four days to diagnose because we had no historical state to work from. After that I treated observability as a product requirement. The stack you're using, NestJS, Fastify, PostgreSQL, Kubernetes on AWS, is almost exactly what I built Alaya on, and the problem you're solving is one I understand from having been on the wrong side of it.

Founding engineer, remote from Geneva. I'm available now. Happy to connect this week.

Magino Marveaux-Cochet
magino.cochet@gmail.com
+41 77 439 22 27
