import React from "react";
import { AiOutlineHeart } from "react-icons/ai";
import Slider from "react-slick";

function TopStories() {
  var settings = {
    dots: true,
    autoPlay: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 960,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className="top-stories py-5">
      <div className="wrapper">
        <h3 className="my-5 text-center">
          Best <span>Seller</span>
        </h3>
        <Slider {...settings}>
          <div className="card">
            <img loading="lazy" src="/images/home/bestSeller1.webp" alt="" />
            <div className="heart">
              <AiOutlineHeart />
            </div>
            <p>Morpheus8</p>
          </div>
          <div className="card">
            <img loading="lazy" src="/images/home/bestSeller2.webp" alt="" />
            <div className="heart">
              <AiOutlineHeart />
            </div>
            <p>PICO Laser</p>
          </div>
          <div className="card">
            <img loading="lazy" src="/images/home/bestSeller3.webp" alt="" />
            <div className="heart">
              <AiOutlineHeart />
            </div>
            <p>Laser Hair Removal </p>
          </div>
          <div className="card">
            <img loading="lazy" src="/images/home/bestSeller4.webp" alt="" />
            <div className="heart">
              <AiOutlineHeart />
            </div>
            <p>Forever Younf BBL</p>
          </div>
          <div className="card">
            <img loading="lazy" src="/images/home/bestSeller5.webp" alt="" />
            <div className="heart">
              <AiOutlineHeart />
            </div>
            <p>EmSculpt Neo</p>
          </div>
        </Slider>
      </div>
    </section>
  );
}

export default TopStories;
