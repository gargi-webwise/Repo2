import React from "react";
import "../Css/Approach.css";
const Approach = () => {
  const approachArray = [
    {
      id: 1,
      color: "linear-gradient(225deg, #29272E 0%, #27272E 100%)",
      image:
        "https://res.cloudinary.com/dixfg1bvv/image/upload/v1729147019/Rocket_perspective_matte_xhdc89.png",
      heading: "UX Driven Engineering",
      text1: "Unlike other companies, we are a ",
      text2: "UX first ",
      text3:
        "development company. Projects are driven by designers and they make sure design and experiences translate to code.",
    },
    {
      id: 2,
      color: "linear-gradient(225deg, #68DBF2 0.01%, #509CF5 100%)",
      image:
        "https://res.cloudinary.com/dixfg1bvv/image/upload/v1729147019/Code_perspective_matte_bzbnj0.png",
      heading: "Developing Shared Understanding",
      text1: "Unlike other companies, we are a ",
      text2: "UX first ",
      text3:
        "development company. Projects are driven by designers and they make sure design and experiences translate to code.",
    },
    {
      id: 3,
      color: "linear-gradient(224.47deg, #FF92AE 8.18%, #FF3D9A 95.84%)",
      image:
        "https://res.cloudinary.com/dixfg1bvv/image/upload/v1729147019/Heart_rate_perspective_matte_eubztf.png",
      heading: "Proven Experience and Expertise",
      text1: "Unlike other companies, we are a ",
      text2: "UX first ",
      text3:
        "development company. Projects are driven by designers and they make sure design and experiences translate to code.",
    },
    {
      id: 4,
      color: "linear-gradient(225deg, #67E9F1 0%, #24E795 100%)",
      image:
        "https://res.cloudinary.com/dixfg1bvv/image/upload/v1729147019/Shield_perspective_matte_xvls8b.png",
      heading: "Security & Intellectual Property (IP) ",
      text1: "Unlike other companies, we are a ",
      text2: "UX first ",
      text3:
        "development company. Projects are driven by designers and they make sure design and experiences translate to code.",
    },
    {
      id: 5,
      color: "linear-gradient(225deg, #FFEF5E 0%, #F7936F 100%)",
      image:
        "https://res.cloudinary.com/dixfg1bvv/image/upload/v1729148752/Success_perspective_matte_px3sqp.png",
      heading: "Code Reviews",
      text1: "Unlike other companies, we are a",
      text2: "UX first ",
      text3:
        "development company. Projects are driven by designers and they make sure design and experiences translate to code.",
    },
    {
      id: 6,
      color: " linear-gradient(225deg, #F76680 0%, #57007B 100%)",
      image:
        "https://res.cloudinary.com/dixfg1bvv/image/upload/v1729147019/Padlock_perspective_matte_os8xwd.png",
      heading: "Quality Assurance & Testing",
      text1: "Unlike other companies, we are a",
      text2: "UX first ",
      text3:
        "development company. Projects are driven by designers and they make sure design and experiences translate to code.",
    },
  ];
  return (
    <div className="designsAndApproach">
      <div>
        <div className="approach">
          <div className="line">
            <img src="https://res.cloudinary.com/dixfg1bvv/image/upload/v1728911921/Deco-line_q9xkb2.png" />
          </div>
          <div>
            <h2>
              Our Design and
              <p>
                <strong>development approach</strong>
              </p>
            </h2>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row approchesHeld">
          {approachArray.map((item) => {
            return (
              <div
                className="col-lg-6 col-md-6 col-12 col-12 softwareTesting"
                key={item.id}
              >
                <div className="worksDone">
                  <div className="approachesMade">
                    <div
                      className="approachImages"
                      style={{ background: item.color }}
                    >
                      <img src={item.image} alt="" />
                    </div>
                    <div>
                      <div className="approachHeading">
                        <h4>{item.heading}</h4>
                      </div>
                      <div className="approachText">
                        <span>{item.text1}</span>
                        <span
                          className="approachText1"
                          style={{ background: item.color }}
                        >
                          {" "}
                          {item.text2}
                        </span>
                        <span> {item.text3}</span>
                      </div>
                    </div>
                  </div>
                </div> 
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Approach;
