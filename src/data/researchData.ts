// ============================================================
// KUTATÁSI ADATOK - Részvételi Filmes Workshop Hatásvizsgálat
// Doktori disszertáció - Rövidtávú hatásmérés
// ============================================================

// RÉSZTVEVŐK (Hátrányos helyzetű fiatalok)
// Bemeneti mérés: 70 fő, Kimeneti mérés: 63 fő
// Helyszínek: Istvándi, Pécs, Gilvánfa, Somogyszentpál

export const resztvevokBemeneti = {
  n: 70,
  szabalykoveto: [2,1,4,5,4,4,1,3,2,1,4,3,3,3,4,2,4,4,1,2,3,3,3,2,4,3,3,4,1,3,2,2,3,3,2,2,3,1,5,5,2,3,5,4,2,3,4,2,3,1,1,3,1,3,3,4,4,2,3,2,3,1,2,4,4,3,4,3,2,3],
  nyitott: [3,3,5,4,4,5,4,3,1,4,3,4,4,3,5,3,4,4,4,2,2,3,3,4,4,4,3,4,3,3,3,3,3,4,3,3,4,3,5,5,3,3,4,5,4,4,3,2,3,2,3,3,3,3,4,4,4,2,4,2,3,2,3,4,4,4,4,3,4,4],
  megbizhato: [3,3,5,5,4,5,2,5,1,5,5,5,3,3,5,4,3,5,5,3,5,3,4,2,5,5,4,4,1,4,2,4,3,4,3,2,2,1,5,5,3,3,5,5,3,3,2,3,4,3,3,2,2,3,3,4,4,3,4,3,4,4,3,4,4,4,3,4,4,5],
  // Jövőkép: 1="nem tudom", 2="részben", 3="konkrét tervek"
  jovokep: [1,3,1,3,2,2,3,2,3,2,2,3,3,3,3,1,2,2,3,1,2,2,1,1,3,1,1,2,2,1,1,2,2,3,1,1,1,1,1,1,1,2,2,3,1,1,2,1,1,2,1,1,1,1,2,2,3,2,3,1,2,1,2,3,3,1,2,1,2,2],
  // Negatív érzések: "nem"=0, "kis mértékben"=1, "nagy mértékben"=2
  negativErzesek: [1,1,0,1,1,1,1,0,0,1,1,0,2,1,0,1,1,0,0,2,0,1,1,1,0,1,1,0,0,0,1,0,0,0,1,2,0,1,2,1,2,1,1,0,2,2,1,2,1,1,2,2,2,2,1,1,1,2,1,2,2,1,1,1,0,2,1,1,1,1],
  // Együttműködési probléma: 0="soha", 1="egyszer-kétszer", 2="gyakran"
  egyuttmukodes: [1,0,1,0,2,2,2,0,0,1,1,2,2,1,0,1,2,1,2,2,1,2,1,2,2,1,1,1,2,2,1,1,1,2,2,1,2,2,0,0,2,1,1,0,2,1,2,2,1,2,2,2,2,2,2,1,1,2,1,2,2,2,2,1,1,2,1,1,2,1],
};

