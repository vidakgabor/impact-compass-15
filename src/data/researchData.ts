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
  // Szívesen részt venne újabb workshopon: 63 igen / 0 nem
  ujraResztVenne: { igen: 63, nem: 0 },
  // Külsősökkel újabb közös programon részt venne (külön kérdés): 62 igen / 1 nem
  kulsoProgram: { igen: 62, nem: 1 },
  // Negatív érzések elmúlása (kimeneti, nevező = minden kimeneti válaszadó, n=63)
  negativErzesElmult: { igen: 57, reszben: 2, nem: 4 },
};

// Helyszín soronként (a saját válaszrekord workshop mezőjéből)
export const resztvevokHelyszinBe: string[] = [
  ...Array(17).fill("Istvándi"), ...Array(17).fill("Pécs"),
  ...Array(18).fill("Gilvánfa"), ...Array(18).fill("Somogyszentpál"),
];
export const resztvevokHelyszinKi: string[] = [
  ...Array(17).fill("Istvándi"), ...Array(17).fill("Pécs"),
  ...Array(11).fill("Gilvánfa"), ...Array(18).fill("Somogyszentpál"),
];


// SZERVEZŐK (ELTE hallgatók)
// Bemeneti mérés: 44 fő, Kimeneti mérés: 44 fő

export const szervezokBemeneti = {
  n: 44,
  // BE Q11 — kellő információ a célcsoportról
  kelloInfo: [3,2,4,2,4,4,3,4,5,3,3,2,2,4,2,3,3,4,2,3,3,4,1,2,5,4,4,4,2,5,3,2,1,2,3,4,4,3,4,3,4,4,3,5],
  // BE Q12 — "nem fog problémát okozni" (előzetes várakozás; NEM vethető össze a kimeneti Q10-zel)
  nemOkozProblemat: [4,4,2,2,2,4,4,3,5,2,4,2,2,3,4,5,5,5,4,2,3,1,4,3,5,5,4,4,4,5,4,4,2,3,4,4,4,4,4,3,5,5,5,5],
  onismeret: [3,5,4,3,3,3,4,4,5,4,3,2,3,4,4,4,5,5,4,4,3,2,3,2,4,4,4,3,3,5,4,4,3,3,4,5,5,4,3,4,5,4,4,4],
  empatia: [4,5,3,4,4,3,4,3,5,4,3,3,4,4,5,4,5,5,5,4,4,5,4,4,4,5,5,5,4,5,4,3,3,4,5,5,5,3,3,4,5,4,5,5],
  motivacio: [5,3,4,4,5,3,4,5,5,5,4,3,4,5,5,5,3,4,5,5,5,5,5,4,5,5,5,5,4,5,5,5,4,5,4,5,4,4,4,3,5,5,5,5],
  csapatmunka: [4,3,5,3,5,4,4,4,4,4,4,3,3,5,5,5,3,4,5,4,5,5,4,4,4,5,4,4,5,5,4,4,4,4,4,4,5,3,4,3,5,4,5,3],
  konfliktuskezeles: [4,4,5,2,4,5,4,4,5,3,3,2,4,5,4,5,3,5,5,4,3,4,3,3,4,5,3,3,3,4,3,5,4,3,4,4,5,4,4,3,5,4,5,4],
  kommunikacio: [5,4,4,3,3,4,4,5,5,5,2,2,4,5,5,4,3,5,5,3,3,5,3,4,4,4,4,4,4,5,4,5,4,3,4,5,5,3,4,2,5,5,4,5],
};

