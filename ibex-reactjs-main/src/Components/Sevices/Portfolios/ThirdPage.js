import React from 'react'
import styled from 'styled-components'

function Feedback({ title, image, para}) {
  return (
    <Container>
      <Wrap>
        <Left>
            <h1>{title}</h1>
            <p>{para}</p>
        </Left>
        <Right>
        <img src={image} />
        </Right>
      </Wrap>
    </Container>
  )
}

const Container = styled.div`
    width: 100%;
    min-height: 70vh;
    padding: 50px 0;
    display: flex;
    align-items: center;
    justify-content: center;

    @media only screen and (max-width: 1200px){
        padding: 10px 5px;
        border: 1px solid balck;
      }
`
const Wrap = styled.div`
    width: 90%;
    height: 100%;
    display: flex;

    @media only screen and (max-width: 1200px){
        flex-direction: column;
        width: 100%;
      }

`
const Left = styled.div`
    width: 50%;
    padding: 20px;

  
    p{
        margin: 30px 0;
        line-height: 2.1rem;

        @media only screen and (max-width: 1200px) {
            font-size: 14px;
            padding: 5px 0;
            text-align: center;
          }
    }

    h1{
        @media only screen and (max-width: 1200px) {
            font-size: 34px;
            text-align: center;
          }
    }


@media only screen and (max-width: 1200px){
        width: 100%;
        padding: 0;
      }

`

const Right = styled.div`
    width: 50%;
    height: 100%;

    img{
        width: 100%;
        height: 100%;
    }

@media only screen and (max-width: 1200px){
        width: 100%;
      }
`

export default Feedback