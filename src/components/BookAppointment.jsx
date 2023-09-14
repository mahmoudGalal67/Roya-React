import React from "react";

function BookAppointment() {
  return (
    <section id="booking-appointement" className="booking-appointement">
      <div className="wrapper flex md:flex-row flex-col ">
        <div className="left flex-1">
          <img
            className="w-full "
            loading="lazy"
            src="/images/home/female-doctor-her-patient-shaking-hands-consultation 1.webp"
            alt=""
          />
        </div>
        <div className="right flex-1 flex justify-center items-center">
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
  );
}

export default BookAppointment;
