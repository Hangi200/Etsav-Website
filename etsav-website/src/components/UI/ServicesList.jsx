import React from "react";
import { Col } from "reactstrap";
import "../../styles/services-list.css";
import servicesData from "../../assets/data/serviceData";

const ServicesList = () => {
  return (
    
    <>
      {servicesData.map((item) => (
        <ServiceItem item={item} key={item.id} />
        
      ))}
    </>
  );
};

const ServiceItem = ({ item }) => (
  
  <Col lg="6" md="6" sm="10" className="mb-0">
    <div className="service__item">
      <span className="mb-4 d-inline-block">
        <i class={item.icon} />
      </span>

      <h6 className="P-2">{item.title}</h6>
      <p className="section_description">{item.desc}</p>
    </div>
  </Col>
);

export default ServicesList;