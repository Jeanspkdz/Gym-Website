import { Heading } from "@/components/heading/heading";
import calculateBMI from "../../assets/img/calculate-img.png";
import "./calculateBMI.css";
import { FormBMI } from "@/components/form/form-bmi";
import { motion } from "motion/react";
import { AnimationVariants } from "@/types";

export const CalculateBMI = () => {
  const contentAnimationVariants: AnimationVariants = {
    hidden: {
      x: -100,
      opacity: 0,
    },
    show: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 1,
      },
    },
  };

  const imageAnimationVariants: AnimationVariants = {
    hidden: {
      x: 100,
      opacity: 0,
    },
    show: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 1,
      },
    },
  }

  return (
    <section className="calculate-bmi section">
      <div className="calculate-bmi__container container">
        <motion.div
          className="calculate-bmi__content"
          variants={contentAnimationVariants}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: true }}
        >
          <div className="calculate-bmi__data">
            <div className="calculate-bmi__heading">
              <Heading>
                <span>Calculate </span>
                <span>Your BMI</span>
              </Heading>
            </div>

            <p className="calculate-bmi__description">
              The body mass index (BMI) calculator calculates body mass index
              from yout weight and height.
            </p>
          </div>

          <FormBMI />
        </motion.div>

        <motion.img
          src={calculateBMI}
          alt=""
          className="calculate-bmi__image"
          variants={imageAnimationVariants}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: true }}
        />
      </div>
    </section>
  );
};
