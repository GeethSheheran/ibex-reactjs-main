import React from 'react'
import PageLayout from '../../PageLayout'
import SecondPage from './SecondPage'
import ThirdPage from './ThirdPage'
import FourthPage from './FourthPage'
import Gallery from '../../Gallery'
function CorporateHome() {
  return (
    <div>
      <PageLayout
        title="Let us give wings to your stories"
        description="We at EFFELZBURG FILMS understand the evolving landscape of digital media and its impact on audiences worldwide. Leveraging cutting-edge technology and creative storytelling, we ensure that each video or film we produce not only meets but exceeds the expectations of our clients. Our team of experts specializes in bringing ideas to life, transforming visions into cinematic experiences that resonate with viewers, leaving a lasting impression. "
        videosrc='./video3.mp4'
      />
      <SecondPage
      title='Cinematic Corporate Video Production Company'
      para="Think Creative, Produce Extravagant! Give your videos a new life with our corporate video production service in Dubai. Corporate videos work as a backbone to any organization. They act as means to make clients understand what a company is about and what impact it's making on society. This makes them sensitive, so you can't let any inexperienced video production agency make it for you. Otherwise, your corporate video will end up looking amateurish, which will be a time-consuming, energy-wasting, and costly mistake for you. So what are you waiting for? Hire us today for a top-notch Corporate Video Production Abu Dhabi, Dubai, or anywhere in the UAE. "
      video_one={<iframe width="100%" height="100%" src="https://www.youtube.com/embed/l8eNPaqkNHE?si=ggfUyCngxpT2FbAL" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>}
      video_two={<iframe width="100%" height="100%" src="https://www.youtube.com/embed/l8eNPaqkNHE?si=ggfUyCngxpT2FbAL" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>}
      video_three={<iframe width="100%" height="100%" src="https://www.youtube.com/embed/l8eNPaqkNHE?si=ggfUyCngxpT2FbAL" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>}

      />

      <ThirdPage 
      title='Hub of Creative Music Video Producers'
      para="Chupan Chupai: A comedy of errors revolving around three friends Feddy, Koki and Teli, stupid by nature and cursed by luck. Their lives take a chilling turn when they cross paths with Babu and his alter ego girlfriend Pari. Shoot At Sight has done the line production of this music video along with a couple of sequences in Dubai. We've acquiring filming permits to shoot in desert, beach, mountains, and historical forts and production crew with equipment and logistics. With a satisfied crew army of 25 people for 5 days in Dubai, we've arranged visas, hotel stays, and flight tickets on good days. The song was widely appreciated and the film was a successful box office hit across Pakistan. "
      image='./cop.png'
      />

      <FourthPage />
      <Gallery />
    </div>
  )
}

export default CorporateHome
