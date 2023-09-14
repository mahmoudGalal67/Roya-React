import React from "react";

function News() {
  return (
    <div className="news">
      <div className="wrapper flex lg:flex-row justify-between flex-col gap-5">
        <div className="left  sm:flex-row flex-col items-center flex gap-5 flex-1">
          <div className="info flex flex-col gap-4">
            <h3>
              SAIFEE <span>NEWS</span>
            </h3>
            <p>
              Enjoy our amazing offers in all our branches Laser Hair Removal In
              dubai <br />
              <br /> Alexandrite & Nd:YAG laser wavelengths have high absorption
              on melanin, the energy thermally damages bulge & bulb cells, these
              cells are responsible for hair growth and removing them prevents
              future hair regrowth.
            </p>
            <button>READ ALL NEWS</button>
          </div>
          <img
            loading="lazy"
            src="images/home/laser-hair-removal-package.webp"
            alt=""
          />
        </div>
        <div className="right sm:flex-row flex-col items-center  flex gap-5  ">
          <img
            loading="lazy"
            src="images/home/357448706_18278188288134461_1057114401740996905_n 1.webp"
            alt=""
            className="flex-1"
          />
          <img
            loading="lazy"
            src="images/home/laser-hair.webp"
            alt=""
            className="flex-1"
          />
        </div>
      </div>
    </div>
  );
}

export default News;
