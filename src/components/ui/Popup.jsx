import React, { useEffect, useState } from 'react';

export default function Popup({ isOpen, onClose, onCitySelect }) {
  const popcities = [
    { cityname: 'Bangalore', cityIcon: './images/bangalore.avif', id: 99 },
    { cityname: 'Hyderabad', cityIcon: './images/hyderabad.avif', id: 7 },
    { cityname: 'Pune', cityIcon: './images/pune.avif', id: 192 },
    { cityname: 'Chennai', cityIcon: './images/chennai.avif', id: 262 },
    { cityname: 'Delhi', cityIcon: './images/delhi.avif', id: 1031 },
    { cityname: 'Indore', cityIcon: './images/indore.avif', id: 151 },
    { cityname: 'Jaipur', cityIcon: './images/jaipur.avif', id: 251 },
    { cityname: 'Noida', cityIcon: './images/noida.avif', id: 327 },
  ];

  const [cities, setCities] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!isOpen) return;

    const cacheKey = 'drivio_city_pincode_data';
    const expiryKey = 'drivio_city_pincode_expiry';
    const cachedData = localStorage.getItem(cacheKey);
    const cacheExpiry = localStorage.getItem(expiryKey);

    const isCacheValid = cacheExpiry && new Date().getTime() < Number(cacheExpiry);

    if (cachedData && isCacheValid) {
      const parsed = JSON.parse(cachedData);
      const cityNames = parsed.map((item) => ({
        name: item.city_name,
        id: item.city_id,
      }));
      setCities(cityNames);
      setLoading(false);
    } else {
      fetch('https://cdn.drivio.in/json-data/city-wise-pincode.json')
        .then((res) => res.json())
        .then((data) => {
          localStorage.setItem(cacheKey, JSON.stringify(data));
          localStorage.setItem(expiryKey, (new Date().getTime() + 24 * 60 * 60 * 1000).toString()); // 24 hr
          const cityNames = data.map((item) => ({
            name: item.city_name,
            id: item.city_id,
          }));
          setCities(cityNames);
          setLoading(false);
        })
        .catch((error) => {
          console.error('Error fetching cities:', error);
          setLoading(false);
        });
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-15 flex justify-center items-start sm:items-center p-0 sm:p-4 z-50"
      onClick={onClose}
    >
      <div
        className="bg-white p-6 rounded-none sm:rounded-lg min-w-[320px] sm:max-w-xl w-full relative text-center h-full sm:h-auto flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        <h1 className="text-lg font-semibold">
          Two-Wheeler <i className="text-green-600">loan in your City</i>
        </h1>

        <button
          onClick={(e) => {
            e.stopPropagation();
            onClose();
          }}
          className="absolute top-4 right-4 text-gray-600 hover:text-gray-900 text-2xl font-bold"
        >
          ✕
        </button>

        <form className="max-w-sm sm:max-w-lg mx-auto my-2">
          <select
            id="cities"
            onChange={(e) => {
              const [name, id] = e.target.value.split('|');
              onCitySelect({ name, id });
              onClose();
            }}
            className="bg-gray-50 text-gray-900 text-sm block w-full py-2 px-4 border border-gray-300 rounded-full appearance-none"
            defaultValue=""
          >
            <option value="" disabled>
              {loading ? 'Loading cities...' : 'Select...'}
            </option>
            {!loading &&
              cities.map((city) => (
                <option key={city.id} value={`${city.name}|${city.id}`}>
                  {city.name}
                </option>
              ))}
          </select>
        </form>
        <div className="flex-grow flex flex-col justify-start">
          <div className="flex flex-wrap gap-4 justify-center">
            {popcities.map((city) => (
              <button
                key={city.id}
                onClick={() => {
                  onCitySelect({ name: city.cityname, id: city.id });
                  onClose();
                }}
                className="w-[30%] sm:w-[22%] bg-gray-100 hover:bg-gray-200 p-2 sm:p-4 rounded-xl text-center"
              >
                <img
                  src={city.cityIcon}
                  className="w-16 h-16 mx-auto mb-2 rounded-full object-cover"
                  alt={city.cityname}
                />
                <div className="text-sm font-medium">{city.cityname}</div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
