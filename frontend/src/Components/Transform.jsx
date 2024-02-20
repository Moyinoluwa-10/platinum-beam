// components
import Button from "./Button";

// images
import transform from "../assets/images/transform.png";

// framer-motion
import { motion } from "framer-motion";

const Transform = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      className="p-5 pt-5 md:pt-24 pb-24 container flex flex-col lg:flex-row gap-12 justify-between items-center"
    >
      <div>
        <img src={transform} alt="image" className="rounded-xl" />
      </div>
      <div className="lg:max-w-xl">
        <h3 className="text-tertiary text-4xl md:text-5xl mb-4 font-pt-bold lg:max-w-md">
          Let's Transform Your Space
        </h3>
        <p className="text-xl md:text-2xl mb-10">
          Ready to experience the Platinum Beam difference? Contact us today for
          a consultation and let's embark on the journey to elevate your space
          to new heights of cleanliness and luxury.
        </p>
        <div className="text-2xl">
          <Button linkAddress={"/book"}>Book Now</Button>
        </div>
      </div>
    </motion.section>
  );
};

export default Transform;
