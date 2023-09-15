import React from "react";

import { BiLogoFacebookCircle } from "react-icons/bi";
import { BsInstagram } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";
function Footer() {
  return (
    <>
      <footer>
        <div className="wrapper flex flex-wrap md:justify-around">
          <ul className="item md:items-start md:text-start flex flex-col gap-3">
            <li>
              <span className="text-xl">Our Branches</span>
            </li>
            <li>
              <a href="/">Roya Medical Center ( Jumeirah Branch)</a>
            </li>
            <li>
              <a href="/branches">Roya Medical Center (Al Barsha Branch)</a>
            </li>
            <li>
              <a href="/offers">OFFERS</a>
            </li>
            <li>
              <span className="text-xl">Our Departments</span>
            </li>
            <li>
              <a href="/morpheus-8-in-dubai">Morpheus 8 in Dubai</a>
            </li>
          </ul>
          <ul className="item md:items-start md:text-start flex flex-col gap-3">
            <li>
              <a href="/">Aesthetic Dermatology</a>
            </li>
            <li>
              <a href="/slimming">Slimming Department</a>
            </li>
            <li>
              <a href="/laser_hair_removal">Laser Hair Removal</a>
            </li>
            <li>
              <a href="/gynecology">Gynecology</a>
            </li>
            <li>
              {" "}
              <a href="/obstetrics">Obstetrics</a>
            </li>
            <li>
              <a href="/infertility-treatment-and-ivf">
                Infertility Treatment and IVF
              </a>
            </li>
          </ul>
          <ul className="item md:items-start md:text-start my-4 md:my-0 flex flex-col gap-3">
            <li>
              <span className="text-xl">Location</span>
            </li>
            <li>
              <span className="location-info">Jumeirah 1 Branch:</span> <br />
              Al Wasl Road, Villa 198b
            </li>
            <li>
              <span className="location-info">Al barsha Branch</span>: <br />{" "}
              Umm Suqaym Road , Behind Creative Minds shop
            </li>
          </ul>
          <div className="item items-center  flex-col gap-16">
            <img
              loading="lazy"
              className="logo"
              src="/images/home/RMC-LOGO-2_013447 1.webp"
              alt=""
            />
            <div className="icons flex justify-center my-5 gap-4">
              <div className="icon p-1 flex justify-center item md:items-start md:text-start text-centers-center rounded-full bg-white">
                <a href="https://www.facebook.com/pages/Roya-Medical-Center-Dubai/201591973824012">
                  <BiLogoFacebookCircle className="text-2xl text-blue-800  rounded-full" />
                </a>
              </div>
              <div className="icon p-1 flex justify-center item md:items-start md:text-start text-centers-center rounded-full bg-white">
                <a href="https://www.instagram.com/royamedicalcenter.ae/">
                  <BsInstagram className="text-2xl text-blue-800  rounded-full" />
                </a>
              </div>
              <div className="icon p-1 flex justify-center item md:items-start md:text-start text-centers-center rounded-full bg-white">
                <a href="https://www.linkedin.com/company/roya-medical-center/">
                  <FaLinkedinIn className="text-2xl text-blue-800  rounded-full" />
                </a>
              </div>
            </div>
            <div className="payments flex justify-center gap-2">
              <img loading="lazy" src="/images/home/_235782456.webp" alt="" />
              <img loading="lazy" src="/images/home/fe.webp" alt="" />
              <img
                loading="lazy"
                src="/images/home/tabby-badge_600x600.webp"
                alt=""
              />
            </div>
          </div>
        </div>
      </footer>

      <a
        className="hover:text-gray-600 block relative w-1/2 mx-auto"
        href="https://www.adsamy.com/"
      >
        <div className="text-center text-md p-3">
          All Right Reserved by Adsamy
        </div>
      </a>
    </>
  );
}

export default Footer;
