import { motion } from "framer-motion";
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar,
} from "recharts";
import {
  resztvevokMetrics, szervezokMetrics, resztvevokKimenetiExtra, szervezokKimenetiExtra,
  resztvevokBemeneti, resztvevokKimeneti, szervezokBemeneti, szervezokKimeneti, distribution,
} from "@/data/researchData";
import { TrendingUp, TrendingDown, Users, GraduationCap, BarChart3, Target, Heart, MessageCircle } from "lucide-react";
import type { ComparisonMetric } from "@/data/researchData";
import BogardusSection from "@/components/BogardusSection";
import ExpectationsSection from "@/components/ExpectationsSection";

const fadeIn = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } };

function StatCard({ label, value, subtitle, icon: Icon, delay = 0 }: { label: string; value: string | number; subtitle?: string; icon: React.ElementType; delay?: number }) {
  return (
    <motion.div className="stat-card" variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ delay, duration: 0.5 }}>
      <div className="flex items-start justify-between mb-3">
        <span className="metric-label">{label}</span>
        <Icon className="w-5 h-5 text-accent" />
      </div>
      <div className="metric-value text-primary">{value}</div>
      {subtitle && <p className="text-sm text-muted-foreground mt-1">{subtitle}</p>}
    </motion.div>
  );
}

function MetricRow({ m, idx }: { m: ComparisonMetric; idx: number }) {
  const isPositive = m.change > 0;
  return (
    <motion.tr variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ delay: idx * 0.05, duration: 0.4 }} className="border-b border-border">
      <td className="py-3 pr-4 font-medium text-foreground">{m.name}</td>
      <td className="py-3 px-4 text-center"><span className="badge-pre">{m.preMean.toFixed(2)}</span></td>
      <td className="py-3 px-4 text-center"><span className="badge-post">{m.postMean.toFixed(2)}</span></td>
      <td className="py-3 px-4 text-center font-semibold">
        <span className={isPositive ? "change-positive" : "change-negative"}>
          {isPositive ? "+" : ""}{m.change.toFixed(2)}
        </span>
      </td>
      <td className="py-3 px-4 text-center">
        <span className={`inline-flex items-center gap-1 font-semibold ${isPositive ? "change-positive" : "change-negative"}`}>
          {isPositive ? <TrendingUp className="w-4 h-4" /> : <TrendingDown className="w-4 h-4" />}
          {isPositive ? "+" : ""}{m.changePct}%
        </span>
      </td>
      <td className="py-3 pl-4 text-center text-muted-foreground text-sm">{m.preSD.toFixed(2)} → {m.postSD.toFixed(2)}</td>
    </motion.tr>
  );
}

function ComparisonTable({ title, metrics, preN, postN }: { title: string; metrics: ComparisonMetric[]; preN: number; postN: number }) {
  return (
    <div className="stat-card overflow-x-auto">
      <h3 className="section-header mb-1">{title}</h3>
      <p className="text-sm text-muted-foreground mb-4">Bemeneti mérés: n={preN} | Kimeneti mérés: n={postN}</p>
      <table className="w-full text-sm">
        <thead>
          <tr className="border-b-2 border-primary/20">
            <th className="text-left py-2 pr-4 font-semibold text-muted-foreground">Kompetencia</th>
            <th className="py-2 px-4 font-semibold text-muted-foreground">Bemeneti átlag</th>
            <th className="py-2 px-4 font-semibold text-muted-foreground">Kimeneti átlag</th>
            <th className="py-2 px-4 font-semibold text-muted-foreground">Változás</th>
            <th className="py-2 px-4 font-semibold text-muted-foreground">Változás %</th>
            <th className="py-2 pl-4 font-semibold text-muted-foreground">SD (be→ki)</th>
          </tr>
        </thead>
        <tbody>
          {metrics.map((m, i) => <MetricRow key={m.name} m={m} idx={i} />)}
        </tbody>
      </table>
    </div>
  );
}

