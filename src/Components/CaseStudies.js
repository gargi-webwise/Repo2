import React from "react";
import "../Css/CaseStudies.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";

const CaseStudies = () => {
  const casesArray = [
    {
      id: 1,
      image:
        "https://res.cloudinary.com/dixfg1bvv/image/upload/v1729083070/Case-study__image_gxi7eo.png",
      heading: "Website Design for SCFC Canada",
      data: "Born out of a vision, a single-minded objective that puts service before anything else, Swift Clearance and Forwarding Corp. surging forth to deliver the best services in the shipping and logistics scenario. Its meteoric rise stems out of a solid foundation. The management boasts of over 20 years of rich and varied experience in the shipping and freight forwarding industry",
      color: "rgba(241, 242, 255, 1)",
    },
    {
      id: 2,
      image:
        "https://res.cloudinary.com/dixfg1bvv/image/upload/v1729083070/Case-study__image_1_urjinz.png",
      heading: "Website Design for SCFC Canada",
      data: "Born out of a vision, a single-minded objective that puts service before anything else, Swift Clearance and Forwarding Corp. surging forth to deliver the best services in the shipping and logistics scenario. Its meteoric rise stems out of a solid foundation. The management boasts of over 20 years of rich and varied experience in the shipping and freight forwarding industry",
      color: " rgba(240, 255, 247, 1)",
    },
    {
      id: 3,
      image:
        "https://res.cloudinary.com/dixfg1bvv/image/upload/v1729083070/Case-study__image_2_wijvjw.png",
      heading: "Website Design for SCFC Canada",
      data: "Born out of a vision, a single-minded objective that puts service before anything else, Swift Clearance and Forwarding Corp. surging forth to deliver the best services in the shipping and logistics scenario. Its meteoric rise stems out of a solid foundation. The management boasts of over 20 years of rich and varied experience in the shipping and freight forwarding industry",
      color: "rgba(255, 244, 244, 1)",
    },
  ];
  
  return (
    <div className="caseStudies">
      <div className="topSection">
        <div className="line">
          <img src="https://res.cloudinary.com/dixfg1bvv/image/upload/v1728911921/Deco-line_q9xkb2.png" />
        </div>
        <div>
          <h2>
            Our recent
            <p>
              <strong>Case Studies</strong>
            </p>
          </h2>
        </div>
        <div className="container">
          {casesArray.map((item) => {
            return (
              <div className="row">
              <div
                className="cases"
                key={item.id}
                style={{ background: item.color }}
              >
                
                <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                  <div className="designedImage">
                    <img src={item.image} />
                  </div>
                </div>
                <div className="col-lg-6 col-md-12 col-sm-12 col-12 casesHandled">
                  <div className="designedData">
                    <div className="designedHeading">
                      <h3>{item.heading}</h3>
                    </div>
                    <div className="designedtext">
                      <span>{item.data}</span>
                    </div>
                    <div className="readMore">
                      <span>
                        Read More <FontAwesomeIcon icon={faAngleRight} className="rightIcon"/>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              </div>
            );
          })}
        <div className="moreCases">
          <p>
            Read More Cases
            <FontAwesomeIcon icon={faAngleRight} className="rightIcon" />
          </p>
        </div>
        </div>
      </div>
      <div>
      </div>
    </div>
  );
};

export default CaseStudies;
