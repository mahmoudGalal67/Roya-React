import React, { useState } from "react";
import Nav from "../../components/Nav";
import Info from "../../components/Info";
import Footer from "../../components/Footer";
import ContactInfo from "../../components/ContactInfo";

function Branches() {
  const [mapNumber, setmapNumber] = useState(1);

  const setMap = (number) => {
    setmapNumber(number);
  };

  return (
    <div className="branches">
      <ContactInfo />
      <Info />
      <Nav />
      <main>
        <img
          loading="lazy"
          src="/images/home/WhatsApp Image 2023-09-11 at 14.56.53.webp"
          className="main-images max-h-80 object-cover"
          alt=""
        />
      </main>
      <div className="maps">
        <div className="wrapper flex gap-8 md:flex-row flex-col items-center md:p-12 p-4">
          <div className="left flex-1">
            <div
              className={mapNumber === 1 ? "map-card active" : "map-card"}
              onClick={() => setMap(1)}
            >
              <img loading="lazy" src="images/home/jumeira-2.webp" alt="" />
              <div className="info">
                <span>Roya Medical Center ( Jumeirah Branch)</span>
                <div className="rate">
                  <img loading="lazy" src="images/home/Group.webp" alt="" />
                  <span>4.8</span>
                </div>
                <span>Open 9 AM–8 PM</span>
              </div>
            </div>
            <div
              className={mapNumber === 2 ? "map-card active" : "map-card"}
              onClick={() => setMap(2)}
            >
              <img
                loading="lazy"
                src="images/home/Albarsha-behind-creative-minds-shop-2.webp"
                alt=""
              />
              <div className="info">
                <span>
                  Roya Medical Center ( Al Barsha 2 , Street 1 - villa 1 Umm
                  suqaym Road )
                </span>
                <div className="rate">
                  <img loading="lazy" src="images/home/Group.webp" alt="" />
                  <span>4.8</span>
                </div>
                <span>Open 11 AM–7 PM</span>
              </div>
            </div>
          </div>
          <div className="right flex-1">
            {mapNumber === 1 ? (
              <div
                className="mapouter"
                style={{
                  position: "relative",
                  textAlign: "right",
                  width: "100%",
                  height: "400px",
                }}
              >
                <div
                  className="gmap_canvas"
                  style={{
                    overflow: "hidden",
                    background: "none",
                    width: "100%",
                    height: "400px",
                  }}
                >
                  <iframe
                    title="1"
                    className="gmap_iframe"
                    style={{ height: "400px " }}
                    width="100%"
                    frameBorder="0"
                    scrolling="no"
                    marginHeight="0"
                    marginWidth="0"
                    src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=Roya Medical Center ( Jumeirah Branch)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                  ></iframe>
                  <a href="https://connectionsgame.org/">Connections NYT</a>
                </div>
              </div>
            ) : (
              <div
                className="mapouter"
                style={{
                  position: "relative",
                  textAlign: "right",
                  width: "100%",
                  height: "400px",
                }}
              >
                <div
                  className="gmap_canvas"
                  style={{
                    overflow: "hidden",
                    background: "none!important",
                    width: "100%",
                    height: "400px",
                  }}
                >
                  <iframe
                    title="2"
                    style={{ height: "400px " }}
                    className="gmap_iframe"
                    width="100%"
                    frameBorder="0"
                    scrolling="no"
                    marginHeight="0"
                    marginWidth="0"
                    src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=Roya Medical Center ( Al Barsha 2 , Street 1 - villa 1 Umm suqaym Road )&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                  ></iframe>
                  <a href="https://connectionsgame.org/">Connections NYT</a>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      <section className="booking-appointement my-5 ">
        <div className="wrapper flex md:flex-row flex-col md:p-5 p-2">
          <div className="right flex-1 flex p-5 justify-center items-center rounded-xl">
            <div className="md:p-4 p-1">
              <h3>
                Book <span>Appoinment</span>
              </h3>
              <p>
                To reach out to our Roya Medical Team, please fill in the below
                form. Our team members will revert back to you shortly.
              </p>
              <form action="" className="flex flex-col gap-4">
                <input type="text" placeholder="Full name" />
                <input type="text" placeholder="Email Id" />
                <input type="text" placeholder="Select Department" />
                <input type="text" placeholder="Phone Number" />
                <textarea
                  id=""
                  cols="15"
                  rows="3"
                  placeholder="Your Message"
                ></textarea>
                <button>BOOK NOW</button>
              </form>
            </div>
          </div>
        </div>
      </section>
      <div class="sk-ww-google-reviews" data-embed-id="185044"></div>
      <Footer />
    </div>
  );
}

export default Branches;
