import React, { useRef, useState } from 'react';

import ErrorBoundary from '@components/ErrorBoundary';

import Header from '@commoncomponents/Header';
import Footer from '@commoncomponents/Footer';
import HeroSection from '@commoncomponents/HeroSection';

import Popup from '@uicomponents/Popup';

import CategoriesSection from '@pages/CategoriesSection';
import HowItWorksSection from '@pages/HowItWorksSection';
import ExploreByStyleSection from '@pages/ExploreByStyleSection';
import BikeTipsSection from '@pages/BikeTipsSection';
import PopularBrandsSection from '@pages/PopularBrandsSection';
import BenefitsSection from '@pages/BenefitsSection';
import ComparisonSection from '@pages/ComparisonSection';
import FAQSection from '@pages/FAQSection';
import TestimonialsSlider from '@pages/Testimonials';
import KnowMoreCards from '@pages/KnowMoreCards';
import Partners from '@pages/Partner';
import VehicleSection from '@pages/VehicleSection';

const HomePage = () => {
  const popularCacheRef = useRef({});
  const newCacheRef = useRef({});
  const [isPopupOpen, setIsPopupOpen] = useState(true);
  const [selectedCity, setSelectedCity] = useState({
    name: 'New Delhi',
    id: '1630',
  });

  const handleCitySelect = (city) => {
    setSelectedCity(city);
    setIsPopupOpen(false);
  };

  return (
    <ErrorBoundary>
      <Popup
        isOpen={isPopupOpen}
        onClose={() => setIsPopupOpen(false)}
        onCitySelect={handleCitySelect}
      />
      <div className="min-h-screen bg-white overflow-x-hidden">
        <Header selectedCity={selectedCity} openPopup={() => setIsPopupOpen(true)} />
        <main>
          <HeroSection />
          <CategoriesSection />
          <VehicleSection
            selectedCity={selectedCity}
            cacheRef={popularCacheRef}
            label="Popular"
            filterKey="is_popular"
          />
          <HowItWorksSection />
          <ExploreByStyleSection />
          <BikeTipsSection />
          <PopularBrandsSection />
          <BenefitsSection />
          <VehicleSection
            selectedCity={selectedCity}
            cacheRef={newCacheRef}
            label="New"
            filterKey="is_new"
          />
          <TestimonialsSlider />
          <KnowMoreCards />
          <Partners />
          <ComparisonSection />
          <FAQSection />
        </main>
        <Footer />
      </div>
    </ErrorBoundary>
  );
};

export default HomePage;
