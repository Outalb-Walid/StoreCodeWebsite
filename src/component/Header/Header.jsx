import React from "react";
import css from "./Header.module.css";
import HeroImg from "../../assets/hero.png";
import { RiShoppingBagFill } from "react-icons/ri";
import { BsArrowRight } from "react-icons/bs";

function Header() {
  return (
    <div className={css.container}>
      <div className={css.h_side}>
        <span className={css.text1}>skin protection cream</span>
        <div className={css.text2}>
          <span>Trendly Collections</span>
          <span>
            {" "}
            Seedly say has suitable disposal and boy.Execise joy man children
            rejoiced
          </span>
        </div>
        {/* {middle side hero image} */}
      </div>
      <div className={css.wrapper}>
        <div className={css.bluecircle}></div>
        <img src={HeroImg} alt="HeroImg" />
        <div className={css.cart2}>
          <RiShoppingBagFill />
          <div className={css.signup}>
            <span>Best Signup Offers</span>
            <div>
              <BsArrowRight />
            </div>
          </div>
        </div>
      </div>
      {/* right side */}
      <div className={css.h_side}>
        <div className={css.traffic}>
          <span>1.5m</span>
          <span>Mothly Traffic</span>
        </div>
        <div className={css.customers}>
          <span>100K</span>
          <span>Happy customers</span>
        </div>
      </div>
    </div>
  );
}

export default Header;
