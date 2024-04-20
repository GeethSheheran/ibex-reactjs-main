import React from 'react'
import styled from 'styled-components'
import { FaFacebook } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import {  BsFillTelephoneFill } from "react-icons/bs";
import { FiMail } from "react-icons/fi";
function Footer() {
  return (
    <Container>
      <Up>
      <Wrap>
      <Section width="26%">
        <img src='logo.jpg' />

        <h2>Ibex Filmz</h2>
        <p>Negombo road</p>
        <p>Thambarawila</p>
        <p>Waikkala</p>
      </Section>
      
      <Section width="34%">
        <p className='heading'>Our Services</p>
        <h4>Coporate Videos</h4>
        <h4>Resort and Real Estate Productions</h4>
        <h4>Documentary Films</h4>
        <h4>Destination Promotions</h4>
        <h4>Aerial Cinematography</h4>
        
      </Section>
      <Section_Middle width="22%">
        <p className='heading'>Support</p>
        <h4>Home</h4>
        <h4>Services</h4>
        <h4>Abouts Us</h4>
        <h4>Our Works</h4>
        <h4>Contact Us</h4>
        
      </Section_Middle>

      <Section width="18%">
        <p className='heading'>Contacts</p>
        {/* <a href='tel:+94314927863'>< BsFillTelephoneFill className='icons_footer'  /> <h4>(+94) 31 4927 863</h4></a> */}
        <a href='tel:+94768287040'>< BsFillTelephoneFill className='icons_footer' /> <h4>(+94) 76 828 7040</h4></a>
        <a href='tel:+94768287041'>< BsFillTelephoneFill className='icons_footer' /> <h4>(+94) 76 828 7041</h4></a>
        <a href='tel:+94710877777'>< BsFillTelephoneFill className='icons_footer' /> <h4>(+94) 71 087 7777</h4></a>
        <a href='mailto: rec@prasarawashing.com. '>< FiMail className='icons_footer' /> <p>rec@prasarawashing.com </p></a>
        <a href='mailto: dhammikah@prasarawashing.com'>< FiMail className='icons_footer' /> <p>dhammikah@prasarawashing.com</p></a>
        
      </Section>
      
      </Wrap>
      </Up>

      <Down>
        <Folder>
          <p >All Rights Recieved 2024 Ibex Filmz</p>
          <p > Designed and Developed by <a href='https://web.facebook.com/ceriture/' className='heading'>Ceriture</a></p>
        </Folder>
      </Down>

    </Container>
  )
}

const Container = styled.div`
    width: 100%;
    overflow: hidden;
    

`

const Up = styled.div`
width: 100%;
min-height: 43vh;
background: #111111;
display: flex;
    justify-content: center;

    @media only screen and (max-width: 1200px){
      //height: 60vh;
    }

`

const Down = styled.div`
  width: 100%;
  height: 14vh;
  background: black;
  display: flex;
  align-items: center;
  justify-content: center;

`

const Wrap = styled.div`
    width: 95%;
    height: 100%;
    display: flex;
    //justify-content: center;
    //align-items: center;
    //flex-wrap: wrap;
    padding: 0 100px;


    @media only screen and (max-width: 1200px){
      flex-direction: column;
      padding: 20px 0;
    }

   

    
    .icons{
        color: #B50909;
        font-size: 32px;
        margin-right:  8px; 
    }
    

`

const Section = styled.div`
width: ${props => props.width};
height: 100%;
padding: 40px 0;


@media only screen and (max-width: 1200px){
  width: 100%;
  margin: 0;
  padding: 3px 0;
  text-align: center;
  height: 50%;
}

 .heading{
    color: #B50909;
 }


p{
  color: #fff;
  font-size: 12px;
  padding-top: 9px ;

  @media only screen and (max-width: 1200px){
    font-size: 14px;
  }
  
}

h4{
  color: #fff;
  margin: 10px 0;

  @media only screen and (max-width: 1200px){
    font-size: 13px;
  }
}

h2{
    color: #fff;
    font-size: 34px;
  
    @media only screen and (max-width: 1200px){
      font-size: 28px;
    }
  }

img{
  width: 23%;
  border-radius: 15%;
  margin-bottom: 10px ;

  @media only screen and (max-width: 1200px){
    display: none;
  }
}

a{
  display: flex;
  justify-content: center;
  text-decoration: none;

  

}

.icons_footer{
  color: #fff;
  font-size: 20px;
  margin:  5px 10px;
}

`

const Section_Middle = styled(Section)`
@media only screen and (max-width: 1200px){
  display: none;
}

`

const Folder = styled.div`
width: 30%;
padding: 10px 0;
border-bottom: 1px solid white;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;

.heading{
    color: #B50909;
 }

@media only screen and (max-width: 1200px){
  text-align: center;
  width: 70%;
}

.ceriture{
  width: 12%;
  padding-top: 5px;

  @media only screen and (max-width: 1200px){
    width: 30%;
  }
}

p{
  font-size: 13px;
  margin-top: 10px ;
  text-align: center;
  color: #fff;

  @media only screen and (max-width: 1200px){
    font-size: 11px;
  }
}

img{
  width:5%;
}
a{
  font-size: 15px;
  text-align: center;
}



`


export default Footer