import footerLogo from "@/assets/img/logo-nav.png";
import { InputField } from "@/components/input-field/input-field";
import { IoLogoFacebook, IoLogoInstagram, IoLogoTwitter } from "react-icons/io";

import "./footer.css";

export const Footer = () => {
  return (
    <footer className="footer section">
      <div className="footer__container container">
        <div className="footer__subscription">
          <div className="footer__logo-container">
            <img src={footerLogo} className="footer__logo" />
            <span className="footer__logo-text">Academia</span>
          </div>
          <p className="footer__message-subscription">
            Subscribe for company <br /> updates below.
          </p>

          <form className="footer__form">
            <InputField
              type="text"
              placeholder="Your Email"
              className="footer__input"
            />
            <button
              type="submit"
              className="button button--primary footer__button"
            >
              Subscribe
            </button>
          </form>
        </div>

        <div className="footer__links">
          <div className="footer__box">
            <h3 className="footer__title">Services</h3>
            <ul className="footer__list">
              <li className="footer__item">
                <a href="#" className="footer__link">
                  Flex Muscle
                </a>
              </li>
              <li className="footer__item">
                <a href="#" className="footer__link">
                  Cardio Exercise
                </a>
              </li>
              <li className="footer__item">
                <a href="#" className="footer__link">
                  Basic Yoga
                </a>
              </li>
              <li className="footer__item">
                <a href="#" className="footer__link">
                  {" "}
                  Weigth Lifting
                </a>
              </li>
            </ul>
          </div>

          <div className="footer__box">
            <h3 className="footer__title">Pricing</h3>
            <ul className="footer__list">
              <li className="footer__item">
                <a href="#" className="footer__link">
                  Basic
                </a>
              </li>
              <li className="footer__item">
                <a href="#" className="footer__link">
                  Premium
                </a>
              </li>
              <li className="footer__item">
                <a href="#" className="footer__link">
                  Diamond
                </a>
              </li>
            </ul>
          </div>

          <div className="footer__box">
            <h3 className="footer__title">Company</h3>
            <ul className="footer__list">
              <li className="footer__item">
                <a href="#" className="footer__link">
                  About Us
                </a>
              </li>
              <li className="footer__item">
                <a href="#" className="footer__link">
                  Careers
                </a>
              </li>
              <li className="footer__item">
                <a href="#" className="footer__link">
                  Costumers
                </a>
              </li>
              <li className="footer__item">
                <a href="#" className="footer__link">
                  Partners
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="footer__group container">
        <p className="footer__copyright">
          {" "}
          &copy; Copyright Jeanspkdz. All rights reserved
        </p>

        <ul className="footer__social-media">
          <a href="#" className="footer__social-link">
            <IoLogoFacebook size={20} />
          </a>

          <a href="#" className="footer__social-link">
            <IoLogoTwitter size={20} />
          </a>

          <a href="#" className="footer__social-link">
            <IoLogoInstagram size={20} />
          </a>
        </ul>
      </div>
    </footer>
  );
};
