export interface SequenceManifest {
  id: string;
  sequenceNumber: number;
  title: string;
  headline: string;
  subhead: string;
  zipName: string;
  videoSource: string;
  videoDuration: number;
  layout: 'hero-morph' | 'split-right' | 'full-bleed' | 'split-left' | 'expand-fullscreen';
  routeStage: string;
  frameCount: number;
  originalResolution: {
    width: number;
    height: number;
  };
  optimizedResolution: {
    width: number;
    height: number;
  };
  fps: number;
  durationSeconds: number;
  poster: string;
  frames: string[];
  originalFrameTemplate: string;
}
