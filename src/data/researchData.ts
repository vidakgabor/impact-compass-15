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

// ============================================================
// BOGARDUS-FÉLE TÁRSADALMI TÁVOLSÁG SKÁLA
// Szervezők (ELTE hallgatók) - Bemeneti: Q13, Kimeneti: Q11
// N = 44, Csoportok: Arab, Zsidó, Roma, Homoszexuális, Hajléktalan
// Szintek: Családtagom, Barátom, Munkatársam, Szomszédom
// Értékek: hány fő fogadta el az adott csoportot az adott szinten
// ============================================================

export interface BogardusGroup {
  name: string;
  pre: { csalad: number; barat: number; munkatars: number; szomszed: number };
  post: { csalad: number; barat: number; munkatars: number; szomszed: number };
}

export const bogardusN = 44;

export const bogardusGroups: BogardusGroup[] = [
  {
    name: "Arab",
    pre:  { csalad: 32, barat: 39, munkatars: 37, szomszed: 38 },
    post: { csalad: 36, barat: 37, munkatars: 39, szomszed: 39 },
  },
  {
    name: "Zsidó",
    pre:  { csalad: 39, barat: 40, munkatars: 42, szomszed: 40 },
    post: { csalad: 37, barat: 36, munkatars: 37, szomszed: 36 },
  },
  {
    name: "Roma",
    pre:  { csalad: 36, barat: 42, munkatars: 40, szomszed: 40 },
    post: { csalad: 40, barat: 39, munkatars: 36, szomszed: 38 },
  },
  {
    name: "Homoszexuális",
    pre:  { csalad: 42, barat: 40, munkatars: 39, szomszed: 40 },
    post: { csalad: 39, barat: 37, munkatars: 38, szomszed: 37 },
  },
  {
    name: "Hajléktalan",
    pre:  { csalad: 25, barat: 30, munkatars: 24, szomszed: 14 },
    post: { csalad: 30, barat: 32, munkatars: 29, szomszed: 13 },
  },
];

// Elfogadási arány %-ban
export function bogardusAcceptancePct(count: number): number {
  return Math.round((count / bogardusN) * 1000) / 10;
}

// Átlagos elfogadási arány egy csoport összes szintjén
export function bogardusGroupAvg(g: BogardusGroup["pre"] | BogardusGroup["post"]): number {
  return Math.round(((g.csalad + g.barat + g.munkatars + g.szomszed) / 4 / bogardusN) * 1000) / 10;
}

// Társadalmi távolság index: alacsonyabb = nagyobb elfogadás (1-5 skála, Bogardus)
// 1 = teljes elfogadás (család), 5 = teljes elutasítás
export function bogardusDistanceIndex(g: BogardusGroup["pre"] | BogardusGroup["post"]): number {
  const totalAccepted = g.csalad + g.barat + g.munkatars + g.szomszed;
  const maxPossible = bogardusN * 4;
  // Fordított skálán: 1 = teljes elfogadás, 5 = teljes elutasítás
  const acceptance = totalAccepted / maxPossible;
  return Math.round((5 - acceptance * 4) * 100) / 100;
}

// ============================================================
// VÁRAKOZÁSOK vs. EREDMÉNYEK (Q15 bemeneti vs. kimeneti)
// Résztvevők (hátrányos helyzetű fiatalok)
// ============================================================

