import { motion } from "framer-motion";
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
  RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar,
} from "recharts";
import { locationSummaries, type LocationSummary } from "@/data/researchData";
import { MapPin, Users, GraduationCap, Star, TrendingUp, TrendingDown } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const fadeIn = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } };

const COLORS = [
  "hsl(220, 60%, 55%)",
  "hsl(38, 80%, 55%)",
  "hsl(150, 50%, 45%)",
  "hsl(340, 65%, 50%)",
];

function LocationKPICards() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {locationSummaries.map((loc, i) => (
        <motion.div
          key={loc.name}
          className="stat-card"
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ delay: i * 0.1, duration: 0.5 }}
        >
          <div className="flex items-start justify-between mb-2">
            <MapPin className="w-5 h-5" style={{ color: COLORS[i] }} />
            <Star className="w-4 h-4 text-accent" />
          </div>
          <h4 className="font-bold text-foreground text-base mb-2">{loc.name}</h4>
          <div className="space-y-1 text-sm text-muted-foreground">
            <div className="flex items-center gap-1">
              <Users className="w-3.5 h-3.5" />
              <span>Résztvevők: {loc.resztvevokPreN}→{loc.resztvevokPostN}</span>
            </div>
            <div className="flex items-center gap-1">
              <GraduationCap className="w-3.5 h-3.5" />
              <span>Szervezők: {loc.szervezokN}</span>
            </div>
            <div className="mt-2 text-foreground font-semibold">
              Elégedettség: {loc.elegedettsegAtlag}/5
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}

