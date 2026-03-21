import { useState, useCallback } from "react";
import { FileDown, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

const FOOTER_TEXT = "Vidák Gábor — Részvételi Filmes Workshop — Rövidtávú Hatásvizsgálat";
const PAGE_MARGIN = 10;
const FOOTER_SPACE = 10;
const SECTION_GAP = 4;

type Orientation = "p" | "l";

type CaptureItem = {
  imgData: string;
  widthMM: number;
  heightMM: number;
  orientation: Orientation;
};

type PageDefinition = {
  orientation: Orientation;
  items: CaptureItem[];
  usedHeight: number;
};

const PAGE_SIZES = {
  p: { width: 210, height: 297, windowWidth: 1400 },
  l: { width: 297, height: 210, windowWidth: 1600 },
} as const;

function addFooter(pdf: jsPDF, pageNum: number, totalPages: number) {
  const pw = pdf.internal.pageSize.getWidth();
  const ph = pdf.internal.pageSize.getHeight();
  pdf.setFont("helvetica", "normal");
  pdf.setFontSize(8);
  pdf.setTextColor(120, 120, 120);
  pdf.text(`${FOOTER_TEXT}  |  ${pageNum} / ${totalPages}`, pw / 2, ph - 6, { align: "center" });
}

function addCoverPage(pdf: jsPDF) {
  const pw = 210;
  const ph = 297;
  const cx = pw / 2;

  // Background accent line
  pdf.setDrawColor(38, 80, 120);
  pdf.setLineWidth(1.5);
  pdf.line(cx - 40, 70, cx + 40, 70);

  // Title
  pdf.setFont("helvetica", "bold");
  pdf.setFontSize(32);
  pdf.setTextColor(30, 45, 70);
  pdf.text("Impact Dashboard", cx, 90, { align: "center" });

  // Subtitle
  pdf.setFontSize(18);
  pdf.setTextColor(60, 80, 110);
  pdf.text("Részvételi Filmes Program", cx, 108, { align: "center" });

  // Sub-subtitle
  pdf.setFontSize(14);
  pdf.setTextColor(80, 100, 130);
  pdf.text("Rövidtávú hatásvizsgálat", cx, 122, { align: "center" });

  // Divider
  pdf.setDrawColor(180, 160, 120);
  pdf.setLineWidth(0.5);
  pdf.line(cx - 30, 135, cx + 30, 135);

  // Author
  pdf.setFont("helvetica", "bold");
  pdf.setFontSize(13);
  pdf.setTextColor(40, 55, 80);
  pdf.text("Készítette: Vidák Gábor", cx, 150, { align: "center" });

  // PhD
  pdf.setFont("helvetica", "normal");
  pdf.setFontSize(12);
  pdf.setTextColor(80, 95, 120);
  pdf.text("Doktori (PhD) kutatás", cx, 162, { align: "center" });

  // Locations
  pdf.setFontSize(11);
  pdf.setTextColor(100, 110, 130);
  pdf.text("Helyszínek: Istvándi  •  Pécs  •  Gilvánfa  •  Somogyszentpál", cx, 180, { align: "center" });

  // Export date
  const now = new Date();
  const dateStr = `${now.getFullYear()}. ${String(now.getMonth() + 1).padStart(2, "0")}. ${String(now.getDate()).padStart(2, "0")}.`;
  pdf.setFontSize(10);
  pdf.setTextColor(120, 120, 120);
  pdf.text(`Exportálva: ${dateStr}`, cx, 200, { align: "center" });

  // Bottom watermark
  pdf.setFontSize(9);
  pdf.setTextColor(160, 160, 160);
  pdf.text("Vidák Gábor", cx, ph - 15, { align: "center" });

  // Bottom line
  pdf.setDrawColor(180, 160, 120);
  pdf.setLineWidth(0.3);
  pdf.line(cx - 25, ph - 20, cx + 25, ph - 20);
}

function waitForLayout() {
  return new Promise<void>((resolve) => {
    requestAnimationFrame(() => requestAnimationFrame(() => resolve()));
  });
}

function getContentHeight(orientation: Orientation) {
  return PAGE_SIZES[orientation].height - PAGE_MARGIN * 2 - FOOTER_SPACE;
}

function getContentWidth(orientation: Orientation) {
  return PAGE_SIZES[orientation].width - PAGE_MARGIN * 2;
}

function getSectionOrientation(section: HTMLElement): Orientation {
  if (section.dataset.pdfOrientation === "landscape") return "l";
  if (section.dataset.pdfOrientation === "portrait") return "p";

  // All content pages are landscape by default
  return "l";
}

function createSlices(canvas: HTMLCanvasElement, orientation: Orientation): CaptureItem[] {
  const contentWidth = getContentWidth(orientation);
  const contentHeight = getContentHeight(orientation);
  const scale = contentWidth / canvas.width;
  const fullHeightMM = canvas.height * scale;

  if (fullHeightMM <= contentHeight) {
    return [
      {
        imgData: canvas.toDataURL("image/png"),
        widthMM: contentWidth,
        heightMM: fullHeightMM,
        orientation,
      },
    ];
  }

  const sliceHeightPx = Math.floor(contentHeight / scale);
  const slices: CaptureItem[] = [];

  for (let offsetY = 0; offsetY < canvas.height; offsetY += sliceHeightPx) {
    const currentSliceHeight = Math.min(sliceHeightPx, canvas.height - offsetY);
    const sliceCanvas = document.createElement("canvas");
    sliceCanvas.width = canvas.width;
    sliceCanvas.height = currentSliceHeight;

    const context = sliceCanvas.getContext("2d");
    if (!context) continue;

    context.drawImage(
      canvas,
      0,
      offsetY,
      canvas.width,
      currentSliceHeight,
      0,
      0,
      canvas.width,
      currentSliceHeight,
    );

    slices.push({
      imgData: sliceCanvas.toDataURL("image/png"),
      widthMM: contentWidth,
      heightMM: currentSliceHeight * scale,
      orientation,
    });
  }

  return slices;
}

function packPages(items: CaptureItem[]) {
  const pages: PageDefinition[] = [];
  let currentPage: PageDefinition | null = null;

  items.forEach((item) => {
    const contentHeight = getContentHeight(item.orientation);
    const nextHeight = item.heightMM + (currentPage?.items.length ? SECTION_GAP : 0);

    if (
      !currentPage ||
      currentPage.orientation !== item.orientation ||
      currentPage.usedHeight + nextHeight > contentHeight
    ) {
      if (currentPage) pages.push(currentPage);
      currentPage = {
        orientation: item.orientation,
        items: [item],
        usedHeight: item.heightMM,
      };
      return;
    }

    currentPage.items.push(item);
    currentPage.usedHeight += nextHeight;
  });

  if (currentPage) pages.push(currentPage);
  return pages;
}

function forceVisibleForExport(root: HTMLElement) {
  const elements = root.querySelectorAll<HTMLElement>(
    "section, div, article, header, p, h1, h2, h3, h4, h5, h6, table, thead, tbody, tr, td, th, ul, ol, li, span",
  );

  const originalStyles: Array<{ element: HTMLElement; style: string | null }> = [];

  elements.forEach((element) => {
    if (element.closest("[data-pdf-ignore='true']")) return;

    const computedStyle = window.getComputedStyle(element);
    const shouldAdjust = Number(computedStyle.opacity) < 1 || computedStyle.filter !== "none";

    if (shouldAdjust) {
      originalStyles.push({ element, style: element.getAttribute("style") });
      element.style.opacity = "1";
      element.style.filter = "none";
    }
  });

  return () => {
    originalStyles.forEach(({ element, style }) => {
      if (style === null) {
        element.removeAttribute("style");
      } else {
        element.setAttribute("style", style);
      }
    });
  };
}

export default function PdfExportButton() {
  const [exporting, setExporting] = useState(false);

  const handleExport = useCallback(async () => {
    let restoreVisibility: (() => void) | null = null;
    setExporting(true);
    try {
      const mainEl = document.querySelector("main");
      if (!mainEl) {
        setExporting(false);
        return;
      }

      restoreVisibility = forceVisibleForExport(mainEl as HTMLElement);
      document.body.classList.add("pdf-export-mode");
      window.dispatchEvent(new Event("resize"));
      await waitForLayout();

      const sections = Array.from(mainEl.children).filter(
        (child): child is HTMLElement =>
          child instanceof HTMLElement &&
          child.dataset.pdfIgnore !== "true" &&
          child.offsetHeight > 24,
      );

      const capturedItems: CaptureItem[] = [];

      for (let index = 0; index < sections.length; index += 1) {
        const section = sections[index];
        const orientation = getSectionOrientation(section);
        const canvas = await html2canvas(section, {
          scale: 2,
          useCORS: true,
          backgroundColor: "#ffffff",
          logging: false,
          scrollX: 0,
          scrollY: -window.scrollY,
          windowWidth: PAGE_SIZES[orientation].windowWidth,
          ignoreElements: (element) => (element as HTMLElement).dataset?.pdfIgnore === "true",
          onclone: (clonedDocument) => {
            clonedDocument.body.classList.add("pdf-export-mode");
          },
        });

        capturedItems.push(...createSlices(canvas, orientation));
      }

      if (capturedItems.length === 0) {
        setExporting(false);
        restoreVisibility();
        document.body.classList.remove("pdf-export-mode");
        return;
      }

      const pages = packPages(capturedItems);

      // Create PDF — first page is always portrait (cover)
      const pdf = new jsPDF({
        orientation: "portrait",
        unit: "mm",
        format: "a4",
        compress: true,
      });

      // Add cover page
      addCoverPage(pdf);

      // Add content pages
      pages.forEach((page) => {
        pdf.addPage("a4", page.orientation === "l" ? "landscape" : "portrait");

        let currentY = PAGE_MARGIN;
        page.items.forEach((item, itemIndex) => {
          pdf.addImage(item.imgData, "PNG", PAGE_MARGIN, currentY, item.widthMM, item.heightMM, undefined, "FAST");
          currentY += item.heightMM + (itemIndex < page.items.length - 1 ? SECTION_GAP : 0);
        });
      });

      // Add footers (skip cover page)
      const totalPages = (pdf as any).internal.getNumberOfPages();
      for (let i = 1; i <= totalPages; i++) {
        pdf.setPage(i);
        if (i === 1) {
          // Cover page already has its own footer
          continue;
        }
        addFooter(pdf, i - 1, totalPages - 1);
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
      restoreVisibility?.();
      document.body.classList.remove("pdf-export-mode");
      setExporting(false);
    }
  }, []);

  return (
    <Button
      data-pdf-ignore="true"
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
