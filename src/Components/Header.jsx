import { Link } from "react-router-dom";
import logo from "../assets/images/logo.png";

const Header = () => {
  return (
    <header className="bg-white text-black md:container rounded-b-[32px] flex items-center justify-between pr-10 sm:pr-24">
      <div className="max-w-xs h-24">
        <img
          src={logo}
          alt="logo"
          className="h-full relative -left-7 sm:left-0"
        />
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
          className="uppercase p-4 bg-primary rounded-2xl text-white"
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
