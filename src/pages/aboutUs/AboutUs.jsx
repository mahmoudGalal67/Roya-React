import React from "react";
import Nav from "../../components/Nav";
import Info from "../../components/Info";
import Footer from "../../components/Footer";
import ContactInfo from "../../components/ContactInfo";
import "./AboutUs.css";

function AboutUs() {
  return (
    <div className="about-us">
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
      <section className="our-story md:p-24 p-4">
        <div className="wrapper flex md:flex-row flex-col gap-7">
          <div className="left">
            <h2>we are team of dreamers and builders</h2>
            <img
              loading="lazy"
              src="images/Aboutus/Annotation 2023-08-06 060206.webp"
              alt=""
            />
            <h2>Our Story</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              pellentesque leo nec aenean maecenas odio tempus id. Mauris,
              elementum est egestas tincidunt pellentesque. Tempus massa rhoncus
              velit nec. Lorem purus est facilisis quam lorem amet, nunc lectus.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              pellentesque leo nec aenean maecenas odio tempus id. Mauris, empus
              massa rhoncus velit nec. Lorem purus est facilisis quam lorem
              amet, nunc lectus. Lorem ipsum dolor sit amet, consectetur
              adipiscing elit. Sed pellentesque leo nec aenean maecenas odio
              tempus id.
            </p>
            <img
              loading="lazy"
              src="images/Aboutus/Annotation 2023-08-06 060130 2.webp"
              alt=""
            />
          </div>
          <div className="right">
            <p>
              ue. Tempus massa rhoncus velit nec. Lorem purus est facilisis quam
              lorem amet, nunc lectus. Lorem ipsum dolor sit amet, consectetur
              adipiscing elit. Sed pellentesque leo nec aenean maecenas odio
              tempus id. Mauris, elementum est egestas tincidunt pellentesque.
            </p>
            <div className="group flex gap-3">
              <div className="column flex flex-col gap-3">
                <img
                  loading="lazy"
                  src="images/Aboutus/Annotation 2023-08-06 060053.webp"
                  alt=""
                />
                <img
                  loading="lazy"
                  src="images/Aboutus/Annotation 2023-08-06 60209.webp"
                  alt=""
                />
              </div>
              <div className="column flex flex-col gap-3">
                <img
                  loading="lazy"
                  src="images/Aboutus/Annotation 2023-08-06 60207.webp"
                  alt=""
                />
                <img
                  loading="lazy"
                  src="images/Aboutus/Annotation 2023-08-06 60210.webp"
                  alt=""
                />
              </div>
              <div className="column flex flex-col gap-3">
                <img
                  loading="lazy"
                  src="images/Aboutus/Annotation 2023-08-06 60208.webp"
                  alt=""
                />
                <img
                  loading="lazy"
                  src="images/Aboutus/Annotation 2023-08-06 60211.webp"
                  alt=""
                />
              </div>
            </div>
            <img
              loading="lazy"
              src="images/Aboutus/Annotation 2023-08-06 060130 1.webp"
              className="block my-12"
              alt=""
            />
            <h2>How We Think</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              pellentesque leo nec aenean maecenas odio tempus id. Mauris,
              elementum est egestas tincidunt pellentesque. Tempus massa rhoncus
              velit nec. Lorem purus est facilisis quam lorem amet, nunc lectus.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              pellentesque leo nec aenean maecenas odio tempus id. Mauris, empus
              massa rhoncus velit nec. Lorem purus est facilisis quam lorem
              amet, nunc lectus. Lorem ipsum dolor sit amet, consectetur
              adipiscing elit. Sed pellentesque leo nec aenean maecenas odio
              tempus id.
            </p>
          </div>
        </div>
        <img
          loading="lazy"
          src="images/Aboutus/Annotation 2023-08-06 060130 3.webp"
          alt=""
        />
      </section>
      <Footer />
    </div>
  );
}

export default AboutUs;
