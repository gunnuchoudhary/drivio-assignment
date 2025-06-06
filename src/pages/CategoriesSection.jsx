import React from 'react';
import Card from '@uicomponents/Card';

const CategoriesSection = () => {
  const categories = [
    {
      id: 'bike',
      title: 'Bike',
      image: '/images/Bike.avif',
      gradient: '/images/img_gradient.png',
    },
    {
      id: 'scooter',
      title: 'Scooter',
      image: '/images/img_explore_the_latest_scooters_at_drivio.png',
      gradient: '/images/img_gradient_83x316.png',
    },
    {
      id: 'ev',
      title: 'EV',
      image: '/images/img_explore_the_latest_evs_electric_vehicles_at_drivio.png',
      gradient: '/images/img_gradient_83x315.png',
    },
  ];

  return (
    <section className="bg-white pt-7">
      <div className="w-full px-4">
        <div className="text-center mb-6">
          <h2 className="text-xl lg:text-3xl font-bold text-gray-800 mb-2">
            Explore By <span className="text-green-600">Categories</span>
          </h2>
        </div>

        <div className="flex flex-row justify-center  gap-8 lg:gap-12">
          {categories.map((category) => (
            <Card
              key={category.id}
              className="bg-gray-100 w-full max-w-sm lg:w-auto lg:max-w-none hover:shadow-xl transform hover:scale-105 transition-all duration-300 cursor-pointer"
              rounded="large"
              padding="none"
            >
              <div className=" h-20 w-full lg:w-80 flex flex-col lg:flex-row md:flex-row justify-between items-center text-center ">
                <img
                  src={category.image}
                  alt={`Explore ${category.title}`}
                  className="w-10 h-10 lg:w-16 lg:w-16 object-contain "
                />

                <h3 className="text-xl font-bold text-gray-800">{category.title}</h3>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;
