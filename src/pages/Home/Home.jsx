import React from 'react'
import Nav from '../../components/NavBar/Nav'
import Hero from '../../components/Hero/Hero'
import TipsSection from '../../components/Main/TipsSection'
import HelpSection from '../../components/Main/HelpSection'
import ChooseUs from '../../components/Main/ChooseUs'
import Footer from '../../components/Footer/Footer'
import VideoSection from '../../components/Main/VideoSection'
import Contact from '../../components/Contact/Contact'
import ServicesSection from '../../components/Main/ServicesSection'
import Testimonials from '../../components/Main/Testimonials'
import FAQ from '../../components/Main/FAQ'
import ScrollToTop from '../../components/Main/ScrollToTop'

const Home = () => {
  return (
    <>
      <Hero />
      <ServicesSection />
      <ChooseUs />
      <VideoSection />
      <Testimonials />
      <TipsSection />
      <HelpSection />
      <FAQ />
      <Contact />
      <ScrollToTop />
    </>
  )
}

export default Home;
