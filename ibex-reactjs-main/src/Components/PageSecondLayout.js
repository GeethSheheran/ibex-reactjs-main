import React from 'react'
import styled from 'styled-components'


function PageSecondLayout( { title, descriptionOne, descriptionTwo, imgsrc } ) {
  return (
    <Container>
      <Left>
        <h1>{title}</h1>
        <p>{descriptionOne}</p>
        <p>{descriptionTwo}</p>
      </Left>
      <Right>
        <img src={imgsrc} />
      </Right>
    </Container>
  )
}

const Container = styled.div`
    width: 100%;
    min-height: 80vh;
    display: flex;

    @media only screen and (max-width: 1200px) {
        flex-direction: column;
      }

`

const Left = styled.div`
    width: 50%;
    height: 100%;
    padding: 30px;

    @media only screen and (max-width: 1200px) {
        width: 100%;
      }


    h1{
        font-size: 30px;
        margin: 10px 0 20px 0;

        @media only screen and (max-width: 1200px) {
            text-align: center;
            margin: 5px 0 15px 0;
          }
    }

    p{
        line-height: 2.1rem;

        @media only screen and (max-width: 1200px) {
            font-size: 13px;
            text-align: center;
          }
    }
`
const Right = styled.div`
    width: 50%;
    height: 100%;

    @media only screen and (max-width: 1200px) {
        width: 100%;
      }

    img{
        width: 100%;
        height: 80vh;

        @media only screen and (max-width: 1200px) {
          width: 100%;
          height: 50vh;
        }
    }
    

`

export default PageSecondLayout
