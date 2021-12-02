import React, { useEffect } from 'react'

// redux stuff 
import { useSelector } from 'react-redux'
import { RootState } from 'src/redux'

// layouts 
import HeroSection from '../layouts/HeroSection'
import AboutUs from '../layouts/AboutUs'
import Blogs from '../layouts/Blogs'
import ContactUs from '../layouts/ContactUs'

const Home = () => {

    const scollData = useSelector((state:RootState) => state.App.winwid)

    useEffect(() => {
        console.log(scollData)
    }, [scollData])

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
