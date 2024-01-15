// components
import Header from "../Components/Header";
import Transform from "../Components/Transform";
import Footer from "../Components/Footer";
import { Link } from "react-router-dom";
import ChoiceItem from "../Components/Home/ChoiceItem";
import choices from "../Components/Home/choices";
import ServiceItem from "../Components/Home/ServiceItem";
import services from "../Components/Home/services";
import Flex from "../Components/Home/Flex";

// images
import professional from "../assets/images/professional.png";
import faq from "../assets/images/faq.png";

//svgs
import chipper from "../assets/svgs/chipper.svg";
import dominos from "../assets/svgs/dominos.svg";
import mtn from "../assets/svgs/mtn.svg";
import piggyvest from "../assets/svgs/piggyvest.svg";
import ellipse1 from "../assets/svgs/ellipse-1.svg";
import ellipse3 from "../assets/svgs/ellipse-3.svg";

const Home = () => {
  return (
    <>
      <section className="hero min-h-screen text-white flex flex-col overflow-hidden">
        <Header />
        <div className="container p-5 pt-12 pb-20 h-full flex-1 flex flex-col justify-end relative">
          <img
            src={ellipse1}
            alt=""
            className="w-[650px] absolute -left-10 sm:-left-20 md:-left-60 -bottom-48 z-0 rotate-45"
          />
          <img
            src={ellipse1}
            alt=""
            className="w-[650px] absolute -left-10 sm:-left-20 md:-left-60 bottom-10 z-0"
          />
          <img
            src={ellipse3}
            alt=""
            className="w-[650px] absolute left-10 bottom-0 z-0"
          />
          <h1 className="text-4xl md:text-5xl max-w-2xl mb-5 relative z-[1]">
            Step into a World of Immaculate Luxury with Platinum Beam Concept
            Ltd.
          </h1>
          <p className="text-xl md:text-2xl max-w-2xl mb-9 relative z-[1]">
            It's not about routines; it's about transforming your space into a
            haven of pristine beauty. Discover a cleaning service that cares
            about the details as much as you do.
          </p>
          <div>
            <Link
              to={"/book"}
              className="uppercase py-3 px-12 md:px-7 md:py-4 bg-primary rounded-2xl text-white inline-block md:text-2xl relative z-[1]"
            >
              Book Now
            </Link>
          </div>
        </div>
      </section>

      <section className="container p-5 pt-20 md:pb-20">
        <p className="text-center text-secondary text-3xl mb-8">Trusted by</p>
        <div className="flex max-w-4xl mx-auto justify-evenly gap-7 flex-wrap items-center">
          <img src={mtn} alt="mtn-logo" className="h-6 md:h-10" />
          <img src={piggyvest} alt="piggyvest-logo" className="h-6 md:h-10" />
          <img src={chipper} alt="chipper-logo" className="h-6 md:h-10" />
          <img src={dominos} alt="dominos-logo" className="h-6 md:h-10" />
        </div>
      </section>

      <Flex
        img={professional}
        name={"Professional Cleaning Services"}
        description={
          "Get in touch with us today to learn how our team can help you clean and de-clutter. Choose from any of our three cleaning plans designed to cater to your lifestyle."
        }
        linkText={"Book now"}
        linkAdd={"/book"}
      />

      <section className="container p-5 py-5 md:pt-36 pb-36">
        <h3 className="text-secondary text-4xl md:text-6xl mb-6 font-bold text-center">
          Our Services
        </h3>
        <p className="text-xl md:text-2xl mb-16 text-center max-w-5xl mx-auto">
          Explore our diverse range of services designed to cater to your
          specific needs. Whether you're a corporate office, an industrial
          giant, or a cozy residence, our skilled team ensures each space is
          treated with the utmost care and attention to detail.
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-y-16 justify-between">
          {services.map((service, i) => {
            return <ServiceItem key={i} {...service} />;
          })}
        </div>
      </section>

      <section className="container p-5 py-5 md:pt-10 pb-10">
        <h3 className="text-secondary text-4xl md:text-5xl mb-5 font-semibold text-center">
          Why Choose Us
        </h3>
        <p className="text-xl md:text-2xl mb-10 text-center max-w-5xl mx-auto">
          Setting the Standard for Excellence
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-y-20 justify-evenly content-evenly items-center justify-items-end">
          {choices.map((choice, i) => {
            return <ChoiceItem key={i} {...choice} />;
          })}
        </div>
      </section>

      <Flex
        img={faq}
        name={"Frequently Asked Questions"}
        description={
          "Go through our most asked questions and clear all doubt in your mind about anything that keeps bothering you."
        }
        linkText={"Read more"}
        linkAdd={"/faqs"}
      />

      <Transform />

      <Footer />
    </>
  );
};

export default Home;