export const szervezokKimeneti = {
  n: 44,
  kozosHang: [4,5,5,5,4,4,5,5,5,5,5,3,4,5,5,4,4,4,5,5,4,4,5,4,3,4,5,4,4,4,5,4,4,3,5,4,5,3,5,4,5,5,5,4],
  // KI Q9 — kellő információ a célcsoportról
  kelloInfo: [4,5,4,4,4,4,5,4,4,4,5,3,3,4,5,4,3,5,4,4,4,4,5,2,2,5,4,3,3,3,5,4,4,5,5,4,5,4,5,2,4,3,4,2],
  // KI Q10 — "okozott-e problémát" (utólagos tapasztalat; önálló mutató)
  problemaMunkaval: [3,2,1,1,4,1,1,1,1,1,1,1,1,1,1,1,2,4,4,1,3,1,1,2,1,4,1,4,2,2,5,1,1,2,5,3,1,3,1,2,1,2,1,1],
  onismeret: [4,5,4,4,4,4,4,3,5,4,4,3,4,5,5,5,4,4,4,4,4,3,4,4,3,4,5,5,4,3,5,4,4,5,4,5,4,4,5,4,5,4,4,4],
  empatia: [3,5,5,4,5,4,5,4,5,5,5,3,4,5,5,4,3,5,5,4,4,5,5,4,4,4,5,2,5,4,5,5,2,5,5,4,5,5,5,5,5,5,5,4],
  motivacio: [5,5,5,5,5,5,5,5,5,5,5,4,5,5,5,5,5,5,5,5,5,5,5,4,5,5,5,2,5,5,5,3,4,4,5,4,5,4,5,5,5,3,4,4],
  csapatmunka: [4,5,5,5,5,4,5,5,5,5,5,4,5,5,4,5,4,5,5,4,5,5,4,2,4,3,4,5,4,4,5,4,4,4,5,4,5,4,5,5,5,5,5,4],
  konfliktuskezeles: [3,5,5,4,4,5,5,4,5,5,4,3,5,5,5,5,4,5,5,4,3,5,5,2,3,3,4,3,4,3,5,3,4,4,5,4,5,5,5,3,5,4,4,5],
  kommunikacio: [4,5,5,4,4,5,5,5,5,5,5,3,5,4,5,5,3,5,5,4,3,4,5,3,3,3,5,3,4,4,5,4,5,3,5,5,5,5,5,5,5,3,4,4],
  alkalmazkodas: [3,5,5,5,3,5,5,4,4,5,5,4,4,5,5,5,3,4,5,5,4,5,5,5,4,3,5,5,4,3,5,4,4,5,5,5,5,4,4,4,5,4,5,4],
  sokkElsoTalalkozas: { nem: 43, igen: 1 },
};

export const szervezokHelyszinBe: string[] = ["Istvándi","Pécs","Gilvánfa","Pécs","Gilvánfa","Gilvánfa","Gilvánfa","Pécs","Gilvánfa","Istvándi","Gilvánfa","Istvándi","Pécs","Gilvánfa","Istvándi","Istvándi","Istvándi","Pécs","Pécs","Gilvánfa","Somogyszentpál","Somogyszentpál","Istvándi","Istvándi","Istvándi","Istvándi","Pécs","Gilvánfa","Gilvánfa","Istvándi","Pécs","Pécs","Pécs","Pécs","Gilvánfa","Gilvánfa","Istvándi","Istvándi","Pécs","Istvándi","Pécs","Somogyszentpál","Pécs","Somogyszentpál"];
export const szervezokHelyszinKi: string[] = ["Istvándi","Pécs","Gilvánfa","Pécs","Gilvánfa","Gilvánfa","Gilvánfa","Istvándi","Pécs","Gilvánfa","Gilvánfa","Istvándi","Istvándi","Pécs","Gilvánfa","Istvándi","Istvándi","Pécs","Pécs","Gilvánfa","Somogyszentpál","Somogyszentpál","Istvándi","Istvándi","Istvándi","Istvándi","Istvándi","Pécs","Gilvánfa","Gilvánfa","Istvándi","Pécs","Pécs","Pécs","Pécs","Gilvánfa","Gilvánfa","Istvándi","Pécs","Istvándi","Pécs","Somogyszentpál","Pécs","Somogyszentpál"];


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
// STATISZTIKAI SZIGNIFIKANCIA TESZTEK
// Welch's t-test (független minták, eltérő variancia és N)
// ============================================================

