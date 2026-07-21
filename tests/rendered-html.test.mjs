import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

async function render() {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request("http://localhost/", { headers: { accept: "text/html" } }),
    { ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) } },
    { waitUntil() {}, passThroughOnException() {} },
  );
}

test("server-renders the Milo portfolio", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /<title>Milo — AI 产品经理作品集<\/title>/i);
  assert.match(html, /把 AI 能力做成/);
  assert.match(html, /Milo-Cut/);
  assert.match(html, /SherpaNote/);
  assert.match(html, /Milo-isLearning/);
  assert.match(html, /FF Intelligent Neo/);
  assert.match(html, /SocialSimuLLM/);
  assert.doesNotMatch(html, /codex-preview|SkeletonPreview|Your site is taking shape/i);
});

test("keeps project destinations configured", async () => {
  const page = await readFile(new URL("../app/page.tsx", import.meta.url), "utf8");

  assert.match(page, /github\.com\/wish2333\/Milo-Cut/);
  assert.match(page, /github\.com\/wish2333\/sherpanote/);
  assert.match(page, /milo-islearning\.netlify\.app/);
  assert.match(page, /milo-cut\.netlify\.app/);
  assert.match(page, /github\.com\/wish2333\/ff-intelligent-neo/);
  assert.match(page, /github\.com\/wish2333\/SocialSimuLLM/);
  assert.equal((page.match(/releases\/latest/g) ?? []).length, 3);
});
