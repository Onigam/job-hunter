A studio running several SaaS products on one TypeScript stack has a problem most single-product CTOs never face. Every shared decision, from the Zod schemas at the API edge to how an LLM call falls back when a provider times out, gets multiplied across the whole portfolio. Get that layer right and the fifth product is cheaper to launch than the first. That's the part of this role I keep coming back to.

Back in 2016 I cofounded Alaya and built its platform from nothing: React on the front, Node.js and a multi-tenant data model behind it, CI/CD and code review habits in place before the first three engineers I hired showed up. We grew to 50+ enterprise clients, and Benevity acquired us in 2021. Since then I've been a Senior Staff Engineer there, owning cross-team architecture decisions and getting two teams to use AI-assisted workflows daily without any authority over them. LLM integration and multi-agent workflows are where most of my hands-on time has gone lately, so the Vercel AI SDK side of your stack won't be a cold start.

I'm in Geneva, same timezone as Paris. A team of ~25 is bigger than anything I've managed directly, and I'd rather say that plainly. Happy to walk through how I'd structure shared packages so a new product ships in weeks rather than quarters.

Magino Marveaux-Cochet
magino.cochet@gmail.com
+41 77 439 22 27
