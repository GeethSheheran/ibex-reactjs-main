import React from 'react'
import styled from 'styled-components'

function Feedback() {
  return (
    <Container>
      <Wrap>
        <Left>
            <h1>Let's Create Together</h1>
            <p>We value your engagement and would love to
hear from you. <br></br>We're passionate about capturing your vision. Dreaming of the perfect photoshoot? Need photography advice? Interested in a collaboration? Reach out! Our team is here to support your creative journey.

Let's make something beautiful together.</p>
<button class="button">
  <h6 class="text" style={{color: 'black'}}>contact us</h6>
  <span class="icon"><svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" data-icon="paper-plane" width="20px" aria-hidden="true"><path d="M476 3.2L12.5 270.6c-18.1 10.4-15.8 35.6 2.2 43.2L121 358.4l287.3-253.2c5.5-4.9 13.3 2.6 8.6 8.3L176 407v80.5c0 23.6 28.5 32.9 42.5 15.8L282 426l124.6 52.2c14.2 6 30.4-2.9 33-18.2l72-432C515 7.8 493.3-6.8 476 3.2z" fill="currentColor"></path></svg></span>
</button>
        </Left>
        <Right>
            {/* <img src='./cnnect.png' /> */}
            <img src='https://static.vecteezy.com/packs/media/components/pricing/pricing-main/img/pricing-hero-800px-b8810bc733a9898472effdd5fe2bc606.jpg' />
        </Right>

        </Wrap>
    </Container>
  )
}

const Container = styled.div`
    width: 100%;
    min-height: 42vh;
    background: #f7f9fa;
    display: flex;
    align-items: center;
    justify-content: center;
`
const Wrap = styled.div`
    width: 95%;
    height: 100%;
    display: flex;
    padding-left: 20px;

    @media only screen and (max-width: 1200px){
        flex-direction: column;
      }

`
const Left = styled.div`
    width: 70%;
    padding-right: 220px;
    padding-top: 20px;


    @media only screen and (max-width: 1200px){
        width: 100%;
        padding: 0;
        display: flex;
        flex-direction: column;
        align-items: center;
      }

     
    h1{
        text-align: left;
        color: #02254B;
        font-size: 40px;
        margin: 20px 0;

        @media only screen and (max-width: 1200px){
            text-align: center;
            font-size: 35px;
          }
    }
    p{
        line-height: 1.8rem;
        padding: 10px 0;
        margin-bottom: 10px;
        color: #02254B;

        @media only screen and (max-width: 1200px){
            text-align: center;
            font-size: 14px;
          }
    }
   

    }

    .button {
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
        width: 170px;
        border-radius: 36px;
        font-weight: 700;
        height: 34px;
        font-size: 16px;
        padding-inline: 20px;
        background-color: transparent;
        color: #fff;
        text-transform: uppercase;
        overflow: hidden;
        text-align: center;
        transition: all .25s ease-in-out;
        z-index: 1;
        border: none;
      }
    
      .button:hover{
        cursor: pointer;
      }
      
      .button:is(:hover, :focus)::before {
        transform: translateX(0%);
      }
      
      .text {
        white-space: nowrap;
        line-height: 1.2;
        padding-inline-end: 44px;
        z-index: 2;
        color: #fff;
        font-size: 13px;;
      }
      
      /* change the width and height to 100% when you use it in your layout */
      .button::after {
        content: '';
        position: absolute;
        height: calc(100% - 2px);
        width: calc(100% - 2px);
        border: 1px solid #B50909;
        border-radius: 36px;
        z-index: 2;
      }
      
      .button::before {
        content: "";
        position: absolute;
        height: 100%;
        width: 100%;
        background-color: #B50909;
        z-index: 1;
        left: -2px;
        transform: translateX(90%);
        transition: all .3s ease-out;
      }
      
      .icon {
        display: inherit;
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        right: 0;
        width: 54px;
        height: 54px;
        justify-content: center;
        align-items: center;
        border-radius: 100%;
        background-color: #B50909;
        z-index: 2;
      }
      

`

const Right = styled.div`
    width: 30%;

     @media only screen and (max-width: 1200px){
         margin-top: 20px;
         width: 100%;
     }

    img{
        width: 100%;
        height: 100%;
    }
`
export default Feedback