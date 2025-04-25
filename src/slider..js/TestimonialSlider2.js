import React from "react";
import Slider from "react-slick";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const TestimonialSlider2 = () => {
  const testimonials = [
    {
      id: "1",
      image:
        "https://res.cloudinary.com/dixfg1bvv/image/upload/v1729070837/Ellipse_1_4_rlaomp.png",
      name: "Romeena De Silva",
      jobPost: "Janet Cosmetics",
    },
    {
      id: "2",
      image:
        "https://res.cloudinary.com/dixfg1bvv/image/upload/v1729070836/Ellipse_1_3_x9gas4.png",
      name: "Romeena De Silva",
      jobPost: "Janet Cosmetics",
    },
    {
      id: "3",
      image:
        "https://res.cloudinary.com/dixfg1bvv/image/upload/v1729063967/Group_2_2_fyz5pv.png",
      name: "Imran Khan",
      jobPost: "Software Engineer",
    },
    {
      id: "4",
      image:
        "https://res.cloudinary.com/dixfg1bvv/image/upload/v1729070836/Ellipse_1_2_zdzohe.png",
      name: "Romeena De Silva",
      jobPost: "Janet Cosmetics",
    },
    {
      id: "5",
      image:
        "https://res.cloudinary.com/dixfg1bvv/image/upload/v1729070836/Ellipse_1_1_kdo1et.png",
      name: "Romeena De Silva",
      jobPost: "Janet Cosmetics",
    },
  ];

  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    initialSlide: 0, 
    centerMode: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="sliderOuetrMost">
      <div className="sliderOuter">
        <div className="slider-container">
          <Slider {...settings}>
          
              {testimonials.map((item) => {
                return (
                  <div className="sliderInner" key={item.id}>
                    <div>
                      <div className="slideImage">
                        <img src={item.image} alt="" />
                      </div>
                      <div>
                        <FontAwesomeIcon icon={faStar} className="starIcon" />
                        <FontAwesomeIcon icon={faStar} className="starIcon" />
                        <FontAwesomeIcon icon={faStar} className="starIcon" />
                        <FontAwesomeIcon icon={faStar} className="starIcon" />
                        <FontAwesomeIcon icon={faStar} className="starIcon" />
                      </div>
                      <div>
                        <div className="slideUserName">
                          <h5>{item.name}</h5>
                        </div>
                        <div className="slidePost">
                          <span>{item.jobPost}</span>
                          </div>
                      </div>
                    </div>
                  </div>
                );
              })}
           
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default TestimonialSlider2;