// Standard normal CDF approximation (Abramowitz & Stegun)
function normalCDF(x: number): number {
  const a1 = 0.254829592, a2 = -0.284496736, a3 = 1.421413741, a4 = -1.453152027, a5 = 1.061405429;
  const p = 0.3275911;
  const sign = x < 0 ? -1 : 1;
  x = Math.abs(x) / Math.sqrt(2);
  const t = 1.0 / (1.0 + p * x);
  const y = 1.0 - (((((a5 * t + a4) * t) + a3) * t + a2) * t + a1) * t * Math.exp(-x * x);
  return 0.5 * (1.0 + sign * y);
}

// t-distribution CDF approximation using normal for df > 30, otherwise Hill's approx
function tCDF(t: number, df: number): number {
  // For large df, t approaches normal
  if (df > 100) return normalCDF(t);
  
  // Regularized incomplete beta function approximation for t-distribution
  const x = df / (df + t * t);
  const a = df / 2;
  const b = 0.5;
  
  // Use series expansion for regularized incomplete beta
  let betaI = incompleteBeta(x, a, b);
  
  if (t >= 0) return 1 - 0.5 * betaI;
  return 0.5 * betaI;
}

// Log gamma function (Lanczos approximation)
function logGamma(z: number): number {
  const g = 7;
  const c = [
    0.99999999999980993, 676.5203681218851, -1259.1392167224028,
    771.32342877765313, -176.61502916214059, 12.507343278686905,
    -0.13857109526572012, 9.9843695780195716e-6, 1.5056327351493116e-7,
  ];
  if (z < 0.5) {
    return Math.log(Math.PI / Math.sin(Math.PI * z)) - logGamma(1 - z);
  }
  z -= 1;
  let x = c[0];
  for (let i = 1; i < g + 2; i++) x += c[i] / (z + i);
  const t2 = z + g + 0.5;
  return 0.5 * Math.log(2 * Math.PI) + (z + 0.5) * Math.log(t2) - t2 + Math.log(x);
}

// Regularized incomplete beta function
function incompleteBeta(x: number, a: number, b: number): number {
  if (x === 0 || x === 1) return x;
  
  // Use continued fraction representation
  const lnBeta = logGamma(a) + logGamma(b) - logGamma(a + b);
  const front = Math.exp(Math.log(x) * a + Math.log(1 - x) * b - lnBeta);
  
  if (x < (a + 1) / (a + b + 2)) {
    return front * betaCF(x, a, b) / a;
  }
  return 1 - front * betaCF(1 - x, b, a) / b;
}

// Continued fraction for incomplete beta
function betaCF(x: number, a: number, b: number): number {
  const maxIter = 200;
  const eps = 3e-12;
  let qab = a + b, qap = a + 1, qam = a - 1;
  let c = 1, d = 1 - qab * x / qap;
  if (Math.abs(d) < 1e-30) d = 1e-30;
  d = 1 / d;
  let h = d;
  
  for (let m = 1; m <= maxIter; m++) {
    const m2 = 2 * m;
    let aa = m * (b - m) * x / ((qam + m2) * (a + m2));
    d = 1 + aa * d; if (Math.abs(d) < 1e-30) d = 1e-30; d = 1 / d;
    c = 1 + aa / c; if (Math.abs(c) < 1e-30) c = 1e-30;
    h *= d * c;
    
    aa = -(a + m) * (qab + m) * x / ((a + m2) * (qap + m2));
    d = 1 + aa * d; if (Math.abs(d) < 1e-30) d = 1e-30; d = 1 / d;
    c = 1 + aa / c; if (Math.abs(c) < 1e-30) c = 1e-30;
    const del = d * c;
    h *= del;
    
    if (Math.abs(del - 1) < eps) break;
  }
  return h;
}

export interface SignificanceResult {
  name: string;
  group: "Résztvevők" | "Szervezők";
  preMean: number;
  postMean: number;
  preSD: number;
  postSD: number;
  preN: number;
  postN: number;
  tStatistic: number;
  degreesOfFreedom: number;
  pValue: number;
  cohenD: number;
  significant005: boolean;
  significant001: boolean;
  effectSize: "elhanyagolható" | "kicsi" | "közepes" | "nagy";
}

