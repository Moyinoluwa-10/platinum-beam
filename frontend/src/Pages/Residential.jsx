// react
import PageChange from "../hooks/PageChange";

// components
import Services from "../Components/Services/Services";
import Hero from "../Components/Hero";

// images
import bgImg from "../assets/images/bg-services.png";
import residential1 from "../assets/images/residential-1.png";
import residential2 from "../assets/images/residential-2.png";
import residential3 from "../assets/images/residential-3.png";

const Residential = () => {
  return (
    <>
      <PageChange pageTitle="Residential Cleaning - Platinum Beam" />

      <Hero
        bgImg={bgImg}
        pageTitle={"Residential Cleaning"}
        pageText={
          "Welcome to the new chapter of home living, where every corner radiates comfort and luxury. "
        }
      />

      <section className="container p-5 pt-20 pb-10">
        <h3 className="text-3xl md:text-4xl font-pt-bold text-center mb-20">
          Residential Cleaning
        </h3>
        <div className="flex flex-col lg:flex-row-reverse gap-12 justify-between items-center mb-20">
          <div>
            <img src={residential1} alt="image" className="rounded-xl" />
          </div>
          <p className="lg:max-w-xl text-xl md:text-2xl">
            Welcome to the new chapter of home living, where every corner
            radiates comfort and luxury. Your home is your sanctuary, where life
            unfolds and memories are made. At Platinum Beam Concept, we
            understand this and offer Residential Cleaning services designed
            with the homeowner in mind. Our unique service brings a level of
            care and luxury that is unmatched in the industry.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 justify-between items-center mb-20">
          <div>
            <img src={residential2} alt="image" className="rounded-xl" />
          </div>
          <p className="lg:max-w-xl text-xl md:text-2xl">
            We believe in a cleaning service that reflects the individuality of
            your home. Our team focuses on every detail, ensuring that every
            inch of your space is attended to meticulously. Our eco-friendly
            products leave your home spotless, safe, and harmonious, providing a
            pristine and positively charged environment.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row-reverse gap-12 justify-between items-center">
          <div>
            <img src={residential3} alt="image" className="rounded-xl" />
          </div>
          <p className="lg:max-w-xl text-xl md:text-2xl">
            Choosing Platinum Beam Concept's Residential Cleaning service means
            investing in the beauty of your home, your family's health, and your
            peace of mind. We are committed to providing a luxury cleaning
            experience that exceeds your expectations in every aspect of home
            cleaning.
          </p>
        </div>
      </section>

      <Services></Services>
    </>
  );
};

export default Residential;
