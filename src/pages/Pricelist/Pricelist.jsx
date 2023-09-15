import React from "react";
import Nav from "../../components/Nav";
import Info from "../../components/Info";
import Footer from "../../components/Footer";
import ContactInfo from "../../components/ContactInfo";
import "./Pricelist.css";

import { PriceList } from "../../Data/PriceList";

function PriceLIst() {
  return (
    <div className="PriceList">
      <ContactInfo />
      <Info />
      <Nav />
      <main>
        <img
          loading="lazy"
          src="/images/pricelist/pexels-andrea-piacquadio-3775118.webp"
          alt=""
          className="main-images max-h-80 object-cover"
        />
      </main>
      <div className="info">
        <h2 className="text-center md:p-4 p-2 ">
          PRICE<span>LIST</span>
        </h2>
      </div>
      <div className="price-list-groups md:p-8 md:pt-0 pb-3">
        <div className="main-title md:p-4 p-2 mb-5">
          Aesthetic Department Price List
        </div>
        <div className="wrapper flex justify-around flex-wrap">
          {PriceList.Aesthetic.map((card, index) => (
            <div className="card flex flex-col gap-4" key={index}>
              <img
                src={`https://royamedicalcenter.com/images/Pricelist/Aesthetic/${card.img}.webp`}
                alt=""
                loading="lazy"
              />
              <div className="flex justify-between">
                <div>{card.title}</div>
                <span>{card.price}</span>
              </div>
              <p>{card.desc}</p>
            </div>
          ))}
        </div>
        <div className="main-title md:p-4 p-2 my-5">
          Slimming Department Price List
        </div>
        <div className="wrapper flex justify-around flex-wrap">
          {PriceList.Slimming.map((card, index) => (
            <div className="card flex flex-col gap-4" key={index}>
              <img
                src={`https://royamedicalcenter.com/images/Pricelist/Slimming/${card.img}.webp`}
                alt=""
                loading="lazy"
              />
              <div className="flex justify-between">
                <div>{card.title}</div>
                <span>{card.price}</span>
              </div>
              <p>{card.desc}</p>
            </div>
          ))}
        </div>
        <div className="addInfo flex justify-between md:flex-row flex-col gap-3 mt-5 mb-16 items-center">
          <div className="text-center">
            X3 Months Slimming Package & EMSCULPT & EMTONE & Fat Melting
            Injections{" "}
          </div>
          <span>12000 AED</span>
        </div>
        <div className="main-title md:p-4 p-2 my-5">
          Laser Hair Removal Department Price List
        </div>
        <div className="wrapper flex justify-around flex-wrap">
          {PriceList.LaserHairRemoval.map((card, index) => (
            <div className="card flex flex-col gap-4" key={index}>
              <img
                src={`https://royamedicalcenter.com/images/Pricelist/LaserHairRemoval/${card.img}.webp`}
                alt=""
                loading="lazy"
              />
              <div className="flex justify-between">
                <div>{card.title}</div>
                <span>{card.price}</span>
              </div>
              <p>{card.desc}</p>
            </div>
          ))}
        </div>
        <div className="main-title md:p-4 p-2 my-5">
          Plastic Surgery Department Price List
        </div>
        <div className="wrapper flex justify-around flex-wrap">
          {PriceList.PlasticSurgeryDepartment.map((card, index) => (
            <div className="card flex flex-col gap-4" key={index}>
              <img
                src={`https://royamedicalcenter.com/images/Pricelist/PlasticSurgeryDepartment/${card.img}.webp`}
                alt=""
                loading="lazy"
              />
              <div className="flex justify-between">
                <div>{card.title}</div>
                <span>{card.price}</span>
              </div>
              <p>{card.desc}</p>
            </div>
          ))}
        </div>
        <div className="main-title md:p-4 p-2 my-5">
          OBGYN Department Price List
        </div>
        <div className="wrapper flex justify-around flex-wrap">
          {PriceList.OBGYNDepartment.map((card, index) => (
            <div className="card flex flex-col gap-4" key={index}>
              <img
                src={`https://royamedicalcenter.com/images/Pricelist/OBGYNDepartment/${card.img}.webp`}
                alt=""
                loading="lazy"
              />
              <div className="flex justify-between">
                <div>{card.title}</div>
                <span>{card.price}</span>
              </div>
              <p>{card.desc}</p>
            </div>
          ))}
        </div>
        <div className="main-title md:p-4 p-2 my-5">
          Infertility Treatment & IVF Department Price List
        </div>
        <div className="wrapper flex justify-around flex-wrap">
          {PriceList.InfertilityTreatment.map((card, index) => (
            <div className="card flex flex-col gap-4" key={index}>
              <img
                src={`https://royamedicalcenter.com/images/Pricelist/InfertilityTreatment&IVF/${card.img}.webp`}
                alt=""
                loading="lazy"
              />
              <div className="flex justify-between">
                <div>{card.title}</div>
                <span>{card.price}</span>
              </div>
              <p>{card.desc}</p>
            </div>
          ))}
        </div>
        <div className="main-title md:p-4 p-2 my-5">HairTransplant</div>
        <div className="wrapper flex justify-around flex-wrap">
          {PriceList.HairTransplant.map((card, index) => (
            <div className="card flex flex-col gap-4" key={index}>
              <img
                src={`https://royamedicalcenter.com/images/Pricelist/HairTransplant/${card.img}.webp`}
                alt=""
                loading="lazy"
              />
              <div className="flex justify-between">
                <div>{card.title}</div>
                <span>{card.price}</span>
              </div>
              <p>{card.desc}</p>
            </div>
          ))}
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

export default PriceLIst;