export const resztvevokKimeneti = {
  n: 63,
  szabalykoveto: [2,4,1,1,2,1,5,2,1,1,4,3,1,4,5,3,3,1,2,3,1,3,1,5,4,2,2,2,1,2,1,1,1,1,1,4,2,4,3,2,3,1,2,4,4,4,4,3,5,4,5,4,4,3,4,4,5,3,4,5,5,5,4],
  nyitott: [3,5,5,5,5,2,5,5,1,5,4,5,5,5,4,4,3,1,5,3,5,4,5,3,5,5,5,5,5,5,5,5,5,5,5,4,5,4,5,5,4,5,3,5,5,4,4,4,5,4,5,5,4,5,5,5,5,4,5,5,5,5,4],
  megbizhato: [2,5,4,5,5,2,5,5,2,5,5,3,5,5,4,4,4,2,4,3,4,3,4,3,5,4,5,3,4,5,5,5,5,5,5,4,5,4,5,5,4,5,3,4,5,4,4,4,5,5,5,5,5,5,4,5,5,4,5,5,5,5,5],
  jovokep: [2,3,2,3,3,2,2,3,3,3,3,3,3,3,3,2,3,3,3,2,3,1,3,1,3,3,2,3,3,2,2,3,2,3,3,3,3,3,2,3,3,3,2,3,3,2,2,2,3,2,3,3,2,3,3,3,3,3,3,3,3,3,2],
  // Érdektelenség - alacsony = jó (1-5)
  erdektelenseg: [5,1,5,5,1,1,1,2,1,1,1,5,1,3,1,2,2,1,2,3,2,3,1,3,1,1,1,1,2,2,1,1,2,1,3,5,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,1,1,1,1,1,1,1,1,2,1],
  // Nem értette meg magát szervezőkkel - alacsony = jó (1-5)
  nemErtetteEgymas: [5,1,1,1,1,1,1,1,1,1,1,4,1,3,1,1,1,1,2,2,1,2,1,2,1,1,1,1,1,1,1,1,1,1,4,2,5,1,1,1,5,1,3,1,1,2,1,2,1,1,1,1,1,1,1,1,1,2,1,1,1,1,1],
  // Nem jött ki résztvevőkkel - alacsony = jó (1-5)
  nemJottKi: [1,1,1,1,1,1,1,1,1,1,1,3,1,2,1,1,2,2,2,3,1,3,1,3,1,2,3,1,1,1,1,1,1,1,4,1,1,4,1,1,1,2,3,1,1,2,1,2,1,1,1,1,1,1,1,1,1,2,1,1,2,1,1],
  // Elégedettség (1-5)
  elegedettseg: [2,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,4,5,5,5,4,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,2,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5],
  // Szívesen részt venne újra: igen=62, nem=1
  ujraResztVenne: { igen: 62, nem: 1 },
  // Részt venne külső programon: igen=62, nem=1
  kulsoProgram: { igen: 62, nem: 1 },
};

// SZERVEZŐK (ELTE hallgatók)
// Bemeneti mérés: 44 fő, Kimeneti mérés: 44 fő

export const szervezokBemeneti = {
  n: 44,
  kelloInfo: [1,2,3,3,3,2,5,4,3,2,5,4,3,3,3,4,4,4,3,2,2,4,2,2,1,2,2,4,4,4,4,3,5,4,3,2,3,3,4,4,4,3,4,5],
  nemOkozProblemat: [4,4,3,5,2,3,5,5,4,2,5,4,5,4,4,4,5,5,5,4,4,3,4,2,2,2,3,4,4,2,2,2,5,4,4,4,4,4,3,4,5,3,1,5],
  onismeret: [3,4,4,4,4,2,4,4,3,2,5,5,5,4,4,4,5,5,4,4,5,4,4,3,3,3,3,3,3,3,4,4,5,3,4,3,3,4,4,5,4,3,2,4],
  empatia: [4,5,4,4,4,4,4,5,4,3,5,5,5,3,4,5,5,5,5,3,5,3,5,4,3,4,4,3,5,4,3,4,5,3,5,4,3,4,4,5,4,4,5,5],
  motivacio: [5,5,3,5,5,4,5,5,5,3,5,4,3,4,5,5,4,5,5,5,3,5,5,4,4,4,5,4,5,5,4,5,5,3,4,4,4,4,5,5,5,5,5,5],
  csapatmunka: [4,5,3,5,4,4,4,5,4,3,5,5,3,3,4,4,4,5,5,4,3,4,5,3,4,3,4,4,4,5,5,4,4,4,4,5,4,4,5,4,4,5,5,3],
  konfliktuskezeles: [3,4,3,5,3,3,4,5,4,2,4,5,3,4,3,3,5,5,5,5,4,4,5,2,4,4,3,4,3,4,5,4,5,5,4,3,3,4,5,4,4,3,4,4],
  kommunikacio: [3,5,2,4,5,4,4,4,5,2,5,5,3,3,4,4,5,5,4,5,4,5,5,3,4,4,3,4,4,3,4,3,5,4,4,4,2,4,5,5,5,3,5,5],
};

