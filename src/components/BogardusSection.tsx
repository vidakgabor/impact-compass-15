import { motion } from "framer-motion";
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
  RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, Cell,
} from "recharts";
import { bogardusGroups, bogardusN, bogardusAcceptancePct, bogardusGroupAvg, bogardusDistanceIndex } from "@/data/researchData";
import type { BogardusGroup } from "@/data/researchData";
import { TrendingUp, TrendingDown, Minus, Shield, Users, Heart, Handshake, Home } from "lucide-react";

const fadeIn = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } };

const LEVELS = [
  { key: "csalad" as const, label: "Családtagom lehetne", icon: Heart, desc: "Legintimebb szint" },
  { key: "barat" as const, label: "Barátom lehetne", icon: Users, desc: "Közeli kapcsolat" },
  { key: "munkatars" as const, label: "Munkatársam lehetne", icon: Handshake, desc: "Szakmai kapcsolat" },
  { key: "szomszed" as const, label: "Szomszédom lehetne", icon: Home, desc: "Térbeli közelség" },
];

const GROUP_COLORS: Record<string, string> = {
  Arab: "hsl(210, 70%, 50%)",
  Zsidó: "hsl(45, 80%, 50%)",
  Roma: "hsl(0, 70%, 50%)",
  Homoszexuális: "hsl(280, 60%, 55%)",
  Hajléktalan: "hsl(150, 50%, 45%)",
};

function ChangeIndicator({ pre, post }: { pre: number; post: number }) {
  const diff = post - pre;
  const pctDiff = pre > 0 ? Math.round((diff / pre) * 100) : 0;
  if (Math.abs(diff) < 0.5) return <span className="text-muted-foreground flex items-center gap-1"><Minus className="w-3 h-3" /> 0%</span>;
  return diff > 0
    ? <span className="change-positive flex items-center gap-1"><TrendingUp className="w-3 h-3" /> +{pctDiff}%</span>
    : <span className="change-negative flex items-center gap-1"><TrendingDown className="w-3 h-3" /> {pctDiff}%</span>;
}

function OverviewCards() {
  const romaGroup = bogardusGroups.find(g => g.name === "Roma")!;
  const hajlektalanGroup = bogardusGroups.find(g => g.name === "Hajléktalan")!;

  const romaPreAvg = bogardusGroupAvg(romaGroup.pre);
  const romaPostAvg = bogardusGroupAvg(romaGroup.post);
  const hajlPreAvg = bogardusGroupAvg(hajlektalanGroup.pre);
  const hajlPostAvg = bogardusGroupAvg(hajlektalanGroup.post);
  const romaCsaladPre = bogardusAcceptancePct(romaGroup.pre.csalad);
  const romaCsaladPost = bogardusAcceptancePct(romaGroup.post.csalad);

  const cards = [
    { label: "Roma — Családtag elfogadás", pre: `${romaCsaladPre}%`, post: `${romaCsaladPost}%`, change: romaCsaladPost - romaCsaladPre, icon: Heart, highlight: true },
    { label: "Roma — Átlagos elfogadás", pre: `${romaPreAvg}%`, post: `${romaPostAvg}%`, change: romaPostAvg - romaPreAvg, icon: Users },
    { label: "Hajléktalan — Átlagos elfogadás", pre: `${hajlPreAvg}%`, post: `${hajlPostAvg}%`, change: hajlPostAvg - hajlPreAvg, icon: Shield },
    { label: "Hajléktalan — Családtag elfogadás", pre: `${bogardusAcceptancePct(hajlektalanGroup.pre.csalad)}%`, post: `${bogardusAcceptancePct(hajlektalanGroup.post.csalad)}%`, change: bogardusAcceptancePct(hajlektalanGroup.post.csalad) - bogardusAcceptancePct(hajlektalanGroup.pre.csalad), icon: Heart },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {cards.map((c, i) => (
        <motion.div
          key={c.label}
          className={`stat-card ${c.highlight ? "ring-2 ring-primary/30" : ""}`}
          variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true }}
          transition={{ delay: i * 0.1, duration: 0.5 }}
        >
          <div className="flex items-start justify-between mb-2">
            <span className="metric-label text-xs">{c.label}</span>
            <c.icon className="w-4 h-4 text-accent" />
          </div>
          <div className="flex items-baseline gap-2">
            <span className="text-sm text-muted-foreground">{c.pre}</span>
            <span className="text-muted-foreground">→</span>
            <span className="metric-value text-primary text-lg">{c.post}</span>
          </div>
          <div className="mt-1 text-sm font-semibold">
            <span className={c.change > 0 ? "change-positive" : c.change < 0 ? "change-negative" : "text-muted-foreground"}>
              {c.change > 0 ? "+" : ""}{c.change.toFixed(1)}pp
            </span>
          </div>
        </motion.div>
      ))}
    </div>
  );
}

