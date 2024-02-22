// components
import Hero from "../Components/Hero";
import Footer from "../Components/Footer";
import ContactForm from "../Components/Contact/ContactForm";
import PageChange from "../hooks/PageChange";
import Transition from "../hooks/Transition";

// images
import bgImg from "../assets/images/bg-contact.png";

// svgs
import whatsapp from "../assets/svgs/whatsapp.svg";
import email from "../assets/svgs/email.svg";
import instagram from "../assets/svgs/instagram.svg";
import facebook from "../assets/svgs/facebook.svg";
import linkedin from "../assets/svgs/linkedin.svg";

const Contact = () => {
  return (
    <>
      <PageChange pageTitle="Contact Us - Platinum Beam" />
      <Transition />

      <Hero
        bgImg={bgImg}
        pageTitle={"Contact us"}
        pageText={
          "Get in touch with us if you have any questions, or you just want to chat"
        }
      />

      <section className="container p-5 py-24">
        <h3 className="text-tertiary text-4xl md:text-5xl font-pt-bold text-center mb-12">
          Contact us via
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-items-center gap-10 text-center max-w-7xl mx-auto">
          <div className="flex flex-col place-items-center gap-5 md:gap-8 max-w-xs ">
            <img src={whatsapp} alt="whatsapp-logo" />
            <p className="text-xl md:text-2xl">09131704005</p>
          </div>
          <div className="flex flex-col place-items-center gap-5 md:gap-8 max-w-xs">
            <img src={email} alt="email-logo" />
            <p className="text-xl md:text-2xl">info@platinumbeamconcept.com</p>
          </div>
          <div className="flex flex-col place-items-center gap-5 md:gap-8 max-w-xs">
            <div className="flex items-center gap-3">
              <a
                href="https://www.instagram.com/platinumbeamconcept"
                target="_blank"
                rel="noreferrer"
                className="relative transition-all duration-1000 hover:bottom-1"
              >
                <img src={instagram} alt="instagram-logo" />
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=100094608620510"
                target="_blank"
                rel="noreferrer"
                className="relative transition-all duration-1000 hover:bottom-1"
              >
                <img src={facebook} alt="facebook-logo" />
              </a>
              <a
                href="https://www.linkedin.com/company/platinum-beam-concept-limited/about/"
                target="_blank"
                rel="noreferrer"
                className="relative transition-all duration-1000 hover:bottom-1"
              >
                <img src={linkedin} alt="linkedin-logo" />
              </a>
            </div>
            <p className="text-xl md:text-2xl">Social media links</p>
          </div>
        </div>
      </section>

      <section className="p-5 container">
        <h3 className="text-tertiary text-4xl md:text-5xl mb-20 font-pt-bold text-center">
          Send Us a Message <br /> Get in Touch
        </h3>

        <ContactForm />
      </section>

      <Footer />
    </>
  );
};

export default Contact;
