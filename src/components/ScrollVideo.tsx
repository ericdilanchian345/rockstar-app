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

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.play().catch(() => undefined);
        } else {
          video.pause();
        }
      },
      { threshold: 0.2 },
    );

    observer.observe(video);
    return () => observer.disconnect();
  }, []);

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
