// components
import Hero from "../Components/Hero";
import Transform from "../Components/Transform";
import Footer from "../Components/Footer";
import MemberItem from "../Components/About/MemberItem";
import members from "../Components/About/members";

// images
import cleaning from "../assets/images/cleaning.png";
import about from "../assets/images/about.png";
import bunmi from "../assets/images/bunmi.png";
import bgImg from "../assets/images/bg-4.png";

const About = () => {
  return (
    <>
      <Hero bgImg={bgImg} />

      <section className="container p-5 py-5 md:pt-28 pb-36">
        <h3 className="text-secondary text-4xl md:text-5xl mb-6 font-semibold text-center">
          Helping you flourish every day.
        </h3>
        <p className="text-xl md:text-2xl mb-16 text-center max-w-5xl mx-auto">
          Our journey from a humble start to a leading luxury cleaning service
          provider is marked by an unwavering pursuit of excellence. Our
          commitment to efficiency, eco-friendly practices, and sustainable
          cleaning solutions sets us apart in the cleaning industry.
        </p>
        <img
          src={cleaning}
          alt="cleaning-image"
          className="w-full max-w-xl mx-auto rounded-xl"
        />
      </section>

      <section className="container p-5 py-5 md:pt-28 pb-36">
        <img
          src={about}
          alt="cleaning-image"
          className="w-full max-w-xl mx-auto"
        />
        <p className="text-xl md:text-2xl text-center max-w-5xl mx-auto mt-10">
          We're not just a cleaning service provider, we're educators and
          innovators. Our training and consultancy services aim to empower the
          next generation of cleaning professionals, sharing our knowledge and
          expertise to elevate industry standards. Our team is a blend of
          experienced professionals dedicated to maintaining the highest
          standards, ensuring Platinum Beam Concept remains a leader in the
          cleaning services sector.
        </p>
      </section>

      <section className="container p-5 py-5 md:py-0">
        <h3 className="text-secondary text-4xl md:text-5xl mb-10 md:mb-16 font-semibold text-center">
          Meet the faces behind the brand
        </h3>
        <div className="flex flex-col lg:flex-row justify-between items-center gap-12">
          <div>
            <img
              src={bunmi}
              alt="founder-image"
              className="w-full max-w-[450px] xl:max-w-[640px] rounded-xl"
            />
          </div>
          <div className="lg:max-w-xl">
            <p className="text-xl md:text-2xl mb-10">
              <span className="text-[#728ad3]">Bunmi Obanise</span> founded
              Platinum Beam Concept Limited to offer her valuable contribution
              towards the enhancement and growth of the cleaning industry.
            </p>
          </div>
        </div>
      </section>

      <section className="container p-5 py-5 pb-16 md:pt-20 md:pb-10">
        <h3 className="text-secondary text-4xl md:text-5xl mb-10 font-semibold text-center">
          Other faces to see
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-items-center gap-x-10 gap-y-16 max-w-7xl mx-auto">
          {members.map((member, i) => {
            return <MemberItem key={i} {...member} />;
          })}
        </div>
      </section>

      <Transform />
      <Footer />
    </>
  );
};

export default About;