// Bemeneti Q15: "Mit vársz a részvételi filmes műhelytől?" (N=70, multi-select)
export const varakozasokRaw: string[] = [
  "tanulok valami újat, megismerek más embereket",
  "megismerek más embereket, jobban megismerem magam",
  "tanulok valami újat",
  "jobban megismerem magam",
  "tanulok valami újat",
  "megismerek más embereket",
  "megismerek más embereket",
  "tanulok valami újat, megismerek más embereket",
  "tanulok valami újat",
  "tanulok valami újat",
  "tanulok valami újat",
  "tanulok valami újat, megismerek más embereket, jobban megismerem magam",
  "megismerek más embereket",
  "tanulok valami újat",
  "megismerek más embereket",
  "megismerek más embereket, jobban megismerem magam",
  "tanulok valami újat, jobban megismerem magam",
  "megismerek más embereket, jobban megismerem magam",
  "nem várok semmit",
  "megismerek más embereket",
  "egyéb:",
  "tanulok valami újat",
  "tanulok valami újat",
  "megismerek más embereket, jobban megismerem magam",
  "megismerek más embereket",
  "tanulok valami újat, megismerek más embereket",
  "tanulok valami újat, megismerek más embereket, jobban megismerem magam",
  "nem várok semmit",
  "megismerek más embereket",
  "megismerek más embereket",
  "megismerek más embereket",
  "tanulok valami újat, megismerek más embereket, jobban megismerem magam",
  "tanulok valami újat, megismerek más embereket",
  "tanulok valami újat, megismerek más embereket, jobban megismerem magam",
  "tanulok valami újat, megismerek más embereket",
  "tanulok valami újat, megismerek más embereket",
  "megismerek más embereket",
  "tanulok valami újat, megismerek más embereket",
  "tanulok valami újat, megismerek más embereket, egyéb:",
  "tanulok valami újat, megismerek más embereket",
  "tanulok valami újat, jobban megismerem magam",
  "tanulok valami újat, megismerek más embereket, jobban megismerem magam",
  "tanulok valami újat, megismerek más embereket",
  "tanulok valami újat, megismerek más embereket",
  "tanulok valami újat, megismerek más embereket, jobban megismerem magam",
  "tanulok valami újat, megismerek más embereket",
  "tanulok valami újat, megismerek más embereket",
  "tanulok valami újat, megismerek más embereket, jobban megismerem magam",
  "megismerek más embereket",
  "tanulok valami újat, megismerek más embereket",
  "tanulok valami újat, megismerek más embereket",
  "tanulok valami újat, megismerek más embereket",
  "tanulok valami újat, megismerek más embereket",
  "tanulok valami újat, jobban megismerem magam",
  "tanulok valami újat, megismerek más embereket",
  "tanulok valami újat, megismerek más embereket, jobban megismerem magam",
  "tanulok valami újat, megismerek más embereket, jobban megismerem magam",
  "nem várok semmit",
  "tanulok valami újat, megismerek más embereket, jobban megismerem magam",
  "tanulok valami újat",
  "tanulok valami újat, megismerek más embereket",
  "megismerek más embereket",
  "nem várok semmit",
  "tanulok valami újat, megismerek más embereket, jobban megismerem magam",
  "tanulok valami újat, megismerek más embereket, jobban megismerem magam",
  "tanulok valami újat, megismerek más embereket",
  "tanulok valami újat, megismerek más embereket",
  "tanulok valami újat, megismerek más embereket",
  "tanulok valami újat, megismerek más embereket",
  "tanulok valami újat, jobban megismerem magam",
];

