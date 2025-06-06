import React, { useState, useEffect } from 'react';
import ShimmerCard from '@uicomponents/ShimmerCard';

const BASE_URL = 'https://webapi.drivio.in/v1/mmv/getPopularMake';

const HEADERS = {
  'Content-Type': 'application/json',
  Accept: 'application/json, text/plain, */*',
};

const TABS_CONFIG = [
  { id: 'bike', label: 'Bike' },
  { id: 'scooter', label: 'Scooter' },
  { id: 'electric', label: 'EV' },
];

const MAX_BRANDS_INITIAL = 4;
const MAX_BRANDS_EXPANDED = 7;

export default function PopularBrandsSection() {
  const [activeTabId, setActiveTabId] = useState('bike');
  const [showMore, setShowMore] = useState(false);
  const [brandsData, setBrandsData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);

      try {
        const res = await fetch(`${BASE_URL}?pageNo=1&pageSize=7`, {
          method: 'POST',
          headers: HEADERS,
          body: JSON.stringify({ type: activeTabId }),
        });

        const result = await res.json();

        const transformedBrands =
          result.makeData?.map((make) => ({
            id: make.make_id,
            name: make.make_display_name || make.make_name || 'Unknown',
            vehicleImage:
              make.popular_image ||
              make.scooter_popular_image ||
              'https://placehold.co/240x160/f0f0f0/333?text=No+Image',
            makeSlug: make.make_slug || '',
          })) || [];

        setBrandsData(transformedBrands);
        setShowMore(false);
      } catch (err) {
        console.error('Error fetching data:', err);
        setBrandsData([]);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [activeTabId]);

  const handleTabClick = (tabId) => setActiveTabId(tabId);
  const handleViewMoreLinkClick = () => setShowMore(true);

  const brandsToRender = showMore
    ? brandsData.slice(0, MAX_BRANDS_EXPANDED)
    : brandsData.slice(0, MAX_BRANDS_INITIAL);

  const canShowViewMoreLink = !showMore && brandsData.length > MAX_BRANDS_INITIAL;
  const showViewAllCard = showMore && brandsData.length > 0;

  return (
    <section className="bg-white py-6 md:py-3">
      <div className="w-full px-4 max-w-6xl mx-auto">
        <div className="text-center mb-1">
          <h2 className="text-xl lg:text-4xl font-bold text-gray-800 mb-4">
            Popular <span className="text-green-500">Brands</span>
          </h2>
          <div className="flex justify-center flex-wrap mb-1 gap-3 md:gap-4">
            {TABS_CONFIG.map((tab) => (
              <button
                key={tab.id}
                onClick={() => handleTabClick(tab.id)}
                className={`px-5 py-2 md:px-6 rounded-t-lg text-sm md:text-base font-semibold transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-green-300
                  ${
                    activeTabId === tab.id
                      ? 'bg-green-500 text-white shadow-md'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {loading ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5 md:gap-6 mb-8">
            {Array(4)
              .fill(0)
              .map((_, idx) => (
                <ShimmerCard key={idx} />
              ))}
          </div>
        ) : brandsData.length > 0 ? (
          <>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5 md:gap-6 mb-8">
              {brandsToRender.map((brand) => (
                <div
                  key={brand.id}
                  className="relative hover:bg-gray-200 bg-white  cursor-pointer border border-gray-200 rounded-xl overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col items-center justify-center p-3 md:p-4 h-[200px] sm:h-[150px] md:h-[200px] "
                >
                  <img
                    src={brand.vehicleImage}
                    alt={`${brand.name} brand`}
                    className="max-w-full max-h-full object-contain transition-transform duration-700 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 rounded-xl pointer-events-none">
                    <span className="text-white text-lg font-semibold select-none">
                      {brand.makeSlug}
                    </span>
                  </div>
                </div>
              ))}

              {showViewAllCard && (
                <div className="bg-white cursor-pointer border border-gray-200 rounded-xl hover:shadow-xl transition-shadow duration-300 flex items-center justify-center p-4 text-gray-600 font-semibold text-base md:text-lg h-[250px] sm:h-[260px] md:h-[280px]">
                  View All
                </div>
              )}
            </div>

            {canShowViewMoreLink && (
              <div className="text-center mt-4">
                <button
                  onClick={handleViewMoreLinkClick}
                  className="text-green-500 hover:text-green-600 font-medium text-lg underline focus:outline-none focus:ring-2 focus:ring-green-300 rounded-sm"
                >
                  View More
                </button>
              </div>
            )}
          </>
        ) : (
          <div className="text-center text-gray-500 py-8">
            No brands available for this category yet.
          </div>
        )}
      </div>
    </section>
  );
}
