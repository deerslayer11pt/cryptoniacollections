import React from 'react'
import About from '../components/About'
import Faq from '../components/Faq'
import Hero from '../components/Hero'
import Meta from '../components/Meta'
import Roadmap from '../components/Roadmap'
import Scroller from '../components/Scroller'
import ScrollerNext from '../components/ScrollerNext'

const Home = () => {
    return (
        <>
            <Hero />
            <Scroller />
            <ScrollerNext />
            <Meta />
            <Roadmap />
            <About />
            <Faq />
        </>
    )
}

export default Home
