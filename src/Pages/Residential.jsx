// react
import { Link } from "react-router-dom";

// components
import Services from "../Components/Services/Services";
import Hero from "../Components/Hero";

// images
import bgImg from "../assets/images/bg-1.png";

const Residential = () => {
  return (
    <>
      <Hero
        bgImg={bgImg}
        pageTitle={"Residential"}
        pageText={"Basic and deep cleanings tailored to your taste"}
      />

      <Services>
        <section className="container p-5 py-20 grid md:grid-cols-2 max-w-6xl mx-auto gap-10 ">
          <div>
            <h3 className="text-2xl font-pt-bold mb-2 uppercase">Kitchen</h3>
            <p className="text-xl">
              Wipe down table legs, chairs, barstools. <br />
              Wipe down cabinet exterior. <br />
              Wash under sink by garbage.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-pt-bold mb-2 uppercase">Bedroom</h3>
            <p className="text-xl">
              Quick tidy & pick up. <br />
              Dust all surfaces throughout home. <br />
              Make beds.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-pt-bold mb-2 uppercase">Bathroom</h3>
            <p className="text-xl">
              Wipe-wash-polish sinks, tub/shower. <br />
              Wipe-wash-polish toilets, base & bowl. <br />
              Clean mirrors. <br />
              Wipe down cabinet exterior. <br />
              Polish all chrome surfaces. <br />
              Wipe down baseboards.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-pt-bold mb-2 uppercase">
              Entire home
            </h3>
            <p className="text-xl">
              Quick tidy & pick up dust all surfaces throughout home. <br />
              Wet wipe all surfaces throughout home. <br />
              Sanitize door knobs & light switches. <br />
              Empty all garbage. <br />
              Sweep/Vacuum & wash all floors. <br /> <br />
              PLUS: <br />
              Wipe down windowsills. <br />
              Spot wash interior windows.
            </p>
          </div>
        </section>

        <section className="container p-5 py-10 text-center">
          <h3 className="text-2xl font-pt-bold mb-1 uppercase">
            Cleaning options
          </h3>
          <p className="text-xl mb-5">Enhance your cleaning experience </p>
          <div className="flex items-center justify-center gap-10 text-primary font-pt-bold">
            <Link to={"./basic"} className="uppercase service-link text-xl">
              Basic Cleaning
            </Link>
            <Link to={"./deep"} className="uppercase service-link text-xl">
              Deep Cleaning
            </Link>
          </div>
        </section>
      </Services>
    </>
  );
};

export default Residential;
