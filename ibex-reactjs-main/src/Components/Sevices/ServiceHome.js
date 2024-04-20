import React from "react";
import PageLayout from "../PageLayout";
import PageSecondLayout from "../PageSecondLayout";
import Process from "./Process";
import PortfolioLink from "./PortfolioLink";
import styled from "styled-components"; 


function ServiceHome() {
  return (
    <div>
      <PageLayout
        title={<h1 className="title">Bringing Your Ideas to Life Through Motion</h1>}
        description="We, as Ibex Filmz, are dedicated to crafting compelling narratives that captivate audiences and drive engagement. With our comprehensive suite of services, from storyboard conception to final production, we bring visions to life with precision and creativity. We pride ourselves on our collaborative approach, working hand-in-hand with clients to ensure their message resonates powerfully through every frame."
        videosrc='./video2.mp4'
      />
      <PageSecondLayout
        title="A Complete Video Production Company"
        descriptionOne="We are a video production company with a passion & strategic experience to serve and guide our clients at every stage of video production. We dig into the heart of the projects to streamline complex stories and evolve the powerful message in an unforgettable way. Our creative team thrives on transforming visions into compelling narratives, ensuring each video stands out with its unique charm. Collaborating closely with our clients, we craft bespoke video solutions that resonate with audiences and deliver measurable results."
        descriptionTwo="In an era where technology and trends are constantly evolving, we stay at the forefront, integrating the latest innovations in video production to enhance storytelling and engagement. Our approach combines technical excellence with a deep understanding of digital landscapes, enabling us to create content that not only captivates but also achieves strategic objectives. We pride ourselves on building lasting relationships with our clients, becoming their trusted partners in success by consistently exceeding expectations and driving their messages to new heights."
        imgsrc='https://www.shootatsight.com/images/PrePostProd_2.jpeg'
      />
      <Process />
      <PortfolioLink />
    </div>
  );
}

export default ServiceHome;

const Title = styled.h1`
    font-family: "Montserrat", sans-serif;
    text-transform: uppercase;
`;
