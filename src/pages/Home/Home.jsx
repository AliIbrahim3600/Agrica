import React from 'react'
import Nav from '../../components/NavBar/Nav'
import Hero from '../../components/Hero/Hero'
import TipsSection from '../../components/Main/TipsSection'
import HelpSection from '../../components/Main/HelpSection'

import ChooseUs from '../../components/Main/ChooseUs'
import Footer from '../../components/Footer/Footer'
import VideoSection from '../../components/Main/VideoSection'

const Home = () => {
  return (
    <main>
      <Nav />
      <Hero />
      <ChooseUs />
      <VideoSection />
      <TipsSection />
      <HelpSection />
      <Footer />
    </main>
  )
}

export default Home;
