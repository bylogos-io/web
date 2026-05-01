/**
 * Re-encodes large JPG/PNG images in /public to WebP. Originals kept.
 * MDX cover paths and code refs updated separately.
 */
import sharp from "sharp";
import { readdir, stat } from "node:fs/promises";
import { join, extname } from "node:path";

const ROOT = new URL("../public", import.meta.url).pathname;
const SKIP = new Set(["favicon.ico", "icon.ico"]);
const MAX_W = 1600;
const QUALITY = 78;

async function* walk(dir: string): AsyncGenerator<string> {
    for (const entry of await readdir(dir, { withFileTypes: true })) {
        const full = join(dir, entry.name);
        if (entry.isDirectory()) yield* walk(full);
        else yield full;
    }
}

let total = 0;
let saved = 0;
for await (const p of walk(ROOT)) {
    const ext = extname(p).toLowerCase();
    if (![".png", ".jpg", ".jpeg"].includes(ext)) continue;
    if (SKIP.has(p.split("/").pop()!)) continue;
    const out = p.replace(/\.(png|jpg|jpeg)$/i, ".webp");
    try {
        const before = (await stat(p)).size;
        const img = sharp(p);
        const meta = await img.metadata();
        const pipe = meta.width && meta.width > MAX_W ? img.resize({ width: MAX_W }) : img;
        await pipe.webp({ quality: QUALITY }).toFile(out);
        const after = (await stat(out)).size;
        total += before;
        saved += before - after;
        console.log(`${p.replace(ROOT, "")}: ${(before / 1024).toFixed(0)}KB -> ${(after / 1024).toFixed(0)}KB`);
    } catch (err) {
        console.warn(`skip ${p}: ${(err as Error).message}`);
    }
}
console.log(`\ntotal in: ${(total / 1024 / 1024).toFixed(1)}MB, saved: ${(saved / 1024 / 1024).toFixed(1)}MB`);
