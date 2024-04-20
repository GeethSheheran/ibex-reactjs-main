import React from "react";
import Slider from "react-slick";
import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { SlArrowRight, SlArrowLeft } from "react-icons/sl";

const Container = styled.div`
  margin: 0 auto;
  padding: 60px 40px;
  width: 60%;
  .slick-slide img {
    margin: auto;
    display: block;
    height: 100%;
  }

  @media only screen and (max-width: 1200px){
    padding: 30px 0;
  }
`;

const SlideItem = styled.div`
  //height: 260px;
  padding: 10px;
  img {
    max-width: 100%;
    height: auto;
    border-radius: 8px; // Adds rounded corners to images
  }
`;

const Arrow = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  //background: black;
  color: white;
  border-radius: 50%;
  padding: 10px;
  cursor: pointer;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 100;
`;

const NextArrow = ({ onClick }) => (
  <Arrow style={{ right: "-60px" }} onClick={onClick}>
    <SlArrowRight size={24} />
  </Arrow>
);

const PrevArrow = ({ onClick }) => (
  <Arrow style={{ left: "-60px" }} onClick={onClick}>
    <SlArrowLeft size={24} />
  </Arrow>
);


function Responsive() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  // Array of image sources for different slides
  const imageSources = [
    'https://i.pinimg.com/736x/db/fc/29/dbfc29fbbc0e34953b78d82e1fedac5a.jpg', // Update these paths according to your images
    'https://dcassetcdn.com/design_img/3587135/563014/563014_19639581_3587135_8ff2fdc0_image.jpg',
    'https://dcassetcdn.com/design_img/3349525/675081/675081_18341985_3349525_260fc645_image.jpg',
    'https://static.vecteezy.com/system/resources/previews/022/142/279/non_2x/minimalist-sharp-line-curve-abstract-logo-design-luxury-hotel-logo-branding-vector.jpg',
    'https://uploads.turbologo.com/uploads/design/hq_preview_image/3394600/draw_svg20210507-22909-1xd7rd9.svg.png',
    'https://uploads.turbologo.com/uploads/design/preview_image/3394345/preview_image20210802-26855-1ij230m.png',
  ];

  return (
    <Container>
      <Slider {...settings}>
        {imageSources.map((src, index) => (
          <SlideItem key={index}>
            <img src={src} alt={`Slide ${index + 1}`} />
          </SlideItem>
        ))}
      </Slider>
    </Container>
  );
}

export default Responsive;
