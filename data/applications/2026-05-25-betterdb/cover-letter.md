Most LLM caching implementations treat it as a hashmap: same prompt, return same response. BetterDB's semantic cache is doing something harder, matching semantically similar queries and reusing responses without waiting for exact strings to repeat. That's the right problem to solve in a world where LLM costs scale with call volume, but it's also the problem that breaks if you don't have the observability layer to know when the similarity threshold is wrong. The fact that your team built both the cache and the monitoring for it, rather than treating them as separate products, tells me you understand how these things fail in production.

My background sits in two places that matter here. At Alaya, I was the first technical hire, built the TypeScript/Node.js/PostgreSQL stack from zero, and owned every Redis integration call. Diagnosing when things went wrong taught me the hard way that cache observability matters as much as the cache itself; I got that lesson late and wouldn't repeat it. After the acquisition, I spent four years at Benevity working in AI integration: LLM tooling pipelines, multi-agent workflows, Anthropic and OpenAI SDK integrations. The work your team is doing with semantic caching and LangChain is territory I understand from both sides of the stack.

I'm based in Geneva and available now. Happy to connect whenever suits Kristiyan.

Magino Marveaux-Cochet
magino.cochet@gmail.com
+41 77 439 22 27