export const szervezokKimeneti = {
  n: 44,
  kozosHang: [5,4,3,5,4,3,4,3,4,4,4,5,5,4,4,4,5,4,5,3,4,4,5,5,5,5,5,5,5,5,4,4,4,5,5,4,5,5,5,5,4,4,5,4],
  kelloInfo: [5,4,4,5,2,3,3,2,5,4,3,4,4,2,3,4,4,4,5,5,4,5,5,4,3,4,5,5,5,4,3,4,4,4,5,4,5,5,5,5,4,4,3,2],
  problemaMunkaval: [5,1,3,1,2,1,1,1,4,3,2,1,1,2,4,1,1,1,1,2,1,4,2,1,4,1,1,1,1,1,2,3,4,1,1,1,1,1,1,1,3,1,2,1],
  onismeret: [5,5,4,4,4,3,4,3,4,4,4,5,3,4,5,4,5,4,4,5,4,4,5,5,4,5,4,4,4,4,3,5,4,4,4,4,4,4,4,5,4,3,4,4],
  empatia: [5,4,5,5,4,3,4,4,4,3,3,5,4,5,2,5,5,2,4,5,5,5,5,5,5,5,5,5,5,4,4,4,5,5,5,4,5,5,5,5,4,5,5,4],
  motivacio: [5,5,4,5,4,4,5,5,5,5,5,5,5,5,2,3,5,4,5,4,4,5,5,5,5,5,5,5,5,5,5,4,5,5,5,5,5,5,5,5,5,5,3,4],
  csapatmunka: [5,5,4,4,2,4,5,4,3,4,4,4,5,5,5,4,5,4,5,4,5,5,5,5,5,5,4,5,5,4,4,4,5,5,5,4,5,5,5,4,5,5,5,4],
  konfliktuskezeles: [5,5,5,5,2,3,5,3,3,3,4,4,4,3,3,3,5,4,4,4,4,5,5,5,5,4,5,5,5,4,3,4,4,5,5,5,4,5,5,5,3,5,4,5],
  kommunikacio: [5,5,5,5,3,3,5,3,3,4,3,5,5,5,3,4,5,5,4,3,4,5,5,5,5,5,5,5,4,4,4,5,5,5,5,5,5,5,5,5,4,5,3,4],
  alkalmazkodas: [5,5,4,5,5,4,4,4,3,3,3,5,4,4,5,4,5,4,5,5,5,4,5,4,5,5,5,4,4,5,3,5,3,5,5,5,5,5,5,5,4,5,4,4],
  sokkElsoTalalkozas: { nem: 42, igen: 2 },
};

// ============================================================
// STATISZTIKAI SEGÉDFÜGGVÉNYEK
// ============================================================

export function mean(arr: number[]): number {
  return arr.reduce((a, b) => a + b, 0) / arr.length;
}

export function standardDeviation(arr: number[]): number {
  const m = mean(arr);
  const variance = arr.reduce((sum, val) => sum + (val - m) ** 2, 0) / arr.length;
  return Math.sqrt(variance);
}

export function median(arr: number[]): number {
  const sorted = [...arr].sort((a, b) => a - b);
  const mid = Math.floor(sorted.length / 2);
  return sorted.length % 2 ? sorted[mid] : (sorted[mid - 1] + sorted[mid]) / 2;
}

export function distribution(arr: number[], maxVal: number): { value: number; count: number; pct: number }[] {
  const result: { value: number; count: number; pct: number }[] = [];
  for (let i = 1; i <= maxVal; i++) {
    const count = arr.filter(v => v === i).length;
    result.push({ value: i, count, pct: Math.round((count / arr.length) * 100) });
  }
  return result;
}