// Kimeneti Q15: "Mit kaptál a részvételi filmes műhelytől?" (N=63, multi-select)
export const eredmenyekRaw: string[] = [
  "új dolgokat megtudtam magamról",
  "megismerhettem új embereket",
  "megismerhettem új embereket",
  "új dolgokat megtudtam magamról, jobban megismertem önmagam",
  "új dolgokat megtudtam magamról",
  "új dolgokat megtudtam magamról, megismerhettem új embereket, jobban megismertem önmagam",
  "új dolgokat megtudtam magamról, megismerhettem új embereket, jobban megismertem önmagam",
  "új dolgokat megtudtam magamról, megismerhettem új embereket, jobban megismertem önmagam",
  "új dolgokat megtudtam magamról, megismerhettem új embereket",
  "új dolgokat megtudtam magamról, megismerhettem új embereket",
  "új dolgokat megtudtam magamról, megismerhettem új embereket",
  "jobban megismertem önmagam",
  "megismerhettem új embereket, jobban megismertem önmagam",
  "új dolgokat megtudtam magamról, megismerhettem új embereket, jobban megismertem önmagam",
  "megismerhettem új embereket, jobban megismertem önmagam",
  "új dolgokat megtudtam magamról, megismerhettem új embereket",
  "új dolgokat megtudtam magamról, megismerhettem új embereket, jobban megismertem önmagam",
  "új dolgokat megtudtam magamról, megismerhettem új embereket, jobban megismertem önmagam",
  "új dolgokat megtudtam magamról, jobban megismertem önmagam",
  "megismerhettem új embereket",
  "új dolgokat megtudtam magamról, megismerhettem új embereket, jobban megismertem önmagam",
  "új dolgokat megtudtam magamról, megismerhettem új embereket",
  "új dolgokat megtudtam magamról, megismerhettem új embereket, jobban megismertem önmagam, egyéb:",
  "megismerhettem új embereket",
  "új dolgokat megtudtam magamról, megismerhettem új embereket, egyéb:",
  "új dolgokat megtudtam magamról, megismerhettem új embereket, egyéb:",
  "új dolgokat megtudtam magamról, megismerhettem új embereket, jobban megismertem önmagam",
  "új dolgokat megtudtam magamról, megismerhettem új embereket",
  "új dolgokat megtudtam magamról, megismerhettem új embereket, jobban megismertem önmagam",
  "új dolgokat megtudtam magamról, megismerhettem új embereket",
  "új dolgokat megtudtam magamról, megismerhettem új embereket",
  "új dolgokat megtudtam magamról, megismerhettem új embereket, jobban megismertem önmagam",
  "új dolgokat megtudtam magamról, megismerhettem új embereket, jobban megismertem önmagam",
  "új dolgokat megtudtam magamról, megismerhettem új embereket, jobban megismertem önmagam, egyéb:",
  "új dolgokat megtudtam magamról, megismerhettem új embereket, jobban megismertem önmagam",
  "új dolgokat megtudtam magamról, jobban megismertem önmagam, nem kaptam semmit",
  "megismerhettem új embereket",
  "új dolgokat megtudtam magamról, megismerhettem új embereket",
  "új dolgokat megtudtam magamról, megismerhettem új embereket",
  "új dolgokat megtudtam magamról, megismerhettem új embereket, egyéb:",
  "új dolgokat megtudtam magamról, megismerhettem új embereket, egyéb:",
  "új dolgokat megtudtam magamról, megismerhettem új embereket, egyéb:",
  "új dolgokat megtudtam magamról, jobban megismertem önmagam",
  "új dolgokat megtudtam magamról, megismerhettem új embereket, jobban megismertem önmagam",
  "új dolgokat megtudtam magamról, megismerhettem új embereket",
  "új dolgokat megtudtam magamról, megismerhettem új embereket, jobban megismertem önmagam",
  "megismerhettem új embereket, jobban megismertem önmagam, egyéb:",
  "új dolgokat megtudtam magamról, megismerhettem új embereket, jobban megismertem önmagam",
  "megismerhettem új embereket, jobban megismertem önmagam, egyéb:",
  "megismerhettem új embereket, jobban megismertem önmagam",
  "új dolgokat megtudtam magamról, megismerhettem új embereket, jobban megismertem önmagam",
  "új dolgokat megtudtam magamról, megismerhettem új embereket, jobban megismertem önmagam",
  "megismerhettem új embereket, jobban megismertem önmagam",
  "új dolgokat megtudtam magamról, megismerhettem új embereket, jobban megismertem önmagam",
  "új dolgokat megtudtam magamról, megismerhettem új embereket, jobban megismertem önmagam",
  "új dolgokat megtudtam magamról, megismerhettem új embereket",
  "új dolgokat megtudtam magamról, megismerhettem új embereket, jobban megismertem önmagam",
  "új dolgokat megtudtam magamról, megismerhettem új embereket, jobban megismertem önmagam",
  "új dolgokat megtudtam magamról, megismerhettem új embereket, jobban megismertem önmagam",
  "új dolgokat megtudtam magamról, megismerhettem új embereket, jobban megismertem önmagam",
  "új dolgokat megtudtam magamról, megismerhettem új embereket, jobban megismertem önmagam",
  "új dolgokat megtudtam magamról, megismerhettem új embereket, jobban megismertem önmagam",
  "új dolgokat megtudtam magamról, megismerhettem új embereket",
];

