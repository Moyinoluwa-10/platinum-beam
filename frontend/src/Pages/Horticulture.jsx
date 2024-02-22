// components
import Hero from "../Components/Hero";
import Services from "../Components/Services/Services";
import PageChange from "../hooks/PageChange";
import Transition from "../hooks/Transition";

// images
import horticulture1 from "../assets/images/horticulture-1.png";
import horticulture2 from "../assets/images/horticulture-2.png";
import horticulture3 from "../assets/images/horticulture-3.png";
import bgImg from "../assets/images/bg-horticulture.jpg";

// framer-motion
import { motion } from "framer-motion";

const Horticulture = () => {
  return (
    <>
      <PageChange pageTitle="Horticulture & Landscape - Platinum Beam" />
      <Transition />

      <Hero
        bgImg={bgImg}
        pageTitle={"Horticulture & Landscape"}
        pageText={"Plant care and landscape beautification"}
      />

      <Services>
        <section className="container p-5 py-20 max-w-6xl mx-auto ">
          <motion.p
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="text-center text-xl md:text-2xl mb-16"
          >
            Platinum Beam Concept is a company passionate about transforming
            indoor and outdoor spaces into luxurious and beautiful areas. We
            offer Horticulture and Landscape services that are carefully crafted
            to enhance the natural beauty of your outdoor spaces while promoting
            environmental sustainability. Our team believes every garden, yard,
            and outdoor area is a canvas waiting to be transformed into a
            masterpiece of nature's beauty, perfectly blending with human
            creativity.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 justify-center mb-20"
          >
            <img
              src={horticulture1}
              alt="horticulture"
              className="w-full max-w-lg rounded-xl"
            />
            <img
              src={horticulture2}
              alt="horticulture"
              className="w-full max-w-lg rounded-xl"
            />
            <img
              src={horticulture3}
              alt="horticulture"
              className="w-full max-w-lg rounded-xl"
            />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="text-center text-xl md:text-2xl"
          >
            When you choose Platinum Beam Concept for your horticulture and
            landscape needs, you partner with experts who are just as passionate
            about the beauty and health of your outdoor spaces. Our team is
            committed to quality, detail, and sustainability, which ensures that
            your gardens and landscapes are visually stunning, ecologically
            sound, and easy to maintain. Let us help you transform your outdoor
            areas into beautiful, functional, and sustainable extensions of your
            living space.
          </motion.p>
        </section>
      </Services>
    </>
  );
};

export default Horticulture;
