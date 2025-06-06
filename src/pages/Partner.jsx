import React from 'react';

const partnersList = [
  { alt: 'IDFC First Bank', src: 'https://img-drivio.gumlet.io/images/partners/IDFC.jpg?w=256&q=70' },
  { alt: 'Moneyplus Financial Services Pvt. Ltd', src: 'https://img-drivio.gumlet.io/images/partners/moneyPlus.jpg?w=256&q=70' },
  { alt: 'L&T Financial Services', src: 'https://img-drivio.gumlet.io/images/partners/l&t.jpg?w=256&q=70' },
  { alt: 'HDB Financial Services', src: 'https://img-drivio.gumlet.io/images/partners/HDB.jpg?w=256&q=70' },
  { alt: 'Arthmate', src: 'https://img-drivio.gumlet.io/images/partners/Arthmate.png?w=256&q=70' },
  { alt: 'Bajaj Auto Credit', src: 'https://img-drivio.gumlet.io/website/banking-partners/tile-images/bajaj-credit-v2.webp?w=256&q=70' },
];

const Partners = () => {
  return (
    <div className="bg-white w-full py-5 md:px-12 lg:px-20 text-center">
      <h2 className="text-lg md:text-2xl lg:text-3xl text-body mb-2">
        Our <i className="font-bold text-green-600">Partners</i>
      </h2>

      {/* Logos */}
      <div className="flex  justify-between flex-wrap">
        {partnersList.map(({ src, alt }, idx) => (
          <img
            key={idx}
            src={src}
            alt={alt}
            title={alt}
            className=" w-[50px] h-[60px] md:w-[100px] md:h-[120px] lg:w-[120px] lg:h-[120px] object-contain"
          />
        ))}
      </div>
    </div>
  );
};

export default Partners;
