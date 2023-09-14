import React from "react";
import Nav from "../../components/Nav";
import Info from "../../components/Info";
import Footer from "../../components/Footer";
import ContactInfo from "../../components/ContactInfo";
import "./Morpheus.css";

function Morpheus() {
  return (
    <div className="morpheus">
      <ContactInfo />
      <Info />
      <Nav />
      <main>
        <img
          loading="lazy"
          src="/images/morpheus/_movie-1680-650-morpheus8 1.webp"
          alt=""
          className="main-images"
        />
      </main>
      <div className="info md:p-4 p-2 ">
        <h2 className="text-center md:p-4 p-2 ">
          Morpheus 8 in <span>Dubai</span>
        </h2>
        <div className="wrapper md:p-4 p-2 flex md:flex-row flex-col">
          <div className="video">
            <video
              src="/images/morpheus/Morpheus8 By Inmode Animation.mp4"
              controls
              width="100%"
              height="100%"
            ></video>
          </div>
          <div className="details">
            <h2 className="title mb-4">
              <span>Looking for</span>
              <br />
              Morpheus 8 in Dubai?
            </h2>
            <p className="my-3">
              Roya Medical Center offers Affordable Morpheus 8 cost and
              Effective treatment with great morpheus 8 results.Actually safe on
              all skin types even type VI with little risk of post inflammatory
              hyperpigmentation (PIH) which is common with other resurfacing
              methods.
            </p>
          </div>
        </div>
      </div>
      <div className="benefits md:p-8 p-3">
        <div className="wrapper p-4">
          <div className="title">Key Benefits</div>
          <div className="item items-center flex gap-2">
            &rarr;{" "}
            <p className="my-3">
              Morpheus8 delivers the deepest fractional treatments available so
              penetrats subdermal tissue up to 8mm (7mm + 1mm thermal profile).
            </p>
          </div>
          <div className="item items-center flex gap-2">
            &rarr;{" "}
            <p className="my-3">
              Has Dual Handpieces to allow increased treatment functionality.
              Morpheus8 Face for smaller treatment areas and Morpheus8 Body for
              larger and deeper tissue treatments.
            </p>
          </div>
          <div className="item items-center flex gap-2">
            &rarr;{" "}
            <p className="my-3">
              Four fractional tips with different microneedle configurations
              (Prime 12 pin, Resurfacing 24 pin, Morpheus8 24 pin, and Body 40
              pin) deliver clinically proven RF energy to multiple treatment
              depths (0.5mm – 7mm).
            </p>
          </div>
          <div className="item items-center flex gap-2">
            &rarr;{" "}
            <p className="my-3">
              Equipped with Burst mode RF technology, Morpheus8 Body
              automatically deploys bipolar RF energy to multi-level treatment
              depths in a single cycle. Therefore its able to target tissue
              sequentially at three levels in millisecond intervals this allows
              a significant reduction in treatment times and minimizesskin
              injury on the other hand increases treatment uniformity.
            </p>
          </div>
          <div className="item items-center flex gap-2">
            &rarr;{" "}
            <p className="my-3">
              Safe on skin types up to and including VI with little risk of post
              inflammatory hyperpigmentation (PIH) which is common with other
              resurfacing methods
            </p>
          </div>
          <div className="title">FACE AND BODY</div>
          <div className="item items-center flex gap-2">
            &bull;{" "}
            <p className="my-3">
              Morpheus8 targets subdermal layers of the skin and tissue to
              remodel collagen on the face and body.
            </p>
          </div>
          <div className="title">COLLAGEN</div>
          <div className="item items-center flex gap-2">
            &bull;{" "}
            <p className="my-3">
              This fractional tissue treatment simulates the production of
              collagen in the underlying layers of the dermis. Morpheus8’s
              modular tips enable procedures to be customized for large or small
              body areas.
            </p>
          </div>
          <div className="title">DARKER SKIN TONES</div>
          <div className="item items-center flex gap-2">
            &bull;{" "}
            <p className="my-3">
              Morpheus8 effectively remodels skin and tissue with minimal risk
              of post-inflammatory hyperpigmentation. Patients should expect
              little to no thermal damage to skin types I – VI.
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

export default Morpheus;
