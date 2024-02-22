// react
import { useState } from "react";

// components
import BookingForm from "../Components/Booking/BookingForm";
import BookingSuccess from "../Components/Booking/BookingSuccess";
import Footer from "../Components/Footer";
import Hero from "../Components/Hero";
import PageChange from "../hooks/PageChange";
import Transition from "../hooks/Transition";

// images
import bgImg from "../assets/images/bg-book.jpg";

const Booking = () => {
  const [isSuccess, setIsSuccess] = useState(false);
  function handleChange() {
    setIsSuccess(true);
  }

  return (
    <>
      <PageChange pageTitle="Booking - Platinum Beam" />
      <Transition />

      <Hero bgImg={bgImg}>
        <div className="max-w-2xl bg-[#FFFFFFE5] text-black px-8 md:px-20 p-5 mx-auto">
          {isSuccess ? (
            <p className="text-2xl">Form submitted successfully</p>
          ) : (
            <>
              <p className="text-2xl">
                Simply click on the Book Now button and follow the lead to get a
                quote, schedule in your cleaning visit and enjoy your clean
                home.
              </p>
            </>
          )}
        </div>
      </Hero>
      <section className="container p-5 py-20">
        {isSuccess ? (
          <BookingSuccess />
        ) : (
          <BookingForm onSuccess={handleChange} />
        )}
      </section>
      <Footer />
    </>
  );
};

export default Booking;
