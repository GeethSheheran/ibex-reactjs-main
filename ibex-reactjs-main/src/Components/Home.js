import React from 'react'
import Hero from './Hero'
import styled from 'styled-components'
import ProjectCard from './ProjectCard'
import ContentHome from './ContentHome'
import Gallery from './Gallery'
import SocialBooth from './SocialBooth'
import SliderContent from './SliderContent'
import ContactFace from './ContactFace'
function Home() {
  return (
    <Container>
      <Hero />
      <ProjectCard />
      <ContentHome />
      <Gallery />
      <ContactFace />
      <SliderContent />
      
      <SocialBooth />
      


    </Container>
  )
}

const Container = styled.div`
width: 100%;
overflow: hidden;
    position: relative;
    top: 0;

`

export default Home