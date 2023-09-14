import React from "react";
import Nav from "../../components/Nav";
import Info from "../../components/Info";
import Footer from "../../components/Footer";
import ContactInfo from "../../components/ContactInfo";
import "./Labiaplasty.css";
import { UsefetchData } from "../../hooks/api";

function Labiaplasty() {
  const hero = UsefetchData(
    "https://admin.royamedicalcenter.com/api/v1/topic/30"
  );
  return (
    <div className="Labiaplasty">
      <ContactInfo />
      <Info />
      <Nav />
      <div dangerouslySetInnerHTML={{ __html: hero }} />
      <Footer />
    </div>
  );
}

export default Labiaplasty;
