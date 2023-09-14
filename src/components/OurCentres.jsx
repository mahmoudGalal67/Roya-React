import React from "react";

import Slider from "react-slick";

function OurCentres() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <section className="our-centres my-5 pb-7 px-3">
      <div className="wrapper text-center md:px-24 px-4">
        <h2>OUR DEPARTMENTS </h2>
        <p className="md:px-48 px-3">
          Beauty Concerns varies by age , But to be honest there is always
          something to be worried about! In teens and 20s people are worried
          about Active Acne, Acne Scars ,Pigmentations ,Hirsutism. When it
          reaches to 30s, starts worrying about hair loss, fine wrinkles, skin
          sagging, … and in middle age ofcourse mosty skin saggy ness and aging.
        </p>
      </div>
      <div className="cards-wrapper my-8 md:px-28 px-4">
        <Slider {...settings}>
          <div className="p-5">
            <div className="card">
              <img
                loading="lazy"
                src="images/home/Aesthetic Dermatology.webp"
                alt=""
              />
              <div className="info">Aesthetic Dermatology</div>
            </div>
          </div>
          <div className="p-5">
            <div className="card">
              <img loading="lazy" src="images/home/Slimming.webp" alt="" />
              <div className="info">Slimming</div>
            </div>
          </div>
          <div className="p-5">
            <div className="card">
              <img
                loading="lazy"
                src="images/home/Laser Hair Removal.webp"
                alt=""
              />
              <div className="info">Laser Hair Removal</div>
            </div>
          </div>
          <div className="p-5">
            <div className="card">
              <img loading="lazy" src="images/home/Gynecology.webp" alt="" />
              <div className="info">Gynecology</div>
            </div>
          </div>
          <div className="p-5">
            <div className="card">
              <img loading="lazy" src="images/home/Obstetrics.webp" alt="" />
              <div className="info">Obstetrics</div>
            </div>
          </div>
          <div className="p-5">
            <div className="card">
              <img
                loading="lazy"
                src="images/home/Infertility Treatment and IVF.webp"
                alt=""
              />
              <div className="info">Infertility Treatment and IVF</div>
            </div>
          </div>
        </Slider>
      </div>
    </section>
  );
}

export default OurCentres;
