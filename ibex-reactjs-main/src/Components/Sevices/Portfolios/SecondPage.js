import React from 'react'
import styled from 'styled-components'

function SecondPage({ title, para, video_one, video_two, video_three}) {
  return (
    <Container>
      <Wrap>
        <Head>
            <h1>{title}</h1>
            <p>{para}</p>
        </Head>
        <Down>
           <Slot>
           {video_one}
           </Slot> 
           <Slot>
           {video_two}
           </Slot>
           <Slot>
           {video_three}
           </Slot>
        </Down>
      </Wrap>
    </Container>
  )
}

const Container = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;


`

const Wrap  = styled.div`
    width: 90%;
    padding: 40px 0;

    @media only screen and (max-width: 1200px) {
        width: 98%;
      }

`

const Head = styled.div`
display: flex;
    align-items; center;
    justify-content: center;
    flex-direction: column;

    h1{
        text-align: center;

        @media only screen and (max-width: 1200px) {
            font-size: 35px;
          }
    }

    p{
        text-align: center;
        margin: 20px 0;
        line-height: 2.1rem;

        @media only screen and (max-width: 1200px) {
            font-size: 14px;
            padding: 5px 0;
          }
    }

`

const Down = styled.div`
    display: flex;
    align-items; center;
    justify-content: center;
    padding: 40px 0;

    @media only screen and (max-width: 1200px) {
        flex-direction: column;
        padding: 20px 0;
      }

    h1{
        text-align: center;
    }

`

const Slot = styled.div`
    width: 30%;
    height: 300px;
    margin: 0 20px;

    @media only screen and (max-width: 1200px) {
        width: 100%;
        margin: 10px 0;
      }

`
export default SecondPage
