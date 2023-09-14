import React from "react";
import Nav from "../../components/Nav";
import Info from "../../components/Info";
import Footer from "../../components/Footer";
import ContactInfo from "../../components/ContactInfo";
import "./InfertilityTreatment.css";

function InfertilityTreatment() {
  return (
    <div className="InfertilityTreatment">
      <ContactInfo />
      <Info />
      <Nav />
      <main>
        <img
          loading="lazy"
          src="/images/InfertilityTreatment/cute-little-shoes-x-ray-photo 1.webp"
          alt=""
          className="main-images"
        />
      </main>
      <div className="info">
        <h2 className="text-center md:p-4 p-2 ">
          Infertility <span>Treatment and IVF</span>
        </h2>
      </div>
      <div className="benefits md:p-8 p-3">
        <div className="main-title md:p-8 p-2">IVF ! How does it work?</div>
        <div className="wrapper p-4">
          <div className="title">
            1- You will receive Gonadotropin Injections to produce more than one
            egg (as many as possible)
          </div>
          <div className="item items-center flex gap-2">
            <p className="my-3">
              {" "}
              Basically every woman produces only one egg each month but using
              gonadotropin injection we can stimulate ovaries to produce more
              eggs . .
            </p>
          </div>
          <div className="title">2-Controlled Stimulation</div>
          <div className="item items-center flex gap-2">
            <p className="my-3">
              You need to do repeated Ultrasound to check how the eggs are
              growing and adjust the dose of injections accprdingly.
            </p>
          </div>
          <div className="title">3-Egg Retrival</div>
          <div className="item items-center flex gap-2">
            <p className="my-3">
              After the Eggs reached to a certain size we will plan to get them
              out using a needle . this will be done under a mild sedation and
              basically you will not feel any pain or discomfort.
            </p>
          </div>
          <div className="title">4-Embryo Transfer</div>
          <div className="item items-center flex gap-2">
            <p className="my-3">
              msalesuada fames ac turpis egestas integer eget aliquet nibh.
              Egestas maecenas pharetra.
            </p>
          </div>
          <div>
            <img
              loading="lazy"
              className="block my-6 mx-auto "
              src="images/InfertilityTreatment/Group 144.webp"
              alt=""
            />
          </div>
          <div className="md:p-4 p-2">
            <div className="wrapper ">
              <div className="title2">GETTING PREGNANT</div>
              <div className="item items-center flex gap-2">
                <p>
                  If you are infertile and wanting to conceive, the first thing
                  you should consider is age. Women who are under 35 years old
                  have the highest chance of pregnancy in their first IVF trial
                  with 50 to 70% success rate as per our statistics. We
                  calculate ‘IVF success rate’ through actual child delivery and
                  not through positive pregnancy tests. On the other hand, if
                  you are over 35 years old, consulting with an infertility
                  specialist is highly recommended.
                </p>
              </div>
              <div className="title2">LABORATORY TESTS</div>
              <div className="item items-center flex gap-2">
                <p>
                  When it comes to laboratory tests, sometimes normal values
                  could mean otherwise – never try to interpret tests by looking
                  at standard normal levels shown on the results. In IVF, both
                  your thyroid-stimulating hormone (TSH) and
                  follicle-stimulating hormone (FSH) should be higher than
                  average to be able to produce more hormones or eggs. In both
                  these cases, normal results can mean abnormal in IVF and can
                  affect the treatment plan – leave it to your fertility
                  endocrinologist to choose the best treatment plan for you.
                </p>
              </div>
              <div className="title2">IVF vs ICSI</div>
              <div className="item items-center flex gap-2">
                <p>
                  Most of the time, we call it IVF but we actually do
                  Intracytoplasmic Sperm Injection (ICSI). What’s the difference
                  between IVF and ICSI? ICSI is a specialized form of IVF which
                  involves the injection of the ‘best’ sperm directly into a
                  mature egg which increases the chances of fertilization most
                  of the time. In IVF, matured eggs are collected and placed in
                  different petri dishes which are then injected with over 5
                  million sperm over each egg and kept inside a special
                  incubator wherein a sperm naturally fertilizes the egg.
                </p>
              </div>
              <div className="title2">GENETIC TESTING</div>
              <div className="item items-center flex gap-2">
                <p>
                  Preimplantation Genetic testing (PGT) is a technique used
                  wherein cells are taken from a fertilized egg to provide more
                  information about the genetic make-up of the rest of the cells
                  in the embryo. We use this technique for family balancing or
                  in cases of age-related risks and certain genetic disorders.
                  We normally don’t do PGT in our labs – what we do is wait for
                  3 to 5 days to choose the best growing embryo before
                  transferring it to the uterus. This method allows us to
                  separate poor quality or abnormal embryos from growing.
                </p>
              </div>
              <div className="title2">IVF SUCCESS </div>
              <div className="item items-center flex gap-2">
                <p>
                  There are different factors to consider to be able to achieve
                  a successful IVF. These depends on factors like: <br /> ●
                  Quality of the egg and ovarian stimulation method used <br />{" "}
                  ● Quality of the sperm (fragmented sperm DNA can integer with
                  the quality of the embryo) <br /> ● The expertise of the
                  Embryologist and the experience and capability to successfully
                  transfer the embryo inside the uterus as difficult transfers
                  almost always end up with IVF failure <br /> ● Embryology lab
                  standards
                  <br /> ● Lifestyle choices and general health condition
                  (obesity and history of pelvic infections can affect IVF
                  success)
                  <br /> ● Normal physical activity and maintaining daily
                  household activities
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="services md:p-8 p-4">
        <h2>
          our <span>services</span>
        </h2>
        <div className="wrapper flex flex-wrap justify-around gap-4">
          <div className="card my-8 flex flex-col justify-between gap-3 ">
            <img
              loading="lazy"
              src="/images/InfertilityTreatment/cards/front-view-couple-expecting-baby 1.webp"
              alt=""
            />
            <h3>Fertility Check Up</h3>
            <p>
              As the first Step, We always check the semen of your husband to
              rule out male factor infertility .Then we will check your ovaries
              , uterine competency and tubal patency by different diagnostic
              modalities .
            </p>
            <a href="https://wa.me/971544426622">Book Now</a>
          </div>
          <div className="card my-8 flex flex-col justify-between gap-3 ">
            <img
              loading="lazy"
              src="/images/InfertilityTreatment/cards/190761764_s 1.webp"
              alt=""
            />
            <h3>HiFoSy</h3>
            <p>
              HSG Hysterosalpingography is very Painful So to check tubal
              patency, We are doing HyFoSy . In this method we inject little bit
              Gel inside uterus and by vaginal ultrasound we will check if the
              tubes are open or not .
            </p>
            <a href="https://wa.me/971544426622">Book Now</a>
          </div>
          <div className="card my-8 flex flex-col justify-between gap-3 ">
            <img
              loading="lazy"
              src="/images/InfertilityTreatment/cards/1280x500_Polycystic Ovarian Syndrome (PCOS) 1.webp"
              alt=""
            />
            <h3>PCOs Treatment</h3>
            <p>
              PCOs treatment Plan basically is just to control the symptoms
              otherwise PCOS itself is not correctable by medical treatment . We
              will tackle the symptoms like Irregular Periods , Abnormal Hair
              Growth or loss , Weight gain , Infertility , Inflammation, Insulin
              resistance , Ovarian cysts,Oligomenorrhea , Amenorrhea , ….
            </p>
            <a href="https://wa.me/971544426622">Book Now</a>
          </div>
          <div className="card my-8 flex flex-col justify-between gap-3 ">
            <img
              loading="lazy"
              src="/images/InfertilityTreatment/cards/Group 149.webp"
              alt=""
            />
            <h3>IUI</h3>
            <p>
              Intrauterine Insemination is indicated when we have poor Sperm
              profile such as low count or low motility . there are some other
              indications also will check if it fits you.
            </p>
            <a href="https://wa.me/971544426622">Book Now</a>
          </div>
          <div className="card my-8 flex flex-col justify-between gap-3 ">
            <img
              loading="lazy"
              src="/images/InfertilityTreatment/cards/ICSI-vs-ivf 1.webp"
              alt=""
            />
            <h3>IVF/ICSI</h3>
            <p>
              Test Tube baby as its called is when we have to make the baby
              outside and transfer it inside uterus . Read in below section to
              know more about multiple steps and preparation methods for this
              treatment .
            </p>
            <a href="https://wa.me/971544426622">Book Now</a>
          </div>
          <div className="card my-8 flex flex-col justify-between gap-3 ">
            <img
              loading="lazy"
              src="/images/InfertilityTreatment/cards/131-ojn1v7zf45scit6lwplnlw01l3dsz7qpfuj21znals 1.webp"
              alt=""
            />
            <h3>Gender Selection</h3>
            <p>
              We can produce couple of embryos by IVF Treatment and choose one
              or two of them to transfer into the uterus . Sometimes if the
              couple already have kids, They may ask to transfer the certain
              gender . This is doable if we add genetic testing to our IVF
              protocol .
            </p>
            <a href="https://wa.me/971544426622">Book Now</a>
          </div>
          <div className="card my-8 flex flex-col justify-between gap-3 ">
            <img
              loading="lazy"
              src="/images/InfertilityTreatment/cards/top-view-hand-holding-magnifying-glass 1.webp"
              alt=""
            />
            <h3>Ovarian Rejuvenatiom PRP/Stem Cell</h3>
            <p>
              Staring from 2016, Due to multiple Patients request, we started
              Ovarian Rejuvenation with PRP only on patient request base .
              because still its not proved if this treatment will improve
              fertility or not ,{" "}
            </p>
            <a href="https://wa.me/971544426622">Book Now</a>
          </div>
          <div className="card my-8 flex flex-col justify-between gap-3 ">
            <img
              loading="lazy"
              src="/images/InfertilityTreatment/cards/478187231-SciencePhotoLibrary-56a514a45f9b58b7d0dac63c 1.webp"
              alt=""
            />
            <h3>Egg Freezing</h3>
            <p>
              As you know women fertility period is really limited . If you want
              to postpone pregnancy for later in life then better to freeze your
              eggs in early 30s .actually it’s very easy and safe method and we
              encourage all ladied to read about it to have enough knowledge
              before planning their pregnancy .
            </p>
            <a href="https://wa.me/971544426622">Book Now</a>
          </div>
          <div className="card my-8 flex flex-col justify-between gap-3 ">
            <img
              loading="lazy"
              src="/images/InfertilityTreatment/cards/carrier-screening-allows-couples-to-consider-pre-pregnancy-reproductive-options-mobile 1.webp"
              alt=""
            />
            <h3>Carrier Screening</h3>
            <p>
              Carrier screening is a type of genetic test that can tell you
              whether you carry a gene for certain  genetic disorders or not. It
              allows you to find out your chances of having a child with a
              genetic disorder before getting pregnant.
            </p>
            <a href="https://wa.me/971544426622">Book Now</a>
          </div>
          <div className="card my-8 flex flex-col justify-between gap-3 ">
            <img
              loading="lazy"
              src="/images/InfertilityTreatment/cards/hyst-scar-min 1.webp"
              alt=""
            />
            <h3>Laparoscopy</h3>
            <p>
              We are  doing most of  gynecologic surgeries by Laparoscopy .In
              this way no need to open and just through small holes we pass the
              instruments. lots of surgeries like ovarian cystectomy, myomectomy
              ,hysterectomy and Endometriosis can be done in this way. We have
              to rule out malignancy before deciding to do Laparoscopy.
            </p>
            <a href="https://wa.me/971544426622">Book Now</a>
          </div>
          <div className="card my-8 flex flex-col justify-between gap-3 ">
            <img
              loading="lazy"
              src="/images/InfertilityTreatment/cards/female-reproductive-system-flat-lay 1.webp"
              alt=""
            />
            <h3>Hysteroscopy</h3>
            <p>
              Sometimes intrauterine cavity is not suitable for pregnancy . We
              can check uterine cavity with small camera and remove intrauterine
              fibroid or polyps if they are interfering with pregnancy.{" "}
            </p>
            <a href="https://wa.me/971544426622">Book Now</a>
          </div>
          <div className="card my-8 flex flex-col justify-between gap-3 ">
            <img
              loading="lazy"
              src="/images/InfertilityTreatment/cards/gynecologist-evaluating-pregnancy-with-patient 1.webp"
              alt=""
            />
            <h3>Recurrent Miscarriage Treatment</h3>
            <p>
              Recurrent miscarriage, defined as the loss of three or more
              consecutive pregnancies, affects 1% of couples trying to conceive.
              It has been estimated that 1–2% of second- trimester pregnancies
              miscarry before 24 weeks of gestation.{" "}
            </p>
            <a href="https://wa.me/971544426622">Book Now</a>
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

export default InfertilityTreatment;
