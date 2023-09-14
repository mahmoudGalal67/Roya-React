import React from "react";
import Nav from "../../components/Nav";
import Info from "../../components/Info";
import Footer from "../../components/Footer";
import ContactInfo from "../../components/ContactInfo";
import "./Gallary.css";

function Gallary() {
  return (
    <div className="Gallary">
      <ContactInfo />
      <Info />
      <Nav />
      <main>
        <img
          loading="lazy"
          src="/images/home/few.webp"
          alt=""
          className="main-images"
        />
      </main>
      {/* <div className="video-feed my-4">
        <img
          loading="lazy"
          src="/images/Gallary/Group 1000004854.webp"
          alt=""
        />
      </div> */}

      <div className="elfsight-app-8855b9d0-c179-4447-a5dd-55b3df8ec184"></div>
      <div className="make-appointement relative md:px-8 px-2 flex md:flex-row flex-col gap-4 md:items-end items-center">
        <div className="left relative">
          <img loading="lazy" src="/images/morpheus/dun011 1.webp" alt="" />
          <div className="circle"></div>
        </div>
        <div className="right pb-16">
          <h2>
            Looking for professinal & trusted <br /> medical healthcare?
          </h2>
          <p className="my-5">Dont Hasitate To Contact Us.</p>
          <a className="bookNowButton" href="https://wa.me/971544426622">
            Make Appointment
          </a>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Gallary;
