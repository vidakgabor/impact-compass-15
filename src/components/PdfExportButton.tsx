import { useState, useCallback } from "react";
import { FileDown, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

const FOOTER_TEXT = "Vidák Gábor — Részvételi Filmes Workshop — Rövidtávú Hatásvizsgálat";

function addFooter(pdf: jsPDF, pageNum: number, totalPages: number) {
  const pw = pdf.internal.pageSize.getWidth();
  const ph = pdf.internal.pageSize.getHeight();
  pdf.setFont("helvetica", "normal");
  pdf.setFontSize(8);
  pdf.setTextColor(120, 120, 120);
  pdf.text(`${FOOTER_TEXT}  |  ${pageNum} / ${totalPages}`, pw / 2, ph - 6, { align: "center" });
}

export default function PdfExportButton() {
  const [exporting, setExporting] = useState(false);

  const handleExport = useCallback(async () => {
    setExporting(true);
    try {
      const mainEl = document.querySelector("main");
      if (!mainEl) { setExporting(false); return; }

      // Collect all direct section-level children
      const sections = Array.from(mainEl.children) as HTMLElement[];

      const A4_W = 210; // portrait width mm
      const A4_H = 297; // portrait height mm
      const MARGIN = 12;
      const FOOTER_SPACE = 10;

      interface PageEntry {
        imgData: string;
        imgW: number;
        imgH: number;
        orientation: "p" | "l";
      }

      const pages: PageEntry[] = [];
      let currentPageItems: { imgData: string; w: number; h: number }[] = [];
      let currentY = 0;
      const contentW = A4_W - MARGIN * 2;
      const contentH = A4_H - MARGIN * 2 - FOOTER_SPACE;
      let isFirstPage = true;

      const flushPage = (orientation: "p" | "l") => {
        if (currentPageItems.length === 0) return;
        // Compose items into a single logical page
        for (const item of currentPageItems) {
          pages.push({ imgData: item.imgData, imgW: item.w, imgH: item.h, orientation });
        }
        currentPageItems = [];
        currentY = 0;
      };

      for (let i = 0; i < sections.length; i++) {
        const section = sections[i];
        
        const canvas = await html2canvas(section, {
          scale: 2,
          useCORS: true,
          backgroundColor: "#ffffff",
          logging: false,
          windowWidth: 1200,
          width: 1200,
          scrollX: 0,
          scrollY: 0,
        });

        const scaleFactor = contentW / (canvas.width / 2);
        const sectionHeightMM = (canvas.height / 2) * scaleFactor;
        const imgData = canvas.toDataURL("image/jpeg", 0.92);

        // Check if section is too wide/tall for portrait — use landscape
        const needsLandscape = !isFirstPage && sectionHeightMM > contentH * 0.85;

        if (needsLandscape) {
          // Flush current portrait items first
          if (currentPageItems.length > 0) {
            flushPage("p");
          }
          // Landscape page dimensions
          const lContentW = A4_H - MARGIN * 2; // landscape uses A4_H as width
          const lContentH = A4_W - MARGIN * 2 - FOOTER_SPACE;
          const lScale = lContentW / (canvas.width / 2);
          const lH = (canvas.height / 2) * lScale;

          if (lH > lContentH) {
            // Still too tall even in landscape — split into multiple landscape pages
            const pxPerPage = (lContentH / lScale) * 2;
            const totalSlices = Math.ceil(canvas.height / pxPerPage);
            for (let s = 0; s < totalSlices; s++) {
              const sliceCanvas = document.createElement("canvas");
              const sliceH = Math.min(pxPerPage, canvas.height - s * pxPerPage);
              sliceCanvas.width = canvas.width;
              sliceCanvas.height = sliceH;
              const ctx = sliceCanvas.getContext("2d")!;
              ctx.drawImage(canvas, 0, -s * pxPerPage);
              const sliceData = sliceCanvas.toDataURL("image/jpeg", 0.92);
              const sliceMMH = (sliceH / 2) * lScale;
              pages.push({ imgData: sliceData, imgW: lContentW, imgH: sliceMMH, orientation: "l" });
            }
          } else {
            pages.push({ imgData, imgW: lContentW, imgH: lH, orientation: "l" });
          }
        } else {
          // Portrait mode
          if (currentY + sectionHeightMM > contentH && currentPageItems.length > 0) {
            // Won't fit — flush current page
            flushPage("p");
          }
          currentPageItems.push({ imgData, w: contentW, h: sectionHeightMM });
          currentY += sectionHeightMM + 4; // 4mm gap
          isFirstPage = false;
        }
      }

      // Flush remaining
      if (currentPageItems.length > 0) {
        flushPage("p");
      }

      if (pages.length === 0) { setExporting(false); return; }

      // Build PDF
      const pdf = new jsPDF({ orientation: pages[0].orientation === "l" ? "landscape" : "portrait", unit: "mm", format: "a4" });
      
      // Group consecutive items with same orientation that fit on one page
      let pageIdx = 0;
      let yOnPage = MARGIN;
      
      for (let i = 0; i < pages.length; i++) {
        const p = pages[i];
        const isLandscape = p.orientation === "l";
        const pageW = isLandscape ? A4_H : A4_W;
        const pageH = isLandscape ? A4_W : A4_H;
        const maxContentH = pageH - MARGIN * 2 - FOOTER_SPACE;

        if (i > 0) {
          pdf.addPage("a4", isLandscape ? "l" : "p");
          yOnPage = MARGIN;
        }

        pdf.addImage(p.imgData, "JPEG", MARGIN, yOnPage, p.imgW, Math.min(p.imgH, maxContentH));
        pageIdx++;
      }

      // Add footers
      const totalPages = (pdf as any).internal.getNumberOfPages();
      for (let i = 1; i <= totalPages; i++) {
        pdf.setPage(i);
        addFooter(pdf, i, totalPages);
      }

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
