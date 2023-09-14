import React, { useState } from "react";

function Map() {
  const [mapNumber, setmapNumber] = useState(1);

  const setMap = (number) => {
    setmapNumber(number);
  };
  return (
    <div className="maps">
      <h2>OUR Locations</h2>
      <p>
        Currently we Have 2 branches , Main branch in Jumeirah 1 and the second
        branch is located in Al Barsha. You can find location easily using waze
        or google map and for more details please WhatsApp to 0544426622.
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
            )
          ) : (
            <img loading="lazy" src="images/home/ma[.webp" alt="" />
          )}
        </div>
      </div>
    </div>
  );
}

export default Map;
