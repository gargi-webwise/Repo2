import React from "react";
import "../Css/Alcaline.css";
import Timeline from "./Timeline";

const Alcaline = () => {
 
  return (
    <div>
      <div>
        <div className="alcaline">
          <div className="line">
            <img
              alt=""
              src="https://res.cloudinary.com/dixfg1bvv/image/upload/v1728911921/Deco-line_q9xkb2.png"
            />
          </div>
          <div>
            <h2>
              How Development
              <p>
                <strong>through Alcaline works</strong>
              </p>
            </h2>
          </div>
        </div>
        <div className="alcalineWorkOuter">
          <div className="alcalineWork">
            <div className="alcalineInner">
              <div className="container">
                <Timeline/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Alcaline;
