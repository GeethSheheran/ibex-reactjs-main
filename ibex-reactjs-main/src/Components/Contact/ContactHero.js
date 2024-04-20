import React from 'react'
import styled from 'styled-components'

function ContactHero() {
  return (
    <Container>
      <Wrap>
        <h2>Shall we embark on this adventure together? </h2>
        <h4>Your move...!</h4>

      </Wrap>
    </Container>
  )
}

const Container = styled.div`
    width: 100%;
    height: 80vh;
    background: linear-gradient(180deg, #0000004A 0%, #000000 130%), url('./banner.png');
    background-size: cover;
    display: flex;
    justify-content: flex-end;

    @media only screen and (max-width: 1200px){
      justify-content: center;
      height: 70vh;
    }

`

const Wrap = styled.div`
    width: 40%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center; 
    flex-direction: column;

    @media only screen and (max-width: 1200px){
      width: 99%;
    }

    

    h2{
      color: #fff; 
      font-size: 35px;
      text-align: center; 
      text-transform: uppercase;

      @media only screen and (max-width: 1200px){
        font-size: 30px;
      }
    }
    h4{
        color: #fff;  
        font-size: 25px;
        margin: 20px 0;
        //text-transform: uppercase;
        color: #B50909;

        @media only screen and (max-width: 1200px){
          font-size: 25px;
        }
      }

`

export default ContactHero
