import React from "react";

const cardsData = [
  {
    imgSrc: "https://img-drivio.gumlet.io/blog/blog-1745844678612.webp?w=1280&q=70",
    imgAlt: "How to Choose the Perfect Two-Wheeler Bike or Scooty for You in 2025:",
    date: "28 Apr 2025",
    title: "How to Choose the Perfect Two-Wheeler Bike or Scooty for You in 2025",
  },
  {
    imgSrc: "https://img-drivio.gumlet.io/images/fuelprice.webp?w=1280&q=70",
    imgAlt: "Today Fuel Price: Wondering about today petrol price in India",
    date: "5 May 2025",
    title: "Today Fuel Price: Wondering about today petrol price in India",
  },
  {
    imgSrc: "https://img-drivio.gumlet.io/blog/blog-1745830204572.webp?w=1280&q=70",
    imgAlt: "2025 Royal Enfield Hunter 350 Review: Price, Mileage, Features & Why It's India's",
    date: "28 Apr 2025",
    title: "2025 Royal Enfield Hunter 350 Review: Price, Mileage, Features & Why It's India's",
  },
  {
    imgSrc: "https://img-drivio.gumlet.io/blog/blog-1745825485818.webp?w=1280&q=70",
    imgAlt: "2025 Hero HF100 OBD-2B Launched in India: Price, Mileage & Key Features",
    date: "28 Apr 2025",
    title: "2025 Hero HF100 OBD-2B Launched in India: Price, Mileage & Key Features",
  },
];

const CardsSection = () => {
  return (
    <section className="bg-white py-8 px-4 md:px-12 lg:px-20 flex flex-col items-center">
      <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold mb-4 text-center">
        Know More &amp; <i className="font-bold text-green-600">Decide Wisely</i>
      </h2>

      <div className="flex gap-7 overflow-x-auto w-full scroll-smooth snap-x snap-mandatory">
        {cardsData.map(({ imgSrc, imgAlt, date, title }, idx) => (
          <a
            key={idx}
            href="/"
            className="shrink-0 w-40 md:w-60 lg:w-64 rounded-2xl border border-gray-200 overflow-hidden snap-start transition-transform duration-300 hover:shadow-lg"
          >
            <div className="w-full rounded-t-2xl overflow-hidden aspect-[4/3] md:aspect-[16/9] lg:aspect-[4/3]">
              <img
                src={imgSrc}
                alt={imgAlt}
                loading="lazy"
                className="w-full h-full "
              />
            </div>

            <div className="p-3 md:p-4 bg-white">
              <p className="text-gray-500 text-xs md:text-sm">{date}</p>
              <h3 className="text-gray-800 text-sm md:text-base font-medium line-clamp-3">
                {title}
              </h3>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default CardsSection;
