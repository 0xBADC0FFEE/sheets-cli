// SKILL.md is the source of truth, embedded at build time
// biome-ignore lint/performance/noBarrelFile: single re-export for text import
// biome-ignore lint/style/noExportedImports: text import requires this pattern
import SKILL_CONTENT from "../SKILL.md" with { type: "text" };
export { SKILL_CONTENT };
