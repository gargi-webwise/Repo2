import React from "react";
import "../Css/Resources.css";
import ResourceSlider from "../slider..js/ResourceSlider";

const Resources = () => {
  return (
    <div>
      <div>
        <div>
          <div className="resources">
            <div className="line">
              <img
                alt=""
                src="https://res.cloudinary.com/dixfg1bvv/image/upload/v1728911921/Deco-line_q9xkb2.png"
              />
            </div>
            <div>
              <h2>
                Featured
                <p>
                  <strong>Resources</strong>
                </p>
              </h2>
            </div>
          </div>
          <div>
            <ResourceSlider/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resources;
