import { IoIosCheckmarkCircle, IoMdArrowForward } from "react-icons/io";
import "./pricing-card.css";
import clsx from "clsx/lite";

export interface PricingCardProps {
  planName: PricingCardPlans;
  imageUrl: string;
  price: number;
  featuresAvailable: number;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const pricingCardPlans = {
  basic: Symbol(),
  premium: Symbol(),
  diamond: Symbol(),
} as const;

export type PricingCardPlans = keyof typeof pricingCardPlans;

const AVAILABLE_FEATURES = [
  "5 Days in a week",
  "01 Sweatshirt",
  "01 Bottle of Protein",
  "Access to videos",
  "Muscle Stretching",
];

export const PricingCard = ({
  planName,
  imageUrl,
  price,
  featuresAvailable,
}: PricingCardProps) => {
  return (
    <article
      className={`${clsx(
        "pricing-card",
        planName == "diamond" && "pricing-card--diamond"
      )}`}
    >
      <header className="pricing-card__header">
        <div className="pricing-card__shape">
          <img
            src={imageUrl}
            alt={`${planName} pricing-card logo`}
            className="pricing-card__logo"
          />
        </div>

        <h3 className="pricing-card__title">{planName} Package</h3>
        <h2 className="pricing-card__price">${price}</h2>
      </header>

      <ul className="pricing-card__features">
        {AVAILABLE_FEATURES.map((feature, index) => {
          return (
            <li
              key={index}
              className={clsx(
                "pricing-card__feature",
                index + 1 <= featuresAvailable &&
                  "pricing-card__feature--available"
              )}
            >
              <IoIosCheckmarkCircle
                className="pricing-card__feature-icon"
                size={20}
              />
              {feature}
            </li>
          );
        })}
      </ul>

      <a
        href="#"
        className="button button--secondary button--with-icon pricing-card__button"
      >
        Purchase Now
        <IoMdArrowForward />
      </a>
    </article>
  );
};
