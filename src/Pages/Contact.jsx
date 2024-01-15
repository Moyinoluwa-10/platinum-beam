// components
import Hero from "../Components/Hero";
import Footer from "../Components/Footer";
import ContactForm from "../Components/Contact/ContactForm";

// images
import bgImg from "../assets/images/bg-1.png";

// svgs
import whatsapp from "../assets/svgs/whatsapp.svg";
import email from "../assets/svgs/email.svg";
import location from "../assets/svgs/location.svg";

const Contact = () => {
  return (
    <>
      <Hero
        bgImg={bgImg}
        pageTitle={"Contact us"}
        pageText={
          "Get in touch with us if you have any questions, or you just want to chat"
        }
      />

      <section className="container p-5 py-24">
        <h3 className="text-secondary text-4xl md:text-5xl font-semibold text-center mb-12">
          Contact us via
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-items-center gap-10 text-center max-w-7xl mx-auto">
          <div className="flex flex-col place-items-center gap-5 md:gap-8 max-w-xs ">
            <img src={whatsapp} alt="whatsapp-logo" />
            <p className="text-xl md:text-2xl">09131704005</p>
          </div>
          <div className="flex flex-col place-items-center gap-5 md:gap-8 max-w-xs">
            <img src={email} alt="email-logo" />
            <p className="text-xl md:text-2xl">infoplatinumbeam@gmail.com</p>
          </div>
          <div className="flex flex-col place-items-center gap-5 md:gap-8 max-w-xs">
            <img src={location} alt="location-logo" />
            <p className="text-xl md:text-2xl">
              Block A2, Plot 12B, Fajuyi Estate, Off Ilawe Road, Ado Ekiti
            </p>
          </div>
        </div>
      </section>

      <section className="p-5 py-10 md:py-16 container">
        <h3 className="text-secondary text-4xl md:text-5xl mb-20 font-semibold text-center">
          Send Us a Message <br /> Get in Touch
        </h3>

        <ContactForm />
      </section>

      <Footer />
    </>
  );
};

export default Contact;
