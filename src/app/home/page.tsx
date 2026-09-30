"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import ScrollVideo from "@/components/ScrollVideo";

/* HERO SLIDES */
interface HeroSlide {
  desktop: string;
  tablet: string;
  mobile: string;
  fallback: string;
  title: string;
  description: string;
  button: string;
  link?: string;
}

const heroSlides: HeroSlide[] = [
  {
    desktop: "/gallery/gtaalbum.jpg",
    tablet: "/gallery/gtaalbumtablet.jpg",
    mobile: "/gallery/gtaalbummobile.jpg",
    fallback: "/gallery/.jpg",
    title: "Grand Theft Auto VI",
    description: "Welcome To Leonida",
    button: "Pre-Order Now",
  },
  {
    desktop: "/gallery/jason.lucia.jpg",
    tablet: "/gallery/jason.luciatablet.jpg",
    mobile: "/gallery/jason.luciamobile.jpg",
    fallback: "/gallery/.jpg",
    title: "Grand Theft Auto VI",
    description: "An Extended Look",
    button: "Explore GTA VI",
    link: "/gta-vi",
  },
  {
    desktop: "/gallery/reddead2desktop.jpg",
    tablet: "/gallery/reddead2tablet.jpg",
    mobile: "/gallery/reddead2.mobile.jpg",
    fallback: "/gallery/.jpg",
    title: "Red Dead Redemption II",
    description: "America, 1899",
    button: "Explore Red Dead",
  },
  {
    desktop: "/gallery/vicecitygirl.jpg",
    tablet: "/gallery/vicecitygirl.jpg",
    mobile: "/gallery/vicecitygirl.jpg",
    fallback: "/gallery/.jpg",
    title: "Grand Theft Auto: Vice City",
    description: "Welcome to Vice City",
    button: "Discover More",
  },
];

/* GTA GAMES */
const gtaGames = [
  {
    image: "/gallery/gtavicover.jpg",
    title: "Grand Theft Auto VI",
    description: "An extended look at GTA VI.",
  },
  {
    image: "/gallery/images5.jpg",
    title: "Grand Theft Auto V",
    description: "Welcome to Los Santos.",
  },
  {
    image: "/gallery/images12.jpg",
    title: "Grand Theft Auto: Vice City",
    description: "Welcome to Vice City.",
  },
  {
    image: "/gallery/images1.jpg",
    title: "Grand Theft Auto IV",
    description: "Welcome to Liberty City.",
  },
];

/* RED DEAD GAMES */
const redDeadGames = [
  {
    image: "/gallery/reddeadonline1.jpg",
  },
  {
    image: "/gallery/reddeadonline2.jpg",
  },
  {
    image: "/gallery/reddeadonline3.jpg",
  },
  {
    image: "/gallery/reddeadonline4.jpg",
  },
];

/* GAME LIBRARY */
const libraryGames = [
  {
    image: "/gallery/images12.jpg",
    title: "GRAND THEFT AUTO VICE CITY",
  },
  {
    image: "/gallery/images5.jpg",
    title: "RED DEAD REDEMPTION II",
  },
  {
    image: "/gallery/gtavicover.jpg",
    title: "Grand Theft Auto VI",
  },
  {
    image: "/gallery/images1.jpg",
    title: "GRAND THEFT AUTO IV",
  },
  {
    image: "/gallery/gtav.jpg",
    title: "Grand Theft Auto Online",
  },
  {
    image: "/gallery/jason.lucia.jpg",
    title: "Grand Theft Auto VI",
  },
];

