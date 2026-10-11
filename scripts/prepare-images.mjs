// Prépare les visuels optimisés à partir des rendus 3D officiels extraits du PowerPoint
// BEST BUILDING LUXURY. Sources dans design-sources/ (non versionnées), sorties dans src/assets/images/.
// Aucun retouche de l'architecture : seules les marges blanches des diapositives sont rognées.
import sharp from "sharp";
import { mkdir } from "node:fs/promises";

const SRC = "design-sources";
const OUT = "src/assets/images";
await mkdir(OUT, { recursive: true });

// Rognage uniforme des marges blanches (haut 24 px, hauteur 1250 px) sur les rendus 2239 px.
const BASE = { left: 0, top: 24, width: 2239, height: 1250 };

const renders = {
  "chrysantheme-1": 6,
  "chrysantheme-2": 7,
  "chrysantheme-3": 8,
  "orchidee-1": 9,
  "orchidee-2": 10,
  "orchidee-3": 11,
};

for (const [name, n] of Object.entries(renders)) {
  await sharp(`${SRC}/render-${n}.png`)
    .extract(BASE)
    .jpeg({ quality: 84, mozjpeg: true })
    .toFile(`${OUT}/${name}.jpg`);
  console.log("ok", name);
}

// Recadrages éditoriaux (détails) — coordonnées relatives à l'image rognée (2239 x 1250).
const crops = [
  // [nom, rendu source, {left, top, width, height}]
  ["detail-amenagement", "chrysantheme-2", { left: 0, top: 330, width: 1150, height: 920 }],
  ["detail-facade", "chrysantheme-3", { left: 380, top: 120, width: 1500, height: 900 }],
  ["detail-materiaux", "orchidee-3", { left: 0, top: 380, width: 900, height: 800 }],
];
for (const [name, from, rect] of crops) {
  await sharp(`${OUT}/${from}.jpg`)
    .extract(rect)
    .jpeg({ quality: 84, mozjpeg: true })
    .toFile(`${OUT}/${name}.jpg`);
  console.log("ok", name);
}

// Logo officiel : copie conforme (aucune modification des couleurs/proportions) + déclinaison WebP.
await sharp(`${SRC}/logo-officiel-2bi.png`).resize({ width: 1400 }).png({ compressionLevel: 9 }).toFile("public/brand/logo-2bi.png");
// Emblème circulaire seul pour les icônes d'application (recadrage, sans altération).
const emblem = await sharp(`${SRC}/logo-officiel-2bi.png`)
  .extract({ left: 0, top: 0, width: 1900, height: 1891 })
  .resize(512, 512, { fit: "contain", background: { r: 0, g: 0, b: 0, alpha: 0 } })
  .png()
  .toBuffer();
await sharp(emblem).toFile("src/app/icon.png");
await sharp(emblem).resize(180, 180).flatten({ background: "#ffffff" }).png().toFile("src/app/apple-icon.png");
// Image Open Graph 1200x630 : rendu officiel + plaque blanche portant le logo officiel (inchangé).
const logoBuf = await sharp(`${SRC}/logo-officiel-2bi.png`).resize({ width: 300 }).png().toBuffer();
const logoMeta = await sharp(logoBuf).metadata();
const plate = await sharp({ create: { width: 340, height: (logoMeta.height ?? 123) + 40, channels: 3, background: "#ffffff" } })
  .composite([{ input: logoBuf, left: 20, top: 20 }])
  .png()
  .toBuffer();
await sharp(`${OUT}/chrysantheme-2.jpg`)
  .resize(1200, 630, { fit: "cover", position: "attention" })
  .composite([{ input: plate, left: 48, top: 48 }])
  .jpeg({ quality: 86, mozjpeg: true })
  .toFile("public/og.jpg");
console.log("done");
