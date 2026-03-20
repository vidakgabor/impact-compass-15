import { useState, useCallback } from "react";
import { FileDown, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

const WATERMARK_TEXT = "Vidák Gábor — Doktori Disszertáció — Rövidtávú Hatásvizsgálat";

function addWatermark(pdf: jsPDF, pageWidth: number, pageHeight: number) {
  pdf.saveGraphicsState();
  pdf.setFont("helvetica", "bold");
  pdf.setFontSize(24);
  pdf.setTextColor(180, 180, 180);

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
    pageHeight - 6,
    { align: "center" }
  );
}

export default function PdfExportButton() {
  const [exporting, setExporting] = useState(false);

  const handleExport = useCallback(async () => {
    setExporting(true);

    try {
      const main = document.querySelector("main");
      if (!main) {
        console.error("No <main> element found");
        setExporting(false);
        return;
      }

      // Capture the full main content as a single tall canvas
      const canvas = await html2canvas(main as HTMLElement, {
        scale: 2,
        useCORS: true,
        backgroundColor: "#ffffff",
        logging: false,
        windowWidth: 1200,
        // Force a fixed width so charts render properly
        width: 1200,
        scrollX: 0,
        scrollY: 0,
      });

      // A4 dimensions in mm
      const a4W = 297; // landscape width
      const a4H = 210; // landscape height
      const margin = 10;
      const footerSpace = 10;
      const usableW = a4W - margin * 2;
      const usableH = a4H - margin * 2 - footerSpace;

      // Calculate how the canvas maps to pages
      const imgWidth = usableW;
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      const pageContentHeight = usableH;
      const totalPages = Math.ceil(imgHeight / pageContentHeight);

      const pdf = new jsPDF({
        orientation: "landscape",
        unit: "mm",
        format: "a4",
      });

      const imgData = canvas.toDataURL("image/jpeg", 0.92);

      for (let page = 0; page < totalPages; page++) {
        if (page > 0) pdf.addPage("a4", "l");

        const pageWidth = pdf.internal.pageSize.getWidth();
        const pageHeight = pdf.internal.pageSize.getHeight();

        // Offset the image upward for each subsequent page
        const yOffset = margin - page * pageContentHeight;

        // Clip to usable area by using a rectangle mask
        // jsPDF doesn't have native clipping, so we position the image and rely on page bounds
        pdf.addImage(imgData, "JPEG", margin, yOffset, imgWidth, imgHeight);

        // White rectangles to mask overflow (top and bottom)
        pdf.setFillColor(255, 255, 255);
        pdf.rect(0, 0, pageWidth, margin, "F"); // top margin
        pdf.rect(0, margin + usableH, pageWidth, pageHeight - margin - usableH, "F"); // bottom

        addWatermark(pdf, pageWidth, pageHeight);
        addFooter(pdf, page + 1, totalPages, pageWidth, pageHeight);
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
