import React from "react";
import Nav from "../../components/Nav";
import Info from "../../components/Info";
import Footer from "../../components/Footer";
import ContactInfo from "../../components/ContactInfo";
import "./OvarianRejuvenation.css";

function OvarianRejuvenation() {
  return (
    <div className="OvarianRejuvenation">
      <ContactInfo />
      <Info />
      <Nav />
      <main>
        <img
          loading="lazy"
          src="/images/OvarianRejuvenation/platelet-rich-plasma-myrtle-beach 1.webp"
          alt=""
          className="main-images"
        />
      </main>{" "}
      <div className="info md:p-4 p-2 ">
        <h2 className="text-center md:p-4 p-2 ">
          Ovarian Rejuvenation with <span>PRP in Dubai</span>
        </h2>
        <div className="wrapper md:p-4 p-2 flex md:flex-row flex-col">
          <div className="video">
            <img
              loading="lazy"
              className="h-full w-full"
              src="/images/OvarianRejuvenation/Section.webp"
              alt=""
            />
          </div>
          <div className="details">
            <h2 className="title mb-4">
              <span>Why</span>
              Ovarian
              <br /> Rejuvenation?
            </h2>
            <p className="my-3">
              Diminished ovarian reserve (DOR) is a condition in which the ovary
              loses its normal reproductive potential, compromising fertility.
              The condition may result from disease or injury, but most commonly
              occurs as a result of normal aging.Ovarian PRP is being done in
              order to stimulate any remaining ovarian stem cell to grow and
              produce new follicles. Low AMH ( Poor Ovarian reserve ) is one of
              the biggest challenges in infertility treatment . We have started
              ” Ovarian rejuvenation with PRP ” in Dubai since 2016 to help this
              group of Patients .
            </p>
          </div>
        </div>
      </div>
      <div className="benefits md:px-8 px-3">
        <div className="main-title md:p-8 p-2">
          Does Ovarian Rejuvenation Work
        </div>
        <div className="wrapper p-4">
          <div className="title">Literature review</div>
          <br />
          <div className="item items-center flex gap-2">
            <p className="mb-3">
              Due to the fact that modern women postpone childbirth until later
              in life, they are more likely to face the problem of ovarian
              insufficiency by the time they are ready to have children. So, the
              ability to restore the ovarian function safely is crucially
              important. Our study involved 38 women 31-45 years of age with low
              ovarian reserves and at least two unsuccessful attempts to receive
              their oocytes through IVF. The blood from the patients was
              collected into two BD vacutainers for PRP preparation. The
              platelet concentration in the PRP was 1 × 106 μl. PRP injections
              into the ovaries were performed by a gynecologist with a special
              25G needle, 20 cm in length, as an ultrasound-guided procedure or
              a laparoscopic-assisted approach. After PRP treatment, women were
              tested with several criteria for 12 months. We saw a significant
              improvement in hormone levels; six healthy babies were born, ten
              pregnancies were achieved, and four out of the ten were from
              natural conception. The PRP injections into the ovaries are safe,
              productive, and a natural treatment that may help women with
              premature ovarian insufficiency to give birth to their own child.
              The difference and novelty with our method of ovarian rejuvenation
              is in obtaining a higher platelet concentration (about 1 × 106
              μl), which allows us to achieve long-lasting results, within 12
              months, after a single procedure.
            </p>
          </div>
        </div>
      </div>
      <div className="benefits md:px-8 px-3">
        <div className="main-title md:p-8 p-2">
          What's the process of ovarian PRP?
        </div>
        <div className="wrapper p-4">
          <div className="item items-center flex gap-2">
            <p className="mb-3">
              1- To draw Blood and prepare PRP almost one Ml for each ovary at
              concentration of minimum one million/ML <br />
              2- ovarian injection can be done under local anesthesia or in case
              patient request general anesthesia. <br /> 3- One dose painkiller(
              Acetaminophen) and 2 grams Antibiotic will be given orally <br />{" "}
              4- we use the same technique as OPU IVF . So the needle will be
              attached to vaginal ultrasound and through Ultrasound guidance we
              inject the PRP inside both ovaries. <br /> 5- after 30 minutes we
              double check by ultrasound to make sure all is well and patient
              can be discharged . <br /> 6- to know more about infertility
              treatment.
            </p>
          </div>
          <button>
            {" "}
            <a href="https://wa.me/971544426622">Book Now</a>
          </button>
        </div>
      </div>
      <div className="benefits md:px-8 px-3">
        <div className="main-title md:p-8 p-2">
          5 Things to know about ovarian rejuvenation with PRP
        </div>
        <div className="wrapper p-4">
          <div className="item items-center flex gap-2">
            <p className="mb-3">
              1- TTill Now we don’t have any magic treatment to boost ovarian
              function in poor ovarian reserve <br />
              2- As per our experience its very effective in those who are
              already producing few follicle and use Ovarian PRP to produce
              better quality oocytes . 3- The PRP count matters in ovarian
              response. <br /> 4- a It can be done transvaginaly under local
              anesthesia
              <br /> 5- Can be injected together with stem cell .
            </p>
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

export default OvarianRejuvenation;
