// swiper
import { Autoplay, EffectFade } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

//  swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/autoplay";

// components
import Header from "../Header";

// images
import bgImg1 from "../../assets/images/bg-about-1.jpg";
import bgImg2 from "../../assets/images/bg-about-2.jpg";
import bgImg3 from "../../assets/images/bg-about-3.jpg";

const HeroAnimation = () => {
  return (
    <>
      <div className="relative h-screen overflow-hidden">
        <Header />
        <Swiper
          modules={[Autoplay, EffectFade]}
          spaceBetween={0}
          slidesPerView={1}
          effect="fade"
          autoplay={{ delay: 2000 }}
          className="h-full"
        >
          <SwiperSlide>
            <div
              className="w-full h-full bg-cover bg-no-repeat bg-center"
              style={{
                backgroundImage: `url(${bgImg3})`,
              }}
            ></div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              className="w-full h-full bg-cover bg-no-repeat bg-center"
              style={{
                backgroundImage: `url(${bgImg2})`,
              }}
            ></div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              className="w-full h-full bg-cover bg-no-repeat bg-center"
              style={{
                backgroundImage: `url(${bgImg1})`,
              }}
            ></div>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};

export default HeroAnimation;
