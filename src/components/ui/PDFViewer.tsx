import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import {
  Loader2,
  ChevronLeft,
  ChevronRight,
  ZoomIn,
  ZoomOut,
  Download,
} from "lucide-react";
import { Button } from "./button";

// We'll use an iframe-based approach instead of react-pdf
// This is more reliable for displaying PDFs across different browsers

interface PDFViewerProps {
  file: string;
  className?: string;
}

const PDFViewer = ({ file, className }: PDFViewerProps) => {
  const [pdfUrl, setPdfUrl] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);

  // Set the PDF URL when the component mounts or file changes
  useEffect(() => {
    try {
      // If the file path starts with '/', it's a local file in the public directory
      if (file.startsWith("/")) {
        const baseUrl = window.location.origin;
        const fullPath = `${baseUrl}${file}`;
        console.log("Loading PDF from:", fullPath);
        setPdfUrl(fullPath);
      } else {
        console.log("Loading PDF from external URL:", file);
        setPdfUrl(file);
      }
    } catch (err) {
      console.error("Error processing PDF path:", err);
      setError(true);
      setLoading(false);
    }
  }, [file]);

  // Check if the PDF exists once we have a URL
  useEffect(() => {
    if (!pdfUrl) return;

    const checkPdfExists = async () => {
      try {
        // Try to fetch the PDF to see if it exists
        const response = await fetch(pdfUrl, { method: "HEAD" });
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        setLoading(false);
        setError(false);
      } catch (err) {
        console.error("Error checking PDF:", err);
        setError(true);
        setLoading(false);
      }
    };

    checkPdfExists();
  }, [pdfUrl]);

  // Function to open PDF in a new tab (as fallback)
  const openInNewTab = () => {
    window.open(pdfUrl, "_blank");
  };

  return (
    <div className={cn("flex flex-col items-center w-full", className)}>
      {loading ? (
        <div className="flex items-center justify-center h-[50vh] w-full">
          <Loader2 className="h-8 w-8 animate-spin text-primary" />
        </div>
      ) : error ? (
        <div className="flex flex-col items-center justify-center h-[50vh] text-center p-4 w-full">
          <p className="text-destructive font-medium mb-2">
            Failed to load PDF
          </p>
          <p className="text-muted-foreground text-sm mb-4">
            The certificate could not be loaded. Please try again later or open
            it in a new tab.
            <br />
            <span className="text-xs opacity-70 mt-2 block">
              Path: {pdfUrl}
            </span>
          </p>
          <Button
            variant="outline"
            onClick={openInNewTab}
            className="glass-hover"
          >
            <Download className="h-4 w-4 mr-2" />
            Open in New Tab
          </Button>
        </div>
      ) : (
        <>
          <div className="w-full h-[70vh] mb-4 rounded-lg overflow-hidden glass-card p-0">
            <object
              data={pdfUrl}
              type="application/pdf"
              className="w-full h-full"
            >
              <div className="flex flex-col items-center justify-center h-full text-center p-4">
                <p className="text-destructive font-medium mb-2">
                  Your browser cannot display the PDF
                </p>
                <Button
                  variant="outline"
                  onClick={openInNewTab}
                  className="glass-hover mt-2"
                >
                  <Download className="h-4 w-4 mr-2" />
                  Open in New Tab
                </Button>
              </div>
            </object>
          </div>

          <div className="flex items-center justify-between w-full glass-card rounded-full p-2">
            <div className="flex-1"></div>
            <div className="flex items-center space-x-2">
              <Button
                variant="outline"
                size="sm"
                onClick={openInNewTab}
                className="rounded-full glass-hover flex items-center"
              >
                <Download className="h-4 w-4 mr-2" />
                Open in New Tab
              </Button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default PDFViewer;
