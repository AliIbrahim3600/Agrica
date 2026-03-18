import React from 'react'
import TipsSection from '../../components/Main/TipsSection'
import HelpSection from '../../components/Main/HelpSection'
import Video from '../../components/Main/Video'
import Footer from '../../components/Footer/Footer'

const Home = () => {
  return (
    <main>
      <Video />
      <TipsSection />
      <HelpSection />
      <Footer />
    </main>
  )
}

export default Home