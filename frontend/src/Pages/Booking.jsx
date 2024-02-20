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

// framer-motion
import { motion } from "framer-motion";

const Booking = () => {
  const [isSuccess, setIsSuccess] = useState(false);
  function handleChange() {
    setIsSuccess(true);
  }

  return (
    <>
      <PageChange pageTitle="Booking - Platinum Beam" />
      <Transition />

      <motion.div
        className="slide-in"
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 0 }}
        exit={{ scaleY: 1 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      ></motion.div>
      <motion.div
        className="slide-out"
        initial={{ scaleY: 1 }}
        animate={{ scaleY: 0 }}
        exit={{ scaleY: 0 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      ></motion.div>

      {/* <motion.div
        initial={{ scaleX: 1 }}
        animate={{ scaleX: 0, transition: { duration: 0.5, ease: "circOut" } }}
        exit={{ scaleX: 1, transition: { duration: 0.5, ease: "circIn" } }}
        style={{ originX: isPresent ? 0 : 1 }}
        className="privacy-screen"
      /> */}

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
