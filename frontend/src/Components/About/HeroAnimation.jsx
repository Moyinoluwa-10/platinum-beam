// animation
import { motion } from "framer-motion";

// components
import Header from "../Header";

// images
import bgImg1 from "../../assets/images/bg-about-1.jpg";
import bgImg2 from "../../assets/images/bg-about-2.jpg";
import bgImg3 from "../../assets/images/bg-about-3.jpg";

const HeroAnimation = () => {
  return (
    <>
      <div className="relative h-screen overflow-hidden">
        <div className="absolute top-0 left-0 w-full">
          <Header />
        </div>
        <div className="absolute left-0 top-0 z-[0] bg-gray-200 w-full h-full"></div>
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{
            ease: "easeInOut",
            duration: 1,
          }}
          className="absolute left-0 z-[1] w-full h-full bg-cover bg-repeat bg-center"
          style={{
            backgroundImage: `url(${bgImg3})`,
          }}
        ></motion.div>
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{
            ease: "easeInOut",
            duration: 1,
            delay: 1,
          }}
          className="absolute left-0 z-[2] w-full h-full bg-cover bg-repeat bg-center"
          style={{
            backgroundImage: `url(${bgImg2})`,
          }}
        ></motion.div>
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{
            ease: "easeInOut",
            duration: 1,
            delay: 2,
          }}
          className="absolute left-0 z-[3] w-full h-full bg-cover bg-repeat bg-center "
          style={{
            backgroundImage: `url(${bgImg1})`,
          }}
        ></motion.div>
      </div>
    </>
  );
};

export default HeroAnimation;
