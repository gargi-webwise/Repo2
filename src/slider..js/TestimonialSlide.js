import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const TestimonialSlide = () => {
  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            // infinite: true,
            // dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 1
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
      <div>
        <Slider {...settings}>
          <div className="row mainSlide">
            <div className="col-lg-3 col-md-2 quotation1">
                <img src="https://res.cloudinary.com/dixfg1bvv/image/upload/v1729059811/Vector_kogwoa.svg"/>
            </div>
            <div className="col-md-6 testimonialSlider1">

            <p>
              Without any doubt I recommend Alcaline Solutions as one of the
              best web design and digital marketing agencies. One of the best
              agencies I’ve came across so far. Wouldn’t be hesitated to
              introduce their work to someone else.
            </p>
            </div>
            <div className="col-lg-3 col-md-2 quotation2">
                <img src="https://res.cloudinary.com/dixfg1bvv/image/upload/v1729060446/fluent_comma-24-regular_psqje5.svg"/>
            </div>
          </div>
          
        </Slider>
       
      </div>
    </div>
  );
};

export default TestimonialSlide;
