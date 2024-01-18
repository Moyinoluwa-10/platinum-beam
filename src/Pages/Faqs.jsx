import Footer from "../Components/Footer";
import Hero from "../Components/Hero";
import Transform from "../Components/Transform";
import bgImg from "../assets/images/bg-1.png";

const Faqs = () => {
  return (
    <>
      <Hero bgImg={bgImg} pageTitle={"Frequently Asked Questions"} />
      <section className="container p-5">
        <p className="text-2xl md:text-4xl">
          Below you’ll find answers to the questions we get asked the most about
          booking a service.
        </p>
      </section>
      <Transform />
      <Footer />
    </>
  );
};

export default Faqs;
