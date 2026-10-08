import { mkdir, writeFile, readdir, readFile } from "node:fs/promises";

const BASE = "https://tis.edu.in/_next/static/media";
await mkdir("public/images", { recursive: true });

const files = new Set();
for (const name of await readdir("src/data")) {
  const text = await readFile(`src/data/${name}`, "utf8");
  for (const match of text.matchAll(/asset\("([^"]+)"\)/g)) files.add(match[1]);
}

for (const file of files) {
  const res = await fetch(`${BASE}/${encodeURIComponent(file)}`);
  if (!res.ok) { console.log("FAILED", file, res.status); continue; }
  await writeFile(`public/images/${file}`, Buffer.from(await res.arrayBuffer()));
  console.log("saved", file);
}
