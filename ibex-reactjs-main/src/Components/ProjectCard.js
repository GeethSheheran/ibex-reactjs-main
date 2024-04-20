import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { useInView } from 'react-intersection-observer';

function ProjectCard() {

    const AnimatedNumber = ({ children }) => {
        const regex = /(\d+)([^\d]+)/;
        const matches = children.match(regex);
        const target = matches ? parseInt(matches[1], 10) : parseInt(children, 10);
        const suffix = matches ? matches[2] : "";
        const [count, setCount] = useState(0);
    
        // Intersection Observer Hook
        const { ref, inView } = useInView({
            triggerOnce: true, // Trigger animation only once
            threshold: 0.5, // Trigger when 50% of the element is in view
        });
    
        useEffect(() => {
            let timer;
            if (inView && count < target) {
                const inc = target / 100;
                timer = setTimeout(() => setCount(count + inc), 20);
            }
            return () => clearTimeout(timer);
        }, [inView, count, target]);
    
        return (
            <div ref={ref}>
                <h1>{`${Math.min(count, target).toFixed(0)}${suffix}`}</h1>
            </div>
        );
    };
  return (
    <Container>
      <Slot background="linear-gradient(180deg, #0000004A 0%, #000000 100%), url('https://images.unsplash.com/photo-1601933973706-34bd411ffd67?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')">
        <AnimatedNumber>55+</AnimatedNumber>
        <p>Clients</p>
      </Slot>

      <Slot background="linear-gradient(180deg, #0000004A 0%, #000000 100%), url('https://images.unsplash.com/photo-1532800783378-1bed60adaf58?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')">
        <AnimatedNumber>167+</AnimatedNumber>
        <p>Fascinating Videos</p>
      </Slot>

      <Slot background="linear-gradient(180deg, #0000004A 0%, #000000 100%), url('https://images.unsplash.com/photo-1515634928627-2a4e0dae3ddf?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')">
        <AnimatedNumber>5+</AnimatedNumber>
        <p>Years in the Industry</p>
      </Slot>

      <Slot background="linear-gradient(180deg, #0000004A 0%, #000000 100%), url('https://images.unsplash.com/photo-1533229613598-751dc97ec35f?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')">
        <AnimatedNumber>8M+</AnimatedNumber>
        <p>Video Views</p>
      </Slot>
    </Container>
  )
}

const Container = styled.div`
    width: 100%;
    display: flex;
    height: 350px;
    flex-wrap: wrap;

    @media only screen and (max-width: 1200px) {
      height: 450px;
    }

`
const Slot = styled.div`
    width: 25%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background: ${props => props.background};
    background-size: cover;
    transition: background-size 0.1s ease, background-position 0.9s ease;
    @media only screen and (max-width: 1200px) {
      width: 50%;
      height: 50%;
    }
    
    &:hover { 
        background-position: calc(50% - 10px);
        filter: brightness(1.1); 
        cursor: pointer;
    }


    h1{
        font-size: 120px;
        color: #fff;

        @media only screen and (max-width: 1200px) {
          font-size: 74px;
        }
    }
    p{
        font-size: 22px;
        color: #fff;

        
        @media only screen and (max-width: 1200px) {
          font-size: 17px;
        }

    }



`
export default ProjectCard

