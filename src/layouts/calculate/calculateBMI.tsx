import { Heading } from "@/components/heading/heading";
import calculateBMI from "../../assets/img/calculate-img.png";
import "./calculateBMI.css";
import { FormBMI } from "@/components/form/form-bmi";

export const CalculateBMI = () => {
  return (
    <section className="calculate-bmi section">
      <div className="calculate-bmi__container container">
        <div className="calculate-bmi__content">
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

          <FormBMI/>
        </div>
        <img src={calculateBMI} alt="" className="calculate-bmi__image" />
      </div>
    </section>
  );
};
