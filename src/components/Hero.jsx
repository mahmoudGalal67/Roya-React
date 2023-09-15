import React from "react";

function Hero() {
  return (
    <>
      <div className="video desktop md:px-16 px-2">
        <img src="images/home/main.webp" alt="" />
        <div className="info">
          <h1>
            Welcome to <br /> Roya Medical Center
          </h1>
          <p>improving looks . changing lives</p>
          <a href="https://wa.me/971544426622">Book Now</a>
        </div>
      </div>
      <div className="info  main mobile">
        <img className="hero-image" src="images/home/main.webp" alt="" />
        <div className="info flex flex-col gap-1">
          <h1>
            Welcome to <br /> Roya Medical Center
          </h1>
          <p className="details">improving looks . changing lives</p>
          <a href="https://wa.me/971544426622">Book Now</a>
        </div>
      </div>
      <div className="bottom desktop py-4 flex md:items-end items-center justify-center">
        <div className="services flex items-center justify-center gap-3 flex-wrap">
          <div className="item">
            <a href="https://wa.me/971544426622">
              <div>
                <img loading="lazy" src="images/home/fjd.webp" alt="" />
              </div>
              <span>
                Book an <br /> Appointment
              </span>
            </a>
          </div>
          <a href="/branches">
            <div className="item">
              <div>
                <img loading="lazy" src="images/home/hifde.webp" alt="" />
              </div>
              <span>Contact us</span>
            </div>
          </a>
          <div className="item">
            <a href="/blogs">
              <div>
                <img loading="lazy" src="images/home/house.webp" alt="" />
              </div>
              <span>Check Our Blog</span>
            </a>
          </div>
          <div className="item">
            <a href="https://www.instagram.com/royamedicalcenter.ae/">
              <div>
                <img loading="lazy" src="images/home/Vector-3.webp" alt="" />
              </div>
              <span>
                Check
                <br /> Instagram
              </span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
