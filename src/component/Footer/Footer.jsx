import React from "react";
import css from "./Footer.module.css";
import Logo from "../../assets/logo.png";
import { BiSolidLocationPlus } from "react-icons/bi";

function Footer() {
  return (
    <div className={css.Footer}>
      <hr/>
      <div className={css.container}>
        <div className={css.logo}>
          <img src={Logo} alt="" />
          <span>Amazon</span>
        </div>
        <div className={css.block}>
          <div className={css.detail}>
            <span>Contact Us</span>
            <span className={css.pngline}>
              <BiSolidLocationPlus className={css.icon} />
              <span>III north avenue Orlando,FL 32801</span>
            </span>
            <span className={css.pngline}>
              <BiSolidLocationPlus className={css.icon} />
              <span>III north avenue Orlando,FL 32801</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
