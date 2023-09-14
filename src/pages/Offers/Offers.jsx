import React from "react";
import Nav from "../../components/Nav";
import Info from "../../components/Info";
import Footer from "../../components/Footer";
import ContactInfo from "../../components/ContactInfo";
import "./Offers.css";
import Map from "../../components/Map";
import { UsefetchData } from "../../hooks/api";

function Offers() {
  const hero = UsefetchData(
    "https://admin.royamedicalcenter.com/api/v1/topic/36"
  );
  return (
    <div className="Offers">
      <ContactInfo />
      <Info />
      <Nav />
      <div dangerouslySetInnerHTML={{ __html: hero }} />
      <Map />
      <Footer />
    </div>
  );
}

export default Offers;
