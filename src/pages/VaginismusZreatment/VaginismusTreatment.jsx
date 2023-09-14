import React from "react";
import Nav from "../../components/Nav";
import Info from "../../components/Info";
import Footer from "../../components/Footer";
import ContactInfo from "../../components/ContactInfo";
import "./VaginismusTreatment.css";
import { UsefetchData } from "../../hooks/api";

function VaginismusTreatment() {
  const hero = UsefetchData(
    "https://admin.royamedicalcenter.com/api/v1/topic/29"
  );
  return (
    <div className="VaginismusTreatment">
      <ContactInfo />
      <Info />
      <Nav />
      <div dangerouslySetInnerHTML={{ __html: hero }} />
      <Footer />
    </div>
  );
}

export default VaginismusTreatment;
