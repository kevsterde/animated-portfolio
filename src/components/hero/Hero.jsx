import React from "react";
import "./hero.scss";
import { motion } from "framer-motion";

const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
  scrollButton: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 2,
      repeat: Infinity,
    },
  },
};

const slidingText = {
  initial: {
    x: 0,
  },
  animate: {
    x: "-150%",
    transition: {
      duration: 20,
      repeat: Infinity,
      repeatType: "mirror",
    },
  },
};

function Hero() {
  return (
    <div className="hero">
      <div className="wrapper">
        <motion.div
          className="textContainer"
          variants={textVariants}
          initial="initial"
          animate="animate"
        >
          <motion.h2 variants={textVariants}>KEVIN REVALDE</motion.h2>
          <motion.h1 variants={textVariants}>WEB DEVELOPER</motion.h1>

          <motion.div variants={textVariants} className="button">
            <a href="/pdf/RevaldeCV2024.pdf" download>
              My Resume
            </a>
            <a href="#Contact" className="contact_btn">
              Contact Me
            </a>
          </motion.div>
          <a href="#">
            <motion.img
              variants={textVariants}
              animate="scrollButton"
              src="images/scroll.png"
              alt=""
            />
          </a>
        </motion.div>
      </div>
      <motion.div
        className="slidingText"
        variants={slidingText}
        initial="initial"
        animate="animate"
      >
        <img src="images/html.png" alt="" />
        <img src="images/css.png" alt="" />
        <img src="images/js.png" alt="" />
        <img src="images/react.png" alt="" />
        <img src="images/wordpress.png" alt="" />
      </motion.div>
      <motion.div
        className="imageContainer"
        initial={{
          y: "100%",
        }}
        animate={{
          y: "0%",
          transition: {
            duration: 0.8,
          },
        }}
      >
        <img src="images/kwr.png" alt="kevin revalde" />
      </motion.div>
    </div>
  );
}

export default Hero;