export default function Home() {
  const [heroIndex, setHeroIndex] = useState(0);
  const [heroAnimating, setHeroAnimating] = useState(true);
  const [newsletterOpen, setNewsletterOpen] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setHeroAnimating(false);

      setTimeout(() => {
        setHeroIndex((previous) => {
          return (previous + 1) % heroSlides.length;
        });

        setHeroAnimating(true);
      }, 350);
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const changeHero = (index: number) => {
    if (index === heroIndex) return;

    setHeroAnimating(false);

    setTimeout(() => {
      setHeroIndex(index);
      setHeroAnimating(true);
    }, 350);
  };

  const currentHero = heroSlides[heroIndex];

  return (
    <main className="min-h-screen overflow-hidden bg-black text-white">
      {/* HERO */}
      <section className="relative h-[620px] w-full overflow-hidden sm:h-[680px] md:h-screen">
        {heroSlides.map((slide, index) => (
          <div
            key={`${slide.title}-${index}`}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === heroIndex ? "z-10 opacity-100" : "z-0 opacity-0"
            }`}
          >
            <picture className="absolute inset-0 block">
              <source media="(max-width: 639px)" srcSet={slide.mobile} />

              <source media="(max-width: 1023px)" srcSet={slide.tablet} />

              <source media="(min-width: 1024px)" srcSet={slide.desktop} />

              <Image
                src={slide.fallback}
                alt={slide.title}
                fill
                priority={index === 0}
                sizes="100vw"
                className="object-cover object-center"
              />
            </picture>

            <div className="absolute inset-0 bg-black/10" />

            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/10" />
          </div>
        ))}

        <div className="absolute left-0 top-0 z-50 w-full">
          <Navbar />
        </div>

        <div className="absolute inset-0 z-20 flex items-end justify-center px-5 pb-24 text-center sm:pb-28 md:pb-32">
          <div
            className={`w-full max-w-3xl transition-all duration-700 ${
              heroAnimating
                ? "translate-y-0 scale-100 opacity-100 blur-0"
                : "-translate-y-8 scale-95 opacity-0 blur-sm"
            }`}
          >
            <h1 className="text-2xl font-medium uppercase tracking-tight sm:text-4xl md:text-3xl">
              {currentHero.title}
            </h1>

            <p className="mt-3 text-base font-medium text-white/80 sm:text-lg md:mt-2 md:text-2xl">
              {currentHero.description}
            </p>

            <div className="mt-5 flex flex-wrap justify-center gap-2 sm:mt-5 sm:gap-3">
              {currentHero.link ? (
                <Link
                  href={currentHero.link}
                  className="inline-flex rounded-full bg-white px-5 py-2.5 text-xs font-bold text-black transition duration-300 hover:scale-105 hover:bg-zinc-200 sm:px-7 sm:py-3 sm:text-sm"
                >
                  {currentHero.button}
                </Link>
              ) : (
                <button className="rounded-full bg-white px-5 py-2.5 text-xs font-bold text-black transition duration-300 hover:scale-105 hover:bg-zinc-200 sm:px-7 sm:py-3 sm:text-sm">
                  {currentHero.button}
                </button>
              )}

              <button className="rounded-full border border-white/70 bg-black/30 px-5 py-2.5 text-xs font-bold backdrop-blur-md transition hover:bg-white hover:text-black sm:px-7 sm:py-3 sm:text-sm">
                Watch Trailer
              </button>
            </div>
          </div>
        </div>

        <div className="absolute bottom-7 left-1/2 z-30 flex -translate-x-1/2 items-center gap-2">
          {heroSlides.map((slide, index) => (
            <button
              key={`${slide.title}-indicator-${index}`}
              onClick={() => changeHero(index)}
              aria-label={`Go to slide ${index + 1}`}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                index === heroIndex
                  ? "w-10 bg-white"
                  : "w-5 bg-white/40 hover:bg-white/70"
              }`}
            />
          ))}
        </div>
      </section>

      {/* GTA VI FEATURE */}
      <section className="bg-black px-5 py-16 md:px-10 md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-6 lg:grid-cols-[1.6fr_0.8fr]">
            <div className="group overflow-hidden bg-zinc-950">
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src="/gallery/jason.lucia.jpg"
                  alt="Grand Theft Auto VI"
                  fill
                  sizes="(max-width: 1024px) 100vw, 65vw"
                  className="object-cover transition duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent" />

                <div className="absolute bottom-0 left-0 p-6 md:p-10">
                  <p className="mb-2 text-xs font-bold uppercase tracking-[0.3em] text-white/60">
                    Now Playing
                  </p>

                  <h2 className="text-2xl font-black md:text-4xl">
                    Grand Theft Auto VI
                  </h2>

                  <p className="mt-2 max-w-xl text-sm text-white/70 md:text-base">
                    An extended look at the next generation of open-world
                    storytelling.
                  </p>

                  <button className="mt-5 rounded-full bg-white px-5 py-2 text-xs font-bold text-black transition hover:bg-zinc-200">
                    Read More
                  </button>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <div className="mb-2 flex items-center justify-between">
                <h3 className="text-sm font-bold uppercase tracking-[0.25em]">
                  Latest News
                </h3>

                <button className="text-xs text-white/40 transition hover:text-white">
                  View All
                </button>
              </div>

              {gtaGames.map((game, index) => (
                <div
                  key={game.title}
                  className="group flex min-h-[90px] overflow-hidden bg-zinc-950 transition hover:bg-zinc-900"
                >
                  <div className="relative w-28 shrink-0 overflow-hidden md:w-36">
                    <Image
                      src={game.image}
                      alt={game.title}
                      fill
                      sizes="150px"
                      className="object-cover transition duration-500 group-hover:scale-110"
                    />
                  </div>

                  <div className="flex flex-1 flex-col justify-center px-4">
                    <span className="mb-1 text-[10px] uppercase tracking-widest text-white/40">
                      {index === 0 ? "Featured" : "News"}
                    </span>

                    <h4 className="text-sm font-bold">{game.title}</h4>

                    <p className="mt-1 text-xs text-white/50">
                      {game.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* GTA ONLINE */}
      <section className="bg-black">
        <div className="relative h-[700px] w-full overflow-hidden md:h-[1000px]">
<ScrollVideo
  src="/gallery/video3.mp4"
  className="absolute inset-0 h-full w-full object-cover object-center"
  />

          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent" />

          <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent" />

          <div className="absolute bottom-14 left-6 max-w-xl md:bottom-20 md:left-16">
            <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/70">
              Grand Theft Auto V
            </p>

            <h2 className="mt-1 text-2xl font-black uppercase md:text-4xl">
              Online
            </h2>

            <p className="mt-4 max-w-lg text-sm leading-5 text-white/75 md:text-base">
              Explore a constantly evolving world filled with action, adventure,
              competition and unforgettable characters.
            </p>

            <button className="mt-6 rounded-full bg-white px-6 py-3 text-xs font-bold uppercase text-black transition hover:bg-zinc-200">
              Explore GTA Online
            </button>
          </div>
        </div>

        <div className="mx-auto max-w-7xl px-5 py-14 md:px-10 md:py-20">
          <div className="mb-8 flex items-end justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-white/40">
                Jump into
              </p>

              <h3 className="mt-2 text-3xl font-black">GTA Online</h3>
            </div>

            <button className="hidden rounded-full border border-white/20 px-5 py-2 text-xs transition hover:bg-white hover:text-black md:block">
              View All
            </button>
          </div>

          <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
            {gtaGames.map((game) => (
              <div
                key={game.title}
                className="group relative aspect-[3/4] overflow-hidden"
              >
                <Image
                  src={game.image}
                  alt={game.title}
                  fill
                  sizes="(max-width: 768px) 50vw, 25vw"
                  className="object-cover transition duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />

                <div className="absolute bottom-0 left-0 p-4">
                  <h4 className="text-sm font-bold md:text-base">
                    {game.title}
                  </h4>

                  <button className="mt-2 rounded-full bg-white px-3 py-1 text-[10px] font-bold text-black">
                    Learn More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RED DEAD */}
      <section className="bg-black">
        <div className="relative h-[700px] w-full overflow-hidden md:h-[1000px]">
<ScrollVideo
  src="/gallery/video4.mp4"
  className="absolute inset-0 h-full w-full object-cover object-center"
  />

          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent" />

          <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent" />

          <div className="absolute bottom-14 left-6 max-w-xl md:bottom-20 md:left-16">
            <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/70">
              RED DEAD REDEMPTION II
            </p>

            <h2 className="mt-1 text-2xl font-black uppercase md:text-4xl">
              ONLINE
            </h2>

            <button className="mt-6 rounded-full bg-white px-6 py-3 text-xs font-bold uppercase text-black transition hover:bg-zinc-200">
              Explore RED Online
            </button>
          </div>
        </div>

        <div className="mx-auto max-w-7xl px-5 py-14 md:px-10 md:py-20">
          <p className="text-xs uppercase tracking-[0.3em] text-white/40">
            Jump into
          </p>

          <h3 className="mb-8 mt-2 text-3xl font-black">Red Dead Online</h3>

          {/* RED DEAD CARDS */}
          <div className="grid grid-cols-2 gap-2 md:grid-cols-4">
            {redDeadGames.map((game) => (
              <div
                key={game.image}
                className="group relative aspect-[3/4] overflow-hidden"
              >
                <Image
                  src={game.image}
                  alt="Red Dead Online"
                  fill
                  sizes="(max-width: 768px) 50vw, 25vw"
                  className="object-cover transition duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GAME LIBRARY */}
      <section className="overflow-hidden bg-black py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-5 md:px-10">
          <div className="mb-10 max-w-xl">
            <p className="text-xs uppercase tracking-[0.3em] text-white/40">
              Explore
            </p>

            <h2 className="mt-2 text-4xl font-black md:text-5xl">
              Game Library
            </h2>

            <p className="mt-4 text-sm leading-6 text-white/50">
              Discover legendary worlds, unforgettable characters and some of
              the most influential games ever created.
            </p>
          </div>
        </div>

        <div className="relative w-full overflow-hidden">
          <div className="pointer-events-none absolute left-0 top-0 z-20 h-full w-20 bg-gradient-to-r from-black to-transparent md:w-40" />

          <div className="pointer-events-none absolute right-0 top-0 z-20 h-full w-20 bg-gradient-to-l from-black to-transparent md:w-40" />

          <div className="game-library-track flex w-max gap-4">
            {[...libraryGames, ...libraryGames].map((game, index) => (
              <div
                key={`${game.title}-${index}`}
                className="group relative h-[250px] w-[300px] shrink-0 overflow-hidden bg-zinc-900 sm:h-[520px] sm:w-[660px] md:h-[580px] md:w-[900px]"
              >
                <Image
                  src={game.image}
                  alt={game.title}
                  fill
                  sizes="320px"
                  className="object-cover transition duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent" />

                <div className="absolute bottom-0 left-0 w-full p-5">
                  <h3 className="text-lg font-black uppercase md:text-xl">
                    {game.title}
                  </h3>

                  <button className="mt-3 rounded-full bg-white px-4 py-2 text-[10px] font-bold uppercase text-black opacity-0 transition-all duration-300 group-hover:opacity-100">
                    Explore
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10 flex justify-center">
          <button className="rounded-full border border-white/20 px-7 py-3 text-xs font-bold uppercase transition hover:bg-white hover:text-black">
            View Game Library
          </button>
        </div>
      </section>

      {/* STORE */}
      <section className="bg-zinc-950 px-5 py-16 md:px-10 md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 flex items-end justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-white/40">
                Rockstar Games
              </p>

              <h2 className="mt-2 text-4xl font-black">Store</h2>
            </div>

            <button className="hidden rounded-full border border-white/20 px-5 py-2 text-xs transition hover:bg-white hover:text-black md:block">
              Visit Store
            </button>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <div className="group relative min-h-[420px] overflow-hidden bg-black">
              <Image
                src="/gallery/gtav.jpg"
                alt="Rockstar Store"
                fill
                sizes="50vw"
                className="object-cover opacity-80 transition duration-700 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />

              <div className="absolute bottom-8 left-8">
                <p className="text-xs uppercase tracking-widest text-white/50">
                  Official Merchandise
                </p>

                <h3 className="mt-2 text-3xl font-black">
                  Rockstar Collection
                </h3>

                <button className="mt-5 rounded-full bg-white px-5 py-2 text-xs font-bold text-black">
                  Shop Now
                </button>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[
                "/gallery/images2.jpg",
                "/gallery/images5.jpg",
                "/gallery/images12.jpg",
                "/gallery/images1.jpg",
              ].map((image, index) => (
                <div
                  key={image}
                  className="group relative min-h-[200px] overflow-hidden bg-zinc-900"
                >
                  <Image
                    src={image}
                    alt={`Rockstar product ${index + 1}`}
                    fill
                    sizes="25vw"
                    className="object-cover transition duration-500 group-hover:scale-110"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ROCKSTAR PROPAGANDA */}
      <section className="bg-black px-5 py-20 md:px-10 md:py-28">
        <div className="mx-auto grid max-w-5xl items-center gap-10 md:grid-cols-2">
          <div>
            <h2 className="text-4xl font-black leading-none md:text-6xl">
              Rockstar
              <br />
              Propaganda
            </h2>
          </div>

          <div>
            <p className="text-xl font-bold">Subscribe to the Newsletter</p>

            <p className="mt-4 max-w-md text-sm leading-6 text-white/50">
              Get the latest news, announcements, special offers and updates
              from Rockstar Games delivered straight to your inbox.
            </p>

            <button
              onClick={() => setNewsletterOpen(true)}
              className="mt-6 rounded-full bg-white px-6 py-3 text-xs font-bold uppercase text-black transition hover:bg-zinc-200"
            >
              Subscribe
            </button>
          </div>
        </div>

        <div className="mx-auto mt-16 max-w-5xl overflow-hidden">
          <div className="flex h-40 items-center justify-center bg-gradient-to-r from-red-950 via-red-600 to-black">
            <span className="text-xl font-black uppercase tracking-[0.3em] md:text-4xl">
              Rockstar Games
            </span>
          </div>
        </div>
      </section>

      {/* NEWSLETTER MODAL */}
      {newsletterOpen && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 px-5 backdrop-blur-md"
          onClick={() => setNewsletterOpen(false)}
        >
          <div
            className="w-full max-w-lg bg-zinc-950 p-8 shadow-2xl md:p-10"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex items-center justify-between">
              <h3 className="text-2xl font-black">Subscribe</h3>

              <button
                onClick={() => setNewsletterOpen(false)}
                className="text-2xl text-white/50 transition hover:text-white"
                aria-label="Close"
              >
                ×
              </button>
            </div>

            <p className="mt-4 text-sm leading-6 text-white/50">
              Subscribe to receive the latest Rockstar Games news and
              announcements.
            </p>

            <input
              type="email"
              placeholder="Email address"
              className="mt-6 w-full border border-white/20 bg-black px-4 py-3 text-sm outline-none transition focus:border-white"
            />

            <button className="mt-4 w-full rounded-full bg-white py-3 text-xs font-bold uppercase text-black transition hover:bg-zinc-200">
              Subscribe
            </button>
          </div>
        </div>
      )}

      {/* SUPPORT */}
      <section className="relative overflow-hidden border-t border-white/10 bg-zinc-950 px-5 py-24 text-center md:py-52">
        <div className="absolute inset-0 opacity-15">
          <Image
            src="/gallery/images2.jpg"
            alt=""
            fill
            sizes="100vw"
            className="object-cover grayscale"
          />
        </div>

        <div className="relative z-10">
          <p className="text-xs font-bold uppercase tracking-[0.4em] text-white">
            Rockstar Games
          </p>

          <h2 className="mt-4 text-5xl font-black md:text-7xl">Support</h2>

          <p className="mx-auto mt-5 max-w-lg text-sm leading-6 text-white/50">
            Need help with one of our games or services? Visit Rockstar Support
            for assistance.
          </p>

          <button className="mt-7 rounded-full bg-white px-7 py-3 text-xs font-bold uppercase text-black transition hover:bg-zinc-200">
            Visit Support
          </button>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/10 bg-black px-5 py-10 md:px-10">
        <div className="mx-auto flex max-w-7xl flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-lg font-black">ROCKSTAR</p>

            <p className="mt-1 text-xs text-white/40">Games</p>
          </div>

          <div className="flex flex-wrap gap-5 text-xs text-white/50">
            <a href="#" className="transition hover:text-white">
              Privacy
            </a>

            <a href="#" className="transition hover:text-white">
              Terms
            </a>

            <a href="#" className="transition hover:text-white">
              Cookies
            </a>

            <a href="#" className="transition hover:text-white">
              Contact
            </a>
          </div>

          <p className="text-xs text-white/30">© 2026 Rockstar Games</p>
        </div>
      </footer>
    </main>
  );
}
