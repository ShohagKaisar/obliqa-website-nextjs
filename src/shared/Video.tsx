"use client";
import { useEffect, useRef } from "react";
import Hls from "hls.js";

interface VideoProps {
  videoSrc: string; // Playlist (.m3u8) or MP4
  fallbackSrc?: string; // Fallback MP4
  poster?: string;
  className?: string;
}

const Video = ({ videoSrc, fallbackSrc, poster, className }: VideoProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    let hls: Hls | null = null;

    if (videoSrc.endsWith(".m3u8")) {
      if (Hls.isSupported()) {
        hls = new Hls({
          capLevelToPlayerSize: true,
          autoStartLoad: true,
        });
        hls.loadSource(videoSrc);
        hls.attachMedia(video);
        hls.on(Hls.Events.MANIFEST_PARSED, () => {
          video.play().catch(() => {
             // Autoplay might be blocked by browser until interaction
             console.log("Autoplay blocked, waiting for interaction");
          });
        });
      } else if (video.canPlayType("application/vnd.apple.mpegurl")) {
        // Native HLS support (Safari)
        video.src = videoSrc;
      } else if (fallbackSrc) {
        // Fallback to MP4
        video.src = fallbackSrc;
      }
    } else {
      // Normal MP4 playback
      video.src = videoSrc;
    }

    return () => {
      if (hls) {
        hls.destroy();
      }
    };
  }, [videoSrc, fallbackSrc]);

  return (
    <div className={className}>
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        poster={poster}
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      >
        {/* If JS is disabled or HLS fails, we can also have a hardcoded source here if needed, 
            but useEffect handles the dynamic sources. */}
        {fallbackSrc && <source src={fallbackSrc} type="video/mp4" />}
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default Video;