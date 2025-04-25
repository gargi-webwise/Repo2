import React from "react";
import Navbar from "../Shared Components/Navbar";
import "../Css/Home.css";
import Slides from "../slider..js/Slides";
import Software from "./Software";
import WorkingTeam from "./WorkingTeam";
import Testimonials from "./Testimonials";
import CaseStudies from "./CaseStudies";
import BuildingSoftware from "./BuildingSoftware";
import Approach from "./Approach";
import Tech from "./Tech";
import Alcaline from "./Alcaline";
import Resources from "./Resources";
import Hiring from "./Hiring";
import Footer from "../Shared Components/Footer";

const Home = () => {
  return (
    <div>
      <Navbar />
      {/* HOmeBanner */}
      <section>
        <div className="container">
          <div className="row home">
            <div className="col-lg-6 col-md-12 col-sm-12 col-12 bannerDetails">
              <div className="bannerHeading">
                <h1>
                  Great <span className="homeProduct"> Product</span> is
                  <p className="homeheading">
                    <strong>built by great</strong>
                    <span className="homeTeams"> teams</span>
                  </p>
                </h1>
              </div>
              <div>
                <p className="homeText">
                  We help build and manage a team of world-class developers to
                  bring your vision to life
                </p>
              </div>

              <div className="letsStartbutton">Let's Get Started !</div>
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12 col-12 homeBannerImg">
              <img
                className="homeBannerImage"
                src="https://res.cloudinary.com/dixfg1bvv/image/upload/v1728882033/Hero-Wrapper__image_jm4xai.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
      {/* Services Offered */}
      <section className="services">
        <Slides />
      </section>
      {/* Software Testing */}
      <section className="softwareTesting">
        <Software />
      </section>
      {/* teamSection */}
      <section className="workingTeam">
        <WorkingTeam />
      </section>
      {/* Testimonials */}
      <section>
        <Testimonials/>
      </section>
      {/* CaseStudies */}
      <section>
        <CaseStudies/>
      </section>
      {/* Building Software */}
      <section>
        <BuildingSoftware/>
      </section>
      {/* Approaches */}
      <section>
        <Approach/>
      </section>
      {/* Tech stack */}
      <section>
        <Tech/>
      </section>
      {/* Alcakine Work */}
      {/* <section>
        <Alcaline/>
      </section> */}
      {/* Resources */}
      <section >
        <Resources/>
      </section>
      <section>
        <Hiring/>
      </section>
      {/* Footwer */}
      <section>
        <Footer/>
      </section>
    </div>
  );
};

export default Home;