function ComparisonBarChart({ title, metrics }: { title: string; metrics: ComparisonMetric[] }) {
  const data = metrics.map(m => ({ name: m.name.length > 20 ? m.name.substring(0, 18) + "…" : m.name, Bemeneti: m.preMean, Kimeneti: m.postMean }));
  return (
    <div className="stat-card">
      <h3 className="text-lg font-bold text-foreground mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>{title}</h3>
      <ResponsiveContainer width="100%" height={320}>
        <BarChart data={data} barGap={4}>
          <CartesianGrid strokeDasharray="3 3" stroke="hsl(220, 15%, 88%)" />
          <XAxis dataKey="name" tick={{ fontSize: 11, fill: "hsl(220, 10%, 45%)" }} angle={-15} textAnchor="end" height={70} />
          <YAxis domain={[0, 5]} tick={{ fontSize: 12, fill: "hsl(220, 10%, 45%)" }} />
          <Tooltip contentStyle={{ borderRadius: 12, border: "1px solid hsl(220,15%,88%)", fontSize: 13 }} />
          <Legend />
          <Bar dataKey="Bemeneti" fill="hsl(220, 60%, 55%)" radius={[4, 4, 0, 0]} />
          <Bar dataKey="Kimeneti" fill="hsl(38, 80%, 55%)" radius={[4, 4, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

function RadarComparisonChart({ title, metrics }: { title: string; metrics: ComparisonMetric[] }) {
  const data = metrics.map(m => ({ subject: m.name.length > 15 ? m.name.substring(0, 13) + "…" : m.name, Bemeneti: m.preMean, Kimeneti: m.postMean }));
  return (
    <div className="stat-card">
      <h3 className="text-lg font-bold text-foreground mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>{title}</h3>
      <ResponsiveContainer width="100%" height={350}>
        <RadarChart data={data}>
          <PolarGrid stroke="hsl(220,15%,88%)" />
          <PolarAngleAxis dataKey="subject" tick={{ fontSize: 10, fill: "hsl(220,10%,45%)" }} />
          <PolarRadiusAxis domain={[0, 5]} tick={{ fontSize: 10 }} />
          <Radar name="Bemeneti" dataKey="Bemeneti" stroke="hsl(220,60%,55%)" fill="hsl(220,60%,55%)" fillOpacity={0.2} />
          <Radar name="Kimeneti" dataKey="Kimeneti" stroke="hsl(38,80%,55%)" fill="hsl(38,80%,55%)" fillOpacity={0.3} />
          <Legend />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
}

function JovokepDistribution() {
  const preDist = distribution(resztvevokBemeneti.jovokep, 3);
  const postDist = distribution(resztvevokKimeneti.jovokep, 3);
  const labels = ["Nem tudja", "Részben vannak tervei", "Konkrét tervei vannak"];
  const data = labels.map((l, i) => ({ name: l, Bemeneti: preDist[i].pct, Kimeneti: postDist[i].pct }));
  return (
    <div className="stat-card">
      <h3 className="text-lg font-bold text-foreground mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>Jövőkép alakulása (%)</h3>
      <ResponsiveContainer width="100%" height={280}>
        <BarChart data={data} layout="vertical" barGap={4}>
          <CartesianGrid strokeDasharray="3 3" stroke="hsl(220,15%,88%)" />
          <XAxis type="number" domain={[0, 100]} tick={{ fontSize: 12 }} unit="%" />
          <YAxis type="category" dataKey="name" width={150} tick={{ fontSize: 11 }} />
          <Tooltip />
          <Legend />
          <Bar dataKey="Bemeneti" fill="hsl(220,60%,55%)" radius={[0, 4, 4, 0]} />
          <Bar dataKey="Kimeneti" fill="hsl(38,80%,55%)" radius={[0, 4, 4, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default function Index() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <header className="bg-primary text-primary-foreground py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.p className="text-sm uppercase tracking-widest opacity-70 mb-3" initial={{ opacity: 0 }} animate={{ opacity: 0.7 }} transition={{ delay: 0.2 }}>
            Doktori Disszertáció — Rövidtávú Hatásvizsgálat
          </motion.p>
          <motion.h1 className="text-3xl md:text-5xl font-bold leading-tight mb-4" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.6 }}>
            Részvételi Filmes Workshop<br />Hatásvizsgálati Dashboard
          </motion.h1>
          <motion.p className="text-lg opacity-80 max-w-3xl" initial={{ opacity: 0 }} animate={{ opacity: 0.8 }} transition={{ delay: 0.5 }}>
            A hátrányos helyzetű fiatalok és az ELTE hallgatók bemeneti és kimeneti méréseinek összehasonlító elemzése.
            Helyszínek: Istvándi, Pécs, Gilvánfa, Somogyszentpál.
          </motion.p>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-12 space-y-16">
        {/* KPI összefoglaló */}
        <section>
          <h2 className="section-header mb-6">Összefoglaló mutatók</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <StatCard label="Résztvevők (bemeneti)" value={resztvevokBemeneti.n} subtitle="Hátrányos helyzetű fiatal" icon={Users} delay={0} />
            <StatCard label="Résztvevők (kimeneti)" value={resztvevokKimeneti.n} subtitle="Kitöltötte a kimeneti kérdőívet" icon={Users} delay={0.1} />
            <StatCard label="Szervezők (bemeneti)" value={szervezokBemeneti.n} subtitle="ELTE hallgató" icon={GraduationCap} delay={0.2} />
            <StatCard label="Szervezők (kimeneti)" value={szervezokKimeneti.n} subtitle="ELTE hallgató" icon={GraduationCap} delay={0.3} />
          </div>
        </section>

        {/* RÉSZTVEVŐK kimeneti extra mutatók */}
        <section>
          <h2 className="section-header mb-6">Résztvevők — Kimeneti kulcsmutatók</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            <StatCard label="Elégedettség" value={`${resztvevokKimenetiExtra.elegedettsegAtlag}/5`} subtitle="Átlagos értékelés" icon={Heart} />
            <StatCard label="Újra részt venne" value={`${resztvevokKimenetiExtra.ujraResztVennePct}%`} subtitle="Igen válaszok" icon={Target} />
            <StatCard label="Külső programon részt venne" value={`${resztvevokKimenetiExtra.kulsoProgramPct}%`} subtitle="Igen válaszok" icon={Target} />
            <StatCard label="Érdektelenség" value={`${resztvevokKimenetiExtra.erdektelensegAtlag}/5`} subtitle="Alacsony = jó" icon={BarChart3} />
            <StatCard label="Kommunikációs nehézség" value={`${resztvevokKimenetiExtra.nemErtetteAtlag}/5`} subtitle="Alacsony = jó" icon={MessageCircle} />
            <StatCard label="Közös hang hiánya" value={`${resztvevokKimenetiExtra.nemJottKiAtlag}/5`} subtitle="Alacsony = jó" icon={MessageCircle} />
          </div>
        </section>

        {/* RÉSZTVEVŐK összehasonlítás */}
        <section>
          <h2 className="section-header mb-6">Résztvevők — Bemeneti vs. Kimeneti összehasonlítás</h2>
          <div className="space-y-6">
            <ComparisonTable title="Szociális kompetenciák változása — Résztvevők" metrics={resztvevokMetrics} preN={70} postN={63} />
            <div className="grid md:grid-cols-2 gap-6">
              <ComparisonBarChart title="Likert-skálás kompetenciák (1-5)" metrics={resztvevokMetrics.filter(m => !m.name.includes("1-3"))} />
              <JovokepDistribution />
            </div>
          </div>
        </section>

        {/* SZERVEZŐK kimeneti extra */}
        <section>
          <h2 className="section-header mb-6">Szervezők (ELTE hallgatók) — Kimeneti kulcsmutatók</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <StatCard label="Közös hang a célcsoporttal" value={`${szervezokKimenetiExtra.kozosHangAtlag}/5`} icon={Heart} />
            <StatCard label="Alkalmazkodás" value={`${szervezokKimenetiExtra.alkalmazkodásAtlag}/5`} icon={Target} />
            <StatCard label="Nem sokkolta a találkozás" value={`${szervezokKimenetiExtra.sokkNemPct}%`} icon={Users} />
            <StatCard label="Probléma a közös munkával" value={`${szervezokKimenetiExtra.problemaMunkavalAtlag}/5`} subtitle="Alacsony = jó" icon={BarChart3} />
          </div>
        </section>

        {/* SZERVEZŐK összehasonlítás */}
        <section>
          <h2 className="section-header mb-6">Szervezők — Bemeneti vs. Kimeneti összehasonlítás</h2>
          <div className="space-y-6">
            <ComparisonTable title="Szociális és szakmai kompetenciák változása — Szervezők" metrics={szervezokMetrics} preN={44} postN={44} />
            <div className="grid md:grid-cols-2 gap-6">
              <ComparisonBarChart title="Kompetenciák összehasonlítása" metrics={szervezokMetrics} />
              <RadarComparisonChart title="Kompetencia-radar (szervezők)" metrics={szervezokMetrics} />
            </div>
          </div>
        </section>

        {/* BOGARDUS ELŐÍTÉLET MÉRÉS */}
        <section>
          <h2 className="text-2xl md:text-3xl font-bold text-primary mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>
            Bogardus-féle Előítélet Mérés
          </h2>
          <p className="text-muted-foreground mb-8">
            Szervezők (ELTE hallgatók, N=44) — Társadalmi távolság mérése öt érzékeny csoporttal szemben, bemeneti és kimeneti összehasonlítás
          </p>
        </section>
        <BogardusSection />

        {/* Összegzés */}
        <section className="stat-card bg-primary/5 border-primary/20">
          <h2 className="section-header mb-4">Összegzés és főbb megállapítások</h2>
          <div className="grid md:grid-cols-2 gap-8 text-sm leading-relaxed text-foreground">
            <div>
              <h3 className="font-bold text-base mb-2 text-primary">Résztvevők (hátrányos helyzetű fiatalok)</h3>
              <ul className="space-y-2 list-disc list-inside text-muted-foreground">
                <li><strong className="text-foreground">Nyitottság:</strong> Az egyik legnagyobb változás — {resztvevokMetrics[1].preMean.toFixed(2)} → {resztvevokMetrics[1].postMean.toFixed(2)} ({resztvevokMetrics[1].changePct > 0 ? "+" : ""}{resztvevokMetrics[1].changePct}%)</li>
                <li><strong className="text-foreground">Megbízhatóság:</strong> Jelentős javulás — {resztvevokMetrics[2].preMean.toFixed(2)} → {resztvevokMetrics[2].postMean.toFixed(2)} ({resztvevokMetrics[2].changePct > 0 ? "+" : ""}{resztvevokMetrics[2].changePct}%)</li>
                <li><strong className="text-foreground">Jövőkép:</strong> Markáns pozitív elmozdulás — {resztvevokMetrics[3].preMean.toFixed(2)} → {resztvevokMetrics[3].postMean.toFixed(2)} ({resztvevokMetrics[3].changePct > 0 ? "+" : ""}{resztvevokMetrics[3].changePct}%)</li>
                <li><strong className="text-foreground">Elégedettség:</strong> Kiemelkedően magas — átlag {resztvevokKimenetiExtra.elegedettsegAtlag}/5</li>
                <li><strong className="text-foreground">{resztvevokKimenetiExtra.ujraResztVennePct}%</strong> szívesen részt venne újabb workshopon</li>
                <li><strong className="text-foreground">Alacsony konfliktusszint:</strong> A szervezőkkel való megértés átlaga mindössze {resztvevokKimenetiExtra.nemErtetteAtlag}/5</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-base mb-2 text-primary">Szervezők (ELTE hallgatók)</h3>
              <ul className="space-y-2 list-disc list-inside text-muted-foreground">
                <li><strong className="text-foreground">Információ a célcsoportról:</strong> Legnagyobb fejlődés — {szervezokMetrics[0].preMean.toFixed(2)} → {szervezokMetrics[0].postMean.toFixed(2)} ({szervezokMetrics[0].changePct > 0 ? "+" : ""}{szervezokMetrics[0].changePct}%)</li>
                <li><strong className="text-foreground">Kommunikáció:</strong> {szervezokMetrics[6].preMean.toFixed(2)} → {szervezokMetrics[6].postMean.toFixed(2)} ({szervezokMetrics[6].changePct > 0 ? "+" : ""}{szervezokMetrics[6].changePct}%)</li>
                <li><strong className="text-foreground">Csapatmunka:</strong> {szervezokMetrics[4].preMean.toFixed(2)} → {szervezokMetrics[4].postMean.toFixed(2)} ({szervezokMetrics[4].changePct > 0 ? "+" : ""}{szervezokMetrics[4].changePct}%)</li>
                <li><strong className="text-foreground">Konfliktuskezelés:</strong> {szervezokMetrics[5].preMean.toFixed(2)} → {szervezokMetrics[5].postMean.toFixed(2)}</li>
                <li><strong className="text-foreground">{szervezokKimenetiExtra.sokkNemPct}%</strong>-ot nem sokkolta az első találkozás a célcsoporttal</li>
                <li><strong className="text-foreground">Minden kompetencia-dimenzióban pozitív elmozdulás</strong> figyelhető meg</li>
              </ul>
            </div>
          </div>
          <div className="mt-6 p-4 rounded-lg bg-accent/10 border border-accent/20">
            <p className="text-sm font-medium text-foreground">
              <strong>Hipotézisek vonatkozásában:</strong> Az eredmények alátámasztják a H3 (személyes fejlődés, önbizalom növekedés) és H4 (szociális kompetenciák fejlődése) hipotéziseket. 
              A részvételi filmezés mind a hátrányos helyzetű fiatalok, mind az ELTE hallgatók szociális kompetenciáit fejlesztette, az előítéletek csökkentéséhez hozzájárult (H7), 
              és a közös munka révén a társas kompetenciák is javultak.
            </p>
          </div>
        </section>

        <footer className="text-center text-sm text-muted-foreground pb-8">
          <p>Kutatási adatok © 2024–2025 | Részvételi Filmes Workshop Hatásvizsgálat</p>
          <p className="mt-1">Helyszínek: Istvándi, Pécs, Gilvánfa, Somogyszentpál</p>
        </footer>
      </main>
    </div>
  );
}
