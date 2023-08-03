import React from 'react'
import Header from '../components/header'
import About_user from './components/about_user'
import Collaboration from './components/collaboration'
import Footer from '../components/footer'
const page = () => {
  return (
    <section className='h-full p-0'>
      <Header />
      <About_user />
      <Collaboration />
      <Footer />
    </section>
  )
}

export default page