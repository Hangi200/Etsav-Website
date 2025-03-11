import React from "react";

import CommonSection from "../components/UI/CommonSection";
import Helmet from "../components/Helmet/Helmet";
import AboutSection from "../components/UI/AboutSection";
import { Container, Row, Col } from "reactstrap";
import BecomeDriverSection from "../components/UI/BecomeDriverSection";

import driveImg from "../assets/all-images/driver.jpeg";
import OurMembers from "../components/UI/OurMembers";
import "../styles/about.css";

const About = () => {
  return (
    <Helmet title="About">
      <CommonSection title="About Us" />
      <AboutSection aboutClass="aboutPage" />

      <section className="about__page-section pb-5">
        <Container>
          
            {/* <Col lg="6" md="6" sm="12">
              <div className="about__page-img">
                <img src={driveImg} alt="" className="w-200 h-200 rounded-4" />
              </div>
            </Col> */}
            <div className="secContent flex">
              <div className="about__page-content">
                <h2 className="section_subtitle">
                  Our Vision
                </h2>

                <p className="section_description">
                We Are Here To Take You There.
                </p>
               
                </div>
               
              <div className="about__page-content">
                <h2 className="section_subtitle">
                  Our Mission
                </h2>

                <p className="section_description">
                We will strive to earn our customers loyalty byworking to deriver more than promised. 
                
                </p>
              </div>
                </div>

            {/* <Col lg="16" md="10" sm="12">
              <div className="about__page-content">
                <h2 className="section_title">
                  Our Vision
                </h2>

                <h4 className="section_description ">
                We Are Here To Take You There
                </h4>
          
                </div>
                </Col>
                <Col lg="16" md="16" sm="12">
              <div className="about__page-content">
                <h2 className="section_title">
                  Our Mission
                </h2>

                <p className="section_description">
                We will strive to earn our customers loyalty byworking to deriver more than promised. 
                being honest and fair and "going the extra mile' to provide exceptional
                 personalized service that creates a pleasing business experience-.
                    </p>
              </div>
                </Col>
           
           </Row> */}
           
        </Container>
      </section>

      <BecomeDriverSection />

      <section>
        <Container>
          <Row>
            <Col lg="12" className="mb-5 text-center">
              <h6 className="section__subtitle">Experts</h6>
              <h2 className="section__title1">Our Members</h2>
            </Col>
            <OurMembers />
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default About;