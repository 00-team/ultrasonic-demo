import React from 'react'

// layouts 
import HeroSection from '../layouts/HeroSection'
import AboutUs from '../layouts/AboutUs'
import Blogs from '../layouts/Blogs'
import ContactUs from '../layouts/ContactUs'

const Home = () => {
    return (
        <>
            <HeroSection />
            <AboutUs />
            <ContactUs />
            <Blogs />
        </>
    )
}

export default Home
