import {
  PricingCard,
  PricingCardProps,
} from "@/components/pricing-card/pricing-card";

import basicPackage from "@/assets/img/pricing1.png";
import premiumPackage from "@/assets/img/pricing2.png";
import diamondPackage from "@/assets/img/pricing3.png";

import "./pricing.css";
import { Heading } from "@/components/heading/heading";

const packages: PricingCardProps[] = [
  {
    planName: "basic",
    imageUrl: basicPackage,
    price: 200,
    featuresAvailable: 2
  },
  {
    planName: "diamond",
    imageUrl: premiumPackage,
    price: 240,
    featuresAvailable: 3
  },
  {
    planName: "premium",
    imageUrl: diamondPackage,
    price: 400,
    featuresAvailable: 5
  },
];

export const Pricing = () => {
  return (
    <section className="pricing section">
      <div className="pricing__container container">
        <div className="pricing__heading">
          <Heading subtitle="Pricing">
            <span>Our </span>
            <span>Special Plan</span>
          </Heading>
        </div>

        <div className="pricing__cards">
          {packages.map(({ planName, price, featuresAvailable, imageUrl }, index) => (
            <PricingCard
              key={index}
              planName={planName}
              imageUrl={imageUrl}
              price={price}
              featuresAvailable={featuresAvailable}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
