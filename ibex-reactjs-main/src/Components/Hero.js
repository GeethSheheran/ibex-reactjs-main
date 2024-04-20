import React, {useRef } from 'react'
import styled from 'styled-components'

function Hero() {
  
  return (
    <Container>
      <video src='./video.mp4' 
      autoPlay
      muted 
      loop
       />
      <VideoOverlay />
      <Wrap>
        <h1><b>IBEX FILMZ</b></h1>
        <h3>"Bringing Your Ideas to Life Through Motion"</h3>
        <p>Corporate | Resort Productions | Real Estate | Documentaries | Destination Promotions | Action Sports | Product Commercials | Aerial Cinematography</p>
      </Wrap>
    </Container>
  )
}

const Container = styled.div`
width: 100%;
height: 100vh;
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
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    z-index: 2;

    h1{
      font-size: 120px;
      color: #fff;

      @media only screen and (max-width: 1200px) {
        font-size: 50px;
      }
    }
    
    p{
      font-size: 20px;
      color: #fff;
      margin:0 15% 0 15% ;
      text-align:center;

      @media only screen and (max-width: 1200px) {
        font-size: 15px;
        text-align: center;
      }
    }
    h3{
      letter-spacing: 1.6px;
      font-size: 30px;
      margin: 10px 0;
      color: #fff;

      @media only screen and (max-width: 1200px) {
        font-size: 20px;
        text-align:center;
      }
    }

    img{
      width: 30%;

      @media only screen and (max-width: 1200px){
        width: 80%;
      } 
    }

`
export default Hero