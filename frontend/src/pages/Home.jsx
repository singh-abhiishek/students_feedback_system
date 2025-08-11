import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import CourseList from '../components/CourseList'
import Footer from '../components/Footer'

const Home = () => {
    return (
        <>
            <Navbar />
            <Hero />
            <CourseList />
            <Footer />
        </>
    )
}

export default Home