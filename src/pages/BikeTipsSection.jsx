import React from 'react';

const BikeTipsSection = () => {
  return (
    <section className="bg-white py-3">
      <div className="w-full px-4 sm:px-6 lg:px-20">
        <div className="bg-gray-100 rounded-2xl overflow-hidden">
          <div className="flex flex-row justify-between items-center">
            <div className=" lg:w-1/2 p-3 lg:p-10 ">
              <h2 className=" text-xl md:text-2xl lg:text-3xl  font-bold text-gray-800 mb-4">
                Bike Tips <span className="text-green-600">For You</span>
              </h2>

              <h3 className=" text-sm md:text-md lg:text-xl   font-semibold text-gray-800 mb-4 leading-relaxed">
                Choose your bike based on the distance you travel everyday.
              </h3>

              <p className="text-gray-600 leading-relaxed text-xs md:text-sm lg:text-md">
                Choosing a bike depends on several factors, not just the distance you travel every
                day.
              </p>
            </div>

            {/* Right Image */}
            <div className="lg:w-1/2 w-full flex justify-center md:px-4 lg:px-10">
              <img
                src="/images/bike-tips.svg"
                alt="Bike Tips"
                className="w-80 h-auto object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BikeTipsSection;
