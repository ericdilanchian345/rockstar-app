"use client";

import { useState } from "react";
import Image from "next/image";

type Video = {
  src: string;
  thumb: string;
  title: string;
  desc: string;
};

// Demo video data
const videos: Video[] = [
  {
    src: "/gallery/video1.mp4",
    thumb: "/gallery/images2.jpg",
    title: "GTA VI Trailer 2",
    desc: "Official cinematic trailer.",
  },
   {
    src: "/gallery/video1.mp4",
    thumb: "/gallery/images3.jpg",
    title: "GTA VI Trailer",
    desc: "Official cinematic trailer.",
  },
  {
    src: "/gallery/video2.mp4",
    thumb: "/gallery/images5.jpg",
    title: "RDR2 Trailer",
    desc: "Wild West cinematic trailer",
  },
  {
    src: "/gallery/video3.mp4",
    thumb: "/gallery/images6.jpg",
    title: "GTA Online Update",
    desc: "New multiplayer update footage.",
  },
  {
    src: "/gallery/video3.mp4",
    thumb: "/gallery/images9.jpg",
    title: "GTA Online Update",
    desc: "New multiplayer update footage.",
  },
];

export default function VideosPage() {
  const [openVideo, setOpenVideo] = useState<Video | null>(null);

  return (
    <div className="bg-black text-white min-h-screen">
      <section className="max-w-[2600px] mx-auto px-4 sm:px-3 lg:px-8 py-16">
        <h2 className="text-4xl font-bold text-center text-white mb-10 tracking-wide">
          VIDEOS
        </h2>
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 2xl:grid-cols-3">
          {videos.map((v, i) => (
            <div
              key={i}
              className="group cursor-pointer rounded-2xl overflow-hidden bg-neutral-900 border border-neutral-800 hover:border-neutral-700 transition-all duration-300 shadow-xl hover:shadow-2xl"
              onClick={() => setOpenVideo(v)}
            >
              <div className="relative w-full aspect-video">
                <Image
                  src={v.thumb}
                  alt={v.title}
                  fill
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0  opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex justify-center items-center">
                  <span className="text-white text-5xl">▶</span>
                </div>
              </div>

              <div className="p-5">
                <h3 className="text-lg sm:text-xl font-semibold mb-1 line-clamp-1">
                  {v.title}
                </h3>
                <p className="text-gray-400 text-sm line-clamp-2">{v.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {openVideo && (
        <div
          className="fixed inset-0 z-[999] bg-black/80 backdrop-blur-sm flex justify-center items-center p-4"
          onClick={() => setOpenVideo(null)}
        >
          <div
            className="relative w-full max-w-5xl aspect-video bg-black rounded-2xl overflow-hidden shadow-[0_0_80px_#000]"
            onClick={(e) => e.stopPropagation()}
          >
            <video className="w-full h-full" controls autoPlay>
              <source src={openVideo.src} type="video/mp4" />
            </video>
            <button
              className="absolute top-3 right-4 text-white text-4xl font-bold hover:text-red-500"
              onClick={() => setOpenVideo(null)}
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
