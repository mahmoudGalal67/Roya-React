import React from "react";
import Nav from "../../components/Nav";
import Info from "../../components/Info";
import Footer from "../../components/Footer";
import ContactInfo from "../../components/ContactInfo";
import "./blogs.css";

import Slider from "react-slick";

function Blogs() {
  var settings = {
    autoplay: true,
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
    <main className="blogs">
      <ContactInfo />
      <Info />
      <Nav />
      <main>
        <img
          loading="lazy"
          src="/images/blogs/Rectangle 77.webp"
          alt=""
          className="main-images"
        />
      </main>
      <section className="md:p-24 p-4">
        <Slider {...settings}>
          <div className="px-5 ">
            <div className="card">
              <img
                loading="lazy"
                src="/images/blogs/slider/laser-hair.webp"
                alt=""
                className="main-images"
              />
              <h3>The Medical Experts Carefully...</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                enim fames quam pellentesque interdum purus senectus feugiat
                elit.c.
              </p>
            </div>
          </div>
          <div className="px-5">
            <div className="card">
              <img
                loading="lazy"
                src="/images/blogs/slider/357448706_18278188288134461_1057114401740996905_n 1.webp"
                alt=""
              />
              <h3>The Medical Experts Carefully...</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                enim fames quam pellentesque interdum purus senectus feugiat
                elit.c.
              </p>
            </div>
          </div>
          <div className="px-5">
            <div className="card">
              <img
                loading="lazy"
                src="/images/blogs/slider/358470479_18278723758134461_1954640365480812679_n.webp"
                alt=""
              />
              <h3>The Medical Experts Carefully...</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                enim fames quam pellentesque interdum purus senectus feugiat
                elit.c.
              </p>
            </div>
          </div>
          <div className="px-5">
            <div className="card">
              <img
                loading="lazy"
                src="/images/blogs/slider/358485935_18278723767134461_6875117999783765757_n.webp"
                alt=""
              />
              <h3>The Medical Experts Carefully...</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                enim fames quam pellentesque interdum purus senectus feugiat
                elit.c.
              </p>
            </div>
          </div>
          <div className="px-5">
            <div className="card">
              <img
                loading="lazy"
                src="/images/blogs/slider/358486223_18278723764134461_2250502140430194121_n.webp"
                alt=""
              />
              <h3>The Medical Experts Carefully...</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                enim fames quam pellentesque interdum purus senectus feugiat
                elit.c.
              </p>
            </div>
          </div>
          <div className="px-5">
            <div className="card">
              <img
                loading="lazy"
                src="/images/blogs/slider/laser-hair-removal-package.webp"
                alt=""
              />
              <h3>The Medical Experts Carefully...</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                enim fames quam pellentesque interdum purus senectus feugiat
                elit.c.
              </p>
            </div>
          </div>
        </Slider>
        <div>
          <img
            loading="lazy"
            src="/images/blogs/laser-hair (1).webp"
            className="block mx-auto my-16"
            alt=""
          />
        </div>
        <div className="info">
          <h3>The Medical Experts Carefully...</h3>
          <p>
            The Medical Experts Carefully... Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Sed pellentesque leo nec aenean
            maecenas odio tempus id. Mauris, elementum est egestas tincidunt
            pellentesque. Tempus massa rhoncus velit nec. Lorem purus est
            facilisis quam lorem amet, nunc lectus. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Sed pellentesque leo nec aenean
            maecenas odio tempus id. Mauris, elementum est egestas tincidunt
            pellentesque. Tempus massa rhoncus velit nec. Lorem purus est
            facilisis quam lorem amet, nunc lectus.
          </p>
          <p>
            The Medical Experts Carefully... Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Sed pellentesque leo nec aenean
            maecenas odio tempus id. Mauris, elementum est egestas tincidunt
            pellentesque. Tempus massa rhoncus velit nec. Lorem purus est
            facilisis quam lorem amet, nunc lectus. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Sed pellentesque leo nec aenean
            maecenas odio tempus id. Mauris, elementum est egestas tincidunt
            pellentesque. Tempus massa rhoncus velit nec. Lorem purus est
            facilisis quam lorem amet, nunc lectus.
          </p>
          <p>
            The Medical Experts Carefully... Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Sed pellentesque leo nec aenean
            maecenas odio tempus id. Mauris, elementum est egestas tincidunt
            pellentesque. Tempus massa rhoncus velit nec. Lorem purus est
            facilisis quam lorem amet, nunc lectus. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Sed pellentesque leo nec aenean
            maecenas odio tempus id. Mauris, elementum est egestas tincidunt
            pellentesque. Tempus massa rhoncus velit nec. Lorem purus est
            facilisis quam lorem amet, nunc lectus.
          </p>
        </div>
        <div className="info-details flex gap-7 justify-center items-center lg:flex-row flex-col">
          <div className="left">
            <h3>The Medical Experts Carefully...</h3>
            <p>
              The Medical Experts Carefully... Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Sed pellentesque leo nec aenean
              maecenas odio tempus id. Mauris, elementum est egestas tincidunt
              pellentesque. Tempus massa rhoncus velit nec. Lorem purus est
              facilisis quam lorem amet, nunc lectus. Lorem ipsum dolor sit
              amet, consectetur adipiscing elit. Sed pellentesque leo nec aenean
              maecenas odio tempus id. Mauris, elementum est egestas tincidunt
              pellentesque. Tempus massa rhoncus velit nec. Lorem purus est
              facilisis quam lorem amet, nunc lectus.
            </p>
            <p>
              The Medical Experts Carefully... Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Sed pellentesque leo nec aenean
              maecenas odio tempus id. Mauris, elementum est egestas tincidunt
              pellentesque. Tempus massa rhoncus velit nec. Lorem purus est
              facilisis quam lorem amet, nunc lectus. Lorem ipsum dolor sit
              amet, consectetur adipiscing elit. Sed pellentesque leo nec aenean
              maecenas odio tempus id. Mauris, elementum est egestas tincidunt
              pellentesque. Tempus massa rhoncus velit nec. Lorem purus est
              facilisis quam lorem amet, nunc lectus.
            </p>
            <p>
              The Medical Experts Carefully... Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Sed pellentesque leo nec aenean
              maecenas odio tempus id. Mauris, elementum est egestas tincidunt
              pellentesque. Tempus massa rhoncus velit nec. Lorem purus est
              facilisis quam lorem amet, nunc lectus. Lorem ipsum dolor sit
              amet, consectetur adipiscing elit. Sed pellentesque leo nec aenean
              maecenas odio tempus id. Mauris, elementum est egestas tincidunt
              pellentesque. Tempus massa rhoncus velit nec. Lorem purus est
              facilisis quam lorem amet, nunc lectus.
            </p>
          </div>
          <div className="right">
            <img
              loading="lazy"
              className="block my-5"
              src="/images/blogs/358485935_18278723767134461_6875117999783765757_n (1).webp"
              alt=""
            />
            <img
              loading="lazy"
              className="block my-5"
              src="/images/blogs/358486223_18278723764134461_2250502140430194121_n (1).webp"
              alt=""
            />
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}

export default Blogs;
