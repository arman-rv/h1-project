import React from "react";
import "./Update.css";

const Update = () => {
  return (
    <div className="container-xl px-4 mt-4 ">
      <hr className="mt-0 mb-4" />
      <div className="w-full flex gap-[100px]">
        <div className="flex ">
          <div className="card mb-4 mb-xl-0 w-[300px]">
            <div className="card-header">Profile Picture</div>
            <div className="card-body text-center">
              <img
                className="img-account-profile rounded-circle mb-2"
                src="http://bootdey.com/img/Content/avatar/avatar1.png"
                alt=""
              />

              <div className="small font-italic text-muted mb-4">
                JPG or PNG no larger than 5 MB
              </div>

              <button className="btn btn-primary" type="button">
                Upload new image
              </button>
            </div>
          </div>
        </div>
        <div className="col-xl-8">
          <div className="card mb-4 w-[600px]">
            <div className="card-header">Account Details</div>
            <div className="card-body">
              <form>
                <div className="mb-3">
                  <label className="small mb-1" htmlFor="inputUsername">
                    Username (how your name will appear to other users on the
                    site)
                  </label>
                  <input
                    className="form-controll"
                    id="inputUsername"
                    type="text"
                    placeholder="Enter your username"
                    value="username"
                  />
                </div>

                <div className="w-full flex gap-4 gx-3 mb-3">
                  <div className="w-[50%] col-md-6">
                    <label className="small mb-1" htmlFor="inputFirstName">
                      First name
                    </label>
                    <input
                      className="form-controll"
                      id="inputFirstName"
                      type="text"
                      placeholder="Enter your first name"
                      value="Valerie"
                    />
                  </div>

                  <div className="w-[50%] col-md-6">
                    <label className="small mb-1" htmlFor="inputLastName">
                      Last name
                    </label>
                    <input
                      className="form-controll"
                      id="inputLastName"
                      type="text"
                      placeholder="Enter your last name"
                      value="Luna"
                    />
                  </div>
                </div>

                <div className="w-full flex gap-4 gx-3 mb-3">
                  <div className="w-[50%] col-md-6">
                    <label className="small mb-1" htmlFor="inputOrgName">
                      Organization name
                    </label>
                    <input
                      className="form-controll"
                      id="inputOrgName"
                      type="text"
                      placeholder="Enter your organization name"
                      value="Start Bootstrap"
                    />
                  </div>

                  <div className="w-[50%] col-md-6">
                    <label className="small mb-1" htmlFor="inputLocation">
                      Location
                    </label>
                    <input
                      className="form-controll"
                      id="inputLocation"
                      type="text"
                      placeholder="Enter your location"
                      value="San Francisco, CA"
                    />
                  </div>
                </div>

                <div className="mb-3">
                  <label className="small mb-1" htmlFor="inputEmailAddress">
                    Email address
                  </label>
                  <input
                    className="form-controll"
                    id="inputEmailAddress"
                    type="email"
                    placeholder="Enter your email address"
                    value="name@example.com"
                  />
                </div>

                <div className="w-full flex gap-4 gx-3 mb-3">
                  <div className="w-[50%] col-md-6">
                    <label className="small mb-1" htmlFor="inputPhone">
                      Phone number
                    </label>
                    <input
                      className="form-controll"
                      id="inputPhone"
                      type="tel"
                      placeholder="Enter your phone number"
                      value="555-123-4567"
                    />
                  </div>

                  <div className="w-[50%] col-md-6">
                    <label className="small mb-1" htmlFor="inputBirthday">
                      Birthday
                    </label>
                    <input
                      className="form-controll"
                      id="inputBirthday"
                      type="text"
                      name="birthday"
                      placeholder="Enter your birthday"
                      value="06/10/1988"
                    />
                  </div>
                </div>

                <button className="btn btn-primary" type="button">
                  Save changes
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { Update };
