import { IoMdArrowForward } from "react-icons/io";
import "./program.css";

export interface ProgramProps {
  title: string;
  description: string;
  imageUrl: string;
}

export const Program = ({ title, description, imageUrl }: ProgramProps) => {
  return (
    <article className="program">
      <div className="program__data">
        <div className="program__shape">
          <img
            className="program__logo"
            src={imageUrl}
            alt={`${title} program image`}
          />
        </div>
        <h3 className="program__title">{title}</h3>
        <p className="program__description">{description}</p>
      </div>

      <a className="program__button">
        <IoMdArrowForward size={20} />
      </a>
    </article>
  );
};
