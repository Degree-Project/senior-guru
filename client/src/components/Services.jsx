import React from "react";
import { useState, useEffect } from "react";
import ServiceCard from "./ServiceCard";
import NavBar from "./NavBar";
import "../css/Services.css";
import LogoutModal from "./Modals/LogoutModal";
import axios from "axios";
import AddBookingModal from "./TabComponent/AddBookingModal";

const Services = (props) => {
  // const [type, setType] = useState(true);
  const [addServicesModalShow, setAddServicesModalShow] = useState(false);
  const [service, setService] = useState();
  const [value, setValue] = useState(2);

  const [serviceDetails, setServiceDetails] = useState({
    name: "",
    id: "",
    user: "",
    price: "",
  });
  // const { locData } = useContext(AuthContext);
  // const [lat, setLat] = useState(null);
  // const [lng, setLng] = useState(null);

  // const setData = () => {
  //   setLat(locData.latitude);
  //   setLng(locData.longitude);
  // };
  // console.log("Lat : " + lat);
  // console.log("Lng : " + lng);
  // useEffect(() => {
  //   setData();
  // }, [locData]);

  const getServicesData = () => {
    try {
      axios
        .post("/api/services/all", {
          location: {
            latitude: 18,
            longitude: 73,
          },
        })
        .then((res) => {
          setService(res.data.services);
          setServiceDetails({
            ...serviceDetails,
            name: res.data.services[value].name,
            id: res.data.services[value]._id,
            price: res.data.services[value].price,
            user: res.data.services[value].user,
          });
          console.log(res);
        });
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getServicesData();
  }, []);

  return (
    <>
      <NavBar
        userDetails={props.userDetails}
        setIsOpen={props.setIsOpen}
        isOpen={props.isOpen}
      />
      <div className="row service-page-main-row">
        <div className="service-page-main-div">
          <div className="services-page">
            {/* <div class="button r" id="button-1">
              <input
                type="checkbox"
                class="checkbox"
                onClick={() => setType(!type)}
              />
              <div class="knobs"></div>
              <div class="layer"></div>
            </div> */}
            <div className="service-cards-div mb-2">
              {service &&
                service.map((item) => {
                  return (
                    <ServiceCard
                      img="/assets/images/services/web-dev.png"
                      serviceName={item.name}
                      serviceDescription={item.description}
                      profile="/assets/images/profile/guru.png"
                      name="Livio Mascarenhas"
                      location="Majorda, Goa"
                      rating="4.5"
                      setAddServicesModalShow={setAddServicesModalShow}
                      setValue={setValue}
                      value={value}
                    />
                  );
                })}
            </div>
          </div>
        </div>
        <LogoutModal isOpen={props.isOpen} setIsOpen={props.setIsOpen} />
        <AddBookingModal
          show={addServicesModalShow}
          serviceDetails={serviceDetails}
          onHide={() => setAddServicesModalShow(false)}
        />
      </div>
    </>
    // </div>
  );
};

export default Services;
