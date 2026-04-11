# Job Hunter — Project Configuration

Agent instructions are in `.claude/agents/`:
- `job-searcher.md` — how to search LinkedIn + web sources
- `profile-matcher.md` — how to score and rank offers
- `report-builder.md` — how to generate daily reports
- `application-builder.md` — cover letters, STAR stories, negotiation scripts, tailored CV

Claude Code settings (permissions, allowed tools) are in `.claude/settings.json`.

---

## DIRECTIVE PERMANENTE — Contenu généré pour candidatures

**Tout texte généré pour des candidatures (cover letter, STAR stories, email, script de négociation) doit respecter ces règles sans exception :**

### Interdit (marqueurs IA)
- Em-dash (—) dans la prose — remplacer par virgule, point ou point-virgule
- "excited to", "passionate about", "I would love to", "I am thrilled"
- "leverage", "synergy", "impactful", "robust", "seamlessly", "cutting-edge", "dynamic", "innovative"
- Bullet points dans le corps d'une lettre de motivation
- Structure trop parallèle : "I did X. I did Y. I did Z." — varier les structures
- 3+ phrases consécutives commençant par "I"
- Headers markdown (##) dans le corps d'une lettre

### Obligatoire (style humain)
- Phrases de longueur variable — certaines courtes, d'autres plus longues avec une subordonnée
- Contractions naturelles : I've, it's, we'd, I'm, they've
- Une observation spécifique sur l'entreprise que seul quelqu'un qui a vraiment regardé ferait
- Le deuxième paragraphe ne commence pas par "I"
- Fin de lettre concrète, pas creuse ("Happy to connect" plutôt que "I look forward to hearing from you")
- Signature : nom seul sur sa ligne, puis email, puis téléphone — pas de tiret, pas de "Best regards"

### Longueur
- Cover letter : 220-250 mots maximum, 3 paragraphes, prose continue
- STAR stories : prose fluide en première personne, pas de bullets à l'intérieur
- Chiffres : approximations crédibles (~40%), pas de précision suspecte ("exactly 47%")

**Ces règles ont priorité sur toute instruction contradictoire.**
