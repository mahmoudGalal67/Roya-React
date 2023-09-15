import React from "react";
import Nav from "../../components/Nav";
import Info from "../../components/Info";
import Footer from "../../components/Footer";
import ContactInfo from "../../components/ContactInfo";
import "./Gynecology.css";

function Gynecology() {
  return (
    <div className="Gynecology">
      <ContactInfo />
      <Info />
      <Nav />
      <main>
        <img
          loading="lazy"
          src="/images/Gynecology/Gynecology-Obstetrics 1.webp"
          alt=""
          className="main-images"
        />
      </main>{" "}
      <div className="info md:p-4 p-2 ">
        <h2 className="text-center md:p-4 p-2 ">Gynecology</h2>
        <div className="wrapper md:p-4 p-2 flex md:flex-row flex-col">
          <div className="video">
            <img
              loading="lazy"
              className="h-full w-full"
              src="/images/Gynecology/Section.webp"
              alt=""
            />
          </div>
          <div className="details">
            <h2 className="title mb-4">
              <span>Why You should see .</span>
              <br />
              Gynecologist ?
            </h2>
            <p className="my-3">
              Still There is lots of problems , Ladies keep suffering in silence
              From Sexual health related issues to contraception to Infertility
              related subjects , Still lots of ladies are suffering in silence
              without opening it up with a medical care giver . Your
              Gynecologist can hear you and advise even to see a psychologist if
              you are facing with post partum depression or post traumatic
              Anxiety disorder following ( Sexual Abuse ) Don’t forget “Sexual
              Abuse” is an emergency issue and you need to see your doctor to
              prevent early or late consequences .
            </p>
          </div>
        </div>
      </div>
      <div className="benefits relative">
        <div className="wrapper md:px-16 my-5">
          <img
            loading="lazy"
            src="/images/home/Polygon 2.webp"
            alt=""
            className="polygon"
          />
          <h2 className="my-5 px-3 text-center pt-16">
            OUR Gynecology services
          </h2>
          <div className="title px-3 text-center">
            You may visit a Gynaecology clinic in dubai if you have <br /> any
            problem related to:
          </div>
          <img
            className="block mx-auto"
            loading="lazy"
            src="/images/Gynecology/13 1.webp"
            alt=""
          />

          <div>
            <div className="flex flex-row md:justify-around my-7 flex-wrap">
              <div>
                <div className="item items-center flex gap-2">
                  &bull; <p className="my-3">Irregular menstruation</p>
                </div>
                <div className="item items-center flex gap-2">
                  &bull; <p className="my-3">Vaginal Infection,STD</p>
                </div>
                <div className="item items-center flex gap-2">
                  &bull; <p className="my-3">Uterine Fibroids</p>
                </div>
                <div className="item items-center flex gap-2">
                  &bull; <p className="my-3">Ovarian Cyst</p>
                </div>
              </div>
              <div>
                <div className="item items-center flex gap-2">
                  &bull;{" "}
                  <p className="my-3">Hormonal Imbalances and Active acne .</p>
                </div>
                <div className="item items-center flex gap-2">
                  &bull; <p className="my-3">Hirsutism</p>
                </div>
                <div className="item items-center flex gap-2">
                  &bull; <p className="my-3">Annual Check Up and Pap Smear</p>
                </div>
                <div className="item items-center flex gap-2">
                  &bull; <p className="my-3">Contraception</p>
                </div>
              </div>
              <div>
                <div className="item items-center flex gap-2">
                  &bull; <p className="my-3">Erectile Dysfunction</p>
                </div>
                <div className="item items-center flex gap-2">
                  &bull; <p className="my-3">Labiaplasty</p>
                </div>
                <div className="item items-center flex gap-2">
                  &bull; <p className="my-3">DIVA LASER</p>
                </div>
                <div className="item items-center flex gap-2">
                  &bull; <p className="my-3">Vaginal Tightening Operation</p>
                </div>
              </div>
              <div>
                <div className="item items-center flex gap-2">
                  &bull; <p className="my-3">Mummy Make over</p>
                </div>
                <div className="item items-center flex gap-2">
                  &bull; <p className="my-3">Menopause</p>
                </div>
                <div className="item items-center flex gap-2">
                  &bull; <p className="my-3">Sexual Health</p>
                </div>
                <div className="item items-center flex gap-2">
                  &bull; <p className="my-3">Cosmetic Gynecology</p>
                </div>
              </div>
            </div>
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

export default Gynecology;
