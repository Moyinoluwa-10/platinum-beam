// components
import Button from "./Button";

// images
import transform from "../assets/images/transform.png";

const Transform = () => {
  return (
    <section className="p-5 pt-5 md:pt-24 pb-24 container flex flex-col lg:flex-row gap-12 justify-between items-center">
      <div>
        <img src={transform} alt="image" className="rounded-xl" />
      </div>
      <div className="lg:max-w-xl">
        <h3 className="text-secondary text-4xl md:text-5xl mb-4 font-semibold lg:max-w-md">
          Let's Transform Your Space
        </h3>
        <p className="text-xl md:text-2xl mb-10">
          Ready to experience the Platinum Beam difference? Contact us today for
          a consultation and let's embark on the journey to elevate your space
          to new heights of cleanliness and luxury.
        </p>
        <div>
          <Button linkAddress={"/book"}>Book Now</Button>
        </div>
      </div>
    </section>
  );
};

export default Transform;
