import React from "react";
import Nav from "../../components/Nav";
import Info from "../../components/Info";
import Footer from "../../components/Footer";
import ContactInfo from "../../components/ContactInfo";
import "./SexuallyTransmittedDisease.css";
import { UsefetchData } from "../../hooks/api";

function SexuallyTransmittedDisease() {
  const hero = UsefetchData(
    "https://admin.royamedicalcenter.com/api/v1/topic/44"
  );
  return (
    <div className="SexuallyTransmittedDisease">
      <ContactInfo />
      <Info />
      <Nav />
      <div dangerouslySetInnerHTML={{ __html: hero }} />
      <Footer />
    </div>
  );
}

export default SexuallyTransmittedDisease;
