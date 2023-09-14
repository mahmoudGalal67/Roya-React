import React from "react";
import "./skinBooster.css";
import Nav from "../../components/Nav";
import Info from "../../components/Info";
import Footer from "../../components/Footer";
import ContactInfo from "../../components/ContactInfo";
import { UsefetchData } from "../../hooks/api";

function SkinBooster() {
  const hero = UsefetchData(
    "https://admin.royamedicalcenter.com/api/v1/topic/24"
  );
  return (
    <div className="skin-booster">
      <ContactInfo />
      <Info />
      <Nav />
      <div dangerouslySetInnerHTML={{ __html: hero }} />
      <Footer />
    </div>
  );
}

export default SkinBooster;
