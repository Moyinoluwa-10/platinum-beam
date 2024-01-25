// react
import { useState } from "react";

// components
import Button from "../Button";
import FaqItem from "../Faqs/FaqItem";
import faqs from "./faqs.json";

// images
import faq from "../../assets/images/faq.png";

const Faqs = () => {
  const [isActive, setIsActive] = useState(null);

  const handleToggle = (id) => {
    setIsActive((active) => (active === id ? null : id));
  };

  return (
    <section className="container p-5 py-16">
      <div className="flex flex-col lg:flex-row justify-between items-center gap-12">
        <div>
          <img src={faq} alt="image" className="rounded-xl" />
        </div>
        <div className="lg:max-w-xl">
          <h3 className="text-tertiary text-4xl md:text-5xl mb-4 font-pt-bold lg:max-w-lg">
            Frequently Asked Questions
          </h3>

          <div>
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
        </div>
      </div>

      <div>
        <p className="text-2xl max-w-[876px] text-center mx-auto mt-12 mb-7">
          Go through our most asked questions and clear all doubt in your mind
          about anything that keeps bothering you.
        </p>
        <div className="flex items-center justify-center text-2xl">
          <Button linkAddress={"/faqs"}>Read More</Button>
        </div>
      </div>
    </section>
  );
};

export default Faqs;
