// components
// import Hero from "../Components/Hero";
import Transform from "../Components/Transform";
import Footer from "../Components/Footer";
import MemberItem from "../Components/About/MemberItem";
import members from "../Components/About/members";
import HeroAnimation from "../Components/About/HeroAnimation";

// images
import about from "../assets/images/about.png";
import about1 from "../assets/images/about-1.jpg";
import about2 from "../assets/images/about-2.jpg";
import about3 from "../assets/images/about-3.jpg";
import about4 from "../assets/images/about-4.jpg";
import about5 from "../assets/images/about-5.jpg";
import about6 from "../assets/images/about-6.png";
import bunmi from "../assets/images/bunmi.png";
// import bgImg from "../assets/images/bg-services.png";

const About = () => {
  return (
    <>
      {/* <Hero bgImg={bgImg} /> */}
      <HeroAnimation />

      <section className="container p-5 pt-16 md:pt-20 md:pb-32">
        <h3 className="text-tertiary text-4xl md:text-5xl mb-6 font-pt-bold text-center">
          Helping you flourish every day.
        </h3>
        <p className="text-xl md:text-2xl lg:text-3xl mb-16 text-center max-w-5xl mx-auto">
          Our journey from a humble start to a leading luxury cleaning service
          provider is marked by an unwavering pursuit of excellence. Our
          commitment to efficiency, eco-friendly practices, and sustainable
          cleaning solutions sets us apart in the cleaning industry.
        </p>
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-3 gap-3 mb-10">
          <img
            src={about1}
            alt="cleaning"
            className=" rounded-ss-[40px] rounded-ee-[40px] md:rounded-ss-[66px] md:rounded-ee-[66px] aspect-[16/12]"
          />
          <img
            src={about2}
            alt="cleaning"
            className="rounded-es-[66px] rounded-ee-[66px] hidden md:block aspect-[16/12]"
          />
          <img
            src={about3}
            alt="cleaning"
            className="rounded-es-[40px] rounded-se-[40px] md:rounded-es-[66px] Md:rounded-se-[66px] aspect-[16/12]"
          />
          <img
            src={about4}
            alt="cleaning"
            className="rounded-es-[40px] rounded-se-[40px] md:rounded-es-[66px] md:rounded-se-[66px] aspect-[16/12]"
          />
          <img
            src={about5}
            alt="cleaning"
            className="rounded-ss-[66px] rounded-se-[66px] hidden md:block aspect-[16/12]"
          />
          <img
            src={about6}
            alt="cleaning"
            className="rounded-ss-[40px] rounded-ee-[40px] md:rounded-ss-[66px] md:rounded-ee-[66px] aspect-[16/12]"
          />
        </div>
      </section>

      <section className="container p-5 py-5 md:pt-10 pb-36">
        <p className="text-xl md:text-2xl lg:text-3xl text-center max-w-5xl mx-auto mb-10">
          We're not just a cleaning service provider, we're educators and
          innovators. Our training and consultancy services aim to empower the
          next generation of cleaning professionals, sharing our knowledge and
          expertise to elevate industry standards. Our team is a blend of
          experienced professionals dedicated to maintaining the highest
          standards, ensuring Platinum Beam Concept remains a leader in the
          cleaning services sector.
        </p>
        <img
          src={about}
          alt="cleaning-image"
          className="w-full max-w-xl mx-auto"
        />
      </section>

      <section className="container p-5 py-5 md:py-0">
        <h3 className="text-tertiary text-4xl md:text-5xl mb-10 md:mb-20 font-pt-bold text-center">
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
              <span className="text-tertiary">Bunmi Obanise</span> founded
              Platinum Beam Concept Limited to offer her valuable contribution
              towards the enhancement and growth of the cleaning industry.
            </p>
          </div>
        </div>
      </section>

      <section className="container p-5 py-5 pb-16 md:pt-24 md:pb-10">
        <h3 className="text-tertiary text-4xl md:text-5xl mb-16 font-pt-bold text-center">
          Other faces to see
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:flex lg:flex-wrap lg:justify-center justify-items-center gap-x-10 gap-y-16 max-w-7xl mx-auto">
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
