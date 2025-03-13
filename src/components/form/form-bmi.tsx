import { useState } from "react";
import "./form-bmi.css";
import { IoMdArrowForward } from "react-icons/io";

type MessageStatus = "healthy" | "attention" | "critical" | "incomplete";

export const FormBMI = () => {
  const [bmiData, setBmiData] = useState<{
    height: string;
    weight: string;
  }>({
    height: "",
    weight: "",
  });

  const [bmiMessage, setBmiMessage] = useState<{
    status: MessageStatus;
    message: string;
  }>();

  const handleOnCalculateBMI = () => {
    const height = Number(bmiData.height);
    const weight = Number(bmiData.weight);

    if (height == 0 || weight == 0) {
      setBmiMessage({
        message: "Fill in the form",
        status: "incomplete",
      });
      return;
    }

    const heightInMeters = height / 100; // Convert cm to meters
    const bmi = weight / (heightInMeters * heightInMeters);
    const bmiRounded = bmi.toFixed(2); 

    let category = "";
    let status: MessageStatus;
    if (bmi < 18.5) {
      category = "Underweight";
      status = "attention";
    } else if (bmi >= 18.5 && bmi <= 24.9) {
      category = "Normal weight";
      status = "healthy";
    } else if (bmi >= 25.0 && bmi <= 29.9) {
      category = "Overweight";
      status = "attention";
    } else {
      category = "Obesity";
      status = "critical";
    }

    setBmiMessage({
      message: `Your BMI is ${bmiRounded}: (${category})`,
      status: status,
    });
  };

  return (
    <form className="form-bmi">
      <fieldset className="form-bmi__fieldset">
        <div className="form-bmi__box">
          <input
            placeholder="Height"
            className="form-bmi__input"
            type="number"
            value={bmiData.height}
            min={0}
            onChange={(e) => {
              setBmiData({ ...bmiData, height: e.target.value });
            }}
          />
          <label className="form-bmi__label">cm</label>
        </div>

        <div className="form-bmi__box">
          <input
            placeholder="Weight"
            className="form-bmi__input"
            type="number"
            value={bmiData.weight}
            min={0}
            onChange={(e) => {
              setBmiData({ ...bmiData, weight: e.target.value });
            }}
          />
          <label className="form-bmi__label">kg</label>
        </div>
      </fieldset>

      <button
        onClick={(e) => {
          e.preventDefault();
          handleOnCalculateBMI();
        }}
        type="submit"
        className="button button--primary button--with-icon"
      >
        Calculate Now
        <IoMdArrowForward />
      </button>

      <span
        className={`form-bmi__message form-bmi__message--${bmiMessage?.status}`}
      >
        {bmiMessage?.message}
      </span>
    </form>
  );
};