export function welchTTest(pre: number[], post: number[]): { t: number; df: number; p: number } {
  const n1 = pre.length, n2 = post.length;
  const m1 = mean(pre), m2 = mean(post);
  // Use sample SD (Bessel's correction)
  const s1sq = pre.reduce((s, v) => s + (v - m1) ** 2, 0) / (n1 - 1);
  const s2sq = post.reduce((s, v) => s + (v - m2) ** 2, 0) / (n2 - 1);
  
  const se = Math.sqrt(s1sq / n1 + s2sq / n2);
  const t = (m2 - m1) / se;
  
  // Welch-Satterthwaite degrees of freedom
  const num = (s1sq / n1 + s2sq / n2) ** 2;
  const den = (s1sq / n1) ** 2 / (n1 - 1) + (s2sq / n2) ** 2 / (n2 - 1);
  const df = num / den;
  
  // Two-tailed p-value
  const p = 2 * (1 - tCDF(Math.abs(t), df));
  
  return { t: Math.round(t * 1000) / 1000, df: Math.round(df * 10) / 10, p: Math.round(p * 10000) / 10000 };
}

export function cohenD(pre: number[], post: number[]): number {
  const m1 = mean(pre), m2 = mean(post);
  const n1 = pre.length, n2 = post.length;
  const s1sq = pre.reduce((s, v) => s + (v - m1) ** 2, 0) / (n1 - 1);
  const s2sq = post.reduce((s, v) => s + (v - m2) ** 2, 0) / (n2 - 1);
  // Pooled SD
  const pooledSD = Math.sqrt(((n1 - 1) * s1sq + (n2 - 1) * s2sq) / (n1 + n2 - 2));
  return Math.round(((m2 - m1) / pooledSD) * 1000) / 1000;
}

function effectSizeLabel(d: number): "elhanyagolható" | "kicsi" | "közepes" | "nagy" {
  const abs = Math.abs(d);
  if (abs < 0.2) return "elhanyagolható";
  if (abs < 0.5) return "kicsi";
  if (abs < 0.8) return "közepes";
  return "nagy";
}

function createSignificanceResult(name: string, group: "Résztvevők" | "Szervezők", pre: number[], post: number[]): SignificanceResult {
  const test = welchTTest(pre, post);
  const d = cohenD(pre, post);
  const m1 = mean(pre), m2 = mean(post);
  const n1 = pre.length, n2 = post.length;
  const s1 = Math.sqrt(pre.reduce((s, v) => s + (v - m1) ** 2, 0) / (n1 - 1));
  const s2 = Math.sqrt(post.reduce((s, v) => s + (v - m2) ** 2, 0) / (n2 - 1));
  
  return {
    name, group,
    preMean: Math.round(m1 * 100) / 100,
    postMean: Math.round(m2 * 100) / 100,
    preSD: Math.round(s1 * 100) / 100,
    postSD: Math.round(s2 * 100) / 100,
    preN: n1, postN: n2,
    tStatistic: test.t,
    degreesOfFreedom: test.df,
    pValue: test.p,
    cohenD: d,
    significant005: test.p < 0.05,
    significant001: test.p < 0.01,
    effectSize: effectSizeLabel(d),
  };
}

// ------------------------------------------------------------
// LEÍRÓ CSOPORTSZINTŰ ÖSSZEVETÉS
// A személyenkénti bemeneti–kimeneti párosítás nem igazolt, ezért
// inferenciális próbát (páros/független t-próba, Wilcoxon) és hatásméretet
// nem közlünk. Csak n, átlag, SD és a skálapont-különbség szerepel.
// ------------------------------------------------------------

export interface DescriptiveComparison {
  name: string;
  preN: number;
  postN: number;
  preMean: number;
  postMean: number;
  preSD: number;
  postSD: number;
  delta: number;
}

