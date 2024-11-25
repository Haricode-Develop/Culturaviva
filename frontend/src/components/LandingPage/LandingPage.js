// components/LandingPage/LandingPage.js
import React from 'react';
import HeroSection from './HeroSection';
import Description from './Description';
import Objectives from './Objectives';
import Testimonials from './Testimonials';

const LandingPage = () => {
    return (
        <div>
            <HeroSection />
            <Description />
            <Objectives />
            <Testimonials />
        </div>
    );
};

export default LandingPage;
