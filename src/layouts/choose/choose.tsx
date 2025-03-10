import { Heading } from "@/components/heading/heading";
import chooseImg from "@/assets/img/choose-img.png";
import "./choose.css";
import { Metric } from "@/components/metric/metric";

export const Choose = () => {
  return (
    <section className="choose section">
      <div className="choose__container container">
        <div className="choose__data">
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
            <Metric
              count={200}
              label="Total Members"
            />
             <Metric
              count={50}
              label="Best Trainers"
            />
             <Metric
              count={25}
              label="Programs"
            />
             <Metric
              count={100}
              label="Awards"
            />
          </div>
        </div>

        <div className="choose__images">
          <img className="choose__image" src={chooseImg} alt="Choose Us Image" />

          <div className="choose__triangle choose__triangle--1"></div>
          <div className="choose__triangle choose__triangle--2"></div>
          <div className="choose__triangle choose__triangle--3 "></div>
        </div>
      </div>
    </section>
  );
};
