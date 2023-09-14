import React from "react";
import { Link } from "react-router-dom";

import "../pages/home/home.css";

function Info() {
  const showMenu = () => {
    const menu = document.querySelector(".nav.mobile");
    const menuClose = document.querySelector(".nav.mobile .close");
    menu.classList.add("show");
    menuClose.classList.add("show");
  };

  return (
    <main>
      <div
        className="info desktop md:px-24 px-3 pt-7 flex md:flex-row flex-col gap-5 items-center justify-between"
        style={{ fontWeight: "700", color: "#29367D" }}
      >
        <div className="logo text-center">
          <Link to="/">
            <img className="w-full" src="/images/home/logoU.svg" alt="" />
          </Link>
        </div>
        <div className="contact flex  md:flex-row flex-col items-center gap-3">
          <div className="phone flex items-center gap-3">
            <img
              src="/images/home/Vector-1.webp"
              alt=""
              style={{ width: "18px", height: "18px" }}
            />
            <a href="tel:971544426622">+971 54 442 6622</a>
          </div>
          <a
            href="https://wa.me/971544426622"
            className="booking flex items-center gap-3 p-2 hover:bg-blue-800 hover:text-yellow-400 cursor-pointer"
            style={{ borderRadius: "30px", border: "2px solid #222F66" }}
          >
            <img
              src="/images/home/Vector-2.webp"
              alt=""
              style={{ width: "18px", height: "18px" }}
            />
            <span>Book an Appointment</span>
          </a>
        </div>
      </div>
      <div
        className="info mobile  pt-2 flex  flex-col items-center justify-between"
        style={{ fontWeight: "700", color: "#29367D" }}
      >
        <div className="calling flex gap-5 justify-around items-center">
          <div className="whats flex items-center gap-1">
            <img
              src="/images/home/Link Img - WhatsApp icon.webp"
              alt=""
              style={{ width: "18px", height: "18px" }}
            />
            <a href="https://wa.me/971544426622">+971 54 442 6622</a>
          </div>
          <div className="phone flex items-center gap-1">
            <img
              src="/images/home/Vector-1.webp"
              alt=""
              style={{ width: "18px", height: "18px" }}
            />
            <a href="tel:971544426622">+971 54 442 6622</a>
          </div>
        </div>
        <div className="options max-w-full flex items-center justify-between">
          <img
            src="/images/home/Combobox - Language Selector - English selected.webp"
            alt=""
            className="lang"
          />
          <img className="logo" src="/images/home/logoU.svg" alt="" />
          <img
            src="/images/home/Group 1000004856.webp"
            alt=""
            className="humb cursor-pointer"
            onClick={showMenu}
          />
        </div>
        <div className="main mobile">
          <img className="hero-image" src="images/home/main.webp" alt="" />
          <div className="info flex flex-col gap-1">
            <h1>
              Welcome to <br /> Roya Medical Center
            </h1>
            <p className="details">improving looks . changing lives</p>
            <a href="https://wa.me/971544426622">Book Now</a>
          </div>
        </div>
        <div className="social-icons">
          <a href="https://www.instagram.com/royamedicalcenter.ae/">
            <img src="/images/home/instagram.webp" alt="" />
          </a>
          <a href="tel:971544426622">
            <img src="/images/home/Phone.webp" alt="" />
          </a>
          <a href="https://wa.me/971544426622">
            <img src="/images/home/Link Img - WhatsApp icon.webp" alt="" />
          </a>
        </div>
      </div>
    </main>
  );
}

export default Info;
