import React from "react";
import ContactInfo from "../../components/ContactInfo";
import OurCentres from "../../components/OurCentres";
import OurDvice from "../../components/OurDvice";
import TopStories from "../../components/TopStories";
import Map from "../../components/Map";
import Footer from "../../components/Footer";
import "./home.css";
import NavBar from "../../components/Nav";
import Info from "../../components/Info";
import Hero from "../../components/Hero";

function Home() {
  return (
    <div className="home overflow-x-hidden">
      <ContactInfo />
      <main className="hero-section">
        <Info />
        <div className="top">
          <NavBar />
        </div>
        <Hero />
      </main>
      <OurCentres />
      <Map />
      <TopStories />
      <OurDvice />
      {/* <BookAppointment /> */}
      {/* <News /> */}
      <Footer />
    </div>
  );
}

export default Home;
