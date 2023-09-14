import React from "react";
import Nav from "../../components/Nav";
import Info from "../../components/Info";
import Footer from "../../components/Footer";
import ContactInfo from "../../components/ContactInfo";
import "./Dentistry.css";

function Dentistry() {
  return (
    <div className="Dentistry">
      <ContactInfo />
      <Info />
      <Nav />
      <main>
        <img
          loading="lazy"
          src="/images/Dentistry/dental-implants-surgery-concept-pen-tool-created-clipping-path-included-jpeg-easy-composite 1.webp"
          alt=""
          className="main-images"
        />
      </main>
      <div className="services md:p-8 p-4">
        <h2>Dentistry</h2>
        <div className="wrapper flex flex-wrap justify-around gap-4">
          <div className="card my-8 flex flex-col justify-between gap-3 ">
            <img
              loading="lazy"
              src="/images/Dentistry/cards/full dentures 1.webp"
              alt=""
            />
            <h3>Cleanings</h3>
            <p>
              Dental Cleaning , scaling and polishing is part of our basic
              dental care program .Its very important for gingival health and
              dental care .you can add Laser Dental whitening to this routine to
              have a shiny smile.
            </p>
            <button>
              {" "}
              <a href="https://wa.me/971544426622">Book Now</a>
            </button>
          </div>
          <div className="card my-8 flex flex-col justify-between gap-3 ">
            <img
              loading="lazy"
              src="/images/Dentistry/cards/blog-7 1.webp"
              alt=""
            />
            <h3>Pregnancy Ultrasound</h3>
            <p>
              Basically first we need to check if damage has reached to root
              canal or no using dental X Ray. Later if its just superficial
              decay , we can go for composite filling .
            </p>
            <button>
              {" "}
              <a href="https://wa.me/971544426622">Book Now</a>
            </button>
          </div>
          <div className="card my-8 flex flex-col justify-between gap-3 ">
            <img
              loading="lazy"
              src="/images/Dentistry/cards/bigstock--D-Render-Of-Teeth-With-Dental-239686417 1.webp"
              alt=""
            />
            <h3>Crowns</h3>
            <p>
              Even if you have done composite filling its better to put a dental
              crown on it to prevent the risk of any future break of the tooth
              because the tooth is less strong after primary repair.
            </p>
            <button>
              {" "}
              <a href="https://wa.me/971544426622">Book Now</a>
            </button>
          </div>
          <div className="card my-8 flex flex-col justify-between gap-3 ">
            <img
              loading="lazy"
              src="/images/Dentistry/cards/dental-veneers 1.webp"
              alt=""
            />
            <h3>Veneers</h3>
            <p>
              Veneers can cover your teeth to give better and more shiny color
              and improve your smile .there is 2 kind of veneer called composite
              veneer and ceramic veneer. We prefer ceramic ones because its
              color don’t change by time .
            </p>
            <button>
              {" "}
              <a href="https://wa.me/971544426622">Book Now</a>
            </button>
          </div>
          <div className="card my-8 flex flex-col justify-between gap-3 ">
            <img
              loading="lazy"
              src="/images/Dentistry/cards/images 1.webp"
              alt=""
            />
            <h3>Implants</h3>
            <p>
              Although we do our best to prevent from any tooth extraction but
              if there is any we can fill in with dental implant . having empty
              tooth space causes the other teeth by time and changes the teeth
              arrangement and sometimes causes loosening of teeth.
            </p>
            <button>
              {" "}
              <a href="https://wa.me/971544426622">Book Now</a>
            </button>
          </div>
          <div className="card my-8 flex flex-col justify-between gap-3 ">
            <img
              loading="lazy"
              src="/images/Dentistry/cards/full dentures 1.webp"
              alt=""
            />
            <h3>Dentures</h3>
            <p>
              Sometimes its better to use denture instead of dental implants ,
              our doctors will evaluate and tell you actually with method is
              better and whats the pros and cons of each treatment plan .
            </p>
            <button>
              {" "}
              <a href="https://wa.me/971544426622">Book Now</a>
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Dentistry;
