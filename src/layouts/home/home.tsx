import homeImage from "@/assets/img/home-img.png";
import { IoMdArrowForward } from "react-icons/io";
import "./home.css";

export const Home = () => {
  return (
    <section className="home section">
      <div className="home__container container">
        <div className="home__data">
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
        </div>

        <div className="home__images">
          <img src={homeImage} alt="Home Image" className="home__image" />

          <div className="home__triangle home__triangle--1"></div>
          <div className="home__triangle home__triangle--2"></div>
          <div className="home__triangle home__triangle--3"></div>
        </div>
      </div>
    </section>
  );
};
