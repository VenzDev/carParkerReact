import React, { FunctionComponent } from "react";
import { motion } from "framer-motion";
import { Icons } from "./styles";

interface IMenuButton {
  isNavbarOpen: boolean;
  isHomePage: boolean;
  handleNavbar: () => void;
}

const menuVariants = {
  open: { opacity: 0, x: 0 },
  closed: { opacity: 1, x: 0 },
};

const menu2Variants = {
  open: { opacity: 1, x: "-100%" },
  closed: { opacity: 0, x: 0 },
};

const MenuButton: FunctionComponent<IMenuButton> = ({ isNavbarOpen, handleNavbar, isHomePage }) => {
  return (
    <Icons active={isHomePage}>
      <motion.i
        onClick={handleNavbar}
        initial={false}
        animate={isNavbarOpen ? "open" : "closed"}
        transition={{ duration: 0.5, times: [0.2, 0.3], ease: "easeInOut" }}
        variants={menuVariants}
        className="fas fa-bars"
      ></motion.i>
      <motion.i
        onClick={handleNavbar}
        initial={false}
        animate={isNavbarOpen ? "open" : "closed"}
        transition={{ duration: 0.5, times: [0.2, 0.3], ease: "easeInOut" }}
        variants={menu2Variants}
        className="fas fa-times"
      ></motion.i>
    </Icons>
  );
};

export default MenuButton;
