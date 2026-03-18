import React from 'react'
import TipsSection from '../../components/Main/TipsSection'
import HelpSection from '../../components/Main/HelpSection'
import Video from '../../components//Main/Video'
import ChooseUs from '../../components/Main/ChooseUs'
import Footer from '../../components/Footer/Footer'

const Home = () => {
  return (
    <main>
      <ChooseUs />
      <Video />
      <TipsSection />
      <HelpSection />
      <Footer />
    </main>
  )
}

export default Home