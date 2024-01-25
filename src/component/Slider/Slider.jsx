import React from "react";
import "./Slider.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { SliderProducts } from "../../data/products.js";

function Slider() {
  return (
    <div className="s-container">
      <Swiper
        modules={[Pagination, Navigation]}
        navigation={true}
        loopFillGroupWithBlank={true}
        className="swiper"
        slidesPerView={3}
        spaceBetween={40}
        slidesPerGroup={1}
        loop={true}
      >
        {SliderProducts.map((slide) => (
          <SwiperSlide className="SwiperSlide">
            <div className="Slides">
              <div className="name">
                <span>{slide.name}</span>
                <span>{slide.detail}</span>
              </div>
              <span>{slide.price}$</span>
              <div>Shop Now</div>
            </div>
            <img src={slide.img} alt="product" className="ProductImg" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Slider;
