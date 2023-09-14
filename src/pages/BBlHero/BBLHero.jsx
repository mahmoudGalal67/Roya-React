import React from "react";
import Nav from "../../components/Nav";
import Info from "../../components/Info";
import Footer from "../../components/Footer";
import ContactInfo from "../../components/ContactInfo";
import "./BBLHero.css";

function BBLHero() {
  return (
    <div className="BBLHero">
      <ContactInfo />
      <Info />
      <Nav />
      <main>
        <img
          loading="lazy"
          src="/images/BBLHero/BBL-Hero-Banner 1.webp"
          alt=""
          className="main-images"
        />
      </main>
      <div className="info md:p-4 p-2 ">
        <h2 className="text-center  ">
          bbl <span>hero</span>
        </h2>
        <div className="wrapper  md:p-4 p-2  flex md:flex-row flex-col">
          <div className="video">
            <video
              src="/images/BBLHero/Sciton Bbl Hero Treatment.mp4"
              controls
              width="100%"
              height="100%"
            ></video>
          </div>
          <div className="details">
            <h2 className="title">
              <span>Why BBL? </span>
              <br />
              The Results Speak For Themselves
            </h2>
            <p>
              Basically BBL ( Broad Band Light Therapy) can help you slow down
              the aging process and keep your skin looking youthful forever.
              Whether you’re already dealing with the effects of sun damage,
              aging,pigmentation,Rosacea or want to prevent them from happening,
              Forever Young BBL may be the answer you’ve been looking for.
              Regular maintenance treatments with Forever Young BBL can
              functionally rejuvenate your skin and delay the aging process.
            </p>
          </div>
        </div>
      </div>
      <div className="benefits md:p-8 p-3">
        <div className="wrapper p-4">
          <div className="title">About BBL HERO</div>
          <div className="item items-center flex gap-2">
            &rarr;{" "}
            <p className="my-3">
              Patients can enjoy normal social activities immediately after
              treatment, and there is no heavy or time-intensive post-care.
            </p>
          </div>
          <div className="item items-center flex gap-2">
            &rarr;{" "}
            <p className="my-3">
              BBL HERO uses advanced cooling technology to keep treatments
              comfortable.
            </p>
          </div>
          <div className="item items-center flex gap-2">
            &rarr;{" "}
            <p className="my-3">
              See noticeable improvement within weeks, with continued
              improvement over time.
            </p>
          </div>
          <div className="title">What To Expect</div>
          <div className="item items-center flex gap-2">
            &bull;{" "}
            <p className="my-3">
              You should feel minimal to no discomfort during treatment as your
              You should feel minimal to no discomfort during treatment as your
              provider gently glides the BBL HERO handpiece across the skin.
              Simultaneously, a sapphire on the end of the applicator’s device
              will keep the skin cool and comfortable. After treatment, most
              patients will continue to feel warm for an additional 30 to 60
              minutes.
            </p>
          </div>
          <div className="item items-center flex gap-2">
            &bull;{" "}
            <p className="my-3">
              Patients receiving BBL HERO treatments can expect visible results
              in just 1 to 2 treatments, while less effective IPL technology
              often requires 5 to 6 treatments to show similar results.
            </p>
          </div>
          <div className="title">Why Choose BBL</div>
          <div className="item items-center flex gap-2">
            <p className="my-3">
              People are big fan of BBL Hero treatment because :
            </p>
          </div>
          <div className="item items-center flex gap-2">
            &bull;<p className="my-3"> No To Low Downtime</p>
          </div>
          <div className="item items-center flex gap-2">
            &bull; <p className="my-3">Works on most skin types</p>
          </div>
          <div className="item items-center flex gap-2">
            &bull;{" "}
            <p className="my-3">Fast ,comfortable and gentle Treatment</p>
          </div>
          <div className="item items-center flex gap-2">
            &bull;{" "}
            <p className="my-3">Improvements seen as little as one treatment</p>
          </div>
        </div>
      </div>
      <div className="deffirent-treatements text-center md:p-6 p-2">
        <h2 className="mb-8">
          Different <span>Treatments</span>
        </h2>
        <div className="wrapper flex gap-5 flex-wrap items-center justify-around">
          <div className="item">
            <h2>
              Forever Clear <br /> BBL
            </h2>
            <p>Clear Breakouts For Good</p>
          </div>
          <div className="item">
            <h2>
              Forever Young <br /> BBL
            </h2>
            <p>Look Younger For Longer</p>
          </div>
          <div className="item">
            <h2>
              Forever Body <br /> BBL
            </h2>
            <p>Clear Pigmentation & Sun Damage</p>
          </div>
          <div className="item">
            <h2>
              Skin Tyte <br /> BBL
            </h2>
            <p>Improve the Appearance of Skin Laxity</p>
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

export default BBLHero;
