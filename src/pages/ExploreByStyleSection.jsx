import React from 'react';

const ExploreByStyleSection = () => {
  const styles = [
    {
      id: 'sports',
      title: 'Sports',
      image: '/images/img_best_sports_bike_in_india_affordable_sports_bike.png',
    },
    {
      id: 'cruiser',
      title: 'Cruiser',
      image: '/images/img_best_cruiser_bike_in_india_affordable_cruiser_bike.png',
    },
    {
      id: 'commuter',
      title: 'Commuter',
      image: '/images/img_best_commuter_bike_in_india_latest_commuter_bikes.png',
    },
    {
      id: 'adventure',
      title: 'Adventure',
      image: '/images/img_best_adventure_bike_in_india_affordable_sports_bikes.png',
    },
    {
      id: 'street',
      title: 'Street',
      image: '/images/img_best_street_bike_in_india_latest_street_bikes.png',
    },
  ];

  return (
    <section className="bg-white py-3">
      <div className="w-full px-4 sm:px-6 lg:px-20">
        <div className="text-center mb-4">
          <h2 className=" text-xl lg:text-3xl font-bold text-gray-800 mb-2">
            Explore By <i className="text-green-600">Style</i>
          </h2>
        </div>

        <div className="flex gap-7 overflow-x-auto w-full ">
          {styles.map((style) => (
            <div
              key={style.id}
              className=" relative shrink-0 w-40 sm:w-50 md:w-60 lg:w-64 rounded-2xl border border-gray-200 overflow-hidden   hover:shadow-lg"
            >
              <img
                src={style.image}
                alt={`Best ${style.title} bike in India`}
                className="w-full h-40 md:h-50 lg:h-60  object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div  className="absolute bottom-4 left-1/2 -translate-x-1/2">
                <h3 className="text-white font-bold text-lg  capitalize text-center">
                  {style.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExploreByStyleSection;
