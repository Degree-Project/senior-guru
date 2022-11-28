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
        <div
          className="color-FF9E67 d-flex align-items-center position-relative pt-1 px-3 fs-32"
          style={{ zIndex: "111111", cursor: "pointer" }}
        >
          <img
            src="/assets/images/profile/arrow.png"
            className="mr-2"
            alt=""
            srcset=""
          />{" "}
          Back
        </div>
      </div>
      <div className="d-flex px-5 row m-0 p-0" style={{ zIndex: "111111" }}>
        <img
          src="/assets/images/profile/guru.png"
          height={230}
          width={230}
          style={{
            zIndex: "111111",
            borderRadius: "50%",
            border: "20px solid #FFCF25",
          }}
          className="col-"
          alt=""
        />
        <div className="col pt-5">
          <div className="d-flex justify-content-start align-items-end">
            <h1 className="p-0 m-0">Guru Name</h1>
            <h6 className="pl-3" >
              Location <i class="fas fa-location-dot"></i>
            </h6>
          </div>
          {/* Guru Name */}
        </div>
      </div>
    </div>
  );
};

export default Profile;
