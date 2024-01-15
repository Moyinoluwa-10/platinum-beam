import Footer from "../Components/Footer";
import Header from "../Components/Header";
import whatsapp from "../assets/svgs/whatsapp.svg";
import email from "../assets/svgs/email.svg";
import location from "../assets/svgs/location.svg";
import ContactForm from "../Components/Contact/ContactForm";

const Contact = () => {
  return (
    <>
      <section className="hero min-h-screen text-white flex flex-col">
        <Header />
        <div className="p-5 container flex-grow flex place-items-center">
          <p className="text-2xl max-w-2xl mx-auto text-center">
            Contact us <br />
            Get in touch with us if you have any questions, or you just want to
            chat
          </p>
        </div>
      </section>

      <section className="p-5 py-24 container">
        <h3 className="text-secondary text-4xl md:text-6xl mb-20 font-bold text-center">
          Contact us via
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-items-center gap-10 text-center max-w-7xl mx-auto">
          <div className="flex flex-col place-items-center gap-x-5 gap-y-7 md:gap-14 max-w-xs ">
            <img src={whatsapp} alt="whatsapp-logo" />
            <p className="text-xl md:text-2xl">09131704005</p>
          </div>
          <div className="flex flex-col place-items-center gap-5 md:gap-14 max-w-xs">
            <img src={email} alt="email-logo" />
            <p className="text-xl md:text-2xl">infoplatinumbeam@gmail.com</p>
          </div>
          <div className="flex flex-col place-items-center gap-5 md:gap-14 max-w-xs">
            <img src={location} alt="location-logo" />
            <p className="text-xl md:text-2xl">
              Block A2, plot 12B, Fajuyi Estate, Off ilawe Road, Ado Ekiti
            </p>
          </div>
        </div>
      </section>

      <section className="p-5 py-10 md:py-24 container">
        <h3 className="text-secondary text-4xl md:text-6xl mb-20 font-bold text-center">
          Send Us a Message <br /> Get in Touch
        </h3>

        <ContactForm />
      </section>

      <Footer />
    </>
  );
};

export default Contact;
