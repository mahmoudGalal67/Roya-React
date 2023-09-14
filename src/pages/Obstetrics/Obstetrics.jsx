import React from "react";
import Nav from "../../components/Nav";
import Info from "../../components/Info";
import Footer from "../../components/Footer";
import ContactInfo from "../../components/ContactInfo";
import "./Obstetrics.css";

import Slider from "react-slick";

function Obstetrics() {
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
    <div className="Obstetrics">
      <ContactInfo />
      <Info />
      <Nav />
      <main>
        <img
          loading="lazy"
          src="/images/Obstetrics/close-up-portrait-man-s-woman-s-hands 1.webp"
          alt=""
          className="main-images"
        />
      </main>
      <div className="services md:p-8 p-4">
        <h2>Obstetrics</h2>
        <div className="wrapper flex flex-wrap justify-around gap-4">
          <div className="card my-8 flex flex-col justify-between gap-3 ">
            <img
              loading="lazy"
              src="/images/Obstetrics/nipt_test_b 1.webp"
              alt=""
            />
            <h3>NIPT TEST</h3>
            <p>
              First Trimester screening is a must to rule out any chromosomal
              abnormality and down syndrome in baby. with simply drawing couple
              of ml blood at 10 weeks gestation we can assure you about the
              karyotype and also we can find out gender of baby .
            </p>
            <button>
              {" "}
              <a href="https://wa.me/971544426622">Book Now</a>
            </button>
          </div>
          <div className="card my-8 flex flex-col justify-between gap-3 ">
            <img
              loading="lazy"
              src="/images/Obstetrics/enultrasound-sonogramesultrasonido-sonograma-o-ecografía 1.webp"
              alt=""
            />
            <h3>Pregnancy Ultrasound</h3>
            <p>
              Basically in first 12 weeks we use vaginal ultrasound and later on
              using abdominal ultrasound we can measure the growth of fetus and
              check fetus organs , amniotic fluid , placenta position and fetal
              presentation .
            </p>
            <button>
              {" "}
              <a href="https://wa.me/971544426622">Book Now</a>
            </button>
          </div>
          <div className="card my-8 flex flex-col justify-between gap-3 ">
            <img
              loading="lazy"
              src="/images/Obstetrics/62f31820d64065a437ecacaf_main-qimg-614aaba231c394a395f3729df75fca0f-lq.webp"
              alt=""
            />
            <h3>3D/ 4D Ultrasound</h3>
            <p>
              You can watch your baby through 3D/ 4D ultrasound modality .
              Basically for anomaly scan we use regular 2 D ultrasound and 3D/4D
              is only to what the baby and see to whom she or he looks like !
              take some photos for future Album and get more bounding with your
              baby Read More
            </p>
            <button>
              {" "}
              <a href="https://wa.me/971544426622">Book Now</a>
            </button>
          </div>
          <div className="card my-8 flex flex-col justify-between gap-3 ">
            <img
              loading="lazy"
              src="/images/Obstetrics/pregnant-woman-with-gift 1.webp"
              alt=""
            />
            <h3>Pregnancy Care Package</h3>
            <p>
              We have special pregnancy care packages. for Normal pregnancy
              every 4 weeks and for high risk pregnancy every 2 weeks . these
              packages starts from 12 weeks and covers till delivery
            </p>
            <button>
              {" "}
              <a href="https://wa.me/971544426622">Book Now</a>
            </button>
          </div>
          <div className="card my-8 flex flex-col justify-between gap-3 ">
            <img
              loading="lazy"
              src="/images/Obstetrics/00f7cf_44cbcf292ced468d9883c2c8d80baa52mv2 1.webp"
              alt=""
            />
            <h3>External cephalic Version</h3>
            <p>
              In Breech presentation , in case it meets certain Criteria ,
              Doctor Roya does “External Cephalic Version ” to change the
              position of the head of baby from Breech to cephalic to avoid C
              section delivery . Currently Dr Roya Is the only one in UAE doing
              this method ( learn from Dr Zeinab Kazem Al Shunnar with
              experience on thousands of pregnant ladies ).
            </p>
            <button>
              {" "}
              <a href="https://wa.me/971544426622">Book Now</a>
            </button>
          </div>
          <div className="card my-8 flex flex-col justify-between gap-3 ">
            <img
              loading="lazy"
              src="/images/Obstetrics/16-things-you-should-know-about-having-a-c-section_148753-176c703 1.webp"
              alt=""
            />
            <h3>Normal Delivery C/ Section</h3>
            <p>
              We are affiliated with Emirates Hospital ( Jumeirah Branch ) . Dr
              Roya with more than 20 years experience on NVD . VBAC( vaginal
              Birth after C Section ) , Breech Delivery , Twins delivery
              .Internal and External cephalic version .
            </p>
            <button>
              {" "}
              <a href="https://wa.me/971544426622">Book Now</a>
            </button>
          </div>
        </div>
      </div>
      <div className="slider p-4 mb-16">
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
      <Footer />
    </div>
  );
}

export default Obstetrics;
