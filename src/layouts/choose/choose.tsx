import { Heading } from "@/components/heading/heading";
import { motion } from "motion/react";
import chooseImg from "@/assets/img/choose-img.png";
import "./choose.css";
import { Metric } from "@/components/metric/metric";
import { AnimationVariants } from "@/types";

export const Choose = () => {
  const dataAnimationVariants : AnimationVariants = {
    show :{
      x: 0,
      opacity: 1,
    },
    hidden: {
      x: 100,
      opacity: 0,
    }
  }

  const imageAnimationVariants: AnimationVariants = {
    show :{
      x: 0,
      opacity: 1,
    },
    hidden: {
      x: -100,
      opacity: 0,
    }
  }


  return (
    <section className="choose section" id="choose">
      <div className="choose__container container">
        <motion.div
          className="choose__data"
          variants={dataAnimationVariants}
          whileInView={"show"}
          initial={"hidden"}
          viewport={{ once: true }}
        >
          <div className="choose__heading">
            <Heading subtitle="Best Reason">
              <span>Why</span>
              <span> Choose Us?</span>
            </Heading>
          </div>

          <p className="choose__description">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia
            vero numquam cupiditate quibusdam nobis corrupti at sint quasi
            voluptatibus. Omnis!
          </p>

          <div className="choose__metrics">
            <Metric count={200} label="Total Members" />
            <Metric count={50} label="Best Trainers" />
            <Metric count={25} label="Programs" />
            <Metric count={100} label="Awards" />
          </div>
        </motion.div>

        <div className="choose__images">
          <motion.img
            className="choose__image"
            variants={imageAnimationVariants}
            src={chooseImg}
            alt="Choose Us Image"
            whileInView={"show"}
            initial={"hidden"}
            viewport={{ once: true }}
          />

          <div className="choose__triangle choose__triangle--1"></div>
          <div className="choose__triangle choose__triangle--2"></div>
          <div className="choose__triangle choose__triangle--3 "></div>
        </div>
      </div>
    </section>
  );
};
