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
        <h2>OUR Locations</h2>
        <p>
          Currently we Have 2 branches , Main branch in Jumeirah 1 and the
          second branch is located in Al Barsha. You can find location easily
          using waze or google map and for more details please WhatsApp to
          0544426622.
        </p>
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
            {window.innerWidth > 500 ? (
              mapNumber === 1 ? (
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
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3609.075737619279!2d55.2699793!3d25.2343739!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f42557e643b5d%3A0xe9078175168cb99a!2sRoya%20Medical%20Center%20(%20Jumeirah%20Branch)!5e0!3m2!1sen!2seg!4v1694688850037!5m2!1sen!2seg"
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
                      src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d115607.12822906347!2d55.0737126!3d25.1112446!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f6bf85403d6bb%3A0x376b68d91f6ddfeb!2sRoya%20Medical%20Center%20Al%20Barsha%20%2C%20Filler%20%2CMorpheus8%2C%20Laser%20Hair%20Removal%2CIV%20Vitamin!5e0!3m2!1sen!2seg!4v1694688946454!5m2!1sen!2seg"
                    ></iframe>
                    <a href="https://connectionsgame.org/">Connections NYT</a>
                  </div>
                </div>
              )
            ) : (
              <img loading="lazy" src="images/home/ma[.webp" alt="" />
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
