import Link from "next/link";

export default function LatestNews() {
  const news = [
    {
      title: "EXTENDED LOOK ON NETFLIX",
      desc: "GAMEPLAY",
      img: "/gallery/jason.lucia.jpg",
      slug: "gta-6-release",
    },

{
      title: "GRAND THEFT AUTO VI",
      desc: "Is Now Set to Launch November 19, 2026",
      img: "/gallery/gtav.jpg",
      slug: "gta-6-release",
    },

    {
      title: "GTA VI – Official Trailer 2 Release",
      desc: "WELCOME TO LEONIDA",
      img: "/gallery/images2.jpg",
      slug: "gta-6-trailer-2",
    },
    {
      title: "RED DEAD REDEMPTION II – PC Update",
      desc: "Major technical improvements and expanded features now available for PC players.",
      img: "/gallery/images5.jpg",
      slug: "rdr2-pc-update",
    },
  ];

  return (
    <section className="w-full py-20 bg-black">
      <div className="max-w-7xl mx-auto lg:px-1 px-5 md:px-50">

        <h2 className="text-4xl font-bold text-white mb-5 tracking-wide">
          Latest News
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {news.map((item, i) => (
            <div
              key={i}
              className="bg-neutral-900 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
            >
              <div className="w-full h-56 overflow-hidden">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="p-5 flex flex-col space-y-3">
                <h3 className="text-xl text-white font-bold leading-tight">
                  {item.title}
                </h3>

                <p className="text-gray-300 text-sm leading-relaxed">
                  {item.desc}
                </p>

                <Link href={`/news/${item.slug}`}>
                  <button className="mt-2 w-fit px-4 py-1.5 text-xs font-semibold bg-yellow-500 text-black rounded-sm hover:bg-yellow-400 transition">
                    READ MORE
                  </button>
                </Link>

              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}