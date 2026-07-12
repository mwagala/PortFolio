import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import test from "node:test";

test("portfolio source contains the recruiter-facing content", async () => {
  const page = await readFile(new URL("../app/page.tsx", import.meta.url), "utf8");

  assert.match(page, /Morel Wagala/);
  assert.match(page, /Réservation de lavage auto à domicile/);
  assert.match(page, /Soumissions Agent/);
  assert.match(page, /Tic-tac-toe de révélation/);
  assert.match(page, /Application de gestion immobilière/);
  assert.match(page, /https:\/\/lavage-auto-web\.onrender\.com\//);
  assert.match(page, /href="\/cv-morel-wagala\.pdf"/);
});

test("project is configured for Vercel-compatible Next.js", async () => {
  const [packageJson, vercelJson] = await Promise.all([
    readFile(new URL("../package.json", import.meta.url), "utf8"),
    readFile(new URL("../vercel.json", import.meta.url), "utf8"),
  ]);

  const pkg = JSON.parse(packageJson);
  const vercel = JSON.parse(vercelJson);

  assert.equal(pkg.scripts.build, "next build");
  assert.equal(pkg.scripts.dev, "next dev");
  assert.equal(pkg.scripts.start, "next start");
  assert.equal(vercel.framework, "nextjs");
  assert.ok(!packageJson.includes("vinext"));
  assert.ok(!packageJson.includes("wrangler"));
  await access(new URL("../public/cv-morel-wagala.pdf", import.meta.url));
});
