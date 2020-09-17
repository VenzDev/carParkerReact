import styled from "styled-components";
import { motion } from "framer-motion";

export const Button = styled(motion.button)`
  width: 180px;
  padding: 0.6rem 1rem;
  border: none;
  border-radius: 36px;
  color: white;
  background-color: blue;
  transition: 0.3s;
  cursor: pointer;
  outline: none;
`;

export const HeaderButton = styled(Button)`
  margin-right: 6rem;
  box-shadow: 0px 6px 12px rgba(255, 255, 255, 0.3);

  @media (max-width: 1200px) {
    margin-right: 3rem;
  }

  @media (max-width: 1000px) {
    margin-right: 1rem;
  }

  @media (max-width: 900px) {
    display: none;
  }

  &:hover {
    box-shadow: 0px 6px 12px rgba(255, 255, 255, 0.7);
  }
`;

export const GradientButton = styled(Button)`
  color: white;
  background: #0080ff;
  background-image: linear-gradient(to right, #0080ff, #0098ff, #00aeff, #00c1ff, #00d3ff);
  box-shadow: 0px 6px 12px rgba(0, 128, 255, 0.5);

  &:hover {
    box-shadow: 0px 6px 12px rgba(0, 128, 255, 0.8);
  }
`;
