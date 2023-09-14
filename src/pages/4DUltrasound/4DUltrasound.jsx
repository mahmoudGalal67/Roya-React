import React from "react";
import Nav from "../../components/Nav";
import Info from "../../components/Info";
import Footer from "../../components/Footer";
import ContactInfo from "../../components/ContactInfo";
import "./4DUltrasound.css";

import Slider from "react-slick";
import { UsefetchData } from "../../hooks/api";

function DUltrasound() {
  const hero = UsefetchData(
    "https://admin.royamedicalcenter.com/api/v1/topic/31"
  );
  var settings = {
    dots: true,
    autoplay: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="DUltrasound">
      <ContactInfo />
      <Info />
      <Nav />
      <div dangerouslySetInnerHTML={{ __html: hero }} />
      <div class="slider p-4 mb-16">
        <Slider {...settings}>
          <div className="p-4">
            <img
              loading="lazy"
              src="/images/Obstetrics/slider/3dface-9.webp"
              alt=""
            />
          </div>
          <div className="p-4">
            <img
              loading="lazy"
              src="/images/Obstetrics/slider/62f31820d64065a437ecacaf_main-qimg-614aaba231c394a395f3729df75fca0f-lq.webp"
              alt=""
            />
          </div>
          <div className="p-4">
            {" "}
            <img
              loading="lazy"
              src="/images/Obstetrics/slider/gynecologist-offering-couple-ultrasound-pictures.webp"
              alt=""
            />
          </div>
          <div className="p-4">
            <img
              loading="lazy"
              src="/images/Obstetrics/slider/images.webp"
              alt=""
            />
          </div>
          <div className="p-4">
            <img
              loading="lazy"
              src="/images/Obstetrics/slider/Ultrasound-4D-1.webp"
              alt=""
            />
          </div>
        </Slider>
      </div>
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

export default DUltrasound;
