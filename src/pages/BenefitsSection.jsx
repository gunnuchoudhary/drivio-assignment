import React from 'react';

const BenefitsSection = () => {
  const benefits = [
    {
      id: 1,
      title: 'Lowest EMI',
      icon: '/images/img_container_blue_gray_900.svg',
    },
    {
      id: 2,
      title: 'Multiple Options',
      icon: '/images/img_container_blue_gray_900_60x60.svg',
    },
    {
      id: 3,
      title: 'Best Interest Rates',
      icon: '/images/img_container_60x60.svg',
    },
    {
      id: 4,
      title: 'Fast Process',
      icon: '/images/img_container_1.svg',
    }
  ];

  return (
    <section className="bg-white py-5 px-4 sm:px-8 md:px-12 lg:px-16">
      <div className="bg-gray-100 rounded-2xl py-5 px-6 sm:px-8 md:px-10 lg:px-12">
        <div className="text-center mb-8 sm:mb-10">
          <h2 className="text-xl lg:text-4xl font-bold mb-2">
            Drivio <i className="text-green-600">Benefits</i>
          </h2>
          <p className="text-xs lg:text-sm max-w-l mx-auto leading-relaxed">
            Drivio - India's largest tech-enabled omni-channel Two-wheeler financing platform provides the best finance options to
            <span className="block">two-wheeler buyers.</span>
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
          {benefits.map((benefit) => (
            <div key={benefit.id} className="text-center">
              <img
                src={benefit.icon}
                alt={benefit.title}
                className="w-12 h-12 lg:w-16 lg:h-16 mx-auto mb-2"
              />
              <h3 className="text-xs sm:text-sm font-semibold capitalize">
                {benefit.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
