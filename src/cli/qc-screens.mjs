#!/usr/bin/env node

try {
  const { runScreens } = await import("./screens.mjs");
  process.exit(await runScreens(process.argv.slice(2)));
} catch (error) {
  const missing = /Cannot find package '(playwright|pixelmatch|pngjs)'/.exec(error?.message ?? "");
  if (error?.code !== "ERR_MODULE_NOT_FOUND" || !missing) throw error;
  console.error(`qc screens needs the ${missing[1]} package. Install the screen packages: pnpm add -D playwright pixelmatch pngjs`);
  process.exit(2);
}
