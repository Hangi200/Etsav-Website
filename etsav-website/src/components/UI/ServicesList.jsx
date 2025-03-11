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
  
  <Col lg="6" md="6" sm="10" className="mb-4">
    <div className="service__item">
      <span className="mb-4 d-inline-block">
        <i className={item.icon} />
        <h6 className="">{item.title}</h6>
      </span>

      
      <p className="section_description">{item.desc}</p>
    </div>
  </Col>
);

export default ServicesList;