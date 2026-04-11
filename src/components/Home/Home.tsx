"use client";

import Hero from '../Hero/Hero';
import About from '../About/About';
import WhyChoseUs from '../WhyChoseUs/WhyChoseUs';
import GetStartedSection from '../GetStartedSection/GetStartedSection';
import GetInTouch from '../../shared/GetInTouch';
import WorkProcess from '../WorkProcess/WorkProcess';
import PricingPlans from '../PricingPlans/PricingPlans';
import dynamic from 'next/dynamic';
const GlobeViewer = dynamic(() => import('../../shared/GlobeViewer'), { 
  ssr: false, 
  loading: () => <p>Loading Earth...</p> 
});
import AgencyDifference from '../AgencyDifference/AgencyDifference';

const Home = () => {
  return (
    <div className='bg-[#F5F7FA] dark:bg-slate-950 transition-colors duration-300'>
      <Hero></Hero>
      <About></About>
      <AgencyDifference></AgencyDifference>
      <GetStartedSection></GetStartedSection>
      <WorkProcess></WorkProcess>
      <WhyChoseUs></WhyChoseUs>
      <PricingPlans></PricingPlans>
      <GetInTouch></GetInTouch>
      <GlobeViewer></GlobeViewer>
      {/* <Map></Map> */}
    </div>
  );
};

export default Home;