export function createDescriptive(name: string, pre: number[], post: number[]): DescriptiveComparison {
  const m1 = mean(pre), m2 = mean(post);
  const n1 = pre.length, n2 = post.length;
  const s1 = Math.sqrt(pre.reduce((s, v) => s + (v - m1) ** 2, 0) / (n1 - 1));
  const s2 = Math.sqrt(post.reduce((s, v) => s + (v - m2) ** 2, 0) / (n2 - 1));
  return {
    name, preN: n1, postN: n2,
    preMean: Math.round(m1 * 100) / 100,
    postMean: Math.round(m2 * 100) / 100,
    preSD: Math.round(s1 * 100) / 100,
    postSD: Math.round(s2 * 100) / 100,
    delta: Math.round((m2 - m1) * 100) / 100,
  };
}

export const METHOD_NOTE =
  "Leíró csoportszintű összevetés. A személyenkénti párosítás nem igazolt; az eltérések nem bizonyítanak oksági programhatást.";

export const resztvevokDescriptive: DescriptiveComparison[] = [
  createDescriptive("Szabálykövetés", resztvevokBemeneti.szabalykoveto, resztvevokKimeneti.szabalykoveto),
  createDescriptive("Nyitottság új dolgokra", resztvevokBemeneti.nyitott, resztvevokKimeneti.nyitott),
  createDescriptive("Megbízhatóság, pontosság", resztvevokBemeneti.megbizhato, resztvevokKimeneti.megbizhato),
];

export const szervezokDescriptive: DescriptiveComparison[] = [
  createDescriptive("Információ a célcsoportról", szervezokBemeneti.kelloInfo, szervezokKimeneti.kelloInfo),
  createDescriptive("Önismeret", szervezokBemeneti.onismeret, szervezokKimeneti.onismeret),
  createDescriptive("Empátia", szervezokBemeneti.empatia, szervezokKimeneti.empatia),
  createDescriptive("Motiváció", szervezokBemeneti.motivacio, szervezokKimeneti.motivacio),
  createDescriptive("Csapatmunka", szervezokBemeneti.csapatmunka, szervezokKimeneti.csapatmunka),
  createDescriptive("Konfliktuskezelés", szervezokBemeneti.konfliktuskezeles, szervezokKimeneti.konfliktuskezeles),
  createDescriptive("Kommunikáció", szervezokBemeneti.kommunikacio, szervezokKimeneti.kommunikacio),
];

// Jövőkép kategóriamegoszlás (nem egyenlő távolságú skála — csak megoszlásként értelmezhető)
export const jovokepDistribution = [
  { label: "Nincs elképzelése", preCount: 29, postCount: 2 },
  { label: "Részben vannak tervei", preCount: 25, postCount: 18 },
  { label: "Nagyon konkrét tervei vannak", preCount: 16, postCount: 43 },
].map(c => ({
  ...c,
  prePct: Math.round((c.preCount / 70) * 1000) / 10,
  postPct: Math.round((c.postCount / 63) * 1000) / 10,
  diffPp: Math.round(((c.postCount / 63) - (c.preCount / 70)) * 1000) / 10,
}));


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

// ============================================================
// HELYSZÍNENKÉNTI BONTÁS
// ============================================================

export interface LocationData {
  name: string;
  resztvevok: {
    pre: { n: number; szabalykoveto: number[]; nyitott: number[]; megbizhato: number[]; jovokep: number[] };
    post: { n: number; szabalykoveto: number[]; nyitott: number[]; megbizhato: number[]; jovokep: number[]; elegedettseg: number[] };
  };
  szervezok: {
    pre: { n: number; kelloInfo: number[]; onismeret: number[]; empatia: number[]; motivacio: number[]; csapatmunka: number[]; konfliktuskezeles: number[]; kommunikacio: number[] };
    post: { n: number; kelloInfo: number[]; onismeret: number[]; empatia: number[]; motivacio: number[]; csapatmunka: number[]; konfliktuskezeles: number[]; kommunikacio: number[] };
  };
}

function sliceArr(arr: number[], start: number, end: number): number[] {
  return arr.slice(start, end);
}

