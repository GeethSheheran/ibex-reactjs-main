import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
function PortfolioLink() {
  return (
    <Container>
      <Wrap>
        <Link to="/corporate">
          <Slot>
            <img src="./cop.png" alt="Corporate" />
          </Slot>
        </Link>
        <Link to="/coporate">
          <Slot>
            <img src="./doc.jpeg" />
          </Slot>
        </Link>

        <Link to="/coporate">
          <Slot>
            <img src="./cop.png" />
          </Slot>
        </Link>

        <Link to="/coporate">
          <Slot>
            <img src="./cop.png" />
          </Slot>
        </Link>

        <Link to="/coporate">
          <Slot>
            <img src="./doc.jpeg" />
          </Slot>
        </Link>

        <Link to="/coporate">
          <Slot>
            <img src="./cop.png" />
          </Slot>
        </Link>
      </Wrap>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 50px 0;
`;

const Wrap = styled.div`
  width: 99%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
`;

const Slot = styled.div`
  width: 480px;
  height: 310px;
  margin: 4px;
  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;

  @media only screen and (max-width: 1200px) {
    width: 100%;
  }

  &:hover {
    cursor: pointer;
    transform: scale(1.01);
  }

  img {
    width: 100%;
    height: 100%;
    border-radius: 15px;
  }
`;

export default PortfolioLink;
