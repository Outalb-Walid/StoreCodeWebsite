import React from "react";
import css from "./Section.module.css";
import Img from "../../assets/testimonialHero.png";
import { TestimonialsData } from "../../data/testimonials.js";
import { SwiperSlide, Swiper } from "swiper/react";

function Section() {
  return (
    <div className={css.testimonials}>
      <div className={css.wrapper}>
        <div className={css.container}>
          <span>Top Rated</span>
          <span>
            Speedily say has suitable disposal and boy. Exercise joy man
            children
          </span>
        </div>
        <img src={Img} alt="" />
        <div className={css.container}>
          <span>100k</span>
          <span>Happy Customers with us</span>
        </div>
      </div>
      <div className={css.review}>Review</div>
      <Swiper
        slidesPerView={3}
        slidesPerGroup={1}
        spaceBetween={20}
        className={css.swiper}
      >
        {TestimonialsData.map((item, i) => (
          <SwiperSlide key={i}>
            <div className={css.sectiontwo}>
              <img src={item.image} alt="" />
              <span>{item.comment}</span>
              <hr />
              <span>{item.name}</span>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Section;
