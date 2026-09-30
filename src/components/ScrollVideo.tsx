"use client";

import { useEffect, useRef } from "react";

type ScrollVideoProps = {
  src: string;
  className?: string;
  preload?: "none" | "metadata" | "auto";
};

export default function ScrollVideo({ src, className, preload = "metadata" }: ScrollVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.muted = true;
    video.defaultMuted = true;
    video.load();

    let isVisible = false;
    const playWhenReady = () => {
      if (!isVisible) return;
      video.play().catch(() => undefined);
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        isVisible = entry.isIntersecting;
        if (isVisible) {
          playWhenReady();
        } else {
          video.pause();
        }
      },
      { threshold: 0.05 },
    );

    video.addEventListener("loadeddata", playWhenReady);
    video.addEventListener("canplay", playWhenReady);
    observer.observe(video);

    return () => {
      video.removeEventListener("loadeddata", playWhenReady);
      video.removeEventListener("canplay", playWhenReady);
      observer.disconnect();
    };
  }, [src]);

  return (
    <video
      ref={videoRef}
      src={src}
      autoPlay
      muted
      loop
      playsInline
      preload={preload}
      className={className}
    />
  );
}
