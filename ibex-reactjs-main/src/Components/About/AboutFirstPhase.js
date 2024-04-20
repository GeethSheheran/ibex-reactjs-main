import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

function Vision() {
  return (
    <Container>
        <Slot>
            <h1>Our Vision</h1>
            <p>We create videos to communicate your vision, mission & services that express our values. We create videos to inspire creative minds.</p>    
        </Slot>

        <Slot>
            <h1>Our Team</h1>
            <p>With a relentless pursuit of perfection, our dynamic team at "IBEX FILMZ" combines youthful energy with seasoned expertise to elevate every project we undertake. Through meticulous attention to detail and a passion for storytelling, we transform the ordinary into the extraordinary, crafting visual narratives that resonate deeply with audiences.</p>    
        </Slot>  

        
    </Container>
  )
}
 const Container = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
 
`

const Slot = styled.div`
width: 40%;
height: 350px;
display: flex;
flex-direction: column;
padding: 50px;
align-items: center;
background: linear-gradient(#fff, #fff) padding-box,linear-gradient(145deg, transparent 35%,#b50909, #b50909) border-box;
border: 2px solid transparent;
border-radius: 16px;
margin: 40px ;
box-shadow: 0px 187px 75px rgba(0, 0, 0, 0.01), 0px 105px 63px rgba(0, 0, 0, 0.05), 0px 47px 47px rgba(0, 0, 0, 0.09), 0px 12px 26px rgba(0, 0, 0, 0.1), 0px 0px 0px rgba(0, 0, 0, 0.1);
    

@media only screen and (max-width: 1200px){
  width: 96%;
  height: 370px;
  padding: 25px;
  margin-bottom: 20px;
  margin: 20px 0;
}

    h1{
        margin-bottom: 30px ;

        
        @media only screen and (max-width: 1200px){
          font-size: 26px;
      }
 }
 p{
    line-height: 1.8rem;
    text-align: center;
    margin-top: 10px;
    font-size: 15px;

 }
 

`


export default Vision