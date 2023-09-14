import React from "react";
import Slider from "react-slick";

function OurDvice() {
  var settings = {
    dots: true,
    autoPlay: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
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
    <section className="our-advice relative">
      <img
        loading="lazy"
        src="/images/home/Polygon 2.webp"
        alt=""
        className="polygon"
      />
      <div className="wrapper py-12 px-6 flex md:flex-row flex-col items-center justify-between gap-5">
        <div className="left md:p-0 py-8 flex-1">
          <h3 className="my-2">Our Anti Aging Advice</h3>
          <span className="my-5">Roya Medical Center</span>
          <p className="my-5">
            Beauty Concerns varies by age, But to be honest there is always
            something to be worried about ! In teens and 20s people are worried
            about Active Acne, Acne Scars, Pigmentations, Hirsutism. When it
            reaches to 30s ,starts worrying about hair loss, fine wrinkles, skin
            sagging, … and in middle age ofcourse mosty skin saggy ness and
            aging. <br />
            <br /> We should keep in mind, that collagen loss starts as early as
            20s and We should always keep stimulating collagen synthesis to
            delay the aging process. We always advise that prevention is better
            Than treatment, So keep your Sunscreen and sunglasses as close as
            possible and start routine skin care as early as possible(Vit C,
            Retinoids).
          </p>
        </div>
        <div className="right flex-1">
          <img
            className="w-full"
            loading="lazy"
            src="/images/home/before-after-portrait-woman-retouched(1) 1.webp"
            alt=""
          />
        </div>
      </div>
      <div className="features">
        <h2>Featured In</h2>
        <div className="wrapper">
          <Slider {...settings}>
            <img loading="lazy" src="images/home/feature1.webp" alt="" />
            <img loading="lazy" src="images/home/feature2.webp" alt="" />
            <img loading="lazy" src="images/home/feature3.webp" alt="" />
            <img loading="lazy" src="images/home/feature4.webp" alt="" />
            <img loading="lazy" src="images/home/feature5.webp" alt="" />
            <img loading="lazy" src="images/home/feature7.webp" alt="" />
          </Slider>
        </div>
      </div>
    </section>
  );
}

export default OurDvice;
