import React, {useState} from 'react'
import styled from 'styled-components'
import VideoModal from './VideoModal'
import Blob from './Blob';

function Gallery() {
        const [isModalOpen, setModalOpen] = useState(false);
        const [videoUrl, setVideoUrl] = useState('');
      
        const openModalWithVideo = (videoId) => {
            setVideoUrl(`https://www.youtube.com/embed/${videoId}`);
            setModalOpen(true);
          };
          
  return (
    <Container>
      
        <h1>Journey Through Our Lens</h1>
      <Wrap>
        
        <CardContainer   onClick={() => openModalWithVideo('YtO00tUS_Vg')} content="TV Commercial" background="url('https://64.media.tumblr.com/37a2fc093bc626b5157fc14697af20e0/7a29cb183e11b6d3-31/s1280x1920/14c68c1fb757d00083a7a86bc6c8116c3f25ea7c.jpg')">
          <VideoPlayButton>
            <SvgStyled xmlns="http://www.w3.org/2000/svg" viewBox="0 0 104 104">
              <path
                fill="none"
                stroke="#FFFFFF"
                strokeWidth="4"
                strokeMiterlimit="10"
                d="M26,35h52L52,81L26,35z"
              />
              <CircleStyled
                className="video-play-circle"
                fill="none"
                stroke="#DA3D25"
                strokeWidth="4"
                strokeMiterlimit="10"
                cx="52"
                cy="52"
                r="50"
              />
            </SvgStyled>
            <VideoPlayOutline className="video-play-outline" />
          </VideoPlayButton>
        </CardContainer>


        <CardContainer content="TV Commercial" background="url('https://images.pexels.com/photos/1998434/pexels-photo-1998434.jpeg?cs=srgb&dl=pexels-tom%C3%A1%C5%A1-mal%C3%ADk-1998434.jpg&fm=jpg')">
          <VideoPlayButton>
            <SvgStyled xmlns="http://www.w3.org/2000/svg" viewBox="0 0 104 104">
              <path
                fill="none"
                stroke="#FFFFFF"
                strokeWidth="4"
                strokeMiterlimit="10"
                d="M26,35h52L52,81L26,35z"
              />
              <CircleStyled
                className="video-play-circle"
                fill="none"
                stroke="#DA3D25"
                strokeWidth="4"
                strokeMiterlimit="10"
                cx="52"
                cy="52"
                r="50"
              />
            </SvgStyled>
            <VideoPlayOutline className="video-play-outline" />
          </VideoPlayButton>
        </CardContainer>

        <CardContainer background="url('https://picjumbo.com/wp-content/uploads/woman-working-in-the-office-free-photo-2210x3315.jpg')">
          <VideoPlayButton>
            <SvgStyled xmlns="http://www.w3.org/2000/svg" viewBox="0 0 104 104">
              <path
                fill="none"
                stroke="#FFFFFF"
                strokeWidth="4"
                strokeMiterlimit="10"
                d="M26,35h52L52,81L26,35z"
              />
              <CircleStyled
                className="video-play-circle"
                fill="none"
                stroke="#DA3D25"
                strokeWidth="4"
                strokeMiterlimit="10"
                cx="52"
                cy="52"
                r="50"
              />
            </SvgStyled>
            <VideoPlayOutline className="video-play-outline" />
          </VideoPlayButton>
        </CardContainer>

        <CardContainer content="TV Commercial" background="url('https://i.pinimg.com/originals/fb/79/5e/fb795e010852f7e3403b03068f7f5d3a.jpg')">
          <VideoPlayButton>
            <SvgStyled xmlns="http://www.w3.org/2000/svg" viewBox="0 0 104 104">
              <path
                fill="none"
                stroke="#FFFFFF"
                strokeWidth="4"
                strokeMiterlimit="10"
                d="M26,35h52L52,81L26,35z"
              />
              <CircleStyled
                className="video-play-circle"
                fill="none"
                stroke="#DA3D25"
                strokeWidth="4"
                strokeMiterlimit="10"
                cx="52"
                cy="52"
                r="50"
              />
            </SvgStyled>
            <VideoPlayOutline className="video-play-outline" />
          </VideoPlayButton>
        </CardContainer>

        <CardContainer content="TV Commercial" background="url('https://wallpapers.com/images/hd/man-watching-travel-tv-commercial-68x095jblqisgf2n.jpg')">
          <VideoPlayButton>
            <SvgStyled xmlns="http://www.w3.org/2000/svg" viewBox="0 0 104 104">
              <path
                fill="none"
                stroke="#FFFFFF"
                strokeWidth="4"
                strokeMiterlimit="10"
                d="M26,35h52L52,81L26,35z"
              />
              <CircleStyled
                className="video-play-circle"
                fill="none"
                stroke="#DA3D25"
                strokeWidth="4"
                strokeMiterlimit="10"
                cx="52"
                cy="52"
                r="50"
              />
            </SvgStyled>
            <VideoPlayOutline className="video-play-outline" />
          </VideoPlayButton>
        </CardContainer>

        

        <CardContainer content="TV Commercial" background="url('https://e1.pxfuel.com/desktop-wallpaper/856/357/desktop-wallpaper-woman-in-office-office-girl-thumbnail.jpg')">
          <VideoPlayButton>
            <SvgStyled xmlns="http://www.w3.org/2000/svg" viewBox="0 0 104 104">
              <path
                fill="none"
                stroke="#FFFFFF"
                strokeWidth="4"
                strokeMiterlimit="10"
                d="M26,35h52L52,81L26,35z"
              />
              <CircleStyled
                className="video-play-circle"
                fill="none"
                stroke="#DA3D25"
                strokeWidth="4"
                strokeMiterlimit="10"
                cx="52"
                cy="52"
                r="50"
              />
            </SvgStyled>
            <VideoPlayOutline className="video-play-outline" />
          </VideoPlayButton>
        </CardContainer>

        <CardContainer content="TV Commercial" background="url('https://images.pexels.com/photos/6084398/pexels-photo-6084398.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500')">
          <VideoPlayButton>
            <SvgStyled xmlns="http://www.w3.org/2000/svg" viewBox="0 0 104 104">
              <path
                fill="none"
                stroke="#FFFFFF"
                strokeWidth="4"
                strokeMiterlimit="10"
                d="M26,35h52L52,81L26,35z"
              />
              <CircleStyled
                className="video-play-circle"
                fill="none"
                stroke="#DA3D25"
                strokeWidth="4"
                strokeMiterlimit="10"
                cx="52"
                cy="52"
                r="50"
              />
            </SvgStyled>
            <VideoPlayOutline className="video-play-outline" />
          </VideoPlayButton>
        </CardContainer>

        <CardContainer content="TV Commercial" background="url('https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTEwL3Jhd3BpeGVsX29mZmljZV8zNF9hX3BvcnRyYWl0X3Bob3RvX29mX3NtaWx5X3dvbWFuX29mZl93aGl0ZV9iYV80MzU4MGE5My04MjllLTQyYjAtOTVhYy0wNDE1OTlmZDExMzBfMS5qcGc.jpg')">
          <VideoPlayButton>
            <SvgStyled xmlns="http://www.w3.org/2000/svg" viewBox="0 0 104 104">
              <path
                fill="none"
                stroke="#FFFFFF"
                strokeWidth="4"
                strokeMiterlimit="10"
                d="M26,35h52L52,81L26,35z"
              />
              <CircleStyled
                className="video-play-circle"
                fill="none"
                stroke="#DA3D25"
                strokeWidth="4"
                strokeMiterlimit="10"
                cx="52"
                cy="52"
                r="50"
              />
            </SvgStyled>
            <VideoPlayOutline className="video-play-outline" />
          </VideoPlayButton>
        </CardContainer>

        <CardContainer content="TV Commercial" background="url('https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTEwL3Jhd3BpeGVsX29mZmljZV8zNF9hX3BvcnRyYWl0X3Bob3RvX29mX3NtaWx5X3dvbWFuX29mZl93aGl0ZV9iYV80MzU4MGE5My04MjllLTQyYjAtOTVhYy0wNDE1OTlmZDExMzBfMS5qcGc.jpg')">
          <VideoPlayButton>
            <SvgStyled xmlns="http://www.w3.org/2000/svg" viewBox="0 0 104 104">
              <path
                fill="none"
                stroke="#FFFFFF"
                strokeWidth="4"
                strokeMiterlimit="10"
                d="M26,35h52L52,81L26,35z"
              />
              <CircleStyled
                className="video-play-circle"
                fill="none"
                stroke="#DA3D25"
                strokeWidth="4"
                strokeMiterlimit="10"
                cx="52"
                cy="52"
                r="50"
              />
            </SvgStyled>
            <VideoPlayOutline className="video-play-outline" />
          </VideoPlayButton>
        </CardContainer>

       

        <CardContainer content="TV Series" background="url('https://c0.wallpaperflare.com/preview/621/868/1023/fashion-style-hair-t-shirt.jpg')">
          <VideoPlayButton>
            <SvgStyled xmlns="http://www.w3.org/2000/svg" viewBox="0 0 104 104">
              <path
                fill="none"
                stroke="#FFFFFF"
                strokeWidth="4"
                strokeMiterlimit="10"
                d="M26,35h52L52,81L26,35z"
              />
              <CircleStyled
                className="video-play-circle"
                fill="none"
                stroke="#DA3D25"
                strokeWidth="4"
                strokeMiterlimit="10"
                cx="52"
                cy="52"
                r="50"
              />
            </SvgStyled>
            <VideoPlayOutline className="video-play-outline" />
          </VideoPlayButton>
        </CardContainer>
      </Wrap>

      {isModalOpen && <VideoModal videoUrl={videoUrl} onClose={() => setModalOpen(false)} />}


    </Container>
  );
}

