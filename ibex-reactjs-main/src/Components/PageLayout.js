import React, {useRef } from 'react'
import styled from 'styled-components'

function Hero({ title, description, videosrc }) {
  
  return (
    <Container>
      <video src={videosrc} 
      autoPlay
      muted 
      loop
       />
      <VideoOverlay />
      <Wrap>
        <h1>{title}</h1>
        <p>{description}</p>
      </Wrap>
    </Container>
  )
}

const Container = styled.div`
width: 100%;
height: 95vh;
background-repeat: no-repeat;
background-size: cover;
background-position: center;
position: relative;
video {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

`

const VideoOverlay = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background: linear-gradient(to bottom, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.4) 100%, rgba(0,0,0,0) 100%);
    z-index: 1;
`
const Wrap = styled.div`
    width: 60%;
    height: 100%;
    position: absolute;
    padding: 30px;
    bottom: 20px;
    display: flex;
    justify-content: flex-end;
    flex-direction: column;
    z-index: 2;

    @media only screen and (max-width: 1200px) {
      width: 100%;;
      bottom: 70px;
      padding: 0 20px;
    }
   

    h1{
      font-size: 40px;
      color: #fff;
      text-align: left;
      margin: 20px 0;

      @media only screen and (max-width: 1200px) {
        font-size: 25px;
        text-align: center;
      }
    }
    
    p{
      font-size: 17px;
      color: #fff;
      line-height: 1.9rem;


      @media only screen and (max-width: 1200px) {
        font-size: 13px;
        text-align: center;
      }
    }
    
   

`
export default Hero