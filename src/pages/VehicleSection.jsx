import React, { useState, useCallback, useEffect } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { apiRequest } from '@utils/apiRequest';
import ShimmerCard from '@uicomponents/ShimmerCard';
import VehicleCard from '@uicomponents/VehicleCard';

const BASE_URL = 'https://webapi.drivio.in/v1/mmv/websiteFilterModels?pageNo=1&pageSize=5';

const HEADERS = {
  'Content-Type': 'application/json',
  Accept: 'application/json, text/plain, */*',
};

const VehicleSection = ({ selectedCity, cacheRef, label, filterKey }) => {
  const [activeVeh, setActiveVeh] = useState(0);
  const [activeVehData, setActiveVehData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false });

  const tabLabels = ['bike', 'scooter', 'ev'];

  const prev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const next = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

  const getFilterByType = (vehicleType, cityId) => ({
    [filterKey]: 1,
    vehicle_type: vehicleType,
    body_type: 2,
    city_id: cityId,
  });

  useEffect(() => {
    const fetchData = async () => {
      const cityId = selectedCity?.id;
      setLoading(true);

      const filter = getFilterByType(activeVeh, cityId);

      // Use cache if available
      if (cacheRef?.current?.[cityId]?.[activeVeh]) {
        setActiveVehData(cacheRef.current[cityId][activeVeh]);
        setLoading(false);
        return;
      }

      try {
        const res = await apiRequest(BASE_URL, 'post', { filter }, HEADERS);

        if (cacheRef?.current) {
          if (!cacheRef.current[cityId]) cacheRef.current[cityId] = {};
          cacheRef.current[cityId][activeVeh] = res;
        }

        setActiveVehData(res);
      } catch (err) {
        console.error('Error fetching data:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [activeVeh, selectedCity]);

  return (
    <div className="w-full py-3 md:py-3 px-4 md:px-12 lg:px-20 bg-white flex flex-col items-center">
      <h2 className="text-xl md:text-2xl lg:text-3xl text-body mb-4">
        {label}{' '}
        <i className="font-bold text-green">
          {tabLabels[activeVeh].charAt(0).toUpperCase() + tabLabels[activeVeh].slice(1)}s
        </i>
      </h2>

      <div className="flex gap-4 justify-center mb-">
        {tabLabels.map((type, index) => (
          <button
            key={index}
            onClick={() => setActiveVeh(index)}
            className={`px-4 py-2 rounded-t-lg border font-semibold text-sm capitalize ${
              activeVeh === index ? 'bg-green-600 text-white' : 'text-green-600'
            }`}
          >
            {type}
          </button>
        ))}
      </div>

      <div className="relative w-full">
        <button
          onClick={prev}
          className="absolute bg-green-100 left-0 top-1/2 transform -translate-y-1/2 z-10 p-2 rounded"
        >
          &lt;
        </button>
        <button
          onClick={next}
          className="absolute bg-green-100 right-0 top-1/2 transform -translate-y-1/2 z-10 p-2 rounded"
        >
          &gt;
        </button>

        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {loading
              ? Array(5)
                  .fill(0)
                  .map((_, idx) => <ShimmerCard key={idx} />)
              : activeVehData.map((item, idx) => <VehicleCard key={idx} item={item} />)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default VehicleSection;
