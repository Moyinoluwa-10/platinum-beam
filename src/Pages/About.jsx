// components
import Header from "../Components/Header";
import Transform from "../Components/Transform";
import Footer from "../Components/Footer";

// images
import cleaning from "../assets/images/cleaning.png";
import bunmi from "../assets/images/bunmi.png";
import olabunmi from "../assets/images/olabunmi.jpeg";
import emmanuel from "../assets/images/emmanuel.jpeg";
import olumide from "../assets/images/olumide.jpeg";

const About = () => {
  return (
    <>
      <section className="hero min-h-screen text-white">
        <Header />
      </section>

      <section className="container p-5 py-5 md:pt-36 pb-36">
        <h3 className="text-secondary text-4xl md:text-6xl mb-6 font-bold text-center">
          Helping you flourish every day.
        </h3>
        <p className="text-xl md:text-2xl mb-16 text-center max-w-5xl mx-auto">
          Our journey from a humble start to a leading luxury cleaning service
          provider is marked by an unwavering pursuit of excellence, our
          commitment to efficiency, eco-friendly practices, and sustainable
          cleaning solutions sets us apart in the cleaning industry.
        </p>
        <img src={cleaning} alt="cleaning-image" className="max-w-xl mx-auto" />
      </section>

      <section className="container p-5 py-5 md:pt-36 pb-36">
        <h3 className="text-secondary text-4xl md:text-6xl mb-6 font-bold text-center">
          Meet the faces behind the brand
        </h3>
        <div className="p-5 py-24 container flex flex-col lg:flex-row justify-between items-center gap-12">
          <div>
            <img src={bunmi} alt="founder-image" className="max-w-[640px]" />
          </div>
          <div className="lg:max-w-xl">
            <p className="text-xl md:text-2xl mb-10">
              <span className="text-[#728ad3]">Bunmi Obanise</span> founded
              Platinum Beam Concept Ltd. with the dream of transforming the
              cleaning industry. With years of experience as a consultant,
              trainer, coach, and speaker in the cleaning business arena, Bunmi
              brought her expertise, innovation, and deep understanding of
              customer needs to Platinum Beam.
            </p>
          </div>
        </div>
      </section>

      <section className="container p-5 py-5 md:pt-36 pb-36">
        <h3 className="text-secondary text-4xl md:text-6xl mb-6 font-bold text-center">
          Other faces to see
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-items-center items-center gap-10 max-w-7xl mx-auto">
          <div className="">
            <img
              src={olabunmi}
              alt="member-image"
              className="w-full aspect-[100/105]"
            />
            <p className="text-xl md:text-2xl mb-4 mt-9">CEO</p>
            <p className="text-2xl md:text-3xl font-bold">Olubunmi Obanise</p>
          </div>
          <div className="">
            <img
              src={emmanuel}
              alt="member-image"
              className="w-full aspect-[100/105]"
            />
            <p className="text-xl md:text-2xl mb-4 mt-9">Admin Manager</p>
            <p className="text-2xl md:text-3xl font-bold">Emmanuel Asotie</p>
          </div>
          <div className="">
            <img
              src={olumide}
              alt="member-image"
              className="w-full aspect-[100/105]"
            />
            <p className="text-xl md:text-2xl mb-4 mt-9">Head of Operations</p>
            <p className="text-2xl md:text-3xl font-bold">Olumide Adesina</p>
          </div>
        </div>
      </section>

      <Transform />
      <Footer />
    </>
  );
};

export default About;
