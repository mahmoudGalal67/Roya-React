import React from "react";
import Nav from "../../components/Nav";
import Info from "../../components/Info";
import Footer from "../../components/Footer";
import ContactInfo from "../../components/ContactInfo";
import "./picoLaser.css";

function PicoLaser() {
  return (
    <div className="pico-laseer">
      <ContactInfo />
      <Info />
      <Nav />
      <main>
        <img
          loading="lazy"
          src="/images/picoLaser/pico-tech 1.webp"
          alt=""
          className="main-images"
        />
      </main>
      v{" "}
      <div className="info md:p-4 p-2 ">
        <h2 className="text-center md:p-4 p-2 ">
          pico <span>laser</span>
        </h2>
        <div className="wrapper md:p-4 p-2 flex md:flex-row flex-col">
          <div className="video">
            <video
              src="/images/picoLaser/Introduction To Picoway Technology.mp4"
              controls
              width="100%"
              height="100%"
            ></video>
          </div>
          <div className="details">
            <h2 className="title mb-4">
              <span>Remove boldly.</span>
              <br />
              Treat lightly.
            </h2>
            <p className="my-3">
              <span className="font-bold">
                Pico Laser : Meet the picosecond laser intentionally designed to
                work from the inside out.
              </span>{" "}
              <br />
              <br /> The PicoWay® system delivers high peak power and
              ultra-short pulse durations for a photoacoustic effect that
              transforms skin from the inside out.With this remarkably
              innovative picosecond laser, you can: <br /> &bull; Significantly
              improve acne scar and wrinkles with a series of quick, 15- to 20-
              minute treatments, with low downtime. <br />
              &bull; Treat benign pigmented lesions with 50% clearance after two
              treatments (96% of treated discolorations) across a range of skin
              types (Fitzpatrick Types II-V). <br />
              &bull; Treat a wide range of tattoos. Even difficult-to-treat blue
              and green tattoos.
            </p>
          </div>
        </div>
      </div>
      <div className="benefits md:p-8 p-3">
        <div className="wrapper p-4">
          <div className="title">
            Here are four big reasons our patients are in love with PicoWay
            system:
          </div>
          <br />
          <div className="title">Clinical evidence.</div>
          <div className="item items-center flex gap-2">
            &bull;{" "}
            <p className="my-3">
              Studies have shown that PicoWay lasers can deliver:
            </p>
          </div>
          <div className="item items-center flex gap-2">
            &bull;{" "}
            <p className="my-3">
              Reduced acne scarring after just three treatments
            </p>
          </div>
          <div className="item items-center flex gap-2">
            &bull;{" "}
            <p className="my-3">
              igh rates of improvement in wrinkle appearance
            </p>
          </div>
          <div className="item items-center flex gap-2">
            &bull;{" "}
            <p className="my-3">
              A high rate of benign pigmented lesion clearance
            </p>
          </div>
          <div className="item items-center flex gap-2">
            &bull;{" "}
            <p className="my-3">
              Safe on skin types up to and including VI with little risk of post
              inflammatory hyperpigmentation (PIH) which is common with other
              resurfacing methods
            </p>
          </div>
          <div className="title">Comfort.</div>
          <div className="item items-center flex gap-2">
            &bull;{" "}
            <p className="my-3">
              The PicoWay Resolve system uses a gentle approach to building new
              collagen and elastin in the treatment of acne scars and wrinkles.
            </p>
          </div>
          <div className="title">Low to no downtime.</div>
          <div className="item items-center flex gap-2">
            &bull;{" "}
            <p className="my-3">
              In brief, 15- to 20-minute treatment sessions, the PicoWay Resolve
              system transforms skin while leaving the epidermis intact.
            </p>
          </div>
          <div className="title">Photoacoustic effect.</div>
          <div className="item items-center flex gap-2">
            &bull;{" "}
            <p className="my-3">
              The PicoWay system’s photoacoustic effect, rather than
              photothermal effect, minimizes risk of skin heating and damage to
              surrounding tissue.
            </p>
          </div>
        </div>
      </div>
      <div className="wrapper justify-center w-full wrapper2 md:p-4 p-2 items-cnter flex md:flex-row flex-col">
        <div className="details details2">
          <h2 className="text-center">
            How the picoway system improved Tattoo Removal ?
          </h2>
        </div>
        <div className="video">
          <video
            src="/images/picoLaser/Industry Experts Weigh In On The Picoway System..mp4 "
            controls
            width="100%"
            height="100%"
          ></video>
        </div>
      </div>
      <div className="benefits p-4">
        <div className="item items-center flex gap-2">
          <p className="my-3">
            candelaadmin <br /> June 17 2020 <br />
            Tattoos are often thoughtful and artistic personal expressions.
            Unfortunately, they can also be rash decisions with a permanence
            that’s eventually regretted by their owners. Picosecond laser
            technology provides an effective removal tool for those who no
            longer care for their body art. A whopping 40% of millennials have a
            tattoo, and, according to a poll by Ipsos, approximately 30% of all
            Americans have at least one tattoo. This clearly represents a
            potentially massive client base. The laser system offers the most
            innovative laser tattoo removal technology. Compared with the
            nanosecond technology of the past, today’s ultra-fast picosecond
            laser removal technology offers less risk and pain for patients,
            faster results, works to remove a broader range of colors and
            requires fewer treatment sessions. “A lot of us are familiar with
            nanosecond technology, but there were limitations,” said Dr. Lesley
            Clark-Loeser, a co-founder of the Precision Skin Institute in Davie,
            Florida. “My limitations were that I couldn’t treat all skin types
            safely. I also couldn’t predict what was going to happen to skin
            texture over time in these patients. This is the first time I am
            seeing skin tone improve over time as a tattoo is disappearing.”
          </p>
        </div>
        <div className="title">How it Works</div>
        <div className="item items-center flex gap-2">
          &bull;{" "}
          <p className="my-3">
            The PicoWay system offers the shortest pulse durations of any
            aesthetic laser —one picosecond is equal to one trillionth of a
            second*. These extremely short laser pulses allow treatment across a
            broad range of skin types and darker skin tones. Less advanced
            lasers that offer longer nanosecond pulses create a photothermal
            effect, which can overheat melanin found in darker skin tones and
            cause scarring, hyperpigmentation, and hyperpigmentation. Also, the
            PicoWay system is the only picosecond platform with 4 wavelengths to
            address a wide range of tattoo colors, including difficult to remove
            blue and green tattoos. The PicoWay system delivers short, fast, and
            powerful pulses of targeted energy. This creates the primarily
            photoacoustic impact needed to fracture tattoo ink into minuscule
            particles. This is achieved without the photothermal impact of other
            lasers, which can overheat surrounding skin tissue—a stark contrast
            to the slower pulse speed of nanosecond laser technology.
          </p>
        </div>
        <div className="title">Successful Treatment Overview</div>
        <div className="item items-center flex gap-2">
          &bull;{" "}
          <p className="my-3">
            Before each session, tattoo removal clients should thoroughly clean
            and shave the area that will be treated. A topical anesthetic or
            cooling pack may be applied at the time of treatment. Treatments
            typically last just 15 to 30 minutes and can require multiple
            sessions spaced 6 to 16 weeks apart, depending on both the tattoo
            size and its complexity. After each session, the patient should keep
            the area clean and regularly apply sunblock to the area if going
            outdoors. Mild redness or itching may occur and typically lasts only
            for a few days. The technology surrounding tattoo removal has
            improved dramatically with picosecond lasers. The PicoWay system
            makes the procedure easier for both the practitioner and patient. *
            Based on manufacturer specifications, December 2019
          </p>
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

export default PicoLaser;
