import React from "react";
import { Swiper as SwiperReact, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "../Css/Slides.css";

// import required modules
import { Pagination, Navigation, Autoplay } from "swiper/modules";

const Slides = () => {
  const slideArray = [
    {
      id: 1,
      insideCircle:
        "https://res.cloudinary.com/dixfg1bvv/image/upload/v1728892710/Mobile_app_perspective_matte_rkcwp9.png",
      heading: "Mobile App Development",
      data: "A Website is an extension of yourself and we can help you to express it properly. Your website is your number one marketing asset because we live in a digital age.",
    },
    {
      id: 2,
      insideCircle:
        "https://res.cloudinary.com/dixfg1bvv/image/upload/v1728892709/Code_perspective_matte_x3yyv1.png",
      heading: "Web Development & Design",
      data: "A Website is an extension of yourself and we can help you to express it properly. Your website is your number one marketing asset because we live in a digital age.",
    },
    {
      id: 3,
      insideCircle:
        "https://res.cloudinary.com/dixfg1bvv/image/upload/v1728892710/Dashboard_perspective_matte_moxx3a.png",
      heading: "Software Testing Service",
      data: "A Website is an extension of yourself and we can help you to express it properly. Your website is your number one marketing asset because we live in a digital age.",
    },
    {
      id: 4,
      insideCircle:
        "https://res.cloudinary.com/dixfg1bvv/image/upload/v1728892710/Dashboard_perspective_matte_moxx3a.png",
      heading: "Software Testing Service",
      data: "A Website is an extension of yourself and we can help you to express it properly. Your website is your number one marketing asset because we live in a digital age.",
    },
  ];
  return (
    <div>
      <div className="servicesOffered">
        <h2>Services we offer</h2>
      </div>
      <div className="swiperReact">
        <SwiperReact
        slidesPerView={1}
          spaceBetween={90}
          centeredSlides={true}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 2,
              spaceBetween: 50,
            },
          }}
          autoplay={{
            delay: 1500,
            disableOnInteraction: false,
          }}

          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide className="swipeSlide">
            <div className="swiperSlider">
              {slideArray.map((item) => {
                return (
                  <div className="sliderBox" key={item.id}>
                    <div>
                      <img
                        className="sliderInsideCirlcle"
                        src={item.insideCircle}
                        alt=""
                      />
                    </div>
                    <div>
                      <div>
                        <div>
                          <h4 className="slideHeading">{item.heading}</h4>
                        </div>
                        <div>
                          <p className="slideData">{item.data}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </SwiperSlide>
        </SwiperReact>
      </div>
    </div>
  );
};

export default Slides;
