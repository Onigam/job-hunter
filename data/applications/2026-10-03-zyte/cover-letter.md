Zyte shipping an MCP server last week, so coding agents can call Zyte API and Scrapy Cloud directly, quietly changes who your platform's clients are. An agent doesn't read changelogs. If a Protobuf field gets renamed or a workload spec drifts, it just fails, sometimes silently, which is why a schema registry with real versioning policies matters more now than it did a year ago. That control-plane work is the part of this role I'd want to own.

Most of my 17 years have gone into platforms other teams build on. At Alaya, which I co-founded in 2016, I built the product from a blank page; when the monolith started cracking we extracted the two busiest modules instead of rewriting, and those endpoints got roughly 40% faster. After Benevity acquired us in 2021, my Senior Staff work moved to cross-team architecture on a Java microservices estate, and to getting two teams that didn't report to me to adopt AI-assisted engineering. Lately that includes LLM integration and multi-agent workflows.

To be straight about gaps, gRPC, Kafka and Terraform haven't been my daily tools, and my Java is solid rather than Vert.x-deep. Service contracts, Kubernetes and keeping production systems healthy are familiar ground. I'm in Geneva, so CET works for a team spread over 33 countries. Happy to walk through how I'd version a workload spec registry in a first call.

Magino Marveaux-Cochet
magino.cochet@gmail.com
+41 77 439 22 27
