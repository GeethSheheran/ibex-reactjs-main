import React, { useState } from "react";
import emailjs from "emailjs-com";
import styled from "styled-components";
const ContactForm = () => {
  const [formValues, setFormValues] = useState({
    user_name: "",
    user_email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_z9325oq",
        "template_0yyyugx",
        e.target,
        "7vkjif-MYv_kfcrQI"
      )
      .then(
        (result) => {
          alert("Message sent successfully!");
        },
        (error) => {
          alert("Failed to send the message, please try again.");
        }
      );
  };

  return (
    <Container>
    <Wrap>
    <form onSubmit={handleSubmit}>
        <h4>Name:</h4>
        <div class="input-container">
          <input class="input" type="text"  name="user_name" value={formValues.user_name} onChange={handleChange} required />
          <label class="label" for="input">
            Enter Your 
          </label>
          <div class="topline"></div>
          <div class="underline"></div>
        </div>
        <Margin />
        {/* <input type="text" type="text" name="user_name" value={formValues.user_name} onChange={handleChange} required  /> */}
        <h4>Email:</h4>
        <div class="input-container">
          <input class="input" type="text"name="user_email"value={formValues.user_email} onChange={handleChange} required/>
          <label class="label" for="input">
            Enter Your Email 
          </label>
          <div class="topline"></div>
          <div class="underline"></div>
        </div>
        {/* <input
          type="email"
          name="user_email"
          value={formValues.user_email}
          onChange={handleChange}
          required
        /> */}
        <Margin />
        <h4>Message:</h4>
        <div class="input-container">
          <input 
          type="text"
          class="input" 
          name="message"
          value={formValues.message}
          onChange={handleChange}
          required />
          <label class="label" for="input">
            Enter Your Message
          </label>
          <div class="topline"></div>
          <div class="underline"></div>
        </div>
        {/* <textarea
          name="message"
          value={formValues.message}
          onChange={handleChange}
          required
        ></textarea> */}
        <Margin />
        <button type="submit" class="button">
  <p class="text">Send</p>
  <span class="icon"><svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" data-icon="paper-plane" width="20px" aria-hidden="true"><path d="M476 3.2L12.5 270.6c-18.1 10.4-15.8 35.6 2.2 43.2L121 358.4l287.3-253.2c5.5-4.9 13.3 2.6 8.6 8.3L176 407v80.5c0 23.6 28.5 32.9 42.5 15.8L282 426l124.6 52.2c14.2 6 30.4-2.9 33-18.2l72-432C515 7.8 493.3-6.8 476 3.2z" fill="currentColor"></path></svg></span>
</button>
        {/* <button class="button" >Send</button> */}
      </form>
    </Wrap>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  .input-container {
    position: relative;
    margin: 20px 0;

    @media only screen and (max-width: 1200px){
      width: 100%;
    }


  }

  .input {
    width: 100%;
    padding: 10px;
    
    height: 40px;
    border: 2px solid #0b2447;
    border-top: none;
    border-bottom: none;
    font-size: 16px;
    background: transparent;
    outline: none;
    box-shadow: 7px 7px 0px 0px #0b2447;
    transition: all 0.5s;
  }

  .input:focus {
    box-shadow: none;
    transition: all 0.5s;
  }

  .label {
    position: absolute;
    top: 10px;
    left: 10px;
    color: #0b2447;
    transition: all 0.5s;
    transform: scale(0);
    z-index: -1;
  }

  .input-container .topline {
    position: absolute;
    content: "";
    background-color: #0b2447;
    width: 0%;
    height: 2px;
    right: 0;
    top: 0;
    transition: all 0.5s;
  }

  .input-container input[type="text"]:focus ~ .topline {
    width: 35%;
    transition: all 0.5s;
  }

  .input-container .underline {
    position: absolute;
    content: "";
    background-color: #0b2447;
    width: 0%;
    height: 2px;
    right: 0;
    bottom: 0;
    transition: all 0.5s;
  }

  .input-container input[type="text"]:focus ~ .underline {
    width: 100%;
    transition: all 0.5s;
  }

  .input-container input[type="text"]:focus ~ .label {
    top: -10px;
    transform: scale(1);
    transition: all 0.5s;
  }
`;

const Wrap = styled.div`
  width: 60%;
  padding: 30px 0;

  @media only screen and (max-width: 1200px){
    width: 90%;
  }

  .button {
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    width: 210px;
    border-radius: 36px;
    font-weight: 700;
    height: 34px;
    font-size: 16px;
    padding-inline: 20px;
    background-color: transparent;
    color: black;
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
    color: black;
    font-size: 15px;;
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

const Margin = styled.div`
  width: 100%;
  height: 50px;

`

export default ContactForm;