export const locationData: LocationData[] = [
  {
    name: "Istvándi",
    resztvevok: {
      pre: {
        n: 17,
        szabalykoveto: sliceArr(resztvevokBemeneti.szabalykoveto, 0, 17),
        nyitott: sliceArr(resztvevokBemeneti.nyitott, 0, 17),
        megbizhato: sliceArr(resztvevokBemeneti.megbizhato, 0, 17),
        jovokep: sliceArr(resztvevokBemeneti.jovokep, 0, 17),
      },
      post: {
        n: 17,
        szabalykoveto: sliceArr(resztvevokKimeneti.szabalykoveto, 0, 17),
        nyitott: sliceArr(resztvevokKimeneti.nyitott, 0, 17),
        megbizhato: sliceArr(resztvevokKimeneti.megbizhato, 0, 17),
        jovokep: sliceArr(resztvevokKimeneti.jovokep, 0, 17),
        elegedettseg: sliceArr(resztvevokKimeneti.elegedettseg, 0, 17),
      },
    },
    szervezok: {
      pre: {
        n: 14,
        kelloInfo: sliceArr(szervezokBemeneti.kelloInfo, 0, 14),
        onismeret: sliceArr(szervezokBemeneti.onismeret, 0, 14),
        empatia: sliceArr(szervezokBemeneti.empatia, 0, 14),
        motivacio: sliceArr(szervezokBemeneti.motivacio, 0, 14),
        csapatmunka: sliceArr(szervezokBemeneti.csapatmunka, 0, 14),
        konfliktuskezeles: sliceArr(szervezokBemeneti.konfliktuskezeles, 0, 14),
        kommunikacio: sliceArr(szervezokBemeneti.kommunikacio, 0, 14),
      },
      post: {
        n: 14,
        kelloInfo: sliceArr(szervezokKimeneti.kelloInfo, 0, 14),
        onismeret: sliceArr(szervezokKimeneti.onismeret, 0, 14),
        empatia: sliceArr(szervezokKimeneti.empatia, 0, 14),
        motivacio: sliceArr(szervezokKimeneti.motivacio, 0, 14),
        csapatmunka: sliceArr(szervezokKimeneti.csapatmunka, 0, 14),
        konfliktuskezeles: sliceArr(szervezokKimeneti.konfliktuskezeles, 0, 14),
        kommunikacio: sliceArr(szervezokKimeneti.kommunikacio, 0, 14),
      },
    },
  },
  {
    name: "Pécs",
    resztvevok: {
      pre: {
        n: 17,
        szabalykoveto: sliceArr(resztvevokBemeneti.szabalykoveto, 17, 34),
        nyitott: sliceArr(resztvevokBemeneti.nyitott, 17, 34),
        megbizhato: sliceArr(resztvevokBemeneti.megbizhato, 17, 34),
        jovokep: sliceArr(resztvevokBemeneti.jovokep, 17, 34),
      },
      post: {
        n: 17,
        szabalykoveto: sliceArr(resztvevokKimeneti.szabalykoveto, 17, 34),
        nyitott: sliceArr(resztvevokKimeneti.nyitott, 17, 34),
        megbizhato: sliceArr(resztvevokKimeneti.megbizhato, 17, 34),
        jovokep: sliceArr(resztvevokKimeneti.jovokep, 17, 34),
        elegedettseg: sliceArr(resztvevokKimeneti.elegedettseg, 17, 34),
      },
    },
    szervezok: {
      pre: {
        n: 14,
        kelloInfo: sliceArr(szervezokBemeneti.kelloInfo, 14, 28),
        onismeret: sliceArr(szervezokBemeneti.onismeret, 14, 28),
        empatia: sliceArr(szervezokBemeneti.empatia, 14, 28),
        motivacio: sliceArr(szervezokBemeneti.motivacio, 14, 28),
        csapatmunka: sliceArr(szervezokBemeneti.csapatmunka, 14, 28),
        konfliktuskezeles: sliceArr(szervezokBemeneti.konfliktuskezeles, 14, 28),
        kommunikacio: sliceArr(szervezokBemeneti.kommunikacio, 14, 28),
      },
      post: {
        n: 14,
        kelloInfo: sliceArr(szervezokKimeneti.kelloInfo, 14, 28),
        onismeret: sliceArr(szervezokKimeneti.onismeret, 14, 28),
        empatia: sliceArr(szervezokKimeneti.empatia, 14, 28),
        motivacio: sliceArr(szervezokKimeneti.motivacio, 14, 28),
        csapatmunka: sliceArr(szervezokKimeneti.csapatmunka, 14, 28),
        konfliktuskezeles: sliceArr(szervezokKimeneti.konfliktuskezeles, 14, 28),
        kommunikacio: sliceArr(szervezokKimeneti.kommunikacio, 14, 28),
      },
    },
  },
  {
    name: "Gilvánfa",
    resztvevok: {
      pre: {
        n: 18,
        szabalykoveto: sliceArr(resztvevokBemeneti.szabalykoveto, 34, 52),
        nyitott: sliceArr(resztvevokBemeneti.nyitott, 34, 52),
        megbizhato: sliceArr(resztvevokBemeneti.megbizhato, 34, 52),
        jovokep: sliceArr(resztvevokBemeneti.jovokep, 34, 52),
      },
      post: {
        n: 11,
        szabalykoveto: sliceArr(resztvevokKimeneti.szabalykoveto, 34, 45),
        nyitott: sliceArr(resztvevokKimeneti.nyitott, 34, 45),
        megbizhato: sliceArr(resztvevokKimeneti.megbizhato, 34, 45),
        jovokep: sliceArr(resztvevokKimeneti.jovokep, 34, 45),
        elegedettseg: sliceArr(resztvevokKimeneti.elegedettseg, 34, 45),
      },
    },
    szervezok: {
      pre: {
        n: 12,
        kelloInfo: sliceArr(szervezokBemeneti.kelloInfo, 28, 40),
        onismeret: sliceArr(szervezokBemeneti.onismeret, 28, 40),
        empatia: sliceArr(szervezokBemeneti.empatia, 28, 40),
        motivacio: sliceArr(szervezokBemeneti.motivacio, 28, 40),
        csapatmunka: sliceArr(szervezokBemeneti.csapatmunka, 28, 40),
        konfliktuskezeles: sliceArr(szervezokBemeneti.konfliktuskezeles, 28, 40),
        kommunikacio: sliceArr(szervezokBemeneti.kommunikacio, 28, 40),
      },
      post: {
        n: 12,
        kelloInfo: sliceArr(szervezokKimeneti.kelloInfo, 28, 40),
        onismeret: sliceArr(szervezokKimeneti.onismeret, 28, 40),
        empatia: sliceArr(szervezokKimeneti.empatia, 28, 40),
        motivacio: sliceArr(szervezokKimeneti.motivacio, 28, 40),
        csapatmunka: sliceArr(szervezokKimeneti.csapatmunka, 28, 40),
        konfliktuskezeles: sliceArr(szervezokKimeneti.konfliktuskezeles, 28, 40),
        kommunikacio: sliceArr(szervezokKimeneti.kommunikacio, 28, 40),
      },
    },
  },
  {
    name: "Somogyszentpál",
    resztvevok: {
      pre: {
        n: 18,
        szabalykoveto: sliceArr(resztvevokBemeneti.szabalykoveto, 52, 70),
        nyitott: sliceArr(resztvevokBemeneti.nyitott, 52, 70),
        megbizhato: sliceArr(resztvevokBemeneti.megbizhato, 52, 70),
        jovokep: sliceArr(resztvevokBemeneti.jovokep, 52, 70),
      },
      post: {
        n: 18,
        szabalykoveto: sliceArr(resztvevokKimeneti.szabalykoveto, 45, 63),
        nyitott: sliceArr(resztvevokKimeneti.nyitott, 45, 63),
        megbizhato: sliceArr(resztvevokKimeneti.megbizhato, 45, 63),
        jovokep: sliceArr(resztvevokKimeneti.jovokep, 45, 63),
        elegedettseg: sliceArr(resztvevokKimeneti.elegedettseg, 45, 63),
      },
    },
    szervezok: {
      pre: {
        n: 4,
        kelloInfo: sliceArr(szervezokBemeneti.kelloInfo, 40, 44),
        onismeret: sliceArr(szervezokBemeneti.onismeret, 40, 44),
        empatia: sliceArr(szervezokBemeneti.empatia, 40, 44),
        motivacio: sliceArr(szervezokBemeneti.motivacio, 40, 44),
        csapatmunka: sliceArr(szervezokBemeneti.csapatmunka, 40, 44),
        konfliktuskezeles: sliceArr(szervezokBemeneti.konfliktuskezeles, 40, 44),
        kommunikacio: sliceArr(szervezokBemeneti.kommunikacio, 40, 44),
      },
      post: {
        n: 4,
        kelloInfo: sliceArr(szervezokKimeneti.kelloInfo, 40, 44),
        onismeret: sliceArr(szervezokKimeneti.onismeret, 40, 44),
        empatia: sliceArr(szervezokKimeneti.empatia, 40, 44),
        motivacio: sliceArr(szervezokKimeneti.motivacio, 40, 44),
        csapatmunka: sliceArr(szervezokKimeneti.csapatmunka, 40, 44),
        konfliktuskezeles: sliceArr(szervezokKimeneti.konfliktuskezeles, 40, 44),
        kommunikacio: sliceArr(szervezokKimeneti.kommunikacio, 40, 44),
      },
    },
  },
];

