import React, { FunctionComponent, useRef } from "react";
import WaveDark from "../../assets/wave1.svg";
import WaveLight from "../../assets/wave2.svg";
import SmartParking from "../../assets/smartParking.png";
import { useTranslation } from "react-i18next";
import { WaveImgDark, WaveImgLight, SmartParkingImg, HomeText, TrynowButton, FlexDiv, ImgContainer } from "./styles";

export interface HomeProps {}

const Home: FunctionComponent<HomeProps> = () => {
  const { t } = useTranslation();

  const parkingImg = useRef<HTMLImageElement>(null);

  const imageLoaded = () => {
    if (parkingImg.current) parkingImg.current.style.display = "block";
  };

  return (
    <>
      <WaveImgDark src={WaveLight} alt="wave" />
      <WaveImgLight src={WaveDark} alt="wave" />
      <FlexDiv>
        <HomeText>
          <p>{t("description")}</p>
          <span>{t("text")}</span>
          <TrynowButton>{t("trynow")}</TrynowButton>
        </HomeText>
        <ImgContainer>
          <SmartParkingImg ref={parkingImg} onLoad={imageLoaded} src={SmartParking} alt="smartParking" />
        </ImgContainer>
      </FlexDiv>
    </>
  );
};

export default Home;
