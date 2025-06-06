import React from 'react';
import { FaInstagram, FaFacebook, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-100 w-full py-12 px-4 lg:px-20">
      <div className="flex flex-col lg:flex-row justify-between gap-12">
        {/* Left Column */}
        <section className="flex-1 flex flex-col gap-4 items-center">
          <a href="/">
            <img src="/images/img_drivio.png" alt="Drivio Logo" className="w-24 h-auto" />
          </a>

          <div className="flex gap-4">
            {[FaInstagram, FaFacebook, FaLinkedin, FaTwitter].map((Icon, idx) => (
              <Icon key={idx} className="w-7 h-7 bg-gray-300 text-green-600 rounded-full p-1" />
            ))}
          </div>

          <a
            href="/"
            className="bg-green-600 text-white px-4 py-2 rounded-full flex items-center gap-2 text-sm hover:bg-green-700 transition w-50"
          >
            <img src="/images/img_svg.svg" alt="" />
            Customer Care
          </a>

          <p className="text-xs text-gray-600">Mon-Sat 10:00AM to 6:30PM</p>
        </section>

        {/* Right Column */}
        <section className=" grid grid-cols-3 lg:grid-cols-4 gap-2 text-xs lg:text-sm">
          {/* Column 1 */}
          <div>
            <p className="font-semibold mb-4 border-b border-gray-300 pb-1 uppercase ">About Us</p>
            <ul className="space-y-2  italic text-gray-700 ">
              {['About us', 'Banking Partners', 'Privacy Policy', 'Terms & Conditions'].map((text, idx) => (
                <li key={idx}><a href="/" className="hover:text-green-600">{text}</a></li>
              ))}
            </ul>
          </div>

          {/* Column 2 */}
          <div>
            <p className="font-semibold mb-4 border-b border-gray-300 pb-1 uppercase ">News & Reviews</p>
            <ul className="space-y-2  italic text-gray-700">
              {['News', 'Featured Stories', 'Reviews', 'Loans'].map((text, idx) => (
                <li key={idx}><a href="/" className="hover:text-green-600">{text}</a></li>
              ))}
            </ul>
          </div>

          {/* Column 3 + 4 combined */}
          <div>
            <p className="font-semibold mb-4 border-b border-gray-300 pb-1 uppercase">Our Services</p>
            <ul className="space-y-2 italic text-gray-700">
              <li><a href="/" className="hover:text-green-600">Finance Offers</a></li>
            </ul>

            <p className="font-semibold mt-8 mb-4 border-b border-gray-300 pb-1 uppercase ">Resources</p>
            <ul className="space-y-2 italic text-gray-700">
              <li><a href="/" className="hover:text-green-600">Calculator</a></li>
              <li className="flex items-center gap-2">
                <a href="/" className="hover:text-green-600">Biker Dost</a>
                <span className="text-xs text-white bg-green-600 rounded-tl-xl rounded-br-xl px-2 py-0.5">
                  New
                </span>
              </li>
            </ul>
          </div>
        </section>
      </div>
    </footer>
  );
};

export default Footer;
