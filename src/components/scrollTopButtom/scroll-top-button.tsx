import { IoMdArrowRoundUp } from "react-icons/io";
import "./scroll-top-button.css"

export const ScrollTopButton = () => {
  return (
    <a href="#home" className="scroll-top-button button button--primary">
        <IoMdArrowRoundUp/>
    </a>
  )
}

