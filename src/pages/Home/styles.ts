import { Button } from "../../components/Button";
import styled, { keyframes } from "styled-components";

export const carParkingAnim = keyframes`
  from {
    opacity:0;
    top:-100px;
  }

  to {
    opacity:1;
    top:0;
  }
`;

export const opacity = keyframes`
  from {
    opacity:0;
  }

  to {
    opacity:1;
  }
`;

export const WaveImgLight = styled.img`
  position: absolute;
  right: 0;
  top: -10%;
  height: 110%;
  width: 42%;
  animation: ${opacity} 0.2s ease-out;

  @media (max-width: 1650px) {
    width: 50%;
  }

  @media (max-width: 1400px) {
    width: 60%;
  }

  @media (max-width: 900px) {
    display: none;
  }
`;

export const WaveImgDark = styled.img`
  position: absolute;
  right: 100px;
  top: -10%;
  height: 110%;
  width: 40%;
  animation: ${opacity} 0.2s ease-out;

  @media (max-width: 1650px) {
    width: 50%;
    right: 60px;
  }

  @media (max-width: 1400px) {
    width: 60%;
  }

  @media (max-width: 900px) {
    display: none;
  }
`;

export const SmartParkingImg = styled.img`
  position: relative;
  width: 80%;
  margin: 0 auto;
  display: none;
  opacity: 0;
  transition: 0.5s;
  animation: ${carParkingAnim} 0.8s ease-out;
  animation-fill-mode: forwards;

  @media (max-width: 1200px) {
    width: 90%;
  }

  @media (max-width: 900px) {
    margin-top: 2rem;
    width: 60%;
  }

  @media (max-width: 600px) {
    width: 80%;
  }
`;

export const FlexDiv = styled.div`
  display: flex;
  height: 100%;
  align-items: center;

  @media (max-width: 900px) {
    padding: 2rem;
    padding-top: 5rem;
    flex-direction: column;
  }
`;

export const ImgContainer = styled.div`
  flex-basis: 60%;
  position: relative;
`;

export const HomeText = styled.div`
  flex-basis: 40%;
  padding: 3rem;
  margin-bottom: 4rem;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (max-width: 1400px) {
    margin-bottom: 2rem;
  }

  @media (max-width: 900px) {
    padding: 0;
    margin: 0;
  }

  p {
    color: #006fff;
    font-size: 3rem;

    @media (max-width: 1400px) {
      font-size: 2rem;
    }

    @media (max-width: 900px) {
      font-size: 1.5rem;
      text-align: center;
    }
  }

  span {
    color: #00d3ff;
    line-height: 150%;
    text-align: justify;

    @media (max-width: 900px) {
      font-size: 0.9rem;
      text-align: center;
    }
  }
`;

export const TrynowButton = styled(Button)`
  margin: 5rem auto;
  color: white;
  background: #0080ff;
  background-image: linear-gradient(to right, #0080ff, #0098ff, #00aeff, #00c1ff, #00d3ff);
  box-shadow: 0px 6px 12px rgba(0, 128, 255, 0.5);

  @media (max-width: 900px) {
    margin: 2rem auto;
    margin-bottom: 0;
  }

  &:hover {
    box-shadow: 0px 6px 12px rgba(0, 128, 255, 0.8);
  }
`;
