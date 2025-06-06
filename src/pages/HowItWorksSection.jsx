import React from 'react';

const HowItWorksSection = () => {
  const steps = [
    {
      id: 1,
      title: 'Choose your Ride',
      icon: '/images/img_container.png',
    },
    {
      id: 2,
      title: 'get quotes',
      icon: '/images/choose.svg',
    },
    {
      id: 3,
      title: 'Instant decision',
      icon: '/images/instant-decision.svg',
    },
    {
      id: 4,
      title: 'Quick Disbursal',
      icon: '/images/quick-disbursal.svg',
    },
  ];

  return (
    <section className="bg-white py-5 px-4 sm:px-6 lg:px-20">
      <div className="bg-gray-100 rounded-2xl px-6 sm:px-10 py-10">
        <div className="text-center mb-12">
          <h2 className="text-xl lg:text-2xl font-bold text-gray-800 mb-4">
            See How <span className="text-green-600">Drivio Works?</span>
          </h2>
          <p className="text-xs lg:text-sm max-w-l mx-auto leading-relaxed">
            Choose and ride your dream bike the same day from the dealership
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
          {steps.map((step) => (
            <div key={step.id} className="text-center">
              <div className="mb-3 flex justify-between">
                <img
                  src={step.icon}
                  alt={step.title}
                  className="w-10 h-10 lg:w-16 lg:h-16 mx-auto "
                />
              </div>
              <h3 className="text-xs lg:text-sm font-semibold capitaliz">
                {step.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
