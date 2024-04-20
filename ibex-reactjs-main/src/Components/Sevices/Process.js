import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { IoIosArrowForward } from "react-icons/io";
import { FiEdit } from "react-icons/fi";
import { BiSolidCameraMovie } from "react-icons/bi";
import { FaImages } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";

function Vision() {
  return (
    <Container>
        <h1>Production Process</h1>
      <Wrap>
      <Slot>
        <div>
            <FiEdit size={25}/>
        </div>
        <h2>Pre - Production</h2>
        <p>Location scouting and permissions, Concept development, Script writing, Storyboarding, Set design, Costume design</p>
      </Slot>
      <IoIosArrowForward className="desktop-icon" size={40} />
      <IoIosArrowDown className="mobile-icon" size={40} />
      <Slot>
      <div>
            <BiSolidCameraMovie size={25} />
        </div>
        <h2>Production</h2>
        <p>Film and video production, Film and video direction, Cinematography, Aerial Cinematography, Sound recording.</p>
      </Slot>
      <IoIosArrowForward className="desktop-icon"  size={40} />
      <IoIosArrowDown className="mobile-icon" size={40} />
      <Slot>
      <div>
            <FaImages size={25}/>
        </div>
        <h2>Post - Production</h2>
        <p>Video editing, Color grading, Audio composition, Visual effects, Dubbing & Voice over, Subtitles and transition</p>
      </Slot>
      </Wrap>
    </Container>
  );
}
const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  padding: 50px 0;

  h1{
    font-size: 35px;
  }
`;

const Wrap = styled.div`

width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  padding: 50px 0;

  .desktop-icon{
    display: block;

    @media only screen and (max-width: 1200px) {
        display: none;
    }
  }

  .mobile-icon{
    display: none;

    @media only screen and (max-width: 1200px) {
        display: block;
    }
  }


  

`

const Slot = styled.div`
  width: 20%;
  height: 320px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  align-items: center;
  background: linear-gradient(#fff, #fff) padding-box,
    linear-gradient(145deg, transparent 35%, #b50909, #b50909) border-box;
  border: 2px solid transparent;
  border-radius: 16px;
  margin: 20px;
  box-shadow: 0px 187px 75px rgba(0, 0, 0, 0.01),
    0px 105px 63px rgba(0, 0, 0, 0.05), 0px 47px 47px rgba(0, 0, 0, 0.09),
    0px 12px 26px rgba(0, 0, 0, 0.1), 0px 0px 0px rgba(0, 0, 0, 0.1);

  @media only screen and (max-width: 1200px) {
    width: 94%;
    height: 280px;
    padding: 25px;
    margin-bottom: 10px;
    margin: 10px 0;
  }

  div{
    width: 70px;
    height: 70px;
    border-radius: 50%;
    background: #EFEEF1;
    display: flex;
    align-items: center;
    justify-content: center;

    @media only screen and (max-width: 1200px) {
        width: 60px;
        height: 60px;
      }
  }

  h2 {
    margin: 20px 0 15px 0;

    @media only screen and (max-width: 1200px) {
      font-size: 23px;
    }
  }
  p {
    line-height: 1.6rem;
    text-align: center;
    font-size: 15px;

    @media only screen and (max-width: 1200px) {
        font-size: 13px;
        text-align: center;
      }
  }

  .icon_arrow {
    font-size: 30px;
  }
`;
export default Vision;
