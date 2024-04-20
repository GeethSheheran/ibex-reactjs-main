import React from 'react'
import styled from 'styled-components'
import ContactForm from './ContactForm'

function ContactBody() {
  return (
    <Container>
      <Wrap>
      <Left>
        <div>
        <h2>Our Address</h2>
        <p>UAE: Office 203, Unit 14, Barsha Valley, </p>
        <p>Al Barsha, Dubai PO Box 3716</p>
        </div>

        <div>
        <h2>E-mail</h2>
        <p>effelzburgfilms@gmail.com</p> 
        </div>

        <div>
        <h2>Phone Numbers</h2>
        <p>+971556959040</p>
        <p>+971556959040</p> 
        </div>


      </Left>
      <Right>
        <ContactForm />
      </Right>
      </Wrap>
    </Container>
  )
}

const Container = styled.div`
    width: 100%;
    min-height: 80vh;
    display: flex;
    //align-items: center;
    justify-content: center;
    

`

const Wrap = styled.div`
  width: 75%;
  display: flex;

  @media only screen and (max-width: 1200px){
   flex-direction: column;
   width: 99%;
   text-align: center;
  }


`

const Left = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    align-items: center;
    //justify-content: center;
    flex-direction: column;
    padding: 50px;

    @media only screen and (max-width: 1200px){
      width: 100%;
      padding: 20px;
    }

    div{
        width: 80%;
        margin: 10px 0;
    }

    h2{
        font-size: 30px;
    }

    p{
        margin: 25px 0;
    }

`

const Right = styled.div`
    width: 50%;

    @media only screen and (max-width: 1200px){
      width: 100%;
    }

`

export default ContactBody