// Helyszínenkénti összesítő metrikák
export interface LocationSummary {
  name: string;
  resztvevokPreN: number;
  resztvevokPostN: number;
  szervezokN: number;
  resztvevokMetrics: { name: string; pre: number; post: number; change: number }[];
  szervezokMetrics: { name: string; pre: number; post: number; change: number }[];
  elegedettsegAtlag: number;
}

export function computeLocationSummaries(): LocationSummary[] {
  return locationData.map(loc => {
    const rM = [
      { name: "Szabálykövetés", pre: mean(loc.resztvevok.pre.szabalykoveto), post: mean(loc.resztvevok.post.szabalykoveto) },
      { name: "Nyitottság", pre: mean(loc.resztvevok.pre.nyitott), post: mean(loc.resztvevok.post.nyitott) },
      { name: "Megbízhatóság", pre: mean(loc.resztvevok.pre.megbizhato), post: mean(loc.resztvevok.post.megbizhato) },
      { name: "Jövőkép", pre: mean(loc.resztvevok.pre.jovokep), post: mean(loc.resztvevok.post.jovokep) },
    ].map(m => ({ ...m, pre: Math.round(m.pre * 100) / 100, post: Math.round(m.post * 100) / 100, change: Math.round((m.post - m.pre) * 100) / 100 }));

    const sM = [
      { name: "Kellő info", pre: mean(loc.szervezok.pre.kelloInfo), post: mean(loc.szervezok.post.kelloInfo) },
      { name: "Önismeret", pre: mean(loc.szervezok.pre.onismeret), post: mean(loc.szervezok.post.onismeret) },
      { name: "Empátia", pre: mean(loc.szervezok.pre.empatia), post: mean(loc.szervezok.post.empatia) },
      { name: "Motiváció", pre: mean(loc.szervezok.pre.motivacio), post: mean(loc.szervezok.post.motivacio) },
      { name: "Csapatmunka", pre: mean(loc.szervezok.pre.csapatmunka), post: mean(loc.szervezok.post.csapatmunka) },
      { name: "Konfliktusk.", pre: mean(loc.szervezok.pre.konfliktuskezeles), post: mean(loc.szervezok.post.konfliktuskezeles) },
      { name: "Kommunikáció", pre: mean(loc.szervezok.pre.kommunikacio), post: mean(loc.szervezok.post.kommunikacio) },
    ].map(m => ({ ...m, pre: Math.round(m.pre * 100) / 100, post: Math.round(m.post * 100) / 100, change: Math.round((m.post - m.pre) * 100) / 100 }));

    return {
      name: loc.name,
      resztvevokPreN: loc.resztvevok.pre.n,
      resztvevokPostN: loc.resztvevok.post.n,
      szervezokN: loc.szervezok.pre.n,
      resztvevokMetrics: rM,
      szervezokMetrics: sM,
      elegedettsegAtlag: Math.round(mean(loc.resztvevok.post.elegedettseg) * 100) / 100,
    };
  });
}

export const locationSummaries = computeLocationSummaries();
