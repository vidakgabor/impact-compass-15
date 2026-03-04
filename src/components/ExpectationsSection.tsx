import { motion } from "framer-motion";
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
  PieChart, Pie, Cell,
} from "recharts";
import {
  varakozasokRaw, eredmenyekRaw, valtoztatasokRaw,
  countExpectationCategories, varakozasCategories, eredmenyCategories,
  categorizeValtoztatasok,
} from "@/data/researchData";
import { Lightbulb, Gift, MessageSquare, CheckCircle } from "lucide-react";

const fadeIn = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } };

const COLORS = [
  "hsl(220, 60%, 55%)", "hsl(38, 80%, 55%)", "hsl(150, 50%, 45%)",
  "hsl(0, 70%, 50%)", "hsl(280, 60%, 55%)", "hsl(30, 70%, 50%)",
];

function ExpectationsVsOutcomesChart() {
  const varakozas = countExpectationCategories(varakozasokRaw, varakozasCategories);
  const eredmeny = countExpectationCategories(eredmenyekRaw, eredmenyCategories);

  // Map parallel categories for comparison
  const comparisonData = [
    { name: "Tanulás / Új dolgok", "Várakozás (%)": varakozas[0].pct, "Eredmény (%)": eredmeny[0].pct },
    { name: "Ismerkedés", "Várakozás (%)": varakozas[1].pct, "Eredmény (%)": eredmeny[1].pct },
    { name: "Önismeret", "Várakozás (%)": varakozas[2].pct, "Eredmény (%)": eredmeny[2].pct },
    { name: "Semmit / Nem kapott", "Várakozás (%)": varakozas[3].pct, "Eredmény (%)": eredmeny[3].pct },
  ];

  return (
    <div className="stat-card">
      <h3 className="text-lg font-bold text-foreground mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
        Várakozások vs. Eredmények (%)
      </h3>
      <ResponsiveContainer width="100%" height={320}>
        <BarChart data={comparisonData} barGap={4}>
          <CartesianGrid strokeDasharray="3 3" stroke="hsl(220, 15%, 88%)" />
          <XAxis dataKey="name" tick={{ fontSize: 11, fill: "hsl(220, 10%, 45%)" }} />
          <YAxis domain={[0, 100]} tick={{ fontSize: 12, fill: "hsl(220, 10%, 45%)" }} unit="%" />
          <Tooltip contentStyle={{ borderRadius: 12, border: "1px solid hsl(220,15%,88%)", fontSize: 13 }} />
          <Legend />
          <Bar dataKey="Várakozás (%)" fill="hsl(220, 60%, 55%)" radius={[4, 4, 0, 0]} />
          <Bar dataKey="Eredmény (%)" fill="hsl(38, 80%, 55%)" radius={[4, 4, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

function ExpectationsDetailTable() {
  const varakozas = countExpectationCategories(varakozasokRaw, varakozasCategories);
  const eredmeny = countExpectationCategories(eredmenyekRaw, eredmenyCategories);

  const parallelLabels = ["Tanulás / Új dolgok", "Ismerkedés", "Önismeret", "Semmit"];

  return (
    <div className="stat-card overflow-x-auto">
      <h3 className="section-header mb-1">Várakozások vs. Eredmények — Részletes összehasonlítás</h3>
      <p className="text-sm text-muted-foreground mb-4">
        Bemeneti: „Mit vársz?" (N={varakozasokRaw.length}) | Kimeneti: „Mit kaptál?" (N={eredmenyekRaw.length})
      </p>
      <table className="w-full text-sm">
        <thead>
          <tr className="border-b-2 border-primary/20">
            <th className="text-left py-2 pr-4 font-semibold text-muted-foreground">Kategória</th>
            <th className="py-2 px-4 font-semibold text-muted-foreground text-center">Várakozás (fő)</th>
            <th className="py-2 px-4 font-semibold text-muted-foreground text-center">Várakozás (%)</th>
            <th className="py-2 px-4 font-semibold text-muted-foreground text-center">Eredmény (fő)</th>
            <th className="py-2 px-4 font-semibold text-muted-foreground text-center">Eredmény (%)</th>
            <th className="py-2 pl-4 font-semibold text-muted-foreground text-center">Különbség</th>
          </tr>
        </thead>
        <tbody>
          {parallelLabels.map((label, i) => {
            const v = varakozas[i];
            const e = eredmeny[i];
            const diff = e.pct - v.pct;
            return (
              <motion.tr key={label} variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true }}
                transition={{ delay: i * 0.05, duration: 0.4 }} className="border-b border-border">
                <td className="py-3 pr-4 font-medium text-foreground">{label}</td>
                <td className="py-3 px-4 text-center">{v.count}/{varakozasokRaw.length}</td>
                <td className="py-3 px-4 text-center"><span className="badge-pre">{v.pct}%</span></td>
                <td className="py-3 px-4 text-center">{e.count}/{eredmenyekRaw.length}</td>
                <td className="py-3 px-4 text-center"><span className="badge-post">{e.pct}%</span></td>
                <td className="py-3 pl-4 text-center font-semibold">
                  <span className={diff > 0 ? "change-positive" : diff < 0 ? "change-negative" : "text-muted-foreground"}>
                    {diff > 0 ? "+" : ""}{diff}pp
                  </span>
                </td>
              </motion.tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

function ValtoztatasokChart() {
  const categories = categorizeValtoztatasok(valtoztatasokRaw);

  return (
    <div className="stat-card">
      <h3 className="text-lg font-bold text-foreground mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
        „Mi az, amit változtatnál?" — Válaszok megoszlása (N={valtoztatasokRaw.length})
      </h3>
      <ResponsiveContainer width="100%" height={320}>
        <BarChart data={categories} layout="vertical" barGap={4}>
          <CartesianGrid strokeDasharray="3 3" stroke="hsl(220,15%,88%)" />
          <XAxis type="number" domain={[0, 'auto']} tick={{ fontSize: 12 }} />
          <YAxis type="category" dataKey="category" width={180} tick={{ fontSize: 11 }} />
          <Tooltip contentStyle={{ borderRadius: 12, border: "1px solid hsl(220,15%,88%)", fontSize: 13 }}
            formatter={(value: number, name: string) => [value, name === "count" ? "Fő" : name]} />
          <Bar dataKey="count" fill="hsl(220, 60%, 55%)" radius={[0, 4, 4, 0]}>
            {categories.map((_, i) => (
              <Cell key={i} fill={COLORS[i % COLORS.length]} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

function ValtoztatasokPie() {
  const categories = categorizeValtoztatasok(valtoztatasokRaw);

  return (
    <div className="stat-card">
      <h3 className="text-lg font-bold text-foreground mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
        Változtatási javaslatok megoszlása
      </h3>
      <ResponsiveContainer width="100%" height={320}>
        <PieChart>
          <Pie data={categories} dataKey="count" nameKey="category" cx="50%" cy="50%"
            outerRadius={110} label={({ category, pct }) => `${category} (${pct}%)`}
            labelLine={{ stroke: "hsl(220,10%,65%)" }}
          >
            {categories.map((_, i) => (
              <Cell key={i} fill={COLORS[i % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip formatter={(value: number) => [`${value} fő`]} />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}

export default function ExpectationsSection() {
  const varakozas = countExpectationCategories(varakozasokRaw, varakozasCategories);
  const eredmeny = countExpectationCategories(eredmenyekRaw, eredmenyCategories);
  const valtoztatasok = categorizeValtoztatasok(valtoztatasokRaw);
  const elegedettCount = valtoztatasok.find(v => v.category.includes("Elégedett"))?.count || 0;
  const elegedettPct = Math.round((elegedettCount / valtoztatasokRaw.length) * 100);

  return (
    <>
      {/* Várakozások vs Eredmények */}
      <section>
        <h2 className="text-2xl md:text-3xl font-bold text-primary mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>
          Várakozások vs. Eredmények
        </h2>
        <p className="text-muted-foreground mb-8">
          Résztvevők (hátrányos helyzetű fiatalok) — „Mit vársz?" (N={varakozasokRaw.length}) vs. „Mit kaptál?" (N={eredmenyekRaw.length})
        </p>
      </section>

      {/* KPI kártyák */}
      <section>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <motion.div className="stat-card" variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <div className="flex items-start justify-between mb-2">
              <span className="metric-label">Tanulás várt</span>
              <Lightbulb className="w-5 h-5 text-accent" />
            </div>
            <div className="metric-value text-primary">{varakozas[0].pct}%</div>
            <p className="text-sm text-muted-foreground mt-1">{varakozas[0].count}/{varakozasokRaw.length} fő</p>
          </motion.div>
          <motion.div className="stat-card" variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ delay: 0.1 }}>
            <div className="flex items-start justify-between mb-2">
              <span className="metric-label">Tanulás kapott</span>
              <Gift className="w-5 h-5 text-accent" />
            </div>
            <div className="metric-value text-primary">{eredmeny[0].pct}%</div>
            <p className="text-sm text-muted-foreground mt-1">{eredmeny[0].count}/{eredmenyekRaw.length} fő</p>
          </motion.div>
          <motion.div className="stat-card" variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ delay: 0.2 }}>
            <div className="flex items-start justify-between mb-2">
              <span className="metric-label">Önismeret kapott</span>
              <MessageSquare className="w-5 h-5 text-accent" />
            </div>
            <div className="metric-value text-primary">{eredmeny[2].pct}%</div>
            <p className="text-sm text-muted-foreground mt-1">vs. {varakozas[2].pct}% várt</p>
          </motion.div>
          <motion.div className="stat-card ring-2 ring-primary/30" variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ delay: 0.3 }}>
            <div className="flex items-start justify-between mb-2">
              <span className="metric-label">Elégedett (nem változtatna)</span>
              <CheckCircle className="w-5 h-5 text-accent" />
            </div>
            <div className="metric-value text-primary">{elegedettPct}%</div>
            <p className="text-sm text-muted-foreground mt-1">{elegedettCount}/{valtoztatasokRaw.length} fő</p>
          </motion.div>
        </div>
      </section>

      {/* Vizualizációk */}
      <section>
        <div className="space-y-6">
          <ExpectationsDetailTable />
          <div className="grid md:grid-cols-2 gap-6">
            <ExpectationsVsOutcomesChart />
            <ValtoztatasokChart />
          </div>
          <ValtoztatasokPie />
        </div>
      </section>

      {/* Összegzés */}
      <section className="stat-card bg-primary/5 border-primary/20">
        <h2 className="section-header mb-4">Várakozások vs. Eredmények — Értékelés</h2>
        <div className="grid md:grid-cols-2 gap-8 text-sm leading-relaxed text-foreground">
          <div>
            <h3 className="font-bold text-base mb-2 text-primary">Várakozások teljesülése</h3>
            <ul className="space-y-2 list-disc list-inside text-muted-foreground">
              <li>
                <strong className="text-foreground">Tanulás:</strong> A résztvevők {varakozas[0].pct}%-a várt új dolgokat —
                a kimeneti mérésben {eredmeny[0].pct}% számolt be új tanulási élményekről
              </li>
              <li>
                <strong className="text-foreground">Ismerkedés:</strong> {varakozas[1].pct}% várt új ismeretségeket →
                {eredmeny[1].pct}% szerzett is új ismeretségeket
              </li>
              <li>
                <strong className="text-foreground">Önismeret:</strong> {varakozas[2].pct}% várt önismereti fejlődést →
                {eredmeny[2].pct}% érezte, hogy jobban megismerte önmagát
                {eredmeny[2].pct > varakozas[2].pct && (
                  <span className="change-positive"> (+{eredmeny[2].pct - varakozas[2].pct}pp — meghaladta a várakozásokat!)</span>
                )}
              </li>
              <li>
                <strong className="text-foreground">„Nem vár semmit":</strong> {varakozas[3].pct}% nem várt semmit előzetesen →
                a kimeneti mérésben {eredmeny[3].pct}% érezte, hogy nem kapott semmit
                {eredmeny[3].pct < varakozas[3].pct && (
                  <span className="change-positive"> — a szkeptikusok többsége pozitív élményt szerzett!</span>
                )}
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-base mb-2 text-primary">„Mit változtatnál?" — Visszajelzések</h3>
            <ul className="space-y-2 list-disc list-inside text-muted-foreground">
              <li>
                <strong className="text-foreground">{elegedettPct}% teljes mértékben elégedett</strong> volt és nem változtatna semmin
              </li>
              {valtoztatasok.filter(v => !v.category.includes("Elégedett")).map(v => (
                <li key={v.category}>
                  <strong className="text-foreground">{v.category}:</strong> {v.count} fő ({v.pct}%)
                </li>
              ))}
              <li>
                <strong className="text-foreground">Konklúzió:</strong> A program rendkívül pozitív fogadtatásra talált.
                A kevés változtatási javaslat is konstruktív (több játék, hosszabb program), ami
                a résztvevők elköteleződését mutatja.
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
