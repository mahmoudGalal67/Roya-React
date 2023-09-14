import React from "react";
import Nav from "../../components/Nav";
import Info from "../../components/Info";
import Footer from "../../components/Footer";
import ContactInfo from "../../components/ContactInfo";
import "./FractionalLaser.css";

function FractionalLaser() {
  return (
    <div class="FractionalLaser">
      <ContactInfo />
      <Info />
      <Nav />
      <main>
        <img
          loading="lazy"
          src="/images/FractionalLaser/photo-vic-park-medispa-fractional 1.webp"
          alt=""
          className="main-images"
        />
      </main>
      <div className="info md:p-4 p-2 ">
        <h2 className="text-center md:p-4 p-2 ">
          Fractional Laser in <span>Dubai</span>
        </h2>
        <div className="wrapper md:p-4 p-2 flex md:flex-row flex-col">
          <div className="video">
            <video
              src="/images/FractionalLaser/Sciton - Profractional Therapy.mp4"
              controls
              width="100%"
              height="100%"
            ></video>
          </div>
          <div className="details">
            <h2 className="title mb-4">
              <span>What is </span>
              <br />
              fractional laser treatment?
            </h2>
            <p className="my-3">
              Fractional laser treatment is a non-invasive treatment that uses a
              device to deliver a laser beam divided into thousands of
              microscopic treatment zones that target a fraction of the skin at
              a time, so always there is intact cells between each spot of
              damaged skin . this intact spots will stablish new skin re growth
              so we can go deeper with this kind of laser with much less
              expected complication than full resurfacing laser .
            </p>
          </div>
        </div>
      </div>
      <div className="benefits md:p-8 p-3">
        <div className="wrapper p-4">
          <div className="title">Is fractional laser effective?</div>
          <div className="item items-center flex gap-2">
            &rarr;{" "}
            <p className="my-3">
              One of the safe and effective procedures to improve skin texture
              and tackle any skin imperfection is Fractional Laser. It involves
              the removal of the outer layers of the skin through laser which
              reveals the fresh and glowing skin underneath
            </p>
          </div>
          <div className="title">Tighter, Smoother Skin</div>
          <div className="item items-center flex gap-2">
            &bull;{" "}
            <p className="my-3">
              Tighter, Smoother Skin Sciton’s ProFractional laser treatment is a
              unique resurfacing technique that focuses on improving the overall
              quality of the skin. Through targeted treatments that drastically
              reduce healing time, ProFractional can effectively target textural
              issues, wrinkles, acne scars, and other imperfections. A highly
              trained provider of ProFractional can help customize the treatment
              to address their patients’ unique concerns.
            </p>
          </div>
          <div className="item items-center flex gap-2">
            &bull;{" "}
            <p className="my-3">
              This process stimulates natural collagen remodeling while keeping
              healing and downtime low Unlike full-field resurfacing techniques
              that remove the entire surface area of a treatment site,
              ProFractional creates channels in the skin with more a more narrow
              diameter.
            </p>
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
          <a className="bookNowButton" href="https://wa.me/971544426622">
            Make Appointment
          </a>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default FractionalLaser;
