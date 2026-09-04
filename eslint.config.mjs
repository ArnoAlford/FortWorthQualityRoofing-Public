import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";
export default defineConfig([
  ...nextVitals,
  ...nextTs,
  // Plain anchors make this static export portable without client-router payload rewrites.
  { files: ["app/**/*.tsx"], rules: { "@next/next/no-html-link-for-pages": "off" } },
  globalIgnores([".next/**", "out/**", "output/**", "next-env.d.ts"]),
]);
