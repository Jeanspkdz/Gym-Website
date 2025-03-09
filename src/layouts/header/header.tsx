import headerLogo from "@/assets/img/logo-nav.png";
import { IoMenuOutline, IoCloseSharp } from "react-icons/io5";
import "./header.css";
import { useState } from "react";
import cslx from "clsx/lite";

export const Header = () => {
  const [isMenuActive, setIsMenuActive] = useState(false);

  const toggleIsMenuActive = () => {
    setIsMenuActive(!isMenuActive);
  }

  return (
    <header className="header">
      <nav className="nav container">
        <a href="#" className="nav__logo">
          <img src={`${headerLogo}`} alt="Gym Logo" className="nav__logo-img" />
          <span>Academia</span>
          {/* ACADEMIA */}
        </a>

        <div
          className={`nav__menu ${cslx(isMenuActive && "nav__menu--active")}`}
        >
          <ul className="nav__list">
            <li>
              <a href="#" className="nav__link">
                Home
              </a>
            </li>

            <li>
              <a href="#" className="nav__link">
                Program
              </a>
            </li>

            <li>
              <a href="#" className="nav__link">
                Choose Us
              </a>
            </li>

            <li>
              <a href="#" className="nav__link">
                Pricing
              </a>
            </li>

            <li>
              <button className="button button--secondary">
                Register Now
              </button>
            </li>
          </ul>

          <button className="nav__btn nav__btn--close" onClick={toggleIsMenuActive}>
            <IoCloseSharp size={25}/>
          </button>
        </div>

        <button
          className="nav__btn nav__btn--toggle"
          onClick={toggleIsMenuActive}
        >
          <IoMenuOutline size={25} />
        </button>
      </nav>
    </header>
  );
};
