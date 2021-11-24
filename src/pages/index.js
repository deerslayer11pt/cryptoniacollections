import React from 'react'
import About from '../components/About'
import Hero from '../components/Hero'
import Meta from '../components/Meta'
import Roadmap from '../components/Roadmap'
import Scroller from '../components/Scroller'

const Home = () => {
    return (
        <>
            <Hero />
            <Scroller />
            <Meta />
            <Roadmap />
            <About />
        </>
    )
}

export default Home
