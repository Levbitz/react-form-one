import React from "react";
import SignImage from "../image/signup-illustration.svg";

import "../css/Form.css";

function Form() {
  return (
    <div className="Form-wrapper">
      <div className="container z-depth-5">
        <div className="row">
          <div className="col s12 ">
            <h2 className="white-text darken-5">Contact us</h2>
          </div>
          <div className="col s12 l5">
            <img className="signUpImg" src={SignImage} alt="" />
          </div>
          <div className="col l7 ">
            <form action="">
              <div className="row">
                <div className="input-field col s6">
                  <i className="material-icons prefix white-text ">
                    person_pin
                  </i>
                  <input placeholder="John" type="text" className="Validate" />
                  <label className="white-text" htmlFor="first_name">
                    First Name
                  </label>
                </div>
                <div className="input-field col s6">
                  <i className="material-icons prefix white-text">person_pin</i>
                  <input type="text" className="Validate" placeholder="Doe" />
                  <label className="white-text" htmlFor="last-name ">
                    Last Name
                  </label>
                </div>
              </div>

              <div className="row">
                <div className="input-field col s12">
                  <i className="material-icons prefix white-text">
                    mail_outline
                  </i>
                  <input
                    type="email"
                    className="Validate"
                    placeholder="abc@gmail.com"
                  />
                  <label className="white-text" htmlFor="first_name">
                    Email
                  </label>
                </div>
              </div>

              <div className="row">
                <div className="input-field col s12">
                  <i className="material-icons prefix white-text">mode_edit</i>
                  <textarea
                    placeholder="write your message"
                    id="textarea1"
                    className="materialize-textarea"
                  ></textarea>
                  <label className="white-text" htmlFor="textarea1">
                    Message
                  </label>
                </div>
                <div className="input-field col s12">
                  <button className="btn red darken-2  waves-effect waves-light">
                    {" "}
                    Submit
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Form;
