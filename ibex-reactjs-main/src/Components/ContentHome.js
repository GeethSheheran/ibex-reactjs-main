import React from 'react'
import Blob from './Blob'
import styled from 'styled-components'

function ContentHome() {
  return (
    <Container>
      <Wrap>
        <h1>Cinematic Video Production Company</h1>
        <p>IBEX FILMZ is a leading Video Production Company based in Colombo, Sri Lanka. We are a dynamic team of passionate and experienced young talents, capable of delivering widely diverse and captivating videos that you could ever imagine. As videos are now more accessible than ever, we help brands and organizations to create powerful videos/ films that communicate their vision, mission, and services using a narrative approach of storytelling.</p>
        <p>Our specialization includes Corporate Video Productions, Resort & Real Estate Video Productions, Documentary Films, Adventure & Sports Video Production, Product Commercials, Destination Promotional Videos, and Aerial Cinematography.</p>
        <p>At IBEX FILMZ, we understand the importance of creating videos that not only grab attention but also leave a lasting impact. Our collaborative approach ensures that we understand your unique objectives, target audience, and brand identity, allowing us to tailor our services to meet your specific needs and exceed your expectations.</p>
        <p>Whether you're a startup looking to make a splash in the market or an established brand aiming to revitalize your video marketing strategy, we have the creativity, technical prowess, and dedication to
          bring your ideas into life. Get ready to amaze the video marketing world and captivate your audience with our innovative and compelling creations.</p>
        <p>Reach out to IBEX FILMZ today, and let's embark on a journey to elevate your brand through the power of video storytelling.</p>
      </Wrap>
    </Container>
  )
}

const Container = styled.div`
    width: 100%;
    min-height: 40vh;
    background: black;
    z-index: 2;
    position: relative;

`;

const Wrap = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 100px;

    
    @media only screen and (max-width: 1200px) {
      padding: 15px;
    }
    h1 {
        font-size: 65px;
        margin: 30px 0;
        color: #fff;
        
        @media only screen and (max-width: 1200px) {
          font-size: 35px;
          text-align: center;
        }
    }

    p {
        font-size: 20px;
        padding: 20px 0;
        text-align: center;
        line-height: 2.2rem;
        color: #b5b5b7;

        @media only screen and (max-width: 1200px) {
          font-size: 14px;
          text-align: left;
          padding: 5px 0;
        }
    }
`;

export default ContentHome
