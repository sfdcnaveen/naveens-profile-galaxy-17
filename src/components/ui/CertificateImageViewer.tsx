import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Loader2, ZoomIn, ZoomOut, Download, RotateCw } from "lucide-react";
import { Button } from "./button";
import { motion } from "framer-motion";

interface CertificateImageViewerProps {
  imageSrc: string;
  className?: string;
}

const CertificateImageViewer = ({
  imageSrc,
  className,
}: CertificateImageViewerProps) => {
  const [imageUrl, setImageUrl] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);
  const [scale, setScale] = useState<number>(1);
  const [rotation, setRotation] = useState<number>(0);

  // Set the image URL when the component mounts or imageSrc changes
  useEffect(() => {
    try {
      // If the path starts with '/', it's a local file in the public directory
      if (imageSrc.startsWith("/")) {
        const baseUrl = window.location.origin;
        const fullPath = `${baseUrl}${imageSrc}`;
        console.log("Loading image from:", fullPath);
        setImageUrl(fullPath);
      } else {
        console.log("Loading image from external URL:", imageSrc);
        setImageUrl(imageSrc);
      }
    } catch (err) {
      console.error("Error processing image path:", err);
      setError(true);
      setLoading(false);
    }
  }, [imageSrc]);

  // Function to open image in a new tab
  const openInNewTab = () => {
    window.open(imageUrl, "_blank");
  };

  // Handle image load success
  const handleImageLoad = () => {
    console.log("Image loaded successfully:", imageUrl);
    setLoading(false);
    setError(false);
  };

  // Handle image load error
  const handleImageError = () => {
    console.error("Error loading image:", imageUrl);
    setError(true);
    setLoading(false);
  };

  // Zoom functions
  const zoomIn = () => setScale((prev) => Math.min(prev + 0.1, 2.5));
  const zoomOut = () => setScale((prev) => Math.max(prev - 0.1, 0.5));

  // Rotation function
  const rotate = () => setRotation((prev) => (prev + 90) % 360);

  // Error content
  const errorContent = (
    <div className="flex flex-col items-center justify-center h-[50vh] text-center p-4 w-full">
      <p className="text-destructive font-medium mb-2">
        Failed to load certificate
      </p>
      <p className="text-muted-foreground text-sm mb-4">
        The certificate could not be loaded. Please try again later or open it
        in a new tab.
        <br />
        <span className="text-xs opacity-70 mt-2 block">Path: {imageUrl}</span>
      </p>
      <Button variant="outline" onClick={openInNewTab} className="glass-hover">
        <Download className="h-4 w-4 mr-2" />
        Open in New Tab
      </Button>
    </div>
  );

  // Image content
  const imageContent = (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{
        opacity: loading ? 0 : 1,
        scale: loading ? 0.9 : 1,
        rotate: rotation,
        transition: {
          type: "spring",
          damping: 25,
          stiffness: 300,
        },
      }}
      className="relative"
      style={{
        maxHeight: "70vh",
        overflow: "auto",
      }}
    >
      {imageUrl && (
        <img
          src={imageUrl}
          alt="Certificate"
          className="max-w-full object-contain"
          style={{
            transform: `scale(${scale})`,
            transformOrigin: "center",
            transition: "transform 0.3s ease",
          }}
          onLoad={handleImageLoad}
          onError={handleImageError}
        />
      )}
    </motion.div>
  );

  // Controls
  const controls = (
    <div className="flex items-center justify-between w-full glass-card rounded-full p-2">
      <div className="flex items-center space-x-2">
        <Button
          variant="ghost"
          size="icon"
          onClick={zoomOut}
          disabled={scale <= 0.5 || loading}
          className="rounded-full glass-hover"
          title="Zoom out"
        >
          <ZoomOut className="h-4 w-4" />
        </Button>

        <span className="text-sm">{Math.round(scale * 100)}%</span>

        <Button
          variant="ghost"
          size="icon"
          onClick={zoomIn}
          disabled={scale >= 2.5 || loading}
          className="rounded-full glass-hover"
          title="Zoom in"
        >
          <ZoomIn className="h-4 w-4" />
        </Button>
      </div>

      <div className="flex items-center space-x-2">
        <Button
          variant="ghost"
          size="icon"
          onClick={rotate}
          disabled={loading}
          className="rounded-full glass-hover"
          title="Rotate"
        >
          <RotateCw className="h-4 w-4" />
        </Button>

        <Button
          variant="outline"
          size="sm"
          onClick={openInNewTab}
          className="rounded-full glass-hover flex items-center ml-2"
        >
          <Download className="h-4 w-4 mr-2" />
          Open in New Tab
        </Button>
      </div>
    </div>
  );

  return (
    <div className={cn("flex flex-col items-center w-full", className)}>
      <div className="w-full mb-4 rounded-lg overflow-hidden glass-card p-4 flex justify-center items-center relative">
        {loading && (
          <div className="absolute inset-0 flex items-center justify-center bg-background/50 backdrop-blur-sm z-10">
            <Loader2 className="h-8 w-8 animate-spin text-primary" />
          </div>
        )}

        {error ? errorContent : imageContent}
      </div>

      {!error && controls}
    </div>
  );
};

export default CertificateImageViewer;
