import { Link } from "react-router-dom";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Transform from "../Components/Transform";
import image from "../assets/images/image.png";

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

      <section className="p-5 py-24 container">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-12 mb-20">
          <div>
            <img src={image} alt="image" />
          </div>
          <div className="lg:max-w-xl">
            <h3 className="text-secondary text-2xl md:text-3xl mb-4 font-bold">
              Professional Cleaning Services
            </h3>
            <p className="text-xl md:text-2xl mb-10">
              Get in touch with us today to learn how our team can help you
              clean and de-clutter. Choose from any of our three cleaning plans
              designed to cater to your lifestyle.
            </p>
            <p>
              <a href="" className="text-primary text-xl md:text-2xl">
                Let's do this
              </a>
            </p>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row justify-between items-center gap-12 mb-20">
          <div>
            <img src={image} alt="image" />
          </div>
          <div className="lg:max-w-xl">
            <h3 className="text-secondary text-2xl md:text-3xl mb-4 font-bold">
              Professional Cleaning Services
            </h3>
            <p className="text-xl md:text-2xl mb-10">
              Get in touch with us today to learn how our team can help you
              clean and de-clutter. Choose from any of our three cleaning plans
              designed to cater to your lifestyle.
            </p>
            <p>
              <a href="" className="text-primary text-xl md:text-2xl">
                Let's do this
              </a>
            </p>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row justify-between items-center gap-12 mb-20">
          <div>
            <img src={image} alt="image" />
          </div>
          <div className="lg:max-w-xl">
            <h3 className="text-secondary text-2xl md:text-3xl mb-4 font-bold">
              Professional Cleaning Services
            </h3>
            <p className="text-xl md:text-2xl mb-10">
              Get in touch with us today to learn how our team can help you
              clean and de-clutter. Choose from any of our three cleaning plans
              designed to cater to your lifestyle.
            </p>
            <p>
              <a href="" className="text-primary text-xl md:text-2xl">
                Let's do this
              </a>
            </p>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row justify-between items-center gap-12 mb-20">
          <div>
            <img src={image} alt="image" />
          </div>
          <div className="lg:max-w-xl">
            <h3 className="text-secondary text-2xl md:text-3xl mb-4 font-bold">
              Professional Cleaning Services
            </h3>
            <p className="text-xl md:text-2xl mb-10">
              Get in touch with us today to learn how our team can help you
              clean and de-clutter. Choose from any of our three cleaning plans
              designed to cater to your lifestyle.
            </p>
            <p>
              <a href="" className="text-primary text-xl md:text-2xl">
                Let's do this
              </a>
            </p>
          </div>
        </div>
      </section>

      <section className="p-5 container">
        <div className="mb-32">
          <h3 className="text-4xl md:text-6xl mb-6 font-bold text-secondary text-center">
            Innovative Training and Consultancy
          </h3>
          <p className="text-center max-w-5xl mx-auto text-xl md:text-2xl mb-6">
            We're not just cleaning service providers; we're educators and
            innovators. Our training and consultancy services aim to empower the
            next generation of cleaning professionals, sharing our knowledge and
            expertise to elevate industry standards.
          </p>
          <img src={image} alt="" />
        </div>

        <div className="mb-32">
          <h3 className="text-4xl md:text-6xl mb-6 font-bold text-secondary text-center">
            Innovative Training and Consultancy
          </h3>
          <p className="text-center max-w-5xl mx-auto text-xl md:text-2xl mb-6">
            We're not just cleaning service providers; we're educators and
            innovators. Our training and consultancy services aim to empower the
            next generation of cleaning professionals, sharing our knowledge and
            expertise to elevate industry standards.
          </p>
          <img src={image} alt="" />
        </div>

        <div className="mb-32">
          <h3 className="text-4xl md:text-6xl mb-6 font-bold text-secondary text-center">
            Innovative Training and Consultancy
          </h3>
          <p className="text-center max-w-5xl mx-auto text-xl md:text-2xl mb-6">
            We're not just cleaning service providers; we're educators and
            innovators. Our training and consultancy services aim to empower the
            next generation of cleaning professionals, sharing our knowledge and
            expertise to elevate industry standards.
          </p>
          <img src={image} alt="" />
        </div>

        <div className="mb-32">
          <h3 className="text-4xl md:text-6xl mb-6 font-bold text-secondary text-center">
            Innovative Training and Consultancy
          </h3>
          <p className="text-center max-w-5xl mx-auto text-xl md:text-2xl mb-6">
            We're not just cleaning service providers; we're educators and
            innovators. Our training and consultancy services aim to empower the
            next generation of cleaning professionals, sharing our knowledge and
            expertise to elevate industry standards.
          </p>
          <img src={image} alt="" />
        </div>

        <div className="mb-32">
          <h3 className="text-4xl md:text-6xl mb-6 font-bold text-secondary text-center">
            Innovative Training and Consultancy
          </h3>
          <p className="text-center max-w-5xl mx-auto text-xl md:text-2xl mb-6">
            We're not just cleaning service providers; we're educators and
            innovators. Our training and consultancy services aim to empower the
            next generation of cleaning professionals, sharing our knowledge and
            expertise to elevate industry standards.
          </p>
          <img src={image} alt="" />
        </div>

        <div className="mb-32">
          <h3 className="text-4xl md:text-6xl mb-6 font-bold text-secondary text-center">
            Innovative Training and Consultancy
          </h3>
          <p className="text-center max-w-5xl mx-auto text-xl md:text-2xl mb-6">
            We're not just cleaning service providers; we're educators and
            innovators. Our training and consultancy services aim to empower the
            next generation of cleaning professionals, sharing our knowledge and
            expertise to elevate industry standards.
          </p>
          <img src={image} alt="" />
        </div>
      </section>

      <Transform />
      <Footer />
    </div>
  );
};

export default Service;
