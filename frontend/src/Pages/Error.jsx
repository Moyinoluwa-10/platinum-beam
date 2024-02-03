// components
import Button from "../Components/Button";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import ScrollToTop from "../Components/ScrollToTop";

// images
import error from "../assets/images/404.png";

const Error = () => {
  return (
    <>
      <ScrollToTop />

      <section className="bg-[#EDBD3D14]">
        <Header />
        <div className="container p-5 py-24 flex flex-col lg:flex-row justify-between items-center gap-12">
          <div className="lg:max-w-xl">
            <h3 className="text-tertiary text-4xl md:text-5xl mb-4 font-pt-bold">
              Ooops....
            </h3>
            <h4 className="text-tertiary text-3xl mb-4 font-pt-bold">
              Page Not Found
            </h4>
            <p className="text-xl md:text-2xl mb-10 text-gray-500">
              Page is not found. Please click the button below to go back.
            </p>
            <div className="text-2xl">
              <Button linkAddress={"/"}>
                <span className="px-3 py-1 inline-block">Back to Home</span>{" "}
              </Button>
            </div>
          </div>
          <div>
            <img src={error} alt="image" className="rounded-xl" />
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Error;
