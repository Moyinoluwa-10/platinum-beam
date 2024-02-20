// components
import Hero from "../Components/Hero";
import Services from "../Components/Services/Services";
import PageChange from "../hooks/PageChange";
import Transition from "../hooks/Transition";

// images
import bgImg from "../assets/images/bg-services.png";
import commercial1 from "../assets/images/commercial-1.png";
import commercial2 from "../assets/images/commercial-2.png";

const Commercial = () => {
  return (
    <>
      <PageChange pageTitle="Commercial Cleaning - Platinum Beam" />
      <Transition />

      <Hero
        bgImg={bgImg}
        pageTitle={"Commercial Cleaning"}
        pageText={
          "Transform Your Workspace with Our Premier Commercial Cleaning Service"
        }
      />

      <Services>
        <section className="container p-5 py-20 max-w-6xl mx-auto">
          <p className="text-center text-xl md:text-2xl">
            Welcome to the next level of workspace enhancement. At Platinum Beam
            Concept, we're not just a cleaning company. We aim to elevate your
            business environment to the pinnacle of professionalism and
            operational excellence. Our Commercial Cleaning service is
            meticulously designed for businesses that aspire to look their best
            and be their best.
          </p>
        </section>

        <hr className="max-w-6xl mx-auto border-1" />

        <section className="container p-5 pt-20 pb-10">
          <div className="flex flex-col lg:flex-row-reverse gap-12 justify-between items-center mb-20">
            <div>
              <img src={commercial1} alt="image" className="rounded-xl" />
            </div>
            <p className="lg:max-w-xl text-xl md:text-2xl">
              We understand that every business is unique, with its challenges
              and expectations. That's why our service is as flexible as it is
              thorough. Whether you're a bustling startup or a seasoned
              corporation, we curate our cleaning strategies to fit your needs.
              This ensures that your workspace not only shines but also supports
              the well-being and efficiency of your team.
            </p>
          </div>

          <div className="flex flex-col lg:flex-row gap-12 justify-between items-center">
            <div>
              <img src={commercial2} alt="image" className="rounded-xl" />
            </div>
            <p className="lg:max-w-xl text-xl md:text-2xl">
              By choosing us, you are opting for a clean and inspired workspace.
              You are making a statement of excellence to your clients and
              providing a nurturing environment for your employees. Our
              commitment to quality, sustainability, and tailored solutions sets
              us apart as leaders in commercial cleaning.
            </p>
          </div>
        </section>
      </Services>
    </>
  );
};

export default Commercial;
