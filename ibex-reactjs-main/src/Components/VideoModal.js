import React from 'react';
import styled from 'styled-components';
import { IoCloseOutline } from "react-icons/io5";

const ModalBackdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #111111;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;

  .icon{
    color: #fff;
    font-size: 50px;
    position: absolute;
    top: 0;
    right: 0;
    margin: 10px;

    &:hover{
        cursor: pointer;
    }
  }
`;

const ModalContent = styled.div`
  width: 80%;
  height: 90%;
  padding: 20px;
  border-radius: 15px;

  @media only screen and (max-width: 1200px) {
    width: 98%;
    height: 60%;
    padding: 0;
  }
`;

const CloseButton = styled.button`
  float: right;
  cursor: pointer;
`;

const VideoFrame = styled.iframe`
  width: 100%;
  height: 550px;
`;

const VideoModal = ({ videoUrl, onClose }) => (
  <ModalBackdrop onClick={onClose}>
    <IoCloseOutline className='icon' onClick={onClose}  />
    <ModalContent onClick={e => e.stopPropagation()}>
    
    <iframe
  width="100%"
  height="100%"
  src={`${videoUrl}?autoplay=1&rel=0`}
  frameBorder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  allowFullScreen
  title="Embedded youtube"
/>
    </ModalContent>
  </ModalBackdrop>
);

export default VideoModal