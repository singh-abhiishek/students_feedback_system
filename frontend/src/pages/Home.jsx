import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import CourseList from '../components/CourseList'
import Footer from '../components/Footer'
import Banner from '../components/Banner'

const Home = () => {
    return (
        <>
            <Navbar />
            <Hero />
            <CourseList />
            <Banner />
            <Footer />
        </>
    )
}

export default Home