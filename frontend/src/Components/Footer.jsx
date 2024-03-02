//react
import { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaAngleDown,
  FaInstagram,
  FaFacebook,
  FaLinkedin,
} from "react-icons/fa6";

// svgs
import issa from "../assets/svgs/issa.svg";
import cmi from "../assets/svgs/cmi.svg";

const Footer = () => {
  const [isOpen, setIsOpen] = useState(null);

  const handleClick = (id) => {
    setIsOpen((open) => (open === id ? null : id));
  };

  return (
    <footer className="bg-black text-white p-5 pt-12 py-7">
      <div className="container flex-wrap flex-col md:flex-row justify-between gap-x-10 gap-y-8 hidden md:flex">
        <div className="max-w-md">
          <h4 className="font-pt-bold mb-5 text-2xl">
            Platinum Beam Concept Ltd
          </h4>
          <p className="text-lg mb-5">
            PBC Ltd is a premium cleaning service company committed to
            transforming traditional cleaning into a luxurious experience. We
            offer support services that effectively and efficiently help
            organizations achieve their strategic and operational goals.
          </p>
          <div className="flex gap-7 flex-wrap items-center">
            <img src={issa} alt="issa-logo" className="h-20" />
            <img src={cmi} alt="cmi-logo" className="h-20" />
          </div>
        </div>

        <div>
          <h4 className="font-pt-bold mb-5 text-2xl sm:whitespace-nowrap">
            Quick Links
          </h4>
          <p className="mb-5">
            <Link to={"/"} className="footer-link">
              Home
            </Link>
          </p>
          <p className="mb-5">
            <Link to={"/about"} className="footer-link">
              About Us
            </Link>
          </p>
          <p className="mb-5">
            <Link to={"/contact"} className="footer-link">
              Contact
            </Link>
          </p>
          <p className="mb-5">
            <Link to={"/faqs"} className="footer-link">
              FAQs
            </Link>
          </p>
        </div>

        <div>
          <h4 className="font-pt-bold mb-5 text-2xl sm:whitespace-nowrap">
            Services
          </h4>
          <p className="mb-5">
            <Link to={"/services/residential"} className="footer-link">
              Residential
            </Link>
          </p>
          <p className="mb-5">
            <Link to={"/services/commercial"} className="footer-link">
              Commercial
            </Link>
          </p>
          <p className="mb-5">
            <Link to={"/services/specialized"} className="footer-link">
              Specialized
            </Link>
          </p>
          <p className="mb-5">
            <Link to={"/services/horticulture"} className="footer-link">
              Horticulture/Landscape
            </Link>
          </p>
          <p className="mb-5">
            <Link to={"/book"} className="footer-link">
              Book a service
            </Link>
          </p>
        </div>

        <div className="lg:min-w-fit">
          <h4 className="font-pt-bold mb-5 text-2xl sm:whitespace-nowrap">
            Contact Info
          </h4>
          <p className="text-lg mb-5">
            Address: <br /> Block A2, Plot 12B, Fajuyi Estate, Off Ilawe Road,
            Ado Ekiti
          </p>
          <p className="text-lg mb-5">
            <a href="mailto:info@platinumbeamconcept.com" className="footer-link">
              info@platinumbeamconcept.com
            </a>
          </p>
          <p className="text-lg mb-5">
            <a href="tel:09131704005" className="footer-link">
              09131704005
            </a>
          </p>
          <div className="flex items-center gap-5">
            <p className="relative transition-all duration-1000 hover:bottom-1">
              <a
                href="https://www.instagram.com/platinumbeamconcept"
                target="_blank"
                rel="noreferrer"
              >
                <FaInstagram className="text-2xl" />
              </a>
            </p>
            <p className="relative transition-all duration-1000 hover:bottom-1">
              <a
                href="https://www.facebook.com/profile.php?id=100094608620510"
                target="_blank"
                rel="noreferrer"
              >
                <FaFacebook className="text-2xl" />
              </a>
            </p>
            <p className="relative transition-all duration-1000 hover:bottom-1">
              <a
                href="https://www.linkedin.com/company/platinum-beam-concept-limited/about/"
                target="_blank"
                rel="noreferrer"
              >
                <FaLinkedin className="text-2xl" />
              </a>
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-5 md:hidden">
        <div className="max-w-md">
          <h4 className="font-pt-bold mb-5 text-2xl">
            Platinum Beam Concept Ltd
          </h4>
          <p className="text-lg mb-7">
            PBC Ltd is a premium cleaning service company committed to
            transforming traditional cleaning into a luxurious experience. We
            offer support services that effectively and efficiently help
            organizations achieve their strategic and operational goals.
          </p>
          <p className="text-2xl mb-2">Associated With</p>
          <div className="flex gap-7 flex-wrap items-center">
            <img src={issa} alt="issa-logo" className="h-20" />
            <img src={cmi} alt="cmi-logo" className="h-20" />
          </div>
        </div>

        <div>
          <h4
            className="font-pt-bold text-2xl flex items-center gap-2 cursor-pointer"
            onClick={() => handleClick("quick")}
          >
            Quick Links{" "}
            <FaAngleDown
              className={
                isOpen === "quick"
                  ? "text-lg transition-all rotate-180"
                  : "text-lg transition-all"
              }
            />
          </h4>
          <div
            className={
              isOpen === "quick"
                ? "max-h-[500px] overflow-hidden transition-all duration-300 mt-5"
                : "max-h-0 overflow-hidden transition-all duration-300 mt-5"
            }
          >
            <p className="mb-5">
              <Link to={"/"} className="footer-link">
                Home
              </Link>
            </p>
            <p className="mb-5">
              <Link to={"/about"} className="footer-link">
                About Us
              </Link>
            </p>
            <p className="mb-5">
              <Link to={"/contact"} className="footer-link">
                Contact
              </Link>
            </p>
            <p className="mb-5">
              <Link to={"/faqs"} className="footer-link">
                FAQs
              </Link>
            </p>
          </div>
        </div>

        <div>
          <h4
            className="font-pt-bold text-2xl flex items-center gap-2 cursor-pointer"
            onClick={() => handleClick("services")}
          >
            Services{" "}
            <FaAngleDown
              className={
                isOpen === "services"
                  ? "text-lg transition-all rotate-180"
                  : "text-lg transition-all"
              }
            />
          </h4>
          <div
            className={
              isOpen === "services"
                ? "max-h-[500px] overflow-hidden transition-all duration-300 mt-5"
                : "max-h-0 overflow-hidden transition-all duration-300 mt-5"
            }
          >
            <p className="mb-5">
              <Link to={"/services/residential"} className="footer-link">
                Residential
              </Link>
            </p>
            <p className="mb-5">
              <Link to={"/services/commercial"} className="footer-link">
                Commercial
              </Link>
            </p>
            <p className="mb-5">
              <Link to={"/services/specialized"} className="footer-link">
                Specialized
              </Link>
            </p>
            <p className="mb-5">
              <Link to={"/services/horticulture"} className="footer-link">
                Horticulture/Landscape
              </Link>
            </p>
            <p className="mb-5">
              <Link to={"/book"} className="footer-link">
                Book a service
              </Link>
            </p>
          </div>
        </div>

        <div>
          <h4
            className="font-pt-bold text-2xl flex items-center gap-2 cursor-pointer"
            onClick={() => handleClick("contact")}
          >
            Contact Info{" "}
            <FaAngleDown
              className={
                isOpen === "contact"
                  ? "text-lg transition-all rotate-180"
                  : "text-lg transition-all"
              }
            />
          </h4>
          <div
            className={
              isOpen === "contact"
                ? "max-h-[500px] overflow-hidden transition-all duration-300 mt-5"
                : "max-h-0 overflow-hidden transition-all duration-300 mt-5"
            }
          >
            <p className="mb-5">
              Address: <br /> Block A2, Plot 12B, Fajuyi Estate, Off Ilawe Road,
              Ado Ekiti
            </p>
            <p className="mb-5">
              <a
                href="mailto:info@platinumbeamconcept.com"
                className="footer-link"
              >
                info@platinumbeamconcept.com
              </a>
            </p>
            <p className="mb-5">
              <a href="tel:09131704005" className="footer-link">
                09131704005
              </a>
            </p>
          </div>
        </div>

        <div className="flex items-center gap-5 mt-10">
          <p className="relative transition-all duration-1000 hover:bottom-1">
            <a
              href="https://www.instagram.com/platinumbeamconcept"
              target="_blank"
              rel="noreferrer"
            >
              <FaInstagram className="text-2xl" />
            </a>
          </p>
          <p className="relative transition-all duration-1000 hover:bottom-1">
            <a
              href="https://www.facebook.com/profile.php?id=100094608620510"
              target="_blank"
              rel="noreferrer"
            >
              <FaFacebook className="text-2xl" />
            </a>
          </p>
          <p className="relative transition-all duration-1000 hover:bottom-1">
            <a
              href="https://www.linkedin.com/company/platinum-beam-concept-limited/about/"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin className="text-2xl" />
            </a>
          </p>
        </div>
      </div>

      <p className="text-center text-lg mt-10">
        &copy; {new Date().getFullYear()} Platinum Beam Concept Ltd
      </p>
    </footer>
  );
};

export default Footer;
