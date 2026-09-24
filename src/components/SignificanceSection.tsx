import { resztvevokDescriptive, szervezokDescriptive, jovokepDistribution, METHOD_NOTE } from "@/data/researchData";
import type { DescriptiveComparison } from "@/data/researchData";

function DescriptiveTable({ title, rows }: { title: string; rows: DescriptiveComparison[] }) {
  return (
    <div className="stat-card overflow-x-auto">
      <h3 className="text-lg font-bold text-foreground mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>{title}</h3>
      <table className="w-full text-sm">
        <thead>
          <tr className="border-b-2 border-primary/20 text-muted-foreground">
            <th className="text-left py-2 pr-2 font-semibold">Tétel</th>
            <th className="py-2 px-2 font-semibold text-center">n (BE / KI)</th>
            <th className="py-2 px-2 font-semibold text-center">BE átlag (SD)</th>
            <th className="py-2 px-2 font-semibold text-center">KI átlag (SD)</th>
            <th className="py-2 pl-2 font-semibold text-center">Δ (skálapont)</th>
          </tr>
        </thead>
        <tbody>
          {rows.map(r => (
            <tr key={r.name} className="border-b border-border">
              <td className="py-2 pr-2 font-medium text-foreground">{r.name}</td>
              <td className="py-2 px-2 text-center">{r.preN} / {r.postN}</td>
              <td className="py-2 px-2 text-center">{r.preMean.toFixed(2)} ({r.preSD.toFixed(2)})</td>
              <td className="py-2 px-2 text-center">{r.postMean.toFixed(2)} ({r.postSD.toFixed(2)})</td>
              <td className={`py-2 pl-2 text-center font-semibold ${r.delta >= 0 ? "change-positive" : "change-negative"}`}>
                {r.delta > 0 ? "+" : ""}{r.delta.toFixed(2)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default function SignificanceSection() {
  return (
    <section id="szignifikancia" className="dashboard-anchor space-y-6">
      <div>
        <h2 className="section-header mb-2">Leíró bemeneti–kimeneti összevetés</h2>
        <p className="text-sm text-muted-foreground p-3 rounded-lg bg-accent/10 border border-accent/20">{METHOD_NOTE}</p>
      </div>
      <div className="grid md:grid-cols-2 gap-6">
        <DescriptiveTable title="Résztvevők (HH fiatalok)" rows={resztvevokDescriptive} />
        <DescriptiveTable title="Szervezők (ELTE hallgatók)" rows={szervezokDescriptive} />
      </div>
      <div className="stat-card overflow-x-auto">
        <h3 className="text-lg font-bold text-foreground mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>Jövőkép megoszlása (BE n=70, KI n=63)</h3>
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b-2 border-primary/20 text-muted-foreground">
              <th className="text-left py-2 font-semibold">Kategória</th>
              <th className="py-2 text-center font-semibold">BE</th>
              <th className="py-2 text-center font-semibold">KI</th>
              <th className="py-2 text-center font-semibold">Eltérés (százalékpont)</th>
            </tr>
          </thead>
          <tbody>
            {jovokepDistribution.map(c => (
              <tr key={c.label} className="border-b border-border">
                <td className="py-2 font-medium text-foreground">{c.label}</td>
                <td className="py-2 text-center">{c.preCount}/70 ({c.prePct.toFixed(1)}%)</td>
                <td className="py-2 text-center">{c.postCount}/63 ({c.postPct.toFixed(1)}%)</td>
                <td className="py-2 text-center">{c.diffPp > 0 ? "+" : ""}{c.diffPp.toFixed(1)}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <p className="text-xs text-muted-foreground mt-2">A kategóriák nem egyenlő távolságúak, ezért kódátlag és fejlődési százalék nem számítható.</p>
      </div>
    </section>
  );
}
