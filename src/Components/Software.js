import React from "react";
import "../Css/Software.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Software = () => {
  return (
    <div className="container">
      <div className="row softwareDetails">
        <div className="col-lg-6 col-md-12 col-sm-12 col-12 aboutTeam">
          <div className="line">
            <img src="https://res.cloudinary.com/dixfg1bvv/image/upload/v1728911921/Deco-line_q9xkb2.png" />
          </div>
          <div className="softwareLeading">
            <h2>
              Leading companies trust us
              <p>
                <strong>to develop Software</strong>
              </p>
            </h2>
          </div>
          <div className="softwareDevelopmentTeam">
            <p>
              We
              <sapn className="softwareDevelopment"> add development capacity </sapn>
               to tech teams. Our value isn’t limited to building teams but is
              equally distributed across the project lifecycle. We are a custom
              software development company that guarantees the successful
              delivery of your project.
            </p>
          </div>
          <div className="moreInfo">
            <span>
              See More Information <FontAwesomeIcon icon={faArrowRight} className="arrowIcon" />
            </span>
          </div>
        </div>
        <div className="col-lg-6 col-md-12 col-sm-12 col-12 softwareTeamImage" >
          <div className="softwareTeam">
            <img src="https://res.cloudinary.com/dixfg1bvv/image/upload/v1728910537/Rectangle_9_rsttfc.png" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Software;
