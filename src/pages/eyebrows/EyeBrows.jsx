import React from "react";

import Nav from "../../components/Nav";
import Info from "../../components/Info";
import Footer from "../../components/Footer";
import ContactInfo from "../../components/ContactInfo";
import "./eyeBrows.css";

function EyeBrows() {
  return (
    <div className="eye-brows">
      <ContactInfo />
      <Info />
      <Nav />
      <main>
        <img
          src="/images/eyeBrows/young-woman-going-through-microblading-treatment 1.webp"
          alt=""
          className="main-images"
        />
      </main>
      <div className="info md:p-4 p-2 ">
        <h2 className="text-center md:p-4 p-2 ">
          EyeBrows <span>Tattoo Removal</span>
        </h2>
        <div className="wrapper md:p-4 p-2 flex md:flex-row flex-col">
          <div className="video">
            <video
              src="/images/eyebrows/Sequence 02.mp4"
              controls
              width="100%"
              height="100%"
            ></video>
          </div>
          <div className="details">
            <h2 className="title mb-4">
              <span>Pico Laser is the</span>
              <br />
              best option for eyeBrows Tattoo Removal.
            </h2>
            <p className="my-3">
              You will see 50% improvement just after first session and in 3 to
              4 session it will be done . Our experienced Tattoo artists can
              repair your tattoo as well to get the best shape as you desire.
              Pico Technology is very advanced and real PICO is available only
              in a few high rated Brands like PICOWAY by Candela
            </p>
          </div>
        </div>
      </div>
      <div className="offers">
        <div className="wrapper p-3 flex justify-around items-center flex-wrap">
          <div className="card relative flex flex-col gap-5">
            <img
              src="/images/eyebrows/div.elementor-price-table__ribbon.webp"
              alt=""
              className="absolute top-0 right-0"
            />
            <div className="title">
              <h3>
                EyeBrows Tattoo <br /> Removal
              </h3>
              <p>Roya Medical Center</p>
            </div>
            <div className="info p-3 flex flex-col gap-5 justify-center items-center">
              <div className="price flex flex-col gap-2 justify-center items-center">
                <h3>2500</h3>
                <span>AED</span>
              </div>
              <div className="items flex  flex-col gap-5 justify-center items-center">
                <div className="item flex items-center gap-3 py-3 px-8 border-b-2 border-gray-400">
                  <img
                    loading="lazy"
                    src="/images/eyeBrows/Symbol.webp"
                    alt=""
                  />
                  <span>X3 Sessions</span>
                </div>
                <div className="item flex items-center gap-3 py-3 px-8 border-b-2 border-gray-400">
                  <img
                    loading="lazy"
                    src="/images/eyeBrows/Symbol.webp"
                    alt=""
                  />
                  <span>With Pico Laser</span>
                </div>
                <div className="item flex items-center gap-3 py-3 px-8 border-b-2 border-gray-400">
                  <img
                    loading="lazy"
                    src="/images/eyeBrows/Symbol.webp"
                    alt=""
                  />
                  <span>excellent Results</span>
                </div>
              </div>
              <a className="bookNowButton" href="https://wa.me/971544426622">
                Book Now
              </a>
              <span>Roya Medical Center</span>
            </div>
          </div>
        </div>
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
          <button>
            <a href="https://wa.me/971544426622">Make Appointment</a>
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default EyeBrows;
