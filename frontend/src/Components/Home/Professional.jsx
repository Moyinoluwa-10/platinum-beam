// components
import Button from "../Button";

// images
import professional from "../../assets/images/professional.jpg";

// framer-motion
import { motion } from "framer-motion";

const Professional = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      className="container p-5 py-16 flex flex-col lg:flex-row justify-between items-center gap-12"
    >
      <div>
        <img
          src={professional}
          alt="image"
          className="rounded-xl lg:max-h-[420px]"
        />
      </div>
      <div className="lg:max-w-xl">
        <h3 className="text-tertiary text-4xl md:text-5xl mb-4 font-pt-bold">
          Professional Cleaning Services
        </h3>
        <p className="text-xl md:text-2xl mb-10">
          Our expertise goes beyond traditional cleaning to include a broader
          range of professional services that meet the unique needs of our
          clients and the industry at large. We value the significance of
          cleanliness and, therefore, offer luxurious cleaning services. You can
          choose from our cleaning plans tailored to meet your preferences.
        </p>
        <div className="text-2xl">
          <Button linkAddress={"/book"}>Book Now</Button>
        </div>
      </div>
    </motion.section>
  );
};

export default Professional;
