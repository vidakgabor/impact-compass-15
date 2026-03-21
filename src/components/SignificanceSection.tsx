import { motion } from "framer-motion";
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Cell,
  ScatterChart, Scatter, ZAxis, ReferenceLine,
} from "recharts";
import { resztvevokSignificance, szervezokSignificance } from "@/data/researchData";
import type { SignificanceResult } from "@/data/researchData";
import { CheckCircle, XCircle, AlertTriangle, FlaskConical } from "lucide-react";

const fadeIn = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } };

function SignificanceBadge({ p, sig005, sig001 }: { p: number; sig005: boolean; sig001: boolean }) {
  if (sig001) return (
    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-bold bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400">
      <CheckCircle className="w-3 h-3" /> p &lt; 0.01 ***
    </span>
  );
  if (sig005) return (
    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-bold bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400">
      <AlertTriangle className="w-3 h-3" /> p &lt; 0.05 *
    </span>
  );
  return (
    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-bold bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400">
      <XCircle className="w-3 h-3" /> n.s.
    </span>
  );
}

function EffectSizeBadge({ size, d }: { size: string; d: number }) {
  const colors: Record<string, string> = {
    "nagy": "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400",
    "közepes": "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400",
    "kicsi": "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400",
    "elhanyagolható": "bg-muted text-muted-foreground",
  };
  return (
    <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-semibold ${colors[size] || colors["elhanyagolható"]}`}>
      d = {Math.abs(d).toFixed(3)} ({size})
    </span>
  );
}

function SignificanceTable({ title, results, description }: { title: string; results: SignificanceResult[]; description: string }) {
  return (
    <div className="stat-card overflow-x-auto">
      <h3 className="section-header mb-1">{title}</h3>
      <p className="text-sm text-muted-foreground mb-4">{description}</p>
      <table className="w-full text-sm">
        <thead>
          <tr className="border-b-2 border-primary/20">
            <th className="text-left py-2 pr-3 font-semibold text-muted-foreground">Kompetencia</th>
            <th className="py-2 px-2 font-semibold text-muted-foreground text-center">M₁ (SD₁)</th>
            <th className="py-2 px-2 font-semibold text-muted-foreground text-center">M₂ (SD₂)</th>
            <th className="py-2 px-2 font-semibold text-muted-foreground text-center">t-érték</th>
            <th className="py-2 px-2 font-semibold text-muted-foreground text-center">df</th>
            <th className="py-2 px-2 font-semibold text-muted-foreground text-center">p-érték</th>
            <th className="py-2 px-2 font-semibold text-muted-foreground text-center">Szignifikancia</th>
            <th className="py-2 pl-2 font-semibold text-muted-foreground text-center">Hatásméret (Cohen's d)</th>
          </tr>
        </thead>
        <tbody>
          {results.map((r, i) => (
            <motion.tr key={r.name} variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true }}
              transition={{ delay: i * 0.05, duration: 0.4 }} className="border-b border-border">
              <td className="py-3 pr-3 font-medium text-foreground">{r.name}</td>
              <td className="py-3 px-2 text-center text-sm">
                <span className="badge-pre">{r.preMean.toFixed(2)}</span>
                <span className="text-muted-foreground text-xs ml-1">({r.preSD.toFixed(2)})</span>
              </td>
              <td className="py-3 px-2 text-center text-sm">
                <span className="badge-post">{r.postMean.toFixed(2)}</span>
                <span className="text-muted-foreground text-xs ml-1">({r.postSD.toFixed(2)})</span>
              </td>
              <td className="py-3 px-2 text-center font-mono text-sm">{r.tStatistic.toFixed(3)}</td>
              <td className="py-3 px-2 text-center font-mono text-sm">{r.degreesOfFreedom.toFixed(1)}</td>
              <td className="py-3 px-2 text-center font-mono text-sm font-semibold">
                {r.pValue < 0.001 ? "<0.001" : r.pValue.toFixed(4)}
              </td>
              <td className="py-3 px-2 text-center">
                <SignificanceBadge p={r.pValue} sig005={r.significant005} sig001={r.significant001} />
              </td>
              <td className="py-3 pl-2 text-center">
                <EffectSizeBadge size={r.effectSize} d={r.cohenD} />
              </td>
            </motion.tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function EffectSizeChart({ results, title }: { results: SignificanceResult[]; title: string }) {
  const data = results.map(r => ({
    name: r.name.length > 18 ? r.name.substring(0, 16) + "…" : r.name,
    "Cohen's d": Math.abs(r.cohenD),
    fill: r.significant001 ? "hsl(140, 60%, 45%)" : r.significant005 ? "hsl(45, 80%, 50%)" : "hsl(0, 60%, 55%)",
  }));

  return (
    <div className="stat-card">
      <h3 className="text-lg font-bold text-foreground mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>{title}</h3>
      <ResponsiveContainer width="100%" height={320}>
        <BarChart data={data} layout="vertical" barGap={4}>
          <CartesianGrid strokeDasharray="3 3" stroke="hsl(220, 15%, 88%)" />
          <XAxis type="number" domain={[0, 'auto']} tick={{ fontSize: 12 }} />
          <YAxis type="category" dataKey="name" width={140} tick={{ fontSize: 11 }} />
          <Tooltip contentStyle={{ borderRadius: 12, border: "1px solid hsl(220,15%,88%)", fontSize: 13 }} />
          <ReferenceLine x={0.2} stroke="hsl(45, 80%, 50%)" strokeDasharray="3 3" label={{ value: "kicsi (0.2)", position: "top", fontSize: 10 }} />
          <ReferenceLine x={0.5} stroke="hsl(30, 70%, 50%)" strokeDasharray="3 3" label={{ value: "közepes (0.5)", position: "top", fontSize: 10 }} />
          <ReferenceLine x={0.8} stroke="hsl(0, 70%, 50%)" strokeDasharray="3 3" label={{ value: "nagy (0.8)", position: "top", fontSize: 10 }} />
          <Bar dataKey="Cohen's d" radius={[0, 4, 4, 0]}>
            {data.map((d, i) => (
              <Cell key={i} fill={d.fill} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
      <p className="text-xs text-muted-foreground mt-2">
        Cohen's d küszöbértékek: 0.2 = kicsi | 0.5 = közepes | 0.8 = nagy hatásméret.
        <span className="inline-block w-2 h-2 rounded-full bg-green-500 mx-1" /> p&lt;0.01 |
        <span className="inline-block w-2 h-2 rounded-full bg-yellow-500 mx-1" /> p&lt;0.05 |
        <span className="inline-block w-2 h-2 rounded-full bg-red-500 mx-1" /> nem szignifikáns
      </p>
    </div>
  );
}

function PValueChart({ results, title }: { results: SignificanceResult[]; title: string }) {
  const data = results.map(r => ({
    name: r.name.length > 18 ? r.name.substring(0, 16) + "…" : r.name,
    "-log10(p)": r.pValue > 0 ? -Math.log10(r.pValue) : 5,
    fill: r.significant001 ? "hsl(140, 60%, 45%)" : r.significant005 ? "hsl(45, 80%, 50%)" : "hsl(0, 60%, 55%)",
  }));

  return (
    <div className="stat-card">
      <h3 className="text-lg font-bold text-foreground mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>{title}</h3>
      <ResponsiveContainer width="100%" height={320}>
        <BarChart data={data} barGap={4}>
          <CartesianGrid strokeDasharray="3 3" stroke="hsl(220, 15%, 88%)" />
          <XAxis dataKey="name" tick={{ fontSize: 10, fill: "hsl(220, 10%, 45%)" }} angle={-20} textAnchor="end" height={80} />
          <YAxis tick={{ fontSize: 12 }} label={{ value: "-log₁₀(p)", angle: -90, position: "insideLeft", fontSize: 12 }} />
          <Tooltip contentStyle={{ borderRadius: 12, fontSize: 13 }}
            formatter={(value: number) => [`${value.toFixed(2)}`, "-log₁₀(p)"]} />
          <ReferenceLine y={-Math.log10(0.05)} stroke="hsl(45, 80%, 50%)" strokeDasharray="5 5"
            label={{ value: "p = 0.05", position: "right", fontSize: 10 }} />
          <ReferenceLine y={-Math.log10(0.01)} stroke="hsl(140, 60%, 45%)" strokeDasharray="5 5"
            label={{ value: "p = 0.01", position: "right", fontSize: 10 }} />
          <Bar dataKey="-log10(p)" radius={[4, 4, 0, 0]}>
            {data.map((d, i) => (
              <Cell key={i} fill={d.fill} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
      <p className="text-xs text-muted-foreground mt-2">
        Magasabb oszlop = erősebb szignifikancia. A szaggatott vonalak a p=0.05 és p=0.01 küszöböt jelzik.
      </p>
    </div>
  );
}

export default function SignificanceSection() {
  const allResults = [...resztvevokSignificance, ...szervezokSignificance];
  const sigCount005 = allResults.filter(r => r.significant005).length;
  const sigCount001 = allResults.filter(r => r.significant001).length;
  const largeEffect = allResults.filter(r => r.effectSize === "nagy").length;
  const mediumEffect = allResults.filter(r => r.effectSize === "közepes").length;

  return (
    <>
      <section>
        <h2 className="text-2xl md:text-3xl font-bold text-primary mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>
          Statisztikai Szignifikancia Vizsgálat
        </h2>
        <p className="text-muted-foreground mb-8">
          Welch-féle kétmintás t-próba (független minták, eltérő variancia) — Bemeneti vs. kimeneti mérések összehasonlítása
        </p>
      </section>

      {/* KPI */}
      <section>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <motion.div className="stat-card ring-2 ring-primary/30" variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <div className="flex items-start justify-between mb-2">
              <span className="metric-label">Vizsgált metrikák</span>
              <FlaskConical className="w-5 h-5 text-accent" />
            </div>
            <div className="metric-value text-primary">{allResults.length}</div>
            <p className="text-sm text-muted-foreground mt-1">kompetencia-dimenzió</p>
          </motion.div>
          <motion.div className="stat-card" variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ delay: 0.1 }}>
            <div className="flex items-start justify-between mb-2">
              <span className="metric-label">Szignifikáns (p&lt;0.05)</span>
              <CheckCircle className="w-5 h-5 text-accent" />
            </div>
            <div className="metric-value text-primary">{sigCount005}/{allResults.length}</div>
            <p className="text-sm text-muted-foreground mt-1">{Math.round((sigCount005 / allResults.length) * 100)}% szignifikáns</p>
          </motion.div>
          <motion.div className="stat-card" variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ delay: 0.2 }}>
            <div className="flex items-start justify-between mb-2">
              <span className="metric-label">Erősen szignifikáns (p&lt;0.01)</span>
              <CheckCircle className="w-5 h-5 text-accent" />
            </div>
            <div className="metric-value text-primary">{sigCount001}/{allResults.length}</div>
            <p className="text-sm text-muted-foreground mt-1">magas konfidencia</p>
          </motion.div>
          <motion.div className="stat-card" variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ delay: 0.3 }}>
            <div className="flex items-start justify-between mb-2">
              <span className="metric-label">Nagy hatásméret</span>
              <FlaskConical className="w-5 h-5 text-accent" />
            </div>
            <div className="metric-value text-primary">{largeEffect + mediumEffect}</div>
            <p className="text-sm text-muted-foreground mt-1">{largeEffect} nagy + {mediumEffect} közepes</p>
          </motion.div>
        </div>
      </section>

      {/* Résztvevők */}
      <section data-pdf-orientation="landscape">
        <SignificanceTable
          title="Résztvevők — Welch-féle t-próba eredményei"
          results={resztvevokSignificance}
          description={`Hátrányos helyzetű fiatalok (bemeneti n=${resztvevokSignificance[0]?.preN}, kimeneti n=${resztvevokSignificance[0]?.postN}) — Welch's t-test, kétoldali`}
        />
      </section>

      {/* Szervezők */}
      <section data-pdf-orientation="landscape">
        <SignificanceTable
          title="Szervezők — Welch-féle t-próba eredményei"
          results={szervezokSignificance}
          description={`ELTE hallgatók (bemeneti n=${szervezokSignificance[0]?.preN}, kimeneti n=${szervezokSignificance[0]?.postN}) — Welch's t-test, kétoldali`}
        />
      </section>

      {/* Vizualizációk */}
      <section data-pdf-orientation="landscape">
        <h2 className="section-header mb-6">Hatásméret és szignifikancia vizualizáció</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <EffectSizeChart results={allResults} title="Cohen's d hatásméret — Összes metrika" />
          <PValueChart results={allResults} title="Szignifikancia-szintek (-log₁₀(p))" />
        </div>
      </section>

      {/* Összegzés */}
      <section className="stat-card bg-primary/5 border-primary/20">
        <h2 className="section-header mb-4">Statisztikai szignifikancia — Összegzés</h2>
        <div className="grid md:grid-cols-2 gap-8 text-sm leading-relaxed text-foreground">
          <div>
            <h3 className="font-bold text-base mb-2 text-primary">Módszertan</h3>
            <ul className="space-y-2 list-disc list-inside text-muted-foreground">
              <li><strong className="text-foreground">Teszt típusa:</strong> Welch-féle kétmintás t-próba (nem feltételez egyenlő varianciát)</li>
              <li><strong className="text-foreground">Hipotézis:</strong> Kétoldali — H₀: μ₁ = μ₂ (nincs változás)</li>
              <li><strong className="text-foreground">Szignifikancia szintek:</strong> α = 0.05 (*) és α = 0.01 (***)</li>
              <li><strong className="text-foreground">Hatásméret:</strong> Cohen's d — kicsi (0.2), közepes (0.5), nagy (0.8)</li>
              <li><strong className="text-foreground">Megjegyzés:</strong> A nem párosított teszt konzervatívabb becslést ad, mivel a bemeneti és kimeneti minták nem teljesen azonos személyekből állnak (N különbözik a résztvevőknél)</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-base mb-2 text-primary">Főbb eredmények</h3>
            <ul className="space-y-2 list-disc list-inside text-muted-foreground">
              {allResults.filter(r => r.significant005).sort((a, b) => a.pValue - b.pValue).map(r => (
                <li key={r.name}>
                  <strong className="text-foreground">{r.name} ({r.group}):</strong>{" "}
                  t({r.degreesOfFreedom.toFixed(1)}) = {r.tStatistic.toFixed(3)},
                  p = {r.pValue < 0.001 ? "<0.001" : r.pValue.toFixed(4)},
                  d = {r.cohenD.toFixed(3)} ({r.effectSize})
                  <span className="change-positive ml-1">✓ Szignifikáns</span>
                </li>
              ))}
              {allResults.filter(r => !r.significant005).length > 0 && (
                <li>
                  <strong className="text-foreground">Nem szignifikáns változások:</strong>{" "}
                  {allResults.filter(r => !r.significant005).map(r => r.name).join(", ")}
                  {" "}— további kutatás szükséges nagyobb mintán
                </li>
              )}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
