import React from 'react';

const ComparisonSection = () => {

  return (
    <section className="bg-white">
      <div className="w-full px-10 lg:px-16">
        <div className="relative rounded-2xl overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url('/images/img_.png')` }}
          >
            <div className="absolute inset-0 bg-black bg-opacity-60"></div>
          </div>
          
          <div className="relative z-10 lg:py-16 py-5 px-5 lg:px-16">
            <div className="max-w-md">
              <h2 className=" text-xl lg:text-2xl font-bold text-white mb-4 leading-tight">
                Compare <i className="text-white">2 Wheelers!</i>
              </h2>
              
              <p className="text-white text-xs lg:text-sm mb-5 leading-relaxed">
                Our comprehensive comparison tool aims to enhance your buying decision. Make an informed choice with Drivio.
              </p>
              
              <button
                className="bg-green-600 hover:bg-white hover:text-black text-white px-6 py-3 rounded-4xl font-medium transition-colors duration-200 capitalize text-xs lg:text-sm"
              >
                Compare
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComparisonSection;
