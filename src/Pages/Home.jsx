import image from "../assets/images/image.png";
import chipper from "../assets/svgs/chipper.svg";
import dominos from "../assets/svgs/dominos.svg";
import mtn from "../assets/svgs/mtn.svg";
import piggyvest from "../assets/svgs/piggyvest.svg";
import attention from "../assets/svgs/attention.svg";
import luxurious from "../assets/svgs/luxurious.svg";
import proficient from "../assets/svgs/proficient.svg";
import superior from "../assets/svgs/superior.svg";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="font-lato">
      <section className="hero min-h-screen text-white">
        <Header />
        <div className="p-5 pb-20 pt-[10%]">
          <div className="container">
            <h1 className="text-5xl max-w-2xl mb-5">
              Step into a World of Immaculate Luxury with Platinum Beam Concept
              Ltd.
            </h1>
            <p className="text-2xl max-w-2xl mb-9">
              It's not about routines; it's about transforming your space into a
              haven of pristine beauty. Discover a cleaning service that cares
              about the details as much as you do.
            </p>
            <div>
              <Link
                to={"/book"}
                className="uppercase p-7 bg-primary rounded-2xl text-white inline-block"
              >
                Book Now
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="p-5 py-20 container">
        <p className="text-center text-secondary text-3xl mb-8">Trusted by</p>
        <div className="flex max-w-4xl mx-auto justify-between gap-5 flex-wrap items-center">
          <img src={mtn} alt="mtn-logo" />
          <img src={piggyvest} alt="piggyvest-logo" />
          <img src={chipper} alt="chipper-logo" />
          <img src={dominos} alt="dominos-logo" />
        </div>
      </section>

      <section className="p-5 py-24 container flex justify-between items-center gap-12">
        <div>
          <img src={image} alt="" />
        </div>
        <div className="max-w-xl">
          <h3 className="text-secondary text-6xl mb-4 font-bold">
            Professional Cleaning Services
          </h3>
          <p className="text-2xl mb-10">
            Get in touch with us today to learn how our team can help you clean
            and de-clutter. Choose from any of our three cleaning plans designed
            to cater to your lifestyle.
          </p>
          <div>
            <Link
              to={"/book"}
              className="uppercase p-7 bg-primary rounded-2xl text-white inline-block"
            >
              Book Now
            </Link>
          </div>
        </div>
      </section>

      <section className="container p-5 py-36">
        <h3 className="text-secondary text-6xl mb-6 font-bold text-center">
          Our Services
        </h3>
        <p className="text-2xl mb-16 text-center max-w-5xl mx-auto">
          Explore our diverse range of services designed to cater to your
          specific needs. Whether you're a corporate office, an industrial
          giant, or a cozy residence, our skilled team ensures each space is
          treated with the utmost care and attention to detail.
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-5 gap-y-20 justify-between">
          <div>
            <img src={image} alt="" />
            <h4 className="text-secondary text-3xl mb-2 font-bold">
              Corporate Cleaning
            </h4>
            <p className="text-2xl mb-10 max-w-5xl">
              Elevate your workspace with our premium corporate cleaning
              services.
            </p>
            <p>
              <a href="" className="text-primary text-3xl">
                Let's do this
              </a>
            </p>
          </div>

          <div>
            <img src={image} alt="" />
            <h4 className="text-secondary text-3xl mb-2 font-bold">
              Industrial Maintenance
            </h4>
            <p className="text-2xl mb-10 max-w-5xl">
              We keep your industrial facilities spotless and operational.
            </p>
            <p>
              <a href="" className="text-primary text-3xl">
                Let's do this
              </a>
            </p>
          </div>

          <div>
            <img src={image} alt="" />
            <h4 className="text-secondary text-3xl mb-2 font-bold">
              Commercial Spaces
            </h4>
            <p className="text-2xl mb-10 max-w-5xl">Commercial Spaces</p>
            <p>
              <a href="" className="text-primary text-3xl">
                Let's do this
              </a>
            </p>
          </div>

          <div className="hidden lg:block"></div>

          <div>
            <img src={image} alt="" />
            <h4 className="text-secondary text-3xl mb-2 font-bold">
              Residential Bliss
            </h4>
            <p className="text-2xl mb-10 max-w-5xl">
              Experience luxury in the comfort of your home with our residential
              cleaning services.
            </p>
            <p>
              <a href="" className="text-primary text-3xl">
                Let's do this
              </a>
            </p>
          </div>
        </div>
      </section>

      <section className="container p-5 py-36">
        <h3 className="text-secondary text-6xl mb-6 font-bold text-center">
          Why Choose Us
        </h3>
        <p className="text-2xl mb-10 text-center max-w-5xl mx-auto">
          Setting the Standard for Excellence
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-5 gap-y-20 justify-evenly content-evenly items-center justify-items-end">
          <div className="text-center">
            <img
              src={luxurious}
              alt="cleaning-service-logo"
              className="mx-auto"
            />
            <h4 className="text-secondary text-3xl my-2 font-bold">
              Luxurious Experience
            </h4>
            <p className="text-2xl mb-10 max-w-5xl">
              We turn cleaning into a lavish affair, setting new standards in
              the industry.
            </p>
          </div>

          <div className="text-center">
            <img src={attention} alt="details-logo" className="mx-auto" />
            <h4 className="text-secondary text-3xl my-2 font-bold">
              Attention to Detail
            </h4>
            <p className="text-2xl mb-10 max-w-5xl">
              Our commitment to detail ensures every nook and cranny is
              spotless.
            </p>
          </div>

          <div className="text-center">
            <img src={proficient} alt="dry-cleaning-logo" className="mx-auto" />
            <h4 className="text-secondary text-3xl my-2 font-bold">
              Proficient Skills
            </h4>
            <p className="text-2xl mb-10 max-w-5xl">
              Our skilled team brings expertise and efficiency to every cleaning
              task.
            </p>
          </div>

          <div className="hidden lg:block"></div>

          <div className="text-center mx-auto">
            <img
              src={superior}
              alt="cleaning-bucket-logo"
              className="mx-auto"
            />
            <h4 className="text-secondary text-3xl my-2 font-bold">
              Superior Standards
            </h4>
            <p className="text-2xl mb-10 max-w-5xl">
              We pride ourselves on maintaining the highest standards in the
              cleaning industry.
            </p>
          </div>
        </div>
      </section>

      <section className="p-5 py-24 container flex gap-12 justify-between items-center">
        <div>
          <img src={image} alt="" />
        </div>
        <div className="max-w-xl">
          <h3 className="text-secondary text-6xl mb-4 font-bold max-w-md">
            Let's Transform Your Space
          </h3>
          <p className="text-2xl mb-10">
            Ready to experience the Platinum Beam difference? Contact us today
            for a consultation and let's embark on the journey to elevate your
            space to new heights of cleanliness and luxury.Get in touch with us
            today to learn how our team can help you clean and de-clutter.
            Choose from any of our three cleaning plans designed to cater to
            your lifestyle.
          </p>
          <div>
            <Link
              to={"/book"}
              className="uppercase p-7 bg-primary rounded-2xl text-white inline-block"
            >
              Book Now
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
