import React from 'react';
import { Link } from 'react-router-dom';
import Dropdown from '@uicomponents/Dropdown';

const Header = ({ selectedCity, openPopup }) => {
  return (
    <header className="w-full bg-white flex flex-col sticky z-40 top-0 py-3">
      <div className="flex items-center w-full justify-between text-xs relative lg:px-20 md:px-12 px-4">
        <Link to="/">
          <img src="/images/img_drivio.png" alt="Drivio Logo" className="h-3 w-24" />
        </Link>

        <div onClick={openPopup} className="px-4">
          <div className="flex items-center px-3 py-1 text-gray-500 hover:text-black bg-gray-100 rounded-2xl whitespace-nowrap cursor-pointer">
            <span>{selectedCity.name}</span>
            <img src="/images/caret-down.svg" alt="▼" className="w-3 h-3 ml-1" />
          </div>
        </div>

        {/* Navbar */}
        <nav className="hidden lg:flex items-center space-x-8 ml-8 text-xs ">
          <Link to="/" className="text-gray-900 font-semibold hover:text-green-600 hover:italic">
            Home
          </Link>

          <Dropdown label="Category" items={['Bike', 'Scooter', 'Electric Vehicles']} />

          <Dropdown
            label="Finance Options"
            items={['Bike Loan', 'Finance Offers', 'EMI Calculator']}
          />

          <Dropdown label="Compare Bikes" items={['Compare', 'Expert Articles']} />

          <Dropdown
            label="News & Reviews"
            items={['News', 'Features Stories', 'Reviews', 'Loan']}
          />

          <Link
            to="/"
            className="text-gray-900 font-semibold hover:italic hover:text-green-600 flex items-center gap-1"
          >
            Biker Dost
            <span className=" text-white bg-green-600 rounded-tl-xl rounded-br-xl px-2 py-0.5">
              New
            </span>
          </Link>
        </nav>

        <div className="flex items-center space-x-4 ml-auto">
          <button className="p-2 hover:bg-gray-100 rounded-full">
            <img src="/images/img_searchiconsvg.svg" alt="Search" className="w-4 h-4" />
          </button>
          <img src="./images/calculator-icon.svg" alt="Calculator" className="w-4 h-4" />
        </div>
      </div>
    </header>
  );
};

export default Header;
