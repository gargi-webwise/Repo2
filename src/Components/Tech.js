import React, { useState } from "react";
import "../Css/Tech.css";
import {
  Backend,
  CloudTesting,
  Cms,
  Database,
  DevOps,
  Frontend,
} from "./Languages";

const Tech = () => {
  const [stack, setStack] = useState(1);

  const handleStack = (id) => {
    setStack(id);
  };

  const getClassName = (id) => (stack === id  && "activeStack");

  return (
    <div>
      <div className="container techOuter">
        <div className="techMain">
          <div className="line">
            <img
              alt=""
              src="https://res.cloudinary.com/dixfg1bvv/image/upload/v1728911921/Deco-line_q9xkb2.png"
            />
          </div>
          <div>
            <h2>
              Our
              <p>
                <strong>Tech Stack </strong>
              </p>
            </h2>
          </div>
          <div className="techStack">
            <ul>
              <li onClick={() => handleStack(1)} className={getClassName(1)}>
                Frontend
              </li>
              <li onClick={() => handleStack(2)} className={getClassName(2)}>
                Backend
              </li>
              <li onClick={() => handleStack(3)} className={getClassName(3)}>
                Databases
              </li>
              <li onClick={() => handleStack(4)} className={getClassName(4)}>
                CMS
              </li>
              <li onClick={() => handleStack(5)} className={getClassName(5)}>
                CloudTesting
              </li>
              <li onClick={() => handleStack(6)} className={getClassName(6)}>
                DevOps
              </li>
            </ul>
          </div>
        </div>
        <div className="technologies">
          <div className="technologiesImages">
            <div className="technologyProvidedStack">
              {stack === 1 && <Frontend />}
            </div>

            <div className="technologyProvidedStack">
              {stack === 2 && <Backend />}
            </div>

            <div className="technologyProvidedStack">
              {stack === 3 && <Database />}
            </div>

            <div className="technologyProvidedStack">{stack === 4 && <Cms />}
            </div>

          <div className="technologyProvidedStack">
            {stack === 5 && <CloudTesting />}
          </div>

          <div className="technologyProvidedStack">{stack === 6 && <DevOps />}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tech;
