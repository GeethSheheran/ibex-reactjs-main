import React from 'react'
import styled from 'styled-components'

function AboutSecondPhase() {
  return (
    <Container>
      <h1>Our Values</h1>
       <Wrap>
        <Left>
          <Slot>
            <Head>
              <img  src='./icon_bulb.png' />
              <h2>Creativity</h2>
            </Head>
            <Body>
              <p>We always make best videos by magical process of transforming your vision into reality through creativity.</p>
            </Body>
          </Slot>

          <Slot>
            <Head>
              <img  src='./icon_search.png' />
              <h2>Transparency</h2>
            </Head>
            <Body>
              <p>We find it highly valuable that we open to suggestions from our clients and never hesitate to speak our mind about the best way of making videos.</p>
            </Body>
          </Slot>

          <Slot>
            <Head>
              <img  src='./icon_finger.png' />
              <h2>Uniqueness</h2>
            </Head>
            <Body>
              <p>We provide customized & unique video ideas/ content to reach to your target audience by fulfilling your exact requirement.</p>
            </Body>
          </Slot>
        </Left>
        <Right>
        <Slot>
            <Head>
              <img  src='./icon_target.png' />
              <h2>Ambition</h2>
            </Head>
            <Body>
              <p>We strive to exceed each client’s expectations with highly proactive and ‘can-do’ mentality to achieve the end goal.</p>
            </Body>
          </Slot>

          <Slot>
            <Head>
              <img  src='./icon_expert.png' />
              <h2>Expertise</h2>
            </Head>
            <Body>
              <p>We have passionate, experienced, and goal- oriented team to make creative & eye catching video productions with years of experience in the industry.</p>
            </Body>
          </Slot>

          <Slot>
            <Head>
              <img  src='./icon_hands.png' />
              <h2>Responsibility</h2>
            </Head>
            <Body>
              <p>We all are accountable of our relevant duties and responsible video production company to give you the best service</p>
            </Body>
          </Slot>
        </Right>
       </Wrap>
    </Container>
  )
}
const Container = styled.div`
    width: 100%;
    min-height: 50vh;
    padding-bottom: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    h1{
      font-size: 35px;
      text-align: center;
      margin: 80px 0;
  
      @media only screen and (max-width: 1200px) {
        font-size: 25px;
        text-align: center;
        margin: 30px 0;
      }
    }

`

const Wrap = styled.div`
  width: 80%;
  display: flex;

  @media only screen and (max-width: 1200px) {
    width: 97%;
    flex-direction: column;
  }
`
const Left = styled.div`
  width: 50%;
  padding:5px;

  @media only screen and (max-width: 1200px) {
    width: 100%;
  }

`

const Right = styled.div`
width: 50%;
padding:5px;

@media only screen and (max-width: 1200px) {
  width: 100%;
}
`

const Slot = styled.div`
  width: 100%;
  height: 130px;
  //border: 1px solid black;
  padding: 20px;
  margin:5px;

  /* Initial styles */
  transition: background-color 0.3s ease;

  &:hover {
    //background-color: lightgray;
    border-radius: 10px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3);
    transition: box-shadow 0.3s ease;
    //transform: scale(1.1);

    h2{
      //font-weight:bold;
      letter-spacing: 2px;
      transition: letter-spacing 0.5s ease;
    }
  }

  @media only screen and (max-width: 1200px) {
    height: 120px;
  }
`

const Head = styled.div`
  width: 100%;
  height: 40%;
  display: flex;
  border-bottom: 1px solid #b50909;

  img{
    width: 5%;
    height: 60%;
    margin-top: 8px;

    @media only screen and (max-width: 1200px) {
      width: 8%;
    }
  }

  h2{
    margin: 10px 10px;
    font-size: 21px;

   
    @media only screen and (max-width: 1200px) {
      font-size: 18px;
    }
  }

`

const Body = styled.div`
width: 100%;
height: 60%;

p{
  margin: 10px 0;
  font-size: 14.5px;

  @media only screen and (max-width: 1200px) {
    font-size: 13px;
  }
}

`
const Boxes = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  padding: 30px;

  @media only screen and (max-width: 1200px){
    padding: 0;
    margin-top: 20px;
}

`

const Box = styled.div`
  width: 20%;
  height: 250px;
  border-radius: 8px;
  margin: 20px 30px;
  background: linear-gradient(#fff, #fff) padding-box,linear-gradient(145deg, transparent 35%,#b50909, #b50909) border-box;
  border: 2px solid transparent;
  box-shadow: 0px 187px 75px rgba(0, 0, 0, 0.01), 0px 105px 63px rgba(0, 0, 0, 0.05), 0px 47px 47px rgba(0, 0, 0, 0.09), 0px 12px 26px rgba(0, 0, 0, 0.1), 0px 0px 0px rgba(0, 0, 0, 0.1);
  @media only screen and (max-width: 1200px){
    width: 140px;
    height: 150px;
    margin: 10px;
}

`

const Up = styled.div`
  width: 100%;
  height: 40%;
  display: flex;
  align-items: center;
  justify-content: center;

  @media only screen and (max-width: 1200px){
    height: 35%;
}
  
  img{
    width: 33%;

    @media only screen and (max-width: 1200px){
      width: 20%;
  }
  }

`

const Down = styled.div`
  width: 100%;
  height: 60%;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  @media only screen and (max-width: 1200px){
    height: 65%;
}

p{
  font-size: 14px;
  text-align: center;
}

`
export default AboutSecondPhase
