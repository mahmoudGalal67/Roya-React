import React from "react";
import Nav from "../../components/Nav";
import Info from "../../components/Info";
import Footer from "../../components/Footer";
import ContactInfo from "../../components/ContactInfo";
import "./LaserHairRemoval.css";

function LaserHairRemoval() {
  return (
    <div className="LaserHairRemoval">
      <ContactInfo />
      <Info />
      <Nav />
      <main>
        <img
          loading="lazy"
          src="/images/LaserHairRemoval/011f85_eb412686ba684e32b958be8a282e4471~mv2.webp.webp"
          alt=""
          className="main-images"
        />
      </main>
      <div className="info md:p-4 p-2 ">
        <h2 className="text-center md:p-4 p-2 ">
          Laser Hair <span>Removal</span>
        </h2>
        <div className="wrapper md:p-4 p-2 flex md:flex-row flex-col">
          <div className="video">
            <video
              src="/images/LaserHairRemoval/Gentle Laser How It Works.mp4"
              controls
              width="100%"
              height="100%"
            ></video>
          </div>
          <div className="details">
            <h2 className="title mb-4">
              <span>Why To </span>
              <br />
              Choose Candela?
            </h2>
            <p className="my-3">
              Fastest Treatment by completing full body in about 45 Minutes Best
              Hair Clearance by 3 msec technology Dynamic cooling device with
              highest client satisfaction Effective on all Skin types FDA
              approved with highest safty profile
            </p>
          </div>
        </div>
        <div className="main-title md:p-8 p-2">
          Laser Hair Removal Department Price List
        </div>
      </div>
      <div className="price-list md:p-8 p-2">
        <div className="wrapper flex lg:flex-row flex-col gap-5 justify-between">
          <div className="left">
            <div className="item">
              <div>One small area</div>
              <span className="breakLine"></span>
              <div>150AED</div>
            </div>
            <p>full Bikini or Underarms or half legs for ladies</p>
            <div className="item">
              <div>One small area</div>
              <span className="breakLine"></span>
              <div>200 AED</div>
            </div>
            <p>For Gentlmen</p>
            <div className="item">
              <div>X4 Full Bikini</div>
              <span className="breakLine"></span>
              <div>800 AED</div>
            </div>
            <div className="item">
              <div>Full Bikini & Underarms</div>
              <span className="breakLine"></span>
              <div>800 AED</div>
            </div>
            <p>Package of 3 sessions on one area</p>
            <div className="item">
              <div>Full Body</div>
              <span className="breakLine"></span>
              <div>900 AED</div>
            </div>
          </div>
          <div className="right">
            <div className="item">
              <div>X4 Bikini +Underarms+ Half Legs</div>
              <span className="breakLine"></span>
              <div>1200 AED</div>
            </div>
            <p>
              Total number of sessions it 4 only .All those parts has to be done
              togheter in one session .
            </p>
            <div className="item">
              <div>X4 Sessions Full Body</div>
              <span className="breakLine"></span>
              <div>2400 AED</div>
            </div>
            <p>Without front and Back</p>
            <div className="item">
              <div>X6 Sessions Full Body</div>
              <span className="breakLine"></span>
              <div>5000 AED</div>
            </div>
            <p>For Ladies only .</p>
            <div className="item">
              <div>X4 Sessions Package</div>
              <span className="breakLine"></span>
              <div>1600 AED</div>
            </div>
            <p>Full Bikini + Underarms + Half Legs +Face</p>
          </div>
        </div>
      </div>
      <div className="benefits md:p-8 p-3">
        <div className="wrapper p-4">
          <div className="title">Hair life cycle</div>
          <div className="item items-center flex gap-2">
            &bull;{" "}
            <p className="my-3">
              Alexandrite & Nd:YAG laser wavelengths have high absorption on
              melanin, when laser is absorbed, the energy thermally damages
              bulge & bulb cells, these cells are responsible for hair growth
              and removing them prevents future hair regrowth.
            </p>
          </div>
          <div className="item items-center flex gap-2">
            &bull;{" "}
            <p className="my-3">
              The hair is rich in melanin & has a life cycle of 3 stages:
            </p>
          </div>
          <div className="item items-center flex gap-2">
            &bull;{" "}
            <p className="my-3">
              Anagen: this growing stage is the ideal target of laser hair
              removal, the hair is fully attached to the bulge & bulb cells
              which can be thermally damaged by burning the hair.
            </p>
          </div>
          <div className="item items-center flex gap-2">
            &bull;{" "}
            <p className="my-3">
              Catagen & Telogen: hair in this stage stops growing and is not
              attached to the bulge & bulb cells, hence burning hair by laser
              doesn’t remove bulge & bulb cells. These cells can be removed once
              the hair cycle returns to anagen stage, which explains the need
              for multiple sessions
            </p>
          </div>
          <div className="title">Targeting melanin in hair</div>
          <div className="item items-center flex gap-2">
            &bull;{" "}
            <p className="my-3">
              Hair removal lasers target melanin which is present in both hair &
              skin, hence a protection of skin from the thermal effect is
              needed. Hair removal lasers use different cooling technologies to
              cancel the thermal effect of laser & protect skin. Candela’s
              proprietary Dynamic Cooling Device (DCD) cools the skin precisely
              & consistently in a way that prevents under-cooling of skin that
              may cause burns, and over-cooling that may leak to hair itself &
              affect results.
            </p>
          </div>
          <div className="title">Hair removal efficacy</div>
          <div className="item items-center flex gap-2">
            &bull;{" "}
            <p className="my-3">
              Efficacy of hair removal necessitates using a pulse duration
              shorter than the Thermal Relaxation Time (TRT) of hair, when
              achieved, the hair gains temperature faster than its losing it
              till it reaches the burning point.
            </p>
          </div>
        </div>
      </div>
      <div className="services md:p-16 p-3">
        <div className="wrapper flex flex-wrap gap-5 justify-around">
          <div className="item">
            <img
              loading="lazy"
              src="images/LaserHairRemoval/Efficacy-enabled-by-safety.webp"
              alt=""
            />
            <h2 className="mt-5 mb-2">Efficacy enabled by safety</h2>
            <p>
              High skin protection enabled by the DCD allows the usage of ‘3
              msec’ …the lowest hair removal pulse duration. This fast burning
              of the follicle doesn’t allow it to cool down & therefore it
              enables effective hair removal even for thin hairs.
            </p>
          </div>
          <div className="item">
            <img
              loading="lazy"
              src="images/LaserHairRemoval/Hair-reduction-not-thining.webp"
              alt=""
            />
            <h2 className="mt-5 mb-2">Hair reduction, not thinning</h2>
            <p>
              The fast burning of hair under ‘3 msec’ fully damages the hair
              follicle stem cells. Longer pulse durations in other lasers
              partially damages hair follicle stem cells resulting in regrowth
              of fine hairs that are resistant to lasers. Extra treatmen
            </p>
          </div>
          <div className="item">
            <img
              loading="lazy"
              src="images/LaserHairRemoval/Extra-treatment-speed.webp"
              alt=""
            />
            <h2 className="mt-5 mb-2">t speed</h2>
            <p>
              The DCD spray instantly evaporates & cools the skin. This allows
              the use of high repetition rate resulting in faster treatments
              hence more sessions per day. Other cooling types obligate using a
              lower repetition
            </p>
          </div>
          <div className="item">
            <img
              loading="lazy"
              src="images/LaserHairRemoval/Match-small-areas.webp"
              alt=""
            />
            <h2 className="mt-5 mb-2">Matches small areas</h2>
            <p>
              GentleLaser comes with nine spot sizes from 6-24 mm, these several
              spot size choices facilitate matching the size of different areas
              like the bikini line & beard shaping with ease. rate due to its
              gradual slow cooling rate.
            </p>
          </div>
          <div className="item">
            <img
              loading="lazy"
              src="images/LaserHairRemoval/The-cold-laser.webp"
              alt=""
            />
            <h2 className="mt-5 mb-2">The cold laser</h2>
            <p>
              The DCD cooling enables a comfortable & highly safe treatments
              that has become known by patients as “The Cold Laser”. Imdad
              Company UAE
            </p>
          </div>
        </div>
      </div>
      <div className="news my-7">
        <div className="wrapper flex lg:flex-row justify-between flex-col gap-5">
          <div className="left  sm:flex-row flex-col items-center flex gap-5 flex-1">
            <div className="info flex flex-col gap-4">
              <h3 className="text-center">
                Enjoy our amazing offers in all our branches <br />{" "}
                <span> Laser Hair Removal In dubai</span>
              </h3>
              <button className="m-auto">
                <a href="https://wa.me/971544426622">Make Appointment</a>
              </button>
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
      <Footer />
    </div>
  );
}

export default LaserHairRemoval;
