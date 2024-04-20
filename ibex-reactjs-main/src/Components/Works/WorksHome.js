import React from 'react'
import  PageLayout from '../PageLayout'
import PageSecondLayout from '../PageSecondLayout'
import Works from './Works'
function WorksHome() {
  return (
    <div>
       <PageLayout
        title="Let us give wings to your stories"
        description="We at EFFELZBURG FILMS understand the evolving landscape of digital media and its impact on audiences worldwide. Leveraging cutting-edge technology and creative storytelling, we ensure that each video or film we produce not only meets but exceeds the expectations of our clients. Our team of experts specializes in bringing ideas to life, transforming visions into cinematic experiences that resonate with viewers, leaving a lasting impression. "
        videosrc='./video3.mp4'
      />
      <PageSecondLayout
        title="A Complete Video Production House"
        descriptionOne="At the core of our mission lies a deep understanding of the power of visual storytelling. We are the video production team you've been searching for, dedicated to amplifying your brand's online presence and supercharging your digital marketing efforts. Our commitment to excellence is evident in every project we undertake, as we utilize only the most professional crews and state-of-the-art cameras to capture your vision. By delivering content that is not only visually stunning but also strategically crafted, we ensure that your message resonates with your audience, driving engagement and fostering a deeper connection with your brand."
        descriptionTwo="When you choose to work with us, you're not just hiring a video production team; you're partnering with a group of passionate storytellers eager to give wings to your story. Our approach is collaborative and tailored to meet your unique needs, ensuring that the final product not only aligns with your vision but also stands out in the crowded digital landscape. Let us transform your ideas into compelling visual narratives that captivate, inspire, and leave a lasting impact. Hire us today, and take the first step towards elevating your brand's digital presence to new heights."
        imgsrc='https://images8.alphacoders.com/115/1155410.jpg'
      />
      <Works />
    </div>
  )
}

export default WorksHome
