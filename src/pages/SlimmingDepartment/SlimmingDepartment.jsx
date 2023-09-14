import React from "react";
import Nav from "../../components/Nav";
import Info from "../../components/Info";
import Footer from "../../components/Footer";
import ContactInfo from "../../components/ContactInfo";
import "./SlimmingDepartment.css";

import Slider from "react-slick";

function SlimmingDepartment() {
  var settings = {
    dots: true,
    autoplay: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1020,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
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
    <div className="SlimmingDepartment">
      <ContactInfo />
      <Info />
      <Nav />
      <main>
        <img
          loading="lazy"
          src="/images/SlimmingDepartment/close-up-doctor-measuring-patient-s-abdomen 1.webp"
          alt=""
          className="main-images"
        />
      </main>
      <div className="info md:p-4 p-2 ">
        <h2 className="text-center md:p-4 p-2 ">
          Slimming <span>Department</span>
        </h2>
        <div className="wrapper md:p-4 p-2 flex md:flex-row flex-col">
          <div className="video">
            <video
              src="/images/SlimmingDepartment/Emsculpt - Moa - Buttocks And Abdomen Area.mp4"
              controls
              width="100%"
              height="100%"
            ></video>
          </div>
          <div className="details">
            <h2 className="title mb-4">
              <span>hat is</span>
              <br />
              EMSCULPT NEO
            </h2>
            <p className="my-3">
              EMSCULPT NEO is the only non-invasive technology that
              simultaneously uses radiofrequency and HIFEM+ energies to
              eliminate fat and build muscle. The end result is more fat
              reduction and muscle growth in less time than with any single
              gold-standard product.
            </p>
          </div>
        </div>
      </div>
      <div className="benefits md:p-8 p-3">
        <div className="wrapper p-4">
          <div className="flex justify-between flex-wrap items-center">
            <div>
              <div className="title">EMSCULPT NEO</div>
              <div className="item items-center flex gap-2">
                &bull; <p className="my-3">Burn Fat , Build Muscle</p>
              </div>
            </div>
            <img
              loading="lazy"
              src="/images/SlimmingDepartment/2Image.webp"
              alt=""
            />
            <img
              loading="lazy"
              src="/images/SlimmingDepartment/Emsculpt-neo-1-jpg-e1687612029192 1.webp"
              alt=""
            />
          </div>
          <div className="title">EMSCULPT</div>
          <div className="item items-center flex gap-2">
            &bull;{" "}
            <p className="my-3">
              EMSCULPT is the world’s first treatment which helps patients build
              muscle and sculpt their bodies, non-invasively. What is more, it
              can also be used for an entirely non-invasive buttock-toning
              treatment. Muscles shape the body, and EMSCULPT may thus speed up
              the fitness journeys of your patients and help them reach their
              body goals.
            </p>
          </div>
          <div className="flex justify-between flex-wrap items-center">
            <div className="max-w-3xl">
              <div className="title">Morpheus 8 Body</div>
              <div className="item items-center flex gap-2">
                &bull;{" "}
                <p className="my-3">
                  What does Morpheus 8 body do? In addition to skin tightening,
                  the Morpheus8 is FDA approved as a Subdermal Adipose
                  Remodeling Device(SARD) and is the first and only device to
                  diminish fat in delicate areas. It is great for melting away
                  extra fat underneath the chin and can even target larger areas
                  such as cellulite on the thighs and buttock
                </p>
              </div>
            </div>
            <img
              loading="lazy"
              src="/images/SlimmingDepartment/morpheus-jpg 1.webp"
              alt=""
            />
          </div>
        </div>
      </div>
      <div class="slider p-4 mb-16">
        <Slider {...settings}>
          <div className="p-4">
            <img
              loading="lazy"
              src="/images/Gallary/slider/Exercises-for-flabby-arms-over-60-min.webp"
              alt=""
            />
          </div>
          <div className="p-4">
            <img
              loading="lazy"
              src="/images/Gallary/slider/thumb_arm-lift-before-after-f-236.webp"
              alt=""
            />
          </div>
          <div className="p-4">
            {" "}
            <img
              loading="lazy"
              src="/images/Gallary/slider/Weight_Loss.webp"
              alt=""
            />
          </div>
          <div className="p-4">
            <img
              loading="lazy"
              src="/images/Gallary/slider/weight-loss-woman-1000x600.webp"
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

export default SlimmingDepartment;
