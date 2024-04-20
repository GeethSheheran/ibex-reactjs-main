import React from 'react'
import PageLayout from '../PageLayout'
import ProjectCard from '../ProjectCard'
import PageSecondLayout from '../PageSecondLayout'
import AboutFirsttPhase from './AboutFirstPhase'
import AboutSecondPhase from './AboutSecondPhase'
function AboutHome() {
  return (
    <div>
      <PageLayout
        title="We are here to exceed your expectations"
        description="With an unwavering dedication to excellence, we blend creativity and innovation to produce unforgettable visual narratives. Our commitment to pushing boundaries ensures each project resonates deeply with audiences, leaving a lasting impression that transcends expectations. Fuelled by a collective passion for storytelling, we harness the latest techniques and technologies to craft compelling and impactful videos. Our relentless pursuit of perfection drives us to deliver unparalleled results, elevating your brand to new heights of success. "
        videosrc='./video3.mp4'
      />
      <ProjectCard />
      <PageSecondLayout
        title="WHO WE ARE ?"
        descriptionOne="At Ibex Filmz, we are more than just a video production company; we are a collective of passionate and experienced young talents dedicated to bringing your vision to life. With a keen understanding of the power of storytelling, we harness our creativity and technical expertise to craft diverse and captivating videos that leave a lasting impact. Whether you require a corporate video to showcase your brand, a documentary to explore a subject deeply, or a promotional video to highlight a destination, our team is equipped to deliver results that exceed your expectations."
        descriptionTwo="Specializing in a range of genres including corporate, resort, documentary, destination promotion, food, recipe, and event productions, we tailor each project to suit your unique needs and objectives. With Effelzburg Films, your story is in capable hands, and we are committed to helping you communicate your message effectively to your audience. Our commitment to excellence drives us to continuously push the boundaries of creativity and innovation in video production. Let us be your trusted partner in bringing your ideas to life and making a lasting impression in the digital landscape."
        imgsrc='https://images.news18.com/ibnlive/uploads/2021/08/sun-photo-16293134144x3.jpg'
      />
      <AboutSecondPhase />
      <AboutFirsttPhase />
      
    </div>
  )
}

export default AboutHome
