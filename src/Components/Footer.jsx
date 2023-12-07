import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-black text-white p-5 pt-12 py-7">
      <div className="container flex flex-wrap flex-col md:flex-row justify-between gap-x-10 gap-y-8">
        <div className="max-w-md">
          <h4 className="font-bold mb-5 text-2xl">Platinum Beam Concept Ltd</h4>
          <p className="text-lg">
            PBC Ltd is a premium cleaning service company committed to
            transforming traditional cleaning into a luxurious experience. We
            offer support services that effectively and efficiently help
            organizations achieve their strategic and operational goals.
          </p>
        </div>

        <div>
          <h4 className="font-bold mb-5 text-2xl sm:whitespace-nowrap">
            Quick Links
          </h4>
          <p className="mb-5">
            <Link to={"/"} className="text-base">
              Home
            </Link>
          </p>
          <p className="mb-5">
            <Link to={"/about"} className="text-base">
              About Us
            </Link>
          </p>
          <p className="mb-5">
            <Link to={"/contact"} className="text-base">
              Contact
            </Link>
          </p>
          <p className="mb-5">
            <Link to={"/services"} className="text-base">
              Our Services
            </Link>
          </p>
        </div>

        <div>
          <h4 className="font-bold mb-5 text-2xl sm:whitespace-nowrap">
            Services
          </h4>
          <p className="mb-5">
            <Link to={"/book"} className="text-base">
              Book a service
            </Link>
          </p>
        </div>

        <div className="lg:min-w-fit">
          <h4 className="font-bold mb-5 text-2xl sm:whitespace-nowrap">
            Contact Info
          </h4>
          <p className="text-lg mb-5">
            Address: <br /> Lekki Phase 1, Lekki, Lagos 101245, NG
          </p>
          <p className="text-lg mb-5">08131014376</p>
          <div className="flex items-center gap-5">
            <p>
              <a href="#">
                <i className="fa-brands fa-instagram text-2xl"></i>
              </a>
            </p>
            <p>
              <a href="#">
                <i className="fa-brands fa-facebook text-2xl"></i>
              </a>
            </p>
            <p>
              <a href="#">
                <i className="fa-brands fa-x-twitter text-2xl"></i>
              </a>
            </p>
          </div>
        </div>
      </div>

      <p className="text-center text-lg mt-10">
        &copy; {new Date().getFullYear()} Platinum Beam Concept Ltd
      </p>
    </footer>
  );
};

export default Footer;
