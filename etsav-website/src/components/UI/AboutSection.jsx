import React from "react";
import { Container, Row, Col } from "reactstrap";
import "../../styles/about-section.css";
import aboutImg from "../../assets/all-images/toyota.png";

const AboutSection = ({ aboutClass }) => {
  return (
    <section
      className="about__section"
      style={
        aboutClass === "aboutPage"
          ? { marginTop: "0px" }
          : { marginTop: "100px" }
      }
    >
      <Container className="container">
        <Row>
          <Col lg="14" md="14">
            <div className="about__section-content">
              <h4 className="section_subtitle">About Us</h4>
              <h2 className="section_title">Welcome to Etsav Car Rental.</h2>
              <p className="section_description">
              Etsav travel agent and car rental, is member Of Helmic Group Cornpany Ltd.
               only pride ourselves on being a leading car rental company offering premium-quality cars and a highly efficient service, but we are also a company that can meet your every need.
                taking you anywhere that you might want to go. When an the road. 
                Etsav Car Rental can be your most trusted COmpaniOn. The company is even able to offer advice and tips regarding vehides and nw!ering that  help Vour company to grow successfully.	
              </p>

              <div className="about__section-item d-grid align-items-center">
                <p className="section_description d-flex align-items-center gap-2">
                  <i class="ri-checkbox-circle-line"></i> Enjoy advantageous tax deductions.
                </p>

                <p className="section_description d-flex align-items-center gap-2">
                  <i class="ri-checkbox-circle-line"></i> You receive a good Return on Assets (ROA).
                </p>
              </div>

              <div className="about__section-item d-grid align-items-center">
                <p className="section_description d-flex align-items-center gap-2">
                  <i class="ri-checkbox-circle-line"></i> There are no negative  effects on your company’s interests or loans
                </p>

                <p className="section_description d-flex align-items-center gap-2">
                  <i class="ri-checkbox-circle-line"></i> You can enjoy VAT benefits.
                </p>
              </div>
            </div>
          </Col>

          <Col lg="6" md="6">
            <div className="about__img">
              <img src={aboutImg} alt="" className="w-500" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AboutSection;