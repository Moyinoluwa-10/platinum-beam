// components
import Header from "../Components/Header";
import Transform from "../Components/Transform";
import Footer from "../Components/Footer";
import ChoiceItem from "../Components/Home/ChoiceItem";
import choices from "../Components/Home/choices";
import ServiceItem from "../Components/Home/ServiceItem";
import services from "../Components/Home/services";
import Professional from "../Components/Home/Professional";
import Button from "../Components/Button";
import PageChange from "../hooks/PageChange";

// images
import hero from "../assets/images/hero.png";

//svgs
import Faqs from "../Components/Home/Faqs";
import cmi from "../assets/svgs/cmi.svg";
import issa from "../assets/svgs/issa.svg";

const Home = () => {
  return (
    <>
      <PageChange pageTitle="Platinum Beam" />

      <section className="hero min-h-screen flex flex-col overflow-hidden">
        <Header />
        <div className="container p-5 pt-12 pb-20 h-full flex-1 flex flex-col lg:flex-row justify-between items-center gap-10">
          <div>
            <h4 className="text-secondary font-pt-bold mb-3 text-2xl">
              Welcome to Platinum Beam Concept.
            </h4>
            <h1 className="text-4xl md:text-5xl max-w-2xl mb-5 font-pt-bold">
              Transform Spaces, Elevate Lives.
            </h1>
            <p className="text-xl max-w-2xl mb-9 text-gray-600">
              At Platinum Beam Concept, we redefine the essence of cleaning by
              transforming everyday chores into luxury experiences. Our goal is
              to enhance the quality of spaces and lives by tailoring our
              services to meet the unique needs of our clients. Discover a
              cleaning service that cares about its clients' well-being,
              aesthetics, and safety.
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

      <Professional />

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

      <section className="container p-5 pb-20 flex flex-col gap-2 items-center ">
        <p className="text-2xl">Associated With</p>
        <div className="flex gap-7 flex-wrap items-center">
          <img src={issa} alt="issa-logo" className="h-20 md:h-24" />
          <img src={cmi} alt="cmi-logo" className="h-20 md:h-24" />
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Home;