const Container = styled.div`
    width: 100%;
    min-height: 100vh;
    background: #fff;
    display: flex;
    align-items: center;
    //justify-content: center;
    flex-direction: column;
    position: relative;
    padding-top: 50px;
    padding-bottom: 150px;

    @media only screen and (max-width: 1200px) {
      padding:  30px 0;
    }

    h1{
        font-size: 65px;
        margin: 60px 0;
        color: #02254B;

        @media only screen and (max-width: 1200px) {
          font-size: 38px;
          text-align: center;
          margin: 0;
          margin-bottom: 20px;

        }
    }

`

const Wrap = styled.div`
    width: 98%;
    display: flex;
    flex-wrap: wrap;
    z-index: 2;

`

const CardContainer = styled.div`
  position: relative;
  width: 270px;
  height: 350px;
  background: ${props => props.background};
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 25px;
  font-weight: bold;
  border-radius: 15px;
  cursor: pointer;
  margin: 13px;
  transition: all .3s;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;

  @media only screen and (max-width: 1200px) {
    width: 100%;
  }

  $:hover {
    transform: scale(0.9);
    cursor: pointer;
  }

  &::before,
  &::after {
    position: absolute;
    content: "";
    width: 0%;
    height: 0%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 20px;
    font-weight: bold;
    background-color: #111111;
    opacity: 0.8;
    color: #fff;
    transition: all 0.5s;
  }

  &::before {
    top: 0;
    right: 0;
    border-radius: 0 15px 0 15px;
  }

  &::after {
    bottom: 0;
    left: 0;
    border-radius: 0 15px 0 15px;
  }

  &:hover::before,
  &:hover::after {
    width: 100%;
    height: 100%;
    border-radius: 15px;
  }

  &:hover::after {
    content: "${props => props.content}";
  }
`;




const VideoPlayButton = styled.a`
  display: block;
  width: 104px;
  height: 104px;
  position: absolute;
  top: 50%;
  left: 50%;
  margin: -52px 0 0 -52px;
  cursor: pointer;
`;

const VideoPlayOutline = styled.span`
  display: block;
  width: 96px;
  height: 96px;
  border: #FFF 4px solid;
  border-radius: 50%;
  position: absolute;
  z-index: -1;
  top: 0;
  left: 0;
  opacity: 0.7;
  transition: all 0.5s;

  ${VideoPlayButton}:active & {
    transform: scale(1.5);
    opacity: 0;
  }
`;

const SvgStyled = styled.svg`
  display: block;
  transform: rotate(-90deg);
  transition: transform 0.3s;

  ${VideoPlayButton}:active & {
    transform: rotate(-90deg) scale(0.95);
  }
`;

const CircleStyled = styled.circle`
  stroke-dasharray: 315;
  stroke-dashoffset: 315;
  transition: stroke-dashoffset 0.5s;

  ${VideoPlayButton}:hover & {
    stroke-dashoffset: 0;
  }
`;

export default Gallery
