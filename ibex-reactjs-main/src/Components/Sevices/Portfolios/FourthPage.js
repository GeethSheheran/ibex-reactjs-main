import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
function Feedback() {

    const slotsData = [
        {
          image: './next.png',
          title: 'Subtitles and Translation',
          description: 'We take a humanized approach when developing our client\'s optimization and testing programs. Our creative team is capable of translating the language you require. Our recent projects of Subtitling include Urdu, Hindi, Arabic, English, French, and Mandarin for top-notch Feature Films and Corporate Videos.',
        },
        {
          image: './mixer.png',
          title: 'Producing',
          description: 'We oversee film production from selecting the script, hiring a director, crew, and coordinating the post-production process along with the marketing and distribution.',
        },
        {
            image: './event.png',
            title: 'Event Planning',
            description: 'WWe organize the events like no other. Our Event team can plan any event in Dubai, Abu-Dhabi, and Sharjah. We have done multiple Corporate Event planning be it on a large stadium, auditorium, or even on a Cruise Ship. ',
          },
          {
            image: './skip.png',
            title: 'Film and Video Direction',
            description: 'Our envisioned directors have a keen eye on all the aspects of the film or video production process. Our range of skillful directors can direct Films of all genres. Our in-house directors have also bagged awards from International Film Festivals around the globe. The team consists of the best from UAE, Pakistan, India, Norway, Poland, USA, UK, and Lebanon',
          },
          {
            image: './write.png',
            title: 'Sound Recording',
            description: "The one department on which our clients merely focuses, but this is the one single thing that can make or break your film. That is the reason there are only a handful of Sound Recordists available in the industry. But don't worry we have got you covered.",
          },
          {
            image: './wave.png',
            title: 'Screenwriting',
            description: 'Our creative team is the core of everything that we do. We provide Screenwriting services from researching the story, building the narrative, writing the story, script and screenplay. ',
          },
          
      ];
  return (
    <Container>
      <Wrap>
      {slotsData.map((slot, index) => (
          <Slot key={index}>
            <div>
              <img src={slot.image} alt={slot.title} />
            </div>
            <div>
              <h1>{slot.title}</h1>
            </div>
            <div>
              <p>{slot.description}</p>
            </div>
            <div>
              <Link to="/contact">
                <button className="button">
                  <h2 className="text">contact us</h2>
                  <span className="icon">
                    <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" data-icon="paper-plane" width="20px" aria-hidden="true">
                      <path d="M476 3.2L12.5 270.6c-18.1 10.4-15.8 35.6 2.2 43.2L121 358.4l287.3-253.2c5.5-4.9 13.3 2.6 8.6 8.3L176 407v80.5c0 23.6 28.5 32.9 42.5 15.8L282 426l124.6 52.2c14.2 6 30.4-2.9 33-18.2l72-432C515 7.8 493.3-6.8 476 3.2z" fill="currentColor"></path>
                    </svg>
                  </span>
                </button>
              </Link>
            </div>
          </Slot>
        ))}
      </Wrap>
    </Container>
  )
}

const Container = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 40px 0;
`
const Wrap = styled.div`
    width: 95%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;

@media only screen and (max-width: 1200px){
        flex-direction: column;
      }

`
const Slot = styled.div`
      width: 30%;
      border: 1px solid #DFDFDF;
      border-radius: 5px;
      height: 400px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      text-align: center;
      padding: 20px;
      margin: 10px;

      @media only screen and (max-width: 1200px){
        width: 100%;
        height: 340px;
        margin: 10px 0;
      }

      img{
        width: 20%;

        @media only screen and (max-width: 1200px){
            width: 17%;
          }
      }

      h2{
        color: black;
      }

      div{
        margin: 8px;
      }

      a{
        text-decoration: none;
      }

      h1{
        font-size: 29px;

        @media only screen and (max-width: 1200px){
            font-size: 22px;
          }
      }

      p{
        font-size: 16px;

        @media only screen and (max-width: 1200px){
            font-size: 13px;
          }
      }


`

export default Feedback