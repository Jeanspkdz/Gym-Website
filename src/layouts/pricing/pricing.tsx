import { motion } from "motion/react";
import {
  PricingCard,
  PricingCardProps,
} from "@/components/pricing-card/pricing-card";
import { Heading } from "@/components/heading/heading";

import basicPackage from "@/assets/img/pricing1.png";
import premiumPackage from "@/assets/img/pricing2.png";
import diamondPackage from "@/assets/img/pricing3.png";

import { AnimationVariants } from "@/types";
import "./pricing.css";

const packages: PricingCardProps[] = [
  {
    planName: "basic",
    imageUrl: basicPackage,
    price: 200,
    featuresAvailable: 2,
  },
  {
    planName: "diamond",
    imageUrl: premiumPackage,
    price: 240,
    featuresAvailable: 3,
  },
  {
    planName: "premium",
    imageUrl: diamondPackage,
    price: 400,
    featuresAvailable: 5,
  },
];

export const Pricing = () => {
  const parentVariants: AnimationVariants = {
    hidden: {
      opacity: 0,
    },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const childVariants: AnimationVariants = {
    hidden: {
      opacity: 0,
      y: -100,
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
      },
    },
  };

  return (
    <section className="pricing section" id="pricing">
      <div className="pricing__container container">
        <div className="pricing__heading">
          <Heading subtitle="Pricing">
            <span>Our </span>
            <span>Special Plan</span>
          </Heading>
        </div>

        <motion.div
          className="pricing__cards"
          variants={parentVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {packages.map(
            ({ planName, price, featuresAvailable, imageUrl }, index) => (
              <motion.div key={index} variants={childVariants}>
                <PricingCard
                  planName={planName}
                  imageUrl={imageUrl}
                  price={price}
                  featuresAvailable={featuresAvailable}
                />
              </motion.div>
            )
          )}
        </motion.div>
      </div>
    </section>
  );
};
