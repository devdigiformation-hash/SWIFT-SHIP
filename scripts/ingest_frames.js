const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Sequence Configuration and Mapping
const SEQUENCE_MAP = [
  {
    id: 'seq-01',
    sequenceNumber: 1,
    title: 'Business Collection & Barcode Scan',
    headline: 'Every Journey Begins With Trust.',
    subhead: 'Direct Manchester business collection with instant digital manifest registration.',
    zipName: 'ezgif-77d22927ee809da2-jpg.zip',
    videoSource: '1.mp4',
    videoDuration: 5.999,
    layout: 'hero-morph', // full-bleed hero morphing into editorial glass panel
    routeStage: 'Manchester Collection Depot (M1 2WD)'
  },
  {
    id: 'seq-02',
    sequenceNumber: 2,
    title: 'Automated Hub Sorting & Scan',
    headline: 'Precision at Every Turn.',
    subhead: 'High-speed optical sorting and volumetric laser profiling at our central hub.',
    zipName: 'ezgif-7403fd4a52452788-jpg.zip',
    videoSource: '2.mp4',
    videoDuration: 9.963,
    layout: 'split-right', // video right, copy left
    routeStage: 'Central Processing Hub (North West Midlands)'
  },
  {
    id: 'seq-03',
    sequenceNumber: 3,
    title: 'Express Motorway Transit',
    headline: 'Moving Your World Forward.',
    subhead: 'Direct trunk transit connecting Manchester to Greater London via the M6/M1 artery.',
    zipName: 'ezgif-11eb946a686338c3-jpg.zip',
    videoSource: '3.mp4',
    videoDuration: 5.402,
    layout: 'full-bleed', // full width cinematic widescreen roadway
    routeStage: 'M6/M1 Southbound Corridor'
  },
  {
    id: 'seq-04',
    sequenceNumber: 4,
    title: 'London Delivery Hub Ingestion',
    headline: 'The Final Mile, Perfectly Coordinated.',
    subhead: 'Rapid depot unloading, roll-cage staging and route allocation for London dispatch.',
    zipName: 'ezgif-83e1ca8966ed675f-jpg.zip',
    videoSource: '4.mp4',
    videoDuration: 9.963,
    layout: 'split-left', // video left, copy right
    routeStage: 'London Metropolitan Distribution Hub (EC1A 1BB)'
  },
  {
    id: 'seq-05',
    sequenceNumber: 5,
    title: 'Doorstep Handover & Signed POD',
    headline: 'Delivered With Confidence.',
    subhead: 'Signed, sealed and verified proof of delivery directly into recipient hands.',
    zipName: 'ezgif-5bbe97b0ff1f74be-jpg.zip',
    videoSource: '5.mp4',
    videoDuration: 7.463,
    layout: 'expand-fullscreen', // contained glass card expanding to celebratory full bleed
    routeStage: 'Final Recipient Handover (SW1A 1AA)'
  }
];

function naturalSort(a, b) {
  return a.localeCompare(b, undefined, { numeric: true, sensitivity: 'base' });
}

function runPipeline() {
  console.log('=== SWIFTSHIP FRAME INGESTION & OPTIMIZATION PIPELINE ===');
  const publicDir = path.resolve(__dirname, '..', 'public');
  const sequencesDir = path.join(publicDir, 'sequences');
  fs.mkdirSync(sequencesDir, { recursive: true });

  const manifest = [];

  for (const seq of SEQUENCE_MAP) {
    console.log(`\nProcessing Sequence ${seq.sequenceNumber}: ${seq.title}`);
    const seqFolder = path.join(sequencesDir, seq.id);
    const origFolder = path.join(seqFolder, 'original');
    const optFolder = path.join(seqFolder, 'optimized');
    const thumbFolder = path.join(seqFolder, 'thumb');

    fs.mkdirSync(origFolder, { recursive: true });
    fs.mkdirSync(optFolder, { recursive: true });
    fs.mkdirSync(thumbFolder, { recursive: true });

    // 1. Extract ZIP
    const zipPath = path.resolve(__dirname, '..', seq.zipName);
    if (!fs.existsSync(zipPath)) {
      throw new Error(`Missing ZIP file: ${seq.zipName}`);
    }

    console.log(`Extracting ${seq.zipName}...`);
    execSync(`tar -xf "${zipPath}" -C "${origFolder}"`);

    // 2. Sort and audit frames
    let frameFiles = fs.readdirSync(origFolder).filter(f => f.toLowerCase().endsWith('.jpg') || f.toLowerCase().endsWith('.jpeg'));
    frameFiles.sort(naturalSort);

    if (frameFiles.length === 0) {
      throw new Error(`No frames found in ${seq.zipName}`);
    }

    console.log(`Audited ${frameFiles.length} frames.`);

    // 3. Inspect resolution using first frame
    const sampleFrame = path.join(origFolder, frameFiles[0]);
    const probe = execSync(`ffprobe -v error -select_streams v:0 -show_entries stream=width,height -of json "${sampleFrame}"`).toString();
    const info = JSON.parse(probe);
    const width = info.streams[0].width;
    const height = info.streams[0].height;

    // 4. Generate optimized responsive WebP (1920x1080) for instant 60fps scrubbing
    console.log(`Generating web-optimized frames (1920px width)...`);
    const optimizedFiles = [];
    frameFiles.forEach((file, idx) => {
      const src = path.join(origFolder, file);
      const outName = `frame_${String(idx + 1).padStart(3, '0')}.webp`;
      const dest = path.join(optFolder, outName);
      
      // Use ffmpeg to resize and encode to high-quality webp
      execSync(`ffmpeg -y -i "${src}" -vf "scale=1920:-2" -c:v libwebp -quality 82 "${dest}"`, { stdio: 'ignore' });
      optimizedFiles.push(`/sequences/${seq.id}/optimized/${outName}`);
    });

    // 5. Generate poster / thumbnail
    const posterSrc = path.join(optFolder, `frame_001.webp`);
    const posterDest = path.join(seqFolder, 'poster.webp');
    fs.copyFileSync(posterSrc, posterDest);

    const calculatedFps = frameFiles.length / seq.videoDuration;

    manifest.push({
      ...seq,
      frameCount: frameFiles.length,
      originalResolution: { width, height },
      optimizedResolution: { width: 1920, height: Math.round(1920 * (height / width)) },
      fps: Number(calculatedFps.toFixed(2)),
      durationSeconds: seq.videoDuration,
      poster: `/sequences/${seq.id}/poster.webp`,
      frames: optimizedFiles,
      originalFrameTemplate: `/sequences/${seq.id}/original/ezgif-frame-{index}.jpg`
    });

    console.log(`Sequence ${seq.id} complete: ${frameFiles.length} frames optimized.`);
  }

  // 6. Write sequences manifest JSON
  const manifestPath = path.join(publicDir, 'sequences-manifest.json');
  fs.writeFileSync(manifestPath, JSON.stringify(manifest, null, 2));
  console.log(`\nSequences manifest written to: ${manifestPath}`);
  
  // Also create a copy in src/data for type-safe build
  const srcDataDir = path.resolve(__dirname, '..', 'src', 'data');
  fs.mkdirSync(srcDataDir, { recursive: true });
  fs.writeFileSync(path.join(srcDataDir, 'sequences.json'), JSON.stringify(manifest, null, 2));
  console.log(`Copied sequences manifest to src/data/sequences.json`);
}

runPipeline();