// Kimeneti Q19: "Mi az amit változtatnál a programban?" (N=63)
export const valtoztatasokRaw: string[] = [
  "Semmi","Semmit","Semmit minden így volt jó","Minden tökéletes","Semmi","Semmit","Semmit","Semmit",
  "Semmin","Semmin","Több jatek lehetne","Semmit","Semmit","Semmin","Minden jó volt","Több játék lehetne",
  "Lehetne hosszabb a program","Legyen hosszabb :)","Semmin","Semmi","Legyen több játék","Semmi",
  "Még több videót forgassunk","Semmit","Legyen hosszabb","Semmi","Minden jó volt","Semmi",
  "Szuper program volt","Jó volt","Több játékot szeretnék","Semmi","Semmi","Semmin","Semmit","semmit",
  "Semmit","Több foci","minden jó volt","Nagyon jó volt így","Nem","Legyenek pacik","semi",
  "Több játék","Semmi","Legyen hosszabb","Semmin","Semmi","Minden jó volt","Legyen több játék",
  "Több forgatás lehetne több témában","Lehetne több csapatépítő játék","Semmin","Jó volt minden",
  "Semmin","Semmi","Legyen több ilyen program","Legyen több játék","Több szünet :)","Minden szuper volt",
  "Semmin","Semmi","Semmi",
];

// Kategorizáló függvények
export interface CategoryCount {
  category: string;
  count: number;
  pct: number;
}

export function countExpectationCategories(responses: string[], categories: { keyword: string; label: string }[]): CategoryCount[] {
  const n = responses.length;
  return categories.map(c => {
    const count = responses.filter(r => r.toLowerCase().includes(c.keyword.toLowerCase())).length;
    return { category: c.label, count, pct: Math.round((count / n) * 100) };
  });
}

export const varakozasCategories = [
  { keyword: "tanulok valami újat", label: "Tanulás" },
  { keyword: "megismerek más embereket", label: "Ismerkedés" },
  { keyword: "jobban megismerem magam", label: "Önismeret" },
  { keyword: "nem várok semmit", label: "Nem vár semmit" },
];

export const eredmenyCategories = [
  { keyword: "új dolgokat megtudtam magamról", label: "Tanulás (önmagáról)" },
  { keyword: "megismerhettem új embereket", label: "Ismerkedés" },
  { keyword: "jobban megismertem önmagam", label: "Önismeret" },
  { keyword: "nem kaptam semmit", label: "Nem kapott semmit" },
];

export function categorizeValtoztatasok(responses: string[]): CategoryCount[] {
  const n = responses.length;
  const categories: Record<string, number> = {
    "Elégedett (nem változtatna)": 0,
    "Több játékot": 0,
    "Hosszabb program": 0,
    "Több forgatás/videó": 0,
    "Több ilyen program": 0,
    "Egyéb javaslat": 0,
  };

  responses.forEach(r => {
    const low = r.toLowerCase().trim();
    if (/^(semmi[tn]?|semi|nem|minden.*jó|jó volt|szuper|nagyon jó|minden tökéletes)/.test(low)) {
      categories["Elégedett (nem változtatna)"]++;
    } else if (/játék|foci/.test(low)) {
      categories["Több játékot"]++;
    } else if (/hosszabb/.test(low)) {
      categories["Hosszabb program"]++;
    } else if (/forgat|videó/.test(low)) {
      categories["Több forgatás/videó"]++;
    } else if (/több ilyen/.test(low)) {
      categories["Több ilyen program"]++;
    } else {
      categories["Egyéb javaslat"]++;
    }
  });

  return Object.entries(categories)
    .map(([category, count]) => ({ category, count, pct: Math.round((count / n) * 100) }))
    .filter(c => c.count > 0)
    .sort((a, b) => b.count - a.count);
}
