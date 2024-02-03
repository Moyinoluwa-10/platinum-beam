// components
import Header from "../Components/Header";
import Transform from "../Components/Transform";
import Footer from "../Components/Footer";
import ChoiceItem from "../Components/Home/ChoiceItem";
import choices from "../Components/Home/choices";
import ServiceItem from "../Components/Home/ServiceItem";
import services from "../Components/Home/services";
import Flex from "../Components/Home/Flex";
import Button from "../Components/Button";
import PageChange from "../hooks/PageChange";

// images
import professional from "../assets/images/professional.jpg";
import hero from "../assets/images/hero.png";

//svgs
import cmi from "../assets/svgs/cmi.svg";
import issa from "../assets/svgs/issa.svg";
import Faqs from "../Components/Home/Faqs";

const Home = () => {
  return (
    <>
      <PageChange pageTitle="Platinum Beam" />

      <section className="hero min-h-screen flex flex-col overflow-hidden">
        <Header />
        <div className="container p-5 pt-12 pb-20 h-full flex-1 flex flex-col lg:flex-row justify-between items-center gap-10">
          <div>
            <h4 className="text-secondary font-pt-bold mb-3 text-2xl">
              Cleaning Excellence, Beyond Compare!
            </h4>
            <h1 className="text-4xl md:text-5xl max-w-2xl mb-5 font-pt-bold">
              Step into a World of Immaculate Luxury with Platinum Beam Concept
              Ltd.
            </h1>
            <p className="text-xl max-w-2xl mb-9 text-gray-600">
              It's not about routines; it's about transforming your space into a
              haven of pristine beauty. Discover a cleaning service that cares
              about the details as much as you do.
            </p>
            <div className="text-2xl">
              <Button linkAddress={"/book"}>Book Now</Button>
            </div>
          </div>

          <div>
            <img src={hero} alt="hero-image" className="rounded-md w-full" />
          </div>
        </div>
      </section>

      <section className="container p-5 pt-20 md:pt-5 md:pb-10">
        <p className="text-center text-tertiary text-3xl mb-8">Trusted by</p>
        <div className="flex max-w-4xl mx-auto justify-evenly gap-7 flex-wrap items-center">
          <img src={issa} alt="issa-logo" className="h-20 md:h-28" />
          <img src={cmi} alt="cmi-logo" className="h-20 md:h-28" />
        </div>
      </section>

      <Flex
        img={professional}
        name={"Professional Cleaning Services"}
        description={
          "Get in touch with us today to learn how our team can help you clean and de-clutter. Choose from any of our three cleaning plans designed to cater to your lifestyle."
        }
        linkText={"Book now"}
        linkAddress={"/book"}
      />

      <section className="container p-5 py-5 md:pt-10 md:pb-20">
        <h3 className="text-tertiary text-4xl md:text-5xl mb-6 font-pt-bold text-center">
          Our Services
        </h3>
        <p className="text-xl md:text-2xl mb-16 text-center max-w-5xl mx-auto">
          Explore our diverse range of services designed to cater to your
          specific needs. Whether you're a corporate office, an industrial
          giant, or a cozy residence, our skilled team ensures each space is
          treated with the utmost care and attention to detail.
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 lg:gap-y-16 justify-between">
          {services.map((service, i) => {
            return <ServiceItem key={i} {...service} />;
          })}
        </div>
      </section>

      <section className="container p-5 py-5 md:pt-10 pb-10">
        <h3 className="text-tertiary text-4xl md:text-5xl mb-5 font-pt-bold text-center">
          Why Choose Us
        </h3>
        <p className="text-xl md:text-2xl mb-10 text-center max-w-5xl mx-auto">
          Setting the Standard for Excellence
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 md:gap-y-20 justify-evenly content-evenly justify-items-end">
          {choices.map((choice, i) => {
            return <ChoiceItem key={i} {...choice} />;
          })}
        </div>
      </section>

      <Faqs />

      <Transform />

      <Footer />
    </>
  );
};

export default Home;
