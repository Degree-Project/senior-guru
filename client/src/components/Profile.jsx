import React, { useState, useEffect } from "react";
import { Tabs, Box, Tab } from "@mui/material";
import { TabPanel } from "./TabComponent/TabPanel";
import Cards from "./TabComponent/Cards";
import "../css/Profile.css";
import { useNavigate } from "react-router-dom";
import BookingCards from "./TabComponent/BookingCards";
import AddCertificateModal from "./TabComponent/AddCertificateModal";
import AddServiceModal from "./TabComponent/AddServiceModal";
import axios from "axios";
import ServiceCards from "./TabComponent/ServiceCards";

const Profile = () => {
  let history = useNavigate();
  const [value, setValue] = useState(0);
  const [addCertificateModalShow, setAddCertificateModalShow] = useState(false);
  const [addServicesModalShow, setAddServicesModalShow] = useState(false);
  const [services, setServices] = useState();
  const [certificates, setCertificate] = useState();
  const [booking, setBooking] = useState();
  const [bookingGuru, setBookingGuru] = useState();
  const [userDetails, setUserDetails] = useState([]);

  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      "aria-controls": `simple-tabpanel-${index}`,
    };
  }

  const getServices = () => {
    axios.get("/api/guru/service/all").then((res) => {
      setServices(res.data.services);
    });
  };

  const getMyCertificates = () => {
    axios.get("/api/guru/certificate/all").then((res) => {
      setCertificate(res.data.certificates);
    });
  };

  const getStudentBooking = () => {
    axios.get("/api/reservations/me").then((res) => {
      setBooking(res.data.reservations);
    });
  };

  const getGuruBooking = () => {
    axios.get("/api/guru/reservations/me").then((res) => {
      setBookingGuru(res.data.reservations);
    });
  };

  const getUser = () => {
    axios.get("/api/me").then((res) => {
      setUserDetails(res.data.user);
    });
  };

  useEffect(() => {
    getUser();
    getServices();
    getMyCertificates();
    getStudentBooking();
    getGuruBooking();
  }, []);

  function handleChange(event, newValue) {
    setValue(newValue);
  }

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
          className="color-FF9E67 d-flex col-1 align-items-center position-relative pt-1 px-3 fs-32"
          style={{ zIndex: "10", cursor: "pointer" }}
          onClick={() => history(-1)}
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
      <div className="d-flex px-5 row m-0 p-0" style={{ zIndex: "10" }}>
        <img
          src="/assets/images/profile/guru.png"
          height={230}
          width={230}
          style={{
            zIndex: "10",
            borderRadius: "50%",
            border: "20px solid #FFCF25",
            objectFit: "cover",
          }}
          alt=""
        />
        <div className="col pt-5">
          <div className="d-flex flex-column">
            <div className="d-flex row justify-content-start align-items-end p-0 m-0">
              <h1 className="p-0 m-0">{`${userDetails.firstName} ${userDetails.lastName}`}</h1>
              <p className="p-0 pl-3 pb-1 m-0">
                <i class="fa-solid fa-star px-1" style={{ color: "gold" }} />{" "}
                4.5
              </p>
            </div>
            <p className="p-0 pl-1 m-0" style={{ color: "#7b7b7b" }}>
              {userDetails.location} <i class="fas fa-location-dot pl-2" />
            </p>
          </div>
          <textarea
            name="bio"
            id="bio"
            className="w-100 mt-1 form-control"
            rows="4"
            placeholder="Bio"
            style={{ resize: "none" }}
            disabled
          />
          {/* Guru Name */}
        </div>
      </div>

      {/* Tabs */}
      <div className="w-100 px-4 p-3 m-0">
        <Box sx={{ width: "100%" }}>
          <Tabs
            value={value}
            onChange={handleChange}
            // textColor="secondary"
            // indicatorColor="secondary"
            aria-label="secondary tabs example"
          >
            {userDetails.role === "guru" ? (
              <Tab label="Certificates" {...a11yProps(0)} />
            ) : (
              <Tab label="Contacts" {...a11yProps(0)} />
            )}
            {userDetails.role === "guru" ? (
              <Tab label="Services" {...a11yProps(1)} />
            ) : (
              <Tab label="Enrollment Course" {...a11yProps(1)} />
            )}
            {userDetails.role === "guru" && (
              <Tab label="Bookings" {...a11yProps(2)} />
            )}
          </Tabs>
          {userDetails.role === "guru" ? (
            <TabPanel value={value} index={0}>
              <div className="d-flex row justify-content-space-around pt-4 px-4">
                <div className="w-100 d-flex position-relative">
                  <input
                    style={{
                      color: "var(--primary-text-color)",
                    }}
                    type="button"
                    className="form-control col-md-3 mb-4 login-btn add-btn"
                    value="Add Certificates"
                    onClick={() => setAddCertificateModalShow(true)}
                  />
                  <AddCertificateModal
                    show={addCertificateModalShow}
                    onHide={() => setAddCertificateModalShow(false)}
                    getMyCertificates={getMyCertificates}
                  />
                </div>
                {certificates &&
                  certificates.map((item) => {
                    return <Cards head={item.title} />;
                  })}
              </div>
            </TabPanel>
          ) : (
            <TabPanel value={value} index={0}>
              <div className="d-flex row justify-content-space-around pt-4 px-4">
                <div className="d-flex w-100 align-items-center my-2">
                  Student Email: {userDetails.email}
                </div>
              </div>
            </TabPanel>
          )}
          {userDetails.role === "guru" ? (
            <TabPanel value={value} index={1}>
              <div className="d-flex row justify-content-space-around pt-4 px-4">
                <div className="w-100 d-flex position-relative">
                  <input
                    style={{
                      color: "var(--primary-text-color)",
                    }}
                    type="button"
                    className="form-control col-md-3 mb-4 login-btn add-btn"
                    value="Add Services"
                    onClick={() => setAddServicesModalShow(true)}
                  />
                </div>
                {services &&
                  services.map((item) => {
                    return (
                      <ServiceCards
                        head={item.name}
                        content={item.description}
                      />
                    );
                  })}
              </div>
            </TabPanel>
          ) : (
            <TabPanel value={value} index={1}>
              <div className="d-flex row justify-content-space-around pt-4 px-4">
                {booking &&
                  booking.map((item) => {
                    return (
                      <ServiceCards
                        head={item.reservationItem.name}
                        content={item.reservationItem.name}
                      />
                    );
                  })}
              </div>
            </TabPanel>
          )}
          {userDetails.role === "guru" && (
            <TabPanel value={value} index={2}>
              <div className="d-flex row justify-content-space-around pt-4 px-4">
                {bookingGuru &&
                  bookingGuru.map((item) => {
                    return (
                      <ServiceCards
                        head={item.reservationItem.name}
                        content={item.reservationItem.name}
                      />
                    );
                  })}
              </div>
            </TabPanel>
          )}
        </Box>
      </div>
      <AddServiceModal
        show={addServicesModalShow}
        onHide={() => setAddServicesModalShow(false)}
        getServices={getServices}
      />
    </div>
  );
};

export default Profile;
