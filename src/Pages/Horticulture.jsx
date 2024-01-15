// components
import Services from "../Components/Services/Services";

// images
import horticulture1 from "../assets/images/horticulture-1.png";
import horticulture2 from "../assets/images/horticulture-2.png";
import horticulture3 from "../assets/images/horticulture-3.png";

const Horticulture = () => {
  return (
    <>
      <Services>
        <section className="container max-w-6xl mx-auto p-5 py-20">
          <p className="text-center text-xl md:text-2xl mb-10">
            In this unique offering, we provide garden and landscape maintenance
            services, ensuring that outdoor spaces are as well-groomed and
            aesthetically pleasing as the interiors. This service includes
            garden cleanup, plant care, and landscape beautification, reflecting
            our holistic approach to cleanliness and aesthetics.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 mb-20">
            <img src={horticulture1} alt="horticulture" className="w-full" />
            <img src={horticulture2} alt="horticulture" className="w-full" />
            <img src={horticulture3} alt="horticulture" className="w-full" />
          </div>

          <h3 className="text-2xl font-semibold mb-4 text-center uppercase">
            GOOD THINGS TO KNOW
          </h3>

          <p className="text-center text-xl md:text-2xl">
            Reliable & friendly staff Insured, bonded & criminal record checks
            on all staff Cleaning services are a tax write-off . No contract
            required Commercial clients are invoiced monthly Easy payment
            options. We provide the supplies & equipment.
          </p>
        </section>
      </Services>
    </>
  );
};

export default Horticulture;
