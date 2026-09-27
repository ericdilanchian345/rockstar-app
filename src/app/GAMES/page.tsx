import { desc } from "framer-motion/client";

export default function Games() {
  const news = [
    {
      title: "GRAND THEFT AUTO VI ",
      img: "/gallery/gtavicover.jpg",
    },
    {
      title: "RED DEAD REDEMPTION II ",
      img: "/gallery/images5.jpg",
    },

    {
      title: "Grand Theft Auto V",

      img: "/gallery/images13.jpg",
    },
    {
      title: "LA.Noire",
      img: "/gallery/images8.jpg",
    },
    {
      title: "MAX PAYNE 3",
      img: "/gallery/images9.jpg",
    },
    {
      title: "GTA III",
      img: "/gallery/gta3.jpg",
    },
    {
      title: "Grand Theft Auto: The Ballad Of Gay Tony",
      img: "/gallery/images10.jpg",
    },
    {
      title: "GTA IV",
      img: "/gallery/gtaiv.jpg",
    },
    {
      title: "Grand Theft Auto IV: The Lost and Damned",
      img: "/gallery/images11.jpg",
    },
    {
      title: "Red Dead Redemption",
      img: "/gallery/images14.jpg",
    },
    {
      title: "Red Dead Redemption Undead Nightmare",
      img: "/gallery/images15.jpg",
    },
    {
      title: "Bully: Scholarship Edition",
      img: "/gallery/images16.jpg",
    },
  ];

  return (
    <section className="w-full py-20 bg-black">
      <div className="max-w-7xl mx-auto lg:px-1 px-5 md:px-50">
        {/* عنوان بخش */}
        <h2 className="text-4xl font-bold text-white mb-10 tracking-wide">
          Games
        </h2>

        {/* کارت‌ها */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {news.map((item, i) => (
            <div key={i}>
              {/* عکس بالا */}
              <div className="w-full h-50 overflow-hidden">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* بخش متن زیر عکس */}
              <div className="p-5 flex flex-col space-y-2">
                <h3 className="text-xl text-white font-bold leading-tight">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
