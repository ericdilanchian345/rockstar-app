"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Navbar from "@/components/Navbar";

gsap.registerPlugin(ScrollTrigger);

export default function GTAVIPage() {
  const pageRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      /* =====================================================
         REDUCED MOTION
      ===================================================== */

      mm.add("(prefers-reduced-motion: reduce)", () => {
        gsap.set(
          [
            ".hero-content",
            ".hero-art",
            ".hero-glow",
            ".intro-video",
            ".intro-copy",
            ".jason-media",
            ".jason-copy",
            ".lucia-media",
            ".lucia-copy",
            ".duo-left",
            ".duo-right",
            ".duo-copy",
            ".leonida-image",
            ".leonida-copy",
            ".vice-city-image",
            ".vice-city-copy",
            ".nightlife-video",
            ".nightlife-copy",
            ".beaches-image",
            ".beaches-copy",
            ".vehicle-image",
            ".vehicle-copy",
            ".trailer-card",
            ".wildlife-video",
            ".wildlife-copy",
            ".ultimate-card",
            ".feature-card",
            ".gallery-card",
            ".news-card",
            ".final-background",
            ".final-copy",
          ],
          {
            clearProps: "all",
          }
        );
      });

      /* =====================================================
         DESKTOP
      ===================================================== */

      mm.add("(min-width: 1024px) and (prefers-reduced-motion: no-preference)", () => {
        /* ---------------------------------------------------
           HERO
        --------------------------------------------------- */

        const heroTimeline = gsap.timeline({
          scrollTrigger: {
            trigger: ".hero",
            start: "top top",
            end: "+=1600",
            scrub: 1.3,
            pin: true,
            anticipatePin: 1,
          },
        });

        heroTimeline
          .to(".hero-art", {
            scale: 1.18,
            y: 100,
            ease: "none",
          })
          .to(
            ".hero-overlay",
            {
              opacity: 0.82,
              ease: "none",
            },
            0
          )
          .to(
            ".hero-content",
            {
              y: -180,
              opacity: 0,
              scale: 0.88,
              ease: "power2.in",
            },
            0.15
          )
          .to(
            ".hero-glow",
            {
              opacity: 0.15,
              scale: 1.5,
              ease: "none",
            },
            0
          );

        gsap.from(".hero-content > *", {
          y: 50,
          opacity: 0,
          duration: 1,
          stagger: 0.14,
          delay: 0.2,
          ease: "power3.out",
        });

        /* ---------------------------------------------------
           INTRO
        --------------------------------------------------- */

        const introTimeline = gsap.timeline({
          scrollTrigger: {
            trigger: ".intro",
            start: "top 75%",
            end: "bottom 30%",
            scrub: 1,
          },
        });

        introTimeline
          .from(".intro-video", {
            scale: 1.15,
            opacity: 0.25,
            ease: "none",
          })
          .from(
            ".intro-overlay",
            {
              opacity: 0,
            },
            0
          )
          .from(
            ".intro-copy",
            {
              y: 100,
              opacity: 0,
              scale: 0.92,
            },
            0.1
          );

        /* ---------------------------------------------------
           JASON
        --------------------------------------------------- */

        const jasonTimeline = gsap.timeline({
          scrollTrigger: {
            trigger: ".jason",
            start: "top 75%",
            end: "bottom 20%",
            scrub: 1,
          },
        });

        jasonTimeline
          .from(".jason-media", {
            x: -120,
            opacity: 0,
            scale: 0.92,
          })
          .from(
            ".jason-copy",
            {
              x: 100,
              opacity: 0,
            },
            0.15
          )
          .from(
            ".jason-line",
            {
              scaleX: 0,
              transformOrigin: "left center",
            },
            0.2
          );

        /* ---------------------------------------------------
           LUCIA
        --------------------------------------------------- */

        const luciaTimeline = gsap.timeline({
          scrollTrigger: {
            trigger: ".lucia",
            start: "top 75%",
            end: "bottom 20%",
            scrub: 1,
          },
        });

        luciaTimeline
          .from(".lucia-media", {
            x: 120,
            opacity: 0,
            scale: 0.92,
          })
          .from(
            ".lucia-copy",
            {
              x: -100,
              opacity: 0,
            },
            0.15
          )
          .from(
            ".lucia-line",
            {
              scaleX: 0,
              transformOrigin: "right center",
            },
            0.2
          );

        /* ---------------------------------------------------
           DUO
        --------------------------------------------------- */

        const duoTimeline = gsap.timeline({
          scrollTrigger: {
            trigger: ".duo",
            start: "top 70%",
            end: "bottom 20%",
            scrub: 1,
          },
        });

        duoTimeline
          .from(".duo-left", {
            x: -180,
            opacity: 0,
          })
          .from(
            ".duo-right",
            {
              x: 180,
              opacity: 0,
            },
            0
          )
          .from(
            ".duo-copy",
            {
              y: 100,
              opacity: 0,
              scale: 0.9,
            },
            0.15
          );

        /* ---------------------------------------------------
           LEONIDA
        --------------------------------------------------- */

        const leonidaTimeline = gsap.timeline({
          scrollTrigger: {
            trigger: ".leonida",
            start: "top top",
            end: "+=1000",
            scrub: 1,
            pin: true,
          },
        });

        leonidaTimeline
          .from(".leonida-image", {
            scale: 1.3,
            y: 100,
            ease: "none",
          })
          .from(
            ".leonida-overlay",
            {
              opacity: 0,
            },
            0
          )
          .from(
            ".leonida-copy",
            {
              y: 130,
              opacity: 0,
              scale: 0.9,
            },
            0.1
          );

        /* ---------------------------------------------------
           VICE CITY
        --------------------------------------------------- */

        const viceTimeline = gsap.timeline({
          scrollTrigger: {
            trigger: ".vice-city",
            start: "top 75%",
            end: "bottom 15%",
            scrub: 1,
          },
        });

        viceTimeline
          .from(".vice-city-image", {
            scale: 1.25,
            y: 80,
            ease: "none",
          })
          .from(
            ".vice-city-overlay",
            {
              opacity: 0,
            },
            0
          )
          .from(
            ".vice-city-copy",
            {
              y: 100,
              opacity: 0,
            },
            0.15
          );

        /* ---------------------------------------------------
           NIGHTLIFE
        --------------------------------------------------- */

        const nightlifeTimeline = gsap.timeline({
          scrollTrigger: {
            trigger: ".nightlife",
            start: "top 75%",
            end: "bottom 20%",
            scrub: 1,
          },
        });

        nightlifeTimeline
          .from(".nightlife-video", {
            scale: 1.18,
            opacity: 0.25,
            ease: "none",
          })
          .from(
            ".nightlife-copy",
            {
              x: -120,
              opacity: 0,
            },
            0.1
          )
          .from(
            ".nightlife-stat",
            {
              y: 70,
              opacity: 0,
              stagger: 0.12,
            },
            0.2
          );

        /* ---------------------------------------------------
           BEACHES
        --------------------------------------------------- */

        const beachesTimeline = gsap.timeline({
          scrollTrigger: {
            trigger: ".beaches",
            start: "top 75%",
            end: "bottom 20%",
            scrub: 1,
          },
        });

        beachesTimeline
          .from(".beaches-image", {
            y: 120,
            scale: 1.12,
            ease: "none",
          })
          .from(
            ".beaches-copy",
            {
              y: 100,
              opacity: 0,
            },
            0.15
          );

        /* ---------------------------------------------------
           VEHICLES
        --------------------------------------------------- */

        const vehiclesTimeline = gsap.timeline({
          scrollTrigger: {
            trigger: ".vehicles",
            start: "top 70%",
            end: "bottom 15%",
            scrub: 1,
          },
        });

        vehiclesTimeline
          .from(".vehicle-image", {
            x: -180,
            opacity: 0,
            scale: 0.8,
          })
          .from(
            ".vehicle-copy",
            {
              x: 140,
              opacity: 0,
            },
            0.1
          )
          .from(
            ".vehicle-line",
            {
              width: 0,
            },
            0.2
          );

        /* ---------------------------------------------------
           TRAILERS
        --------------------------------------------------- */

        gsap.from(".trailers-title", {
          y: 100,
          opacity: 0,
          scrollTrigger: {
            trigger: ".trailers",
            start: "top 80%",
          },
        });

        gsap.from(".trailer-card", {
          y: 100,
          opacity: 0,
          rotateX: 18,
          transformPerspective: 1000,
          duration: 1,
          stagger: 0.18,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".trailer-grid",
            start: "top 82%",
          },
        });

        /* ---------------------------------------------------
           WILDLIFE
        --------------------------------------------------- */

        const wildlifeTimeline = gsap.timeline({
          scrollTrigger: {
            trigger: ".wildlife",
            start: "top 75%",
            end: "bottom 15%",
            scrub: 1,
          },
        });

        wildlifeTimeline
          .from(".wildlife-video", {
            scale: 1.22,
            opacity: 0.2,
            ease: "none",
          })
          .from(
            ".wildlife-copy",
            {
              y: 120,
              opacity: 0,
            },
            0.15
          );

        /* ---------------------------------------------------
           ULTIMATE
        --------------------------------------------------- */

        const ultimateTimeline = gsap.timeline({
          scrollTrigger: {
            trigger: ".ultimate",
            start: "top 75%",
            end: "bottom 20%",
            scrub: 1,
          },
        });

        ultimateTimeline
          .from(".ultimate-card", {
            y: 120,
            opacity: 0,
            scale: 0.82,
            rotateX: 10,
            transformPerspective: 1000,
          })
          .from(
            ".ultimate-glow",
            {
              scale: 0.5,
              opacity: 0,
            },
            0
          );

        /* ---------------------------------------------------
           FEATURES
        --------------------------------------------------- */

        gsap.from(".feature-card", {
          y: 90,
          opacity: 0,
          rotateX: 12,
          scale: 0.92,
          transformPerspective: 1000,
          duration: 1,
          stagger: 0.12,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".features-grid",
            start: "top 82%",
          },
        });

        /* ---------------------------------------------------
           GALLERY
        --------------------------------------------------- */

        gsap.from(".gallery-card", {
          y: 100,
          opacity: 0,
          scale: 0.9,
          duration: 1,
          stagger: 0.14,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".gallery-grid",
            start: "top 80%",
          },
        });

        gsap.utils.toArray<HTMLElement>(".gallery-card").forEach((card) => {
          const image = card.querySelector(".gallery-media");

          if (!image) return;

          gsap.to(image, {
            y: -30,
            scale: 1.08,
            ease: "none",
            scrollTrigger: {
              trigger: card,
              start: "top bottom",
              end: "bottom top",
              scrub: 1,
            },
          });
        });

        /* ---------------------------------------------------
           NEWS
        --------------------------------------------------- */

        gsap.from(".news-title", {
          y: 100,
          opacity: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".news",
            start: "top 80%",
          },
        });

        gsap.from(".news-card", {
          y: 100,
          opacity: 0,
          scale: 0.94,
          duration: 1,
          stagger: 0.16,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".news-grid",
            start: "top 82%",
          },
        });

        /* ---------------------------------------------------
           FINAL
        --------------------------------------------------- */

        const finalTimeline = gsap.timeline({
          scrollTrigger: {
            trigger: ".final-section",
            start: "top 80%",
            end: "bottom bottom",
            scrub: 1,
          },
        });

        finalTimeline
          .from(".final-background", {
            scale: 1.25,
            ease: "none",
          })
          .from(
            ".final-overlay",
            {
              opacity: 0,
            },
            0
          )
          .from(
            ".final-copy",
            {
              y: 120,
              opacity: 0,
              scale: 0.88,
            },
            0.1
          );
      });

      /* =====================================================
         TABLET
      ===================================================== */

      mm.add("(min-width: 768px) and (max-width: 1023px) and (prefers-reduced-motion: no-preference)", () => {
        /* Hero — no heavy pin on tablet */

        gsap.from(".hero-content > *", {
          y: 45,
          opacity: 0,
          duration: 1,
          stagger: 0.12,
          ease: "power3.out",
        });

        gsap.to(".hero-art", {
          scale: 1.08,
          scrollTrigger: {
            trigger: ".hero",
            start: "top top",
            end: "bottom top",
            scrub: 1,
          },
        });

        gsap.to(".hero-content", {
          y: -90,
          opacity: 0,
          scrollTrigger: {
            trigger: ".hero",
            start: "top top",
            end: "bottom top",
            scrub: 1,
          },
        });

        /* Cinematic sections */

        gsap.utils.toArray<HTMLElement>(
          ".intro, .leonida, .vice-city, .nightlife, .wildlife, .final-section"
        ).forEach((section) => {
          const media = section.querySelector(
            "video, img"
          ) as HTMLElement | null;

          const copy = section.querySelector(
            ".intro-copy, .leonida-copy, .vice-city-copy, .nightlife-copy, .wildlife-copy, .final-copy"
          ) as HTMLElement | null;

          if (media) {
            gsap.from(media, {
              scale: 1.12,
              scrollTrigger: {
                trigger: section,
                start: "top bottom",
                end: "bottom top",
                scrub: 1,
              },
            });
          }

          if (copy) {
            gsap.from(copy, {
              y: 70,
              opacity: 0,
              scrollTrigger: {
                trigger: section,
                start: "top 75%",
                end: "center center",
                scrub: 1,
              },
            });
          }
        });

        /* Standard content sections */

        gsap.utils
          .toArray<HTMLElement>(
            ".jason-media, .jason-copy, .lucia-media, .lucia-copy, .beaches-image, .beaches-copy, .vehicle-image, .vehicle-copy"
          )
          .forEach((element) => {
            gsap.from(element, {
              y: 70,
              opacity: 0,
              duration: 1,
              ease: "power3.out",
              scrollTrigger: {
                trigger: element,
                start: "top 82%",
              },
            });
          });

        gsap.from(".duo-left, .duo-right, .duo-copy", {
          y: 80,
          opacity: 0,
          duration: 1,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".duo",
            start: "top 80%",
          },
        });

        gsap.from(".trailer-card", {
          y: 70,
          opacity: 0,
          duration: 0.9,
          stagger: 0.12,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".trailer-grid",
            start: "top 82%",
          },
        });

        gsap.from(".feature-card", {
          y: 70,
          opacity: 0,
          duration: 0.9,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".features-grid",
            start: "top 82%",
          },
        });

        gsap.from(".gallery-card", {
          y: 70,
          opacity: 0,
          scale: 0.95,
          duration: 0.9,
          stagger: 0.12,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".gallery-grid",
            start: "top 82%",
          },
        });

        gsap.from(".news-card", {
          y: 70,
          opacity: 0,
          duration: 0.9,
          stagger: 0.12,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".news-grid",
            start: "top 82%",
          },
        });

        gsap.from(".ultimate-card", {
          y: 90,
          opacity: 0,
          scale: 0.94,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".ultimate",
            start: "top 80%",
          },
        });
      });

      /* =====================================================
         MOBILE
      ===================================================== */

      mm.add("(max-width: 767px) and (prefers-reduced-motion: no-preference)", () => {
        /* ---------------------------------------------------
           MOBILE HERO
        --------------------------------------------------- */

        gsap.from(".hero-content > *", {
          y: 30,
          opacity: 0,
          duration: 0.9,
          stagger: 0.1,
          ease: "power3.out",
        });

        gsap.to(".hero-art", {
          scale: 1.06,
          y: 15,
          scrollTrigger: {
            trigger: ".hero",
            start: "top top",
            end: "bottom top",
            scrub: 0.8,
          },
        });

        gsap.to(".hero-content", {
          y: -55,
          opacity: 0,
          scrollTrigger: {
            trigger: ".hero",
            start: "top top",
            end: "bottom top",
            scrub: 0.8,
          },
        });

        /* ---------------------------------------------------
           MOBILE CINEMATIC MEDIA
        --------------------------------------------------- */

        gsap.utils
          .toArray<HTMLElement>(
            ".intro, .leonida, .vice-city, .nightlife, .wildlife, .final-section"
          )
          .forEach((section) => {
            const media = section.querySelector(
              "video, img"
            ) as HTMLElement | null;

            const copy = section.querySelector(
              ".intro-copy, .leonida-copy, .vice-city-copy, .nightlife-copy, .wildlife-copy, .final-copy"
            ) as HTMLElement | null;

            if (media) {
              gsap.from(media, {
                scale: 1.08,
                scrollTrigger: {
                  trigger: section,
                  start: "top bottom",
                  end: "bottom top",
                  scrub: 0.8,
                },
              });
            }

            if (copy) {
              gsap.from(copy, {
                y: 45,
                opacity: 0,
                scrollTrigger: {
                  trigger: section,
                  start: "top 80%",
                  end: "center center",
                  scrub: 0.8,
                },
              });
            }
          });

        /* ---------------------------------------------------
           MOBILE CHARACTER SECTIONS
        --------------------------------------------------- */

        gsap.utils
          .toArray<HTMLElement>(
            ".jason-media, .jason-copy, .lucia-media, .lucia-copy"
          )
          .forEach((element) => {
            gsap.from(element, {
              y: 45,
              opacity: 0,
              duration: 0.8,
              ease: "power3.out",
              scrollTrigger: {
                trigger: element,
                start: "top 88%",
              },
            });
          });

        /* ---------------------------------------------------
           MOBILE DUO
        --------------------------------------------------- */

        gsap.from(".duo-left, .duo-right, .duo-copy", {
          y: 50,
          opacity: 0,
          duration: 0.8,
          stagger: 0.12,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".duo",
            start: "top 85%",
          },
        });

        /* ---------------------------------------------------
           MOBILE BEACHES / VEHICLES
        --------------------------------------------------- */

        gsap.from(
          ".beaches-image, .beaches-copy, .vehicle-image, .vehicle-copy",
          {
            y: 50,
            opacity: 0,
            duration: 0.8,
            stagger: 0.1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: ".beaches, .vehicles",
              start: "top 85%",
            },
          }
        );

        /* ---------------------------------------------------
           MOBILE TRAILERS
        --------------------------------------------------- */

        gsap.from(".trailers-title", {
          y: 50,
          opacity: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".trailers",
            start: "top 85%",
          },
        });

        gsap.from(".trailer-card", {
          y: 50,
          opacity: 0,
          duration: 0.8,
          stagger: 0.12,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".trailer-grid",
            start: "top 88%",
          },
        });

        /* ---------------------------------------------------
           MOBILE FEATURES
        --------------------------------------------------- */

        gsap.from(".feature-card", {
          y: 45,
          opacity: 0,
          duration: 0.75,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".features-grid",
            start: "top 88%",
          },
        });

        /* ---------------------------------------------------
           MOBILE GALLERY
        --------------------------------------------------- */

        gsap.from(".gallery-card", {
          y: 45,
          opacity: 0,
          scale: 0.97,
          duration: 0.8,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".gallery-grid",
            start: "top 88%",
          },
        });

        /* ---------------------------------------------------
           MOBILE NEWS
        --------------------------------------------------- */

        gsap.from(".news-title", {
          y: 45,
          opacity: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".news",
            start: "top 85%",
          },
        });

        gsap.from(".news-card", {
          y: 45,
          opacity: 0,
          duration: 0.8,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".news-grid",
            start: "top 88%",
          },
        });

        /* ---------------------------------------------------
           MOBILE ULTIMATE
        --------------------------------------------------- */

        gsap.from(".ultimate-card", {
          y: 60,
          opacity: 0,
          scale: 0.96,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".ultimate",
            start: "top 85%",
          },
        });
      });

      /* =====================================================
         REFRESH
      ===================================================== */

      requestAnimationFrame(() => {
        ScrollTrigger.refresh();
      });

      return () => {
        mm.revert();
      };
    },
    {
      scope: pageRef,
    }
  );

  return (
    <main
      ref={pageRef}
      className="overflow-hidden bg-[#080b10] text-white selection:bg-white selection:text-black"
    >
      <Navbar />

      {/* =====================================================
    HERO — 3 SEPARATE IMAGES
===================================================== */}

<section className="hero relative h-[100svh] min-h-[620px] overflow-hidden bg-black sm:min-h-[680px] md:min-h-[720px] lg:min-h-[800px]">

  {/* =========================================
      MOBILE
      زیر 768px
  ========================================= */}

  <div className="absolute inset-0 md:hidden">
    <Image
      src="/gallery/jason.lucia2mobile.jpg"
      alt="Grand Theft Auto VI"
      fill
      priority
      sizes="100vw"
      className="hero-art object-cover"
    />
  </div>


  {/* =========================================
      TABLET
      768px تا 1023px
  ========================================= */}

  <div className="absolute inset-0 hidden md:block lg:hidden">
    <Image
      src="/gallery/jason.lucia2tablet.jpg"
      alt="Grand Theft Auto VI"
      fill
      priority
      sizes="100vw"
      className="hero-art object-cover"
    />
  </div>


  {/* =========================================
      DESKTOP
      1024px به بالا
  ========================================= */}

  <div className="absolute inset-0 hidden lg:block">
    <Image
      src="/gallery/jason.lucia2desktop.jpg"
      alt="Grand Theft Auto VI"
      fill
      priority
      sizes="100vw"
      className="hero-art object-cover"
    />
  </div>


  {/* DARK OVERLAY */}

  <div
    className="
      hero-overlay
      absolute inset-0
      bg-gradient-to-b
      from-black/20
      via-black/30
      to-black/90

      sm:from-black/15
      sm:via-black/25
      sm:to-black/85

      md:from-black/10
      md:via-black/20
      md:to-black/85
    "
  />


  {/* GLOW */}

  <div
    className="
      hero-glow
      pointer-events-none
      absolute
      left-1/2
      top-1/2
      h-[260px]
      w-[260px]
      -translate-x-1/2
      -translate-y-1/2
      rounded-full
      bg-fuchsia-500/20
      blur-[90px]

      sm:h-[360px]
      sm:w-[360px]
      sm:blur-[110px]

      md:h-[480px]
      md:w-[480px]
      md:blur-[130px]

      lg:h-[600px]
      lg:w-[600px]
      lg:blur-[160px]
    "
  />


  {/* HERO CONTENT */}

  <div
    className="
      hero-content
      relative
      z-2
      flex
      h-full
      items-end
      justify-center
      px-5
      pt-12
      text-center

      sm:px-8
      sm:pt-0

      md:px-10

      lg:px-12
    "
  >

    <div className="w-full max-w-[550px]">

      <p
        className="
          mb-4
          text-[9px]
          font-semibold
          uppercase
          tracking-[0.3em]
          text-white/60

          sm:mb-5
          sm:text-xs
          sm:tracking-[0.4em]

          md:text-sm
          md:tracking-[0.45em]
        "
      >
        Rockstar Games presents
      </p>


      <h1
        className="
          text-[24vw]
          font-mono
          leading-[0.68]
          tracking-[-0.09em]

          sm:text-[5vw]

          md:text-[7vw]

          lg:text-[5rem]

          text-[#f1d4ff]
        "
      >
        GTA 
        <span className="block text-[#f1d4ff]">
          VI
        </span>
      </h1>


      


      <div
        className="
          mt-7
          flex
          flex-col
          justify-center
          gap-3
          px-6

          sm:mt-10
          sm:flex-row
          sm:px-0
        "
      >

        
      </div>

    </div>

  </div>

</section>

      {/* =====================================================
          02 — INTRO CINEMATIC
      ===================================================== */}

      <section
        id="explore"
        className="intro relative h-[72svh] min-h-[500px] overflow-hidden bg-black sm:h-[75vh] sm:min-h-[600px] lg:h-[85vh] lg:min-h-[650px]"
      >
        <video
          className="intro-video absolute inset-0 h-full w-full object-cover object-[58%_center] sm:object-center"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
        >
          <source src="/gallery/video1.mp4" type="video/mp4" />
        </video>

        <div className="intro-overlay absolute inset-0 bg-gradient-to-r from-black/ via-black/40 to-black/75" />

        <div className="intro-copy relative z-10 flex h-full items-center px-6 sm:px-10 md:px-14 lg:px-20">
          <div className="max-w-2xl">
            <p className="mb-4 text-[9px] font-bold uppercase tracking-[0.35em] text-white/50 sm:mb-5 sm:text-xs sm:tracking-[0.4em]">
              The next chapter
            </p>

            <h2 className="text-4xl font-normal tracking-tight sm:text-6xl md:text-7xl lg:text-8xl">
              Welcome to
              <span className="block text-fuchsia-300">Leonida</span>
            </h2>

            <p className="mt-5 max-w-[340px] text-xs leading-6 text-white/65 sm:mt-7 sm:max-w-xl sm:text-sm sm:leading-7 md:text-base">
              A sprawling new world where every road leads somewhere, every
              night has a story, and every decision can change the way you
              experience the city.
            </p>
          </div>
        </div>
      </section>

      {/* =====================================================
          03 — JASON
      ===================================================== */}

      <section className="jason relative overflow-hidden bg-[#0c1016] py-20 sm:py-28 md:py-36 lg:py-40">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 sm:gap-14 sm:px-8 md:px-10 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="jason-media relative aspect-[4/5] overflow-hidden rounded-[1.5rem] bg-black sm:aspect-[16/10] sm:rounded-[2rem]">
            <Image
              src="/gallery/jason1.jpg"
              alt="Jason and Lucia"
              fill
              sizes="(max-width: 1023px) 100vw, 65vw"
              className="object-cover object-center"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
          </div>

          <div className="jason-copy">
            


            <h2 className="text-4xl font-normal tracking-tight sm:text-6xl md:text-8xl">
              Jason
              <span className="block text-white/25">Duval</span>
            </h2>

            <p className="mt-5 max-w-xl text-xs leading-7 text-white/55 sm:mt-7 sm:text-sm sm:leading-8 md:text-base">
              Jason has spent most of his life around local criminals and
              shady deals. A quick score could change everything — if he can
              survive long enough to enjoy it.
            </p>

            
          </div>
        </div>
      </section>

      {/* =====================================================
          04 — LUCIA
      ===================================================== */}

      <section className="lucia relative overflow-hidden bg-[#11131c] py-20 sm:py-28 md:py-36 lg:py-40">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 sm:gap-14 sm:px-8 md:px-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="lucia-copy order-2 lg:order-1">
            


            <h2 className="text-4xl font-normal tracking-tight sm:text-6xl md:text-8xl">
              Lucia
              <span className="block text-white/25">Caminos</span>
            </h2>

            <p className="mt-5 text-xs leading-7 text-white/55 sm:mt-7 sm:text-sm sm:leading-8 md:text-base">
              Lucia knows what it means to fight for a better life. After
              leaving prison behind, she wants something bigger — and she
              knows exactly who she wants beside her.
            </p>

            
          </div>

          <div className="lucia-media order-1 relative aspect-[4/5] overflow-hidden rounded-[1.5rem] bg-black sm:aspect-[16/10] sm:rounded-[2rem] lg:order-2">
            <Image
              src="/gallery/lucia.jpg"
              alt="Lucia and Jason"
              fill
              sizes="(max-width: 1023px) 100vw, 65vw"
              className="object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
          </div>
        </div>
      </section>

      {/* =====================================================
          05 — DUO
      ===================================================== */}

      <section className="duo relative overflow-hidden bg-black py-20 sm:py-28 md:py-36">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 sm:gap-5 sm:px-8">
          <div className="grid gap-3 sm:gap-5 md:grid-cols-2">
            <div className="duo-left relative aspect-[4/5] overflow-hidden rounded-[1.4rem] sm:rounded-[1.8rem]">
              <Image
                src="/gallery/jason2.jpg"
                alt="Jason and Lucia"
                fill
                sizes="(max-width: 767px) 100vw, 50vw"
                className="object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
            </div>

            <div className="duo-right relative aspect-[4/5] overflow-hidden rounded-[1.4rem] sm:rounded-[1.8rem]">
              <Image
                src="/gallery/lucia2.jpg"
                alt="Jason and Lucia"
                fill
                sizes="(max-width: 767px) 100vw, 50vw"
                className="object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
            </div>
          </div>

          <div className="duo-copy mx-auto max-w-3xl py-7 text-center sm:py-10">
            <p className="text-[9px] font-bold uppercase tracking-[0.35em] text-white/40 sm:text-xs sm:tracking-[0.45em]">
              Partners in crime
            </p>

            <h2 className="mt-4 text-4xl font-normal sm:mt-5 sm:text-6xl md:text-7xl">
              Together,
              <span className="block text-fuchsia-300">they risk it all.</span>
            </h2>

            <p className="mx-auto mt-5 max-w-xl text-xs leading-6 text-white/50 sm:mt-7 sm:text-sm sm:leading-7">
              Their connection is the center of a story built around trust,
              ambition, betrayal and survival.
            </p>
          </div>
        </div>
      </section>

      {/* =====================================================
          06 — LEONIDA
      ===================================================== */}

      <section className="leonida relative h-[72svh] min-h-[520px] overflow-hidden bg-black sm:h-[75vh] sm:min-h-[620px] lg:h-screen lg:min-h-[700px]">
        <Image
          src="/gallery/gtav.jpg"
          alt="Vice City"
          fill
          sizes="100vw"
          className="leonida-image object-cover object-center"
        />

        <div className="leonida-overlay absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/90" />

        <div className="leonida-copy relative z-10 flex h-full items-end px-5 pb-12 sm:px-10 sm:pb-20 md:px-14 lg:px-20 lg:pb-28">
          <div>
            

            
          </div>
        </div>
      </section>

      {/* =====================================================
          07 — VICE CITY
      ===================================================== */}

      <section className="vice-city relative min-h-[620px] overflow-hidden bg-[#15101e] sm:min-h-[720px] md:min-h-[800px] lg:min-h-[850px]">
        <Image
          src="/gallery/gtavicover.jpg"
          alt="Vice City at night"
          fill
          sizes="100vw"
          className="vice-city-image object-cover object-center"
        />

        <div className="vice-city-overlay absolute inset-0 bg-gradient-to-r from-[#09070d]/95 via-[#09070d]/45 to-transparent" />

        <div className="vice-city-copy relative z-10 flex min-h-[620px] items-center px-6 sm:min-h-[720px] sm:px-10 md:px-14 lg:min-h-[850px] lg:px-20">
          <div className="max-w-xl">
            

            
          </div>
        </div>
      </section>

      

      {/* =====================================================
          09 — BEACHES
      ===================================================== */}

      <section className="beaches relative overflow-hidden bg-[0#71017] py-20 sm:py-28 md:py-36">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 sm:gap-12 sm:px-8 md:px-10 lg:grid-cols-[1.3fr_0.7fr]">
          <div className="beaches-image relative aspect-[16/11] overflow-hidden rounded-[1.5rem] sm:rounded-[2rem]">
            <Image
              src="/gallery/gtaalbum.jpg"
              alt="GTA VI environment"
              fill
              sizes="(max-width: 1023px) 100vw, 65vw"
              className="object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
          </div>

          <div className="beaches-copy">
            <p className="text-[9px] font-bold uppercase tracking-[0.35em] text-fuchsia-300 sm:text-xs sm:tracking-[0.45em]">
              Ocean & beaches
            </p>

            <h2 className="mt-4 text-4xl font-normal sm:mt-5 sm:text-6xl md:text-7xl">
              Sun.
              <span className="block text-white/30">Sea.</span>
              <span className="block">Freedom.</span>
            </h2>

            <p className="mt-5 max-w-xl text-xs leading-7 text-white/55 sm:mt-7 sm:text-sm sm:leading-8 md:text-base">
              Beyond the city lies a huge coastal world filled with beaches,
              waterways, highways and places waiting to be discovered.
            </p>
          </div>
        </div>
      </section>

      {/* =====================================================
          10 — VINTAGE VICE CITY
      ===================================================== */}

      <section className="vehicles relative overflow-hidden bg-[#0d1013] py-20 sm:py-28 md:py-36 lg:py-40">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 sm:gap-12 sm:px-8 md:px-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="vehicle-image relative aspect-[16/10] overflow-hidden rounded-[1.5rem] bg-black sm:rounded-[2rem]">
            <Image
              src="/gallery/vintage.jpg"
              alt="GTA VI vehicle"
              fill
              sizes="(max-width: 1023px) 100vw, 60vw"
              className="object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-r from-black/0 to-transparent" />
          </div>

          <div className="vehicle-copy">
            <p className="text-[9px] font-bold uppercase tracking-[0.35em] text-yellow-300 sm:text-xs sm:tracking-[0.45em]">
              Vintage Vice City 
            </p>

            

            <h2 className="mt-5 text-4xl font-normal sm:mt-7 sm:text-6xl md:text-7xl">
              Back
              <span className="block text-white/30">vice city 80s</span>
            </h2>

            <p className="mt-5 text-xs leading-7 text-white/55 sm:mt-7 sm:text-sm sm:leading-8 md:text-base">
              Cars, bikes, boats and everything in between become part of your
              journey across Leonida.
            </p>

            <button className="mt-7 rounded-full border border-white/15 px-5 py-3 text-[9px] font-bold uppercase tracking-widest transition active:scale-95 sm:mt-9 sm:px-6 sm:text-xs">
              Discover the world
            </button>
          </div>
        </div>
      </section>

      
      {/* =====================================================
          12 — WILDLIFE
      ===================================================== */}

      <section className="wildlife relative min-h-[620px] overflow-hidden bg-black sm:min-h-[720px] md:min-h-[800px] lg:min-h-[850px]">
        <video
          className="wildlife-video absolute inset-0 h-full w-full object-cover object-center"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
        >
          <source src="/gallery/video4.mp4" type="video/mp4" />
        </video>

        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-black/40" />

        <div className="wildlife-copy relative z-10 flex min-h-[620px] items-end px-5 pb-12 sm:min-h-[720px] sm:px-10 sm:pb-20 md:px-14 lg:min-h-[850px] lg:px-20 lg:pb-28">
          <div className="max-w-3xl">
            <p className="text-[9px] font-bold uppercase tracking-[0.4em] text-emerald-300 sm:text-xs sm:tracking-[0.5em]">
              Beyond the city
            </p>

            <h2 className="mt-4 text-5xl font-black sm:mt-5 sm:text-7xl md:text-8xl">
              Wild
              <span className="block text-white/30">Leonida.</span>
            </h2>

            <p className="mt-5 max-w-[340px] text-xs leading-6 text-white/60 sm:mt-7 sm:max-w-xl sm:text-sm sm:leading-8 md:text-base">
              The world doesn't stop at the city limits. Explore remote
              roads, open landscapes and places far away from the neon lights.
            </p>
          </div>
        </div>
      </section>

      {/* =====================================================
          13 — ULTIMATE EDITION
      ===================================================== */}

      <section className="ultimate relative overflow-hidden bg-[#160c1d] px-5 py-24 sm:px-8 sm:py-32 md:px-10 md:py-44">
        <div className="ultimate-glow pointer-events-none absolute left-1/2 top-1/2 h-[350px] w-[350px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-fuchsia-500/20 blur-[100px] sm:h-[600px] sm:w-[600px] sm:blur-[160px]" />

        <div className="ultimate-card relative mx-auto max-w-5xl overflow-hidden rounded-[1.5rem] border border-white/10 bg-gradient-to-br from-[#35163f] via-[#17101d] to-[#08080c] p-6 shadow-2xl sm:rounded-[2rem] sm:p-10 md:p-14">
          <div className="absolute right-0 top-0 h-48 w-48 rounded-full bg-fuchsia-400/10 blur-[80px] sm:h-64 sm:w-64 sm:blur-[100px]" />

          <div className="relative z-10">
            <p className="text-[9px] font-bold uppercase tracking-[0.35em] text-fuchsia-300 sm:text-xs sm:tracking-[0.45em]">
              The ultimate experience
            </p>

            <h2 className="mt-4 max-w-3xl text-4xl font-black sm:mt-5 sm:text-6xl md:text-7xl">
              Grand Theft Auto
              <span className="block text-fuchsia-300">VI</span>
            </h2>

            <p className="mt-5 max-w-2xl text-xs leading-7 text-white/55 sm:mt-7 sm:text-sm sm:leading-8 md:text-base">
              Step into a world built around freedom, exploration, story and
              unforgettable characters.
            </p>

            <div className="mt-7 grid gap-2 sm:mt-10 sm:grid-cols-3 sm:gap-3">
              {["Leonida", "Vice City", "Jason & Lucia"].map((item) => (
                <div
                  key={item}
                  className="rounded-xl border border-white/10 bg-black/20 p-4 sm:rounded-2xl sm:p-5"
                >
                  <p className="text-xs font-bold sm:text-sm">{item}</p>

                  <p className="mt-1.5 text-[9px] text-white/35 sm:mt-2 sm:text-xs">
                    Included experience
                  </p>
                </div>
              ))}
            </div>

            <button className="mt-7 rounded-full bg-white px-6 py-3 text-xs font-bold text-black transition active:scale-95 sm:mt-10 sm:px-7 sm:text-sm">
              Learn more
            </button>
          </div>
        </div>
      </section>


      

      

      {/* =====================================================
          17 — FINAL CTA
      ===================================================== */}

      <section className="final-section relative h-[72svh] min-h-[550px] overflow-hidden bg-black sm:h-[75vh] sm:min-h-[620px] lg:h-[85vh] lg:min-h-[650px]">
        <Image
          src="/gallery/gtavicover.jpg"
          alt="Grand Theft Auto VI"
          fill
          sizes="100vw"
          className="final-background object-cover object-center"
        />

        <div className="final-overlay absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/20" />

        <div className="final-copy relative z-10 flex h-full items-center justify-center px-5 text-center">
          <div>
            <p className="text-[9px] font-bold uppercase tracking-[0.4em] text-white/50 sm:text-xs sm:tracking-[0.5em]">
              Grand Theft Auto VI
            </p>

            <h2 className="mt-4 text-[32vw] font-black leading-[0.7] tracking-[-0.1em] sm:mt-5 sm:text-[20vw] md:text-[15vw] lg:text-[11rem]">
              VI
            </h2>

            <p className="mx-auto mt-6 max-w-[340px] text-xs leading-6 text-white/55 sm:mt-8 sm:max-w-xl sm:text-sm sm:leading-7 md:text-base">
              The story of Jason and Lucia. The world of Leonida. The next
              chapter of Grand Theft Auto.
            </p>

            <div className="mt-7 flex flex-col justify-center gap-2.5 sm:mt-9 sm:flex-row sm:gap-3">
              <Link
                href="/"
                className="rounded-full bg-white px-7 py-3 text-xs font-bold text-black transition active:scale-95 sm:text-sm"
              >
                Rockstar Games
              </Link>

              <a
                href="#explore"
                className="rounded-full border border-white/20 bg-black/20 px-7 py-3 text-xs font-bold backdrop-blur-md transition active:scale-95 sm:text-sm"
              >
                Back to top
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          18 — FOOTER
      ===================================================== */}

      <footer className="border-t border-white/10 bg-[#050608] px-5 py-12 sm:px-8 sm:py-16">
        <div className="mx-auto flex max-w-7xl flex-col gap-8 sm:gap-10 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-2xl font-black tracking-tighter sm:text-3xl">
              ROCKSTAR
            </p>

            <p className="mt-3 max-w-md text-[10px] leading-5 text-white/30 sm:text-xs sm:leading-6">
              Grand Theft Auto VI fan-made interface concept. This page is
              designed for educational and visual development purposes.
            </p>
          </div>

          <div className="flex flex-wrap gap-4 text-[9px] font-bold uppercase tracking-widest text-white/35 sm:gap-6 sm:text-xs">
            <a href="#" className="transition hover:text-white">
              Rockstar
            </a>

            <a href="#" className="transition hover:text-white">
              GTA VI
            </a>

            <a href="#" className="transition hover:text-white">
              Privacy
            </a>

            <a href="#" className="transition hover:text-white">
              Legal
            </a>
          </div>
        </div>

        <div className="mx-auto mt-9 max-w-7xl border-t border-white/5 pt-5 sm:mt-12 sm:pt-6">
          <p className="text-[8px] uppercase tracking-[0.25em] text-white/20 sm:text-[10px] sm:tracking-[0.3em]">
            © {new Date().getFullYear()} — Fan-made concept
          </p>
        </div>
      </footer>
    </main>
  );
}