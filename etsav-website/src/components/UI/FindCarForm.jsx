import React from "react";
import "../../styles/find-car-form.css";
import "../../styles/find-car-form.css";
import { Form, FormGroup } from "reactstrap";

const FindCarForm = () => {
  return (
    <Form className="form">
      <div className=" d-flex align-items-center justify-content-between flex-wrap">
        <FormGroup className="form__group">
          <input type="text" placeholder="From " required />
        </FormGroup>

        <FormGroup className="form__group">
          <input type="text" placeholder="To " required />
        </FormGroup>

        <FormGroup className="form__group">
          <input type="date" placeholder="Journey date" required />
        </FormGroup>

        <FormGroup className="form__group">
          <input
            type="time"
            placeholder="Travel time"
            required
          />
        </FormGroup>
        <FormGroup className="select__group">
          <select>
            <option value="ac" className="section_description">AC car</option>
            <option value="non-ac">Non AC Car</option>
          </select>
        </FormGroup>

        <FormGroup className="form__group">
          <button className="btn find__car-btn">Search Car</button>
        </FormGroup>
      </div>
    </Form>
  );
};

export default FindCarForm;