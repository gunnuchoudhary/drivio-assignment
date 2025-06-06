import React, { useCallback, useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';

const testimonials = [
  {
    name: 'Vishal',
    location: 'Gurgaon',
    message:
      'It was a great experience to deal with DrivioTech team. Loved the experience, highly recommended, very good customer service. Thank You team DrivioTech',
    image: 'https://webapi.drivio.in/uploads/Vishal.jpeg?w=720&q=70',
  },
  {
    name: 'Suryakumar',
    location: 'Lajpat Nagar',
    message:
      'Loved the experience, very helpful team. Every process explained very nicely, loan was disbursed quickly.',
    image: 'https://webapi.drivio.in/uploads/Suryakumar.jpeg?w=720&q=70',
  },
  {
    name: 'Ram Niwas',
    location: 'Gurgaon',
    message:
      'Smooth loan process, minimum documentation. Very competitive rates, best monthly EMI and no hidden charges.',
    image: 'https://webapi.drivio.in/uploads/RamNiwas.jpeg?w=720&q=70',
  },
  {
    name: 'Rajat',
    location: 'South Delhi',
    message:
      'Quick disbursement process, best offers, very good customer service. Took loan for the first time and it was a very easy process.',
    image: 'https://webapi.drivio.in/uploads/Rajat.jpeg?w=720&q=70',
  },
];

const TestimonialSlider = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollTo = useCallback((index) => emblaApi?.scrollTo(index), [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap());
    emblaApi.on('select', onSelect);
    onSelect();
  }, [emblaApi]);

  return (
    <section className="w-full overflow-hidden px-4 md:px-8 lg:px-12 py-5">
      <div className="embla overflow-hidden" ref={emblaRef}>
        <div className="flex w-full">
          {testimonials.map((t, index) => (
            <div className="flex-shrink-0 w-full px-2 md:px-6" key={index}>
              <article className="bg-[#F3F3F3] rounded-2xl p-6 md:p-10 flex flex-col md:flex-row items-center gap-6 md:gap-16">
                <div className="md:w-7/12">
                  <p className="text-xl font-medium text-gray-800">
                    Meet <span className="text-green-600 font-bold">{t.name}</span>
                  </p>
                  <p className="text-sm text-gray-500 mb-2">Resident of {t.location}</p>
                  <p className="text-gray-800 text-sm md:text-base leading-relaxed">{t.message}</p>
                </div>
                <img
                  src={t.image}
                  alt={t.name}
                  className="md:w-48 md:h-48 w-32 h-32 rounded-full border-2 border-green-600 object-cover"
                />
              </article>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-center gap-2 mt-4">
        {testimonials.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full ${
              selectedIndex === index ? 'bg-black' : 'bg-gray-300'
            }`}
            onClick={() => scrollTo(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default TestimonialSlider;
