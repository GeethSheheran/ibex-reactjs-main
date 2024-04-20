import React, { useState, useEffect } from 'react';
import styled from 'styled-components'
import SlickSlider from './SlickSlider'



function SliderContent() {

  const [slidesPerView, setSlidesPerView] = useState(4);

  useEffect(() => {
    const updateSlidesPerView = () => {
      if (window.innerWidth < 768) {
        setSlidesPerView(1); // Ensures only one slide is shown in mobile view
      } else {
        // Adjusts for tablets or desktops
        setSlidesPerView(window.innerWidth < 1024 ? 2 : 4);
      }
    };

    updateSlidesPerView();
    window.addEventListener('resize', updateSlidesPerView);

    // Cleanup listener on component unmount
    return () => window.removeEventListener('resize', updateSlidesPerView);
  }, []);
  return (
    <Container>
        <h1>Our Clients</h1>
      <SlickSlider />
    </Container>
  )
}

const Container = styled.div`
  width: 100%;
  min-height: 40vh;
  background: black;
  h1 {
    font-size: 65px;
    margin-top: 40px ;
    padding-top: 40px ;
    color: #fff;
    text-align: center;
    @media only screen and (max-width: 1200px) {
      font-size: 35px;
      padding-top: 30px;
    }
  }
 
    
    img {
      display: block;
       /* Make image responsive */
      width: 260px; /* Limit maximum size */
      height: 260px; /* Maintain aspect ratio */
      object-fit: cover;
      border-radius: 5px;
    }
  }
`;

export default SliderContent
