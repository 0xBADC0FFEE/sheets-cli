// Import skill content from SKILL.md (source of truth)
// Using text import to embed at build time
import SKILL_CONTENT from "../SKILL.md" with { type: "text" };

export { SKILL_CONTENT };
