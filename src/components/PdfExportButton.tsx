import { useState, useCallback } from "react";
import { FileDown, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

const WATERMARK_TEXT = "Vidák Gábor — Doktori Disszertáció — Rövidtávú Hatásvizsgálat";

function addWatermark(pdf: jsPDF, pageWidth: number, pageHeight: number) {
  pdf.saveGraphicsState();
  // @ts-ignore — jsPDF typing incomplete for GState
  pdf.setGState(new jsPDF.API.GState({ opacity: 0.07 }));
  pdf.setFont("helvetica", "bold");
  pdf.setFontSize(28);
  pdf.setTextColor(80, 80, 80);

  // Diagonal watermark
  const cx = pageWidth / 2;
  const cy = pageHeight / 2;
  pdf.text(WATERMARK_TEXT, cx, cy, {
    align: "center",
    angle: 35,
    maxWidth: pageWidth * 1.2,
  });
  pdf.restoreGraphicsState();
}

function addFooter(pdf: jsPDF, pageNum: number, totalPages: number, pageWidth: number, pageHeight: number) {
  pdf.setFont("helvetica", "normal");
  pdf.setFontSize(8);
  pdf.setTextColor(140, 140, 140);
  pdf.text(
    `Vidák Gábor — Részvételi Filmes Workshop Hatásvizsgálat | ${pageNum}/${totalPages}`,
    pageWidth / 2,
    pageHeight - 8,
    { align: "center" }
  );
}

async function captureSection(
  el: HTMLElement,
  scale: number = 2
): Promise<HTMLCanvasElement> {
  return html2canvas(el, {
    scale,
    useCORS: true,
    backgroundColor: "#ffffff",
    logging: false,
    windowWidth: 1200,
  });
}

// Decide orientation based on content aspect ratio
function getOrientation(canvas: HTMLCanvasElement): "p" | "l" {
  const ratio = canvas.width / canvas.height;
  // Use landscape for wide content (charts, tables)
  return ratio > 1.4 ? "l" : "p";
}

export default function PdfExportButton() {
  const [exporting, setExporting] = useState(false);

  const handleExport = useCallback(async () => {
    setExporting(true);

    try {
      // Grab all top-level sections from <main>
      const main = document.querySelector("main");
      const header = document.querySelector("header");
      if (!main) return;

      const sections = Array.from(main.children) as HTMLElement[];
      const allElements: HTMLElement[] = [];
      if (header) allElements.push(header as HTMLElement);
      allElements.push(...sections);

      // First pass: capture all canvases
      const captures: { canvas: HTMLCanvasElement; orientation: "p" | "l" }[] = [];

      for (const el of allElements) {
        const canvas = await captureSection(el);
        const orientation = getOrientation(canvas);
        captures.push({ canvas, orientation });
      }

      if (captures.length === 0) return;

      // Build PDF
      const pdf = new jsPDF({
        orientation: captures[0].orientation,
        unit: "mm",
        format: "a4",
      });

      const totalPages = captures.length;

      for (let i = 0; i < captures.length; i++) {
        const { canvas, orientation } = captures[i];

        if (i > 0) {
          pdf.addPage("a4", orientation);
        } else if (orientation !== captures[0].orientation) {
          // First page orientation already set
        }

        const pageWidth = pdf.internal.pageSize.getWidth();
        const pageHeight = pdf.internal.pageSize.getHeight();

        const margin = 12;
        const usableW = pageWidth - margin * 2;
        const usableH = pageHeight - margin * 2 - 10; // reserve footer

        const imgRatio = canvas.width / canvas.height;
        let imgW = usableW;
        let imgH = imgW / imgRatio;

        if (imgH > usableH) {
          imgH = usableH;
          imgW = imgH * imgRatio;
        }

        const x = margin + (usableW - imgW) / 2;
        const y = margin;

        const imgData = canvas.toDataURL("image/jpeg", 0.92);
        pdf.addImage(imgData, "JPEG", x, y, imgW, imgH);

        addWatermark(pdf, pageWidth, pageHeight);
        addFooter(pdf, i + 1, totalPages, pageWidth, pageHeight);
      }

      // Title page metadata
      pdf.setProperties({
        title: "Részvételi Filmes Workshop — Rövidtávú Hatásvizsgálat",
        author: "Vidák Gábor",
        subject: "Doktori Disszertáció — Hatásvizsgálati Dashboard",
      });

      pdf.save("Vidak_Gabor_Rovidtavu_Hatasvizsgalat.pdf");
    } catch (err) {
      console.error("PDF export error:", err);
    } finally {
      setExporting(false);
    }
  }, []);

  return (
    <Button
      onClick={handleExport}
      disabled={exporting}
      variant="outline"
      size="sm"
      className="fixed top-4 right-4 z-50 bg-background/90 backdrop-blur shadow-lg border-primary/20 hover:bg-primary hover:text-primary-foreground transition-colors"
    >
      {exporting ? (
        <>
          <Loader2 className="w-4 h-4 animate-spin" />
          Exportálás…
        </>
      ) : (
        <>
          <FileDown className="w-4 h-4" />
          PDF Export
        </>
      )}
    </Button>
  );
}
