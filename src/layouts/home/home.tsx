import homeImage from "@/assets/img/home-img.png";
import { motion } from "motion/react";
import { IoMdArrowForward } from "react-icons/io";
import "./home.css";
import { AnimationVariants } from "@/types";

export const Home = () => {
  const variants: AnimationVariants = {
    hidden: { y: -100, opacity: 0 },
    show: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <section className="home section" id="home">
      <div className="home__container container">
        <motion.div
          className="home__data"
          variants={variants}
          animate={"show"}
          initial={"hidden"}
          viewport={{ once: true }}
        >
          <h2 className="home__subtitle">Make Your</h2>
          <h1 className="home__title">Body Shape</h1>
          <p className="home__description">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Dignissimos, praesentium!
          </p>

          <a className="button button--primary button--with-icon">
            Get Started
            <IoMdArrowForward size={20} />
          </a>
        </motion.div>

        <div className="home__images">
          <motion.img
            loading="lazy"
            src={homeImage}
            alt="Home Image"
            className="home__image"
            animate={{
              y: 0,
              opacity: 1,
            }}
            initial={{
              y: 100,
              opacity: 0,
            }}
            viewport={{ once: true }}
          />

          <div className="home__triangle home__triangle--1"></div>
          <div className="home__triangle home__triangle--2"></div>
          <div className="home__triangle home__triangle--3"></div>
        </div>
      </div>
    </section>
  );
};
