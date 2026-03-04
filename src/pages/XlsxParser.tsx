import { useEffect, useState } from "react";
import * as XLSX from "xlsx";

export default function XlsxParser() {
  const [data, setData] = useState<string>("loading...");

  useEffect(() => {
    async function load() {
      const [bRes, kRes] = await Promise.all([
        fetch("/data/bemeneti_resztvevok.xlsx"),
        fetch("/data/kimeneti_resztvevok.xlsx"),
      ]);
      const [bBuf, kBuf] = await Promise.all([bRes.arrayBuffer(), kRes.arrayBuffer()]);
      
      const bWb = XLSX.read(bBuf);
      const kWb = XLSX.read(kBuf);
      
      const bSheet = bWb.Sheets[bWb.SheetNames[0]];
      const kSheet = kWb.Sheets[kWb.SheetNames[0]];
      
      const bData = XLSX.utils.sheet_to_json<string[]>(bSheet, { header: 1 });
      const kData = XLSX.utils.sheet_to_json<string[]>(kSheet, { header: 1 });
      
      // Bemeneti Q15 (col index 15): "Mit vársz a részvételi filmes műhelytől?"
      const bQ15 = bData.slice(1).map(r => String(r[15] || "")).filter(Boolean);
      
      // Kimeneti Q15 (col index 15): "Mit kaptál a részvételi filmes műhelytől?"
      const kQ15 = kData.slice(1).map(r => String(r[15] || "")).filter(Boolean);
      
      // Kimeneti Q19 (col index 19): "Mi az amit változtatnál a programban?"
      const kQ19 = kData.slice(1).map(r => String(r[19] || "")).filter(Boolean);
      
      const output = {
        bemeneti_q15_mit_varsz: bQ15,
        kimeneti_q15_mit_kaptal: kQ15,
        kimeneti_q19_mit_valtoztatnal: kQ19,
      };
      
      setData(JSON.stringify(output, null, 2));
    }
    load();
  }, []);

  return (
    <div style={{ padding: 20, fontFamily: "monospace", fontSize: 11, whiteSpace: "pre-wrap" }}>
      {data}
    </div>
  );
}
