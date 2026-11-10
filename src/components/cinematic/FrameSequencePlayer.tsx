import React, { useEffect, useRef, useCallback } from 'react';
import { SequenceManifest } from '../../types/sequence';

interface FrameSequencePlayerProps {
  sequence: SequenceManifest;
  progress?: number; // 0.0 to 1.0 (scroll-driven)
  className?: string;
  onFrameChange?: (currentFrame: number, totalFrames: number) => void;
}

export const FrameSequencePlayer: React.FC<FrameSequencePlayerProps> = ({
  sequence,
  progress = 0,
  className = '',
  onFrameChange,
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  // Cached HTMLImageElement instances
  const imageCache = useRef<Map<number, HTMLImageElement>>(new Map());
  const lastRenderedIndex = useRef<number>(-1);
  
  // Smooth scroll interpolation (LERP) ref
  const targetProgress = useRef<number>(progress);
  const smoothProgress = useRef<number>(progress);
  const rafId = useRef<number | null>(null);

  const totalFrames = sequence.frames.length;

  // Preload frames progressively
  useEffect(() => {
    let isCancelled = false;

    // Load first frame immediately
    const firstImg = new Image();
    firstImg.src = sequence.frames[0];
    firstImg.onload = () => {
      if (isCancelled) return;
      imageCache.current.set(0, firstImg);
      drawFrame(0);

      // Preload remaining frames in natural order
      sequence.frames.forEach((url, idx) => {
        if (idx === 0) return;
        const img = new Image();
        img.src = url;
        img.onload = () => {
          if (isCancelled) return;
          imageCache.current.set(idx, img);
        };
      });
    };

    return () => {
      isCancelled = true;
      imageCache.current.clear();
      if (rafId.current) cancelAnimationFrame(rafId.current);
    };
  }, [sequence]);

  // Keep targetProgress updated with external scroll
  useEffect(() => {
    targetProgress.current = Math.max(0, Math.min(1, progress));
  }, [progress]);

  // Canvas drawing function with device-pixel-ratio scaling & object-fit: cover
  const drawFrame = useCallback((frameIndex: number) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d', { alpha: false });
    if (!ctx) return;

    const img = imageCache.current.get(frameIndex);
    if (!img || !img.complete || img.naturalWidth === 0) {
      // Retain last rendered frame to prevent blank flash
      return;
    }

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const rect = canvas.getBoundingClientRect();
    if (rect.width === 0 || rect.height === 0) return;

    const displayWidth = Math.round(rect.width * dpr);
    const displayHeight = Math.round(rect.height * dpr);

    if (canvas.width !== displayWidth || canvas.height !== displayHeight) {
      canvas.width = displayWidth;
      canvas.height = displayHeight;
    }

    // Cover calculation
    const imgAspect = img.naturalWidth / img.naturalHeight;
    const canvasAspect = canvas.width / canvas.height;

    let renderW: number;
    let renderH: number;
    let offsetX: number;
    let offsetY: number;

    if (canvasAspect > imgAspect) {
      renderW = canvas.width;
      renderH = Math.round(canvas.width / imgAspect);
      offsetX = 0;
      offsetY = Math.round((canvas.height - renderH) / 2);
    } else {
      renderH = canvas.height;
      renderW = Math.round(canvas.height * imgAspect);
      offsetY = 0;
      offsetX = Math.round((canvas.width - renderW) / 2);
    }

    ctx.imageSmoothingEnabled = true;
    ctx.imageSmoothingQuality = 'high';
    ctx.drawImage(img, offsetX, offsetY, renderW, renderH);

    lastRenderedIndex.current = frameIndex;
    onFrameChange?.(frameIndex + 1, totalFrames);
  }, [totalFrames, onFrameChange]);

  // Smooth LERP animation loop: smoothly interpolates frame progress on scroll
  useEffect(() => {
    let active = true;

    const tick = () => {
      if (!active) return;

      // Smooth easing toward target scroll progress
      const diff = targetProgress.current - smoothProgress.current;
      if (Math.abs(diff) > 0.0005) {
        smoothProgress.current += diff * 0.18; // smooth spring feel
      } else {
        smoothProgress.current = targetProgress.current;
      }

      const clamped = Math.max(0, Math.min(1, smoothProgress.current));
      const targetIndex = Math.min(
        totalFrames - 1,
        Math.floor(clamped * (totalFrames - 1))
      );

      if (targetIndex !== lastRenderedIndex.current) {
        drawFrame(targetIndex);
      }

      rafId.current = requestAnimationFrame(tick);
    };

    rafId.current = requestAnimationFrame(tick);

    return () => {
      active = false;
      if (rafId.current) cancelAnimationFrame(rafId.current);
    };
  }, [totalFrames, drawFrame]);

  // Window resize handler
  useEffect(() => {
    const handleResize = () => {
      if (lastRenderedIndex.current >= 0) {
        drawFrame(lastRenderedIndex.current);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [drawFrame]);

  return (
    <div
      ref={containerRef}
      className={`relative w-full h-full overflow-hidden bg-swift-midnight select-none ${className}`}
    >
      {/* Pure Canvas - No Video Controls, No Bars, No Buttons */}
      <canvas
        ref={canvasRef}
        className="w-full h-full object-cover block pointer-events-none"
      />
    </div>
  );
};
