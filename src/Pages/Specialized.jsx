// components
import Hero from "../Components/Hero";
import Services from "../Components/Services/Services";

// images
import category1 from "../assets/images/category-1.png";
import category2 from "../assets/images/category-2.png";
import category3 from "../assets/images/category-3.png";

// images
import bgImg from "../assets/images/bg-1.png";

const Specialized = () => {
  return (
    <>
      <Hero
        bgImg={bgImg}
        pageTitle={"Specialized Cleaning"}
        pageText={
          "Post-construction, rental revamp and carpet cleaning services"
        }
      />

      <Services>
        <section className="container p-5 py-20">
          <div className="flex justify-center items-center gap-5 mb-10 text-center">
            <div className="bg-black h-[1px] w-full hidden md:block"></div>
            <h3 className="text-2xl font-semibold uppercase md:whitespace-nowrap">
              Explore our categories
            </h3>
            <div className="bg-black h-[1px] w-full hidden md:block"></div>
          </div>

          <div className="flex flex-wrap justify-center gap-10">
            <div className="max-w-450px lg:w-[450px] xl:w-[580px]">
              <img
                src={category1}
                alt="category"
                className="w-full mb-5 rounded-xl"
              />
              <h2 className="text-2xl font-medium uppercase mb-5">
                Post-construction cleaning
              </h2>
              <p className="text-xl">
                This service caters to newly constructed or renovated spaces. It
                involves removing all traces of construction residue, such as
                dust, debris, and paint splatters, and preparing the space for
                occupancy.
              </p>
            </div>

            <div className="max-w-450px lg:w-[450px] xl:w-[580px]">
              <img
                src={category2}
                alt="category"
                className="w-full mb-5 rounded-xl"
              />
              <h2 className="text-2xl font-medium uppercase mb-5">
                Move in / move out
              </h2>
              <p className="text-xl">
                This service is tailored for individuals or businesses
                transitioning to a new space. It is specially designed to ease
                the transition for both incoming and outgoing tenants, as well
                as property owners.
              </p>
            </div>

            <div className="max-w-450px lg:max-w-none lg:w-[450px] xl:w-[580px]">
              <img
                src={category3}
                alt="category"
                className="w-full mb-5 rounded-xl"
              />
              <h2 className="text-2xl font-medium uppercase mb-5">
                Carpet cleaning
              </h2>
              <p className="text-xl">
                This service caters to newly constructed or renovated spaces. It
                involves removing all traces of construction residue, such as
                dust, debris, and paint splatters, and preparing the space for
                occupancy.
              </p>
            </div>
          </div>
        </section>
      </Services>
    </>
  );
};

export default Specialized;
