import React, { useState } from 'react';

const HeroSection = () => {
  const [mobileNumber, setMobileNumber] = useState('');
  const [mobileError, setMobileError] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleApplyNow = () => {
    if (!mobileNumber.trim()) {
      setMobileError('Please enter your mobile number');
      setSubmitted(false);
      return;
    }
    setMobileError('');
    setSubmitted(true);
  };

  const handleMobileChange = (e) => {
    setMobileNumber(e.target.value);
    if (e.target.value.trim()) setMobileError('');
  };

  return (
    <section
      className="relative flex w-full md:flex-row flex-col justify-start items-center  h-500
                 lg:px-20 md:px-12 px-4
                 lg:h-[calc(100vh-15rem)]
                 gap-8
                 lg:py-0 md:py-12 pt-4 pb-6"
    >
      <div className="w-full md:w-1/2 flex flex-col items-start">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-body mb-6 leading-snug">
          Let's get
          <br />
          <span className="mt-8 inline-block">
            you <i className="font-bold text-green-600 ">On-Road!</i>
          </span>
        </h1>

        <p className="text-gray-600 text-base text-base mb-8 mt-2 max-w-lg">
          The best Two-wheeler financing options at one place
        </p>

        <div className="flex text-xs lg:text-lg   flex-row gap-3 w-full max-w-lg">
          <input
            type="tel"
            placeholder="Enter your Mobile No."
            value={mobileNumber}
            onChange={handleMobileChange}
            className={`w-full px-5  py-3 border rounded-full transition-colors duration-200
              focus:outline-none focus:ring-2 focus:ring-black focus:border-black hover:border-black
              bg-white text-gray-700 placeholder-gray-500 ${
                mobileError ? 'border-red-500 focus:ring-red-500' : 'border-gray-300'
              }`}
          />
          <button
            onClick={handleApplyNow}
            className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-full font-medium whitespace-nowrap"
          >
            Apply Now
          </button>
        </div>

        {mobileError && <p className="mt-2 text-sm text-red-600">{mobileError}</p>}
        {submitted && !mobileError && (
          <p className="mt-2 text-sm text-green-600">Mobile number submitted successfully!</p>
        )}
      </div>
      <div className="relative w-[280px] h-[320px] sm:w-[320px] sm:h-[380px] md:w-[400px] md:h-[480px]">
  <img
    src="/images/img_get_your_two_wheeler_financed_from_drivio.png"
    alt="Get your two wheeler financed from Drivio"
    className="absolute top-0 left-0 w-[280px] h-[280px] sm:w-[320px] sm:h-[320px] md:w-[400px] md:h-[400px] object-cover"
  />
</div>
    </section>
  );
};

export default HeroSection;
