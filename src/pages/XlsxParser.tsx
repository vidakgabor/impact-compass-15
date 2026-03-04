import { useEffect, useState } from "react";
import * as XLSX from "xlsx";

export default function XlsxParser() {
  const [bemeneti, setBemeneti] = useState<string[][]>([]);
  const [kimeneti, setKimeneti] = useState<string[][]>([]);

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
      
      setBemeneti(bData);
      setKimeneti(kData);
    }
    load();
  }, []);

  return (
    <div style={{ padding: 20, fontFamily: "monospace", fontSize: 11 }}>
      <h2>BEMENETI - First row (headers):</h2>
      {bemeneti.length > 0 && (
        <div>
          {(bemeneti[0] || []).map((h, i) => (
            <div key={i}><strong>Col {i}:</strong> {String(h)}</div>
          ))}
        </div>
      )}
      
      <h2 style={{marginTop: 20}}>BEMENETI - Q15 area (cols around index 14-16), all rows:</h2>
      <pre>{JSON.stringify(bemeneti.slice(0, 3).map(r => r.slice(12, 20)), null, 2)}</pre>
      
      <h2 style={{marginTop: 20}}>BEMENETI - All column headers with indices:</h2>
      <pre>{bemeneti.length > 0 ? bemeneti[0].map((h, i) => `${i}: ${h}`).join("\n") : "loading..."}</pre>

      <hr style={{margin: "30px 0"}} />

      <h2>KIMENETI - All column headers with indices:</h2>
      <pre>{kimeneti.length > 0 ? kimeneti[0].map((h, i) => `${i}: ${h}`).join("\n") : "loading..."}</pre>
      
      <h2 style={{marginTop: 20}}>KIMENETI - Last columns (potential open questions):</h2>
      <pre>{kimeneti.length > 0 ? JSON.stringify(kimeneti.slice(0, 3).map(r => r.slice(-6)), null, 2) : "loading..."}</pre>

      <h2 style={{marginTop: 20}}>BEMENETI full row 1 (first response):</h2>
      <pre>{bemeneti.length > 1 ? JSON.stringify(bemeneti[1], null, 2) : "loading..."}</pre>

      <h2 style={{marginTop: 20}}>KIMENETI full row 1 (first response):</h2>
      <pre>{kimeneti.length > 1 ? JSON.stringify(kimeneti[1], null, 2) : "loading..."}</pre>
    </div>
  );
}
