import image from "../assets/images/image.png";
import chipper from "../assets/svgs/chipper.svg";
import dominos from "../assets/svgs/dominos.svg";
import mtn from "../assets/svgs/mtn.svg";
import piggyvest from "../assets/svgs/piggyvest.svg";
import cleaning from "../assets/svgs/cleaning.svg";

const Home = () => {
  return (
    <div className="font-lato">
      <section className="hero min-h-screen text-white p-5">
        <div className="container">
          <h1 className="text-5xl max-w-2xl mb-5">
            Step into a World of Immaculate Luxury with Platinum Beam Concept
            Ltd.
          </h1>
          <p className="text-2xl max-w-2xl mb-8">
            It's not about routines; it's about transforming your space into a
            haven of pristine beauty. Discover a cleaning service that cares
            about the details as much as you do.
          </p>
          <button>Book Now</button>
        </div>
      </section>

      <section className="p-5 py-20 container">
        <p className="text-center text-secondary text-3xl mb-8">Trusted by</p>
        <div className="flex max-w-4xl mx-auto justify-between gap-5 flex-wrap items-center">
          <img src={mtn} alt="" />
          <img src={piggyvest} alt="" />
          <img src={chipper} alt="" />
          <img src={dominos} alt="" />
        </div>
      </section>

      <section className="p-5 py-24 container flex justify-between items-center">
        <div>
          <img src={image} alt="" />
        </div>
        <div>
          <h3 className="text-secondary text-6xl mb-4 font-bold">
            Professional Cleaning Services
          </h3>
          <p className="text-2xl mb-10">
            Get in touch with us today to learn how our team can help you clean
            and de-clutter. Choose from any of our three cleaning plans designed
            to cater to your lifestyle.
          </p>
          <button>Book Now</button>
        </div>
      </section>

      <section className="container p-5 py-36">
        <h3 className="text-secondary text-6xl mb-6 font-bold text-center">
          Our Services
        </h3>
        <p className="text-2xl mb-10 text-center max-w-5xl">
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
        </div>
      </section>

      <section className="container p-5 py-36">
        <h3 className="text-secondary text-6xl mb-6 font-bold text-center">
          Why Choose Us
        </h3>
        <p className="text-2xl mb-10 text-center max-w-5xl">
          Setting the Standard for Excellence
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-5 gap-y-20 justify-between">
          <div className="text-center">
            <img src={cleaning} alt="" className="mx-auto" />
            <h4 className="text-secondary text-3xl my-2 font-bold">
              Luxurious Experience
            </h4>
            <p className="text-2xl mb-10 max-w-5xl">
              We turn cleaning into a lavish affair, setting new standards in
              the industry.
            </p>
          </div>

          <div className="text-center">
            <img src={cleaning} alt="" className="mx-auto" />
            <h4 className="text-secondary text-3xl my-2 font-bold">
              Luxurious Experience
            </h4>
            <p className="text-2xl mb-10 max-w-5xl">
              We turn cleaning into a lavish affair, setting new standards in
              the industry.
            </p>
          </div>

          <div className="text-center">
            <img src={cleaning} alt="" className="mx-auto" />
            <h4 className="text-secondary text-3xl my-2 font-bold">
              Luxurious Experience
            </h4>
            <p className="text-2xl mb-10 max-w-5xl">
              We turn cleaning into a lavish affair, setting new standards in
              the industry.
            </p>
          </div>

          <div className="text-center">
            <img src={cleaning} alt="" className="mx-auto" />
            <h4 className="text-secondary text-3xl my-2 font-bold">
              Luxurious Experience
            </h4>
            <p className="text-2xl mb-10 max-w-5xl">
              We turn cleaning into a lavish affair, setting new standards in
              the industry.
            </p>
          </div>
        </div>
      </section>

      <section className="p-5 py-24 container flex justify-between items-center">
        <div>
          <img src={image} alt="" />
        </div>
        <div>
          <h3 className="text-secondary text-6xl mb-4 font-bold">
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
          <button>Book Now</button>
        </div>
      </section>
    </div>
  );
};

export default Home;
