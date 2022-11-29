import { useContext, useState, useEffect } from "react";
import ServiceCard from "./ServiceCard";
import NavBar from "./NavBar";
import "../css/Services.css";
import AuthContext from "../context/AuthContext";

export default function Services() {
  const [type, setType] = useState(true);
  const { locData } = useContext(AuthContext);
  const [lat, setLat] = useState(null);
  const [lng, setLng] = useState(null);

  const setData = () => {
    setLat(locData.latitude);
    setLng(locData.longitude);
  };
  console.log("Lat : " + lat);
  console.log("Lng : " + lng);
  useEffect(() => {
    setData();
  }, [locData]);

  return (
    <>
      <NavBar />
      <div className="row service-page-main-row">
        <div className="service-page-main-div">
          <div className="services-page">
            <div class="button r" id="button-1">
              <input
                type="checkbox"
                class="checkbox"
                onClick={() => setType(false)}
              />
              <div class="knobs"></div>
              <div class="layer"></div>
            </div>
            <div className="service-cards-div mb-2">
              <ServiceCard
                img="/assets/images/services/web-dev.png"
                serviceName="Web Dev"
                serviceDescription="Learn modern Web Development fundamentals as well as advanced topics. Start today. Gain the expert level knowledge of web development to start a rewarding career."
                profile="/assets/images/profile/guru.png"
                name="Livio Mascarenhas"
                location="Majorda, Goa"
                rating="4.5"
              />
              <ServiceCard
                img="/assets/images/services/ai.png"
                serviceName="Web Dev"
                serviceDescription="Learn modern Web Development fundamentals as well as advanced topics. Start today. Gain the expert level knowledge of web development to start a rewarding career."
                profile="/assets/images/profile/guru.png"
                name="Livio Mascarenhas"
                location="Majorda, Goa"
                rating="4.5"
              />
              <ServiceCard
                img="/assets/images/services/web-dev.png"
                serviceName="Web Dev"
                serviceDescription="Learn modern Web Development fundamentals as well as advanced topics. Start today. Gain the expert level knowledge of web development to start a rewarding career."
                profile="/assets/images/profile/guru.png"
                name="Livio Mascarenhas"
                location="Majorda, Goa"
                rating="4.5"
              />
              <ServiceCard
                img="/assets/images/services/ai.png"
                serviceName="Web Dev"
                serviceDescription="Learn modern Web Development fundamentals as well as advanced topics. Start today. Gain the expert level knowledge of web development to start a rewarding career."
                profile="/assets/images/profile/guru.png"
                name="Livio Mascarenhas"
                location="Majorda, Goa"
                rating="4.5"
              />
            </div>
          </div>
        </div>
      </div>
    </>
    // </div>
  );
}
