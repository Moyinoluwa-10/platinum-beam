import { Link } from "react-router-dom";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Transform from "../Components/Transform";

const Service = () => {
  return (
    <div className="font-lato">
      <section className="hero min-h-screen text-white">
        <Header />
        <div className="p-5 pb-20 pt-[10%]">
          <div className="container">
            <h1 className="text-4xl md:text-5xl max-w-2xl mb-5">
              Step into a World of Immaculate Luxury with Platinum Beam Concept
              Ltd.
            </h1>
            <p className="text-xl md:text-2xl max-w-2xl mb-9">
              It's not about routines; it's about transforming your space into a
              haven of pristine beauty. Discover a cleaning service that cares
              about the details as much as you do.
            </p>
            <div>
              <Link
                to={"/book"}
                className="uppercase py-6 px-16 md:p-7 bg-primary rounded-2xl text-white inline-block md:text-2xl"
              >
                Book Now
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Transform />
      <Footer />
    </div>
  );
};

export default Service;
