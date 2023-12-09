// components
import Footer from "../Components/Footer";
import Header from "../Components/Header";

//svgs
import whatsapp from "../assets/svgs/whatsapp.svg";
import email from "../assets/svgs/email.svg";
import location from "../assets/svgs/location.svg";

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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-items-center items-center gap-10 text-center max-w-7xl mx-auto">
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

      <section className="p-5 py-24 container">
        <h3 className="text-secondary text-4xl md:text-6xl mb-20 font-bold text-center">
          Send Us a Message <br /> Get in Touch
        </h3>

        <form className="max-w-5xl mx-auto mb-20">
          <div className="mb-10 md:mb-16 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12">
            <div className="w-full">
              <input
                type="text"
                name="name"
                id="name"
                className="border-[#728ad3] border-2 py-6 pl-5 rounded-2xl w-full focus:border-secondary outline-none"
                placeholder="Your Name"
              />
            </div>
            <div>
              <input
                type="text"
                name="email"
                id="email"
                className="border-[#728ad3] border-2 py-6 pl-5 rounded-2xl w-full focus:border-secondary outline-none"
                placeholder="Email Address"
              />
            </div>
          </div>
          <div className="mb-16">
            <textarea
              name=""
              id=""
              className="border-[#728ad3] border-2 py-6 pl-5 rounded-2xl w-full resize-none focus:border-secondary outline-none"
              cols="30"
              rows="10"
              placeholder="Your Message"
            ></textarea>
          </div>
          <div>
            <button className="uppercase py-5 px-14 md:px-20 bg-primary rounded-2xl text-white block mx-auto">
              Send
            </button>
          </div>
        </form>
      </section>

      <Footer />
    </>
  );
};

export default Contact;
