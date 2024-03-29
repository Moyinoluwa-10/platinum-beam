// react
import { Link, NavLink } from "react-router-dom";
import { FaAngleDown } from "react-icons/fa6";

// hamburger
import { Sling as Hamburger } from "hamburger-react";

// components
import Button from "./Button";

// images
import logo from "../assets/images/logo.png";
import { useState } from "react";

const Header = () => {
  const [isOpen, setOpen] = useState(false);
  const [isActive, setIsActive] = useState(false);

  const handleToggle = () => {
    setIsActive((active) => !active);
  };

  return (
    <>
      <header className="bg-white text-black md:container rounded-b-[32px] flex items-center justify-between py-5 px-10 sm:px-24 relative z-50">
        <div>
          <Link to={"/"}>
            <img src={logo} alt="logo" className="w-10" />
          </Link>
        </div>

        <ul className="list-none items-center gap-6 font-pt-bold text-xl uppercase lg:flex hidden">
          <li>
            <NavLink
              to={"/"}
              className={({ isActive }) =>
                isActive
                  ? "text-tertiary before:bg-tertiary nav-link"
                  : "nav-link"
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/about"}
              className={({ isActive }) =>
                isActive
                  ? "text-tertiary before:bg-tertiary nav-link"
                  : "nav-link"
              }
            >
              About Us
            </NavLink>
          </li>
          <li>
            <div className="relative group cursor-pointer">
              <p>Services</p>
              <div className="hidden absolute left-0 shadow-2xl z-[5] group-hover:flex flex-col bg-white capitalize min-w-[250px] border border-gray-300 font-semibold">
                <Link
                  to={"/services/residential"}
                  className="p-2 border-b hover:bg-gray-100"
                >
                  Residential
                </Link>
                <Link
                  to={"/services/commercial"}
                  className="p-2 border-b hover:bg-gray-100"
                >
                  Commercial
                </Link>
                <Link
                  to={"/services/specialized"}
                  className="p-2 border-b hover:bg-gray-100"
                >
                  Specialized
                </Link>
                <Link
                  to={"/services/horticulture"}
                  className="p-2 border-b hover:bg-gray-100"
                >
                  Horticulture & Landscape
                </Link>
              </div>
            </div>
          </li>
          <li>
            <NavLink
              to={"/contact"}
              className={({ isActive }) =>
                isActive
                  ? "text-tertiary before:bg-tertiary nav-link"
                  : "nav-link"
              }
            >
              Contact Us
            </NavLink>
          </li>
        </ul>

        <div className="lg:flex hidden text-lg">
          <Button linkAddress={"/book"}>Book Now</Button>
        </div>

        <div className="block lg:hidden">
          <Hamburger toggled={isOpen} toggle={setOpen} />
        </div>
      </header>

      <ul
        className={
          isOpen
            ? "list-none flex flex-col items-center justify-center gap-6 uppercase fixed z-20 left-0 top-0 w-full min-h-screen lg:hidden bg-[#344169] text-white pt-[88px] transition-all"
            : "list-none flex flex-col items-center justify-center gap-6 uppercase fixed z-20 left-[100%] top-0 w-full min-h-screen lg:hidden bg-[#344169] text-white pt-[88px] transition-all"
        }
      >
        <li>
          <NavLink
            to={"/"}
            className={({ isActive }) =>
              isActive ? "nav-link--2" : "nav-link--2"
            }
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to={"/about"}
            className={({ isActive }) =>
              isActive ? "nav-link--2" : "nav-link--2"
            }
          >
            About Us
          </NavLink>
        </li>
        <li>
          <div className="relative group">
            <p className="text-center cursor-pointer" onClick={handleToggle}>
              Services{" "}
              <FaAngleDown
                className={
                  isActive
                    ? "text-lg transition-all inline-block ml-1 rotate-180"
                    : "text-lg transition-all inline-block ml-1"
                }
              />
            </p>
            <div
              className={
                isActive
                  ? "flex flex-col gap-2 items-center capitalize max-h-[500px] overflow-hidden mt-3"
                  : "flex flex-col gap-2 items-center capitalize max-h-0 overflow-hidden"
              }
            >
              <Link to={"/services/residential"}>Residential</Link>
              <Link to={"/services/commercial"}>Commercial</Link>
              <Link to={"/services/specialized"}>Specialized</Link>
              <Link to={"/services/horticulture"}>
                Horticulture & Landscape
              </Link>
            </div>
          </div>
        </li>
        <li>
          <NavLink
            to={"/contact"}
            className={({ isActive }) =>
              isActive ? "nav-link--2" : "nav-link--2"
            }
          >
            Contact Us
          </NavLink>
        </li>
        <li>
          <Button linkAddress={"/book"}>Book Now</Button>
        </li>
      </ul>
    </>
  );
};

export default Header;
