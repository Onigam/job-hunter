Sending every model call at Toast through one LLM proxy and one key management service is a quiet but big decision. It makes the proxy the place where per-team cost, redaction, tracing and rate limits actually get decided, and it means the Claude plugin marketplace is only as trustworthy as what sits underneath it. That's the layer I'd want to own, and it's why this posting stood out.

Most of my instincts here come from Alaya, which I co-founded in 2016 and built from a blank page to 50+ enterprise clients and an acquisition by Benevity in 2021. When our monolith started cracking, we chose a strangler-fig extraction over a rewrite, and the busiest endpoints got roughly 40% faster. Later, as Senior Staff in Benevity's Java microservices estate, I got about 70% of engineers on two teams using AI-assisted review and generation without any mandate, mostly through shared prompt templates. These days I build Claude Code subagents and scheduled agent pipelines in TypeScript and Python. Kotlin would be new to me in production, though after years of Java it's a short step.

I'm based in Geneva, so relocation and the two office days in Dublin are worth settling on a first call. If that works for you, I'd like to sketch how I'd add per-team cost attribution and Langfuse tracing to the proxy without adding latency to anyone's requests.

Magino Marveaux-Cochet
magino.cochet@gmail.com
+41 77 439 22 27
