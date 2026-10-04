Batch Changes was built on a clean promise: describe a change once, get a reviewable changeset in every repo it touches. Putting coding agents behind that promise is a harder problem. Agent output isn't deterministic, and a failure in repo 812 of 3,000 can't mean starting the whole run over. That's the part of Code Plane I'd want to own, and the posting reads like it was written by people who've already hit it in production.

Most of my 17 years have gone into owning systems end to end. At Alaya, which I co-founded in 2016, I built the platform from a blank page to 50+ enterprise clients and through the acquisition by Benevity. My Senior Staff work there meant inheriting services with paying customers, steering cross-team architecture, and getting roughly 70% of engineers on two teams that didn't report to me onto AI-assisted review and generation. On the side I build multi-agent workflows, so I've formed opinions on where agents fail quietly and where they need a human checkpoint.

To be straight about gaps, Go hasn't been my daily language; TypeScript, React, GraphQL and PostgreSQL have. Kubernetes and Docker are familiar ground. I'm in Geneva, so CEST overlap is a given rather than a constraint. Happy to sketch how I'd make an agentic batch run resumable after partial failure in a first call.

Magino Marveaux-Cochet
magino.cochet@gmail.com
+41 77 439 22 27
