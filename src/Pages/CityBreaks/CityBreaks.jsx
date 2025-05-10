import React from 'react';
import './CityBreaks.css';
import SecondHeroSection from '../../Components/SecondHeroSection/SecondHeroSection';
import JaipurCityBreaksSection from '../../Components/CityBreaksSection/JaipurCityBreaksSection';
import HolidayPlanSection from '../../Components/HolidayPlanSection/HolidayPlanSection';
import LondonCityBreaksSection from '../../Components/CityBreaksSection/LondonCityBreaksSection';
import RecommendedSection from '../../Components/RecommendedSection/RecommendedSection';
import ParisCityBreaksSection from '../../Components/CityBreaksSection/ParisCityBreaksSection';
import NeedInspirationSection from '../../Components/NeedInspiration/NeedInspirationSection';

function CityBreaks() {
  return (
    <div className='city-breaks-page'>
      <SecondHeroSection secondHeroTitle='City break for you' />
      <JaipurCityBreaksSection />
      <HolidayPlanSection itemHolidayPlanTitle='Find your perfect summer holiday' />
      <LondonCityBreaksSection />
      <div className='my-4 my-sm-5'>
        <RecommendedSection itemRecommendedTitle='Your dream holiday' />
      </div>
      <ParisCityBreaksSection />
      <NeedInspirationSection />
    </div>
  )
}

export default CityBreaks;