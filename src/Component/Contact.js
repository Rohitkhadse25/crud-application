import React from "react";

function Contact() {
  return (
    <div>
      <form>
        <div className="container mb-3 mx-2 my-2">
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            First Name
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputFirstName"
          />
          <div id="firstNameHelp" className="form-text"></div>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputLastName" className="form-label">
            Last Name
          </label>
          <input type="text" className="form-control" />
          <div id="lastNameHelp" className="form-text"></div>
        </div>
        <div className="mb-3">
        <label htmlFor="exampleInputEmail1" className="form-label">
          Mobile No.
        </label>
        <input
          type="text"
          className="form-control"
          id="exampleInputMobileNo"
        />
        <div id="MobileNoHelp" className="form-text"></div>
      </div>

        <div className="mb-3 form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="exampleCheck1"
          />
          <label className="form-check-label" for="exampleCheck1">
            Check me out
          </label>
        </div>
        <button type="submit" className="btn btn-primary">
          Send Details        </button>
        </div>
      </form>
      
    </div>
  );
}

export default Contact;
