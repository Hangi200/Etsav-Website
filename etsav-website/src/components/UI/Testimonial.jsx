import React from "react";
import Slider from "react-slick";

import "../../styles/testimonial.css";

import ava01 from "../../assets/all-images/nosa.jpg";
import ava02 from "../../assets/all-images/linksoft.png";
import ava03 from "../../assets/all-images/gas1.jpg";
import ava04 from "../../assets/all-images/maktech.png";
import ava05 from "../../assets/all-images/Nokia-Logo1.png";
import ava06 from "../../assets/all-images/tigo-logo.png";



const Testimonial = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 1000,
    swipeToSlide: true,
    autoplaySpeed: 2000,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Slider {...settings}>
      <div className="testimonial py-4 px-3">
        <p className="section_description">
 
        </p>

        <div className="mt-3 d-flex align-items-center gap-4">
          <img src={ava01} alt="" className="w-25 h-25 rounded-2" />

          <div>
            <h6 className="mb-0 mt-3">Nosa Company</h6>
            <p className="section_description">Client</p>
          </div>
        </div>
      </div>

      <div className="testimonial py-4 px-3">
        <p className="section_description">
          
              </p>

        <div className="mt-3 d-flex align-items-center gap-4">
          <img src={ava02} alt="" className="w-25 h-25 rounded-2" />

          <div>
            <h6 className="mb-0 mt-3">Link Soft</h6>
            <p className="section_description">Client</p>
          </div>
        </div>
      </div>

      <div className="testimonial py-4 px-3">
        <p className="section_description">
          
               </p>

        <div className="mt-3 d-flex align-items-center gap-4">
          <img src={ava03} alt="" className="w-25 h-25 rounded-2" />

          <div>
            <h6 className="mb-0 mt-3">Gas Group</h6>
            <p className="section_description">Client</p>
          </div>
        </div>
      </div>

      <div className="testimonial py-4 px-3 ">
        <p className="section_description">
          </p>

        <div className="mt-3 d-flex align-items-center gap-4">
          <img src={ava04} alt="" className="w-25 h-25 rounded-2" />

          <div>
            <h6 className="mb-0 mt-3">Maktech Company</h6>
            <p className="section_description">Client</p>
          </div>
        </div>
      </div>
      <div className="testimonial py-4 px-3">
        <p className="section_description">
        
        </p>

        <div className="mt-3 d-flex align-items-center gap-4">
          <img src={ava05} alt="" className="w-25 h-25 rounded-2" />

          <div>
            <h6 className="mb-0 mt-3">Nokia Company</h6>
            <p className="section_description">Client</p>
          </div>
        </div>
      </div>
      <div className="testimonial py-4 px-3">
        <p className="section_description">
        
        </p>

        <div className="mt-3 d-flex align-items-center gap-4">
          <img src={ava06} alt="" className="w-25 h-25 rounded-2" />

          <div>
            <h6 className="mb-0 mt-3">Tigo Company</h6>
            <p className="section_description">Client</p>
          </div>
        </div>
      </div>
    </Slider>
  );
};

export default Testimonial;