import React from "react";

const Profile = () => {
  return (
    <div className="m-0 p-0">
      <div className="m-0 p-0">
        <img
          src="/assets/images/profile/navbarBackground.png"
          alt=""
          height={110}
          className="w-100 position-absolute"
          srcset=""
        />
        <span className="color-FF9E67 d-flex align-items-center position-relative pt-1 px-3 fs-32">
          <img
            src="/assets/images/profile/arrow.png"
            className="mr-2"
            alt=""
            srcset=""
          />{" "}
          Back
        </span>
      </div>
      <div>
        <img src="/assets/images/profile" alt="" />
      </div>
    </div>
  );
};

export default Profile;
