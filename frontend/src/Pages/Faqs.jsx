// react
import { useState } from "react";

// components
import Footer from "../Components/Footer";
import Hero from "../Components/Hero";
import Transform from "../Components/Transform";
import faqs from "../Components/Faqs/faqs.json";
import FaqItem from "../Components/Faqs/FaqItem";
import PageChange from "../hooks/PageChange";

// images
import bgImg from "../assets/images/bg-services.png";

const Faqs = () => {
  const [isActive, setIsActive] = useState(null);

  const handleToggle = (id) => {
    setIsActive((active) => (active === id ? null : id));
  };

  return (
    <>
      <PageChange pageTitle="FAQs - Platinum Beam" />

      <Hero bgImg={bgImg} pageTitle={"Frequently Asked Questions"} />
      <section className="container p-5">
        <p className="text-2xl md:text-4xl mb-20">
          Below you’ll find answers to the questions we get asked the most about
          booking a service.
        </p>

        <div className="max-w-4xl mx-auto py-10 px-3 md:px-20 shadow-xl rounded-xl">
          {faqs.map((faq, i) => (
            <FaqItem
              key={i}
              {...faq}
              id={i + 1}
              isActive={isActive}
              onToggle={handleToggle}
            />
          ))}
        </div>
      </section>
      <Transform />
      <Footer />
    </>
  );
};

export default Faqs;
