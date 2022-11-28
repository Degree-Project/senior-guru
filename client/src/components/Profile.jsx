import React, { useState, useEffect } from "react";
import { Tabs, Box, Tab } from "@mui/material";
import { TabPanel } from "./TabComponent/TabPanel";
import Cards from "./TabComponent/Cards";
import "../css/Profile.css";
import { useNavigate } from "react-router-dom";
import BookingCards from "./TabComponent/BookingCards";
import axios from "axios";
import ServiceCards from "./TabComponent/ServiceCards";

const Profile = (props) => {
  let history = useNavigate();
  const [value, setValue] = useState(0);
  const [services, setServices] = useState();

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

  useEffect(() => {
    if (props.userDetails !== "") {
      getServices();
    }
  });

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
          style={{ zIndex: "111111", cursor: "pointer" }}
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
      <div className="d-flex px-5 row m-0 p-0" style={{ zIndex: "111111" }}>
        <img
          src={
            props.userDetails.avatar.url
              ? props.userDetails.avatar.url
              : "/assets/images/profile/guru.png"
          }
          height={230}
          width={230}
          style={{
            zIndex: "111111",
            borderRadius: "50%",
            border: "20px solid #FFCF25",
            objectFit: "cover",
          }}
          className="col-"
          alt=""
        />
        <div className="col pt-5">
          <div className="d-flex flex-column">
            <div className="d-flex row justify-content-start align-items-end p-0 m-0">
              <h1 className="p-0 m-0">{`${props.userDetails.firstName} ${props.userDetails.lastName}`}</h1>
              <p className="p-0 pl-3 pb-1 m-0">
                <i class="fa-solid fa-star px-1" style={{ color: "gold" }} />{" "}
                4.5
              </p>
            </div>
            <p className="p-0 pl-1 m-0" style={{ color: "#7b7b7b" }}>
              {props.userDetails.location}{" "}
              <i class="fas fa-location-dot pl-2" />
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
            textColor="secondary"
            indicatorColor="secondary"
            aria-label="secondary tabs example"
          >
            {props.userDetails.role === "guru" ? (
              <Tab label="Certificates" {...a11yProps(0)} />
            ) : (
              <Tab label="Contacts" {...a11yProps(0)} />
            )}
            <Tab label="Services" {...a11yProps(1)} />
            <Tab label="Bookings" {...a11yProps(2)} />
          </Tabs>
          {props.userDetails.role === "guru" ? (
            <TabPanel value={value} index={0}>
              <div className="d-flex row justify-content-space-around pt-4 px-4">
                <Cards
                  head="PHD in Data Science"
                  content="Well meaning and kindly. A benevolent smile"
                />
                <Cards
                  head="PHD in Data Science"
                  content="Well meaning and kindly. A benevolent smile"
                />
                <Cards
                  head="PHD in Data Science"
                  content="Well meaning and kindly. A benevolent smile"
                />
              </div>
            </TabPanel>
          ) : (
            <TabPanel value={value} index={0}>
              <div className="d-flex row justify-content-space-around pt-4 px-4">
                <Cards
                  head="PHD in Data Science"
                  content="Well meaning and kindly. A benevolent smile"
                />
                <Cards
                  head="PHD in Data Science"
                  content="Well meaning and kindly. A benevolent smile"
                />
                <Cards
                  head="PHD in Data Science"
                  content="Well meaning and kindly. A benevolent smile"
                />
              </div>
            </TabPanel>
          )}
          <TabPanel value={value} index={1}>
            <div className="d-flex row justify-content-space-around pt-4 px-4">
              {services &&
                services.map((item) => {
                  return (
                    <ServiceCards head={item.name} content={item.description} />
                  );
                })}
            </div>
          </TabPanel>
          <TabPanel value={value} index={2}>
            <div className="d-flex row justify-content-space-around pt-4 px-4">
              <BookingCards
                head="PHD in Data Science"
                content="Well meaning and kindly. A benevolent smile"
              />
              <BookingCards
                head="PHD in Data Science"
                content="Well meaning and kindly. A benevolent smile"
              />
              <BookingCards
                head="PHD in Data Science"
                content="Well meaning and kindly. A benevolent smile"
              />
            </div>
          </TabPanel>
        </Box>
      </div>
    </div>
  );
};

export default Profile;
