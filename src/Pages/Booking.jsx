import BookingForm from "../Components/Booking/BookingForm";
import Footer from "../Components/Footer";
import Hero from "../Components/Hero";

// images
import bgImg from "../assets/images/bg-1.png";

const Booking = () => {
  return (
    <>
      <Hero bgImg={bgImg} pageTitle={"Booking"} />
      <section className="container p-5 py-20">
        <BookingForm />
      </section>
      <Footer />
    </>
  );
};

export default Booking;