// ============================================================
// ÖSSZESÍTETT EREDMÉNYEK
// ============================================================

export interface ComparisonMetric {
  name: string;
  preMean: number;
  postMean: number;
  preSD: number;
  postSD: number;
  preN: number;
  postN: number;
  change: number;
  changePct: number;
}

function createMetric(name: string, pre: number[], post: number[]): ComparisonMetric {
  const preMean = mean(pre);
  const postMean = mean(post);
  return {
    name,
    preMean: Math.round(preMean * 100) / 100,
    postMean: Math.round(postMean * 100) / 100,
    preSD: Math.round(standardDeviation(pre) * 100) / 100,
    postSD: Math.round(standardDeviation(post) * 100) / 100,
    preN: pre.length,
    postN: post.length,
    change: Math.round((postMean - preMean) * 100) / 100,
    changePct: Math.round(((postMean - preMean) / preMean) * 100),
  };
}

export const resztvevokMetrics: ComparisonMetric[] = [
  createMetric("Szabálykövetés", resztvevokBemeneti.szabalykoveto, resztvevokKimeneti.szabalykoveto),
  createMetric("Nyitottság új dolgokra", resztvevokBemeneti.nyitott, resztvevokKimeneti.nyitott),
  createMetric("Megbízhatóság, pontosság", resztvevokBemeneti.megbizhato, resztvevokKimeneti.megbizhato),
  createMetric("Jövőkép (1-3 skála)", resztvevokBemeneti.jovokep, resztvevokKimeneti.jovokep),
];

export const szervezokMetrics: ComparisonMetric[] = [
  createMetric("Kellő információ a célcsoportról", szervezokBemeneti.kelloInfo, szervezokKimeneti.kelloInfo),
  createMetric("Önismeret", szervezokBemeneti.onismeret, szervezokKimeneti.onismeret),
  createMetric("Empátia", szervezokBemeneti.empatia, szervezokKimeneti.empatia),
  createMetric("Motiváció", szervezokBemeneti.motivacio, szervezokKimeneti.motivacio),
  createMetric("Csapatmunka", szervezokBemeneti.csapatmunka, szervezokKimeneti.csapatmunka),
  createMetric("Konfliktuskezelés", szervezokBemeneti.konfliktuskezeles, szervezokKimeneti.konfliktuskezeles),
  createMetric("Kommunikáció", szervezokBemeneti.kommunikacio, szervezokKimeneti.kommunikacio),
];

export const resztvevokKimenetiExtra = {
  elegedettsegAtlag: Math.round(mean(resztvevokKimeneti.elegedettseg) * 100) / 100,
  erdektelensegAtlag: Math.round(mean(resztvevokKimeneti.erdektelenseg) * 100) / 100,
  nemErtetteAtlag: Math.round(mean(resztvevokKimeneti.nemErtetteEgymas) * 100) / 100,
  nemJottKiAtlag: Math.round(mean(resztvevokKimeneti.nemJottKi) * 100) / 100,
  ujraResztVennePct: Math.round((resztvevokKimeneti.ujraResztVenne.igen / resztvevokKimeneti.n) * 100),
  kulsoProgramPct: Math.round((resztvevokKimeneti.kulsoProgram.igen / resztvevokKimeneti.n) * 100),
};

export const szervezokKimenetiExtra = {
  kozosHangAtlag: Math.round(mean(szervezokKimeneti.kozosHang) * 100) / 100,
  alkalmazkodásAtlag: Math.round(mean(szervezokKimeneti.alkalmazkodas) * 100) / 100,
  sokkNemPct: Math.round((szervezokKimeneti.sokkElsoTalalkozas.nem / szervezokKimeneti.n) * 100),
  problemaMunkavalAtlag: Math.round(mean(szervezokKimeneti.problemaMunkaval) * 100) / 100,
};
