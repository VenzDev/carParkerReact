import React, { FunctionComponent, useEffect } from "react";
import WaveDark from "../assets/wave1.svg";
import WaveLight from "../assets/wave2.svg";
import SmartParking from "../assets/smartParking.png";
import styled, { keyframes } from "styled-components";

const carParkingAnim = keyframes`
  from {
    opacity:0;
    bottom:15%;
  }

  to {
    opacity:1;
    bottom:8%;
  }
`;

const opacity = keyframes`
  from {
    opacity:0;
  }

  to {
    opacity:1;
  }
`;

const WaveImgLight = styled.img`
  position: absolute;
  right: 0;
  top: -10%;
  height: 110%;
  animation: ${opacity} 0.2s ease-out;
`;

const WaveImgDark = styled.img`
  position: absolute;
  right: 100px;
  top: -10%;
  height: 110%;
  animation: ${opacity} 0.2s ease-out;
`;

const SmartParkingImg = styled.img`
  position: absolute;
  right: 2%;
  height: 80%;
  bottom: 8%;
  transition: 0.5s;
  animation: ${carParkingAnim} 0.8s ease-out;
  animation-fill-mode: forwards;
`;

const Div = styled.div`
  width: 40%;
  height: 100%;
  padding: 3rem;
  display: flex;
  flex-direction: column;
  justify-content: center;

  p {
    color: #006fff;
    font-size: 3rem;
  }

  span {
    color: #00d3ff;
    line-height: 150%;
    text-align: justify;
  }

  button {
    width: 180px;
    margin: 5rem auto;
    padding: 0.6rem 1rem;
    border: none;
    border-radius: 36px;
    color: white;
    background: #0080ff;
    background-image: linear-gradient(to right, #0080ff, #0098ff, #00aeff, #00c1ff, #00d3ff);
    box-shadow: 0px 6px 12px rgba(0, 128, 255, 0.5);
    transition: 0.3s;
    cursor: pointer;
    outline: none;

    &:hover {
      box-shadow: 0px 6px 12px rgba(0, 128, 255, 0.8);
    }
  }
`;

export interface HomeProps {}

const Home: FunctionComponent<HomeProps> = () => {
  useEffect(() => {
    const img = new Image();
    img.src = WaveDark;
    const img2 = new Image();
    img2.src = WaveLight;
  });
  return (
    <>
      <WaveImgDark src={WaveLight} alt="wave" />
      <WaveImgLight src={WaveDark} alt="wave" />
      <SmartParkingImg src={SmartParking} alt="smartParking" />
      <Div>
        <p>Smart car parking reservation</p>
        <span>
          Changing the way you park with our smart parking solution based on the RFID technology. Our automated car
          parking system is best suited for office buildings, gated communities, apartments, malls and hospitals.
        </span>
        <button>Try now</button>
      </Div>
    </>
  );
};

export default Home;