function ResztvevokComparisonChart() {
  const metrics = ["Szabálykövetés", "Nyitottság", "Megbízhatóság", "Jövőkép"];
  const data = metrics.map(m => {
    const row: Record<string, string | number> = { name: m };
    locationSummaries.forEach(loc => {
      const metric = loc.resztvevokMetrics.find(rm => rm.name === m);
      if (metric) {
        row[`${loc.name} (be)`] = metric.pre;
        row[`${loc.name} (ki)`] = metric.post;
      }
    });
    return row;
  });

  return (
    <div className="stat-card">
      <h3 className="text-lg font-bold text-foreground mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
        Résztvevők kompetenciái helyszínenként
      </h3>
      <ResponsiveContainer width="100%" height={400}>
        <BarChart data={data} barGap={2} barCategoryGap="15%">
          <CartesianGrid strokeDasharray="3 3" stroke="hsl(220, 15%, 88%)" />
          <XAxis dataKey="name" tick={{ fontSize: 11, fill: "hsl(220, 10%, 45%)" }} />
          <YAxis domain={[0, 5]} tick={{ fontSize: 12, fill: "hsl(220, 10%, 45%)" }} />
          <Tooltip contentStyle={{ borderRadius: 12, border: "1px solid hsl(220,15%,88%)", fontSize: 12 }} />
          <Legend wrapperStyle={{ fontSize: 11 }} />
          {locationSummaries.map((loc, i) => (
            <Bar key={`${loc.name}-pre`} dataKey={`${loc.name} (be)`} fill={COLORS[i]} fillOpacity={0.4} radius={[2, 2, 0, 0]} />
          ))}
          {locationSummaries.map((loc, i) => (
            <Bar key={`${loc.name}-post`} dataKey={`${loc.name} (ki)`} fill={COLORS[i]} radius={[2, 2, 0, 0]} />
          ))}
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

function SzervezokRadarByLocation() {
  const data = locationSummaries[0].szervezokMetrics.map((m, idx) => {
    const row: Record<string, string | number> = { subject: m.name };
    locationSummaries.forEach(loc => {
      row[loc.name] = loc.szervezokMetrics[idx].post;
    });
    return row;
  });

  return (
    <div className="stat-card">
      <h3 className="text-lg font-bold text-foreground mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
        Szervezők kimeneti kompetenciái — Radar
      </h3>
      <ResponsiveContainer width="100%" height={380}>
        <RadarChart data={data}>
          <PolarGrid stroke="hsl(220,15%,88%)" />
          <PolarAngleAxis dataKey="subject" tick={{ fontSize: 10, fill: "hsl(220,10%,45%)" }} />
          <PolarRadiusAxis domain={[0, 5]} tick={{ fontSize: 10 }} />
          {locationSummaries.map((loc, i) => (
            <Radar key={loc.name} name={loc.name} dataKey={loc.name} stroke={COLORS[i]} fill={COLORS[i]} fillOpacity={0.15} />
          ))}
          <Legend wrapperStyle={{ fontSize: 11 }} />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
}

function ChangeHeatmap() {
  return (
    <div className="stat-card overflow-x-auto">
      <h3 className="text-lg font-bold text-foreground mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
        Változás mértéke helyszínenként (bemeneti → kimeneti)
      </h3>
      <Tabs defaultValue="resztvevok">
        <TabsList className="mb-4">
          <TabsTrigger value="resztvevok">Résztvevők</TabsTrigger>
          <TabsTrigger value="szervezok">Szervezők</TabsTrigger>
        </TabsList>
        <TabsContent value="resztvevok">
          <HeatmapTable
            locations={locationSummaries}
            getMetrics={(loc) => loc.resztvevokMetrics}
          />
        </TabsContent>
        <TabsContent value="szervezok">
          <HeatmapTable
            locations={locationSummaries}
            getMetrics={(loc) => loc.szervezokMetrics}
          />
        </TabsContent>
      </Tabs>
    </div>
  );
}

function HeatmapTable({
  locations,
  getMetrics,
}: {
  locations: LocationSummary[];
  getMetrics: (loc: LocationSummary) => { name: string; pre: number; post: number; change: number }[];
}) {
  const metricNames = getMetrics(locations[0]).map(m => m.name);

  function cellColor(change: number): string {
    if (change >= 0.5) return "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300";
    if (change > 0) return "bg-green-50 text-green-700 dark:bg-green-900/15 dark:text-green-400";
    if (change === 0) return "bg-muted text-muted-foreground";
    return "bg-red-50 text-red-700 dark:bg-red-900/20 dark:text-red-400";
  }

  return (
    <table className="w-full text-sm">
      <thead>
        <tr className="border-b-2 border-primary/20">
          <th className="text-left py-2 pr-4 font-semibold text-muted-foreground">Kompetencia</th>
          {locations.map(loc => (
            <th key={loc.name} className="py-2 px-3 font-semibold text-muted-foreground text-center">{loc.name}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {metricNames.map((name, mIdx) => (
          <tr key={name} className="border-b border-border">
            <td className="py-2 pr-4 font-medium text-foreground">{name}</td>
            {locations.map(loc => {
              const metric = getMetrics(loc)[mIdx];
              return (
                <td key={loc.name} className="py-2 px-3 text-center">
                  <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-md font-semibold text-xs ${cellColor(metric.change)}`}>
                    {metric.change > 0 ? <TrendingUp className="w-3 h-3" /> : metric.change < 0 ? <TrendingDown className="w-3 h-3" /> : null}
                    {metric.change > 0 ? "+" : ""}{metric.change.toFixed(2)}
                  </span>
                  <div className="text-xs text-muted-foreground mt-0.5">
                    {metric.pre.toFixed(2)} → {metric.post.toFixed(2)}
                  </div>
                </td>
              );
            })}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

function ElegedettsegChart() {
  const data = locationSummaries.map((loc, i) => ({
    name: loc.name,
    value: loc.elegedettsegAtlag,
    fill: COLORS[i],
  }));

  return (
    <div className="stat-card">
      <h3 className="text-lg font-bold text-foreground mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
        Elégedettség helyszínenként (1-5)
      </h3>
      <ResponsiveContainer width="100%" height={250}>
        <BarChart data={data} barGap={8}>
          <CartesianGrid strokeDasharray="3 3" stroke="hsl(220,15%,88%)" />
          <XAxis dataKey="name" tick={{ fontSize: 12, fill: "hsl(220,10%,45%)" }} />
          <YAxis domain={[0, 5]} tick={{ fontSize: 12, fill: "hsl(220,10%,45%)" }} />
          <Tooltip />
          <Bar dataKey="value" name="Elégedettség" radius={[6, 6, 0, 0]}>
            {data.map((entry, i) => (
              <rect key={i} fill={entry.fill} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default function LocationSection() {
  // Find best performing location
  const bestResztvevok = [...locationSummaries].sort((a, b) => {
    const aAvg = a.resztvevokMetrics.reduce((s, m) => s + m.change, 0) / a.resztvevokMetrics.length;
    const bAvg = b.resztvevokMetrics.reduce((s, m) => s + m.change, 0) / b.resztvevokMetrics.length;
    return bAvg - aAvg;
  })[0];

  const bestSzervezok = [...locationSummaries].sort((a, b) => {
    const aAvg = a.szervezokMetrics.reduce((s, m) => s + m.change, 0) / a.szervezokMetrics.length;
    const bAvg = b.szervezokMetrics.reduce((s, m) => s + m.change, 0) / b.szervezokMetrics.length;
    return bAvg - aAvg;
  })[0];

  return (
    <section className="space-y-6">
      <div>
        <h2 className="text-2xl md:text-3xl font-bold text-primary mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>
          Helyszínenkénti Bontás
        </h2>
        <p className="text-muted-foreground mb-6">
          A négy workshop helyszín (Istvándi, Pécs, Gilvánfa, Somogyszentpál) összehasonlító elemzése — résztvevők és szervezők
        </p>
      </div>

      <LocationKPICards />

      <div className="grid md:grid-cols-2 gap-6">
        <ResztvevokComparisonChart />
        <SzervezokRadarByLocation />
      </div>

      <ChangeHeatmap />

      <div className="grid md:grid-cols-2 gap-6">
        <ElegedettsegChart />
        <motion.div
          className="stat-card bg-primary/5 border-primary/20"
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h3 className="text-lg font-bold text-foreground mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>
            Helyszínenkénti főbb megállapítások
          </h3>
          <ul className="space-y-2 text-sm text-muted-foreground list-disc list-inside">
            <li>
              <strong className="text-foreground">Legnagyobb résztvevői fejlődés:</strong>{" "}
              {bestResztvevok.name} — átlagos változás:{" "}
              <span className="change-positive font-semibold">
                +{(bestResztvevok.resztvevokMetrics.reduce((s, m) => s + m.change, 0) / bestResztvevok.resztvevokMetrics.length).toFixed(2)}
              </span>
            </li>
            <li>
              <strong className="text-foreground">Legnagyobb szervezői fejlődés:</strong>{" "}
              {bestSzervezok.name} — átlagos változás:{" "}
              <span className="change-positive font-semibold">
                +{(bestSzervezok.szervezokMetrics.reduce((s, m) => s + m.change, 0) / bestSzervezok.szervezokMetrics.length).toFixed(2)}
              </span>
            </li>
            <li>
              <strong className="text-foreground">Legmagasabb elégedettség:</strong>{" "}
              {[...locationSummaries].sort((a, b) => b.elegedettsegAtlag - a.elegedettsegAtlag)[0].name} ({[...locationSummaries].sort((a, b) => b.elegedettsegAtlag - a.elegedettsegAtlag)[0].elegedettsegAtlag}/5)
            </li>
            <li>
              <strong className="text-foreground">Minden helyszínen</strong> pozitív irányú elmozdulás figyelhető meg a nyitottság és jövőkép terén
            </li>
            <li>
              <strong className="text-foreground">Somogyszentpál</strong> kisebb szervezői mintával (n=4) rendelkezik, óvatosabb értelmezés szükséges
            </li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
}