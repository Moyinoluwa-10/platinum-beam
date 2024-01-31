// animation
import { motion } from "framer-motion";

// images
import bgImg1 from "../../assets/images/bg-services.png";
// import bgImg2 from "../../assets/images/bg-contact.png";
// import bgImg3 from "../../assets/images/bg-services.png";
// import bgImg4 from "../../assets/images/bg-services.png";

const HeroAnimation = () => {
  return (
    <>
      <div className="relative h-screen flex items-center justify-center overflow-hidden">
        <motion.div
          initial={{
            width: "10px",
            height: "10px",
          }}
          // animate={{
          //   opacity: 1,
          //   scale: 1,
          // }}
          animate={{
            scale: [0, 400, 400, 1],
            // width: "100%",
            // height: "100%",
            width: [null, null, null, "100%"],
            height: [null, null, null, "100%"],
            // width: ["10%", "80%", "80%", "100%"],
            // height: ["10%", "80%", "80%", "100%"],
            // height: ["10px", "50px", "50px", "100px"],
            borderRadius: ["50%", "50%", "0%", "0%"],
          }}
          transition={{
            // ease: "easeInOut",
            ease: "linear",
            times: [0, 0.5, 0.99, 1],
            duration: 5,
            delay: 0,
          }}
          className="relative overflow-hidden z-[1] bg-red-400 mx-auto"
          style={{ backgroundImage: `url(${bgImg1})` }}
        ></motion.div>
        {/* <motion.div
          initial={{
            opacity: 0,
            scale: 0.5,
            borderRadius: "100%",
            width: "10px",
            height: "10px",
          }}
          animate={{
            opacity: 1,
            scale: 1,
            borderRadius: "0%",
            width: "100%",
            height: "500px",
          }}
          transition={{ ease: "linear", duration: 2, delay: 2 }}
          className="relative overflow-hidden mx-auto bottom-[500px] z-[2]"
        >
          <div
            className="h-[500px] w-full bg-cover bg-green-400"
            style={{ backgroundImage: `url(${bgImg2})` }}
          ></div>
        </motion.div> */}
      </div>
    </>
    // <div
    //   style={{
    //     position: "relative",
    //     width: "100vw",
    //     height: "100vh",
    //     overflow: "hidden",
    //   }}
    // >
    //   <motion.div
    //     style={{
    //       position: "absolute",
    //       top: "50%",
    //       left: "50%",
    //       width: "100px",
    //       height: "100px",
    //       borderRadius: "50%",
    //       backgroundColor: "blue",
    //     }}
    //     initial={{ scale: 0, borderRadius: "50%" }}
    //     animate={{ scale: [0, 1], borderRadius: ["50%", "0%"] }}
    //     transition={{ duration: 2 }}
    //   />
    // </div>
  );
};

export default HeroAnimation;
