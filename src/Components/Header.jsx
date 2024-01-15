import { Link } from "react-router-dom";
import logo from "../assets/images/logo.png";

const Header = () => {
  return (
    <header className="bg-white text-black md:container rounded-b-[32px] flex items-center justify-between py-5 px-10 sm:px-24">
      <div>
        <img src={logo} alt="logo" className="w-10" />
      </div>
      <ul className="list-none items-center gap-6 uppercase font-bold lg:flex hidden">
        <li>
          <Link to={"/"}>Home</Link>
        </li>
        <li>
          <Link to={"/about"}>About Us</Link>
        </li>
        <li>
          <Link to={"/services"}>Our Services</Link>
        </li>
        <li>
          <Link to={"/contact"}>Contact Us</Link>
        </li>
      </ul>

      <div className="lg:block hidden">
        <Link
          to={"/book"}
          className="uppercase py-2 px-4 bg-primary rounded-2xl text-white inline-block"
        >
          Book Now
        </Link>
      </div>

      <div className="flex flex-col gap-1 lg:hidden cursor-pointer">
        <span className="block w-6 h-1 bg-black"></span>
        <span className="block w-6 h-1 bg-black"></span>
        <span className="block w-6 h-1 bg-black"></span>
      </div>
    </header>
  );
};

export default Header;
