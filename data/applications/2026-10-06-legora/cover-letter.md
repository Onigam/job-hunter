Legora runs on both AWS and Azure, and with firms like Linklaters and White & Case as customers, I'd guess at least part of that is about where client documents are allowed to live. That constraint is what makes platform work here interesting to me. A feature like Tabular Review fans one question out across hundreds of documents, and the hard part isn't the model call. It's keeping latency, cost and tenant isolation predictable when 2,100 firms do it at once.

Most of what I know about this comes from Alaya, which I co-founded in 2016 and built from a blank page to 50+ enterprise clients and an acquisition by Benevity in 2021. Multi-tenancy was the lesson I paid for, because we retrofitted it late. When the monolith started cracking, we extracted the two busiest modules instead of rewriting, and those endpoints got roughly 40% faster. Later, as Senior Staff at Benevity with no reports, I got about 70% of engineers on two teams using AI-assisted review without a mandate. Node.js, React, AWS and Kubernetes are my daily stack; Azure would be the newer piece.

The role sits in Stockholm and I'm in Geneva, so it's worth settling early whether that means relocation or a remote setup you'd support. Either way, I'd like a first call on how your platform team splits ownership with product teams today.

Magino Marveaux-Cochet
magino.cochet@gmail.com
+41 77 439 22 27
