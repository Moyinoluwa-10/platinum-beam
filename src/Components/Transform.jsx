// react
import { Link } from "react-router-dom";

// images
import transform from "../assets/images/transform.png";

const Transform = () => {
  return (
    <section className="p-5 pt-5 md:pt-24 pb-24 container flex flex-col lg:flex-row gap-12 justify-between items-center">
      <div>
        <img src={transform} alt="image" />
      </div>
      <div className="lg:max-w-xl">
        <h3 className="text-secondary text-4xl md:text-5xl mb-4 font-semibold lg:max-w-md">
          Let's Transform Your Space
        </h3>
        <p className="text-xl md:text-2xl mb-10">
          Ready to experience the Platinum Beam difference? Contact us today for
          a consultation and let's embark on the journey to elevate your space
          to new heights of cleanliness and luxury. Get in touch with us today
          to learn how our team can help you clean and de-clutter. Choose from
          any of our three cleaning plans designed to cater to your lifestyle.
        </p>
        <div>
          <Link
            to={"/book"}
            className="uppercase py-3 px-12 md:px-7 md:py-4 bg-primary rounded-2xl text-white inline-block"
          >
            Book Now
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Transform;