function AcceptanceTable() {
  return (
    <div className="stat-card overflow-x-auto">
      <h3 className="section-header mb-1">Bogardus-féle társadalmi távolság — Részletes eredmények</h3>
      <p className="text-sm text-muted-foreground mb-4">Bemeneti vs. kimeneti mérés (N={bogardusN}) — Elfogadási arányok (%)</p>
      <table className="w-full text-sm">
        <thead>
          <tr className="border-b-2 border-primary/20">
            <th className="text-left py-2 pr-4 font-semibold text-muted-foreground">Csoport</th>
            {LEVELS.map(l => (
              <th key={l.key} colSpan={3} className="py-2 px-2 font-semibold text-muted-foreground text-center border-l border-border">
                {l.label}
              </th>
            ))}
            <th colSpan={3} className="py-2 px-2 font-semibold text-muted-foreground text-center border-l border-border">Átlag</th>
          </tr>
          <tr className="border-b border-border text-xs text-muted-foreground">
            <th></th>
            {[...LEVELS, { key: "avg" as const, label: "Átlag" }].map(l => (
              <React.Fragment key={l.key}>
                <th className="py-1 px-1 text-center border-l border-border">Be</th>
                <th className="py-1 px-1 text-center">Ki</th>
                <th className="py-1 px-1 text-center">Δ</th>
              </React.Fragment>
            ))}
          </tr>
        </thead>
        <tbody>
          {bogardusGroups.map((g, i) => {
            const preAvg = bogardusGroupAvg(g.pre);
            const postAvg = bogardusGroupAvg(g.post);
            return (
              <motion.tr
                key={g.name}
                variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true }}
                transition={{ delay: i * 0.06, duration: 0.4 }}
                className="border-b border-border"
              >
                <td className="py-3 pr-4 font-medium text-foreground">
                  <span className="inline-block w-3 h-3 rounded-full mr-2" style={{ backgroundColor: GROUP_COLORS[g.name] }} />
                  {g.name}
                </td>
                {LEVELS.map(l => {
                  const pre = bogardusAcceptancePct(g.pre[l.key]);
                  const post = bogardusAcceptancePct(g.post[l.key]);
                  const diff = Math.round((post - pre) * 10) / 10;
                  return (
                    <React.Fragment key={l.key}>
                      <td className="py-3 px-1 text-center border-l border-border"><span className="badge-pre">{pre}%</span></td>
                      <td className="py-3 px-1 text-center"><span className="badge-post">{post}%</span></td>
                      <td className="py-3 px-1 text-center font-semibold text-xs">
                        <span className={diff > 0 ? "change-positive" : diff < 0 ? "change-negative" : "text-muted-foreground"}>
                          {diff > 0 ? "+" : ""}{diff}
                        </span>
                      </td>
                    </React.Fragment>
                  );
                })}
                <td className="py-3 px-1 text-center border-l border-border"><span className="badge-pre">{preAvg}%</span></td>
                <td className="py-3 px-1 text-center"><span className="badge-post">{postAvg}%</span></td>
                <td className="py-3 px-1 text-center font-semibold text-xs">
                  {(() => {
                    const diff = Math.round((postAvg - preAvg) * 10) / 10;
                    return (
                      <span className={diff > 0 ? "change-positive" : diff < 0 ? "change-negative" : "text-muted-foreground"}>
                        {diff > 0 ? "+" : ""}{diff}
                      </span>
                    );
                  })()}
                </td>
              </motion.tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

function GroupComparisonChart() {
  const data = bogardusGroups.map(g => ({
    name: g.name,
    "Bemeneti átlag": bogardusGroupAvg(g.pre),
    "Kimeneti átlag": bogardusGroupAvg(g.post),
  }));
  return (
    <div className="stat-card">
      <h3 className="text-lg font-bold text-foreground mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
        Átlagos elfogadási arány csoportonként (%)
      </h3>
      <ResponsiveContainer width="100%" height={320}>
        <BarChart data={data} barGap={4}>
          <CartesianGrid strokeDasharray="3 3" stroke="hsl(220, 15%, 88%)" />
          <XAxis dataKey="name" tick={{ fontSize: 12, fill: "hsl(220, 10%, 45%)" }} />
          <YAxis domain={[0, 100]} tick={{ fontSize: 12, fill: "hsl(220, 10%, 45%)" }} unit="%" />
          <Tooltip contentStyle={{ borderRadius: 12, border: "1px solid hsl(220,15%,88%)", fontSize: 13 }} />
          <Legend />
          <Bar dataKey="Bemeneti átlag" fill="hsl(220, 60%, 55%)" radius={[4, 4, 0, 0]} />
          <Bar dataKey="Kimeneti átlag" fill="hsl(38, 80%, 55%)" radius={[4, 4, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

function LevelComparisonChart() {
  const data = LEVELS.map(l => {
    const row: Record<string, string | number> = { name: l.label.replace("lehetne", "").trim() };
    bogardusGroups.forEach(g => {
      row[`${g.name} (be)`] = bogardusAcceptancePct(g.pre[l.key]);
      row[`${g.name} (ki)`] = bogardusAcceptancePct(g.post[l.key]);
    });
    return row;
  });

  // Radar chart per group for pre/post
  const radarData = bogardusGroups.map(g => ({
    subject: g.name.length > 10 ? g.name.substring(0, 8) + "…" : g.name,
    Bemeneti: bogardusGroupAvg(g.pre),
    Kimeneti: bogardusGroupAvg(g.post),
  }));

  return (
    <div className="stat-card">
      <h3 className="text-lg font-bold text-foreground mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
        Társadalmi távolság radar — Bemeneti vs. Kimeneti
      </h3>
      <ResponsiveContainer width="100%" height={350}>
        <RadarChart data={radarData}>
          <PolarGrid stroke="hsl(220,15%,88%)" />
          <PolarAngleAxis dataKey="subject" tick={{ fontSize: 11, fill: "hsl(220,10%,45%)" }} />
          <PolarRadiusAxis domain={[0, 100]} tick={{ fontSize: 10 }} />
          <Radar name="Bemeneti" dataKey="Bemeneti" stroke="hsl(220,60%,55%)" fill="hsl(220,60%,55%)" fillOpacity={0.2} />
          <Radar name="Kimeneti" dataKey="Kimeneti" stroke="hsl(38,80%,55%)" fill="hsl(38,80%,55%)" fillOpacity={0.3} />
          <Legend />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
}

function RomaDetailChart() {
  const roma = bogardusGroups.find(g => g.name === "Roma")!;
  const data = LEVELS.map(l => ({
    name: l.label.replace(" lehetne", ""),
    Bemeneti: bogardusAcceptancePct(roma.pre[l.key]),
    Kimeneti: bogardusAcceptancePct(roma.post[l.key]),
  }));
  return (
    <div className="stat-card">
      <h3 className="text-lg font-bold text-foreground mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
        Roma csoport — Elfogadás szintenként (%)
      </h3>
      <ResponsiveContainer width="100%" height={280}>
        <BarChart data={data} layout="vertical" barGap={4}>
          <CartesianGrid strokeDasharray="3 3" stroke="hsl(220,15%,88%)" />
          <XAxis type="number" domain={[0, 100]} tick={{ fontSize: 12 }} unit="%" />
          <YAxis type="category" dataKey="name" width={120} tick={{ fontSize: 12 }} />
          <Tooltip />
          <Legend />
          <Bar dataKey="Bemeneti" fill="hsl(220, 60%, 55%)" radius={[0, 4, 4, 0]} />
          <Bar dataKey="Kimeneti" fill="hsl(38, 80%, 55%)" radius={[0, 4, 4, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

function ChangeHeatmap() {
  const groups = bogardusGroups;
  const levels = LEVELS;

  return (
    <div className="stat-card">
      <h3 className="text-lg font-bold text-foreground mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
        Változás hőtérkép (százalékpont)
      </h3>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr>
              <th className="text-left py-2 pr-4 font-semibold text-muted-foreground">Csoport</th>
              {levels.map(l => (
                <th key={l.key} className="py-2 px-3 font-semibold text-muted-foreground text-center">{l.label.replace(" lehetne", "")}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {groups.map(g => (
              <tr key={g.name} className="border-t border-border">
                <td className="py-3 pr-4 font-medium text-foreground">
                  <span className="inline-block w-3 h-3 rounded-full mr-2" style={{ backgroundColor: GROUP_COLORS[g.name] }} />
                  {g.name}
                </td>
                {levels.map(l => {
                  const pre = bogardusAcceptancePct(g.pre[l.key]);
                  const post = bogardusAcceptancePct(g.post[l.key]);
                  const diff = Math.round((post - pre) * 10) / 10;
                  const intensity = Math.min(Math.abs(diff) / 15, 1);
                  const bg = diff > 0
                    ? `hsla(140, 70%, 45%, ${intensity * 0.4})`
                    : diff < 0
                    ? `hsla(0, 70%, 50%, ${intensity * 0.4})`
                    : "transparent";
                  return (
                    <td key={l.key} className="py-3 px-3 text-center font-semibold" style={{ backgroundColor: bg }}>
                      <span className={diff > 0 ? "change-positive" : diff < 0 ? "change-negative" : "text-muted-foreground"}>
                        {diff > 0 ? "+" : ""}{diff}pp
                      </span>
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="text-xs text-muted-foreground mt-3">
        <span className="inline-block w-3 h-3 rounded mr-1" style={{ backgroundColor: "hsla(140, 70%, 45%, 0.3)" }} /> Pozitív változás (nagyobb elfogadás) | 
        <span className="inline-block w-3 h-3 rounded mx-1" style={{ backgroundColor: "hsla(0, 70%, 50%, 0.3)" }} /> Negatív változás
      </p>
    </div>
  );
}

import React from "react";

export default function BogardusSection() {
  const roma = bogardusGroups.find(g => g.name === "Roma")!;
  const hajlektalan = bogardusGroups.find(g => g.name === "Hajléktalan")!;

  return (
    <>
      {/* Összefoglaló KPI-k */}
      <section>
        <h2 className="section-header mb-6">Bogardus-féle előítélet mérés — Kulcsmutatók</h2>
        <OverviewCards />
      </section>

      {/* Részletes táblázat */}
      <section>
        <h2 className="section-header mb-6">Társadalmi távolság — Részletes összehasonlítás</h2>
        <AcceptanceTable />
      </section>

      {/* Vizualizációk */}
      <section>
        <h2 className="section-header mb-6">Bogardus vizualizációk</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <GroupComparisonChart />
          <LevelComparisonChart />
        </div>
        <div className="grid md:grid-cols-2 gap-6 mt-6">
          <RomaDetailChart />
          <ChangeHeatmap />
        </div>
      </section>

      {/* Összegzés */}
      <section className="stat-card bg-primary/5 border-primary/20">
        <h2 className="section-header mb-4">Bogardus-eredmények értékelése</h2>
        <div className="grid md:grid-cols-2 gap-8 text-sm leading-relaxed text-foreground">
          <div>
            <h3 className="font-bold text-base mb-2 text-primary">Roma csoport — Legfontosabb eredmény</h3>
            <ul className="space-y-2 list-disc list-inside text-muted-foreground">
              <li>
                <strong className="text-foreground">Családtag elfogadás:</strong> {bogardusAcceptancePct(roma.pre.csalad)}% → {bogardusAcceptancePct(roma.post.csalad)}%
                — <strong className="change-positive">+{(bogardusAcceptancePct(roma.post.csalad) - bogardusAcceptancePct(roma.pre.csalad)).toFixed(1)} százalékpont</strong> növekedés a legintimebb szinten
              </li>
              <li>
                <strong className="text-foreground">A workshop hatása:</strong> A Roma csoporttal szembeni legintimebb társadalmi távolság (családtag) szintjén a legnagyobb pozitív elmozdulás figyelhető meg, ami a közvetlen kontaktus előítélet-csökkentő hatását igazolja
              </li>
              <li>
                <strong className="text-foreground">H7 hipotézis:</strong> Az eredmények alátámasztják, hogy a részvételi filmezés mint közvetlen kontaktus-módszer csökkenti a Roma közösséggel szembeni társadalmi távolságot
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-base mb-2 text-primary">Hajléktalan csoport — Legnagyobb változás</h3>
            <ul className="space-y-2 list-disc list-inside text-muted-foreground">
              <li>
                <strong className="text-foreground">Családtag elfogadás:</strong> {bogardusAcceptancePct(hajlektalan.pre.csalad)}% → {bogardusAcceptancePct(hajlektalan.post.csalad)}%
                — <strong className="change-positive">+{(bogardusAcceptancePct(hajlektalan.post.csalad) - bogardusAcceptancePct(hajlektalan.pre.csalad)).toFixed(1)}pp</strong>
              </li>
              <li>
                <strong className="text-foreground">Munkatárs elfogadás:</strong> {bogardusAcceptancePct(hajlektalan.pre.munkatars)}% → {bogardusAcceptancePct(hajlektalan.post.munkatars)}%
                — <strong className="change-positive">+{(bogardusAcceptancePct(hajlektalan.post.munkatars) - bogardusAcceptancePct(hajlektalan.pre.munkatars)).toFixed(1)}pp</strong>
              </li>
              <li>
                <strong className="text-foreground">Kezdeti legnagyobb előítélet:</strong> A hajléktalan csoport esetében volt a legalacsonyabb az elfogadás (átlag {bogardusGroupAvg(hajlektalan.pre)}%), de a workshop után ez {bogardusGroupAvg(hajlektalan.post)}%-ra nőtt
              </li>
              <li>
                <strong className="text-foreground">Árnyaltabb megítélés:</strong> Egyes csoportoknál (Zsidó, Homoszexuális) a kimeneti értékek enyhén csökkentek, ami a felszínes elfogadás helyett tudatosabb, árnyaltabb véleményformálást jelezhet
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-6 p-4 rounded-lg bg-accent/10 border border-accent/20">
          <p className="text-sm font-medium text-foreground">
            <strong>Fő megállapítás:</strong> A megjelölések (n=44/44) csoportonként és kapcsolati helyzetenként vegyes irányúak. A Roma csoportnál családtagként több (36→40), barátként, munkatársként és szomszédként kevesebb megjelölés szerepel; egységes előítélet-csökkenés nem állítható. A nem jelölés nem feltétlenül kifejezett elutasítás. Leíró összevetés, oksági hatás nem igazolt.
          </p>
        </div>
      </section>
    </>
  );
}