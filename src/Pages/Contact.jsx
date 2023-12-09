import Footer from "../Components/Footer";
import Header from "../Components/Header";

const Contact = () => {
  return (
    <div className="font-lato">
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

      <Footer />
    </div>
  );
};

export default Contact;
