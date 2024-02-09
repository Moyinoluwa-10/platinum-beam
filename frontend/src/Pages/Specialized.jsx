// components
import Hero from "../Components/Hero";
import Services from "../Components/Services/Services";
import PageChange from "../hooks/PageChange";

// images
import category1 from "../assets/images/category-1.png";
import category2 from "../assets/images/category-2.png";
import category3 from "../assets/images/category-3.png";

// images
import bgImg from "../assets/images/bg-services.png";

const Specialized = () => {
  return (
    <>
      <PageChange pageTitle="Specialized Cleaning - Platinum Beam" />

      <Hero
        bgImg={bgImg}
        pageTitle={"Specialized Cleaning"}
        pageText={
          "Post-construction, rental revamp and carpet cleaning services"
        }
      />

      <section className="container p-5 pt-20 max-w-6xl mx-auto">
        <p className="text-center text-xl md:text-2xl">
          At Platinum Beam Concept, we offer specialized cleaning services to
          cater to your specific cleaning needs. We understand that different
          cleaning tasks require unique attention and expertise, so we have
          honed our skills in post-construction, carpet, and move-in/out
          cleaning.
        </p>
      </section>

      <Services>
        <section className="container p-5 py-20">
          <div className="flex justify-center items-center gap-5 mb-10 text-center">
            <div className="bg-black h-[1px] w-full hidden md:block"></div>
            <h3 className="text-2xl font-pt-bold uppercase md:whitespace-nowrap">
              Explore our categories
            </h3>
            <div className="bg-black h-[1px] w-full hidden md:block"></div>
          </div>

          <div className="flex flex-wrap justify-center gap-10 gap-y-14">
            <div className="max-w-450px lg:w-[450px] xl:w-[580px]">
              <img
                src={category1}
                alt="category"
                className="w-full mb-5 rounded-xl"
              />
              <h2 className="text-2xl font-pt-bold uppercase mb-2">
                Post-construction cleaning
              </h2>
              <p className="text-xl">
                Our Post-Construction Cleaning service ensures that your newly
                constructed or renovated space is transformed from a
                construction site to a clean and inviting environment. We
                meticulously remove all traces of construction, leaving no
                surface, nook, or cranny dusty, unpolished, or unclean.
              </p>
            </div>

            <div className="max-w-450px lg:w-[450px] xl:w-[580px]">
              <img
                src={category2}
                alt="category"
                className="w-full mb-5 rounded-xl"
              />
              <h2 className="text-2xl font-pt-bold uppercase mb-2">
                Move in / move out
              </h2>
              <p className="text-xl">
                Moving can be stressful, but our Move-In/Out Cleaning service
                ensures that the cleaning part is taken care of. We take care of
                every detail, from deep cleaning kitchens and bathrooms to
                ensuring all living areas are spotless and welcoming.
              </p>
            </div>

            <div className="max-w-450px lg:max-w-none lg:w-[450px] xl:w-[580px]">
              <img
                src={category3}
                alt="category"
                className="w-full mb-5 rounded-xl"
              />
              <h2 className="text-2xl font-pt-bold uppercase mb-2">
                Carpet cleaning
              </h2>
              <p className="text-xl">
                With our Carpet Cleaning service, we go beyond surface cleaning
                to revive your carpets. We use eco-friendly solutions and
                advanced cleaning techniques to clean your carpets deep and
                remove stains, dirt, and allergens. Clean carpets contribute to
                a healthier and more beautiful space.
              </p>
            </div>
          </div>
        </section>
      </Services>
    </>
  );
};

export default Specialized;
