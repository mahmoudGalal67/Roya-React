import React from "react";
import { BiLogoFacebookCircle } from "react-icons/bi";
import { BsInstagram } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";
import { Link } from "react-router-dom";

function ContactInfo() {
  return (
    <div
      className="contact-info md:px-24 px-3 py-4"
      style={{ backgroundColor: "#EEEEEE" }}
    >
      <div className="wrappper flex flex-row  gap-2 justify-around items-center">
        <div className="contact-links flex gap-3">
          <Link to="/blogs">
            <span>Blogs & News |</span>
          </Link>
          <Link to="/branches">
            <span>Contact</span>
          </Link>
        </div>
        <div className="contact_social-links flex gap-2 items-center">
          <span className="contact-links">Follow us on:</span>
          <div className="icons flex gap-1 items-center">
            <a href="https://www.facebook.com/pages/Roya-Medical-Center-Dubai/201591973824012">
              <BiLogoFacebookCircle className="text-lg text-blue-600 border-2 border-blue-600 rounded-full" />
            </a>
            <a href="https://www.instagram.com/royamedicalcenter.ae/">
              <BsInstagram className="text-lg text-rose-500 border-2 border-rose-500 rounded-full" />
            </a>
            <a href="https://www.linkedin.com/company/roya-medical-center/">
              <FaLinkedinIn className="text-lg text-blue-800 border-2 border-blue-800 rounded-full" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactInfo;
