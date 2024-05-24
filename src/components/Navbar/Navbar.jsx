import React, { useState } from "react";
import { Link } from "react-router-dom";
import NavLinks from "./NavLinks";
import "./Navbar.css";
import { FaUserCircle } from "react-icons/fa";
import { FaCartArrowDown } from "react-icons/fa6";
import { MdMenuOpen } from "react-icons/md";
import { RiMenuUnfold3Line2 } from "react-icons/ri";
import { GoChevronDown } from "react-icons/go";
import { GoChevronUp } from "react-icons/go";
import Logo from "../../../src/components/assests/img/logo.jpeg";


const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [showdropdown, setShowdropdown] = useState(false);
  const [showdropdownto, setShowdropdownto] = useState(false);
  // const [showdropdownsmall, setShowdropdownsmall] = useState(false);

  return (
    <>
      <header>
        {/* top heading section */}

        <div className="top-banner p-2">
          <p className="text-center text-md">
            Welcome to <strong>Bioplentypeps</strong>
          </p>
        </div>

        {/* Navbar Design with function */}

        <nav className="bg-white shadow-lg border">
          <div className="flex items-center font-medium justify-around md:flex-col lg:flex-row">
            <div className="z-50 md:w-auto w-full flex justify-between">
              <img
                src={Logo}
                alt="logo"
                className="md:cursor-pointer h-28"
              />
              <div
                className="text-2xl md:hidden cursor-pointer"
                onClick={() => setOpen(!open)}
              >
                {open ? <RiMenuUnfold3Line2 /> : <MdMenuOpen />}
              </div>
            </div>

            <ul className="md:flex hidden uppercase items-center gap-1 font-[Poppins]">
              <li>
                <Link
                  to="/"
                  className="py-7 px-3 inline-block text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-orange-500 md:p-0 md:w-auto dark:text-white md:dark:hover:text-blue-500 dark:focus:text-white dark:hover:bg-gray-700 md:dark:hover:bg-transparent hover:scale-110 transition duration-500"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link to="/" className="py-7 px-3 inline-block text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-orange-500 md:w-auto dark:text-white md:dark:hover:text-blue-500 dark:focus:text-white dark:hover:bg-gray-700 md:dark:hover:bg-transparent hover:scale-110 transition duration-500">
                  About
                </Link>
              </li>

              <li>
                <button
                  id="dropdownNavbarLink"
                  onClick={() => setShowdropdown(!showdropdown)}
                  data-dropdown-toggle="dropdownNavbar"
                  className="flex items-center justify-between w-full py-2 px-3 text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-orange-500 md:p-0 md:w-auto dark:text-white md:dark:hover:text-blue-500 dark:focus:text-white dark:hover:bg-gray-700 md:dark:hover:bg-transparent hover:scale-110 transition duration-500"
                >
                  Products
                  {showdropdown ? <GoChevronUp className="for-size-of-icons"/> : <GoChevronDown className="for-size-of-icons"/>} 
                </button>
                {/* Dropdown menu */}
                <div
                  id="dropdownNavbar"
                  className={`z-10 ${
                    showdropdown ? "" : "hidden"
                  } absolute font-normal bg-white mt-5 divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600`}
                >
                  <ul
                    className="py-2 text-sm text-gray-700 dark:text-gray-200"
                    aria-labelledby="dropdownLargeButton"
                  >
                    <li>
                      <NavLinks />
                    </li>
                  </ul>
                </div>
              </li>

              {/* multiple dropdown */}
              {/* <NavLinks /> */}
              {/* multiple dropdown */}

              <li>
                <Link to="/" className="py-7 px-3 inline-block text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-orange-500 md:w-auto dark:text-white md:dark:hover:text-blue-500 dark:focus:text-white dark:hover:bg-gray-700 md:dark:hover:bg-transparent hover:scale-110 transition duration-500">
                  Testimonials
                </Link>
              </li>
              <li>
                <Link to="/" className="py-7 px-3 inline-block text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-orange-500 md:w-auto dark:text-white md:dark:hover:text-blue-500 dark:focus:text-white dark:hover:bg-gray-700 md:dark:hover:bg-transparent hover:scale-110 transition duration-500">
                  Contact us
                </Link>
              </li>
              <li>
                <Link to="/" className="py-7 px-3 inline-block text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-orange-500 md:w-auto dark:text-white md:dark:hover:text-blue-500 dark:focus:text-white dark:hover:bg-gray-700 md:dark:hover:bg-transparent hover:scale-110 transition duration-500">
                  <div className="flex items-center justify-center gap-2">
                    <FaUserCircle className="for-logo-cart" />
                    <p>Sign in</p>
                  </div>
                </Link>
              </li>
              <li>
                <Link to="/" className="py-7 px-3 inline-block text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-orange-500 md:w-auto dark:text-white md:dark:hover:text-blue-500 dark:focus:text-white dark:hover:bg-gray-700 md:dark:hover:bg-transparent hover:scale-110 transition duration-500">
                  <div className=" flex items-center justify-center gap-2">
                    <FaCartArrowDown className="for-logo-cart" />
                    <p>My Cart</p>
                  </div>
                </Link>
              </li>
            </ul>

            {/* Mobile nav */}
            <ul
              className={`
        md:hidden bg-white fixed w-full gap-1 top-0 overflow-y-auto bottom-0 py-0 pl-4
        duration-500 ${open ? "left-0" : "left-[-100%]"}
        `}
            >
              <li className="mt-32 text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-orange-500 md:p-0 md:w-auto dark:text-white md:dark:hover:text-blue-500 dark:focus:text-white dark:hover:bg-gray-700 md:dark:hover:bg-transparent hover:scale-105 transition duration-500">
                <Link to="/" className="py-2 px-3 inline-block">
                  Home
                </Link>
              </li>
              <li className="text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-orange-500 md:p-0 md:w-auto dark:text-white md:dark:hover:text-blue-500 dark:focus:text-white dark:hover:bg-gray-700 md:dark:hover:bg-transparent hover:scale-105 transition duration-500">
                <Link to="/" className="px-3 py-2 inline-block">
                  About
                </Link>
              </li>
              {/* products */}
              {/* <NavLinks /> */}

              <li>
                <button
                  id="dropdownNavbarLink"
                  onClick={() => setShowdropdown(!showdropdown)}
                  data-dropdown-toggle="dropdownNavbar"
                  className="flex items-center justify-between w-full py-2 px-3 text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto dark:text-white md:dark:hover:text-blue-500 dark:focus:text-white dark:hover:bg-gray-700 md:dark:hover:bg-transparent hover:scale-105 transition duration-500"
                >
                  Products
                  <svg
                    className="w-2.5 h-2.5 ms-2.5"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 10 6"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="m1 1 4 4 4-4"
                    />
                  </svg>
                </button>
                {/* Dropdown menu */}
                <div
                  id="dropdownNavbar"
                  className={`z-10 ${
                    showdropdown ? "" : "hidden"
                  } absolute font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600`}
                >
                  <ul
                    className="py-2 text-sm text-gray-700 dark:text-gray-200"
                    aria-labelledby="dropdownLargeButton"
                  >
                    <li>
                      <NavLinks />
                    </li>
                  </ul>
                </div>
              </li>

              <li className="text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-orange-500 md:p-0 md:w-auto dark:text-white md:dark:hover:text-blue-500 dark:focus:text-white dark:hover:bg-gray-700 md:dark:hover:bg-transparent hover:scale-105 transition duration-500">
                <Link to="/" className="py-2 px-3 inline-block">
                  Testimonials
                </Link>
              </li>
              <li className="text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-orange-500 md:p-0 md:w-auto dark:text-white md:dark:hover:text-blue-500 dark:focus:text-white dark:hover:bg-gray-700 md:dark:hover:bg-transparent hover:scale-105 transition duration-500">
                <Link to="/" className="py-2 px-3 inline-block">
                  Contact us
                </Link>
              </li>
              <li className="text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-orange-500 md:p-0 md:w-auto dark:text-white md:dark:hover:text-blue-500 dark:focus:text-white dark:hover:bg-gray-700 md:dark:hover:bg-transparent hover:scale-105 transition duration-500">
                <Link to="/" className="py-2 px-3 inline-block">
                  <div className="flex items-center justify-center gap-2">
                    <FaUserCircle className="for-logo-cart" />
                    <p>Sign in</p>
                  </div>
                </Link>
              </li>
              <li className="text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-orange-500 md:p-0 md:w-auto dark:text-white md:dark:hover:text-blue-500 dark:focus:text-white dark:hover:bg-gray-700 md:dark:hover:bg-transparent hover:scale-105 transition duration-500">
                <Link to="/" className="py-2 px-3 inline-block">
                  <div className=" flex items-center justify-center gap-2">
                    <FaCartArrowDown className="for-logo-cart" />
                    <p>My Cart</p>
                  </div>
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
