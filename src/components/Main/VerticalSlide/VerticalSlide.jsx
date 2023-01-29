import { Swiper, SwiperSlide } from "swiper/react";
import "./verticalSlide.scss";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/bundle";

import { EffectFade, Autoplay } from "swiper";

export const VerticalSlider = (props) => {
  return (
    <>
      <Swiper
        direction={"vertical"}
        effect={"fade"}
        speed={500}
        autoplay={{
          delay: 2500,
          disableOnInteraction: true,
        }}
        modules={[EffectFade, Autoplay]}
        className="mySwiper"
      >
        {props.images.map((item) => (
          <SwiperSlide key={item.title} style={{ position: "relative" }}>
            <img src={item.img} alt="vertical" />
            <div className="vertical_description">
              <h4>{item.title}</h4>
              <p>{item.span}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};
