import React from "react";
import { BsWhatsapp } from "react-icons/bs";
import { BsFillTelephoneFill } from "react-icons/bs";

function Calling() {
  return (
    <div className="call-options flex justify-between px-4 items-center z-50 fixed bottom-4 w-full">
      <div className="whatsUpp  cursor-pointer shadow-lg hover:shadow-green-400 w-14 h-14 p-2 rounded-full flex justify-center items-center bg-green-400">
        <a href="https://wa.me/971544426622">
          <BsWhatsapp className="text-2xl text-white" />
        </a>
        <div className="help">
          <a href="https://wa.me/971544426622">Hi! How can i help you ? </a>
        </div>
      </div>
      <div className="phone shadow-lg cursor-pointer  hover:shadow-blue-500 w-14 h-14 p-2 rounded-full flex justify-center items-center  bg-blue-500">
        <a href="tel:971544426622">
          <BsFillTelephoneFill className="text-2xl text-white" />
        </a>
      </div>
    </div>
  );
}

export default Calling;
