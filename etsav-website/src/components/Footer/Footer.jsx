import React, { useState } from "react";

import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";
import { Link } from "react-router-dom";
import "../../styles/footer.css";

const quickLinks = [
  {
    path: "/about",
    display: "About Us",
  },

  {
    path: "#",
    display: "Privacy Policy",
  },

  {
    path: "/cars",
    display: "Services",
  },
  {
    path: "/blogs",
    display: "Our Blogs",
  },

  {
    path: "/contact",
    display: "Contact Us",
  },
];

const quickLinks1 = [
  {
    path: "/contact",
    display: "Help/FAQs",
  },

  {
    path: "#",
    display: "Partners",
  },

  {
    path: "/cars",
    display: "Start-Up programs",
  },
  {
    path: "/",
    display: "Terms & Conditions",
  },

  {
    path: "/contact",
    display: "Developers/APIs",
  },
];



const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      console.log("Subscribed with:", email);
      setEmail(""); // Clear the input field
    } else {
      alert("Please enter a valid email address.");
    }}
  
  return (
    <>
    
   <div className="newsletter-container">
      <div className="newsletter-title">
        <h5>Newsletter</h5>
        <h2>Your Success Journey Starts Here</h2>
      </div>
      <form onSubmit={handleSubmit} className="newsletter-form">
        <input
          type="email"
          placeholder="Enter Your Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button type="submit">
          <span className="send-icon"><i class="ri-send-plane-fill"></i></span> {/* Replace with an icon */}
        </button>
      </form>
    </div>
    
    <footer className="footer">
      <Container>
        <Row>
        <Col lg="3" md="4" sm="6">
            <div className="info mb-2">
              <h5 className="footer__link-title mb-4">ETSAV GROUP</h5>
              <p className="office__info1"> Etsav travel agent and car rental, is member Of Helmic Group Cornpany Ltd.
only pride ourselves on being a leading car rental company offering premium-quality cars and a highly efficient service, but we are also a company that can meet your every need. taking you anywhere that you might want to go.
</p>
              
            </div>
          </Col>

          <Col lg="2" md="4" sm="6">
            <div className="mb-4">
              <h5 className="footer__link-title">Quick Links</h5>
              <ListGroup>
                {quickLinks.map((item, index) => (
                  <ListGroupItem key={index} className="p-0 mt-3 quick__link">
                    <Link to={item.path}>{item.display}</Link>
                  </ListGroupItem>
                ))}
              </ListGroup>
            </div>
          </Col>

          <Col lg="3" md="4" sm="6">
            <div className="mb-4">
              <h5 className="footer__link-title">Resources</h5>
              <ListGroup>
                {quickLinks1.map((item, index) => (
                  <ListGroupItem key={index} className="p-0 mt-3 quick__link">
                    <Link to={item.path}>{item.display}</Link>
                  </ListGroupItem>
                ))}
              </ListGroup>
            </div>
          </Col>

          <Col lg="3" md="4" sm="6">
            <div className="info mb-4">
              <h5 className="footer__link-title mb-4">Get In Touch</h5>
              <p className="office__info">Haile Selassie Road, Sky Mall, Masaki, Dar es salam, Tanzania</p>
              <p className="office__info">Phone:  +255 735 404 405</p>

              <p className="office__info">Email: info@etsavgroup.com</p>

              <p className="office__info">Office Time: 8am - 5pm</p>
            </div>
          </Col>

          {/* <Col lg="3" md="4" sm="12">
            <div className="mb-4">
              <h5 className="footer__link-title mb-4">Newsletter</h5>
              <p className="section__description">Subscribe our newsletter</p>
              <div className="newsletter">
                <input type="email" placeholder="Email" />
                <span>
                  <i class="ri-send-plane-line"></i>
                </span>
              </div>
            </div>
          </Col> */}

          <Col lg="12">
            <div className="footer__bottom">
              <p className="section__description d-flex align-items-center justify-content-center gap-1 pt-4">
                <i class="ri-copyright-line"></i>ETSAV GROUP(Tanzania) Ltd {year}, 
                All Rights Reserved.    
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
    </>
  );
};

export default Footer;