import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const ResourceSlider = () => {
  const slideImage = [
    {
      id: 1,
      image:
        "https://res.cloudinary.com/dixfg1bvv/image/upload/v1729168283/Rectangle_10_rl1nwk.png",
      data: "How to Build a Scalable Application up to 1 Million Users on AWS",
    },
    {
      id: 2,
      image:
        "https://res.cloudinary.com/dixfg1bvv/image/upload/v1729168282/Rectangle_10_1_fnlmuf.png",
      data: "How to Build a Scalable Application up to 1 Million Users on AWS",
    },
    {
      id: 3,
      image:
        "https://res.cloudinary.com/dixfg1bvv/image/upload/v1729168282/Rectangle_10_2_jmxzhs.png",
      data: "How to Build a Scalable Application up to 1 Million Users on AWS",
    },
    {
      id: 4,
      image:
        "https://res.cloudinary.com/dixfg1bvv/image/upload/v1729168282/Rectangle_10_3_dlrogg.png",
      data: "How to Build a Scalable Application up to 1 Million Users on AWS",
    },
    {
      id: 5,
      image:
        "https://res.cloudinary.com/dixfg1bvv/image/upload/v1729168285/Rectangle_10_4_tcho4j.png",
      data: "How to Build a Scalable Application up to 1 Million Users on AWS",
    },
  ];
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4.5,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3 ,
          slidesToScroll: 1,
          // infinite: true,
          // dots: true
        }
      },
      {
        breakpoint: 786,
        settings: {
          slidesToShow: 2.5,
          slidesToScroll: 1,
          initialSlide: 2
        }
      },
      {
        breakpoint: 680,
        settings: {
          slidesToShow: 1.6,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]   
  };
  return (
    <div>
      <div className="slider-container">
        <Slider {...settings}>
          {slideImage.map((item) => {
            return (
              <div className="resourceSlider" key={item.id}>
                <div className="resouceProvided">
                  <div className="resourceImage">
                    <img src={item.image} />
                  </div>
                  <div className="resourceData">
                    <p>{item.data}</p>
                  </div>
                </div>
               <div className="more">
                <p>Read More <FontAwesomeIcon icon={faArrowRight}/></p>
               </div>
              </div>
            );
          })}
        </Slider>
      </div>
    </div>
  );
};

export default ResourceSlider;
