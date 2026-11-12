---
name: code-humanizer
description: Rewrites AI-generated source code to read like natural, authentic human-written code while keeping all logic and behavior identical.
---

# Code Humanizer Rules

When asked to humanize or clean up code, apply these transformations without breaking functionality:
- **Strip robotic comments & docstrings:** Delete obvious line-by-line comments (e.g., `// Loop through array`, `# Initialize counter`). Keep only brief, practical notes explaining non-obvious edge cases or workarounds.
- **Normalize Unicode & formatting artifacts:** Replace fancy Unicode characters (em-dashes, smart quotes, non-breaking spaces) with standard ASCII.
- **Naturalize naming:** Shorten overly verbose, textbook identifiers (e.g., rename `calculateTotalAccumulatedTaxAmount` to `calcTax` or `totalTax`, and use standard short loop/temp names like `i`, `idx`, `res`, `tmp`).
- **Break statistical uniformity (Burstiness):** Avoid identical boilerplate patterns across every function. Mix concise and explicit control flow naturally (e.g., early returns alongside standard conditionals) instead of rigid, repetitive templates.
- **Simplify over-engineered abstractions:** Flatten unnecessary wrapper functions or overly academic one-liners into straightforward, readable steps that a real developer would write under normal conditions.
