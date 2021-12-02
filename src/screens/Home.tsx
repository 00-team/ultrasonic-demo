import React from 'react'

// layouts 
import HeroSection from '../layouts/HeroSection'
import AboutUs from '../layouts/AboutUs'
import Blogs from '../layouts/Blogs'
import ContactUs from '../layouts/ContactUs'
import Videos from '../layouts/Videos'

const Home = () => {
    return (
        <>
            <HeroSection />
            <AboutUs />
            <Videos />
            <ContactUs />
            <Blogs />
        </>
    )
}

export default Home
